/**
 * Evita next/font Google aqui: o build na Vercel falhou ao baixar Syne.
 * Reusa Fraunces/Manrope já carregadas no layout raiz.
 */
export default function FtgLayout({ children }: { children: React.ReactNode }) {
  return <div className="ftg-root">{children}</div>;
}
