import Image from "next/image";

import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function ImagePanel({
  src,
  alt,
  eyebrow,
  caption,
  className,
  priority = false,
}: ImagePanelProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden border border-[var(--line)] bg-[var(--surface-muted)]",
        className,
      )}
    >
      <div className="grid-overlay absolute inset-0 z-10" aria-hidden="true" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[rgba(11,17,21,0.52)] via-transparent to-transparent" />
      {eyebrow ? (
        <div className="absolute left-4 top-4 z-30 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-white/72">
          {eyebrow}
        </div>
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {caption ? (
        <figcaption className="absolute bottom-0 left-0 z-30 max-w-[22rem] p-5 text-sm leading-6 text-white/84">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
