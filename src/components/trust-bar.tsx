import { Reveal } from "@/components/reveal";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <Reveal>
      <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-5">
        {items.map((item) => (
          <div key={item} className="bg-[var(--surface)] px-5 py-5">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              {item}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
