import QuoteCalculator from "@/components/QuoteCalculator";
import Galeria from "@/components/Galeria";
import HeroSection from "@/components/HeroSection";
import { client } from "@/sanityStudio/lib/client";

export interface Service {
  _id: string;
  title: string;
  category: 'drywall' | 'modular' | 'steelFrame' | 'convencional' | 'nichos' | 'rodaTeto' | '3d' | 'boiserie';
  images: Array<{
    _key: string;
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
  description?: string;
}

async function getServices(): Promise<Service[]> {

  const query = `*[_type == "services"] {
    _id,
    title,
    category,
    description,
    images
  }`;

  return await client.fetch(query)
}

export default async function HomePage() {
  const services = await getServices()
  const now = new Date()
  return (
    <main>
      <HeroSection />
      <section id="portfolio" className="py-16">
        <div  className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">
            Nossos Serviços e Projetos Recentes
          </h2>
          <Galeria services={services}/>
        </div>
      </section>
      <section id="orcamento" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-stone-800">
            Calcule sua Estimativa e Peça um Orçamento
          </h2>
          <QuoteCalculator services={services}/>
        </div>
      </section>
      

      {/* Adicione outras seções aqui, como FAQ, Depoimentos, Contato */}
    </main>
  );
}
