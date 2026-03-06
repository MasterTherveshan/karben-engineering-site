import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { ImagePanel } from "@/components/image-panel";
import { MetadataStrip } from "@/components/metadata-strip";
import { ProcessDiagram } from "@/components/process-diagram";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SectorCard } from "@/components/sector-card";
import { ServicePillarCard } from "@/components/service-pillar-card";
import { SiteContainer } from "@/components/site-container";
import { StandardsTagGroup } from "@/components/standards-tag-group";
import { TrustBar } from "@/components/trust-bar";
import {
  aboutOverview,
  capabilities,
  featurePanel,
  heroMeta,
  homeServicePillars,
  leadership,
  processSteps,
  sectorIntros,
  standardsTags,
  trustSignals,
} from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[var(--line)] pt-28 sm:pt-32 lg:pt-36">
        <SiteContainer className="pb-12 sm:pb-16 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <Reveal className="space-y-8">
              <div className="space-y-4">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">
                  Air Cleanliness & Filtration Engineering Division
                </div>
                <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.07em] text-[var(--ink)] sm:text-6xl lg:text-[5.35rem] lg:leading-[0.94]">
                  Air cleanliness engineering for critical environments.
                </h1>
                <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
                  Karben Engineering helps hospitals, laboratories, industrial facilities
                  and commercial buildings achieve cleaner air, controlled environments,
                  validated filtration performance and compliance-ready documentation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/services">View Services</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Discuss a Project
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal className="relative min-h-[24rem] lg:min-h-[40rem]" delay={0.1}>
              <ImagePanel
                src="/images/image1.png"
                alt="Critical air-controlled interior"
                eyebrow="Critical Environment"
                caption="Quiet, exact environments demand measured air quality performance."
                className="h-full min-h-[24rem] lg:min-h-[40rem]"
                priority
              />
            </Reveal>
          </div>
          <MetadataStrip items={heroMeta} className="mt-10" />
        </SiteContainer>
      </section>

      <section className="py-10 sm:py-12">
        <SiteContainer>
          <TrustBar items={trustSignals} />
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Core Scope"
            index="01"
            title="What Karben does"
            description="A specialist scope built around contamination control, filtration strategy, pressure relationships and verifiable environmental performance."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeServicePillars.map((pillar, index) => (
              <ServicePillarCard
                key={pillar.title}
                index={`${index + 1}`.padStart(2, "0")}
                title={pillar.title}
                description={pillar.description}
                tag={pillar.tag}
              />
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <SiteContainer>
          <div className="grid gap-8 border border-[var(--line)] bg-[var(--panel-dark)] p-6 text-white sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <Reveal className="space-y-6">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-white/50">
                {featurePanel.eyebrow}
              </div>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                {featurePanel.title}
              </h2>
              <div className="space-y-4 text-base leading-7 text-white/68 sm:text-lg">
                {featurePanel.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <StandardsTagGroup tags={featurePanel.tags} dark />
            </Reveal>
            <Reveal className="relative min-h-[22rem] lg:min-h-[32rem]" delay={0.1}>
              <ImagePanel
                src="/images/image2.png"
                alt="Abstract airflow and pressure gradients"
                eyebrow="Pressure / Airflow / Filtration"
                caption="Air quality performance should be designed, measured and verified."
                className="h-full min-h-[22rem] border-white/10 lg:min-h-[32rem]"
              />
            </Reveal>
          </div>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Sectors"
            index="02"
            title="Specialist support across high-consequence environments"
            description="The work changes by sector, but the discipline stays the same: define the risk, establish the environmental requirement, and verify the system against it."
          />
          <div className="grid gap-5">
            {sectorIntros.map((sector) => (
              <SectorCard
                key={sector.slug}
                name={sector.name}
                summary={sector.summary}
                detail={sector.detail}
                focusAreas={sector.focusAreas}
                image={sector.image}
                href="/sectors"
              />
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Method"
            index="03"
            title="A process that keeps technical intent intact"
            description="From first assessment through final records, the sequence is built to reduce drift, reveal weak assumptions early and support validation."
          />
          <ProcessDiagram steps={processSteps} />
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Capabilities"
            index="04"
            title="Select capabilities"
            description="A premium engineering scope delivered through concise review, measured diagnostics and documentation fit for internal and external scrutiny."
          />
          <Reveal className="overflow-hidden border border-[var(--line)]">
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div key={capability} className="bg-[var(--surface-elevated)] px-5 py-5">
                  <div className="font-mono text-[0.74rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer>
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <Reveal className="space-y-6">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">
                Leadership
              </div>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                Expert-led environmental control support.
              </h2>
              <div className="space-y-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
                {aboutOverview.paragraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <StandardsTagGroup tags={standardsTags} />
            </Reveal>
            <Reveal className="service-card flex flex-col gap-8" delay={0.08}>
              <div className="space-y-3">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                  Leadership Reference
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                  {leadership.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  {leadership.role}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
                {leadership.experience}
              </p>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
                {leadership.summary}
              </p>
              <div className="pt-2">
                <ButtonLink href="/about" variant="tertiary">
                  Review Practice Background
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer>
          <CtaBanner
            title="Need clarity on a critical environment?"
            description="Karben supports clients who need a measured view of air cleanliness risk, filtration performance, pressure relationships or validation scope."
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
