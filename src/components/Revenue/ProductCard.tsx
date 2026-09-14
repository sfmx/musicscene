'use client';

import React from 'react';
import { getAffiliateLink, getAffiliateLinkWithFallback, getRetailerLinks } from '@/lib/affiliateLinks';

export interface ProductCardProps {
  productName: string;
  category?: string;
  label?: string;
  toneNote?: string;
  badge?: string;
  compact?: boolean;
  className?: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  Guitar: '🎸',
  Electric: '🎸',
  Acoustic: '🪕',
  Amp: '🔊',
  Amplifier: '🔊',
  Pedal: '🎛️',
  Effect: '🎛️',
  Recording: '🎙️',
  Studio: '🎙️',
  Accessory: '🎵',
  Strings: '🎶',
};

export default function ProductCard({
  productName,
  category = 'Gear',
  label,
  toneNote,
  badge,
  compact = false,
  className = '',
}: ProductCardProps) {
  const explicitProduct = getAffiliateLink(productName);
  const fallbackProduct = getAffiliateLinkWithFallback(productName);
  const product = explicitProduct || fallbackProduct;
  const retailers = getRetailerLinks(productName);

  if (!product && !productName) return null;

  const isExplicit = Boolean(explicitProduct);
  const icon = CATEGORY_ICONS[category] || CATEGORY_ICONS[category.split(' ')[0]] || '🎵';
  const displayTitle = product ? product.name : productName;

  if (compact) {
    return (
      <div className={`bg-white dark:bg-slate-900/80 rounded-xl p-3 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all ${className}`}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-base flex-shrink-0">{icon}</span>
            <a
              href={product?.url || '#'}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="font-bold text-xs text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate"
              title={`Check ${displayTitle} on Amazon`}
            >
              {displayTitle}
            </a>
          </div>
          {isExplicit && (
            <span className="flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-500/30">
              ⭐ Curated
            </span>
          )}
        </div>
        {toneNote && (
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug mb-2 line-clamp-2">
            {toneNote}
          </p>
        )}
        {retailers && (
          <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60 text-[10px]">
            <span className="text-slate-400 font-medium">Price:</span>
            <a
              href={retailers.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 font-semibold transition-colors border border-amber-200 dark:border-amber-500/30"
            >
              Amazon
            </a>
            <a
              href={retailers.sweetwaterUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 text-blue-800 dark:text-blue-300 font-semibold transition-colors border border-blue-200 dark:border-blue-500/30"
            >
              Sweetwater
            </a>
            <a
              href={retailers.thomannUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-semibold transition-colors border border-emerald-200 dark:border-emerald-500/30"
            >
              Thomann
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all ${className}`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-lg">{icon}</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              {label || category}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {badge}
              </span>
            )}
            {isExplicit && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100/90 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-300/80 dark:border-amber-500/30">
                ⭐ Curated Gear
              </span>
            )}
          </div>
        </div>

        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          <a
            href={product?.url || '#'}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
            title={`View ${displayTitle} specifications and pricing`}
          >
            {displayTitle}
            <svg
              className="w-3.5 h-3.5 opacity-60 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </h4>

        {toneNote && (
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {toneNote}
          </p>
        )}
      </div>

      {retailers && (
        <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Check Price & Availability:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={retailers.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex-1 text-center py-1.5 px-2.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 text-amber-900 dark:text-amber-300 font-semibold transition-colors border border-amber-300/80 dark:border-amber-500/30 shadow-xs"
            >
              Amazon
            </a>
            <a
              href={retailers.sweetwaterUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex-1 text-center py-1.5 px-2.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 text-blue-900 dark:text-blue-300 font-semibold transition-colors border border-blue-300/80 dark:border-blue-500/30 shadow-xs"
            >
              Sweetwater
            </a>
            <a
              href={retailers.thomannUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex-1 text-center py-1.5 px-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 font-semibold transition-colors border border-emerald-300/80 dark:border-emerald-500/30 shadow-xs"
            >
              Thomann
            </a>
          </div>
          <div className="mt-2 text-[9px] text-slate-400 dark:text-slate-500 text-center">
            Affiliate link · Pricing varies by region
          </div>
        </div>
      )}
    </div>
  );
}
