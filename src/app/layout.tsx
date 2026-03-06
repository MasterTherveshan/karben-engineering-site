import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { siteMeta } from "@/content/site-content";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} | ${siteMeta.division}`,
    template: `%s | ${siteMeta.name}`,
  },
  description:
    "Specialist air cleanliness and filtration engineers for critical environments in healthcare, laboratories, industrial facilities and higher-performance buildings.",
  applicationName: siteMeta.name,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.strapline,
    siteName: siteMeta.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
