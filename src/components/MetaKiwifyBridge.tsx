"use client";

import { useEffect } from "react";
import {
  getPersistedMetaIds,
  getOrStartCheckoutEventId,
  initMetaIdsFromUrl,
  appendMetaParamsToUrl,
} from "@/lib/meta/metaIds";

function isKiwifyUrl(href: string): boolean {
  try {
    const u = new URL(href, window.location.href);
    if (u.hostname === "pay.kiwify.com.br") return true;
    return /\.kiwify\.com\.br$/i.test(u.hostname);
  } catch {
    return false;
  }
}

function decorateKiwifyHref(href: string, includeEventId: boolean): string {
  const persisted = getPersistedMetaIds();
  const meta = {
    fbp: persisted.fbp,
    fbc: persisted.fbc,
    eventId: includeEventId ? getOrStartCheckoutEventId() : undefined,
  };
  return appendMetaParamsToUrl(href, meta);
}

export default function MetaKiwifyBridge() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Captura fbclid → gera _fbc; lê/gera _fbp; persiste em cookie + localStorage.
    initMetaIdsFromUrl();

    const decorateAllLinks = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href]');
      links.forEach((a) => {
        if (!a.href) return;
        if (!isKiwifyUrl(a.href)) return;
        // Pré-decora só com fbp/fbc (sem event_id). O event_id é gerado no clique.
        a.href = decorateKiwifyHref(a.href, false);
      });
    };

    decorateAllLinks();

    // Observa novos links renderizados dinamicamente.
    const observer = new MutationObserver(() => {
      decorateAllLinks();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Gera/“fixa” um event_id por clique de checkout e anexa na URL antes de navegar.
    const onCheckoutIntent = (evt: Event) => {
      const target = evt.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a?.href) return;
      if (!isKiwifyUrl(a.href)) return;

      initMetaIdsFromUrl();
      a.href = decorateKiwifyHref(a.href, true);
    };

    // capture=true para rodar antes dos handlers do React (onClick).
    document.addEventListener("pointerdown", onCheckoutIntent, true);
    document.addEventListener("mousedown", onCheckoutIntent, true); // fallback
    document.addEventListener("click", onCheckoutIntent, true); // teclado / fallback final

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", onCheckoutIntent, true);
      document.removeEventListener("mousedown", onCheckoutIntent, true);
      document.removeEventListener("click", onCheckoutIntent, true);
    };
  }, []);

  return null;
}
