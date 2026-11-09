import localFont from 'next/font/local';

/** Syne/Outfit self-hosted — evita fetch Google Fonts no build da Vercel. */
const syne = localFont({
  src: './fonts/Syne-Variable.ttf',
  variable: '--font-ftg-display',
  display: 'swap',
  weight: '400 800',
});

const outfit = localFont({
  src: './fonts/Outfit-Variable.ttf',
  variable: '--font-ftg-body',
  display: 'swap',
  weight: '100 900',
});

export default function FtgLayout({ children }: { children: React.ReactNode }) {
  return <div className={`ftg-root ${syne.variable} ${outfit.variable}`}>{children}</div>;
}
