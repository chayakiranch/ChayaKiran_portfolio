import { GraduationCap, MapPin } from "lucide-react";
import educationData from "../data/educationData";

export default function EducationPage() {
  return (
    <section className="py-24">
      <div className="max-w-[820px] mx-auto px-6 md:px-8">

        <div className="text-center mb-16">
          <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-3">Education</p>
          <h1 className="font-display font-bold text-[clamp(1.9rem,4vw,2.6rem)] tracking-tight">Academic Background</h1>
          <p className="text-muted mt-3">My academic journey so far</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-panel-border" />

          <div className="flex flex-col gap-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative">
                <span className="absolute -left-[33px] top-6 w-2.5 h-2.5 rounded-full bg-accent" />

                <div className="bg-panel border border-panel-border rounded-2xl p-7">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <GraduationCap size={18} className="text-accent" />
                      <h2 className="font-display text-lg font-semibold">{edu.degree}</h2>
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
  );
}