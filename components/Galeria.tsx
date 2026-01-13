'use client'
import Image from "next/image"
import { useEffect, useState, useMemo, type ReactNode } from "react"
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
import { FilterIcon, Layers3, Ruler, Sparkles } from "lucide-react"

const categoryLabels: Record<Servico['category'], string> = {
  drywall: "Drywall",
  modular: "Painéis Modulares",
  steelFrame: "Steel Frame",
  convencional: "Gesso Tradicional",
  nichos: "Nichos Decorativos",
  rodaTeto: "Roda Teto",
  '3d': "Painéis 3D",
  boiserie: "Boiseries",
}

const categoryIcons: Partial<Record<Servico['category'], ReactNode>> = {
  drywall: <Layers3 className="h-4 w-4" />,
  boiserie: <Sparkles className="h-4 w-4" />,
  steelFrame: <Ruler className="h-4 w-4" />,
}

export default function Galeria({ services }: { services: Servico[] }) {
  const [filtro, setFiltro] = useState<Servico['category'] | 'todos'>('todos')

  const categories = useMemo(() => {
    if (!services?.length) return []
    const unique = Array.from(new Set(services.map((s) => s.category)))
    return ['todos', ...unique]
  }, [services])

  const servicosFiltrados = useMemo(() => {
    if (!services?.length) return []
    if (filtro === 'todos') return services
    const filtered = services.filter((o) => o.category === filtro)
    return filtered.length ? filtered : services.slice(0, 3)
  }, [services, filtro])

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => {
          const isActive = filtro === cat
          const label = cat === 'todos' ? 'Todos os projetos' : categoryLabels[cat as Servico['category']] || cat
          const icon = cat === 'todos' ? <FilterIcon className="h-4 w-4" /> : categoryIcons[cat as Servico['category']] ?? null
          return (
            <Button
              key={cat}
              onClick={() => setFiltro(cat as Servico['category'] | 'todos')}
              variant="ghost"
              className={`gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] ${
                isActive
                  ? 'border-primary bg-primary text-white shadow-[0_10px_25px_rgba(15,15,15,0.15)]'
                  : 'border-black/10 bg-white/60 text-muted-foreground hover:border-primary/40'
              }`}
            >
              {icon}
              {label}
            </Button>
          )
        })}
      </div>

      {servicosFiltrados.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-2">
          {servicosFiltrados.map((serv) => (
            <ServiceCarrouselCard key={serv._id} service={serv} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-black/10 bg-white/70 p-10 text-center">
          <p className="text-lg font-serif text-primary">Em breve novos projetos</p>
          <p className="text-sm text-muted-foreground">Estamos atualizando nosso portfólio com obras recentes.</p>
        </div>
      )}
    </div>
  )
}

export function ServiceCarrouselCard({ service }: { service: Servico }) {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // const tags = [service.category]
  const tags: string[] = []

  return (
    <div className="floating-card gradient-border relative space-y-6 border-white/40 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Coleção</p>
          <h3 className="text-3xl font-serif text-primary">{service.title}</h3>
        </div>
        <Badge className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.4em] text-white">
          {current} / {service.images?.length || 1}
        </Badge>
      </div>

      <Carousel setApi={setApi} className="group relative w-full">
        <CarouselContent className="-ml-3 md:-ml-4">
          {service.images?.map((img, i) => (
            <CarouselItem key={img._key ?? i} className="pl-3 md:pl-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone-100">
                <Image
                  src={urlFor(img).url()}
                  alt={`Foto de ${service.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {service.images && service.images.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 text-primary shadow-lg" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 text-primary shadow-lg" />
          </>
        )}
      </Carousel>

      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description || ''}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 bg-white/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
