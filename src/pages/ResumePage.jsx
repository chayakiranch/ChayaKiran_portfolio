import { NavLink } from "react-router-dom"; // NEW
import { User, Briefcase, GraduationCap, Code2, Award, Eye, Download, FileText, Circle, ArrowRight } from "lucide-react"; // CHANGED: added ArrowRight
import profile from "../data/profileData";

const whatsInside = [
  { icon: User, title: "Professional Summary", desc: "Summary of my background and career goals" },
  { icon: Briefcase, title: "Work Experience", desc: "Internships and professional experience" },
  { icon: GraduationCap, title: "Education", desc: "Academic qualifications and learning" },
  { icon: Code2, title: "Skills", desc: "Technologies and tools I work with" },
  { icon: Award, title: "Certifications", desc: "Courses, badges, and achievements" },
];

const stats = [
  { icon: Briefcase, num: "1+", label: "Internship" },
  { icon: FileText, num: "2+", label: "Projects" },
  { icon: Code2, num: "MERN +", label: "Django" },
  { icon: Award, num: "AWS", label: "Cloud" },
];

export default function ResumePage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — intro + what's inside */}
          <div>
            <h1 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.2rem)] leading-tight tracking-tight">
              My Professional
              <br />
              <span className="text-accent">Resume</span>
            </h1>
            <p className="text-muted mt-5 text-[1.05rem] max-w-[480px]">
              Explore my professional journey, technical skills, internships, certifications, and projects. Preview or download my latest resume.
            </p>

            <h2 className="font-display text-lg font-semibold mt-12 mb-6">What's Inside</h2>
            <div className="flex flex-col gap-5">
              {whatsInside.map((item) => {
                const Icon = item.icon;
                const isCertifications = item.title === "Certifications";
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-accent/[8%] border border-accent-dim text-accent">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <p className="text-muted text-sm mt-0.5">{item.desc}</p>
                      {/* NEW: link straight to the full Certifications page */}
                      {isCertifications && (
                        <NavLink to="/certifications" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-2 group">
                          View all certifications <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </NavLink>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — resume preview card */}
          <div className="bg-panel border border-panel-border rounded-3xl p-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Resume Preview</h2>
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                <Circle size={8} className="fill-emerald-400 text-emerald-400" />
                Up to date
              </span>
            </div>

            <div className="bg-bg border border-panel-border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-accent/[10%] border border-accent-dim text-accent mb-5">
                <FileText size={28} />
              </div>

              <h3 className="font-display text-xl font-bold">{profile.name} Resume</h3>
              <p className="text-muted text-sm mt-3 max-w-[380px] mx-auto">
                View my latest resume containing internships, projects, technical skills, certifications, and professional experience.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-3 bg-panel border border-panel-border rounded-xl px-4 py-3 text-left">
                      <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-accent/[10%] text-accent">
                        <Icon size={15} />
                      </span>
                      <div>
                        <p className="font-semibold text-sm leading-tight">{s.num}</p>
                        <p className="text-muted-2 text-xs leading-tight">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-7">
                <a
                  href={profile.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full bg-accent text-[#06201d] transition-transform hover:-translate-y-0.5"
                >
                  <Eye size={16} /> Open Preview
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full border border-panel-border text-text transition-colors hover:border-accent hover:text-accent"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
