import Link from 'next/link';

export default function ReverbPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reverb Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The most fundamental spatial effect. Reverb simulates acoustic spaces, 
          from intimate rooms to vast cathedrals, adding depth and dimension to your sound.
        </p>
      </div>

      {/* What is Reverb */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Reverb?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Reverb is the persistence of sound in a space after the original sound stops. 
            In nature, reverb occurs when sound waves reflect off surfaces in an environment. 
            Reverb effects simulate these reflections, creating the impression of playing in different spaces.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Components of Reverb</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Early reflections:</strong> First echoes off surfaces</li>
                <li>• <strong>Late reflections:</strong> Dense reverb tail</li>
                <li>• <strong>Decay time:</strong> How long reverb lasts</li>
                <li>• <strong>Pre-delay:</strong> Gap before reverb starts</li>
                <li>• <strong>Diffusion:</strong> Echo density and smoothness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creates sense of space and depth</li>
                <li>• Smooths harsh transients</li>
                <li>• Adds sustain to notes</li>
                <li>• Enhances emotional impact</li>
                <li>• Glues instruments together</li>
                <li>• Provides ambient texture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Reverb */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Reverb</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spring Reverb</h3>
            <p className="text-gray-700 mb-4">
              Mechanical reverb using metal springs. Classic surf and rockabilly sound 
              with distinctive "boing" character.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Found in:</strong> Fender amps, outboard spring tanks, pedals
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Plate Reverb</h3>
            <p className="text-gray-700 mb-4">
              Large metal plates create smooth, dense reverb. Studio standard 
              from the 1960s-80s with distinctive bright character.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Famous units:</strong> EMT 140, Ecoplate, modern plate emulations
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hall Reverb</h3>
            <p className="text-gray-700 mb-4">
              Simulates large acoustic spaces like concert halls. Long decay times 
              and natural-sounding reflections.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Applications:</strong> Orchestral music, ambient textures, ballads
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Room Reverb</h3>
            <p className="text-gray-700 mb-4">
              Intimate acoustic spaces with shorter decay times. Natural-sounding 
              reverb that doesn't overwhelm the dry signal.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Best for:</strong> Adding space without clouding the mix
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Chamber Reverb</h3>
            <p className="text-gray-700 mb-4">
              Echo chambers used in classic recordings. Warm, musical reverb 
              with distinctive character.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Famous examples:</strong> Abbey Road chambers, Capitol Studios
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Algorithmic Reverb</h3>
            <p className="text-gray-700 mb-4">
              Digital reverbs that create artificial spaces through mathematical 
              algorithms. Highly controllable and versatile.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Lexicon, TC Electronic, Strymon algorithms
            </div>
          </div>
        </div>
      </section>

      {/* Famous Reverb Units */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Reverb Units</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lexicon 480L</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The gold standard of digital reverb. Used on countless hit records 
                  from the 1980s onward. Incredibly musical algorithms.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Lush, musical digital reverbs with excellent diffusion and natural decay.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Applications:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Phil Collins - "In The Air Tonight"</li>
                  <li>• Countless 80s pop hits</li>
                  <li>• Film soundtracks</li>
                  <li>• Professional studios worldwide</li>
                  <li>• Modern pop and R&B production</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">EMT 140 Plate Reverb</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The original and most famous plate reverb. Massive 4×8 foot metal 
                  plates created the smooth, dense reverb heard on classic recordings.
                </p>
                <div className="bg-amber-50 p-3 rounded">
                  <h4 className="font-semibold text-amber-800 mb-2">Signature Sound:</h4>
                  <p className="text-amber-700 text-sm">
                    Smooth, dense reverb with bright character and musical decay.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Recordings:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Led Zeppelin - "When The Levee Breaks"</li>
                  <li>• Pink Floyd albums</li>
                  <li>• Abbey Road Studios recordings</li>
                  <li>• Classic rock and pop</li>
                  <li>• Motown productions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fender Spring Reverb</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Built into classic Fender amplifiers. The iconic "drip" sound 
                  of surf music and rockabilly. Mechanical and characterful.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Bright, splashy reverb with distinctive spring crash when amp is moved.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Dick Dale - King of surf guitar</li>
                  <li>• The Ventures - Instrumental surf</li>
                  <li>• Hank Marvin - The Shadows</li>
                  <li>• Country and rockabilly players</li>
                  <li>• Modern surf revival bands</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strymon BigSky</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Modern digital reverb pedal with studio-quality algorithms. 
                  Combines classic reverb types with modern innovations.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    High-quality digital reverbs with extensive tweakability and pristine sound.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 12 reverb algorithms</li>
                  <li>• Studio-quality processing</li>
                  <li>• MIDI control capabilities</li>
                  <li>• Preset storage</li>
                  <li>• Expression pedal control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reverb Parameters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Reverb Parameters</h2>
        <div className="bg-teal-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Controls</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Basic Parameters</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Decay/Time:</strong> How long reverb lasts</li>
                <li><strong>Pre-delay:</strong> Gap before reverb starts</li>
                <li><strong>Mix/Level:</strong> Wet/dry balance</li>
                <li><strong>Tone/Damping:</strong> High-frequency filtering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Advanced Parameters</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Diffusion:</strong> Echo density and smoothness</li>
                <li><strong>Size:</strong> Apparent room size</li>
                <li><strong>Early/Late Balance:</strong> Reflection mix</li>
                <li><strong>Modulation:</strong> Movement in the reverb tail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Reverb Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Reverb Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Musical Guidelines</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Match reverb to musical style</li>
              <li>• Use pre-delay to maintain clarity</li>
              <li>• EQ reverb returns appropriately</li>
              <li>• Consider the mix context</li>
              <li>• Less reverb in busy arrangements</li>
              <li>• More reverb for emotional impact</li>
            </ul>
          </div>

          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Place reverb last in signal chain</li>
              <li>• Use sends/returns when possible</li>
              <li>• High-pass filter reverb at 80-100Hz</li>
              <li>• Automate reverb for dynamics</li>
              <li>• Layer different reverb types</li>
              <li>• Use reverb tails as transitions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reverb Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Subtle Enhancement</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Type: Room or small hall</li>
                <li>• Decay: 0.8-1.5 seconds</li>
                <li>• Mix: 15-25%</li>
                <li>• Use: Natural space</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Classic Rock/Pop</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Type: Plate or hall</li>
                <li>• Decay: 1.5-3 seconds</li>
                <li>• Mix: 25-40%</li>
                <li>• Use: Musical enhancement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ambient/Atmospheric</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Type: Hall or shimmer</li>
                <li>• Decay: 4+ seconds</li>
                <li>• Mix: 40-60%</li>
                <li>• Use: Soundscapes</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-teal-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> The key to great reverb is restraint. Start with less 
              than you think you need, then gradually add more. Reverb should enhance your 
              sound, not dominate it.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/lessons/gear/effects" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Effects Overview
          </Link>
          <div className="text-sm text-gray-500">
            Reverb Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
