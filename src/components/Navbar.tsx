'use client';

import { useEffect, useState } from 'react';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

const LINKS = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#agentes', label: 'Agentes IA' },
  { href: '#stack', label: 'Stack' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 120);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`}
        aria-label="Principal"
      >
        <div className="container navbar-inner">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            {COMPANY.brand}
            <span>.</span>
          </a>

          <div className="nav-links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={closeMenu} />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="logo">
                {COMPANY.brand}
                <span>.</span>
              </span>
              <button onClick={closeMenu} aria-label="Fechar menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="mobile-menu-nav">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Falar no WhatsApp
            </a>
          </div>
        </>
      )}
    </>
  );
}
