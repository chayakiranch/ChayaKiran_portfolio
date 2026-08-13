// Consistent pill badge for every technology across all Skill cards.
// Deliberately has NO per-category color variants — one style everywhere.
export default function SkillBadge({ children }) {
  return (
    // SIZE REDUCED: text-[0.82rem] px-3.5 py-[7px] -> text-[0.72rem] px-2.5 py-1
    <span
      className="inline-flex items-center rounded-full border border-accent/30 bg-accent/[0.06]
                 text-text text-[0.72rem] px-2.5 py-1 leading-none
                 transition-all duration-200 ease-out
                 hover:scale-105 hover:border-accent hover:bg-accent/10
                 hover:shadow-[0_0_10px_rgba(79,209,197,0.35)]"
    >
      {children}
    </span>
  );
}
