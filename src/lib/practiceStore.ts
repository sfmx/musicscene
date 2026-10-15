"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';

export type SongPracticeStatus = 'queue' | 'learning' | 'mastered';

export interface PracticeSong {
  slug: string;
  title: string;
  artist: string;
  difficulty: string;
  key: string;
  tempo?: string;
  dateAdded: string; // ISO string
  status: SongPracticeStatus;
  currentBpm?: number;
  targetBpm?: number;
  notes?: string;
}

export interface PracticeSessionLog {
  id: string;
  date: string; // YYYY-MM-DD
  timestamp: string; // ISO
  songSlug?: string;
  songTitle?: string;
  durationMinutes: number;
  notes?: string;
}

export interface PracticeStats {
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: string | null; // YYYY-MM-DD
  totalMinutes: number;
  sessionsCount: number;
}

const STORAGE_KEYS = {
  SONGS: 'musicscene_practice_songs_v1',
  CHECKLISTS: 'musicscene_practice_checklists_v1',
  LOGS: 'musicscene_practice_logs_v1',
  STATS: 'musicscene_practice_stats_v1',
};

const UPDATE_EVENT = 'musicscene_practice_state_changed';

function emitUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
  }
}

// Helper to safely read from localStorage
function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

// Helper to safely write to localStorage
function writeStorage<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
    emitUpdate();
  } catch (err) {
    console.warn(`Failed to write to localStorage for key: ${key}`, err);
  }
}

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Pure store accessors
export const practiceStore = {
  getSongs(): PracticeSong[] {
    return readStorage<PracticeSong[]>(STORAGE_KEYS.SONGS, []);
  },

  isSongSaved(slug: string): boolean {
    const songs = this.getSongs();
    return songs.some(s => s.slug === slug);
  },

  getSong(slug: string): PracticeSong | undefined {
    return this.getSongs().find(s => s.slug === slug);
  },

  saveSong(song: {
    slug: string;
    title: string;
    artist: string;
    difficulty: string;
    key: string;
    tempo?: string;
    targetBpm?: number;
  }): void {
    const songs = this.getSongs();
    const existingIndex = songs.findIndex(s => s.slug === song.slug);
    if (existingIndex >= 0) {
      return; // Already saved
    }

    const newSong: PracticeSong = {
      ...song,
      dateAdded: new Date().toISOString(),
      status: 'learning',
    };
    writeStorage(STORAGE_KEYS.SONGS, [newSong, ...songs]);
  },

  removeSong(slug: string): void {
    const songs = this.getSongs().filter(s => s.slug !== slug);
    writeStorage(STORAGE_KEYS.SONGS, songs);
  },

  toggleSaveSong(song: {
    slug: string;
    title: string;
    artist: string;
    difficulty: string;
    key: string;
    tempo?: string;
  }): boolean {
    if (this.isSongSaved(song.slug)) {
      this.removeSong(song.slug);
      return false;
    } else {
      this.saveSong(song);
      return true;
    }
  },

  updateSongStatus(slug: string, status: SongPracticeStatus): void {
    const songs = this.getSongs().map(s => {
      if (s.slug === slug) {
        return { ...s, status };
      }
      return s;
    });
    writeStorage(STORAGE_KEYS.SONGS, songs);
  },

  updateSongNotes(slug: string, notes: string): void {
    const songs = this.getSongs().map(s => {
      if (s.slug === slug) {
        return { ...s, notes };
      }
      return s;
    });
    writeStorage(STORAGE_KEYS.SONGS, songs);
  },

  updateSongBpm(slug: string, currentBpm?: number, targetBpm?: number): void {
    const songs = this.getSongs().map(s => {
      if (s.slug === slug) {
        return {
          ...s,
          ...(currentBpm !== undefined ? { currentBpm } : {}),
          ...(targetBpm !== undefined ? { targetBpm } : {}),
        };
      }
      return s;
    });
    writeStorage(STORAGE_KEYS.SONGS, songs);
  },

  // Checklists (Routine steps checked off per song)
  getChecklist(slug: string): Record<number, boolean> {
    const all = readStorage<Record<string, Record<number, boolean>>>(STORAGE_KEYS.CHECKLISTS, {});
    return all[slug] || {};
  },

  toggleChecklistItem(slug: string, stepIndex: number): boolean {
    const all = readStorage<Record<string, Record<number, boolean>>>(STORAGE_KEYS.CHECKLISTS, {});
    const songMap = { ...(all[slug] || {}) };
    const current = !!songMap[stepIndex];
    songMap[stepIndex] = !current;
    all[slug] = songMap;
    writeStorage(STORAGE_KEYS.CHECKLISTS, all);
    return !current;
  },

  // Practice session logging & streaks
  getLogs(): PracticeSessionLog[] {
    return readStorage<PracticeSessionLog[]>(STORAGE_KEYS.LOGS, []);
  },

  getStats(): PracticeStats {
    return readStorage<PracticeStats>(STORAGE_KEYS.STATS, {
      currentStreak: 0,
      longestStreak: 0,
      lastPracticeDate: null,
      totalMinutes: 0,
      sessionsCount: 0,
    });
  },

  logPracticeSession(
    minutes: number,
    songSlug?: string,
    songTitle?: string,
    notes?: string
  ): void {
    const today = getTodayString();
    const logs = this.getLogs();
    const stats = this.getStats();

    const newLog: PracticeSessionLog = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      date: today,
      timestamp: new Date().toISOString(),
      songSlug,
      songTitle,
      durationMinutes: minutes,
      notes,
    };

    // Calculate streak
    let newStreak = stats.currentStreak;
    if (!stats.lastPracticeDate) {
      newStreak = 1;
    } else if (stats.lastPracticeDate === today) {
      // Already practiced today, streak remains same
    } else {
      const last = new Date(stats.lastPracticeDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    const newStats: PracticeStats = {
      currentStreak: newStreak,
      longestStreak: Math.max(stats.longestStreak, newStreak),
      lastPracticeDate: today,
      totalMinutes: stats.totalMinutes + minutes,
      sessionsCount: stats.sessionsCount + 1,
    };

    writeStorage(STORAGE_KEYS.LOGS, [newLog, ...logs]);
    writeStorage(STORAGE_KEYS.STATS, newStats);
  },
};

// React hook for components needing reactive practice state
export function usePracticeStore() {
  const [mounted, setMounted] = useState(false);
  const [songs, setSongs] = useState<PracticeSong[]>([]);
  const [stats, setStats] = useState<PracticeStats>({
    currentStreak: 0,
    longestStreak: 0,
    lastPracticeDate: null,
    totalMinutes: 0,
    sessionsCount: 0,
  });

  const refresh = useCallback(() => {
    setSongs(practiceStore.getSongs());
    setStats(practiceStore.getStats());
  }, []);

  useEffect(() => {
    setMounted(true);
    refresh();

    const handleCustom = () => refresh();
    const handleStorage = (e: StorageEvent) => {
      if (e.key && Object.values(STORAGE_KEYS).includes(e.key)) {
        refresh();
      }
    };

    window.addEventListener(UPDATE_EVENT, handleCustom);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(UPDATE_EVENT, handleCustom);
      window.removeEventListener('storage', handleStorage);
    };
  }, [refresh]);

  return {
    mounted,
    songs,
    stats,
    isSaved: useCallback((slug: string) => (mounted ? songs.some(s => s.slug === slug) : false), [mounted, songs]),
    toggleSaveSong: practiceStore.toggleSaveSong.bind(practiceStore),
    updateSongStatus: practiceStore.updateSongStatus.bind(practiceStore),
    removeSong: practiceStore.removeSong.bind(practiceStore),
    updateSongNotes: practiceStore.updateSongNotes.bind(practiceStore),
    updateSongBpm: practiceStore.updateSongBpm.bind(practiceStore),
    logPracticeSession: practiceStore.logPracticeSession.bind(practiceStore),
  };
}

// Hook for checklist of a specific song
export function useSongChecklist(songSlug: string) {
  const [mounted, setMounted] = useState(false);
  const [checkedMap, setCheckedMap] = useState<Record<number, boolean>>({});

  const refresh = useCallback(() => {
    setCheckedMap(practiceStore.getChecklist(songSlug));
  }, [songSlug]);

  useEffect(() => {
    setMounted(true);
    refresh();

    const handleCustom = () => refresh();
    window.addEventListener(UPDATE_EVENT, handleCustom);
    return () => window.removeEventListener(UPDATE_EVENT, handleCustom);
  }, [refresh]);

  const toggle = useCallback((stepIndex: number) => {
    return practiceStore.toggleChecklistItem(songSlug, stepIndex);
  }, [songSlug]);

  return {
    mounted,
    checkedMap,
    toggle,
  };
}

