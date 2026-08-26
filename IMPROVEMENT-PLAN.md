# MusicScene Improvement Plan

## Current State Assessment

### By the Numbers
| Metric | Value |
|--------|-------|
| Total page.tsx files | ~215 |
| Hardcoded content pages | ~119 (56%) |
| Data-driven template pages | ~96 (44%) |
| Song JSON data files | 13 |
| Scale JSON data files | 5 |
| Empty stub components | 9 |
| Dead/backup files | 12+ |
| Duplicate utility functions | 2 major (`getDifficultyColor` in 6 files, `removeConsecutiveDuplicates` in 2 files) |
| AlphaTab component variants | 6+ (unclear which to use) |
| Legacy VexTab references | 23 files |

### Critical Issues
1. **56% of pages are hardcoded** (300-700 lines each) instead of data-driven
2. **No cross-linking system** - content is siloed
3. **Dead code accumulation** - stubs, backups, experimental files
4. **Legacy VexTab** still loaded globally
5. **Type safety gaps** - `any` types, `as unknown as SongData` casts
6. **Hardcoded metadata** in songData.ts
7. **No SEO infrastructure** - no sitemap, robots, structured data
8. **No revenue mechanism**

---

## Phase 1: Cleanup & Consolidation (Foundation)

**Goal:** Reduce codebase noise, fix type safety, remove dead code.

- [ ] Delete 9 empty stub components
- [ ] Delete all `page_new.tsx`, `page-original-backup.tsx`, and `.json.backup` files
- [ ] Delete `next.config.js` (keep `.ts`), delete `next.config.ignore-errors.ts`
- [ ] Delete 3 ad-hoc test scripts from root
- [ ] Remove `vexflow`/`vextab` from `package.json` and `layout.tsx` global includes
- [ ] Extract `getDifficultyColor()` and `removeConsecutiveDuplicates()` into `src/lib/utils.ts`
- [ ] Move hardcoded metadata from `songData.ts` into each song's JSON `metadata` field
- [ ] Fix `as unknown as SongData` casts by aligning JSON schema with TypeScript interfaces
- [ ] Remove unused `ChordProgressionVisualization.tsx` and `MusicalAnalysisSection.tsx`
- [ ] Standardize AlphaTab components: keep `AlphaTexRenderer` (full), remove/redirect stubs
- [ ] Pick one test framework (Jest or Vitest, not both)
- [ ] Set ESLint `no-explicit-any` to `error`

**Estimated reduction:** ~40-50 files deleted, ~500+ lines of duplicate code removed.

---

## Phase 2: Unified Content Architecture

**Goal:** Make ALL content types data-driven using a single pattern.

Every content type follows: `JSON Data File --> Template Component --> Minimal Page File`

**Unified Content Schema:**

```typescript
interface ContentBase {
  slug: string;
  contentType: "theory" | "gear" | "practice" | "song-analysis" | "scale";
  title: string;
  subtitle?: string;
  category: string;
  subcategory?: string;
  difficulty?: string;
  tags: string[];
  relatedContent: string[];
  metadata: {
    dateCreated: string;
    dateModified: string;
    author?: string;
    featured?: boolean;
  };
  sections: ContentSection[];
}

interface ContentSection {
  type: "text" | "chord-diagram" | "fretboard" | "notation" | "video"
        | "tip-box" | "comparison-table" | "exercise" | "gear-spec";
  heading?: string;
  content: Record<string, unknown>;
}
```

**Templates needed:**
1. `TheoryPageTemplate` - chord, interval, scale, mode, progression lessons
2. `GearPageTemplate` - equipment reviews and recommendations
3. `PracticePageTemplate` - exercises and technique lessons
4. `SongAnalysisPageTemplate` - already exists, refine
5. `ScaleAnalysisPageTemplate` - already exists, refine

**Section renderers** (composable blocks):
- `TextSection`, `ChordDiagramGrid`, `NotationExample`, `TipBox`
- `ComparisonTable`, `GearSpecCard`, `ExerciseBlock`, `VideoEmbed`
- `RelatedContentGrid`

---

## Phase 3: Content Registry & Cross-Linking

**Goal:** Automatic content discovery and relationship management.

**No database.** Build-time content index instead.

**Build-Time Content Index** (`scripts/build-content-index.ts`):
1. Scans all JSON data files across `src/data/`
2. Builds content graph based on shared tags and explicit references
3. Generates `src/data/_generated/content-index.json`

**Tag Taxonomy** (controlled vocabulary):
- Technique: `power-chords`, `alternate-picking`, `bending`, `hammer-on`, `tapping`
- Theory: `major-key`, `minor-key`, `pentatonic`, `blues-scale`, `modal`
- Gear: `humbucker`, `tube-amp`, `distortion`, `delay`
- Genre: `classic-rock`, `metal`, `blues`, `punk`
- Difficulty: `beginner`, `intermediate`, `advanced`

**Auto-Generated Sections** on every page:
- "Songs using this technique"
- "Practice exercises"
- "Required gear"
- "Theory background"

---

## Phase 4: SEO & Discoverability

- `src/app/sitemap.ts` - generated from content index
- `src/app/robots.ts`
- JSON-LD structured data (MusicComposition, HowTo, Article schemas)
- Open Graph / Twitter Card meta tags per page
- Auto-generated category index pages

---

## Phase 5: Revenue Integration (Low Intervention)

**1. Google AdSense / Mediavine / Raptive**
- Ad component slots in templates
- Revenue scales with traffic automatically

**2. Amazon Associates Affiliate Links**
- `src/data/affiliate-products.json` mapping product names to affiliate URLs
- Gear template sections auto-link on product match

**3. Email Newsletter / Lead Magnet**
- Email capture component in templates
- Free-tier email service (Mailchimp/Buttondown)

---

## Phase 6: Content Tooling

**CLI Content Generator:**
```bash
npm run content:new -- --type theory --category chords --slug "dominant-seventh"
```

**Content Validation Pipeline (CI):**
- Schema validation for all JSON data files
- Broken cross-reference detection
- Tag consistency checking
- Image/asset reference validation

---

## AWS Hosting Cost Assessment

| Service | Estimated Monthly Cost |
|---------|----------------------|
| S3 storage | ~$0.03 |
| CloudFront | $5-15 (at 100K pageviews) |
| No database/servers | $0 |
| **Total** | **$5-20/month** |

---

## Implementation Priority

1. Phase 1 (Cleanup) - Foundation
2. Phase 4 (SEO) - Required for organic traffic
3. Phase 2 (Unified Architecture) - Biggest effort, biggest payoff
4. Phase 3 (Cross-Linking) - Build alongside Phase 2
5. Phase 5 (Revenue) - Start with AdSense during Phase 2
6. Phase 6 (Tooling) - Build as you convert content
