/* eslint-disable @typescript-eslint/no-explicit-any */

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function generateEventId(): string {
  if (!isBrowser()) {
    return `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  }
  const cryptoObj = (window as any).crypto;
  if (cryptoObj?.randomUUID) return cryptoObj.randomUUID();
  return `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

const CHECKOUT_CTX_KEY = '__mn_checkout_ctx' as const;
type CheckoutCtx = { eventId: string; ts: number };

function getCheckoutCtx(): CheckoutCtx | undefined {
  if (!isBrowser()) return undefined;
  const w = window as any;
  const ctx = w[CHECKOUT_CTX_KEY] as CheckoutCtx | undefined;
  if (!ctx || !ctx.eventId || !ctx.ts) return undefined;
  return ctx;
}

function setCheckoutCtx(ctx: CheckoutCtx): void {
  if (!isBrowser()) return;
  const w = window as any;
  w[CHECKOUT_CTX_KEY] = ctx;
}

/**
 * Retorna um event_id "de checkout" estável por alguns segundos (janela do clique).
 * - Se já existir um ctx recente, reutiliza
 * - Caso contrário, gera um novo
 */
export function getOrStartCheckoutEventId(maxAgeMs = 5000): string {
  if (!isBrowser()) return generateEventId();

  const ctx = getCheckoutCtx();
  if (ctx && Date.now() - ctx.ts <= maxAgeMs) {
    return ctx.eventId;
  }

  const created = generateEventId();
  setCheckoutCtx({ eventId: created, ts: Date.now() });
  return created;
}
