import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));
const map = new Map<string, any[]>();

for (const file of allFiles) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  data.sections?.forEach((sec: any, idx: number) => {
    const label = sec.exerciseLabel || '';
    const tab = sec.alphaTab || '';
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(label)
      || /\\ts\s+6\s+4/i.test(tab)
      || tab.includes('(2.6 4.5 4.4 3.3 2.2 2.1)')
      || /fingerstyle chord progression|chorus chord resolution|dynamic verse progression/i.test(label);
    if (isGeneric) {
      if (!map.has(slug)) map.set(slug, []);
      map.get(slug)!.push({ idx, name: sec.name, label, chords: sec.chords });
    }
  });
}

console.log(`Total songs with remaining generic sections: ${map.size}`);
for (const [slug, list] of map.entries()) {
  console.log(`${slug} (${list.length} sections): ${list.map(x => `[${x.idx}] ${x.name} -> "${x.label}"`).join('; ')}`);
}

