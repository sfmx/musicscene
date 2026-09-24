/**
 * Slugs of songs that feature hand-curated harmonic deep-dive breakdowns.
 * Kept lightweight and independent of songData or whySongsWork so client
 * components (like cross-reference cards) can detect curated breakdowns
 * without bundling full catalog JSON datasets.
 */

export const CURATED_HARMONIC_SLUGS: ReadonlySet<string> = new Set([
  'hotel-california',
  'sweet-child-o-mine',
  'comfortably-numb',
  'black-hole-sun',
  'under-the-bridge',
  'sultans-of-swing',
  'wish-you-were-here',
  'wonderwall',
  'stairway-to-heaven',
  'crazy-train',
  'all-along-the-watchtower',
  'who-made-who',
  'another-brick-in-the-wall',
  'back-in-black',
  'blackbird',
  'purple-haze',
  'little-wing',
  'smells-like-teen-spirit',
  'highway-to-hell',
  'thunderstruck',
  'layla',
  'master-of-puppets',
  'sweet-home-alabama',
  'tears-in-heaven',
  'never-going-back-again',
  'playing-god',
  'it-runs-through-me',
  'stormy-monday',
  'bohemian-rhapsody',
  'creep',
  'here-comes-the-sun',
  'nothing-else-matters',
  'kashmir',
  'free-bird',
  'time',
  'basket-case',
  'say-it-aint-so',
  'cant-stop',
  'killing-in-the-name',
  'the-trooper',
  'texas-flood',
  'voodoo-child',
  'la-grange',
  'mr-crowley',
  'fade-to-black',
]);

export function hasCuratedHarmonicBreakdown(slug: string): boolean {
  return CURATED_HARMONIC_SLUGS.has(slug);
}

