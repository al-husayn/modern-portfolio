import type { Metadata } from "next";

import { ContactPageClient } from "@/components/contact/contact-page-client";
import { DATA } from "@/data";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact",
  description: DATA.contact.tagline,
  path: "/contact",
  keywords: ["Hire developer", "Contact web developer", "Freelance developer"],
});

export default function ContactPage() {
  return <ContactPageClient />;
}
