'use client';

import { useEffect, useState } from 'react';
import { COMPANY } from '@/config/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Prevenir scroll do body quando menu está aberto
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar ${isHidden ? 'hidden' : ''}`}
        style={{
          background: isScrolled ? 'hsl(222 47% 6% / 0.9)' : 'transparent',
        }}
      >
        <div className="container">
        <div className="navbar-content glass-card">
          <a href="#" onClick={handleLogoClick} className="logo">
            <span>
              <span className="gradient-text-mcm">INTELIGÊNCIA MCM</span>
            </span>
          </a>
          
          <div className="nav-links">
            <a href="#recursos" onClick={handleLinkClick}>Plataforma</a>
            <a href="#governanca" onClick={handleLinkClick}>Governança</a>
            <a href="#produtos" onClick={handleLinkClick}>Planos</a>
            <a href="#servicos" onClick={handleLinkClick}>Serviços</a>
            <a href="#implantacao" onClick={handleLinkClick}>Implantação/Migração</a>
            <a href="#clientes" onClick={handleLinkClick}>Clientes</a>
            <a href="#contato" onClick={handleLinkClick}>Contato</a>
          </div>
          
          <div className="nav-cta">
            <a href="#contato" className="btn btn-primary btn-gradient-quote" onClick={handleLinkClick}>Orçamento</a>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
        </div>
      </nav>

      {/* Overlay e Menu Mobile */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
          />
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button 
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <a href="#recursos" onClick={handleLinkClick}>Plataforma</a>
              <a href="#governanca" onClick={handleLinkClick}>Governança</a>
              <a href="#produtos" onClick={handleLinkClick}>Planos</a>
              <a href="#servicos" onClick={handleLinkClick}>Serviços</a>
              <a href="#implantacao" onClick={handleLinkClick}>Implantação/Migração</a>
              <a href="#clientes" onClick={handleLinkClick}>Clientes</a>
              <a href="#contato" onClick={handleLinkClick}>Contato</a>
            </nav>
            <div className="mobile-menu-footer">
              <a href="#contato" className="btn btn-hero btn-block btn-gradient-quote" onClick={handleLinkClick}>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
