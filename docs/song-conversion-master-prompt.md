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

### STEP 1: CREATE INTERNA**When in doubt, reference the existing implementations and template files. They are the authoritative examples of correct structure and formatting.**

---

## 🔗 LINK VERIFICATION & MAINTENANCE PROTOCOL

### **Initial Link Verification (Required Before Research)**
1. **Test All Source URLs:**
   ```bash
   # Create verification checklist for each song
   - [ ] Wikipedia: [test basic URL format]
   - [ ] AllMusic: [search and verify album/song pages exist]  
   - [ ] Songfacts: [search and verify song entry exists]
   - [ ] Songsterr: [search and verify tab exists with correct URL format]
   - [ ] Official sources: [verify band websites, interview sources]
   ```

2. **Document Link Status:**
   - **WORKING:** Full URL verified and accessible
   - **VERIFIED-PARTIAL:** Content exists but URL needs refinement
   - **SUBSCRIPTION:** Content exists but requires premium access
   - **NOT-FOUND:** Content does not exist at expected location
   - **REFERENCE-ONLY:** Source mentioned for completeness but not directly accessible

3. **URL Format Standards:**
   - **Wikipedia:** `https://en.wikipedia.org/wiki/[Exact_Song_Title]`
   - **AllMusic:** `https://www.allmusic.com/album/[album-slug]` or `/song/[song-slug]`
   - **Songfacts:** `https://www.songfacts.com/facts/[artist]/[song-title]`
   - **Songsterr:** `https://www.songsterr.com/a/wsa/[artist]-[song]-tab-s[number]`

### **Link Maintenance Standards**
1. **Research Phase:** All links must be tested and verified before completing research summary
2. **Documentation Phase:** Include verification date and status for each link
3. **Regular Updates:** Plan for periodic re-verification of critical links
4. **Fallback Documentation:** Always include alternative sources when primary links may change

### **Handling Problematic Links**
1. **Broken Links:** Document as `[URL - NOT ACCESSIBLE as of [date]]`
2. **Subscription Content:** Note as `[SUBSCRIPTION REQUIRED - Reference only]`
3. **Changed URLs:** Update with current URL and note previous URL if helpful
4. **Missing Content:** Document search attempts and alternative sources found REFERENCE TAB FILE ⭐ (REQUIRED FIRST)

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
   
2. **Create Comprehensive Research Summary Document**
   - **Location:** `src/data/songs/_research-notes/[song-slug]-research.md`
   - **Purpose:** Store all source information for reference and fact-checking with verified links
   
   **🎯 ENHANCED RESEARCH SUMMARY CREATION PROCESS:**

**A. Multi-Source Link Verification Protocol:**
```markdown
# LINK VERIFICATION CHECKLIST (Complete BEFORE writing summary)
- [ ] Wikipedia article exists and is accurate: [test URL]
- [ ] AllMusic page exists for album/song: [test URL]
- [ ] Songfacts entry exists: [test URL] 
- [ ] Songsterr tab exists and is accessible: [verify specific URL]
- [ ] Additional sources located and tested: [list]
- [ ] All URLs working and pointing to correct content
- [ ] Premium/subscription sources noted with access requirements
```

**B. Required Research Summary Format (EXPANDED):**
```markdown
# [Song Title] - [Artist] Research Summary

## Research Methodology
- **Research Date:** [Date completed]
- **Primary Researcher:** [If applicable]
- **Verification Status:** [Complete/Partial/Ongoing]
- **Last Updated:** [Date of last verification]

## Basic Information (VERIFIED)
- **Album:** [Album Name] ([Year])
- **Genre:** [Primary Genre / Subgenre]
- **Length:** [Duration] (Source: [specific source])
- **Writers:** [Songwriting Credits] (Source: [liner notes/ASCAP/BMI])
- **Producers:** [Production Credits] (Source: [album credits])
- **Record Label:** [Label] (Source: [album information])
- **Recording Date:** [When recorded] (Source: [session documentation])
- **Release Date:** [Original release] (Source: [discography])

## Technical Details (MULTI-SOURCE VERIFIED)
- **Key:** [Actual Key] 
  - Sources: [Source 1], [Source 2], [Source 3]
  - Verification Method: [Harmonic analysis/multiple tabs/official source]
  - Discrepancies: [Any conflicts between sources and resolution]

- **Tempo:** [BPM]
  - Sources: [Source 1], [Source 2], [Source 3] 
  - Verification Method: [Metronome analysis/official tempo/multiple sources]
  - Live vs Studio: [Any tempo variations noted]

- **Tuning:** [Exact Tuning]
  - Sources: [Source 1], [Source 2], [Source 3]
  - Confidence Level: [High/Medium/Low based on source agreement]
  - Alternative Tunings: [Any documented variations]

- **Time Signature:** [Primary time sig]
  - Changes: [Any meter changes in song]
  - Complexity: [Straight/syncopated/complex rhythms]

## Equipment Used (MULTI-SOURCE VERIFIED)
- **Guitar (Primary Recording):** [Specific models used in recording]
  - Source Documentation: [Interview/magazine/session notes]
  - Pickup Configuration: [Single coil/humbucker/mixed]
  - String Gauge: [If documented]
  - Alternative Guitars: [Any additional guitars used]

- **Amplifier (Primary Recording):** [Specific amps used]
  - Source Documentation: [Interview/magazine/session notes]  
  - Cabinet Configuration: [Speaker setup]
  - Microphone Setup: [Recording microphone placement if known]

- **Effects (Recording Chain):** [Documented effects chain]
  - Source Documentation: [Interview/gear lists/session notes]
  - Signal Chain Order: [Documented order if available]
  - Settings: [Specific settings if documented]
  - Studio vs Live: [Any differences noted]

- **Recording Studio Equipment:** [Console, additional processing]
  - Studio: [Recording location and equipment]
  - Engineer: [Recording engineer and techniques]

## Musical Analysis (THEORY-VERIFIED)
- **Song Structure:** [Verse/Chorus/Bridge layout with timing]
  - Form: [AABA, Verse-Chorus, etc.]
  - Length Analysis: [Section lengths and proportions]
  - Arrangement: [Instrumentation by section]

- **Chord Progressions:** [Primary progressions with Roman numerals]
  - Verse: [Progression with analysis]
  - Chorus: [Progression with analysis] 
  - Bridge: [If applicable]
  - Modulations: [Any key changes]
  - Borrowed Chords: [Non-diatonic chords and function]

- **Scales Used:** [Primary scales and modes]
  - Lead Guitar: [Scales used in solos]
  - Rhythm Guitar: [Harmonic foundation]
  - Modal Character: [Any modal inflections]

- **Key Techniques:** [Documented playing techniques]
  - Primary Technique: [Main playing approach]
  - Secondary Techniques: [Additional techniques used]
  - Difficulty Assessment: [Skill level required]
  - Signature Elements: [What makes this song unique]

## Historical Context (FACT-CHECKED)
- **Recording Location:** [Studio/Location]
  - Studio Details: [Equipment, history, other recordings made there]
  - Session Musicians: [Additional personnel if any]

- **Recording Date:** [When recorded]
  - Session Length: [How long recording took if known]
  - Producer Influence: [Producer's contributions]

- **Chart Performance:** [Peak positions]
  - Billboard Hot 100: [Peak position and weeks]
  - Album Charts: [Album performance]
  - International Charts: [Significant international performance]
  - Certifications: [Gold/Platinum status]

- **Cultural Impact:** [Notable covers, influence]
  - Notable Covers: [Significant cover versions]
  - Film/TV Usage: [Soundtracks and media appearances]
  - Guitar Education: [Role in guitar instruction]
  - Influence on Other Artists: [Documented influence]

## Sources Used (VERIFIED LINKS)
### Primary Historical Sources
1. **Wikipedia:** [EXACT URL - tested and working]
   - Reliability: [High/Medium/Low]
   - Information Used: [Specific data extracted]
   - Last Verified: [Date]

2. **AllMusic:** [EXACT URL - tested and working]
   - Reliability: [High/Medium/Low]
   - Information Used: [Specific data extracted]
   - Last Verified: [Date]

3. **Songfacts:** [EXACT URL - tested and working]
   - Reliability: [High/Medium/Low]
   - Information Used: [Specific data extracted]
   - Last Verified: [Date]

### Professional Music Sources
4. **Guitar World Magazine:** [Access status and specific issues]
   - Status: [Available/Reference only/Not accessible]
   - Specific Issues: [Issue numbers and dates if available]
   - Information Used: [What data was extracted]

5. **Revolver Magazine:** [Access status]
   - Status: [Available/Reference only/Not accessible]
   - Information Used: [What data was extracted]

### Interactive Tab Sources  
6. **Songsterr:** [EXACT VERIFIED URL]
   - URL: [Complete working URL tested on research date]
   - Tab Quality: [Professional/Community verified]
   - Accuracy Assessment: [High/Medium/Low]
   - Last Verified: [Date]

7. **TabsGuru:** [Access status and URL if available]
   - Status: [Available/Premium/Not accessible]
   - URL: [If publicly accessible]
   - Quality Assessment: [Professional level assessment]

8. **911Tabs:** [Cross-reference status]
   - Sources Found: [Number of tabs cross-referenced]
   - Quality Range: [Range of quality found]
   - Consensus Points: [Where sources agree]

### Fallback Sources (Only if primary sources insufficient)
9. **Ultimate Guitar:** [ONLY if used - with strict criteria]
   - Tab URL: [Specific tab version used]
   - Rating: [Must be 4+ stars]
   - Vote Count: [Must be 100+ votes]
   - Cross-Verification: [Additional sources used to verify]

### Official/Band Sources
10. **Band Interviews:** [Specific interview sources]
    - Interview Date: [When conducted]
    - Interviewer/Publication: [Source]
    - Relevant Information: [Equipment, technique, or historical details]

11. **Official Documentation:** [Album liner notes, press releases]
    - Source Type: [Liner notes/press kit/official website]
    - Information Used: [Credits, technical details]

12. **Documentary Sources:** [Behind the scenes, making-of content]
    - Documentary Title: [Name and year]
    - Relevant Segments: [Specific information extracted]

## Source Quality Assessment
### High Reliability Sources
- [List sources with verified information and high accuracy]

### Medium Reliability Sources  
- [List sources with generally good information but some gaps]

### Low Reliability Sources
- [List sources used only for cross-reference or when no alternatives]

### Conflicting Information
- [Document any conflicts between sources and resolution method]

## Fact-Check Notes (DETAILED)
### Technical Verification
- **Tuning Verification:** [Method used and confidence level]
- **Tempo Verification:** [Analysis method and accuracy]  
- **Key Verification:** [Harmonic analysis results]
- **Equipment Verification:** [Source reliability assessment]

### Historical Verification
- **Date Verification:** [Cross-checked against multiple sources]
- **Personnel Verification:** [Credits verified against multiple sources]
- **Chart Data Verification:** [Official chart sources consulted]

### Discrepancies Found and Resolutions
- [Document specific conflicts between sources]
- [Explain resolution method for each conflict] 
- [Note confidence level in final decisions]

### Additional Verification Needed
- [List any information that needs further verification]
- [Note sources that could provide missing information]
- [Priority level for additional research]

## Research Completion Status
- [ ] **Basic Information:** Complete and verified
- [ ] **Technical Details:** Multi-source verified  
- [ ] **Equipment Information:** Fact-checked and documented
- [ ] **Musical Analysis:** Theory-verified
- [ ] **Historical Context:** Cross-referenced
- [ ] **Source Links:** All tested and working
- [ ] **Fact-Check:** Discrepancies resolved
- [ ] **Quality Assessment:** Reliability ratings assigned

## Internal File References
- **Reference Tab:** `_reference-tabs/[song-slug].tab`
- **JSON Data:** `[song-slug].json` (when created)
- **Page Component:** `song-analysis/[song-slug]/page.tsx` (when created)
- **Related Research:** [Links to other related song research files]
```

**🔧 RESEARCH SUMMARY COMPLETION CHECKLIST:**
- [ ] **All URLs tested** and working on research date
- [ ] **Multi-source verification** completed for technical details
- [ ] **Source reliability** assessed and documented  
- [ ] **Conflicts resolved** with clear documentation
- [ ] **Equipment details** verified from authoritative sources
- [ ] **Historical context** fact-checked against multiple sources
- [ ] **Cross-references** to internal files included
- [ ] **Completion status** accurately reflects research depth

3. **Create Complete Reference File**
   - **Location:** `src/data/songs/_reference-tabs/[song-slug].tab`
   - **Use exact naming:** Match the song slug you'll use for the JSON file
   - **Purpose:** Create comprehensive internal tablature reference with verified technical details

**🎯 COMPLETE REFERENCE TAB CREATION PROCESS:**

**A. Header Section (REQUIRED):**
```
# [Song Title] - [Artist]
# Internal Reference Tab - VERIFIED MULTI-SOURCE
# Key: [Key], Tempo: [BPM], Tuning: [Tuning]
# Sources: [Primary sources used - Guitar World, Songsterr, TabsGuru, etc.]
# Research Summary: See _research-notes/[song-slug]-research.md

## Song Information (VERIFIED)
# Album: [Album Name] ([Year])
# Writers: [Songwriting Credits]
# Producers: [Production Credits]
# Chart Performance: [Peak positions when notable]
# Duration: [Song length]
```

**B. Complete Musical Structure (REQUIRED ALL SECTIONS):**
```
## Main Riff/Intro (0:00-0:XX)
# [Description of riff character and style]
# [Technique notes: picking, fretting, dynamics]
[Exact tablature notation from verified sources with measures/timing]

## Verse Progression (0:XX-0:XX)
# [Chord progression with Roman numeral analysis]
# [Strumming/picking pattern description]
# [Dynamic and timing notes]
[Tablature showing chord shapes and rhythm patterns]

## Pre-Chorus (0:XX-0:XX) [if applicable]
# [Transition technique and progression]
[Tablature notation]

## Chorus Progression (0:XX-0:XX)
# [Chord progression with Roman numeral analysis]
# [Arrangement notes - full band, stripped down, etc.]
[Tablature showing chord shapes and rhythm patterns]

## Bridge/Break (0:XX-0:XX) [if applicable]
# [Key change, tempo change, or arrangement notes]
[Tablature notation]

## Guitar Solo (0:XX-0:XX) [if applicable]
# [Scale/mode information]
# [Key positions and fret areas used]
# [Primary techniques: bending, vibrato, etc.]
[Tablature showing main solo phrases and techniques]

## Outro/Ending (0:XX-0:XX)
# [Fade out, ritardando, or definitive ending notes]
[Tablature notation]
```

**C. Technical Analysis Section (REQUIRED):**
```
## Key Techniques (PRIORITY ORDER)
# 1. [PRIMARY TECHNIQUE]: [Detailed description with specific fret positions]
#    - Difficulty: [Beginner/Intermediate/Advanced]
#    - Practice Notes: [Specific exercises or approaches]
#    - Common Mistakes: [What to avoid]

# 2. [SECONDARY TECHNIQUE]: [Detailed description]
#    - Application: [Where in song this appears]
#    - Variations: [Alternative approaches]

# 3. [ADDITIONAL TECHNIQUES]: [Any special techniques or equipment notes]

## Chord Voicings (COMPLETE LIST)
# [Chord Name]: [Fret positions] - [Function in key]
# Example: E5: 022xxx - Tonic power chord
# [Include ALL chords used in song with specific fingerings]

## Scale/Mode Analysis
# Primary Scale: [Scale name and notes]
# Secondary Scales: [Any additional scales used]
# Modal Characteristics: [If applicable]
# Key Centers: [Any modulations or key changes]

## Rhythm Patterns
# Time Signature: [Primary time signature]
# Subdivision: [Eighth notes, sixteenth notes, etc.]
# Groove: [Straight, swing, shuffle, etc.]
# Accent Patterns: [Where emphasis falls]
```

**D. Equipment Section (VERIFIED from research):**
```
## Equipment Used (VERIFIED from research summary)
# Guitar (Recording): [Specific models used in original recording]
#   - Pickups: [Pickup configuration]
#   - Strings: [String gauge if known]
#   - Setup Notes: [Action, intonation specifics if documented]

# Amplifier (Recording): [Specific amplifiers used]
#   - Settings: [Gain, EQ settings if documented]
#   - Cabinet: [Speaker configuration]
#   - Microphone: [Recording microphone if known]

# Effects (Recording): [Documented effects chain]
#   - Order: [Signal chain order]
#   - Settings: [Specific effect settings if documented]

## Modern Recreation Equipment
# Budget Options: [Affordable alternatives]
# Mid-Range Options: [Good quality alternatives]
# Professional Options: [High-end recreation equipment]

## Tone Settings Guide
# Amp Settings: [Recommended settings for recreation]
# EQ Adjustments: [Frequency adjustments needed]
# Recording Tips: [How to capture similar tone]
```

**E. Reference and Cross-Check Section (REQUIRED):**
```
## Source Verification
# Primary Sources Used:
#   - Source 1: [Guitar World/Official] - [Verification status]
#   - Source 2: [Songsterr] - [URL if verified] - [Accuracy notes]
#   - Source 3: [TabsGuru] - [Verification status]
#   - Cross-Reference: [911Tabs, other sources]

## Discrepancies Found
# [Any differences between sources and how resolved]
# [Final decisions made when sources conflict]

## Quality Assurance
# ✅ Tuning verified across multiple sources
# ✅ Chord progressions cross-checked
# ✅ Tempo verified with metronome
# ✅ Equipment details fact-checked
# ✅ Historical context verified

## Related Internal Files
# Research Summary: _research-notes/[song-slug]-research.md
# JSON Data: [song-slug].json
# Page Component: song-analysis/[song-slug]/page.tsx
```

**🔧 REFERENCE TAB COMPLETION CHECKLIST:**
- [ ] **Header complete** with verified technical details
- [ ] **All song sections** covered with timing
- [ ] **Complete tablature** for each section
- [ ] **Technique analysis** with difficulty ratings
- [ ] **Chord voicings** with specific fingerings
- [ ] **Equipment documentation** from research
- [ ] **Source verification** completed
- [ ] **Cross-reference** with research summary file
- [ ] **Quality assurance** checklist completed
- [ ] **Modern recreation** equipment suggestions included

4. **Enhanced Quality Check (COMPREHENSIVE VERIFICATION)**
   
   **🎯 RESEARCH PHASE COMPLETION REQUIREMENTS:**
   - [ ] **Research summary document** created with comprehensive source verification
   - [ ] **All URLs tested** and verified working on research completion date
   - [ ] **Technical details verified** across minimum 3 quality sources
   - [ ] **Tuning confirmed** from multiple sources (never assumed to be standard)
   - [ ] **Equipment information** fact-checked against authoritative sources
   - [ ] **Historical context** researched and cross-verified
   - [ ] **Source conflicts documented** and resolution methods explained
   - [ ] **Reliability assessment** completed for all sources used

   **🎯 REFERENCE TAB COMPLETION REQUIREMENTS:**
   - [ ] **Complete song structure** covered with accurate timing markers
   - [ ] **All sections tabbed** with verified chord progressions and fingerings
   - [ ] **Technique analysis** included with difficulty ratings and practice notes
   - [ ] **Equipment documentation** matches research summary findings
   - [ ] **Cross-references** to research summary file included
   - [ ] **Quality assurance checklist** completed within tab file
   - [ ] **Modern recreation guidance** provided for equipment alternatives

   **🎯 SOURCE VERIFICATION STANDARDS:**
   - [ ] **Primary sources prioritized:** Guitar World/Official → Songsterr → TabsGuru → 911Tabs
   - [ ] **Ultimate Guitar used only as fallback** with 4+ stars AND 100+ votes
   - [ ] **Cross-verification completed** for all technical claims
   - [ ] **Link accuracy verified** on research completion date
   - [ ] **Source reliability documented** for future reference
   - [ ] **Equipment claims fact-checked** against band interviews and documentation

   **🎯 TECHNICAL ACCURACY REQUIREMENTS:**
   - [ ] **Key signature confirmed** through harmonic analysis and multiple sources
   - [ ] **Tempo verified** with metronome analysis and cross-source confirmation
   - [ ] **Chord progressions analyzed** with Roman numeral notation
   - [ ] **Scale/mode usage documented** with theoretical backing
   - [ ] **Equipment specifications verified** from authoritative sources
   - [ ] **Recording details confirmed** from session documentation when available

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
  - [ ] **Multi-source research completed** (Wikipedia, AllMusic, Songfacts, verified tabs)
  - [ ] **Research summary document created** with all sources documented and links verified
  - [ ] **Technical details verified** across minimum 3 quality sources with conflict resolution
  - [ ] **Equipment information fact-checked** and verified against authoritative sources
  - [ ] **All source URLs tested** and working on research completion date
  - [ ] **Source reliability assessed** and documented for future reference
  - [ ] **Conflicts between sources resolved** with clear documentation of resolution method
- [ ] **File Creation Complete:**
  - [ ] **Internal reference tab file created** with comprehensive structure and verified accuracy
  - [ ] **Complete song structure documented** with timing, chord progressions, and technique analysis
  - [ ] **JSON file follows exact template structure** with all placeholders replaced
  - [ ] **All chord arrays included** for automatic chord diagram generation
  - [ ] **Cross-references between files** properly established (research ↔ tab ↔ JSON)
  - [ ] **Page component uses exact template format** with no modifications
  - [ ] **Data registry updated** with import and mappings
  - [ ] **Modern equipment alternatives** provided in reference materials
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
