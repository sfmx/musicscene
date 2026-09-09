import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import WhySongsWorkClient from './WhySongsWorkClient';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Why Famous Songs Work: Guitar Music Theory Breakdowns | MusicScene',
  description: 'Deep music theory analyses dissecting why legendary guitar songs sound so good. Modal mixture, voice leading, line clichés, and key modulations explained.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/songs/why-songs-work/`,
  },
  openGraph: {
    title: 'Why Famous Songs Work: Guitar Music Theory Breakdowns',
    description: 'Deep music theory analyses dissecting why legendary guitar songs sound so good. Modal mixture, voice leading, and key modulations explained.',
    url: `${SITE_CONFIG.baseUrl}/lessons/songs/why-songs-work/`,
    type: 'article',
    siteName: SITE_CONFIG.name,
    images: [{ url: `${SITE_CONFIG.baseUrl}/images/og-song-analysis.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Famous Songs Work: Guitar Music Theory Breakdowns',
    description: 'Discover the harmonic secrets behind legendary guitar anthems.',
    images: [`${SITE_CONFIG.baseUrl}/images/og-song-analysis.png`],
  },
};

export default function WhySongsWorkPage() {
  return (
    <Layout>
      <Header
        title="Why Famous Songs Work Harmonically"
        subtitle="The Music Theory Secrets, Modal Mixture, and Voice Leading Behind Legendary Guitar Anthems"
      />
      <WhySongsWorkClient />
    </Layout>
  );
}
