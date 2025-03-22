"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import AnimatedBanner from './AnimatedBanner'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <>
      <AnimatedBanner />
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-20 shadow-sm top-7">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0">
              {/* Logo removida */}
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-800 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Início
                </Link>
                <Link href="/servicos" className="text-gray-800 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Serviços
                </Link>
                <Link href="/galeria" className="text-gray-800 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Galeria
                </Link>
                <Link href="/cursos" className="text-gray-800 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Cursos
                </Link>
                <Link href="/contato" className="text-gray-800 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contato
                </Link>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Agende Agora
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
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
        <div className="fixed inset-0 bg-pink-50 z-50 flex flex-col">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-full bg-white shadow-md text-gray-800 hover:text-primary-600 focus:outline-none"
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
              className="text-primary-700 hover:text-primary-800 block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link href="/servicos" 
              className="text-primary-700 hover:text-primary-800 block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link href="/galeria" 
              className="text-primary-700 hover:text-primary-800 block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Galeria
            </Link>
            <Link href="/cursos" 
              className="text-primary-700 hover:text-primary-800 block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Cursos
            </Link>
            <Link href="/contato" 
              className="text-primary-700 hover:text-primary-800 block text-2xl font-handwritten font-medium"
              onClick={closeMenu}
            >
              Contato
            </Link>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-8 py-4 mt-6"
              onClick={closeMenu}
            >
              Agende Agora
            </a>
          </div>
          
          <div className="pb-12 flex justify-center">
            <img 
              src="/images/logo_mariana_nails.png" 
              alt="Mariana Nails" 
              className="h-10 w-auto opacity-80"
            />
          </div>
        </div>
      )}
    </>
  )
} 