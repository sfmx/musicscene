````instructions
---
applyTo: "src/app/lessons/songs/song-analysis/**/*.tsx"
---

# Song Analysis Creation & Migration Instructions

## Quick Start Process

**Use this prompt to initiate song analysis creation:**

```
I need to create a comprehensive song analysis page for "[SONG_TITLE]" by [ARTIST_NAME] following the MusicScene standardized workflow. Please guide me through: research & validation, JSON data creation, AlphaTab notation conversion, component integration, and quality assurance. The analysis should serve both developing guitarists and advanced players with accurate technical information, progressive learning paths, and proper integration with our existing component architecture.
```

## Current Architecture Overview

### **Data-Driven System**
- **Schema**: `src/schemas/song-analysis.schema.json` - Strict validation for all song data
- **JSON Files**: `src/data/songs/[song-slug].json` - Schema-compliant data files
- **Page Template**: `src/components/SongAnalysis/SongAnalysisPageTemplate.tsx` - Reusable page component
- **Song Registry**: `src/lib/songData.ts` - Central data management and utility functions

### **Component Architecture**  
- **Pages**: 6-line implementations using `SongAnalysisPageTemplate`
- **Auto-Generated Visuals**: Chord diagrams from JSON chord arrays via `SimpleFretboardDiagram`
- **Musical Notation**: AlphaTab integration via `AlphaTexRenderer` and `SimpleAlphaTab`
- **Responsive Design**: 2-4 column grid layouts with mobile-first approach

### **Discovery System**
- **SongDiscoveryHub**: Enhanced search and categorization interface
- **Metadata-Driven**: Popularity scoring, decade classification, featured content
- **Advanced Filtering**: Multi-criteria search by difficulty, genre, decade, tags

## Step-by-Step Creation Process

### Step 1: Research & Technical Validation

#### **Primary Sources (Use Only These)**
1. **Guitar World** - Official transcriptions and artist interviews  
2. **Songsterr** - Interactive tablature verification
3. **TabsGuru** - Cross-reference accuracy
4. **911Tabs** - Additional verification for complex sections

#### **Research Validation Checklist**
- [ ] **Song Metadata**: Title, artist, album, release year, duration verified across sources
- [ ] **Technical Details**: Key, tempo (BPM), tuning confirmed
- [ ] **Chord Progressions**: Main progression and section variations documented
- [ ] **Equipment Research**: Guitar, amp, effects from artist interviews/sources
- [ ] **Genre Classification**: Primary genre and sub-genre tags established
- [ ] **Difficulty Assessment**: Realistic ratings for rhythm/lead guitar parts

#### **Research Documentation** (Optional but Recommended)
- Create `src/data/songs/_research_notes/[song-slug]-research.md`
- Document sources, technical conflicts, resolution decisions
- Include links to authoritative interviews/equipment specs

### Step 2: JSON Data File Creation

#### **File Setup**
1. **Create**: `src/data/songs/[song-slug].json`
2. **Reference**: Use `src/data/songs/_template.json` as starting point
3. **Validate**: Against `src/schemas/song-analysis.schema.json`

#### **Required Schema Sections**
```typescript
{
  "songInfo": {
    "title": "Song Title",                    // ✅ Required
    "artist": "Artist Name",                  // ✅ Required  
    "album": "Album Name",                    // ✅ Required
    "released": "1958",                       // ✅ Required (year or "Month Year")
    "genre": "Rock and Roll / Blues Rock",    // ✅ Required
    "key": "Bb major",                        // ✅ Required
    "tempo": "145 BPM",                       // Recommended
    "duration": "2:41",                       // Recommended
    "tuning": "Standard (E-A-D-G-B-E)"       // Optional, defaults to standard
  },
  "difficulty": {
    "overall": "Intermediate",                // ✅ Required - Beginner|Intermediate|Advanced|Expert
    "rhythmGuitar": "Intermediate",           // Recommended
    "leadGuitar": "Advanced",                 // Recommended
    "bass": "Beginner",                       // Optional
    "drums": "Intermediate"                   // Optional
  },
  "musicalAnalysis": {                        // ✅ Required - Critical for educational value
    "keyAndScale": {
      "primaryKey": "Bb major",               // ✅ Required
      "scalesUsed": [                         // Recommended - Array of scale objects
        {
          "scale": "Bb major pentatonic",
          "notes": "Bb - C - D - F - G",
          "application": "Lead guitar fills and Chuck Berry techniques"
        }
      ],
      "modalCharacter": "Ionian (Major)",     // ✅ Required
      "keySignature": "2 flats (Bb, Eb)",    // Recommended
      "relativeMinor": "G minor"              // Recommended
    },
    "chordProgressions": {                    // ✅ Required
      "mainProgression": {                    // ✅ Required
        "chords": ["Bb", "Eb", "F"],         // ✅ Required
        "progression": "I - IV - V",          // ✅ Required
        "description": "Classic 12-bar blues progression" // ✅ Required
      },
      "sectionProgressions": [                // Recommended - Detailed section analysis
        {
          "section": "Verse",                 // ✅ Required
          "progression": "Bb - Eb - Bb - F",  // ✅ Required
          "romanNumerals": "I - IV - I - V",  // ✅ Required
          "description": "Standard progression" // ✅ Required
        }
      ],
      "harmonicFunction": [                   // Optional - Advanced harmonic analysis
        "Bb (I) - Establishes tonic center",
        "Eb (IV) - Subdominant movement"
      ]
    }
  },
  "techniques": [                             // ✅ Required - Array of technique objects
    {
      "name": "Chuck Berry Style Double Stops", // ✅ Required
      "description": "Signature technique...",   // ✅ Required
      "difficulty": "Advanced",                  // ✅ Required
      "primaryTechnique": true,                  // Optional - marks main technique
      "details": {                               // Optional - technique specifics
        "chords": ["Bb", "Eb", "F"],            // Auto-generates chord diagrams
        "progression": "I - IV - V",             // Chord progression
        "alphaTab": "(3.3 3.2).4 (5.3 5.2).4 |", // Musical notation
        "scalePattern": "Bb major pentatonic",   // Scale information
        "fretboardPositions": {                  // Specific fret positions
          "position1": "3rd fret double stops (Bb-D)"
        },
        "musicalFunction": "Creates harmony while maintaining single-note feel",
        "notes": ["Practice slowly first", "..."], // Practice tips
        "sequence": ["Step 1", "Step 2"],       // Learning sequence
        "tips": ["Performance tip 1", "..."]    // Performance tips
      }
    }
  ],
  "sections": [                               // ✅ Required - Array of song sections
    {
      "name": "Intro",                        // ✅ Required
      "description": "Opening guitar riff",   // ✅ Required  
      "timeStamp": "0:00-0:08",              // Optional - MM:SS-MM:SS format
      "technique": "Chuck Berry Style",       // Optional - primary technique
      "key": "Bb",                           // Optional - section key
      "alphaTab": "3.6 5.6 3.6 5.6 |",      // Optional - AlphaTab notation
      "tab": "ASCII tablature if needed",    // Optional - fallback notation
      "vexTab": "VexTab notation",           // Optional - legacy notation
      "chords": ["Bb", "Eb"],               // Optional - auto-generates diagrams
      "progression": "I - IV",              // Optional - chord progression
      "riffAnalysis": {                      // Optional - detailed riff breakdown
        "technique": "Alternating single notes with double stops",
        "scale": "Bb major pentatonic",
        "fretPositions": "3rd and 5th frets primarily",
        "rhythmPattern": "Eighth notes with syncopated accents",
        "musicalFunction": "Establishes key and Chuck Berry style"
      },
      "keyTechniques": [                     // Optional - specific techniques used
        "Double stops on 2nd and 3rd strings",
        "String bending on 3rd string"
      ],
      "notes": ["Performance notes"]        // Optional - section-specific tips
    }
  ],
  "equipment": {                            // ✅ Required
    "guitar": {
      "recommended": "Gibson ES-355",
      "alternatives": ["Epiphone Casino", "Gretsch G6120"],
      "pickup": "Humbucker"
    },
    "amp": {
      "recommended": "Fender Twin Reverb",
      "alternatives": ["Vox AC30", "Marshall JTM45"],
      "settings": {
        "gain": "3/10",
        "treble": "7/10", 
        "middle": "6/10",
        "bass": "5/10",
        "presence": "4/10"
      }
    },
    "effects": {
      "distortion": "Light tube overdrive",
      "reverb": "Spring reverb",
      "other": "None - clean Chuck Berry tone"
    }
  },
  "learningPath": {                         // ✅ Required
    "beginner": {
      "title": "Getting Started",              // ✅ Required
      "steps": ["Basic barre chords", "Simple strumming"], // ✅ Required - Array of strings
      "timeEstimate": "2-3 weeks",            // ✅ Required
      "goals": "Play basic chord progression" // Optional - Learning objectives
    },
    "intermediate": {
      "title": "Building Skills",             // ✅ Required
      "steps": ["Double stops", "Chuck Berry rhythm"], // ✅ Required - Array of strings
      "timeEstimate": "1-2 months",           // ✅ Required
      "goals": "Play rhythm parts confidently" // Optional - Learning objectives
    },
    "advanced": {
      "title": "Mastery Goals",               // ✅ Required
      "steps": ["Lead fills", "Performance tempo"], // ✅ Required - Array of strings
      "timeEstimate": "2-3 months",           // ✅ Required
      "goals": "Master all guitar parts"      // Optional - Learning objectives
    }
  },
  "relatedSongs": {                         // ✅ Required
    "sameArtist": [                         // Optional but recommended
      {
        "title": "Roll Over Beethoven",
        "link": "/lessons/songs/song-analysis/roll-over-beethoven",
        "similarity": "Similar Chuck Berry style and techniques"
      }
    ],
    "similarTechniques": [                  // Optional but recommended
      {
        "title": "Good Golly Miss Molly",
        "artist": "Little Richard", 
        "technique": "Double stops",
        "similarity": "Classic rock and roll double stop technique"
      }
    ]
  },
  "practiceNotes": {                        // ✅ Required
    "commonMistakes": [                     // ✅ Required
      "Rushing the tempo during the intro",
      "Muddy double stops from poor fretting"
    ],
    "practiceRoutine": [                    // ✅ Required  
      "Start with chord progression at slow tempo",
      "Practice double stops separately before combining"
    ],
    "focusAreas": [                         // ✅ Required
      "Clean chord transitions",
      "Consistent rhythm timing"
    ],
    "metronomeWork": [                      // ✅ Required
      "Practice at 100 BPM first", 
      "Gradually increase to 145 BPM"
    ]
  },
  "metadata": {                             // ✅ Required - Analytics/categorization
    "popularity": 95,                       // ✅ Required - Score 1-100
    "dateAdded": "2025-08-06",             // ✅ Required - YYYY-MM-DD
    "featured": true,                       // ✅ Required - Homepage feature
    "decade": "1950s",                      // ✅ Required - From approved enum
    "iconicRiff": true,                     // Optional - Has memorable riff
    "tags": ["Classic Rock", "Chuck Berry", "Double Stops", "Blues Rock"], // Optional
    "learningValue": "HIGH",                // Optional - Educational value
    "estimatedLearningTime": "2-3 months"   // Optional - Time estimate
  }
}
```

#### **Schema Validation**
- [ ] **JSON Syntax**: Valid formatting without syntax errors
- [ ] **Required Fields**: All required sections present and populated
- [ ] **Data Types**: Numbers, strings, booleans, arrays correctly typed
- [ ] **Enum Values**: Difficulty levels from approved list (Beginner|Intermediate|Advanced|Expert)
- [ ] **Decade Values**: From approved enum (1940s|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)
- [ ] **Time Stamps**: MM:SS-MM:SS format if provided

### Step 3: AlphaTab Notation Integration

#### **AlphaTab Conversion Guidelines**
```typescript
// String Numbering (AlphaTab uses guitar string numbers)
// 1 = High E (1st string)
// 2 = B (2nd string)  
// 3 = G (3rd string)
// 4 = D (4th string)
// 5 = A (5th string)
// 6 = Low E (6th string)

// Basic Notation Format: fret.string
"3.6 5.5 7.4 |"  // 3rd fret 6th string, 5th fret 5th string, 7th fret 4th string

// Chord Notation: (fret.string fret.string).duration
"(7.2 9.3 9.4).4 |"  // Power chord, quarter note duration

// Rhythm Values:
// .1 = Whole note
// .2 = Half note  
// .4 = Quarter note
// .8 = Eighth note
// .16 = Sixteenth note
```

#### **Integration Points**
- [ ] **Song Sections**: Add AlphaTab to signature riffs in sections array
- [ ] **Technique Examples**: Include notation in technique details
- [ ] **Component Testing**: Verify rendering in SimpleAlphaTab component

#### **AlphaTab Examples for Johnny B. Goode**
```typescript
// Main Riff (Intro)
"3.6 5.6 3.6 5.6 3.6 5.6 3.6 |"

// Chuck Berry Double Stops  
"(3.3 3.2).8 (5.3 5.2).8 (3.3 3.2).8 |"

// Chord Progression
"(1.2 3.3 3.4).4 (1.2 3.3 3.4).4 |"  // Bb to Eb progression
```

### Step 4: Page Generation & Component Integration

#### **Page File Creation**
1. **Create Directory**: `src/app/lessons/songs/song-analysis/johnny-b-goode/`
2. **Create Page**: `src/app/lessons/songs/song-analysis/johnny-b-goode/page.tsx`

#### **Page Implementation**
```typescript
"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function JohnnyBGoodeAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="johnny-b-goode" 
      displayName="Johnny B. Goode" 
    />
  );
}
```

#### **Component Features (Automatic)**
- **SongInfoSection**: Displays metadata with difficulty color coding
- **TechniquesSection**: Auto-generates chord diagrams from `chords` arrays in technique details
- **SongSections**: Integrates AlphaTab notation and chord progressions
- **EquipmentSection**: Shows gear recommendations and amp settings
- **LearningPathSection**: Progressive skill development paths
- **PracticeNotesSection**: Practice guidance and common mistakes
- **RelatedSongsSection**: Cross-references to similar content

### Step 5: Song Registry Integration

#### **Add to Data Registry**
Update `src/lib/songData.ts`:

```typescript
// 1. Add import
import johnnyBGoodeData from '@/data/songs/johnny-b-goode.json';

// 2. Add to songDatabase object
const songDatabase: Record<string, SongData> = {
  // ... existing songs ...
  'johnny-b-goode': johnnyBGoodeData as unknown as SongData,
};
```

#### **Discovery Integration (Automatic)**
Once registered, the song automatically appears in:
- **SongDiscoveryHub**: Categorized by decade, difficulty, and tags
- **Search Interface**: Searchable by title, artist, techniques, and tags  
- **Analytics Dashboard**: Included in statistics and breakdowns

### Step 6: Quality Assurance & Testing

#### **Automated Validation**
```bash
# Schema validation
node scripts/validate-song-schema.js

# TypeScript compilation
npm run type-check

# Component testing  
npm run test

# Development server
npm run dev
```

#### **Manual Testing Checklist**
- [ ] **Page Loads**: Navigate to `/lessons/songs/song-analysis/johnny-b-goode`
- [ ] **Component Rendering**: All sections display without errors
- [ ] **Chord Diagrams**: Auto-generated from JSON chord arrays
- [ ] **AlphaTab Notation**: Musical notation renders correctly
- [ ] **Responsive Design**: Works on mobile, tablet, desktop
- [ ] **Navigation**: Accessible through SongDiscoveryHub search/filters

#### **Content Quality Review**
- [ ] **Technical Accuracy**: Cross-referenced with research sources
- [ ] **Educational Value**: Clear progression for different skill levels
- [ ] **Completeness**: All required sections meaningfully populated
- [ ] **Consistency**: Follows patterns from existing songs like Thunderstruck

## Target Audience Considerations

### **Developing Guitarists (Primary)**
- **Clear progression**: Beginner → Intermediate → Advanced
- **Visual learning**: Chord diagrams and tablature notation
- **Practice guidance**: Specific routines and common mistake avoidance
- **Equipment recommendations**: Accessible alternatives to professional gear

### **Advanced Players & Instructors (Secondary)**  
- **Technical accuracy**: Authoritative source material and equipment specs
- **Performance details**: Exact amp settings and technique specifications
- **Teaching resources**: Well-structured content for instruction use
- **Professional context**: Historical significance and influence

## Common Implementation Patterns

### **Chord Diagram Auto-Generation**
Any array named `chords` in technique details or song sections automatically generates responsive chord diagram grids:

```typescript
// In JSON data
"details": {
  "chords": ["Bb", "Eb", "F"]  // Triggers auto-generation
}

// Rendered as:
// [Bb Diagram] [Eb Diagram] [F Diagram]
// 2-4 column responsive grid layout
```

### **Difficulty Color Coding (Automatic)**
- **Beginner**: Green
- **Intermediate**: Orange  
- **Advanced**: Red
- **Expert**: Purple

### **Responsive Grid Layouts**
- **Mobile**: 2 columns for chord diagrams
- **Tablet**: 3 columns for chord diagrams
- **Desktop**: 4 columns for chord diagrams

## Current System Capabilities

### **Supported Chord Types in SimpleFretboardDiagram**
- **Power Chords**: E5, A5, B5, D5, G5, C5, F5, Bb5
- **Major Chords**: C, G, D, E, F, Bb, Eb, Ab
- **Minor Chords**: Em, Am, Dm, Bm, Cm, Gm, Fm
- **7th Chords**: G7, E7, A7, B7, D7, C7, Am7, Em7, CMaj7, FMaj7
- **Extended**: Cdim, C+, sus2, sus4 variations

### **AlphaTab Integration Points**
- **SimpleAlphaTab Component**: For standalone notation blocks
- **AlphaTexRenderer**: For integrated notation within sections
- **Automatic Rendering**: From `vexTab` fields in sections (legacy support)
- **Responsive Containers**: Full-width with minimum height constraints

### **Discovery & Search Features**
- **Multi-Criteria Search**: Text across title, artist, techniques, tags
- **Advanced Filtering**: Difficulty, genre, decade, tags, featured status
- **Category Browsing**: Popular, recent, iconic riffs, beginner-friendly
- **Analytics Dashboard**: Statistics and distribution breakdowns

## Process Validation

### **Schema Compliance Check**
- All required fields present and correctly typed
- Enum values from approved lists
- Date formats (YYYY-MM-DD) and time stamps (MM:SS-MM:SS) valid
- JSON syntax error-free

### **Component Integration Check**  
- Page template renders without errors
- All song sections display correctly
- Chord diagrams auto-generate from JSON data
- AlphaTab notation renders properly
- Responsive layouts work across device sizes

### **Content Quality Check**
- Technical details cross-referenced with authoritative sources
- Educational progression logical and comprehensive
- Equipment recommendations current and accessible
- Practice guidance specific and actionable

This process ensures consistent, high-quality song analysis pages that serve both developing and advanced guitarists while maintaining technical accuracy and educational value.
````
