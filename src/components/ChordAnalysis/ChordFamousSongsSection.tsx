import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordFamousSongsSectionProps {
  famousSongs: ChordData['famousSongs'];
}

export default function ChordFamousSongsSection({ famousSongs }: ChordFamousSongsSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{famousSongs.title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {famousSongs.categories.map((cat, i) => (
          <div key={i} className={`${cat.colorBg} rounded-lg p-6 border ${cat.colorBorder}`}>
            <h3 className={`text-lg font-semibold ${cat.colorTitle} mb-3`}>{cat.title}</h3>
            <ul className={`space-y-2 text-sm ${cat.colorText}`}>
              {cat.songs.map((song, j) => (
                <li key={j}>• {song}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
