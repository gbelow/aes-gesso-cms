import Link from "next/link"
import { Hammer, InstagramIcon, Facebook, Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react"

const serviceAreas = ["Balneário Camboriú", "Itajaí", "Itapema", "Navegantes", "Bombinhas"]
const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Obras", href: "#portfolio" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Studio", href: "/studio" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/40 bg-white/70 backdrop-blur">
      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="floating-card gradient-border flex flex-col gap-8 rounded-[32px] border-white/70 bg-white/80 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Atendimento dedicado</p>
            <h3 className="text-3xl font-serif text-primary">Projetos em gesso com direção artesanal</h3>
            <p className="text-sm text-muted-foreground">
              Envie plantas, fotos ou descreva o espaço. Retornamos com briefing estruturado, prazos e memorial de materiais.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Resposta média: 2h úteis</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(47) 8484-3769</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="tel:+554784843769"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary"
            >
              Ligar agora
            </Link>
            <Link
              href="https://wa.me/554784839769"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-accent/30"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-primary">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow">
                <Hammer className="h-5 w-5" />
              </span>
              <span>
                AES Gesso
                <span className="block text-sm font-normal uppercase tracking-[0.4em] text-muted-foreground">atelier</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Steel frame, drywall, boiseries e painéis 3D executados com precisão milimétrica e direção estética autoral.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">Navegação</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">Cidades atendidas</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {serviceAreas.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rua Brusque, Balneário Camboriú · SC</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>marcosgss2020@outlook.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(47) 98483-9769</span>                
              </li>
            </ul>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/aesgesso/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-primary shadow"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-primary shadow"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/50 pt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} AES Gesso · Todos os direitos reservados</p>
          <p>CREA registrado · Execução com ART</p>
        </div>
      </div>
    </footer>
  )
}
