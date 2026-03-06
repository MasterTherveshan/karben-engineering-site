"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandLockup } from "@/components/brand-lockup";
import { ButtonLink } from "@/components/button-link";
import { SiteContainer } from "@/components/site-container";
import { navigation } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[var(--line-strong)] bg-[rgba(245,243,238,0.9)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <SiteContainer>
        <div className="flex min-h-[5.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Karben Engineering home">
            <BrandLockup compact />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]",
                  pathname === item.href && "text-[var(--ink)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <ButtonLink href="/contact">Discuss a Project</ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--line)] text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </SiteContainer>
      {open ? (
        <div className="border-t border-[var(--line)] bg-[rgba(245,243,238,0.98)] backdrop-blur-xl lg:hidden">
          <SiteContainer className="flex flex-col gap-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-[var(--line)] py-3 text-sm uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]",
                  pathname === item.href && "text-[var(--ink)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <ButtonLink href="/contact">Discuss a Project</ButtonLink>
            </div>
          </SiteContainer>
        </div>
      ) : null}
    </header>
  );
}
