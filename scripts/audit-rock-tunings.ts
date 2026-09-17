import * as fs from 'fs';
import * as path from 'path';

interface SongData {
  songInfo: {
    title: string;
    artist: string;
    tuning?: string;
    tempo?: string;
    key?: string;
  };
  sections?: Array<{
    name: string;
    alphaTab?: string;
  }>;
}

const dir = path.resolve(__dirname, '../src/data/songs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Total songs found: ${files.length}\n`);

const rows = files.map(f => {
  const data: SongData = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  return {
    file: f,
    title: data.songInfo.title,
    artist: data.songInfo.artist,
    key: data.songInfo.key || '',
    tuning: data.songInfo.tuning || '',
    tempo: data.songInfo.tempo || ''
  };
});

// Sort by artist
rows.sort((a, b) => a.artist.localeCompare(b.artist));

console.log('File | Artist | Title | Key | Tuning | Tempo');
console.log('---|---|---|---|---|---');
rows.forEach(r => {
  console.log(`${r.file} | ${r.artist} | ${r.title} | ${r.key} | ${r.tuning} | ${r.tempo}`);
});

