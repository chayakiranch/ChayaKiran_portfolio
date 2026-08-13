import { useMemo } from "react"; // NEW: for generating the card's network pattern
import { NavLink } from "react-router-dom"; // NEW
import { User, Briefcase, GraduationCap, Code2, Award, Eye, Download, FileText, ArrowRight, Calendar } from "lucide-react"; // CHANGED: swapped Circle for Calendar
import profile from "../data/profileData";

const whatsInside = [
  { icon: User, title: "Professional Summary", desc: "Summary of my background and career goals" },
  { icon: Briefcase, title: "Work Experience", desc: "Internships and professional experience" },
  { icon: GraduationCap, title: "Education", desc: "Academic qualifications and learning" },
  { icon: Code2, title: "Skills", desc: "Technologies and tools I work with" },
  { icon: Award, title: "Certifications", desc: "Courses, badges, and achievements" },
];

// NEW: short section labels shown as pills on the redesigned preview card
const resumeSections = ["Summary", "Experience", "Education", "Skills", "Projects", "Certifications"];

// NEW: reusable, self-contained node-network pattern (same generative approach as
// components/NetworkBackground.jsx) but scoped to a container instead of the full page,
// so it can be clipped to a card's rounded corners via the parent's overflow-hidden.
function CardNetworkPattern({ nodeCount = 14 }) {
  const SIZE = 400;
  const { nodes, edges } = useMemo(() => {
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * SIZE,
      y: Math.random() * SIZE,
    }));
    const edges = [];
    nodes.forEach((n, i) => {
      const nearest = nodes
        .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      nearest.forEach(({ j }) => {
        const key = [i, j].sort().join("-");
        if (!edges.find((e) => e.key === key)) edges.push({ key, a: nodes[i], b: nodes[j] });
      });
    });
    return { nodes, edges };
  }, [nodeCount]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map((e) => (
        <line
          key={e.key}
          x1={e.a.x}
          y1={e.a.y}
          x2={e.b.x}
          y2={e.b.y}
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeOpacity="0.16"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.2" fill="var(--color-accent)" opacity="0.4" />
      ))}
    </svg>
  );
}

export default function ResumePage() {
  return (
    <section className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch"> {/* CHANGED: items-start -> lg:items-stretch so both columns share the row's full height on desktop only */}

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
                  <div key={item.title} className="group flex items-start gap-4">
                    <span className="glow-icon w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-accent/[8%] border border-accent-dim text-accent">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <p className="text-muted text-sm mt-0.5">{item.desc}</p>
                      {/* NEW: link straight to the full Certifications page */}
                      {isCertifications && (
                        <NavLink to="/certifications" className="glow-navlink inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-2 group">
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
          {/* CHANGED: redesigned to match the compact reference layout — icon, title,
              "Last updated" row, section pills, then action buttons. The stats grid,
              description paragraph, and "Up to date" header badge were removed;
              Open Preview is kept alongside Download Resume per requirements. */}
          {/* CHANGED: h-full + flex column with centered content, so the card
              stretches to match the left column's height (via items-stretch above)
              instead of sitting short at a fixed content height. */}
          <div className="glow-card relative overflow-hidden bg-panel/80 backdrop-blur-md border border-panel-border rounded-3xl p-10 text-center flex flex-col items-center justify-center lg:h-full">
            {/* CHANGED: corner dot/line accents -> full-card generative network pattern
                (same visual language as the site-wide NetworkBackground), clipped to the
                card via the parent's overflow-hidden rounded-3xl. */}
            <CardNetworkPattern />

            <div className="relative z-10 w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-accent/[16%] border border-accent-dim text-accent mb-6">
              <FileText size={26} />
            </div>

            <h2 className="relative z-10 font-display text-xl font-bold">{profile.name} — Resume</h2>

            <p className="relative z-10 inline-flex items-center gap-1.5 text-muted-2 text-sm mt-2.5">
              <Calendar size={14} />
              Last updated: {profile.resumeLastUpdated}
            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-6">
              {resumeSections.map((label) => (
                <span
                  key={label}
                  className="glow-badge text-xs font-medium text-muted bg-bg-alt border border-panel-border rounded-full px-3.5 py-1.5"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CHANGED: flex-wrap -> fixed 2-col grid so the buttons always sit side-by-side, even on narrow screens */}
            <div className="relative z-10 grid grid-cols-2 gap-3 mt-8 w-full max-w-[360px]">
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-3 rounded-full border border-panel-border text-text hover:border-accent hover:text-accent"
              >
                <Eye size={16} /> Open Preview
              </a>
              <a
                href={profile.resumeFile}
                download
                className="glow-btn inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-3 rounded-full bg-accent text-[#06201d]"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
