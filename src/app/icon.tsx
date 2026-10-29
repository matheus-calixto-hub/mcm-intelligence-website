import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0c1b2a',
          color: '#9fd9cb',
          fontSize: 220,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          letterSpacing: -8,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
