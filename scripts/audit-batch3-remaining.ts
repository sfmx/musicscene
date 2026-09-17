import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'data', 'songs');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

// Completed in Batch 1 (23 songs) and Batch 2 (15 songs)
const completedSlugs = new Set([
  // Batch 1 (23)
  'sweet-child-o-mine', 'crazy-train', 'come-as-you-are', 'back-in-black',
  'smells-like-teen-spirit', 'master-of-puppets', 'purple-haze', 'whole-lotta-love',
  'hotel-california', 'sunshine-of-your-love', 'barracuda', 'eye-of-the-tiger',
  'superstition', 'welcome-to-the-jungle', 'brothers-in-arms', 'schism',
  'devil-went-down-to-georgia', 'brown-eyed-girl', 'dreams', 'here-i-go-again',
  'should-i-stay-or-should-i-go', 'louie-louie', 'rebel-yell',
  // Batch 2 (15)
  'thunderstruck', 'enter-sandman', 'highway-to-hell', 'paranoid',
  'wish-you-were-here', 'wonderwall', 'eruption', 'sultans-of-swing',
  'stairway-to-heaven', 'smoke-on-the-water', 'iron-man', 'layla',
  'sweet-home-alabama', 'johnny-b-goode', 'paint-it-black',
  // Batch 3A (12)
  'wanted-dead-or-alive', 'everlong', 'good-riddance', 'message-in-a-bottle',
  'folsom-prison-blues', 'free-fallin', 'you-really-got-me', 'zombie',
  'roundabout', 'born-to-be-wild', 'dont-stop-believin', 'bad-moon-rising',
  // Batch 3B (12)
  'livin-on-a-prayer', 'you-give-love-a-bad-name', 'more-than-a-feeling',
  'rock-you-like-a-hurricane', 'tom-sawyer', 'knockin-on-heavens-door',
  'landslide', 'la-bamba', 'hound-dog', 'ring-of-fire', 'stand-by-me',
  'i-love-rock-n-roll',
  // Batch 3C (12)
  'under-the-bridge', 'you-shook-me-all-night-long', 'blackbird', 'crossroads',
  'norwegian-wood', 'cliffs-of-dover', 'for-those-about-to-rock',
  'sittin-on-the-dock-of-the-bay', 'blowin-in-the-wind', 'blitzkrieg-bop',
  'wild-thing', 'hit-me-with-your-best-shot',
  // Batch 3D (12)
  'pride-and-joy', 'comfortably-numb', 'another-brick-in-the-wall',
  'all-along-the-watchtower', 'black-hole-sun', 'seven-nation-army',
  'we-will-rock-you', 'oye-como-va', 'twist-and-shout',
  'the-final-countdown', 'rock-and-roll-all-nite', 'were-not-gonna-take-it'
]);

console.log(`Total catalog songs: ${allFiles.length}`);
console.log(`Completed in Batches 1 & 2: ${completedSlugs.size}`);
const remaining = allFiles.map(f => f.replace('.json', '')).filter(s => !completedSlugs.has(s));
console.log(`Remaining songs to audit in Batch 3: ${remaining.length}\n`);

const genericList: Array<{ slug: string; title: string; genre: string; genericCount: number; sections: any[] }> = [];

for (const slug of remaining) {
  const file = path.join(dir, `${slug}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const title = data.songInfo?.title || data.title || slug;
  const genre = data.songInfo?.genre || 'Unknown';

  const genericSections: any[] = [];
  data.sections?.forEach((sec: any, idx: number) => {
    const label = sec.exerciseLabel || '';
    const tab = sec.alphaTab || '';
    const isGeneric = /scale exercise|chord voicing exercise|scale practice|movement exercise/i.test(label)
      || /\\ts\s+6\s+4/i.test(tab)
      || tab.includes('(2.6 4.5 4.4 3.3 2.2 2.1)');

    if (isGeneric) {
      genericSections.push({ idx, name: sec.name || sec.title || `Section ${idx}`, label, tab: tab.slice(0, 50) });
    }
  });

  genericList.push({
    slug,
    title,
    genre,
    genericCount: genericSections.length,
    sections: genericSections
  });
}

// Sort by number of generic sections descending
genericList.sort((a, b) => b.genericCount - a.genericCount);

console.log(`Songs with generic sections in Batch 3: ${genericList.filter(x => x.genericCount > 0).length}`);
console.log(`Songs already authentic in Batch 3: ${genericList.filter(x => x.genericCount === 0).length}\n`);

console.log('=== TOP REMAINING SONGS NEEDING UPGRADE ===');
for (const item of genericList.slice(0, 30)) {
  console.log(`${item.title} (${item.slug}) [${item.genre}] - ${item.genericCount} generic sections:`);
  for (const s of item.sections) {
    console.log(`    [${s.idx}] ${s.name}: ${s.label}`);
  }
}
