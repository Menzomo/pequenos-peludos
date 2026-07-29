'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { business } from '@/lib/business'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#pacote', label: 'Pacote Mensal' },
  { href: '#entrega', label: 'Entrega' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/logo-pequenos-peludos.png"
              alt="Logotipo Pequenos Peludos"
              fill
              className="object-cover"
              sizes="44px"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-wide text-gold">
              {business.name}
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              {business.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground lg:inline-block"
        >
          Agendar
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-gold lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full border border-gold px-5 py-3 text-center text-sm font-medium text-gold"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
