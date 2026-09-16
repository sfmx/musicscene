import { getDifficultyColor, getDifficultyBarColor, removeConsecutiveDuplicates, cn } from '../utils';

describe('src/lib/utils', () => {
  describe('getDifficultyColor', () => {
    it('returns emerald styling for beginner', () => {
      expect(getDifficultyColor('Beginner')).toContain('bg-emerald-500/10');
      expect(getDifficultyColor('beginner')).toContain('bg-emerald-500/10');
    });

    it('returns amber styling for intermediate', () => {
      expect(getDifficultyColor('Intermediate')).toContain('bg-amber-500/10');
      expect(getDifficultyColor('intermediate')).toContain('bg-amber-500/10');
    });

    it('returns rose styling for advanced', () => {
      expect(getDifficultyColor('Advanced')).toContain('bg-rose-500/10');
      expect(getDifficultyColor('advanced')).toContain('bg-rose-500/10');
    });

    it('returns purple styling for expert', () => {
      expect(getDifficultyColor('Expert')).toContain('bg-purple-500/10');
      expect(getDifficultyColor('expert')).toContain('bg-purple-500/10');
    });

    it('returns default slate styling for unknown or empty input', () => {
      expect(getDifficultyColor('')).toContain('bg-slate-100');
      expect(getDifficultyColor('UnknownLevel')).toContain('bg-slate-100');
    });
  });

  describe('getDifficultyBarColor', () => {
    it('returns solid color classes for each difficulty', () => {
      expect(getDifficultyBarColor('Beginner')).toBe('bg-emerald-500');
      expect(getDifficultyBarColor('Intermediate')).toBe('bg-amber-500');
      expect(getDifficultyBarColor('Advanced')).toBe('bg-rose-500');
      expect(getDifficultyBarColor('Expert')).toBe('bg-purple-500');
      expect(getDifficultyBarColor('other')).toBe('bg-slate-400');
    });
  });

  describe('removeConsecutiveDuplicates', () => {
    it('returns empty array when input is empty or null', () => {
      expect(removeConsecutiveDuplicates([])).toEqual([]);
      expect(removeConsecutiveDuplicates(null as any)).toEqual([]);
    });

    it('returns same array when no consecutive duplicates exist', () => {
      expect(removeConsecutiveDuplicates(['C', 'G', 'Am', 'F'])).toEqual(['C', 'G', 'Am', 'F']);
    });

    it('removes adjacent consecutive duplicates while keeping non-consecutive duplicates', () => {
      expect(removeConsecutiveDuplicates(['C', 'C', 'G', 'G', 'C'])).toEqual(['C', 'G', 'C']);
    });

    it('handles whitespace differences correctly', () => {
      expect(removeConsecutiveDuplicates(['C', ' C ', 'G'])).toEqual(['C', 'G']);
    });
  });

  describe('cn', () => {
    it('merges class names and filters falsy values', () => {
      expect(cn('btn', false && 'btn-active', null, undefined, 'btn-primary')).toBe('btn btn-primary');
    });
  });
});

