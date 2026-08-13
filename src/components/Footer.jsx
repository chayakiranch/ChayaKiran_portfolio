import { Mail, Linkedin, Github } from "lucide-react"; // CHANGED: removed unused NavLink import (Certifications footer link removed)
import profile from "../data/profileData";

const socialIcons = [
  { icon: Github, href: profile.socials.github || "#" },
  { icon: Linkedin, href: profile.socials.linkedin || "#" },
  { icon: Mail, href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-panel-border pt-10 pb-6 mt-12">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between flex-wrap gap-6 pb-8">
          <div>
            <p className="font-display font-bold text-lg text-accent">{profile.name}</p>
            <p className="text-text text-sm mt-1">{profile.role}</p>
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map((item, i) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              const target = isExternal ? "_blank" : undefined;
              const rel = isExternal ? "noopener noreferrer" : undefined;
              // GLOW SYSTEM: added .glow-card (ring glow) + .glow-icon (icon scale/rotate)
              const linkClass = "glow-icon w-9 h-9 flex items-center justify-center rounded-lg border border-panel-border text-muted hover:text-accent hover:border-accent transition-colors";
              return (
                <a key={i} href={item.href} target={target} rel={rel} className={linkClass}>
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="pt-6 border-t border-panel-border text-center text-sm text-muted-2">
          © {new Date().getFullYear()} {profile.name}. Building at the edge of cloud and code, one commit at a time.
        </div>
      </div>
    </footer>
  );
}
