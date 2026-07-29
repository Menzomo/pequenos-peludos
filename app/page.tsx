import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { PlanSection } from '@/components/plan-section'
import { DeliverySection } from '@/components/delivery-section'
import { HoursSection } from '@/components/hours-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlanSection />
        <DeliverySection />
        <HoursSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
