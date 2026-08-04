export default function Chip({ children, small = false }) {
  return (
    <span
      className={`inline-flex items-center border border-panel-border rounded-full bg-bg-alt text-text ${
        small ? "text-[0.78rem] px-[11px] py-[5px]" : "text-[0.85rem] px-[13px] py-[7px]"
      }`}
    >
      {children}
    </span>
  );
}
