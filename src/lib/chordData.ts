import majorData from '@/data/chords/major.json';
import minorData from '@/data/chords/minor.json';
import seventhData from '@/data/chords/seventh.json';
import majorSeventhData from '@/data/chords/major-seventh.json';
import minorSeventhData from '@/data/chords/minor-seventh.json';
import suspendedData from '@/data/chords/suspended.json';
import augmentedData from '@/data/chords/augmented.json';
import diminishedData from '@/data/chords/diminished.json';
import extendedData from '@/data/chords/extended.json';
import powerData from '@/data/chords/power.json';
import addData from '@/data/chords/add.json';
import sixthData from '@/data/chords/sixth.json';
import minorSixthData from '@/data/chords/minor-sixth.json';
import halfDiminishedData from '@/data/chords/half-diminished.json';
import slashData from '@/data/chords/slash.json';
import dominantNinthData from '@/data/chords/dominant-ninth.json';
import alteredDominantData from '@/data/chords/altered-dominant.json';
import chordIndexData from '@/data/chords/chord-index.json';

// --- Interfaces ---

export interface ChordTheoryItem {
  label: string;
  value: string;
}

export interface ChordConstructionBox {
  title: string;
  items: string[];
}

export interface ChordVoicing {
  name: string;
  chord: string;          // SimpleFretboardDiagram chord prop value
  notes: string;
  fingering: string;
  use: string;
}

export interface ChordVoicingGroup {
  title: string;
  description?: string;
  tipTitle?: string;
  tipDescription?: string;
  voicings: ChordVoicing[];
}

export interface ProgressionChord {
  chord: string;          // SimpleFretboardDiagram chord prop value
  label: string;
  numeral: string;
}

export interface StrummingPattern {
  pattern: string;
  description: string;
  feel: string;
  tempo: string;
  genre: string;
}

export interface ChordProgression {
  title: string;
  titleColor: string;
  chords: ProgressionChord[];
  strumming: StrummingPattern;
  alphaTex: string;
  alphaTexTitle?: string;
  description: string;
}

export interface PracticeTips {
  techniqueItems: string[];
  applicationItems: string[];
}

export interface SongCategory {
  title: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  songs: string[];
}

export interface PracticeExercise {
  title: string;
  content: string;
  detail: string;
  tip?: string;
}

export interface AdvancedConcept {
  title: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  items: string[];
}

export interface JourneyLink {
  slug: string;
  title: string;
  description: string;
  linkText: string;
  icon: string;
  hoverBorder: string;
  iconBg: string;
  iconHoverBg: string;
  linkColor: string;
  linkHoverColor: string;
}

export interface ExtraSection {
  id: string;
  title: string;
  introTitle?: string;
  introDescription?: string;
  introBg?: string;
  introBorder?: string;
  introTitleColor?: string;
  introTextColor?: string;
  content: ExtraSectionContent[];
}

export interface ExtraSectionContent {
  type: 'voicing-grid' | 'info-grid' | 'strategy-list' | 'note-box';
  title?: string;
  data: unknown;
}

export interface ChordData {
  slug: string;
  chordInfo: {
    name: string;
    pageTitle: string;
    subtitle: string;
    colorScheme: string;
    tags: string[];
  };
  theory: {
    fundamentalsTitle: string;
    fundamentals: ChordTheoryItem[];
    applicationsTitle: string;
    applications: ChordTheoryItem[];
  };
  construction: {
    title: string;
    boxes: ChordConstructionBox[];
  };
  voicingGroups: ChordVoicingGroup[];
  progressions: {
    title: string;
    items: ChordProgression[];
    practiceTips: PracticeTips;
  };
  famousSongs: {
    title: string;
    categories: SongCategory[];
  };
  practiceExercises: {
    title: string;
    tipTitle?: string;
    tipDescription?: string;
    exercises: PracticeExercise[];
  };
  advancedConcepts: {
    title: string;
    concepts: AdvancedConcept[];
  };
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
  extraSections?: ExtraSection[];
  gearRecommendations?: {
    title?: string;
    items: { category: string; product: string; reason: string }[];
  };
}

// --- Index page types ---

export interface ChordListItem {
  slug: string;
  name: string;
  colorScheme: string;
  description: string;
  tags: string[];
}

// --- Data loading ---

const chordDatabase: Record<string, ChordData> = {
  'major': majorData as unknown as ChordData,
  'minor': minorData as unknown as ChordData,
  'seventh': seventhData as unknown as ChordData,
  'major-seventh': majorSeventhData as unknown as ChordData,
  'minor-seventh': minorSeventhData as unknown as ChordData,
  'suspended': suspendedData as unknown as ChordData,
  'augmented': augmentedData as unknown as ChordData,
  'diminished': diminishedData as unknown as ChordData,
  'extended': extendedData as unknown as ChordData,
  'power': powerData as unknown as ChordData,
  'add': addData as unknown as ChordData,
  'sixth': sixthData as unknown as ChordData,
  'minor-sixth': minorSixthData as unknown as ChordData,
  'half-diminished': halfDiminishedData as unknown as ChordData,
  'slash': slashData as unknown as ChordData,
  'dominant-ninth': dominantNinthData as unknown as ChordData,
  'altered-dominant': alteredDominantData as unknown as ChordData,
};

export function getChordData(chordSlug: string): ChordData | null {
  return chordDatabase[chordSlug] || null;
}

export function getAllChordSlugs(): string[] {
  return Object.keys(chordDatabase);
}

export function getAllChords(): ChordListItem[] {
  return Object.entries(chordDatabase).map(([slug, data]) => ({
    slug,
    name: data.chordInfo.name,
    colorScheme: data.chordInfo.colorScheme,
    description: data.chordInfo.subtitle,
    tags: data.chordInfo.tags,
  }));
}

// --- Index page data ---

export interface ChordIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroTitle: string;
  heroDescription: string;
  whatAreChords: {
    title: string;
    description: string;
    columns: {
      title: string;
      colorBg: string;
      colorTitle: string;
      colorText: string;
      items: string[];
    }[];
  };
  chordFunctions: {
    title: string;
    description: string;
    icon: string;
    chords: string[];
    feeling: string;
    color: string;
  }[];
  constructionFundamentals: {
    title: string;
    triads: {
      title: string;
      items: {
        title: string;
        colorBg: string;
        colorTitle: string;
        colorText: string;
        colorDetail: string;
        formula: string;
        example: string;
      }[];
    };
    sevenths: {
      title: string;
      items: {
        title: string;
        colorBg: string;
        colorTitle: string;
        colorText: string;
        colorDetail: string;
        formula: string;
        example: string;
      }[];
    };
  };
  chordTypes: {
    name: string;
    symbol: string;
    icon: string;
    href: string;
    description: string;
    formula: string;
    intervals: string;
    examples: string[];
    color: string;
    iconColor: string;
    mood: string;
  }[];
  commonProgressions: {
    name: string;
    description: string;
    example: string;
    genres: string[];
    songs: string[];
  }[];
  practiceExercises: {
    title: string;
    description: string;
    steps: string[];
  }[];
  harmonicPhilosophy: {
    title: string;
    description: string;
    dailyRoutine: {
      title: string;
      columns: {
        title: string;
        items: string[];
      }[];
    };
  };
}

export function getChordIndexData(): ChordIndexData {
  return chordIndexData as unknown as ChordIndexData;
}
