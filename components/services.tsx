'use client'

import { useEffect, useRef, useState } from 'react'
import { Shirt, Camera, Film, Megaphone, Palette, Star } from 'lucide-react'

const services = [
  { 
    icon: Shirt, 
    title: 'STYLING', 
    desc: 'Produção completa de looks para artistas, do conceito ao set.' 
  },
  { 
    icon: Camera, 
    title: 'SESSÕES', 
    desc: 'Styling e direção visual para ensaios fotográficos.' 
  },
  { 
    icon: Film, 
    title: 'CLIPES', 
    desc: 'Direção de figurino e styling para videoclipes.' 
  },
  { 
    icon: Megaphone, 
    title: 'SOCIAL MEDIA', 
    desc: 'Curadoria visual e direção de conteúdo para redes sociais.' 
  },
  { 
    icon: Palette, 
    title: 'DIREÇÃO', 
    desc: 'Conceito e identidade criativa para artistas e marcas.' 
  },
  { 
    icon: Star, 
    title: 'CAMPANHAS', 
    desc: 'Styling e direção criativa para campanhas de marcas.' 
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="snap-section bg-[#050505] py-32 px-4 relative noise-overlay bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(5,5,5,0.85), rgba(5,5,5,0.95)), url('/trabalhe-comigo.png')" }}
    >
      {/* Header */}
      <div className={`text-center mb-16 reveal-street ${isVisible ? 'is-visible' : ''}`}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-[#ff3131]" />
          <span className="font-mono text-[#ff3131] text-xs uppercase tracking-widest">Serviços</span>
          <div className="h-px w-16 bg-[#ff3131]" />
        </div>
        <h2 
          className="font-display font-black uppercase text-white"
          style={{ 
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '-0.04em'
          }}
        >
          TRABALHE <span className="text-[#ff3131]">COMIGO</span>
        </h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-widest mt-4">
          O que eu faço
        </p>
      </div>

      {/* Services Grid */}
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto reveal-street ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: '0.2s' }}
      >
        {services.map((service) => (
          <div 
            key={service.title}
            className="group bg-white/[0.02] border-2 border-white/10 p-6 hover:border-[#ff3131] hover:bg-[#ff3131]/5 transition-all duration-150 cursor-default relative overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-[#ff3131] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <service.icon className="w-8 h-8 text-[#ff3131] mb-4" />
            <h3 className="font-display font-bold text-white text-xl mb-2 uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
