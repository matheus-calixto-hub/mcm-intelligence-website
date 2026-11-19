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
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/produtos">Produtos</Link></li>
              <li><Link href="/product/followup">Follow-up</Link></li>
              <li><Link href="/product/whatsappbooking">Agendamento</Link></li>
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
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir demonstração
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
