import Link from "next/link";

import { ImagePanel } from "@/components/image-panel";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

type SectorCardProps = {
  name: string;
  summary: string;
  detail: string;
  focusAreas: string[];
  image: string;
  href: string;
};

export function SectorCard({
  name,
  summary,
  detail,
  focusAreas,
  image,
  href,
}: SectorCardProps) {
  return (
    <Reveal className="sector-card">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Link href={href} className="relative block min-h-[17rem]">
          <ImagePanel
            src={image}
            alt={name}
            eyebrow={name}
            caption={summary}
            className="h-full min-h-[17rem]"
          />
        </Link>
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{name}</h3>
            <p className="text-base leading-7 text-[var(--muted)]">{detail}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((focus) => (
              <span
                key={focus}
                className="border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]"
              >
                {focus}
              </span>
            ))}
          </div>
          <div>
            <ButtonLink href={href} variant="tertiary">
              Review Sector
            </ButtonLink>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
