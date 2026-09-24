import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getEntriesByType, type ContentType } from '@/lib/contentIndex';
import { TAG_TAXONOMY } from '@/lib/tagTaxonomy';

export const metadata: Metadata = {
  title: 'Site Index | Every Lesson, Tool & Guide on MusicScene',
  description: 'Complete directory of all 460 pages on MusicScene. Explore interactive guitar tools, theory guides, 130+ song breakdowns, practice drills, and gear reviews.',
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

interface StaticLink {
  title: string;
  url: string;
  badge?: string;
  description?: string;
}

const INTERACTIVE_TOOLS: StaticLink[] = [
  {
    title: 'Fretboard Note Hunt & Speed Quiz',
    url: '/lessons/practice/fretboard-trainer/',
    badge: '⚡ Speed Rush & Audio',
    description: 'Master notes on every string with 5s Rush, 3s Lightning, and 60s Blitz sprint timed challenges.',
  },
  {
    title: 'Chord Progression Jam Player',
    url: '/lessons/practice/progression-player/',
    badge: '🎵 Backing Tracks',
    description: 'Interactive jam machine with live tempo, key transposition, 12-bar blues, and multiple rhythm styles.',
  },
  {
    title: 'Circle of Fifths Explorer & Studio',
    url: '/lessons/practice/circle-of-fifths/',
    badge: '🎡 Interactive Wheel',
    description: 'Visual key signatures, Roman numeral chord degree maps, borrowed chords, and mode relationships.',
  },
  {
    title: 'CAGED System Visualizer',
    url: '/lessons/practice/caged-system/',
    badge: '🎸 Interlocking Shapes',
    description: 'Interactive guitar fretboard connecting the 5 CAGED forms across major, minor, and arpeggios.',
  },
  {
    title: 'Interactive Ear Trainer & Pitch Quizzer',
    url: '/lessons/practice/ear-trainer/',
    badge: '👂 Audio Training',
    description: 'Train your ears with interval identification and chord quality listening quizzes.',
  },
  {
    title: 'Printable Fretboard Cheat Sheet',
    url: '/downloads/fretboard-cheat-sheet/',
    badge: '📄 Free PDF Download',
    description: 'High-resolution printable reference chart covering notes across all 24 frets in standard tuning.',
  },
];

const CATEGORY_HUBS: StaticLink[] = [
  { title: 'All Lessons Hub', url: '/lessons/', description: 'Master curriculum spanning theory, song repertoire, technique, and gear.' },
  { title: 'Music Theory Hub', url: '/lessons/theory/', description: 'Core principles of harmony, scales, chords, and fretboard structure.' },
  { title: 'Song Lessons Hub', url: '/lessons/songs/', description: 'Learn how to play and understand classic tracks and signature techniques.' },
  { title: 'Why Famous Songs Work', url: '/lessons/songs/why-songs-work/', description: 'Harmonic deep dives into the theory secrets behind the greatest songs.' },
  { title: 'Song Analysis Directory', url: '/lessons/songs/song-analysis/', description: 'Comprehensive library of 130+ song breakdowns and chord charts.' },
  { title: 'Practice Exercises Hub', url: '/lessons/practice/', description: 'Structured daily warmups, technique drills, and improvisation exercises.' },
  { title: 'Gear & Equipment Hub', url: '/lessons/gear/', description: 'Objective guides to guitars, tube/digital amps, effects pedals, and recording.' },
  { title: 'Guitar Techniques Hub', url: '/lessons/techniques/', description: 'Physical execution guides: alternate picking, legato, bends, and vibrato.' },
  { title: 'Topic Taxonomy Index', url: '/lessons/tags/', description: 'Browse the entire content catalog by genre, instrument, technique, and difficulty.' },
];

const THEORY_SECTIONS: { type: ContentType; title: string; hubUrl: string; description: string }[] = [
  { type: 'chord', title: 'Chords & Voicings', hubUrl: '/lessons/theory/chords/', description: 'Triads, 7ths, extended chords, suspended voicings, and power chords.' },
  { type: 'progression', title: 'Chord Progressions', hubUrl: '/lessons/theory/progressions/', description: 'The harmonic progressions driving blues, rock, pop, and jazz.' },
  { type: 'scale', title: 'Guitar Scales', hubUrl: '/lessons/theory/scales/', description: 'Pentatonic, blues, natural minor, major, and exotic scale patterns.' },
  { type: 'mode', title: 'The 7 Modes', hubUrl: '/lessons/theory/modes/', description: 'Dorian, Mixolydian, Phrygian, Lydian, Aeolian, Ionian, and Locrian.' },
  { type: 'interval', title: 'Intervals & Ear Theory', hubUrl: '/lessons/theory/intervals/', description: 'The fundamental sonic distances that form chords and melodies.' },
];

const CORE_LEGAL_PAGES: StaticLink[] = [
  { title: 'Homepage', url: '/', description: 'Start your guitar journey with our complete learning path.' },
  { title: 'Global Search', url: '/search/', description: 'Instantly search all 460 lessons, songs, tools, and guides.' },
  { title: 'About MusicScene', url: '/about/', description: 'Our mission to build the world’s most comprehensive guitar platform.' },
  { title: 'Contact Us', url: '/contact/', description: 'Get in touch with our team for questions, feedback, or lesson requests.' },
  { title: 'Privacy Policy', url: '/privacy-policy/', description: 'How we collect, protect, and respect your personal data.' },
  { title: 'Terms of Service', url: '/terms-of-service/', description: 'Terms and conditions governing use of MusicScene.' },
  { title: 'Affiliate Disclosure', url: '/affiliate-disclosure/', description: 'Transparency regarding affiliate partnerships and recommendations.' },
];

export default function SiteIndexPage() {
  const sections = SECTIONS.map((section) => ({
    ...section,
    entries: getEntriesByType(section.type)
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((section) => section.entries.length > 0);
  // Filter out practice tools from the general practice drills to prevent duplicates
  const practiceDrills = getEntriesByType('practice')
    .filter((e) => e.category !== 'tools' && !e.slug.includes('why-songs-work'))
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const totalCount = sections.reduce((sum, section) => sum + section.entries.length, 0);
  const songAnalyses = getEntriesByType('song-analysis')
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const songLessons = getEntriesByType('song-lesson')
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const gearLessons = getEntriesByType('gear-lesson')
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const theoryGroups = THEORY_SECTIONS.map((sec) => ({
    ...sec,
    entries: getEntriesByType(sec.type).slice().sort((a, b) => a.title.localeCompare(b.title)),
  }));

  const sortedTags = TAG_TAXONOMY.slice().sort((a, b) => a.label.localeCompare(b.label));

  // Calculate total pages across the entire site
  const totalPages =
    INTERACTIVE_TOOLS.length +
    CATEGORY_HUBS.length +
    CORE_LEGAL_PAGES.length +
    practiceDrills.length +
    songAnalyses.length +
    songLessons.length +
    gearLessons.length +
    theoryGroups.reduce((acc, g) => acc + g.entries.length, 0) +
    sortedTags.length;

  return (
    <Layout>
      <Header
        title="Site Index"
        subtitle={`Every lesson, interactive tool, and guide on MusicScene in one place — ${totalPages} pages across 9 core sections.`}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Quick Jump Pills */}
        <nav aria-label="Quick jump" className="mb-12 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Quick Jump to Section:
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '#interactive-tools', label: '⚡ Interactive Tools', count: INTERACTIVE_TOOLS.length },
              { href: '#category-hubs', label: '📚 Category Hubs', count: CATEGORY_HUBS.length },
              { href: '#music-theory', label: '🎼 Music Theory', count: theoryGroups.reduce((a, g) => a + g.entries.length, 0) },
              { href: '#song-analyses', label: '🎸 Song Breakdowns', count: songAnalyses.length },
              { href: '#song-lessons', label: '🎵 Song Lessons', count: songLessons.length },
              { href: '#practice-drills', label: '🏋️ Practice & Drills', count: practiceDrills.length },
              { href: '#gear-guides', label: '🎛️ Gear & Equipment', count: gearLessons.length },
              { href: '#topic-tags', label: '🏷️ Browse by Topic', count: sortedTags.length },
              { href: '#core-legal', label: '⚖️ Core & Legal', count: CORE_LEGAL_PAGES.length },
            ].map((jump) => (
              <a
                key={jump.href}
                href={jump.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-indigo-50 text-slate-800 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-950/70 dark:text-slate-200 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>{jump.label}</span>
                <span className="text-[11px] opacity-70">({jump.count})</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 1. Flagship Interactive Tools */}
        <section id="interactive-tools" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>⚡</span> Interactive Practice Tools & Utilities
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({INTERACTIVE_TOOLS.length})</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Custom guitar web apps designed for high-intensity ear, fretboard, and rhythm development.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERACTIVE_TOOLS.map((tool) => (
              <Link
                key={tool.url}
                href={tool.url}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                      {tool.badge}
                    </span>
                    <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-amber-400 font-mono text-sm transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. Category Hubs */}
        <section id="category-hubs" className="mb-16 scroll-mt-24">
          <div className="pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>📚</span> Core Category Hubs & Portals
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({CATEGORY_HUBS.length})</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Main landing pages and guided gateways for our key content pillars.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORY_HUBS.map((hub) => (
              <Link
                key={hub.url}
                href={hub.url}
                className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-900 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-amber-400">
                    {hub.title}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                  {hub.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Music Theory Library */}
        <section id="music-theory" className="mb-16 scroll-mt-24">
          <div className="pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🎼</span> Music Theory Library
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                ({theoryGroups.reduce((a, g) => a + g.entries.length, 0)} guides)
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              In-depth guitar-centric theory guides with chord diagrams, fretboard patterns, and musical applications.
            </p>
          </div>

          <div className="space-y-10">
            {theoryGroups.map((group) => (
              <div key={group.type} className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Link href={group.hubUrl} className="hover:text-indigo-600 dark:hover:text-amber-400 hover:underline">
                        {group.title}
                      </Link>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">({group.entries.length})</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{group.description}</p>
                  </div>
                  <Link
                    href={group.hubUrl}
                    className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    View {group.title} Hub →
                  </Link>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                  {group.entries.map((entry) => (
                    <li key={entry.id}>
                      <Link
                        href={withTrailingSlash(entry.url)}
                        className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 hover:underline text-xs flex items-center gap-1.5 py-1"
                      >
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="truncate">{entry.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Song Analysis Directory (130 Songs) */}
        <section id="song-analyses" className="mb-16 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎸</span> Song Analysis & Breakdown Directory
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({songAnalyses.length} tracks)</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Complete musical breakdowns covering chords, AlphaTex interactive tabs, harmonic theory, and rig recreation.
              </p>
            </div>
            <Link
              href="/lessons/songs/song-analysis/"
              className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              Browse Song Analysis Hub →
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
              {songAnalyses.map((song) => (
                <li key={song.id}>
                  <Link
                    href={withTrailingSlash(song.url)}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 hover:underline text-xs flex items-center gap-1.5 py-1"
                  >
                    <span className="text-amber-500 text-[10px]">▶</span>
                    <span className="truncate">{song.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Song Lessons */}
        <section id="song-lessons" className="mb-16 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎵</span> Song Lessons by Musical Focus
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({songLessons.length} lessons)</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Targeted lessons on specific song aspects: rhythm, strumming, lead playing, riffs, and song structure.
              </p>
            </div>
            <Link
              href="/lessons/songs/"
              className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              Song Lessons Hub →
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
              {songLessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={withTrailingSlash(lesson.url)}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 hover:underline text-xs flex items-center gap-1.5 py-1"
                  >
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="truncate">{lesson.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Practice Exercises & Technique Drills */}
        <section id="practice-drills" className="mb-16 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🏋️</span> Practice Routines & Technique Drills
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({practiceDrills.length} routines)</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Daily warmups, finger dexterity drills, speed building, and improvisation workouts.
              </p>
            </div>
            <Link
              href="/lessons/practice/"
              className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              Practice Exercises Hub →
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
              {practiceDrills.map((drill) => (
                <li key={drill.id}>
                  <Link
                    href={withTrailingSlash(drill.url)}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 hover:underline text-xs flex items-center gap-1.5 py-1"
                  >
                    <span className="text-emerald-500 text-[10px]">✓</span>
                    <span className="truncate">{drill.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Gear & Equipment Guides */}
        <section id="gear-guides" className="mb-16 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🎛️</span> Gear & Equipment Guides
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({gearLessons.length} guides)</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Comprehensive buyer guides and tonal breakdowns for guitars, amps, pedals, and recording equipment.
              </p>
            </div>
            <Link
              href="/lessons/gear/"
              className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              Gear & Equipment Hub →
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
              {gearLessons.map((gear) => (
                <li key={gear.id}>
                  <Link
                    href={withTrailingSlash(gear.url)}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 hover:underline text-xs flex items-center gap-1.5 py-1"
                  >
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="truncate">{gear.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Browse by Topic (Taxonomy Tags) */}
        <section id="topic-tags" className="mb-16 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🏷️</span> Browse by Topic & Style
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({sortedTags.length} topics)</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Explore every musical style, technique, theoretical concept, and instrument category.
              </p>
            </div>
            <Link
              href="/lessons/tags/"
              className="text-xs font-semibold text-indigo-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              Tag Taxonomy Index →
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <div className="flex flex-wrap gap-2">
              {sortedTags.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/lessons/tags/${tag.slug}/`}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700/60 transition-colors"
                >
                  #{tag.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Core Site & Legal Pages */}
        <section id="core-legal" className="mb-16 scroll-mt-24">
          <div className="pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>⚖️</span> Core & Legal Information
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({CORE_LEGAL_PAGES.length})</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Platform utilities, contact channels, and legal disclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_LEGAL_PAGES.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-900 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-amber-400">
                    {page.title}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
