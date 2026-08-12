import { useState, useEffect, useRef } from "react"; // CHANGED: added useEffect, useRef
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // NEW: hide navbar on scroll-down, show it again on any scroll-up
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // NEW: refs used to measure navbar height so page content can reserve space for it
  // (needed now that the navbar is `fixed` instead of `sticky` and is out of normal flow)
  const headerRef = useRef(null);
  const barRef = useRef(null);

  // NEW: publish navbar height as a CSS variable (--navbar-h) consumed by <main> in App.jsx
  useEffect(() => {
    const updateHeight = () => {
      if (!barRef.current) return;
      // pt-4 (16px) top offset + pill height + 16px breathing room below it
      const height = barRef.current.getBoundingClientRect().height + 16 + 16;
      document.documentElement.style.setProperty("--navbar-h", `${height}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // NEW: scroll-direction detection to show/hide the navbar
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY < 80) {
        // Always show near the top of the page
        setVisible(true);
      } else if (diff > 4) {
        // scrolling down -> hide
        setVisible(false);
        setOpen(false); // close mobile menu when hiding
      } else if (diff < -4) {
        // scrolling up -> show
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
      isActive ? "bg-accent/20 text-accent" : "text-muted hover:text-text"
    }`;

  return (
    // CHANGED: sticky -> fixed + inset-x-0 (sticky was silently broken by
    // overflow-x:hidden on html/body/#root in index.css, which turns those
    // ancestors into scroll containers and disables position:sticky in most
    // browsers). fixed removes that dependency entirely.
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 px-4 pt-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        ref={barRef}
        className="max-w-[1120px] mx-auto flex items-center justify-between gap-4 bg-panel/80 backdrop-blur-md border border-panel-border rounded-full px-3 py-2 shadow-lg"
      >
        <NavLink to="/" className="flex items-center gap-2 pl-2" onClick={() => setOpen(false)}>
          <span className="font-mono font-semibold text-sm tracking-wide border border-panel-border rounded-lg px-2.5 py-1.5">
            Chaya Kiran
          </span>
        </NavLink>

        {/* CHANGED: md -> lg, so the 7-link pill nav only renders once there's room */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CHANGED: md -> lg, hamburger now covers tablet widths too */}
        <button
          className="lg:hidden w-8 h-8 flex items-center justify-center text-text mr-1"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-2 mt-2 mx-auto max-w-[1120px] bg-panel/95 backdrop-blur-md border border-panel-border rounded-2xl p-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
