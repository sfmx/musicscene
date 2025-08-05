# Song Analysis Creation Prompt

## Main Creation Prompt

```
I need to create a comprehensive song analysis page for "[SONG_TITLE]" by [ARTIST_NAME] for the MusicScene guitar education platform.

Please guide me through the complete process following our standardized workflow:

1. **Research & Validation**: Research the song using authoritative sources (Guitar World, Songsterr, TabsGuru, 911Tabs) and validate technical details
2. **JSON Data Creation**: Create schema-compliant JSON data file with all required sections
3. **AlphaTab Notation**: Convert musical notation to AlphaTab format for signature riffs and chord progressions  
4. **Component Integration**: Set up the page using our SongAnalysisPageTemplate with proper routing
5. **Quality Assurance**: Validate schema compliance, test component rendering, and verify technical accuracy

The analysis should serve both developing guitarists and advanced players with:
- Accurate technical information (key, tempo, tuning, chord progressions)
- Progressive learning paths from beginner to advanced
- Equipment recommendations and tone settings
- Visual fretboard diagrams and tablature notation
- Cross-references to related songs for continued learning

Please follow the established patterns from existing songs like "Thunderstruck" and ensure full compliance with our JSON schema and component architecture.
```

## Research Phase Checklist

### Primary Source Verification
- [ ] **Guitar World**: Check for official transcriptions and artist interviews
- [ ] **Songsterr**: Verify interactive tablature and chord progressions  
- [ ] **TabsGuru**: Cross-reference technical accuracy
- [ ] **911Tabs**: Additional verification for complex sections
- [ ] **Artist Interviews**: Equipment and technique validation from primary sources

### Technical Details Validation
- [ ] **Song Information**: Title, artist, album, release year, duration
- [ ] **Key & Tuning**: Concert pitch key, guitar tuning used
- [ ] **Tempo**: BPM measurement and time signature
- [ ] **Genre Classification**: Primary genre and sub-genre tags
- [ ] **Equipment**: Guitar, amplifier, and effects specifications

### Musical Analysis Requirements  
- [ ] **Chord Progressions**: Main progression and section variations
- [ ] **Scale Analysis**: Primary scales and modal characteristics
- [ ] **Signature Techniques**: Key guitar techniques and difficulty assessment
- [ ] **Song Structure**: Verse, chorus, bridge, solo sections with timing

## JSON Schema Compliance

### Required Sections (All Must Be Present)
```typescript
{
  "songInfo": {
    "title": string,           // ✅ Required
    "artist": string,          // ✅ Required  
    "album": string,           // ✅ Required
    "released": string,        // ✅ Required
    "genre": string,           // ✅ Required
    "key": string,             // ✅ Required
    "tempo": string,           // Optional but recommended
    "duration": string,        // Optional but recommended
    "tuning": string           // Optional, defaults to standard
  },
  "difficulty": {
    "overall": string,         // ✅ Required - "Beginner|Intermediate|Advanced|Expert"
    "rhythmGuitar": string,    // Optional but recommended
    "leadGuitar": string,      // Optional but recommended
    "bass": string,            // Optional
    "drums": string            // Optional
  },
  "techniques": [...],         // ✅ Required - Array of technique objects
  "sections": [...],           // ✅ Required - Array of song section objects  
  "equipment": {...},          // ✅ Required - Guitar, amp, effects objects
  "learningPath": {...},       // ✅ Required - Beginner, intermediate, advanced objects
  "relatedSongs": {...},       // ✅ Required - Cross-references object
  "practiceNotes": {...},      // ✅ Required - Practice guidance object
  "metadata": {               // ✅ Required - Analytics and categorization
    "popularity": number,      // ✅ Required - 1-100 score
    "dateAdded": string,       // ✅ Required - YYYY-MM-DD format
    "featured": boolean,       // ✅ Required - Homepage feature flag
    "decade": string,          // ✅ Required - From enum list
    "iconicRiff": boolean,     // Optional but recommended
    "tags": string[],          // Optional but recommended
    "learningValue": string,   // Optional
    "estimatedLearningTime": string // Optional
  }
}
```

### Validation Requirements
- [ ] **JSON Syntax**: Valid JSON formatting without syntax errors
- [ ] **Schema Compliance**: All required fields present and correctly typed
- [ ] **Enum Values**: Difficulty levels and decade values from approved lists
- [ ] **Data Consistency**: Cross-field validation (e.g., release year matches decade)

## AlphaTab Notation Guidelines

### Conversion Patterns
```typescript
// ASCII Tab to AlphaTab Examples
ASCII: e|--3--5--7--| → AlphaTab: "3.6 5.5 7.4 |"
ASCII: B|--3--5--7--| → AlphaTab: "3.5 5.5 7.5 |" 
ASCII: G|--4--6--8--| → AlphaTab: "4.4 6.4 8.4 |"

// Power Chords
ASCII: e|-----|     → AlphaTab: "(7.2 9.3 9.4).4 |"
       B|-----|
       G|--9--|
       D|--9--|  
       A|--7--|
       E|-----|

// Chord Progressions
"(0.2 2.3 2.4).4 (3.2 0.3 0.4).4 |" // Two chords, quarter notes each
```

### AlphaTab Integration Points
- [ ] **Signature Riffs**: Main guitar riffs in song sections
- [ ] **Chord Progressions**: Visual representation in techniques and sections
- [ ] **Solo Sections**: Lead guitar parts and fills
- [ ] **Strumming Patterns**: Rhythm guitar patterns

### Testing Requirements
- [ ] **Component Rendering**: Test in SimpleAlphaTab component
- [ ] **Notation Accuracy**: Verify notes match source material
- [ ] **Performance**: Ensure reasonable load times
- [ ] **Responsive Design**: Works on mobile, tablet, desktop

## Page Structure & Components

### File Organization
```
src/app/lessons/songs/song-analysis/[song-slug]/
└── page.tsx                          // Main page using template

src/data/songs/
└── [song-slug].json                  // Schema-compliant data file

src/lib/songData.ts                   // Add song to registry
```

### Page Template Usage
```typescript
// src/app/lessons/songs/song-analysis/[song-slug]/page.tsx
"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function [SongName]Analysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="[song-slug]" 
      displayName="[Display Name]" 
    />
  );
}
```

### Component Integration
- [ ] **SongAnalysisPageTemplate**: Main template component
- [ ] **SimpleFretboardDiagram**: Auto-generated chord diagrams  
- [ ] **AlphaTexRenderer**: Musical notation rendering
- [ ] **Responsive Grid Layouts**: 2-4 column layouts for chord diagrams

## Quality Assurance Checklist

### Technical Validation
- [ ] **Schema Validation**: JSON passes schema validation
- [ ] **TypeScript Compilation**: No type errors in page components
- [ ] **Component Rendering**: All sections render without errors
- [ ] **Responsive Design**: Proper display on all device sizes

### Content Quality  
- [ ] **Technical Accuracy**: Cross-referenced with multiple authoritative sources
- [ ] **Educational Value**: Clear progression from beginner to advanced
- [ ] **Completeness**: All required schema sections populated with meaningful content
- [ ] **Consistency**: Follows established patterns from existing songs

### Integration Testing
- [ ] **Song Registry**: Added to src/lib/songData.ts
- [ ] **Navigation**: Accessible through song discovery interface
- [ ] **Cross-References**: Links to/from related songs work correctly
- [ ] **Search/Filter**: Appears in appropriate search and filter results

## Example Implementation

For reference, see existing implementations:
- **Schema Compliance**: `src/data/songs/thunderstruck.json`  
- **Page Structure**: `src/app/lessons/songs/song-analysis/thunderstruck/page.tsx`
- **Component Usage**: `src/components/SongAnalysis/SongAnalysisPageTemplate.tsx`

## Post-Creation Steps

### Registration & Integration
1. **Add to Song Registry**: Update `src/lib/songData.ts` imports and registry
2. **Update Discovery Interface**: Song appears in SongDiscoveryHub categorization
3. **Cross-Reference Updates**: Add links in related existing songs
4. **Documentation**: Update any relevant navigation or index pages

### Validation Commands
```bash
# Schema validation
npm run validate-song-schema

# TypeScript checking  
npm run type-check

# Component testing
npm run test

# Development preview
npm run dev
```