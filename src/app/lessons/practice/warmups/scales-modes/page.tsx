"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';

export default function ScalesModesPage() {
  return (
    <Layout>
      <Header
        title="Scales & Modes"
        subtitle="Master fundamental scales and modal patterns to expand your musical vocabulary and improvisational skills."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl p-8 mb-12 border border-violet-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Scales & Modes for Guitarists</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Scales and modes are the building blocks of music theory and improvisation. These exercises will help you 
            develop fluency with essential scales, understand modal relationships, and build the foundation for 
            melodic playing across all styles of music.
          </p>
        </div>

        {/* Practice Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scale Practice Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Technical Focus</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Practice with proper fingering patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Use alternate picking for even articulation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Focus on smooth position shifts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-1">•</span>
                  Practice both ascending and descending
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Learn scales in different positions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Practice scales in various keys
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Apply scales to improvisation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  Connect scale patterns across the fretboard
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Scales Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Scales
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Major Scale (Ionian) */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Major Scale (Ionian Mode)</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Fundamental</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The major scale is the foundation of Western music theory. Master this pattern in multiple 
                  positions to understand the fretboard and develop melodic vocabulary.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Scale Formula:</strong> W-W-H-W-W-W-H (Whole-Whole-Half-Whole-Whole-Whole-Half)</p>
                </div>
              </div>
              
              <MusicScore
                title="Major Scale Exercise"
                staves={[{
                  id: 'major-scale-pattern',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 3/5 0/4 2/4 3/4 0/3 2/3 4/3 5/3 | 5/3 4/3 2/3 0/3 3/4 2/4 0/4 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Major Scale - Open Position'
                }]}
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Start with the open position C major scale. Focus on clean fingering and smooth transitions.
                  Practice both ascending and descending. Once comfortable, try this pattern in other keys.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Natural Minor Scale (Aeolian) */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Natural Minor Scale (Aeolian Mode)</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The natural minor scale provides the dark, melancholic sound heard in countless songs.
                  It's essential for rock, blues, and many other musical styles.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Scale Formula:</strong> W-H-W-W-H-W-W (Relative to A minor from C major)</p>
                </div>
              </div>
              
              <MusicScore
                title="Natural Minor Scale Exercise"
                staves={[{
                  id: 'natural-minor-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8 0/5 2/5 3/5 0/4 2/4 3/4 1/3 3/3 | 3/3 1/3 3/4 2/4 0/4 3/5 2/5 0/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Natural Minor Scale - Open Position'
                }]}
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Practice this A minor scale pattern, paying attention to the b3, b6, and b7 intervals that 
                  give minor scales their characteristic sound. This pattern is moveable to any key.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 75 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Pentatonic Scale */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Minor Pentatonic Scale</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Rock/Blues</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The minor pentatonic scale is the backbone of rock, blues, and pop guitar solos.
                  This five-note scale is incredibly versatile and user-friendly for improvisation.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Scale Formula:</strong> 1-b3-4-5-b7 (Five notes removing the 2nd and 6th from natural minor)</p>
                </div>
              </div>
              
              <MusicScore
                title="Minor Pentatonic Scale Exercise"
                staves={[{
                  id: 'minor-pentatonic-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8 0/5 3/5 0/4 2/4 0/3 2/3 0/2 3/2 | 3/2 0/2 2/3 0/3 2/4 0/4 3/5 0/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Minor Pentatonic Scale - Position 1'
                }]}
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  This is the most important scale for rock and blues guitar. Practice this "box 1" pattern thoroughly
                  as it's the foundation for countless guitar solos. Try bending notes for expressive playing.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Studies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Modal Studies
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Dorian Mode */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dorian Mode</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Jazz/Fusion</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Dorian mode (the 2nd mode of major) has a minor quality with a raised 6th degree.
                  It's commonly used in jazz, fusion, and progressive rock for its sophisticated sound.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Scale Formula:</strong> W-H-W-W-W-H-W (Natural minor with raised 6th)</p>
                </div>
              </div>
              
              <MusicScore
                title="Dorian Mode Exercise"
                staves={[{
                  id: 'dorian-mode-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=Am
notes :8 0/5 2/5 3/5 0/4 2/4 4/4 1/3 3/3 | 3/3 1/3 4/4 2/4 0/4 3/5 2/5 0/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'A Dorian Mode - Open Position'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Notice the F# (raised 6th) that distinguishes Dorian from natural minor. This note gives
                  Dorian its unique character. Practice emphasizing this note in your playing.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 65 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Mixolydian Mode */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mixolydian Mode</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Blues/Rock</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Mixolydian mode (the 5th mode of major) has a major quality with a lowered 7th.
                  It's the foundation of blues and rock, giving that characteristic "dominant" sound.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Scale Formula:</strong> W-W-H-W-W-H-W (Major scale with lowered 7th)</p>
                </div>
              </div>
              
              <MusicScore
                title="Mixolydian Mode Exercise"
                staves={[{
                  id: 'mixolydian-mode-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=G
notes :8 3/6 0/5 2/5 3/5 0/4 2/4 0/3 1/3 | 1/3 0/3 2/4 0/4 3/5 2/5 0/5 3/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'G Mixolydian Mode - Open Position'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  The F natural (lowered 7th) is what makes this G Mixolydian instead of G major. This mode
                  works perfectly over dominant 7th chords and blues progressions.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Lydian Mode */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lydian Mode</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Progressive</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Lydian mode (the 4th mode of major) has a major quality with a raised 4th degree.
                  It creates a dreamy, floating sound often used in film scores and progressive music.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Scale Formula:</strong> W-W-W-H-W-W-H (Major scale with raised 4th)</p>
                </div>
              </div>
              
              <MusicScore
                title="Lydian Mode Exercise"
                staves={[{
                  id: 'lydian-mode-scale',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 3/5 0/4 2/4 4/4 0/3 2/3 4/3 5/3 | 5/3 4/3 2/3 0/3 4/4 2/4 0/4 3/5`,
                  width: 550,
                  scale: 1.0,
                  title: 'C Lydian Mode - Open Position'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  The F# (raised 4th) gives Lydian its distinctive "floating" quality. This mode works well
                  over major chords and creates sophisticated harmonic colors in your playing.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Scale Practice Strategy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Practice scales with proper fingering patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Use alternate picking for clean articulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Practice in different positions on the fretboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-500 mt-1">•</span>
                  <span className="text-violet-800">Start slowly and gradually increase tempo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Musical Application</h3>
              <p className="text-blue-800 leading-relaxed">
                Scales and modes are not just technical exercises—they're the vocabulary of music. Each scale 
                and mode has its own character and emotional quality. Practice them not just for finger dexterity, 
                but to internalize their unique sounds. Use backing tracks to practice improvising with each scale, 
                and learn to recognize when and where each mode fits in musical contexts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
