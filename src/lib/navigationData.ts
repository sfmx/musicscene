import theoryRoot from '@/data/category-roots/theory-root.json';
import practiceRoot from '@/data/category-roots/practice-root.json';
import gearRoot from '@/data/gear-lessons/gear-root-index.json';
import songsRoot from '@/data/song-lessons/songs-root-index.json';

export interface NavMenuItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  items: NavMenuItem[];
}

export interface NavCategory {
  label: string;
  href: string;
  columns: NavColumn[];
  featured?: NavMenuItem[];
}

function buildTheoryNav(): NavCategory {
  const topics = theoryRoot.topicCards.items;

  // Split into columns: Scales & Chords get their own, rest grouped
  const scalesTopic = topics.find(t => t.title === 'Scales');
  const chordsTopic = topics.find(t => t.title === 'Chords');
  const otherTopics = topics.filter(t => t.title !== 'Scales' && t.title !== 'Chords');

  return {
    label: 'Theory',
    href: '/lessons/theory',
    columns: [
      {
        heading: 'Scales',
        headingHref: scalesTopic?.href,
        items: [
          { label: 'Major Scale', href: '/lessons/theory/scales/major' },
          { label: 'Minor Scale', href: '/lessons/theory/scales/minor' },
          { label: 'Major Pentatonic', href: '/lessons/theory/scales/major-pentatonic' },
          { label: 'Minor Pentatonic', href: '/lessons/theory/scales/minor-pentatonic' },
          { label: 'Blues Scale', href: '/lessons/theory/scales/blues' },
          { label: 'All Scales', href: '/lessons/theory/scales', icon: '→' },
        ],
      },
      {
        heading: 'Chords',
        headingHref: chordsTopic?.href,
        items: [
          { label: 'Major Chords', href: '/lessons/theory/chords/major' },
          { label: 'Minor Chords', href: '/lessons/theory/chords/minor' },
          { label: '7th Chords', href: '/lessons/theory/chords/seventh' },
          { label: 'Extended Chords', href: '/lessons/theory/chords/extended' },
          { label: 'All Chords', href: '/lessons/theory/chords', icon: '→' },
        ],
      },
      {
        heading: 'More Theory',
        items: otherTopics.map(t => ({
          label: t.title,
          href: t.href,
          icon: t.icon,
        })),
      },
    ],
    featured: [
      { label: 'All Theory Topics', href: '/lessons/theory' },
    ],
  };
}

function buildSongsNav(): NavCategory {
  return {
    label: 'Songs',
    href: '/lessons/songs',
    columns: [
      {
        heading: 'Song Analysis',
        headingHref: '/lessons/songs/song-analysis',
        items: [
          { label: 'Browse All Songs', href: '/lessons/songs/song-analysis' },
          { label: 'By Difficulty', href: '/search?type=song-analysis&sort=difficulty' },
          { label: 'By Genre', href: '/search?type=song-analysis' },
        ],
      },
      {
        heading: 'Song Learning',
        items: songsRoot.topics
          .filter(t => !t.href.includes('song-analysis') && !t.href.includes('analysis-method'))
          .slice(0, 6)
          .map(t => ({
            label: t.title.replace('in Songs', '').replace('in Context', '').trim(),
            href: t.href,
            icon: t.icon,
          })),
      },
      {
        heading: 'Techniques',
        items: [
          { label: 'Riffs & Licks', href: '/lessons/songs/riffs' },
          { label: 'Lead Guitar', href: '/lessons/songs/lead' },
          { label: 'Rhythm Patterns', href: '/lessons/songs/rhythm' },
          { label: 'Song Effects', href: '/lessons/songs/effects' },
          { label: 'Song Techniques', href: '/lessons/songs/techniques' },
        ],
      },
    ],
    featured: [
      { label: 'All Song Lessons', href: '/lessons/songs' },
      { label: 'Analysis Method', href: '/lessons/songs/analysis-method' },
    ],
  };
}

function buildPracticeNav(): NavCategory {
  const topics = practiceRoot.topicCards.items;

  return {
    label: 'Practice',
    href: '/lessons/practice',
    columns: topics.map(topic => ({
      heading: topic.title,
      headingHref: topic.href,
      items: topic.concepts.slice(0, 6).map(concept => ({
        label: concept,
        href: topic.href,
      })),
    })),
    featured: [
      { label: 'All Practice Topics', href: '/lessons/practice' },
      { label: 'Fretboard Trainer', href: '/lessons/practice/fretboard-trainer' },
      { label: 'Progression Jammer', href: '/lessons/practice/progression-player' },
    ],
  };
}

function buildGearNav(): NavCategory {
  const categories = gearRoot.gearCategories;

  // Group into 3 columns
  const guitarsCat = categories.find(c => c.title.includes('Guitar'));
  const ampsCat = categories.find(c => c.title.includes('Amp'));
  const recordingCat = categories.find(c => c.title.includes('Recording'));
  const accessoriesCat = categories.find(c => c.title.includes('Accessories'));

  return {
    label: 'Gear',
    href: '/lessons/gear',
    columns: [
      {
        heading: 'Guitars',
        headingHref: guitarsCat?.href,
        items: [
          { label: 'Electric Guitars', href: '/lessons/gear/guitars/electric' },
          { label: 'Acoustic Guitars', href: '/lessons/gear/guitars/acoustic' },
          { label: 'Bass Guitars', href: '/lessons/gear/guitars/bass' },
          { label: 'Classical Guitars', href: '/lessons/gear/guitars/classical' },
          { label: 'All Guitars', href: '/lessons/gear/guitars', icon: '→' },
        ],
      },
      {
        heading: 'Amps & Effects',
        headingHref: ampsCat?.href,
        items: [
          { label: 'Tube Amps', href: '/lessons/gear/amps/tube' },
          { label: 'Solid-State Amps', href: '/lessons/gear/amps/solid-state' },
          { label: 'Modeling Amps', href: '/lessons/gear/amps/modeling' },
          { label: 'All Amps', href: '/lessons/gear/amps', icon: '→' },
          { label: 'Effects Pedals', href: '/lessons/gear/effects', icon: '→' },
        ],
      },
      {
        heading: 'Recording & More',
        items: [
          { label: 'Audio Interfaces', href: '/lessons/gear/recording/interfaces' },
          { label: 'Microphones', href: '/lessons/gear/recording/microphones' },
          { label: 'DAWs', href: '/lessons/gear/recording/daw' },
          { label: 'All Recording', href: recordingCat?.href ?? '/lessons/gear/recording', icon: '→' },
          { label: 'Accessories', href: accessoriesCat?.href ?? '/lessons/gear/accessories', icon: '→' },
        ],
      },
    ],
    featured: [
      { label: 'All Gear Guides', href: '/lessons/gear' },
    ],
  };
}

let cachedNavData: NavCategory[] | null = null;

export function getNavigationData(): NavCategory[] {
  if (cachedNavData) return cachedNavData;
  cachedNavData = [
    buildTheoryNav(),
    buildSongsNav(),
    buildPracticeNav(),
    buildGearNav(),
  ];
  return cachedNavData;
}
