import { NavLink } from "react-router-dom";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import profile from "../data/profileData";
import skillsData from "../data/skillsData";
import experienceData from "../data/experienceData";
import educationData from "../data/educationData";
import projectsData from "../data/projectsData";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT */}
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

      {/* SKILLS */}
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

      {/* EXPERIENCE — same timeline-card design as the Experience page */}
      <section className="py-24 border-t border-panel-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">03</span>
            Experience
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight">
              Where I've worked.
            </h2>
            <NavLink to="/experience" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
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
                    <div className="bg-panel/80 border border-panel-border rounded-2xl p-5 hover:border-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
                          <span key={i} className="bg-bg-alt px-3 py-1.5 rounded-lg text-sm text-muted">
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

      {/* EDUCATION — same timeline-card design as the Education page */}
      <section className="py-24 border-t border-panel-border bg-gradient-to-b from-transparent via-panel/30 to-transparent">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">04</span>
            Education
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight">
              Academic background.
            </h2>
            <NavLink to="/education" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group">
              View education <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>

          <div className="relative pl-8 max-w-[820px]">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-panel-border" />

            <div className="flex flex-col gap-8">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative">
                  <span className="absolute -left-[33px] top-6 w-2.5 h-2.5 rounded-full bg-accent" />

                  <div className="bg-panel border border-panel-border rounded-2xl p-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <GraduationCap size={18} className="text-accent" />
                        <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                      </div>
                      <span className="font-mono text-[0.75rem] text-muted-2 uppercase tracking-wide whitespace-nowrap">
                        {edu.years}
                      </span>
                    </div>

                    <p className="text-accent text-sm font-medium mt-2">{edu.field}</p>
                    <p className="text-text text-sm font-semibold mt-1">{edu.institution}</p>

                    <div className="flex items-center gap-1.5 text-muted-2 text-xs mt-2">
                      <MapPin size={12} />
                      {edu.location}
                      <span className="mx-1">·</span>
                      {edu.score.includes("%") ? "Score" : "GPA"}: {edu.score}
                    </div>

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {edu.highlights.map((h) => (
                        <li key={h} className="relative pl-4 text-muted text-sm leading-relaxed">
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 border-t border-panel-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
            <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">05</span>
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