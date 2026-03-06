import "@/app/globals.css";

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Manrope } from "next/font/google";

import { DATA } from "@/data";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.al-husayn.dev"),
  title: {
    default: `${DATA.home.hero.name} | Frontend Engineer`,
    template: `%s | ${DATA.home.hero.name}`,
  },

  description: DATA.home.hero.summary,
  openGraph: {
    title: {
      default: `${DATA.home.hero.name} | Frontend Engineer`,
      template: `%s | ${DATA.home.hero.name}`,
    },
    description: DATA.home.hero.summary,
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
    <main className="relative min-h-screen overflow-x-clip">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-stone-50 font-sans text-zinc-950 antialiased dark:bg-zinc-950 dark:text-white",
          manrope.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            disableTransitionOnChange: true,
          }}
        >
          {content}
        </Providers>
      </body>
    </html>
  );
}
