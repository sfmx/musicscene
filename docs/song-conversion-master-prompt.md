# MASTER SONG ANALYSIS CONVERSION PROMPT

## PURPOSE
This is a step-by-step, reusable prompt for converting existing song analysis pages or creating new ones using the JSON-driven component system. Follow every step in order for guaranteed success.

---

## 🔥 CRITICAL SUCCESS FACTORS

### BEFORE YOU START
- [ ] Read the full prompt before beginning
- [ ] Have professional tab sources ready (Songsterr, TabsGuru, Guitar World)
- [ ] Understand the JSON structure requirements
- [ ] Know that internal reference tabs are REQUIRED first

### ABSOLUTE REQUIREMENTS
1. **Internal reference tab MUST be created first** (Step 1)
2. **JSON structure MUST match template exactly** (Step 2)
3. **Page component MUST use exact template format** (Step 3)
4. **Data registry MUST be updated** (Step 4)
5. **All validation steps MUST pass** (Step 5)

---

## 📋 COMPLETE WORKFLOW

### STEP 1: CREATE INTERNAL REFERENCE TAB FILE ⭐ (REQUIRED FIRST)

**Purpose:** Ensure technical accuracy by sourcing verified tablature AND comprehensive song information from multiple authoritative sources.

1. **Multi-Source Research Protocol**
   
   **A. Technical/Tablature Sources (Priority Order):**
   
   - **Guitar World/Revolver Tabs**: Official magazine transcriptions
     - Often the most accurate for famous songs
     - Based on interviews with original artists
     - Usually available in magazine archives or special issues
     - **PRIMARY SOURCE** when available
   
   - **Songsterr**: `https://www.songsterr.com/a/wa/search?pattern=[song]+[artist]`
     - Interactive tabs with accurate timing
     - Multi-instrument arrangements
     - Professional transcriptions with playback
     - **PREFERRED** for complex songs and timing accuracy
   
   - **TabsGuru**: `https://tabsguru.com/search/?q=[song]+[artist]`
     - High-quality professional transcriptions
     - Often includes official tabs when available
     - Good for complex songs and solos
     - **RECOMMENDED** for detailed arrangements
   
   - **911Tabs**: `https://www.911tabs.com/search.php?search=[song]+[artist]`
     - Aggregates tabs from multiple sources
     - Good for cross-referencing different versions
     - Includes power tabs and guitar pro files
     - **USEFUL** for finding additional sources
   
   - **Ultimate Guitar** (FALLBACK ONLY): `https://www.ultimate-guitar.com/search.php?title=[song]+[artist]`
     - Use ONLY as last resort if other sources unavailable
     - If used, require 4+ star ratings AND 100+ votes
     - Must cross-verify with at least 2 other sources
     - **NOTE**: Quality varies significantly, use with caution
   
   **B. Historical/Theoretical Sources:**
   - **Wikipedia**: `https://en.wikipedia.org/wiki/[Song_Title]`
     - Album information, release dates, chart positions
     - Recording details, personnel, equipment used
     - Cultural context and musical significance
   
   - **AllMusic**: `https://www.allmusic.com/search/songs/[song]+[artist]`
     - Professional music analysis and reviews
     - Genre classification and influences
     - Technical performance details
   
   - **Songfacts**: `https://www.songfacts.com/search?q=[song]+[artist]`
     - Song writing credits and inspiration
     - Recording session details
     - Equipment and production information
   
   - **Official Band Sources**: Band websites, interviews, documentaries
     - Direct quotes about techniques and equipment
     - Original intentions and creative process

   **C. Cross-Validation Requirements:**
   - ✅ Tablature verified across at least 3 different QUALITY tab sources
   - ✅ Prioritize Guitar World → Songsterr → TabsGuru → 911Tabs
   - ✅ Use Ultimate Guitar ONLY as fallback with strict criteria
   - ✅ Tuning confirmed from multiple sources (never assume standard)
   - ✅ Tempo verified with metronome or official recordings
   - ✅ Key signature confirmed through harmonic analysis
   - ✅ Equipment details verified from multiple sources
   - ✅ Chord progressions cross-checked between sources
   - ✅ Historical context fact-checked

2. **Create Research Summary Document**
   - **Location:** `src/data/songs/_research-notes/[song-slug]-research.md`
   - **Purpose:** Store all source information for reference and fact-checking
   
   **Required Research Summary Format:**
   ```markdown
   # [Song Title] - [Artist] Research Summary
   
   ## Basic Information
   - **Album:** [Album Name] ([Year])
   - **Genre:** [Primary Genre / Subgenre]
   - **Length:** [Duration]
   - **Writers:** [Songwriting Credits]
   - **Producers:** [Production Credits]
   
   ## Technical Details (VERIFIED)
   - **Key:** [Actual Key] (Sources: [list sources])
   - **Tempo:** [BPM] (Sources: [list sources])
   - **Tuning:** [Exact Tuning] (Sources: [list sources])
   - **Time Signature:** [Primary time sig]
   
   ## Equipment Used (VERIFIED)
   - **Guitar:** [Specific models used in recording]
   - **Amplifier:** [Specific amps used]
   - **Effects:** [Documented effects chain]
   - **Sources:** [Equipment source documentation]
   
   ## Musical Analysis
   - **Song Structure:** [Verse/Chorus/Bridge layout]
   - **Chord Progressions:** [Primary progressions with Roman numerals]
   - **Scales Used:** [Primary scales and modes]
   - **Key Techniques:** [Documented playing techniques]
   
   ## Historical Context
   - **Recording Location:** [Studio/Location]
   - **Recording Date:** [When recorded]
   - **Chart Performance:** [Peak positions]
   - **Cultural Impact:** [Notable covers, influence]
   
   ## Sources Used
   1. Wikipedia: [URL]
   2. AllMusic: [URL] 
   3. Songfacts: [URL]
   4. Guitar World/Official: [Magazine tabs or official sources]
   5. Songsterr: [Interactive tab URL if available]
   6. TabsGuru: [Professional transcription versions]
   7. 911Tabs: [Cross-reference sources used]
   8. Ultimate Guitar: [ONLY if used as fallback - specific tab versions with ratings]
   9. [Additional sources...]
   
   ## Fact-Check Notes
   - [Any discrepancies found between sources]
   - [Final decisions made when sources conflict]
   - [Additional verification needed]
   ```

3. **Create Reference File**
   - **Location:** `src/data/songs/_reference-tabs/[song-slug].tab`
   - **Use exact naming:** Match the song slug you'll use for the JSON file

3. **Required Reference Tab Format:**
```
# [Song Title] - [Artist]
# Internal Reference Tab  
# Key: [Key], Tempo: [BPM], Tuning: [Tuning]
# Research Summary: See _research-notes/[song-slug]-research.md
# Primary Sources: [List main tab sources used, prioritizing quality]

## Main Riff/Intro
[Exact tablature notation from verified sources]

## Verse Progression
[Chord progression and rhythm patterns]

## Chorus Progression  
[Chord progression and rhythm patterns]

## Solo/Bridge (if applicable)
[Key positions and techniques]

## Key Techniques
# 1. [Primary technique with specific details]
# 2. [Secondary technique with specific details]
# 3. [Any special techniques or equipment notes]

## Equipment Notes (VERIFIED from research)
# Guitar: [Specific models used in recording]
# Amp: [Specific amplifiers used]
# Effects: [Documented effects chain]
```

4. **Enhanced Quality Check**
   - [ ] Research summary document created with all sources
   - [ ] Technical details verified across multiple sources
   - [ ] Tuning confirmed (not assumed to be standard)
   - [ ] Equipment information fact-checked
   - [ ] Complete song structure covered
   - [ ] Accurate chord progressions noted
   - [ ] Key techniques identified with details
   - [ ] Tempo and key information cross-verified
   - [ ] Historical context researched and documented

**⚠️ CRITICAL:** Do not proceed to Step 2 until BOTH the research summary AND reference tab files are complete and accurate.

---

### STEP 2: CREATE JSON DATA FILE

**Purpose:** Convert extracted content into structured data using internal reference for accuracy.

1. **Copy Template**
```bash
cp src/data/songs/_template.json src/data/songs/[song-slug].json
```

2. **Fill All Placeholders** (Reference your internal tab file throughout)

3. **CRITICAL STRUCTURE REQUIREMENTS:**

**✅ CORRECT Property Names:**
- `sections` (NOT `songSections`)
- `similarTechniques` (NOT `similarSongs`) 
- `timeStamp` format: `"0:00-0:15"` (NOT `"0:00 - 0:15"`)

**✅ REQUIRED Sections Structure:**
```json
"sections": [
  {
    "name": "Section Name",
    "timeStamp": "0:00-0:15", 
    "technique": "Primary Technique",
    "key": "Song Key",
    "description": "Detailed description",
    "chords": ["Chord1", "Chord2", "Chord3"],
    "progression": "Chord1 - Chord2 - Chord3 - Chord1",
    "vexTab": "VexTab notation (when possible)",
    "tabs": "ASCII tabs (fallback when VexTab not available)",
    "notes": [
      "Performance note 1",
      "Performance note 2"
    ]
  }
]
```

**✅ REQUIRED RelatedSongs Structure:**
```json
"relatedSongs": {
  "acdc": [
    {
      "title": "Song Title",
      "link": "/lessons/songs/song-analysis/song-slug",
      "similarity": "Why this song is similar"
    }
  ],
  "similarTechniques": [
    {
      "title": "Song Title", 
      "artist": "Artist Name",
      "technique": "Specific Technique",
      "similarity": "Technical relationship description"
    }
  ]
}
```

**✅ REQUIRED Techniques with Chords:**
```json
"techniques": [
  {
    "name": "Power Chords",
    "description": "Description",
    "difficulty": "Intermediate",
    "primaryTechnique": true,
    "details": {
      "chords": ["B5", "E5", "F#5"],
      "progression": "B5 - E5 - F#5 - B5",
      "notes": ["Technical note 1"],
      "tips": ["Practice tip 1"]
    }
  }
]
```

4. **Content Guidelines:**
   - **Use internal reference tab** to verify all technical details
   - **Include chord arrays** for automatic chord diagram generation
   - **Add VexTab notation** when possible (preferred over ASCII tabs)
   - **Write educational content** appropriate for the difficulty level
   - **Cross-reference related songs** already in the system

5. **Validation:**
   - [ ] All placeholders replaced with real content
   - [ ] Chord arrays included in sections and techniques
   - [ ] Technical details match internal reference tab
   - [ ] JSON syntax is valid (use online validator)
   - [ ] No references to external tabs/sources

---

### STEP 3: CREATE PAGE USING TEMPLATE

**Purpose:** Create minimal page component that leverages the JSON data system.

1. **Create Directory:**
```bash
mkdir -p "src/app/lessons/songs/song-analysis/[song-slug]"
```

2. **Copy Template:**
```bash
cp "src/components/SongAnalysis/_page-template.tsx" "src/app/lessons/songs/song-analysis/[song-slug]/page.tsx"
```

3. **Customize Template** (Follow EXACT format):
```tsx
"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function SongNameAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="song-slug" 
      displayName="Song Display Name" 
    />
  );
}
```

4. **Naming Examples:**
   - **Function Name:** `BackInBlackAnalysis`, `YouShookMeAllNightLongAnalysis`
   - **songSlug:** `"back-in-black"`, `"you-shook-me-all-night-long"`
   - **displayName:** `"Back in Black"`, `"You Shook Me All Night Long"`

5. **Validation:**
   - [ ] Function name follows PascalCase convention
   - [ ] songSlug matches JSON filename (without .json)
   - [ ] displayName is user-friendly
   - [ ] No extra code or modifications to template

---

### STEP 4: UPDATE DATA REGISTRY

**Purpose:** Register the new song in the system so it can be loaded.

1. **Add Import to `src/lib/songData.ts`:**
```typescript
import songSlugData from '@/data/songs/song-slug.json';
```

2. **Add to songDataMap Object:**
```typescript
export function getSongData(songSlug: string): SongData | null {
  const songDataMap: Record<string, SongData> = {
    'thunderstruck': thunderstruckData as SongData,
    'for-those-about-to-rock': forThoseAboutToRockData as SongData,
    'back-in-black': backInBlackData as SongData,
    'highway-to-hell': highwayToHellData as SongData,
    'song-slug': songSlugData as SongData, // ADD NEW SONG HERE
  };
  
  return songDataMap[songSlug] || null;
}
```

3. **Add to getAllSongSlugs Function:**
```typescript
export function getAllSongSlugs(): string[] {
  return [
    'thunderstruck',
    'for-those-about-to-rock', 
    'back-in-black',
    'highway-to-hell',
    'song-slug' // ADD NEW SONG HERE
  ];
}
```

4. **Validation:**
   - [ ] Import statement matches exact filename
   - [ ] Song slug added to both functions
   - [ ] Maintains alphabetical or logical order

---

### STEP 5: COMPREHENSIVE VALIDATION

**Purpose:** Ensure everything works before considering the conversion complete.

1. **TypeScript Compilation:**
```bash
npx tsc --noEmit
```
   - [ ] No TypeScript errors
   - [ ] All imports resolve correctly
   - [ ] Data structure matches types

2. **Build Process:**
```bash
npm run build
```
   - [ ] Build completes successfully
   - [ ] No runtime errors during build
   - [ ] All pages generate correctly

3. **Lint Checks:**
```bash
npm run lint
```
   - [ ] No linting errors
   - [ ] Code follows project standards
   - [ ] No unused imports or variables

4. **JSON Validation:**
   - [ ] JSON syntax is valid (use online validator)
   - [ ] All required fields are present
   - [ ] Data structure matches template exactly

5. **Runtime Testing:**
```bash
npm run dev
```
   - [ ] Navigate to `/lessons/songs/song-analysis/[song-slug]`
   - [ ] Page loads without errors
   - [ ] All content displays correctly
   - [ ] Chord diagrams appear automatically
   - [ ] VexTab notation renders (if included)
   - [ ] Related songs section populated
   - [ ] Navigation links work

---

## ❌ COMMON ERRORS & SOLUTIONS

### Data Structure Errors
**Problem:** Wrong property names in JSON
**Solution:** Use `sections` NOT `songSections`, `similarTechniques` NOT `similarSongs`

### Missing Chord Diagrams
**Problem:** Chord diagrams don't appear
**Solution:** Include `chords` arrays in sections and technique details

### Inaccurate Technical Information
**Problem:** Wrong tuning, key, or equipment information
**Solution:** Complete multi-source research protocol, create research summary document, cross-verify all technical details

### Build Failures
**Problem:** TypeScript or build errors
**Solution:** Check imports in songData.ts, verify JSON syntax, ensure component exports match

### Component Errors
**Problem:** Page doesn't render or shows errors
**Solution:** Follow template exactly, verify songSlug matches JSON filename

### Missing Content
**Problem:** Sections appear empty or malformed  
**Solution:** Double-check JSON structure against template, verify all required fields

---

## 🚨 CONVERSION WORKFLOW (For Existing Pages)

When converting an existing page, follow this extraction process:

### PHASE A: EXTRACT EXISTING CONTENT
1. **Read the existing page completely**
2. **Extract:** Song metadata (title, artist, album, year, etc.)
3. **Extract:** All techniques with descriptions and difficulty levels
4. **Extract:** Song sections with timing and descriptions
5. **Extract:** Equipment recommendations and settings
6. **Extract:** Learning path progression
7. **Extract:** Related songs and cross-references

### PHASE B: RESEARCH AND VERIFY
1. **Research tablature** on Ultimate Guitar for the extracted song
2. **Create internal reference tab** with verified technical content
3. **Cross-reference** extracted content with accurate tablature
4. **Note discrepancies** and prioritize accuracy from verified sources

### PHASE C: RESTRUCTURE AND IMPLEMENT
1. **Map extracted content** to JSON template structure
2. **Fill JSON file** using internal reference tab for accuracy
3. **Replace existing page** entirely with template component
4. **Update data registry** and validate

### PHASE D: QUALITY ASSURANCE
1. **Compare** new page with original for content completeness
2. **Test** all functionality and visual elements
3. **Verify** technical accuracy against reference material
4. **Validate** all build and runtime requirements

---

## ✅ SUCCESS CRITERIA

A conversion is complete when ALL of these criteria are met:

- [ ] **Research Phase Complete:**
  - [ ] Multi-source research completed (Wikipedia, AllMusic, Songfacts, tabs)
  - [ ] Research summary document created with all sources documented
  - [ ] Technical details verified across multiple sources
  - [ ] Equipment information fact-checked and verified
- [ ] **File Creation Complete:**
  - [ ] Internal reference tab file created and accurate
  - [ ] JSON file follows exact template structure
  - [ ] All placeholders replaced with meaningful content
  - [ ] Chord arrays included for automatic chord diagrams
  - [ ] Page component uses exact template format
  - [ ] Data registry updated with import and mappings
- [ ] **Technical Validation:**
  - [ ] TypeScript compilation passes clean
  - [ ] Build process completes without errors
  - [ ] Lint checks pass
  - [ ] JSON syntax validated
- [ ] **Functional Testing:**
  - [ ] Page loads and displays correctly
  - [ ] All interactive elements work
  - [ ] Responsive design functions on mobile
  - [ ] Related songs and navigation work
- [ ] **Content Quality:**
  - [ ] Content is educational and accurate
  - [ ] No assumptions made about tuning or key
  - [ ] Equipment recommendations are historically accurate

---

## 📚 REFERENCE FILES

### Template Files
- `src/data/songs/_template.json` - JSON data template
- `src/components/SongAnalysis/_page-template.tsx` - Page component template
- `src/data/songs/_reference-tabs/README.md` - Reference tab guidelines
- `src/data/songs/_research-notes/` - Research summary documents for fact-checking

### Research Sources Protocol

**Historical/Theoretical Sources:**
- **Wikipedia**: For historical context, album information, chart data
- **AllMusic**: For professional music analysis and genre classification  
- **Songfacts**: For songwriting details and recording information
- **Official Sources**: Band interviews, documentaries, liner notes

**Technical/Tablature Sources (Use Multiple):**
- **Ultimate Guitar**: Community tabs (4+ star ratings only)
- **Songsterr**: Interactive tabs with playback and timing
- **911Tabs**: Tab aggregation and cross-referencing
- **TabsGuru**: Professional transcriptions and complex arrangements
- **Guitar World/Official**: Magazine tabs and artist-verified transcriptions

**Quality Standards:**
- Verify tablature across at least 3 different sources
- Priority: Official > Professional > Community (high-rated)
- Cross-check tuning, key, and chord progressions between sources

### Example Implementations
- `src/data/songs/thunderstruck.json` - Complex song with tapping
- `src/data/songs/back-in-black.json` - Power chord focused song
- `src/app/lessons/songs/song-analysis/thunderstruck/page.tsx` - Template usage example

### Documentation
- `docs/song-analysis-system.md` - Complete system documentation
- `src/lib/songData.ts` - Data loading and type definitions

---

## 🎯 FINAL NOTE

This prompt represents the complete, battle-tested workflow for song analysis page conversion. It incorporates all lessons learned from converting Thunderstruck, For Those About to Rock, Back in Black, Highway to Hell, and the beginning of You Shook Me All Night Long.

**Follow every step in order. Do not skip steps. Validate at each stage.**

When in doubt, reference the existing implementations and template files. They are the authoritative examples of correct structure and formatting.
