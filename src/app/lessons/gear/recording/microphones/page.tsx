import Link from 'next/link';

export default function MicrophonesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Recording Microphones
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The first link in your recording chain. Microphones capture acoustic energy and 
          convert it to electrical signals, making the choice of mic crucial to your sound.
        </p>
      </div>

      {/* Microphone Fundamentals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Microphones Work</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Microphones are transducers that convert acoustic energy (sound waves) into 
            electrical energy (audio signals). Different microphone types use various 
            methods to achieve this conversion, each with unique characteristics.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transduction Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Dynamic:</strong> Moving coil generates signal</li>
                <li>• <strong>Condenser:</strong> Capacitor plates change distance</li>
                <li>• <strong>Ribbon:</strong> Metal ribbon moves in magnetic field</li>
                <li>• <strong>Carbon:</strong> Pressure changes resistance (vintage)</li>
                <li>• <strong>Piezo:</strong> Crystal generates voltage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Frequency Response:</strong> Range and coloration</li>
                <li>• <strong>Sensitivity:</strong> Output level for given input</li>
                <li>• <strong>SPL Handling:</strong> Maximum sound pressure</li>
                <li>• <strong>Self-Noise:</strong> Inherent electronic noise</li>
                <li>• <strong>Polar Pattern:</strong> Directional pickup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Microphone Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Microphones</h2>
        
        <div className="space-y-6">
          {/* Dynamic Microphones */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dynamic Microphones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• No external power required</li>
                  <li>• Excellent for high SPL sources</li>
                  <li>• Rugged and reliable construction</li>
                  <li>• Less sensitive to humidity/temperature</li>
                  <li>• Often more affordable</li>
                  <li>• Focused frequency response</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Best Applications</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Live vocals and performance</li>
                  <li>• Guitar amplifier recording</li>
                  <li>• Drum recording (snare, toms)</li>
                  <li>• Loud brass instruments</li>
                  <li>• Broadcast and podcasting</li>
                  <li>• Budget home recording</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Famous Dynamic Mics</h5>
              <p className="text-blue-700 text-sm">
                <strong>Shure SM57:</strong> Industry standard for instruments • 
                <strong>Shure SM58:</strong> Legendary vocal mic • 
                <strong>Electro-Voice RE20:</strong> Broadcast favorite • 
                <strong>Sennheiser MD421:</strong> Versatile studio workhorse
              </p>
            </div>
          </div>

          {/* Condenser Microphones */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Condenser Microphones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Characteristics</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Requires phantom power (+48V)</li>
                  <li>• Highly sensitive and detailed</li>
                  <li>• Wide frequency response</li>
                  <li>• Low self-noise (quality models)</li>
                  <li>• Fast transient response</li>
                  <li>• More fragile than dynamics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Best Applications</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Studio vocal recording</li>
                  <li>• Acoustic instruments</li>
                  <li>• Overhead drum mics</li>
                  <li>• Room ambience capture</li>
                  <li>• Classical and orchestral recording</li>
                  <li>• Detailed source capture</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h5 className="font-semibold text-green-800 mb-2">Famous Condenser Mics</h5>
              <p className="text-green-700 text-sm">
                <strong>Neumann U87:</strong> Studio legend • 
                <strong>AKG C414:</strong> Versatile multi-pattern • 
                <strong>Audio-Technica AT2020:</strong> Budget favorite • 
                <strong>Rode NTK:</strong> Tube warmth
              </p>
            </div>
          </div>

          {/* Ribbon Microphones */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ribbon Microphones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Characteristics</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Vintage, warm tone character</li>
                  <li>• Natural compression and smoothness</li>
                  <li>• Figure-8 polar pattern typically</li>
                  <li>• Fragile ribbon element</li>
                  <li>• Lower output than condensers</li>
                  <li>• Excellent for harsh sources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Best Applications</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Guitar amplifiers (mellows harshness)</li>
                  <li>• Brass instruments</li>
                  <li>• Vintage vocal sounds</li>
                  <li>• Drum overheads (smooth cymbals)</li>
                  <li>• String sections</li>
                  <li>• Room ambience with character</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-100 rounded">
              <h5 className="font-semibold text-purple-800 mb-2">Famous Ribbon Mics</h5>
              <p className="text-purple-700 text-sm">
                <strong>Coles 4038:</strong> BBC vintage classic • 
                <strong>Royer R-121:</strong> Modern ribbon standard • 
                <strong>RCA 44:</strong> Iconic vintage broadcast • 
                <strong>AEA R84:</strong> Affordable vintage tone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Polar Patterns */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Microphone Polar Patterns</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <p className="text-gray-700 mb-6">
            Polar patterns describe how a microphone picks up sound from different directions. 
            Choosing the right pattern is crucial for controlling room sound and isolation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Cardioid (Heart-shaped)</h3>
              <div className="text-6xl mb-3">♥️</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Picks up front, rejects rear</li>
                <li>• Most common pattern</li>
                <li>• Good isolation</li>
                <li>• Proximity effect</li>
                <li>• Ideal for most sources</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Omnidirectional</h3>
              <div className="text-6xl mb-3">⭕</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Picks up all directions equally</li>
                <li>• Natural room sound</li>
                <li>• No proximity effect</li>
                <li>• Less handling noise</li>
                <li>• Ambient recording</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Figure-8 (Bidirectional)</h3>
              <div className="text-6xl mb-3">∞</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Picks up front and rear</li>
                <li>• Rejects sides completely</li>
                <li>• Great for two-person recording</li>
                <li>• Strong proximity effect</li>
                <li>• Natural for ribbon mics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Microphone Techniques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recording Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Vocal Recording</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Close Miking (6-12 inches)</h4>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• Intimate, present sound</li>
                  <li>• Good isolation from room</li>
                  <li>• Use pop filter to prevent plosives</li>
                  <li>• Watch for proximity effect</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Distance Miking (2+ feet)</h4>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• More natural, roomy sound</li>
                  <li>• Includes room acoustics</li>
                  <li>• Requires good acoustic space</li>
                  <li>• Less proximity effect</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Instrument Recording</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Guitar Amplifiers</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Close: SM57 on speaker cone edge</li>
                  <li>• Room: Condenser 3-6 feet back</li>
                  <li>• Combine close + room for depth</li>
                  <li>• Move mic for tonal changes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Acoustic Instruments</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Find the "sweet spot" by listening</li>
                  <li>• Consider instrument resonance</li>
                  <li>• Use room mics for natural sound</li>
                  <li>• Stereo techniques for width</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Microphone Buying Guide</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Building Your Mic Collection</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">First Microphone ($50-200)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Large diaphragm condenser</li>
                <li>• Audio-Technica AT2020</li>
                <li>• Rode PodMic (dynamic option)</li>
                <li>• Good for vocals and instruments</li>
                <li>• Includes basic accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Home Studio Pair ($200-600)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Large diaphragm condenser</li>
                <li>• Dynamic mic (SM57/SM58)</li>
                <li>• Covers most recording needs</li>
                <li>• Shure SM57 + Audio-Technica AT2035</li>
                <li>• Pop filter and boom stands</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Professional Setup ($600+)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Multiple pattern condenser</li>
                <li>• Specialty mics (ribbon, small diaphragm)</li>
                <li>• Matched pairs for stereo</li>
                <li>• AKG C414, Neumann TLM series</li>
                <li>• Professional accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care and Maintenance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Microphone Care & Maintenance</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Storage & Handling</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Store in protective cases or pouches</li>
              <li>• Avoid extreme temperatures and humidity</li>
              <li>• Handle by the body, not the grille</li>
              <li>• Keep away from magnetic fields</li>
              <li>• Transport carefully to prevent shock</li>
              <li>• Use shock mounts to reduce vibration</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Cleaning & Service</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Clean grilles gently with soft brush</li>
              <li>• Wipe body with slightly damp cloth</li>
              <li>• Never use solvents or harsh chemicals</li>
              <li>• Service condensers every few years</li>
              <li>• Check cables and connectors regularly</li>
              <li>• Professional calibration for critical work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
