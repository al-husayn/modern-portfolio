import type { Metadata } from "next";

import Portfolio from "@/components/home/portfolio";
import { ServicesSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";
import { TestimonialsSection } from "@/components/home/testimonials";
import { DATA } from "@/data";
import { absoluteUrl, createSeoMetadata, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: DATA.home.coderProfile.skills,
});

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.home.hero.name,
    jobTitle: DATA.home.hero.title,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    image: absoluteUrl("/AL.jpg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.hero.location,
      addressCountry: "Ghana",
    },
    email: DATA.footer.contact.email,
    sameAs: DATA.footer.socialLinks
      .filter((link) => link.platform !== "RSS")
      .map((link) => link.url),
    knowsAbout: DATA.home.coderProfile.skills,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DATA.home.hero.name,
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personJsonLd, websiteJsonLd]),
        }}
        type="application/ld+json"
      />
      <Portfolio />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
    </>
  );
}
