import Link from 'next/link';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              {COMPANY.brand}
              <span>.</span>
            </div>
            <p>
              Consultoria em TI com foco em agentes de IA, sites com conversão,
              Integrações e Odoo. Entrega hands-on para operações que precisam
              de resultado.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/#solucoes">Soluções</Link></li>
              <li><Link href="/#agentes">Agentes IA</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/#contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY.whatsappFormatted}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {COMPANY.legalName}</p>
          <p>{COMPANY.location}</p>
        </div>
      </div>
    </footer>
  );
}
