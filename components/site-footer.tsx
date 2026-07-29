import Image from 'next/image'
import { business } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-sidebar py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <div className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/logo-pequenos-peludos.png"
              alt="Logotipo Pequenos Peludos"
              fill
              className="object-cover"
              sizes="48px"
            />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-serif text-lg text-gold">
              {business.name}
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              {business.tagline}
            </span>
          </span>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {business.slogan}.
        </p>

        <p className="text-xs text-muted-foreground">
          {business.address} — {business.neighborhood}, {business.city} ·{' '}
          {business.phone}
        </p>

        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {business.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
