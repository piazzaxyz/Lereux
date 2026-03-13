'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

const galleryItems = [
  { id: 1, src: '/sessao-foto-2024-@oguifsphoto.png', project: 'Sessão de Fotos 2024', credit: '@oguifsphoto', tag: 'SESSÃO', aspect: '3/4' },
  { id: 2, src: '/@eudomluan.png', project: '@eudomluan', credit: '@oguifsphoto', tag: 'SESSÃO', aspect: '4/5' },
  { id: 3, src: '/@vitttorsetty..png', project: '@vitttorsetty', credit: '', tag: 'STYLING', aspect: '1/1' },
  { id: 4, src: '/@ogbelbel.png', project: '@og.belbel', credit: '', tag: 'SESSÃO', aspect: '3/4' },
  { id: 5, src: '/@wxmagoo.png', project: '@wxmagoo — Show', credit: '', tag: 'SHOW', aspect: '4/5' },
  { id: 6, src: '/abertura-@lptzlatan-@plur.png', project: '@lptzlatan na @plur', credit: '', tag: 'SHOW', aspect: '3/4' },
  { id: 7, src: '/@pilla.loja.png', project: '@pilla.loja', credit: '', tag: 'STYLING', aspect: '1/1' },
  { id: 8, src: '/@prod.sina.png', project: '@prod.sina', credit: '', tag: 'SESSÃO', aspect: '3/4' },
  { id: 9, src: '/mixtape-@astro_og.png', project: 'Mixtape @astro_og', credit: '', tag: 'MIXTAPE', aspect: '4/5' },
]

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return
    
    if (direction === 'prev') {
      setSelectedPhoto(selectedPhoto === 0 ? galleryItems.length - 1 : selectedPhoto - 1)
    } else {
      setSelectedPhoto(selectedPhoto === galleryItems.length - 1 ? 0 : selectedPhoto + 1)
    }
  }

  const currentPhoto = selectedPhoto !== null ? galleryItems[selectedPhoto] : null

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="snap-section bg-[#050505] py-32 px-4 relative noise-overlay bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(5,5,5,0.85), rgba(5,5,5,0.95)), url('/background-hero.png')" }}
    >
      {/* Header */}
      <div className={`text-center mb-16 reveal-street ${isVisible ? 'is-visible' : ''}`}>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-16 bg-[#ff3131]" />
          <span className="font-mono text-[#ff3131] text-xs uppercase tracking-widest">Portfolio</span>
          <div className="h-px w-16 bg-[#ff3131]" />
        </div>
        <h2 
          className="font-display font-black uppercase text-white glitch-text"
          data-text="GALLERY"
          style={{ 
            fontSize: 'clamp(3rem, 10vw, 9rem)',
            letterSpacing: '-0.04em'
          }}
        >
          GALLERY
        </h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-widest mt-4">
          Cada frame conta uma história
        </p>
      </div>

      {/* Masonry Grid */}
      <div 
        className={`max-w-6xl mx-auto reveal-street ${isVisible ? 'is-visible' : ''}`}
        style={{ 
          columns: '3 280px',
          gap: '16px',
          transitionDelay: '0.3s'
        }}
      >
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className="inline-block w-full mb-4 break-inside-avoid"
            style={{ transitionDelay: `${0.1 * index}s` }}
          >
            <div 
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: item.aspect }}
              onClick={() => setSelectedPhoto(index)}
            >
              {/* Border */}
              <div className="absolute inset-0 border-2 border-white/10 z-20 pointer-events-none group-hover:border-[#ff3131] transition-colors duration-300" />
              
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#1a1a1a]" />
              
              <Image
                src={item.src}
                alt={item.project}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="absolute bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="sticker text-[10px] mb-2">{item.tag}</div>
                  <p className="text-white font-bold text-sm">{item.project}</p>
                  {item.credit && (
                    <p className="text-white/50 text-xs mt-1 font-mono">{item.credit}</p>
                  )}
                </div>
              </div>

              {/* Maximize Icon */}
              <Maximize2 className="absolute top-3 right-3 w-4 h-4 text-white/0 group-hover:text-white/70 transition-colors duration-300 z-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent 
          className="bg-[#0a0a0a] border-2 border-white max-w-4xl p-0 overflow-hidden"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {currentPhoto?.project || 'Foto da galeria'}
          </DialogTitle>
          
          {currentPhoto && (
            <div className="relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-[#ff3131] transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button 
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#ff3131] transition-colors bg-black/80 p-2"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#ff3131] transition-colors bg-black/80 p-2"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/5] max-h-[80vh]">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.project}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-[#0a0a0a] border-t-2 border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">{currentPhoto.project}</h3>
                    {currentPhoto.credit && (
                      <p className="text-white/50 text-sm mt-1 font-mono">Foto por {currentPhoto.credit}</p>
                    )}
                  </div>
                  <div className="sticker text-xs">{currentPhoto.tag}</div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
