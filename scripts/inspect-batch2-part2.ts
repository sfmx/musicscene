import fs from 'fs';
import path from 'path';

const slugs = [
  'sultans-of-swing',
  'stairway-to-heaven',
  'smoke-on-the-water',
  'iron-man',
  'layla',
  'sweet-home-alabama',
  'johnny-b-goode',
  'paint-it-black'
];

for (const s of slugs) {
  const file = path.join(process.cwd(), 'src', 'data', 'songs', `${s}.json`);
  if (!fs.existsSync(file)) {
    console.log(`Missing file: ${s}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`\n=== ${data.songInfo?.title || data.title} (${s}) ===`);
  data.sections?.forEach((sec: any, idx: number) => {
    console.log(`  [${idx}] ${sec.name || sec.title} (${sec.exerciseLabel || 'no label'}):`);
    console.log(`      AlphaTex: ${sec.alphaTab}`);
  });
}

