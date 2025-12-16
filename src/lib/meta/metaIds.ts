/* eslint-disable @typescript-eslint/no-explicit-any */

export type MetaIds = {
  fbp?: string;
  fbc?: string;
  eventId?: string;
  fbclid?: string;
};

const LS_KEYS = {
  fbp: 'mn_fbp',
  fbc: 'mn_fbc',
  eventId: 'mn_event_id',
} as const;

const COOKIE_KEYS = {
  // Facebook default cookies
  fbp: '_fbp',
  fbc: '_fbc',
  // Our first-party backups
  fbpBackup: 'mn_fbp',
  fbcBackup: 'mn_fbc',
  eventId: 'mn_event_id',
} as const;

const CHECKOUT_CTX_KEY = '__mn_checkout_ctx' as const;
type CheckoutCtx = { eventId: string; ts: number };

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function getCookie(name: string): string | undefined {
  if (!isBrowser()) return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
}

function getCookieDomainForFirstParty(): string | undefined {
  if (!isBrowser()) return undefined;
  const host = window.location.hostname;
  // Em produção, queremos compartilhar cookies entre subdomínios.
  if (host === 'mariananails.com.br' || host.endsWith('.mariananails.com.br')) {
    return '.mariananails.com.br';
  }
  return undefined;
}

export function setCookie(name: string, value: string, days = 90): void {
  if (!isBrowser()) return;
  const maxAge = days * 24 * 60 * 60;
  const domain = getCookieDomainForFirstParty();
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  const domainPart = domain ? `; Domain=${domain}` : '';
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=/${domainPart}; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function getLocalStorage(key: string): string | undefined {
  if (!isBrowser()) return undefined;
  try {
    return window.localStorage.getItem(key) || undefined;
  } catch {
    return undefined;
  }
}

function setLocalStorage(key: string, value: string): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export function generateFbcFromFbclid(fbclid: string): string {
  // Formato usado pelo Meta: fb.1.<timestamp>.<fbclid>
  return `fb.1.${Date.now()}.${fbclid}`;
}

export function generateFbp(): string {
  // Formato usado pelo Meta: fb.1.<timestamp>.<random>
  const rand = Math.floor(Math.random() * 1e10);
  return `fb.1.${Date.now()}.${rand}`;
}

export function generateEventId(): string {
  if (!isBrowser()) {
    return `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
  }
  const cryptoObj = (window as any).crypto;
  if (cryptoObj?.randomUUID) return cryptoObj.randomUUID();
  return `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

function parseIncomingParams(params: URLSearchParams): MetaIds {
  const fbclid = params.get('fbclid') || undefined;
  const fbp = params.get('fbp') || params.get('_fbp') || undefined;
  const fbc = params.get('fbc') || params.get('_fbc') || undefined;
  const eventId = params.get('event_id') || params.get('eventId') || undefined;

  return { fbclid, fbp, fbc, eventId };
}

export function persistMetaIds(ids: MetaIds): void {
  if (!isBrowser()) return;

  if (ids.fbp) {
    setLocalStorage(LS_KEYS.fbp, ids.fbp);
    setCookie(COOKIE_KEYS.fbpBackup, ids.fbp);
    // Manter cookie padrão do Meta também (ajuda o pixel e integrações externas)
    setCookie(COOKIE_KEYS.fbp, ids.fbp);
  }

  if (ids.fbc) {
    setLocalStorage(LS_KEYS.fbc, ids.fbc);
    setCookie(COOKIE_KEYS.fbcBackup, ids.fbc);
    setCookie(COOKIE_KEYS.fbc, ids.fbc);
  }

  if (ids.eventId) {
    setLocalStorage(LS_KEYS.eventId, ids.eventId);
    // event_id deve existir tempo suficiente para o fluxo de checkout, mas não "eternamente"
    setCookie(COOKIE_KEYS.eventId, ids.eventId, 7);
  }
}

export function getPersistedMetaIds(): MetaIds {
  if (!isBrowser()) return {};

  const fbp =
    getCookie(COOKIE_KEYS.fbp) ||
    getCookie(COOKIE_KEYS.fbpBackup) ||
    getLocalStorage(LS_KEYS.fbp);

  const fbc =
    getCookie(COOKIE_KEYS.fbc) ||
    getCookie(COOKIE_KEYS.fbcBackup) ||
    getLocalStorage(LS_KEYS.fbc);

  const eventId =
    getCookie(COOKIE_KEYS.eventId) ||
    getLocalStorage(LS_KEYS.eventId);

  return { fbp, fbc, eventId };
}

/**
 * Inicializa (e persiste) fbp/fbc/event_id a partir da URL atual.
 * - Captura `fbclid`
 * - Gera `_fbc` quando necessário
 * - Lê `_fbp` (ou gera se não existir)
 * - Persiste em cookie + localStorage
 */
export function initMetaIdsFromUrl(search?: string): MetaIds {
  if (!isBrowser()) return {};

  const params = new URLSearchParams(search ?? window.location.search);
  const incoming = parseIncomingParams(params);
  const persisted = getPersistedMetaIds();

  const fbclid = incoming.fbclid;
  const fbcFromFbclid = fbclid ? generateFbcFromFbclid(fbclid) : undefined;

  const fbp = incoming.fbp || persisted.fbp || getCookie(COOKIE_KEYS.fbp) || generateFbp();
  const fbc = incoming.fbc || persisted.fbc || getCookie(COOKIE_KEYS.fbc) || fbcFromFbclid;
  const eventId = incoming.eventId || persisted.eventId;

  const finalIds: MetaIds = { fbp, fbc, eventId, fbclid };
  persistMetaIds(finalIds);
  return finalIds;
}

export function getOrCreateEventId(): string {
  if (!isBrowser()) return generateEventId();

  const existing = getPersistedMetaIds().eventId;
  if (existing) return existing;

  const created = generateEventId();
  persistMetaIds({ eventId: created });
  return created;
}

/**
 * Gera e persiste um NOVO event_id (útil para início de checkout).
 * Importante: usar o mesmo event_id no `InitiateCheckout` (site) e no checkout externo (Kiwify).
 */
export function startNewCheckoutEventId(): string {
  if (!isBrowser()) return generateEventId();
  const created = generateEventId();
  persistMetaIds({ eventId: created });
  return created;
}

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
 * - Caso contrário, gera um novo e persiste (cookie + localStorage)
 */
export function getOrStartCheckoutEventId(maxAgeMs = 5000): string {
  if (!isBrowser()) return generateEventId();

  const ctx = getCheckoutCtx();
  if (ctx && Date.now() - ctx.ts <= maxAgeMs) {
    // Garantir persistência (caso algo tenha limpado cookies/LS)
    persistMetaIds({ eventId: ctx.eventId });
    return ctx.eventId;
  }

  const created = generateEventId();
  persistMetaIds({ eventId: created });
  setCheckoutCtx({ eventId: created, ts: Date.now() });
  return created;
}

export function appendMetaParamsToUrl(url: string, meta?: MetaIds): string {
  if (!isBrowser()) return url;

  const ids = meta ?? getPersistedMetaIds();
  const u = new URL(url, window.location.origin);

  if (ids.fbp) {
    u.searchParams.set('fbp', ids.fbp);
    u.searchParams.set('_fbp', ids.fbp);
  }
  if (ids.fbc) {
    u.searchParams.set('fbc', ids.fbc);
    u.searchParams.set('_fbc', ids.fbc);
  }
  if (ids.eventId) {
    u.searchParams.set('event_id', ids.eventId);
  }

  return u.toString();
}

export function mergeSearchParamsIntoUrl(url: string, search: string): string {
  if (!isBrowser()) return url;
  const u = new URL(url, window.location.origin);
  const from = new URLSearchParams(search);
  from.forEach((value, key) => {
    if (!u.searchParams.has(key)) {
      u.searchParams.set(key, value);
    }
  });
  return u.toString();
}


