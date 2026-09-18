import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface SongJson {
  songInfo: {
    title: string;
    artist: string;
    album?: string;
    released?: string;
    genre?: string;
    tempo?: string;
    duration?: string;
    key?: string;
    tuning?: string;
  };
  difficulty?: {
    overall?: string;
  };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getDifficultyColors(diff?: string): { text: string; bg: string; border: string } {
  const d = (diff || '').toLowerCase();
  if (d.includes('beg') || d.includes('easy')) {
    return { text: '#34d399', bg: '#064e3b', border: '#059669' };
  }
  if (d.includes('adv')) {
    return { text: '#c084fc', bg: '#581c87', border: '#7e22ce' };
  }
  return { text: '#fbbf24', bg: '#78350f', border: '#d97706' };
}

function cleanTuningLabel(tuning?: string): string {
  if (!tuning) return 'Standard';
  if (tuning.toLowerCase().includes('half-step') || tuning.toLowerCase().includes('eb')) {
    return 'Eb Standard';
  }
  if (tuning.toLowerCase().includes('drop d')) {
    return 'Drop D';
  }
  if (tuning.toLowerCase().includes('open g')) {
    return 'Open G';
  }
  if (tuning.toLowerCase().includes('open d')) {
    return 'Open D';
  }
  if (tuning.toLowerCase().includes('standard')) {
    return 'Standard EADGBE';
  }
  return tuning.split('(')[0].trim();
}

function generateSongSvg(song: SongJson): string {
  const rawGenre = song.songInfo.genre || 'Guitar Classic';
  const rawDifficulty = song.difficulty?.overall || 'Intermediate';

  const title = escapeXml(song.songInfo.title);
  const artist = escapeXml(song.songInfo.artist);
  const genreUpper = escapeXml(rawGenre.toUpperCase());
  const diffUpper = escapeXml(rawDifficulty.toUpperCase());
  const key = escapeXml(song.songInfo.key || 'Standard Key');
  const tempo = escapeXml(song.songInfo.tempo || 'Tempo Varies');
  const tuning = escapeXml(cleanTuningLabel(song.songInfo.tuning));
  const diffColors = getDifficultyColors(rawDifficulty);

  // Width calculations based on character length
  const genreWidth = rawGenre.length * 10 + 36;
  const diffWidth = rawDifficulty.length * 10 + 36;
  const diffX = 44 + genreWidth + 10;

  // Dynamic font size for very long titles
  const titleFontSize = title.length > 28 ? 44 : title.length > 20 ? 50 : 58;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19" />
      <stop offset="45%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>

    <!-- Accent Glow -->
    <radialGradient id="cyanGlow" cx="15%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="purpleGlow" cx="85%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
    </radialGradient>

    <!-- Card Background -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9" />
    </linearGradient>

    <!-- Brand Line Gradient -->
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#cyanGlow)" />
  <rect width="1200" height="630" fill="url(#purpleGlow)" />

  <!-- Fretboard Grid Graphic Accents (Watermark) -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="1.5">
    <line x1="80" y1="460" x2="1120" y2="460" />
    <line x1="80" y1="480" x2="1120" y2="480" />
    <line x1="80" y1="500" x2="1120" y2="500" />
    <line x1="80" y1="520" x2="1120" y2="520" />
    <line x1="80" y1="540" x2="1120" y2="540" />
    <line x1="80" y1="560" x2="1120" y2="560" />
    <line x1="200" y1="450" x2="200" y2="570" stroke-width="2" />
    <line x1="360" y1="450" x2="360" y2="570" stroke-width="2" />
    <line x1="520" y1="450" x2="520" y2="570" stroke-width="2" />
    <line x1="680" y1="450" x2="680" y2="570" stroke-width="2" />
    <line x1="840" y1="450" x2="840" y2="570" stroke-width="2" />
    <line x1="1000" y1="450" x2="1000" y2="570" stroke-width="2" />
  </g>

  <!-- Top Decorative Border Bar -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#brandGrad)" />

  <!-- Header Branding Section -->
  <g transform="translate(80, 70)">
    <!-- Logo Icon -->
    <rect x="0" y="0" width="46" height="46" rx="12" fill="#0284c7" />
    <path d="M 23 11 L 34 23 L 23 35 L 12 23 Z" fill="#ffffff" opacity="0.9" />
    <circle cx="23" cy="23" r="4" fill="#0284c7" />

    <!-- Site Title -->
    <text x="60" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="-0.5">MusicScene</text>
    <text x="218" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" fill="#38bdf8">.com.au</text>

    <!-- Header Badge -->
    <rect x="730" y="4" width="310" height="34" rx="17" fill="#1e293b" stroke="#334155" stroke-width="1" />
    <text x="885" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle" letter-spacing="1">NOTE-FOR-NOTE SONG ANALYSIS</text>
  </g>

  <!-- Main Hero Card -->
  <g transform="translate(80, 150)">
    <!-- Main Card Body -->
    <rect x="0" y="0" width="1040" height="390" rx="24" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />

    <!-- Genre Pill -->
    <rect x="44" y="40" width="${genreWidth}" height="28" rx="14" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1" />
    <text x="${44 + genreWidth / 2}" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">${genreUpper}</text>

    <!-- Difficulty Pill -->
    <rect x="${diffX}" y="40" width="${diffWidth}" height="28" rx="14" fill="${diffColors.bg}" stroke="${diffColors.border}" stroke-width="1" />
    <text x="${diffX + diffWidth / 2}" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="${diffColors.text}" text-anchor="middle" letter-spacing="0.5">${diffUpper}</text>

    <!-- Song Title -->
    <text x="44" y="140" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${titleFontSize}" font-weight="900" fill="#ffffff" letter-spacing="-1">${title}</text>

    <!-- Artist -->
    <text x="44" y="195" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="600" fill="#94a3b8">by <tspan fill="#f1f5f9" font-weight="700">${artist}</tspan></text>

    <!-- Feature Attribute Cards -->
    <g transform="translate(44, 235)">
      <!-- Key Badge -->
      <rect x="0" y="0" width="220" height="74" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
      <text x="18" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#64748b" letter-spacing="1">KEY &amp; TONALITY</text>
      <text x="18" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800" fill="#38bdf8">${key}</text>

      <!-- Tempo Badge -->
      <rect x="240" y="0" width="220" height="74" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
      <text x="258" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#64748b" letter-spacing="1">RECORDED TEMPO</text>
      <text x="258" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800" fill="#fbbf24">${tempo}</text>

      <!-- Tuning Badge -->
      <rect x="480" y="0" width="230" height="74" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
      <text x="498" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#64748b" letter-spacing="1">GUITAR TUNING</text>
      <text x="498" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800" fill="#c084fc">${tuning}</text>

      <!-- Breakdown Badge -->
      <rect x="730" y="0" width="220" height="74" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
      <text x="748" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#64748b" letter-spacing="1">TAB &amp; AUDIO</text>
      <text x="748" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="800" fill="#34d399">100% Note-for-Note</text>
    </g>

    <!-- Card Footer -->
    <g transform="translate(44, 345)">
      <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#64748b">Interactive AlphaTab Player • Full Song Structure Breakdown • Amp &amp; Pedal Rig Settings</text>
      <text x="950" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="end">Learn Song →</text>
    </g>
  </g>

  <!-- Bottom Accent Line -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#brandGrad)" />
</svg>`;
}

async function main() {
  const songsDir = path.join(process.cwd(), 'src', 'data', 'songs');
  const outputDir = path.join(process.cwd(), 'public', 'images', 'og', 'songs');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(songsDir).filter((f) => f.endsWith('.json'));
  console.log(`Generating Open Graph social cards for ${files.length} songs...`);

  let count = 0;
  for (const file of files) {
    const slug = path.basename(file, '.json');
    const filePath = path.join(songsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const song: SongJson = JSON.parse(content);

    const svg = generateSongSvg(song);
    const outputPath = path.join(outputDir, `${slug}.png`);

    await sharp(Buffer.from(svg))
      .png({ compressionLevel: 8, quality: 90 })
      .toFile(outputPath);

    count++;
  }

  console.log(`Successfully generated ${count} Open Graph cards in ${outputDir}!`);
}

main().catch((err) => {
  console.error('Error generating Open Graph images:', err);
  process.exit(1);
});
