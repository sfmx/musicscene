# TabAndNoteVisualizer Component Usage Guidelines

This document describes how to use the `TabAndNoteVisualizer` component across different types of pages in the MusicScene project.

## Purpose
The `TabAndNoteVisualizer` component displays guitar tablature and note information visually, helping users understand:
- Practice exercises and patterns
- Song riffs and chord progressions
- Scales and theory concepts

## Import
Import the component from the shared components directory:

```tsx
import TabAndNoteVisualizer from '@/components/TabAndNoteVisualizer';
```

## Data Structures

### 1. Tab Notes (for fretboard positions)
```tsx
const tabNotes = [
  { string: 1, fret: 0, idx: 1 }, // E string, open
  { string: 1, fret: 2, idx: 2 }, // E string, 2nd fret
  // Add comment to indicate the actual note for clarity
];
```

### 2. Note Names (for showing actual notes)
```tsx
const notes = [
  { name: 'E', idx: 1 },
  { name: 'F#', idx: 2 },
];
```

### 3. Combined Notation Data (for MusicNotationVisualizer)
```tsx
const combinedData = [
  { timing: 1, string: 1, fret: 0, note: 'E' },
  { timing: 2, string: 1, fret: 2, note: 'F#' },
];
```

### 4. Chord Data
```tsx
const chords = [
  { name: "E", frets: [0,2,2,1,0,0] },
  { name: "A", frets: ["x",0,2,2,2,0] },
];
```

## Usage Patterns

### 1. Practice Exercises (like finger-exercises page)
```tsx
<TabAndNoteVisualizer
  tabNotes={chromaticTab}
  notes={chromaticNotes}
  beatsPerBar={4}
  title="Chromatic Exercise (1-2-3-4)"
/>
```

### 2. Song Breakdowns (like were-not-gonna-take-it page)
```tsx
<TabAndNoteVisualizer
  tabNotes={mainRiffTab}
  notes={mainRiffNotes}
  beatsPerBar={4}
  title="Main Power Chord Riff"
/>
```

### 3. Scale Patterns
```tsx
<TabAndNoteVisualizer
  tabNotes={scaleTab}
  notes={scaleNotes}
  beatsPerBar={4}
  title="E Major Scale Pattern"
/>
```

### 4. Chord Diagrams
```tsx
<TabAndNoteVisualizer
  chords={[{name: "E", frets: [0,2,2,1,0,0]}]}
  title="E Major Chord Shape"
/>
```

## Props Reference
- `tabNotes`: Array of tab position objects (string, fret, idx)
- `notes`: Array of note name objects (name, idx)
- `beatsPerBar`: Number of beats per measure (typically 4)
- `title`: Description of the tab/visualization
- `chords`: Array of chord objects (name, frets array)

## Best Practices

1. **Data Organization**
   - Keep related tab and note data grouped together
   - Use meaningful variable names (e.g., mainRiffTab, scaleNotes)
   - Add comments indicating actual notes in tab positions

2. **Visual Clarity**
   - Always include descriptive titles
   - Group related visualizations with appropriate spacing (mt-4)
   - Pair with explanatory text before/after the visualization

3. **Common Patterns**
   - For exercises: Focus on finger positions and patterns
   - For songs: Show both main riff and variations
   - For theory: Include both tab positions and note names

4. **Layout Integration**
   - Use inside `<main className="prose">` blocks
   - Add margin-top (`mt-4`) when stacking multiple visualizers
   - Pair with MusicNotationVisualizer for complete examples

## Examples by Page Type

### Practice/Exercise Pages
```tsx
// Define exercise patterns
const exerciseTab = [/* tab positions */];
const exerciseNotes = [/* note names */];

// Use in component
<TabAndNoteVisualizer
  tabNotes={exerciseTab}
  notes={exerciseNotes}
  beatsPerBar={4}
  title="Exercise Pattern"
/>
```

### Song Breakdown Pages
```tsx
// Define song elements
const mainRiffTab = [/* tab positions */];
const mainRiffNotes = [/* note names */];
const progressionChords = [/* chord shapes */];

// Use in component
<TabAndNoteVisualizer
  tabNotes={mainRiffTab}
  notes={mainRiffNotes}
  beatsPerBar={4}
  title="Main Riff"
/>
```

### Theory Pages
```tsx
// Define scale/theory content
const scaleTab = [/* tab positions */];
const scaleNotes = [/* note names */];

// Use in component
<TabAndNoteVisualizer
  tabNotes={scaleTab}
  notes={scaleNotes}
  beatsPerBar={4}
  title="Scale Pattern"
/>
```

## Accessibility and UX
- Include clear, descriptive titles
- Maintain consistent spacing and layout
- Group related visualizations logically
- Add explanatory text for context

---

Refer to finger-exercises.tsx and were-not-gonna-take-it.tsx for complete implementation examples.