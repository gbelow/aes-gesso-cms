import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-shell">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/aes_hero.png"
            alt="Acabamento de Gesso de Alta Qualidade"
            fill
            quality={80}
            priority
            className="object-cover object-[60%_30%]"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-transparent" /> */}
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-32">
          <HeroText />
          {/* <CaseGrid /> */}
        </div>
      </div>
    </section>
  )
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

function FloatingPanel() {
  const stats = [
    { label: "Projetos entregues", value: "+320" },
    { label: "Tempo médio de resposta", value: "2h" },
    { label: "Região de atuação", value: "Litoral Norte de SC" },
    { label: "Índice de indicação", value: "98%" },
  ]

  return (
    <div className="floating-card gradient-border relative max-w-xl space-y-8 px-8 pb-10 pt-12">
      <Badge className="accent-pill border-black/5 bg-white/50 text-[11px] tracking-[0.4em] text-muted-foreground">
        Ateliê especializado em gesso fino
      </Badge>
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Steel Frame • Drywall • Boiseries</p>
        <h1 className="text-4xl font-serif font-medium leading-tight text-primary md:text-5xl lg:text-6xl">
          Precisão que transforma volumes em arte
        </h1>
        <p className="text-lg text-muted-foreground">
          Assinamos projetos de Drywall, Painéis Modulares, Steel Frame, Gesso Tradicional,
          Nichos Decorativos, Roda Teto, Painéis 3D e Boiseries com consultoria estética dedicada e execução artesanal.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg" className="rounded-full bg-primary px-8 text-white">
          <a href="#orcamento" className="gap-2">
            Solicitar orçamento <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg" className="rounded-full border-primary/20 bg-white/80 text-primary">
          <a
            href="https://wa.me/554784839769"
            target="_blank"
            rel="noreferrer noopener"
            className="gap-2"
            aria-label="Falar no WhatsApp com a A&S Gesso"
          >
            Falar no WhatsApp <MessageCircle className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="trust-pill">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {stat.label}
            </span>
            <span className="mt-1 text-2xl font-serif text-primary">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// function CaseGrid() {
//   const highlights = [
//     {
//       title: "Drywall sob medida",
//       description: "Forros contínuos com iluminação embutida e recortes técnicos",
//       size: "row-span-2",
//     },
//     {
//       title: "Painéis modulares e nichos",
//       description: "Módulos personalizados, nichos decorativos e boiseries suavemente curvos",
//       size: "",
//     },
//     {
//       title: "Steel Frame residencial",
//       description: "Estruturas leves com isolamento acústico e acabamento em gesso tradicional",
//       size: "",
//     },
//   ]

//   return (
//     <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
//       {highlights.map((highlight, index) => (
//         <div
//           key={highlight.title}
//           className={`relative min-h-[220px] overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur ${
//             index === 0 ? "sm:row-span-2 sm:min-h-[460px]" : ""
//           } ${index === highlights.length - 1 ? "sm:col-span-2" : ""}`}
//         >
//           <div className="space-y-2">
//             <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{`0${index + 1}`}</p>
//             <h3 className="text-2xl font-serif text-primary">{highlight.title}</h3>
//             <p className="text-sm text-muted-foreground">{highlight.description}</p>
//           </div>
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-primary/5" />
//         </div>
//       ))}
//     </div>
//   )
// }
