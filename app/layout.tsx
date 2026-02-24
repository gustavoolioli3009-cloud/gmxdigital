import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMX Digital — Criamos Experiências Digitais",
  description:
    "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gmxdigital.com",
    title: "GMX Digital — Criamos Experiências Digitais",
    description:
      "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
    siteName: "GMX Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMX Digital — Criamos Experiências Digitais",
    description:
      "GMX Digital é uma agência de design e desenvolvimento digital especializada em criar experiências digitais imersivas e impactantes.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}

