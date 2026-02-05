'use client'

import QuoteCalculator from '@/components/QuoteCalculator'
import Galeria from '@/components/Galeria'
import HeroSection from '@/components/HeroSection'
import { Service } from '@/app/page'

export default function HomeClient({ services }: { services: Service[] }) {
  return (
    <main>
      <HeroSection />

      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">
            Nossos Serviços e Projetos Recentes
          </h2>
          <Galeria services={services} />
        </div>
      </section>

      <section id="orcamento" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">
            Calcule sua Estimativa e Peça um Orçamento
          </h2>
          <QuoteCalculator services={services} />
        </div>
      </section>
    </main>
  )
}