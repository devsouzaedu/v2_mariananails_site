"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// ============================================
// CONFIGURAÇÕES
// ============================================
const CHECKOUT_URL = "https://pay.hub.la/xUBjz5PzeO78yLsUHa3y";

// Header de Urgência com Contador Integrado
export function UrgencyHeader() {
    const [time, setTime] = useState({ minutes: 14, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    return { minutes: 14, seconds: 59 }; // Reset
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#8B0000] text-white py-3 px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                    CONDIÇÃO ESPECIAL DE LANÇAMENTO:
                </span>
                <div className="flex items-center gap-2">
                    <div className="bg-black/40 px-3 py-1 rounded text-center min-w-[60px]">
                        <span className="text-xl sm:text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</span>
                        <span className="text-[10px] block text-gray-300 uppercase">Minutos</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold">:</span>
                    <div className="bg-black/40 px-3 py-1 rounded text-center min-w-[60px]">
                        <span className="text-xl sm:text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</span>
                        <span className="text-[10px] block text-gray-300 uppercase">Segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Botão CTA que captura fbclid da URL
export function CTAButtonWithParams({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const searchParams = useSearchParams();
    const fbclid = searchParams.get('fbclid');

    const checkoutUrl = fbclid
        ? `${CHECKOUT_URL}${CHECKOUT_URL.includes('?') ? '&' : '?'}fbclid=${encodeURIComponent(fbclid)}`
        : CHECKOUT_URL;

    return (
        <a
            id="btn-checkout-mca"
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                block w-full text-center
                bg-[#22C55E] hover:bg-[#16A34A]
                text-white font-bold text-lg md:text-xl
                py-4 px-8 rounded-full
                shadow-lg shadow-[#22C55E]/30
                transition-all duration-300 transform hover:scale-[1.02]
                uppercase tracking-wide
                font-[family-name:var(--font-montserrat)]
                ${className}
            `}
        >
            {children}
        </a>
    );
}
