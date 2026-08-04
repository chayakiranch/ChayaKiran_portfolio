export default function SectionHeading({ tag, eyebrow, title, lead }) {
  return (
    <div>
      <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] uppercase text-accent mb-5">
        <span className="font-mono text-[0.72rem] text-muted-2 border border-panel-border rounded px-1.5 py-0.5">
          {tag}
        </span>
        {eyebrow}
      </p>
      <h1 className="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-tight tracking-tight max-w-[820px]">
        {title}
      </h1>
      {lead && <p className="text-muted text-[1.05rem] max-w-[620px] mt-3.5">{lead}</p>}
    </div>
  );
}
