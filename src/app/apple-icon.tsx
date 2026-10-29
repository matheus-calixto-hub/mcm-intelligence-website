import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          letterSpacing: -4,
          borderRadius: 36,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
