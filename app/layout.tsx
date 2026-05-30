import "@/app/globals.css";

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { DATA } from "@/data";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";
import { StarsBackground } from "@/components/backgrounds/stars";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  title: {
    default: `${SITE_NAME} | ${DATA.home.hero.title}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Al-Hussein Abubakar",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer Ghana",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      default: `${SITE_NAME} | ${DATA.home.hero.title}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio preview`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: {
      default: `${SITE_NAME} | ${DATA.home.hero.title}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    card: "summary_large_image",
    creator: "@al_drake3",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const content = (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html
      suppressHydrationWarning
      className={clsx(geistSans.variable, geistMono.variable, "antialiased")}
      lang="en"
    >
      <body className="min-h-screen font-sans antialiased bg-background">
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          <StarsBackground pointerEvents={false}>{content}</StarsBackground>
        </Providers>
      </body>
    </html>
  );
}
