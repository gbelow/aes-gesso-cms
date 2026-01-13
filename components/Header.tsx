"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Obras", href: "#portfolio" },
  { label: "Orçamento", href: "#orcamento" },
]

const phoneLabel = "(47) 8484-3769"
const whatsappLink = "https://wa.me/554784839769"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="border-b border-white/40 bg-white/70 shadow-[0_10px_35px_rgba(15,15,15,0.08)] supports-[backdrop-filter]:bg-white/70">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-primary">
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
              <Image
                src="/aes_logo.jpg"
                alt="AES Gesso"
                fill
                sizes="48px"
                className="rounded-full object-cover"
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-base uppercase tracking-[0.3em] text-muted-foreground">Atelier</span>
              <span className="text-2xl font-serif text-primary">AES Gesso</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-primary hover:underline hover:underline-offset-8"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild className="gap-2 rounded-full border border-black/10 bg-white/80 px-5">
                <a href={`tel:${phoneLabel.replace(/[^\d]/g, "")}`}>
                  <Phone className="h-4 w-4" /> {phoneLabel}
                </a>
              </Button>
              <Button size="sm" asChild className="gap-2 rounded-full bg-accent px-6 text-white shadow-lg shadow-accent/30">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full border border-white/40 bg-white/70">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95">
                <SheetTitle className="text-xs uppercase tracking-[0.6em] text-muted-foreground">
                  Menu
                </SheetTitle>
                <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="border-b border-black/10 pb-2 uppercase tracking-[0.2em] text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="w-full gap-2 rounded-full bg-primary text-white">
                    <a href={`tel:${phoneLabel.replace(/[^\d]/g, "")}`}>
                      <Phone className="h-4 w-4" /> Ligar agora
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full gap-2 rounded-full border-accent text-accent">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
