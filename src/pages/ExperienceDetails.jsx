import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import experienceData from "../data/experienceData";

export default function ExperienceDetails() {
  const { id } = useParams();

  const experience = experienceData.find((item) => item.id === id);
  const currentIndex = experienceData.findIndex((item) => item.id === id);
  const nextExperience = experienceData[currentIndex + 1];
  const previousExperience = experienceData[currentIndex - 1];

  const [activeSection, setActiveSection] = useState("overview");

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
  }, [id]);

  if (!experience) {
    return (
      <div className="min-h-screen px-6 pt-16 pb-24 text-center">
        <p className="text-muted">Experience not found.</p>
        <Link to="/experience" className="text-accent text-sm font-semibold mt-4 inline-block">
          ← Back to Experience
        </Link>
      </div>
    );
  }

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "responsibilities", label: "Key Responsibilities" },
    { id: "achievements", label: "Major Accomplishments" },
    { id: "systems", label: "Systems & Features Built" },
    { id: "highlights", label: "Technical Highlights" },
    { id: "projects", label: `Projects at ${experience.company}` },
  ];

  return (
    <div className="min-h-screen px-6 pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/experience" className="text-muted hover:text-accent text-sm">
          ← Back to Experience
        </Link>

        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{experience.role}</h1>
          <h2 className="text-accent text-2xl mb-2">{experience.company}</h2>
          <p className="text-muted-2 mb-6">
            {experience.duration} • {experience.location}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {experience.skills.map((skill, i) => (
              <span key={i} className="bg-bg-alt px-3 py-1 rounded-lg text-sm text-text">
                {skill}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-[250px_1fr] gap-12">
            {/* SIDEBAR */}
            <div className="space-y-4 md:sticky md:top-28 h-fit">
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
            <div>
              <section id="overview" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-muted leading-8">{experience.overview}</p>
              </section>

              <section id="responsibilities" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
                <ul className="space-y-5">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <span className="text-accent">▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="achievements" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">Major Accomplishments</h2>
                <div className="space-y-5">
                  {experience.achievements.map((item, i) => (
                    <div key={i} className="bg-panel/80 border border-panel-border rounded-2xl p-6">
                      <span className="text-accent font-bold mr-4">0{i + 1}</span>
                      <span className="text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="systems" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-8">Systems &amp; Features Built</h2>
                <ul className="space-y-5">
                  {experience.systems.map((item, i) => (
                    <li key={i} className="flex gap-4 text-muted text-lg leading-9">
                      <span className="text-accent mt-2">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="highlights" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-8">Technical Highlights</h2>
                <div className="space-y-6">
                  {experience.highlights.map((item, i) => (
                    <div key={i} className="flex gap-4 text-muted text-lg leading-9">
                      <span className="text-amber mt-1">⚡</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="projects" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>

                {experience.projects.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {experience.projects.map((project, i) => (
                      <Link
                        key={i}
                        to={`/projects/${project.id}`}
                        className="block bg-bg-alt border border-accent-dim rounded-[32px] p-5 hover:border-accent hover:-translate-y-1 transition-all duration-300 min-h-[360px] flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <span className="bg-accent/20 text-accent text-xs px-4 py-1 rounded-full font-medium">
                            completed
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-text leading-tight mb-5">{project.title}</h3>
                          <p className="text-muted text-sm leading-7 mb-7">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="bg-panel-border text-muted text-xs px-3 py-1 rounded-lg">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-panel-border mt-8 pt-5">
                          <p className="text-accent text-sm font-semibold flex items-center gap-2">
                            View project <span className="text-lg">→</span>
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-panel-border rounded-2xl p-8 text-center text-muted-2 text-sm">
                    No public project write-ups from this role yet — coming soon.
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIOUS + NEXT */}
      <div className="border-t border-panel-border mt-24 pt-10 flex justify-between items-center px-4 md:px-20 max-w-6xl mx-auto">
        {previousExperience ? (
          <Link to={`/experience/${previousExperience.id}`} className="group transition-all duration-300">
            <p className="text-muted-2 text-xs mb-1">Previous</p>
            <div className="flex items-center gap-3">
              <span className="text-muted-2 text-lg group-hover:text-accent transition-all duration-300">←</span>
              <h3 className="text-lg text-muted group-hover:text-accent transition-all duration-300">
                {previousExperience.role}
              </h3>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextExperience && (
          <Link to={`/experience/${nextExperience.id}`} className="group transition-all duration-300">
            <p className="text-muted-2 text-xs mb-1 text-right">Next</p>
            <div className="flex items-center gap-3">
              <h3 className="text-lg text-muted group-hover:text-accent transition-all duration-300">
                {nextExperience.role}
              </h3>
              <span className="text-muted-2 text-lg group-hover:text-accent transition-all duration-300">→</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
