import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import profile from "../data/profileData";
import skillsData from "../data/skillsData";
import projectsData from "../data/projectsData";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT PREVIEW */}
      <section className="py-24 border-t border-panel-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">01</span>
            About
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight">
              I design systems that live in <em className="text-accent not-italic">two places at once</em> —
              the cloud, and the edge closest to the user.
            </h2>
            <div>
              <p className="text-muted">{profile.objective}</p>
              <NavLink to="/about" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-6 group">
                Read the full story <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="py-24 border-t border-panel-border bg-gradient-to-b from-transparent via-panel/30 to-transparent">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">02</span>
            Stack
          </p>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-12">
            The stack, end to end.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-panel-border border border-panel-border rounded-2xl overflow-hidden">
            {skillsData.map((group) => (
              <div key={group.category} className={`bg-bg p-7 ${group.primary ? "bg-accent/[4%]" : ""}`}>
                <h3 className="font-mono text-[0.82rem] tracking-wide uppercase text-muted mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item} small>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 border-t border-panel-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">03</span>
            Projects
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight">
              Things I've built.
            </h2>
            <NavLink to="/projects" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
              View all projects <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((p) => (
              <NavLink
                key={p.id}
                to={`/projects/${p.id}`}
                className="block bg-panel border border-panel-border rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-accent-dim"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wide">{p.kicker}</span>
                  <span className="font-mono text-[0.75rem] text-muted-2">{p.duration}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted text-[0.95rem]">{p.summary}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 border-t border-panel-border text-center">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-5">
            Let's build something.
          </h2>
          <p className="text-muted max-w-[520px] mx-auto mb-8">
            Open to internships, entry-level cloud/full-stack roles, and interesting collaborations.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full bg-accent text-[#06201d] transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </NavLink>
        </div>
      </section>
    </>
  );
}
