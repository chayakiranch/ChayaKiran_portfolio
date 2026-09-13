import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import Chip from "../components/Chip";
import projectsData from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

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

  // Shared "back" link + kicker/title/status header, used by every project.
  const Header = () => (
    <>
      <div className="mb-8">
        <NavLink to="/projects" className="glow-navlink inline-flex items-center gap-1.5 text-muted text-sm hover:text-accent">
          <ArrowLeft size={15} /> Back to projects
        </NavLink>
      </div>

      <div className="flex items-center gap-3 flex-wrap mb-3">
        <span
          className={`font-mono text-[0.72rem] px-2.5 py-1 rounded-full border ${
            project.status === "in-progress"
              ? "text-amber-300 border-amber-300/30 bg-amber-300/10"
              : "text-accent border-accent-dim bg-accent/[6%]"
          }`}
        >
          {project.status === "in-progress" ? "in-progress" : "completed"}
        </span>
        <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wide">{project.kicker}</span>
      </div>

      <h1 className="font-display font-semibold text-[clamp(1.8rem,3.4vw,2.5rem)] leading-tight">
        {project.title}
      </h1>
      <p className="font-mono text-[0.8rem] text-muted-2 mt-2">{project.duration}</p>
      <p className="text-muted mt-6 text-[1.02rem] leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((s) => (
          <Chip key={s} small>{s}</Chip>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap mt-6">
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
    </>
  );

  // Prev/next footer, shared by every project.
  const PrevNext = () =>
    (prevProject || nextProject) && (
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-panel-border">
        {prevProject ? (
          <NavLink to={`/projects/${prevProject.id}`} className="glow-navlink flex flex-col items-start gap-1 text-left max-w-[45%]">
            <span className="inline-flex items-center gap-1.5 text-muted-2 text-xs uppercase tracking-wide">
              <ArrowLeft size={13} /> Previous Project
            </span>
            <span className="text-text text-sm font-semibold truncate">{prevProject.title}</span>
          </NavLink>
        ) : (
          <span />
        )}
        {nextProject && (
          <NavLink to={`/projects/${nextProject.id}`} className="glow-navlink flex flex-col items-end gap-1 text-right max-w-[45%] ml-auto">
            <span className="inline-flex items-center gap-1.5 text-muted-2 text-xs uppercase tracking-wide">
              Next Project <ArrowRight size={13} />
            </span>
            <span className="text-text text-sm font-semibold truncate">{nextProject.title}</span>
          </NavLink>
        )}
      </div>
    );

  // ===== UPDATED: every project now renders through CaseStudyLayout — the
  // "On This Page" sidebar format. Projects with a real project.caseStudy
  // (AWS Billing Dashboard) use it unchanged. Projects without one (Book
  // Store, Blogging System) get an "effective" case study built ONLY from
  // fields that already existed for them — summary becomes Overview,
  // highlights becomes a Highlights section, architectureImage becomes the
  // Architecture section. No new Problem / Goals / Architecture-description /
  // Key-features content is invented — those sections simply don't render
  // for these two projects until real source material is provided. =====
  const effectiveCaseStudy =
    project.caseStudy || {
      overview: project.summary,
      highlights: project.highlights,
      architecture: project.architectureImage ? { image: project.architectureImage } : null,
    };

  return <CaseStudyLayout project={project} caseStudy={effectiveCaseStudy} Header={Header} PrevNext={PrevNext} />;
}

// Sidebar "On This Page" TOC + sectioned content, mirroring the pattern
// already used in ExperienceDetails.jsx.
function CaseStudyLayout({ project, caseStudy: cs, Header, PrevNext }) {
  // Build the nav list dynamically — sections with no data are skipped
  // entirely instead of rendering an empty heading.
  const navItems = [
    cs.overview && { id: "overview", label: "Overview" },
    cs.problem && { id: "problem", label: "Problem" },
    cs.goals?.length && { id: "goals", label: "Goals" },
    { id: "architecture", label: "Architecture" }, // UPDATED: always shown — falls back to a "coming soon" placeholder
    cs.highlights?.length && { id: "highlights", label: "Highlights" },
    cs.keyFeatures && { id: "key-features", label: cs.keyFeatures.title },
    cs.futureDirection?.length && { id: "future-direction", label: "Future Direction" },
  ].filter(Boolean);

  const [activeSection, setActiveSection] = useState(navItems[0]?.id);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [project.id]);

  return (
    <section className="pt-24 pb-4">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="max-w-[820px]">
          <Header />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:items-start mt-14">
          {/* SIDEBAR */}
          <div className="space-y-4 md:sticky md:top-28 md:self-start h-fit">
            <h3 className="text-muted-2 uppercase text-sm tracking-wide">On This Page</h3>
            <div className="border-l border-panel-border pl-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition-all duration-300 text-sm ${
                    activeSection === item.id
                      ? "text-accent border-l-2 border-accent pl-3 -ml-4"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-[820px]">
            {cs.overview && (
              <section id="overview" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">Overview</h2>
                <p className="text-muted leading-8">{cs.overview}</p>
              </section>
            )}

            {cs.problem && (
              <section id="problem" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">Problem</h2>
                {cs.problem.intro && <p className="text-muted leading-8 mb-5">{cs.problem.intro}</p>}
                {cs.problem.points?.length > 0 && (
                  <ul className="space-y-3">
                    {cs.problem.points.map((point) => (
                      <li key={point} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                        <span className="absolute left-0 top-[-2px] text-accent text-lg leading-none">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {cs.goals?.length > 0 && (
              <section id="goals" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">Goals</h2>
                <ul className="space-y-3">
                  {cs.goals.map((goal) => (
                    <li key={goal} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                      <span className="absolute left-0 top-[-2px] text-accent text-lg leading-none">·</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* UPDATED: always rendered — shows the placeholder box when no
                architecture data/image exists yet, instead of disappearing. */}
            <section id="architecture" className="mb-16 scroll-mt-32">
              <h2 className="font-display text-2xl font-bold mb-5">Architecture</h2>
              {cs.architecture?.description && (
                <p className="text-muted leading-8 mb-6">{cs.architecture.description}</p>
              )}
              {cs.architecture?.image ? (
                <img
                  src={cs.architecture.image}
                  alt={`${project.title} architecture diagram`}
                  loading="lazy"
                  className="rounded-xl border border-panel-border w-full max-w-[560px] mx-auto block"
                />
              ) : (
                <div className="border border-dashed border-panel-border rounded-xl p-10 flex flex-col items-center gap-2 text-muted-2 text-sm">
                  <ImageIcon size={22} />
                  Architecture diagram coming soon.
                </div>
              )}
              {cs.architecture?.notes?.length > 0 && (
                <ul className="space-y-3 mt-6">
                  {cs.architecture.notes.map((note) => (
                    <li key={note} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                      <span className="absolute left-0 top-[3px] w-1.5 h-1.5 rounded-full bg-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* NEW: generic "Highlights" section — reuses each project's
                existing project.highlights array (no new copy invented). */}
            {cs.highlights?.length > 0 && (
              <section id="highlights" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">Highlights</h2>
                <ul className="space-y-3">
                  {cs.highlights.map((item) => (
                    <li key={item} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                      <span className="absolute left-0 top-[-2px] text-accent text-lg leading-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {cs.keyFeatures && (
              <section id="key-features" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">{cs.keyFeatures.title}</h2>
                <ul className="space-y-3">
                  {cs.keyFeatures.items.map((item) => (
                    <li key={item} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                      <span className="absolute left-0 top-[3px] w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {cs.futureDirection?.length > 0 && (
              <section id="future-direction" className="mb-16 scroll-mt-32">
                <h2 className="font-display text-2xl font-bold mb-5">Future Direction</h2>
                <ul className="space-y-3">
                  {cs.futureDirection.map((item) => (
                    <li key={item} className="relative pl-5 text-muted text-[0.95rem] leading-7">
                      <span className="absolute left-0 top-[-2px] text-accent text-lg leading-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {/* UPDATED: removed max-w-[820px] — Previous/Next now spans the full
            page width so "Next Project" sits at the true right edge. */}
        <PrevNext />
      </div>
    </section>
  );
}