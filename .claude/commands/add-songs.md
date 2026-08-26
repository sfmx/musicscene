# Add Songs to Catalog

Batch-add new song analysis pages to the MusicScene catalog. This command handles the complete workflow: JSON data creation, page routes, registry updates, content index rebuild, and build verification.

## Usage

Provide a list of songs to add. For each song, specify at minimum: title, artist, year, key, chords, tempo, genre, and difficulty. The command will create all necessary files and verify the build.

Example invocation:
```
/add-songs Add these beginner songs: "Wild Thing" by The Troggs (1966), "La Bamba" by Ritchie Valens (1958)
```

Or provide a theme/criteria and let the agent select appropriate songs:
```
/add-songs Add 10 more classic blues songs
```

---

## Architecture Reference

### File Structure Per Song

Each song requires exactly **3 files** plus **2 registry updates**:

```
src/data/songs/{song-slug}.json              ← JSON data (schema-compliant)
src/app/lessons/songs/song-analysis/{song-slug}/page.tsx  ← Page route
src/lib/songData.ts                          ← Import + database entry
```

### Current Song Page Pattern

```tsx
import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';


export const metadata = getSongAnalysisMetadata('{song-slug}');

export default function {ComponentName}Analysis() {
  return (
    <SongAnalysisPageTemplate
      songSlug="{song-slug}"
      displayName="{Display Name}"
    />
  );
}
```

**Important**: Pages do NOT use `"use client"` — they are server components with static metadata export.

### songData.ts Registration Pattern

```typescript
// 1. Add import at top of file (after existing imports)
import newSongData from '@/data/songs/new-song.json';

// 2. Add entry to songDatabase record (before closing brace)
'new-song': newSongData as unknown as SongData,
```

---

## Step-by-Step Process

### Step 1: Check Existing Catalog

Before adding songs, check what already exists to avoid duplicates:

```typescript
// Read src/lib/songData.ts to see all song slugs in songDatabase
// Currently the catalog has 76 songs
```

### Step 2: Create JSON Data Files

For each song, create `src/data/songs/{song-slug}.json` following the schema at `src/schemas/song-analysis.schema.json`.

**Reference template**: `src/data/songs/_template.json`
**Reference existing song**: `src/data/songs/wonderwall.json` (good beginner example)

#### Required Top-Level Sections

```json
{
  "songInfo": {
    "title": "string (required)",
    "artist": "string (required)",
    "album": "string (required)",
    "released": "string year (required)",
    "genre": "string (required)",
    "tempo": "string BPM",
    "duration": "string M:SS",
    "key": "string (required)",
    "tuning": "string (defaults to Standard (EADGBe))"
  },
  "difficulty": {
    "overall": "Beginner|Intermediate|Advanced|Expert (required)",
    "rhythmGuitar": "string",
    "leadGuitar": "string",
    "bass": "string",
    "drums": "string"
  },
  "musicalAnalysis": {
    "keyAndScale": {
      "primaryKey": "string (required)",
      "scalesUsed": [{ "scale": "", "notes": "", "application": "" }],
      "modalCharacter": "string (required)",
      "keySignature": "string",
      "relativeMinor": "string"
    },
    "chordProgressions": {
      "mainProgression": {
        "chords": ["array (required)"],
        "progression": "roman numerals (required)",
        "description": "string (required)"
      },
      "sectionProgressions": [
        { "section": "", "progression": "", "romanNumerals": "", "description": "" }
      ],
      "harmonicFunction": ["string array"]
    }
  },
  "techniques": [
    {
      "name": "string (required)",
      "description": "string (required)",
      "difficulty": "string (required)",
      "primaryTechnique": true,
      "details": {
        "notes": ["array"],
        "sequence": ["array"],
        "tips": ["array"],
        "chords": ["array - triggers auto chord diagrams"],
        "progression": "string"
      }
    }
  ],
  "sections": [
    {
      "name": "string (required)",
      "timeStamp": "M:SS-M:SS",
      "technique": "string",
      "key": "string",
      "description": "string (required)",
      "alphaTab": "fret.string notation",
      "chords": ["array"],
      "progression": "string",
      "notes": ["array"]
    }
  ],
  "equipment": {
    "guitar": { "recommended": "", "alternatives": [], "pickup": "" },
    "amp": { "recommended": "", "alternatives": [], "settings": {} },
    "effects": { "distortion": "", "delay": "", "reverb": "", "other": "" }
  },
  "learningPath": {
    "beginner": { "focus": "", "steps": [], "timeEstimate": "" },
    "intermediate": { "focus": "", "steps": [], "timeEstimate": "" },
    "advanced": { "focus": "", "steps": [], "timeEstimate": "" }
  },
  "practiceNotes": {
    "commonMistakes": [],
    "practiceRoutine": [],
    "focusAreas": [],
    "metronomeWork": []
  },
  "relatedSongs": {
    "sameArtist": [{ "title": "", "difficulty": "", "similarity": "" }],
    "similarTechniques": [{ "title": "", "artist": "", "difficulty": "", "similarity": "" }],
    "progressionPath": [{ "title": "", "artist": "", "difficulty": "", "similarity": "" }]
  },
  "metadata": {
    "popularity": 85,
    "dateAdded": "YYYY-MM-DD",
    "featured": false,
    "decade": "1960s|1970s|1980s|etc",
    "iconicRiff": false,
    "tags": ["lowercase-hyphenated-tags"],
    "learningValue": "High|Medium|Low",
    "estimatedLearningTime": "1-2 weeks"
  }
}
```

#### Execution Strategy for JSON Files

Use **parallel Task agents** (subagent_type: "general-purpose") to create JSON files in batches of 5. Each agent should:
1. Read `src/data/songs/wonderwall.json` for the schema reference
2. Write each JSON file using the Write tool
3. Ensure musically accurate chord progressions, correct keys, and helpful beginner tips

### Step 3: Create Page Route Directories and Files

```bash
# Create directories first
mkdir -p src/app/lessons/songs/song-analysis/{song-slug-1} src/app/lessons/songs/song-analysis/{song-slug-2} ...
```

Then use a Task agent to write all page.tsx files using the Write tool, following the pattern above.

### Step 4: Register in songData.ts

Edit `src/lib/songData.ts`:
1. Add import statements after the last existing import
2. Add database entries before the closing `};` of the `songDatabase` record

### Step 5: Rebuild Content Index

```bash
npx tsx scripts/build-content-index.ts
```

Verify the song count increased by the expected amount.

### Step 6: Build Verification

```bash
npm run build
```

Check the output for:
- `0 errors` in validation
- `Generating static pages (X/X)` succeeds
- All new song routes appear in the route listing

---

## Slugging Convention

Song slugs are lowercase, hyphenated, with special characters removed:

| Title | Slug |
|---|---|
| Sweet Child O' Mine | sweet-child-o-mine |
| Knockin' on Heaven's Door | knockin-on-heavens-door |
| Johnny B. Goode | johnny-b-goode |
| What's Going On | whats-going-on |
| I Love Rock 'N' Roll | i-love-rock-n-roll |

## Component Name Convention

PascalCase with "Analysis" suffix:

| Slug | Component Name |
|---|---|
| bad-moon-rising | BadMoonRisingAnalysis |
| stand-by-me | StandByMeAnalysis |
| i-love-rock-n-roll | ILoveRockNRollAnalysis |

---

## Validation Checklist

After adding songs, verify:

- [ ] All JSON files exist in `src/data/songs/`
- [ ] All page.tsx files exist in `src/app/lessons/songs/song-analysis/{slug}/`
- [ ] All imports added to `src/lib/songData.ts`
- [ ] All database entries added to `songDatabase` record
- [ ] Content index rebuilt (check song count matches expected)
- [ ] `npm run build` passes with 0 errors
- [ ] All new routes appear in build output

## Tag Taxonomy

Use existing tags from `src/lib/tagTaxonomy.ts` when possible. Common song tags include: `beginner`, `strumming`, `classic-rock`, `blues`, `folk`, `country`, `power-chords`, `fingerpicking`. Tags not in the taxonomy will generate warnings but won't break the build.

## Metadata Guidelines

- **popularity**: 80-97 for well-known songs, 60-79 for niche selections
- **decade**: Must match release year (e.g., 1969 → "1960s")
- **featured**: Set `true` only for iconic, highly-requested songs (limit to ~10)
- **iconicRiff**: `true` if the song is known for a signature guitar riff
- **dateAdded**: Use today's date in YYYY-MM-DD format

## Previous Successful Applications

- ✅ **36 initial songs**: Original catalog (Back in Black, Stairway to Heaven, etc.)
- ✅ **25 songs added**: Genre expansion (Zombie, Riptide, Classical Gas, etc.)
- ✅ **15 beginner songs added**: 3-chord wonders (Bad Moon Rising, Wild Thing, etc.)
- **Current catalog**: 76 songs total
