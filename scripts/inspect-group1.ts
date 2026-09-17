import fs from 'fs';
import path from 'path';

const group1Slugs = [
  'back-in-black', 'bad-moon-rising', 'blitzkrieg-bop', 'blowin-in-the-wind',
  'born-to-be-wild', 'brothers-in-arms', 'brown-eyed-girl', 'devil-went-down-to-georgia',
  'dont-stop-believin', 'dreams', 'enter-sandman', 'eye-of-the-tiger',
  'free-fallin', 'good-riddance', 'here-i-go-again', 'highway-to-hell',
  'hotel-california', 'hound-dog', 'iron-man', 'johnny-b-goode',
  'knockin-on-heavens-door', 'la-bamba'
];

for (const s of group1Slugs) {
  const d = JSON.parse(fs.readFileSync(path.join('src/data/songs', s + '.json'), 'utf8'));
  console.log(`\n=== ${s} (${d.songInfo?.key}, ${d.songInfo?.tempo}) ===`);
  d.sections?.forEach((sec: any, i: number) => {
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(sec.exerciseLabel || '')
      || /\\ts\s+6\s+4/i.test(sec.alphaTab || '')
      || (sec.alphaTab || '').includes('(2.6 4.5 4.4 3.3 2.2 2.1)')
      || /fingerstyle chord progression|chorus chord resolution|dynamic verse progression/i.test(sec.exerciseLabel || '');
    if (isGeneric) {
      console.log(`  [${i}] ${sec.name} -> Label: "${sec.exerciseLabel}" | Chords: ${sec.chords}`);
      console.log(`      Tab: ${sec.alphaTab}`);
    }
  });
}

