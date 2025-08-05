# MusicScene AI Coding Instructions

## Project Overview
MusicScene is a Next.js-based guitar education platform specializing in comprehensive song analysis pages. The codebase uses a data-driven architecture where JSON files power React components to create educational content for guitarists.

## Core Architecture

### Song Analysis System (Primary Feature)
- **Data Layer**: JSON files in `src/data/songs/[song-slug].json` define all song content
- **Component Layer**: Reusable React components in `src/components/SongAnalysis/`
- **Page Layer**: Minimal pages using `SongAnalysisPageTemplate` with just 6 lines of code
- **Schema**: Strict validation via `src/schemas/song-analysis.schema.json`

### Key Architectural Patterns

#### Template-Based Pages
All song analysis pages follow this pattern:
```tsx
export default function SongAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="song-name" 
      displayName="Display Name" 
    />
  );
}
```

#### Data-Driven Components
Components automatically render JSON data with features like:
- **Auto-generated chord diagrams** from `chords` arrays using `SimpleFretboardDiagram`
- **AlphaTab notation rendering** for musical examples
- **Responsive grid layouts** (2-4 columns for chord diagrams)
- **Difficulty color coding** (Beginner=Green, Intermediate=Orange, Advanced=Red, Expert=Purple)

## Development Workflows

### Music Notation System
The project uses **AlphaTab** (preferred) and **VexTab** (legacy) for musical notation:

#### AlphaTab Format (Preferred)
- Use `SimpleAlphaTab` component or `AlphaTexRenderer`
- Format: `"3.6 5.5 7.4 |"` (fret.string, string 6=low E to 1=high E)
- Chords: `"(7.2 9.3 9.4).4 |"` (parentheses group simultaneous notes)
- Import: `@coderline/alphatab` package

#### VexTab Format (Legacy)
- Use `VexTabRenderer` component for existing content
- ASCII-style notation with more complex syntax
- Being migrated to AlphaTab format

### Song Analysis Process

#### Creating New Song Pages
1. **Data File**: Copy `src/data/songs/_template.json` to `[song-slug].json`
2. **Required Fields**: Validate against schema - `songInfo`, `difficulty`, `techniques`, `sections`, `equipment`, `learningPath`, `relatedSongs`, `practiceNotes`
3. **Page Creation**: Use template pattern with `SongAnalysisPageTemplate`
4. **Registration**: Add to `src/lib/songData.ts` registry

#### Schema Requirements
- **Time stamps**: "MM:SS-MM:SS" format
- **Difficulty levels**: "Beginner", "Intermediate", "Advanced", "Expert"
- **Chord notation**: Standard format (e.g., "B5", "E5", "F#5")
- **All required fields** must be present for schema validation

### Testing & Validation

#### Key Commands
```bash
npm run dev              # Development server
npm run build           # Production build  
npm run storybook       # Component testing
npm run lint            # ESLint validation
npm run type-check      # TypeScript validation
```

#### Quality Gates
- **JSON Schema Validation**: All song data must validate against schema
- **TypeScript Compilation**: No type errors allowed
- **Component Testing**: Use Storybook for isolated component testing
- **AlphaTab Rendering**: Test notation in Storybook before integration

### Component Guidelines

#### SimpleFretboardDiagram
Supports extensive chord library:
- **Power chords**: E5, A5, B5, etc.
- **Major/Minor**: C, Em, F_major, A_minor, etc.
- **Extended**: G7, Am7, CMaj7, etc.
- **Altered**: Cdim, C+, etc.

#### Responsive Design Patterns
- **Chord grids**: 2-4 columns (mobile to desktop)
- **AlphaTab containers**: Full width with min-height constraints
- **Component spacing**: Consistent margins using Tailwind classes

### Infrastructure & Build

#### Next.js Configuration
- **MDX Support**: Pages can use `.mdx` extensions
- **AlphaTab Assets**: Font files copied to `/public/alphatab/font/` during build
- **Client-Side Rendering**: Music notation components use `"use client"`

#### File Organization
```
src/
├── components/SongAnalysis/     # Reusable song analysis components
├── data/songs/                  # JSON data files
├── schemas/                     # JSON schema validation
├── lib/songData.ts             # Data registry and utilities
└── app/lessons/songs/          # Next.js app router pages
```

## Critical Knowledge

### Song Data Registry
All songs must be imported and registered in `src/lib/songData.ts`:
```typescript
import songData from '@/data/songs/song-slug.json';
// Then add to songsRegistry object
```

### AlphaTab Integration
- **Font Path**: Always use `/alphatab/font/` for fontDirectory
- **Worker Disabled**: Set `useWorkers: false` for reliability  
- **Container Sizing**: Use responsive width with min-height constraints

### Component Import Patterns
```typescript
// Standard imports for song analysis components
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import SimpleAlphaTab from '@/components/SimpleAlphaTab';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';
```

### Common Issues
- **Schema Validation**: Missing required fields cause build failures
- **AlphaTab Rendering**: Incorrect notation syntax prevents component mounting
- **Component Registration**: Unregistered songs won't appear in listings
- **Import Paths**: Use absolute paths with `@/` prefix consistently

Follow the established patterns in existing song analysis pages for consistency and leverage the comprehensive component library for rapid development.