"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCursosSubmenu, setShowCursosSubmenu] = useState(false)

  // Impedir rolagem quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleCursosSubmenu = () => {
    setShowCursosSubmenu(!showCursosSubmenu)
  }

  const linkClass = "text-gray-300 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors";

  return (
    <>
      <nav className="bg-black/80 border-b border-white/10 backdrop-blur-md fixed w-full z-20 top-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo ou Nome do Espaço */}
              <Link href="/" className="flex items-center">
                <img 
                    src="/images/logo%20mARIANA%20NAILS%20BRANCA.png" 
                    alt="Mariana Nails" 
                    className="h-10 w-auto"
                  />
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className={linkClass}>
                  Início
                </Link>
                <Link href="/servicos" className={linkClass}>
                  Serviços
                </Link>
                <Link href="/galeria" className={linkClass}>
                  Galeria
                </Link>
                
                {/* Menu Cursos com submenu */}
                <div className="relative">
                  <button 
                    onClick={toggleCursosSubmenu}
                    className="text-gray-300 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors flex items-center"
                  >
                    Cursos
                    <svg 
                      className={`w-4 h-4 ml-1 transition-transform ${showCursosSubmenu ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Submenu de Cursos */}
                  {showCursosSubmenu && (
                    <div className="absolute left-0 mt-1 w-48 bg-[#111] border border-gray-800 rounded-md shadow-lg py-1 z-30">
                      <Link 
                        href="/cursos" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#D4AF37]"
                        onClick={() => setShowCursosSubmenu(false)}
                      >
                        Cursos Básicos
                      </Link>
                      <Link 
                        href="/cursos/especializacao" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#D4AF37]"
                        onClick={() => setShowCursosSubmenu(false)}
                      >
                        Especializações
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link href="/contato" className={linkClass}>
                  Contato
                </Link>
                <a 
                  href="https://wa.me/5511944598264?text=Oi!%20gostaria%20de%20agendar%20um%20atendimento%20de%20unhas!%20vim%20do%20site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-full uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-[#22C55E]/20 text-xs font-bold font-[family-name:var(--font-montserrat)]"
                >
                  Agende Agora
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menu principal</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - fora do nav para evitar problemas de aninhamento */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-full bg-gray-900 text-gray-300 hover:text-white shadow-md focus:outline-none"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-5 py-20">
            <Link href="/" 
              className="text-gray-300 hover:text-[#D4AF37] block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link href="/servicos" 
              className="text-gray-300 hover:text-[#D4AF37] block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link href="/galeria" 
              className="text-gray-300 hover:text-[#D4AF37] block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Galeria
            </Link>
            
            {/* Seção de cursos no menu mobile */}
            <div className="flex flex-col items-center space-y-4">
              <Link href="/cursos" 
                className="text-gray-300 hover:text-[#D4AF37] block text-2xl font-handwritten font-medium"
                onClick={closeMenu}
              >
                Cursos Básicos
              </Link>
              <Link href="/cursos/especializacao" 
                className="text-gray-400 hover:text-[#D4AF37] block text-xl font-handwritten font-medium"
                onClick={closeMenu}
              >
                Especializações
              </Link>
            </div>
            
            <Link href="/contato" 
              className="text-gray-300 hover:text-[#D4AF37] block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Contato
            </Link>
            <a 
              href="https://wa.me/5511944598264?text=Oi!%20gostaria%20de%20agendar%20um%20atendimento%20de%20unhas!%20vim%20do%20site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-lg shadow-[#22C55E]/20 text-lg font-bold uppercase tracking-wide rounded-full px-8 py-4 mt-6 transition-all duration-300 font-[family-name:var(--font-montserrat)]"
              onClick={closeMenu}
            >
              Agende Agora
            </a>
          </div>
          
          <div className="pb-12 flex justify-center">
            <img 
                src="/images/logo%20mARIANA%20NAILS%20BRANCA.png" 
                alt="Mariana Nails" 
                className="h-10 w-auto opacity-80"
              />
          </div>
        </div>
      )}
    </>
  )
}