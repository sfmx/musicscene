import * as fs from 'fs';
import * as path from 'path';

const songsDir = path.resolve(__dirname, '../src/data/songs');
const files = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Checking and applying tuning & tempo fixes across ${files.length} songs...\n`);

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(songsDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const song = JSON.parse(raw);
  let changed = false;

  const oldTuning = song.songInfo.tuning;
  const oldTempo = song.songInfo.tempo;

  // 1. Standardize "Standard (E-A-D-G-B-E)"
  if (song.songInfo.tuning === 'Standard (E-A-D-G-B-E)') {
    song.songInfo.tuning = 'Standard (EADGBE)';
    changed = true;
  }

  // 2. Canonicalize half-step down formats
  if (
    song.songInfo.tuning === 'Half-step down (Eb Ab Db Gb Bb Eb)' ||
    song.songInfo.tuning === 'Eb tuning (Eb-Ab-Db-Gb-Bb-Eb) - Half-step down'
  ) {
    song.songInfo.tuning = 'Half-Step Down (Eb Ab Db Gb Bb Eb)';
    changed = true;
  }

  // 3. Specific song tuning fixes
  if (file === 'eruption.json') {
    song.songInfo.tuning = 'Half-Step Down (Eb Ab Db Gb Bb Eb)';
    song.songInfo.tempo = '104 BPM (free-form cadenza)';
    changed = true;
  }

  if (file === 'welcome-to-the-jungle.json') {
    song.songInfo.tuning = 'Half-Step Down (Eb Ab Db Gb Bb Eb)';
    song.songInfo.tempo = '124 BPM (approx. 120-128 BPM)';
    changed = true;
  }

  if (file === 'every-rose-has-its-thorn.json') {
    song.songInfo.tuning = 'Half-Step Down (Eb Ab Db Gb Bb Eb)';
    changed = true;
  }

  if (file === 'rock-and-roll-all-nite.json') {
    song.songInfo.tuning = 'Half-Step Down (Eb Ab Db Gb Bb Eb)';
    changed = true;
  }

  if (file === 'riptide.json') {
    if (song.songInfo.tuning === 'Standard (EADGBE) with Capo on 1st fret') {
      song.songInfo.tuning = 'Standard (EADGBE) with Capo 1';
      changed = true;
    }
  }

  // 4. Specific tempo fixes for parseInt bugs
  if (file === 'schism.json') {
    song.songInfo.tempo = '87 BPM (varies 47/67/87 BPM)';
    changed = true;
  }

  if (file === 'stairway-to-heaven.json') {
    song.songInfo.tempo = '72 BPM (accelerates 63-98 BPM)';
    changed = true;
  }

  if (changed) {
    console.log(`Updated ${file}:`);
    if (oldTuning !== song.songInfo.tuning) {
      console.log(`  Tuning: "${oldTuning}" -> "${song.songInfo.tuning}"`);
    }
    if (oldTempo !== song.songInfo.tempo) {
      console.log(`  Tempo:  "${oldTempo}" -> "${song.songInfo.tempo}"`);
    }
    fs.writeFileSync(filePath, JSON.stringify(song, null, 2) + '\n', 'utf-8');
    updatedCount++;
  }
}

console.log(`\nCompleted. Updated ${updatedCount} song files.`);

