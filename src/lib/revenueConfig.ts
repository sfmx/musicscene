export const REVENUE_CONFIG = {
  amazonAssociateTag: process.env.NEXT_PUBLIC_AMAZON_TAG || 'musicscene202-22',
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'ca-pub-2986939523307203',
  newsletterEndpoint: process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || '',
} as const;
