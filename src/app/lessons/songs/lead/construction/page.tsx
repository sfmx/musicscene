import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const soloStructures = [
  {
    structure: 'ABA Form',
    description: 'Statement - Development - Restatement',
    application: 'Present a theme, develop/vary it, return to original theme',
    example: 'Many jazz standards, "Stairway to Heaven" solo',
    sections: ['A: Main theme/motif', 'B: Variation or new material', 'A: Return to main theme']
  },
  {
    structure: 'Linear Build',
    description: 'Gradual increase in intensity and complexity',
    application: 'Start simple and sparse, build to climactic peak',
    example: '"Comfortably Numb", "November Rain"',
    sections: ['Low register, simple phrases', 'Mid register, more activity', 'High register, complex phrases']
  },
  {
    structure: 'Call & Response',
    description: 'Musical conversation between phrases',
    application: 'Phrase poses question, next phrase answers',
    example: 'Blues solos, "While My Guitar Gently Weeps"',
    sections: ['Call phrase (question)', 'Response phrase (answer)', 'Continued dialogue']
  },
  {
    structure: 'Theme & Variations',
    description: 'Present theme, then create variations',
    application: 'Take simple motif, vary rhythm, harmony, register',
    example: 'Classical influenced rock, progressive rock',
    sections: ['Original theme', 'Rhythmic variation', 'Harmonic variation', 'Register variation']
  }
];

const motivicTechniques = [
  {
    technique: 'Sequence',
    description: 'Repeat motif at different pitch levels',
    example: 'Play same phrase pattern starting on different scale degrees',
    musicalEffect: 'Creates unity while providing forward motion'
  },
  {
    technique: 'Inversion',
    description: 'Flip the motif upside down',
    example: 'If original goes up 3rd, down 2nd, inversion goes down 3rd, up 2nd',
    musicalEffect: 'Provides variation while maintaining recognizable relationship'
  },
  {
    technique: 'Rhythmic Displacement',
    description: 'Change when the motif starts in the measure',
    example: 'Move motif from beat 1 to beat 2, or start on upbeat',
    musicalEffect: 'Creates syncopation and rhythmic interest'
  },
  {
    technique: 'Augmentation/Diminution',
    description: 'Change the note durations of the motif',
    example: 'Play same notes twice as fast or twice as slow',
    musicalEffect: 'Maintains melodic content while changing energy level'
  },
  {
    technique: 'Modal Transformation',
    description: 'Change the mode/scale context of the motif',
    example: 'Play major motif in minor, or add chromatic alterations',
    musicalEffect: 'Maintains structure while changing emotional color'
  }
];

const tensionTechniques = [
  {
    category: 'Harmonic Tension',
    techniques: [
      { name: 'Non-chord tones', description: 'Use notes outside current chord', resolution: 'Resolve to chord tones' },
      { name: 'Chromatic approach', description: 'Approach chord tones from half-step away', resolution: 'Land on chord tone' },
      { name: 'Suspended notes', description: 'Use 4ths and 2nds instead of 3rds', resolution: 'Resolve suspension to 3rd' }
    ]
  },
  {
    category: 'Rhythmic Tension',
    techniques: [
      { name: 'Syncopation', description: 'Accent off-beats or weak beats', resolution: 'Return to strong beat emphasis' },
      { name: 'Cross-rhythms', description: 'Play in different time feel than backing', resolution: 'Realign with main rhythm' },
      { name: 'Metric modulation', description: 'Temporarily suggest different tempo', resolution: 'Return to original tempo feel' }
    ]
  },
  {
    category: 'Register Tension',
    techniques: [
      { name: 'High register', description: 'Move to highest frets for intensity', resolution: 'Return to middle register' },
      { name: 'Wide leaps', description: 'Large interval jumps create surprise', resolution: 'Stepwise motion provides rest' },
      { name: 'Range extremes', description: 'Use very high and very low notes', resolution: 'Return to comfortable range' }
    ]
  }
];

export default function SoloConstructionPage() {
  return (
    <Layout>
      <Header
        title="Solo Construction & Development"
        subtitle="Understand how to build compelling solos using motivic development, tension, and resolution."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture of a Great Solo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🏗️ Structure Creates Impact</h3>
              <p className="text-gray-600 mb-3">
                Like a great speech or story, a memorable solo has clear structure: introduction, development, climax, and resolution.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Formula:</strong> Simple theme → Development → Climax → Resolution
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎭 Emotional Journey</h3>
              <p className="text-gray-600 mb-3">
                Every solo should take the listener on an emotional journey from start to finish, with peaks and valleys of intensity.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Elements:</strong> Dynamics, register, rhythmic activity, harmonic complexity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solo Structures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Solo Structures</h2>
          <div className="space-y-6">
            {soloStructures.map((structure, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{structure.structure}</h3>
                    <p className="text-sm text-purple-600 font-medium mb-2">{structure.description}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600 mb-2">{structure.application}</p>
                    <p className="text-xs text-gray-500 italic">Example: {structure.example}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="font-medium text-gray-700 mb-2">Section Breakdown:</h4>
                    <ul className="space-y-1">
                      {structure.sections.map((section, i) => (
                        <li key={i} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {section}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Motivic Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Motivic Development Techniques</h2>
          <div className="mb-6 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">💡 What is a Motif?</h3>
            <p className="text-blue-800 mb-3">
              A motif is a short musical idea (usually 2-4 notes) that can be developed and varied throughout a solo. Great solos often use just one or two motifs, developing them in creative ways.
            </p>
            <p className="text-blue-700 text-sm">
              <strong>Example:</strong> Beethoven's 5th Symphony uses a simple 4-note motif (da-da-da-DUM) throughout the entire first movement.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {motivicTechniques.map((technique, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-green-800 text-lg mb-2">{technique.technique}</h3>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Technique:</h4>
                    <p className="text-sm text-green-600">{technique.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Example:</h4>
                    <p className="text-sm text-green-600">{technique.example}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Musical Effect:</h4>
                    <p className="text-sm text-green-600">{technique.musicalEffect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tension and Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Creating Tension and Resolution</h2>
          <div className="mb-6 bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-3">⚡ The Power of Musical Tension</h3>
            <p className="text-amber-800">
              Tension and resolution is what makes music emotionally compelling. Without tension, music sounds boring. Without resolution, it sounds chaotic. Great solos master this balance.
            </p>
          </div>
          <div className="space-y-6">
            {tensionTechniques.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-800 text-xl mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.techniques.map((technique, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-2">{technique.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                      <div className="bg-white p-2 rounded">
                        <p className="text-xs text-gray-500">
                          <strong>Resolution:</strong> {technique.resolution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solo Building Process */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎯 Step-by-Step Solo Construction</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Analyze</h3>
              <p className="text-purple-700 text-sm">Study chord progression, key, and song structure</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Create Motif</h3>
              <p className="text-purple-700 text-sm">Develop 2-4 note musical idea that fits the harmony</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Plan Structure</h3>
              <p className="text-purple-700 text-sm">Decide on overall form and emotional arc</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Develop</h3>
              <p className="text-purple-700 text-sm">Use motivic techniques to create variations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">5</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Build Climax</h3>
              <p className="text-purple-700 text-sm">Create peak moment using tension techniques</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">6</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Resolve</h3>
              <p className="text-purple-700 text-sm">Bring tension to satisfying conclusion</p>
            </div>
          </div>
        </section>

        {/* Famous Solo Analysis */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎸 Masterclass: Analyzing Great Solos</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">"Hotel California" - Eagles (Don Felder/Joe Walsh)</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Structure:</h4>
                  <p className="text-gray-600">Dual guitar harmony building to trading solos, creating conversation between instruments</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Motivic Development:</h4>
                  <p className="text-gray-600">Uses short melodic phrases that interweave and develop, creating unified narrative</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Climax:</h4>
                  <p className="text-gray-600">Builds intensity through faster note values and higher register in final section</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">"Eruption" - Van Halen</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Structure:</h4>
                  <p className="text-gray-600">Showcases different techniques in sections: tapping, tremolo picking, harmonics</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Innovation:</h4>
                  <p className="text-gray-600">Introduced two-hand tapping as primary solo technique, not just effect</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Flow:</h4>
                  <p className="text-gray-600">Each section leads logically to next, despite radical technique changes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎯 Solo Construction Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-3">Motif Development</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Create a simple 3-note motif. Spend 10 minutes developing it using sequence, inversion, and rhythmic displacement.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Forces you to create variety from minimal material
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-3">Structure Practice</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Record a simple chord progression. Create 3 different solo structures over the same progression.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Develops understanding of how structure affects impact
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-3">Tension Exercise</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Play a solo that builds tension for 8 bars, then resolves in 4 bars. Focus on harmonic and rhythmic tension.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Teaches control of musical tension and release
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/intervals"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Melodic Intervals →
              </Link>
              <Link 
                href="/lessons/songs/lead/phrasing"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Phrasing & Expression
              </Link>
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Lead Guitar Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
