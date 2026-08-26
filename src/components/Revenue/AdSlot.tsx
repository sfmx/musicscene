'use client';

import { useEffect, useRef } from 'react';
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
      className={`mx-auto my-6 ${className}`}
      style={{ minHeight: styles.minHeight, maxWidth: styles.maxWidth }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={REVENUE_CONFIG.adsensePublisherId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
