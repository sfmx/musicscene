import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const songForms = [
  {
    name: 'AABA (32-bar Song Form)',
    structure: 'A - A - B - A',
    bars: '8 - 8 - 8 - 8',
    description: 'Classic American popular song form with contrasting bridge',
    theory: 'A sections establish main theme, B section provides harmonic and melodic contrast',
    harmony: 'A: tonic-centered, B: modulation or relative keys',
    examples: ['Jazz standards', 'Tin Pan Alley songs', 'Many Beatles songs'],
    characteristics: ['Symmetrical structure', 'Strong melodic themes', 'Clear contrast in bridge']
  },
  {
    name: 'Verse-Chorus Form',
    structure: 'V - C - V - C - B - C',
    bars: 'Variable length sections',
    description: 'Modern popular song form with alternating verse and chorus',
    theory: 'Verses develop narrative, choruses provide emotional/harmonic climax',
    harmony: 'Verses: stable progressions, Choruses: climactic harmony',
    examples: ['Most pop songs', 'Rock music', 'Country music'],
    characteristics: ['Contrasting energy levels', 'Memorable chorus hooks', 'Flexible section lengths']
  },
  {
    name: 'Binary Form (AB)',
    structure: 'A - B',
    bars: 'Each section repeated',
    description: 'Two contrasting sections, each typically repeated',
    theory: 'A section establishes key, B section provides contrast and return',
    harmony: 'A: tonic to dominant, B: explores related keys, returns to tonic',
    examples: ['Baroque dances', 'Folk songs', 'Some popular songs'],
    characteristics: ['Simple structure', 'Clear contrast', 'Often with repeats']
  },
  {
    name: 'Ternary Form (ABA)',
    structure: 'A - B - A',
    bars: 'Sections can vary in length',
    description: 'Three-part form with return to opening material',
    theory: 'A establishes main theme, B contrasts, A returns (often varied)',
    harmony: 'A: home key, B: contrasting key, A: return to home key',
    examples: ['Classical minuets', 'Many ballads', 'Art songs'],
    characteristics: ['Symmetrical return', 'Strong sense of closure', 'Clear three-part structure']
  },
  {
    name: 'Twelve-Bar Blues Form',
    structure: 'AAB (lyrically)',
    bars: '12 bars with specific chord pattern',
    description: 'Foundational blues structure with set harmonic progression',
    theory: 'I-I-I-I-IV-IV-I-I-V-IV-I-I pattern with variations',
    harmony: 'Built on I-IV-V relationships with blues-specific extensions',
    examples: ['Traditional blues', 'Rock and roll', 'Jazz blues'],
    characteristics: ['Fixed harmonic pattern', 'AAB lyrical structure', 'Built-in tension and release']
  },
  {
    name: 'Through-Composed',
    structure: 'ABCD... (no repetition)',
    bars: 'Continuously variable',
    description: 'Continuously developing form without exact repetition',
    theory: 'Each section introduces new material, constant development',
    harmony: 'Continuously modulating or developing harmonic language',
    examples: ['Art songs', 'Progressive rock', 'Some folk ballads'],
    characteristics: ['Continuous development', 'No exact repeats', 'Complex narratives']
  }
];

const formAnalysisElements = [
  {
    element: 'Sectional Relationships',
    questions: ['How do sections contrast with each other?', 'What creates unity between sections?', 'How does each section serve the overall form?'],
    considerations: ['Harmonic relationships', 'Melodic connections', 'Rhythmic consistency', 'Dynamic contrasts']
  },
  {
    element: 'Harmonic Architecture',
    questions: ['What is the tonal plan of the song?', 'How do key relationships create structure?', 'Where do modulations occur?'],
    considerations: ['Home key establishment', 'Departure and return patterns', 'Circle of fifths relationships', 'Modal interchange']
  },
  {
    element: 'Phrase Structure',
    questions: ['How are phrases organized within sections?', 'What phrase lengths are used?', 'How do phrases relate to each other?'],
    considerations: ['Regular vs. irregular phrases', 'Antecedent-consequent pairs', 'Extension and compression techniques']
  },
  {
    element: 'Motivic Development',
    questions: ['What musical ideas unify the form?', 'How are motifs developed across sections?', 'What provides melodic coherence?'],
    considerations: ['Recurring melodic fragments', 'Rhythmic patterns', 'Harmonic motifs', 'Transformation techniques']
  }
];

const modernVariations = [
  {
    variation: 'Pre-Chorus Addition',
    traditional: 'V - C - V - C',
    modern: 'V - PC - C - V - PC - C',
    effect: 'Builds energy and expectation before choruses',
    usage: 'Contemporary pop, rock, when additional build is needed'
  },
  {
    variation: 'Multiple Bridges',
    traditional: 'V - C - V - C - B - C',
    modern: 'V - C - V - C - B1 - C - B2 - C',
    effect: 'Provides multiple contrast points and development',
    usage: 'Progressive rock, complex pop songs, extended forms'
  },
  {
    variation: 'Verse Variations',
    traditional: 'V1 - C - V2 - C',
    modern: 'V1 - C - V2 (different harmony) - C',
    effect: 'Maintains interest while preserving familiarity',
    usage: 'Folk adaptations, development-focused songs'
  },
  {
    variation: 'Extended Outros',
    traditional: 'V - C - V - C - End',
    modern: 'V - C - V - C - C - C (fade/extend)',
    effect: 'Allows for gradual fade or extended development',
    usage: 'Radio-friendly songs, jam-based music'
  }
];

export default function SongFormsPage() {
  return (
    <Layout>
      <Header
        title="Song Forms Analysis"
        subtitle="Understanding common song structures and their theoretical foundations"
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
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Song Forms: The Architecture of Music</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Song form is the large-scale organization of musical material that creates coherent structures 
              listeners can follow and remember. These forms represent time-tested solutions to the challenge 
              of balancing repetition (for familiarity) with contrast (for interest). Understanding form helps 
              us analyze how songs create their emotional journeys and structural logic.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-violet-200">
                <div className="text-violet-600 text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Structural Templates</h3>
                <p className="text-gray-600 text-sm">Time-tested patterns for organizing musical material</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-violet-200">
                <div className="text-violet-600 text-2xl mb-2">⚖️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Unity vs. Variety</h3>
                <p className="text-gray-600 text-sm">Balance repetition for familiarity with contrast for interest</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-violet-200">
                <div className="text-violet-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Listener Guidance</h3>
                <p className="text-gray-600 text-sm">Predictable patterns help listeners follow musical narratives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Song Forms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Song Forms</h2>
          <div className="space-y-8">
            {songForms.map((form, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{form.name}</h3>
                  <div className="text-violet-100 text-sm mt-1">
                    Structure: {form.structure} | Bars: {form.bars}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{form.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory</h4>
                      <p className="text-gray-700 text-sm">{form.theory}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Harmonic Approach</h4>
                      <p className="text-gray-700 text-sm">{form.harmony}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                    <ul className="grid md:grid-cols-3 gap-2">
                      {form.characteristics.map((char, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-violet-500">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common In</h4>
                    <div className="flex flex-wrap gap-2">
                      {form.examples.map((example, i) => (
                        <span key={i} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
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

        {/* Form Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Form Analysis Framework</h2>
          <div className="grid gap-6">
            {formAnalysisElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{element.element}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Questions</h4>
                    <ul className="space-y-2">
                      {element.questions.map((question, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Consider</h4>
                    <ul className="space-y-2">
                      {element.considerations.map((consideration, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Variations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Modern Form Variations</h2>
          <div className="grid gap-6">
            {modernVariations.map((variation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{variation.variation}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Traditional</h4>
                    <div className="font-mono text-sm">{variation.traditional}</div>
                  </div>
                  <div className="bg-violet-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Modern</h4>
                    <div className="font-mono text-sm">{variation.modern}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Effect</h4>
                    <p className="text-gray-700 text-sm">{variation.effect}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common In</h4>
                    <p className="text-gray-700 text-sm">{variation.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form Design Principles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Form Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Repetition & Return</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Function</div>
                  <div className="text-sm text-gray-700">Creates familiarity and memorability</div>
                </div>
                <div className="bg-violet-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Examples</div>
                  <div className="text-sm text-gray-700">Choruses, recurring themes, AABA returns</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Repetition gives listeners musical anchors and creates the satisfaction 
                  of return to familiar material.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎭 Contrast & Development</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Function</div>
                  <div className="text-sm text-gray-700">Prevents monotony, maintains interest</div>
                </div>
                <div className="bg-violet-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Examples</div>
                  <div className="text-sm text-gray-700">Bridges, modulations, new themes</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Contrast provides variety and emotional development, keeping 
                  listeners engaged throughout the song.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚖️ Proportion & Balance</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Function</div>
                  <div className="text-sm text-gray-700">Creates satisfying structural relationships</div>
                </div>
                <div className="bg-violet-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Examples</div>
                  <div className="text-sm text-gray-700">Equal-length sections, golden ratio proportions</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Well-proportioned sections create a sense of architectural 
                  balance and structural inevitability.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Goal-Direction</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Function</div>
                  <div className="text-sm text-gray-700">Creates forward momentum and expectation</div>
                </div>
                <div className="bg-violet-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Examples</div>
                  <div className="text-sm text-gray-700">Build-ups to choruses, climactic moments</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Good forms create expectation and direct listener attention 
                  toward important structural moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Analysis Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Form Analysis Steps</h2>
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Step-by-Step Process</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-700"><strong>Listen</strong> for section changes and repetitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-700"><strong>Map</strong> the sections using letters (A, B, C)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-700"><strong>Count</strong> measures in each section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-700"><strong>Identify</strong> the overall form template</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-violet-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                    <span className="text-gray-700"><strong>Analyze</strong> how sections relate harmonically</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 What to Listen For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Melodic returns:</strong> Same or similar melodies</li>
                  <li>• <strong>Harmonic patterns:</strong> Repeated chord progressions</li>
                  <li>• <strong>Rhythmic changes:</strong> Different feels or grooves</li>
                  <li>• <strong>Textural shifts:</strong> Instrumentation changes</li>
                  <li>• <strong>Dynamic contrasts:</strong> Energy level changes</li>
                  <li>• <strong>Lyrical patterns:</strong> Verse vs. chorus content</li>
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
                <li>1. Map the form of 10 different songs using letter notation</li>
                <li>2. Compare songs in the same form but different genres</li>
                <li>3. Find examples of each major song form type</li>
                <li>4. Analyze how modern songs modify traditional forms</li>
                <li>5. Study the proportional relationships in successful songs</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Write songs in each of the major form types</li>
                <li>2. Take a simple song and try it in different forms</li>
                <li>3. Practice creating effective section contrasts</li>
                <li>4. Experiment with modern variations of traditional forms</li>
                <li>5. Focus on balancing repetition with variety</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/pre-chorus" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Pre-Chorus Structure
            </Link>
            <Link href="/lessons/songs/structure/transitions" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Transitions →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
