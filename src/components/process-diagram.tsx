import { Reveal } from "@/components/reveal";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessDiagramProps = {
  steps: ProcessStep[];
};

export function ProcessDiagram({ steps }: ProcessDiagramProps) {
  return (
    <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-6">
      {steps.map((item, index) => (
        <Reveal key={item.step} delay={index * 0.04}>
          <div className="relative h-full bg-[var(--surface)] px-5 py-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                {item.step}
              </span>
              <span className="h-px flex-1 bg-[var(--line)]" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{item.title}</h3>
              <p className="text-sm leading-6 text-[var(--muted)]">{item.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
