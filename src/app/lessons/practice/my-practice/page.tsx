import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import MyPracticeRoomClient from '@/components/Practice/MyPracticeRoomClient';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'My Practice Room — Repertoire Tracker & Routine Studio | MusicScene',
  description:
    'Your private, browser-based guitar practice studio. Track song repertoire, log practice sessions, maintain daily streaks, and conquer challenging routines with zero server tracking.',
  keywords: [
    'guitar practice tracker',
    'guitar practice routine',
    'song repertoire manager',
    'guitar practice log',
    'guitar streak tracker',
    'guitar practice room',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/lessons/practice/my-practice/`,
  },
  openGraph: {
    title: 'My Practice Room — Guitar Repertoire & Daily Routines | MusicScene',
    description:
      'Track your song repertoire, log practice sessions, and stay motivated with daily streaks in your private browser practice studio.',
    url: `${SITE_CONFIG.baseUrl}/lessons/practice/my-practice/`,
    type: 'website',
    siteName: SITE_CONFIG.name,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'My Practice Room',
  url: `${SITE_CONFIG.baseUrl}/lessons/practice/my-practice/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Private client-side guitar rehearsal dashboard with song repertoire tracking, tempo goals, practice session logging, and daily streak motivation.',
};

export default function MyPracticePage() {
  const pathname = '/lessons/practice/my-practice';

  return (
    <Layout>
      <JsonLdScript data={jsonLd} />
      <Header
        title="🎸 My Practice Room"
        subtitle="Your private rehearsal studio. Save songs from our analysis catalogue, track your tempo milestones, maintain daily streaks, and conquer targeted practice routines."
        category="Student Practice Studio"
      />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs pathname={pathname} pageTitle="My Practice Room" />
          <MyPracticeRoomClient />
        </div>
      </div>
    </Layout>
  );
}

