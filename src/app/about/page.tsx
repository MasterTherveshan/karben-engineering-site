import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/site-container";
import { StandardsTagGroup } from "@/components/standards-tag-group";
import {
  aboutOverview,
  aboutPrinciples,
  leadership,
  siteMeta,
  standardsTags,
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Karben Engineering's Air Cleanliness & Filtration Engineering Division, its technical rigor and its Durban base.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={aboutOverview.title}
        description="Karben is positioned as a serious specialist practice for clients who need environmental control decisions made with precision, restraint and technical accountability."
        metadata={["Durban base", "Professional engineering leadership", "Design-aware", "Compliance-aware"]}
        aside={
          <Reveal className="service-card">
            <div className="space-y-5">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Leadership
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                {leadership.name}
              </h2>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                {leadership.role}
              </p>
              <p className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
                {leadership.experience}
              </p>
              <p className="text-base leading-7 text-[var(--muted)]">{leadership.summary}</p>
            </div>
          </Reveal>
        }
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Overview"
            index="01"
            title="Why this division exists"
            description="Critical environments often sit between disciplines. They are too important for generic HVAC treatment and too operationally consequential for vague performance language."
          />
          <Reveal className="space-y-5">
            {aboutOverview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-[var(--muted)] sm:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Practice Principles"
            index="02"
            title="A calm, exacting approach to technical rigor"
            description="The practice is built around clarity of environmental intent, coordination discipline and reporting that can survive scrutiny."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {aboutPrinciples.map((principle, index) => (
              <Reveal key={principle.title} className="service-card" delay={index * 0.04}>
                <div className="space-y-4">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                    Principle {`${index + 1}`.padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {principle.title}
                  </h3>
                  <p className="text-base leading-7 text-[var(--muted)]">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal className="service-card space-y-6">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Working Context
            </div>
            <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
              <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
                <div className="bg-[var(--surface-elevated)] px-5 py-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Base
                  </div>
                  <div className="mt-3 text-base text-[var(--ink)]">{siteMeta.location}</div>
                </div>
                <div className="bg-[var(--surface-elevated)] px-5 py-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Positioning
                  </div>
                  <div className="mt-3 text-base text-[var(--ink)]">{siteMeta.strapline}</div>
                </div>
              </div>
              <div className="bg-[var(--surface-elevated)] px-5 py-5">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  Supporting Line
                </div>
                <div className="mt-3 text-base text-[var(--ink)]">{siteMeta.supportingLine}</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="service-card space-y-6" delay={0.06}>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Practice Markers
            </div>
            <p className="text-base leading-7 text-[var(--muted)]">
              Karben is intended to feel senior, precise and technically grounded. The
              consultancy is positioned to work with architects, healthcare groups,
              facility owners, industrial operators and consultant teams that need
              specialist environmental control input early enough to matter.
            </p>
            <StandardsTagGroup tags={standardsTags} />
          </Reveal>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Leadership Note"
            index="03"
            title="Leadership shaped by long-form HVAC and specialist environment work."
            description="The emphasis remains technical rather than biographical: long experience in HVAC building services, specialist environments and pressure-sensitive systems where performance discipline matters."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {leadership.specialisms.map((specialism, index) => (
              <Reveal key={specialism} className="service-card" delay={index * 0.03}>
                <div className="space-y-4">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                    Specialty {`${index + 1}`.padStart(2, "0")}
                  </div>
                  <p className="text-base leading-7 text-[var(--muted)]">{specialism}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer>
          <CtaBanner
            title="Need specialist input from assessment through validation?"
            description="Karben works with serious clients who need clearer environmental control strategy, stronger documentation and measured technical support."
            primaryHref="/contact"
            primaryLabel="Discuss Your Project"
            secondaryHref="/services"
            secondaryLabel="Review Services"
            tags={standardsTags}
          />
        </SiteContainer>
      </section>
    </>
  );
}
