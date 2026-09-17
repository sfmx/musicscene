import * as fs from 'fs';
import * as path from 'path';

const dir = path.resolve(__dirname, '../src/data/songs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

console.log(`Analyzing tuning notes and text across ${files.length} songs...\n`);

const results: any[] = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const data = JSON.parse(content);
  const info = data.songInfo;
  const fullText = content.toLowerCase();

  const tuningKeywords = ['tuning', 'half-step', 'half step', 'drop d', 'drop-d', 'eb', 'd standard', 'open d', 'open g', 'dadgad', 'capo'];
  const mentions: string[] = [];

  for (const kw of tuningKeywords) {
    if (fullText.includes(kw)) {
      mentions.push(kw);
    }
  }

  // Check for tuning string format
  const currentTuning = info.tuning || '';
  const currentTempo = info.tempo || '';

  results.push({
    file,
    title: info.title,
    artist: info.artist,
    key: info.key,
    tuning: currentTuning,
    tempo: currentTempo,
    mentions
  });
}

// Let's filter to songs where tuning is not plain standard or where mentions suggest alternate tunings
const interesting = results.filter(r => {
  const t = r.tuning.toLowerCase();
  const isPlainStandard = t === 'standard (eadgbe)' || t === 'standard (e-a-d-g-b-e)';
  const hasAltMentions = r.mentions.some((m: string) => ['half-step', 'half step', 'drop d', 'drop-d', 'd standard', 'open d', 'open g', 'dadgad', 'capo'].includes(m));
  return !isPlainStandard || hasAltMentions;
});

console.log(`Found ${interesting.length} songs with alternate tunings or tuning mentions in text:\n`);
interesting.forEach(r => {
  console.log(`- ${r.file}: "${r.title}" by ${r.artist}`);
  console.log(`  Current Tuning: ${r.tuning} | Tempo: ${r.tempo} | Key: ${r.key}`);
  console.log(`  Mentions in JSON: ${r.mentions.join(', ')}`);
});

