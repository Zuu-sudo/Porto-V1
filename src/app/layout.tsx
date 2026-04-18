import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/AOSProvider";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://anantanaufal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ananta Naufal Imamul Hikam | Junior Web Developer",
    template: "%s | Ananta Naufal",
  },
  description:
    "Ananta Naufal Imamul Hikam — Mahasiswa Informatika Universitas Negeri Surabaya. Junior Web Developer yang berfokus pada pengembangan web modern menggunakan React, Next.js, dan teknologi web terkini.",
  keywords: [
    "Ananta Naufal Imamul Hikam",
    "Junior Web Developer",
    "Web Developer",
    "Universitas Negeri Surabaya",
    "UNESA",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Informatika",
    "Portfolio",
    "Indonesia Developer",
  ],
  authors: [{ name: "Ananta Naufal Imamul Hikam", url: siteUrl }],
  creator: "Ananta Naufal Imamul Hikam",
  publisher: "Ananta Naufal Imamul Hikam",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Ananta Naufal — Portfolio",
    title: "Ananta Naufal Imamul Hikam | Junior Web Developer",
    description:
      "Junior Web Developer dari Universitas Negeri Surabaya. Membangun aplikasi web modern yang skalabel dan efisien.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ananta Naufal Imamul Hikam - Junior Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananta Naufal Imamul Hikam | Junior Web Developer",
    description:
      "Junior Web Developer dari Universitas Negeri Surabaya. Membangun aplikasi web modern.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth overflow-x-hidden" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans overflow-x-hidden`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <AOSProvider>{children}</AOSProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
