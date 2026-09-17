import fs from 'fs';
import path from 'path';

const slugs = [
  'wanted-dead-or-alive',
  'everlong',
  'good-riddance',
  'message-in-a-bottle',
  'folsom-prison-blues',
  'free-fallin',
  'you-really-got-me',
  'zombie',
  'roundabout',
  'born-to-be-wild',
  'dont-stop-believin',
  'bad-moon-rising'
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

