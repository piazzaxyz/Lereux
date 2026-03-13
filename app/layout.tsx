import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LEREUX | Stylist · Streetwear · Direcao Criativa',
  description: 'Desde 2024 trazendo conceito para as ruas. Styling streetwear, sessoes de fotos, clipes e direcao criativa para artistas independentes do rap e trap.',
  generator: 'Piazza.app',
  keywords: ['stylist', 'direcao criativa', 'streetwear', 'trap', 'rap', 'moda urbana', 'pixo'],
  authors: [{ name: 'LEREUX' }],
  openGraph: {
    title: 'LEREUX | Stylist · Social Media · Direção Criativa',
    description: 'Desde 2024 trazendo conceito para as ruas.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
