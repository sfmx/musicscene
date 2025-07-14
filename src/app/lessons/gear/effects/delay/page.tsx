import Link from 'next/link';

export default function DelayPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Delay Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Time-based effects that create echoes and rhythmic patterns. From subtle slap-back 
          to ambient washes, delay is one of the most versatile guitar effects.
        </p>
      </div>

      {/* What is Delay */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Delay?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Delay creates echoes of your original signal by storing and playing back the audio 
            after a specified time interval. The delayed signal can be repeated multiple times, 
            creating rhythmic patterns, ambient textures, or simply adding space and dimension.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Parameters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Time:</strong> Delay length (milliseconds to seconds)</li>
                <li>• <strong>Feedback:</strong> Number of repeats</li>
                <li>• <strong>Mix/Level:</strong> Wet/dry balance</li>
                <li>• <strong>Tone:</strong> EQ of delayed signal</li>
                <li>• <strong>Modulation:</strong> Pitch/time variations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rhythmic echoes and patterns</li>
                <li>• Ambient soundscapes</li>
                <li>• Lead guitar enhancement</li>
                <li>• Creating space and depth</li>
                <li>• Doubling and thickening</li>
                <li>• Sound design and textures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Delay */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Delay</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analog Delay</h3>
            <p className="text-gray-700 mb-4">
              Uses bucket brigade devices (BBDs) or tape to create warm, musical repeats 
              that degrade naturally with each repeat.
            </p>
            <div className="text-sm text-gray-600 mb-3">
              <strong>Characteristics:</strong> Warm, musical degradation, limited delay time
            </div>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss DM-2, MXR Carbon Copy, Way Huge Aqua Puss
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Delay</h3>
            <p className="text-gray-700 mb-4">
              Provides pristine, exact repeats with extensive control options 
              and longer delay times.
            </p>
            <div className="text-sm text-gray-600 mb-3">
              <strong>Characteristics:</strong> Clean repeats, long delay times, precise control
            </div>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss DD-7, TC Electronic Flashback, Strymon Timeline
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tape Echo</h3>
            <p className="text-gray-700 mb-4">
              Classic tape-based delays with natural modulation, compression, 
              and warm, organic character.
            </p>
            <div className="text-sm text-gray-600 mb-3">
              <strong>Characteristics:</strong> Warm saturation, natural modulation, vintage vibe
            </div>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Echoplex EP-3, Space Echo RE-201, Belle Epoch
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Tap Delay</h3>
            <p className="text-gray-700 mb-4">
              Multiple delay taps create complex rhythmic patterns and 
              intricate echo arrangements.
            </p>
            <div className="text-sm text-gray-600 mb-3">
              <strong>Characteristics:</strong> Multiple echoes, rhythm patterns, complex textures
            </div>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Empress Echosystem, Eventide TimeFactor, rack units
            </div>
          </div>
        </div>
      </section>

      {/* Delay Time Ranges */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Delay Times</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Delay Time Ranges</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Short Delays (1-50ms)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Slap-back:</strong> 50-120ms</li>
                <li>• <strong>Doubling:</strong> 15-30ms</li>
                <li>• <strong>Thickening:</strong> 20-40ms</li>
                <li>• Used in rockabilly, country</li>
                <li>• Adds presence and punch</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Medium Delays (100-500ms)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Rhythmic:</strong> 1/8, 1/4 notes</li>
                <li>• <strong>Melodic:</strong> 200-400ms</li>
                <li>• <strong>Classic rock:</strong> 300-500ms</li>
                <li>• Creates musical echoes</li>
                <li>• Enhances lead playing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Long Delays (500ms+)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Ambient:</strong> 1-4 seconds</li>
                <li>• <strong>Looping:</strong> Multiple seconds</li>
                <li>• <strong>Soundscapes:</strong> Variable</li>
                <li>• Creates atmosphere</li>
                <li>• Experimental textures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Delay Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Delay Units</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Maestro Echoplex EP-3</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The gold standard of tape echo units. Warm, musical repeats with natural 
                  compression and saturation. Used on countless classic recordings.
                </p>
                <div className="bg-amber-50 p-3 rounded">
                  <h4 className="font-semibold text-amber-800 mb-2">Signature Sound:</h4>
                  <p className="text-amber-700 text-sm">
                    Warm tape saturation, natural modulation, musical compression and EQ.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Jimmy Page - Led Zeppelin epics</li>
                  <li>• Eddie Van Halen - "Eruption" solo</li>
                  <li>• Andy Summers - The Police textures</li>
                  <li>• Neal Schon - Journey leads</li>
                  <li>• Countless rock and fusion players</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Roland Space Echo RE-201</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Iconic tape echo with spring reverb. Multiple playback heads create 
                  complex rhythmic patterns. Essential for dub, reggae, and ambient music.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Complex multi-tap patterns, warm tape character, integrated spring reverb.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Lee "Scratch" Perry - Dub pioneer</li>
                  <li>• Robert Fripp - King Crimson soundscapes</li>
                  <li>• Radiohead - Ambient textures</li>
                  <li>• My Bloody Valentine - Shoegaze walls</li>
                  <li>• Dub and reggae producers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss DM-2 Delay</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The first mass-market analog delay pedal. Warm bucket brigade delays 
                  with musical degradation. Compact and reliable.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Warm analog delays with natural high-frequency roll-off and musical repeats.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• The Edge - U2's signature sound</li>
                  <li>• Kevin Shields - My Bloody Valentine</li>
                  <li>• Many 80s and 90s guitarists</li>
                  <li>• Alternative and indie musicians</li>
                  <li>• Collectors and vintage enthusiasts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">TC Electronic 2290</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Professional rack-mount digital delay with pristine sound quality 
                  and extensive modulation options. Studio standard in the 80s and 90s.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    Crystal clear digital delays with precise timing and extensive modulation.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• David Gilmour - Pink Floyd precision</li>
                  <li>• Larry Carlton - Smooth jazz</li>
                  <li>• Session musicians worldwide</li>
                  <li>• Progressive rock artists</li>
                  <li>• Studio professionals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delay Techniques */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Delay Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rhythmic Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Dotted eighth notes:</strong> Creates triplet feel</li>
              <li>• <strong>Quarter note delays:</strong> Doubling effect</li>
              <li>• <strong>Polyrhythms:</strong> Multiple delay times</li>
              <li>• <strong>Tempo sync:</strong> Lock to song BPM</li>
              <li>• <strong>Ping-pong:</strong> Stereo bouncing</li>
              <li>• <strong>Subdivisions:</strong> 16th, 8th, quarter notes</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ambient Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Infinite repeats:</strong> Feedback at maximum</li>
              <li>• <strong>Volume swells:</strong> Slow attack with delay</li>
              <li>• <strong>Reverse delays:</strong> Backwards echoes</li>
              <li>• <strong>Modulated delays:</strong> Pitch shifting</li>
              <li>• <strong>Layering:</strong> Multiple delay units</li>
              <li>• <strong>Self-oscillation:</strong> Feedback loops</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Famous Delay Songs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Iconic Delay in Popular Music</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Classic Examples</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>U2 - "Where The Streets Have No Name":</strong> Dotted eighth delays</li>
                <li>• <strong>Pink Floyd - "Run Like Hell":</strong> Rhythmic delay patterns</li>
                <li>• <strong>Van Halen - "Eruption":</strong> Tape echo on tapping</li>
                <li>• <strong>The Police - "Message In A Bottle":</strong> Bright analog delays</li>
                <li>• <strong>Led Zeppelin - "Black Mountain Side":</strong> Ambient Echoplex</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modern Applications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Radiohead:</strong> Complex digital delays and loops</li>
                <li>• <strong>Explosions in the Sky:</strong> Ambient post-rock textures</li>
                <li>• <strong>John Mayer:</strong> Blues and pop delay applications</li>
                <li>• <strong>Hillsong United:</strong> Modern worship delay sounds</li>
                <li>• <strong>Ambient/Post-Rock:</strong> Textural soundscapes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Delay Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Delay Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Match delay time to song tempo</li>
              <li>• Use tap tempo for accuracy</li>
              <li>• Consider room acoustics</li>
              <li>• Adjust mix for musical context</li>
              <li>• Use expression pedal for feedback</li>
              <li>• Practice with metronome</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recording Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Record dry signal separately</li>
              <li>• Use delay sends for flexibility</li>
              <li>• High-pass filter delay returns</li>
              <li>• Pan delays for width</li>
              <li>• Automate delay parameters</li>
              <li>• Layer different delay types</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Delay Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Slap-back Echo</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Time: 80-120ms</li>
                <li>• Feedback: 1-2 repeats</li>
                <li>• Mix: 20-30%</li>
                <li>• Use: Rockabilly, country</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Rhythmic Delay</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Time: 1/8 or 1/4 notes</li>
                <li>• Feedback: 3-5 repeats</li>
                <li>• Mix: 25-40%</li>
                <li>• Use: U2-style patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ambient Wash</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Time: 500ms-2 seconds</li>
                <li>• Feedback: High (8-9)</li>
                <li>• Mix: 40-60%</li>
                <li>• Use: Soundscapes</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Always set your delay time to musical subdivisions 
              that complement the song. Use a tap tempo pedal or calculate delay times: 
              60,000 ÷ BPM = quarter note delay time in milliseconds.
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
            Delay Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
