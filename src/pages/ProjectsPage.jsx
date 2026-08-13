import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Chip from "../components/Chip";
import projectsData from "../data/projectsData";

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <SectionHeading tag="03" eyebrow="Projects" title="Things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projectsData.map((p) => (
            <NavLink
              key={p.id}
              to={`/projects/${p.id}`}
              className="glow-card block bg-panel border border-panel-border rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wide">{p.kicker}</span>
                <span className="font-mono text-[0.75rem] text-muted-2">{p.duration}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted text-[0.95rem] mb-5">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <Chip key={s} small>{s}</Chip>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                View project <ArrowRight size={15} />
              </span>
            </NavLink>
          ))}

          {/* TODO: add more project cards here as new projects are built */}
          <div className="border border-dashed border-panel-border rounded-2xl p-8 flex items-center justify-center text-center text-muted-2 text-sm min-h-[180px]">
            More projects coming soon.
          </div>
        </div>
      </div>
    </section>
  );
}
