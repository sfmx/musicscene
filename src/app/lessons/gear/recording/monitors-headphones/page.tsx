import Link from 'next/link';

export default function MonitorsHeadphonesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Studio Monitors & Headphones
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Your window into the mix. Accurate monitoring is essential for making good 
          recording, mixing, and mastering decisions that translate across all playback systems.
        </p>
      </div>

      {/* Why Monitoring Matters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Accurate Monitoring Matters</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Your monitoring system is your reference for all creative and technical decisions. 
            Inaccurate monitors can lead to mixes that sound great in your studio but terrible 
            everywhere else. Good monitors reveal the truth about your recordings.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Accurate Monitors Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Flat, uncolored frequency response</li>
                <li>• Clear stereo imaging and soundstage</li>
                <li>• Detailed resolution of mix elements</li>
                <li>• Consistent performance at various levels</li>
                <li>• Truthful representation of your recordings</li>
                <li>• Predictable translation to other systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Problems with Poor Monitoring</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mixes that don't translate well</li>
                <li>• Over or under-compensation for frequency peaks</li>
                <li>• Inability to hear subtle details</li>
                <li>• Poor stereo imaging decisions</li>
                <li>• Inconsistent mix levels</li>
                <li>• Fatigue from listening on harsh systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Monitors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Studio Monitors</h2>
        
        <div className="space-y-6">
          {/* Near-field Monitors */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Near-field Monitors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Designed for 3-8 feet listening distance</li>
                  <li>• Minimize room acoustic influences</li>
                  <li>• Typically 5-8 inch woofers</li>
                  <li>• Most common in home studios</li>
                  <li>• Balanced frequency response</li>
                  <li>• Compact size for desktop placement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Advantages</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Less room treatment required</li>
                  <li>• Detailed midrange reproduction</li>
                  <li>• Affordable entry into professional monitoring</li>
                  <li>• Direct sound reaches ears first</li>
                  <li>• Good for small studio spaces</li>
                  <li>• Wide selection available</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Popular Near-field Models</h5>
              <p className="text-blue-700 text-sm">
                <strong>Yamaha HS5/HS8:</strong> Industry standard reference • 
                <strong>KRK Rokit series:</strong> Enhanced bass response • 
                <strong>JBL LSR305/308:</strong> Excellent value and accuracy • 
                <strong>Adam Audio T5V/T7V:</strong> Ribbon tweeters for detail
              </p>
            </div>
          </div>

          {/* Mid-field and Far-field */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mid-field & Far-field Monitors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Mid-field Monitors</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• 6-10 feet listening distance</li>
                  <li>• Larger drivers (8-10 inches)</li>
                  <li>• More powerful amplification</li>
                  <li>• Better low-end extension</li>
                  <li>• Professional studio standard</li>
                  <li>• Require proper room treatment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Far-field Monitors</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• 10+ feet listening distance</li>
                  <li>• Large woofers (12+ inches)</li>
                  <li>• Full-range frequency response</li>
                  <li>• High SPL capability</li>
                  <li>• Professional mixing rooms</li>
                  <li>• Expensive and space-intensive</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Active vs Passive */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Active vs. Passive Monitors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Active (Powered) Monitors</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Built-in amplification</li>
                  <li>• Optimized amp-to-driver matching</li>
                  <li>• Built-in crossovers and EQ</li>
                  <li>• More convenient setup</li>
                  <li>• Most common for home studios</li>
                  <li>• Direct connection from interface</li>
                </ul>
                <div className="mt-3 p-3 bg-purple-100 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>Pros:</strong> Convenience, optimized performance, no external amp needed
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Passive Monitors</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Require external amplifier</li>
                  <li>• Amp selection affects sound</li>
                  <li>• Traditional hi-fi approach</li>
                  <li>• Can upgrade amp separately</li>
                  <li>• Often less expensive initially</li>
                  <li>• More complex setup</li>
                </ul>
                <div className="mt-3 p-3 bg-purple-100 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>Pros:</strong> Amp flexibility, upgrade path, traditional audiophile appeal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Headphones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Studio Headphones</h2>
        
        <div className="space-y-6">
          {/* Open vs Closed */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Open vs. Closed Back Headphones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Open-Back Headphones</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Natural, airy soundstage</li>
                  <li>• More accurate stereo imaging</li>
                  <li>• Less ear fatigue for long sessions</li>
                  <li>• Sound leaks in and out</li>
                  <li>• Best for mixing and critical listening</li>
                  <li>• Require quiet environment</li>
                </ul>
                <div className="mt-3 p-3 bg-orange-100 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>Best Models:</strong> Sennheiser HD600/650, Audio-Technica ATH-R70x, AKG K701
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Closed-Back Headphones</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Isolation from external noise</li>
                  <li>• No sound leakage</li>
                  <li>• Better for recording sessions</li>
                  <li>• Often enhanced bass response</li>
                  <li>• Can cause ear fatigue faster</li>
                  <li>• More intimate sound character</li>
                </ul>
                <div className="mt-3 p-3 bg-orange-100 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>Best Models:</strong> Sony MDR-7506, Audio-Technica ATH-M50x, Beyerdynamic DT770
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Headphone Categories */}
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Headphone Categories by Use</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Mixing Headphones</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Flat frequency response</li>
                  <li>• Wide soundstage</li>
                  <li>• Accurate stereo imaging</li>
                  <li>• Comfortable for long sessions</li>
                  <li>• Open-back preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Recording Headphones</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Closed-back design</li>
                  <li>• No bleed into microphones</li>
                  <li>• Comfortable for performers</li>
                  <li>• Good isolation</li>
                  <li>• Durable construction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Mastering Headphones</h4>
                <ul className="text-teal-600 text-sm space-y-1">
                  <li>• Ultra-flat response</li>
                  <li>• Exceptional detail resolution</li>
                  <li>• Wide frequency range</li>
                  <li>• Low distortion</li>
                  <li>• Professional reference grade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitor Placement & Setup */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitor Placement & Room Setup</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Positioning Guidelines</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Distance:</strong> Form equilateral triangle with your head</li>
                <li>• <strong>Height:</strong> Tweeters at ear level when seated</li>
                <li>• <strong>Angle:</strong> Slight toe-in toward listening position</li>
                <li>• <strong>Isolation:</strong> Use isolation pads to reduce vibration</li>
                <li>• <strong>Symmetry:</strong> Equal distance from walls and surfaces</li>
                <li>• <strong>Wall Distance:</strong> Avoid exact multiples (1/3 rule)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Considerations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Treatment:</strong> Address first reflection points</li>
                <li>• <strong>Bass Traps:</strong> Control low-frequency buildup</li>
                <li>• <strong>Symmetry:</strong> Balanced room layout</li>
                <li>• <strong>Furniture:</strong> Avoid parallel reflective surfaces</li>
                <li>• <strong>Size:</strong> Room should be larger than wavelength</li>
                <li>• <strong>Materials:</strong> Mix of absorptive and diffusive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitor & Headphone Buying Guide</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Recommendations by Budget</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Budget Setup ($200-500)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li><strong>Monitors:</strong></li>
                <li>• JBL LSR305 pair</li>
                <li>• Presonus Eris E3.5</li>
                <li>• Mackie CR3-X</li>
                <li><strong>Headphones:</strong></li>
                <li>• Audio-Technica ATH-M40x</li>
                <li>• Sony MDR-7506</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Professional Setup ($500-1500)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li><strong>Monitors:</strong></li>
                <li>• Yamaha HS8 pair</li>
                <li>• Adam Audio T7V</li>
                <li>• KRK Rokit 8 G4</li>
                <li><strong>Headphones:</strong></li>
                <li>• Sennheiser HD650</li>
                <li>• Audio-Technica ATH-R70x</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">High-End Setup ($1500+)</h4>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li><strong>Monitors:</strong></li>
                <li>• Focal Alpha 80 Evo</li>
                <li>• Genelec 8040B</li>
                <li>• Neumann KH120A</li>
                <li><strong>Headphones:</strong></li>
                <li>• Sennheiser HD800S</li>
                <li>• Focal Utopia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calibration and Testing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitor Calibration & Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Calibration Methods</h3>
            <ul className="text-indigo-700 space-y-2">
              <li>• <strong>SPL Matching:</strong> Set both monitors to same level</li>
              <li>• <strong>Pink Noise Test:</strong> Check frequency balance</li>
              <li>• <strong>Phase Checking:</strong> Ensure proper stereo imaging</li>
              <li>• <strong>Room Correction:</strong> Software-based EQ adjustments</li>
              <li>• <strong>Reference Tracks:</strong> Compare with known mixes</li>
              <li>• <strong>Professional Calibration:</strong> Measurement microphone setup</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Common Problems</h3>
            <ul className="text-red-700 space-y-2">
              <li>• <strong>Bass Buildup:</strong> Room modes causing frequency peaks</li>
              <li>• <strong>Flutter Echo:</strong> Parallel wall reflections</li>
              <li>• <strong>Comb Filtering:</strong> Reflections interfering with direct sound</li>
              <li>• <strong>Standing Waves:</strong> Frequency nulls and peaks</li>
              <li>• <strong>Early Reflections:</strong> Blurring stereo image</li>
              <li>• <strong>Isolation Issues:</strong> Vibration through surfaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Listening Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Listening Tips</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Use Reference Tracks</h3>
            <p className="text-green-700 text-sm">
              Always have commercial releases in your genre that you know well. 
              These help you understand how your monitors translate and what good mixes sound like.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Monitor at Reasonable Levels</h3>
            <p className="text-green-700 text-sm">
              Loud monitoring can damage hearing and lead to poor mix decisions. 
              Mix at 85dB SPL or lower, and take regular breaks.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Cross-Reference Your Mixes</h3>
            <p className="text-green-700 text-sm">
              Check your mixes on multiple systems: car stereo, earbuds, phone speakers, 
              and other playback devices to ensure good translation.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Trust Your Monitors</h3>
            <p className="text-green-700 text-sm">
              Once you know your monitors well, trust what they tell you. 
              Avoid constant tweaking based on other playback systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
