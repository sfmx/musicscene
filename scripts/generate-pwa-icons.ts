import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-resolution SVG for MusicScene App Icon (Guitar Pick with Golden Amber Strings / M emblem)
function getAppIconSvg(size: number, isMaskable: boolean = false): string {
  const padding = isMaskable ? size * 0.15 : size * 0.08;
  const innerSize = size - padding * 2;
  const radius = isMaskable ? 0 : size * 0.22;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#020617" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>

    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${size * 0.03}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#bgGrad)" />

  <!-- Subtle Inner Border -->
  <rect x="${size * 0.02}" y="${size * 0.02}" width="${size * 0.96}" height="${size * 0.96}" rx="${radius}" fill="none" stroke="#334155" stroke-width="${size * 0.01}" opacity="0.6" />

  <!-- Stylized Modern Guitar Pick / Musical M Logo -->
  <g transform="translate(${size / 2}, ${size / 2}) scale(${innerSize / 400})">
    <!-- Glowing Accent Pick Contour -->
    <path d="M 0 -150 C 130 -150 170 -60 140 50 C 110 130 30 180 0 195 C -30 180 -110 130 -140 50 C -170 -60 -130 -150 0 -150 Z" 
          fill="#1e293b" stroke="url(#goldGrad)" stroke-width="12" filter="url(#glow)" opacity="0.9" />

    <!-- 6 Stylized Guitar String Frequencies -->
    <line x1="-70" y1="-90" x2="-70" y2="90" stroke="#475569" stroke-width="4" stroke-linecap="round" opacity="0.5" />
    <line x1="-42" y1="-105" x2="-42" y2="105" stroke="#64748b" stroke-width="4.5" stroke-linecap="round" opacity="0.6" />
    <line x1="-14" y1="-115" x2="-14" y2="115" stroke="#94a3b8" stroke-width="5" stroke-linecap="round" opacity="0.7" />
    <line x1="14" y1="-115" x2="14" y2="115" stroke="#94a3b8" stroke-width="5" stroke-linecap="round" opacity="0.7" />
    <line x1="42" y1="-105" x2="42" y2="105" stroke="#f59e0b" stroke-width="5.5" stroke-linecap="round" opacity="0.9" />
    <line x1="70" y1="-90" x2="70" y2="90" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" opacity="0.9" />

    <!-- Iconic 'M' Monogram (MusicScene) -->
    <path d="M -85 70 L -85 -45 L -30 25 L 0 -10 L 30 25 L 85 -45 L 85 70" 
          fill="none" stroke="url(#goldGrad)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Center Play/Harmonic Node Core -->
    <circle cx="0" cy="80" r="14" fill="url(#cyanGrad)" filter="url(#glow)" />
  </g>
</svg>`;
}

async function generateIcons() {
  const outputDir = path.join(process.cwd(), 'public', 'icons');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const iconConfigs = [
    { name: 'icon-192.png', size: 192, maskable: false },
    { name: 'icon-512.png', size: 512, maskable: false },
    { name: 'icon-maskable-192.png', size: 192, maskable: true },
    { name: 'icon-maskable-512.png', size: 512, maskable: true },
    { name: 'apple-touch-icon.png', size: 180, maskable: false },
  ];

  for (const config of iconConfigs) {
    const svg = getAppIconSvg(config.size, config.maskable);
    const outputPath = path.join(outputDir, config.name);
    await sharp(Buffer.from(svg))
      .png({ compressionLevel: 9 })
      .toFile(outputPath);
    console.log(`Generated ${config.name} (${config.size}x${config.size})`);
  }
}

generateIcons().catch((err) => {
  console.error('Failed to generate PWA icons:', err);
  process.exit(1);
});

