import type { Metadata } from 'next';

import Portfolio from '@/components/home/portfolio';
import { ServicesSection } from '@/components/home/skills-overview';
import { WorkSection } from '@/components/home/work';
import { TestimonialsSection } from '@/components/home/testimonials';
import { DATA } from '@/data';
import { absoluteUrl, createSeoMetadata, SITE_DESCRIPTION } from '@/lib/seo';

const { home, hero, footer } = DATA;

export const metadata: Metadata = createSeoMetadata({
  description: SITE_DESCRIPTION,
  path: '/',
  keywords: home.coderProfile.skills,
});

export default function HomePage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: home.hero.name,
    jobTitle: home.hero.title,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/'),
    image: absoluteUrl('/AL.jpg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: hero.location,
      addressCountry: 'Ghana',
    },
    email: footer.contact.email,
    sameAs: footer.socialLinks.filter((link) => link.platform !== 'RSS').map((link) => link.url),
    knowsAbout: home.coderProfile.skills,
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: home.hero.name,
    url: absoluteUrl('/'),
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
