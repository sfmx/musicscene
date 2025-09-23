import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TwelveBarBluesPage() {
  return (
    <Layout>
      <Header
        title="12-Bar Blues Progression"
        subtitle="The foundational form that shaped blues, jazz, rock & roll, and modern popular music - a twelve-measure harmonic pattern that tells a complete musical story."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/progressions" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Progressions Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 to-red-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">12-Bar Blues Progression</h1>
          <p className="text-xl opacity-90 mb-4">
            The 12-bar blues is the most influential progression in American music, providing the foundation 
            for blues, jazz, rock & roll, and countless other genres with its perfect balance of structure and emotional expression.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">12-Measure Form</span>
            <span className="bg-white/20 px-3 py-1 rounded">I-IV-V Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Blues Standard</span>
            <span className="bg-white/20 px-3 py-1 rounded">Universal Pattern</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">12-Bar Structure</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm space-y-1">
                  <div><span className="font-bold">Bars 1-4:</span> I - I - I - I</div>
                  <div><span className="font-bold">Bars 5-8:</span> IV - IV - I - I</div>
                  <div><span className="font-bold">Bars 9-12:</span> V - IV - I - V</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Three sections of four bars each</li>
                <li>Uses primary triads (I, IV, V)</li>
                <li>Creates complete harmonic journey</li>
                <li>Turnaround leads back to beginning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Historical Impact</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Blues:</span> The foundation of Delta and Chicago blues</li>
                <li><span className="font-medium">Jazz:</span> Standard form for improvisation and composition</li>
                <li><span className="font-medium">Rock & Roll:</span> The backbone of early rock music</li>
                <li><span className="font-medium">Modern Music:</span> Still used in contemporary genres</li>
                <li><span className="font-medium">Learning Tool:</span> Perfect for understanding harmony</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Basic 12-Bar Blues in E</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">I - E7</h4>
                <SimpleFretboardDiagram chord="E7" />
                <p className="text-sm text-gray-500 mt-2">Tonic - home base</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">IV - A7</h4>
                <SimpleFretboardDiagram chord="A7" />
                <p className="text-sm text-gray-500 mt-2">Subdominant - movement</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">V - B7</h4>
                <SimpleFretboardDiagram chord="B7" />
                <p className="text-sm text-gray-500 mt-2">Dominant - tension</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Guitar-Friendly Keys</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of E:</span>
                  <span>E7 - A7 - B7</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of A:</span>
                  <span>A7 - D7 - E7</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of G:</span>
                  <span>G7 - C7 - D7</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span className="font-medium">Key of C:</span>
                  <span>C7 - F7 - G7</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Rhythm Patterns</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-medium text-sm mb-1">Shuffle Feel</h4>
                  <div className="font-mono text-xs">♪ ♫ ♪ ♫ (swing eighths)</div>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-medium text-sm mb-1">Basic Strum</h4>
                  <div className="font-mono text-xs">D - u - D - u -</div>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-medium text-sm mb-1">Emphasis</h4>
                  <div className="font-mono text-xs">Strong on beats 1 & 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Variations */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Variations</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Change Blues</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-yellow-800 mb-3">
                  The quick change variation adds the IV chord in bar 2, creating more harmonic movement:
                </p>
                <div className="bg-white rounded p-4 font-mono text-sm">
                  <div><span className="font-bold">Bars 1-4:</span> I - IV - I - I</div>
                  <div><span className="font-bold">Bars 5-8:</span> IV - IV - I - I</div>
                  <div><span className="font-bold">Bars 9-12:</span> V - IV - I - V</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Blues Substitutions</h3>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-purple-800 mb-3">
                  Jazz musicians add sophisticated substitutions and extended harmony:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• ii-V substitutions in various measures</li>
                    <li>• Chromatic passing chords (#IVdim7)</li>
                    <li>• Extended chords (9ths, 11ths, 13ths)</li>
                  </ul>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Tritone substitutions</li>
                    <li>• Minor blues variations (i-iv-V)</li>
                    <li>• Modal interchange chords</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Classic Blues</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• "Sweet Home Chicago" - Robert Johnson</li>
                <li>• "Stormy Monday" - T-Bone Walker</li>
                <li>• "The Thrill Is Gone" - B.B. King</li>
                <li>• "Pride and Joy" - Stevie Ray Vaughan</li>
                <li>• "Crossroads" - Robert Johnson</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-red-800 mb-4">Rock & Roll</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• "Johnny B. Goode" - Chuck Berry</li>
                <li>• "Hound Dog" - Elvis Presley</li>
                <li>• "Rock Around the Clock" - Bill Haley</li>
                <li>• "Blue Suede Shoes" - Carl Perkins</li>
                <li>• "Roll Over Beethoven" - Chuck Berry</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-4">Jazz Standards</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• "Billie's Bounce" - Charlie Parker</li>
                <li>• "Bag's Groove" - Milt Jackson</li>
                <li>• "Blue Moon" - Jazz version</li>
                <li>• "C Jam Blues" - Duke Ellington</li>
                <li>• "Tenor Madness" - Sonny Rollins</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-amber-800 mb-3">🎵 The "Axis of Awesome" Connection</h3>
            <p className="text-amber-700">
              While many pop songs use the I-V-vi-IV progression, the 12-bar blues remains the foundation 
              for understanding how chord progressions create emotional journeys in music.
            </p>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 1: Basic Pattern</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Form:</span> 12-bar blues in E</p>
                <p className="text-sm"><span className="font-medium">Chords:</span> E7 - A7 - B7</p>
                <p className="text-sm"><span className="font-medium">Rhythm:</span> 4 beats per chord</p>
                <p className="text-sm"><span className="font-medium">Focus:</span> Clean chord changes</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Exercise 2: Shuffle Feel</h3>
              <div className="space-y-3">
                <p className="text-sm"><span className="font-medium">Pattern:</span> Swing eighths (triplet feel)</p>
                <p className="text-sm"><span className="font-medium">Strum:</span> Down-up with shuffle</p>
                <p className="text-sm"><span className="font-medium">Emphasis:</span> Strong beats 1 and 3</p>
                <p className="text-sm"><span className="font-medium">Goal:</span> Authentic blues groove</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-800 mb-4">Progressive Learning Plan</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-green-800 mb-2">Week 1: Foundation</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Master E7, A7, B7 shapes</li>
                  <li>• Learn basic 12-bar structure</li>
                  <li>• Practice chord transitions</li>
                  <li>• Work on steady rhythm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">Week 2: Feel & Groove</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Develop shuffle feel</li>
                  <li>• Practice with metronome</li>
                  <li>• Add quick change variation</li>
                  <li>• Learn in key of A</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">Week 3+: Application</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Play along with blues songs</li>
                  <li>• Learn multiple keys</li>
                  <li>• Try jazz substitutions</li>
                  <li>• Develop personal style</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* VexTab Notation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Notation</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic 12-Bar Blues in E</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <AlphaTexRenderer
                  alphaTex={`
                    tabstave notation=true key=E time=4/4
                    notes :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## :w ## :w ## |
                    notes :w (0/5.2/4.2/3.1/2.0/1) :w ## :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
                    notes :w (2/6.2/5.1/4.0/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (2/6.2/5.1/4.0/3.0/2.0/1)
                    text ++,.1,E7,:++,.5,E7,:++,.9,A7,:++,.11,E7,:++,.13,B7,:++,.14,A7,:++,.15,E7,:++,.16,B7
                  `}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Change Blues in E</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <AlphaTexRenderer
                  alphaTex={`
                    tabstave notation=true key=E time=4/4
                    notes :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
                    notes :w (0/5.2/4.2/3.1/2.0/1) :w ## :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
                    notes :w (2/6.2/5.1/4.0/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (2/6.2/5.1/4.0/3.0/2.0/1)
                    text ++,.1,E7,:++,.2,A7,:++,.3,E7,:++,.7,A7,:++,.11,E7,:++,.13,B7,:++,.14,A7,:++,.15,E7,:++,.16,B7
                  `}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Blues with Substitutions in C</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <AlphaTexRenderer
                  alphaTex={`
                    tabstave notation=true key=C time=4/4
                    notes :w (x/6.3/5.2/4.3/3.1/2.x/1) :w (1/6.x/5.2/4.1/3.1/2.x/1) :w (x/6.3/5.2/4.3/3.1/2.x/1) :w (x/6.x/5.1/4.2/3.1/2.x/1) |
                    notes :w (1/6.x/5.2/4.1/3.1/2.x/1) :w ## :w (x/6.3/5.2/4.3/3.1/2.x/1) :w (x/6.0/5.2/4.0/3.1/2.x/1) |
                    notes :w (3/6.x/5.0/4.0/3.0/2.1/1) :w (1/6.x/5.2/4.1/3.1/2.x/1) :w (x/6.3/5.2/4.3/3.1/2.x/1) :w (3/6.x/5.0/4.0/3.0/2.1/1)
                    text ++,.1,C7,:++,.2,F7,:++,.3,C7,:++,.4,C#dim7,:++,.5,F7,:++,.9,C7,:++,.10,Am7,:++,.11,G7,:++,.12,F7,:++,.13,C7,:++,.14,G7
                  `}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Relationships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Relationships</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Related Progressions</h3>
              <ul className="space-y-2 text-blue-700">
                <li><span className="font-medium">I-IV-V:</span> The three chords used in blues</li>
                <li><span className="font-medium">ii-V-I:</span> Jazz substitutions in blues</li>
                <li><span className="font-medium">Circle of Fifths:</span> Understanding chord relationships</li>
                <li><span className="font-medium">Minor Blues:</span> i-iv-V in minor keys</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-4">Musical Applications</h3>
              <ul className="space-y-2 text-green-700">
                <li><span className="font-medium">Blues:</span> The foundation form</li>
                <li><span className="font-medium">Jazz:</span> Standard for improvisation</li>
                <li><span className="font-medium">Rock:</span> Basis for many rock songs</li>
                <li><span className="font-medium">Learning:</span> Perfect for understanding harmony</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Progressions Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Now that you understand the 12-bar blues, explore other essential progressions that build on these harmonic foundations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/progressions/i-iv-v" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">I-IV-V Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the most fundamental progression in Western music.
                </p>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn the foundation →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/ii-v-i" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ii-V-I Progression</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Master the cornerstone of jazz harmony with smooth voice leading.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Learn jazz harmony →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/progressions/turnarounds" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Turnarounds</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the connecting phrases that link chord progressions.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Connect progressions →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/lessons/theory/progressions/i-v-vi-iv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4 sm:mb-0"
          >
            <span className="mr-2">←</span>
            Previous: I-V-vi-IV Progression
          </Link>
          <Link 
            href="/lessons/theory/progressions/turnarounds" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Next: Turnarounds
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
