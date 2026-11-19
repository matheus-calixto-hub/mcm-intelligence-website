# Progresso — produtos no site MCM

Acompanhar o que já está no ar / no código do site (`consultoria-mcm.com.br`).

| Item | Status | URL / nota |
|---|---|---|
| Home com linguagem de cliente | ✅ | Menos jargão; CTAs de demonstração |
| Hub `/produtos` | ✅ | Follow-up × Painel SLA × Agendamento |
| Landing Agendamento | ✅ | `/product/whatsappbooking` |
| Landing Follow-up | ✅ | `/product/followup` (+ bloco painel SLA) |
| Landing Painel SLA | ✅ | `/product/sla-dashboard` — mock + print |
| Imagens mock | ✅ | `/public/products/*.jpg` (inbox, agenda, sla-dashboard) |
| SEO indexável nas landings | ✅ | sitemap atualizado |
| Ilustração HTML do painel | ✅ | `SlaDashboardMock` com dados demo |

## Mensagens WhatsApp (site)

Definidas em `src/config/constants.ts` → `WHATSAPP_MESSAGES`  
(`followup`, `slaDashboard`, `whatsappBooking`, `products`, …).

## Ligação com produto interno

| Site | Produto Odoo CE |
|---|---|
| Follow-up + Painel SLA | `mcm_whatsapp_scheduling` + `mcm_whatsapp_discuss` (Visão geral) |
| Agendamento WA | `mcm_whatsapp_booking` |

Versões e regras: `odoo19-enterprise/custom_ce/README.md`  
Git addons: `github.com/matheus-calixto-hub/mcm-ce-addons`

## Pitch rápido (WhatsApp)

- Follow-up: fila, cadências, WA+e-mail, assinatura do atendente  
- Painel: 1ª resposta, % SLA, fila, Follow-ups, gráficos; vendedor vs sócio  
- Agendamento: cliente marca/remarca no zap  

## Ganhos / marketing (`PRODUCT_IMPACT`)

Bloco **Antes × Com MCM** + faixas **30–50%** tempo manual / **20–40%** leads esquecidos nas landings Follow-up e Painel SLA.

- São **cenários típicos ilustrativos**, não métrica auditada de um cliente.  
- Disclaimer no próprio bloco: na implantação medimos baseline e evolução real.  
- Produto **já cobre** o que o pitch promete: FU automático, Meta WA + e-mail, fila/Sem resposta/SLA, painel sócio vs vendedor, base omnichannel.

*Última revisão: 2026-11-19 — impacto + painel Visão geral no site.*
