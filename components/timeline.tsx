'use client'

import { useEffect, useRef, useState } from 'react'

const trabalhos = [
  { year: '2024', title: 'Sessão de Fotos', desc: 'Sessão fotográfica com direção de styling completa.', credit: 'Fotos por @oguifsphoto', tag: 'SESSÃO' },
  { year: '2024', title: 'Mixtape Wagwan', desc: 'Styling e direção criativa para a mixtape de @astro_og.', credit: '@astro_og', tag: 'MIXTAPE' },
  { year: '2025', title: "B.O.'s a Parte", desc: 'Assistente de figurino na produção musical de @prod.sina.', credit: '@prod.sina', tag: 'FIGURINO' },
  { year: '2025', title: 'Campanha @pilla.loja', desc: 'Direção criativa e styling completo para campanha da marca.', credit: '@pilla.loja', tag: 'CAMPANHA' },
  { year: '2025', title: 'Shows @wxmagoo', desc: 'Sequência de shows com direção criativa desenvolvida exclusivamente para o artista.', credit: '@patrick_prado @sarasgomes_', tag: 'SHOW' },
  { year: '2025', title: 'Abertura @lptzlatan', desc: 'Abertura do show na @plur. Dia 10/10.', credit: '@plur', tag: 'SHOW' },
  { year: '2025', title: 'Sessão @eudomluan', desc: 'Styling e direção de imagem para sessão fotográfica.', credit: '@oguifsphoto', tag: 'SESSÃO' },
  { year: '2025', title: 'Styling @vittorsetty', desc: 'Styling completo para o artista.', credit: '', tag: 'STYLING' },
  { year: '2025', title: 'Sessão @og.belbel', desc: 'Sessão fotográfica com styling e direção visual.', credit: '', tag: 'SESSÃO' },
]

function parseHandles(text: string) {
  const parts = text.split(/(@\w+(?:\.\w+)?)/g)
  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      const handle = part.slice(1)
      return (
        <a
          key={index}
          href={`https://instagram.com/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff3131] hover:underline transition-colors"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

export function Timeline() {
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
      id="trabalhos" 
      ref={sectionRef}
      className="snap-section bg-[#0a0a0a] py-32 px-4 relative noise-overlay stripe-bg"
    >
      {/* Header */}
      <div className={`text-center mb-20 reveal-street ${isVisible ? 'is-visible' : ''}`}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-[#ff3131]" />
          <span className="font-mono text-[#ff3131] text-xs uppercase tracking-widest">Projetos</span>
          <div className="h-px w-16 bg-[#ff3131]" />
        </div>
        <h2 
          className="font-display font-black uppercase text-white"
          style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            letterSpacing: '-0.04em'
          }}
        >
          TRABALHOS
        </h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-widest mt-4">
          Colaborações e projetos
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[3px] bg-[#ff3131]/30" />

        {/* Items */}
        <div className="flex flex-col gap-8">
          {trabalhos.map((item, index) => {
            const isLeft = index % 2 === 0
            
            return (
              <div 
                key={index}
                className={`relative flex ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} reveal-street ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                {/* Dot on line */}
                <div 
                  className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#ff3131] -translate-x-1/2 top-5"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />

                {/* Card */}
                <div 
                  className={`ml-12 lg:ml-0 w-[85%] lg:w-[45%] bg-white/[0.02] border-2 border-white/10 p-5 hover:border-[#ff3131] transition-colors duration-300 ${
                    isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[#ff3131] text-xs">{item.year}</span>
                    <div className="sticker text-[10px]">{item.tag}</div>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg uppercase">
                    {parseHandles(item.title)}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mt-2">
                    {parseHandles(item.desc)}
                  </p>
                  {item.credit && (
                    <p className="text-white/30 text-xs mt-3 font-mono">
                      {parseHandles(item.credit)}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
