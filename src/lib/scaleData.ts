// TypeScript interfaces for scale data
export interface ScaleInfo {
  name: string;
  alternateName?: string;
  scaleType: string;
  noteCount: number;
  intervalPattern: string;
  character: string;
  mood: string[];
}

export interface ScaleTheory {
  intervalsFromRoot: string;
  scaleDegrees: string[];
  mode: string;
  relativeScale?: {
    name: string;
    relationship: string;
    intervalDistance: string;
  };
  parallelScale?: {
    name: string;
    differences: string[];
  };
}

export interface KeyExample {
  key: string;
  notes: string;
  keySignature?: string;
  accidentals?: string;
  commonUse?: string;
}

export interface FretboardPattern {
  patternNumber: number;
  position: string;
  description: string;
  fretDiagram?: string;
  alphaTex: string;
  applications: string[];
}

export interface CommonPosition {
  position: string;
  frets: string;
  difficulty: string;
  usage: string;
}

export interface GuitarFretboard {
  patterns: FretboardPattern[];
  commonPositions: CommonPosition[];
}

export interface DiatonicChord {
  degree: string;
  chord: string;
  quality: string;
  function: string;
  notes: string;
}

export interface CommonProgression {
  name?: string;
  chords: string[];
  romanNumerals: string;
  description: string;
  genre?: string;
  alphaTex?: string;
}

export interface HarmonicApplications {
  diatonicChords: DiatonicChord[];
  commonProgressions: CommonProgression[];
}

export interface GenreApplication {
  genre: string;
  usage: string;
  characteristics: string[];
  examples: string[];
}

export interface FamousSong {
  title: string;
  artist: string;
  key: string;
  genre?: string;
  usage?: string;
  difficulty?: string;
  learningValue?: string;
}

export interface PracticeExercise {
  name: string;
  type: string;
  difficulty: string;
  description: string;
  alphaTex?: string;
  tempo?: string;
  focus: string[];
  instructions: string[];
}

export interface RelatedScale {
  scale: string;
  relationship: string;
  differences?: string;
  usage?: string;
}

export interface PracticePhase {
  phase: string;
  duration: string;
  focus: string;
  exercises: string[];
}

export interface LearningPath {
  difficulty: string;
  prerequisites: string[];
  nextSteps: string[];
  practiceRoutine: PracticePhase[];
}

export interface ScaleMetadata {
  slug: string;
  tags: string[];
  category: string;
  subcategory: string;
  lastUpdated: string;
  sources: string[];
}

export interface ScaleData {
  scaleInfo: ScaleInfo;
  theory: ScaleTheory;
  keyExamples: KeyExample[];
  guitarFretboard: GuitarFretboard;
  harmonicApplications: HarmonicApplications;
  genreApplications: GenreApplication[];
  famousSongs: FamousSong[];
  practiceExercises: PracticeExercise[];
  relatedScales: RelatedScale[];
  learningPath?: LearningPath;
  metadata: ScaleMetadata;
}

// Cache for loaded scale data
const scaleCache: Map<string, ScaleData> = new Map();

/**
 * Get scale data by slug using dynamic import
 */
export async function getScaleData(slug: string): Promise<ScaleData | null> {
  try {
    // Check cache first
    if (scaleCache.has(slug)) {
      return scaleCache.get(slug)!;
    }

    // Use dynamic import to load JSON data
    const scaleData: ScaleData = await import(`@/data/scales/${slug}.json`).then(module => module.default);
    
    // Cache the data
    scaleCache.set(slug, scaleData);
    
    return scaleData;
  } catch (error) {
    console.error(`Error loading scale data for "${slug}":`, error);
    return null;
  }
}

/**
 * Synchronous version for when data is already available
 */
export function getScaleDataSync(slug: string): ScaleData | null {
  return scaleCache.get(slug) || null;
}

/**
 * Get all available scale slugs
 * This is a hardcoded list since we can't read the file system in browser
 */
export function getAllScaleSlugs(): string[] {
  return [
    'major',
    'minor',
    'blues',
    'dorian',
    'harmonic-minor',
    'major-pentatonic',
    'minor-pentatonic',
    'mixolydian'
  ];
}

/**
 * Get scales by category
 */
export async function getScalesByCategory(category: string): Promise<ScaleData[]> {
  const slugs = getAllScaleSlugs();
  const scales: ScaleData[] = [];

  for (const slug of slugs) {
    const scaleData = await getScaleData(slug);
    if (scaleData && scaleData.metadata.category === category) {
      scales.push(scaleData);
    }
  }

  return scales;
}

/**
 * Search scales by tags
 */
export async function getScalesByTag(tag: string): Promise<ScaleData[]> {
  const slugs = getAllScaleSlugs();
  const scales: ScaleData[] = [];

  for (const slug of slugs) {
    const scaleData = await getScaleData(slug);
    if (scaleData && scaleData.metadata.tags.includes(tag)) {
      scales.push(scaleData);
    }
  }

  return scales;
}

/**
 * Get featured scales (tagged as essential)
 */
export async function getFeaturedScales(): Promise<ScaleData[]> {
  return getScalesByTag('essential');
}

/**
 * Get scales by difficulty
 */
export async function getScalesByDifficulty(difficulty: string): Promise<ScaleData[]> {
  const slugs = getAllScaleSlugs();
  const scales: ScaleData[] = [];

  for (const slug of slugs) {
    const scaleData = await getScaleData(slug);
    if (scaleData && scaleData.learningPath && scaleData.learningPath.difficulty.toLowerCase().includes(difficulty.toLowerCase())) {
      scales.push(scaleData);
    }
  }

  return scales;
}