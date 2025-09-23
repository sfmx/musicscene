import Link from 'next/link';

export default function TunersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/accessories" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Accessories
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Guitar Tuners
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The foundation of good sound. Whether you're a beginner or professional, 
          accurate tuning is essential for musical expression and ear development.
        </p>
      </div>

      {/* Why Tuning Matters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Accurate Tuning Matters</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Proper tuning is the foundation of all music-making. An out-of-tune guitar sounds 
            unpleasant regardless of playing skill, while a well-tuned instrument makes even 
            simple chords sound musical and inspiring.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creates harmony and consonance</li>
                <li>• Enables proper chord intervals</li>
                <li>• Develops accurate ear training</li>
                <li>• Allows playing with other musicians</li>
                <li>• Improves intonation across the neck</li>
                <li>• Makes practice more enjoyable</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Practical Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Enables recording and performance</li>
                <li>• Prevents bad habits from forming</li>
                <li>• Maintains string tension properly</li>
                <li>• Extends string life</li>
                <li>• Builds confidence in playing</li>
                <li>• Professional presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Tuners */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Guitar Tuners</h2>
        
        <div className="space-y-6">
          {/* Clip-On Tuners */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clip-On Tuners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">How They Work</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Detect vibrations through guitar body</li>
                  <li>• Clip directly onto headstock</li>
                  <li>• No cables or connections required</li>
                  <li>• Work in noisy environments</li>
                  <li>• Battery-powered (usually CR2032)</li>
                  <li>• Compact and portable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Advantages</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Convenient and always accessible</li>
                  <li>• Works acoustic and electric guitars</li>
                  <li>• Immune to ambient noise</li>
                  <li>• Inexpensive and reliable</li>
                  <li>• Clear visual display</li>
                  <li>• Perfect for practice and lessons</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h5 className="font-semibold text-green-800 mb-2">Top Clip-On Models</h5>
              <p className="text-green-700 text-sm">
                <strong>Snark SN-5X:</strong> Popular and affordable • 
                <strong>Boss TU-10:</strong> Professional build quality • 
                <strong>TC Electronic PolyTune Clip:</strong> Advanced features • 
                <strong>D'Addario NS Micro Headstock:</strong> Ultra-compact design
              </p>
            </div>
          </div>

          {/* Pedal Tuners */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pedal Tuners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Professional Features</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Integrate into pedalboard setup</li>
                  <li>• Silent tuning (mutes output)</li>
                  <li>• Highly accurate detection</li>
                  <li>• Bright LED displays for stage use</li>
                  <li>• Multiple tuning modes</li>
                  <li>• Buffer and power distribution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Performance Benefits</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Hands-free operation during performance</li>
                  <li>• Always in signal chain when needed</li>
                  <li>• No audience disruption</li>
                  <li>• Multiple instrument compatibility</li>
                  <li>• Reference tone generation</li>
                  <li>• Professional stage appearance</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Industry Standard Pedals</h5>
              <p className="text-blue-700 text-sm">
                <strong>Boss TU-3:</strong> Most popular stage tuner • 
                <strong>TC Electronic PolyTune 3:</strong> Polyphonic tuning • 
                <strong>Eventide TimeFactor:</strong> Integrated with effects • 
                <strong>Strymon Lex:</strong> Boutique with premium features
              </p>
            </div>
          </div>

          {/* App-Based Tuners */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smartphone & App Tuners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Modern Convenience</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Always available on your phone</li>
                  <li>• Free or very inexpensive</li>
                  <li>• Advanced features and modes</li>
                  <li>• Metronome integration</li>
                  <li>• Custom tuning presets</li>
                  <li>• Visual and audio feedback</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Limitations</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Affected by background noise</li>
                  <li>• Requires quiet environment</li>
                  <li>• Phone microphone quality varies</li>
                  <li>• Battery drain on device</li>
                  <li>• May struggle with electric guitars</li>
                  <li>• Less durable than dedicated units</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-100 rounded">
              <h5 className="font-semibold text-purple-800 mb-2">Popular Tuner Apps</h5>
              <p className="text-purple-700 text-sm">
                <strong>Guitar Tuna:</strong> Most downloaded tuner • 
                <strong>Fender Tune:</strong> Official Fender app • 
                <strong>PitchLab:</strong> Professional features • 
                <strong>Chromatic Tuner:</strong> Simple and effective
              </p>
            </div>
          </div>

          {/* Rack & Desktop Tuners */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibent text-gray-900 mb-4">Rack & Desktop Tuners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Studio Applications</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Extremely high accuracy</li>
                  <li>• Multiple input sources</li>
                  <li>• Reference tone generation</li>
                  <li>• Digital and analog outputs</li>
                  <li>• Integration with recording systems</li>
                  <li>• Professional calibration options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Features</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Large, clear displays</li>
                  <li>• Multiple tuning temperaments</li>
                  <li>• Instrument-specific modes</li>
                  <li>• MIDI integration</li>
                  <li>• Calibration to different frequencies</li>
                  <li>• Professional studio standard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuning Accuracy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Tuning Accuracy</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cents and Precision</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Cent:</strong> 1/100th of a semitone</li>
                <li>• <strong>±1 cent:</strong> Extremely accurate (studio grade)</li>
                <li>• <strong>±3 cents:</strong> Very good accuracy</li>
                <li>• <strong>±5 cents:</strong> Acceptable for most uses</li>
                <li>• <strong>±10 cents:</strong> Noticeable but usable</li>
                <li>• <strong>&gt;10 cents:</strong> Obviously out of tune</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Factors Affecting Accuracy</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Ambient temperature changes</li>
                <li>• String age and condition</li>
                <li>• Guitar setup and intonation</li>
                <li>• Playing technique and pressure</li>
                <li>• Tuner quality and calibration</li>
                <li>• Background noise interference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuning Methods */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tuning Methods & Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Electronic Tuning</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-teal-700">Chromatic Mode</h4>
                <p className="text-teal-600 text-sm">Detects any note, most common setting</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700">Guitar Mode</h4>
                <p className="text-teal-600 text-sm">Only shows standard guitar notes (E-A-D-G-B-E)</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700">Strobe Tuning</h4>
                <p className="text-teal-600 text-sm">Ultra-precise visual representation</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700">Polyphonic</h4>
                <p className="text-teal-600 text-sm">Shows all strings at once (strum all strings)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Ear Training Methods</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-indigo-700">Reference Pitch</h4>
                <p className="text-indigo-600 text-sm">Tune low E to reference, then tune relatively</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Harmonic Tuning</h4>
                <p className="text-indigo-600 text-sm">Use natural harmonics for precise intervals</p>
              </div>
              <div>
                <h4 className="font-semibond text-indigo-700">Unison Tuning</h4>
                <p className="text-indigo-600 text-sm">Match notes across different strings</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Beat Frequency</h4>
                <p className="text-indigo-600 text-sm">Listen for interference between notes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Tunings */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Tunings & Tuner Support</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Common Alternative Tunings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Popular Alternatives</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• <strong>Drop D:</strong> D-A-D-G-B-E (rock/metal)</li>
                <li>• <strong>Open G:</strong> D-G-D-G-B-D (slide guitar)</li>
                <li>• <strong>Open D:</strong> D-A-D-F#-A-D (fingerpicking)</li>
                <li>• <strong>DADGAD:</strong> D-A-D-G-A-D (Celtic/folk)</li>
                <li>• <strong>Half-step down:</strong> Eb-Ab-Db-Gb-Bb-Eb</li>
                <li>• <strong>Open E:</strong> E-B-E-G#-B-E (blues slide)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Tuner Considerations</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Chromatic mode works for all tunings</li>
                <li>• Some tuners have preset modes</li>
                <li>• Reference tone generators helpful</li>
                <li>• Apps often include tuning presets</li>
                <li>• Custom tuning creation features</li>
                <li>• Temperament adjustments available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a Tuner */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Tuner</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">🎯 Tuner Selection Guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Beginners ($10-25)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Snark SN-5X clip-on</li>
                <li>• D'Addario NS Micro</li>
                <li>• Guitar Tuna app (free)</li>
                <li>• Simple operation</li>
                <li>• Clear visual display</li>
                <li>• Reliable basic tuning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Players ($25-75)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Boss TU-10 clip-on</li>
                <li>• TC Electronic PolyTune Clip</li>
                <li>• Peterson StroboClip HD</li>
                <li>• Enhanced accuracy</li>
                <li>• Multiple tuning modes</li>
                <li>• Durable construction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Professionals ($75+)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Boss TU-3 pedal</li>
                <li>• TC Electronic PolyTune 3</li>
                <li>• Peterson StroboStomp HD</li>
                <li>• Stage-ready reliability</li>
                <li>• Advanced features</li>
                <li>• Professional accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuning Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Tuning Tips</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Tune Up, Not Down</h3>
            <p className="text-green-700 text-sm">
              Always approach the target pitch from below. If you overshoot, tune down past 
              the note and come back up. This accounts for string tension and gearing.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Stretch New Strings</h3>
            <p className="text-green-700 text-sm">
              New strings will go out of tune frequently until they settle. Gently stretch 
              strings and retune several times when changing strings.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Check Intonation</h3>
            <p className="text-green-700 text-sm">
              If open strings are in tune but fretted notes sound off, your guitar's 
              intonation may need adjustment. Compare 12th fret harmonics to fretted notes.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Tune Often</h3>
            <p className="text-green-700 text-sm">
              Check tuning frequently during practice and performance. Temperature changes, 
              string stretching, and playing dynamics all affect tuning stability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
