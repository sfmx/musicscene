# Song Analysis System Documentation

## Overview

This system separates song analysis content ### Step 2: Create JSON Data File

1. Copy `src/data/songs/_template.json`
2. Rename to `[song-slug].json` (e.g., `back-in-black.json`)
3. Fill in all placeholders with accurate information
4. **Use your internal reference tab file** to ensure technical accuracy
5. Cross-reference with the internal tab file for chord progressions and techniques
6. Validate JSON syntax

**Example:**
```bash
cp src/data/songs/_template.json src/data/songs/back-in-black.json
```

**Note:** No longer include a "references" section in the JSON file. External sources are now handled through internal reference tab files.

### Step 3: Create Page Using Templateion by using JSON data files and reusable React components. This makes it easy to:
- Create consistent song analysis pages
- Maintain accurate content in one place
- Update design across all songs simultaneously
- Reference external sources for accuracy

## Architecture

### 1. Data Layer (`src/data/songs/`)
- **JSON files** containing all song information
- **Template file** (`_template.json`) for creating new songs
- **Internal reference tabs** (`_reference-tabs/`) for accurate tablature sourced from Ultimate Guitar and other reliable sources

### 1.5 Internal Reference Tabs (`src/data/songs/_reference-tabs/`)
- **Private reference files** not published on the website
- **Accurate tablature** sourced from Ultimate Guitar, official sources, and verified transcriptions
- **Technical notation** in standard tab format with chord progressions and key techniques
- **Used for verification** when creating song analysis content
- **File naming convention:** `[song-slug].tab` (e.g., `thunderstruck.tab`)

### 2. Component Layer (`src/components/SongAnalysis/`)
- **Reusable components** for each section of a song analysis
- **Consistent styling** and behavior
- **Responsive design** that works on all devices

### 3. Page Layer (`src/app/lessons/songs/song-analysis/[song]/`)
- **Minimal page components** that load data and render
- **Easy to create** new song pages
- **Consistent navigation** and layout

## Quick Start with Page Template

The fastest way to create a new song analysis page is using the standardized page template:

### Step 1: Use the Page Template

Copy the template from `src/components/SongAnalysis/_page-template.tsx` to your new song directory:

```bash
# Create new song directory
mkdir -p src/app/lessons/songs/song-analysis/your-song-slug

# Copy template (then edit the copied file)
cp src/components/SongAnalysis/_page-template.tsx src/app/lessons/songs/song-analysis/your-song-slug/page.tsx
```

### Step 2: Customize the Template

Replace the placeholders in your new `page.tsx`:

```typescript
"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function YourSongNameAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="your-song-slug" 
      displayName="Your Song Display Name" 
    />
  );
}
```

**Examples:**
- **Back in Black**: `BackInBlackAnalysis()`, `songSlug="back-in-black"`, `displayName="Back in Black"`
- **Sweet Child O' Mine**: `SweetChildOMineAnalysis()`, `songSlug="sweet-child-o-mine"`, `displayName="Sweet Child O' Mine"`

### Step 3: Benefits of the Template

- **Automatic error handling** - Professional error pages for missing data
- **Consistent structure** - All pages follow the same pattern
- **Helpful error messages** - Clear debugging information for developers
- **Zero boilerplate** - Just 3 lines of actual code per page
- **Type safety** - Full TypeScript support

### Option A: Automated Script (Recommended)

Use the song page generator script for fastest setup:

```bash
node scripts/create-song-page.js "Back in Black" "AC/DC"
```

This will:
- Create the song directory
- Generate the page component with correct naming
- Provide step-by-step instructions for remaining setup

### Option B: Manual Setup

## Creating a New Song Analysis

### Step 1: Create JSON Data File

1. Copy `src/data/songs/_template.json`
2. Rename to `[song-slug].json` (e.g., `back-in-black.json`)
3. Fill in all placeholders with accurate information
4. Reference Ultimate Guitar for accurate tabs and chords
5. Validate JSON syntax

**Example:**
```bash
cp src/data/songs/_template.json src/data/songs/back-in-black.json
```

### Step 2: Create Internal Reference Tab File

Before creating the JSON data file, create an accurate reference tab file for internal use:

1. **Source accurate tablature** from Ultimate Guitar, official songbooks, or verified transcriptions
2. **Cross-reference multiple sources** to ensure accuracy
3. **Create reference file** at `src/data/songs/_reference-tabs/[song-slug].tab`
4. **Include essential elements:**
   - Main riffs and chord progressions
   - Verse/chorus patterns
   - Solo sections and key positions
   - Rhythm notation and techniques
   - Tempo, key, and tuning information

**Example process:**
```bash
# Research accurate tabs from Ultimate Guitar
# Search: "Back in Black AC/DC tabs"
# Look for highly-rated versions (4+ stars)
# Cross-reference official sources when available

# Create reference file
touch src/data/songs/_reference-tabs/back-in-black.tab
```

**Reference tab format:**
```
# Back in Black - AC/DC
# Internal Reference Tab
# Key: E major, Tempo: 94 BPM, Tuning: Standard

## Main Riff (Opening/Verse)
e|----------------------------------
B|----------------------------------
G|--9--9--x--x--9--9--x--x----------
D|--9--9--x--x--9--9--x--x----------
A|--7--7--x--x--7--7--x--x----------
E|----------------------------------

## Key Techniques
# 1. Tight palm muting
# 2. Consistent downstroke rhythm
# 3. "Pocket" timing (slightly behind)
```

**Important:** These reference files are for internal use only and help ensure accurate content creation. They are not published on the website.

### Step 3: Create Page Using Template

1. Create new song directory
2. Copy the page template
3. Customize the template with your song information

```bash
# Create directory
mkdir -p src/app/lessons/songs/song-analysis/back-in-black

# Copy and edit template
cp src/components/SongAnalysis/_page-template.tsx src/app/lessons/songs/song-analysis/back-in-black/page.tsx
```

**Template customization:**
```typescript
export default function BackInBlackAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="back-in-black" 
      displayName="Back in Black" 
    />
  );
}
```

### Step 4: Add Song to Data Registry

Update `src/lib/songData.ts`:

```typescript
import backInBlackData from '@/data/songs/back-in-black.json';

export function getSongData(songSlug: string): SongData | null {
  const songDataMap: Record<string, SongData> = {
    'thunderstruck': thunderstruckData as SongData,
    'back-in-black': backInBlackData as SongData, // Add new song
  };
  
  return songDataMap[songSlug] || null;
}

export function getAllSongSlugs(): string[] {
  return ['thunderstruck', 'back-in-black']; // Add new song
}
```

### Step 5: Update Navigation

Add the new song to relevant navigation:
- `src/app/lessons/songs/song-analysis/page.tsx` (main index)
- `src/components/Layout.tsx` (dropdown menu)
- Related songs sections in other analyses

## Component Reference

### SongInfoHeader
- Displays basic song information and difficulty ratings
- Automatically color-codes difficulty levels
- Responsive grid layout

### TechniquesSection
- Shows all techniques used in the song
- Highlights primary techniques
- **Displays chord diagrams** for techniques that use chords (e.g., Power Chords)
- Includes detailed notes, tips, and chord progressions
- **Visual chord charts** - Automatically generates fretboard diagrams for techniques with chord arrays
- **Responsive layout** - Chord diagrams adapt to screen size (2-4 columns depending on device)

### SongSections
- Breaks down song structure by section
- Supports guitar tabs and VexTab notation
- **Prioritizes VexTab over ASCII tabs** - if both are present, only VexTab is shown
- **Displays chord diagrams** for progressions using SimpleFretboardDiagram component
- Shows timing, chords, and performance notes
- **Recommendation:** Use VexTab when possible for better visual presentation
- **Chord Charts:** Automatically generates fretboard diagrams for all chords in a section

### EquipmentSection
- Guitar, amp, and effects recommendations
- Specific settings and alternatives
- Organized by equipment type

### LearningPathSection
- Progressive difficulty levels
- Time estimates for each level
- Clear skill progression goals

### RelatedSongsSection
- Links to similar songs and techniques
- Technical development resources
- Cross-references within the site

### PracticeNotesSection
- Common mistakes to avoid
- Structured practice routine
- Metronome work guidelines

## Visual Features

### Chord Charts
- **Automatic generation** - When `chords` array is provided in section data, chord diagrams are automatically displayed
- **Responsive layout** - Chord charts adapt to screen size (2 columns on mobile, 4 on desktop)
- **Standard notation** - Uses SimpleFretboardDiagram component for consistent chord visualization
- **Progressive display** - Shows both visual diagrams and text badges for accessibility

### Chord Charts in Techniques
- **Automatic generation** - When `chords` array is provided in technique details, chord diagrams are automatically displayed
- **Technique-specific visualization** - Power chord techniques show power chord diagrams, strumming techniques show open chord diagrams
- **Dual presentation** - Shows both visual fretboard diagrams and colored chord badges
- **Educational value** - Helps students understand finger positioning for technique-specific chords
- **Responsive grid** - Adapts from 2 columns on mobile to 4 columns on desktop

### Musical Notation
- **VexTab integration** - Professional music notation rendering
- **Tab fallback** - ASCII tabs available when VexTab is not feasible
- **Interactive elements** - Clear, readable notation with proper spacing

### Layout Optimization
- **Three-column grid** - Section info, visual elements, performance notes
- **Responsive design** - Adapts to all screen sizes
- **Visual hierarchy** - Clear headings and organized content flow

## Data Accuracy Guidelines

### 1. Use Internal Reference Tabs
- **Always create reference tab file first** before writing JSON content
- Cross-reference your internal tab file when writing techniques and sections
- Ensure chord progressions match the reference tablature
- Use reference file to verify tempo, key, and technical details

### 2. Reference Ultimate Guitar for Source Material
- Look for highly-rated versions (4+ stars preferred)
- Cross-reference multiple sources for accuracy
- Focus on consensus across top-rated tabs

### 3. Verify Technical Details
- Ensure technique descriptions are accurate
- Check equipment specifications
- Validate tempo and key information

### 3. Use Correct Musical Terminology
- Proper chord names and progressions
- Accurate scale and key descriptions
- Standard technique terminology

## Best Practices

### 1. Content Quality
- Write clear, educational descriptions
- Include practical performance tips
- Provide progressive learning paths

### 2. Technical Accuracy
- Verify all musical information
- Double-check tabs and notation
- Ensure equipment details are correct

### 3. Consistency
- Use consistent terminology across songs
- Follow the same structure for all analyses
- Maintain the same level of detail

### 4. User Experience
- Write for guitarists of all levels
- Include visual elements (tabs, diagrams)
- Provide clear navigation and cross-links
- **Use chord progressions in sections** - Include `chords` array for automatic chord diagram generation
- **Visual learning support** - Chord charts help visual learners understand progressions quickly

### 5. Chord Chart Guidelines
- **Always include chord arrays** in song sections when applicable
- **Include chords in technique details** for chord-based techniques (Power Chords, Strumming, etc.)
- Use **standard chord notation** (e.g., "B5", "E5", "F#5", "G#m")
- **Order chords chronologically** as they appear in the section
- SimpleFretboardDiagram component will automatically generate visual charts
- Include both chord diagrams and progression patterns for clarity
- **Technique-specific chords** - Add chord arrays to technique details when the technique focuses on specific chord shapes or progressions

## Technique Chord Charts

### When to Include Chord Charts in Techniques
- **Power Chord techniques** - Always include the power chords used (e.g., B5, E5, F#5)
- **Strumming patterns** - Include open chords or chord progressions being strummed
- **Fingerpicking techniques** - Include chords being fingerpicked
- **Rhythm guitar techniques** - Include the chord progression or specific chord shapes
- **Chord-based lead techniques** - Include any chord shapes used in lead playing

### How to Structure Technique Chord Data
```json
{
  "name": "Power Chords",
  "description": "Main rhythm section uses classic power chord progression",
  "difficulty": "Intermediate",
  "primaryTechnique": false,
  "details": {
    "chords": ["B5", "E5", "F#5"],
    "progression": "B5 - E5 - F#5 - B5",
    "notes": [
      "Classic AC/DC power chord sound",
      "Palm muting for tight, percussive tone"
    ],
    "tips": [
      "Consistent down-picking preferred",
      "Focus on chord clarity and timing"
    ]
  }
}
```

### Visual Result
- **Chord diagrams** automatically appear above the chord badges
- **Responsive layout** shows 2-4 chord diagrams per row depending on screen size
- **Clear labeling** with chord name above each diagram
- **Consistent styling** matches the overall design system

## External Resources

### Ultimate Guitar
- Primary source for tabs and chords
- Use search format: `https://www.ultimate-guitar.com/search.php?title=[song]+[artist]`
- Reference in JSON data for user access

### Other Sources
- Official songbooks and sheet music
- Artist interviews and technique videos
- Music theory resources for analysis

## Troubleshooting

### Build Errors
- Check JSON syntax with a validator
- Ensure all imports are correct
- Verify TypeScript type compatibility

### Missing Data
- Use template as reference
- Ensure all required fields are filled
- Check for typos in song slugs

### Styling Issues
- Components use Tailwind CSS classes
- Responsive design should work automatically
- Check console for any CSS warnings

## Internal Reference Tab System

### Purpose and Workflow
The internal reference tab system ensures accuracy while keeping external sources private and not published on the website.

### Creating Reference Tabs

#### 1. Source Research
- **Primary source:** Ultimate Guitar (look for 4+ star ratings)
- **Secondary sources:** Official songbooks, verified transcriptions
- **Cross-reference:** Compare multiple sources for accuracy
- **Focus areas:** Main riffs, chord progressions, solos, rhythm patterns

#### 2. Reference File Creation
**Location:** `src/data/songs/_reference-tabs/[song-slug].tab`
**Format:** Plain text with standard guitar tablature notation

**Required sections:**
```
# [Song Title] - [Artist]
# Internal Reference Tab
# Key: [Key], Tempo: [BPM], Tuning: [Tuning]

## Main Riff/Intro
[Tablature notation]

## Verse/Chorus Progressions
[Chord progressions and patterns]

## Key Techniques
# 1. [Technique description]
# 2. [Technique description]
```

#### 3. Quality Standards
- **Accurate timing and notation**
- **Clear technique descriptions**
- **Complete song structure coverage**
- **Cross-verified with multiple sources**

#### 4. Usage Guidelines
- **Internal use only** - Never publish these files
- **Reference during content creation** for JSON data accuracy
- **Update as needed** when better sources are found
- **Maintain consistency** in notation style across all reference files

### Examples
See existing reference files:
- `thunderstruck.tab` - Left-hand tapping technique
- `back-in-black.tab` - Palm muting and rhythm patterns  
- `for-those-about-to-rock.tab` - Power chord progressions
