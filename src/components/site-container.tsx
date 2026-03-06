import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({ children, className }: SiteContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[90rem] px-4 sm:px-6", className)}>{children}</div>;
}
