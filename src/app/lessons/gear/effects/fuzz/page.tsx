import Link from 'next/link';

export default function FuzzPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Fuzz Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The granddaddy of all distortion effects. Vintage fuzz creates a buzzy, 
          saturated tone that defined psychedelic rock and early heavy music.
        </p>
      </div>

      {/* What is Fuzz */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Fuzz?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Fuzz was one of the first guitar effects ever created, originally discovered as a happy 
            accident in broken or overdriven equipment. It creates extreme saturation and compression, 
            turning your guitar signal into a square wave with a distinctive buzzy, aggressive character.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Characteristics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Extreme signal compression</li>
                <li>• Square wave clipping</li>
                <li>• Buzzy, saturated texture</li>
                <li>• Vintage, lo-fi character</li>
                <li>• Octave harmonics generation</li>
                <li>• Sustain and feedback potential</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Psychedelic and garage rock</li>
                <li>• Vintage blues and R&B</li>
                <li>• Alternative and indie rock</li>
                <li>• Experimental and noise music</li>
                <li>• Retro and vintage sounds</li>
                <li>• Lead guitar textures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History of Fuzz */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The History of Fuzz</h2>
        <div className="bg-amber-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">From Accident to Icon</h3>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-amber-800 mb-2">1960: The First Fuzz</h4>
              <p className="text-sm">
                Producer Joe Meek accidentally created fuzz when a mixing console malfunctioned 
                during a recording session, creating a distorted sound that would inspire a revolution.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-amber-800 mb-2">1962: "The 2000 Pound Bee"</h4>
              <p className="text-sm">
                The Tornados' instrumental hit featured one of the first intentional uses of fuzz, 
                created using a faulty channel on Joe Meek's mixing desk.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-amber-800 mb-2">1965: "(I Can't Get No) Satisfaction"</h4>
              <p className="text-sm">
                Keith Richards' iconic riff, played through a Maestro Fuzz-Tone, brought fuzz 
                to mainstream rock and launched the pedal industry.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Late 1960s: Psychedelic Era</h4>
              <p className="text-sm">
                Jimi Hendrix, Eric Clapton, and Jeff Beck elevated fuzz to an art form, 
                using it for feedback, sustain, and otherworldly textures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fuzz */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Fuzz Circuits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Germanium Fuzz</h3>
            <p className="text-gray-700 mb-4">
              The original fuzz sound using vintage germanium transistors. Warm, musical, 
              and temperature-sensitive. Classic 1960s character.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Fuzz Face, Tone Bender, Germanium Big Muff
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Silicon Fuzz</h3>
            <p className="text-gray-700 mb-4">
              More stable and aggressive than germanium. Brighter, more consistent, 
              and better for modern applications.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Silicon Fuzz Face, modern Big Muff variants
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Op-Amp Fuzz</h3>
            <p className="text-gray-700 mb-4">
              Uses op-amp chips for consistent, high-gain fuzz. Often more versatile 
              with better EQ control and output consistency.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Big Muff Pi, Rat (fuzz mode), modern boutique fuzzes
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Octave Fuzz</h3>
            <p className="text-gray-700 mb-4">
              Adds octave harmonics to the fuzz signal, creating synth-like textures. 
              Popular in funk and experimental music.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Octavia, Roger Mayer Octavia, modern octave fuzzes
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Fuzz Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Fuzz Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dallas Arbiter Fuzz Face</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The most iconic fuzz pedal ever made. Simple two-knob design with massive 
                  personality. Jimi Hendrix's weapon of choice for creating legendary tones.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    Warm, musical fuzz that cleans up with guitar volume. Responds to playing dynamics.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jimi Hendrix - Psychedelic mastery</li>
                  <li>• Eric Johnson - Texas blues fusion</li>
                  <li>• David Gilmour - Pink Floyd textures</li>
                  <li>• Stevie Ray Vaughan - Blues power</li>
                  <li>• Joe Bonamassa - Modern blues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Electro-Harmonix Big Muff Pi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The sustain king. Thick, woolly fuzz with incredible sustain and a distinctive 
                  mid-scooped character. Essential for alternative and indie rock.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Thick, sustaining fuzz with scooped mids and powerful low-end presence.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• David Gilmour - Pink Floyd leads</li>
                  <li>• J Mascis - Dinosaur Jr. walls of sound</li>
                  <li>• Billy Corgan - Smashing Pumpkins</li>
                  <li>• Jack White - White Stripes garage rock</li>
                  <li>• Dan Auerbach - The Black Keys</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Maestro Fuzz-Tone FZ-1</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The first commercially available fuzz pedal. Made famous by Keith Richards 
                  on "Satisfaction." Simple, aggressive, and historically significant.
                </p>
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Signature Sound:</h4>
                  <p className="text-red-700 text-sm">
                    Raw, buzzy fuzz with simple on/off operation. Pure vintage character.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Keith Richards - Rolling Stones classics</li>
                  <li>• Link Wray - Proto-punk pioneer</li>
                  <li>• Early garage rock bands</li>
                  <li>• 1960s session musicians</li>
                  <li>• Collectors and vintage enthusiasts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Roger Mayer Octavia</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Combines fuzz with octave-up generation, creating synth-like textures. 
                  Hendrix used it for some of his most otherworldly sounds.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Fuzz with upper octave harmonics, creating bell-like and synth-like tones.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jimi Hendrix - "Purple Haze" intro</li>
                  <li>• Robin Trower - Sustaining leads</li>
                  <li>• Stevie Ray Vaughan - Texas blues</li>
                  <li>• Funk guitarists - Synth-like textures</li>
                  <li>• Experimental musicians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Using Fuzz Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Fuzz Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Playing Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Use guitar volume for cleanup</li>
              <li>• Single notes work better than chords</li>
              <li>• Experiment with pickup selection</li>
              <li>• Control feedback with distance from amp</li>
              <li>• Use neck pickup for warmth</li>
              <li>• Bridge pickup for aggression</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Chain Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Place early in signal chain</li>
              <li>• Avoid buffered pedals before fuzz</li>
              <li>• Wah pedal works great with fuzz</li>
              <li>• Use volume pedal for swells</li>
              <li>• Compressor can tame wild dynamics</li>
              <li>• Reverb and delay enhance texture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fuzz Maintenance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Fuzz Pedal Maintenance</h2>
        <div className="bg-red-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Considerations for Vintage Circuits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Germanium Transistors</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Temperature sensitive - warm up time needed</li>
                <li>• More fragile than silicon</li>
                <li>• Leak current affects bias</li>
                <li>• May need periodic rebiasing</li>
                <li>• Vintage units may need transistor replacement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">General Care</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Use high-quality cables</li>
                <li>• Keep clean and dust-free</li>
                <li>• Store in stable temperature</li>
                <li>• Replace battery regularly</li>
                <li>• Professional servicing for vintage units</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Fuzz Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Vintage Psychedelic</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Fuzz: 12-2 o'clock</li>
                <li>• Volume: 10-12 o'clock</li>
                <li>• Guitar volume: 8-10</li>
                <li>• Use: Hendrix-style leads</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Modern Alternative</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Sustain: 1-3 o'clock</li>
                <li>• Volume: 11-1 o'clock</li>
                <li>• Tone: 10-12 o'clock</li>
                <li>• Use: Wall of sound</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Garage Rock</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Fuzz: 9-11 o'clock</li>
                <li>• Volume: 12-2 o'clock</li>
                <li>• Raw and aggressive</li>
                <li>• Use: Power chords, riffs</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Fuzz sounds best when it's the star of the show. 
              Use it sparingly in arrangements and give it space to breathe. The guitar 
              volume knob is your best friend for controlling fuzz intensity.
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
            Fuzz Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
