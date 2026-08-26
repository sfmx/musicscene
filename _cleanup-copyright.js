/**
 * Copyright cleanup script for song JSON files.
 * Removes:
 * 1. alphaTab fields (note-for-note riff transcriptions)
 * 2. tab fields (guitar tablature)
 * 3. Lyric quotations in descriptions/notes (replaced with generic descriptions)
 * 4. Note-for-note riff patterns in text fields
 */

const fs = require('fs');
const path = require('path');

const songsDir = path.join(__dirname, 'src', 'data', 'songs');

// --- Lyric patterns to clean ---
// These replace specific lyric quotes with non-infringing descriptions
const lyricReplacements = [
  // Single-quoted lyric fragments embedded in text
  // Pattern: 'some lyric here' -> the iconic vocal hook / the signature chorus / etc.
];

/**
 * Remove alphaTab and tab fields from sections
 */
function cleanAlphaTab(data) {
  if (data.sections && Array.isArray(data.sections)) {
    for (const section of data.sections) {
      if (section.alphaTab !== undefined) {
        delete section.alphaTab;
      }
      if (section.tab !== undefined) {
        delete section.tab;
      }
    }
  }
  return data;
}

/**
 * Clean lyric quotations from any string field.
 * Matches patterns like: 'some lyric text here' (single-quoted text within JSON strings)
 * and replaces with a generic reference.
 */
function cleanLyricQuotes(text) {
  if (typeof text !== 'string') return text;

  // Replace single-quoted lyric fragments with generic descriptions
  // Pattern: the 'Lyrics Here' section/hook/chorus/refrain/vocal
  // We replace the quoted portion with "signature vocal hook" or similar

  let cleaned = text;

  // Match patterns like: the 'Some Lyrics Here' (section|hook|chorus|refrain|vocal|chant|part)
  cleaned = cleaned.replace(
    /the ['']([^'']{3,80})['']\s*(section|hook|chorus|refrain|vocal|chant|part|outro|singalong|sing-along|verse|bridge|vocal hook|vocal effect|lyric|lyrics|vocal melody)/gi,
    'the signature $2'
  );

  // Match: 'Lyrics Here' (section|hook|chorus|refrain|vocal) without preceding "the"
  cleaned = cleaned.replace(
    /['']([^'']{3,80})['']\s*(section|hook|chorus|refrain|vocal|chant|part|singalong|sing-along|vocal hook|vocal effect|lyric|lyrics|vocal melody)/gi,
    'the signature $2'
  );

  // Match: the 'Some Lyrics' vocal/vocals/singing/hook backed by / over / with
  cleaned = cleaned.replace(
    /the ['']([^'']{3,80})['']\s*(vocals?\s+backed|vocals?\s+over|vocals?\s+with)/gi,
    'the vocals $2'
  );

  // Match standalone: 'Lyrics Here' (not followed by a section word)
  // These often appear as: with the 'lyrics here'
  cleaned = cleaned.replace(
    /['']([^'']{5,80})['']/g,
    (match, lyrics) => {
      // Only replace if it looks like lyrics (contains spaces, not a musical term)
      const isMusicalTerm = /^(palm mute|alternate pick|down.?stroke|up.?stroke|hammer.?on|pull.?off|slide|bend|vibrato|power chord|barre chord|open chord|finger.?pick)/i.test(lyrics);
      const isLikelyLyrics = lyrics.includes(' ') && !isMusicalTerm && lyrics.length > 8;
      if (isLikelyLyrics) {
        return 'the iconic vocal hook';
      }
      return match;
    }
  );

  return cleaned;
}

/**
 * Clean note-for-note riff descriptions from text.
 * Removes specific fret-by-fret and note-by-note patterns.
 */
function cleanNoteForNoteText(text) {
  if (typeof text !== 'string') return text;

  let cleaned = text;

  // Remove "Pattern: E(0) - F#(2) - G#(4) - A(5)" style patterns
  cleaned = cleaned.replace(
    /Pattern:\s*[A-G][#b]?\(\d+\)\s*[-–]\s*[A-G][#b]?\(\d+\)[\s\S]*?(?=[."]|\n|$)/gi,
    'Practice the main riff pattern at a slow tempo'
  );

  // Remove "Note sequence: E(7) - E(7) - G(10)" style patterns
  cleaned = cleaned.replace(
    /Note sequence:\s*[A-G][#b]?\(\d+\)\s*[-–][\s\S]*?(?=[."]|\n|$)/gi,
    'Learn the note sequence of the main riff'
  );

  // Remove "7th fret = E, 10th fret = G" mappings
  cleaned = cleaned.replace(
    /\d+(?:th|st|nd|rd)\s+fret\s*=\s*[A-G][#b]?,\s*\d+(?:th|st|nd|rd)\s+fret\s*=\s*[A-G][#b]?[\s\S]*?(?=[."]|\n|$)/gi,
    'Learn the fret positions for each note in the riff'
  );

  // Remove "Memorize the riff note positions: 7-7-10-7-5-3-2 on the A string"
  cleaned = cleaned.replace(
    /Memorize the riff note positions:\s*[\d\-]+\s*on the [A-G] string/gi,
    'Memorize the riff note positions on the correct string'
  );

  // Remove specific fret sequences like "frets 3-4-5-6-7"
  cleaned = cleaned.replace(
    /frets?\s+\d+[-–]\d+[-–]\d+(?:[-–]\d+)*/gi,
    'the sequential fret positions'
  );

  // Remove "E(0) - F#(2)" note-fret pairs
  cleaned = cleaned.replace(
    /[A-G][#b]?\(\d+\)\s*[-–]\s*[A-G][#b]?\(\d+\)(?:\s*[-–]\s*[A-G][#b]?\(\d+\))*/g,
    'the riff notes'
  );

  // Remove "on 6th fret A string" or "at 7th fret" specific fret references that describe riff notes
  // But keep general references like "around the 5th fret" or "at the 12th fret position"
  cleaned = cleaned.replace(
    /(?:Play the |Hit the |Pick the )[A-G][#b]?\s+(?:note\s+)?(?:on|at)\s+(?:the\s+)?\d+(?:th|st|nd|rd)\s+fret(?:\s+(?:of\s+)?(?:the\s+)?[A-G]\s+string)?/gi,
    'Play the note at the correct fret position'
  );

  // Remove "Slide from the 7th fret up to the 10th fret for the E-to-G transition"
  cleaned = cleaned.replace(
    /Slide (?:from|down from) (?:the )?\d+(?:th|st|nd|rd) fret (?:up |down )?to (?:the )?\d+(?:th|st|nd|rd) fret for the [A-G][#b]?-to-[A-G][#b]? transition/gi,
    'Use slides to connect the notes smoothly'
  );

  // Remove "Pick 5th fret D, then slide" patterns
  cleaned = cleaned.replace(
    /Pick (?:the )?\d+(?:th|st|nd|rd) fret [A-G][#b]?,\s*then slide/gi,
    'Pick the note, then slide'
  );

  // Remove "Slide from 3rd fret to 2nd fret for the final B note"
  cleaned = cleaned.replace(
    /Slide from \d+(?:th|st|nd|rd) fret to \d+(?:th|st|nd|rd) fret for the final [A-G][#b]? note/gi,
    'Slide to the final note of the phrase'
  );

  // Remove specific note-on-fret mappings like "Eb on 6th fret A string"
  cleaned = cleaned.replace(
    /[A-G][#b]?\s+on\s+\d+(?:th|st|nd|rd)\s+fret\s+[A-G]\s+string(?:\s+\(or\s+\d+(?:th|st|nd|rd)\s+fret\s+(?:low\s+)?[A-G]\s+string\))?/gi,
    'the note at the correct fret position'
  );

  // Remove "Place index finger across D and G strings at 3rd fret" riff instructions
  cleaned = cleaned.replace(
    /Place (?:index |ring |middle |pinky )?finger across [A-G] and [A-G] strings at \d+(?:th|st|nd|rd) fret/gi,
    'Place your finger at the correct fret position'
  );

  // Remove "Slide up to 6th fret for Bb5 interval"
  cleaned = cleaned.replace(
    /Slide (?:up|down) to \d+(?:th|st|nd|rd) fret for [A-G][#b]?\d?\s+(?:interval|chord)/gi,
    'Slide to the next chord position'
  );

  // Remove "Move to 8th fret for C5, then 9th fret for Db5 passing tone"
  cleaned = cleaned.replace(
    /Move to \d+(?:th|st|nd|rd) fret for [A-G][#b]?\d?,\s*then \d+(?:th|st|nd|rd) fret for [A-G][#b]?\d?\s*(?:passing tone)?/gi,
    'Move through the chord positions in sequence'
  );

  // Remove "Return to 8th fret C5 to complete the phrase"
  cleaned = cleaned.replace(
    /Return to \d+(?:th|st|nd|rd) fret [A-G][#b]?\d? to complete/gi,
    'Return to the starting position to complete'
  );

  return cleaned;
}

/**
 * Clean specific riff melody descriptions from chord progression text fields.
 * E.g., "E5 (single note riff outlining E - E - G - E - D - C - B)"
 */
function cleanProgressionText(text) {
  if (typeof text !== 'string') return text;

  let cleaned = text;

  // Remove "(single note riff outlining X - X - X - X)" patterns
  cleaned = cleaned.replace(
    /\s*\(single[- ]note (?:riff|melody) outlining [A-G][#b]?\s*[-–]\s*[A-G][#b]?[\s\S]*?\)/gi,
    ''
  );

  // Remove "E (single-note melody: E-E-G-E-D-C-B)" patterns
  cleaned = cleaned.replace(
    /\s*\(single[- ]note melody:\s*[A-G][#b]?[-–][A-G][#b]?[\s\S]*?\)/gi,
    ''
  );

  // Remove "E - slide - G - E - D - slide - C - slide - B" riff patterns in progressions
  cleaned = cleaned.replace(
    /[A-G][#b]?\s*[-–]\s*slide\s*[-–]\s*[A-G][#b]?(?:\s*[-–]\s*(?:slide\s*[-–]\s*)?[A-G][#b]?)*/gi,
    (match) => {
      // Only clean if it has "slide" in it (indicates riff notation, not chord progression)
      if (/slide/i.test(match)) {
        return 'Single-note riff pattern with slides';
      }
      return match;
    }
  );

  // Clean "Bass line: C - B - A - B (repeating)" as this describes a specific melodic bass line
  // But keep regular chord progressions like "Am - G - F"
  cleaned = cleaned.replace(
    /Bass line:\s*[A-G][#b]?\s*[-–]\s*[A-G][#b]?(?:\s*[-–]\s*[A-G][#b]?)*(?:\s*\(repeating\))?/gi,
    'Walking bass line pattern'
  );

  return cleaned;
}

/**
 * Recursively clean all string values in an object
 */
function deepCleanStrings(obj, cleanFns) {
  if (typeof obj === 'string') {
    let result = obj;
    for (const fn of cleanFns) {
      result = fn(result);
    }
    return result;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepCleanStrings(item, cleanFns));
  }
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = deepCleanStrings(value, cleanFns);
    }
    return result;
  }
  return obj;
}

// --- Main ---
const files = fs.readdirSync(songsDir).filter(f => f.endsWith('.json') && f !== '_template.json');

let totalAlphaTabRemoved = 0;
let totalTabRemoved = 0;
let totalFilesModified = 0;

for (const file of files) {
  const filePath = path.join(songsDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.log(`  SKIP (invalid JSON): ${file}`);
    continue;
  }

  // Count alphaTab/tab before removal
  let alphaTabCount = 0;
  let tabCount = 0;
  if (data.sections) {
    for (const s of data.sections) {
      if (s.alphaTab) alphaTabCount++;
      if (s.tab) tabCount++;
    }
  }

  // 1. Remove alphaTab and tab fields
  cleanAlphaTab(data);

  // 2. Clean all text fields (lyrics, note-for-note patterns, progression text)
  const cleanFns = [cleanLyricQuotes, cleanNoteForNoteText, cleanProgressionText];

  // Clean specific areas where issues were found
  if (data.techniques) {
    data.techniques = deepCleanStrings(data.techniques, cleanFns);
  }
  if (data.sections) {
    data.sections = deepCleanStrings(data.sections, cleanFns);
  }
  if (data.learningPath) {
    data.learningPath = deepCleanStrings(data.learningPath, cleanFns);
  }
  if (data.practiceNotes) {
    data.practiceNotes = deepCleanStrings(data.practiceNotes, cleanFns);
  }
  if (data.musicalAnalysis) {
    // Clean chord progression descriptions but preserve chord names
    if (data.musicalAnalysis.chordProgressions) {
      data.musicalAnalysis.chordProgressions = deepCleanStrings(
        data.musicalAnalysis.chordProgressions,
        [cleanProgressionText]
      );
    }
  }

  // Write back
  const output = JSON.stringify(data, null, 2) + '\n';
  if (output !== raw) {
    fs.writeFileSync(filePath, output, 'utf8');
    totalFilesModified++;
    totalAlphaTabRemoved += alphaTabCount;
    totalTabRemoved += tabCount;
    console.log(`  CLEANED: ${file} (${alphaTabCount} alphaTab, ${tabCount} tab removed)`);
  } else {
    console.log(`  no changes: ${file}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Files modified: ${totalFilesModified}`);
console.log(`alphaTab fields removed: ${totalAlphaTabRemoved}`);
console.log(`tab fields removed: ${totalTabRemoved}`);
