import { Reveal } from "@/components/reveal";

type ServicePillarCardProps = {
  title: string;
  description: string;
  tag: string;
  index: string;
};

export function ServicePillarCard({
  title,
  description,
  tag,
  index,
}: ServicePillarCardProps) {
  return (
    <Reveal className="service-card h-full">
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
              {index}
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{title}</h3>
          <p className="text-base leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
          {tag}
        </span>
      </div>
    </Reveal>
  );
}
