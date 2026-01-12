'use client'
import Image from "next/image"
import { useState } from "react"
import { client, urlFor } from "@/sanityStudio/lib/sanity"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Servico } from "@/app/page"

export default function Galeria({ services }: {services: Servico[]}) {
  const [filtro, setFiltro] = useState("todos")
  console.log(services)

  // Extrai categorias únicas das obras para gerar os botões automaticamente
  const categorias = [ ...new Set(services.map((o) => o.categoria))]

  const servicosFiltrados = filtro === "todos" 
    ? services 
    : services.filter((o) => o.categoria === filtro)

  return (
    <div className="space-y-8">
      {/* Botões de Filtro */}
      <div className="flex flex-wrap justify-center gap-2">
        {categorias.map((cat) => (
          <Button
            key={cat}
            variant={filtro === cat ? "default" : "outline"}
            onClick={() => setFiltro(cat)}
            className="capitalize"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid de Carrosséis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  return (
    <div className="space-y-4 border p-4 rounded-xl bg-white shadow-sm">
      <h3 className="text-xl font-bold text-stone-800">{service.titulo}</h3>
      
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {service.imagens?.map((img: any, index: number) => (
            <CarouselItem key={index}>
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src={urlFor(img).url()}
                  alt={`Foto ${index + 1} de ${service.titulo}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Só mostra as setas se houver mais de uma imagem */}
        {service.imagens?.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>
      
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium uppercase tracking-wider text-stone-500">
          {service.categoria}
        </span>
      </div>
    </div>
  )}