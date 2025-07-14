import Link from 'next/link';

export default function PreampsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Microphone Preamps
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The crucial first step in your signal chain. Preamps boost weak microphone 
          signals to line level while adding character, warmth, and often defining 
          the sonic signature of your recordings.
        </p>
      </div>

      {/* What is a Preamp */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Microphone Preamp?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            A microphone preamp (pre-amplifier) boosts the very weak signal from microphones 
            to line level, making it strong enough for further processing and recording. 
            The preamp is often the most crucial component affecting the character and quality of your recordings.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Amplification:</strong> Boost mic signal 40-60dB</li>
                <li>• <strong>Impedance Matching:</strong> Optimize signal transfer</li>
                <li>• <strong>Phantom Power:</strong> Supply +48V for condensers</li>
                <li>• <strong>Gain Control:</strong> Adjust input sensitivity</li>
                <li>• <strong>Signal Conditioning:</strong> Shape tone and character</li>
                <li>• <strong>Noise Control:</strong> Maintain high signal-to-noise ratio</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Quality Matters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• First component in recording chain</li>
                <li>• Sets noise floor for entire recording</li>
                <li>• Adds distinctive tonal character</li>
                <li>• Affects dynamic response and transients</li>
                <li>• Influences harmonic content</li>
                <li>• Cannot be "fixed" later in mix</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Preamps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Preamps</h2>
        
        <div className="space-y-6">
          {/* Tube Preamps */}
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tube Preamps</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Characteristics</h4>
                <ul className="text-amber-700 space-y-1">
                  <li>• Warm, musical harmonic distortion</li>
                  <li>• Natural compression and saturation</li>
                  <li>• Smooth high-frequency response</li>
                  <li>• Enhanced midrange presence</li>
                  <li>• Vintage, classic sound character</li>
                  <li>• Responds dynamically to input levels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Best Applications</h4>
                <ul className="text-amber-700 space-y-1">
                  <li>• Vocals (especially for warmth)</li>
                  <li>• Acoustic instruments</li>
                  <li>• Electric guitar recording</li>
                  <li>• Vintage-style productions</li>
                  <li>• Adding character to digital recordings</li>
                  <li>• Sources that benefit from compression</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-100 rounded">
              <h5 className="font-semibold text-amber-800 mb-2">Famous Tube Preamps</h5>
              <p className="text-amber-700 text-sm">
                <strong>Manley VOXBOX:</strong> All-in-one vocal channel • 
                <strong>Universal Audio 610:</strong> Classic tube warmth • 
                <strong>ART Pro MPA II:</strong> Affordable tube option • 
                <strong>Avalon VT-737sp:</strong> High-end vocal chain
              </p>
            </div>
          </div>

          {/* Solid State Preamps */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Solid State Preamps</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Clean, transparent sound</li>
                  <li>• Wide frequency response</li>
                  <li>• Low noise and distortion</li>
                  <li>• High headroom and dynamic range</li>
                  <li>• Consistent performance</li>
                  <li>• Often more affordable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Best Applications</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Classical and acoustic recording</li>
                  <li>• High-resolution digital recording</li>
                  <li>• Sources requiring transparency</li>
                  <li>• Percussion and transient-rich material</li>
                  <li>• Modern pop and electronic music</li>
                  <li>• Multi-mic setups requiring consistency</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Famous Solid State Preamps</h5>
              <p className="text-blue-700 text-sm">
                <strong>Focusrite ISA series:</strong> Clean and detailed • 
                <strong>SSL VHD Pre:</strong> Console-style transparency • 
                <strong>Grace Design m101:</strong> Ultra-clean reference • 
                <strong>Millennia HV-3:</strong> High-voltage discrete design
              </p>
            </div>
          </div>

          {/* Transformer-Based Preamps */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transformer-Based Preamps</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Characteristics</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Rich harmonic saturation</li>
                  <li>• Enhanced low-end weight</li>
                  <li>• Vintage console character</li>
                  <li>• Natural compression effect</li>
                  <li>• Excellent for drums and bass</li>
                  <li>• Classic analog sound</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Transformer Types</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• <strong>Neve-style:</strong> Warm, musical character</li>
                  <li>• <strong>API-style:</strong> Punchy, forward sound</li>
                  <li>• <strong>SSL-style:</strong> Clean but with character</li>
                  <li>• <strong>Vintage Telefunken:</strong> Classic German sound</li>
                  <li>• <strong>Custom Designs:</strong> Boutique transformers</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h5 className="font-semibold text-green-800 mb-2">Famous Transformer Preamps</h5>
              <p className="text-green-700 text-sm">
                <strong>Neve 1073:</strong> Legendary British sound • 
                <strong>API 512c:</strong> American punch and clarity • 
                <strong>BAE 1073:</strong> Hand-wired Neve recreation • 
                <strong>Chandler Limited TG2:</strong> Abbey Road console sound
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preamp Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Preamp Features</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Controls</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Gain Control:</strong> Input sensitivity adjustment</li>
                <li>• <strong>Phantom Power:</strong> +48V for condenser mics</li>
                <li>• <strong>Phase Invert:</strong> 180° polarity reversal</li>
                <li>• <strong>HPF (High-Pass Filter):</strong> Remove low frequencies</li>
                <li>• <strong>Pad:</strong> Attenuate hot input signals</li>
                <li>• <strong>Output Level:</strong> Control signal to DAW</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Impedance Selection:</strong> Match different microphones</li>
                <li>• <strong>Saturation Control:</strong> Adjustable harmonic content</li>
                <li>• <strong>EQ Section:</strong> Built-in tone shaping</li>
                <li>• <strong>Compressor:</strong> Integrated dynamics control</li>
                <li>• <strong>Direct Input:</strong> High-impedance instrument input</li>
                <li>• <strong>Multiple Outputs:</strong> Send to different destinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone vs Built-in */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Standalone vs. Built-in Preamps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Interface Preamps</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Advantages</h4>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Integrated, convenient solution</li>
                  <li>• No additional cabling required</li>
                  <li>• Often adequate for most applications</li>
                  <li>• Cost-effective for multi-channel recording</li>
                  <li>• Consistent gain staging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Limitations</h4>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Usually clean/neutral character</li>
                  <li>• Limited character options</li>
                  <li>• May have lower headroom</li>
                  <li>• Tied to interface choice</li>
                  <li>• Less upgrade flexibility</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">External Preamps</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Advantages</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Dedicated design for optimal performance</li>
                  <li>• Distinctive sonic character options</li>
                  <li>• Higher quality components</li>
                  <li>• Modular upgrade path</li>
                  <li>• Professional studio standard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Considerations</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Additional cost and complexity</li>
                  <li>• Requires line inputs on interface</li>
                  <li>• More cables and connections</li>
                  <li>• May need multiple units</li>
                  <li>• Gain staging coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Preamp Sounds */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Iconic Preamp Sounds in Music</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Classic Rock & Pop</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-yellow-700">Neve 1073 (Beatles, Led Zeppelin)</h4>
                <p className="text-yellow-600 text-sm">Warm, musical midrange with sweet high-end</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">API 512 (Nirvana, Red Hot Chili Peppers)</h4>
                <p className="text-yellow-600 text-sm">Punchy, forward sound with excellent transients</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">SSL E/G Series (Whitney Houston, Phil Collins)</h4>
                <p className="text-yellow-600 text-sm">Clean but characterful, perfect for 80s pop</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Modern Productions</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-indigo-700">Focusrite ISA (Adele, Ed Sheeran)</h4>
                <p className="text-indigo-600 text-sm">Clean, detailed sound perfect for modern vocals</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Universal Audio 610 (John Mayer, Norah Jones)</h4>
                <p className="text-indigo-600 text-sm">Tube warmth ideal for singer-songwriter material</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Chandler TG2 (Radiohead, Coldplay)</h4>
                <p className="text-indigo-600 text-sm">Abbey Road console sound with British character</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Preamp Buying Guide</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Choosing Your First Preamp</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Budget Option ($200-500)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• ART Pro MPA II (tube character)</li>
                <li>• Behringer Ultragain Pro (clean)</li>
                <li>• PreSonus BlueTube DP V2</li>
                <li>• Golden Age Project PRE-73</li>
                <li>• Focus on single-channel quality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Professional ($500-1500)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Focusrite ISA One/Two</li>
                <li>• Universal Audio Solo/610</li>
                <li>• Warm Audio WA12/WA273</li>
                <li>• API 512c/512v</li>
                <li>• Consider 2-channel options</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">High-End ($1500+)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Neve 1073 SPX/DPX</li>
                <li>• Chandler Limited TG2</li>
                <li>• Millennia HV-3D</li>
                <li>• Avalon VT-737sp</li>
                <li>• Boutique and vintage options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup and Usage Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Preamp Setup & Usage</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Proper Gain Staging</h3>
            <p className="text-green-700 text-sm">
              Set preamp gain for optimal signal level without clipping. Aim for -18 to -12 dBFS peaks 
              for most digital systems, leaving headroom for dynamics and processing.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Impedance Matching</h3>
            <p className="text-green-700 text-sm">
              Most microphones work best with preamp input impedances 5-10 times higher than 
              the mic's output impedance. Some preamps offer selectable impedance for different colors.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibond text-green-800 mb-2">Signal Chain Position</h3>
            <p className="text-green-700 text-sm">
              External preamps go between microphone and audio interface line input. 
              Bypass interface preamps when using external units to avoid double-amplification.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Warming Up Tube Preamps</h3>
            <p className="text-green-700 text-sm">
              Tube preamps need 15-30 minutes to reach optimal operating temperature. 
              The sound will stabilize and reach full warmth after proper warm-up time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
