import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

// Replicate ScaleVisualization.tsx exact parsing logic
const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const enharmonics: { [key: string]: string[] } = {
  'C#': ['Db'], 'D#': ['Eb'], 'F#': ['Gb'], 'G#': ['Ab'], 'A#': ['Bb'],
  'Db': ['C#'], 'Eb': ['D#'], 'Gb': ['F#'], 'Ab': ['G#'], 'Bb': ['A#']
};

function parseScaleNotes(notesString: string): string[] {
  const notes = notesString.split(' - ').map(note => {
    let cleaned = note.trim();
    cleaned = cleaned.replace(/♯/g, '#');
    return cleaned;
  });

  const uniqueNotes: string[] = [];
  notes.forEach(note => {
    if (!uniqueNotes.some(n => n === note)) {
      uniqueNotes.push(note);
    }
  });
  return uniqueNotes;
}

function isValidNoteName(note: string): boolean {
  if (chromaticNotes.includes(note)) return true;
  return Object.keys(enharmonics).includes(note);
}

console.log(`Checking scale notes parsing and fretboard mapping across ${allFiles.length} songs...\n`);

let unparseableCount = 0;
let invalidNotesCount = 0;
const report: string[] = [];

for (const file of allFiles) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const scales = data.musicalAnalysis?.keyAndScale?.scalesUsed || [];
  const primaryKey = data.musicalAnalysis?.keyAndScale?.primaryKey || '';

  scales.forEach((s: any, idx: number) => {
    const parsed = parseScaleNotes(s.notes || '');
    if (parsed.length < 5) {
      unparseableCount++;
      report.push(`[LOW NOTE COUNT] ${slug} -> "${s.scale}": parsed only ${parsed.length} notes: ${JSON.stringify(parsed)} from "${s.notes}"`);
    }
    const invalidNotes = parsed.filter(n => !isValidNoteName(n));
    if (invalidNotes.length > 0) {
      invalidNotesCount++;
      report.push(`[INVALID NOTE NAME] ${slug} -> "${s.scale}": invalid note tokens ${JSON.stringify(invalidNotes)}`);
    }
  });
}

console.log(`Total unparseable / low count scales: ${unparseableCount}`);
console.log(`Total invalid note names:            ${invalidNotesCount}`);
console.log('----------------------------------------------------');
report.forEach(r => console.log(r));

