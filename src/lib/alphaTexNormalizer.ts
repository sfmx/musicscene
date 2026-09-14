/**
 * AlphaTex Normalizer Utility
 * 
 * Ensures AlphaTex notation fed to @coderline/alphatab is mathematically balanced
 * and rhythmically stable. Resolves inconsistent playback speeds, beat overflow,
 * and bar-skipping caused by unparenthesized chords, undeclared time signatures,
 * and stateful duration leaks across barlines.
 */

export interface NormalizeAlphaTexOptions {
  tempo?: number;
}

/**
 * Normalizes an AlphaTex string:
 * 1. Formats metadata header with \tempo <bpm> . when tempo is provided and not already present.
 * 2. Detects unparenthesized 6-string and 5-string chords, converting them to :2 (chord) (chord) |.
 * 3. Detects repeated 3-string power chords, converting them to :2 (chord) (chord) |.
 * 4. Detects 6-note melodic, scale, or fingerpicking runs without explicit time signature,
 *    and establishes a balanced 6/4 measure (\ts 6 4 :4).
 * 5. Handles chord pairs missing duration directives in 4/4 meter.
 * 6. Resets quarter-note bars with :4 if preceding measures set another duration (:2, .1, etc.).
 * 7. Fills incomplete 3-note bars in 4/4 meter by extending the final note to a half note.
 */
export function normalizeAlphaTex(alphaTex: string, tempo?: number): string {
  if (!alphaTex || typeof alphaTex !== 'string') return alphaTex;

  const trimmedTex = alphaTex.trim();
  if (trimmedTex.length === 0) return alphaTex;

  // 1. Handle tempo metadata header
  const hasTempo = trimmedTex.includes('\\tempo');
  let header = '';
  if (!hasTempo && tempo && typeof tempo === 'number' && tempo > 30 && tempo < 300) {
    header = `\\tempo ${Math.round(tempo)} . `;
  }

  let body = trimmedTex;
  // If there's already a metadata header dot separator, preserve it
  if (trimmedTex.includes('.')) {
    const metaMatch = trimmedTex.match(/^(\\tempo\s+\d+.*?)\s+\.\s+([\s\S]*)$/);
    if (metaMatch) {
      header = `${metaMatch[1]} . `;
      body = metaMatch[2];
    }
  }

  const rawBars = body.split('|');
  const hasTrailingPipe = body.trim().endsWith('|');

  let currentDuration = 4; // default AlphaTex duration is quarter note (4)

  const normalizedBars = rawBars.map((rawBar, idx) => {
    // Retain trailing empty element created by trailing pipe
    if (idx === rawBars.length - 1 && hasTrailingPipe && !rawBar.trim()) {
      return '';
    }

    const trimmed = rawBar.trim();
    if (!trimmed) return rawBar;

    // Check for explicit time signature in this bar
    if (trimmed.includes('\\ts')) {
      const durMatch = trimmed.match(/:(\d+)/);
      if (durMatch) {
        currentDuration = parseInt(durMatch[1], 10);
      }
      return rawBar;
    }

    // Extract notes and chords using regex
    const chordMatches = trimmed.match(/\([^)]+\)(?:\.\d+)?|[^\s()]+/g) || [];

    // Case A: Exactly 2 parenthesized chords without explicit durations in 4/4 meter -> two half notes
    if (
      chordMatches.length === 2 &&
      chordMatches.every(m => m.startsWith('(') && !m.includes(').')) &&
      !trimmed.includes(':')
    ) {
      currentDuration = 2;
      return ` :2 ${chordMatches[0]} ${chordMatches[1]} `;
    }

    // Case B: Exactly 1 parenthesized chord without duration in 4/4 meter -> whole note
    if (
      chordMatches.length === 1 &&
      chordMatches[0].startsWith('(') &&
      !chordMatches[0].includes(').') &&
      !trimmed.includes(':')
    ) {
      currentDuration = 1;
      return ` ${chordMatches[0]}.1 `;
    }

    // Case C: 4 single notes (e.g. 3.5 5.4 5.3 3.5) in 4/4 meter
    const tokens = trimmed.split(/\s+/).filter(t => t.length > 0);
    const is4QuarterNotes =
      tokens.length === 4 &&
      tokens.every(t => /^\d{1,2}\.\d$/.test(t));

    if (is4QuarterNotes) {
      if (currentDuration !== 4) {
        currentDuration = 4;
        return ` :4 ${trimmed} `;
      }
      return rawBar;
    }

    // Case D: 6-note bars without explicit durations or parentheses
    if (tokens.length === 6 && !trimmed.includes('(') && !trimmed.includes(':')) {
      const parsed = tokens.map(t => {
        const m = t.match(/^(\d{1,2})\.(\d)$/);
        return m ? { fret: m[1], string: parseInt(m[2], 10), raw: t } : null;
      });

      if (parsed.every((p) => p !== null)) {
        // D1: 6-string chord voicing (strings 6, 5, 4, 3, 2, 1)
        const is6StringChord =
          parsed[0].string === 6 &&
          parsed[1].string === 5 &&
          parsed[2].string === 4 &&
          parsed[3].string === 3 &&
          parsed[4].string === 2 &&
          parsed[5].string === 1;

        if (is6StringChord) {
          currentDuration = 2;
          const chord = `(${tokens.join(' ')})`;
          return ` :2 ${chord} ${chord} `;
        }

        // D2: 5-string chord voicing (strings 5, 4, 3, 2, 1)
        const is5StringChord =
          parsed[0].string === 5 &&
          parsed[1].string === 4 &&
          parsed[2].string === 3 &&
          parsed[3].string === 2 &&
          parsed[4].string === 1;

        if (is5StringChord) {
          currentDuration = 2;
          const chord = `(${tokens.slice(0, 5).join(' ')})`;
          return ` :2 ${chord} ${chord} `;
        }

        // D3: Repeated 3-note power chord (e.g. 12.6 14.5 14.4 12.6 14.5 14.4)
        const isPowerChordDouble =
          parsed[0].string === parsed[3].string &&
          parsed[1].string === parsed[4].string &&
          parsed[2].string === parsed[5].string &&
          parsed[0].fret === parsed[3].fret &&
          parsed[1].fret === parsed[4].fret &&
          parsed[2].fret === parsed[5].fret;

        if (isPowerChordDouble) {
          currentDuration = 2;
          const chord = `(${tokens.slice(0, 3).join(' ')})`;
          return ` :2 ${chord} ${chord} `;
        }

        // D4: Melodic line, scale run, or fingerpicking pattern of 6 notes -> declare balanced 6/4 measure
        currentDuration = 4;
        return ` \\ts 6 4 :4 ${tokens.join(' ')} `;
      }
    }

    // Case E: 3-note bars in 4/4 meter without durations (missing 1 beat)
    if (tokens.length === 3 && !trimmed.includes('(') && !trimmed.includes(':')) {
      const parsed = tokens.map(t => {
        const m = t.match(/^(\d{1,2})\.(\d)$/);
        return m ? { fret: m[1], string: parseInt(m[2], 10), raw: t } : null;
      });

      if (parsed.every(p => p !== null)) {
        currentDuration = 2;
        return ` :4 ${tokens[0]} ${tokens[1]} ${tokens[2]}.2 `;
      }
    }

    // Update currentDuration tracking if explicit duration directive is present
    const durMatch = trimmed.match(/:(\d+)/);
    if (durMatch) {
      currentDuration = parseInt(durMatch[1], 10);
    }

    return rawBar;
  });

  return `${header}${normalizedBars.join('|')}`;
}
