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
    telephone: COMPANY.whatsapp,
    taxID: COMPANY.cnpj,
    vatID: COMPANY.cnpj,
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
      jobTitle: 'Consultor de operação e atendimento',
    },
    knowsAbout: [
      'Atendimento comercial no WhatsApp',
      'Follow-up de vendas',
      'Agendamento pelo WhatsApp',
      'Sites que convertem',
      'Organização de times comerciais',
      'Automação de relacionamento',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Follow-up comercial no WhatsApp',
          url: `${url}/product/followup`,
          description:
            'Fila, prazos e cadências para o time atender e acompanhar leads no WhatsApp e no e-mail da empresa.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Painel SLA e Follow-up',
          url: `${url}/product/sla-dashboard`,
          description:
            'Indicadores de 1ª resposta, % no SLA, fila e Follow-ups — visão do vendedor e do sócio.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agendamento pelo WhatsApp',
          url: `${url}/product/whatsappbooking`,
          description:
            'Cliente marca, remarca e cancela no WhatsApp; gestor libera horários sem painel complicado.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sites que convertem',
          description:
            'Site da marca no domínio próprio, com SEO e caminho claro até o WhatsApp.',
        },
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: COMPANY.whatsapp,
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
