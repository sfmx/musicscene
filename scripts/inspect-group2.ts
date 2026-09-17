import fs from 'fs';
import path from 'path';

const group2Slugs = [
  'landslide', 'message-in-a-bottle', 'paint-it-black', 'paranoid',
  'rebel-yell', 'rock-and-roll-all-nite', 'schism', 'seven-nation-army',
  'should-i-stay-or-should-i-go', 'sittin-on-the-dock-of-the-bay',
  'smoke-on-the-water', 'stairway-to-heaven', 'stand-by-me', 'superstition',
  'sweet-home-alabama', 'the-final-countdown', 'twist-and-shout',
  'under-the-bridge', 'wanted-dead-or-alive', 'whole-lotta-love',
  'wild-thing', 'you-really-got-me', 'zombie'
];

for (const s of group2Slugs) {
  const d = JSON.parse(fs.readFileSync(path.join('src/data/songs', s + '.json'), 'utf8'));
  console.log(`\n=== ${s} (${d.songInfo?.key}, ${d.songInfo?.tempo}) ===`);
  d.sections?.forEach((sec: any, i: number) => {
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(sec.exerciseLabel || '')
      || /\\ts\s+6\s+4/i.test(sec.alphaTab || '')
      || (sec.alphaTab || '').includes('(2.6 4.5 4.4 3.3 2.2 2.1)')
      || (sec.alphaTab || '').includes(':4.')
      || (sec.alphaTab || '').includes(':2.');
    if (isGeneric) {
      console.log(`  [${i}] ${sec.name} -> Label: "${sec.exerciseLabel}" | Chords: ${sec.chords}`);
      console.log(`      Tab: ${sec.alphaTab}`);
    }
  });
}

