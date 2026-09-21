import fs from 'fs';
import path from 'path';

const chunksDir = path.join(process.cwd(), '.next', 'static', 'chunks');

function analyzeDir(dir: string): { name: string; sizeKb: number; path: string }[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results: { name: string; sizeKb: number; path: string }[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(analyzeDir(full));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const stats = fs.statSync(full);
      results.push({
        name: entry.name,
        sizeKb: Math.round((stats.size / 1024) * 10) / 10,
        path: path.relative(process.cwd(), full).replace(/\\/g, '/')
      });
    }
  }
  return results;
}

const chunks = analyzeDir(chunksDir);
chunks.sort((a, b) => b.sizeKb - a.sizeKb);

console.log('\n=== TOP 25 LARGEST CLIENT JS CHUNKS ===');
chunks.slice(0, 25).forEach((c, i) => {
  console.log(`${(i + 1).toString().padStart(2)}. ${c.name.padEnd(40)} ${c.sizeKb.toString().padStart(8)} KB   (${c.path})`);
});

const totalKb = chunks.reduce((acc, c) => acc + c.sizeKb, 0);
console.log(`\nTotal JS chunks size: ${Math.round(totalKb * 10) / 10} KB (${chunks.length} chunks)\n`);

