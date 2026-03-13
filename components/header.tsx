'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Instagram, Mail } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#portfolio', label: 'HOME' },
  { href: '#sobre', label: 'SOBRE' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#trabalhos', label: 'TRABALHOS' },
  { href: '#contato', label: 'CONTATO' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={cn(
          'flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-3 transition-all duration-300',
          isScrolled 
            ? 'bg-[#0a0a0a]/95 border-b-2 border-[#ff3131]' 
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <a 
          href="#portfolio"
          onClick={(e) => scrollToSection(e, '#portfolio')}
          className="font-display font-black text-white text-xl tracking-tighter hover:text-[#ff3131] transition-colors cursor-pointer"
        >
          LEREUX
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/70 hover:text-[#ff3131] text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {mounted ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button 
              className="text-white p-2 hover:text-[#ff3131] transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:max-w-full bg-[#0a0a0a] border-none p-0"
          >
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <div className="flex flex-col h-full noise-overlay">
              {/* Header do Sheet */}
              <div className="flex items-center justify-between p-6 border-b-2 border-[#ff3131]">
                <span className="font-display font-black text-white text-2xl tracking-tighter">LEREUX</span>
                <SheetClose asChild>
                  <button 
                    className="text-white/70 hover:text-[#ff3131] transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </SheetClose>
              </div>

              {/* Links de navegação */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-4">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="font-display font-black text-white text-[3rem] uppercase tracking-tighter hover:text-[#ff3131] transition-colors duration-200 leading-none cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* Footer do Sheet - Socials */}
              <div className="p-8 border-t-2 border-white/10">
                <div className="flex items-center gap-6">
                  <a
                    href="https://instagram.com/lereux_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 hover:text-[#ff3131] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-mono">@lereux_</span>
                  </a>
                  <a
                    href="mailto:encomendasle.reux@gmail.com"
                    className="flex items-center gap-2 text-white/50 hover:text-[#ff3131] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-mono">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        ) : (
          <button 
            className="md:hidden text-white p-2 hover:text-[#ff3131] transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </nav>
    </header>
  )
}
