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

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.al-husayn.dev/"),
  title: {
    default: DATA.home.hero.name,
    template: `%s | ${DATA.home.hero.name}`,
  },

  description: DATA.home.hero.subtitle,
  openGraph: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    description: DATA.home.hero.subtitle,
    siteName: DATA.home.hero.name,
    locale: "en_US",
    type: "website",
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
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
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
