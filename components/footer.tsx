'use client'

const navLinks = [
  { href: '#portfolio', label: 'HOME' },
  { href: '#sobre', label: 'SOBRE' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#trabalhos', label: 'TRABALHOS' },
  { href: '#contato', label: 'CONTATO' },
]

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Footer() {
  return (
    <footer className="bg-[#050505] py-16 px-4 relative noise-overlay">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ff3131]" />

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <span className="font-display font-black text-white text-3xl tracking-tighter">LEREUX</span>
            <p className="text-white/30 text-xs font-mono mt-2 uppercase tracking-widest">Conceito para as Ruas</p>
            <div className="sticker text-xs mt-4">EST. 2024</div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-[#ff3131] text-xs uppercase tracking-widest mb-4 font-mono">Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/50 hover:text-[#ff3131] text-sm transition font-bold uppercase tracking-wider cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-[#ff3131] text-xs uppercase tracking-widest mb-4 font-mono">Contato</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://instagram.com/lereux_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#ff3131] text-sm transition font-mono"
              >
                @lereux_
              </a>
              <a 
                href="mailto:encomendasle.reux@gmail.com"
                className="text-white/50 hover:text-[#ff3131] text-sm transition font-mono break-all"
              >
                encomendasle.reux@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono uppercase tracking-wider">
            2026 Lereux. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs font-mono">Fotos por</span>
            <a href="https://instagram.com/oguifsphoto" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff3131] text-xs font-mono transition">@oguifsphoto</a>
            <a href="https://instagram.com/patrick_prado" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff3131] text-xs font-mono transition">@patrick_prado</a>
            <a href="https://instagram.com/sarasgomes_" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff3131] text-xs font-mono transition">@sarasgomes_</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-xs font-mono">Desenvolvido por</span>
            <a href="https://instagram.com/piazza.dev" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#ff3131] text-xs font-mono transition">@piazza.dev</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
