import Link from 'next/link';

export default function OverdrivePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Overdrive Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The most musical and dynamic form of distortion. Overdrive pedals add warmth, 
          sustain, and natural tube-like compression to your guitar tone.
        </p>
      </div>

      {/* What is Overdrive */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Overdrive?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Overdrive is a form of audio signal distortion that occurs when an amplifier is driven 
            beyond its clean headroom. Unlike harsh distortion, overdrive provides a warm, musical 
            saturation that responds dynamically to your playing touch and guitar volume.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Characteristics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Warm, musical clipping</li>
                <li>• Touch-sensitive dynamics</li>
                <li>• Preserves fundamental tone</li>
                <li>• Natural compression</li>
                <li>• Mid-range focus</li>
                <li>• Amp-like saturation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Blues and rock rhythm</li>
                <li>• Lead guitar sustain</li>
                <li>• Pushing tube amps</li>
                <li>• Adding warmth to clean tones</li>
                <li>• Stacking with other drives</li>
                <li>• Country and folk textures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Overdrive Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Overdrive Works</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Circuit Design & Signal Processing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tube-Style Circuits</h4>
              <p className="text-gray-700 mb-3">
                Many overdrive pedals use op-amp circuits with diode clipping to simulate 
                the natural compression and harmonic content of overdriven tube amplifiers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Asymmetrical clipping for warmth</li>
                <li>• Mid-range emphasis</li>
                <li>• Gradual onset distortion</li>
                <li>• Dynamic response to input level</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Controls & Parameters</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Drive/Gain:</strong> Amount of overdrive saturation</li>
                <li><strong>Level/Volume:</strong> Output volume control</li>
                <li><strong>Tone:</strong> High-frequency roll-off</li>
                <li><strong>Others:</strong> Some include bass, presence, or mid controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Overdrive */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Overdrive Pedals</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Overdrive</h3>
            <p className="text-gray-700 mb-4">
              Designed to maintain your guitar and amp's natural character while adding 
              gain and sustain. Perfect for pushing tube amps.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss OD-1, Ibanez TS808, Xotic EP Booster
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Colored Overdrive</h3>
            <p className="text-gray-700 mb-4">
              Adds distinctive tonal character along with overdrive. These pedals 
              have their own unique voice and EQ signature.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss Blues Breaker, ProCo RAT, DOD 250
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tube Screamer Style</h3>
            <p className="text-gray-700 mb-4">
              The most popular overdrive topology. Known for mid-range focus, 
              smooth clipping, and ability to tighten low end.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Ibanez TS9, Boss SD-1, Maxon OD808
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vintage-Style</h3>
            <p className="text-gray-700 mb-4">
              Recreates the sound of specific vintage amplifiers or classic 
              overdrive circuits from the 70s and 80s.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Marshall Blues Breaker, Boss OD-3, Fulltone OCD
            </div>
          </div>
        </div>
      </section>

      {/* Famous Overdrive Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Overdrive Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ibanez Tube Screamer (TS808/TS9)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The most influential overdrive pedal ever made. Known for its smooth midrange focus 
                  and ability to make any amp sound better. Used by Stevie Ray Vaughan, Gary Moore, 
                  and countless blues and rock legends.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Mid-range focused, smooth clipping, tight low end, perfect for blues and lead tones.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Stevie Ray Vaughan - Texas blues</li>
                  <li>• Gary Moore - Emotional leads</li>
                  <li>• John Mayer - Modern blues</li>
                  <li>• The Edge - U2's signature sound</li>
                  <li>• Trey Anastasio - Phish jams</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss Blues Breaker (BB-2)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Based on the Marshall Blues Breaker amplifier, this pedal delivers vintage 
                  British overdrive tones. More open and less compressed than Tube Screamers.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Open, transparent overdrive with British character and natural dynamics.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• John Mayer - Clean boost and overdrive</li>
                  <li>• Eric Johnson - Strat tones</li>
                  <li>• Many session musicians</li>
                  <li>• Blues and country artists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ProCo RAT 2</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Technically a distortion pedal, but often used as a high-gain overdrive. 
                  Known for its aggressive midrange and ability to cut through dense mixes.
                </p>
                <div className="bg-yellow-50 p-3 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">Signature Sound:</h4>
                  <p className="text-yellow-700 text-sm">
                    Aggressive, midrange-heavy overdrive with great note definition and sustain.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jeff Beck - Lead tones</li>
                  <li>• Dave Grohl - Foo Fighters</li>
                  <li>• Thom Yorke - Radiohead</li>
                  <li>• Graham Coxon - Blur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Using Overdrive Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Overdrive Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technique Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Use guitar volume knob for dynamics</li>
              <li>• Set drive level for touch sensitivity</li>
              <li>• Experiment with pick attack intensity</li>
              <li>• Try different pickup positions</li>
              <li>• Adjust amp EQ with overdrive engaged</li>
              <li>• Use moderate gain for best note clarity</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stacking & Combinations</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stack two overdrives for more gain</li>
              <li>• Use lower gain OD to push higher gain OD</li>
              <li>• Combine with fuzz for unique textures</li>
              <li>• Use as clean boost (drive at minimum)</li>
              <li>• Push tube amps into natural saturation</li>
              <li>• Layer with compression for sustain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overdrive Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Blues/Rock Rhythm</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Drive: 9-11 o'clock</li>
                <li>• Level: Match bypassed volume</li>
                <li>• Tone: 12-1 o'clock</li>
                <li>• Use: Chord work and rhythm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Lead Guitar</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Drive: 12-3 o'clock</li>
                <li>• Level: Boost above rhythm</li>
                <li>• Tone: 1-2 o'clock</li>
                <li>• Use: Solo sustain and punch</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Clean Boost</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Drive: Minimum</li>
                <li>• Level: 2-4 o'clock</li>
                <li>• Tone: Match guitar tone</li>
                <li>• Use: Push amp harder</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Start with all controls at noon, then adjust to taste. 
              Remember that overdrive pedals interact heavily with your amp's preamp, 
              so adjust both together for optimal results.
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
            Overdrive Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
