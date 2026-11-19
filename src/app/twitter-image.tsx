import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MCM Consultoria — Atendimento no WhatsApp que vende';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0c1b2a 0%, #16364a 55%, #1a6b5c 100%)',
          color: '#ffffff',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#9fd9cb',
            fontWeight: 600,
          }}
        >
          Consultoria MCM
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: -3,
              fontWeight: 600,
            }}
          >
            MCM.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              lineHeight: 1.25,
              maxWidth: 900,
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'sans-serif',
            }}
          >
            Seu cliente já está no WhatsApp. Sua operação também deveria.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.72)',
            fontFamily: 'sans-serif',
          }}
        >
          <span>São Paulo · Brasil</span>
          <span>Follow-up · Agenda · Sites</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
