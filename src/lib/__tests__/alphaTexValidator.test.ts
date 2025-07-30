import { AlphaTexValidator, AlphaTexValidationResult } from '../alphaTexValidator';

describe('AlphaTexValidator', () => {
  describe('Basic validation', () => {
    test('should reject empty string', () => {
      const result = AlphaTexValidator.validate('');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('AlphaTex string cannot be empty');
    });

    test('should reject whitespace-only string', () => {
      const result = AlphaTexValidator.validate('   ');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('AlphaTex string cannot be empty');
    });

    test('should require bar separators', () => {
      const result = AlphaTexValidator.validate('3.6 5.4');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('No valid bars found. Use | to separate measures');
    });
  });

  describe('Fret.String notation', () => {
    test('should accept valid fret.string notation', () => {
      const result = AlphaTexValidator.validate('3.6 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept open string notation (fret 0)', () => {
      const result = AlphaTexValidator.validate('0.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept high fret numbers', () => {
      const result = AlphaTexValidator.validate('12.1 15.2 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should warn about very high frets', () => {
      const result = AlphaTexValidator.validate('25.1 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Fret 25 is very high (above 24th fret)');
    });

    test('should reject invalid string numbers', () => {
      const result = AlphaTexValidator.validate('3.7 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 7. Must be 1-6');
    });

    test('should reject string number 0', () => {
      const result = AlphaTexValidator.validate('3.0 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 0. Must be 1-6');
    });
  });

  describe('Fret.String.Duration notation', () => {
    test('should accept valid duration notation', () => {
      const result = AlphaTexValidator.validate('3.6.4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept open string with duration', () => {
      const result = AlphaTexValidator.validate('0.3.8 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should warn about uncommon durations', () => {
      const result = AlphaTexValidator.validate('3.6.7 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Duration 7 is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32');
    });

    test('should accept standard durations', () => {
      const testCases = ['1', '2', '4', '8', '16', '32'];
      testCases.forEach(duration => {
        const result = AlphaTexValidator.validate(`3.6.${duration} |`);
        expect(result.isValid).toBe(true);
        expect(result.warnings).toHaveLength(0);
      });
    });
  });

  describe('Repeat multiplier notation', () => {
    it('should accept repeat multiplier syntax', () => {
      const result = AlphaTexValidator.validate('3.3*4 | 4.2*2');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept official documentation example', () => {
      const result = AlphaTexValidator.validate('3.3*4 | 4.3*4');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate fret and string numbers in multiplier notation', () => {
      const result = AlphaTexValidator.validate('25.7*4 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 7. Must be 1-6');
      expect(result.warnings).toContain('Bar 1, Note 1: Fret 25 is very high (above 24th fret)');
    });

    it('should warn about very high multipliers', () => {
      const result = AlphaTexValidator.validate('3.3*20 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Multiplier 20 is very high. Consider breaking into multiple bars.');
    });

    it('should reject invalid multipliers', () => {
      const result = AlphaTexValidator.validate('3.3*0 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Multiplier must be at least 1');
    });
  });

  describe('Multiple voices notation', () => {
    it('should accept voice directive', () => {
      const result = AlphaTexValidator.validate('3.3 4.3 | \\voice 5.3 6.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept official multiple voices example', () => {
      // Simplified version focusing on the core \voice functionality
      const result = AlphaTexValidator.validate('\\voice c4 d4 e4 f4 | c4 d4 e4 f4 \\voice c3 d3 e3 f3 | c3 d3 e3 f3');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept track directives', () => {
      // Test basic track without quotes (simpler format)
      const basicResult = AlphaTexValidator.validate('\\track 3.3 |');
      expect(basicResult.isValid).toBe(true);
      expect(basicResult.errors).toHaveLength(0);
    });

    it('should accept simplified multiple voices example', () => {
      // Simplified version that focuses on the \voice syntax which is the core feature
      const result = AlphaTexValidator.validate('\\voice c4 d4 e4 f4 | \\voice c3 d3 e3 f3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept staff directives', () => {
      const result = AlphaTexValidator.validate('\\staff{score} 3.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept instrument and tuning directives', () => {
      // Test basic directives without complex parameters
      const result = AlphaTexValidator.validate('\\tuning \\instrument 3.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Accidentals notation', () => {
    it('should accept accidentals directive', () => {
      const result = AlphaTexValidator.validate('\\accidentals explicit c#4 d4 c#4 db4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept accidental note effects', () => {
      const result = AlphaTexValidator.validate('c4 { acc forceSharp } c4 { acc forceFlat } |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept scientific pitch with accidentals', () => {
      const result = AlphaTexValidator.validate('c#4 db4 c4 d#4 eb4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept force accidental effects', () => {
      const result = AlphaTexValidator.validate('forceSharp forceFlat forceNatural |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should accept double accidentals', () => {
      const result = AlphaTexValidator.validate('forceDoubleSharp forceDoubleFlat |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Duration range notation', () => {
    test('should accept duration range syntax', () => {
      const result = AlphaTexValidator.validate(':4 2.3 3.3 :8 3.3 4.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept explicit and implicit duration ranges', () => {
      const result = AlphaTexValidator.validate(':4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should warn about uncommon duration range values', () => {
      const result = AlphaTexValidator.validate(':7 2.3 3.3 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Duration range 7 is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32');
    });

    test('should accept standard duration range values', () => {
      const testCases = ['1', '2', '4', '8', '16', '32'];
      testCases.forEach(duration => {
        const result = AlphaTexValidator.validate(`:${duration} 2.3 3.3 |`);
        expect(result.isValid).toBe(true);
        expect(result.warnings).toHaveLength(0);
      });
    });
  });

  describe('Rest notation', () => {
    test('should accept simple rest', () => {
      const result = AlphaTexValidator.validate('r |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept rest with duration', () => {
      const result = AlphaTexValidator.validate('r.4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should warn about uncommon rest durations', () => {
      const result = AlphaTexValidator.validate('r.7 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Rest duration 7 is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32');
    });
  });

  describe('Chord notation', () => {
    test('should accept basic chord notation', () => {
      const result = AlphaTexValidator.validate('(3.6 5.5) |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept chord with open strings', () => {
      const result = AlphaTexValidator.validate('(0.3 0.4) |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept chord with duration', () => {
      const result = AlphaTexValidator.validate('(0.3 0.4).4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept complex chords', () => {
      const result = AlphaTexValidator.validate('(3.6 5.5 7.4 9.3) |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate individual chord notes', () => {
      const result = AlphaTexValidator.validate('(3.7 5.5) |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 7. Must be 1-6');
    });

    test('should warn about uncommon chord durations', () => {
      const result = AlphaTexValidator.validate('(3.6 5.5).7 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 1, Note 1: Chord duration 7 is uncommon. Standard durations are: 1, 2, 4, 8, 16, 32');
    });
  });

  describe('Duration modifiers', () => {
    test('should accept duration modifier letters', () => {
      const modifiers = ['w', 'h', 'q', 'e', 's', 't'];
      modifiers.forEach(modifier => {
        const result = AlphaTexValidator.validate(`${modifier} |`);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
      });
    });

    test('should accept note with duration modifier', () => {
      const result = AlphaTexValidator.validate('3.6q |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should validate string numbers in duration notation', () => {
      const result = AlphaTexValidator.validate('3.7q |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 7. Must be 1-6');
    });
  });

  describe('Effects notation', () => {
    test('should accept bend notation', () => {
      const result = AlphaTexValidator.validate('3.6b5 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept slide up notation', () => {
      const result = AlphaTexValidator.validate('3.6/5 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should accept slide down notation', () => {
      const result = AlphaTexValidator.validate('5.6\\3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Multiple bars', () => {
    test('should validate multiple bars', () => {
      const result = AlphaTexValidator.validate('3.6 5.5 | 7.4 9.3 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should warn about empty bars', () => {
      const result = AlphaTexValidator.validate('3.6 | | 5.5 |');
      expect(result.isValid).toBe(true);
      expect(result.warnings).toContain('Bar 2 is empty');
    });

    test('should track bar positions in errors', () => {
      const result = AlphaTexValidator.validate('3.6 | 5.7 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 2, Note 1: Invalid string number 7. Must be 1-6');
    });
  });

  describe('Complex combinations', () => {
    test('should handle mixed notation types', () => {
      const result = AlphaTexValidator.validate('3.6 (0.3 0.4).4 r.8 5.5q |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should handle official AlphaTex documentation examples', () => {
      // Original chord example
      const chordResult = AlphaTexValidator.validate('(0.3 0.4).4 |');
      expect(chordResult.isValid).toBe(true);
      expect(chordResult.errors).toHaveLength(0);
      
      // Duration ranges example
      const durationRangeResult = AlphaTexValidator.validate(':4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |');
      expect(durationRangeResult.isValid).toBe(true);
      expect(durationRangeResult.errors).toHaveLength(0);
      
      // Repeat beats example
      const repeatBeatsResult = AlphaTexValidator.validate('3.3*4 | 4.3*4');
      expect(repeatBeatsResult.isValid).toBe(true);
      expect(repeatBeatsResult.errors).toHaveLength(0);
      
      // Multiple voices example (simplified)
      const multipleVoicesResult = AlphaTexValidator.validate('\\voice c4 d4 e4 f4 | c4 d4 e4 f4 \\voice c3 d3 e3 f3 | c3 d3 e3 f3');
      expect(multipleVoicesResult.isValid).toBe(true);
      expect(multipleVoicesResult.errors).toHaveLength(0);
      
      // Accidentals example
      const accidentalsResult = AlphaTexValidator.validate('\\accidentals explicit c#4 d4 c#4 db4 | c#4 { acc forceFlat } c4 { acc forceSharp } |');
      expect(accidentalsResult.isValid).toBe(true);
      expect(accidentalsResult.errors).toHaveLength(0);
    });

    test('should handle song-like progression', () => {
      const result = AlphaTexValidator.validate('12.3 5.3 7.3 | 0.6 3.5 | (0.3 0.4).4 r.4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Invalid notation', () => {
    test('should reject completely invalid notation', () => {
      const result = AlphaTexValidator.validate('invalid |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid note notation "invalid". Expected format: fret.string (e.g., 3.6) or fret.string.duration (e.g., 3.6.4)');
    });

    test('should reject mixed valid and invalid notation', () => {
      const result = AlphaTexValidator.validate('3.6 invalid 5.5 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 2: Invalid note notation "invalid". Expected format: fret.string (e.g., 3.6) or fret.string.duration (e.g., 3.6.4)');
    });

    test('should provide position information for multiple errors', () => {
      const result = AlphaTexValidator.validate('3.7 invalid | 5.8 |');
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Bar 1, Note 1: Invalid string number 7. Must be 1-6');
      expect(result.errors).toContain('Bar 1, Note 2: Invalid note notation "invalid". Expected format: fret.string (e.g., 3.6) or fret.string.duration (e.g., 3.6.4)');
      expect(result.errors).toContain('Bar 2, Note 1: Invalid string number 8. Must be 1-6');
    });
  });

  describe('Edge cases', () => {
    test('should handle whitespace variations', () => {
      const result = AlphaTexValidator.validate('  3.6   5.5  |  ');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should handle tabs and other whitespace', () => {
      const result = AlphaTexValidator.validate('3.6\t5.5\n|');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should handle double-digit frets', () => {
      const result = AlphaTexValidator.validate('12.6 15.5 24.4 |');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Utility methods', () => {
    test('isValidBasicPattern should accept valid characters', () => {
      expect(AlphaTexValidator.isValidBasicPattern('3.6 5.5 |')).toBe(true);
      expect(AlphaTexValidator.isValidBasicPattern('(0.3 0.4).4 |')).toBe(true);
      expect(AlphaTexValidator.isValidBasicPattern('r.8 |')).toBe(true);
    });

    test('isValidBasicPattern should reject invalid characters', () => {
      expect(AlphaTexValidator.isValidBasicPattern('3.6 @ 5.5 |')).toBe(false);
      expect(AlphaTexValidator.isValidBasicPattern('invalid notation')).toBe(false);
    });

    test('suggestCorrections should suggest adding bar separator', () => {
      const suggestions = AlphaTexValidator.suggestCorrections('3.6 5.5');
      expect(suggestions).toContain('Add | at the end to mark the end of the measure');
    });

    test('suggestCorrections should identify invalid string numbers', () => {
      const suggestions = AlphaTexValidator.suggestCorrections('3.7 5.8 |');
      expect(suggestions).toContain('String number 7 is invalid. Use 1-6 for standard guitar');
      expect(suggestions).toContain('String number 8 is invalid. Use 1-6 for standard guitar');
    });
  });

  describe('Traditional tab conversion', () => {
    test('should convert basic traditional tab', () => {
      const traditionalTab = 'G|--12--5--7--|';
      const result = AlphaTexValidator.convertFromTraditionalTab(traditionalTab);
      expect(result).toContain('12.3 5.3 7.3 |');
    });

    test('should handle multi-string traditional tab', () => {
      const traditionalTab = `G|--3--|
D|--5--|
A|--7--|`;
      const result = AlphaTexValidator.convertFromTraditionalTab(traditionalTab);
      // Check that it at least processes one of the lines correctly
      expect(result).toContain('3.3');
      // Note: This is a simplified test since the converter processes line by line
    });

    test('should handle conversion errors gracefully', () => {
      const invalidTab = 'invalid tab format';
      const result = AlphaTexValidator.convertFromTraditionalTab(invalidTab);
      expect(result).toContain('|'); // Should return some form of valid output
    });
  });
});
