// CHANGED: numbered badge (e.g. "01") removed; eyebrow, title, and lead now
// horizontally centered for a consistent look across every page that uses this component.
export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="text-center">
      <p className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
        {eyebrow}
      </p>
      <h1 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight max-w-[820px] mx-auto">
        {title}
      </h1>
      {lead && <p className="text-muted text-[1.05rem] max-w-[620px] mx-auto mt-3.5">{lead}</p>}
    </div>
  );
}
