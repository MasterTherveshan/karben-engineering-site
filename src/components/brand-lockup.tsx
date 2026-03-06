import { siteMeta } from "@/content/site-content";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLockup({ compact = false, className }: BrandLockupProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-[0.66rem] uppercase tracking-[0.35em] text-[var(--muted)]">
        Specialist Engineering Consultancy
      </span>
      <div className="flex flex-col gap-0.5">
        <span
          className={cn(
            "text-balance font-semibold uppercase tracking-[0.14em] text-[var(--ink)]",
            compact ? "text-sm" : "text-lg",
          )}
        >
          {siteMeta.name}
        </span>
        <span
          className={cn(
            "max-w-[18rem] text-pretty text-[var(--muted)]",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {siteMeta.division}
        </span>
      </div>
    </div>
  );
}
