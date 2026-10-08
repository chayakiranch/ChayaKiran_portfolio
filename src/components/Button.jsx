// Single reusable Button used across the whole portfolio.
//
// Variants
//   primary   → the real React Bits <SpecularButton /> (WebGL rim light that follows the cursor).
//               CHANGED: previously a hand-made imitation. Main CTAs only.
//   secondary → subtle outlined button with a soft spotlight on hover (21st.dev-inspired).
//   link      → text link with arrow nudge.
//
// It renders the right element automatically:
//   `to`   → react-router NavLink   (internal route)
//   `href` → <a>                    (add `external` for target="_blank" + rel)
//   neither→ <button>               (type defaults to "button"; pass type="submit" for forms)
// Every other prop (onClick, download, aria-*, etc.) is passed straight through,
// so existing handlers and behavior are preserved.
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import SpecularButton from "./SpecularButton"; // NEW

// → internal navigation, ↗ opens a new tab / leaves the page, ← back, ↓ download
const ARROWS = { right: "→", "up-right": "↗", left: "←", down: "↓" };

// Secondary-variant sizes (the primary variant sizes live in SpecularButton.css and match these)
const SIZES = {
  lg: "px-[26px] py-3.5 text-[0.95rem]", // hero / page-level CTAs
  md: "px-4 py-3 text-sm sm:px-5",       // default
  sm: "px-3.5 py-2.5 text-sm sm:px-4",   // compact (modals, side-by-side pairs)
};

// NEW: touch screens have no cursor to steer the light, so the specular sweep stays on there
// (slow idle rotation). Respects prefers-reduced-motion.
const canAutoAnimate = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    arrow, // "right" | "up-right" | "left" | "down"
    icon: Icon, // optional lucide icon shown before the label
    to,
    href,
    external = false,
    fullWidth = false,
    className = "",
    children,
    onPointerMove,
    onPointerLeave,
    ...rest
  },
  ref
) {
  const isLink = variant === "link";
  const isPrimary = variant === "primary";

  const content = (
    <>
      {Icon && <Icon size={isLink ? 15 : 16} aria-hidden="true" className="shrink-0" />}
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className={`btn__arrow btn__arrow--${arrow}`}>
          {ARROWS[arrow]}
        </span>
      )}
    </>
  );

  // ---------- PRIMARY → React Bits SpecularButton ----------
  if (isPrimary) {
    const as = to ? NavLink : href ? "a" : "button";
    const target = href && external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const dest = to ? { to } : href ? { href } : {};
    return (
      <SpecularButton
        as={as}
        {...dest}
        {...target}
        {...rest}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        size={size}
        radius={999}                 // clamps to a full pill
        tint="#4fd1c5"               // existing accent colour as the solid fill
        tintOpacity={1}
        textColor="#06201d"          // existing dark-on-accent text (high contrast)
        lineColor="#ffffff"          // the moving specular highlight
        baseColor="#2b6f68"          // existing accent-dim as the edge stroke
        intensity={1.6}              // brighter rim so it reads against the solid accent fill
        thickness={2}
        autoAnimate={canAutoAnimate()}
        className={`btn-specular${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`}
      >
        {content}
      </SpecularButton>
    );
  }

  // ---------- SECONDARY / LINK ----------
  // Spotlight follows the pointer via CSS variables (no React re-renders).
  const handlePointerMove = (e) => {
    if (!isLink) {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
    onPointerMove?.(e);
  };
  const handlePointerLeave = (e) => {
    if (!isLink) {
      e.currentTarget.style.removeProperty("--mx");
      e.currentTarget.style.removeProperty("--my");
    }
    onPointerLeave?.(e);
  };

  const classes = [
    isLink ? "btn-link glow-navlink" : `btn btn-${variant} ${SIZES[size] || SIZES.md}`,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const common = {
    ref,
    className: classes,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    ...rest,
  };

  if (to) {
    return (
      <NavLink to={to} {...common}>
        {content}
      </NavLink>
    );
  }
  if (href) {
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} {...ext} {...common}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" {...common}>
      {content}
    </button>
  );
});

export default Button;
