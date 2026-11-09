'use client';

import { useMemo, useState } from 'react';
import { getWhatsAppUrl } from '@/config/constants';
import {
  BOOKING_PLANS,
  PERIODS,
  buildQuoteWhatsAppMessage,
  calculateQuote,
  effectiveMetaMode,
  formatBrl,
  type MetaMode,
  type NumberMode,
  type PeriodMonths,
  type PersonType,
  type PlanId,
} from '@/config/whatsappBookingPricing';

type Opt<T extends string> = { value: T; title: string; hint: string };

const PERSON_OPTS: Opt<PersonType>[] = [
  {
    value: 'cnpj',
    title: 'CNPJ',
    hint: 'Empresa — WABA no nome do negócio',
  },
  {
    value: 'cpf',
    title: 'CPF',
    hint: 'Pessoa física — base mais alta / hosted possível',
  },
];

const NUMBER_OPTS: Opt<NumberMode>[] = [
  {
    value: 'own',
    title: 'Número próprio',
    hint: 'O chip/WhatsApp que o cliente já tem salvo',
  },
  {
    value: 'provisioned',
    title: 'Provisionado por nós',
    hint: 'A gente providencia a linha',
  },
];

const META_OPTS: Opt<MetaMode>[] = [
  {
    value: 'ready',
    title: 'Meta já verificada',
    hint: 'Business Manager ok, sem ajuda de cadastro',
  },
  {
    value: 'help',
    title: 'Preciso de suporte Meta',
    hint: 'Cadastro e verificação com a gente',
  },
];

function ChoiceGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
  disabledValue,
  disabledNote,
}: {
  legend: string;
  name: string;
  value: T;
  options: Opt<T>[];
  onChange: (v: T) => void;
  disabledValue?: T;
  disabledNote?: string;
}) {
  return (
    <fieldset className="wb-quote-group">
      <legend>{legend}</legend>
      <div className="wb-quote-options" role="radiogroup" aria-label={legend}>
        {options.map((opt) => {
          const locked = disabledValue === opt.value;
          const selected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={`wb-quote-opt wb-glass ${selected ? 'is-on' : ''} ${locked ? 'is-locked' : ''}`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={selected}
                disabled={locked && !selected}
                onChange={() => onChange(opt.value)}
              />
              <span className="wb-quote-opt-title">{opt.title}</span>
              <span className="wb-quote-opt-hint">
                {locked && disabledNote ? disabledNote : opt.hint}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function BookingQuoteBuilder() {
  const [planId, setPlanId] = useState<PlanId>('duo');
  const [person, setPerson] = useState<PersonType>('cnpj');
  const [numberMode, setNumberMode] = useState<NumberMode>('own');
  const [metaMode, setMetaMode] = useState<MetaMode>('ready');
  const [period, setPeriod] = useState<PeriodMonths>(1);

  const input = useMemo(
    () => ({ planId, person, numberMode, metaMode, period }),
    [planId, person, numberMode, metaMode, period],
  );

  const quote = useMemo(() => calculateQuote(input), [input]);
  const metaEffective = effectiveMetaMode(input);
  const hostedLocksMeta = person === 'cpf' && numberMode === 'provisioned';
  const wa = getWhatsAppUrl(buildQuoteWhatsAppMessage(input, quote));

  return (
    <div className="wb-quote">
      <div className="wb-quote-grid">
        <div className="wb-quote-form">
          <fieldset className="wb-quote-group">
            <legend>Tamanho do time</legend>
            <div className="wb-quote-plans" role="radiogroup" aria-label="Plano">
              {BOOKING_PLANS.map((plan) => (
                <label
                  key={plan.id}
                  className={`wb-quote-plan wb-glass ${planId === plan.id ? 'is-on' : ''}`}
                >
                  <input
                    type="radio"
                    name="wb-plan"
                    value={plan.id}
                    checked={planId === plan.id}
                    onChange={() => setPlanId(plan.id)}
                  />
                  <span className="wb-quote-plan-name">{plan.name}</span>
                  <span className="wb-quote-plan-seats">{plan.seats}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <ChoiceGroup
            legend="CNPJ ou CPF?"
            name="wb-person"
            value={person}
            options={PERSON_OPTS}
            onChange={setPerson}
          />

          <ChoiceGroup
            legend="Número do WhatsApp"
            name="wb-number"
            value={numberMode}
            options={NUMBER_OPTS}
            onChange={(v) => {
              setNumberMode(v);
              if (person === 'cpf' && v === 'provisioned') {
                setMetaMode('help');
              }
            }}
          />

          <ChoiceGroup
            legend="Conta Meta Business"
            name="wb-meta"
            value={metaEffective}
            options={META_OPTS}
            onChange={setMetaMode}
            disabledValue={hostedLocksMeta ? 'ready' : undefined}
            disabledNote="Incluso no hosted MCM (número na nossa conta)"
          />

          <fieldset className="wb-quote-group">
            <legend>Período</legend>
            <div className="wb-quote-periods" role="radiogroup" aria-label="Período">
              {PERIODS.map((p) => (
                <label
                  key={p.months}
                  className={`wb-quote-period wb-glass ${period === p.months ? 'is-on' : ''}`}
                >
                  <input
                    type="radio"
                    name="wb-period"
                    value={p.months}
                    checked={period === p.months}
                    onChange={() => setPeriod(p.months)}
                  />
                  <span>{p.label}</span>
                  {p.off > 0 && (
                    <span className="wb-quote-period-off">−{Math.round(p.off * 100)}%</span>
                  )}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="wb-quote-result wb-glass-deep" aria-live="polite">
          <p className="wb-quote-result-kicker">Seu orçamento</p>
          <p className="wb-quote-result-plan">
            {quote.planName}
            <span> · {person.toUpperCase()}</span>
          </p>

          <ul className="wb-quote-breakdown">
            {quote.breakdown.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="wb-quote-price">
            {quote.periodMonths === 1 ? (
              <>
                <strong>{formatBrl(quote.equivMonthly)}</strong>
                <span>/mês</span>
              </>
            ) : (
              <>
                <strong>{formatBrl(quote.equivMonthly)}</strong>
                <span>/mês equiv.</span>
                <p className="wb-quote-total">
                  Total {quote.periodMonths} meses:{' '}
                  <strong>{formatBrl(quote.periodTotal)}</strong>
                  {quote.discountPct > 0 && (
                    <span className="wb-quote-save"> (−{quote.discountPct}%)</span>
                  )}
                </p>
              </>
            )}
          </div>

          {quote.listMonthly !== quote.equivMonthly && (
            <p className="wb-quote-list">
              Lista sem desconto: {formatBrl(quote.listMonthly)}/mês
            </p>
          )}

          {quote.hosted && (
            <p className="wb-quote-note">
              CPF com número nosso: linha na conta verificada MCM (capacidade
              limitada). Preferimos CNPJ com número próprio quando der.
            </p>
          )}

          <a
            href={wa}
            className="btn wb-cta-btn wb-btn-lift wb-quote-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fechar este orçamento no WhatsApp
          </a>
          <p className="wb-quote-fine">
            Valor estimado. Fechamos detalhes e ativação no zap.
          </p>
        </aside>
      </div>
    </div>
  );
}
