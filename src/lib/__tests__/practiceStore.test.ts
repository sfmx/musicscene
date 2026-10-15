import { describe, it, expect, beforeEach, vi } from 'vitest';
import { practiceStore } from '../practiceStore';

// In-memory mock for localStorage
const createLocalStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
};

describe('practiceStore', () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>;

  beforeEach(() => {
    localStorageMock = createLocalStorageMock();
    vi.stubGlobal('localStorage', localStorageMock);
    vi.stubGlobal('window', {
      dispatchEvent: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
  });

  it('saves and retrieves songs without duplicates', () => {
    const song = {
      slug: 'ac-dc-back-in-black',
      title: 'Back In Black',
      artist: 'AC/DC',
      difficulty: 'Intermediate',
      key: 'E Minor',
    };

    expect(practiceStore.isSongSaved(song.slug)).toBe(false);

    practiceStore.saveSong(song);
    expect(practiceStore.isSongSaved(song.slug)).toBe(true);

    const saved = practiceStore.getSong(song.slug);
    expect(saved).toBeDefined();
    expect(saved?.title).toBe('Back In Black');
    expect(saved?.status).toBe('learning');

    // Attempt duplicate save
    practiceStore.saveSong(song);
    expect(practiceStore.getSongs().length).toBe(1);
  });

  it('toggles song save status', () => {
    const song = {
      slug: 'eagles-hotel-california',
      title: 'Hotel California',
      artist: 'Eagles',
      difficulty: 'Intermediate',
      key: 'B Minor',
    };

    const saved = practiceStore.toggleSaveSong(song);
    expect(saved).toBe(true);
    expect(practiceStore.isSongSaved(song.slug)).toBe(true);

    const removed = practiceStore.toggleSaveSong(song);
    expect(removed).toBe(false);
    expect(practiceStore.isSongSaved(song.slug)).toBe(false);
  });

  it('updates song status and BPM target', () => {
    const song = {
      slug: 'metallica-enter-sandman',
      title: 'Enter Sandman',
      artist: 'Metallica',
      difficulty: 'Intermediate',
      key: 'E Minor',
    };

    practiceStore.saveSong(song);
    practiceStore.updateSongStatus(song.slug, 'mastered');
    expect(practiceStore.getSong(song.slug)?.status).toBe('mastered');

    practiceStore.updateSongBpm(song.slug, 110, 124);
    const updated = practiceStore.getSong(song.slug);
    expect(updated?.currentBpm).toBe(110);
    expect(updated?.targetBpm).toBe(124);
  });

  it('tracks checklist progress per song', () => {
    const slug = 'pink-floyd-wish-you-were-here';

    expect(practiceStore.getChecklist(slug)[0]).toBeFalsy();

    const checked = practiceStore.toggleChecklistItem(slug, 0);
    expect(checked).toBe(true);
    expect(practiceStore.getChecklist(slug)[0]).toBe(true);

    const unchecked = practiceStore.toggleChecklistItem(slug, 0);
    expect(unchecked).toBe(false);
    expect(practiceStore.getChecklist(slug)[0]).toBe(false);
  });

  it('logs practice sessions and updates streak', () => {
    practiceStore.logPracticeSession(25, 'ac-dc-back-in-black', 'Back In Black', 'Intro solo');

    const stats = practiceStore.getStats();
    expect(stats.currentStreak).toBe(1);
    expect(stats.totalMinutes).toBe(25);
    expect(stats.sessionsCount).toBe(1);

    const logs = practiceStore.getLogs();
    expect(logs.length).toBe(1);
    expect(logs[0].durationMinutes).toBe(25);
    expect(logs[0].songSlug).toBe('ac-dc-back-in-black');
  });
});

