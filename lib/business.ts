export const business = {
  name: 'Pequenos Peludos',
  tagline: 'Estética Animal',
  slogan: 'Seu pet merece o melhor cuidado',
  phone: '(54) 3211-0500',
  phoneHref: 'tel:+555432110500',
  whatsappHref:
    'https://wa.me/555432110500?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20meu%20pet.',
  address: 'R. João Paranhos da Rocha, 1507',
  neighborhood: 'Desvio Rizzo',
  city: 'Caxias do Sul / RS',
  rating: '4,8',
  reviews: 8,
  mapsQuery:
    'R.+João+Paranhos+da+Rocha,+1507+-+Desvio+Rizzo,+Caxias+do+Sul+-+RS',
}

export const hours: { day: string; time: string; closed?: boolean }[] = [
  { day: 'Segunda-feira', time: '13:30 – 18:00' },
  { day: 'Terça-feira', time: '09:00 – 18:00' },
  { day: 'Quarta-feira', time: '09:00 – 18:00' },
  { day: 'Quinta-feira', time: '09:00 – 18:00' },
  { day: 'Sexta-feira', time: '08:00 – 18:00' },
  { day: 'Sábado', time: '07:30 – 17:00' },
  { day: 'Domingo', time: 'Fechado', closed: true },
]
