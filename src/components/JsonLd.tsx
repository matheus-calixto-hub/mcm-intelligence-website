import { COMPANY } from '@/config/constants';
import { getSiteUrl, OG_IMAGE, SITE } from '@/config/site';

export default function JsonLd() {
  const url = getSiteUrl();

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${url}/#organization`,
    name: COMPANY.legalName,
    alternateName: [COMPANY.name, COMPANY.shortName, `${COMPANY.shortName} Consultoria`, SITE.name],
    url,
    logo: `${url}/icon`,
    image: `${url}${OG_IMAGE.path}`,
    description: SITE.description,
    email: COMPANY.email,
    telephone: COMPANY.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    sameAs: [
      `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`,
    ],
    founder: {
      '@type': 'Person',
      name: 'Matheus Muniz',
      jobTitle: 'CTO / Odoo Solution Architect',
      email: COMPANY.email,
    },
    knowsAbout: [
      'Agentes de Inteligência Artificial',
      'WhatsApp Business API',
      'Sites personalizados e SEO',
      'Conversão e CTAs para WhatsApp',
      'Odoo ERP',
      'Integrações de sistemas',
      'n8n',
      'Python',
      'FastAPI',
      'AWS',
      'VPS e hospedagem',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentes de IA no WhatsApp',
          description:
            'Atendimento inteligente, chatbox humano, templates Meta agendados (individual ou em massa), estimativa de custo por destinatário e integração com ERP/CRM.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sites personalizados com conversão',
          description:
            'Site no domínio da empresa, SEO, preview social, CTAs para WhatsApp, Meta Business e Google Ads, com assistente de IA opcional e evolução para vendas e NFS-e.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria e customização Odoo',
          description:
            'Implantação, migração, módulos sob medida, fiscal BR (NF-e e NFS-e) e sustentação.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Integrações e microsserviços',
          description:
            'APIs, sync com legado, Docker, VPN e orquestração de processos.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud, VPS e hospedagem',
          description:
            'AWS, VPS, Docker, TLS e operação de ambientes de homologação e produção.',
        },
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: COMPANY.whatsapp,
      email: COMPANY.email,
      availableLanguage: ['Portuguese', 'pt-BR'],
      areaServed: 'BR',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${url}/#organization` },
    inLanguage: 'pt-BR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
