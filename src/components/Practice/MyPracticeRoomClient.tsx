"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePracticeStore, type SongPracticeStatus, type PracticeSong } from '@/lib/practiceStore';
import { getDifficultyColor } from '@/utils/theme';

export default function MyPracticeRoomClient() {
  const {
    mounted,
    songs,
    stats,
    updateSongStatus,
    removeSong,
    updateSongBpm,
    logPracticeSession,
  } = usePracticeStore();

  const [filter, setFilter] = useState<'all' | SongPracticeStatus>('learning');
  const [logMinutes, setLogMinutes] = useState(20);
  const [logNotes, setLogNotes] = useState('');
  const [showLogModal, setShowLogModal] = useState(false);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  if (!mounted) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p className="mt-4 text-sm text-slate-500">Opening your practice room...</p>
      </div>
    );
  }

  const learningSongs = songs.filter(s => s.status === 'learning');
  const queueSongs = songs.filter(s => s.status === 'queue');
  const masteredSongs = songs.filter(s => s.status === 'mastered');

  const filteredSongs =
    filter === 'all' ? songs : songs.filter(s => s.status === filter);

  const handleQuickLog = (minutes: number) => {
    logPracticeSession(minutes, undefined, undefined, 'Free Practice Session');
    setSuccessBanner(`🔥 Awesome work! Logged +${minutes} minutes. Current Streak: ${stats.currentStreak} days.`);
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleCustomLog = (e: React.FormEvent) => {
    e.preventDefault();
    logPracticeSession(logMinutes, undefined, undefined, logNotes || 'Rehearsal session');
    setShowLogModal(false);
    setLogNotes('');
    setSuccessBanner(`🔥 Logged +${logMinutes} minutes practice!`);
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  return (
    <div className="space-y-10">
      {/* Toast banner */}
      {successBanner && (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-bold text-sm text-center shadow-lg animate-fadeIn">
          {successBanner}
        </div>
      )}

      {/* Rehearsal Stats Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-amber-500/30 dark:border-amber-500/20 shadow-md">
          <div className="flex items-center justify-between text-amber-500 mb-2">
            <span className="text-xs uppercase font-black tracking-wider">Practice Streak</span>
            <span className="text-xl">🔥</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {stats.currentStreak} <span className="text-sm font-semibold text-slate-500">days</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Best streak: {stats.longestStreak} days
          </p>
        </div>

        {/* Total Time */}
        <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-blue-500/30 dark:border-blue-500/20 shadow-md">
          <div className="flex items-center justify-between text-blue-500 mb-2">
            <span className="text-xs uppercase font-black tracking-wider">Total Time</span>
            <span className="text-xl">⏱️</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {stats.totalMinutes >= 60
              ? `${(stats.totalMinutes / 60).toFixed(1)}h`
              : `${stats.totalMinutes}m`}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Across {stats.sessionsCount} tracked sessions
          </p>
        </div>

        {/* Songs in Training */}
        <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-indigo-500/30 dark:border-indigo-500/20 shadow-md">
          <div className="flex items-center justify-between text-indigo-500 mb-2">
            <span className="text-xs uppercase font-black tracking-wider">Active Songs</span>
            <span className="text-xl">🎸</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {learningSongs.length}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            {queueSongs.length} in queue waiting
          </p>
        </div>

        {/* Mastered */}
        <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-emerald-500/30 dark:border-emerald-500/20 shadow-md">
          <div className="flex items-center justify-between text-emerald-500 mb-2">
            <span className="text-xs uppercase font-black tracking-wider">Mastered</span>
            <span className="text-xl">🏆</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {masteredSongs.length}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Performance ready repertoire
          </p>
        </div>
      </section>

      {/* Quick Session Logger Bar */}
      <section className="bg-slate-100/80 dark:bg-slate-900/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>⚡ Quick Session Log</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Finished practicing? Click to add time & protect your streak:
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleQuickLog(15)}
            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
          >
            +15 Mins
          </button>
          <button
            type="button"
            onClick={() => handleQuickLog(30)}
            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
          >
            +30 Mins
          </button>
          <button
            type="button"
            onClick={() => handleQuickLog(45)}
            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
          >
            +45 Mins
          </button>
          <button
            type="button"
            onClick={() => setShowLogModal(true)}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
          >
            Custom Entry...
          </button>
        </div>
      </section>

      {/* Repertoire Section */}
      <section className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              My Song Repertoire
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Manage songs you are studying, set tempo goals, and track mastery.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold">
            <button
              onClick={() => setFilter('learning')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'learning'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Active ({learningSongs.length})
            </button>
            <button
              onClick={() => setFilter('queue')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'queue'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Queue ({queueSongs.length})
            </button>
            <button
              onClick={() => setFilter('mastered')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Mastered ({masteredSongs.length})
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({songs.length})
            </button>
          </div>
        </div>

        {/* Songs List */}
        {filteredSongs.length === 0 ? (
          <div className="py-14 text-center max-w-md mx-auto">
            <div className="text-4xl mb-3">🎵</div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              No songs in this list yet
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Explore our catalogue of 150+ note-verified guitar breakdowns and click &quot;Add to Practice Room&quot; to begin building your custom repertoire.
            </p>
            <Link
              href="/lessons/songs/song-analysis"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Explore Song Analyses</span>
              <span>→</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSongs.map((song) => (
              <SongPracticeCard
                key={song.slug}
                song={song}
                onStatusChange={(status) => updateSongStatus(song.slug, status)}
                onRemove={() => removeSong(song.slug)}
                onUpdateBpm={(bpm) => updateSongBpm(song.slug, bpm)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Practice Accelerators Row */}
      <section>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span>🛠️</span>
          <span>Interactive Practice Tools</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/lessons/practice/circle-of-fifths"
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-2xl mb-2 block">⭕</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              Circle of Fifths
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Harmonic key visualizer & modal chord progressions.
            </p>
          </Link>

          <Link
            href="/lessons/practice/caged-system"
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-2xl mb-2 block">📐</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
              CAGED Visualizer
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Fretboard navigation across the 5 fundamental chord shapes.
            </p>
          </Link>

          <Link
            href="/lessons/practice/fretboard-trainer"
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-2xl mb-2 block">🎯</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
              Fretboard Trainer
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Rapid note recognition drill across all 6 strings.
            </p>
          </Link>

          <Link
            href="/lessons/practice/ear-trainer"
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-md"
          >
            <span className="text-2xl mb-2 block">👂</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
              Ear Trainer
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Harmonic interval and chord quality audio training.
            </p>
          </Link>
        </div>
      </section>

      {/* Custom Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-sm w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Log Custom Practice Session
            </h3>

            <form onSubmit={handleCustomLog} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Duration (Minutes)
                </label>
                <input
                  type="number"
                  min="1"
                  max="480"
                  value={logMinutes}
                  onChange={(e) => setLogMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Session Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={logNotes}
                  onChange={(e) => setLogNotes(e.target.value)}
                  placeholder="e.g. Worked on the intro riff at 80% BPM..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                >
                  Save Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function SongPracticeCard({
  song,
  onStatusChange,
  onRemove,
  onUpdateBpm,
}: {
  song: PracticeSong;
  onStatusChange: (status: SongPracticeStatus) => void;
  onRemove: () => void;
  onUpdateBpm: (bpm: number) => void;
}) {
  const [editingBpm, setEditingBpm] = useState(false);
  const [bpmInput, setBpmInput] = useState(song.currentBpm || '');

  const handleSaveBpm = () => {
    const num = Number(bpmInput);
    if (!isNaN(num) && num > 0) {
      onUpdateBpm(num);
    }
    setEditingBpm(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700">
      <div>
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getDifficultyColor(song.difficulty)}`}>
            {song.difficulty}
          </span>

          <select
            value={song.status}
            onChange={(e) => onStatusChange(e.target.value as SongPracticeStatus)}
            className="text-[11px] font-bold py-1 px-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
          >
            <option value="learning">🎸 Learning</option>
            <option value="queue">📋 In Queue</option>
            <option value="mastered">🏆 Mastered</option>
          </select>
        </div>

        {/* Title & Artist */}
        <Link
          href={`/lessons/songs/song-analysis/${song.slug}`}
          className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-amber-400 transition-colors line-clamp-1"
        >
          {song.title}
        </Link>
        <p className="text-xs text-slate-500 font-medium mb-3">
          {song.artist}
        </p>

        {/* Key & Tempo */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] mb-3">
          <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-400">
            Key: <strong className="text-amber-600 dark:text-amber-400">{song.key}</strong>
          </span>
          {song.tempo && (
            <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-400">
              Tempo: <strong>{song.tempo}</strong>
            </span>
          )}
        </div>

        {/* Current BPM Progress */}
        <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 mb-3 flex items-center justify-between text-xs">
          <span className="text-slate-500 text-[11px]">Current Speed:</span>
          {editingBpm ? (
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                value={bpmInput}
                onChange={(e) => setBpmInput(e.target.value)}
                placeholder="BPM"
                className="w-16 px-1.5 py-0.5 text-xs font-mono rounded border border-blue-500 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
                autoFocus
              />
              <button
                type="button"
                onClick={handleSaveBpm}
                className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setEditingBpm(true)}
              className="font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>{song.currentBpm ? `${song.currentBpm} BPM` : 'Set BPM target'}</span>
              <span className="text-[10px]">✏️</span>
            </button>
          )}
        </div>
      </div>

      {/* Footer link to analysis */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
        <button
          type="button"
          onClick={onRemove}
          className="text-slate-400 hover:text-rose-500 transition-colors text-[11px]"
          title="Remove from practice room"
        >
          Remove
        </button>

        <Link
          href={`/lessons/songs/song-analysis/${song.slug}`}
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1"
        >
          <span>Open Analysis</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

