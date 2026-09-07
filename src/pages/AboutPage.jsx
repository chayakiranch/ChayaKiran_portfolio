import { NavLink } from "react-router-dom"; // NEW
import { ArrowRight, Award } from "lucide-react"; // NEW
import SectionHeading from "../components/SectionHeading";
import { extraCurricular } from "../data/certificationsData";
import profile from "../data/profileData";

export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="About" title="About me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
          {/* UPDATED: left-column bio rewritten (Task 9); right column untouched per request */}
          <div className="space-y-5 text-muted">
            <p>{profile.objective}</p>
            <p>
              I recently completed my B.Tech in Computer Science Engineering, specializing in Cloud and Edge
              Computing, and I'm now looking for full-stack or cloud engineering roles where I can put that
              foundation to work. During my internship at Vehinova Technologies, I helped design and deploy
              high-performance, cloud-native solutions — hands-on experience that shaped how I approach building
              real products, not just coursework projects. Outside of that, I keep sharpening my problem-solving
              on HackerRank and LeetCode, and I volunteer with Sweccha NGO on community-driven sustainability
              initiatives.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-3.5 pb-6 border-b border-panel-border">
              <Fact label="Location" value={profile.location} />
              <Fact label="Focus" value="Cloud & Edge Computing" />
              <Fact label="Currently" value="Fresher" /> {/* FIXED: "B.Tech CSE, final year (2022–2026)" -> "Fresher" (Task 7) */}
              {/* REMOVED: Phone fact row deleted per request (mobile number removed from whole project) */}
              <Fact label="Email" value={profile.email} />
            </div>

            <div className="mt-10">
              <h3 className="font-display text-lg font-semibold mb-4">Beyond the classroom</h3>
              <ul className="space-y-2.5">
                {extraCurricular.map((line) => (
                  <li key={line} className="relative pl-5 text-muted text-[0.94rem]">
                    <span className="absolute left-0 text-muted-2">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEW: CTA to the Certifications & Achievements page */}
            <NavLink to="/certifications" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-8 group">
              <Award size={15} /> View Certifications
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-[0.92rem]">
      <span className="font-mono text-[0.8rem] text-muted-2">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}