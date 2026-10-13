import type { Metadata } from "next";
import { DM_Serif_Display, Geist } from "next/font/google";
import { AnimationProvider } from "@/features/animations/components/page-animations";
import { BusinessStructuredData } from "@/features/seo/components/structured-data";
import { homeDescription, homeTitle, isIndexable, siteUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displayFont = DM_Serif_Display({
  variable: "--font-veda-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: homeTitle, template: `%s | ${siteConfig.name}` },
  description: homeDescription,
  applicationName: siteConfig.name,
  category: "Dairy farm",
  robots: {
    index: isIndexable, follow: true,
    googleBot: { index: isIndexable, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${displayFont.variable}`}>
      <body><BusinessStructuredData /><AnimationProvider>{children}</AnimationProvider></body>
    </html>
  );
}
