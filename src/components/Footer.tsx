import { COMPANY } from '@/config/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo">
              <span className="footer-mcm">MCM - Consultoria em IA</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginTop: '1rem' }}>
              Especialistas há mais de 8 anos.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Produtos e Serviços</h4>
            <ul>
              <li><a href="#produtos">Agente IA + Nosso MCP HUB</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#implantacao">Implantação/Migração</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li><a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">WhatsApp (Nossa IA)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
