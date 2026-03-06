import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("space-y-5", className)}>
      <div
        className={cn(
          "flex gap-4",
          align === "center" ? "flex-col items-center text-center" : "flex-col",
        )}
      >
        <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">
          {index ? <span>{index}</span> : null}
          <span className="h-px w-12 bg-[var(--line)]" />
          <span>{eyebrow}</span>
        </div>
        <div className={cn("space-y-4", align === "center" ? "max-w-3xl" : "max-w-2xl")}>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
