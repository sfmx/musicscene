---
name: song-analysis
description: Standard operating procedure for creating, structuring, validating, and publishing song analysis pages in MusicScene, including AlphaTex notation, harmonic analysis, schema compliance, and internal linking.
---

# Song Analysis Engineering Skill

This skill guides the end-to-end process of researching, authoring, validating, and publishing comprehensive guitar song analyses on `musicscene.com.au`.

---

## 1. Architecture Overview

Every song analysis consists of four tightly integrated components:

1. **JSON Data File** (`src/data/songs/<slug>.json`):
   - Conforms strictly to [src/schemas/song-analysis.schema.json](file:///c:/Source/musicscene/src/schemas/song-analysis.schema.json).
   - Contains song metadata, difficulty, key & scale breakdown, chord progressions, guitar techniques, section-by-section AlphaTex tabs, gear recommendations, and learning paths.

2. **Data Loader Registration** (`src/lib/songData.ts`):
   - Import the song JSON.
   - Add to the `songDatabase` map (`Record<string, SongData>`).
   - Add the slug to the `allSongSlugs` array.

3. **Page Route Component** (`src/app/lessons/songs/song-analysis/<slug>/page.tsx`):
   - Generates SEO metadata via `getSongAnalysisMetadata('<slug>')` from `@/lib/seo`.
   - Renders `<SongAnalysisPageTemplate songSlug="<slug>" displayName="<Title>" />`.

4. **Curated Harmonic Secret** (`src/data/whySongsWork.ts`):
   - Deep pedagogical breakdown explaining *why* the song works harmonically (modal mixture, Mixolydian drive, descending basslines, key shifts, pedal points).
   - Links to relevant theory guides (scales, modes, chords, progressions).

---

## 2. The Gold Standard Quality Criteria

To maintain MusicScene's reputation as the highest-quality guitar analysis platform, **every song analysis must meet the Gold Standard tier**. Sparse 2-to-3 section stubs are strictly prohibited.

### Gold Standard Checklist:
1. **5 to 7 Comprehensive Song Sections**:
   - Every song must cover the complete structural arc:
     - *Intro Riff / Opening Chime / Signature Hook*
     - *Verse Rhythm & Strumming/Picking Mechanics*
     - *Pre-Chorus Lift / Tension Build* (where present in the song)
     - *Chorus Stadium Hook / Main Progression*
     - *Bridge Detour / Key Shift / Introspective Breakdown*
     - *Signature Guitar Solo / Instrumental Lead Break / Melodic Fanfare* (mandatory for all lead guitar tracks)
     - *Outro Climax / Solo Jam / Dynamic Resolution*
2. **Full Solo & Lead Transcriptions**:
   - Transcribe the signature guitar solo or lead break in valid, rhythmic AlphaTex notation.
   - Include note-by-note phrasing, whole-step/half-step bends, double stops, vibrato, scale choices, and pickup selections.
3. **At Least 2 Distinct Guitar Techniques**:
   - Minimum of 2 techniques: one rhythm/groove foundation and one signature lead/embellishment.
   - Each technique must contain actionable `notes`, step-by-step `sequence`, and practical `tips` for pick-hand and fret-hand ergonomics.
4. **Valid AlphaTex on Every Section with `exerciseLabel`**:
   - Every section must have a playable, validated AlphaTex (`alphaTab`) snippet (1–4 bars).
   - Every section must have a descriptive, student-facing `exerciseLabel` (e.g., *"Boogie Shuffle Exercise"*, *"Blistering Wah Solo Study"*).
5. **Amp Settings Object**:
   - `amp.settings` must strictly be an object with string keys: `{ "gain": "...", "treble": "...", "middle": "...", "bass": "...", "presence": "..." }`.
6. **Harmonic Secret Entry (`src/data/whySongsWork.ts`)**:
   - Curated analysis explaining why the composition works harmonically (modal mixture, Mixolydian drive, descending bassline, etc.).
7. **Fair Dealing / Copyright Compliance**:
   - Strictly 1–4 bar instructional excerpts, exercise framing, zero master audio recordings.

---

## 3. Step-by-Step Song Creation Workflow

### Step 1: Research Musical Specifications
Before generating content, verify:
- **Tonal Center & Mode**: (e.g., E Major / Ionian vs. D Mixolydian vs. B Minor / Aeolian).
- **Tuning**: Standard (EADGBE), Drop D (DADGBE), Half-Step Down (Eb Ab Db Gb Bb Eb), Open G, etc.
- **Tempo**: Exact BPM (e.g., "128 BPM").
- **Key Progression**: Roman numeral analysis for verse, chorus, bridge, and solo (e.g., `I - ♭VII - IV - I`).
- **Signature Techniques**: Downstroke power chords, open string pedal tones, alternate picking, hybrid picking, unison bends.
- **Iconic Gear**: Specific guitars (year/model), amplifiers, gain/EQ settings, and effects pedals used on the studio recording.

### Step 2: Create the JSON Data File (`src/data/songs/<slug>.json`)
Ensure all required schema fields are present:
- `songInfo`: `title`, `artist`, `album`, `released`, `genre`, `tempo`, `duration`, `key`, `tuning`.
- `difficulty`: `overall`, `rhythmGuitar`, `leadGuitar`, `bass`, `drums` (Values: `Beginner`, `Intermediate`, `Advanced`, `Expert`).
- `musicalAnalysis`:
  - `keyAndScale`: `primaryKey`, `modalCharacter`, `scalesUsed` (with notes and applications), `keySignature`, `relativeMinor`.
  - `chordProgressions`: `mainProgression` (chords, progression, description), `sectionProgressions` (section, progression, romanNumerals, description), `harmonicFunction` (bullet points explaining each chord's role).
- `techniques`: Array of objects with `name`, `description`, `difficulty`, `primaryTechnique`, and `details` (`notes`, `sequence`, `tips`, `chords`, `progression`).
- `sections`: Array of sections (Intro, Verse, Chorus, Bridge, Solo, Outro):
  - `name`, `timeStamp` (format: `M:SS-M:SS` or `MM:SS-MM:SS`), `technique`, `key`, `description`, `chords`, `progression`, `notes`, `exerciseLabel`.
  - `alphaTab`: Clean, validated AlphaTex notation.
- `equipment`: `guitar` (`recommended`, `alternatives`, `pickup`), `amp` (`recommended`, `alternatives`, `settings`), `effects` (`distortion`, `reverb`, `other`).
- `learningPath`: `beginner`, `intermediate`, `advanced` milestones with `title`, `steps` (array of strings), and `timeEstimate`.
- `practiceNotes`: `commonMistakes`, `practiceRoutine`, `metronomeWork`.
- `metadata`: `popularity` (1-100), `dateAdded` (YYYY-MM-DD), `decade`, `iconicRiff` (boolean), `learningValue` (`HIGH`, `MEDIUM`), `tags`.
- `relatedSongs`: `similarTechniques` array with song title, artist, technique, and internal links.

### Step 3: AlphaTex Notation Rules & Guidelines
AlphaTex strings are rendered in the browser via `@coderline/alphatab`. They must be syntactically valid according to `src/lib/alphaTexValidator.ts`:
- **Format**: `fret.string` where string `1` is high E, `6` is low E. Example: `0.4` (open D string), `2.3` (2nd fret G string).
- **Chords**: Group notes in parentheses: `(0.4 2.3 3.2)`.
- **Bars & Measures**: Every measure must be separated by `|` and end with a trailing `|`. Example:
  ```text
  (0.4 2.3 3.2) (0.4 2.3 3.2) | 3.5 5.4 5.3 |
  ```
- **Durations**: Standard rhythm values if needed (`:8` for eighth note, `:4` for quarter note, `:16` for sixteenth note).
- **Validation**: Always run `AlphaTexValidator.validate(alphaTexString)` to ensure zero errors.

### Step 3b: Copyright & Fair Dealing Compliance
All song analyses must strictly comply with [docs/copyright-and-fair-dealing-guidelines.md](file:///c:/Source/musicscene/docs/copyright-and-fair-dealing-guidelines.md) under the Australian *Copyright Act 1968* (Cth) (s 40 Research/Study, s 41 Criticism/Review):
- **Excerpts Only (1–4 Measures)**: Transcribe only isolated pedagogical snippets demonstrating the key technique or solo phrasing. Never transcribe full commercial scores end-to-end.
- **Pedagogical Framing**: Always supply an `exerciseLabel` (e.g., *"Double-Stop Bend Study"*, *"Rhythm Shuffle Exercise"*).
- **No Master Audio**: Never host or stream copyrighted master recordings (MP3/WAV). Only browser-synthesized audio via the Web Audio API is permitted.
- **Chords & Theory**: Harmonic progressions (`I - IV - V - vi`), scale charts, and theory explanations are public domain and original MusicScene text.
- **Attribution**: Always acknowledge the original artist, composer, and album.

### Step 4: Register the Song in `src/lib/songData.ts`
1. Add the import at the top:
   ```typescript
   import mySongData from '@/data/songs/my-song-slug.json';
   ```
2. Add to `songDatabase`:
   ```typescript
   'my-song-slug': mySongData as SongData,
   ```
3. Add to `allSongSlugs`:
   ```typescript
   'my-song-slug',
   ```

### Step 5: Create the Next.js Page Route
Create `src/app/lessons/songs/song-analysis/<slug>/page.tsx`:
```tsx
import { getSongAnalysisMetadata } from '@/lib/seo';
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export const metadata = getSongAnalysisMetadata('<slug>');

export default function MySongPage() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="<slug>" 
      displayName="<Song Title>" 
    />
  );
}
```

### Step 6: Add Curated Harmonic Secret in `src/data/whySongsWork.ts`
Add an entry in `CURATED_HARMONIC_SECRETS`:
- `slug`: must match `<slug>`.
- `category`: one of `'modal-mixture'`, `'mixolydian-dorian'`, `'descending-bassline'`, `'key-modulation'`, `'pedal-tone-drone'`, `'secondary-dominants'`, `'blues-rock-hybrid'`.
- Provide `coreSecret`, `emotionalHook`, `romanProgression`, `chords`, `progressionExplanation`, `voiceLeadingInsights`, `guitarPerspective`, `songwriterTakeaway`, and `relatedTheory` links.

---

## 4. Verification & Publishing Checklist

Always execute this verification pipeline before committing or deploying:

```powershell
# 1. Rebuild Content Index (registers tags, cross-references & search metadata)
npm run content:index

# 2. Validate Schema & Cross-References
npx tsx scripts/validate-content.ts

# 3. Unit Tests
npx vitest run

# 4. TypeScript Compilation Check
npx tsc --noEmit

# 5. Production Build Verification (Ensures static page prerenders without error)
npm run build
```

