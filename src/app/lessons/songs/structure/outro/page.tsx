import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const outroTypes = [
  {
    type: 'Fade Outro',
    description: 'Gradual volume reduction while repeating musical material',
    characteristics: ['Repeated chord progression', 'Decreasing volume', 'No definitive ending'],
    theory: 'Maintains harmonic momentum while creating temporal closure through dynamics',
    usage: 'Pop, rock, R&B - suggests the music could continue indefinitely',
    examples: ['Hey Jude - Beatles', 'Many radio-friendly songs']
  },
  {
    type: 'Authentic Cadence Outro',
    description: 'Strong harmonic resolution to tonic for definitive closure',
    characteristics: ['V-I resolution', 'Final tonic chord', 'Rhythmic finality'],
    theory: 'Dominant to tonic motion provides strongest sense of harmonic completion',
    usage: 'Classical, folk, traditional songs requiring strong closure',
    examples: ['Classical pieces', 'Hymns', 'Traditional ballads']
  },
  {
    type: 'Plagal Cadence Outro',
    description: 'IV-I resolution creating gentle, spiritual conclusion',
    characteristics: ['Subdominant to tonic', 'Softer resolution', 'Often with "Amen" feel'],
    theory: 'Plagal motion (IV-I) provides warm, settling resolution without dominant tension',
    usage: 'Gospel, hymns, folk music, peaceful conclusions',
    examples: ['Amazing Grace', 'Many gospel songs']
  },
  {
    type: 'Deceptive Outro',
    description: 'Avoids expected resolution, often ending on unexpected harmony',
    characteristics: ['V-vi instead of V-I', 'Unresolved tension', 'Open-ended feeling'],
    theory: 'Dominant resolves to vi (or other) instead of expected tonic',
    usage: 'Art songs, progressive music, when unresolved feeling is desired',
    examples: ['Some Beatles songs', 'Progressive rock pieces']
  }
];

const outroFunctions = [
  {
    function: 'Harmonic Closure',
    description: 'Provides final resolution of harmonic tension',
    techniques: ['Strong cadences', 'Tonic emphasis', 'Resolving all leading tones'],
    importance: 'Gives sense of completion and finality to the harmonic journey'
  },
  {
    function: 'Emotional Resolution',
    description: 'Completes the emotional arc of the song',
    techniques: ['Dynamic release', 'Tempo changes', 'Lyrical conclusion'],
    importance: 'Provides psychological satisfaction and closure for the listener'
  },
  {
    function: 'Rhythmic Finality',
    description: 'Brings the rhythmic momentum to an appropriate conclusion',
    techniques: ['Ritardando', 'Final accents', 'Rhythmic dissolution'],
    importance: 'Prevents abrupt stops and provides temporal closure'
  },
  {
    function: 'Textural Resolution',
    description: 'Resolves the instrumental arrangement and voices',
    techniques: ['Instrumental dropouts', 'Solo endings', 'Unison finales'],
    importance: 'Creates sonic closure and final statements'
  }
];

const outroTechniques = [
  {
    technique: 'Ritardando (Slowing Down)',
    description: 'Gradual tempo decrease creating natural conclusion',
    musical_effect: 'Creates sense of winding down and coming to rest',
    harmony: 'Often combined with final cadences',
    usage: 'Ballads, classical music, emotional songs'
  },
  {
    technique: 'Instrumental Tag',
    description: 'Brief instrumental phrase after vocal conclusion',
    musical_effect: 'Provides musical punctuation after lyrical ending',
    harmony: 'Usually simple, often just I-V-I or similar',
    usage: 'Jazz, blues, classical, many popular songs'
  },
  {
    technique: 'Echo/Repeat Fade',
    description: 'Repeated phrases with decreasing volume/intensity',
    musical_effect: 'Suggests continuation beyond the recording',
    harmony: 'Cycles through main progressions or simple patterns',
    usage: 'Pop, rock, dance music'
  },
  {
    technique: 'Solo Outro',
    description: 'Single instrument or voice concludes alone',
    musical_effect: 'Intimate, personal conclusion',
    harmony: 'May be unharmonized or with minimal accompaniment',
    usage: 'Folk, acoustic, intimate arrangements'
  }
];

const cadenceTypes = [
  {
    name: 'Perfect Authentic Cadence (PAC)',
    progression: 'V - I',
    voicing: 'Both chords in root position, melody ends on tonic',
    strength: 'Strongest possible closure',
    usage: 'Classical music, hymns, definitive endings'
  },
  {
    name: 'Imperfect Authentic Cadence (IAC)',
    progression: 'V - I',
    voicing: 'One chord inverted, or melody doesn\'t end on tonic',
    strength: 'Strong but less final than PAC',
    usage: 'Mid-phrase closures, less final endings'
  },
  {
    name: 'Plagal Cadence',
    progression: 'IV - I',
    voicing: 'The "Amen" cadence',
    strength: 'Gentle, warm resolution',
    usage: 'Religious music, folk, peaceful endings'
  },
  {
    name: 'Deceptive Cadence',
    progression: 'V - vi',
    voicing: 'Expected resolution to I goes to vi instead',
    strength: 'Avoids closure, creates surprise',
    usage: 'When continuing past expected ending'
  }
];

export default function OutroStructurePage() {
  return (
    <Layout>
      <Header
        title="Outro Structure Analysis"
        subtitle="Understanding different ending techniques and how they provide harmonic and emotional closure"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation */}
        <section className="bg-blue-50 rounded-lg p-4 mb-8">
          <Link href="/lessons/songs/structure" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to Song Structure
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Outro: Bringing Songs to Satisfying Conclusions</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Song outros are the final statements that provide closure to the musical and emotional journey. 
              They must balance harmonic resolution, rhythmic finality, and emotional satisfaction while 
              leaving the listener with a sense of completion. Understanding outro construction reveals 
              how composers create satisfying endings that feel both inevitable and complete.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="text-amber-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Harmonic Closure</h3>
                <p className="text-gray-600 text-sm">Resolves tension and provides tonal finality</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="text-amber-600 text-2xl mb-2">💫</div>
                <h3 className="font-semibold text-gray-900 mb-2">Emotional Resolution</h3>
                <p className="text-gray-600 text-sm">Completes the song's emotional arc</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="text-amber-600 text-2xl mb-2">⏹️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Final Statement</h3>
                <p className="text-gray-600 text-sm">Leaves lasting impression on the listener</p>
              </div>
            </div>
          </div>
        </section>

        {/* Functions of Outros */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Functions of Outros</h2>
          <div className="grid gap-6">
            {outroFunctions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.function}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Techniques</h4>
                    <ul className="space-y-1">
                      {item.techniques.map((technique, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Why It Matters</h4>
                    <p className="text-gray-700 text-sm">{item.importance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Outros */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Outro Structures</h2>
          <div className="space-y-6">
            {outroTypes.map((outro, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{outro.type}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{outro.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                      <ul className="space-y-1">
                        {outro.characteristics.map((char, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                            <span className="text-amber-500">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory</h4>
                      <p className="text-gray-700 text-sm">{outro.theory}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Best Used For</h4>
                    <p className="text-gray-700 text-sm">{outro.usage}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {outro.examples.map((example, i) => (
                        <span key={i} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cadence Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cadence Types for Endings</h2>
          <div className="grid gap-4">
            {cadenceTypes.map((cadence, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{cadence.name}</h3>
                    <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{cadence.progression}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Voicing</h4>
                    <p className="text-gray-700 text-sm">{cadence.voicing}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Strength</h4>
                    <p className="text-gray-700 text-sm">{cadence.strength}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Usage</h4>
                    <p className="text-gray-700 text-sm">{cadence.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outro Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Outro Techniques</h2>
          <div className="grid gap-6">
            {outroTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{technique.technique}</h3>
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Musical Effect</h4>
                    <p className="text-gray-700 text-sm">{technique.musical_effect}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Harmony</h4>
                    <p className="text-gray-700 text-sm">{technique.harmony}</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Common In</h4>
                    <p className="text-gray-700 text-sm">{technique.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Ending Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Tierce de Picardie</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Minor song ends on major chord</div>
                  <div className="text-xs text-gray-600 mt-1">Am → A major final chord</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Ending a minor key song with a major tonic chord creates a 
                  bright, hopeful conclusion that contrasts with the darker body.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Circular Endings</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">...V - I, V - I, V - I (fade)</div>
                  <div className="text-xs text-gray-600 mt-1">Repeated cadences with fade</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Multiple repetitions of cadential motion with gradual fade 
                  creates sense of eternal resolution.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎭 False Endings</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">V - I (pause) → More music</div>
                  <div className="text-xs text-gray-600 mt-1">Apparent ending followed by continuation</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Creating apparent ending then continuing surprises listeners 
                  and can build to even more powerful final conclusion.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Sudden Stops</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Full energy → Immediate silence</div>
                  <div className="text-xs text-gray-600 mt-1">Abrupt conclusion without fade</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Immediate stopping at peak energy creates dramatic impact 
                  and leaves strong final impression.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outro Analysis Framework</h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Cadence type:</strong> What harmonic closure is used?</li>
                  <li>• <strong>Tempo changes:</strong> Does it slow down or maintain pace?</li>
                  <li>• <strong>Dynamic changes:</strong> How does volume/intensity change?</li>
                  <li>• <strong>Instrumentation:</strong> What instruments provide closure?</li>
                  <li>• <strong>Length:</strong> How long does the ending process take?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Emotional Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Closure feeling:</strong> Does it feel complete and final?</li>
                  <li>• <strong>Emotional resolution:</strong> Are tensions resolved?</li>
                  <li>• <strong>Memorability:</strong> What makes it stick with listeners?</li>
                  <li>• <strong>Appropriateness:</strong> Does it fit the song's character?</li>
                  <li>• <strong>Satisfaction:</strong> Does it provide listener fulfillment?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Analysis Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Identify cadence types in different song endings</li>
                <li>2. Compare fade-out vs. definitive ending effects</li>
                <li>3. Notice how outro length affects song impact</li>
                <li>4. Analyze how endings match song energy and mood</li>
                <li>5. Study different approaches to creating finality</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Create different outro types for the same song</li>
                <li>2. Practice various cadence types for closure</li>
                <li>3. Experiment with ritardando and tempo changes</li>
                <li>4. Try false endings and their continuations</li>
                <li>5. Write outros that echo intro material for unity</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/intro" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Intro Structure
            </Link>
            <Link href="/lessons/songs/structure/pre-chorus" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Pre-Chorus Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
