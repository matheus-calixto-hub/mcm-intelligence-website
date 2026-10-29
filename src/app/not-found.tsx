import Link from "next/link";
import { COMPANY } from "@/config/constants";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p className="logo">
        {COMPANY.brand}
        <span>.</span>
      </p>
      <h1 className="display" style={{ fontSize: "2rem" }}>
        Página não encontrada
      </h1>
      <p style={{ color: "var(--ink-soft)" }}>
        O endereço não existe ou foi movido.
      </p>
      <Link href="/" className="btn btn-primary">
        Voltar ao início
      </Link>
    </div>
  );
}
