import fs from 'fs';
import path from 'path';

const slugs = [
  'thunderstruck',
  'enter-sandman',
  'highway-to-hell',
  'paranoid',
  'wish-you-were-here',
  'wonderwall',
  'eruption'
];

for (const s of slugs) {
  const file = path.join(process.cwd(), 'src', 'data', 'songs', `${s}.json`);
  if (!fs.existsSync(file)) {
    console.log(`Missing file: ${s}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`\n=== ${data.title} (${s}) ===`);
  data.sections?.forEach((sec: any, idx: number) => {
    console.log(`  [${idx}] ${sec.title} (${sec.exerciseLabel || 'no label'}):`);
    console.log(`      AlphaTex: ${sec.alphaTab}`);
  });
}

