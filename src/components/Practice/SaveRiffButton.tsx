"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePracticeStore } from '@/lib/practiceStore';

interface SaveRiffButtonProps {
  songSlug: string;
  songTitle: string;
  artist: string;
  difficulty: string;
  key: string;
  tempo?: string;
  riffName: string;
}

export default function SaveRiffButton({
  songSlug,
  songTitle,
  artist,
  difficulty,
  key,
  tempo,
  riffName,
}: SaveRiffButtonProps) {
  const { mounted, songs, saveSong, updateSongNotes } = usePracticeStore();
  const [justSaved, setJustSaved] = useState(false);

  const existingSong = mounted ? songs.find(s => s.slug === songSlug) : undefined;
  const isSavedWithRiff = existingSong && existingSong.notes?.includes(riffName);

  const handleSaveRiff = () => {
    const parsedBpm = tempo ? parseInt(tempo, 10) : undefined;
    const noteText = `Focus riff: ${riffName}`;

    if (!existingSong) {
      saveSong({
        slug: songSlug,
        title: songTitle,
        artist,
        difficulty,
        key,
        tempo,
        targetBpm: parsedBpm,
        notes: noteText,
      });
    } else {
      const currentNotes = existingSong.notes ? existingSong.notes + ` • ${riffName}` : noteText;
      updateSongNotes(songSlug, currentNotes);
    }

    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 3000);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleSaveRiff}
        className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 border shadow-xs ${
          isSavedWithRiff || justSaved
            ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30'
            : 'bg-slate-100 hover:bg-amber-500/10 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
        }`}
        title={`Save "${riffName}" to your Practice Room dashboard`}
      >
        <span>{isSavedWithRiff || justSaved ? '★' : '☆'}</span>
        <span>{justSaved ? 'Saved to Practice Room!' : isSavedWithRiff ? 'In Practice Room' : 'Practice This Riff'}</span>
      </button>

      {justSaved && (
        <div className="absolute right-0 top-full mt-1.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-[11px] whitespace-nowrap shadow-xl border border-slate-700 z-20 flex items-center gap-2 animate-fade-in">
          <span>Added to your routine!</span>
          <Link
            href="/lessons/practice/my-practice"
            className="text-amber-400 font-bold hover:underline"
          >
            Open Room →
          </Link>
        </div>
      )}
    </div>
  );
}
