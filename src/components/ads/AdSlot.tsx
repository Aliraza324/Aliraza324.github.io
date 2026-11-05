'use client';

import React, { useEffect } from 'react';
import { adsConfig, isAdsEnabled } from '@/config/ads.config';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'auto',
  responsive = true,
  className = '',
  label = 'Advertisement',
}) => {
  const active = isAdsEnabled() && Boolean(slotId);

  useEffect(() => {
    if (active && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense initialization error:', err);
      }
    }
  }, [active]);

  // If AdSense is disabled (default compliance state before approval), render nothing in production
  if (!active) {
    // Only in non-production development with test mode explicitly inspected do we render a discreet placeholder
    if (adsConfig.testMode && process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === 'true') {
      return (
        <aside
          aria-label={label}
          className={`border border-dashed border-ink-border bg-paper-100 p-4 text-center rounded text-xs text-ink-muted my-6 ${className}`}
        >
          <span className="font-mono uppercase tracking-wider block font-semibold mb-1">
            {label} (Disabled)
          </span>
          <p className="text-[11px] text-ink-faint">
            Ad slot will activate upon Google AdSense approval and environment configuration.
          </p>
        </aside>
      );
    }
    return null;
  }

  return (
    <aside
      aria-label={label}
      className={`ad-container my-6 text-center overflow-hidden min-h-[100px] ${className}`}
    >
      <span className="text-[10px] uppercase font-mono tracking-wider text-ink-faint block mb-1">
        {label}
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsConfig.clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </aside>
  );
};

