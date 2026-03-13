'use client'

import { ChevronDown } from 'lucide-react'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  return (
    <section 
      id="portfolio" 
      className="snap-section relative h-screen w-full overflow-hidden noise-overlay"
      style={{ background: '#0a0a0a' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale contrast-125 scale-[1.1]"
        poster="/hero-poster.jpg"
      >
        <source src="/WhatsApp Video 2026-03-12 at 23.01.44.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay with Stripe */}
      <div 
        className="absolute inset-0 z-10 stripe-bg"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 50%, #0a0a0a 100%)'
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-8 z-20 hidden lg:block">
        <div className="sticker text-xs">EST. 2024</div>
      </div>
      
      <div className="absolute top-32 right-12 z-20 hidden lg:block rotate-6">
        <span className="text-white/20 font-mono text-xs tracking-widest">STREETWEAR</span>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-4 px-4">
        {/* Top Label */}
        <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="h-px w-12 bg-[#ff3131]" />
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-mono">
            Stylist / Social Media / Diretor Criativo
          </span>
          <div className="h-px w-12 bg-[#ff3131]" />
        </div>

        {/* Main Title - Pixo Style */}
        <h1 
          className="font-display font-black uppercase text-white leading-none text-center animate-hero-title glitch-text"
          data-text="LEREUX"
          style={{ 
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            letterSpacing: '-0.04em'
          }}
        >
          LEREUX
        </h1>

        {/* Subtitle with marker effect */}
        <div className="animate-fade-up flex flex-col items-center gap-2">
          <span className="marker-highlight font-display uppercase tracking-[0.2em] text-white" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
            Conceito para as Ruas
          </span>
          <span className="text-white/40 text-xs font-mono">DESDE 2024</span>
        </div>

        {/* CTA Buttons - Brutal Style */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 mt-6 animate-fade-up"
          style={{ animationDelay: '1.2s' }}
        >
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, '#gallery')}
            className="bg-[#ff3131] text-black font-bold uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-all duration-200 text-sm cursor-pointer"
          >
            Ver Gallery
          </a>
          <a
            href="#contato"
            onClick={(e) => scrollToSection(e, '#contato')}
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 transition-all duration-200 font-bold uppercase tracking-wider text-sm cursor-pointer"
          >
            Trabalhe Comigo
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce-slow" />
        </div>
      </div>

      {/* Corner Markers */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:flex items-end gap-2">
        <div className="w-8 h-px bg-[#ff3131]" />
        <span className="text-white/30 text-xs font-mono">01</span>
      </div>
    </section>
  )
}
