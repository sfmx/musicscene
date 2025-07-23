import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const riffPatterns = [
  {
    name: 'ii-V-I Comping',
    difficulty: 'Intermediate',
    key: 'Cmaj7',
    description: 'Essential jazz progression with sophisticated voicings and chord substitutions',
    theory: 'Diatonic ii-V-I movement, chord extensions, voice leading principles',
    technique: 'Jazz chord shapes, smooth transitions, rhythmic comping patterns'
  },
  {
    name: 'Bebop Line Construction',
    difficulty: 'Advanced',
    key: 'F7',
    description: 'Single-note lines using bebop scales and chromatic approach notes',
    theory: 'Bebop scales, chromatic enclosures, chord-tone targeting',
    technique: 'Alternate picking, string crossing, scalar fluency'
  },
  {
    name: 'Altered Dominant Phrases',
    difficulty: 'Advanced',
    key: 'G7alt',
    description: 'Sophisticated harmonic language using altered scale tones',
    theory: 'Altered scale (7th mode of melodic minor), tritone substitution',
    technique: 'Advanced fingerings, dissonance resolution, melodic phrasing'
  },
  {
    name: 'Walking Bass Line Harmony',
    difficulty: 'Intermediate',
    key: 'Am7',
    description: 'Combining melody and bass movement in fingerstyle approach',
    theory: 'Counterpoint principles, bass line construction, harmonic rhythm',
    technique: 'Fingerstyle coordination, voice independence, bass/melody balance'
  },
  {
    name: 'Modal Jazz Explorations',
    difficulty: 'Advanced',
    key: 'Dm7 (Dorian)',
    description: 'Using modal scales to create sophisticated harmonic colors',
    theory: 'Modal scales, characteristic tones, static harmony applications',
    technique: 'Modal fingerings, characteristic note emphasis, atmospheric playing'
  },
  {
    name: 'Chord-Melody Arrangements',
    difficulty: 'Expert',
    key: 'Various',
    description: 'Simultaneous melody and harmony execution in solo guitar style',
    theory: 'Voice leading, chord substitutions, melodic harmonization',
    technique: 'Complex fingerings, multiple voice control, dynamic balance'
  }
];

const jazzConcepts = [
  {
    name: 'Chord Extensions',
    description: 'Adding 9ths, 11ths, and 13ths to basic triads for sophisticated harmony',
    theory: 'Extensions follow scale degrees - 9th (2nd octave), 11th (4th octave), 13th (6th octave)',
    application: 'Cmaj7 becomes Cmaj9, Cmaj9#11, Cmaj13 - each adding harmonic complexity'
  },
  {
    name: 'Tritone Substitution',
    description: 'Replacing dominant chords with dominant chords a tritone away',
    theory: 'G7 can be replaced with Db7 - both contain same tritone (B-F)',
    application: 'Creates sophisticated bass movement and harmonic surprise'
  },
  {
    name: 'Voice Leading',
    description: 'Smooth movement between chord tones to create melodic bass and inner voices',
    theory: 'Common tones remain static, other voices move stepwise when possible',
    application: 'Creates flowing chord progressions that sound like multiple independent melodies'
  },
  {
    name: 'Chromatic Approach',
    description: 'Using non-chord tones to approach target notes by half-step',
    theory: 'Approach from above or below by semitone to create tension and resolution',
    application: 'Essential for bebop lines and sophisticated melodic construction'
  }
];

const standardAnalysis = [
  {
    song: '"Autumn Leaves"',
    progression: 'ii-V-I in both relative major and minor',
    riff: 'Descending melody over circle of fifths harmony',
    theory: 'Natural minor descending over ii-V-I progressions with relative major/minor relationships',
    application: 'Perfect for learning ii-V-I voice leading and relative key relationships'
  },
  {
    song: '"All The Things You Are"',
    progression: 'Sophisticated key center modulation',
    riff: 'Stepwise melody with chromatic harmony',
    theory: 'Moves through multiple key centers with smooth voice leading and secondary dominants',
    application: 'Advanced harmonic study - demonstrates sophisticated jazz harmony in practice'
  },
  {
    song: '"Giant Steps"',
    progression: 'Coltrane changes - rapid harmonic movement',
    riff: 'Rapid chord changes using major 3rd cycles',
    theory: 'Major 3rd root movement creating three distinct key centers',
    application: 'Ultimate challenge for jazz harmony comprehension and execution'
  },
  {
    song: '"So What"',
    progression: 'Modal jazz - static harmony',
    riff: 'Simple two-note motif over dorian harmony',
    theory: 'D dorian and Eb dorian - modal approach rather than functional harmony',
    application: 'Introduction to modal jazz thinking and static harmonic concepts'
  }
];

const theoryConcepts = [
  {
    title: 'The ii-V-I Progression',
    content: 'The foundation of jazz harmony. This progression provides strong forward motion through functional harmony while allowing for sophisticated reharmonization.',
    examples: [
      'Dm7 - G7 - Cmaj7 (C major)',
      'F#m7b5 - B7 - Em7 (E minor)',
      'Can be extended: ii-V-I-vi-ii-V-I',
      'Allows tritone substitution: ii-bII-I'
    ]
  },
  {
    title: 'Bebop Scale Applications',
    content: 'Bebop scales add chromatic passing tones to standard modes, creating smooth eighth-note lines that outline chord changes clearly.',
    examples: [
      'Major bebop: Major scale + #5',
      'Dominant bebop: Mixolydian + b7',
      'Minor bebop: Natural minor + natural 7',
      'Creates strong downbeat-to-chord-tone relationships'
    ]
  },
  {
    title: 'Altered Harmony and Substitutions',
    content: 'Jazz harmony frequently alters chord tones and substitutes chords to create sophisticated harmonic movement and color.',
    examples: [
      'Altered dominant: b9, #9, #11, b13 extensions',
      'Tritone substitution for any dominant',
      'Chromatic mediant relationships',
      'Diminished chord passing functions'
    ]
  }
];

export default function JazzRiffsPage() {
  return (
    <Layout>
      <Header
        title="Jazz Riffs"
        subtitle="Master sophisticated jazz harmony and melodic construction through theoretical understanding"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Language of Sophisticated Harmony</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Harmonic Complexity</h3>
              <p className="text-gray-600">Jazz guitar involves sophisticated harmonic concepts including extended chords, altered scales, and complex voice leading. Understanding these elements is essential for authentic jazz expression.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Melodic Sophistication</h3>
              <p className="text-gray-600">Jazz melodies use advanced scalar concepts, chromatic approach tones, and bebop language to create flowing lines that outline complex harmonic progressions.</p>
            </div>
          </div>
        </section>

        {/* Essential Riff Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Jazz Riff Patterns</h2>
          <div className="grid gap-6">
            {riffPatterns.map((riff, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{riff.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {riff.difficulty}
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                        {riff.key}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🎺</span>
                </div>
                
                <p className="text-gray-700 mb-4">{riff.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory Focus</h4>
                    <p className="text-gray-600">{riff.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{riff.technique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Jazz Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Jazz Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jazzConcepts.map((concept, index) => (
              <div key={index} className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">{concept.name}</h3>
                <p className="text-indigo-800 mb-3">{concept.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-indigo-900">Theory:</span>
                    <span className="text-indigo-700 ml-2">{concept.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-indigo-900">Application:</span>
                    <span className="text-indigo-700 ml-2">{concept.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jazz Standards Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Jazz Standards Analysis</h2>
          <div className="grid gap-6">
            {standardAnalysis.map((standard, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{standard.song}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Progression</h4>
                    <p className="text-gray-600">{standard.progression}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Riff Element</h4>
                    <p className="text-gray-600">{standard.riff}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{standard.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Learning Value</h4>
                    <p className="text-gray-600">{standard.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Theory Concepts</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{concept.title}</h3>
                <p className="text-blue-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">Applications:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Jazz Learning Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Chord Study</h3>
              <p className="text-green-700 text-sm">Master basic jazz chord shapes and voice leading principles through ii-V-I progressions.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Scale Mastery</h3>
              <p className="text-yellow-700 text-sm">Learn bebop scales and their application over chord changes for smooth melodic lines.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Standard Repertoire</h3>
              <p className="text-blue-700 text-sm">Learn jazz standards to understand how theory applies in practical musical contexts.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Improvisation</h3>
              <p className="text-purple-700 text-sm">Apply theoretical knowledge through improvisation over jazz chord progressions.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">🎸 Case Study: "Blue Bossa" Comping</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Harmonic Analysis</h4>
              <p className="text-indigo-700 mb-3">Cm7-F7-BbMaj7 progression demonstrates ii-V-I in Bb major with minor ii chord. The F7 can be altered (F7alt) for sophisticated color.</p>
              <p className="text-indigo-700"><strong>Voice Leading:</strong> Common tones between Cm7 and F7 (C-Eb), smooth resolution to BbMaj7.</p>
            </div>
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Comping Approach</h4>
              <p className="text-indigo-700 mb-3">Use rootless voicings to allow bass player freedom. Emphasize chord extensions (9ths, 11ths) for sophisticated harmonic color.</p>
              <p className="text-indigo-700"><strong>Rhythm:</strong> Syncopated comping pattern that supports but doesn't interfere with soloist's phrases.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Riff Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/riffs/pop"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Pop Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Riff Types
              </Link>
              <Link 
                href="/lessons/songs/riffs/fingerstyle"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Fingerstyle Riffs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
