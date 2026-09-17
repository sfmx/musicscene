import fs from 'fs';
import path from 'path';

const slugs = [
  'under-the-bridge',
  'you-shook-me-all-night-long',
  'blackbird',
  'crossroads',
  'norwegian-wood',
  'cliffs-of-dover',
  'for-those-about-to-rock',
  'sittin-on-the-dock-of-the-bay',
  'blowin-in-the-wind',
  'blitzkrieg-bop',
  'wild-thing',
  'hit-me-with-your-best-shot'
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
    console.log(`      Current: ${sec.alphaTab}`);
  });
}

