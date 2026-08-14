import { NavLink } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard"; // NEW: replaces Chip-based Skills layout
import Chip from "../components/Chip";
import profile from "../data/profileData";
import skillsData from "../data/skillsData";
import experienceData from "../data/experienceData";
import educationData from "../data/educationData"; // RESTORED: Education section added back to Home
import projectsData from "../data/projectsData";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          {/* NEW: "Who I Am" heading + subtext added below the eyebrow, matching the pattern used by other sections */}
          <div className="text-center mb-12">
            <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
              About
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-2.5">
              Who I Am
            </h2>
            <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto">
              A bit more about who I am and what drives me
            </p>
          </div>

          {/* ORIGINAL tagline + objective — left untouched per request */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight">
              I design systems that live in <em className="text-accent not-italic">two places at once</em> —
              the cloud, and the edge closest to the user.
            </h2>
            <div>
              <p className="text-muted">{profile.objective}</p>
              <NavLink to="/about" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-6 group">
                Read the full story <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS — redesigned: glassmorphism card grid, replaces documentation-style table */}
      {/* SIZE REDUCED: py-28 -> py-20, heading margins tightened, grid gap-8 -> gap-5 */}
      <section className="py-20 relative">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          {/* CHANGED: numbered badge removed; eyebrow, title, lead now centered */}
          <div className="text-center mb-10">
            <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
              Skills
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-2.5">
              Technical Expertise
            </h2>
            <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto">
              Technologies and tools I work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((group) => (
              <SkillCard
                key={group.category}
                category={group.category}
                icon={group.icon}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — same timeline-card design as the Experience page */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          {/* CHANGED: numbered badge removed; eyebrow, title, and link now centered/stacked */}
          <div className="text-center mb-12">
            <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
              Experience
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-2.5">
              Where I've Worked
            </h2>
            <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto mb-4">
              My professional journey so far
            </p>
            <NavLink to="/experience" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
              View experience <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>

          <div className="relative">
            <div className="absolute left-[14px] top-0 bottom-0 w-px bg-panel-border" />
            <div className="space-y-10">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-accent" />

                  <NavLink to={`/experience/${exp.id}`} className="block">
                    <div className="glow-card bg-panel/80 backdrop-blur-md border border-panel-border rounded-2xl p-5 cursor-pointer">
                      <div className="flex justify-between items-start mb-5 flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                          <h4 className="text-accent text-xl mt-1">{exp.company}</h4>
                          <p className="text-muted-2 text-sm mt-1">{exp.location}</p>
                        </div>
                        <p className="text-muted text-sm">{exp.duration}</p>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.shortPoints.map((point, i) => (
                          <li key={i} className="flex gap-3 text-muted text-base leading-8">
                            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="glow-badge bg-bg-alt px-3 py-1.5 rounded-lg text-sm text-muted">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-panel-border pt-4 flex justify-end">
                        <p className="text-accent text-base font-semibold">View Role →</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION — RESTORED to Home. Card structure now mirrors the Experience card above
          exactly (same container width, timeline styling, padding, and content rhythm —
          header row, subtitle, bullet list, footer link) so the two sections look consistent. */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
              Education
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-2.5">
              Academic Background
            </h2>
            <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto mb-4">
              My academic journey so far
            </p>
            <NavLink to="/education" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
              View education <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>

          <div className="relative">
            <div className="absolute left-[14px] top-0 bottom-0 w-px bg-panel-border" />
            <div className="space-y-10">
              {educationData
                .filter((edu) => !edu.hidden)
                .map((edu) => (
                  <div key={edu.id} className="relative pl-10">
                    <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-accent" />

                    <NavLink to="/education" className="block">
                      <div className="glow-card bg-panel/80 backdrop-blur-md border border-panel-border rounded-2xl p-5 cursor-pointer">
                        <div className="flex justify-between items-start mb-5 flex-wrap gap-2">
                          <div className="flex items-start gap-2.5">
                            <GraduationCap size={20} className="text-accent mt-1 shrink-0" />
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                              <h4 className="text-accent text-xl mt-1">{edu.field}</h4>
                              <p className="text-muted-2 text-sm mt-1">
                                {edu.institution} · {edu.location}
                              </p>
                            </div>
                          </div>
                          <p className="text-muted text-sm whitespace-nowrap">{edu.years}</p>
                        </div>

                        <ul className="space-y-3 mb-5">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="flex gap-3 text-muted text-base leading-8">
                              <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-5">
                          <span className="glow-badge bg-bg-alt px-3 py-1.5 rounded-lg text-sm text-muted">
                            {edu.score.includes("%") ? "Score" : "GPA"}: {edu.score}
                          </span>
                        </div>

                        <div className="border-t border-panel-border pt-4 flex justify-end">
                          <p className="text-accent text-base font-semibold">View Education →</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS — redesigned to match the reference layout: 3-up grid, status pill,
          category label, stack chips, and a "View project" link per card; capped at
          3 cards here with "View all projects" always available below. */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
              Projects
            </p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-2.5">
              Featured Work
            </h2>
            <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto">
              Everything I've built or contributed to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((p) => (
              <NavLink
                key={p.id}
                to={`/projects/${p.id}`}
                className="glow-card flex flex-col bg-panel/80 backdrop-blur-md border border-panel-border rounded-2xl p-7"
              >
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span
                    className={`font-mono text-[0.72rem] px-2.5 py-1 rounded-full border ${
                      p.status === "in-progress"
                        ? "text-amber-300 border-amber-300/30 bg-amber-300/10"
                        : "text-accent border-accent-dim bg-accent/[6%]"
                    }`}
                  >
                    {p.status === "in-progress" ? "in-progress" : "completed"}
                  </span>
                  <span className="font-mono text-[0.72rem] text-muted-2 uppercase tracking-wide text-right">
                    {p.kicker.split("·")[0].trim()}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2.5">{p.title}</h3>
                <p className="text-muted text-[0.9rem] leading-relaxed mb-5">{p.summary}</p>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {p.stack.slice(0, 6).map((s) => (
                    <Chip key={s} small>{s}</Chip>
                  ))}
                </div>

                <div className="border-t border-panel-border pt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                    View project <ArrowRight size={15} />
                  </span>
                  {p.liveUrl && (
                    <span className="w-7 h-7 rounded-full border border-panel-border flex items-center justify-center text-muted-2">
                      ↗
                    </span>
                  )}
                </div>
              </NavLink>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink to="/projects" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
              View all projects <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 text-center">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight mb-5">
            Let's Build Something Great
          </h2>
          <p className="text-muted max-w-[560px] mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
            vision — including internships and entry-level cloud/full-stack roles.
          </p>
          <NavLink
            to="/contact"
            className="glow-btn inline-flex items-center justify-center font-semibold text-[0.95rem] px-[26px] py-3.5 rounded-full bg-accent text-[#06201d]"
          >
            Get in touch
          </NavLink>
        </div>
      </section>
    </>
  );
}
