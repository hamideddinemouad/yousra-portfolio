import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/providers/motion-provider";
import { Cormorant_Garamond, Public_Sans } from "next/font/google";
import { absoluteUrl, getBaseUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  classification: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Yousra Hamideddine portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="focus-ring sr-only fixed top-4 left-4 z-50 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[var(--bg)] focus:not-sr-only"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
