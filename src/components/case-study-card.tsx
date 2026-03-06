import { ImagePanel } from "@/components/image-panel";
import { Reveal } from "@/components/reveal";

type CaseStudyCardProps = {
  title: string;
  sector: string;
  challenge: string;
  response: string;
  outcome: string;
  image: string;
};

export function CaseStudyCard({
  title,
  sector,
  challenge,
  response,
  outcome,
  image,
}: CaseStudyCardProps) {
  return (
    <Reveal className="case-study-card">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[18rem]">
          <ImagePanel
            src={image}
            alt={title}
            eyebrow={sector}
            caption="Representative project profile"
            className="h-full min-h-[18rem]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{title}</h3>
            <p className="text-base leading-7 text-[var(--muted)]">{challenge}</p>
            <p className="text-base leading-7 text-[var(--muted)]">{response}</p>
          </div>
          <div className="mt-auto border-t border-[var(--line)] pt-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              {outcome}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
