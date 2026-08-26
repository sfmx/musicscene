import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/demos/'],
    },
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  };
}
