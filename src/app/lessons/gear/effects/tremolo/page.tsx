import Link from 'next/link';

export default function TremoloPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tremolo Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Rhythmic volume modulation that creates pulsing, hypnotic textures. 
          From subtle movement to dramatic oscillations, tremolo adds life to any guitar tone.
        </p>
      </div>

      {/* What is Tremolo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Tremolo?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Tremolo is a volume modulation effect that creates rhythmic fluctuations in amplitude. 
            An LFO (Low Frequency Oscillator) controls the volume up and down at regular intervals, 
            creating a pulsing or "shimmering" effect that adds movement and texture to your sound.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• LFO modulates signal amplitude</li>
                <li>• Creates rhythmic volume swells</li>
                <li>• Speed controls LFO frequency</li>
                <li>• Depth controls modulation amount</li>
                <li>• Can use various waveform shapes</li>
                <li>• Usually sine or triangle waves</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surf and rockabilly guitar</li>
                <li>• Ambient and atmospheric textures</li>
                <li>• Clean guitar enhancement</li>
                <li>• Vintage and retro sounds</li>
                <li>• Rhythmic accompaniment</li>
                <li>• Experimental sound design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tremolo vs Vibrato */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tremolo vs. Vibrato</h2>
        <div className="bg-amber-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Confusion</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Tremolo (Volume Modulation)</h4>
              <ul className="space-y-2 text-amber-700">
                <li>• Modulates amplitude/volume</li>
                <li>• Creates pulsing effect</li>
                <li>• Built into many vintage amps</li>
                <li>• Examples: Fender amp tremolo, surf guitar</li>
                <li>• Volume goes up and down</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Vibrato (Pitch Modulation)</h4>
              <ul className="space-y-2 text-amber-700">
                <li>• Modulates pitch/frequency</li>
                <li>• Creates warbling effect</li>
                <li>• Less common in guitar effects</li>
                <li>• Examples: Magnatone amps, pitch vibrato pedals</li>
                <li>• Pitch goes up and down</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-100 rounded">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Many vintage Fender amps labeled their tremolo as "vibrato" 
              and their vibrato as "tremolo" - adding to the confusion!
            </p>
          </div>
        </div>
      </section>

      {/* Types of Tremolo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Tremolo</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bias Tremolo</h3>
            <p className="text-gray-700 mb-4">
              Found in vintage amplifiers. Modulates the tube bias voltage, 
              creating a warm, organic tremolo with harmonic richness.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Found in:</strong> Fender amps, Supro amps, vintage circuits
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Optical Tremolo</h3>
            <p className="text-gray-700 mb-4">
              Uses light-dependent resistors (photocells) and bulbs/LEDs. 
              Smooth, musical modulation with soft attack.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Vox amps, many boutique pedals, vintage designs
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Tremolo</h3>
            <p className="text-gray-700 mb-4">
              Modern processors offer precise control, tap tempo, and 
              multiple waveform shapes for creative possibilities.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss TR-2, Strymon Flint, many modern pedals
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Harmonic Tremolo</h3>
            <p className="text-gray-700 mb-4">
              Splits signal into high and low frequencies, modulating them 
              alternately for a more complex, 3D effect.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Fender "Brownface" amps, specialized pedals
            </div>
          </div>
        </div>
      </section>

      {/* Famous Tremolo Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Tremolo Units & Songs</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fender Amp Tremolo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The tremolo circuit built into vintage Fender amplifiers set the standard 
                  for guitar tremolo. Warm, musical modulation that defined surf and rockabilly.
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-800 mb-2">Famous Songs:</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• "Gimme Some Lovin'" - Spencer Davis Group</li>
                    <li>• "Born on the Bayou" - CCR</li>
                    <li>• "Pipeline" - The Chantays</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Dick Dale - Surf guitar pioneer</li>
                  <li>• Ry Cooder - Roots and world music</li>
                  <li>• Duane Eddy - Twangy guitar instrumentals</li>
                  <li>• Link Wray - Early rock and roll</li>
                  <li>• Many country and rockabilly players</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss TR-2 Tremolo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Classic tremolo pedal that brought reliable, controllable tremolo 
                  to pedalboards everywhere. Simple and effective design.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Clean, consistent tremolo with good range and reliability.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Alternative and indie rock</li>
                  <li>• Modern surf revival</li>
                  <li>• Country and americana</li>
                  <li>• Clean guitar textures</li>
                  <li>• Recording applications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strymon Flint</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Modern recreation of classic amp tremolo and reverb combinations. 
                  Multiple tremolo types with studio-quality sound.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Features:</h4>
                  <p className="text-green-700 text-sm">
                    Multiple vintage-style tremolo types with harmonic tremolo option.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tremolo Types:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• '61 Harmonic Tremolo</li>
                  <li>• '63 Power Tube Tremolo</li>
                  <li>• '65 Photocell Tremolo</li>
                  <li>• Tap tempo functionality</li>
                  <li>• Expression pedal control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tremolo Techniques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tremolo Techniques & Applications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Musical Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Rhythm sync:</strong> Match tremolo to song tempo</li>
              <li>• <strong>Drone notes:</strong> Sustained notes with tremolo</li>
              <li>• <strong>Chord swells:</strong> Tremolo on sustained chords</li>
              <li>• <strong>Accent patterns:</strong> Use tremolo for emphasis</li>
              <li>• <strong>Texture layers:</strong> Add movement to static parts</li>
              <li>• <strong>Volume automation:</strong> Create dynamic interest</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Creative Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Helicopter effect:</strong> Very fast, deep tremolo</li>
              <li>• <strong>Square wave tremolo:</strong> Hard on/off gating</li>
              <li>• <strong>Reverse tremolo:</strong> Volume swells inward</li>
              <li>• <strong>Random tremolo:</strong> Non-rhythmic modulation</li>
              <li>• <strong>Tremolo picking:</strong> Simulate fast picking</li>
              <li>• <strong>Stereo tremolo:</strong> Ping-pong between speakers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Genre Applications */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tremolo in Different Genres</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Classic Applications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Surf Music:</strong> Fast, deep tremolo on clean tones</li>
                <li>• <strong>Rockabilly:</strong> Moderate tremolo with slap-back echo</li>
                <li>• <strong>Country:</strong> Subtle tremolo on clean guitar</li>
                <li>• <strong>Blues:</strong> Slow tremolo for emotional expression</li>
                <li>• <strong>Doo-Wop/Pop:</strong> Dreamy, atmospheric textures</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modern Applications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Indie Rock:</strong> Retro textures and atmosphere</li>
                <li>• <strong>Shoegaze:</strong> Dense, textural tremolo layers</li>
                <li>• <strong>Post-Rock:</strong> Dynamic build-ups and releases</li>
                <li>• <strong>Ambient:</strong> Subtle movement in soundscapes</li>
                <li>• <strong>Electronic:</strong> Sync with drum machines and sequencers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Tremolo Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Tremolo Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with subtle settings</li>
              <li>• Use tap tempo when available</li>
              <li>• Consider musical subdivisions</li>
              <li>• Works best with clean/light overdrive</li>
              <li>• Combine with reverb for classic sounds</li>
              <li>• Practice playing with tremolo engaged</li>
            </ul>
          </div>

          <div className="bg-cyan-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Chain Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Usually late in signal chain</li>
              <li>• After distortion but before reverb</li>
              <li>• Can be used in effects loop</li>
              <li>• Experiment with pre/post distortion</li>
              <li>• Consider tremolo on just reverb returns</li>
              <li>• Try parallel tremolo processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tremolo Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Subtle Movement</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Speed: Slow to medium</li>
                <li>• Depth: 20-40%</li>
                <li>• Wave: Sine or triangle</li>
                <li>• Use: Gentle enhancement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Classic Surf</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Speed: Fast (6-8 Hz)</li>
                <li>• Depth: 60-80%</li>
                <li>• Wave: Sine wave</li>
                <li>• Use: Dick Dale style</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Rhythmic Effect</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Speed: Sync to tempo</li>
                <li>• Depth: 50-70%</li>
                <li>• Wave: Square for hard cuts</li>
                <li>• Use: Percussive accents</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Tremolo works best when it serves the music. Match the 
              tremolo speed to musical subdivisions (quarter notes, eighth notes, etc.) and 
              use it to enhance the rhythm, not fight against it.
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
            Tremolo Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
