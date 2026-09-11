import React from 'react';
import { SongData } from '@/lib/songData';
import { getDifficultyColor } from '@/utils/theme';

interface SongInfoSectionProps {
  songData: SongData;
  displayName: string;
}

export default function SongInfoSection({ songData, displayName }: SongInfoSectionProps) {
  const { songInfo, difficulty } = songData;

  return (
    <section className="mb-10 bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 8 Cols: Song Overview & Musical Tags */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <span>🎸 Note-for-Note Guitar Analysis</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            {displayName}
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-6">
            by {songInfo.artist}
          </h2>

          {/* Key Facts Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Album</span>
              <strong className="text-slate-900 dark:text-white font-medium line-clamp-1">{songInfo.album || 'Single'}</strong>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Released</span>
              <strong className="text-slate-900 dark:text-white font-medium">{songInfo.released}</strong>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Genre</span>
              <strong className="text-slate-900 dark:text-white font-medium line-clamp-1">{songInfo.genre}</strong>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Key</span>
              <strong className="text-amber-600 dark:text-amber-300 font-bold">{songInfo.key}</strong>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Tempo</span>
              <strong className="text-slate-900 dark:text-white font-mono">{songInfo.tempo}</strong>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Tuning</span>
              <strong className="text-cyan-700 dark:text-cyan-300 font-mono text-[11px] line-clamp-1">{songInfo.tuning}</strong>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Difficulty Matrix */}
        <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Difficulty Profile
            </h3>
            <span className="text-[10px] text-slate-500">Skill Level</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-xs">
              <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold mb-1.5">Overall</p>
              <span className={`px-2.5 py-1 rounded-full text-xs border ${getDifficultyColor(difficulty?.overall || 'Intermediate')}`}>
                {difficulty?.overall || 'Intermediate'}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-xs">
              <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold mb-1.5">Rhythm</p>
              <span className={`px-2.5 py-1 rounded-full text-xs border ${getDifficultyColor(difficulty?.rhythmGuitar || 'Intermediate')}`}>
                {difficulty?.rhythmGuitar || 'Intermediate'}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-xs">
              <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold mb-1.5">Lead</p>
              <span className={`px-2.5 py-1 rounded-full text-xs border ${getDifficultyColor(difficulty?.leadGuitar || 'Intermediate')}`}>
                {difficulty?.leadGuitar || 'Intermediate'}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-xs">
              <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold mb-1.5">Bass</p>
              <span className={`px-2.5 py-1 rounded-full text-xs border ${getDifficultyColor(difficulty?.bass || 'Intermediate')}`}>
                {difficulty?.bass || 'Intermediate'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
