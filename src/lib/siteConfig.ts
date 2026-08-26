export const SITE_CONFIG = {
  name: 'MusicScene',
  tagline: 'Master Guitar with Expert Lessons',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://musicscene.com.au',
  defaultOgImage: '/images/og-default.svg',
} as const;
