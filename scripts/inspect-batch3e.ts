import fs from 'fs';
import path from 'path';

const slugs = [
  'every-rose-has-its-thorn',
  'hurt-so-good',
  'take-me-to-church',
  'photograph',
  'pour-some-sugar-on-me',
  'riptide',
  'all-blues',
  'mammas-dont-let-your-babies',
  'whats-going-on',
  'classical-gas',
  'horse-with-no-name',
  'radioactive',
  'torn',
  'wagon-wheel',
  'what-i-got',
  'no-secrets',
  'europa',
  'gloria',
  'dust-my-broom',
  'satisfaction',
  'summer-of-69',
  'the-thrill-is-gone',
  'who-made-who'
];

const dir = path.join(process.cwd(), 'src', 'data', 'songs');

for (const slug of slugs) {
  const file = path.join(dir, `${slug}.json`);
  if (!fs.existsSync(file)) {
    console.log(`MISSING: ${slug}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`\n========================================`);
  console.log(`${data.songInfo?.title || slug} (${slug}) - Key: ${data.songInfo?.key}, Tuning: ${data.songInfo?.tuning}, Tempo: ${data.songInfo?.tempo}`);
  console.log(`========================================`);
  data.sections?.forEach((sec: any, idx: number) => {
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(sec.exerciseLabel || '')
      || /\\ts\s+6\s+4/i.test(sec.alphaTab || '')
      || (sec.alphaTab || '').includes('(2.6 4.5 4.4 3.3 2.2 2.1)');
    console.log(`  [${idx}] ${sec.name} (Generic: ${isGeneric})`);
    console.log(`      Label: ${sec.exerciseLabel}`);
    console.log(`      Chords: ${sec.chords}`);
    console.log(`      Technique: ${sec.technique}`);
    console.log(`      Current Tab: ${sec.alphaTab}`);
  });
}

