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
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{displayName}</h1>
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">by {songData.songInfo.artist}</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Album:</strong> {songData.songInfo.album}</p>
            <p><strong>Released:</strong> {songData.songInfo.released}</p>
            <p><strong>Genre:</strong> {songData.songInfo.genre}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <h3 className="font-semibold text-gray-800 mb-4">Difficulty Analysis</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="text-center">
              <p className="text-gray-600 mb-1">Overall</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(songData.difficulty.overall)}`}>
                {songData.difficulty.overall}
              </span>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Rhythm</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(songData.difficulty.rhythmGuitar)}`}>
                {songData.difficulty.rhythmGuitar}
              </span>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Lead</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(songData.difficulty.leadGuitar)}`}>
                {songData.difficulty.leadGuitar}
              </span>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Bass</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(songData.difficulty.bass)}`}>
                {songData.difficulty.bass}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
