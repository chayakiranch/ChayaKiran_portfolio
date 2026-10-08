import { useLayoutEffect, useRef } from "react"; // NEW: refs + pre-paint effect for the name animation
import { NavLink } from "react-router-dom";
import { animate, scrambleText } from "animejs"; // NEW: anime.js v4 scramble text effect
import profile from "../data/profileData";

const stats = [
  { num: "7.88", label: "CGPA · B.Tech CSE" },
  { num: "5", label: "Cloud & AI certifications" }, // CHANGED: 4 -> 5 to match certificationsData.js
  { num: "3", label: "Full-stack products shipped" }, // CHANGED: 2 -> 3 to match projectsData.js
  { num: "6 wks", label: "Technical internship @ Vehinova" }, // FIXED: "6wk" -> "6 wks" (Task 1 spacing fix)
];

export default function Hero() {
  // NEW: refs to the two name parts so each one gets the scramble effect
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  // NEW: scramble the name ONCE on page load (no loop)
  useLayoutEffect(() => {
    // Respect users who prefer reduced motion — show the plain name
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const anims = [firstRef.current, lastRef.current].map((el, i) =>
      animate(el, {
        innerHTML: scrambleText(), // scrambles, then settles on the original text
        delay: i * 250, // second line starts slightly after the first
        loop: false, // run only once
      }),
    );

    // Cleanup (also keeps React StrictMode's double-mount from running it twice)
    return () => anims.forEach((a) => a.revert());
  }, []);

  return (
    <section className="min-h-[92vh] flex items-center relative">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 pt-24 pb-16 w-full">
        <p className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-accent border border-accent-dim bg-accent/[6%] px-3.5 py-1.5 rounded-full mb-7">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              animation: "node-pulse 2.2s cubic-bezier(0.16,1,0.3,1) infinite",
            }}
          />
          Available for internships &amp; entry-level roles
        </p>

        {/* CHANGED: name parts wrapped in refs'd spans; aria-label keeps the real name for screen readers */}
        <h1
          aria-label="Chintakula Chaya Kiran"
          className="font-display font-bold text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] tracking-tight"
        >
          <span ref={firstRef} aria-hidden="true">
            Chintakula
          </span>
          <br />
          <span ref={lastRef} aria-hidden="true" className="text-accent">
            Chaya Kiran
          </span>
        </h1>

        <p className="mt-6 text-[clamp(1.05rem,1.6vw,1.3rem)] text-muted max-w-[640px] leading-relaxed">
          Computer Science engineer building at the edge of{" "}
          <span className="text-text font-medium">cloud infrastructure</span>{" "}
          and{" "}
          <span className="text-text font-medium">full-stack web systems</span>{" "}
          — from AWS architecture to MERN-stack products that ship.
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
          {/* CHANGED: "View Certifications" CTA replaced with a Contact CTA */}
          <NavLink
            to="/contact"
            className="glow-btn inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent"
          >
            Contact
          </NavLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[76px] pt-8 border-t border-panel-border max-w-[760px]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span className="font-display text-2xl font-semibold text-accent">
                {s.num}
              </span>
              <span className="text-[0.8rem] text-muted-2 leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
