import Link from "next/link";

import { BrandLockup } from "@/components/brand-lockup";
import { contactDetails, navigation, siteMeta, standardsTags } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel-dark)] text-white">
      <div className="mx-auto grid w-full max-w-[90rem] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <BrandLockup className="[&_span]:text-white [&_span:last-child]:text-white/60" />
          <p className="max-w-xl text-base leading-7 text-white/68">
            {siteMeta.strapline} {siteMeta.supportingLine}
          </p>
        </div>
        <div className="space-y-4">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
            Navigation
          </div>
          <div className="grid grid-cols-2 gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.14em] text-white/68 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
            Contact
          </div>
          <Link
            href={`mailto:${contactDetails.email}`}
            className="block text-sm text-white/68 transition-colors hover:text-white"
          >
            {contactDetails.email}
          </Link>
          <Link
            href={`tel:${contactDetails.phoneHref}`}
            className="block text-sm text-white/68 transition-colors hover:text-white"
          >
            {contactDetails.phoneDisplay}
          </Link>
          <div className="flex flex-wrap gap-2">
            {standardsTags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/66"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-white/56">{siteMeta.location}</p>
        </div>
      </div>
    </footer>
  );
}
