import { Link } from "react-router-dom";
import experienceData from "../data/experienceData";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 pt-16 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-muted text-sm md:text-base">My professional journey so far</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="absolute left-[14px] top-0 bottom-0 w-px bg-panel-border" />

        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-5 w-3 h-3 rounded-full bg-accent" />

              <Link to={`/experience/${exp.id}`} className="block">
                <div className="glow-card bg-panel/80 border border-panel-border rounded-2xl p-5 cursor-pointer">
                  <div className="flex justify-between items-start mb-5 flex-wrap gap-2">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold">{exp.role}</h2>
                      <h3 className="text-accent text-xl mt-1">{exp.company}</h3>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
