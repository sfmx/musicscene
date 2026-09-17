import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const syntheticRegex = /\d+\.6\s+\d+\.6\s+\d+\.6\s+\d+\.6\s+\|\s+\d+\.5\s+\d+\.5/;

let count = 0;
const results: Array<{ song: string; idx: number; title: string; tab: string }> = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  data.sections?.forEach((sec: any, idx: number) => {
    if (syntheticRegex.test(sec.alphaTab || '')) {
      count++;
      results.push({ song: f.replace('.json', ''), idx, title: sec.title, tab: sec.alphaTab });
    }
  });
}

console.log('Found synthetic sections:', count);
for (const r of results) {
  console.log(`- ${r.song} [${r.idx}] (${r.title})`);
}

