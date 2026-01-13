import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Importe o ícone que preferir

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[640px] max-h-[1024px] overflow-hidden">
      {/* Imagem de Fundo com Overlay */}
      <Image
        src="/aes_hero.png"
        alt="Acabamento de Gesso de Alta Qualidade"
        fill
        quality={70}
        priority
        className="absolute inset-0 object-cover object-center md:object-[100%_50%]"
      />
      <HeroText />
    </section>
    
  );
}

function HeroText(){
  return(
    <section className="relative z-10 max-w-7xl px-6 py-28 md:py-36">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-neutral-900">
          Precisão que
          <br />
          transforma espaços
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
          Soluções em steel frame e gesso para forros, boiseries, nichos e
          acabamentos arquitetônicos — executadas com rigor técnico e estética
          refinada.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-teal-600"
          >
            Solicitar orçamento
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white/80 px-8 py-4 text-base font-medium text-neutral-800 backdrop-blur transition hover:bg-white"
          >
            Ver projetos
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <span>Projetos sob medida</span>
          <span>•</span>
          <span>Acabamento impecável</span>
          <span>•</span>
          <span>Entrega no prazo</span>
        </div>
      </div>
    </section>

  )
}