import { Clock } from 'lucide-react'
import { hours } from '@/lib/business'

export function HoursSection() {
  return (
    <section id="horarios" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Horário de funcionamento
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Quando estamos abertos
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border px-7 py-5">
            <Clock className="size-5 text-gold" />
            <span className="font-serif text-lg text-foreground">
              Agenda semanal
            </span>
          </div>
          <ul>
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between border-b border-border/50 px-7 py-4 last:border-b-0"
              >
                <span className="text-sm text-foreground">{h.day}</span>
                <span
                  className={`text-sm ${
                    h.closed
                      ? 'text-muted-foreground'
                      : 'font-medium text-gold'
                  }`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
