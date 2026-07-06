import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tatuador Profesional en Costa Rica`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.artistName }],
  creator: siteConfig.artistName,
  publisher: siteConfig.name,
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
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Tatuador Profesional en Costa Rica`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Arte Corporal de Lujo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Tatuador Profesional en Costa Rica`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.contact.instagram}`,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Tattoo Artist",
  other: {
    "geo.region": "CR-G",
    "geo.placename": siteConfig.location.city,
    "geo.position": `${siteConfig.location.coordinates.lat};${siteConfig.location.coordinates.lng}`,
    ICBM: `${siteConfig.location.coordinates.lat}, ${siteConfig.location.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col">
        {children}
        <WhatsAppFloat />
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: {
              background: "oklch(0.12 0 0)",
              border: "1px solid oklch(1 0 0 / 10%)",
              color: "oklch(0.985 0 0)",
            },
          }}
        />
      </body>
    </html>
  );
}
