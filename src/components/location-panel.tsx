import Link from "next/link";

import { contactDetails, siteMeta } from "@/content/site-content";

export function LocationPanel() {
  return (
    <aside className="relative overflow-hidden border border-[var(--line)] bg-[var(--panel-dark)] px-6 py-8 text-white sm:px-8">
      <div className="grid-overlay absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,198,195,0.2),transparent_52%)]" />
      <div className="relative space-y-8">
        <div className="space-y-4">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-white/50">
            Durban Base
          </div>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
            {siteMeta.location}
          </h3>
          <p className="max-w-md text-base leading-7 text-white/70">
            Karben supports project teams that need specialist guidance on clean, controlled and compliance-sensitive environments.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-[rgba(10,16,19,0.86)] px-4 py-4">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                Base
              </div>
              <div className="mt-2 text-sm text-white/74">Durban, KwaZulu-Natal</div>
            </div>
            <div className="bg-[rgba(10,16,19,0.86)] px-4 py-4">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                Coordinates
              </div>
              <div className="mt-2 text-sm text-white/74">{siteMeta.coordinates}</div>
            </div>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-[rgba(10,16,19,0.86)] px-4 py-4">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                Email
              </div>
              <Link
                href={`mailto:${contactDetails.email}`}
                className="mt-2 block text-sm text-white/74 transition-colors hover:text-white"
              >
                {contactDetails.email}
              </Link>
            </div>
            <div className="bg-[rgba(10,16,19,0.86)] px-4 py-4">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
                Phone
              </div>
              <Link
                href={`tel:${contactDetails.phoneHref}`}
                className="mt-2 block text-sm text-white/74 transition-colors hover:text-white"
              >
                {contactDetails.phoneDisplay}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[16rem] bg-[linear-gradient(135deg,rgba(140,198,195,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03)),repeating-linear-gradient(90deg,transparent_0,transparent_11%,rgba(255,255,255,0.05)_11%,rgba(255,255,255,0.05)_11.3%),repeating-linear-gradient(0deg,transparent_0,transparent_11%,rgba(255,255,255,0.04)_11%,rgba(255,255,255,0.04)_11.3%)]">
            <div className="absolute left-[58%] top-[54%] h-3.5 w-3.5 border-2 border-[var(--accent)] bg-transparent" />
            <div className="absolute left-[48%] top-[30%] h-px w-[14%] bg-[var(--accent)]" />
            <div className="absolute left-[62%] top-[40%] h-[18%] w-px bg-[var(--accent)]" />
            <div className="absolute left-[14%] top-[12%] font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
              Southern Africa / Location Panel
            </div>
            <div className="absolute left-[calc(58%+1rem)] top-[calc(54%-0.5rem)] font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/72">
              Durban
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
