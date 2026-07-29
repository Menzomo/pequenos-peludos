import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { business } from '@/lib/business'

export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Contato
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Agende o cuidado do seu pet
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Estamos à disposição para atender você e o seu companheiro. Fale
            conosco ou venha nos visitar.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <MapPin className="size-5 text-gold" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    Endereço
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {business.address}
                    <br />
                    {business.neighborhood} — {business.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Phone className="size-5 text-gold" />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    Telefone
                  </h3>
                  <a
                    href={business.phoneHref}
                    className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold px-6 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                <Phone className="size-4" />
                Ligar agora
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title={`Mapa de localização do ${business.name}`}
              src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
