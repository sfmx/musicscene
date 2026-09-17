import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

interface GenericFound {
  slug: string;
  title: string;
  sectionIndex: number;
  sectionName: string;
  label: string;
  alphaTab: string;
}

const found: GenericFound[] = [];

for (const f of files) {
  const slug = f.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const title = data.songInfo?.title || data.title || slug;

  data.sections?.forEach((sec: any, idx: number) => {
    const label = sec.exerciseLabel || '';
    const tab = sec.alphaTab || '';
    const name = sec.name || sec.title || `Section ${idx}`;

    // Flag generic labels or repetitive block chord patterns or generic 6/4 scales
    const isGenericScale = /Pentatonic Scale Exercise|Major Scale Exercise|Minor Scale Exercise/i.test(label) || /\\ts\s+6\s+4/i.test(tab);
    const isRepetitiveChord = /Chord Voicing Exercise|Power Chord Movement Exercise/i.test(label) && tab.includes('(2.6 4.5 4.4');

    if (isGenericScale || isRepetitiveChord) {
      found.push({
        slug,
        title,
        sectionIndex: idx,
        sectionName: name,
        label,
        alphaTab: tab.slice(0, 60) + '...'
      });
    }
  });
}

console.log(`Found ${found.length} generic/synthetic sections across ${new Set(found.map(x => x.slug)).size} songs.`);
const grouped: { [slug: string]: GenericFound[] } = {};
for (const item of found) {
  grouped[item.slug] = grouped[item.slug] || [];
  grouped[item.slug].push(item);
}

for (const [slug, items] of Object.entries(grouped)) {
  console.log(`\n${items[0].title} (${slug}) - ${items.length} sections:`);
  for (const it of items) {
    console.log(`  [${it.sectionIndex}] ${it.sectionName} | ${it.label}`);
  }
}

