import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import VexTabRenderer from '@/components/VexTabRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CircleOfFifthsPage() {
  return (
    <Layout>
      <Header
        title="Circle of Fifths Progressions"
        subtitle="Master advanced harmonic movement and sophisticated voice leading through the powerful relationships of the circle of fifths."
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
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Circle of Fifths Progressions</h1>
          <p className="text-xl opacity-90 mb-4">
            Explore sophisticated progressions that move through keys using the powerful relationships in the circle of fifths, 
            creating some of the strongest harmonic movements in music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Root Motion by Fifths</span>
            <span className="bg-white/20 px-3 py-1 rounded">Classical & Jazz</span>
            <span className="bg-white/20 px-3 py-1 rounded">Voice Leading</span>
            <span className="bg-white/20 px-3 py-1 rounded">Modulation</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">The Power of Fifth Relationships</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Root motion by 5ths:</span> The strongest harmonic movement</li>
                <li><span className="font-medium">Voice leading:</span> Common tones and stepwise motion</li>
                <li><span className="font-medium">Functional harmony:</span> Clear sense of direction</li>
                <li><span className="font-medium">Sequential patterns:</span> Consistent harmonic rhythm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Circle Visualization</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-lg font-semibold text-gray-800 mb-2 text-center">Circle of Fifths</div>
                <div className="text-sm text-gray-600 space-y-1 text-center">
                  <div>C → G → D → A → E → B → F# → C#</div>
                  <div>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</div>
                  <div>F ← C ← G ← D ← A ← E ← B ← F#</div>
                </div>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  Moving clockwise increases sharps, counter-clockwise increases flats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Circle Movement: C - Am - Dm - G</h3>
            <p className="text-gray-600 mb-6">
              This fundamental progression demonstrates root movement by descending fifths (or ascending fourths), 
              creating a strong sense of harmonic motion.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">C Major</h4>
                <SimpleFretboardDiagram chord="C_major" />
                <p className="text-sm text-gray-500 mt-2">Starting point</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">A Minor</h4>
                <SimpleFretboardDiagram chord="A_minor" />
                <p className="text-sm text-gray-500 mt-2">Down a 5th</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">D Minor</h4>
                <SimpleFretboardDiagram chord="D_minor" />
                <p className="text-sm text-gray-500 mt-2">Down another 5th</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2 text-gray-700">G Major</h4>
                <SimpleFretboardDiagram chord="G_major" />
                <p className="text-sm text-gray-500 mt-2">Down another 5th</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <strong>Root movement:</strong> C (down 5th to) Am (down 5th to) Dm (down 5th to) G
            </div>
          </div>
        </div>

        {/* Advanced Voicings */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Voicings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Circle with 7th Chords</h3>
              <p className="text-gray-600 mb-4">
                Jazz musicians often use seventh chords in circle progressions for richer harmony and smoother voice leading.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-800 mb-2">Cmaj7 - Am7 - Dm7 - G7</h4>
                <p className="text-sm text-orange-700">
                  Notice how the 7th of each chord resolves down to the 3rd of the next chord, creating smooth voice leading.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Extended Circle Sequences</h3>
              <p className="text-gray-600 mb-4">
                Longer sequences create more sophisticated progressions that can span multiple measures.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-2">C-Am-Dm-G-Em-Am-Dm-G</h4>
                <p className="text-sm text-purple-700">
                  Each chord's root is a perfect fifth below the previous chord's root, creating an inevitable sense of forward motion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Circle of Fifths Movement</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <VexTabRenderer
                  vextab="tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,C,:++,.2,Am,:++,.3,Dm,:++,.4,G"
                />
              </div>
              <p className="text-sm text-gray-600">
                Each chord moves down a perfect fifth, creating strong harmonic motion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Extended Circle Pattern</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <VexTabRenderer
                  vextab="tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) |
notes :w (2/5.2/4.2/3.4/2.4/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,C,:++,.2,Am,:++,.3,Dm,:++,.4,G,:++,.5,Em,:++,.6,Am,:++,.7,Dm,:++,.8,G"
                />
              </div>
              <p className="text-sm text-gray-600">
                Extending the circle creates longer, more sophisticated progressions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Circle with 7th Chords</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <VexTabRenderer
                  vextab="tabstave notation=true key=C time=4/4
notes :w (x/6.3/5.2/4.4/3.5/2.x/1) | :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (x/6.x/5.1/4.2/3.1/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1)
text ++,.1,Cmaj7,:++,.2,Am7,:++,.3,Dm7,:++,.4,G7"
                />
              </div>
              <p className="text-sm text-gray-600">
                Seventh chords create richer harmony and smoother voice leading in jazz applications.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Progressive Learning</h3>
              <ol className="space-y-3 text-gray-600">
                <li><span className="font-medium">1. Basic pattern:</span> Master C-Am-Dm-G with smooth transitions</li>
                <li><span className="font-medium">2. Different keys:</span> Practice in G, D, A, F major</li>
                <li><span className="font-medium">3. Extended sequences:</span> Add more chords to the circle</li>
                <li><span className="font-medium">4. Seventh chords:</span> Use jazz voicings for richer harmony</li>
                <li><span className="font-medium">5. Voice leading:</span> Focus on smooth chord transitions</li>
                <li><span className="font-medium">6. Real songs:</span> Apply to jazz standards and classical pieces</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Technical Focus</h3>
              <ul className="space-y-3 text-gray-600">
                <li><span className="font-medium">Fingerpicking:</span> Practice circle progressions with arpeggios</li>
                <li><span className="font-medium">Strumming patterns:</span> Use different rhythmic feels</li>
                <li><span className="font-medium">Chord voicings:</span> Explore different fingerings and inversions</li>
                <li><span className="font-medium">Bass lines:</span> Practice descending bass movement</li>
                <li><span className="font-medium">Tempo work:</span> Start slow, gradually increase speed</li>
                <li><span className="font-medium">Improvisation:</span> Create melodies over circle progressions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VexTab Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Exercises</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Circle in Different Keys</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Starting Key</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">4-Chord Circle</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Roman Numerals</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">C Major</td>
                      <td className="px-4 py-3 text-gray-600">C - Am - Dm - G</td>
                      <td className="px-4 py-3 text-gray-600">I - vi - ii - V</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">G Major</td>
                      <td className="px-4 py-3 text-gray-600">G - Em - Am - D</td>
                      <td className="px-4 py-3 text-gray-600">I - vi - ii - V</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">D Major</td>
                      <td className="px-4 py-3 text-gray-600">D - Bm - Em - A</td>
                      <td className="px-4 py-3 text-gray-600">I - vi - ii - V</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">F Major</td>
                      <td className="px-4 py-3 text-gray-600">F - Dm - Gm - C</td>
                      <td className="px-4 py-3 text-gray-600">I - vi - ii - V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Relationships & Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Relationships & Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bach chorales and fugues</li>
                <li>• Mozart and Beethoven sonatas</li>
                <li>• Sequence patterns in development sections</li>
                <li>• Modulation to related keys</li>
                <li>• Counterpoint exercises</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Circle progressions are fundamental to classical harmony and voice leading principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Jazz Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "Autumn Leaves" - Circle in bridge section</li>
                <li>• "All the Things You Are" - Extended circles</li>
                <li>• "Giant Steps" - Coltrane changes</li>
                <li>• "Fly Me to the Moon" - Circle sequences</li>
                <li>• "All of Me" - Classic circle movement</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Jazz heavily uses circle progressions for sophisticated harmonic movement and improvisation.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Advanced Techniques</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-medium text-pink-800 mb-2">Tritone Substitutions</h4>
                <p className="text-pink-700 text-sm mb-2">
                  Replace dominant chords with chords a tritone away for sophisticated jazz harmony.
                </p>
                <div className="bg-white rounded p-3 text-xs">
                  <div className="font-medium">Instead of: Am7 - D7 - G</div>
                  <div className="text-gray-600">Try: Am7 - Ab7 - G</div>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">Chromatic Movement</h4>
                <p className="text-yellow-700 text-sm mb-2">
                  Add chromatic passing chords between circle changes for smoother voice leading.
                </p>
                <div className="bg-white rounded p-3 text-xs">
                  <div className="font-medium">Basic: C - Am - Dm - G</div>
                  <div className="text-gray-600">With passing: C - C#dim7 - Dm - G</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Progressions Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Continue Your Progressions Journey</h2>
          <p className="text-gray-600 mb-8">
            Master circle of fifths progressions and explore more advanced harmonic concepts to expand your musical vocabulary.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/lessons/theory/progressions/vi-iv-i-v" 
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                vi-IV-I-V Progression
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Explore the emotional "axis progression" that drives modern pop music.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                Previous Lesson ←
              </div>
            </Link>

            <Link 
              href="/lessons/theory/progressions" 
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                All Progressions
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Return to the complete library of chord progressions and harmonic concepts.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                Overview ↑
              </div>
            </Link>

            <Link 
              href="/lessons/theory/chords" 
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Advanced Chords
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn extended and altered harmonies to enrich your circle progressions.
              </p>
              <div className="text-xs text-blue-600 font-medium">
                Next Step →
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
