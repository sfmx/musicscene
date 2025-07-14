import Link from 'next/link';

export default function CompressorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Compressor Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The invisible hand that shapes your dynamics. Compressors even out volume levels, 
          add sustain, and create the polished sound of professional recordings.
        </p>
      </div>

      {/* What is Compression */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Compression?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Compression reduces the dynamic range of your signal by automatically lowering 
            the volume of loud parts and/or raising the volume of quiet parts. This creates 
            a more consistent level and can add sustain, punch, and professional polish.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Monitors input signal level</li>
                <li>• Reduces gain when signal exceeds threshold</li>
                <li>• Applies gain reduction at set ratio</li>
                <li>• Can add makeup gain to compensate</li>
                <li>• Attack and release control timing</li>
                <li>• Creates more consistent dynamics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Even volume levels</li>
                <li>• Increased sustain</li>
                <li>• Enhanced picking attack</li>
                <li>• Better string balance</li>
                <li>• Improved mix presence</li>
                <li>• Professional polish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compressor Parameters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Compressor Controls</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Parameters</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Primary Controls</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Threshold:</strong> Level where compression begins</li>
                <li><strong>Ratio:</strong> Amount of compression applied</li>
                <li><strong>Attack:</strong> How quickly compression engages</li>
                <li><strong>Release:</strong> How quickly compression disengages</li>
                <li><strong>Makeup Gain:</strong> Compensates for level reduction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Common Ratios</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>2:1 to 3:1:</strong> Gentle, musical compression</li>
                <li><strong>4:1 to 6:1:</strong> Moderate compression</li>
                <li><strong>8:1 to 10:1:</strong> Heavy compression</li>
                <li><strong>∞:1 (Limiting):</strong> Hard ceiling</li>
                <li><strong>1:1:</strong> No compression (bypass)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Compressors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Compressors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Optical Compressors</h3>
            <p className="text-gray-700 mb-4">
              Use light-dependent resistors for smooth, musical compression. 
              Slow, natural response that's perfect for rhythm guitar and vocals.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> LA-2A, Empress Compressor, Origin Effects Cali76
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FET Compressors</h3>
            <p className="text-gray-700 mb-4">
              Field Effect Transistor designs provide fast, punchy compression. 
              Great for adding attack and presence to guitar.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> 1176, Wampler Ego, Keeley Compressor
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">VCA Compressors</h3>
            <p className="text-gray-700 mb-4">
              Voltage Controlled Amplifier designs offer precise control 
              and transparent compression.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> DBX 160X, SSL bus compressors, many modern pedals
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tube Compressors</h3>
            <p className="text-gray-700 mb-4">
              Vacuum tube designs add harmonic warmth and musical saturation 
              along with compression.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Fairchild 670, Manley Variable Mu, tube pedals
            </div>
          </div>
        </div>
      </section>

      {/* Famous Compressor Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Compressor Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MXR Dyna Comp</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The classic guitar compressor. Simple two-knob design with distinctive 
                  character. Used on countless recordings since the 1970s.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Signature Sound:</h4>
                  <p className="text-red-700 text-sm">
                    Punchy, colored compression with enhanced pick attack and sustain.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• David Gilmour - Pink Floyd sustain</li>
                  <li>• Peter Frampton - Talk box setup</li>
                  <li>• Country session players</li>
                  <li>• Classic rock guitarists</li>
                  <li>• Countless studio musicians</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss CS-1/CS-2/CS-3</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Evolution of Boss compressor pedals. The CS-2 is particularly sought after 
                  for its musical compression and sustain characteristics.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Smooth, musical compression with excellent sustain and note clarity.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Clean guitar enhancement</li>
                  <li>• Lead guitar sustain</li>
                  <li>• Rhythm guitar consistency</li>
                  <li>• Recording applications</li>
                  <li>• Live performance polish</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Empress Compressor</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Modern optical compressor with extensive controls. Professional studio 
                  quality in a pedal format with multiple compression styles.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    Transparent, musical compression with studio-grade control and quality.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Multiple compression types</li>
                  <li>• Sidechain EQ</li>
                  <li>• Gain reduction metering</li>
                  <li>• Mix control (parallel compression)</li>
                  <li>• Studio-quality circuitry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compression Applications */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Compression Applications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Clean Guitar Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Even out fingerpicking dynamics</li>
              <li>• Add sustain to single notes</li>
              <li>• Balance chord voicings</li>
              <li>• Enhance pick attack</li>
              <li>• Smooth strumming patterns</li>
              <li>• Country chicken picking</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Electric Guitar Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Increase lead guitar sustain</li>
              <li>• Tighten rhythm playing</li>
              <li>• Control feedback thresholds</li>
              <li>• Enhance amp distortion</li>
              <li>• Improve recording consistency</li>
              <li>• Professional polish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Using Compression Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Compression Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with subtle settings</li>
              <li>• Listen for pumping or breathing</li>
              <li>• Use makeup gain to match levels</li>
              <li>• Adjust attack for pick response</li>
              <li>• Set release to musical timing</li>
              <li>• A/B test with bypass frequently</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Chain Position</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Usually first in signal chain</li>
              <li>• Before overdrive for consistent drive</li>
              <li>• After overdrive for polished sustain</li>
              <li>• Can be used in effects loop</li>
              <li>• Consider parallel compression</li>
              <li>• Multiple compressors possible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Compressor Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Subtle Enhancement</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Ratio: 2:1 to 3:1</li>
                <li>• Threshold: -15 to -10 dB</li>
                <li>• Attack: Medium to slow</li>
                <li>• Use: Natural improvement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Lead Guitar Sustain</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Ratio: 4:1 to 6:1</li>
                <li>• Threshold: -20 to -15 dB</li>
                <li>• Attack: Fast to medium</li>
                <li>• Use: Singing sustain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Heavy Effect</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Ratio: 8:1 to ∞:1</li>
                <li>• Threshold: -25 to -20 dB</li>
                <li>• Attack: Fast</li>
                <li>• Use: Special effect</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Good compression should be felt more than heard. 
              If you notice the compressor working obviously, you might be using too much. 
              The goal is usually musical enhancement, not obvious effect.
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
            Compressor Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
