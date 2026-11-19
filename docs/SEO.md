# SEO — consultoria-mcm.com.br

Checklist para envio a clientes e tráfego pago/orgânico.

## Páginas indexáveis

| URL | Papel |
|---|---|
| `/` | Home / marca |
| `/produtos` | Hub de escolha |
| `/product/followup` | Follow-up comercial |
| `/product/sla-dashboard` | Painel SLA |
| `/product/whatsappbooking` | Agendamento WA |
| `/sobre` | Quem somos |

**Fora do índice:** `/ftgbarbearia` (`noindex` + fora do sitemap).

## O que cada página tem

- `title` + `description` únicos (~55 / ~155 chars)
- `canonical` + `hreflang pt-BR`
- Open Graph + Twitter `summary_large_image`
- Imagem social específica (produto) ou `/og.jpg` (hub/home/sobre)
- JSON-LD: Organization (global) + BreadcrumbList + SoftwareApplication / ItemList

Helper: `src/lib/seo.ts` · Schema global: `src/components/JsonLd.tsx`

## Antes de rodar tráfego

1. Confirmar `SITE_URL=https://consultoria-mcm.com.br` no deploy
2. [Google Search Console](https://search.google.com/search-console) → propriedade + sitemap `https://consultoria-mcm.com.br/sitemap.xml`
3. Meta Sharing Debugger / LinkedIn Post Inspector nos 3 produtos
4. Landing de anúncio: use `/produtos` ou a landing do produto (UTM no WhatsApp se quiser)
5. Não apontar ads para `/ftgbarbearia` (cliente)

## Conteúdo / ads

- H1 único por página; CTAs para WhatsApp com mensagem pré-preenchida
- Prints reais nos produtos (Follow-up Odoo, Flow WA Booking)
- Evitar claims de % sem disclaimer (`PRODUCT_IMPACT`)

*Última revisão: 2026-11-19*
