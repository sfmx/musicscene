import fs from 'fs';
import path from 'path';

const slugs = [
  'livin-on-a-prayer',
  'you-give-love-a-bad-name',
  'more-than-a-feeling',
  'rock-you-like-a-hurricane',
  'tom-sawyer',
  'knockin-on-heavens-door',
  'landslide',
  'la-bamba',
  'hound-dog',
  'ring-of-fire',
  'stand-by-me',
  'i-love-rock-n-roll'
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

