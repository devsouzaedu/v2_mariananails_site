"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface LinkCardProps {
  imageSrc: string;
  href: string;
  delay?: number;
}

const LinkCard = ({ imageSrc, href, delay = 0 }: LinkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`link-card-inner ${isHovered ? 'hovered' : ''}`}>
        <Image
          src={imageSrc}
          alt="Link Card"
          width={500}
          height={150}
          className="link-card-image"
          priority
        />
        <div className="link-card-overlay">
          <span className="link-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
};

export default function LinksPage() {
  const links = [
    {
      imageSrc: '/images/mca_topo_link1.png',
      href: 'https://www.mariananails.com.br/cutilagem',
    },
    {
      imageSrc: '/images/smn_topo_link1.png',
      href: 'https://hub.la/r/St5rvAgOZLJUs03WOEzA',
    },
    {
      imageSrc: '/images/IMPS_topo_link1.png',
      href: 'https://hub.la/r/xxSjRNqIbWOrKe4Z8bFu',
    },
  ];

  return (
    <div className="links-page">
      {/* Background Elements */}
      <div className="background-decoration">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/images/mariana_link_hero_top.png"
            alt="Mariana Nails"
            width={400}
            height={500}
            className="hero-image"
            priority
          />
          <div className="hero-glow"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Mariana Nails</h1>
          <p className="hero-subtitle">Transformando sonhos em realidade através da arte em unhas</p>
        </div>
      </section>

      {/* Links Section */}
      <section className="links-section">
        <h2 className="section-title">Meus Cursos</h2>
        <p className="section-subtitle">Clique para saber mais</p>

        <div className="links-container">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              imageSrc={link.imageSrc}
              href={link.href}
              delay={index * 150}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="links-footer">
        <div className="social-icons">
          <a href="https://www.instagram.com/mariananails" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        <p>&copy; 2025 Mariana Nails. Todos os direitos reservados.</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Poppins:wght@300;400;500;600&display=swap');

        .links-page {
          min-height: 100vh;
          background: #0a0a0a;
          position: relative;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* Background Decorations */
        .background-decoration {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .bg-circle-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #333 0%, #1a1a1a 100%);
          top: -100px;
          right: -100px;
        }

        .bg-circle-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
          bottom: 20%;
          left: -50px;
        }

        .bg-circle-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #3d3d3d 0%, #252525 100%);
          bottom: -50px;
          right: 20%;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 30px;
          text-align: center;
        }

        .hero-image-container {
          position: relative;
          margin-bottom: 24px;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-title {
          font-family: 'Instrument Serif', serif;
          font-size: 2.5rem;
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 20px;
          max-width: 280px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: #ffffff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .social-icon:hover {
          background: #ffffff;
          color: #0a0a0a;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
        }

        .social-icon .icon {
          width: 22px;
          height: 22px;
        }

        /* Links Section */
        .links-section {
          position: relative;
          z-index: 1;
          padding: 20px 20px 40px;
          max-width: 500px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Instrument Serif', serif;
          font-size: 1.8rem;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          margin: 0 0 4px;
        }

        .section-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          margin: 0 0 24px;
        }

        .links-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Link Card */
        .link-card {
          display: block;
          text-decoration: none;
          animation: fadeInUp 0.6s ease-out both;
        }

        .link-card-inner {
          position: relative;
          overflow: visible;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .link-card-inner:hover,
        .link-card-inner.hovered {
          transform: translateY(-6px) scale(1.03);
        }

        .link-card-image {
          width: 100%;
          height: auto;
          display: block;
          transition: all 0.4s ease;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.12));
        }

        .link-card-inner:hover .link-card-image,
        .link-card-inner.hovered .link-card-image {
          transform: scale(1.02);
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.18));
        }

        .link-card-overlay {
          display: none;
        }

        .link-card-arrow {
          display: none;
        }

        /* Footer */
        .links-footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 30px 20px 40px;
        }

        .links-footer p {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (min-width: 768px) {
          .hero-section {
            padding: 60px 40px 40px;
          }

          .hero-image {
            max-width: 380px;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            max-width: 350px;
          }

          .links-section {
            padding: 30px 40px 60px;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .links-container {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
