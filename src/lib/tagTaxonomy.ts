/**
 * Controlled vocabulary for content tagging.
 * Every tag used in the content index must be listed here.
 * The build script validates all tags against this list.
 */

export type TagCategory =
  | 'technique'
  | 'theory'
  | 'gear'
  | 'genre'
  | 'difficulty'
  | 'instrument'
  | 'content-type';

export interface TagDefinition {
  slug: string;
  label: string;
  category: TagCategory;
}

export const TAG_TAXONOMY: TagDefinition[] = [
  // --- Technique ---
  { slug: 'power-chords', label: 'Power Chords', category: 'technique' },
  { slug: 'barre-chords', label: 'Barre Chords', category: 'technique' },
  { slug: 'open-chords', label: 'Open Chords', category: 'technique' },
  { slug: 'alternate-picking', label: 'Alternate Picking', category: 'technique' },
  { slug: 'hybrid-picking', label: 'Hybrid Picking', category: 'technique' },
  { slug: 'sweep-picking', label: 'Sweep Picking', category: 'technique' },
  { slug: 'fingerpicking', label: 'Fingerpicking', category: 'technique' },
  { slug: 'bending', label: 'Bending', category: 'technique' },
  { slug: 'vibrato', label: 'Vibrato', category: 'technique' },
  { slug: 'hammer-on', label: 'Hammer-On', category: 'technique' },
  { slug: 'pull-off', label: 'Pull-Off', category: 'technique' },
  { slug: 'legato', label: 'Legato', category: 'technique' },
  { slug: 'tapping', label: 'Tapping', category: 'technique' },
  { slug: 'slide', label: 'Slide', category: 'technique' },
  { slug: 'palm-muting', label: 'Palm Muting', category: 'technique' },
  { slug: 'string-skipping', label: 'String Skipping', category: 'technique' },
  { slug: 'strumming', label: 'Strumming', category: 'technique' },
  { slug: 'arpeggios', label: 'Arpeggios', category: 'technique' },
  { slug: 'percussive', label: 'Percussive', category: 'technique' },
  { slug: 'call-response', label: 'Call & Response', category: 'technique' },
  { slug: 'improvisation', label: 'Improvisation', category: 'technique' },
  { slug: 'syncopation', label: 'Syncopation', category: 'technique' },
  { slug: 'motif-development', label: 'Motif Development', category: 'technique' },
  { slug: 'phrasing', label: 'Phrasing', category: 'technique' },
  { slug: 'target-notes', label: 'Target Notes', category: 'technique' },

  // --- Theory ---
  { slug: 'major-key', label: 'Major Key', category: 'theory' },
  { slug: 'minor-key', label: 'Minor Key', category: 'theory' },
  { slug: 'pentatonic', label: 'Pentatonic', category: 'theory' },
  { slug: 'blues-scale', label: 'Blues Scale', category: 'theory' },
  { slug: 'modal', label: 'Modal', category: 'theory' },
  { slug: 'intervals', label: 'Intervals', category: 'theory' },
  { slug: 'chord-theory', label: 'Chord Theory', category: 'theory' },
  { slug: 'chord-progressions', label: 'Chord Progressions', category: 'theory' },
  { slug: 'voice-leading', label: 'Voice Leading', category: 'theory' },
  { slug: 'song-structure', label: 'Song Structure', category: 'theory' },
  { slug: 'rhythm-theory', label: 'Rhythm Theory', category: 'theory' },
  { slug: 'scale-theory', label: 'Scale Theory', category: 'theory' },
  { slug: 'harmonic-minor', label: 'Harmonic Minor', category: 'theory' },
  { slug: 'roman-numerals', label: 'Roman Numerals', category: 'theory' },
  { slug: 'secondary-dominants', label: 'Secondary Dominants', category: 'theory' },
  { slug: 'substitutions', label: 'Substitutions', category: 'theory' },
  { slug: 'modal-interchange', label: 'Modal Interchange', category: 'theory' },

  // --- Gear ---
  { slug: 'electric-guitar', label: 'Electric Guitar', category: 'gear' },
  { slug: 'acoustic-guitar', label: 'Acoustic Guitar', category: 'gear' },
  { slug: 'bass-guitar', label: 'Bass Guitar', category: 'gear' },
  { slug: 'classical-guitar', label: 'Classical Guitar', category: 'gear' },
  { slug: 'tube-amp', label: 'Tube Amp', category: 'gear' },
  { slug: 'solid-state-amp', label: 'Solid State Amp', category: 'gear' },
  { slug: 'modeling-amp', label: 'Modeling Amp', category: 'gear' },
  { slug: 'overdrive', label: 'Overdrive', category: 'gear' },
  { slug: 'distortion', label: 'Distortion', category: 'gear' },
  { slug: 'fuzz', label: 'Fuzz', category: 'gear' },
  { slug: 'delay', label: 'Delay', category: 'gear' },
  { slug: 'reverb', label: 'Reverb', category: 'gear' },
  { slug: 'chorus', label: 'Chorus', category: 'gear' },
  { slug: 'wah', label: 'Wah', category: 'gear' },
  { slug: 'compressor', label: 'Compressor', category: 'gear' },
  { slug: 'tremolo', label: 'Tremolo', category: 'gear' },
  { slug: 'recording', label: 'Recording', category: 'gear' },
  { slug: 'accessories', label: 'Accessories', category: 'gear' },
  { slug: 'microphones', label: 'Microphones', category: 'gear' },
  { slug: 'audio-interface', label: 'Audio Interface', category: 'gear' },
  { slug: 'daw', label: 'DAW', category: 'gear' },
  { slug: 'monitors', label: 'Monitors', category: 'gear' },
  { slug: 'preamps', label: 'Preamps', category: 'gear' },

  // --- Genre ---
  { slug: 'classic-rock', label: 'Classic Rock', category: 'genre' },
  { slug: 'blues', label: 'Blues', category: 'genre' },
  { slug: 'metal', label: 'Metal', category: 'genre' },
  { slug: 'punk', label: 'Punk', category: 'genre' },
  { slug: 'jazz', label: 'Jazz', category: 'genre' },
  { slug: 'country', label: 'Country', category: 'genre' },
  { slug: 'folk', label: 'Folk', category: 'genre' },
  { slug: 'funk', label: 'Funk', category: 'genre' },
  { slug: 'pop', label: 'Pop', category: 'genre' },
  { slug: 'reggae', label: 'Reggae', category: 'genre' },
  { slug: 'latin', label: 'Latin', category: 'genre' },
  { slug: 'fingerstyle', label: 'Fingerstyle', category: 'genre' },

  // --- Difficulty ---
  { slug: 'beginner', label: 'Beginner', category: 'difficulty' },
  { slug: 'intermediate', label: 'Intermediate', category: 'difficulty' },
  { slug: 'advanced', label: 'Advanced', category: 'difficulty' },
  { slug: 'expert', label: 'Expert', category: 'difficulty' },

  // --- Instrument focus ---
  { slug: 'rhythm-guitar', label: 'Rhythm Guitar', category: 'instrument' },
  { slug: 'lead-guitar', label: 'Lead Guitar', category: 'instrument' },

  // --- Content type ---
  { slug: 'warmup', label: 'Warmup', category: 'content-type' },
  { slug: 'exercise', label: 'Exercise', category: 'content-type' },
  { slug: 'song-analysis', label: 'Song Analysis', category: 'content-type' },
  { slug: 'lesson', label: 'Lesson', category: 'content-type' },
];

export const VALID_TAG_SLUGS = new Set(TAG_TAXONOMY.map(t => t.slug));

export function isValidTag(tag: string): boolean {
  return VALID_TAG_SLUGS.has(tag);
}

export function getTagsByCategory(category: TagCategory): TagDefinition[] {
  return TAG_TAXONOMY.filter(t => t.category === category);
}

export function getTagLabel(slug: string): string {
  return TAG_TAXONOMY.find(t => t.slug === slug)?.label ?? slug;
}
