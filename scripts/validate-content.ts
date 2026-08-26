/**
 * Content Validation Pipeline.
 * Checks all JSON data files for structural correctness, tag consistency,
 * and cross-reference integrity.
 *
 * Usage:
 *   npx tsx scripts/validate-content.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { VALID_TAG_SLUGS, TAG_NORMALIZATION } from './lib/tag-taxonomy';

// ---- Types ----

interface ValidationIssue {
  file: string;
  level: 'error' | 'warning';
  message: string;
}

type Validator = (filePath: string, data: Record<string, unknown>, relPath: string) => ValidationIssue[];

// ---- Paths ----

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DATA = path.join(SRC, 'data');
const APP = path.join(SRC, 'app');

// ---- Utility Helpers ----

function getNestedValue(obj: Record<string, unknown>, dotPath: string): unknown {
  const parts = dotPath.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

function collectJsonFiles(dir: string, excludePatterns: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      files.push(...collectJsonFiles(path.join(dir, entry.name), excludePatterns));
    } else if (
      entry.name.endsWith('.json') &&
      !excludePatterns.some((p) => entry.name.includes(p))
    ) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function checkRequiredFields(
  data: Record<string, unknown>,
  fields: string[],
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const field of fields) {
    if (getNestedValue(data, field) === undefined) {
      issues.push({ file: relPath, level: 'error', message: `Missing required field: ${field}` });
    }
  }
  return issues;
}

function checkRequiredStrings(
  data: Record<string, unknown>,
  dotPaths: string[],
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const dp of dotPaths) {
    const val = getNestedValue(data, dp);
    if (val === undefined) {
      issues.push({ file: relPath, level: 'error', message: `Missing required string: ${dp}` });
    } else if (typeof val !== 'string' || val.trim() === '') {
      issues.push({ file: relPath, level: 'error', message: `Field "${dp}" must be a non-empty string` });
    }
  }
  return issues;
}

function checkNonEmptyArrayWarning(
  data: Record<string, unknown>,
  dotPaths: string[],
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const dp of dotPaths) {
    const val = getNestedValue(data, dp);
    if (Array.isArray(val) && val.length === 0) {
      issues.push({ file: relPath, level: 'warning', message: `Array "${dp}" is empty` });
    }
  }
  return issues;
}

function checkSlugMatchesFilename(
  data: Record<string, unknown>,
  slugField: string,
  filePath: string,
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const slug = getNestedValue(data, slugField);
  const expected = path.basename(filePath, '.json');
  if (typeof slug === 'string' && slug !== expected) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `Slug "${slug}" doesn't match filename "${expected}"`,
    });
  }
  return issues;
}

// ---- Tag Validation ----

/** Tags expected to be taxonomy-compliant (scales, songs). Warns for non-matching. */
function validateTaxonomyTags(
  tags: unknown[],
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const tag of tags) {
    if (typeof tag !== 'string') continue;
    const lower = tag.toLowerCase();
    if (!VALID_TAG_SLUGS.has(lower) && !(lower in TAG_NORMALIZATION) && !VALID_TAG_SLUGS.has(tag)) {
      issues.push({
        file: relPath,
        level: 'warning',
        message: `Tag "${tag}" is not in taxonomy and has no normalization mapping`,
      });
    }
  }
  return issues;
}

/** Tags that are descriptive (chords, intervals, modes, progressions). Warns for unmapped. */
function validateDescriptiveTags(
  tags: unknown[],
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  for (const tag of tags) {
    if (typeof tag !== 'string') continue;
    const lower = tag.toLowerCase();
    // These are descriptive tags — they get normalized. Warn if neither in taxonomy nor in normalization map.
    if (!VALID_TAG_SLUGS.has(lower) && !(lower in TAG_NORMALIZATION)) {
      issues.push({
        file: relPath,
        level: 'warning',
        message: `Tag "${tag}" has no normalization mapping (will be dropped by content index)`,
      });
    }
  }
  return issues;
}

// ---- Cross-Reference Validation ----

function validateJourneyLinks(
  data: Record<string, unknown>,
  dataDir: string,
  relPath: string,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const journey = data.journeySection as Record<string, unknown> | undefined;
  if (!journey || !Array.isArray(journey.links)) return issues;

  for (const link of journey.links) {
    if (typeof link !== 'object' || link === null) continue;
    const linkObj = link as Record<string, unknown>;

    // Slug-based references (chord, interval, mode, progression)
    if (typeof linkObj.slug === 'string') {
      const refFile = path.join(dataDir, `${linkObj.slug}.json`);
      if (!fs.existsSync(refFile)) {
        issues.push({
          file: relPath,
          level: 'warning',
          message: `Journey link references non-existent slug: "${linkObj.slug}"`,
        });
      }
    }

    // Href-based references (practice, gear, song-lesson)
    if (typeof linkObj.href === 'string') {
      const href = linkObj.href as string;
      // Only validate internal links
      if (href.startsWith('/')) {
        const pagePath = path.join(APP, href.replace(/^\//, '').replace(/\/$/, ''));
        if (!fs.existsSync(pagePath)) {
          issues.push({
            file: relPath,
            level: 'warning',
            message: `Journey link href "${href}" has no corresponding page directory`,
          });
        }
      }
    }
  }
  return issues;
}

// ---- Per-Type Validators ----

const VALID_DIFFICULTIES = new Set(['Beginner', 'Intermediate', 'Advanced', 'Expert']);
const VALID_LAYOUTS = new Set(['grid-2', 'grid-3', 'grid-4', 'list', 'numbered-steps', 'table']);

function validateChord(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'chordInfo', 'theory', 'construction', 'voicingGroups',
    'progressions', 'famousSongs', 'practiceExercises', 'advancedConcepts', 'journeySection',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'chordInfo.name', 'chordInfo.pageTitle', 'chordInfo.subtitle', 'chordInfo.colorScheme',
  ], relPath));

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Tag validation
  const tags = getNestedValue(data, 'chordInfo.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateDescriptiveTags(tags, relPath));
  }

  // Cross-reference
  issues.push(...validateJourneyLinks(data, path.dirname(filePath), relPath));

  // Non-empty warnings
  issues.push(...checkNonEmptyArrayWarning(data, ['voicingGroups', 'advancedConcepts.concepts'], relPath));

  return issues;
}

function validateScale(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'scaleInfo', 'theory', 'keyExamples', 'guitarFretboard',
    'harmonicApplications', 'genreApplications', 'famousSongs',
    'practiceExercises', 'relatedScales', 'metadata',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'scaleInfo.name', 'scaleInfo.character',
  ], relPath));

  // Slug check via metadata.slug
  const metadataSlug = getNestedValue(data, 'metadata.slug');
  const expected = path.basename(filePath, '.json');
  if (typeof metadataSlug === 'string' && metadataSlug !== expected) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `metadata.slug "${metadataSlug}" doesn't match filename "${expected}"`,
    });
  }

  // Tag validation
  const tags = getNestedValue(data, 'metadata.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateTaxonomyTags(tags, relPath));
  }

  // Non-empty warnings
  issues.push(...checkNonEmptyArrayWarning(data, [
    'keyExamples', 'genreApplications', 'famousSongs', 'practiceExercises',
  ], relPath));

  return issues;
}

function validateInterval(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'intervalInfo', 'theory', 'guitarApplications',
    'musicalExamples', 'practiceExercises', 'relatedIntervals', 'journeySection',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'intervalInfo.name', 'intervalInfo.pageTitle', 'intervalInfo.subtitle',
  ], relPath));

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Tag validation
  const tags = getNestedValue(data, 'intervalInfo.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateDescriptiveTags(tags, relPath));
  }

  // Cross-reference
  issues.push(...validateJourneyLinks(data, path.dirname(filePath), relPath));

  return issues;
}

function validateMode(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'modeInfo', 'theory', 'guitarApplications',
    'musicalExamples', 'practiceCategories', 'notatedExercises',
    'keyVariants', 'relatedScales', 'journeySection',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'modeInfo.name', 'modeInfo.pageTitle', 'modeInfo.subtitle',
  ], relPath));

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Tag validation
  const tags = getNestedValue(data, 'modeInfo.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateDescriptiveTags(tags, relPath));
  }

  // Cross-reference
  issues.push(...validateJourneyLinks(data, path.dirname(filePath), relPath));

  return issues;
}

function validateProgression(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'progressionInfo', 'theory', 'guitarApplications',
    'musicalExamples', 'practiceCategories', 'notatedExercises', 'journeySection',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'progressionInfo.name', 'progressionInfo.pageTitle', 'progressionInfo.subtitle',
  ], relPath));

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Tag validation
  const tags = getNestedValue(data, 'progressionInfo.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateDescriptiveTags(tags, relPath));
  }

  // Cross-reference
  issues.push(...validateJourneyLinks(data, path.dirname(filePath), relPath));

  return issues;
}

function validateSong(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'songInfo', 'difficulty', 'techniques', 'sections',
    'equipment', 'learningPath', 'practiceNotes',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'songInfo.title', 'songInfo.artist', 'songInfo.genre', 'songInfo.key',
  ], relPath));

  // Difficulty validation
  const overall = getNestedValue(data, 'difficulty.overall');
  if (typeof overall === 'string' && !VALID_DIFFICULTIES.has(overall)) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `Invalid difficulty.overall: "${overall}". Expected one of: ${[...VALID_DIFFICULTIES].join(', ')}`,
    });
  }

  // Section timestamp format
  const sections = data.sections;
  if (Array.isArray(sections)) {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as Record<string, unknown>;
      if (typeof section?.timeStamp === 'string') {
        // Allow flexible format: M:SS-M:SS or MM:SS-MM:SS
        if (!/^\d{1,2}:\d{2}-\d{1,2}:\d{2}$/.test(section.timeStamp)) {
          issues.push({
            file: relPath,
            level: 'warning',
            message: `sections[${i}].timeStamp "${section.timeStamp}" doesn't match expected format (M:SS-M:SS)`,
          });
        }
      }
    }
  }

  // Tag validation
  const tags = getNestedValue(data, 'metadata.tags');
  if (Array.isArray(tags)) {
    issues.push(...validateTaxonomyTags(tags, relPath));
  }

  // Non-empty warnings
  issues.push(...checkNonEmptyArrayWarning(data, ['techniques', 'sections'], relPath));

  // Related songs cross-reference
  const relatedSongs = data.relatedSongs as Record<string, unknown> | undefined;
  if (relatedSongs && Array.isArray(relatedSongs.similarTechniques)) {
    for (const related of relatedSongs.similarTechniques) {
      if (typeof related !== 'object' || related === null) continue;
      const rel = related as Record<string, unknown>;
      if (typeof rel.link === 'string') {
        const link = rel.link as string;
        const match = link.match(/\/lessons\/songs\/song-analysis\/([^/]+)/);
        if (match) {
          const refSlug = match[1];
          const refFile = path.join(DATA, 'songs', `${refSlug}.json`);
          if (!fs.existsSync(refFile)) {
            issues.push({
              file: relPath,
              level: 'warning',
              message: `Related song link references non-existent slug: "${refSlug}"`,
            });
          }
        }
      }
    }
  }

  return issues;
}

function validatePractice(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'category', 'pageInfo', 'guidelines', 'sections', 'tips',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'pageInfo.pageTitle', 'pageInfo.subtitle', 'pageInfo.heroGradient',
    'pageInfo.heroTitle', 'pageInfo.heroDescription',
  ], relPath));

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Category matches parent directory
  const category = data.category;
  const parentDir = path.basename(path.dirname(filePath));
  if (typeof category === 'string' && category !== parentDir) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `category "${category}" doesn't match parent directory "${parentDir}"`,
    });
  }

  // Non-empty warnings
  issues.push(...checkNonEmptyArrayWarning(data, ['sections'], relPath));

  // Cross-reference journey links
  const journey = data.journeySection as Record<string, unknown> | undefined;
  if (journey && Array.isArray(journey.links)) {
    for (const link of journey.links) {
      if (typeof link !== 'object' || link === null) continue;
      const linkObj = link as Record<string, unknown>;
      if (typeof linkObj.href === 'string') {
        const href = linkObj.href as string;
        if (href.startsWith('/')) {
          const pagePath = path.join(APP, href.replace(/^\//, '').replace(/\/$/, ''));
          if (!fs.existsSync(pagePath)) {
            issues.push({
              file: relPath,
              level: 'warning',
              message: `Journey link href "${href}" has no corresponding page directory`,
            });
          }
        }
      }
    }
  }

  return issues;
}

function validateGearLesson(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'category', 'pageTitle', 'subtitle', 'heroGradient',
    'backLink', 'introduction', 'sections',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'backLink.href', 'backLink.label',
  ], relPath));

  // introduction.text is rendered unconditionally but can be empty in practice
  const introText = getNestedValue(data, 'introduction.text');
  if (typeof introText === 'string' && introText.trim() === '') {
    issues.push({ file: relPath, level: 'warning', message: 'introduction.text is empty' });
  } else if (introText === undefined) {
    issues.push({ file: relPath, level: 'error', message: 'Missing required field: introduction.text' });
  }

  // Slug should follow category-slug pattern
  const slug = data.slug;
  const category = data.category;
  const filename = path.basename(filePath, '.json');
  if (typeof slug === 'string' && typeof category === 'string') {
    const expected = `${category}-${filename}`;
    if (slug !== expected) {
      issues.push({
        file: relPath,
        level: 'warning',
        message: `Slug "${slug}" doesn't match expected pattern "${expected}" (category-filename)`,
      });
    }
  }

  // Category matches parent directory
  const parentDir = path.basename(path.dirname(filePath));
  if (typeof category === 'string' && category !== parentDir) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `category "${category}" doesn't match parent directory "${parentDir}"`,
    });
  }

  // Sections validation
  validateSectionLayouts(data, relPath, issues);

  return issues;
}

function validateSongLesson(filePath: string, data: Record<string, unknown>, relPath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  issues.push(...checkRequiredFields(data, [
    'slug', 'category', 'pageTitle', 'subtitle', 'heroGradient',
    'backLink', 'introduction', 'sections',
  ], relPath));

  issues.push(...checkRequiredStrings(data, [
    'backLink.href', 'backLink.label',
  ], relPath));

  // introduction.text is rendered unconditionally but can be empty in practice
  const introText = getNestedValue(data, 'introduction.text');
  if (typeof introText === 'string' && introText.trim() === '') {
    issues.push({ file: relPath, level: 'warning', message: 'introduction.text is empty' });
  } else if (introText === undefined) {
    issues.push({ file: relPath, level: 'error', message: 'Missing required field: introduction.text' });
  }

  issues.push(...checkSlugMatchesFilename(data, 'slug', filePath, relPath));

  // Category matches parent directory (only for files in subcategory directories)
  const category = data.category;
  const parentDir = path.basename(path.dirname(filePath));
  const isInSubcategory = parentDir !== 'song-lessons';
  if (isInSubcategory && typeof category === 'string' && category !== parentDir) {
    issues.push({
      file: relPath,
      level: 'error',
      message: `category "${category}" doesn't match parent directory "${parentDir}"`,
    });
  }

  // Sections validation
  validateSectionLayouts(data, relPath, issues);

  return issues;
}

function validateSectionLayouts(
  data: Record<string, unknown>,
  relPath: string,
  issues: ValidationIssue[],
): void {
  const sections = data.sections;
  if (!Array.isArray(sections)) return;

  if (sections.length === 0) {
    issues.push({ file: relPath, level: 'warning', message: 'sections array is empty' });
    return;
  }

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i] as Record<string, unknown>;
    if (!section || typeof section !== 'object') continue;

    if (typeof section.title !== 'string' || section.title.trim() === '') {
      issues.push({
        file: relPath,
        level: 'error',
        message: `sections[${i}] missing required "title" field`,
      });
    }

    // layout is optional — components default to 'grid-2' when absent
    if (typeof section.layout === 'string' && !VALID_LAYOUTS.has(section.layout)) {
      issues.push({
        file: relPath,
        level: 'error',
        message: `sections[${i}] invalid layout: "${section.layout}". Valid: ${[...VALID_LAYOUTS].join(', ')}`,
      });
    } else if (section.layout === 'table') {
      // Table layout can have tableHeaders/tableRows at section level or nested in cards
      if (!Array.isArray(section.tableHeaders) && !Array.isArray(section.cards)) {
        issues.push({
          file: relPath,
          level: 'warning',
          message: `sections[${i}] with layout "table" has no "tableHeaders" or "cards" array`,
        });
      }
    }
  }
}

// ---- Content Type Registry ----

interface ContentTypeEntry {
  label: string;
  dataDir: string;
  excludePatterns: string[];
  validator: Validator;
}

const CONTENT_TYPES: ContentTypeEntry[] = [
  {
    label: 'Chords',
    dataDir: path.join(DATA, 'chords'),
    excludePatterns: ['index', 'chord-index'],
    validator: validateChord,
  },
  {
    label: 'Scales',
    dataDir: path.join(DATA, 'scales'),
    excludePatterns: ['index', 'scale-index'],
    validator: validateScale,
  },
  {
    label: 'Intervals',
    dataDir: path.join(DATA, 'intervals'),
    excludePatterns: ['index', 'interval-index'],
    validator: validateInterval,
  },
  {
    label: 'Modes',
    dataDir: path.join(DATA, 'modes'),
    excludePatterns: ['index', 'mode-index'],
    validator: validateMode,
  },
  {
    label: 'Progressions',
    dataDir: path.join(DATA, 'progressions'),
    excludePatterns: ['index', 'progression-index'],
    validator: validateProgression,
  },
  {
    label: 'Songs',
    dataDir: path.join(DATA, 'songs'),
    excludePatterns: ['_template', '_reference', 'index'],
    validator: validateSong,
  },
  {
    label: 'Practice',
    dataDir: path.join(DATA, 'practice'),
    excludePatterns: ['index'],
    validator: validatePractice,
  },
  {
    label: 'Gear Lessons',
    dataDir: path.join(DATA, 'gear-lessons'),
    excludePatterns: ['index'],
    validator: validateGearLesson,
  },
  {
    label: 'Song Lessons',
    dataDir: path.join(DATA, 'song-lessons'),
    excludePatterns: ['index'],
    validator: validateSongLesson,
  },
];

// ---- Main Runner ----

function main(): void {
  console.log('Validating all content types...\n');

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalFiles = 0;

  for (const entry of CONTENT_TYPES) {
    const files = collectJsonFiles(entry.dataDir, entry.excludePatterns);
    const allIssues: ValidationIssue[] = [];

    for (const filePath of files) {
      const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(raw) as Record<string, unknown>;
        allIssues.push(...entry.validator(filePath, data, relPath));
      } catch (err) {
        allIssues.push({
          file: relPath,
          level: 'error',
          message: `Failed to parse JSON: ${(err as Error).message}`,
        });
      }
    }

    const errors = allIssues.filter((i) => i.level === 'error');
    const warnings = allIssues.filter((i) => i.level === 'warning');
    totalErrors += errors.length;
    totalWarnings += warnings.length;
    totalFiles += files.length;

    if (allIssues.length === 0) {
      console.log(`  ${entry.label}: OK (${files.length} files)`);
    } else {
      const parts: string[] = [];
      if (errors.length > 0) parts.push(`${errors.length} error${errors.length > 1 ? 's' : ''}`);
      if (warnings.length > 0) parts.push(`${warnings.length} warning${warnings.length > 1 ? 's' : ''}`);
      console.log(`  ${entry.label}: ${parts.join(', ')} (${files.length} files)`);
      for (const issue of allIssues) {
        const prefix = issue.level === 'error' ? 'ERROR' : 'WARN';
        console.log(`    [${prefix}] ${issue.file}: ${issue.message}`);
      }
    }
  }

  console.log(`\nTotal: ${totalErrors} error${totalErrors !== 1 ? 's' : ''}, ${totalWarnings} warning${totalWarnings !== 1 ? 's' : ''} (${totalFiles} files checked)`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

main();
