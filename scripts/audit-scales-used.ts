import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Auditing scalesUsed across ALL ${allFiles.length} catalog songs...\n`);

interface Issue {
  slug: string;
  title: string;
  primaryKey: string;
  scalesCount: number;
  problems: string[];
}

const issues: Issue[] = [];
let totalScales = 0;

for (const file of allFiles) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const title = data.songInfo?.title || slug;
  const primaryKey = data.musicalAnalysis?.keyAndScale?.primaryKey || '';
  const scalesUsed = data.musicalAnalysis?.keyAndScale?.scalesUsed;

  const problems: string[] = [];

  if (!data.musicalAnalysis) {
    problems.push('Missing musicalAnalysis object');
  } else if (!data.musicalAnalysis.keyAndScale) {
    problems.push('Missing keyAndScale object');
  } else if (!scalesUsed) {
    problems.push('Missing scalesUsed array');
  } else if (!Array.isArray(scalesUsed) || scalesUsed.length === 0) {
    problems.push('scalesUsed is empty or not an array');
  } else {
    totalScales += scalesUsed.length;
    scalesUsed.forEach((s: any, idx: number) => {
      if (!s.scale || typeof s.scale !== 'string') {
        problems.push(`Scale [${idx}] missing 'scale' name`);
      }
      if (!s.notes || typeof s.notes !== 'string') {
        problems.push(`Scale [${idx}] missing 'notes' string`);
      } else {
        // Verify notes format
        const notesArr = s.notes.split(' - ').map((n: string) => n.trim()).filter(Boolean);
        if (notesArr.length < 5) {
          problems.push(`Scale [${idx}] '${s.scale}' has only ${notesArr.length} notes: "${s.notes}" (expected >= 5)`);
        }
      }
      if (!s.application || typeof s.application !== 'string') {
        problems.push(`Scale [${idx}] missing 'application'`);
      }
    });
  }

  if (problems.length > 0) {
    issues.push({
      slug,
      title,
      primaryKey,
      scalesCount: Array.isArray(scalesUsed) ? scalesUsed.length : 0,
      problems
    });
  }
}

console.log('====================================================');
console.log(`TOTAL SONGS AUDITED:           ${allFiles.length}`);
console.log(`TOTAL SCALES INDEXED:          ${totalScales}`);
console.log(`SONGS WITH ISSUES/GAPS:        ${issues.length}`);
console.log('====================================================\n');

if (issues.length > 0) {
  console.log('Gaps and Issues Found:');
  issues.forEach(iss => {
    console.log(`\n• ${iss.title} (${iss.slug}) - Key: ${iss.primaryKey} [${iss.scalesCount} scales]:`);
    iss.problems.forEach(p => console.log(`    - ${p}`));
  });
} else {
  console.log('🎉 ALL 107 SONGS HAVE VALID, FULLY POPULATED scalesUsed ENTRIES!');
}

