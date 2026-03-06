import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { StandardsTagGroup } from "@/components/standards-tag-group";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tags?: string[];
};

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tags,
}: CtaBannerProps) {
  return (
    <Reveal>
      <section className="relative overflow-hidden border border-white/10 bg-[var(--panel-dark)] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-12">
        <div className="grid-overlay absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top,rgba(140,198,195,0.18),transparent_68%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/52">
              Critical Environment Enquiries
            </div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:items-start lg:justify-end">
            {tags?.length ? <StandardsTagGroup tags={tags} dark /> : null}
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="secondary" className="text-white hover:text-white">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
