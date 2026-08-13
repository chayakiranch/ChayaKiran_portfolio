import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Chip from "../components/Chip";
import projectsData from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 text-center">
          <p className="text-muted">Project not found.</p>
          <NavLink to="/projects" className="text-accent text-sm font-semibold mt-4 inline-block">
            ← Back to projects
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="max-w-[820px] mx-auto px-6 md:px-8">
        <NavLink to="/projects" className="glow-navlink inline-flex items-center gap-1.5 text-muted text-sm mb-8 hover:text-accent">
          <ArrowLeft size={15} /> Back to projects
        </NavLink>

        <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wide">{project.kicker}</span>
        <h1 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.5rem)] leading-tight mt-3">
          {project.title}
        </h1>
        <p className="font-mono text-[0.8rem] text-muted-2 mt-2">{project.duration}</p>

        <p className="text-muted mt-8 text-[1.02rem] leading-relaxed">{project.summary}</p>

        {/* Architecture diagram — placeholder until provided */}
        <div className="mt-10">
          <h2 className="font-display text-lg font-semibold mb-4">Architecture</h2>
          {project.architectureImage ? (
            <img src={project.architectureImage} alt={`${project.title} architecture diagram`} className="rounded-xl border border-panel-border" />
          ) : (
            <div className="border border-dashed border-panel-border rounded-xl p-10 flex flex-col items-center gap-2 text-muted-2 text-sm">
              <ImageIcon size={22} />
              Architecture diagram coming soon.
            </div>
          )}
        </div>

        <h2 className="font-display text-lg font-semibold mt-10 mb-4">Highlights</h2>
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="relative pl-5 text-muted text-[0.95rem]">
              <span className="absolute left-0 top-[-2px] text-accent text-lg leading-none">·</span>
              {h}
            </li>
          ))}
        </ul>

        <h2 className="font-display text-lg font-semibold mt-10 mb-4">Stack</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="glow-btn inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full bg-accent text-[#06201d]">
              <ExternalLink size={15} /> Live demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border border-dashed border-panel-border text-muted-2">
              <ExternalLink size={15} /> Live demo link coming soon
            </span>
          )}
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="glow-btn inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full border border-panel-border text-text hover:border-accent">
              <Github size={15} /> Source code
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border border-dashed border-panel-border text-muted-2">
              <Github size={15} /> Repo link coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
