import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const songAnalyses = [
  {
    title: "We're Not Gonna Take It",
    artist: 'Twisted Sister',
    href: '/lessons/songs/song-analysis/were-not-gonna-take-it',
    genre: 'Glam Metal / Hard Rock',
    year: '1984',
    difficulty: 'Intermediate',
    keySignature: 'E minor',
    tempo: '140 BPM',
    description: 'Complete breakdown of this anthem with Em-C-G-D progression, power chord techniques, and 80s metal production analysis.',
    techniques: ['Power Chords', 'Palm Muting', 'Minor Pentatonic', 'Downstroke Rhythm'],
    color: 'from-red-50 to-orange-50 border-orange-200'
  },
  {
    title: 'For Those About to Rock (We Salute You)',
    artist: 'AC/DC',
    href: '/lessons/songs/song-analysis/for-those-about-to-rock',
    genre: 'Hard Rock / Heavy Metal',
    year: '1981',
    difficulty: 'Intermediate',
    keySignature: 'E major',
    tempo: '116 BPM',
    description: 'Deep dive into AC/DC\'s masterpiece with I-IV-V progression, Malcolm Young\'s rhythm style, and Angus Young\'s lead techniques.',
    techniques: ['I-IV-V Progression', 'Blues Scale', 'Marshall Tone', 'Classic Rock Rhythm'],
    color: 'from-yellow-50 to-orange-50 border-yellow-200'
  }
];

const upcomingSongs = [
  {
    title: 'Thunderstruck',
    artist: 'AC/DC',
    status: 'Coming Soon',
    description: 'Open string technique mastery and signature AC/DC energy'
  },
  {
    title: 'Back in Black',
    artist: 'AC/DC', 
    status: 'Coming Soon',
    description: 'Classic rock rhythm guitar and tone fundamentals'
  },
  {
    title: 'Smoke on the Water',
    artist: 'Deep Purple',
    status: 'Coming Soon',
    description: 'The most famous riff in rock history analyzed'
  },
  {
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    status: 'Coming Soon',
    description: 'Advanced lead guitar techniques and complex arrangements'
  }
];

export default function SongAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Complete Song Analysis"
        subtitle="Professional breakdowns of iconic songs with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/lessons/songs" className="text-cyan-600 hover:text-cyan-800 text-sm">
            ← Back to Songs
          </Link>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Complete Song Analysis</h1>
            <p className="text-lg text-gray-700 mb-6">
              Deep dive into iconic songs with comprehensive analysis covering music theory, playing techniques, 
              equipment setup, and production insights. Each breakdown provides everything you need to master 
              these classics and understand what makes them work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">🎼 Music Theory</h3>
                <p className="text-blue-700">Chord progressions, scales, key analysis, and harmonic functions</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">🎸 Playing Techniques</h3>
                <p className="text-purple-700">Detailed breakdowns of riffs, chords, and playing styles</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">🔧 Equipment & Tone</h3>
                <p className="text-green-700">Guitar setups, amp settings, and effects chain analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Song Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Song Analysis</h2>
          <div className="grid gap-8">
            {songAnalyses.map((song, index) => (
              <div key={index} className={`bg-gradient-to-r ${song.color} rounded-xl p-8 border`}>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Song Info */}
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{song.title}</h3>
                      <p className="text-lg text-gray-700 font-medium">{song.artist}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                        <span><strong>Genre:</strong> {song.genre}</span>
                        <span><strong>Year:</strong> {song.year}</span>
                        <span><strong>Key:</strong> {song.keySignature}</span>
                        <span><strong>Tempo:</strong> {song.tempo}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{song.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Techniques Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {song.techniques.map((technique, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-white bg-opacity-70 text-gray-700 px-3 py-1 rounded-full text-sm border"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Difficulty & CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="bg-white rounded-lg p-4 border mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Difficulty Level</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Overall:</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                          {song.difficulty}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Suitable for players with basic chord and rhythm experience
                      </div>
                    </div>

                    <Link 
                      href={song.href}
                      className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
                    >
                      Complete Analysis →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingSongs.map((song, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{song.title}</h3>
                    <p className="text-gray-600">{song.artist}</p>
                  </div>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {song.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{song.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analysis Method */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Analysis Method</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What We Cover</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎵</span>
                  <div>
                    <strong>Musical Structure:</strong> Key signatures, chord progressions, song form analysis
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎸</span>
                  <div>
                    <strong>Guitar Techniques:</strong> Riffs, chord voicings, picking patterns, and special techniques
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">🔧</span>
                  <div>
                    <strong>Equipment Setup:</strong> Guitar choices, amplifier settings, effects chains
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📈</span>
                  <div>
                    <strong>Learning Path:</strong> Skill prerequisites, practice exercises, and next steps
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How to Use These Analysis</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <div>Start with the difficulty assessment to ensure it matches your skill level</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <div>Review the musical analysis to understand the theory</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <div>Practice the techniques with the provided exercises</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                  <div>Explore similar songs to reinforce your learning</div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link href="/lessons/songs/analysis-method" className="text-blue-600 hover:text-blue-800 text-sm">
              → Learn More About Our Analysis Method
            </Link>
          </div>
        </section>

        {/* Request Songs */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 text-center border border-cyan-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request a Song Analysis</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Have a song you'd like us to analyze? We're always adding new content based on what our community wants to learn. 
              Request your favorite songs and we'll prioritize them for future analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Request a Song
              </Link>
              <Link 
                href="/lessons/songs"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg border border-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                Browse All Lessons
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
