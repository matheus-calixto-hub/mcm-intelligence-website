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
      'Chatbox / inbox para o time da empresa atender como a marca',
      'Governança: IA responde sozinha ou escala para humano — por cliente e por fluxo',
      'Templates, envio agendado e disparo em massa (sob consulta)',
      'Orientação de custos e limites da Meta antes de operar',
      'Opt-in/LGPD e registro no sistema que você já usa — com ou sem Odoo',
    ],
  },
  {
    id: 'sites',
    title: 'Sites personalizados com conversão',
    lead:
      'Site da sua marca, no seu domínio — feito para ranquear, converter e levar o visitante ao WhatsApp (com ou sem assistente de IA).',
    points: [
      'Site sob medida (como o da Consultoria MCM): identidade, SEO técnico e preview social (WhatsApp, LinkedIn, Meta)',
      'Domínio próprio, hospedagem e SSL — URL profissional da empresa',
      'CTAs de conversão: botão flutuante, faixas de ação, copy que reduz atrito até o WhatsApp',
      'Pronto para Meta Business e campanhas Google Ads / AdSense — landing e tracking alinhados ao funil',
      'WhatsApp Business (Meta): assistente de IA no atendimento, com opção de desligar e continuar só com humano',
      'Evolução sob demanda: do site + atendimento para vendas, pedidos, NFS-e / notas de serviço e operação no ERP',
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
      'NF-e (produto) e NFS-e (serviço), estoque, CRM, helpdesk, clínico',
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
    detail: 'Agentes, chatbox, templates, agendamento e massa',
    usedBy: ['Medinfuse', 'Indupropil', 'Nubank / Zenvia'],
  },
  {
    name: 'AWS, Cloud & VPS',
    detail: 'Hospedagem, Docker, VPN, Odoo.sh',
    usedBy: ['Syma', 'Have', 'projetos enterprise'],
  },
  {
    name: 'Fiscal BR & CNAB',
    detail: 'NF (NF-e produto · NFS-e serviço), Avalara, PIX, boletos',
    usedBy: ['Pampeiro / SoftHill', 'Sylvia Design', 'OCA / KMEE'],
  },
  {
    name: 'Site Personalizado & SEO',
    detail: 'Domínio próprio, CTAs, preview social e conversão para WhatsApp',
    usedBy: ['Consultoria MCM', 'landings comerciais'],
  },
] as const;

/** Experiência em campo: empresa + o que foi entregue (sem cargos). */
export const EXPERIENCES = [
  {
    period: '03/2026 – Atual',
    company: 'Have Consultoria',
    clients: 'Syma, Medinfuse, Indupropil',
    summary:
      'Arquitetura Odoo 19 Enterprise, agentes WhatsApp Business (Meta) + CRM + IA, microsserviço Syma com OpenVPN, Have Clinic App e fiscal de importação.',
    highlights: ['WhatsApp Meta API', 'FastAPI + OpenVPN', 'MCP / n8n', 'Odoo 19'],
  },
  {
    period: '03/2026 – 06/2026',
    company: 'Multtiplus | TIS',
    clients: 'Angola',
    summary:
      'Localização angolana: estoque/valorização, relatórios financeiros multicurrency, ativos e mapas fiscais em PDF/Excel.',
    highlights: ['Odoo 16', 'Localização AO', 'Relatórios', 'Ativos'],
  },
  {
    period: '12/2025',
    company: 'SoftHill',
    clients: 'Grupo Pampeiro, Toniolo',
    summary:
      'Odoo 18 Enterprise com localização BR — NF-e (produto) e NFS-e (serviço) via Avalara, exportação/importação e compliance fiscal.',
    highlights: ['Odoo 18', 'Avalara', 'NF-e / NFS-e'],
  },
  {
    period: '09/2025 – 12/2025',
    company: 'Asisto',
    clients: 'Sylvia Design',
    summary:
      'CNAB Bradesco (PIX, QR, TED, boletos) e integração Odoo ↔ Zurich Seguros para garantia estendida.',
    highlights: ['CNAB', 'PIX', 'Integração seguros'],
  },
  {
    period: '05/2025 – 08/2025',
    company: 'KMEE',
    clients: 'AG Capital TaxTech',
    summary:
      'Connectors assíncronos (Data Lake, HubSpot), correções na localização OCA e customizações Enterprise.',
    highlights: ['Filas', 'OCA l10n-brazil', 'HubSpot'],
  },
  {
    period: '09/2024 – 05/2025',
    company: 'Mazza.tech',
    clients: 'Infracommerce',
    summary:
      'Implantação Odoo Enterprise (Helpdesk/SAC) no lugar do Salesforce, dashboards e integrações Databricks.',
    highlights: ['Helpdesk', 'Salesforce → Odoo', 'Databricks'],
  },
  {
    period: '04/2024 – 07/2024',
    company: 'Digisystem',
    clients: 'Nubank',
    summary:
      'Microsserviço de integração Jira Service Desk, Zenvia e WhatsApp com automações omnichannel.',
    highlights: ['WhatsApp', 'Jira', 'Zenvia'],
  },
  {
    period: '09/2021 – 09/2022',
    company: 'Bluy',
    clients: undefined,
    summary:
      'Back-end Python em plataforma de RH/Recrutamento sobre Odoo — APIs, integrações e regras de negócio.',
    highlights: ['Python', 'Odoo', 'RH'],
  },
  {
    period: 'Anteriores',
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

/**
 * Empresas conhecidas que usam as plataformas com as quais atuamos.
 * Não são clientes MCM — mostram o ecossistema das stacks.
 */
export const ECOSYSTEM_USERS = [
  {
    platform: 'Odoo',
    blurb: 'ERP adotado por marcas e grupos industriais no mundo',
    companies: [
      'Toyota',
      'Danone',
      'Hyundai',
      'Veolia',
      'Decathlon',
      'Bata',
    ],
  },
  {
    platform: 'n8n',
    blurb: 'Automação e orquestração usadas em operações digitais de escala',
    companies: [
      'StepStone',
      'Delivery Hero',
      'Unbabel',
      'Voicemod',
    ],
  },
  {
    platform: 'WhatsApp Business Platform',
    blurb: 'Canal oficial Meta para atendimento e engajamento em escala',
    companies: [
      'Uber',
      'Airbnb',
      'KLM',
      'Carrefour',
      'Magalu',
      'iFood',
    ],
  },
  {
    platform: 'AWS & Cloud',
    blurb: 'Infraestrutura onde muitas dessas soluções rodam em produção',
    companies: [
      'Netflix',
      'NASA',
      'BMW',
      'Samsung',
    ],
  },
] as const;
