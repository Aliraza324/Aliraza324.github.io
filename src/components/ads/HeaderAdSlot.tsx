import React from 'react';
import { AdSlot } from './AdSlot';
import { adsConfig } from '@/config/ads.config';

export const HeaderAdSlot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 ${className || ''}`}>
      <AdSlot
        slotId={adsConfig.slots.header}
        format="horizontal"
        className="my-4 max-w-[728px] mx-auto min-h-[90px]"
        label="Sponsor"
      />
    </div>
  );
};

