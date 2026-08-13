import { Code2, Layout, Server, Cloud, Database, Cpu } from "lucide-react";
import SkillBadge from "./SkillBadge";

// Maps the string keys in skillsData.js to lucide icons, matching the
// icon library already used throughout the rest of the portfolio.
const ICON_MAP = {
  code: Code2,
  layout: Layout,
  server: Server,
  cloud: Cloud,
  database: Database,
  cpu: Cpu,
};

export default function SkillCard({ category, icon, items }) {
  const Icon = ICON_MAP[icon] ?? Code2;

  return (
    // GLOW SYSTEM: unified via .glow-card (see index.css)
    <div
      className="glow-card group flex flex-col h-full bg-panel/80 backdrop-blur-md
                 border border-panel-border rounded-xl p-5
                 shadow-md shadow-black/20"
    >
      {/* SIZE REDUCED: gap-3.5 mb-6 -> gap-2.5 mb-4 */}
      <div className="flex items-center gap-2.5 mb-4">
        {/* SIZE REDUCED: w-11 h-11 rounded-xl -> w-8 h-8 rounded-lg, icon 20 -> 16 */}
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0
                     bg-accent/10 border border-accent/20
                     transition-transform duration-300 ease-out
                     group-hover:scale-110 group-hover:rotate-6"
        >
          <Icon size={16} className="text-accent" strokeWidth={1.75} />
        </div>
        {/* SIZE REDUCED: text-lg -> text-[0.95rem] */}
        <h3 className="font-display text-[0.95rem] font-semibold text-text">{category}</h3>
      </div>

      {/* SIZE REDUCED: gap-2.5 -> gap-1.5 */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {items.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
    </div>
  );
}
