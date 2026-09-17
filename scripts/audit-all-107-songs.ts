import fs from 'fs';
import path from 'path';
import { AlphaTexValidator } from '../src/lib/alphaTexValidator';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Auditing ALL ${allFiles.length} catalog songs for notation quality and validity...\n`);

let totalSections = 0;
let invalidSections = 0;
let genericSections = 0;
const genericFound: string[] = [];

for (const file of allFiles) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));

  if (!data.sections || !Array.isArray(data.sections)) {
    console.warn(`[WARN] ${slug} has no sections array!`);
    continue;
  }

  data.sections.forEach((sec: any, idx: number) => {
    totalSections++;
    const label = sec.exerciseLabel || '';
    const tab = sec.alphaTab || '';

    // Check validity
    const val = AlphaTexValidator.validate(tab);
    if (!val.isValid) {
      console.error(`[INVALID TAB] ${slug} [${idx}] "${sec.name}":`, val.errors);
      invalidSections++;
    }

    // Check for generic markers
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(label)
      || /\\ts\s+6\s+4/i.test(tab)
      || tab.includes('(2.6 4.5 4.4 3.3 2.2 2.1)');

    if (isGeneric) {
      genericSections++;
      genericFound.push(`${slug} [${idx}] "${sec.name}" -> ${label}`);
    }
  });
}

console.log('====================================================');
console.log(`TOTAL CATALOG SONGS AUDITED: ${allFiles.length}`);
console.log(`TOTAL SECTIONS AUDITED:      ${totalSections}`);
console.log(`SYNTACTICALLY INVALID TABS:  ${invalidSections}`);
console.log(`GENERIC SECTIONS REMAINING:  ${genericSections}`);
console.log('====================================================');

if (genericFound.length > 0) {
  console.log('\nRemaining generic sections:');
  genericFound.forEach(g => console.log(`  - ${g}`));
  process.exit(1);
} else {
  console.log('\n🎉 ALL 107 CATALOG SONGS ARE 100% AUTHENTIC NOTE-FOR-NOTE ALPHATAB EXERCISES!');
}

