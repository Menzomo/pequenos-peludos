import Image from 'next/image'
import { business } from '@/lib/business'

const services = [
  {
    image: '/images/servico-banho.png',
    title: 'Banho',
    text: 'Higienização completa com produtos premium, hidratação e secagem cuidadosa para uma pelagem macia, perfumada e saudável.',
  },
  {
    image: '/images/servico-tosa.png',
    title: 'Tosa',
    text: 'Tosa higiênica ou estilizada em estilo estética animal, respeitando as características de cada raça e o conforto do seu pet.',
  },
  {
    image: '/images/servico-entrega.png',
    title: 'Banho & Tosa completo',
    text: 'A experiência completa: banho, tosa, hidratação e finalização impecável, com direito ao lacinho especial da casa.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Serviços
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Estética animal de alto padrão
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Serviços pensados para o bem-estar e a beleza do seu pet, com o
            requinte de uma verdadeira produção.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/60"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={s.image || '/placeholder.svg'}
                  alt={`Serviço de ${s.title} no ${business.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-gold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
