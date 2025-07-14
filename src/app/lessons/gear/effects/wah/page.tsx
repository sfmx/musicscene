import Link from 'next/link';

export default function WahPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Wah Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The most expressive guitar effect. Wah pedals sweep through frequencies, 
          creating vocal-like expressions and funky rhythmic textures.
        </p>
      </div>

      {/* What is Wah */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Wah?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            A wah pedal is a variable filter that sweeps through a frequency range as you rock 
            the pedal back and forth. This creates the characteristic "wah" vocal sound that 
            can range from subtle filtering to dramatic frequency sweeps.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Variable bandpass filter</li>
                <li>• Potentiometer controlled by foot rocker</li>
                <li>• Sweeps frequency peaks and nulls</li>
                <li>• Can emphasize or cut frequencies</li>
                <li>• Creates vocal-like articulation</li>
                <li>• Real-time expression control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Funk and R&B rhythm guitar</li>
                <li>• Lead guitar expression</li>
                <li>• Psychedelic and classic rock</li>
                <li>• Metal and hard rock accents</li>
                <li>• Jazz fusion articulation</li>
                <li>• Experimental sound design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Wah Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Wah Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vox V846 / Clyde McCoy Wah</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The original wah pedal, designed in 1966. Warm, vocal character with 
                  a wide frequency sweep. The template for all wah pedals that followed.
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Signature Sound:</h4>
                  <p className="text-orange-700 text-sm">
                    Warm, musical frequency sweep with vocal-like characteristics.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jimi Hendrix - Psychedelic mastery</li>
                  <li>• Eric Clapton - Cream era</li>
                  <li>• Frank Zappa - Experimental textures</li>
                  <li>• Early funk and soul guitarists</li>
                  <li>• Psychedelic rock pioneers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dunlop Cry Baby GCB-95</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The most popular wah pedal ever made. Based on the original Vox circuit 
                  but with its own character. Reliable, affordable, and versatile.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Bright, cutting wah with excellent dynamics and wide frequency range.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Slash - Guns N' Roses solos</li>
                  <li>• Kirk Hammett - Metallica leads</li>
                  <li>• Countless rock and metal players</li>
                  <li>• Session musicians worldwide</li>
                  <li>• Modern rock and alternative</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ibanez WH10</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Unique wah with a different frequency response and wider sweep. 
                  Known for its smooth operation and distinctive character.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Smooth, wide frequency sweep with less mid-range emphasis.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• John Frusciante - Red Hot Chili Peppers</li>
                  <li>• Jonny Greenwood - Radiohead</li>
                  <li>• Alternative and indie rock players</li>
                  <li>• Funk and fusion guitarists</li>
                  <li>• Modern experimental musicians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wah Techniques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wah Pedal Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Full sweep:</strong> Rock pedal through entire range</li>
              <li>• <strong>Cocked wah:</strong> Fixed position for tonal color</li>
              <li>• <strong>Rhythmic pumping:</strong> Sync with musical rhythm</li>
              <li>• <strong>Quick stabs:</strong> Sharp, percussive accents</li>
              <li>• <strong>Slow sweeps:</strong> Gradual filter movement</li>
              <li>• <strong>Auto-wah position:</strong> Hands-free filtering</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Heel-toe technique:</strong> Rapid alternating motion</li>
              <li>• <strong>Partial sweeps:</strong> Using only part of the range</li>
              <li>• <strong>Multi-note sweeps:</strong> Sweep across chord changes</li>
              <li>• <strong>Muted wah:</strong> Palm muting with wah movement</li>
              <li>• <strong>Volume pedal combo:</strong> Swells with wah sweeps</li>
              <li>• <strong>Expression pedal control:</strong> Hands-free operation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Famous Wah Moments */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Iconic Wah Moments in Music</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Classic Examples</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Jimi Hendrix - "Voodoo Child":</strong> Definitive wah guitar</li>
                <li>• <strong>Cream - "White Room":</strong> Clapton's melodic wah</li>
                <li>• <strong>Black Sabbath - "The Wizard":</strong> Iommi's rhythmic wah</li>
                <li>• <strong>Isaac Hayes - "Theme from Shaft":</strong> Funk wah guitar</li>
                <li>• <strong>Metallica - "Enter Sandman":</strong> Metal wah accents</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modern Applications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Red Hot Chili Peppers:</strong> Funk-rock rhythms</li>
                <li>• <strong>Rage Against the Machine:</strong> Political punk-funk</li>
                <li>• <strong>White Stripes:</strong> Garage rock minimalism</li>
                <li>• <strong>John Mayer:</strong> Modern blues applications</li>
                <li>• <strong>Radiohead:</strong> Alternative and experimental uses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Wah Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Wah Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Practice pedal technique regularly</li>
              <li>• Listen to the frequency sweep</li>
              <li>• Use with different pickup positions</li>
              <li>• Experiment with gain settings</li>
              <li>• Practice with and without distortion</li>
              <li>• Learn to play musically, not just technically</li>
            </ul>
          </div>

          <div className="bg-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Chain Position</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Generally goes early in signal chain</li>
              <li>• Before distortion for classic sound</li>
              <li>• After distortion for different character</li>
              <li>• Can be used in effects loop</li>
              <li>• Works well with fuzz pedals</li>
              <li>• Consider buffer placement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wah Pedal Setup Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Classic Rock</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Use with moderate distortion</li>
                <li>• Full frequency sweeps</li>
                <li>• Moderate to fast movement</li>
                <li>• Bridge pickup preferred</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Funk/R&B</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Clean or light overdrive</li>
                <li>• Rhythmic pumping motion</li>
                <li>• Tight, percussive playing</li>
                <li>• Often with neck pickup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Metal/Hard Rock</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• High gain distortion</li>
                <li>• Quick stabs and accents</li>
                <li>• Partial sweeps common</li>
                <li>• Bridge pickup for aggression</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> The wah pedal is all about expression and feeling. 
              Don't just use it as a special effect - incorporate it as a natural part of 
              your musical vocabulary. Practice simple phrases with wah to develop your technique.
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
            Wah Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
