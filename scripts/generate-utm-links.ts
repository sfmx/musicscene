/**
 * UTM Campaign Link Generator for MusicScene
 * Generates tracked URLs for Reddit, YouTube, Facebook, and Newsletters
 * Usage: npx tsx scripts/generate-utm-links.ts
 */

const BASE_URL = 'https://musicscene.com.au';

interface CampaignLink {
  channel: string;
  destination: string;
  campaign: string;
  content?: string;
  description: string;
}

const CAMPAIGNS: CampaignLink[] = [
  // REDDIT CAMPAIGNS
  {
    channel: 'reddit',
    destination: '/lessons/practice/fretboard-trainer/',
    campaign: 'note-hunt-launch',
    content: 'r-guitarlessons-post',
    description: 'Reddit Launch Post on r/GuitarLessons (Fretboard Game)',
  },
  {
    channel: 'reddit',
    destination: '/downloads/fretboard-cheat-sheet/',
    campaign: 'cheat-sheet-giveaway',
    content: 'r-guitar-post',
    description: 'Reddit Post on r/guitar (Free 3-Page Vector PDF)',
  },
  {
    channel: 'reddit',
    destination: '/lessons/songs/why-songs-work/',
    campaign: 'harmonic-secrets-breakdown',
    content: 'r-musictheory-post',
    description: 'Reddit Post on r/musictheory (Harmonic Secrets Analysis)',
  },
  {
    channel: 'reddit',
    destination: '/lessons/songs/song-analysis/hotel-california/',
    campaign: 'song-spotlight',
    content: 'r-classicrock-hotel-california',
    description: 'Reddit Post on r/classicrock (Hotel California Solo & Cadence)',
  },

  // YOUTUBE CAMPAIGNS
  {
    channel: 'youtube',
    destination: '/lessons/practice/fretboard-trainer/',
    campaign: 'shorts-fretboard-speed',
    content: 'description-link',
    description: 'YouTube Short: "Stop Memorizing 50 Scale Boxes"',
  },
  {
    channel: 'youtube',
    destination: '/lessons/songs/song-analysis/hotel-california/',
    campaign: 'shorts-hotel-california-theory',
    content: 'pinned-comment',
    description: 'YouTube Short: "The Secret Chord in Hotel California"',
  },
  {
    channel: 'youtube',
    destination: '/lessons/practice/circle-of-fifths/',
    campaign: 'shorts-circle-of-fifths-hack',
    content: 'pinned-comment',
    description: 'YouTube Short: "How the Circle of Fifths Works in 30 Seconds"',
  },

  // FACEBOOK PAGE CAMPAIGNS (100% Friend Isolated)
  {
    channel: 'facebook',
    destination: '/lessons/practice/fretboard-trainer/',
    campaign: 'page-post-tools',
    content: 'organic-feed',
    description: 'Facebook Page Post (Note Hunt Game)',
  },
  {
    channel: 'facebook',
    destination: '/downloads/fretboard-cheat-sheet/',
    campaign: 'group-share-cheat-sheet',
    content: 'guitar-groups',
    description: 'Facebook Group Share as Page (Free Cheat Sheet PDF)',
  },
];

function buildUtmUrl(item: CampaignLink): string {
  const url = new URL(item.destination, BASE_URL);
  url.searchParams.set('utm_source', item.channel);
  url.searchParams.set('utm_medium', item.channel === 'youtube' ? 'social-video' : 'community');
  url.searchParams.set('utm_campaign', item.campaign);
  if (item.content) {
    url.searchParams.set('utm_content', item.content);
  }
  return url.toString();
}

console.log('='.repeat(70));
console.log('  MusicScene Distribution & UTM Tracking Link Directory');
console.log('='.repeat(70));

const grouped = CAMPAIGNS.reduce((acc, c) => {
  acc[c.channel] = acc[c.channel] || [];
  acc[c.channel].push(c);
  return acc;
}, {} as Record<string, CampaignLink[]>);

for (const [channel, list] of Object.entries(grouped)) {
  console.log(`\n📢 CHANNEL: ${channel.toUpperCase()}`);
  console.log('-'.repeat(50));
  for (const item of list) {
    console.log(`• ${item.description}:`);
    console.log(`  ${buildUtmUrl(item)}\n`);
  }
}

console.log('='.repeat(70));
console.log('All visits through these URLs will log specifically in Google Analytics 4!');
console.log('='.repeat(70));

