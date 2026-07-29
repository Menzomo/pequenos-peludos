import { Truck, ShieldCheck, Clock } from 'lucide-react'
import { business } from '@/lib/business'

const features = [
  {
    icon: ShieldCheck,
    title: 'Transporte seguro',
    text: 'Seu pet é levado e trazido com todo o cuidado e conforto.',
  },
  {
    icon: Clock,
    title: 'Mais comodidade',
    text: 'Você economiza tempo enquanto cuidamos de tudo por você.',
  },
]

export function DeliverySection() {
  return (
    <section id="entrega" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Entrega disponível
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
              Buscamos e entregamos o seu pet
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              Para a sua tranquilidade, o {business.name} oferece serviço de
              entrega. Cuidamos do transporte com carinho e segurança, para que
              você aproveite toda a experiência premium sem sair de casa.
            </p>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full border border-gold px-8 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
            >
              Consultar disponibilidade
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col justify-center rounded-2xl border border-gold/40 bg-card p-8 sm:col-span-2">
              <Truck className="size-8 text-gold" />
              <h3 className="mt-4 font-serif text-2xl text-foreground">
                Leva e traz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Um serviço pensado para a sua rotina, unindo praticidade e o
                melhor cuidado estético para o seu companheiro.
              </p>
            </div>
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <f.icon className="size-6 text-gold" />
                <h3 className="mt-4 font-serif text-lg text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
