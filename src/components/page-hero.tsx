import type { ReactNode } from "react";

import { MetadataStrip } from "@/components/metadata-strip";
import { Reveal } from "@/components/reveal";
import { SiteContainer } from "@/components/site-container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  metadata?: string[];
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  metadata,
  aside,
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] pt-28 sm:pt-32">
      <SiteContainer className="pb-12 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal className="space-y-6">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">
              {eyebrow}
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
                {description}
              </p>
            </div>
          </Reveal>
          {aside}
        </div>
        {metadata?.length ? <MetadataStrip items={metadata} className="mt-10" /> : null}
      </SiteContainer>
    </section>
  );
}
