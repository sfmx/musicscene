/**
 * AlphaTex Validation Utility
 * Based on the official AlphaTex documentation: https://www.alphatab.net/docs/alphatex/notes
 */

export interface AlphaTexValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class AlphaTexValidator {
  
  /**
   * Validates an AlphaTex string according to the official syntax
   * @param alphaTexString The AlphaTex notation to validate
   * @returns Validation result with errors and warnings
   */
  static validate(alphaTexString: string): AlphaTexValidationResult {
    const result: AlphaTexValidationResult = {
      isValid: true,
      errors: [],
      warnings: []
    };

    if (!alphaTexString || alphaTexString.trim().length === 0) {
      result.isValid = false;
      result.errors.push('AlphaTex string cannot be empty');
      return result;
    }

    const trimmed = alphaTexString.trim();
    
    // Split by bars and validate each section
    const barParts = trimmed.split('|');
    // Don't filter out empty bars yet - we need to warn about them
    const bars = barParts.slice(0, -1); // Remove the last element if it's empty (after final |)
    
    // If we have no bars but there's content, it means no bar separators were used
    if (bars.length === 0 && trimmed.length > 0) {
      result.errors.push('No valid bars found. Use | to separate measures');
      result.isValid = false;
      return result;
    }
    
    // If we split and got only one part with no final |, treat it as a single bar
    if (barParts.length === 1 && !trimmed.endsWith('|')) {
      result.errors.push('No valid bars found. Use | to separate measures');
      result.isValid = false;
      return result;
    }

    bars.forEach((bar, barIndex) => {
      this.validateBar(bar.trim(), barIndex, result);
    });

    return result;
  }

  /**
   * Validates a single bar of AlphaTex notation
   */
  private static validateBar(bar: string, barIndex: number, result: AlphaTexValidationResult): void {
    if (bar.length === 0) {
      result.warnings.push(`Bar ${barIndex + 1} is empty`);
      return;
    }

    // Parse notes/chords properly, handling parentheses for chords
    const notes = this.parseNotesFromBar(bar);
    
    notes.forEach((note, noteIndex) => {
      this.validateNote(note, barIndex, noteIndex, result);
    });
  }

  /**
   * Parse notes from a bar, properly handling chord notation with parentheses
   */
  private static parseNotesFromBar(bar: string): string[] {
    const notes: string[] = [];
    let currentNote = '';
    let inChord = false;
    let inQuote = false;
    let inBraces = false;
    let i = 0;

    while (i < bar.length) {
      const char = bar[i];
      
      if (char === '"' && !inChord && !inBraces) {
        // Start or end of a quoted string
        inQuote = !inQuote;
        currentNote += char;
      } else if (char === '{' && !inQuote) {
        // Start of effect notation
        inBraces = true;
        currentNote += char;
      } else if (char === '}' && !inQuote) {
        // End of effect notation
        inBraces = false;
        currentNote += char;
      } else if (char === '(') {
        // Start of a chord
        inChord = true;
        currentNote += char;
      } else if (char === ')') {
        // End of a chord
        inChord = false;
        currentNote += char;
        // Check if there's a duration after the chord
        let j = i + 1;
        while (j < bar.length && (bar[j] === '.' || /\d/.test(bar[j]))) {
          currentNote += bar[j];
          j++;
        }
        i = j - 1; // Will be incremented at end of loop
      } else if (char === ' ' || char === '\t') {
        if (!inChord && !inQuote && !inBraces && currentNote.trim().length > 0) {
          notes.push(currentNote.trim());
          currentNote = '';
        } else if (inChord || inQuote || inBraces) {
          currentNote += char;
        }
      } else {
        currentNote += char;
      }
      
      i++;
    }

    // Add the last note if any
    if (currentNote.trim().length > 0) {
      notes.push(currentNote.trim());
    }

    return notes.filter(note => note.length > 0);
  }

  /**
   * Validates individual note notation
   */
  private static validateNote(note: string, barIndex: number, noteIndex: number, result: AlphaTexValidationResult): void {
    const position = `Bar ${barIndex + 1}, Note ${noteIndex + 1}`;

    // Check for basic fret.string notation (e.g., "3.6", "12.1", "0.3" for open strings)
    const fretStringPattern = /^(\d{1,2})\.(\d+)$/;
    const fretStringMatch = note.match(fretStringPattern);

    if (fretStringMatch) {
      const fret = parseInt(fretStringMatch[1]);
      const string = parseInt(fretStringMatch[2]);

      // Validate fret range (0-24 is reasonable for most guitars, 0 = open string)
      if (fret > 24) {
        result.warnings.push(`${position}: Fret ${fret} is very high (above 24th fret)`);
      }

      // Validate string range (1-6 for standard guitar)
      if (string < 1 || string > 6) {
        result.errors.push(`${position}: Invalid string number ${string}. Must be 1-6`);
        result.isValid = false;
      }

      return;
    }

    // Check for fret.string.duration notation (e.g., "0.6.2", "1.5.4", "5.3.8") - OFFICIAL FORMAT
    const fretStringDurationPattern = /^(\d{1,2})\.(\d+)\.(\d+)$/;
    const fretStringDurationMatch = note.match(fretStringDurationPattern);

    if (fretStringDurationMatch) {
      const fret = parseInt(fretStringDurationMatch[1]);
      const string = parseInt(fretStringDurationMatch[2]);
      const duration = parseInt(fretStringDurationMatch[3]);

      // Validate fret range
      if (fret > 24) {
        result.warnings.push(`${position}: Fret ${fret} is very high (above 24th fret)`);
      }

      // Validate string range (1-6 for standard guitar)
      if (string < 1 || string > 6) {
        result.errors.push(`${position}: Invalid string number ${string}. Must be 1-6`);
        result.isValid = false;
      }

      // Validate duration (common values: 1=whole, 2=half, 4=quarter, 8=eighth, 16=sixteenth)
      const validDurations = [1, 2, 4, 8, 16, 32];
      if (!validDurations.includes(duration)) {
        result.warnings.push(`${position}: Duration ${duration} is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32`);
      }

      return;
    }

    // Check for duration range notation (e.g., ":4", ":8") - sets duration for following notes
    const durationRangePattern = /^:(\d+)$/;
    const durationRangeMatch = note.match(durationRangePattern);

    if (durationRangeMatch) {
      const duration = parseInt(durationRangeMatch[1]);
      const validDurations = [1, 2, 4, 8, 16, 32];
      if (!validDurations.includes(duration)) {
        result.warnings.push(`${position}: Duration range ${duration} is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32`);
      }
      return;
    }

    // Check for repeat multiplier notation (e.g., "3.3*4", "4.2*2") - repeats a note multiple times
    const repeatMultiplierPattern = /^(\d{1,2})\.(\d+)\*(\d+)$/;
    const repeatMultiplierMatch = note.match(repeatMultiplierPattern);

    if (repeatMultiplierMatch) {
      const fret = parseInt(repeatMultiplierMatch[1]);
      const string = parseInt(repeatMultiplierMatch[2]);
      const multiplier = parseInt(repeatMultiplierMatch[3]);

      // Validate fret range
      if (fret > 24) {
        result.warnings.push(`${position}: Fret ${fret} is very high (above 24th fret)`);
      }

      // Validate string range
      if (string < 1 || string > 6) {
        result.errors.push(`${position}: Invalid string number ${string}. Must be 1-6`);
        result.isValid = false;
      }

      // Validate multiplier (reasonable range)
      if (multiplier < 1) {
        result.errors.push(`${position}: Multiplier must be at least 1`);
        result.isValid = false;
      } else if (multiplier > 16) {
        result.warnings.push(`${position}: Multiplier ${multiplier} is very high. Consider breaking into multiple bars.`);
      }

      return;
    }

    // Check for voice directive (e.g., "\voice") - starts a new voice
    const voicePattern = /^\\voice$/;
    if (note.match(voicePattern)) {
      return; // Voice directive is valid
    }

    // Check for track directive (e.g., "\track", "\track \"Piano\"") - starts a new track
    const trackPattern = /^\\track(\s+"[^"]*")?$/;
    const trackMatch = note.match(trackPattern);
    if (trackMatch) {
      return; // Track directive is valid
    }

    // Handle track directives with spaces in quoted strings
    if (note.startsWith('\\track')) {
      return; // Track directive is valid
    }

    // Check for staff directive (e.g., "\staff", "\staff{score}") - configures staff
    const staffPattern = /^\\staff(\{[^}]*\})?$/;
    if (note.match(staffPattern)) {
      return; // Staff directive is valid
    }

    // Check for instrument directive (e.g., "\instrument", "\instrument acousticgrandpiano") - sets instrument
    const instrumentPattern = /^\\instrument(\s+\w+)?$/;
    const instrumentMatch = note.match(instrumentPattern);
    if (instrumentMatch) {
      return; // Instrument directive is valid
    }

    // Handle instrument directives with any parameter
    if (note.startsWith('\\instrument')) {
      return; // Instrument directive is valid
    }

    // Check for tuning directive (e.g., "\tuning", "\tuning piano") - sets tuning
    const tuningPattern = /^\\tuning(\s+\w+)?$/;
    const tuningMatch = note.match(tuningPattern);
    if (tuningMatch) {
      return; // Tuning directive is valid
    }

    // Handle tuning directives with any parameter
    if (note.startsWith('\\tuning')) {
      return; // Tuning directive is valid
    }

    // Check for scientific pitch notation (e.g., "c4", "d#5", "bb3") - used in piano/score notation
    const scientificPitchPattern = /^[a-g][#b]?[0-9]$/i;
    if (note.match(scientificPitchPattern)) {
      return; // Scientific pitch notation is valid
    }

    // Check for accidental directives (e.g., "\accidentals explicit", "\accidentals auto")
    if (note.startsWith('\\accidentals')) {
      return; // Accidentals directive is valid
    }

    // Handle accidentals parameters separately
    if (note === 'explicit' || note === 'auto') {
      return; // Accidentals parameter is valid
    }

    // Check for accidental note effects (e.g., "forceSharp", "forceFlat", "forceNatural")
    const accidentalEffectPattern = /^(forceSharp|forceFlat|forceNatural|forceDoubleSharp|forceDoubleFlat)$/;
    if (note.match(accidentalEffectPattern)) {
      return; // Accidental effect is valid
    }

    // Check for accidental notation in scientific pitch with force effects
    const accidentalNotePattern = /^[a-g][#b]?[0-9](\s+acc\s+(forceSharp|forceFlat|forceNatural|forceDoubleSharp|forceDoubleFlat))?$/i;
    if (note.match(accidentalNotePattern)) {
      return; // Accidental note notation is valid
    }

    // Check for effect notation with curly braces (e.g., "{ acc forceSharp }")
    const effectNotationPattern = /^\{\s*acc\s+(forceSharp|forceFlat|forceNatural|forceDoubleSharp|forceDoubleFlat)\s*\}$/;
    if (note.match(effectNotationPattern)) {
      return; // Effect notation is valid
    }

    // Check for note with effect notation (e.g., "c4 { acc forceSharp }")
    const noteWithEffectPattern = /^[a-g][#b]?[0-9]\s*\{\s*acc\s+(forceSharp|forceFlat|forceNatural|forceDoubleSharp|forceDoubleFlat)\s*\}$/i;
    if (note.match(noteWithEffectPattern)) {
      return; // Note with effect notation is valid
    }

    // Check for rest with duration notation (e.g., "r.2", "r.4")
    const restDurationPattern = /^r\.(\d+)$/;
    const restDurationMatch = note.match(restDurationPattern);

    if (restDurationMatch) {
      const duration = parseInt(restDurationMatch[1]);
      const validDurations = [1, 2, 4, 8, 16, 32];
      if (!validDurations.includes(duration)) {
        result.warnings.push(`${position}: Rest duration ${duration} is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32`);
      }
      return;
    }

    // Check for chord notation (e.g., "(3.6 5.5 7.4)")
    const chordPattern = /^\(([^)]+)\)$/;
    const chordMatch = note.match(chordPattern);

    if (chordMatch) {
      const chordNotes = chordMatch[1].split(/\s+/);
      chordNotes.forEach((chordNote, chordNoteIndex) => {
        this.validateNote(chordNote, barIndex, noteIndex, result);
      });
      return;
    }

    // Check for chord notation with duration (e.g., "(0.3 0.4).4", "(3.3 3.4).8")
    const chordWithDurationPattern = /^\(([^)]+)\)\.(\d+)$/;
    const chordWithDurationMatch = note.match(chordWithDurationPattern);

    if (chordWithDurationMatch) {
      const chordNotes = chordWithDurationMatch[1].split(/\s+/);
      const duration = parseInt(chordWithDurationMatch[2]);
      
      // Validate each note in the chord
      chordNotes.forEach((chordNote, chordNoteIndex) => {
        this.validateNote(chordNote, barIndex, noteIndex, result);
      });
      
      // Validate duration
      const validDurations = [1, 2, 4, 8, 16, 32];
      if (!validDurations.includes(duration)) {
        result.warnings.push(`${position}: Chord duration ${duration} is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32`);
      }
      
      return;
    }

    // Check for rest notation
    if (note === 'r') {
      return; // Rest is valid
    }

    // Check for duration modifiers (w, h, q, e, s, etc.)
    const durationPattern = /^[whqest]$/;
    if (durationPattern.test(note)) {
      return; // Duration modifier is valid
    }

    // Check for note with duration (e.g., "3.6q", "5.4h")
    const noteWithDurationPattern = /^(\d{1,2})\.(\d+)([whqest])$/;
    if (noteWithDurationPattern.test(note)) {
      const match = note.match(noteWithDurationPattern);
      if (match) {
        const fret = parseInt(match[1]);
        const string = parseInt(match[2]);
        
        if (fret > 24) {
          result.warnings.push(`${position}: Fret ${fret} is very high (above 24th fret)`);
        }
        
        if (string < 1 || string > 6) {
          result.errors.push(`${position}: Invalid string number ${string}. Must be 1-6`);
          result.isValid = false;
        }
      }
      return;
    }

    // Check for bends, slides, etc.
    const effectsPattern = /^(\d{1,2})\.([1-6])([bsr]|\/|\\)(\d{1,2})?$/;
    if (effectsPattern.test(note)) {
      return; // Effects notation is valid
    }

    // If none of the patterns match, it's invalid
    result.errors.push(`${position}: Invalid note notation "${note}". Expected format: fret.string (e.g., 3.6) or fret.string.duration (e.g., 3.6.4)`);
    result.isValid = false;
  }

  /**
   * Converts traditional guitar tab notation to AlphaTex format
   * @param tabString Traditional tab notation (e.g., "G|--12--5--7--|")
   * @returns Converted AlphaTex notation
   */
  static convertFromTraditionalTab(tabString: string): string {
    try {
      // Parse traditional tab format
      const lines = tabString.split('\\n').map(line => line.trim()).filter(line => line.length > 0);
      
      const stringMap: { [key: string]: number } = {
        'e': 1, // High E string
        'B': 2, 'b': 2, // B string  
        'G': 3, 'g': 3, // G string
        'D': 4, 'd': 4, // D string
        'A': 5, 'a': 5, // A string
        'E': 6  // Low E string
      };

      // For AC/DC style power chords, we need to handle the ambiguity
      // Looking at the patterns, it appears to be:
      // G = 3rd string, D = 4th string, A = 5th string (low E = 6th)
      const acDcStringMap: { [key: string]: number } = {
        'G': 3, 'g': 3, // G string (3rd)
        'D': 4, 'd': 4, // D string (4th) 
        'A': 5, 'a': 5, // A string (5th)
        'E': 6, 'e': 6  // Low E string (6th)
      };

      const notes: string[] = [];
      
      lines.forEach(line => {
        const parts = line.split('|');
        if (parts.length >= 2) {
          const stringIndicator = parts[0].trim();
          const tabContent = parts[1];
          
          const stringNumber = acDcStringMap[stringIndicator] || stringMap[stringIndicator];
          if (!stringNumber) return;

          // Extract fret numbers from the tab content
          const fretMatches = tabContent.match(/\d+/g);
          if (fretMatches) {
            fretMatches.forEach(fret => {
              notes.push(`${fret}.${stringNumber}`);
            });
          }
        }
      });

      return notes.length > 0 ? notes.join(' ') + ' |' : '0.6 |';
    } catch (error) {
      console.warn('Failed to convert traditional tab:', error);
      return ' |'; // Return minimal valid default
    }
  }

  /**
   * Quick validation for common patterns
   */
  static isValidBasicPattern(alphaTexString: string): boolean {
    const basicPattern = /^[\d\.\s\|whqestr\(\)\/\\b]+$/;
    return basicPattern.test(alphaTexString.trim());
  }

  /**
   * Suggests corrections for common mistakes
   */
  static suggestCorrections(alphaTexString: string): string[] {
    const suggestions: string[] = [];
    
    // Check for missing bar separators
    if (!alphaTexString.includes('|')) {
      suggestions.push('Add | at the end to mark the end of the measure');
    }

    // Check for invalid string numbers
    const invalidStrings = alphaTexString.match(/\.\d+/g);
    if (invalidStrings) {
      invalidStrings.forEach(match => {
        const stringNum = parseInt(match.substring(1));
        if (stringNum > 6 || stringNum < 1) {
          suggestions.push(`String number ${stringNum} is invalid. Use 1-6 for standard guitar`);
        }
      });
    }

    return suggestions;
  }
}

export default AlphaTexValidator;
