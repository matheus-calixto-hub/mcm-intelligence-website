/**
 * Conteúdo editorial do site — portfolio + ofertas
 */

/** Cards da home — linguagem natural de venda. */
export const SOLUTIONS = [
  {
    id: 'followup',
    title: 'Follow-up que não deixa lead esfriar',
    lead: 'Seu time sabe o que responder agora — e o próximo toque já está no calendário.',
    points: [
      'Fila do que está atrasado',
      'WhatsApp e e-mail da empresa juntos',
      'Qualquer vendedor assume a conversa',
      'Gestor vê o ritmo de resposta',
    ],
    href: '/product/followup',
  },
  {
    id: 'sla',
    title: 'Painel de SLA que o sócio entende',
    lead: 'Tempo de resposta, fila e Follow-ups em gráficos — prontos para a reunião de vendas.',
    points: [
      '% no prazo e 1ª resposta',
      'Vendedor vê o próprio ritmo',
      'Sócio filtra por responsável',
      'Follow-ups agendados e disparados',
    ],
    href: '/product/sla-dashboard',
  },
  {
    id: 'booking',
    title: 'Agenda no WhatsApp, sem te interromper',
    lead: 'Enquanto você atende, o cliente marca e remarca sozinho no zap.',
    points: [
      'Sem app novo',
      'Remarcação em poucos toques',
      'Gestor libera o dia pelo próprio WhatsApp',
      'Menos cadeira vazia',
    ],
    href: '/product/whatsappbooking',
  },
  {
    id: 'sites',
    title: 'Site bonito que manda gente pro zap',
    lead: 'Sua marca no Google e no LinkedIn — com caminho óbvio até a conversa.',
    points: [
      'Visual profissional da sua empresa',
      'Botão e CTAs para WhatsApp',
      'Pronto para anúncio',
      'Dá para evoluir depois',
    ],
    href: '/#contato',
  },
] as const;

/** Hub /produtos — escolha guiada. */
export const PRODUCTS = [
  {
    id: 'followup',
    name: 'Follow-up comercial',
    eyebrow: 'Vendas e relacionamento',
    blurb:
      'Para times que vendem no zap: fila, prazos, follow-up e conversa com cara de gente.',
    points: [
      'Ninguém perde o lead no celular pessoal',
      'Follow-up sai no horário',
      'WhatsApp + e-mail da empresa',
      'Gestor enxerga o time',
    ],
    image: '/products/followup-inbox.jpg',
    visual: 'conversas',
    href: '/product/followup',
    cta: 'Conhecer o Follow-up',
  },
  {
    id: 'sla',
    name: 'Painel SLA & Follow-up',
    eyebrow: 'Indicadores e gestão',
    blurb:
      'Visão geral com gráficos: tempo de resposta, % no SLA, fila, disparos e falhas — o que o mercado cobra ver.',
    points: [
      '1ª resposta WA e e-mail',
      'Vendedor vs sócio (filtro por responsável)',
      'Follow-ups agendados e enviados',
      'Pronto para apresentar em reunião',
    ],
    image: '/products/sla-dashboard.jpg',
    visual: 'image',
    href: '/product/sla-dashboard',
    cta: 'Ver o painel',
  },
  {
    id: 'booking',
    name: 'Agendamento no WhatsApp',
    eyebrow: 'Serviços e agenda',
    blurb:
      'Para quem vive de horário marcado: o cliente agenda sozinho e você continua atendendo.',
    points: [
      'Marca e remarca sem te ligar',
      'Gestor no próprio WhatsApp',
      'Confirmação no chat',
      'Salão, clínica, estúdio, serviços',
    ],
    image: '/products/booking-agenda.jpg',
    visual: 'booking-flow',
    href: '/product/whatsappbooking',
    cta: 'Conhecer o Agendamento',
  },
] as const;

/**
 * Ganhos típicos (marketing) — cenário de operação manual → com MCM.
 * Não são métricas auditadas de um cliente específico; são faixas
 * realistas para apresentar e calibrar na implantação.
 */
export const PRODUCT_IMPACT = {
  eyebrow: 'O que muda na operação',
  title: 'Menos trabalho manual. Mais resposta no prazo.',
  lead:
    'Empresas que ainda fazem follow-up e retorno no e-mail “na mão”, sem WhatsApp Business oficial e sem SLA, costumam perder tempo e lead no silêncio. O produto MCM cobre o que já dói hoje — WA + e-mail — e deixa o caminho aberto para omnichannel.',
  disclaimer:
    'Faixas ilustrativas de um cenário típico (atendimento manual → operação com fila, cadências e painel). Na implantação medimos o baseline da sua empresa e acompanhamos a evolução real.',
  beforeAfter: [
    {
      before: 'Follow-up na planilha / cabeça de cada um',
      after: 'Cadências no horário, com template e canal da empresa',
    },
    {
      before: 'WhatsApp pessoal ou só e-mail manual',
      after: 'WhatsApp Meta Business + e-mail no mesmo fluxo',
    },
    {
      before: 'Ninguém sabe há quanto tempo o cliente espera',
      after: 'Fila, Sem resposta e tempo de 1ª resposta no painel',
    },
    {
      before: 'Sócio pergunta “e aquele lead?” sem dado',
      after: '% no SLA, gráficos e filtro por responsável',
    },
  ],
  metrics: [
    {
      value: '30–50%',
      label: 'menos tempo em follow-up manual',
      detail: 'disparos e lembretes saem sozinhos; o time foca em conversar',
    },
    {
      value: '20–40%',
      label: 'menos leads “esquecidos” na fila',
      detail: 'atenção ordenada por atraso — WA e e-mail juntos',
    },
    {
      value: '1 painel',
      label: 'em vez de planilha + inbox + zap',
      detail: 'SLA, fila, Sem resposta e Follow-ups no mesmo lugar',
    },
    {
      value: '2 canais',
      label: 'já omnichannel (WA + e-mail)',
      detail: 'base pronta para evoluir outros canais depois',
    },
  ],
} as const;

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
    usedBy: ['Indupropil', 'Medinfuse', 'Operações Comerciais'],
  },
  {
    name: 'WhatsApp (Meta / Evolution)',
    detail: 'Agentes, chatbox, agendamento, massa e estimativa de custo',
    usedBy: ['Medinfuse', 'Indupropil', 'Nubank / Zenvia'],
  },
  {
    name: 'AWS, Cloud & VPS',
    detail: 'Hospedagem, Docker, VPN, Odoo.sh',
    usedBy: ['Syma', 'Have', 'Projetos Enterprise'],
  },
  {
    name: 'Fiscal BR & CNAB',
    detail: 'NF (NF-e produto · NFS-e serviço), Avalara, PIX, boletos',
    usedBy: ['Pampeiro / SoftHill', 'Sylvia Design', 'OCA / KMEE'],
  },
  {
    name: 'Site Personalizado & SEO',
    detail: 'Domínio próprio, CTAs, preview social e conversão para WhatsApp',
    usedBy: ['Consultoria MCM', 'Landings Comerciais'],
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
