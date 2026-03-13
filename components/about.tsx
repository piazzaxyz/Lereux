'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Shirt, Camera, Clapperboard, Megaphone } from 'lucide-react'

const skills = [
  { icon: Shirt, label: 'STYLING' },
  { icon: Camera, label: 'FOTOS' },
  { icon: Clapperboard, label: 'DIREÇÃO' },
  { icon: Megaphone, label: 'SOCIAL' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="snap-section bg-[#0a0a0a] py-32 px-4 relative noise-overlay stripe-bg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center relative z-10">
        {/* Photo Column */}
        <div 
          className={`relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden reveal-street ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Brutal Frame */}
          <div className="absolute inset-0 border-4 border-white z-20 pointer-events-none" />
          <div className="absolute inset-0 border-4 border-[#ff3131] translate-x-3 translate-y-3 z-10 pointer-events-none" />
          
          {/* Tape decorations */}
          <div className="absolute -top-2 left-1/4 w-16 h-6 bg-white/20 rotate-[-5deg] z-30" />
          <div className="absolute -bottom-2 right-1/4 w-16 h-6 bg-white/20 rotate-[3deg] z-30" />
          
          {/* Placeholder Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#1a1a1a]" />
          
          <Image
            src="/WhatsApp Image 2026-03-12 at 23.10.34.jpeg"
            alt="LEREUX - Stylist"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Sticker */}
          <div className="absolute bottom-6 right-6 z-30">
            <div className="sticker text-xs">REAL</div>
          </div>
        </div>

        {/* Text Column */}
        <div className={`reveal-street ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#ff3131]" />
            <span className="font-mono text-[#ff3131] text-xs uppercase tracking-widest">Sobre Mim</span>
          </div>

          {/* Title */}
          <h2 
            className="font-display font-black text-white leading-none uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            MAIS DO QUE <br/>
            <span className="text-[#ff3131]">ROUPA.</span> <br/>
            CONCEITO.
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-white/60 leading-relaxed text-base">
              Desde 2024 trazendo mais do que autoestima — conceito para as ruas. 
              Visualização de sonhos e projetos de artistas independentes.
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              Carregando comigo o peso do streetwear do rap/trap e um toque de luxo francês.
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              Além disso, atuo dentro da área de direção criativa e marketing, desde 
              sessões de fotos, clipes e conteúdos para marcas.
            </p>
          </div>

          {/* Skills Grid - Brutal Style */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {skills.map((skill) => (
              <div 
                key={skill.label}
                className="flex items-center gap-3 bg-white/[0.02] border-2 border-white/10 p-4 text-white hover:border-[#ff3131] hover:bg-[#ff3131]/5 transition-all duration-100"
              >
                <skill.icon className="w-5 h-5 text-[#ff3131]" />
                <span className="font-bold uppercase tracking-wider text-sm">{skill.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-6">
            <div className="text-center">
              <span className="font-display font-black text-3xl text-white">2024</span>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Início</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <span className="font-display font-black text-3xl text-[#ff3131]">10+</span>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Projetos</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <span className="font-display font-black text-3xl text-white">RAP</span>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Cultura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
