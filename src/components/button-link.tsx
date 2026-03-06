import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 border px-5 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-200",
        variant === "primary" &&
          "border-[var(--accent)] bg-[var(--accent)] text-[var(--panel-dark)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]",
        variant === "secondary" &&
          "border-[var(--line-strong)] bg-transparent text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--surface-muted)]",
        variant === "tertiary" &&
          "border-transparent bg-transparent px-0 text-[var(--ink)] hover:text-[var(--accent-strong)]",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
