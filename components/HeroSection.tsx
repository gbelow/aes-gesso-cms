import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Importe o ícone que preferir

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center text-center">
      {/* Imagem de Fundo com Overlay */}
      <Image
        src="/aes_logo.jpg" // Sua imagem de fundo aqui (coloque em `public/hero-gesso.jpg`)
        alt="Acabamento de Gesso de Alta Qualidade"
        layout="fill"
        objectFit="cover"
        quality={80} // Otimiza o carregamento
        className="absolute inset-0 z-0 brightness-[0.4]" // Escurece a imagem
      />

      {/* Conteúdo do Hero (texto e botão) */}
      <div className="relative z-10 text-white p-4 max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Transforme Ambientes com Gesso e Drywall de Excelência
        </h1>
        <p className="text-lg md:text-xl font-light drop-shadow-md">
          Qualidade, acabamento impecável e pontualidade para seu projeto residencial ou comercial.
        </p>
        
      </div>
    </section>
  );
}