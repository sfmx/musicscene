import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/siteConfig';
import contentIndexData from '@/data/_generated/content-index.json';

export const dynamic = 'force-static';

type ContentIndex = { entries: { url: string; contentType: string }[] };

const STATIC_PAGES = [
  { url: '/', priority: 1.0 },
  { url: '/about/', priority: 0.8 },
  { url: '/contact/', priority: 0.6 },
  { url: '/privacy-policy/', priority: 0.4 },
  { url: '/terms-of-service/', priority: 0.4 },
  { url: '/affiliate-disclosure/', priority: 0.4 },
  { url: '/lessons/', priority: 0.9 },
  // Theory
  { url: '/lessons/theory/', priority: 0.8 },
  { url: '/lessons/theory/chords/', priority: 0.8 },
  { url: '/lessons/theory/scales/', priority: 0.8 },
  { url: '/lessons/theory/intervals/', priority: 0.8 },
  { url: '/lessons/theory/modes/', priority: 0.8 },
  { url: '/lessons/theory/progressions/', priority: 0.8 },
  // Songs
  { url: '/lessons/songs/', priority: 0.8 },
  { url: '/lessons/songs/breakdowns/', priority: 0.7 },
  { url: '/lessons/songs/chords/', priority: 0.7 },
  { url: '/lessons/songs/effects/', priority: 0.7 },
  { url: '/lessons/songs/lead/', priority: 0.7 },
  { url: '/lessons/songs/rhythm/', priority: 0.7 },
  { url: '/lessons/songs/riffs/', priority: 0.7 },
  { url: '/lessons/songs/structure/', priority: 0.7 },
  { url: '/lessons/songs/techniques/', priority: 0.7 },
  { url: '/lessons/songs/song-analysis/', priority: 0.9 },
  // Practice
  { url: '/lessons/practice/', priority: 0.8 },
  { url: '/lessons/practice/warmups/', priority: 0.7 },
  { url: '/lessons/practice/technique/', priority: 0.7 },
  { url: '/lessons/practice/improv/', priority: 0.7 },
  // Gear
  { url: '/lessons/gear/', priority: 0.8 },
  { url: '/lessons/gear/guitars/', priority: 0.7 },
  { url: '/lessons/gear/amps/', priority: 0.7 },
  { url: '/lessons/gear/effects/', priority: 0.7 },
  { url: '/lessons/gear/recording/', priority: 0.7 },
  { url: '/lessons/gear/accessories/', priority: 0.7 },
  // Other
  { url: '/lessons/techniques/', priority: 0.6 },
];

const TYPE_PRIORITY: Record<string, number> = {
  'song-analysis': 0.9,
  chord: 0.8,
  scale: 0.8,
  interval: 0.7,
  mode: 0.7,
  progression: 0.7,
  practice: 0.7,
  'gear-lesson': 0.6,
  'song-lesson': 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const index = contentIndexData as unknown as ContentIndex;

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${SITE_CONFIG.baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));

  const dynamicEntries: MetadataRoute.Sitemap = index.entries.map((entry) => {
    const url = entry.url.endsWith('/') ? entry.url : `${entry.url}/`;
    return {
      url: `${SITE_CONFIG.baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: TYPE_PRIORITY[entry.contentType] ?? 0.6,
    };
  });

  return [...staticEntries, ...dynamicEntries];
}
