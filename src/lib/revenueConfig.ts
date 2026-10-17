export const REVENUE_CONFIG = {
  amazonAssociateTag: process.env.NEXT_PUBLIC_AMAZON_TAG || 'musicscene-22',
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED !== 'false',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'ca-pub-2986939523307203',
  newsletterEndpoint: process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || 'https://nlnbdzrytxg77oepkyoclnkqvm0udjnw.lambda-url.ap-southeast-2.on.aws/',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-B8JG49MGFD',
  sweetwaterAffiliateId: process.env.NEXT_PUBLIC_SWEETWATER_ID || '',
  thomannAffiliateId: process.env.NEXT_PUBLIC_THOMANN_ID || '',
} as const;
