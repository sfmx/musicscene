import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const completeSongs = [
  {
    title: "We're Not Gonna Take It - Twisted Sister",
    href: '/lessons/songs/breakdowns/were-not-gonna-take-it',
    key: 'E Major',
    tempo: '120 BPM',
    structure: 'Intro - Verse - Chorus - Verse - Chorus - Bridge - Chorus - Outro',
    theory: 'I-IV-V progression, power chords, modal interchange',
    difficulty: 'Beginner',
    description: 'Classic rock anthem with straightforward chord progression and memorable hooks.'
  },
  {
    title: 'Coming Soon: More Complete Analyses',
    href: '#',
    key: 'Various',
    tempo: 'Various',
    structure: 'Multiple song structures',
    theory: 'Comprehensive theory applications',
    difficulty: 'All Levels',
    description: 'More complete song breakdowns will be added to demonstrate various theory concepts.'
  }
];

const analysisFramework = [
  {
    step: '1. Overall Structure',
    description: 'Map out the complete song form and identify all sections',
    focus: 'Song architecture, section relationships'
  },
  {
    step: '2. Harmonic Analysis',
    description: 'Analyze chord progressions in each section and their functions',
    focus: 'Roman numeral analysis, functional harmony'
  },
  {
    step: '3. Melodic Content',
    description: 'Examine vocal melodies, guitar parts, and instrumental themes',
    focus: 'Scale usage, melodic contour, motifs'
  },
  {
    step: '4. Rhythmic Elements',
    description: 'Break down time signatures, rhythm patterns, and groove',
    focus: 'Meter, subdivision, rhythmic interest'
  },
  {
    step: '5. Texture & Arrangement',
    description: 'Study how instruments interact and create the overall sound',
    focus: 'Instrumentation, voice leading, density'
  },
  {
    step: '6. Form & Function',
    description: 'Understand how each section serves the songs emotional journey',
    focus: 'Dramatic arc, contrast, unity'
  }
];

export default function FullSongAnalysisPage() {
  return (
    <Layout>
      <Header
        title="Complete Song Analysis"
        subtitle="Full theory-based breakdowns showing how all musical elements work together to create compelling songs."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Complete Musical Works</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Complete song analysis brings together all aspects of music theory to understand how a song functions 
              as a unified artistic statement. We examine harmonic progressions, melodic development, rhythmic patterns, 
              formal structure, and arrangement choices to reveal the musical logic behind memorable songs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-2">🎼</div>
                <h3 className="font-semibold text-gray-900 mb-2">Theory Integration</h3>
                <p className="text-gray-600 text-sm">See how harmony, melody, rhythm, and form work together.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-2">🔍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Deep Analysis</h3>
                <p className="text-gray-600 text-sm">Examine every musical decision and its compositional impact.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-blue-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical Application</h3>
                <p className="text-gray-600 text-sm">Apply insights to your own playing and songwriting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Analysis Framework</h2>
          <div className="grid gap-6">
            {analysisFramework.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.step}</h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-gray-600">Focus Areas: </span>
                      <span className="text-sm text-gray-800">{item.focus}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Available Complete Analyses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Song Breakdowns</h2>
          <div className="grid gap-6">
            {completeSongs.map((song, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{song.title}</h3>
                      <p className="text-gray-600">{song.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      song.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      song.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      song.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {song.difficulty}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-600 mb-1">Key</div>
                      <div className="font-semibold text-gray-900">{song.key}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-600 mb-1">Tempo</div>
                      <div className="font-semibold text-gray-900">{song.tempo}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 md:col-span-2">
                      <div className="text-sm font-medium text-gray-600 mb-1">Theory Focus</div>
                      <div className="font-semibold text-gray-900">{song.theory}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">Song Structure</div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <code className="text-sm text-gray-800">{song.structure}</code>
                    </div>
                  </div>
                  
                  {song.href !== '#' ? (
                    <Link href={song.href} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Explore Full Analysis
                      <span>→</span>
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Analysis Learning Path</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Basic Music Theory</span>
                      <p className="text-sm text-gray-600">Scales, intervals, chord construction</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Roman Numeral Analysis</span>
                      <p className="text-sm text-gray-600">Understanding chord functions and progressions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Song Form Knowledge</span>
                      <p className="text-sm text-gray-600">Common song structures and section functions</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Start with Simple Songs</span>
                      <p className="text-sm text-gray-600">Begin with straightforward progressions and forms</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Focus on One Element</span>
                      <p className="text-sm text-gray-600">Analyze harmony first, then add melody and rhythm</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <div>
                      <span className="font-medium">Apply to Your Playing</span>
                      <p className="text-sm text-gray-600">Use insights to improve your own musical expression</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Suggestions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Analysis Practice</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Active Listening</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Listen to songs multiple times focusing on different elements</li>
                <li>• Identify chord changes by ear before looking up tabs</li>
                <li>• Notice how sections transition and connect</li>
                <li>• Pay attention to instrumental arrangements and interactions</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 Written Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Create chord charts with Roman numeral analysis</li>
                <li>• Map out complete song forms and structures</li>
                <li>• Note interesting harmonic or melodic choices</li>
                <li>• Compare similar songs to find common patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/breakdowns" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Back to Song Breakdowns
            </Link>
            <Link href="/lessons/songs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              All Song Lessons →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
