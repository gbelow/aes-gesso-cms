import Link from "next/link"
import { Hammer, InstagramIcon, Facebook, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Hammer className="h-6 w-6" />
              <span>Gesso Profissional</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Especialistas em forros, sancas e divisórias de drywall. Atendimento residencial e comercial com acabamento de alto padrão.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-800">Navegação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Nossas Obras</Link></li>
              <li><Link href="#orcamento" className="hover:text-primary transition-colors">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-800">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rua Exemplo, 123 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@gessopro.com.br</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Social */}
          <div>
            <h3 className="font-semibold mb-4 text-stone-800">Siga-nos</h3>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/aesgesso/" className="p-2 bg-white rounded-full border border-stone-200 hover:text-primary transition-all">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full border border-stone-200 hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {currentYear} Gesso Profissional - CNPJ: 00.000.000/0001-00</p>
          <p>Desenvolvido com foco em performance</p>
        </div>
      </div>
    </footer>
  )
}
