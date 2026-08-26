/**
 * CLI Content Generator.
 * Scaffolds new JSON data files and page.tsx files for any content type.
 *
 * Usage:
 *   npx tsx scripts/create-content.ts --type chord --slug dominant-seventh --title "Dominant Seventh"
 *   npx tsx scripts/create-content.ts --type practice --category technique --slug economy-picking --title "Economy Picking"
 *   npx tsx scripts/create-content.ts --type gear --category effects --slug phaser --title "Phaser Pedals"
 */

import * as fs from 'fs';
import * as path from 'path';

// ---- Types ----

type ContentType =
  | 'chord' | 'scale' | 'interval' | 'mode' | 'progression'
  | 'song' | 'practice' | 'gear' | 'song-lesson';

interface ContentTypeConfig {
  dataDir: string;                    // relative to src/data/ ({category} is a placeholder)
  pageDir: string;                    // relative to src/app/ ({category} is a placeholder)
  templateImportPath: string;         // import path from @/components/
  templateName: string;               // component name
  seoFn: string;                      // function name from @/lib/seo
  seoAsync: boolean;                  // whether metadata is async (only scale)
  slugProp: string;                   // JSX prop name for the slug
  hasDisplayName: boolean;            // whether template uses displayName prop
  needsCategory: boolean;             // whether --category is required
  validCategories: string[];          // valid categories if needsCategory
  dataKeyFormat: 'slug' | 'category-slug'; // how dataKey is constructed
  loaderFile: string;                 // lib loader filename
  mapVarName: string;                 // variable name of the data map in loader
  dataTypeName: string;               // TypeScript interface name used in cast
  skeleton: (slug: string, title: string, category?: string) => Record<string, unknown>;
}

// ---- Paths ----

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

// ---- Skeleton Generators ----

function chordSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    slug,
    chordInfo: {
      name: title,
      pageTitle: `${title} Theory`,
      subtitle: `TODO: Write subtitle for ${title}`,
      colorScheme: 'blue',
      tags: [],
    },
    theory: {
      fundamentalsTitle: `What Are ${title} Chords?`,
      fundamentals: [],
      applicationsTitle: 'Musical Applications',
      applications: [],
    },
    construction: { title: `Understanding ${title} Construction`, boxes: [] },
    voicingGroups: [],
    progressions: {
      title: 'Common Progressions',
      items: [],
      practiceTips: { techniqueItems: [], applicationItems: [] },
    },
    famousSongs: { title: 'Famous Songs', categories: [] },
    practiceExercises: { title: 'Practice Exercises', tipTitle: '', tipDescription: '', exercises: [] },
    advancedConcepts: { title: 'Advanced Concepts', concepts: [] },
    journeySection: { title: 'Continue Your Chord Journey', description: '', links: [] },
  };
}

function scaleSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    scaleInfo: {
      name: title,
      scaleType: 'TODO',
      noteCount: 7,
      intervalPattern: 'TODO',
      character: `TODO: Character of ${title}`,
      mood: [],
    },
    theory: {
      intervalsFromRoot: '',
      scaleDegrees: [],
      mode: '',
      relativeScale: { name: '', relationship: '', intervalDistance: '' },
      parallelScale: { name: '', differences: [] },
    },
    keyExamples: [],
    guitarFretboard: { patterns: [], commonPositions: [] },
    harmonicApplications: { diatonicChords: [], commonProgressions: [] },
    genreApplications: [],
    famousSongs: [],
    practiceExercises: [],
    relatedScales: [],
    learningPath: {
      difficulty: 'Intermediate',
      prerequisites: [],
      nextSteps: [],
      practiceRoutine: [],
    },
    metadata: {
      slug,
      tags: [],
      category: 'scales',
      subcategory: '',
      lastUpdated: new Date().toISOString().split('T')[0],
      sources: [],
    },
  };
}

function intervalSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    slug,
    intervalInfo: {
      name: title,
      pageTitle: `${title} Interval`,
      subtitle: `TODO: Write subtitle for ${title}`,
      colorScheme: 'blue',
      heroGradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      tags: [],
    },
    theory: {
      fundamentalsTitle: `Understanding the ${title}`,
      fundamentals: [],
      applicationsTitle: 'Musical Applications',
      applications: [],
    },
    guitarApplications: { title: 'Guitar Applications', patterns: [] },
    musicalExamples: { title: 'Musical Examples', categories: [] },
    practiceExercises: { title: 'Practice Exercises', exercises: [] },
    theoreticalContext: { title: 'Theoretical Context', concepts: [] },
    relatedIntervals: { title: 'Related Intervals', intervals: [] },
    journeySection: { title: 'Continue Your Interval Journey', description: '', links: [] },
  };
}

function modeSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    slug,
    modeInfo: {
      name: title,
      pageTitle: `${title} Mode`,
      subtitle: `TODO: Write subtitle for ${title}`,
      heroGradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      tags: [],
    },
    theory: {
      fundamentalsTitle: `Understanding ${title}`,
      fundamentals: [],
      applicationsTitle: 'Musical Applications',
      applications: [],
    },
    guitarApplications: { title: 'Guitar Applications', patterns: [] },
    musicalExamples: { title: 'Musical Examples', categories: [] },
    practiceCategories: [],
    notatedExercises: { title: 'Notated Exercises', exercises: [] },
    keyVariants: { title: 'Key Variants', keys: [] },
    relatedScales: { title: 'Related Scales', scales: [] },
    journeySection: { title: 'Continue Your Mode Journey', description: '', links: [] },
  };
}

function progressionSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    slug,
    progressionInfo: {
      name: title,
      pageTitle: `${title} Progression`,
      subtitle: `TODO: Write subtitle for ${title}`,
      heroGradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      tags: [],
    },
    theory: {
      fundamentalsTitle: `Understanding the ${title}`,
      fundamentals: [],
      applicationsTitle: 'Musical Applications',
      applications: [],
    },
    guitarApplications: { title: 'Guitar Applications', patterns: [], chordDiagramGroups: [] },
    musicalExamples: { title: 'Musical Examples', categories: [] },
    practiceCategories: [],
    notatedExercises: { title: 'Notated Exercises', exercises: [] },
    journeySection: { title: 'Continue Your Progression Journey', description: '', links: [] },
  };
}

function songSkeleton(slug: string, title: string): Record<string, unknown> {
  return {
    songInfo: {
      title,
      artist: 'TODO',
      album: 'TODO',
      released: 'TODO',
      genre: 'TODO',
      tempo: 'TODO BPM',
      duration: 'TODO',
      key: 'TODO',
      tuning: 'Standard (E-A-D-G-B-E)',
    },
    metadata: {
      popularity: 50,
      dateAdded: new Date().toISOString().split('T')[0],
      featured: false,
      decade: 'TODO',
      iconicRiff: false,
      learningValue: 'MEDIUM',
      tags: [],
    },
    difficulty: {
      overall: 'Intermediate',
      rhythmGuitar: 'Intermediate',
      leadGuitar: 'Intermediate',
      bass: 'Intermediate',
      drums: 'Intermediate',
    },
    techniques: [],
    sections: [],
    equipment: {
      guitar: { recommended: 'TODO', alternatives: [], pickup: 'TODO' },
      amp: {
        recommended: 'TODO',
        alternatives: [],
        settings: { gain: '5/10', treble: '5/10', middle: '5/10', bass: '5/10', presence: '5/10' },
      },
      effects: { distortion: 'TODO', reverb: 'TODO', other: 'TODO' },
    },
    learningPath: {
      beginner: { title: 'Getting Started', skills: [], timeEstimate: 'TODO' },
      intermediate: { title: 'Building Skills', skills: [], timeEstimate: 'TODO' },
      advanced: { title: 'Mastery Goals', skills: [], timeEstimate: 'TODO' },
    },
    relatedSongs: { similarTechniques: [] },
    practiceNotes: {
      commonMistakes: ['TODO'],
      practiceRoutine: ['TODO'],
      metronomeWork: ['TODO'],
    },
  };
}

function practiceSkeleton(slug: string, title: string, category?: string): Record<string, unknown> {
  return {
    slug,
    category: category!,
    pageInfo: {
      pageTitle: title,
      subtitle: `TODO: Write subtitle for ${title}`,
      heroGradient: 'bg-gradient-to-br from-gray-50 to-gray-100',
      heroTitle: `${title} Exercises`,
      heroDescription: `TODO: Write description for ${title}`,
    },
    guidelines: { title: `${title} Practice Guidelines`, columns: [] },
    sections: [],
    tips: { title: 'Practice Tips', items: [] },
    journeySection: {
      title: 'Continue Your Journey',
      description: '',
      gradientFrom: 'from-gray-100',
      gradientTo: 'to-gray-200',
      borderColor: 'border-gray-200',
      links: [],
    },
  };
}

function gearSkeleton(slug: string, title: string, category?: string): Record<string, unknown> {
  const cat = category!;
  const capitalCat = cat.charAt(0).toUpperCase() + cat.slice(1);
  return {
    slug: `${cat}-${slug}`,
    category: cat,
    pageTitle: title,
    subtitle: `TODO: Write subtitle for ${title}`,
    heroGradient: 'bg-gradient-to-r from-gray-50 to-gray-100',
    backLink: { href: `/lessons/gear/${cat}`, label: `Back to ${capitalCat}` },
    introduction: { text: `TODO: Introduction for ${title}` },
    sections: [],
  };
}

function songLessonSkeleton(slug: string, title: string, category?: string): Record<string, unknown> {
  const cat = category!;
  const capitalCat = cat.charAt(0).toUpperCase() + cat.slice(1);
  return {
    slug,
    category: cat,
    pageTitle: title,
    subtitle: `TODO: Write subtitle for ${title}`,
    heroGradient: 'bg-gradient-to-r from-gray-50 to-gray-100',
    backLink: { href: `/lessons/songs/${cat}`, label: `Back to ${capitalCat}` },
    introduction: { text: `TODO: Introduction for ${title}` },
    sections: [],
  };
}

// ---- Content Type Config ----

const CONTENT_TYPE_CONFIG: Record<ContentType, ContentTypeConfig> = {
  chord: {
    dataDir: 'chords',
    pageDir: 'lessons/theory/chords',
    templateImportPath: 'ChordAnalysis/ChordAnalysisPageTemplate',
    templateName: 'ChordAnalysisPageTemplate',
    seoFn: 'getChordMetadata',
    seoAsync: false,
    slugProp: 'chordSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'chordData.ts',
    mapVarName: 'chordDatabase',
    dataTypeName: 'ChordData',
    skeleton: chordSkeleton,
  },
  scale: {
    dataDir: 'scales',
    pageDir: 'lessons/theory/scales',
    templateImportPath: 'ScaleAnalysis/ScaleAnalysisPageTemplate',
    templateName: 'ScaleAnalysisPageTemplate',
    seoFn: 'getScaleMetadata',
    seoAsync: true,
    slugProp: 'scaleSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'scaleData.ts',
    mapVarName: 'scaleCache',
    dataTypeName: 'ScaleData',
    skeleton: scaleSkeleton,
  },
  interval: {
    dataDir: 'intervals',
    pageDir: 'lessons/theory/intervals',
    templateImportPath: 'IntervalAnalysis/IntervalAnalysisPageTemplate',
    templateName: 'IntervalAnalysisPageTemplate',
    seoFn: 'getIntervalMetadata',
    seoAsync: false,
    slugProp: 'intervalSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'intervalData.ts',
    mapVarName: 'intervalDatabase',
    dataTypeName: 'IntervalData',
    skeleton: intervalSkeleton,
  },
  mode: {
    dataDir: 'modes',
    pageDir: 'lessons/theory/modes',
    templateImportPath: 'ModeAnalysis/ModeAnalysisPageTemplate',
    templateName: 'ModeAnalysisPageTemplate',
    seoFn: 'getModeMetadata',
    seoAsync: false,
    slugProp: 'modeSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'modeData.ts',
    mapVarName: 'modeDatabase',
    dataTypeName: 'ModeData',
    skeleton: modeSkeleton,
  },
  progression: {
    dataDir: 'progressions',
    pageDir: 'lessons/theory/progressions',
    templateImportPath: 'ProgressionAnalysis/ProgressionAnalysisPageTemplate',
    templateName: 'ProgressionAnalysisPageTemplate',
    seoFn: 'getProgressionMetadata',
    seoAsync: false,
    slugProp: 'progressionSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'progressionData.ts',
    mapVarName: 'progressionDatabase',
    dataTypeName: 'ProgressionData',
    skeleton: progressionSkeleton,
  },
  song: {
    dataDir: 'songs',
    pageDir: 'lessons/songs/song-analysis',
    templateImportPath: 'SongAnalysis/SongAnalysisPageTemplate',
    templateName: 'SongAnalysisPageTemplate',
    seoFn: 'getSongAnalysisMetadata',
    seoAsync: false,
    slugProp: 'songSlug',
    hasDisplayName: true,
    needsCategory: false,
    validCategories: [],
    dataKeyFormat: 'slug',
    loaderFile: 'songData.ts',
    mapVarName: 'songDatabase',
    dataTypeName: 'SongData',
    skeleton: songSkeleton,
  },
  practice: {
    dataDir: 'practice/{category}',
    pageDir: 'lessons/practice/{category}',
    templateImportPath: 'PracticeAnalysis/PracticeDetailPageTemplate',
    templateName: 'PracticeDetailPageTemplate',
    seoFn: 'getPracticeMetadata',
    seoAsync: false,
    slugProp: 'practiceSlug',
    hasDisplayName: true,
    needsCategory: true,
    validCategories: ['warmups', 'technique', 'improv'],
    dataKeyFormat: 'slug',
    loaderFile: 'practiceData.ts',
    mapVarName: 'practiceDataMap',
    dataTypeName: 'PracticeDetailData',
    skeleton: practiceSkeleton,
  },
  gear: {
    dataDir: 'gear-lessons/{category}',
    pageDir: 'lessons/gear/{category}',
    templateImportPath: 'GearLessons/GearLessonDetailPageTemplate',
    templateName: 'GearLessonDetailPageTemplate',
    seoFn: 'getGearLessonMetadata',
    seoAsync: false,
    slugProp: 'dataKey',
    hasDisplayName: false,
    needsCategory: true,
    validCategories: ['guitars', 'amps', 'effects', 'recording', 'accessories'],
    dataKeyFormat: 'category-slug',
    loaderFile: 'gearLessonData.ts',
    mapVarName: 'detailDataMap',
    dataTypeName: 'GearDetailData',
    skeleton: gearSkeleton,
  },
  'song-lesson': {
    dataDir: 'song-lessons/{category}',
    pageDir: 'lessons/songs/{category}',
    templateImportPath: 'SongLessons/SongLessonDetailPageTemplate',
    templateName: 'SongLessonDetailPageTemplate',
    seoFn: 'getSongLessonMetadata',
    seoAsync: false,
    slugProp: 'dataKey',
    hasDisplayName: false,
    needsCategory: true,
    validCategories: ['breakdowns', 'chords', 'effects', 'lead', 'rhythm', 'riffs', 'structure', 'techniques'],
    dataKeyFormat: 'category-slug',
    loaderFile: 'songLessonData.ts',
    mapVarName: 'detailDataMap',
    dataTypeName: 'SongLessonDetailData',
    skeleton: songLessonSkeleton,
  },
};

// ---- Helpers ----

function slugToPascalCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function slugToCamelCase(slug: string): string {
  const parts = slug.split('-');
  return parts[0] + parts.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function resolveDir(template: string, category?: string): string {
  return category ? template.replace('{category}', category) : template;
}

function buildUrl(config: ContentTypeConfig, slug: string, category?: string): string {
  const pageDir = resolveDir(config.pageDir, category);
  return `/${pageDir}/${slug}/`;
}

// ---- Argument Parsing ----

function parseArgs(): { type: ContentType; slug: string; title: string; category?: string } {
  const args = process.argv.slice(2);
  const map: Record<string, string> = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1];
      if (!value || value.startsWith('--')) {
        console.error(`ERROR: Missing value for --${key}`);
        process.exit(1);
      }
      map[key] = value;
      i++;
    }
  }

  // Required args
  if (!map.type) {
    console.error('ERROR: --type is required');
    printUsage();
    process.exit(1);
  }
  if (!map.slug) {
    console.error('ERROR: --slug is required');
    printUsage();
    process.exit(1);
  }
  if (!map.title) {
    console.error('ERROR: --title is required');
    printUsage();
    process.exit(1);
  }

  const type = map.type as ContentType;
  if (!CONTENT_TYPE_CONFIG[type]) {
    console.error(`ERROR: Invalid type "${map.type}". Valid types: ${Object.keys(CONTENT_TYPE_CONFIG).join(', ')}`);
    process.exit(1);
  }

  // Validate slug format
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(map.slug)) {
    console.error(`ERROR: Invalid slug "${map.slug}". Must be lowercase alphanumeric with hyphens (e.g., "dominant-seventh")`);
    process.exit(1);
  }

  const config = CONTENT_TYPE_CONFIG[type];

  // Validate category
  if (config.needsCategory) {
    if (!map.category) {
      console.error(`ERROR: --category is required for type "${type}". Valid categories: ${config.validCategories.join(', ')}`);
      process.exit(1);
    }
    if (!config.validCategories.includes(map.category)) {
      console.error(`ERROR: Invalid category "${map.category}" for type "${type}". Valid: ${config.validCategories.join(', ')}`);
      process.exit(1);
    }
  }

  return {
    type,
    slug: map.slug,
    title: map.title,
    category: map.category,
  };
}

function printUsage(): void {
  console.log(`
Usage: npx tsx scripts/create-content.ts --type <type> --slug <slug> --title <title> [--category <category>]

Types: ${Object.keys(CONTENT_TYPE_CONFIG).join(', ')}

Examples:
  npx tsx scripts/create-content.ts --type chord --slug dominant-seventh --title "Dominant Seventh"
  npx tsx scripts/create-content.ts --type practice --category technique --slug economy-picking --title "Economy Picking"
  npx tsx scripts/create-content.ts --type gear --category effects --slug phaser --title "Phaser Pedals"
`);
}

// ---- Validation ----

function validateSlugAvailable(config: ContentTypeConfig, slug: string, category?: string): void {
  const dataDir = path.join(SRC, 'data', resolveDir(config.dataDir, category));
  const jsonPath = path.join(dataDir, `${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    console.error(`ERROR: JSON file already exists: ${path.relative(ROOT, jsonPath)}`);
    process.exit(1);
  }

  const pageBase = path.join(SRC, 'app', resolveDir(config.pageDir, category));
  const pageDir = path.join(pageBase, slug);
  if (fs.existsSync(pageDir)) {
    console.error(`ERROR: Page directory already exists: ${path.relative(ROOT, pageDir)}`);
    process.exit(1);
  }
}

// ---- Page.tsx Generator ----

function generatePageContent(
  config: ContentTypeConfig,
  slug: string,
  title: string,
  category?: string,
): string {
  const dataKey = config.dataKeyFormat === 'category-slug' ? `${category}-${slug}` : slug;
  const fnName = slugToPascalCase(slug) + 'Page';

  const lines: string[] = [];

  if (config.seoAsync) {
    lines.push(`import type { Metadata } from 'next';`);
    lines.push(`import { ${config.seoFn} } from '@/lib/seo';`);
  } else {
    lines.push(`import { ${config.seoFn} } from '@/lib/seo';`);
  }

  lines.push(`import ${config.templateName} from '@/components/${config.templateImportPath}';`);
  lines.push('');

  if (config.seoAsync) {
    lines.push(`export async function generateMetadata(): Promise<Metadata> {`);
    lines.push(`  return ${config.seoFn}('${dataKey}');`);
    lines.push(`}`);
  } else {
    lines.push(`export const metadata = ${config.seoFn}('${dataKey}');`);
  }

  lines.push('');
  lines.push(`export default function ${fnName}() {`);

  if (config.hasDisplayName) {
    lines.push(`  return <${config.templateName} ${config.slugProp}="${dataKey}" displayName="${title}" />;`);
  } else {
    lines.push(`  return <${config.templateName} ${config.slugProp}="${dataKey}" />;`);
  }

  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

// ---- Post-Creation Instructions ----

function printInstructions(
  config: ContentTypeConfig,
  slug: string,
  title: string,
  jsonPath: string,
  pagePath: string,
  category?: string,
): void {
  const dataKey = config.dataKeyFormat === 'category-slug' ? `${category}-${slug}` : slug;
  const importVarName = slugToCamelCase(dataKey.replace(/-/g, '-')) + 'Data';
  const resolvedDataDir = resolveDir(config.dataDir, category);

  console.log('\nCreated:');
  console.log(`  ${path.relative(ROOT, jsonPath)}`);
  console.log(`  ${path.relative(ROOT, pagePath)}`);

  console.log('\nManual steps:');

  if (config.loaderFile === 'scaleData.ts') {
    // Scale uses dynamic imports and a hardcoded slug list
    console.log(`  1. Add '${slug}' to the getAllScaleSlugs() return array in src/lib/scaleData.ts`);
    console.log(`  2. Fill in TODO placeholders in the JSON file`);
  } else {
    const varName = slugToCamelCase(dataKey) + 'Data';
    console.log(`  1. Add import to src/lib/${config.loaderFile}:`);
    console.log(`     import ${varName} from '@/data/${resolvedDataDir}/${slug}.json';`);
    console.log('');
    console.log(`  2. Add to ${config.mapVarName} in src/lib/${config.loaderFile}:`);
    console.log(`     '${dataKey}': ${varName} as unknown as ${config.dataTypeName},`);
    console.log('');
    console.log(`  3. Fill in TODO placeholders in the JSON file`);
  }

  console.log('');
  console.log(`  ${config.loaderFile === 'scaleData.ts' ? '3' : '4'}. Run: npm run content:index`);
  console.log('');
  console.log(`  ${config.loaderFile === 'scaleData.ts' ? '4' : '5'}. Test: http://localhost:3333${buildUrl(config, slug, category)}`);
  console.log('');
}

// ---- Main ----

function main(): void {
  const { type, slug, title, category } = parseArgs();
  const config = CONTENT_TYPE_CONFIG[type];

  console.log(`Creating ${type} content: "${title}" (${slug})${category ? ` in ${category}` : ''}...`);

  // Validate
  validateSlugAvailable(config, slug, category);

  // Generate JSON skeleton
  const dataDir = path.join(SRC, 'data', resolveDir(config.dataDir, category));
  const jsonPath = path.join(dataDir, `${slug}.json`);

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const skeletonData = config.skeleton(slug, title, category);
  fs.writeFileSync(jsonPath, JSON.stringify(skeletonData, null, 2) + '\n', 'utf-8');

  // Generate page.tsx
  const pageBase = path.join(SRC, 'app', resolveDir(config.pageDir, category));
  const pageDir = path.join(pageBase, slug);
  const pagePath = path.join(pageDir, 'page.tsx');

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const pageContent = generatePageContent(config, slug, title, category);
  fs.writeFileSync(pagePath, pageContent, 'utf-8');

  // Print instructions
  printInstructions(config, slug, title, jsonPath, pagePath, category);
}

main();
