import fs from 'fs';
import path from 'path';

const slugs = [
  'pride-and-joy',
  'comfortably-numb',
  'another-brick-in-the-wall',
  'all-along-the-watchtower',
  'black-hole-sun',
  'seven-nation-army',
  'we-will-rock-you',
  'oye-como-va',
  'twist-and-shout',
  'the-final-countdown',
  'rock-and-roll-all-nite',
  'were-not-gonna-take-it'
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

