# Song Analysis Research and Reference Creation Guide

## Overview

This guide provides the complete methodology for researching and creating reference materials for song analysis pages. This is **Step B1** in the song analysis creation process and must be completed before any JSON data creation or page development.

## Research Methodology

### Phase 1: Multi-Source Research Protocol

#### **A. Technical/Tablature Sources (Priority Order)**

**⭐ PRIMARY SOURCES (Use First):**

1. **Guitar World/Revolver Magazine Tabs**
   - Official magazine transcriptions
   - Based on interviews with original artists
   - Usually available in magazine archives or special issues
   - **Search Strategy**: `"[song title]" "[artist]" site:guitarworld.com tab OR tablature`
   - **Verification**: Look for official artist quotes or session musician credits

2. **Songsterr** - `https://www.songsterr.com/a/wa/search?pattern=[song]+[artist]`
   - Interactive tabs with accurate timing
   - Multi-instrument arrangements
   - Professional transcriptions with playback verification
   - **Quality Check**: Look for high vote counts and recent updates
   - **Format**: Provides tempo, timing, and multi-track arrangements

3. **TabsGuru** - `https://tabsguru.com/search/?q=[song]+[artist]`
   - High-quality professional transcriptions
   - Often includes official tabs when available
   - Good for complex songs and solos
   - **Quality Check**: Verify source attribution and transcriber credentials

**📊 SECONDARY SOURCES (Cross-Reference):**

4. **911Tabs** - `https://www.911tabs.com/search.php?search=[song]+[artist]`
   - Aggregates tabs from multiple sources
   - Good for cross-referencing different versions
   - Includes power tabs and guitar pro files
   - **Use For**: Finding alternative interpretations and additional sources

**⚠️ FALLBACK ONLY (Last Resort):**

5. **Ultimate Guitar** - `https://www.ultimate-guitar.com/search.php?title=[song]+[artist]`
   - **Use ONLY** when primary sources unavailable
   - **Requirements**: 4+ star ratings AND 100+ votes minimum
   - **Must cross-verify** with at least 2 other sources
   - **Quality varies significantly** - use with extreme caution

#### **B. Historical/Contextual Sources**

**Song Information & Context:**
- **Wikipedia**: `https://en.wikipedia.org/wiki/[Song_Title]`
  - Album information, release dates, chart positions
  - Recording details, personnel, equipment used
  - Cultural context and musical significance

- **AllMusic**: `https://www.allmusic.com/search/songs/[song]+[artist]`
  - Professional music analysis and reviews
  - Genre classification and influences
  - Technical performance details

- **Songfacts**: `https://www.songfacts.com/search?q=[song]+[artist]`
  - Songwriting credits and inspiration
  - Recording session details
  - Equipment and production information

**Official Band Sources:**
- Band websites, interviews, documentaries
- Direct quotes about techniques and equipment
- Original intentions and creative process
- Equipment specifications from gear interviews

### Phase 2: Cross-Validation Requirements

**✅ Technical Accuracy Checklist:**
- [ ] Tablature verified across **at least 3 different QUALITY tab sources**
- [ ] Prioritize: **Guitar World → Songsterr → TabsGuru → 911Tabs**
- [ ] Use Ultimate Guitar **ONLY as fallback** with strict 4+ stars, 100+ votes
- [ ] Tuning confirmed from multiple sources (**never assume standard**)
- [ ] Tempo verified with metronome analysis or official recordings
- [ ] Key signature confirmed through harmonic analysis
- [ ] Equipment details verified from multiple authoritative sources
- [ ] Chord progressions cross-checked between sources
- [ ] Historical context fact-checked against multiple sources

### Phase 3: Create Research Summary Document

**📁 Location**: `src/data/songs/_research_notes/[song-slug]-research.md`

**🎯 Required Research Summary Format:**

```markdown
# [Song Title] - [Artist] Research Summary

## Research Methodology
- **Research Date:** [Date completed]
- **Primary Researcher:** [If applicable]
- **Verification Status:** Complete/Partial/Ongoing
- **Last Updated:** [Date of last verification]
- **Sources Consulted:** [Total number] primary sources, [number] secondary sources

## Link Verification Status
- [ ] Wikipedia article verified: [✅/❌/⚠️ PARTIAL]
- [ ] AllMusic page verified: [✅/❌/⚠️ PARTIAL]
- [ ] Songfacts entry verified: [✅/❌/⚠️ PARTIAL]
- [ ] Songsterr tab verified: [✅/❌/⚠️ PARTIAL]
- [ ] Additional sources verified: [List status]

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

### Key Signature
- **Key:** [Actual Key]
- **Sources:** [Source 1], [Source 2], [Source 3]
- **Verification Method:** [Harmonic analysis/multiple tabs/official source]
- **Confidence Level:** High/Medium/Low
- **Discrepancies:** [Any conflicts between sources and resolution]

### Tempo
- **BPM:** [Tempo]
- **Sources:** [Source 1], [Source 2], [Source 3]
- **Verification Method:** [Metronome analysis/official tempo/multiple sources]
- **Live vs Studio:** [Any tempo variations noted]
- **Tempo Changes:** [Any tempo variations within song]

### Tuning
- **Tuning:** [Exact Tuning - never assume standard]
- **Sources:** [Source 1], [Source 2], [Source 3]
- **Confidence Level:** High/Medium/Low based on source agreement
- **Alternative Tunings:** [Any documented variations]
- **Capo Usage:** [If applicable]

### Time Signature
- **Primary:** [Time signature]
- **Changes:** [Any meter changes in song]
- **Complexity:** [Straight/syncopated/complex rhythms]

## Equipment Used (MULTI-SOURCE VERIFIED)

### Guitar (Primary Recording)
- **Model:** [Specific guitar models used in recording]
- **Sources:** [Interview/magazine/session notes]
- **Verification:** [Multiple source confirmation]

### Amplification
- **Amplifier:** [Specific amp models and settings]
- **Settings:** [Gain, EQ, volume settings when available]
- **Sources:** [Rig rundown/interview sources]

### Effects
- **Effects Chain:** [Specific pedals and processors used]
- **Settings:** [Specific effect settings when available]
- **Sources:** [Equipment interviews/rig analysis]

## Tablature Source Analysis

### Primary Tab Source
- **Source:** [Primary source used]
- **Quality Rating:** [Assessment of accuracy]
- **Completeness:** [Full song/partial sections]
- **Special Notes:** [Any unique elements or challenges]

### Cross-Reference Sources
1. **Source 2:** [Name and assessment]
2. **Source 3:** [Name and assessment]
3. **Source 4:** [Name and assessment]

### Discrepancies Found
- **Issue 1:** [Description and resolution]
- **Issue 2:** [Description and resolution]

## Key Techniques Identified
1. **[Technique Name]:** [Description and difficulty assessment]
2. **[Technique Name]:** [Description and difficulty assessment]
3. **[Technique Name]:** [Description and difficulty assessment]

## Song Structure Analysis
- **Intro:** [Duration and key elements]
- **Verse:** [Pattern and characteristics]
- **Chorus:** [Pattern and characteristics]
- **Bridge/Solo:** [Special sections]
- **Outro:** [Ending characteristics]

## Difficulty Assessment
- **Overall:** [Beginner/Intermediate/Advanced/Expert]
- **Rhythm Guitar:** [Assessment and reasoning]
- **Lead Guitar:** [Assessment and reasoning]
- **Bass:** [Assessment and reasoning]
- **Drums:** [Assessment and reasoning]

## Research Notes
- **Challenges:** [Any difficulties in finding reliable information]
- **Assumptions:** [Any assumptions made due to conflicting sources]
- **Future Updates:** [Areas that may need re-research]

## Source Links (VERIFIED)
### Primary Sources
- **Songsterr:** [Verified URL]
- **TabsGuru:** [Verified URL]
- **Guitar World:** [Verified URL or reference]

### Historical Sources
- **Wikipedia:** [Verified URL]
- **AllMusic:** [Verified URL]
- **Songfacts:** [Verified URL]

### Official Sources
- **Band Website:** [URL if applicable]
- **Interview Sources:** [Specific interview references]
- **Gear Sources:** [Equipment documentation]

## Verification Signatures
- **Technical Accuracy:** ✅ Verified by [method]
- **Historical Accuracy:** ✅ Verified by [method]
- **Equipment Accuracy:** ✅ Verified by [method]
```

### Phase 4: Create Internal Reference Tab File

**📁 Location**: `src/data/songs/_reference-tabs/[song-slug].tab`

**🎵 Required Reference Tab Format:**

```
# [Song Title] - [Artist]
# Internal Reference Tab - FOR ACCURACY VERIFICATION ONLY
# Key: [Key], Tempo: [BPM], Tuning: [Tuning]
# Primary Sources: [List top 3 sources used]
# Created: [Date]
# Last Verified: [Date]

## SONG STRUCTURE OVERVIEW
Intro: [Timing] | Verse: [Timing] | Chorus: [Timing] | Bridge: [Timing] | Outro: [Timing]

## MAIN RIFF/INTRO
# Timing: [Start-End]
# Technique: [Primary technique used]
# Difficulty: [Assessment]

e|------------------------------------------------
B|------------------------------------------------
G|------------------------------------------------
D|------------------------------------------------
A|------------------------------------------------
E|------------------------------------------------

## VERSE PROGRESSION
# Chords: [Chord progression]
# Timing: [Start-End]
# Technique: [Strumming pattern or picking style]

[Chord progression notation or tablature]

## CHORUS PROGRESSION  
# Chords: [Chord progression]
# Timing: [Start-End]
# Technique: [Strumming pattern or picking style]

[Chord progression notation or tablature]

## KEY TECHNIQUES REFERENCE
### [Technique 1 Name]
# Description: [Brief description]
# Difficulty: [Level]
# Fret Positions: [Key positions]

[Specific tablature examples]

### [Technique 2 Name]
# Description: [Brief description]  
# Difficulty: [Level]
# Fret Positions: [Key positions]

[Specific tablature examples]

## SOLO/LEAD SECTIONS (if applicable)
# Timing: [Start-End]
# Key: [Key/Scale used]
# Techniques: [List of techniques]

[Solo tablature]

## EQUIPMENT NOTES
# Guitar: [Model used in recording]
# Amp: [Amplifier and settings]
# Effects: [Effects chain]
# Tuning: [Exact tuning]

## ACCURACY NOTES
# Source Consensus: [Level of agreement between sources]
# Verified Elements: [What has been cross-verified]
# Uncertain Elements: [Any areas needing further research]
# Alternative Interpretations: [Other valid approaches]

## CROSS-REFERENCE VERIFICATION
✅ Tempo verified against: [Source]
✅ Key verified against: [Source]  
✅ Tuning verified against: [Source]
✅ Main progression verified against: [Source]
✅ Techniques verified against: [Source]
```

## Quality Standards

### Research Completion Criteria
- [ ] **Minimum 3 high-quality sources** consulted for tablature
- [ ] **All technical details cross-verified** (tempo, key, tuning)
- [ ] **Equipment information verified** from authoritative sources
- [ ] **Song structure completely mapped** with timings
- [ ] **All major techniques identified** and documented
- [ ] **Research summary document complete** with verification status
- [ ] **Internal reference tab created** with accuracy notes
- [ ] **All source links tested** and verified as working

### Source Quality Validation
- [ ] **Primary sources prioritized** (Guitar World, Songsterr, TabsGuru)
- [ ] **Ultimate Guitar avoided** unless absolutely necessary
- [ ] **Official sources included** when available
- [ ] **Historical context verified** through multiple sources
- [ ] **Equipment details cross-checked** against multiple interviews/sources

### Documentation Standards
- [ ] **Research methodology clearly documented**
- [ ] **Source quality assessments included**
- [ ] **Discrepancies noted and resolved**
- [ ] **Confidence levels assigned** to all technical details
- [ ] **Future research needs identified**

## Usage Guidelines

### Internal Use Only
- **Reference tab files are NEVER published** on the website
- **Used only for accuracy verification** during content creation
- **Update as needed** when better sources are found
- **Maintain consistency** in notation style across all reference files

### Integration with JSON Creation
- **Always reference tab file** when creating JSON data
- **Cross-verify all technical details** against reference material
- **Use reference file to validate** chord progressions and techniques
- **Ensure consistency** between reference material and published content

## Research Process Checklist

### Pre-Research Setup
- [ ] Create research notes file: `_research_notes/[song-slug]-research.md`
- [ ] Set up link verification checklist
- [ ] Identify initial source candidates
- [ ] Plan research methodology approach

### Research Execution
- [ ] Complete multi-source tablature research
- [ ] Verify all technical details across sources
- [ ] Document equipment and historical information
- [ ] Create comprehensive research summary
- [ ] Test and verify all source links

### Reference Creation
- [ ] Create internal reference tab file
- [ ] Include accuracy verification notes
- [ ] Document source consensus levels
- [ ] Note any unresolved discrepancies

### Quality Validation
- [ ] Cross-verify all technical details
- [ ] Confirm source quality standards met
- [ ] Validate completeness of documentation
- [ ] Test accessibility of all referenced sources
