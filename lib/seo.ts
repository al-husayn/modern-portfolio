import type { Metadata } from "next";

import { DATA } from "@/data";

export const SITE_URL = "https://www.al-husayn.dev";
export const SITE_NAME = DATA.home.hero.name;
export const SITE_DESCRIPTION =
  "Al-Hussein Abubakar is a full stack developer in Ghana building fast, accessible, and visually engaging web experiences with React, Next.js, TypeScript, and Tailwind CSS.";
export const DEFAULT_OG_IMAGE = "/github-cover.png";

const defaultKeywords = [
  "Al-Hussein Abubakar",
  "Al-Hussein",
  "Full Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Tailwind CSS",
  "Web Developer Ghana",
  "Kumasi Ghana Developer",
  "Portfolio",
];

type SeoMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  keywords?: readonly string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createSeoMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  authors,
  keywords = [],
}: SeoMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title ?? SITE_NAME,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} portfolio preview`,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE_NAME,
      description,
      images: [imageUrl],
      creator: "@al_drake3",
    },
  };
}
