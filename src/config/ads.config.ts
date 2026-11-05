/**
 * Google AdSense Centralized Configuration
 * 
 * STRICT ADSENSE COMPLIANCE NOTICE:
 * To comply with Google AdSense Publisher Policies:
 * 1. All advertisement slots are disabled by default (`enabled: false`).
 * 2. Never enable ads before official Google AdSense review and approval.
 * 3. Never insert dummy, placeholder, or deceptive simulated ads that could trick users.
 * 4. Once your site is officially approved by Google AdSense:
 *    - Set NEXT_PUBLIC_ADSENSE_ENABLED="true" in your environment variables.
 *    - Provide your real publisher ID in NEXT_PUBLIC_ADSENSE_CLIENT_ID (e.g., "ca-pub-1234567890123456").
 *    - Provide the respective ad slot unit IDs.
 *    - Update public/ads.txt with your publisher ID line.
 */

export interface AdsConfig {
  enabled: boolean;
  clientId: string;
  slots: {
    header: string;
    inArticle: string;
    sidebar: string;
    footer: string;
  };
  testMode: boolean;
}

export const adsConfig: AdsConfig = {
  // Disabled by default to comply strictly with AdSense policies before site approval
  enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
  slots: {
    header: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER || '',
    inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE || '',
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || '',
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || '',
  },
  testMode: process.env.NODE_ENV !== 'production',
};

export const isAdsEnabled = (): boolean => {
  return adsConfig.enabled && Boolean(adsConfig.clientId);
};

