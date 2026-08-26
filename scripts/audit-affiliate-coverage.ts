/**
 * Audit Affiliate Link Coverage
 *
 * Scans gear-lesson JSON files and song JSON files to determine how many
 * product-like strings have explicit affiliate database matches, how many
 * fall back to auto-generated Amazon search links, and how many are skipped.
 *
 * Usage:  npx tsx scripts/audit-affiliate-coverage.ts
 */

import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// 1. Load affiliate products database
// ---------------------------------------------------------------------------

interface AffiliateProduct {
  pattern: string;
  url: string;
  category: string;
}

interface AffiliateProductsFile {
  products: AffiliateProduct[];
}

const AFFILIATE_PRODUCTS_PATH = path.resolve(
  __dirname,
  '../src/data/affiliate-products.json',
);

const affiliateData: AffiliateProductsFile = JSON.parse(
  fs.readFileSync(AFFILIATE_PRODUCTS_PATH, 'utf-8'),
);

// ---------------------------------------------------------------------------
// 2. Brand list (inlined from src/lib/affiliateBrands.ts to avoid runtime deps)
// ---------------------------------------------------------------------------

import { AFFILIATE_BRANDS } from '../src/lib/affiliateBrands';

const BRANDS_LOWER = AFFILIATE_BRANDS.map((b) => b.toLowerCase());

// ---------------------------------------------------------------------------
// 3. Core matching functions (reimplemented to avoid runtime config deps)
// ---------------------------------------------------------------------------

/**
 * Check whether `text` contains any brand from the brands array (case-insensitive).
 * Returns false for pure numbers, prices, or spec-like strings.
 */
function looksLikeProduct(text: string): boolean {
  if (!text || text.length < 5) return false;

  const lower = text.toLowerCase();

  // Skip pure numbers, prices, or spec-like strings
  if (/^\$?\d/.test(text.trim())) return false;
  if (/^\d+[\s-]?(bit|hz|khz|ms|bpm|mm|"|inch)/i.test(text.trim())) return false;

  return BRANDS_LOWER.some((brand) => lower.includes(brand));
}

/**
 * Check whether `text` matches any pattern in affiliate-products.json.
 * Returns the matched pattern string, or null.
 */
function getExplicitMatch(
  text: string,
  products: AffiliateProduct[],
): string | null {
  const lower = text.toLowerCase();
  for (const product of products) {
    if (lower.includes(product.pattern.toLowerCase())) {
      return product.pattern;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 4. File-scanning helpers
// ---------------------------------------------------------------------------

/** Recursively collect all .json files under a directory. */
function collectJsonFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectJsonFiles(full));
    } else if (entry.name.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// 4a. Extract product-like strings from gear-lesson JSON files
// ---------------------------------------------------------------------------

interface GearCard {
  title?: string;
  fields?: { label?: string; value?: string }[];
  items?: string[];
  tableRows?: string[][];
}

interface GearSection {
  cards?: GearCard[];
}

interface GearLessonFile {
  sections?: GearSection[];
}

function extractGearStrings(filePath: string): string[] {
  const data: GearLessonFile = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const strings: string[] = [];

  if (!data.sections) return strings;

  for (const section of data.sections) {
    if (!section.cards) continue;
    for (const card of section.cards) {
      if (card.title) strings.push(card.title);

      if (card.fields) {
        for (const field of card.fields) {
          if (field.label) strings.push(field.label);
          if (field.value) strings.push(field.value);
        }
      }

      if (card.items) {
        for (const item of card.items) {
          strings.push(item);
        }
      }

      if (card.tableRows) {
        for (const row of card.tableRows) {
          for (const cell of row) {
            strings.push(cell);
          }
        }
      }
    }
  }

  return strings;
}

// ---------------------------------------------------------------------------
// 4b. Extract product-like strings from song JSON files
// ---------------------------------------------------------------------------

interface SongEquipment {
  guitar?: {
    recommended?: string;
    alternatives?: string[];
  };
  amp?: {
    recommended?: string;
    alternatives?: string[];
  };
}

interface SongFile {
  equipment?: SongEquipment;
}

function extractSongStrings(filePath: string): string[] {
  const data: SongFile = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const strings: string[] = [];

  if (!data.equipment) return strings;

  const eq = data.equipment;

  if (eq.guitar) {
    if (eq.guitar.recommended) strings.push(eq.guitar.recommended);
    if (eq.guitar.alternatives) {
      for (const alt of eq.guitar.alternatives) {
        strings.push(alt);
      }
    }
  }

  if (eq.amp) {
    if (eq.amp.recommended) strings.push(eq.amp.recommended);
    if (eq.amp.alternatives) {
      for (const alt of eq.amp.alternatives) {
        strings.push(alt);
      }
    }
  }

  return strings;
}

// ---------------------------------------------------------------------------
// 5. Classification
// ---------------------------------------------------------------------------

type Classification = 'explicit' | 'fallback' | 'skipped';

interface ClassifiedString {
  text: string;
  classification: Classification;
  matchedPattern?: string; // only for explicit matches
}

function classify(
  text: string,
  products: AffiliateProduct[],
): ClassifiedString {
  const explicit = getExplicitMatch(text, products);
  if (explicit) {
    return { text, classification: 'explicit', matchedPattern: explicit };
  }

  if (looksLikeProduct(text)) {
    return { text, classification: 'fallback' };
  }

  return { text, classification: 'skipped' };
}

// ---------------------------------------------------------------------------
// 6. Run the audit
// ---------------------------------------------------------------------------

const GEAR_DIR = path.resolve(__dirname, '../src/data/gear-lessons');
const SONGS_DIR = path.resolve(__dirname, '../src/data/songs');

// -- Gear lessons --
const gearFiles = collectJsonFiles(GEAR_DIR);
const gearClassified: ClassifiedString[] = [];

for (const file of gearFiles) {
  const strings = extractGearStrings(file);
  for (const s of strings) {
    gearClassified.push(classify(s, affiliateData.products));
  }
}

const gearExplicit = gearClassified.filter((c) => c.classification === 'explicit');
const gearFallback = gearClassified.filter((c) => c.classification === 'fallback');
const gearSkipped = gearClassified.filter((c) => c.classification === 'skipped');
const gearProductLike = gearExplicit.length + gearFallback.length;

// -- Song data --
const songFiles = collectJsonFiles(SONGS_DIR).filter(
  (f) => !path.basename(f).startsWith('_'), // skip _template.json etc.
);
const songClassified: ClassifiedString[] = [];

for (const file of songFiles) {
  const strings = extractSongStrings(file);
  for (const s of strings) {
    songClassified.push(classify(s, affiliateData.products));
  }
}

const songExplicit = songClassified.filter((c) => c.classification === 'explicit');
const songFallback = songClassified.filter((c) => c.classification === 'fallback');
const songSkipped = songClassified.filter((c) => c.classification === 'skipped');
const songProductLike = songExplicit.length + songFallback.length;

// -- Top fallback products (mentioned 2+ times across both sources) --
const fallbackCounts = new Map<string, number>();
for (const item of [...gearClassified, ...songClassified]) {
  if (item.classification === 'fallback') {
    const key = item.text.trim();
    fallbackCounts.set(key, (fallbackCounts.get(key) ?? 0) + 1);
  }
}

const topFallbacks = [...fallbackCounts.entries()]
  .filter(([, count]) => count >= 2)
  .sort((a, b) => b[1] - a[1]);

// ---------------------------------------------------------------------------
// 7. Print report
// ---------------------------------------------------------------------------

function pct(n: number, total: number): string {
  if (total === 0) return '0%';
  return `${((n / total) * 100).toFixed(1)}%`;
}

console.log('');
console.log('=== Affiliate Coverage Audit ===');
console.log('');

console.log(`GEAR LESSONS (${gearFiles.length} files)`);
console.log(`  Total extracted strings: ${gearClassified.length}`);
console.log(`  Product-like strings:    ${gearProductLike}`);
console.log(
  `  Explicit DB match:       ${gearExplicit.length} (${pct(gearExplicit.length, gearProductLike)})`,
);
console.log(
  `  Auto-fallback:           ${gearFallback.length} (${pct(gearFallback.length, gearProductLike)})`,
);
console.log(`  Not products (skipped):  ${gearSkipped.length}`);
console.log('');

console.log(`SONG DATA (${songFiles.length} files)`);
console.log(`  Total extracted strings: ${songClassified.length}`);
console.log(`  Product-like strings:    ${songProductLike}`);
console.log(
  `  Explicit DB match:       ${songExplicit.length} (${pct(songExplicit.length, songProductLike)})`,
);
console.log(
  `  Auto-fallback:           ${songFallback.length} (${pct(songFallback.length, songProductLike)})`,
);
console.log(`  Not products (skipped):  ${songSkipped.length}`);
console.log('');

if (topFallbacks.length > 0) {
  console.log(
    'TOP FALLBACK PRODUCTS (mentioned 2+ times, could be added to DB):',
  );
  for (const [text, count] of topFallbacks) {
    console.log(`  "${text}" (${count} mentions)`);
  }
} else {
  console.log('TOP FALLBACK PRODUCTS: none with 2+ mentions');
}

console.log('');

// ---------------------------------------------------------------------------
// 8. Overall summary
// ---------------------------------------------------------------------------

const totalExplicit = gearExplicit.length + songExplicit.length;
const totalFallback = gearFallback.length + songFallback.length;
const totalProductLike = totalExplicit + totalFallback;

console.log('OVERALL');
console.log(`  Total product-like strings: ${totalProductLike}`);
console.log(
  `  Explicit DB coverage:       ${totalExplicit} (${pct(totalExplicit, totalProductLike)})`,
);
console.log(
  `  Auto-fallback:              ${totalFallback} (${pct(totalFallback, totalProductLike)})`,
);
console.log(
  `  Gap (fallback items that should be added to DB): ${totalFallback}`,
);
console.log('');
