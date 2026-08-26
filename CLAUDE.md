# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at http://localhost:3333
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run clean` - Remove build artifacts and cache
- `npm run clean:all` - Full clean including node_modules

### Testing & Quality
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Content & Revenue
- `npm run content:index` - Rebuild content index from all data files
- `npm run content:validate` - Validate all content JSON against schemas
- `npm run affiliate:audit` - Audit affiliate link coverage across gear and song pages

### Storybook
- `npm run storybook` - Start Storybook development server at http://localhost:6006
- `npm run build-storybook` - Build Storybook for production

## Architecture

### Project Overview
This is a Next.js 15 music education website focused on guitar learning. The site provides comprehensive song analysis, chord progressions, guitar techniques, and educational content organized into structured lessons.

### Key Directories
- `src/app/` - Next.js App Router structure with nested route pages
- `src/components/` - Reusable React components, including specialized music notation components
- `src/components/SongAnalysis/` - Complete component system for standardized song analysis pages
- `src/data/songs/` - JSON data files for song analysis content
- `src/lib/` - Utility functions and data management
- `src/schemas/` - JSON Schema definitions for data validation

### Music Components Architecture

The codebase includes specialized components for music education:

**AlphaTab Components:**
- `AlphaTexRenderer.tsx` - Primary component for rendering musical notation using AlphaTab library
- `SimpleAlphaTab.tsx` - Simplified AlphaTab wrapper for basic notation needs
- Various AlphaTab test and configuration components

**Fretboard & Chord Components:**
- `SimpleFretboardDiagram.tsx` - Displays guitar chord diagrams (supports major, minor, 7th, power chords, etc.)
- `FretboardVisualizer.tsx` / `ModernFretboardVisualizer.tsx` - Interactive fretboard displays
- `ChordVisualizer.tsx` - Advanced chord visualization

**VexTab Components (Legacy):**
- `VexTab.tsx`, `ExerciseRenderer.vextab.tsx` - Legacy VexTab notation components
- Note: New development should use AlphaTab components

### Song Analysis System

The site uses a comprehensive song analysis framework:

**Data Structure:**
- `src/data/songs/[song-slug].json` - Schema-compliant song data
- `src/data/songs/_template.json` - Template for new songs
- `src/schemas/song-analysis.schema.json` - Data validation schema
- Reference tabs in `src/data/songs/_reference-tabs/`

**Page Components (SongAnalysis/):**
- `SongAnalysisPageTemplate.tsx` - Main template for all song analysis pages
- `SongInfoSection.tsx` - Song metadata and difficulty ratings
- `MusicalAnalysisSection.tsx` / `MusicalAnalysisScales.tsx` - Theory analysis
- `ChordProgressionVisualization.tsx` - Visual chord progression displays
- `TechniquesSection.tsx` - Technique breakdowns with chord diagrams
- Additional specialized sections for equipment, learning paths, practice notes, etc.

**Data Management:**
- `src/lib/songData.ts` - Centralized song database with TypeScript interfaces
- Functions for retrieving, filtering, and categorizing songs
- Support for featured songs, search functionality, and categorization

### Content Organization

The app follows a hierarchical lesson structure:
- `/lessons/theory/` - Music theory fundamentals
- `/lessons/songs/` - Song-based learning with comprehensive analysis
- `/lessons/practice/` - Practice exercises and techniques
- `/lessons/gear/` - Equipment reviews and recommendations

### Technology Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Music Notation**: AlphaTab library (@coderline/alphatab)
- **Legacy Notation**: VexFlow/VexTab (being phased out)
- **Testing**: Jest with Testing Library, Storybook for component development
- **Deployment**: AWS (S3 + CloudFront) via GitHub Actions

### Affiliate & Revenue System

The site monetizes product mentions through Amazon Associates affiliate links. The system is designed to be fully automated — no manual link maintenance is required.

**How it works:**

1. Product names in gear pages and song equipment sections are wrapped with the `AffiliateLink` component
2. The component calls `getAffiliateLinkWithFallback()` which tries two strategies:
   - **Curated match**: Checks `src/data/affiliate-products.json` for an explicit pattern match (case-insensitive substring). These take priority.
   - **Auto-fallback**: If no curated match, checks if the text contains a known brand from `src/lib/affiliateBrands.ts`. If so, generates an Amazon search URL (`amazon.com/s?k={product}&tag={tag}`).
3. If neither matches, the text renders as plain text (no link).

**Key files:**

| File | Purpose |
|------|---------|
| `src/lib/affiliateBrands.ts` | ~80 known gear brand names (Fender, Shure, Boss, etc.) |
| `src/lib/affiliateLinks.ts` | Core logic: `getAffiliateLinkWithFallback()`, `looksLikeProduct()`, `extractProductName()` |
| `src/lib/revenueConfig.ts` | Amazon Associates tag from `NEXT_PUBLIC_AMAZON_TAG` env var (default: `musicscene202-22`) |
| `src/data/affiliate-products.json` | ~150 curated product entries with optimized Amazon search URLs |
| `src/components/Revenue/AffiliateLink.tsx` | Client component wrapping product names as affiliate links |
| `src/components/Revenue/SmartAffiliateText.tsx` | Handles comma-separated product lists (splits and links each) |
| `src/components/Revenue/AdSlot.tsx` | Ad network placeholder (disabled by default) |
| `src/components/Revenue/NewsletterSignup.tsx` | Email capture component (needs endpoint configuration) |
| `scripts/audit-affiliate-coverage.ts` | Reports which product mentions have links vs. gaps |

**Where affiliate links appear:**
- **Gear lesson pages** (`GearLessonDetailPageTemplate.tsx`): card titles, field labels, field values, list items, and table cells are all affiliate-aware
- **Song analysis pages** (`SongAnalysisPageTemplate.tsx`): equipment section (recommended guitar/amp and alternatives)

**Adding new brands or products:**
- To add a brand: add its name to the `AFFILIATE_BRANDS` array in `src/lib/affiliateBrands.ts`. All mentions of that brand across the site will automatically become affiliate links.
- To add a curated product link: add an entry to `src/data/affiliate-products.json`. Entries are ordered most-specific-first (e.g., "Gibson Les Paul Standard" before "Gibson Les Paul"). Use `{tag}` placeholder in URLs.
- Run `npm run affiliate:audit` to see coverage gaps and suggested additions.

**False-positive prevention:**
- Short brand names (4 chars or fewer like "ART", "DOD") require word-boundary matching
- Strings starting with verbs ("Start with...", "Try using...") are excluded
- Strings containing "artist(s)" are excluded (avoids "Taylor" matching in "Taylor Swift")
- Pure numbers, prices, and spec-like strings are excluded

### Development Workflow

When working on song analysis:
1. Follow the comprehensive process in `.github/instructions/song-analysis.md`
2. Use existing components from `src/components/SongAnalysis/`
3. Validate data against `src/schemas/song-analysis.schema.json`
4. Test AlphaTab notation in Storybook before integration
5. Ensure chord diagrams use `SimpleFretboardDiagram` component

When adding new components:
1. Create stories in Storybook for testing and documentation
2. Follow existing patterns in `src/components/SongAnalysis/`
3. Use TypeScript interfaces defined in `src/lib/songData.ts`
4. Test responsive behavior across device sizes

### Music Notation Guidelines
- **Preferred**: Use AlphaTab notation (`AlphaTexRenderer`, `SimpleAlphaTab`)
- **Legacy**: VexTab components exist but should not be used for new development
- **Chord Diagrams**: Always use `SimpleFretboardDiagram` for consistent chord visualization
- **Format**: AlphaTab uses format like `3.6 5.5 7.4 |` (fret.string notation)

### Data Standards
- Song data must conform to `song-analysis.schema.json`
- Difficulty levels: "Beginner", "Intermediate", "Advanced", "Expert"
- Chord names: Standard notation (e.g., "B5", "Em", "CMaj7")
- Time stamps: "MM:SS-MM:SS" format
- All song data managed through `src/lib/songData.ts` functions