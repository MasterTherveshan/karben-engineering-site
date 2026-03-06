import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/site-container";
import { contactDetails, siteMeta } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss a hospital, laboratory, industrial or commercial environmental control project with Karben Engineering.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Need clarity on a critical environment?"
        description="Tell us what environment you are working in, what performance issue you face, and where you are in the project lifecycle."
        metadata={["Serious enquiries", "Critical environments", "Durban, South Africa", "Early advisory to validation"]}
        aside={
          <Reveal className="relative overflow-hidden border border-white/10 bg-[var(--panel-dark)] p-6 text-white sm:p-8">
            <div className="grid-overlay absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,198,195,0.16),transparent_48%)]" />
            <div className="relative space-y-5">
              <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white">
                Direct Contact
              </div>
              <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
                <div className="bg-[rgba(255,255,255,0.04)] px-5 py-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                    Base
                  </div>
                  <div className="mt-3 text-base text-white/84">{siteMeta.location}</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.04)] px-5 py-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                    Email
                  </div>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-3 block text-base text-white/84 transition-colors hover:text-[var(--accent)]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <div className="bg-[rgba(255,255,255,0.04)] px-5 py-5">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                    Phone
                  </div>
                  <a
                    href={`tel:${contactDetails.phoneHref}`}
                    className="mt-3 block text-base text-white/84 transition-colors hover:text-[var(--accent)]"
                  >
                    {contactDetails.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        }
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <SiteContainer className="space-y-12">
          <SectionHeader
            eyebrow="Enquiry Form"
            index="01"
            title="Project information first."
            description="A concise technical brief is the fastest route to meaningful advice. Use the form to describe the environment, the risk, and the decision that needs to be made."
          />
          <Reveal className="service-card">
            <ContactForm />
          </Reveal>
        </SiteContainer>
      </section>

      <section className="border-y border-[var(--line)] py-20 sm:py-24 lg:py-28">
        <SiteContainer className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Environment",
              body: "Tell Karben whether the project concerns healthcare, laboratory, industrial, institutional or another controlled environment.",
            },
            {
              title: "Issue",
              body: "Explain the performance concern: contamination risk, filtration uncertainty, pressure instability, hygiene exposure or weak documentation.",
            },
            {
              title: "Lifecycle",
              body: "Indicate whether the need is early advisory, design review, upgrade planning, commissioning support or post-occupancy investigation.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} className="service-card" delay={index * 0.04}>
              <div className="space-y-4">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                  {item.title}
                </div>
                <p className="text-base leading-7 text-[var(--muted)]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </SiteContainer>
      </section>
    </>
  );
}
