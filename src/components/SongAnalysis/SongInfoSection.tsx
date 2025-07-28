import React from 'react';
import { SongData } from '@/lib/songData';

interface SongInfoSectionProps {
  songData: SongData;
  displayName: string;
  getDifficultyColor: (difficulty: string) => string;
}

export default function SongInfoSection({ songData, displayName, getDifficultyColor }: SongInfoSectionProps) {
  return (
    <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{displayName}</h1>
          <div className="space-y-2 text-gray-700">
            <p><strong>Artist:</strong> {songData.songInfo.artist}</p>
            <p><strong>Album:</strong> {songData.songInfo.album}</p>
            <p><strong>Released:</strong> {songData.songInfo.released}</p>
            <p><strong>Genre:</strong> {songData.songInfo.genre}</p>
            <p><strong>Tempo:</strong> {songData.songInfo.tempo}</p>
            <p><strong>Duration:</strong> {songData.songInfo.duration}</p>
            <p><strong>Key:</strong> {songData.songInfo.key}</p>
            {songData.songInfo.tuning && (
              <p><strong>Tuning:</strong> {songData.songInfo.tuning}</p>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Overall Difficulty:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(songData.difficulty.overall)}`}>
                {songData.difficulty.overall}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Rhythm Guitar:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(songData.difficulty.rhythmGuitar)}`}>
                {songData.difficulty.rhythmGuitar}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Lead Guitar:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(songData.difficulty.leadGuitar)}`}>
                {songData.difficulty.leadGuitar}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Bass:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(songData.difficulty.bass)}`}>
                {songData.difficulty.bass}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
