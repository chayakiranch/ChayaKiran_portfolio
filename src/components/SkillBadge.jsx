// Consistent pill badge for every technology across all Skill cards.
// Deliberately has NO per-category color variants — one style everywhere.
export default function SkillBadge({ children }) {
  return (
    // GLOW SYSTEM: unified via .glow-badge (see index.css)
    <span
      className="glow-badge inline-flex items-center rounded-full border border-accent/30 bg-accent/[0.06]
                 text-text text-[0.72rem] px-2.5 py-1 leading-none"
    >
      {children}
    </span>
  );
}
