import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { ImagePanel } from "@/components/image-panel";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/site-container";
import { StandardsTagGroup } from "@/components/standards-tag-group";
import { sectorIntros, standardsTags } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Sector-specific engineering support for healthcare, laboratories, pharma, food processing, industrial facilities and higher-performance buildings.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Specialist air cleanliness engineering shaped around the environment, not a generic sector list."
        description="Different environments carry different contamination, hygiene and compliance risks. Karben adapts the technical response accordingly while keeping the same discipline around measurement, filtration strategy, pressure relationships and documented performance."
        metadata={["Healthcare", "Labs & pharma", "Food & industrial", "Commercial & institutional"]}
        aside={
          <Reveal className="relative min-h-[22rem] lg:min-h-[28rem]">
            <ImagePanel
              src="/images/image7.png"
              alt="Filtration engineering detail"
              eyebrow="Engineering Detail"
              caption="Clean edges, measured tolerances and systems that can be defended under review."
              className="h-full min-h-[22rem] lg:min-h-[28rem]"
            />
          </Reveal>
        }
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Sector Focus"
            index="01"
            title="Each sector needs its own environmental logic."
            description="The consultancy is designed to work with clients who need more than equipment selection. They need a technically coherent view of cleanliness risk, room behavior, filtration duty and validation readiness."
          />
        </SiteContainer>
      </section>

      <div className="border-y border-[var(--line)]">
        {sectorIntros.map((sector, index) => (
          <section
            key={sector.slug}
            className={index % 2 === 0 ? "bg-transparent" : "bg-[rgba(255,255,255,0.28)]"}
          >
            <SiteContainer className="grid gap-8 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-20">
              <Reveal className={index % 2 === 0 ? "" : "lg:order-2"}>
                <div className="relative min-h-[22rem] lg:min-h-[32rem]">
                  <ImagePanel
                    src={sector.image}
                    alt={sector.name}
                    eyebrow={sector.name}
                    caption={sector.summary}
                    className="h-full min-h-[22rem] lg:min-h-[32rem]"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-6" delay={0.08}>
                <div className="space-y-4">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                    Sector {`${index + 1}`.padStart(2, "0")}
                  </div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                    {sector.name}
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
                  {sector.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <StandardsTagGroup tags={sector.focusAreas} />
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="service-card space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Where clients need support
                    </div>
                    <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                      {sector.clientNeeds.map((need) => (
                        <li key={need} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-card space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Typical outputs
                    </div>
                    <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                      {sector.outputs.map((output) => (
                        <li
                          key={output}
                          className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0"
                        >
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </SiteContainer>
          </section>
        ))}
      </div>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer>
          <CtaBanner
            title="Working in a sector where environmental drift carries operational consequences?"
            description="Karben supports healthcare groups, laboratory teams, industrial operators, building owners and consultant teams that need stronger technical clarity."
            primaryHref="/contact"
            primaryLabel="Discuss Your Environment"
            secondaryHref="/services"
            secondaryLabel="Review Services"
            tags={standardsTags}
          />
        </SiteContainer>
      </section>
    </>
  );
}
