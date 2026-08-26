/**
 * One-time script to add SEO metadata exports to all detail page.tsx files.
 *
 * Usage: npx tsx scripts/add-seo-metadata.ts
 *
 * What it does:
 * 1. Scans all page.tsx files under src/app/lessons/
 * 2. Detects which template component is used (to determine content type)
 * 3. Extracts the slug/dataKey prop value
 * 4. Adds the appropriate metadata import + export
 * 5. Removes "use client" if present (templates already declare it)
 * 6. Writes the file back
 */

import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = path.resolve(__dirname, '..', 'src', 'app');

// Template → metadata mapping
const TEMPLATE_MAP: Record<string, {
  seoFn: string;
  propName: string;   // the JSX prop that holds the slug/key
  isAsync: boolean;    // whether the seo function is async
}> = {
  'ChordAnalysisPageTemplate': {
    seoFn: 'getChordMetadata',
    propName: 'chordSlug',
    isAsync: false,
  },
  'ScaleAnalysisPageTemplate': {
    seoFn: 'getScaleMetadata',
    propName: 'scaleSlug',
    isAsync: true,
  },
  'IntervalAnalysisPageTemplate': {
    seoFn: 'getIntervalMetadata',
    propName: 'intervalSlug',
    isAsync: false,
  },
  'ModeAnalysisPageTemplate': {
    seoFn: 'getModeMetadata',
    propName: 'modeSlug',
    isAsync: false,
  },
  'ProgressionAnalysisPageTemplate': {
    seoFn: 'getProgressionMetadata',
    propName: 'progressionSlug',
    isAsync: false,
  },
  'SongAnalysisPageTemplate': {
    seoFn: 'getSongAnalysisMetadata',
    propName: 'songSlug',
    isAsync: false,
  },
  'PracticeDetailPageTemplate': {
    seoFn: 'getPracticeMetadata',
    propName: 'practiceSlug',
    isAsync: false,
  },
  'GearLessonDetailPageTemplate': {
    seoFn: 'getGearLessonMetadata',
    propName: 'dataKey',
    isAsync: false,
  },
  'SongLessonDetailPageTemplate': {
    seoFn: 'getSongLessonMetadata',
    propName: 'dataKey',
    isAsync: false,
  },
};

interface PageInfo {
  filePath: string;
  templateName: string;
  slugValue: string;
  seoFn: string;
  isAsync: boolean;
}

function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
}

function analyzeFile(filePath: string): PageInfo | null {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find which template is imported
  let matchedTemplate: string | null = null;
  for (const templateName of Object.keys(TEMPLATE_MAP)) {
    if (content.includes(templateName)) {
      matchedTemplate = templateName;
      break;
    }
  }

  if (!matchedTemplate) return null;

  const config = TEMPLATE_MAP[matchedTemplate];

  // Extract the slug/key value from JSX props
  // Patterns like: propName="value" or propName={'value'} or propName="value"
  const propRegex = new RegExp(`${config.propName}=["'{]?"?([^"'}>]+)["'}]?`);
  const propMatch = content.match(propRegex);
  if (!propMatch) {
    console.warn(`  WARNING: Could not extract ${config.propName} from ${filePath}`);
    return null;
  }

  const slugValue = propMatch[1].trim().replace(/["']/g, '');

  return {
    filePath,
    templateName: matchedTemplate,
    slugValue,
    seoFn: config.seoFn,
    isAsync: config.isAsync,
  };
}

function transformFile(info: PageInfo): void {
  let content = fs.readFileSync(info.filePath, 'utf-8');

  // Skip if already has metadata export
  if (content.includes('export const metadata') || content.includes('export async function generateMetadata')) {
    console.log(`  SKIP (already has metadata): ${info.filePath}`);
    return;
  }

  // 1. Remove "use client" directive
  content = content.replace(/^"use client";\s*\n?/m, '');
  content = content.replace(/^'use client';\s*\n?/m, '');

  // 2. Remove unnecessary React import (not needed in Next.js 17+ / React 19)
  content = content.replace(/^import React from ["']react["'];\s*\n?/m, '');

  // 3. Add metadata import at the top
  if (info.isAsync) {
    // For async metadata (scales), use generateMetadata
    const metaImport = `import type { Metadata } from 'next';\nimport { ${info.seoFn} } from '@/lib/seo';\n`;
    const metaExport = `\nexport async function generateMetadata(): Promise<Metadata> {\n  return ${info.seoFn}('${info.slugValue}');\n}\n`;

    content = metaImport + content;
    // Insert metadata export before the default export
    content = content.replace(
      /^(export default function)/m,
      `${metaExport}\n$1`
    );
  } else {
    // For sync metadata, use static export
    const metaImport = `import { ${info.seoFn} } from '@/lib/seo';\n`;
    const metaExport = `\nexport const metadata = ${info.seoFn}('${info.slugValue}');\n`;

    content = metaImport + content;
    // Insert metadata export before the default export
    content = content.replace(
      /^(export default function)/m,
      `${metaExport}\n$1`
    );
  }

  // Clean up any double blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(info.filePath, content, 'utf-8');
  console.log(`  OK: ${info.filePath} → ${info.seoFn}('${info.slugValue}')`);
}

// ── Main ──────────────────────────────────────────────────────────

function main() {
  console.log('Scanning page.tsx files under src/app/...\n');

  const lessonsDir = path.join(SRC_DIR, 'lessons');
  const pageFiles = findPageFiles(lessonsDir);
  console.log(`Found ${pageFiles.length} page.tsx files\n`);

  let transformed = 0;
  let skipped = 0;
  const unmatched: string[] = [];

  for (const filePath of pageFiles) {
    const info = analyzeFile(filePath);
    if (!info) {
      unmatched.push(filePath);
      skipped++;
      continue;
    }

    transformFile(info);
    transformed++;
  }

  console.log(`\n--- Summary ---`);
  console.log(`Transformed: ${transformed}`);
  console.log(`Skipped/unmatched: ${skipped}`);

  if (unmatched.length > 0) {
    console.log(`\nUnmatched files (index pages needing manual metadata):`);
    for (const f of unmatched) {
      console.log(`  ${f}`);
    }
  }
}

main();
