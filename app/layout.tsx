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
  openGraph: {
    title: "AES Gesso - Acabamento de Alto Padrão",
    description: "Solicite seu orçamento via WhatsApp agora mesmo.",
    keywords: ["Gesso", "Drywall", "Sanca de gesso", "Reforma", "Construção", '["Balneário Camboriú", "Itajaí", "Itapema"]', 'Gesso 3d', 'Boiserie', 'Roda teto', 'Nichos de gesso', 'forros de gesso', 'Painéis modulares', 'Steel frame'], 
    images: [{ url: "/aes_hero.png" }], // Crie uma imagem de 1200x630 para quando linkar no Whats
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "AES gesso",
    "image": "https://seusite.com.br/hero_logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Brusque",
      "addressLocality": "Santa Catarina",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.006013170403854,
      "longitude": -48.64233241575856
    },
    "url": "https://seusite.com.br",
    "telephone": "+5547984843769"
  }

  return (
    <html lang="pt-br" className="light">
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
