import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Gesso e Drywall em Balneário Camboriú | Empresa Profissional',
  description: 'Especialistas em forros de gesso, sancas e divisórias de drywall. Atendimento em toda região de Balneário Camboriú. Peça seu orçamento!',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AES gesso",
    "image": "https://seusite.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Brusque",
      "addressLocality": "Santa Catarina",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "url": "https://seusite.com.br",
    "telephone": "+5511999999999"
  }

  return (
    <html lang="pt-br" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>      
  )
}
