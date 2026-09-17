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

const songsDir = path.resolve(__dirname, '../src/data/songs');
const files = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Auditing tuning and tempo across ${files.length} songs...\n`);

const tuningMap = new Map<string, string[]>();
const tempoList: Array<{ file: string; title: string; artist: string; tempo: string; tuning: string }> = [];
const nonStandardTuningSongs: Array<{ file: string; title: string; artist: string; tuning: string }> = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(songsDir, file), 'utf-8');
  const data: SongData = JSON.parse(content);
  const info = data.songInfo;

  const tuning = info.tuning || 'MISSING';
  const tempo = info.tempo || 'MISSING';

  if (!tuningMap.has(tuning)) {
    tuningMap.set(tuning, []);
  }
  tuningMap.get(tuning)!.push(`${info.title} - ${info.artist} (${file})`);

  if (!tuning.toLowerCase().includes('standard') || tuning.toLowerCase().includes('drop') || tuning.toLowerCase().includes('half') || tuning.toLowerCase().includes('eb')) {
    nonStandardTuningSongs.push({
      file,
      title: info.title,
      artist: info.artist,
      tuning
    });
  }

  tempoList.push({
    file,
    title: info.title,
    artist: info.artist,
    tempo,
    tuning
  });
}

console.log('=== TUNING DISTRIBUTION ===');
for (const [tuning, songList] of tuningMap.entries()) {
  console.log(`\n"${tuning}": ${songList.length} songs`);
  if (songList.length <= 10) {
    for (const s of songList) {
      console.log(`  - ${s}`);
    }
  }
}

console.log('\n=== TEMPO ANOMALIES (missing or non-number) ===');
let tempoAnomalies = 0;
for (const t of tempoList) {
  const num = parseInt(t.tempo, 10);
  if (isNaN(num) || num < 40 || num > 300) {
    console.log(`Anomaly in ${t.file}: tempo="${t.tempo}" (${t.title} - ${t.artist})`);
    tempoAnomalies++;
  }
}
if (tempoAnomalies === 0) {
  console.log('All 107 songs have valid numeric tempos (between 40 and 300 BPM).');
}

