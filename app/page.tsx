import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Timeline } from '@/components/timeline'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
