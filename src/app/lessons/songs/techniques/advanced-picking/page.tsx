import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const advancedTechniques = [
  {
    name: 'Sweep Picking',
    difficulty: 'Advanced',
    description: 'Single fluid pick motion across multiple strings for arpeggio execution',
    theory: 'Arpeggio patterns, chord tone sequences, harmonic movement',
    technique: 'Coordinated pick and fret hand, string dampening, fluid motion',
    musicalContext: 'Neoclassical metal, progressive rock, technical passages',
    songs: ['"Far Beyond the Sun" - Yngwie Malmsteen', '"Technical Ecstasy" - Marty Friedman'],
    challenges: 'String muting, timing coordination, clean execution'
  },
  {
    name: 'Economy Picking',
    difficulty: 'Intermediate',
    description: 'Efficient picking using sweep motion when crossing strings',
    theory: 'Combines alternate picking with directional efficiency',
    technique: 'Strategic directional changes, minimal pick movement',
    musicalContext: 'Fast scalar passages, technical metal, efficient execution',
    songs: ['Frank Gambale compositions', 'Modern fusion guitar'],
    challenges: 'Timing consistency, maintaining accuracy at speed'
  },
  {
    name: 'Hybrid Picking',
    difficulty: 'Intermediate',
    description: 'Combination of pick and fingers for complex textures',
    theory: 'Simultaneous bass and treble lines, polyphonic playing',
    technique: 'Pick and finger coordination, independent finger control',
    musicalContext: 'Country lead, jazz fusion, complex arrangements',
    songs: ['"Chicken Pickin\'" styles', '"The Chicken" - Jaco Pastorius (guitar adaptations)'],
    challenges: 'Finger-pick coordination, tone consistency'
  },
  {
    name: 'Tremolo Picking',
    difficulty: 'Intermediate',
    description: 'Rapid repeated picking of single notes for sustained effect',
    theory: 'Creates sustained tone through rapid repetition',
    technique: 'Wrist motion, relaxed grip, consistent attack',
    musicalContext: 'Metal rhythms, classical tremolo effects, dramatic passages',
    songs: ['"For Whom the Bell Tolls" - Metallica', 'Classical tremolo studies'],
    challenges: 'Endurance, consistent volume, relaxation'
  },
  {
    name: 'String Skipping',
    difficulty: 'Advanced',
    description: 'Picking non-adjacent strings for wide interval patterns',
    theory: 'Wide interval melodic patterns, chord tone arpeggiation',
    technique: 'Precise pick control, visual fretboard awareness',
    musicalContext: 'Progressive metal, technical passages, wide interval melodies',
    songs: ['Dream Theater compositions', 'Technical progressive pieces'],
    challenges: 'Pick accuracy, fretboard visualization, timing'
  },
  {
    name: 'Circular Picking',
    difficulty: 'Expert',
    description: 'Continuous rotary pick motion for maximum speed',
    theory: 'Mechanical advantage through circular motion patterns',
    technique: 'Rotary wrist motion, relaxed grip, momentum maintenance',
    musicalContext: 'Extreme metal, technical showcases, speed demonstrations',
    songs: ['Extreme technical metal compositions'],
    challenges: 'Motor control, relaxation, musical application'
  }
];

const pickingPatterns = [
  {
    pattern: 'Alternate Picking Scales',
    description: 'Consistent down-up motion through scalar passages',
    application: 'Foundation for all picking techniques, speed development',
    focus: 'Consistency, timing, relaxation',
    progression: 'Start slow, use metronome, gradually increase speed'
  },
  {
    pattern: 'Three-Note-Per-String',
    description: 'Scalar patterns with three notes on each string',
    application: 'Modern metal scales, extended range patterns',
    focus: 'String crossing, position shifts, pattern recognition',
    progression: 'Master individual positions before combining'
  },
  {
    pattern: 'Arpeggio Sweeps',
    description: 'Fluid motion across strings outlining chord shapes',
    application: 'Neoclassical style, harmonic clarity, technical passages',
    focus: 'String muting, chord knowledge, fluid motion',
    progression: 'Start with triads, add extensions gradually'
  },
  {
    pattern: 'Mixed Techniques',
    description: 'Combining different picking approaches within phrases',
    application: 'Musical versatility, technical sophistication',
    focus: 'Seamless transitions, musical application',
    progression: 'Master individual techniques before combining'
  }
];

const technicalChallenges = [
  {
    challenge: 'Speed vs. Accuracy',
    description: 'Balancing rapid execution with clean note articulation',
    solution: 'Slow practice with metronome, gradual tempo increases',
    importance: 'Musical credibility requires both speed and precision'
  },
  {
    challenge: 'String Muting',
    description: 'Controlling unwanted string noise during complex passages',
    solution: 'Both-hand muting techniques, selective dampening',
    importance: 'Clean execution essential for musical clarity'
  },
  {
    challenge: 'Rhythmic Consistency',
    description: 'Maintaining steady timing through technical passages',
    solution: 'Metronome practice, subdivision awareness, internal pulse',
    importance: 'Technical ability must serve musical rhythm'
  },
  {
    challenge: 'Musical Application',
    description: 'Using advanced techniques in musical rather than mechanical contexts',
    solution: 'Study song applications, practice with backing tracks',
    importance: 'Technique serves music, not vice versa'
  }
];

const theoryConcepts = [
  {
    title: 'Efficiency vs. Expression',
    content: 'Advanced picking techniques often prioritize efficiency, but musical expression requires balancing technical efficiency with rhythmic and dynamic nuance.',
    examples: [
      'Economy picking saves motion but may sacrifice rhythmic precision',
      'Alternate picking provides rhythmic consistency but requires more motion',
      'Hybrid picking enables complex textures but demands coordination',
      'Choose technique based on musical requirements, not just efficiency'
    ]
  },
  {
    title: 'Pattern Recognition and Visualization',
    content: 'Advanced techniques require strong pattern recognition and fretboard visualization to execute complex passages accurately and musically.',
    examples: [
      'Arpeggio shapes must be visualized across entire fretboard',
      'Scale patterns connect to create seamless positional flow',
      'String-skipping patterns require wide interval visualization',
      'Mental mapping enables musical application of technical patterns'
    ]
  },
  {
    title: 'Physical Technique and Relaxation',
    content: 'Advanced techniques demand physical efficiency and relaxation to prevent injury and enable musical expression rather than mechanical execution.',
    examples: [
      'Tension creates fatigue and limits musical expression',
      'Relaxed technique enables speed and endurance',
      'Proper mechanics prevent repetitive stress injury',
      'Physical comfort allows focus on musical content'
    ]
  }
];

export default function AdvancedPickingPage() {
  return (
    <Layout>
      <Header
        title="Advanced Picking"
        subtitle="Master sophisticated picking techniques for complex musical passages and technical versatility"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Mastery in Service of Music</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Sophistication</h3>
              <p className="text-gray-600">Advanced picking techniques expand your technical vocabulary, enabling execution of complex musical passages that would be impossible with basic techniques alone.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Application</h3>
              <p className="text-gray-600">The most advanced techniques must serve musical expression. Understanding when and how to apply each technique ensures technical skill enhances rather than overshadows musicality.</p>
            </div>
          </div>
        </section>

        {/* Advanced Picking Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Picking Techniques</h2>
          <div className="grid gap-6">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{technique.name}</h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                      {technique.difficulty}
                    </span>
                  </div>
                  <span className="text-2xl">⚡</span>
                </div>
                
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{technique.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{technique.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Musical Context</h4>
                    <p className="text-gray-600">{technique.musicalContext}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Example Songs</h4>
                    <ul className="text-gray-600">
                      {technique.songs.map((song, idx) => (
                        <li key={idx}>• {song}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Key Challenges</h4>
                    <p className="text-gray-600">{technique.challenges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Picking Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Picking Patterns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pickingPatterns.map((pattern, index) => (
              <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">{pattern.pattern}</h3>
                <p className="text-orange-800 mb-3">{pattern.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-orange-900">Application:</span>
                    <span className="text-orange-700 ml-2">{pattern.application}</span>
                  </div>
                  <div>
                    <span className="font-medium text-orange-900">Focus:</span>
                    <span className="text-orange-700 ml-2">{pattern.focus}</span>
                  </div>
                  <div>
                    <span className="font-medium text-orange-900">Progression:</span>
                    <span className="text-orange-700 ml-2">{pattern.progression}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Technical Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalChallenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">{challenge.challenge}</h3>
                <p className="text-red-800 mb-3">{challenge.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-red-900">Solution:</span>
                    <span className="text-red-700 ml-2">{challenge.solution}</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Importance:</span>
                    <span className="text-red-700 ml-2">{challenge.importance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Picking Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{concept.title}</h3>
                <p className="text-gray-700 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Considerations:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Picking Development</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Foundation Mastery</h3>
              <p className="text-green-700 text-sm">Perfect alternate picking and basic techniques before attempting advanced methods.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Technique Isolation</h3>
              <p className="text-yellow-700 text-sm">Practice each advanced technique separately with focus on clean execution and relaxation.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-orange-900 mb-2">Musical Integration</h3>
              <p className="text-orange-700 text-sm">Apply techniques within musical contexts, focusing on appropriate usage rather than technical display.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-red-900 mb-2">Advanced Combinations</h3>
              <p className="text-red-700 text-sm">Combine multiple techniques fluidly while maintaining musical expression and technical accuracy.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">🎸 Case Study: Yngwie Malmsteen's Neoclassical Approach</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-orange-800 mb-2">Technical Elements</h4>
              <p className="text-orange-700 mb-3">Malmsteen's playing combines sweep picking, alternate picking, and economy picking within classical harmonic progressions. His technique serves the neoclassical musical vision.</p>
              <p className="text-orange-700"><strong>Key Point:</strong> Advanced techniques used to execute classical-influenced musical ideas, not for technical display alone.</p>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">Musical Application</h4>
              <p className="text-orange-700 mb-3">Each technical choice supports the harmonic progression and melodic development. Sweep picking outlines arpeggios, alternate picking handles scalar passages.</p>
              <p className="text-orange-700"><strong>Lesson:</strong> Choose picking techniques based on musical requirements rather than technical preference or showing off.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🎯 Advanced Practice Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Technical Development</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Start extremely slowly with perfect execution</li>
                <li>• Use metronome for timing consistency and gradual speed increase</li>
                <li>• Focus on relaxation and efficient motion patterns</li>
                <li>• Practice string muting as integral part of each technique</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Musical Application</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Study how masters apply techniques in musical contexts</li>
                <li>• Practice with backing tracks to maintain musical perspective</li>
                <li>• Focus on musical phrases rather than mechanical exercises</li>
                <li>• Record yourself to evaluate both technical and musical success</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques/bending"
                className="px-4 py-2 bg-white border border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
              >
                ← Bending & Vibrato
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/slide-legato"
                className="px-4 py-2 bg-white border border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
              >
                Slide & Legato →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
