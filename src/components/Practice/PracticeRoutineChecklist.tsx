"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useSongChecklist, usePracticeStore } from '@/lib/practiceStore';

interface PracticeRoutineChecklistProps {
  songSlug: string;
  songTitle: string;
  routines: string[];
}

export default function PracticeRoutineChecklist({
  songSlug,
  songTitle,
  routines,
}: PracticeRoutineChecklistProps) {
  const { mounted, checkedMap, toggle } = useSongChecklist(songSlug);
  const { stats, logPracticeSession } = usePracticeStore();
  const [loggedNotification, setLoggedNotification] = useState<string | null>(null);

  if (!routines || routines.length === 0) return null;

  const totalSteps = routines.length;
  const completedCount = mounted
    ? routines.filter((_, idx) => !!checkedMap[idx]).length
    : 0;
  const percent = Math.round((completedCount / totalSteps) * 100);

  const handleLogPractice = (minutes: number = 15) => {
    logPracticeSession(minutes, songSlug, songTitle, `Completed ${completedCount}/${totalSteps} routine steps`);
    setLoggedNotification(`Logged +${minutes}m practice! Streak: 🔥 ${stats.currentStreak || 1} days`);
    setTimeout(() => setLoggedNotification(null), 4000);
  };

  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-blue-500/40 dark:border-blue-500/30 shadow-xl transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className="text-base font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
          <span>⏱️</span>
          <span>Targeted Practice Routine</span>
        </h3>
        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {completedCount}/{totalSteps} Completed ({percent}%)
        </span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
        Check off each segment during your session to track your practice progress:
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Checklist items */}
      <ul className="space-y-2 mb-5">
        {routines.map((routine, index) => {
          const isDone = mounted && !!checkedMap[index];
          return (
            <li
              key={index}
              onClick={() => toggle(index)}
              className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-all select-none ${
                isDone
                  ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-300 dark:border-blue-900/60 text-slate-500 dark:text-slate-400 line-through'
                  : 'bg-slate-50/60 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-700 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => {}} // Handled by li click
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer pointer-events-none"
              />
              <span className="flex-1 leading-relaxed">{routine}</span>
            </li>
          );
        })}
      </ul>

      {/* Action Footer: Log Session & View Room */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <button
          type="button"
          onClick={() => handleLogPractice(15)}
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold transition-all shadow-sm flex items-center gap-1.5"
        >
          <span>🔥 Log 15m Practice</span>
        </button>

        <Link
          href="/lessons/practice/my-practice"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
        >
          <span>Open My Practice Room</span>
          <span>→</span>
        </Link>
      </div>

      {/* Logged feedback message */}
      {loggedNotification && (
        <div className="mt-3 p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs text-center font-bold animate-fadeIn">
          {loggedNotification}
        </div>
      )}
    </div>
  );
}

