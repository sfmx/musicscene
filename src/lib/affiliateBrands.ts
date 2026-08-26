/**
 * Known music gear brand names for affiliate link detection.
 * Used by getAffiliateLinkWithFallback() to determine if a text string
 * is likely a product name that should be linked to Amazon.
 *
 * Sorted longest-first within groups to support prefix matching.
 */
export const AFFILIATE_BRANDS: string[] = [
  // Guitars
  'Fender', 'Gibson', 'Epiphone', 'Squier', 'PRS', 'Ibanez', 'ESP',
  'Gretsch', 'Yamaha', 'Taylor', 'Martin', 'Jackson', 'Charvel',
  'Schecter', 'Dean', 'Rickenbacker', 'G&L', 'Reverend', 'Washburn',
  'Ovation', 'Takamine', 'Córdoba', 'Alvarez', 'Breedlove', 'Guild',
  'Danelectro', 'Harmony', 'Airline', 'Supro',

  // Amps
  'Marshall', 'Vox', 'Orange', 'Mesa Boogie', 'Mesa', 'Peavey',
  'Blackstar', 'Hughes & Kettner', 'EVH', 'Bogner', 'Soldano',
  'Fryette', 'Egnater', 'Diezel', 'Engl', 'Laney', 'Randall',
  'Quilter', 'Roland', 'Line 6',

  // Effects Pedals
  'Boss', 'MXR', 'Electro-Harmonix', 'EHX', 'TC Electronic', 'Strymon',
  'Eventide', 'Empress', 'Way Huge', 'Dunlop', 'Fulltone', 'Xotic',
  'ProCo', 'DOD', 'Maxon', 'Friedman', 'JHS', 'Walrus Audio',
  'Source Audio', 'Wampler', 'Keeley', 'Tech 21', 'AMT',
  'DigiTech', 'Catalinbread', 'EarthQuaker Devices', 'Chase Bliss',
  'Old Blood Noise', 'Death By Audio', 'Analogman', 'Ibanez',
  'Tone Bender', 'Klon',

  // Recording - Interfaces
  'Focusrite', 'PreSonus', 'Behringer', 'Universal Audio', 'RME',
  'Zoom', 'MOTU', 'Audient', 'Steinberg', 'Arturia', 'SSL',
  'Apogee', 'Antelope',

  // Recording - Microphones
  'Shure', 'AKG', 'Neumann', 'Audio-Technica', 'Sennheiser',
  'Electro-Voice', 'Rode', 'Royer', 'AEA', 'Coles', 'Beyerdynamic',
  'Blue Microphones', 'Aston', 'Warm Audio', 'Slate Digital',

  // Recording - Monitors & Headphones
  'KRK', 'JBL', 'Adam Audio', 'Genelec', 'Focal',
  'Sony', 'Beyerdynamic', 'Audio-Technica',

  // Recording - Preamps & Outboard
  'Neve', 'API', 'Avalon', 'Grace Design', 'Golden Age Project',
  'Warm Audio', 'ART', 'dbx', 'FMR Audio', 'Cloudlifter',

  // Accessories
  'Snark', 'Shubb', 'Kyser', 'G7th', "D'Addario", 'Ernie Ball',
  'Planet Waves', 'Mogami', 'Hosa', 'Monster', 'Livewire',
  'Gator', 'SKB', 'Korg', 'Peterson', 'Hercules',
  'On-Stage', 'Ultimate Support', 'String Swing',
  'Jim Dunlop', 'Fender', 'ChromaCast',
];
