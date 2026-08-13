export default function Chip({ children, small = false }) {
  return (
    // GLOW SYSTEM (NEW): added .glow-badge — Chip previously had no hover state
    <span
      className={`glow-badge inline-flex items-center border border-panel-border rounded-full bg-bg-alt text-text ${
        small ? "text-[0.78rem] px-[11px] py-[5px]" : "text-[0.85rem] px-[13px] py-[7px]"
      }`}
    >
      {children}
    </span>
  );
}
