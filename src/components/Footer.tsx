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
              Atendimento e follow-up no WhatsApp, agendamento pelo zap e sites
              feitos para converter. Conversamos no WhatsApp e colocamos para
              rodar.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
              className="btn btn-primary footer-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero uma demonstração
            </a>
          </div>

          <div>
            <h4>Produtos</h4>
            <ul>
              <li>
                <Link href="/produtos">Todos os produtos</Link>
              </li>
              <li>
                <Link href="/product/followup">Follow-up</Link>
              </li>
              <li>
                <Link href="/product/sla-dashboard">Painel SLA</Link>
              </li>
              <li>
                <Link href="/product/whatsappbooking">Agendamento</Link>
              </li>
              <li>
                <Link href="/product/loja">Loja WhatsApp</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/#contato">Contato</Link>
              </li>
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
          <div className="footer-legal">
            <p>
              &copy; {currentYear} {COMPANY.legalName}
            </p>
            <p>
              CNPJ {COMPANY.cnpj}
              <span className="footer-legal-sep" aria-hidden="true">
                ·
              </span>
              {COMPANY.location}
            </p>
          </div>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
            className="footer-bottom-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
