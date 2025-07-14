import Link from 'next/link';

export default function DistortionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Distortion Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Aggressive, heavily clipped signals that form the backbone of metal, punk, 
          and hard rock. From vintage circuits to modern high-gain monsters.
        </p>
      </div>

      {/* What is Distortion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Distortion?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Distortion is a form of audio signal processing that intentionally alters the waveform 
            through aggressive clipping, creating harmonic content and sustained notes. Unlike overdrive, 
            distortion typically produces more consistent gain regardless of input level.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Characteristics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Heavy signal clipping</li>
                <li>• Sustained notes and chords</li>
                <li>• Added harmonic content</li>
                <li>• Compressed dynamics</li>
                <li>• Aggressive, powerful sound</li>
                <li>• Consistent gain response</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Heavy metal and hard rock</li>
                <li>• Punk and alternative rock</li>
                <li>• Power chords and riffs</li>
                <li>• Sustained lead guitar</li>
                <li>• Industrial and grunge</li>
                <li>• Modern rock production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Distortion vs Overdrive */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Distortion vs. Overdrive</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Overdrive</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Soft, gradual clipping</li>
                <li>• Touch-sensitive dynamics</li>
                <li>• Preserves fundamental tone</li>
                <li>• Natural, amp-like saturation</li>
                <li>• Best with clean or edge-of-breakup amps</li>
                <li>• Responds to guitar volume</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Distortion</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Hard, aggressive clipping</li>
                <li>• More consistent gain</li>
                <li>• Colors and transforms tone</li>
                <li>• Electronic, processed sound</li>
                <li>• Works with any amp setting</li>
                <li>• Less responsive to input level</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Distortion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Distortion Pedals</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Classic Rock Distortion</h3>
            <p className="text-gray-700 mb-4">
              Moderate distortion levels perfect for classic rock, blues rock, and vintage tones. 
              Maintains note clarity while adding sustain.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss DS-1, ProCo RAT 2, MXR Distortion+
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Gain Distortion</h3>
            <p className="text-gray-700 mb-4">
              Extreme distortion levels for metal, hardcore, and modern rock. 
              Often includes multiple gain stages and EQ shaping.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss MT-2, Electro-Harmonix Metal Muff, TC Electronic Dark Matter
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Amp-in-a-Box</h3>
            <p className="text-gray-700 mb-4">
              Recreates the preamp distortion of famous amplifiers, allowing you 
              to get iconic amp tones through any clean amp.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Tech 21 SansAmp, AMT Electronics, Friedman BE-OD
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern/Digital</h3>
            <p className="text-gray-700 mb-4">
              Uses digital processing or modern analog circuits to create pristine, 
              controllable distortion with advanced features.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss DS-1X, Line 6 Helix distortions, Source Audio LA Lady
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Distortion Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Distortion Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss DS-1 Distortion</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The most popular distortion pedal ever made. Simple, reliable, and versatile. 
                  The DS-1 has been used on countless recordings across all genres since 1978.
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Signature Sound:</h4>
                  <p className="text-orange-700 text-sm">
                    Bright, cutting distortion with excellent note definition and moderate gain.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Kurt Cobain - Nirvana's grunge sound</li>
                  <li>• Steve Vai - Lead guitar work</li>
                  <li>• Joe Satriani - Clean/distortion contrast</li>
                  <li>• Metallica - Early albums</li>
                  <li>• Countless punk and alternative bands</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ProCo RAT 2</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Aggressive midrange-focused distortion that cuts through any mix. 
                  The RAT's unique filter control allows you to shape the high-end response.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Signature Sound:</h4>
                  <p className="text-red-700 text-sm">
                    Aggressive, midrange-heavy distortion with excellent sustain and note clarity.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jeff Beck - Lead guitar mastery</li>
                  <li>• Dave Grohl - Foo Fighters power</li>
                  <li>• Thom Yorke - Radiohead textures</li>
                  <li>• Graham Coxon - Blur's edge</li>
                  <li>• Metallica - Rhythm guitar bite</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss MT-2 Metal Zone</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The quintessential high-gain distortion pedal. Features extensive EQ controls 
                  and massive amounts of gain for extreme metal tones.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    Extremely high gain with scooped mids and extensive tonal shaping capabilities.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Dimebag Darrell - Pantera's crushing tone</li>
                  <li>• John Frusciante - Red Hot Chili Peppers</li>
                  <li>• Death metal and extreme metal bands</li>
                  <li>• Modern metal producers</li>
                  <li>• Bedroom metal enthusiasts worldwide</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MXR Distortion+</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Simple two-knob distortion with a distinctive sound. Known for its raw, 
                  in-your-face character and use in early punk and metal recordings.
                </p>
                <div className="bg-yellow-50 p-3 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">Signature Sound:</h4>
                  <p className="text-yellow-700 text-sm">
                    Raw, uncompressed distortion with a distinctive midrange character.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Randy Rhoads - Ozzy Osbourne era</li>
                  <li>• Bob Mould - Hüsker Dü</li>
                  <li>• Jerry Cantrell - Alice in Chains</li>
                  <li>• Punk and hardcore pioneers</li>
                  <li>• Early metal guitarists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQ and Tone Shaping */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">EQ and Tone Shaping</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Distortion EQ</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Bass/Low Frequencies</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Controls bottom-end thickness</li>
                <li>• Too much = muddy tone</li>
                <li>• Too little = thin sound</li>
                <li>• Adjust for room acoustics</li>
                <li>• Consider bass guitar presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Midrange</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Most important for cutting through</li>
                <li>• Scooped = modern metal sound</li>
                <li>• Boosted = classic rock punch</li>
                <li>• Affects harmonic content</li>
                <li>• Key for mix presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Treble/High Frequencies</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Adds brightness and clarity</li>
                <li>• Too much = harsh, fizzy</li>
                <li>• Too little = dark, muffled</li>
                <li>• Affects pick attack definition</li>
                <li>• Important for note separation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Distortion Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Distortion Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Use palm muting for tight rhythm</li>
              <li>• Adjust picking technique for attack</li>
              <li>• Consider string gauge and tuning</li>
              <li>• Use noise gate for clean stops</li>
              <li>• Balance gain vs. note clarity</li>
              <li>• Practice clean to hear mistakes</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recording Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Double-track for thickness</li>
              <li>• Use less gain than live settings</li>
              <li>• EQ differently for mix context</li>
              <li>• Consider amp simulation IR</li>
              <li>• Layer different distortion types</li>
              <li>• Use high-pass filter to clean up bass</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Distortion Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Classic Rock</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Gain: 10-12 o'clock</li>
                <li>• Level: Match bypass</li>
                <li>• Tone: 12-1 o'clock</li>
                <li>• Use: Riffs and solos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Modern Metal</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Gain: 2-4 o'clock</li>
                <li>• Level: Slightly above bypass</li>
                <li>• EQ: Scooped mids</li>
                <li>• Use: Tight rhythm, sustain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Punk/Alternative</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Gain: 11-2 o'clock</li>
                <li>• Level: Boost for aggression</li>
                <li>• Tone: Bright and cutting</li>
                <li>• Use: Raw power chords</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> More gain isn't always better. Find the minimum amount 
              of distortion that gives you the sustain and character you need, while maintaining 
              note clarity and definition.
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
            Distortion Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
