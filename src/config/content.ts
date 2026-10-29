/**
 * Conteúdo editorial do site — portfolio + ofertas
 */

export const SOLUTIONS = [
  {
    id: 'agentes',
    title: 'Agentes de IA no WhatsApp',
    lead: 'Atendimento, qualificação e operação sem depender de chat interno do ERP.',
    points: [
      'WhatsApp Business (Meta oficial) ou Evolution',
      'Templates, envio agendado e disparo em massa (sob consulta)',
      'Orientação de custos e limites da Meta antes de operar',
      'Handoff humano, opt-in/LGPD e registro no sistema que você já usa',
      'Funciona com Odoo — ou sem ele',
    ],
  },
  {
    id: 'integracoes',
    title: 'Integrações e microsserviços',
    lead: 'Conectamos ERP, legado, APIs e bancos com arquitetura que aguenta produção.',
    points: [
      'FastAPI, filas, sync bidirecional',
      'VPN/OpenVPN quando o legado exige rede fechada',
      'Docker, observabilidade e deploy previsível',
      'CNAB, marketplaces, Data Lake, HubSpot e afins',
    ],
  },
  {
    id: 'odoo',
    title: 'Odoo Enterprise & Community',
    lead: 'Arquitetura, customização, fiscal BR e sustentação — hands-on de ponta a ponta.',
    points: [
      'Implantação, migração e upgrade',
      'Módulos sob medida e localização fiscal',
      'Helpdesk, CRM, estoque, projeto, clínico',
      'Squads e consultoria para consultorias e clientes finais',
    ],
  },
  {
    id: 'infra',
    title: 'Cloud, VPS e hospedagem',
    lead: 'Subimos e operamos a infraestrutura onde a solução roda — sem você ficar na mão.',
    points: [
      'AWS e outros clouds (EC2, redes, segurança básica)',
      'VPS, servidores dedicados e hospedagem de aplicações',
      'Docker, reverse proxy, TLS e ambientes de homolog/produção',
      'Monitoramento, backup e handoff operacional',
    ],
  },
  {
    id: 'automacao',
    title: 'Automação de processos',
    lead: 'n8n, MCP e orquestrações que tiram trabalho repetitivo do time.',
    points: [
      'Fluxos com LLMs (OpenAI, Gemini e similares)',
      'Extração e escrita controlada no ERP',
      'Automação jurídica, omnichannel e back-office',
      'Governança: o agente só faz o que você autoriza',
    ],
  },
] as const;

export const TECH_STACK = [
  {
    name: 'Odoo',
    detail: 'ERP / CRM / verticalizações',
    usedBy: ['Have', 'KMEE', 'Mazza.tech', 'Asisto', 'Bluy', 'Waybee', 'TIS'],
  },
  {
    name: 'Python & FastAPI',
    detail: 'APIs, conectores, microsserviços',
    usedBy: ['Syma / Intersig', 'Nubank', 'AG Capital', 'Intelligenti'],
  },
  {
    name: 'n8n + LLMs',
    detail: 'Orquestração de agentes e automações',
    usedBy: ['Indupropil', 'Medinfuse', 'operações comerciais'],
  },
  {
    name: 'WhatsApp (Meta / Evolution)',
    detail: 'Agentes, templates, agendamento e massa',
    usedBy: ['Medinfuse', 'Indupropil', 'Nubank / Zenvia'],
  },
  {
    name: 'AWS, Cloud & VPS',
    detail: 'Hospedagem, Docker, VPN, Odoo.sh',
    usedBy: ['Syma', 'Have', 'projetos enterprise'],
  },
  {
    name: 'Fiscal BR & CNAB',
    detail: 'NF-e, Avalara, PIX, boletos',
    usedBy: ['Pampeiro / SoftHill', 'Sylvia Design', 'OCA / KMEE'],
  },
] as const;

export const EXPERIENCES = [
  {
    period: '03/2026 – Atual',
    role: 'Odoo Architect / Specialist',
    company: 'Have Consultoria',
    clients: 'Syma, Medinfuse, Indupropil',
    summary:
      'Arquitetura Odoo 19 Enterprise, agentes WhatsApp Business (Meta) + CRM + IA, microsserviço Syma com OpenVPN, Have Clinic App e fiscal de importação.',
    highlights: ['WhatsApp Meta API', 'FastAPI + OpenVPN', 'MCP / n8n', 'Odoo 19'],
  },
  {
    period: '03/2026 – 06/2026',
    role: 'Odoo Systems Specialist',
    company: 'Multtiplus | TIS',
    clients: 'Angola',
    summary:
      'Localização angolana: estoque/valorização, relatórios financeiros multicurrency, ativos e mapas fiscais em PDF/Excel.',
    highlights: ['Odoo 16', 'Localização AO', 'Relatórios', 'Ativos'],
  },
  {
    period: '12/2025',
    role: 'Odoo Systems Specialist',
    company: 'SoftHill',
    clients: 'Grupo Pampeiro, Toniolo',
    summary:
      'Odoo 18 Enterprise com localização BR e NF-e via Avalara — exportação/importação e compliance fiscal.',
    highlights: ['Odoo 18', 'Avalara', 'Fiscal BR'],
  },
  {
    period: '09/2025 – 12/2025',
    role: 'Tech Lead / Specialist',
    company: 'Asisto',
    clients: 'Sylvia Design',
    summary:
      'CNAB Bradesco (PIX, QR, TED, boletos) e integração Odoo ↔ Zurich Seguros para garantia estendida.',
    highlights: ['CNAB', 'PIX', 'Integração seguros'],
  },
  {
    period: '05/2025 – 08/2025',
    role: 'Odoo Architect',
    company: 'KMEE',
    clients: 'AG Capital TaxTech',
    summary:
      'Connectors assíncronos (Data Lake, HubSpot), correções na localização OCA e customizações Enterprise.',
    highlights: ['Filas', 'OCA l10n-brazil', 'HubSpot'],
  },
  {
    period: '09/2024 – 05/2025',
    role: 'Tech Lead / Implantação',
    company: 'Mazza.tech',
    clients: 'Infracommerce',
    summary:
      'Liderança na implantação Odoo Enterprise (Helpdesk/SAC) no lugar do Salesforce, dashboards e integrações Databricks.',
    highlights: ['Helpdesk', 'Salesforce → Odoo', 'Databricks'],
  },
  {
    period: '04/2024 – 07/2024',
    role: 'IT Engineer',
    company: 'Digisystem',
    clients: 'Nubank',
    summary:
      'Microsserviço de integração Jira Service Desk, Zenvia e WhatsApp com automações omnichannel.',
    highlights: ['WhatsApp', 'Jira', 'Zenvia'],
  },
  {
    period: '09/2021 – 09/2022',
    role: 'Back-end Developer',
    company: 'Bluy',
    clients: undefined,
    summary:
      'Back-end Python em plataforma de RH/Recrutamento sobre Odoo — APIs, integrações e regras de negócio.',
    highlights: ['Python', 'Odoo', 'RH'],
  },
  {
    period: 'Anteriores',
    role: 'Full Stack / Automação',
    company: 'Waybee · Intelligenti · Asisto',
    clients: undefined,
    summary:
      'E-commerce educacional, automações jurídicas em 16 estados (certificado OAB) e anos de ERP/CRM Odoo com infra e Power BI.',
    highlights: ['React', 'Selenium', 'RabbitMQ', 'Odoo'],
  },
] as const;

export const CLIENT_LOGOS = [
  { name: 'Have Consultoria', url: 'https://haveconsultoria.com.br/' },
  { name: 'Syma', url: 'https://www.syma.com.br/' },
  { name: 'Medinfuse', url: 'https://medinfuse.com.br/' },
  { name: 'KMEE', url: 'https://kmee.com.br/' },
  { name: 'Mazza.tech', url: 'https://mazza.tech/' },
  { name: 'Infracommerce', url: 'https://www.infracommerce.lat/pt-BR' },
  { name: 'Asisto', url: 'https://www.asisto.com.br/' },
  { name: 'Bluy', url: 'https://www.bluy.com/' },
  { name: 'Waybee', url: 'https://www.waybee.com.br/' },
  { name: 'Intelligenti', url: 'https://www.intelligenti.com.br/' },
  { name: 'Digisystem', url: 'https://www.digisystem.com.br/' },
  { name: 'TIS', url: 'https://tis.ao/' },
] as const;
