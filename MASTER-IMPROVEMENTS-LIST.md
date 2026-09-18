# MusicScene Master List of Improvements

**Last Updated:** September 18, 2026  
**Status:** Active Roadmap  

This document tracks all planned, ongoing, and recommended improvements for the MusicScene platform, categorized by system domain and implementation priority.

---

## Priority Matrix

| Priority | Focus Area | Impact | Status |
| :--- | :--- | :--- | :--- |
| **P0 (Critical)** | [AlphaTab & Notation Engine](#1-alphatab--notation-engine) | Playback accuracy, metronome sync, user experience | In Progress |
| **P1 (High)** | [Codebase Cleanup & Debt](#2-codebase-consolidation--technical-debt) | Bundle size reduction, stability, maintainability | Ready to Start |
| **P1 (High)** | [Song Analysis Catalog](#3-song-analysis-catalog) | Content depth, student engagement, search ranking | Ongoing |
| **P2 (Medium)** | [Revenue & Monetization](#4-revenue--monetization-expansion) | Affiliate link conversion, ad revenue, email list | In Progress |
| **P2 (Medium)** | [SEO & Content Graph](#5-seo-content-graph--interlinking) | Organic traffic, structured snippets, crawl efficiency | Partially Done |

---

## 1. AlphaTab & Notation Engine

- [x] **P0: Calibrate `mixolydian.json` to 1:1 Quarter Notes (`:4`)**
  - **Status:** Completed. All patterns and practice exercises calibrated to balanced 4/4 `:4` bars.
- [x] **P0: Remove Duplicate `alphaTex` JSON Keys in Scale Files**
  - **Status:** Completed. Removed all obsolete `:8` duplicate keys across all 7 affected scale definitions.
- [x] **P1: Responsive AlphaTab Layout & Full-Width Container Fill**
  - **Status:** Completed. Integrated debounced `ResizeObserver`, automatic multi-system staff breaks on mobile viewports (<640px), and flexible toolbar wrapping.
- [x] **P2: Interactive Fretboard Note Strumming / Click-to-Play**
  - **Status:** Completed. Integrated WebAudio guitar synthesizer note playback into [`ScaleVisualization.tsx`](file:///c:/Source/musicscene/src/components/SongAnalysis/ScaleVisualization.tsx) and [`ModernFretboardVisualizer.tsx`](file:///c:/Source/musicscene/src/components/ModernFretboardVisualizer.tsx) with active visual pulse animation and screen-reader accessibility.
- [x] **P2: Dynamic Audio Backing Tracks & Metronome Count-In Audio**
  - **Status:** Completed. Integrated precision WebAudio rhythm engine with:
    - 1-measure audible count-in (4, 3, 2, 1) with downbeat pitch accentuation (1760 Hz vs 880 Hz) and visual animated countdown overlays.
    - Synchronized rhythm backing track presets (`Off`, `Click` metronome, `Rock` 4/4 drum groove with kick/snare/hi-hat, and `Shuffle` blues swing).
    - Dynamic lookahead scheduling synchronized with playhead seek, BPM stepper, and speed multipliers.

---

## 2. Codebase Consolidation & Technical Debt

- [x] **P1: Completely Purge Legacy VexFlow / VexTab**
  - **Status:** Completed.
    - Purged legacy VexTab ghost files (`ExerciseRenderer.vextab.tsx`) and unreferenced legacy score wrappers (`src/components/MusicScore.tsx`).
    - Verified `vexflow` and `vextab` packages are absent from `package.json`.
    - Removed obsolete `"vextab-backup/**"` path excludes from `tsconfig.json`.
    - Verified `layout.tsx` has 0 legacy VexTab scripts or stylesheets.
    - Updated developer guidelines (`CLAUDE.md`) to establish AlphaTab as universal notation standard.
- [x] **P1: Eliminate Dead Stubs & Deprecated Visualizations**
  - **Status:** Completed.
    - Purged 12 unreferenced legacy prototypes and visualization stubs from `src/components/`: `AlphaTabCDN.tsx`, `AlphaTabScale.tsx`, `AlphaTabTest.tsx`, `MinimalAlphaTab.tsx`, `SimpleAlphaTabScale.tsx`, `ChordVisualizer.tsx`, `FretboardHighlight.tsx`, `FretboardVisualizer.tsx`, `ModernTabVisualizer.tsx`, `MusicNotationVisualizer.tsx`, `SimpleScaleFretboardDiagram.tsx`, and `TabAndNoteVisualizer.tsx`.
    - Streamlined `AlphaTexDemo.tsx` to showcase standard `AlphaTexRenderer`.
    - Removed root scratch files (`vscode-save-test.txt`, `lint_output.txt`).
    - Verified obsolete components (`ChordProgressionVisualization.tsx`, `MusicalAnalysisSection.tsx`, `.backup` files) are completely removed.
- [x] **P1: Deduplicate Shared Utility Functions**
  - **Status:** Completed.
    - Created centralized [`src/lib/utils.ts`](file:///c:/Source/musicscene/src/lib/utils.ts) exporting `getDifficultyColor()`, `getDifficultyBarColor()`, `removeConsecutiveDuplicates()`, and `cn()`.
    - Re-exported utilities from [`src/utils/theme.ts`](file:///c:/Source/musicscene/src/utils/theme.ts) to guarantee 100% backward compatibility.
    - Replaced hardcoded difficulty badge dictionaries and inline ternary ladders across `SongLessonDetailPageTemplate.tsx`, `SongLessonIndexPageTemplate.tsx`, `PracticeIndexPageTemplate.tsx`, `HomeSongExplorer.tsx`, and `SongAnalyticsOverview.tsx`.
    - Added automated Vitest suite in [`src/lib/__tests__/utils.test.ts`](file:///c:/Source/musicscene/src/lib/__tests__/utils.test.ts) covering all helper functions.
- [x] **P2: Eliminate Unsafe TypeScript Casts**
  - **Status:** Completed.
    - Eliminated all 107 `as unknown as SongData` casts in [`src/lib/songData.ts`](file:///c:/Source/musicscene/src/lib/songData.ts) by aligning TypeScript `SongData` with the unified schema.
    - Eliminated all 17 `as unknown as ChordData` and `ChordIndexData` casts in [`src/lib/chordData.ts`](file:///c:/Source/musicscene/src/lib/chordData.ts).
    - Eliminated all 13 `as unknown as IntervalData` and `IntervalIndexData` casts in [`src/lib/intervalData.ts`](file:///c:/Source/musicscene/src/lib/intervalData.ts).
    - Eliminated all `as unknown as ModeData` and `ModeIndexData` casts in [`src/lib/modeData.ts`](file:///c:/Source/musicscene/src/lib/modeData.ts).
    - Eliminated all 16 `as unknown as ProgressionData` and `ProgressionIndexData` casts in [`src/lib/progressionData.ts`](file:///c:/Source/musicscene/src/lib/progressionData.ts).
    - Eliminated `as unknown as ScaleIndexData` in [`src/lib/scaleData.ts`](file:///c:/Source/musicscene/src/lib/scaleData.ts).
    - Eliminated `as unknown as CategoryRootData` in [`src/lib/categoryRootData.ts`](file:///c:/Source/musicscene/src/lib/categoryRootData.ts).
    - Eliminated all `as unknown as PracticeDetailData` and index casts in [`src/lib/practiceData.ts`](file:///c:/Source/musicscene/src/lib/practiceData.ts).
    - Eliminated all `as unknown as GearDetailData`, `GearIndexData`, and root casts in [`src/lib/gearLessonData.ts`](file:///c:/Source/musicscene/src/lib/gearLessonData.ts).
    - Eliminated all `as unknown as SongLessonDetailData`, `SongLessonIndexData`, and root casts in [`src/lib/songLessonData.ts`](file:///c:/Source/musicscene/src/lib/songLessonData.ts).
    - Eliminated all `as unknown as` casts in [`src/lib/contentIndex.ts`](file:///c:/Source/musicscene/src/lib/contentIndex.ts), [`src/lib/searchUtils.ts`](file:///c:/Source/musicscene/src/lib/searchUtils.ts), [`src/app/sitemap.ts`](file:///c:/Source/musicscene/src/app/sitemap.ts), and [`src/lib/guitarAudio.ts`](file:///c:/Source/musicscene/src/lib/guitarAudio.ts).
    - Reached **0** `as unknown as` casts across the entire `src/` directory while keeping 0 TypeScript errors and 0 content validation errors across 303 files.

---

## 3. Song Analysis Catalog

- [x] **P1: Expand Note-for-Note AlphaTab Exercises Across All 107 Songs**
  - **Status:** Completed. 100% of all 107 catalog songs (579 individual sections) now feature authentic, playable, note-for-note AlphaTex notation:
    - Batch 1 (23 songs / 100 sections): Flagship rock anthems (*Sweet Child O' Mine*, *Crazy Train*, *Back in Black*, *Smells Like Teen Spirit*, *Master of Puppets*, etc.).
    - Batch 2 (15 songs / 45 sections): Iconic guitar standards (*Thunderstruck*, *Enter Sandman*, *Highway to Hell*, *Eruption*, *Sultans of Swing*, etc.).
    - Batch 3A (12 songs / 62 sections): Rock standards (*Wanted Dead or Alive*, *Everlong*, *Good Riddance*, *Roundabout*, etc.).
    - Batch 3B (12 songs / 60 sections): Anthems & standards (*Livin' on a Prayer*, *More Than a Feeling*, *Tom Sawyer*, *Landslide*, etc.).
    - Batch 3C (12 songs / 53 sections): Masterpieces (*Under the Bridge*, *Blackbird*, *Cliffs of Dover*, *Norwegian Wood*, etc.).
    - Batch 3D (12 songs / 43 sections): Blues & rock classics (*Pride and Joy*, *Comfortably Numb*, *All Along the Watchtower*, *Black Hole Sun*, etc.).
    - Batch 3E & Final Catalog Pass (21 songs + 44 legacy songs / 216 sections): Final upgrades and full catalog cleanup (*Every Rose Has Its Thorn*, *Photograph*, *All Blues*, *Classical Gas*, *Radioactive*, *Europa*, *The Thrill Is Gone*, etc.).
    - Catalog-wide audit verified: **579 sections audited across 107 songs, 0 syntactically invalid tabs, exactly 0 generic placeholder sections remaining**.
    - Fully validated, built (440 static pages), deployed to AWS S3 (`s3://musicscene`), and CloudFront invalidated.
- [x] **P1: Universal Scale Diagram Verification across Catalog**
  - **Status:** Completed.
    - Verified all 107 catalog songs feature populated, validated `musicalAnalysis.keyAndScale.scalesUsed` entries (285 total scales across 107 songs, 2-5 scales per song with scale title, note sequence, and musical application).
    - Repaired 6 legacy song data scale definitions:
      - `black-hole-sun.json`: Replaced description text with authentic G Mixolydian (`"G - A - B - C - D - E - F"`).
      - `eye-of-the-tiger.json`: Normalized C blues scale note string to `"C - Eb - F - F# - G - Bb"`.
      - `hurt-so-good.json`: Fixed hyphen spacing and added authentic E Minor Blues (`"E - G - A - A# - B - D"`).
      - `riptide.json`: Cleaned capo text out of scale note string into `"C - D - E - F - G - A - B"`.
      - `superstition.json`: Corrected enharmonic `Cb` to `B` in Eb natural minor.
      - `the-final-countdown.json`: Corrected enharmonic `E#` to `F` in F# harmonic minor.
    - Upgraded [`ScaleVisualization.tsx`](file:///c:/Source/musicscene/src/components/SongAnalysis/ScaleVisualization.tsx):
      - Comprehensive bidirectional enharmonic matching across standard accidentals (`C#`/`D♭`, `D#`/`E♭`, `F#`/`G♭`, `G#`/`A♭`, `A#`/`B♭`) and diatonic enharmonics (`B`/`C♭`, `E`/`F♭`, `C`/`B#`, `F`/`E#`).
      - Dynamic active root detection (`scaleNotes[0]` with primary key fallback) ensuring red root highlights dynamically track the active scale selection on fretboards for both sharp and flat keys.
      - Fixed tooltip duplication and added defensive empty-scale guards.
    - Added automated Vitest suite in [`src/lib/__tests__/scalesUsed.test.ts`](file:///c:/Source/musicscene/src/lib/__tests__/scalesUsed.test.ts) (115 tests) enforcing note validity, chromatic fretboard mapping, and schema compliance across all 107 songs.
    - Built and verified with 0 errors across 440 static pages, deployed to S3 (`s3://musicscene`), and invalidated CloudFront cache (`IAH126RRDR6V3SGY529Y5DFNWK`).
- [x] **P2: Authentic Tuning & Tempo Audit**
  - **Status:** Completed.
    - Audited all 107 catalog songs for tuning accuracy, naming consistency, and numeric tempo playback compatibility.
    - Corrected recorded tunings for flagship rock anthems to authentic **Half-Step Down (Eb Ab Db Gb Bb Eb)**:
      - *Eruption* (Van Halen, `eruption.json`)
      - *Welcome to the Jungle* (Guns N' Roses, `welcome-to-the-jungle.json`)
      - *Every Rose Has Its Thorn* (Poison, `every-rose-has-its-thorn.json`)
      - *Rock and Roll All Nite* (KISS, `rock-and-roll-all-nite.json`)
    - Canonicalized tuning strings across the catalog:
      - Normalized 11 legacy `"Standard (E-A-D-G-B-E)"` files to standard `"Standard (EADGBE)"`.
      - Canonicalized E♭ tuning variations into uniform `"Half-Step Down (Eb Ab Db Gb Bb Eb)"`.
      - Normalized capo formatting (`"Standard (EADGBE) with Capo 1"`).
    - Fixed non-numeric tempo strings that caused `parseInt(songInfo.tempo, 10)` to return `NaN` and default to 80 BPM in the interactive AlphaTab player:
      - *Eruption*: `"104 BPM (free-form cadenza)"`
      - *Welcome to the Jungle*: `"124 BPM (approx. 120-128 BPM)"`
      - *Schism*: `"87 BPM (varies 47/67/87 BPM)"`
      - *Stairway to Heaven*: `"72 BPM (accelerates 63-98 BPM)"`
    - Added automated Vitest suite [`src/lib/__tests__/tuningTempo.test.ts`](file:///c:/Source/musicscene/src/lib/__tests__/tuningTempo.test.ts) (228 tests) enforcing valid numeric tempos (40–300 BPM) and canonical tuning patterns across all 107 songs.
    - Verified 0 errors across `content:index`, `content:validate`, `tsc --noEmit`, 454 Vitest tests, and Next.js static export; deployed to S3 and invalidated CloudFront cache (`ID88IAI41SJJ84WNF6P1LTZMRK`).

---

## 4. Revenue & Monetization Expansion

- [x] **P1: Close the 424-Product Affiliate Gap**
  - **Status:** Completed.
    - Expanded curated product database from 232 to 447 products in [`src/data/affiliate-products.json`](file:///c:/Source/musicscene/src/data/affiliate-products.json) (+215 direct curated Amazon affiliate links).
    - Achieved **100.0% explicit DB match** across song equipment (739 of 739 products match curated entries, exactly 0 fallbacks).
    - Achieved **93.3% explicit DB match** across gear lessons (280 of 300 products match curated entries).
    - Overall catalog coverage reached **98.1%** (1,019 of 1,039 products match curated entries), slashing the fallback gap from 424 down to 20 (a 95.3% reduction).
    - Enhanced `looksLikeProduct()` in [`src/lib/affiliateLinks.ts`](file:///c:/Source/musicscene/src/lib/affiliateLinks.ts) with regex filters preventing false-positive brand captures (`airline approved/travel`, `Roland Dyens`, `hand-wired recreation`, instructional action verbs).
    - Expanded automated Vitest suite in [`src/lib/__tests__/affiliateLinks.test.ts`](file:///c:/Source/musicscene/src/lib/__tests__/affiliateLinks.test.ts) (13 tests, all passing; repository total 459 tests).
    - Built static export, deployed to AWS S3 (`s3://musicscene`), and invalidated CloudFront cache (`I1S2DXB83DFOGA8P4LBW2ORO3A`).
- [ ] **P2: High-Converting Gear Recommendation Cards**
  - **Target:** Embed dedicated [`ProductCard.tsx`](file:///c:/Source/musicscene/src/components/Affiliate/ProductCard.tsx) displays in the "Equipment & Tone" sections of song pages and gear reviews.
- [ ] **P2: AdSense / Display Ad Slot Integration**
  - **Target:** Place non-intrusive banner slots (desktop leaderboard, mobile inline) in lesson templates with layout stability (zero Cumulative Layout Shift).
- [ ] **P2: Email Newsletter / Free Practice Guide Lead Magnet**
  - **Target:** Add a lightweight newsletter signup module ("Free Fretboard Mastery PDF") on theory and song index pages.

---

## 5. SEO, Content Graph & Interlinking

- [x] **P1: Bidirectional Content Cross-Linking**
  - **Status:** Completed.
    - Build-time content index graph (`scripts/build-content-index.ts`) extracts and indexes bidirectional cross-references:
      - `scaleToSongs`: 10 scales mapped across catalog songs.
      - `modeToSongs`: 5 modes (Dorian, Aeolian, Mixolydian, Ionian, Phrygian) mapped across catalog songs.
      - `progressionToSongs`: 14 chord progression patterns (`12-bar-blues`, `i-v-vi-iv`, `vi-iv-i-v`, `i-iv-v`, `i-bvii-iv`, etc.) mapped across catalog songs.
      - `chordToSongs`: 9 chord types mapped across catalog songs.
    - Upgraded [`src/lib/crossReferences.ts`](file:///c:/Source/musicscene/src/lib/crossReferences.ts) with `getSongsUsingScale()`, `getSongsUsingMode()`, `getSongsUsingProgression()`, and `getSongsUsingChord()`.
    - Upgraded [`src/components/CrossReferences/SongsUsingThis.tsx`](file:///c:/Source/musicscene/src/components/CrossReferences/SongsUsingThis.tsx) to support both `'progression'` and `'mode'` entity types, linking directly to `#chord-progressions` and `#scales-used` anchor targets with clean difficulty badges and responsive grid cards.
    - Embedded `<SongsUsingThis type="progression" slug={progressionSlug} />` in [`ProgressionAnalysisPageTemplate.tsx`](file:///c:/Source/musicscene/src/components/ProgressionAnalysis/ProgressionAnalysisPageTemplate.tsx).
    - Created [`src/lib/techniqueLessons.ts`](file:///c:/Source/musicscene/src/lib/techniqueLessons.ts) with comprehensive keyword matching and hierarchical precedence mapping song techniques (power chords, palm muting, hammer-ons, alternate picking, fingerpicking, etc.) to practice lessons and song lessons.
    - Updated [`SongAnalysisPageTemplate.tsx`](file:///c:/Source/musicscene/src/components/SongAnalysis/SongAnalysisPageTemplate.tsx) to render direct interactive lesson links on technique cards ("Related Lesson: [Lesson Title] →").
    - Added automated Vitest suite in [`src/lib/__tests__/crossReferences.test.ts`](file:///c:/Source/musicscene/src/lib/__tests__/crossReferences.test.ts) (25 tests, all passing; repository total 484 tests).
    - 0 TypeScript errors, 0 content validation errors across 303 files, full static pre-rendering (440 pages), deployed to AWS S3 (`s3://musicscene`), and CloudFront invalidated (`I25JJY15CG6YA5VGA66UUQ6KH7`).
- [ ] **P1: Enhanced JSON-LD Structured Data**
  - **Target:** Add rich `MusicComposition`, `HowTo`, and `FAQPage` schemas to all chord, scale, mode, and practice lesson templates.
- [ ] **P2: Dynamic Open Graph (OG) Social Cards**
  - **Target:** Automatically generate Twitter / Facebook preview images showing song title, artist, key, tempo, and guitar tab teaser.

---

## Verification & Deployment Commands

```bash
# Validate all content JSON files against schemas
npm run content:validate

# Audit affiliate link coverage and fallback gaps
npm run affiliate:audit

# Type check without emitting files
npm run type-check

# Rebuild content index graph
npm run content:index

# Full production build and static export
npm run build

# Deploy to AWS S3 & invalidate CloudFront CDN cache
npm run deploy
```

