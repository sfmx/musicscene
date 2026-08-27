import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getEntriesByType, type ContentType } from '@/lib/contentIndex';

export const metadata: Metadata = {
  title: 'Site Index',
  description: 'Browse every lesson, song analysis, and guide on MusicScene in one place.',
};

const SECTIONS: { type: ContentType; title: string; description: string }[] = [
  { type: 'song-analysis', title: 'Song Analysis', description: 'Full breakdowns of chords, techniques, and gear for individual songs.' },
  { type: 'song-lesson', title: 'Song Lessons', description: 'Focused lessons on chords, rhythm, lead playing, and riffs.' },
  { type: 'gear-lesson', title: 'Gear & Equipment', description: 'Guides to guitars, amps, effects, and accessories.' },
  { type: 'practice', title: 'Practice Exercises', description: 'Warmups, technique drills, and improvisation exercises.' },
  { type: 'chord', title: 'Chords', description: 'Chord types and how to build and use them.' },
  { type: 'progression', title: 'Chord Progressions', description: 'Common progressions used across popular music.' },
  { type: 'scale', title: 'Scales', description: 'Scale patterns and how to apply them.' },
  { type: 'interval', title: 'Intervals', description: 'The building blocks of chords and melody.' },
  { type: 'mode', title: 'Modes', description: 'The seven modes of the major scale.' },
];

function withTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}

export default function SiteIndexPage() {
  const sections = SECTIONS.map((section) => ({
    ...section,
    entries: getEntriesByType(section.type)
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((section) => section.entries.length > 0);

  const totalCount = sections.reduce((sum, section) => sum + section.entries.length, 0);

  return (
    <Layout>
      <Header
        title="Site Index"
        subtitle={`Every lesson on MusicScene in one place — ${totalCount} pages across ${sections.length} categories.`}
      />
      <main className="max-w-5xl mx-auto px-4 py-12">
        {sections.map((section) => (
          <section key={section.type} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {section.title}{' '}
              <span className="text-base font-normal text-gray-500">({section.entries.length})</span>
            </h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
              {section.entries.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={withTrailingSlash(entry.url)}
                    className="text-blue-700 hover:text-blue-900 hover:underline text-sm"
                  >
                    {entry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
