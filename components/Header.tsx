"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Obras", href: "#portfolio" },
  { label: "Orçamento", href: "#orcamento" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Image
            src="/aes_logo.jpg" // Sua imagem de fundo aqui (coloque em `public/hero-gesso.jpg`)
            alt="Acabamento de Gesso de Alta Qualidade"
            width={40}
            height={40}
            quality={70} // Otimiza o carregamento
            className="rounded-full" // Escurece a imagem
          />
          <span>Gesso <span className="text-foreground/70 text-base font-normal">Profissional</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="default" size="sm" className="gap-2">
            <Phone className="h-4 w-4" /> (47) 8484-3769
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-6 mt-10">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold border-b pb-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" /> Ligar Agora
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}