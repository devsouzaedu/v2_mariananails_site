'use client';

import { useEffect } from 'react';
import { initMetaIdsFromUrl, getOrCreateEventId, getPersistedMetaIds, mergeSearchParamsIntoUrl, appendMetaParamsToUrl } from '@/lib/meta/metaIds';
import { usePathname, useSearchParams } from 'next/navigation';

function isKiwifyUrl(href: string): boolean {
  try {
    const u = new URL(href, window.location.origin);
    return u.hostname === 'pay.kiwify.com.br';
  } catch {
    return false;
  }
}

function decorateKiwifyAnchors(): void {
  if (typeof document === 'undefined') return;

  const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'));
  const currentSearch = typeof window !== 'undefined' ? window.location.search : '';

  anchors.forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!href) return;
    if (!isKiwifyUrl(href)) return;

    // Garantir event_id persistido antes de montar URL
    const ids = { ...getPersistedMetaIds(), eventId: getOrCreateEventId() };
    let nextHref = mergeSearchParamsIntoUrl(href, currentSearch);
    nextHref = appendMetaParamsToUrl(nextHref, ids);
    a.setAttribute('href', nextHref);
  });
}

export default function MetaKiwifyBridge() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1) Capturar fbclid/fbp/fbc/event_id da URL e persistir em cookie/localStorage
    initMetaIdsFromUrl();

    // 2) Decorar links já renderizados
    decorateKiwifyAnchors();
  }, [pathname, searchParams?.toString()]);

  useEffect(() => {
    // 3) Garantir que mesmo links dinâmicos (ou cliques rápidos) carreguem os params
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute('href') || '';
      if (!href || !isKiwifyUrl(href)) return;

      const ids = { ...getPersistedMetaIds(), eventId: getOrCreateEventId() };
      let nextHref = mergeSearchParamsIntoUrl(href, window.location.search);
      nextHref = appendMetaParamsToUrl(nextHref, ids);
      a.setAttribute('href', nextHref);
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return null;
}


