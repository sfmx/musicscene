'use client';

import React, { useEffect, useRef } from 'react';
import { REVENUE_CONFIG } from '@/lib/revenueConfig';

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

interface AdSlotProps {
  slotId: string;
  format: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

const FORMAT_STYLES: Record<AdSlotProps['format'], { minHeight: string; maxWidth: string }> = {
  banner: { minHeight: '90px', maxWidth: '728px' },
  rectangle: { minHeight: '250px', maxWidth: '300px' },
  leaderboard: { minHeight: '90px', maxWidth: '970px' },
};

export default function AdSlot({ slotId, format, className = '' }: AdSlotProps) {
  const adPushed = useRef(false);

  useEffect(() => {
    if (!REVENUE_CONFIG.adsEnabled || adPushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adPushed.current = true;
    } catch {
      // AdSense not loaded yet or ad blocker active
    }
  }, []);

  if (!REVENUE_CONFIG.adsEnabled) {
    return null;
  }

  const styles = FORMAT_STYLES[format];

  return (
    <div
      role="region"
      aria-label="Advertisement"
      className={`mx-auto my-8 w-full flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-slate-100/80 dark:border-slate-800/40 p-1 text-center ${className}`}
      style={{
        minHeight: styles.minHeight,
        maxWidth: styles.maxWidth,
        contain: 'layout',
      }}
    >
      <div className="w-full flex justify-center items-center overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: styles.minHeight, width: '100%' }}
          data-ad-client={REVENUE_CONFIG.adsensePublisherId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <span className="text-[9px] uppercase tracking-widest text-slate-300 dark:text-slate-600 mt-1 select-none">
        Advertisement
      </span>
    </div>
  );
}
