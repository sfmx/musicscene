/**
 * Generate educational alphaTab exercises for song sections.
 *
 * Replaces removed copyrighted riff transcriptions with generic
 * scale/technique exercises in each song's key. These are educational
 * practice patterns, NOT reproductions of the copyrighted song.
 */

const fs = require('fs');
const path = require('path');

const songsDir = path.join(__dirname, 'src', 'data', 'songs');

// Root note → fret position on 6th string
const KEY_ROOT = {
  'C': 8, 'C#': 9, 'Db': 9, 'D': 10, 'D#': 11, 'Eb': 11,
  'E': 0, 'F': 1, 'F#': 2, 'Gb': 2,
  'G': 3, 'G#': 4, 'Ab': 4,
  'A': 5, 'A#': 6, 'Bb': 6,
  'B': 7, 'Cb': 7
};

function parseKey(keyStr) {
  if (!keyStr) return { quality: 'minor', rootFret: 0 };
  const match = keyStr.match(/^([A-G][#b]?)\s*(Major|Minor|Dorian|Mixolydian|Phrygian|Lydian|Locrian|Aeolian)?/i);
  if (!match) return { quality: 'minor', rootFret: 0 };
  const root = match[1];
  const qualRaw = (match[2] || 'major').toLowerCase();
  const quality = ['minor', 'dorian', 'phrygian', 'aeolian', 'locrian'].includes(qualRaw) ? 'minor' : 'major';
  let rootFret = KEY_ROOT[root] ?? 0;
  // Shift open-position keys up for cleaner exercises
  if (rootFret < 2) rootFret += 12;
  return { quality, rootFret };
}

// ========== Exercise Generators ==========
// Each returns a valid AlphaTex string (notes with | bar separators)

// Minor pentatonic box 1 ascending-descending
// Box shape: 6:R,R+3 | 5:R,R+2 | 4:R,R+2 | 3:R,R+2 | 2:R,R+3 | 1:R,R+3
function minorPentatonicScale(R) {
  return [
    `${R}.6 ${R+3}.6 ${R}.5 ${R+2}.5 ${R}.4 ${R+2}.4 |`,
    `${R}.3 ${R+2}.3 ${R}.2 ${R+3}.2 ${R}.1 ${R+3}.1 |`,
    `${R+3}.1 ${R}.1 ${R+3}.2 ${R}.2 ${R+2}.3 ${R}.3 |`,
    `${R+2}.4 ${R}.4 ${R+2}.5 ${R}.5 ${R+3}.6 ${R}.6 |`
  ].join(' ');
}

// Major pentatonic box 1 ascending-descending
// Box shape: 6:R,R+2 | 5:R-1,R+2 | 4:R-1,R+2 | 3:R-1,R+1 | 2:R,R+2 | 1:R,R+2
function majorPentatonicScale(R) {
  return [
    `${R}.6 ${R+2}.6 ${R-1}.5 ${R+2}.5 ${R-1}.4 ${R+2}.4 |`,
    `${R-1}.3 ${R+1}.3 ${R}.2 ${R+2}.2 ${R}.1 ${R+2}.1 |`,
    `${R+2}.1 ${R}.1 ${R+2}.2 ${R}.2 ${R+1}.3 ${R-1}.3 |`,
    `${R+2}.4 ${R-1}.4 ${R+2}.5 ${R-1}.5 ${R+2}.6 ${R}.6 |`
  ].join(' ');
}

// Power chord movement pattern I-IV-V-I
function powerChordExercise(R) {
  const iv = R + 5;
  const v = R + 7;
  return [
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R}.6 ${R+2}.5 ${R+2}.4 |`,
    `${iv}.6 ${iv+2}.5 ${iv+2}.4 ${iv}.6 ${iv+2}.5 ${iv+2}.4 |`,
    `${v}.6 ${v+2}.5 ${v+2}.4 ${v}.6 ${v+2}.5 ${v+2}.4 |`,
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R}.6 ${R+2}.5 ${R+2}.4 |`
  ].join(' ');
}

// Bending exercise on the upper strings
function bendingExercise(R) {
  return [
    `${R}.3 ${R+2}.3 ${R}.2 ${R+3}.2 |`,
    `${R+3}.1 ${R}.1 ${R+3}.2 ${R}.2 |`,
    `${R}.3 ${R+2}.3 ${R+2}.2 ${R}.2 |`,
    `${R+3}.1 ${R}.1 ${R+2}.3 ${R}.3 |`
  ].join(' ');
}

// Fingerpicking arpeggio pattern
function fingerpickingExercise(R) {
  return [
    `${R}.5 ${R}.4 ${R+2}.3 ${R}.2 ${R+2}.3 ${R}.4 |`,
    `${R}.5 ${R+2}.4 ${R+2}.3 ${R}.2 ${R+2}.3 ${R+2}.4 |`,
    `${R+5}.5 ${R+5}.4 ${R+7}.3 ${R+5}.2 ${R+7}.3 ${R+5}.4 |`,
    `${R}.5 ${R}.4 ${R+2}.3 ${R}.2 ${R+2}.3 ${R}.4 |`
  ].join(' ');
}

// Slide exercise moving between positions
function slideExercise(R) {
  return [
    `${R}.5 ${R+2}.5 ${R+2}.4 ${R+5}.4 |`,
    `${R+5}.5 ${R+7}.5 ${R+7}.4 ${R+5}.4 |`,
    `${R+7}.5 ${R+5}.5 ${R+2}.5 ${R}.5 |`,
    `${R}.4 ${R+2}.4 ${R+5}.4 ${R+7}.4 |`
  ].join(' ');
}

// Alternate picking exercise - scalar pattern
function alternatePickingExercise(R) {
  return [
    `${R}.6 ${R+2}.6 ${R+3}.6 ${R+5}.6 |`,
    `${R}.5 ${R+2}.5 ${R+3}.5 ${R+5}.5 |`,
    `${R}.4 ${R+2}.4 ${R+3}.4 ${R+5}.4 |`,
    `${R}.3 ${R+2}.3 ${R}.2 ${R+3}.2 |`
  ].join(' ');
}

// Chord arpeggio exercise (strum pattern)
function chordStrumExercise(R) {
  const iv = R + 5;
  return [
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R+1}.3 ${R}.2 ${R}.1 |`,
    `${iv}.6 ${iv+2}.5 ${iv+2}.4 ${iv+1}.3 ${iv}.2 ${iv}.1 |`,
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R+1}.3 ${R}.2 ${R}.1 |`,
    `${iv}.6 ${iv+2}.5 ${iv+2}.4 ${iv+1}.3 ${iv}.2 ${iv}.1 |`
  ].join(' ');
}

// Rhythm muting exercise
function rhythmMuteExercise(R) {
  return [
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R+2}.5 |`,
    `${R}.6 ${R}.6 ${R+2}.5 ${R+2}.4 |`,
    `${R+5}.6 ${R+7}.5 ${R+7}.4 ${R+7}.5 |`,
    `${R}.6 ${R+2}.5 ${R+2}.4 ${R+2}.5 |`
  ].join(' ');
}

// Minor pentatonic lick pattern (short expressive phrase)
function pentatonicLickExercise(R) {
  return [
    `${R+3}.1 ${R}.1 ${R+3}.2 ${R}.2 |`,
    `${R+2}.3 ${R}.3 ${R+2}.4 ${R}.4 |`,
    `${R}.3 ${R+2}.3 ${R}.2 ${R+3}.2 |`,
    `${R+3}.1 ${R}.1 ${R}.2 ${R+3}.2 |`
  ].join(' ');
}

// ========== Technique Categorization ==========

function categorize(technique) {
  const t = (technique || '').toLowerCase();
  if (t.includes('fingerpick') || t.includes('arpeggio') || t.includes('travis')) return 'fingerpicking';
  if (t.includes('power chord')) return 'powerchord';
  if (t.includes('palm mut') || t.includes('muting')) return 'palmmute';
  if (t.includes('bend') || t.includes('vibrato')) return 'bending';
  if (t.includes('slide')) return 'slide';
  if (t.includes('solo') || t.includes('lead') || t.includes('electric lead')) return 'lead';
  if (t.includes('strum') || t.includes('rhythm') || t.includes('acoustic') || t.includes('accompan')) return 'chord';
  if (t.includes('riff') || t.includes('single') || t.includes('alternate pick')) return 'riff';
  if (t.includes('crescendo') || t.includes('build') || t.includes('dynamic') || t.includes('intensity')) return 'dynamic';
  if (t.includes('clean') || t.includes('distort')) return 'riff';
  if (t.includes('chord')) return 'chord';
  return 'scale';
}

// Map category + section index to specific exercise for variety
function getExercise(category, R, quality, sectionIndex) {
  switch (category) {
    case 'fingerpicking':
      return { exercise: fingerpickingExercise(R), label: 'Arpeggio Fingerpicking Exercise' };
    case 'powerchord':
      return { exercise: powerChordExercise(R), label: 'Power Chord Movement Exercise' };
    case 'palmmute':
      return { exercise: rhythmMuteExercise(R), label: 'Rhythm Palm Muting Exercise' };
    case 'bending':
      return { exercise: bendingExercise(R), label: 'Bending & Phrasing Exercise' };
    case 'slide':
      return { exercise: slideExercise(R), label: 'Position Sliding Exercise' };
    case 'lead':
      // Alternate between scale and lick exercises for lead sections
      if (sectionIndex % 2 === 0) {
        return { exercise: pentatonicLickExercise(R), label: `${quality === 'minor' ? 'Minor' : 'Major'} Pentatonic Lick Exercise` };
      }
      return {
        exercise: quality === 'minor' ? minorPentatonicScale(R) : majorPentatonicScale(R),
        label: `${quality === 'minor' ? 'Minor' : 'Major'} Pentatonic Scale Exercise`
      };
    case 'chord':
      return { exercise: chordStrumExercise(R), label: 'Chord Voicing Exercise' };
    case 'riff':
      return { exercise: alternatePickingExercise(R), label: 'Alternate Picking Exercise' };
    case 'dynamic':
      return { exercise: powerChordExercise(R), label: 'Dynamic Power Chord Exercise' };
    case 'scale':
    default:
      return {
        exercise: quality === 'minor' ? minorPentatonicScale(R) : majorPentatonicScale(R),
        label: `${quality === 'minor' ? 'Minor' : 'Major'} Pentatonic Scale Exercise`
      };
  }
}

// ========== Main ==========

const files = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && f !== '_template.json');

let totalExercises = 0;
let totalFiles = 0;

for (const file of files) {
  const filePath = path.join(songsDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    console.log(`  SKIP (invalid JSON): ${file}`);
    continue;
  }

  if (!data.sections || data.sections.length === 0) {
    console.log(`  SKIP (no sections): ${file}`);
    continue;
  }

  // Get the song key
  const songKey = data.musicalAnalysis?.keyAndScale?.primaryKey
    || data.songInfo?.key
    || data.sections?.[0]?.key
    || 'E Minor';
  const keyInfo = parseKey(songKey);

  let exerciseCount = 0;

  for (let i = 0; i < data.sections.length; i++) {
    const section = data.sections[i];
    const sectionKey = section.key ? parseKey(section.key) : keyInfo;
    const category = categorize(section.technique);
    const { exercise, label } = getExercise(category, sectionKey.rootFret, sectionKey.quality, i);

    section.alphaTab = exercise;
    section.exerciseLabel = label;
    exerciseCount++;
  }

  const output = JSON.stringify(data, null, 2) + '\n';
  fs.writeFileSync(filePath, output, 'utf8');
  totalExercises += exerciseCount;
  totalFiles++;
  console.log(`  ${file}: ${exerciseCount} exercises (key: ${songKey})`);
}

console.log(`\n=== SUMMARY ===`);
console.log(`Files updated: ${totalFiles}`);
console.log(`Exercises generated: ${totalExercises}`);
