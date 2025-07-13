import Link from 'next/link';

export default function MiniPracticeAmpsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/amps" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Amplifiers Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mini & Practice Amplifiers
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Compact powerhouses designed for practice, bedroom recording, and small venues. 
          Modern mini amps deliver impressive tone and features in surprisingly small packages.
        </p>
      </div>

      {/* What Are Practice Amps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Practice Amplifiers?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Practice amplifiers are small, typically low-wattage amplifiers designed primarily for personal practice, 
            learning, and home recording. Modern practice amps have evolved far beyond simple, tinny-sounding boxes 
            to offer sophisticated features and surprisingly good tone quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Characteristics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Power range: 1-30 watts</li>
                <li>• Compact, portable design</li>
                <li>• Headphone output for silent practice</li>
                <li>• Built-in effects and amp modeling</li>
                <li>• USB/audio interface capabilities</li>
                <li>• Battery operation (some models)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Home practice and learning</li>
                <li>• Bedroom recording</li>
                <li>• Small acoustic gigs</li>
                <li>• Travel and busking</li>
                <li>• Apartment-friendly playing</li>
                <li>• Backup amplification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Practice Amps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Practice Amplifiers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Practice Amps</h3>
            <p className="text-gray-700 mb-4">
              Simple, affordable amps with basic controls and maybe a few built-in effects. 
              Perfect for beginners and straightforward practice needs.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Features:</strong> Volume, tone, gain, basic reverb/distortion
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modeling Practice Amps</h3>
            <p className="text-gray-700 mb-4">
              Advanced amps with digital amp modeling, multiple effects, and often smartphone connectivity. 
              Offer incredible versatility in a small package.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Features:</strong> Multiple amp models, effects, presets, app control
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Desktop/Lunch Box Amps</h3>
            <p className="text-gray-700 mb-4">
              Compact tube or hybrid amps designed for home use but with professional tone quality. 
              Often require separate speaker cabinets.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Features:</strong> Tube tone, professional quality, compact head design
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Acoustic Practice Amps</h3>
            <p className="text-gray-700 mb-4">
              Specialized amps designed for acoustic guitars, often with multiple inputs 
              for guitar and microphone, plus acoustic-specific effects.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Features:</strong> Clean reproduction, reverb, chorus, feedback control
            </div>
          </div>
        </div>
      </section>

      {/* Power and Volume Considerations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Power & Volume Considerations</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Wattage in Practice Amps</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">1-5 Watts</h4>
              <p className="text-sm text-gray-700 mb-2">Perfect for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bedroom practice</li>
                <li>• Apartment living</li>
                <li>• Late-night sessions</li>
                <li>• Desktop recording</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">10-15 Watts</h4>
              <p className="text-sm text-gray-700 mb-2">Perfect for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Home practice</li>
                <li>• Small jams</li>
                <li>• Recording studio</li>
                <li>• Coffee shop gigs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">20-30 Watts</h4>
              <p className="text-sm text-gray-700 mb-2">Perfect for:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Band practice</li>
                <li>• Small venues</li>
                <li>• Outdoor events</li>
                <li>• Backup amplification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Practice Amp Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connectivity Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>USB Audio Interface:</strong> Direct recording to computer</li>
              <li><strong>Bluetooth Audio:</strong> Play along with streaming music</li>
              <li><strong>Smartphone Apps:</strong> Remote control and preset management</li>
              <li><strong>Auxiliary Input:</strong> Play backing tracks</li>
              <li><strong>Headphone Output:</strong> Silent practice capability</li>
              <li><strong>DI Output:</strong> Direct connection to PA systems</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Built-in Effects</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Reverb:</strong> Spring, hall, plate, and room reverbs</li>
              <li><strong>Delay/Echo:</strong> Various delay times and feedback</li>
              <li><strong>Modulation:</strong> Chorus, flanger, phaser, tremolo</li>
              <li><strong>Distortion:</strong> Overdrive, fuzz, and high-gain options</li>
              <li><strong>Amp Modeling:</strong> Classic amp simulations</li>
              <li><strong>Tuner:</strong> Built-in chromatic tuner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Practice Amp Models */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Practice Amp Models</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget-Friendly Options ($50-150)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fender Frontman Series</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Reliable, straightforward practice amps with clean and drive channels. 
                  Great build quality at an affordable price.
                </p>
                <div className="text-xs text-gray-600">10-25W options available</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Orange Crush Series</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Distinctive Orange tone in compact packages. Known for their 
                  punchy overdrive and solid construction.
                </p>
                <div className="text-xs text-gray-600">12-35W options available</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mid-Range Modeling Amps ($150-400)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Boss Katana Mini/50</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Incredible tone and versatility with multiple amp types, effects, 
                  and smartphone app control. Outstanding value.
                </p>
                <div className="text-xs text-gray-600">7W-50W options available</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Yamaha THR Series</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Desktop amps with exceptional tone quality, USB interface, 
                  and curated effects. Perfect for home recording.
                </p>
                <div className="text-xs text-gray-600">5W-30W options available</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Practice Amps ($400+)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Positive Grid Spark</h4>
                <p className="text-gray-700 text-sm mb-2">
                  AI-powered amp with smart jamming features, extensive app integration, 
                  and high-quality modeling. Revolutionary practice experience.
                </p>
                <div className="text-xs text-gray-600">40W combo with smart features</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Blackstar HT-1/HT-5</h4>
                <p className="text-gray-700 text-sm mb-2">
                  True tube tone in compact packages with ISF control and 
                  emulated output. Professional quality for home use.
                </p>
                <div className="text-xs text-gray-600">1W-5W tube options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Amp Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting the Most from Your Practice Amp</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Practice Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Use headphones for focused practice sessions</li>
              <li>• Experiment with different amp models and effects</li>
              <li>• Record yourself to track progress</li>
              <li>• Play along with backing tracks via aux input</li>
              <li>• Start with clean tones to hear your technique clearly</li>
              <li>• Use the metronome or drum patterns if available</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tone Optimization</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Position the amp at ear level when possible</li>
              <li>• Avoid placing against walls to reduce boominess</li>
              <li>• Use moderate gain settings for better note clarity</li>
              <li>• Adjust EQ to complement your guitar's natural tone</li>
              <li>• Save your favorite settings as presets</li>
              <li>• Consider room acoustics in your tone adjustments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recording with Practice Amps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recording with Practice Amps</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern practice amps are excellent for home recording, offering professional results 
            without the volume concerns of larger amplifiers. Many feature USB audio interfaces 
            and direct recording capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Direct Recording</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• USB audio interface</li>
                <li>• Emulated speaker output</li>
                <li>• No microphone needed</li>
                <li>• Consistent results</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Microphone Recording</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Natural speaker sound</li>
                <li>• Room ambience</li>
                <li>• Traditional approach</li>
                <li>• Dynamic microphones work well</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Hybrid Approach</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Combine direct and mic signals</li>
                <li>• Blend for optimal tone</li>
                <li>• Re-amping possibilities</li>
                <li>• Maximum flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice Amp Buying Guide</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Considerations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Essential Questions</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• What's your primary use case? (practice, recording, small gigs)</li>
                <li>• Do you need headphone capability for silent practice?</li>
                <li>• How important are built-in effects vs. external pedals?</li>
                <li>• Will you be recording directly to a computer?</li>
                <li>• Do you play multiple guitar types (electric, acoustic, bass)?</li>
                <li>• What's your space and portability requirements?</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Must-Have Features</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Headphone output for silent practice</li>
                <li>• Auxiliary input for playing along with music</li>
                <li>• At least basic reverb and drive/distortion</li>
                <li>• Good build quality and reliable controls</li>
                <li>• Appropriate power for your needs</li>
                <li>• Clear, musical tone across all volume levels</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Don't overlook the importance of good tone at low volumes. 
              The best practice amps sound musical and inspiring even at whisper-quiet levels, 
              encouraging you to play more often.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/lessons/gear/amps" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Amplifiers Overview
          </Link>
          <div className="text-sm text-gray-500">
            Mini & Practice Amplifiers Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
