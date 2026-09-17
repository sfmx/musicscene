import fs from 'fs';
import path from 'path';

const slugs = [
  'radioactive', 'torn', 'wagon-wheel', 'what-i-got', 'no-secrets',
  'europa', 'gloria', 'dust-my-broom', 'satisfaction', 'summer-of-69',
  'the-thrill-is-gone', 'who-made-who'
];

for (const s of slugs) {
  const d = JSON.parse(fs.readFileSync(path.join('src/data/songs', s + '.json'), 'utf8'));
  console.log(`\n--- ${s} (${d.songInfo?.key}, ${d.songInfo?.tempo}) ---`);
  d.sections?.forEach((sec: any, i: number) => {
    const gen = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(sec.exerciseLabel || '')
      || /\\ts\s+6\s+4/i.test(sec.alphaTab || '')
      || (sec.alphaTab || '').includes('(2.6 4.5 4.4 3.3 2.2 2.1)');
    if (gen) {
      console.log(`  [${i}] ${sec.name} -> ${sec.exerciseLabel} | Chords: ${sec.chords}`);
      console.log(`      Desc: ${sec.description}`);
    }
  });
}

