type MetadataStripProps = {
  items: string[];
  className?: string;
};

export function MetadataStrip({ items, className }: MetadataStripProps) {
  return (
    <div
      className={[
        "grid gap-3 border-y border-[var(--line)] py-4 sm:grid-cols-2 lg:grid-cols-5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 border-l border-[var(--line)] pl-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--muted)] first:border-l-0 first:pl-0"
        >
          <span className="h-2 w-2 bg-[var(--accent)]" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
