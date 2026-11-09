import { Outfit, Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-ftg-display',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-ftg-body',
  display: 'swap',
});

export default function FtgLayout({ children }: { children: React.ReactNode }) {
  return <div className={`ftg-root ${syne.variable} ${outfit.variable}`}>{children}</div>;
}
