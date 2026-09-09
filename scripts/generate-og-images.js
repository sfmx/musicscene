/**
 * Generate high-contrast, professional 1200x630 Open Graph PNG images
 * for MusicScene categories and social sharing.
 *
 * Run: node scripts/generate-og-images.js
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

const CARDS = [
  {
    filename: 'og-default.png',
    badge: 'GUITAR EDUCATION PLATFORM',
    badgeColor: '#f59e0b',
    title: 'MusicScene',
    subtitle: 'Master Guitar with Expert Theory, Songs & Interactive Practice Tools',
    tags: ['🎸 107 Song Analyses', '🎼 Scale & Modal Roadmaps', '🔊 4-Sound Jam Player', '🎯 Fretboard Trainer'],
    accentColor: '#3b82f6',
    bgGradient: 'radial-gradient(circle at 80% 20%, #1e1b4b 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'fretboard',
  },
  {
    filename: 'og-song-analysis.png',
    badge: 'HARMONIC CURIOSITY & SONGWRITING SECRETS',
    badgeColor: '#fbbf24',
    title: 'Why Famous Songs Work',
    subtitle: 'Complete Guitar Song Analyses, Roman Numeral Breakdowns & Tab Exercises',
    tags: ['Hotel California', "Sweet Child O' Mine", 'Comfortably Numb', 'Black Hole Sun', 'Under the Bridge'],
    accentColor: '#f59e0b',
    bgGradient: 'radial-gradient(circle at 80% 20%, #31135e 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'waveform',
  },
  {
    filename: 'og-scales.png',
    badge: 'FRETBOARD MASTERY',
    badgeColor: '#60a5fa',
    title: 'Guitar Scale Guide',
    subtitle: 'Master Pentatonics, Blues, Natural Minor, Harmonic Minor & Modal Shapes',
    tags: ['5 Box Positions', 'Interactive Audio Soundfonts', 'Interval Formulas', 'Backing Progressions'],
    accentColor: '#3b82f6',
    bgGradient: 'radial-gradient(circle at 80% 20%, #1e3a8a 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'fretboard',
  },
  {
    filename: 'og-modes.png',
    badge: 'MODAL HARMONY & MOODS',
    badgeColor: '#c084fc',
    title: 'The 7 Guitar Modes',
    subtitle: 'Unlock Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian & Locrian',
    tags: ['Characteristic Notes', 'Parent Scale Formulas', 'Modal Chord Vamps', 'Famous Solo Examples'],
    accentColor: '#a855f7',
    bgGradient: 'radial-gradient(circle at 80% 20%, #4c1d95 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'modes',
  },
  {
    filename: 'og-chords.png',
    badge: 'CHORD DICTIONARY & HARMONY',
    badgeColor: '#34d399',
    title: 'Guitar Chord Mastery',
    subtitle: 'Comprehensive Voicings, Slash Chords, Suspensions & Extended Harmony',
    tags: ['CAGED Shapes', 'Triads & Inversions', 'Voice Leading Rules', 'Movable Barre Grips'],
    accentColor: '#10b981',
    bgGradient: 'radial-gradient(circle at 80% 20%, #064e3b 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'chords',
  },
  {
    filename: 'og-tools.png',
    badge: 'INTERACTIVE PRACTICE SUITE',
    badgeColor: '#f43f5e',
    title: 'Interactive Practice Tools',
    subtitle: 'Fretboard Note Trainer & Progression Jam Player with 4 Soundfont Instruments',
    tags: ['Acoustic Steel & Nylon', 'Clean Electric & Piano', 'Real-time Audio Engine', 'Note Accuracy Quizzes'],
    accentColor: '#ef4444',
    bgGradient: 'radial-gradient(circle at 80% 20%, #881337 0%, #0f172a 60%, #020617 100%)',
    featureGraphic: 'player',
  },
];

function generateHtml(card) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      background: ${card.bgGradient};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 70px 80px;
      position: relative;
      overflow: hidden;
    }
    .fretboard-overlay {
      position: absolute;
      right: -80px;
      top: 50%;
      transform: translateY(-50%);
      width: 480px;
      height: 380px;
      opacity: 0.18;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      pointer-events: none;
    }
    .string-line {
      width: 100%;
      height: 2px;
      background: #94a3b8;
      position: relative;
    }
    .fret-marker {
      position: absolute;
      width: 18px;
      height: 18px;
      background: ${card.badgeColor};
      border-radius: 50%;
      box-shadow: 0 0 15px ${card.badgeColor};
      top: -8px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 6px 16px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid ${card.badgeColor}66;
      color: ${card.badgeColor};
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.5px;
      margin-bottom: 24px;
      text-transform: uppercase;
      box-shadow: 0 0 20px ${card.badgeColor}22;
    }
    .title {
      font-size: 58px;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -1px;
      margin-bottom: 18px;
      max-width: 820px;
      background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      font-size: 22px;
      color: #94a3b8;
      line-height: 1.4;
      max-width: 760px;
      margin-bottom: 36px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .tag {
      padding: 8px 18px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      color: #e2e8f0;
      backdrop-filter: blur(8px);
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 24px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-logo {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #ffffff;
    }
    .brand-logo span {
      color: ${card.badgeColor};
    }
    .url {
      font-size: 15px;
      font-family: monospace;
      color: #64748b;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="fretboard-overlay">
    <div class="string-line"><div class="fret-marker" style="left: 20%;"></div></div>
    <div class="string-line"><div class="fret-marker" style="left: 45%;"></div></div>
    <div class="string-line"><div class="fret-marker" style="left: 70%;"></div></div>
    <div class="string-line"><div class="fret-marker" style="left: 35%;"></div></div>
    <div class="string-line"><div class="fret-marker" style="left: 60%;"></div></div>
    <div class="string-line"><div class="fret-marker" style="left: 85%;"></div></div>
  </div>

  <div>
    <div class="badge">${card.badge}</div>
    <h1 class="title">${card.title}</h1>
    <p class="subtitle">${card.subtitle}</p>
    <div class="tags">
      ${card.tags.map(t => `<div class="tag">${t}</div>`).join('')}
    </div>
  </div>

  <div class="footer">
    <div class="brand">
      <div class="brand-logo">Music<span>Scene</span></div>
    </div>
    <div class="url">musicscene.com.au</div>
  </div>
</body>
</html>`;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Launching headless browser for Open Graph generation...');
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  for (const card of CARDS) {
    const html = generateHtml(card);
    await page.setContent(html);
    const dest = path.join(OUTPUT_DIR, card.filename);
    await page.screenshot({ path: dest, type: 'png' });
    const size = fs.statSync(dest).size;
    console.log(`  ✓ Generated ${card.filename} (${Math.round(size / 1024)} KB)`);
  }

  await browser.close();
  console.log('All Open Graph images generated successfully!');
}

main().catch(err => {
  console.error('Failed to generate OG images:', err);
  process.exit(1);
});
