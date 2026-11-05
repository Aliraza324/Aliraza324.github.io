import React from 'react';
import { AdSlot } from './AdSlot';
import { adsConfig } from '@/config/ads.config';

export const InArticleAdSlot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`my-8 py-2 border-y border-ink-borderLight ${className || ''}`}>
      <AdSlot
        slotId={adsConfig.slots.inArticle}
        format="fluid"
        className="max-w-[700px] mx-auto min-h-[250px]"
        label="Editorial Sponsor"
      />
    </div>
  );
};

export const SidebarAdSlot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`my-6 ${className || ''}`}>
      <AdSlot
        slotId={adsConfig.slots.sidebar}
        format="rectangle"
        className="w-full max-w-[300px] mx-auto min-h-[250px]"
        label="Sponsor"
      />
    </div>
  );
};

export const FooterAdSlot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 my-8 ${className || ''}`}>
      <AdSlot
        slotId={adsConfig.slots.footer}
        format="horizontal"
        className="max-w-[728px] mx-auto min-h-[90px]"
        label="Partner Content"
      />
    </div>
  );
};

