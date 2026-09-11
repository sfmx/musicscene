"use client";

import React from "react";
import TheoryContextBadges from './TheoryContextBadges';

interface ConsolidatedMusicalAnalysisProps {
  songData: any;
}

const ConsolidatedMusicalAnalysis: React.FC<ConsolidatedMusicalAnalysisProps> = ({
  songData
}) => {
  const keyAndScale = songData.musicalAnalysis?.keyAndScale;

  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-100/70 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-500/20">
          Harmonic Blueprint
        </span>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Musical Analysis</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Key & Tonality */}
        <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
            <span>🎹</span> Key & Tonality
          </h3>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Primary Key:</span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-300 text-sm">{keyAndScale?.primaryKey}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Mode:</span>
              <span className="font-mono font-medium text-cyan-600 dark:text-cyan-300">{keyAndScale?.modalCharacter}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Relative Minor:</span>
              <span className="font-mono font-medium text-slate-700 dark:text-slate-200">{keyAndScale?.relativeMinor}</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-slate-500 dark:text-slate-400">Key Signature:</span>
              <span className="font-mono font-medium text-slate-700 dark:text-slate-200">{keyAndScale?.keySignature}</span>
            </div>
          </div>
        </div>

        {/* Song Structure */}
        <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
            <span>⏱️</span> Song Structure
          </h3>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Tempo:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">{songData.songInfo?.tempo}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Duration:</span>
              <span className="font-mono font-medium text-slate-700 dark:text-slate-200">{songData.songInfo?.duration}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200 dark:border-slate-800/80">
              <span className="text-slate-500 dark:text-slate-400">Tuning:</span>
              <span className="font-mono font-bold text-cyan-600 dark:text-cyan-300 text-xs">{songData.songInfo?.tuning}</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="text-slate-500 dark:text-slate-400">Genre:</span>
              <span className="font-medium text-slate-700 dark:text-slate-200">{songData.songInfo?.genre}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theory Explanation Box */}
      <div className="mt-6 bg-amber-50/60 dark:bg-slate-950 p-5 rounded-xl border border-amber-200 dark:border-amber-500/30">
        <h4 className="font-bold text-amber-850 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
          <span>💡</span> Understanding {keyAndScale?.primaryKey}:
        </h4>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          {getKeyExplanation(keyAndScale?.primaryKey, keyAndScale?.modalCharacter)}
        </p>
        <div className="bg-amber-100/60 dark:bg-slate-900 p-3 rounded-lg border border-amber-200/80 dark:border-slate-800 text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
          <strong className="text-amber-800 dark:text-amber-400">Pro Tip:</strong> {getProTip(keyAndScale?.primaryKey, songData.songInfo?.genre)}
        </div>
      </div>

      {/* Reciprocal Theory Guides Badges */}
      <TheoryContextBadges
        primaryKey={keyAndScale?.primaryKey}
        modalCharacter={keyAndScale?.modalCharacter}
        scalesUsed={keyAndScale?.scalesUsed}
      />
    </div>
  );
};

// Educational helper functions
function getKeyExplanation(key: string, mode: string): string {
  if (!key) return "";

  const isMajor = key?.toLowerCase().includes('major');

  if (isMajor) {
    return `${key} has a bright, uplifting character typical of major keys. The ${mode || 'Ionian'} mode gives it a stable, resolved feeling. This key works well for anthemic rock songs and creates a powerful, confident mood.`;
  } else {
    return `${key} has a darker, more introspective character. The ${mode || 'Aeolian'} mode creates tension and emotion. This key is perfect for expressing melancholy or aggressive themes in rock music.`;
  }
}

function getProTip(key: string, genre: string): string {
  const keyRoot = key?.split(' ')[0];

  if (keyRoot === 'E' || keyRoot === 'A') {
    return "These keys utilize open strings on guitar, making them ideal for powerful, ringing chords. The open strings add natural sustain and harmonic richness.";
  }
  if (genre?.toLowerCase().includes('rock') || genre?.toLowerCase().includes('metal')) {
    return "Power chords (5ths) work exceptionally well in this key for rock/metal, as they avoid the major/minor quality and focus on raw power.";
  }
  return "Practice the scales and chord progressions in this key to internalize its unique character and improve your improvisation.";
}

export default ConsolidatedMusicalAnalysis;