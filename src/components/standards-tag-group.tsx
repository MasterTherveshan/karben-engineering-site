import { cn } from "@/lib/utils";

type StandardsTagGroupProps = {
  tags: string[];
  dark?: boolean;
  className?: string;
};

export function StandardsTagGroup({
  tags,
  dark = false,
  className,
}: StandardsTagGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "inline-flex items-center border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em]",
            dark
              ? "border-white/10 bg-white/5 text-white/70"
              : "border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--muted)]",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
