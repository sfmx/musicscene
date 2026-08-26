import progressionIndexData from '@/data/progressions/progression-index.json';
import iIvVData from '@/data/progressions/i-iv-v.json';
import iiViData from '@/data/progressions/ii-v-i.json';
import iVViIvData from '@/data/progressions/i-v-vi-iv.json';
import viIvIVData from '@/data/progressions/vi-iv-i-v.json';
import twelveBarBluesData from '@/data/progressions/12-bar-blues.json';
import circleOfFifthsData from '@/data/progressions/circle-of-fifths.json';
import iIvData from '@/data/progressions/i-iv.json';
import ivIData from '@/data/progressions/iv-i.json';
import iVData from '@/data/progressions/i-v.json';
import iBviiIvData from '@/data/progressions/i-bvii-iv.json';
import iViIiVData from '@/data/progressions/i-vi-ii-v.json';
import iViIvVData from '@/data/progressions/i-vi-iv-v.json';
import minorBluesData from '@/data/progressions/minor-blues.json';
import iBiiiBviiIvData from '@/data/progressions/i-biii-bvii-iv.json';
import iVBviiIvData from '@/data/progressions/i-v-bvii-iv.json';
import iiIvVData from '@/data/progressions/ii-iv-v.json';

// --- Interfaces ---

export interface ChordDiagramGroup {
  title: string;
  description: string;
  chords: {
    label: string;
    chord: string;
    subtitle?: string;
  }[];
  alphaTex?: string;
  alphaTexTitle?: string;
  practiceNotes?: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
}

export interface ApplicationSection {
  title: string;
  description: string;
  items: string[];
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
  icon: string;
  items: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface NotatedExercise {
  title: string;
  description: string;
  alphaTex: string;
  practiceNotes?: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail?: string;
}

export interface TheoryRelationship {
  title: string;
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

export interface ProgressionData {
  slug: string;
  progressionInfo: {
    name: string;
    pageTitle: string;
    subtitle: string;
    heroGradient: string;
    tags: string[];
  };
  theory: {
    propertiesTitle: string;
    properties: { label: string; value: string }[];
    exampleTitle: string;
    examples: { label: string; value: string }[];
    bulletColor: string;
  };
  guitarApplications: {
    chordDiagrams: ChordDiagramGroup[];
    advancedApplications: ApplicationSection[];
  };
  musicalExamples: {
    left: { title: string; examples: MusicalExample[] };
    right: { title: string; examples: MusicalExample[] };
  };
  practiceCategories: PracticeCategory[];
  notatedExercises: NotatedExercise[];
  scaleRelationships: {
    left: { title: string; sections: TheoryRelationship[] };
    right: { title: string; sections: TheoryRelationship[] };
  };
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
  navigation?: {
    prev?: { href: string; label: string };
    next?: { href: string; label: string };
  };
  gearRecommendations?: {
    title?: string;
    items: { category: string; product: string; reason: string }[];
  };
}

// --- Data loading ---

const progressionDatabase: Record<string, ProgressionData> = {
  'i-iv-v': iIvVData as unknown as ProgressionData,
  'ii-v-i': iiViData as unknown as ProgressionData,
  'i-v-vi-iv': iVViIvData as unknown as ProgressionData,
  'vi-iv-i-v': viIvIVData as unknown as ProgressionData,
  '12-bar-blues': twelveBarBluesData as unknown as ProgressionData,
  'circle-of-fifths': circleOfFifthsData as unknown as ProgressionData,
  'i-iv': iIvData as unknown as ProgressionData,
  'iv-i': ivIData as unknown as ProgressionData,
  'i-v': iVData as unknown as ProgressionData,
  'i-bvii-iv': iBviiIvData as unknown as ProgressionData,
  'i-vi-ii-v': iViIiVData as unknown as ProgressionData,
  'i-vi-iv-v': iViIvVData as unknown as ProgressionData,
  'minor-blues': minorBluesData as unknown as ProgressionData,
  'i-biii-bvii-iv': iBiiiBviiIvData as unknown as ProgressionData,
  'i-v-bvii-iv': iVBviiIvData as unknown as ProgressionData,
  'ii-iv-v': iiIvVData as unknown as ProgressionData,
};

export function getProgressionData(slug: string): ProgressionData | null {
  return progressionDatabase[slug] || null;
}

export function getAllProgressionSlugs(): string[] {
  return Object.keys(progressionDatabase);
}

// --- Index Page Data ---

export interface ProgressionIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroTitle: string;
  heroDescription: string;
  whatAreProgressions: {
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
  progressionCategories: {
    name: string;
    progressions: string[];
    description: string;
    color: string;
  }[];
  harmonicApplications: {
    title: string;
    description: string;
    icon: string;
    examples: string[];
  }[];
  progressionTypes: {
    name: string;
    icon: string;
    href: string;
    description: string;
    formula: string;
    functionLabel: string;
    color: string;
    iconColor: string;
  }[];
  romanNumerals: {
    description: string;
    sections: {
      title: string;
      colorBg: string;
      colorBorder: string;
      colorTitle: string;
      colorText: string;
      items: string[];
    }[];
  };
  exampleChords: {
    description: string;
    chords: {
      label: string;
      chord: string;
      subtitle: string;
    }[];
    exampleProgression: {
      title: string;
      alphaTex: string;
      description: string;
    };
  };
  practiceExercises: {
    title: string;
    icon: string;
    colorBg: string;
    colorBorder: string;
    colorTitle: string;
    colorText: string;
    items: string[];
  }[];
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
}

export function getProgressionIndexData(): ProgressionIndexData {
  return progressionIndexData as unknown as ProgressionIndexData;
}
