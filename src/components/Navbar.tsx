'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  COMPANY,
  getWhatsAppMessageForPath,
  getWhatsAppUrl,
} from '@/config/constants';

const HOME_LINKS = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/product/followup', label: 'Follow-up' },
  { href: '/product/whatsappbooking', label: 'Agendamento' },
  { href: '/#contato', label: 'Contato' },
  { href: '/sobre', label: 'Sobre' },
];

const PRODUTOS_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/product/followup', label: 'Follow-up' },
  { href: '/product/sla-dashboard', label: 'Painel SLA' },
  { href: '/product/whatsappbooking', label: 'Agendamento' },
  { href: '/#contato', label: 'Contato' },
];

const SOBRE_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/sobre#experiencia', label: 'Experiência' },
  { href: '/#contato', label: 'Contato' },
];

const PRODUCT_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/product/followup', label: 'Follow-up' },
  { href: '/product/sla-dashboard', label: 'Painel SLA' },
  { href: '/product/whatsappbooking', label: 'Agendamento' },
  { href: '/#contato', label: 'Contato' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSobre = pathname?.startsWith('/sobre');
  const isProduct = pathname?.startsWith('/product');
  const isProdutos = pathname?.startsWith('/produtos');
  const links = isProduct
    ? PRODUCT_LINKS
    : isProdutos
      ? PRODUTOS_LINKS
      : isSobre
        ? SOBRE_LINKS
        : HOME_LINKS;
  const waHref = getWhatsAppUrl(getWhatsAppMessageForPath(pathname));

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      // Em landings de produto o header fica fixo no topo (sem esconder).
      setIsHidden(
        !isProduct && currentScrollY > lastScrollY && currentScrollY > 120,
      );
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isProduct]);

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
        className={`navbar ${isScrolled || isProduct ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`}
        aria-label="Principal"
      >
        <div className="container navbar-inner">
          <Link href="/" className="logo" onClick={closeMenu}>
            {COMPANY.brand}
            <span>.</span>
          </Link>

          <div className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={waHref}
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
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={waHref}
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
