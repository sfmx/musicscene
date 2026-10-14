import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import contentIndexData from '@/data/_generated/content-index.json';

export const metadata: Metadata = {
  title: 'Guitar Lessons: Theory, Song Analysis, Technique & Gear',
  description:
    'The full MusicScene guitar curriculum: song analyses, music theory for guitarists, technique drills, interactive practice tools, and gear guides — with a suggested learning path.',
};

type Entry = { contentType: string };
const counts = (contentIndexData as { entries: Entry[] }).entries.reduce<Record<string, number>>((acc, e) => {
  acc[e.contentType] = (acc[e.contentType] || 0) + 1;
  return acc;
}, {});
const n = (type: string) => counts[type] ?? 0;
const theoryCount = n('chord') + n('scale') + n('interval') + n('mode') + n('progression');

const tracks = [
  {
    icon: '🎸',
    title: 'Song Analysis',
    href: '/lessons/songs/song-analysis/',
    count: `${n('song-analysis')} songs`,
    description:
      'Section-by-section breakdowns of well-known guitar songs. Each analysis covers the key and scale choices, the chord progression in Roman numerals, tuning and tone, interactive tab for the main riffs and solos, and practice notes for the hardest passages.',
    links: [
      { label: 'Browse all song analyses', href: '/lessons/songs/song-analysis/' },
      { label: 'Why famous songs work (harmonic breakdowns)', href: '/lessons/songs/why-songs-work/' },
      { label: 'Song section breakdowns: intro, verse, chorus, solo', href: '/lessons/songs/breakdowns/' },
      { label: 'Song structure and arrangement', href: '/lessons/songs/structure/' },
    ],
  },
  {
    icon: '🎼',
    title: 'Music Theory for Guitar',
    href: '/lessons/theory/',
    count: `${theoryCount} guides`,
    description:
      'Theory taught on the fretboard rather than the staff. Every guide shows the shapes under your fingers, explains what the sound does emotionally, and links to songs that use it so you can hear the idea in context.',
    links: [
      { label: `Scales (${n('scale')})`, href: '/lessons/theory/scales/' },
      { label: `Chords (${n('chord')})`, href: '/lessons/theory/chords/' },
      { label: `Intervals (${n('interval')})`, href: '/lessons/theory/intervals/' },
      { label: `Modes (${n('mode')})`, href: '/lessons/theory/modes/' },
      { label: `Chord progressions (${n('progression')})`, href: '/lessons/theory/progressions/' },
    ],
  },
  {
    icon: '🖐️',
    title: 'Technique',
    href: '/lessons/techniques/',
    count: 'Picking & fretting hand',
    description:
      'Focused drills for the mechanics that hold most players back: alternate and hybrid picking, legato, bending in tune, vibrato, muting and string skipping. Each drill has a tempo target and the common mistakes to watch for.',
    links: [
      { label: 'Technique overview', href: '/lessons/techniques/' },
      { label: 'Technique drills', href: '/lessons/practice/technique/' },
      { label: 'Techniques in real songs', href: '/lessons/songs/techniques/' },
    ],
  },
  {
    icon: '🎯',
    title: 'Practice Tools & Routines',
    href: '/lessons/practice/',
    count: `${n('practice')} exercises + 5 tools`,
    description:
      'Interactive tools that run in the browser plus structured routines. Use them for short daily sessions: learning the notes on the neck, ear training, jamming over progressions, and building improvisation vocabulary.',
    links: [
      { label: 'Fretboard note trainer', href: '/lessons/practice/fretboard-trainer/' },
      { label: 'Chord progression player', href: '/lessons/practice/progression-player/' },
      { label: 'Circle of fifths explorer', href: '/lessons/practice/circle-of-fifths/' },
      { label: 'CAGED system visualiser', href: '/lessons/practice/caged-system/' },
      { label: 'Ear trainer', href: '/lessons/practice/ear-trainer/' },
      { label: 'Warm-ups', href: '/lessons/practice/warmups/' },
      { label: 'Improvisation', href: '/lessons/practice/improv/' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Gear & Tone',
    href: '/lessons/gear/',
    count: `${n('gear-lesson')} guides`,
    description:
      'How guitars, amps, pedals and recording gear actually shape your sound: pickups, tube versus solid-state amps, gain staging, effects order, and home recording. The aim is to help you get the tone in your head with the gear you already own.',
    links: [
      { label: 'Guitars & pickups', href: '/lessons/gear/guitars/' },
      { label: 'Amplifiers', href: '/lessons/gear/amps/' },
      { label: 'Effects pedals', href: '/lessons/gear/effects/' },
      { label: 'Home recording', href: '/lessons/gear/recording/' },
      { label: 'Accessories', href: '/lessons/gear/accessories/' },
    ],
  },
];

const path = [
  {
    stage: 'Beginner',
    focus: 'Open chords, the minor pentatonic box and steady strumming.',
    steps: [
      { label: 'Major chords', href: '/lessons/theory/chords/major/' },
      { label: 'Minor chords', href: '/lessons/theory/chords/minor/' },
      { label: 'The I–IV–V progression', href: '/lessons/theory/progressions/i-iv-v/' },
      { label: 'Minor pentatonic scale', href: '/lessons/theory/scales/minor-pentatonic/' },
    ],
  },
  {
    stage: 'Intermediate',
    focus: 'Barre and power chords, the full major scale, bending and the blues form.',
    steps: [
      { label: 'Power chords', href: '/lessons/theory/chords/power/' },
      { label: 'Major scale', href: '/lessons/theory/scales/major/' },
      { label: '12-bar blues', href: '/lessons/theory/progressions/12-bar-blues/' },
      { label: 'Bending & vibrato', href: '/lessons/practice/technique/bending-vibrato/' },
    ],
  },
  {
    stage: 'Advanced',
    focus: 'Modes, seventh chords, borrowed chords and phrasing over changes.',
    steps: [
      { label: 'Dorian mode', href: '/lessons/theory/modes/dorian/' },
      { label: 'Mixolydian mode', href: '/lessons/theory/modes/mixolydian/' },
      { label: 'Seventh chords', href: '/lessons/theory/chords/seventh/' },
      { label: 'ii–V–I', href: '/lessons/theory/progressions/ii-v-i/' },
    ],
  },
];

export default function LessonsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Lessons"
        subtitle="Song analysis, theory, technique, practice tools and gear — organised so each part supports the others."
      />
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <main className="max-w-6xl mx-auto px-4 py-12">
          <section className="mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How the lessons fit together</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Most guitarists learn from tabs, which tell you where to put your fingers but not why the notes work. MusicScene
              connects the two. The song analyses show you what a real piece of music is doing, the theory guides explain the
              idea behind it, and the technique drills and practice tools give you a way to get it under your fingers.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              A good way to use the site: pick a song you want to play, learn its riffs from the analysis, then follow the links
              in that analysis to the scales, chords and progressions it uses. You end up learning theory through music you
              already care about.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 mb-16">
            {tracks.map((t) => (
              <div
                key={t.href}
                className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    <Link href={t.href} className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                      <span className="mr-2" aria-hidden="true">{t.icon}</span>
                      {t.title}
                    </Link>
                  </h2>
                  <span className="text-xs font-semibold whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {t.count}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{t.description}</p>
                <ul className="space-y-1.5 text-sm">
                  {t.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-blue-600 dark:text-amber-400 hover:underline">
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Suggested learning path</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
              If you are not sure where to start, work through these in order. Spend time with a few songs at each stage before
              moving on.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {path.map((p) => (
                <div
                  key={p.stage}
                  className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{p.stage}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.focus}</p>
                  <ol className="space-y-1.5 text-sm list-decimal list-inside">
                    {p.steps.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="text-blue-600 dark:text-amber-400 hover:underline">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
