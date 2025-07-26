import React from 'react';
import Link from 'next/link';

interface RelatedSong {
  title: string;
  link?: string;
  artist?: string;
  technique?: string;
  similarity: string;
}

interface RelatedSongs {
  acdc: RelatedSong[];
  similarTechniques: RelatedSong[];
}

interface RelatedSongsProps {
  relatedSongs: RelatedSongs;
}

export default function RelatedSongsSection({ relatedSongs }: RelatedSongsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Songs & Related Learning</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* AC/DC Songs */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Other AC/DC Classics</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {relatedSongs.acdc.map((song, i) => (
              <li key={i}>
                {song.link ? (
                  <Link href={song.link} className="text-cyan-600 hover:text-cyan-800">
                    • &quot;{song.title}&quot;
                  </Link>
                ) : (
                  <span>• &quot;{song.title}&quot;</span>
                )}
                {song.similarity && (
                  <div className="text-xs text-gray-500 ml-3 mt-1">
                    {song.similarity}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Similar Techniques */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Similar Techniques</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {relatedSongs.similarTechniques.map((song, i) => (
              <li key={i}>
                <div>
                  • &quot;{song.title}&quot; - {song.artist}
                  {song.technique && (
                    <span className="text-xs text-blue-600 ml-2">({song.technique})</span>
                  )}
                </div>
                {song.similarity && (
                  <div className="text-xs text-gray-500 ml-3 mt-1">
                    {song.similarity}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Development */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Development</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/lessons/songs/techniques/left-hand-tapping" className="text-cyan-600 hover:text-cyan-800">
                • Left-Hand Tapping Mastery
              </Link>
            </li>
            <li>
              <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800">
                • Power Chord Techniques
              </Link>
            </li>
            <li>
              <Link href="/lessons/songs/techniques/rhythm-guitar" className="text-cyan-600 hover:text-cyan-800">
                • Rhythm Guitar Fundamentals
              </Link>
            </li>
            <li>
              <Link href="/lessons/songs/techniques/timing-metronome" className="text-cyan-600 hover:text-cyan-800">
                • Timing & Metronome Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
