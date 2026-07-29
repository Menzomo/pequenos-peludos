import { Check } from 'lucide-react'
import { business } from '@/lib/business'

const benefits = [
  'Banhos programados ao longo do mês',
  'Preço especial em relação aos serviços avulsos',
  'Agenda prioritária para o seu pet',
  'Pelagem sempre limpa, macia e cheirosa',
  'Acompanhamento da saúde da pele e do pelo',
]

export function PlanSection() {
  return (
    <section id="pacote" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-gold/40 bg-card">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Assinatura
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
                Pacote Mensal de <span className="text-gold">Banho & Tosa</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                A forma mais prática e econômica de manter seu pet sempre
                impecável. Um plano de assinatura mensal com atendimento
                recorrente, comodidade e economia real para você.
              </p>

              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Quero assinar o pacote mensal
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-background/40 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                O que está incluso
              </p>
              <ul className="mt-6 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="size-3.5 text-gold" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
                Planos personalizados conforme o porte e a necessidade do seu
                pet. Consulte valores pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
