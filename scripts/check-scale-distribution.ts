import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

const counts: Record<number, number> = {};
const singleScaleSongs: Array<{ slug: string; title: string; scale: string; key: string }> = [];

for (const file of allFiles) {
  const slug = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const scales = data.musicalAnalysis?.keyAndScale?.scalesUsed || [];
  const count = scales.length;
  counts[count] = (counts[count] || 0) + 1;

  if (count <= 1) {
    singleScaleSongs.push({
      slug,
      title: data.songInfo?.title || slug,
      scale: scales[0]?.scale || 'NONE',
      key: data.musicalAnalysis?.keyAndScale?.primaryKey || 'UNKNOWN'
    });
  }
}

console.log('Scale count distribution across 107 songs:');
console.log(counts);

console.log(`\nSongs with <= 1 scale (${singleScaleSongs.length}):`);
singleScaleSongs.forEach(s => console.log(`  - ${s.title} (${s.slug}): Key: ${s.key}, Scale: ${s.scale}`));

