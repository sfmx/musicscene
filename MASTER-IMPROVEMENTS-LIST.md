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
- [ ] **P2: Dynamic Audio Backing Tracks & Metronome Count-In Audio**
  - **Target:** Add audio click sound synthesis during count-in measures and provide optional drum groove / click-track backing presets for practice exercises.

---

## 2. Codebase Consolidation & Technical Debt

- [ ] **P1: Completely Purge Legacy VexFlow / VexTab**
  - **Issue:** AlphaTab is now the universal notation standard across MusicScene. Legacy VexTab components and packages add unnecessary bundle bloat.
  - **Target:**
    - Delete [`src/components/VexTab.tsx`](file:///c:/Source/musicscene/src/components/VexTab.tsx) and [`src/components/ExerciseRenderer.vextab.tsx`](file:///c:/Source/musicscene/src/components/ExerciseRenderer.vextab.tsx).
    - Remove `vexflow` and `vextab` from [`package.json`](file:///c:/Source/musicscene/package.json).
    - Remove any lingering `<script>` tags or stylesheets referencing VexTab in `layout.tsx`.
- [ ] **P1: Eliminate Dead Stubs & Deprecated Visualizations**
  - **Target:** Remove obsolete components such as `ChordProgressionVisualization.tsx` (superseded by `ImprovedChordProgressionVisualization.tsx`) and any leftover `.backup` files.
- [ ] **P1: Deduplicate Shared Utility Functions**
  - **Target:**
    - Consolidate `getDifficultyColor()` (currently duplicated across 6 component files) into [`src/lib/utils.ts`](file:///c:/Source/musicscene/src/lib/utils.ts).
    - Centralize `removeConsecutiveDuplicates()` into [`src/lib/utils.ts`](file:///c:/Source/musicscene/src/lib/utils.ts).
- [ ] **P2: Eliminate Unsafe TypeScript Casts**
  - **Target:** Replace `as unknown as SongData` casts across song loading routes by aligning the JSON schema with strict TypeScript interfaces.

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

