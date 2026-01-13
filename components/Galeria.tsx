'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { urlFor } from "@/sanityStudio/lib/sanity"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Servico } from "@/app/page"
import { Badge } from "./ui/badge"

export default function Galeria({ services }: {services: Servico[]}) {
  const [filtro, setFiltro] = useState("todos")

  // Extrai categorias únicas das obras para gerar os botões automaticamente
  const categories = [ ...new Set(services.map((o) => o.category))]

  const servicosFiltrados = services.filter((o) => o.category === filtro).length > 0
    ? services.filter((o) => o.category === filtro)
    : [services[0]] // Se não houver, mostra o primeiro serviço como fallback



  return (
    <div  className="space-y-8">
      {/* Botões de Filtro */}
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {categories.map((cat) => {
          const isActive = filtro === cat;
          return (
            <Button
              key={cat}
              // Removemos o variant para controlar tudo via className
              onClick={() => setFiltro(cat)}
              className={`
                capitalize transition-all duration-300 px-6 py-2 rounded-full border
                ${isActive 
                  ? "bg-stone-900 text-white border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100 shadow-md scale-105" 
                  : "bg-transparent text-stone-600 border-stone-300 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-100"}
              `}
            >
              {cat}
            </Button>
          );
        })}
      </div>      

      {/* Grid de Carrosséis */}
      <div className="grid grid-cols-1 ">
        {servicosFiltrados.map((serv) => (
          <div key={serv._id} className="animate-in fade-in zoom-in duration-300">
            <ServiceCarrouselCard service={serv} />
          </div>
        ))}
      </div>
      
      {servicosFiltrados.length === 0 && (
        <p className="text-center text-muted-foreground">Nenhuma imagem encontrada neste serviço.</p>
      )}
    </div>
  )
}



export function ServiceCarrouselCard({ service }: { service: any }) {
  // O Embla (motor do carousel) gerencia o index sozinho. 
  // Mas para o Badge, precisamos de um State que escute o carousel.
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  // Atualiza o contador quando o carrossel move
  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative space-y-4 border p-4 rounded-xl bg-white shadow-sm">
      <h3 className="text-3xl text-center font-bold text-stone-800">{service.titulo}</h3>
      
      {/* O container do Carousel precisa ser relative para as setas e badge */}
      <Carousel setApi={setApi} className="w-full relative group"> 
        <CarouselContent className="-ml-2 md:-ml-4">
          {service.images?.map((img: any, i: number) => (
            <CarouselItem 
              key={i} 
              // AQUI VOCÊ CONTROLA O TAMANHO:
              // basis-full = 1 foto | basis-1/2 = 2 fotos | basis-1/3 = 3 fotos
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone-100">
                <Image
                  src={urlFor(img).url()}
                  alt={`Foto de ${service.title}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Badge posicionado dentro do Carrossel */}
        {/* <div className="absolute top-2 right-2 z-20">
          <Badge className="bg-black/60 text-white hover:bg-black/70 border-none backdrop-blur-md">
            {current || 1} / {service.imagens?.length}
          </Badge>
        </div> */}

        {/* Setas: Adicionei classes para ficarem DENTRO da imagem e visíveis no hover */}
        {service.imagens?.length > 1 && (
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white" />
          </div>
        )}
      </Carousel>
      <div className="text-center text-sm text-muted-foreground">
        {service.descricao} 
      </div>
      
    </div>
  )
}