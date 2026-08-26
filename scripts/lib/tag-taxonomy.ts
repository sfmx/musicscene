/**
 * Shared tag taxonomy constants.
 * Used by both build-content-index.ts and validate-content.ts.
 */

// ---- Valid Tag Slugs (controlled vocabulary) ----

export const VALID_TAG_SLUGS = new Set([
  // Technique
  'power-chords', 'barre-chords', 'open-chords', 'alternate-picking',
  'hybrid-picking', 'sweep-picking', 'fingerpicking', 'bending', 'vibrato',
  'hammer-on', 'pull-off', 'legato', 'tapping', 'slide', 'palm-muting',
  'string-skipping', 'strumming', 'arpeggios', 'percussive', 'call-response',
  'improvisation', 'syncopation', 'motif-development', 'phrasing', 'target-notes',
  // Theory
  'major-key', 'minor-key', 'pentatonic', 'blues-scale', 'modal', 'intervals',
  'chord-theory', 'chord-progressions', 'voice-leading', 'song-structure',
  'rhythm-theory', 'scale-theory', 'harmonic-minor', 'roman-numerals',
  'secondary-dominants', 'substitutions', 'modal-interchange',
  // Gear
  'electric-guitar', 'acoustic-guitar', 'bass-guitar', 'classical-guitar',
  'tube-amp', 'solid-state-amp', 'modeling-amp', 'overdrive', 'distortion',
  'fuzz', 'delay', 'reverb', 'chorus', 'wah', 'compressor', 'tremolo',
  'recording', 'accessories', 'microphones', 'audio-interface', 'daw',
  'monitors', 'preamps',
  // Genre
  'classic-rock', 'blues', 'metal', 'punk', 'jazz', 'country', 'folk',
  'funk', 'pop', 'reggae', 'latin', 'fingerstyle',
  // Difficulty
  'beginner', 'intermediate', 'advanced', 'expert',
  // Instrument
  'rhythm-guitar', 'lead-guitar',
  // Content-type
  'warmup', 'exercise', 'song-analysis', 'lesson',
]);

// ---- Tag Normalization ----
// Maps existing descriptive tags to taxonomy slugs

export const TAG_NORMALIZATION: Record<string, string | null> = {
  // Chord descriptive tags
  'foundation of harmony': 'chord-theory',
  'bright & stable': 'major-key',
  'universal appeal': null,          // skip, not useful
  'essential building block': 'chord-theory',
  'dark & emotional': 'minor-key',
  'moody & mysterious': 'minor-key',
  'melancholy & depth': 'minor-key',
  'tension & resolution': 'chord-theory',
  'jazz & blues essential': 'jazz',
  'bright & jazzy': 'jazz',
  'sophisticated & warm': 'jazz',
  'moody & smooth': 'jazz',
  'open & ambiguous': 'chord-theory',
  'neither major nor minor': 'chord-theory',
  'unstable & transitional': 'chord-theory',
  'diminished & mysterious': 'chord-theory',
  'symmetrical harmony': 'chord-theory',
  'dissonance & tension': 'chord-theory',
  'leading tone function': 'chord-theory',
  'sharp & bright': 'chord-theory',
  'whole-tone character': 'chord-theory',
  'augmented symmetry': 'chord-theory',
  'rich & colorful': 'chord-theory',
  'beyond triads': 'chord-theory',
  'modern harmony': 'chord-theory',
  'jazz essential': 'jazz',
  // Interval tags
  'perfect consonance': 'intervals',
  'harmonic foundation': 'intervals',
  'playing in unison': 'intervals',
  'root note reference': 'intervals',
  'minor second': 'intervals',
  'sharp dissonance': 'intervals',
  'chromatic neighbor': 'intervals',
  'minor chord foundation': 'minor-key',
  '3 semitones': null,
  '4 semitones': null,
  '5 semitones': null,
  '6 semitones': null,
  '7 semitones': null,
  '8 semitones': null,
  '9 semitones': null,
  '10 semitones': null,
  '11 semitones': null,
  '12 semitones': null,
  'major chord foundation': 'major-key',
  'bright & happy': 'major-key',
  'consonant': 'intervals',
  'darker consonance': 'minor-key',
  'power chords': 'power-chords',
  'strong consonance': 'intervals',
  'tritone substitute': 'intervals',
  'the devil\'s interval': 'intervals',
  'enharmonic pair': 'intervals',
  'sweet & warm': 'intervals',
  'natural minor': 'minor-key',
  'full octave': 'intervals',
  'perfect interval': 'intervals',
  '1 semitone': null,
  '2 semitones': null,
  // Mode tags (skip formula patterns, normalize meaningful ones)
  'modern & jazzy': 'jazz',
  'dark & exotic': 'modal',
  'bright & uplifting': 'modal',
  'darkest mode': 'modal',
  'standard major': 'major-key',
  'dominant flavor': 'modal',
  'blues connection': 'blues',
  'natural minor sound': 'minor-key',
  // Progression tags
  'tonic-subdominant-dominant': 'chord-progressions',
  '3 chords': null,
  'strong resolution': 'chord-progressions',
  'universal pattern': 'chord-progressions',
  'turnaround': 'chord-progressions',
  '12-bar form': 'blues',
  'the most popular': null,
  '4-chord magic': null,
  // Scale tags (already keyword-style, mostly valid)
  'essential': null,
  'diatonic': 'scale-theory',
  'foundation': null,
  'ionian': 'modal',
  'scales': 'scale-theory',
  'theory': null,
  'beginner-friendly': 'beginner',
};
