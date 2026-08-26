import { SITE_CONFIG } from './siteConfig';

export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    description: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultOgImage}`,
      },
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.baseUrl}${item.url}`,
    })),
  };
}

export interface ArticleJsonLdOpts {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function getArticleJsonLd(opts: ArticleJsonLdOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_CONFIG.baseUrl}${opts.url}`,
    image: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultOgImage}`,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultOgImage}`,
      },
    },
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
  };
}

export interface SongCompositionOpts {
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  url: string;
}

export function getMusicCompositionJsonLd(opts: SongCompositionOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: opts.title,
    composer: {
      '@type': 'MusicGroup',
      name: opts.artist,
    },
    ...(opts.album && {
      includedIn: {
        '@type': 'MusicAlbum',
        name: opts.album,
      },
    }),
    ...(opts.genre && { genre: opts.genre }),
    url: opts.url.startsWith('http') ? opts.url : `${SITE_CONFIG.baseUrl}${opts.url}`,
  };
}

export interface HowToOpts {
  title: string;
  description: string;
  steps: string[];
  url: string;
}

export function getHowToJsonLd(opts: HowToOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.title,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_CONFIG.baseUrl}${opts.url}`,
    step: opts.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text,
    })),
  };
}
