import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/site-container";
import { StandardsTagGroup } from "@/components/standards-tag-group";
import { services, standardsTags } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air cleanliness assessments, filtration engineering, pressure cascade planning, controlled environment advisory, validation support and technical reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technical services for environments that cannot rely on generic HVAC thinking."
        description="Karben's service scope is built around contamination control, filtration duty, pressure-managed spaces, environmental performance review and compliance-aware reporting."
        metadata={["Assessments", "Filtration strategy", "Pressure zoning", "Validation support"]}
        aside={
          <Reveal className="service-card">
            <div className="space-y-5">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Service Index
              </div>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <a
                    key={service.slug}
                    href={`#${service.slug}`}
                    className="flex items-center gap-4 border-b border-[var(--line)] pb-3 text-sm uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    <span className="font-mono text-[0.72rem] tracking-[0.24em] text-[var(--accent-strong)]">
                      {`${index + 1}`.padStart(2, "0")}
                    </span>
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        }
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Service Logic"
            index="01"
            title="Each service explains the problem, the engineering need and the document trail."
            description="The objective is not a menu of generic HVAC tasks. It is a specialist scope tied to risk reduction, clearer environmental control and evidence-based decision-making."
          />
          <StandardsTagGroup tags={standardsTags} />
        </SiteContainer>
      </section>

      <div className="border-y border-[var(--line)]">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            className={index % 2 === 0 ? "bg-transparent" : "bg-[rgba(255,255,255,0.32)]"}
          >
            <SiteContainer className="grid gap-8 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <div className="service-card space-y-6">
                  <div className="space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                      Service {`${index + 1}`.padStart(2, "0")}
                    </div>
                    <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-4xl">
                      {service.name}
                    </h2>
                    <p className="text-base leading-7 text-[var(--muted)]">{service.summary}</p>
                  </div>
                  <StandardsTagGroup tags={service.tags} />
                </div>
              </Reveal>

              <Reveal className="space-y-5" delay={0.08}>
                <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
                  <div className="bg-[var(--surface-elevated)] px-6 py-6">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      What it is
                    </div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.summary}</p>
                  </div>
                  <div className="bg-[var(--surface-elevated)] px-6 py-6">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Why a client needs it
                    </div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.why}</p>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  <div className="service-card space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Typical Risks It Solves
                    </div>
                    <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                      {service.risks.map((risk) => (
                        <li key={risk} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-card space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Typical Outcomes
                    </div>
                    <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0"
                        >
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-card space-y-4">
                    <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      Typical Environments
                    </div>
                    <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                      {service.environments.map((environment) => (
                        <li
                          key={environment}
                          className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0"
                        >
                          {environment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-card space-y-4">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                    Outputs
                  </div>
                  <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                    {service.outputs.map((output) => (
                      <div key={output} className="bg-[var(--surface-elevated)] px-5 py-5">
                        <span className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                          {output}
                        </span>
                      </div>
                    ))}
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
            title="Need a specialist view before the problem gets buried in generic design scope?"
            description="Karben supports early-stage advisory work, targeted engineering reviews and later-stage validation where environmental performance needs to be made explicit."
            primaryHref="/contact"
            primaryLabel="Discuss Your Project"
            secondaryHref="/sectors"
            secondaryLabel="Review Sectors"
            tags={standardsTags}
          />
        </SiteContainer>
      </section>
    </>
  );
}
