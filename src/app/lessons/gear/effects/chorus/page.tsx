import Link from 'next/link';

export default function ChorusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/effects" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Effects Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Chorus Effects
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Creates lush, shimmering textures by blending your dry signal with modulated 
          copies. From subtle thickening to dramatic ensemble effects.
        </p>
      </div>

      {/* What is Chorus */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Chorus?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Chorus creates the illusion of multiple instruments playing the same part by mixing 
            your dry signal with one or more delayed copies that are modulated in pitch and timing. 
            This mimics the natural variations that occur when multiple musicians play together.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Delays signal by 15-35ms</li>
                <li>• Modulates delay time with LFO</li>
                <li>• Creates pitch variations</li>
                <li>• Blends with dry signal</li>
                <li>• Multiple delay lines possible</li>
                <li>• Phase differences create width</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clean guitar thickening</li>
                <li>• 80s pop and rock textures</li>
                <li>• Jazz and fusion smoothness</li>
                <li>• Country guitar sparkle</li>
                <li>• Ambient and atmospheric sounds</li>
                <li>• Bass guitar enhancement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Chorus */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Chorus Effects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analog Chorus</h3>
            <p className="text-gray-700 mb-4">
              Uses bucket brigade delay (BBD) chips to create warm, musical modulation. 
              Known for their organic sound and subtle imperfections.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss CE-1, MXR Analog Chorus, TC Electronic Corona
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Chorus</h3>
            <p className="text-gray-700 mb-4">
              Provides clean, pristine modulation with precise control. Often includes 
              multiple chorus types and extensive parameter control.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss CH-1, Strymon Mobius, Eventide TimeFactor
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stereo Chorus</h3>
            <p className="text-gray-700 mb-4">
              Outputs to two amps or channels, creating wide, spacious soundscapes. 
              Essential for achieving classic 80s guitar tones.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> Boss CE-5, Roland JC-120 amp, rack processors
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Voice Chorus</h3>
            <p className="text-gray-700 mb-4">
              Uses multiple delay lines and LFOs to create ensemble effects, 
              simulating large groups of instruments.
            </p>
            <div className="text-sm text-gray-600">
              <strong>Examples:</strong> EHX Small Clone, Boss CE-20, vintage string machines
            </div>
          </div>
        </div>
      </section>

      {/* Chorus Parameters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Chorus Parameters</h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Controls</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Primary Controls</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Rate/Speed:</strong> LFO frequency (how fast the modulation cycles)</li>
                <li><strong>Depth/Intensity:</strong> Amount of pitch modulation</li>
                <li><strong>Level/Mix:</strong> Balance between dry and effected signal</li>
                <li><strong>Tone/EQ:</strong> Frequency shaping of the effect</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Advanced Parameters</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Delay Time:</strong> Base delay before modulation</li>
                <li><strong>Feedback:</strong> Amount of processed signal fed back</li>
                <li><strong>Phase:</strong> Relationship between multiple voices</li>
                <li><strong>Waveform:</strong> Shape of the modulating LFO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Chorus Pedals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Legendary Chorus Pedals</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss CE-1 Chorus Ensemble</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The first chorus pedal ever made, adapted from the Roland JC-120 amplifier. 
                  Warm, lush, and musical with both chorus and vibrato modes.
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Signature Sound:</h4>
                  <p className="text-blue-700 text-sm">
                    Warm, analog modulation with rich harmonic content and smooth transitions.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Andy Summers - The Police</li>
                  <li>• John Scofield - Jazz fusion</li>
                  <li>• Robert Smith - The Cure</li>
                  <li>• Many 80s session players</li>
                  <li>• Jazz and fusion guitarists</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Electro-Harmonix Small Clone</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Simple, affordable chorus with a distinctive sound. Made famous by Kurt Cobain 
                  and the grunge movement, but also beloved by clean-tone players.
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Signature Sound:</h4>
                  <p className="text-green-700 text-sm">
                    Rich, deep chorus with a slightly dark character and smooth modulation.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Kurt Cobain - Nirvana clean tones</li>
                  <li>• John Frusciante - Red Hot Chili Peppers</li>
                  <li>• Many indie and alternative artists</li>
                  <li>• Clean tone specialists</li>
                  <li>• Lo-fi and bedroom pop musicians</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Boss CE-5 Chorus Ensemble</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Modern stereo chorus with extensive control options. High-frequency cut 
                  filter and stereo outputs make it perfect for studio and live use.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Signature Sound:</h4>
                  <p className="text-purple-700 text-sm">
                    Clean, precise digital chorus with wide stereo imaging and flexible control.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Famous Users:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Session musicians worldwide</li>
                  <li>• Country and pop guitarists</li>
                  <li>• Clean tone enthusiasts</li>
                  <li>• Studio professionals</li>
                  <li>• Cover band musicians</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">TC Electronic Corona Chorus</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Modern digital chorus with TonePrint technology for custom sounds. 
                  Combines classic algorithms with modern flexibility.
                </p>
                <div className="bg-yellow-50 p-3 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">Signature Sound:</h4>
                  <p className="text-yellow-700 text-sm">
                    Versatile digital chorus with multiple classic and modern algorithms.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• TonePrint custom programming</li>
                  <li>• Multiple chorus types</li>
                  <li>• High-quality digital processing</li>
                  <li>• Compact pedalboard footprint</li>
                  <li>• Artist signature settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chorus in Different Genres */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Chorus in Different Musical Genres</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">80s Pop & Rock</h3>
            <p className="text-gray-700 mb-4">
              Defining sound of the decade. Wide stereo chorus on clean tones, 
              often combined with reverb for spacious soundscapes.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Settings:</strong> Deep, slow rate, stereo spread</p>
              <p><strong>Artists:</strong> The Police, The Cure, U2</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Jazz & Fusion</h3>
            <p className="text-gray-700 mb-4">
              Subtle chorus adds warmth and dimension to clean jazz tones 
              without overwhelming the natural guitar sound.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Settings:</strong> Subtle depth, medium rate</p>
              <p><strong>Artists:</strong> John Scofield, Pat Metheny, Bill Frisell</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Country & Folk</h3>
            <p className="text-gray-700 mb-4">
              Light chorus adds sparkle to clean tones and fingerpicked passages, 
              enhancing the natural beauty of acoustic-style playing.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Settings:</strong> Light depth, faster rate</p>
              <p><strong>Artists:</strong> Brad Paisley, Keith Urban, many session players</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative & Indie</h3>
            <p className="text-gray-700 mb-4">
              From subtle enhancement to dramatic texture, chorus helps create 
              the dreamy, atmospheric sounds of alternative rock.
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Settings:</strong> Various, often deep and slow</p>
              <p><strong>Artists:</strong> Nirvana, My Bloody Valentine, Radiohead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Using Chorus Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Chorus Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with subtle settings</li>
              <li>• Works best with clean tones</li>
              <li>• Use stereo outputs when possible</li>
              <li>• Combine with reverb for depth</li>
              <li>• Adjust for room acoustics</li>
              <li>• Less is often more</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Signal Chain Position</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• After distortion/overdrive</li>
              <li>• Before delay and reverb</li>
              <li>• Can go in amp effects loop</li>
              <li>• Stereo chorus benefits from dual amps</li>
              <li>• Consider buffer placement</li>
              <li>• Experiment with position</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Chorus Settings Guide</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Subtle Enhancement</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Rate: 9-11 o'clock</li>
                <li>• Depth: 9-10 o'clock</li>
                <li>• Level: 10-12 o'clock</li>
                <li>• Use: Clean tone thickening</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">80s Style</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Rate: 10-1 o'clock</li>
                <li>• Depth: 12-2 o'clock</li>
                <li>• Level: 12-2 o'clock</li>
                <li>• Use: Dramatic texture</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Vibrato Effect</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Rate: 11-1 o'clock</li>
                <li>• Depth: 2-4 o'clock</li>
                <li>• Level: Dry signal off</li>
                <li>• Use: Warbling texture</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Chorus sounds different at various volumes and in different 
              rooms. What sounds perfect at bedroom levels might be too much in a band mix. 
              Always adjust for the musical context.
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
            Chorus Effects Guide
          </div>
        </div>
      </nav>
    </div>
  );
}
