import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const effectCategories = [
  {
    title: 'Dynamics & Compression',
    icon: '📊',
    effects: ['Compressor', 'Limiter', 'Gate/Expander'],
    description: 'Control attack, sustain, and volume response',
    techniqueAdaptations: 'Lighter picking for compression, aggressive attack for gating',
    musicalContext: 'Clean tones, country, jazz, funk rhythm'
  },
  {
    title: 'Distortion & Overdrive',
    icon: '🔥',
    effects: ['Overdrive', 'Distortion', 'Fuzz', 'Tube Screamer'],
    description: 'Add harmonic saturation and sustain',
    techniqueAdaptations: 'Palm muting precision, lighter touch for clarity',
    musicalContext: 'Rock, metal, blues, punk power chords and leads'
  },
  {
    title: 'Time-Based Effects',
    icon: '⏰',
    effects: ['Delay', 'Echo', 'Reverb'],
    description: 'Create space, depth, and rhythmic complexity',
    techniqueAdaptations: 'Rhythmic precision, space between notes, articulation clarity',
    musicalContext: 'Ambient, post-rock, classic rock, country'
  },
  {
    title: 'Modulation Effects',
    icon: '🌊',
    effects: ['Chorus', 'Flanger', 'Phaser', 'Tremolo', 'Vibrato'],
    description: 'Add movement, width, and texture',
    techniqueAdaptations: 'Sustained notes, chord voicings, timing with modulation rate',
    musicalContext: '80s rock, shoegaze, surf, psychedelic'
  },
  {
    title: 'Pitch Effects',
    icon: '🎵',
    effects: ['Octaver', 'Pitch Shifter', 'Harmonizer', 'Whammy'],
    description: 'Alter fundamental pitch and harmony',
    techniqueAdaptations: 'Monophonic playing, precise bending, clean articulation',
    musicalContext: 'Progressive rock, metal, experimental, electronic'
  },
  {
    title: 'Filter Effects',
    icon: '🎛️',
    effects: ['Wah', 'Auto-Filter', 'Envelope Filter', 'EQ'],
    description: 'Shape frequency response and tone',
    techniqueAdaptations: 'Dynamic picking, foot control coordination, frequency awareness',
    musicalContext: 'Funk, soul, psychedelic, experimental'
  }
];

const techniquePrinciples = [
  {
    title: 'Clean Foundation',
    icon: '🏗️',
    description: 'Effects enhance technique but cannot fix poor fundamentals',
    principle: 'Master clean playing first, then add effects to enhance expression',
    application: 'Practice all techniques without effects before adding processing'
  },
  {
    title: 'Dynamic Response',
    icon: '🎚️',
    description: 'How your touch affects effect behavior and tone',
    principle: 'Pick attack, pressure, and timing all influence effect response',
    application: 'Adjust playing dynamics to work with, not against, the effect'
  },
  {
    title: 'Rhythmic Integration',
    icon: '🥁',
    description: 'Timing and spacing considerations with time-based effects',
    principle: 'Note spacing and rhythm must account for effect timing',
    application: 'Practice with metronome to maintain timing despite effect feedback'
  },
  {
    title: 'Frequency Awareness',
    icon: '📡',
    description: 'How different frequencies interact with various effects',
    principle: 'Low notes, high notes, and chords behave differently through effects',
    application: 'Adapt playing ranges and voicings to complement effect characteristics'
  }
];

const practiceScenarios = [
  {
    title: 'Clean with Compression',
    level: 'Beginner',
    description: 'Learn how compression affects attack and sustain',
    techniques: ['Fingerpicking', 'Light strumming', 'Chord arpeggios'],
    goals: 'Consistent volume, controlled dynamics, clean articulation',
    songs: ['Tears in Heaven - Clapton', 'More Than Words - Extreme']
  },
  {
    title: 'Overdrive Rhythm',
    level: 'Intermediate',
    description: 'Palm muting and chord clarity with gain',
    techniques: ['Palm muting', 'Power chords', 'String damping'],
    goals: 'Tight rhythm, clear chord changes, controlled feedback',
    songs: ['Back in Black - AC/DC', 'Brown Eyed Girl - Van Morrison']
  },
  {
    title: 'Delay Lead Lines',
    level: 'Intermediate',
    description: 'Melodic playing with rhythmic delay',
    techniques: ['Single note lines', 'Bending', 'Vibrato'],
    goals: 'Timing precision, melodic clarity, effect integration',
    songs: ['Where the Streets Have No Name - U2', 'Another Brick - Pink Floyd']
  },
  {
    title: 'Modulation Textures',
    level: 'Advanced',
    description: 'Complex chord work with modulation effects',
    techniques: ['Extended chords', 'Sustained passages', 'Textural playing'],
    goals: 'Harmonic richness, spatial awareness, dynamic control',
    songs: ['Come As You Are - Nirvana', 'Purple Haze - Hendrix']
  }
];

const effectChains = [
  {
    title: 'Classic Rock Chain',
    chain: 'Overdrive → Delay → Reverb',
    description: 'Versatile setup for rhythm and lead',
    techniques: 'Power chords, single notes, moderate gain',
    examples: ['Hotel California - Eagles', 'Comfortably Numb - Pink Floyd']
  },
  {
    title: 'Modern Metal Chain',
    chain: 'Gate → Distortion → EQ → Delay',
    description: 'Tight, controlled high-gain sound',
    techniques: 'Palm muting, precise picking, string damping',
    examples: ['Master of Puppets - Metallica', 'Schism - Tool']
  },
  {
    title: 'Ambient/Post-Rock Chain',
    chain: 'Compressor → Reverb → Delay → Reverb',
    description: 'Spacious, atmospheric textures',
    techniques: 'Sustained chords, volume swells, fingerpicking',
    examples: ['Explosions in the Sky', 'Godspeed You! Black Emperor']
  },
  {
    title: 'Funk/Soul Chain',
    chain: 'Compressor → Wah → Chorus → Light Reverb',
    description: 'Punchy, rhythmic with movement',
    techniques: 'Staccato playing, muted strings, rhythmic precision',
    examples: ['Superstition - Stevie Wonder', 'Give It Away - RHCP']
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function EffectsIntegration() {
  return (
    <Layout>
      <Header
        title="Effects Integration"
        subtitle="Learn how guitar techniques adapt and evolve when using effects. Master the relationship between playing style and sonic processing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/techniques" className="text-blue-600 hover:text-blue-800">
            ← Back to Song Techniques
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Effects & Technique Synergy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technique Adaptation</h3>
              <p className="text-gray-600">Effects change how your playing translates to sound. Learn to adapt your technique to work with, rather than against, your effects.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Context</h3>
              <p className="text-gray-600">Different genres and songs require specific effect/technique combinations to achieve authentic sounds and expressions.</p>
            </div>
          </div>
        </section>

        {/* Effect Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Effect Categories & Technique Adaptations</h2>
          <div className="grid gap-6">
            {effectCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Effects</h4>
                    <ul className="text-sm text-gray-600">
                      {category.effects.map((effect, i) => (
                        <li key={i} className="mb-1">• {effect}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Technique Changes</h4>
                    <p className="text-sm text-gray-600">{category.techniqueAdaptations}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Musical Context</h4>
                    <p className="text-sm text-gray-600">{category.musicalContext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techniquePrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{principle.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{principle.description}</p>
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-blue-800"><strong>Principle:</strong> {principle.principle}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800"><strong>Application:</strong> {principle.application}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Scenarios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progressive Practice Scenarios</h2>
          <div className="grid gap-6">
            {practiceScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h3>
                    <p className="text-gray-600 mb-3">{scenario.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[scenario.level as keyof typeof difficultyColors]}`}>
                    {scenario.level}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Techniques</h4>
                    <ul className="text-sm text-gray-600">
                      {scenario.techniques.map((technique, i) => (
                        <li key={i} className="mb-1">• {technique}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Practice Goals</h4>
                    <p className="text-sm text-gray-600">{scenario.goals}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                    <ul className="text-sm text-gray-600">
                      {scenario.songs.map((song, i) => (
                        <li key={i} className="mb-1">• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Effect Chains */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Effect Chains</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {effectChains.map((chain, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{chain.title}</h3>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <code className="text-sm font-mono text-gray-800">{chain.chain}</code>
                </div>
                <p className="text-gray-600 mb-3">{chain.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Technique Focus</h4>
                    <p className="text-sm text-gray-600">{chain.techniques}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Classic Examples</h4>
                    <ul className="text-sm text-gray-600">
                      {chain.examples.map((example, i) => (
                        <li key={i} className="mb-1">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Considerations */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Mastery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Signal Chain Order</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm"><strong>Typical Order:</strong></p>
                <p className="text-sm">1. Compression/Dynamics</p>
                <p className="text-sm">2. Overdrive/Distortion</p>
                <p className="text-sm">3. Modulation</p>
                <p className="text-sm">4. Time-based (Delay/Reverb)</p>
                <p className="text-sm mt-2"><strong>Why Order Matters:</strong> Each effect processes the signal from the previous one, dramatically affecting the final sound.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Performance Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Practice effect changes during song transitions</li>
                <li>• Learn to use volume knob for dynamic control</li>
                <li>• Understand how pickup selection affects effects</li>
                <li>• Master bypass switching for effect combinations</li>
                <li>• Practice clean tone as foundation for all effects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Song-Based Learning</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progressive Song Study</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
                <div>
                  <h4 className="font-medium text-gray-800">"More Than Words" - Extreme (Clean + Compression)</h4>
                  <p className="text-sm text-gray-600">Learn how compression affects fingerpicking dynamics and chord clarity</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
                <div>
                  <h4 className="font-medium text-gray-800">"Where the Streets Have No Name" - U2 (Delay + Reverb)</h4>
                  <p className="text-sm text-gray-600">Master rhythmic delay timing and ambient lead techniques</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
                <div>
                  <h4 className="font-medium text-gray-800">"Comfortably Numb" - Pink Floyd (Full Chain)</h4>
                  <p className="text-sm text-gray-600">Integrate multiple effects for both rhythm and lead parts</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
                <div>
                  <h4 className="font-medium text-gray-800">"Schism" - Tool (Complex Modern Chain)</h4>
                  <p className="text-sm text-gray-600">Advanced effect switching and technique precision</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/lessons/songs/techniques" className="text-blue-600 hover:text-blue-800">
            ← Back to Techniques
          </Link>
          <div className="flex space-x-4">
            <Link href="/lessons/songs/techniques/slide-legato" className="text-blue-600 hover:text-blue-800">
              ← Slide & Legato
            </Link>
            <Link href="/lessons/songs/techniques/advanced-picking" className="text-blue-600 hover:text-blue-800">
              Advanced Picking →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
