'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Instagram, Send } from 'lucide-react'

const subjects = [
  'Styling Artístico',
  'Sessão de Fotos',
  'Clipe',
  'Campanha para Marca',
  'Direção Criativa',
  'Outro',
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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

  const handleSubmit = () => {
    const mailtoLink = `mailto:encomendasle.reux@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contato via Site')}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="snap-section bg-[#0a0a0a] py-32 px-4 relative noise-overlay stripe-bg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start relative z-10">
        {/* Left Column - Info */}
        <div className={`reveal-street ${isVisible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#ff3131]" />
            <span className="font-mono text-[#ff3131] text-xs uppercase tracking-widest">Contato</span>
          </div>

          <h2 
            className="font-display font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            VAMOS <br/>
            <span className="text-[#ff3131]">CRIAR</span> <br/>
            ALGO.
          </h2>

          <p className="text-white/50 leading-relaxed mt-6 max-w-md">
            Entre em contato para styling, sessões de fotos, clipes, direção criativa ou campanhas.
          </p>

          {/* Contact Links */}
          <div className="mt-8 flex flex-col gap-4">
            <a 
              href="mailto:encomendasle.reux@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#ff3131] flex items-center justify-center">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors font-mono text-sm">
                encomendasle.reux@gmail.com
              </span>
            </a>
            <a 
              href="https://instagram.com/lereux_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center group-hover:border-[#ff3131] transition-colors">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-[#ff3131] transition-colors" />
              </div>
              <span className="text-white/70 group-hover:text-[#ff3131] transition-colors font-mono text-sm">
                @lereux_
              </span>
            </a>
          </div>

          <p className="text-white/30 text-xs font-mono mt-8 uppercase tracking-wider">Resposta em até 24h</p>
        </div>

        {/* Right Column - Form */}
        <div 
          className={`reveal-street ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="NOME"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/[0.02] border-2 border-white/10 px-4 py-4 text-white placeholder:text-white/30 focus:border-[#ff3131] focus:outline-none transition font-mono text-sm uppercase tracking-wider"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/[0.02] border-2 border-white/10 px-4 py-4 text-white placeholder:text-white/30 focus:border-[#ff3131] focus:outline-none transition font-mono text-sm uppercase tracking-wider"
            />

            {/* Subject Select */}
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-white/[0.02] border-2 border-white/10 px-4 py-4 text-white focus:border-[#ff3131] focus:outline-none transition font-mono text-sm uppercase tracking-wider appearance-none cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ff3131' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.25rem 1.25rem',
              }}
            >
              <option value="" className="bg-[#0a0a0a] text-white/50">ASSUNTO</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject} className="bg-[#0a0a0a] text-white">
                  {subject}
                </option>
              ))}
            </select>

            {/* Message Textarea */}
            <textarea
              placeholder="MENSAGEM"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/[0.02] border-2 border-white/10 px-4 py-4 text-white placeholder:text-white/30 focus:border-[#ff3131] focus:outline-none transition font-mono text-sm uppercase tracking-wider resize-none"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-[#ff3131] hover:bg-white text-black font-display font-bold px-8 py-5 transition-all duration-200 text-base uppercase tracking-wider flex items-center justify-center gap-3 group"
            >
              <span>Enviar</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
