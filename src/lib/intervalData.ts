import intervalIndexData from '@/data/intervals/interval-index.json';
import unisonData from '@/data/intervals/unison.json';
import minor2ndData from '@/data/intervals/minor-2nd.json';
import major2ndData from '@/data/intervals/major-2nd.json';
import minor3rdData from '@/data/intervals/minor-3rd.json';
import major3rdData from '@/data/intervals/major-3rd.json';
import perfect4thData from '@/data/intervals/perfect-4th.json';
import tritoneData from '@/data/intervals/tritone.json';
import perfect5thData from '@/data/intervals/perfect-5th.json';
import minor6thData from '@/data/intervals/minor-6th.json';
import major6thData from '@/data/intervals/major-6th.json';
import minor7thData from '@/data/intervals/minor-7th.json';
import major7thData from '@/data/intervals/major-7th.json';
import octaveData from '@/data/intervals/octave.json';

// --- Interfaces ---

export interface IntervalTheoryItem {
  label: string;
  value: string;
}

export interface GuitarExample {
  title: string;
  subtitle: string;
  chord1: string;
  chord1Label: string;
  chord2: string;
  chord2Label: string;
  alphaTex: string;
  alphaTexTitle: string;
  description: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
}

export interface ChordConstruction {
  title: string;
  chord: string;
  chordLabel: string;
  alphaTex: string;
  alphaTexTitle: string;
  alphaTexDescription: string;
  bullets: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
}

export interface FretboardPattern {
  title: string;
  alphaTex: string;
  alphaTexTitle: string;
  alphaTexDescription: string;
  bullets: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface MusicalExample {
  title: string;
  description: string;
  detail: string;
}

export interface PracticeCategory {
  title: string;
  items: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface TheoreticalItem {
  title: string;
  description: string;
}

export interface RelatedInterval {
  title: string;
  description: string;
  detail: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
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

export interface IntervalData {
  slug: string;
  intervalInfo: {
    name: string;
    pageTitle: string;
    subtitle: string;
    colorScheme: string;
    heroGradient: string;
    tags: string[];
  };
  theory: {
    propertiesTitle: string;
    properties: IntervalTheoryItem[];
    examplesTitle: string;
    examples: IntervalTheoryItem[];
  };
  guitarApplications: {
    intervalExamples: {
      title: string;
      description: string;
      examples: GuitarExample[];
    };
    chordConstructions: {
      title: string;
      items: ChordConstruction[];
    };
    fretboardPatterns: FretboardPattern[];
  };
  musicalExamples: {
    classical: MusicalExample[];
    popular: MusicalExample[];
  };
  practiceExercises: PracticeCategory[];
  theoreticalContext: {
    harmonicFunction: TheoreticalItem[];
    historicalDevelopment: TheoreticalItem[];
  };
  relatedIntervals: RelatedInterval[];
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
}

// --- Data loading ---

const intervalDatabase: Record<string, IntervalData> = {
  'unison': unisonData as unknown as IntervalData,
  'minor-2nd': minor2ndData as unknown as IntervalData,
  'major-2nd': major2ndData as unknown as IntervalData,
  'minor-3rd': minor3rdData as unknown as IntervalData,
  'major-3rd': major3rdData as unknown as IntervalData,
  'perfect-4th': perfect4thData as unknown as IntervalData,
  'tritone': tritoneData as unknown as IntervalData,
  'perfect-5th': perfect5thData as unknown as IntervalData,
  'minor-6th': minor6thData as unknown as IntervalData,
  'major-6th': major6thData as unknown as IntervalData,
  'minor-7th': minor7thData as unknown as IntervalData,
  'major-7th': major7thData as unknown as IntervalData,
  'octave': octaveData as unknown as IntervalData,
};

export function getIntervalData(slug: string): IntervalData | null {
  return intervalDatabase[slug] || null;
}

export function getAllIntervalSlugs(): string[] {
  return Object.keys(intervalDatabase);
}

// --- Index Page Data ---

export interface IntervalIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroTitle: string;
  heroDescription: string;
  whatAreIntervals: {
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
  intervalCategories: {
    name: string;
    intervals: string[];
    description: string;
    color: string;
  }[];
  theoryFundamentals: {
    title: string;
    measuring: {
      title: string;
      items: { title: string; description: string; colorBg: string }[];
    };
    consonance: {
      title: string;
      items: {
        title: string;
        description: string;
        colorBg: string;
        borderColor: string;
        colorTitle: string;
        colorText: string;
      }[];
    };
  };
  intervalTypes: {
    name: string;
    icon: string;
    href: string;
    description: string;
    semitones: number;
    quality: string;
    color: string;
    iconColor: string;
    consonance: string;
  }[];
  musicalApplications: {
    title: string;
    description: string;
    icon: string;
    examples: string[];
  }[];
  practiceExercises: {
    title: string;
    icon: string;
    colorBg: string;
    borderColor: string;
    colorTitle: string;
    colorText: string;
    items: string[];
  }[];
  progressions: {
    title: string;
    chordConstruction: {
      title: string;
      items: { title: string; formula: string; example: string }[];
    };
    melodicMovement: {
      title: string;
      items: { title: string; description: string; detail: string }[];
    };
  };
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
}

export function getIntervalIndexData(): IntervalIndexData {
  return intervalIndexData as unknown as IntervalIndexData;
}
