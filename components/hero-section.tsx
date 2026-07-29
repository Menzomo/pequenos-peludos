import Image from 'next/image'
import { Phone, Star } from 'lucide-react'
import { business } from '@/lib/business'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-gold">
            {business.tagline}
          </span>

          <h1 className="font-serif text-5xl leading-[1.05] text-balance text-gold sm:text-6xl md:text-7xl">
            {business.name}
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground lg:mx-0 lg:text-xl">
            {business.slogan}. Banho e tosa em estilo estética animal, com
            acabamento premium e todo o carinho que o seu companheiro merece.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-8 py-3.5 text-center text-sm font-medium text-gold transition-colors hover:bg-gold/10 sm:w-auto"
            >
              <Phone className="size-4" />
              {business.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < 4 ? 'fill-gold text-gold' : 'fill-gold/30 text-gold/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {business.rating}
              </span>{' '}
              · {business.reviews} avaliações no Google
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 bg-background shadow-2xl shadow-black/60">
            <Image
              src="/images/logo-pequenos-peludos.png"
              alt="Pequenos Peludos — Estética Animal"
              fill
              priority
              className="object-contain p-6 sm:p-10"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
