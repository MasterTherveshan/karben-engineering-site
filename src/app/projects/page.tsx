import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { ImagePanel } from "@/components/image-panel";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/site-container";
import { projectProfiles, standardsTags } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative project profiles covering healthcare, laboratory and food processing environments where air cleanliness and pressure control matter.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Profiles"
        title="Editorial project profiles structured around challenge, scope and outcome."
        description="Named client case studies are not published here unless they can be presented responsibly. Instead, Karben uses representative project profiles to show the type of technical problems handled and the style of engineering response delivered."
        metadata={["Representative profiles", "Anonymous structures", "Challenge / response / outcome"]}
        aside={
          <Reveal className="service-card bg-[var(--panel-dark)] text-white">
            <div className="space-y-5">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
                Presentation Standard
              </div>
              <p className="text-base leading-7 text-white/70">
                No named clients are fabricated. Each profile is positioned as a representative structure so the technical logic is clear without overstating delivered work.
              </p>
            </div>
          </Reveal>
        }
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Profiles"
            index="01"
            title="Case studies designed to show how Karben frames risk and response."
            description="The aim is clarity. Each profile explains the challenge, the engineering response, the scope and the documented outcome without drifting into generic project language."
          />
          <div className="grid gap-8">
            {projectProfiles.map((project, index) => (
              <Reveal key={project.title} className="overflow-hidden border border-[var(--line)]">
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                    <div className="relative min-h-[22rem] lg:min-h-[34rem]">
                      <ImagePanel
                        src={project.image}
                        alt={project.title}
                        eyebrow={project.sector}
                        caption="Representative project profile"
                        className="h-full min-h-[22rem] lg:min-h-[34rem]"
                      />
                    </div>
                  </div>
                  <div
                    className={`grid gap-px bg-[var(--line)] ${
                      index % 2 === 0 ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="bg-[var(--surface-elevated)] px-6 py-6 lg:px-8 lg:py-8">
                      <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                        {project.sector}
                      </div>
                      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-4xl">
                        {project.title}
                      </h2>
                    </div>
                    <div className="grid gap-px bg-[var(--line)] lg:grid-cols-2">
                      <div className="bg-[var(--surface-elevated)] px-6 py-6">
                        <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                          Challenge
                        </div>
                        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                          {project.challenge}
                        </p>
                      </div>
                      <div className="bg-[var(--surface-elevated)] px-6 py-6">
                        <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                          Engineering response
                        </div>
                        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                          {project.response}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-px bg-[var(--line)] lg:grid-cols-2">
                      <div className="bg-[var(--surface-elevated)] px-6 py-6">
                        <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                          Scope
                        </div>
                        <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                          {project.scope.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[var(--surface-elevated)] px-6 py-6">
                        <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                          Deliverables
                        </div>
                        <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                          {project.deliverables.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-[var(--panel-dark)] px-6 py-6 text-white">
                      <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
                        Outcome
                      </div>
                      <p className="mt-4 text-base leading-7 text-white/72">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-8">
          <SectionHeader
            eyebrow="Publishing Logic"
            index="02"
            title="A premium case study page should inform, not overclaim."
            description="When named projects are ready for publication, the same structure can be expanded with approved client context, measured results, photographs and more detailed validation records."
          />
        </SiteContainer>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer>
          <CtaBanner
            title="Need a representative project structure tailored to your environment?"
            description="Karben can frame project scope, risk points, deliverables and validation approach early so teams can align before implementation hardens weak assumptions."
            primaryHref="/contact"
            primaryLabel="Discuss a Project"
            secondaryHref="/services"
            secondaryLabel="Review Services"
            tags={standardsTags}
          />
        </SiteContainer>
      </section>
    </>
  );
}
