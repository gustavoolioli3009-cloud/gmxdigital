import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://gmxdigital.com";

export const metadata: Metadata = {
  title: "GMX Digital — Criamos Experiências Digitais",
  description:
    "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes. +50 projetos entregues, +5 anos de experiência.",
  keywords: [
    "GMX Digital",
    "web design",
    "desenvolvimento web",
    "branding",
    "UI/UX",
    "motion design",
    "agência digital",
  ],
  authors: [{ name: "GMX Digital" }],
  creator: "GMX Digital",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "GMX Digital — Criamos Experiências Digitais",
    description:
      "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
    siteName: "GMX Digital",
    images: [
      {
        url: `${SITE_URL}/og-cover.png`,
        width: 1200,
        height: 630,
        alt: "GMX Digital — Criamos Experiências Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMX Digital — Criamos Experiências Digitais",
    description:
      "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
    images: [`${SITE_URL}/og-cover.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GMX Digital",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-gmx.png`,
  description:
    "Agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contato@gmxdigital.com",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://www.instagram.com/gmxdigital",
    "https://www.linkedin.com/company/gmxdigital",
    "https://www.behance.net/gmxdigital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}

