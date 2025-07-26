import React from 'react';

interface SongInfoProps {
  songInfo: {
    title: string;
    artist: string;
    album: string;
    released: string;
    genre: string;
    tempo: string;
    duration: string;
    key: string;
    tuning?: string;
  };
  difficulty: {
    overall: string;
    rhythmGuitar: string;
    leadGuitar: string;
    bass: string;
    drums: string;
  };
}

const getDifficultyColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'advanced':
      return 'bg-orange-100 text-orange-800';
    case 'expert':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function SongInfoHeader({ songInfo, difficulty }: SongInfoProps) {
  return (
    <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{songInfo.title}</h1>
          <div className="space-y-2 text-gray-700">
            <p><strong>Artist:</strong> {songInfo.artist}</p>
            <p><strong>Album:</strong> {songInfo.album}</p>
            <p><strong>Released:</strong> {songInfo.released}</p>
            <p><strong>Genre:</strong> {songInfo.genre}</p>
            <p><strong>Tempo:</strong> {songInfo.tempo}</p>
            <p><strong>Duration:</strong> {songInfo.duration}</p>
            <p><strong>Key:</strong> {songInfo.key}</p>
            {songInfo.tuning && <p><strong>Tuning:</strong> {songInfo.tuning}</p>}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Overall Difficulty:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty.overall)}`}>
                {difficulty.overall}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Rhythm Guitar:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty.rhythmGuitar)}`}>
                {difficulty.rhythmGuitar}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Lead Guitar:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty.leadGuitar)}`}>
                {difficulty.leadGuitar}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Bass:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty.bass)}`}>
                {difficulty.bass}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Drums:</span>
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty.drums)}`}>
                {difficulty.drums}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
