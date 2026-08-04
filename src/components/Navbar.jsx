import { useState } from "react";
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

  const linkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
      isActive ? "bg-accent/20 text-accent" : "text-muted hover:text-text"
    }`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-4 bg-panel/80 backdrop-blur-md border border-panel-border rounded-full px-3 py-2 shadow-lg">
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