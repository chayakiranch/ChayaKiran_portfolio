import { NavLink } from "react-router-dom";
import profile from "../data/profileData";

const stats = [
  { num: "7.88", label: "CGPA · B.Tech CSE" },
  { num: "5", label: "Cloud & AI certifications" }, // CHANGED: 4 -> 5 to match certificationsData.js
  { num: "2", label: "Full-stack products shipped" },
  { num: "6wk", label: "MERN internship @ Vehinova" },
];

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center relative">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 pt-24 pb-16 w-full">
        <p className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-accent border border-accent-dim bg-accent/[6%] px-3.5 py-1.5 rounded-full mb-7">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: "node-pulse 2.2s cubic-bezier(0.16,1,0.3,1) infinite" }}
          />
          Available for internships &amp; entry-level roles
        </p>

        <h1 className="font-display font-bold text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] tracking-tight">
          Chintakula
          <br />
          <span className="text-accent">Chaya Kiran</span>
        </h1>

        <p className="mt-6 text-[clamp(1.05rem,1.6vw,1.3rem)] text-muted max-w-[640px] leading-relaxed">
          Computer Science engineer building at the edge of{" "}
          <span className="text-text font-medium">cloud infrastructure</span> and{" "}
          <span className="text-text font-medium">full-stack web systems</span> — from AWS architecture
          to MERN-stack products that ship.
        </p>

        {/* GLOW SYSTEM: added .glow-btn to all 3 CTAs for unified lift+glow */}
        <div className="flex gap-4 mt-10 flex-wrap">
          <NavLink
            to="/projects"
            className="glow-btn inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full bg-accent text-[#06201d]"
          >
            View Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="glow-btn inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent"
          >
            View Resume
          </NavLink>
          {/* NEW: CTA to the Certifications & Achievements page */}
          <NavLink
            to="/certifications"
            className="glow-btn inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent"
          >
            View Certifications
          </NavLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[76px] pt-8 border-t border-panel-border max-w-[760px]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span className="font-display text-2xl font-semibold text-accent">{s.num}</span>
              <span className="text-[0.8rem] text-muted-2 leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
