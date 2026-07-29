import { Star, Heart, Sparkles } from 'lucide-react'
import { business } from '@/lib/business'

const highlights = [
  {
    icon: Sparkles,
    title: 'Acabamento premium',
    text: 'Cada banho e tosa é tratado como uma produção fotográfica, com atenção a cada detalhe.',
  },
  {
    icon: Heart,
    title: 'Cuidado individual',
    text: 'Seu pet recebe atenção exclusiva, com produtos de qualidade e manuseio delicado.',
  },
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Sobre nós</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Estética animal com toque de <span className="text-gold">luxo</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            No {business.name}, tratamos cada pet como parte da família. Unimos
            técnica, produtos selecionados e um ambiente acolhedor para
            transformar o banho e a tosa em uma experiência de bem-estar e
            beleza — do jeito que o seu companheiro merece.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h.icon className="size-6 text-gold" />
                <h3 className="mt-4 font-serif text-xl text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="gold-spin-border w-full max-w-sm rounded-2xl bg-card p-10 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Avaliação no Google
            </p>
            <p className="mt-4 font-serif text-7xl text-gold">
              {business.rating}
            </p>
            <div className="mt-4 flex justify-center" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-6 ${
                    i < 4 ? 'fill-gold text-gold' : 'fill-gold/30 text-gold/30'
                  }`}
                />
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Baseado em{' '}
              <span className="font-semibold text-foreground">
                {business.reviews} avaliações
              </span>{' '}
              de clientes satisfeitos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </span>
  )
}
