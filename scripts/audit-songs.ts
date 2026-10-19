import fs from 'fs';
import path from 'path';

interface SongSection {
  name: string;
  timeStamp?: string;
  technique?: string;
  description?: string;
  alphaTab?: string;
  exerciseLabel?: string;
}

interface SongData {
  songInfo?: {
    title?: string;
    artist?: string;
  };
  techniques?: unknown[];
  sections?: SongSection[];
}

const songsDir = path.join(process.cwd(), 'src/data/songs');
const files = fs.readdirSync(songsDir).filter(f => f.endsWith('.json'));

console.log(`Total song JSON files found: ${files.length}\n`);

const sectionCountDist: Record<number, number> = {};
const songsUnder4Sections: Array<{ file: string; title: string; artist: string; count: number }> = [];
const songsMissingSolo: Array<{ file: string; title: string; count: number }> = [];
const songsMissingAlphaTab: Array<{ file: string; title: string; missingCount: number }> = [];
const songsMissingExerciseLabel: Array<{ file: string; title: string; missingCount: number }> = [];
const songsWithSingleTechnique: Array<{ file: string; title: string; techniqueCount: number }> = [];

for (const file of files) {
  const content: SongData = JSON.parse(fs.readFileSync(path.join(songsDir, file), 'utf8'));
  const sections = content.sections || [];
  const title = content.songInfo?.title || file;
  const artist = content.songInfo?.artist || 'Unknown';
  const count = sections.length;

  sectionCountDist[count] = (sectionCountDist[count] || 0) + 1;

  if (count < 4) {
    songsUnder4Sections.push({ file, title, artist, count });
  }

  const hasSoloOrLead = sections.some(s => 
    /solo|lead|lick|break|outro jam|fanfare/i.test(s.name) || 
    /solo|lead|improvisation/i.test(s.description || '')
  );

  if (!hasSoloOrLead) {
    songsMissingSolo.push({ file, title, count });
  }

  const missingTabs = sections.filter(s => !s.alphaTab || s.alphaTab.trim().length === 0);
  if (missingTabs.length > 0) {
    songsMissingAlphaTab.push({ file, title, missingCount: missingTabs.length });
  }

  const missingLabels = sections.filter(s => !s.exerciseLabel || s.exerciseLabel.trim().length === 0);
  if (missingLabels.length > 0) {
    songsMissingExerciseLabel.push({ file, title, missingCount: missingLabels.length });
  }

  const techCount = (content.techniques || []).length;
  if (techCount < 2) {
    songsWithSingleTechnique.push({ file, title, techniqueCount: techCount });
  }
}

console.log('--- SECTION COUNT DISTRIBUTION ---');
const sortedCounts = Object.keys(sectionCountDist).map(Number).sort((a, b) => a - b);
for (const count of sortedCounts) {
  console.log(`  ${count} sections: ${sectionCountDist[count]} songs`);
}

console.log(`\nSongs with fewer than 4 sections (${songsUnder4Sections.length}):`);
songsUnder4Sections.forEach(s => console.log(`  - ${s.file} (${s.count} sections): "${s.title}" by ${s.artist}`));

console.log(`\nSongs missing AlphaTab in any section: ${songsMissingAlphaTab.length}`);
songsMissingAlphaTab.forEach(s => console.log(`  - ${s.file} (${s.missingCount} sections without tab)`));

console.log(`\nSongs missing exerciseLabel in any section: ${songsMissingExerciseLabel.length}`);
songsMissingExerciseLabel.forEach(s => console.log(`  - ${s.file} (${s.missingCount} sections without label)`));

console.log(`\nSongs with fewer than 2 techniques: ${songsWithSingleTechnique.length}`);

console.log(`\nSongs without identified solo/lead/break section: ${songsMissingSolo.length}`);
