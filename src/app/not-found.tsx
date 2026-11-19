import Link from 'next/link';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/config/constants';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <p className="logo">
        {COMPANY.brand}
        <span>.</span>
      </p>
      <h1 className="display" style={{ fontSize: '2rem' }}>
        Página não encontrada
      </h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: '28rem' }}>
        O endereço não existe ou foi movido. Veja os produtos ou fale conosco no
        WhatsApp.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-secondary">
          Voltar ao início
        </Link>
        <Link href="/produtos" className="btn btn-secondary">
          Ver produtos
        </Link>
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '0.5rem' }}>
        {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
      </p>
    </div>
  );
}
