# Song Analysis System Documentation

## Overview

This system separates song analysis content from presentation by using JSON data files and reusable React components. This makes it easy to:
- Create consistent song analysis pages
- Maintain accurate content in one place
- Update design across all songs simultaneously
- Reference external sources for accuracy

## Architecture

### 1. Data Layer (`src/data/songs/`)
- **JSON files** containing all song information
- **Template file** (`_template.json`) for creating new songs
- **External references** to Ultimate Guitar and other sources

### 2. Component Layer (`src/components/SongAnalysis/`)
- **Reusable components** for each section of a song analysis
- **Consistent styling** and behavior
- **Responsive design** that works on all devices

### 3. Page Layer (`src/app/lessons/songs/song-analysis/[song]/`)
- **Minimal page components** that load data and render
- **Easy to create** new song pages
- **Consistent navigation** and layout

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

### Step 2: Add Song to Data Registry

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

### Step 3: Create Page Component

Create `src/app/lessons/songs/song-analysis/[song-slug]/page.tsx`:

```typescript
"use client";

import React from "react";
import SongAnalysisPage from '@/components/SongAnalysis/SongAnalysisPage';
import { getSongData } from '@/lib/songData';

export default function BackInBlackAnalysis() {
  const songData = getSongData('back-in-black');
  
  if (!songData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Song Data Not Found</h1>
          <p className="text-gray-600">Unable to load Back in Black analysis data.</p>
        </div>
      </div>
    );
  }

  return <SongAnalysisPage songData={songData} />;
}
```

### Step 4: Update Navigation

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

### 1. Reference Ultimate Guitar
- Always check Ultimate Guitar for accurate tabs
- Look for highly-rated versions
- Cross-reference multiple sources

### 2. Verify Technical Details
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
