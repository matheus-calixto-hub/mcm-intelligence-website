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
              Consultoria em TI com foco em agentes de IA, integrações e Odoo.
              Entrega hands-on para operações que precisam de resultado.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#agentes">Agentes IA</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#experiencia">Experiência</a></li>
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
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {COMPANY.name}</p>
          <p>{COMPANY.location}</p>
        </div>
      </div>
    </footer>
  );
}
