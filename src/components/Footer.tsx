import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image 
              src="/images/logo_mariana_nails.png" 
              alt="Mariana Nails" 
              width={180} 
              height={60}
              className="h-12 w-auto mb-5"
            />
            <p className="text-gray-300 max-w-xs mt-4">
              Especialista em nail design, oferecendo serviços de alta qualidade em Barueri e Alphaville.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/mariana_nails" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/images/instagram (1).png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://tiktok.com/@mariana_nails" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Image src="/images/tiktok.png" alt="TikTok" width={24} height={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Alphaville - Barueri, SP
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 99999-9999
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@mariananails.com.br
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Seg-Sáb: 9h às 19h
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mariana Nails. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 