/**
 * Precificação MCM WhatsApp Booking
 * Base limpa (número próprio + Meta ok) + setup:
 *   +R$20 suporte Meta · +R$20 número provisionado
 * Períodos pré-pagos: 3m −5% · 6m −12% · 12m −20%
 */

export type PersonType = 'cnpj' | 'cpf';
export type NumberMode = 'own' | 'provisioned';
export type MetaMode = 'ready' | 'help';
export type PlanId = 'solo' | 'duo' | 'equipe' | 'rede';
export type PeriodMonths = 1 | 3 | 6 | 12;

export const BOOKING_PLANS: {
  id: PlanId;
  name: string;
  seats: string;
  baseCnpj: number;
  baseCpf: number;
  blurb: string;
  points: string[];
  featured?: boolean;
}[] = [
  {
    id: 'solo',
    name: 'Solo',
    seats: '1 profissional',
    baseCnpj: 79,
    baseCpf: 139,
    blurb: 'Você sozinho no comando — e a agenda no automático.',
    points: [
      'Cliente marca, remarca e cancela no WhatsApp',
      'Você gerencia disponibilidade pelo próprio zap',
      'Confirmação volta no chat',
    ],
  },
  {
    id: 'duo',
    name: 'Duo',
    seats: 'Até 2 profissionais',
    baseCnpj: 89,
    baseCpf: 149,
    blurb: 'Dois no salão, uma conversa só com o cliente.',
    points: [
      'Tudo do Solo',
      'Cliente escolhe com quem quer ir',
      'Cada um cuida da própria agenda no WhatsApp',
    ],
    featured: true,
  },
  {
    id: 'equipe',
    name: 'Equipe',
    seats: '3 a 5 profissionais',
    baseCnpj: 119,
    baseCpf: 179,
    blurb: 'Time em ritmo — menos fila no zap, mais cadeira ocupada.',
    points: [
      'Tudo do Duo',
      'Serviços por profissional',
      'Gestor libera dia, semana e bloqueios no WhatsApp',
    ],
  },
  {
    id: 'rede',
    name: 'Rede',
    seats: '6 ou mais',
    baseCnpj: 169,
    baseCpf: 229,
    blurb: 'Operação maior: a gente desenha o encaixe com você.',
    points: [
      'Tudo do Equipe',
      'Implantação acompanhada',
      'Combinamos o formato juntos',
    ],
  },
];

export const META_ADDON = 20;
export const NUMBER_ADDON = 20;

export const PERIODS: {
  months: PeriodMonths;
  label: string;
  off: number;
}[] = [
  { months: 1, label: '1 mês', off: 0 },
  { months: 3, label: '3 meses', off: 0.05 },
  { months: 6, label: '6 meses', off: 0.12 },
  { months: 12, label: '12 meses', off: 0.2 },
];

export type QuoteInput = {
  planId: PlanId;
  person: PersonType;
  numberMode: NumberMode;
  metaMode: MetaMode;
  period: PeriodMonths;
};

export type QuoteResult = {
  planName: string;
  seats: string;
  base: number;
  metaAdd: number;
  numberAdd: number;
  listMonthly: number;
  equivMonthly: number;
  periodMonths: PeriodMonths;
  periodTotal: number;
  discountPct: number;
  /** PF + número nosso: hosted na WABA MCM */
  hosted: boolean;
  breakdown: string[];
};

function round9(n: number): number {
  const r = Math.round(n);
  if (r < 20) return r;
  const base = Math.floor(r / 10) * 10;
  const cand = [base - 1, base + 9, base + 19].filter((x) => x > 0);
  return cand.reduce((best, x) => (Math.abs(x - n) < Math.abs(best - n) ? x : best));
}

/** PF com número provisionado inclui suporte Meta (hosted MCM). */
export function effectiveMetaMode(input: QuoteInput): MetaMode {
  if (input.person === 'cpf' && input.numberMode === 'provisioned') {
    return 'help';
  }
  return input.metaMode;
}

export function calculateQuote(input: QuoteInput): QuoteResult {
  const plan = BOOKING_PLANS.find((p) => p.id === input.planId) ?? BOOKING_PLANS[0];
  const base = input.person === 'cnpj' ? plan.baseCnpj : plan.baseCpf;
  const metaMode = effectiveMetaMode(input);
  const hosted = input.person === 'cpf' && input.numberMode === 'provisioned';
  const metaAdd = metaMode === 'help' ? META_ADDON : 0;
  const numberAdd = input.numberMode === 'provisioned' ? NUMBER_ADDON : 0;
  const listMonthly = base + metaAdd + numberAdd;
  const period = PERIODS.find((p) => p.months === input.period) ?? PERIODS[0];
  const equivMonthly = round9(listMonthly * (1 - period.off));
  const periodTotal = equivMonthly * period.months;

  const breakdown: string[] = [
    `Plano ${plan.name} (${plan.seats})`,
    input.person === 'cnpj' ? 'CNPJ' : 'CPF',
    input.numberMode === 'own' ? 'Número próprio' : hosted
      ? 'Número na conta verificada MCM'
      : 'Número provisionado por nós',
  ];
  if (metaAdd) {
    breakdown.push(
      hosted
        ? 'Config Meta inclusa no hosted'
        : 'Cadastro e verificação Meta com a gente',
    );
  } else {
    breakdown.push('Meta Business já verificada');
  }

  return {
    planName: plan.name,
    seats: plan.seats,
    base,
    metaAdd,
    numberAdd,
    listMonthly,
    equivMonthly,
    periodMonths: period.months,
    periodTotal,
    discountPct: Math.round(period.off * 100),
    hosted,
    breakdown,
  };
}

export function formatBrl(n: number): string {
  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}

export function buildQuoteWhatsAppMessage(input: QuoteInput, quote: QuoteResult): string {
  const person = input.person === 'cnpj' ? 'CNPJ' : 'CPF';
  const number =
    input.numberMode === 'own' ? 'número próprio' : 'número provisionado por vocês';
  const meta =
    effectiveMetaMode(input) === 'ready'
      ? 'Meta Business já verificada'
      : 'preciso de suporte Meta (cadastro/verificação)';
  const periodLabel =
    PERIODS.find((p) => p.months === input.period)?.label ?? `${input.period} mês(es)`;

  const lines = [
    'Olá! Montei um orçamento no site do MCM Booking:',
    '',
    `• Plano: ${quote.planName} (${quote.seats})`,
    `• Pessoa: ${person}`,
    `• Número: ${number}`,
    `• Meta: ${meta}`,
    `• Período: ${periodLabel}`,
    '',
    `Valor lista: ${formatBrl(quote.listMonthly)}/mês`,
    quote.periodMonths === 1
      ? `Total: ${formatBrl(quote.equivMonthly)}/mês`
      : `Equiv. ${formatBrl(quote.equivMonthly)}/mês · Total período ${formatBrl(quote.periodTotal)}${
          quote.discountPct ? ` (−${quote.discountPct}%)` : ''
        }`,
    '',
    'Quero seguir com essa configuração / ver o produto no WhatsApp.',
  ];

  return lines.join('\n');
}
