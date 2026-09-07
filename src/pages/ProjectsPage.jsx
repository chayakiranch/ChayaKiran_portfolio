import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Chip from "../components/Chip";
import projectsData from "../data/projectsData";

// REVAMPED (Task 15): Projects list page redesigned to match the polished
// card language used elsewhere on the site — status pill, category label,
// key-highlight snippet, and a consistent glow-card footer — instead of the
// previous plain title/summary/chip-list layout.
export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="Projects" title="Things I've Built" />
        <p className="text-muted text-[1.05rem] max-w-[620px] mt-4">
          A closer look at the full-stack and cloud projects I've designed, built, and shipped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projectsData.map((p) => (
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
                  {p.duration}
                </span>
              </div>

              <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wide mb-2">
                {p.kicker}
              </span>
              <h3 className="font-display text-xl font-semibold mb-2.5">{p.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed mb-4">{p.summary}</p>

              {/* Key-highlight snippet, mirrors the Home page project cards */}
              {p.highlights?.[0] && (
                <p className="flex gap-2 text-muted-2 text-[0.82rem] leading-relaxed mb-5">
                  <span className="text-accent shrink-0">▸</span>
                  <span>{p.highlights[0]}</span>
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {p.stack.map((s) => (
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

          {/* TODO: add more project cards here as new projects are built */}
          <div className="border border-dashed border-panel-border rounded-2xl p-8 flex items-center justify-center text-center text-muted-2 text-sm min-h-[180px]">
            More projects coming soon.
          </div>
        </div>
      </div>
    </section>
  );
}