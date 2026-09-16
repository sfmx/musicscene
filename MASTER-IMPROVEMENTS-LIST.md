# MusicScene Master List of Improvements

**Last Updated:** September 16, 2026  
**Status:** Active Roadmap  

This document tracks all planned, ongoing, and recommended improvements for the MusicScene platform, categorized by system domain and implementation priority.

---

## Priority Matrix

| Priority | Focus Area | Impact | Status |
| :--- | :--- | :--- | :--- |
| **P0 (Critical)** | [AlphaTab & Notation Engine](#1-alphatab--notation-engine) | Playback accuracy, metronome sync, user experience | In Progress |
| **P1 (High)** | [Codebase Cleanup & Debt](#2-codebase-consolidation--technical-debt) | Bundle size reduction, stability, maintainability | Ready to Start |
| **P1 (High)** | [Song Analysis Catalog](#3-song-analysis-catalog) | Content depth, student engagement, search ranking | Ongoing |
| **P2 (Medium)** | [Revenue & Monetization](#4-revenue--monetization-expansion) | Affiliate link conversion, ad revenue, email list | Ready to Start |
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

- [ ] **P1: Expand Note-for-Note AlphaTab Exercises Across All 107 Songs**
  - **Current State:** Featured songs (e.g. *For Those About to Rock*, *Stairway to Heaven*, *Hotel California*) have rich interactive notation; older songs only have chord progressions and text explanations.
  - **Target:** Progressively transcribe signature riffs, intro grooves, and solo licks into AlphaTex notation for the remaining catalog songs.
- [ ] **P1: Universal Scale Diagram Verification across Catalog**
  - **Target:** Ensure every song analysis page has populated `musicalAnalysis.keyAndScale.scalesUsed` entries and renders interactive fretboard scale diagrams matching the song's key and solo positions.
- [ ] **P2: Authentic Tuning & Tempo Audit**
  - **Target:** Cross-check half-step down (E♭ standard), drop D, and non-standard tunings across rock and metal catalog songs (e.g., Van Halen, Hendrix, Guns N' Roses).

---

## 4. Revenue & Monetization Expansion

- [ ] **P1: Close the 424-Product Affiliate Gap**
  - **Current State:** The affiliate audit identified 424 products falling back to generic search URLs.
  - **Target:** Expand [`src/data/affiliate-products.json`](file:///c:/Source/musicscene/src/data/affiliate-products.json) with direct curated Amazon ASINs and product details for top recurring brands:
    - Guitars: Fender, Gibson, Squier, Epiphone, Yamaha, Martin, Taylor.
    - Amps: Marshall, Boss Katana, Fender Mustang, Orange.
    - Pedals & Accessories: Ibanez Tube Screamer, Boss DS-1, Dunlop Cry Baby, ChromaCast picks/straps.
- [ ] **P2: High-Converting Gear Recommendation Cards**
  - **Target:** Embed dedicated [`ProductCard.tsx`](file:///c:/Source/musicscene/src/components/Affiliate/ProductCard.tsx) displays in the "Equipment & Tone" sections of song pages and gear reviews.
- [ ] **P2: AdSense / Display Ad Slot Integration**
  - **Target:** Place non-intrusive banner slots (desktop leaderboard, mobile inline) in lesson templates with layout stability (zero Cumulative Layout Shift).
- [ ] **P2: Email Newsletter / Free Practice Guide Lead Magnet**
  - **Target:** Add a lightweight newsletter signup module ("Free Fretboard Mastery PDF") on theory and song index pages.

---

## 5. SEO, Content Graph & Interlinking

- [ ] **P1: Bidirectional Content Cross-Linking**
  - **Target:**
    - "Songs using this scale" automatically displayed on Scale and Mode pages.
    - "Songs using this chord progression" displayed on Progression pages.
    - "Techniques used in this song" linking directly to deep-dive practice lessons.
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

