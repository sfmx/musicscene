import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabAndNoteVisualizer from "@/components/TabAndNoteVisualizer";

// Main riff patterns
const mainRiffTab = [
  { string: 6, fret: 0, idx: 0 }, // E5
  { string: 5, fret: 2, idx: 0 },
  
  { string: 6, fret: 0, idx: 1 }, // A5 
  { string: 5, fret: 0, idx: 1 },
  { string: 4, fret: 2, idx: 1 },
  
  { string: 5, fret: 2, idx: 2 }, // B5
  { string: 4, fret: 4, idx: 2 },
];

const mainRiffNotes = [
  { name: 'E5', idx: 0 },
  { name: 'A5', idx: 1 },
  { name: 'B5', idx: 2 }
];

// Verse riff in E minor pentatonic
const verseRiffTab = [
  { string: 6, fret: 0, idx: 0 }, // E
  { string: 6, fret: 3, idx: 1 }, // G
  { string: 5, fret: 0, idx: 2 }, // A
  { string: 5, fret: 2, idx: 3 }, // B
  { string: 4, fret: 2, idx: 4 }, // E (octave)
];

const verseRiffNotes = [
  { name: 'E', idx: 0 },
  { name: 'G', idx: 1 },
  { name: 'A', idx: 2 },
  { name: 'B', idx: 3 },
  { name: 'E', idx: 4 }
];

export default function WereNotGonnaTakeItBreakdown() {
  return (
    <Layout>
      <Header
        title="&quot;We're Not Gonna Take It&quot; - Complete Song Analysis"
        subtitle="Professional breakdown of Twisted Sister's anthem with theory, technique, and equipment analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/breakdowns" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Breakdowns
          </Link>
        </nav>

        {/* Song Header */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">We're Not Gonna Take It</h1>
              <div className="space-y-2 text-gray-700">
                <p><strong>Artist:</strong> Twisted Sister</p>
                <p><strong>Album:</strong> Stay Hungry</p>
                <p><strong>Released:</strong> 1984</p>
                <p><strong>Genre:</strong> Glam Metal / Hard Rock</p>
                <p><strong>Tempo:</strong> 140 BPM</p>
                <p><strong>Duration:</strong> 3:38</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h2 className="font-semibold text-gray-800 mb-3">Difficulty Analysis</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Overall Difficulty:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Rhythm Guitar:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Beginner+</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Guitar:</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Theory Complexity:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Key & Scale Analysis */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key & Scale Structure</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-blue-800 font-medium">Primary Key: E Minor</p>
                  <p className="text-blue-700">The song centers around E minor with strong modal inflections</p>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Scales Used:</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• E Natural Minor (E-F#-G-A-B-C-D)</li>
                    <li>• E Minor Pentatonic (E-G-A-B-D)</li>
                    <li>• Brief E Dorian inflections (verse)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Modal Character:</p>
                  <p className="text-blue-700">Primarily Aeolian (natural minor) with Dorian tendencies in the verse sections</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/scales/minor-pentatonic" className="text-blue-600 hover:text-blue-800 text-sm">
                  → Learn Minor Pentatonic Scale
                </Link>
              </div>
            </div>

            {/* Chord Progression Analysis */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Chord Progressions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-green-800 font-medium">Verse: Em - C - G - D</p>
                  <p className="text-green-700">i - ♭VI - ♭III - ♭VII (classic minor progression)</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Chorus: Em - C - G - D - Em</p>
                  <p className="text-green-700">Same progression with resolution back to Em</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Pre-Chorus: G - A - B</p>
                  <p className="text-green-700">♭III - IV - V (building tension to chorus)</p>
                </div>
                <div>
                  <p className="text-green-800 font-medium">Function Analysis:</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Classic rock vi-IV-I-V in relative major (G)</li>
                    <li>• Strong plagal motion (♭VI to i)</li>
                    <li>• Mixolydian ♭VII creates modal character</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/lessons/songs/progressions/minor-progressions" className="text-green-600 hover:text-green-800 text-sm">
                  → Explore Minor Progressions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technique Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Playing Techniques</h2>
          
          {/* Main Riff */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Main Riff Pattern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <TabAndNoteVisualizer
                  tabNotes={mainRiffTab}
                  notes={mainRiffNotes}
                  beatsPerBar={4}
                  title="Core Power Chord Progression"
                />
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Pattern:</strong> E5 - A5 - B5 power chord progression</p>
                  <p><strong>Rhythm:</strong> Straight eighth notes with emphasis on downbeats</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Picking Technique:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Primary: Downstrokes for power and aggression</li>
                    <li>• Palm muting on verses for tightness</li>
                    <li>• Clean chord changes between power chords</li>
                    <li>• Strong attack on beat 1 and 3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Voicing Notes:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• E5: Root and fifth (E-B)</li>
                    <li>• A5: Root and fifth (A-E)</li>
                    <li>• B5: Root and fifth (B-F#)</li>
                    <li>• Octave doubling for fullness</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/lessons/songs/techniques/power-chords" className="text-cyan-600 hover:text-cyan-800 text-sm">
                → Master Power Chord Techniques
              </Link>
            </div>
          </div>

          {/* Verse Riff */}
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Verse Riff Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <TabAndNoteVisualizer
                  tabNotes={verseRiffTab}
                  notes={verseRiffNotes}
                  beatsPerBar={4}
                  title="Verse Pentatonic Pattern"
                />
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-purple-800 font-medium">E Minor Pentatonic Movement</p>
                <ul className="text-purple-700 space-y-1">
                  <li>• Uses open position E minor pentatonic</li>
                  <li>• Single-note melodic approach over power chords</li>
                  <li>• Creates vocal-like phrasing</li>
                  <li>• Combines single notes with chord stabs</li>
                </ul>
                <div className="mt-3">
                  <Link href="/lessons/songs/scales/pentatonic-patterns" className="text-purple-600 hover:text-purple-800 text-sm">
                    → Pentatonic Pattern Library
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Tone */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tone Analysis</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Guitar Setup */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">🎸 Guitar Setup</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-amber-800 font-medium">Dee Snider's Setup:</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• BC Rich Mockingbird</li>
                    <li>• Humbucking pickups</li>
                    <li>• Bridge pickup primarily</li>
                    <li>• Standard tuning (E-A-D-G-B-E)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-800 font-medium">Alternative Guitars:</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Gibson Les Paul</li>
                    <li>• ESP Eclipse</li>
                    <li>• Any humbucker-equipped rock guitar</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/gear/guitar-selection" className="text-amber-600 hover:text-amber-800 text-sm">
                    → Guitar Selection Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-red-800 font-medium">Classic '80s Tone:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Marshall JCM800 series</li>
                    <li>• High gain, moderate mids</li>
                    <li>• Bright, cutting treble</li>
                    <li>• Tight low end</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-800 font-medium">Settings Guide:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Gain: 7-8/10</li>
                    <li>• Bass: 6/10</li>
                    <li>• Mids: 7/10</li>
                    <li>• Treble: 8/10</li>
                    <li>• Presence: 6/10</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/gear/amp-settings" className="text-red-600 hover:text-red-800 text-sm">
                    → Amp Settings Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">🎛️ Effects Chain</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-cyan-800 font-medium">Essential Effects:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Overdrive/Distortion boost</li>
                    <li>• Light compression</li>
                    <li>• Subtle chorus (chorus sections)</li>
                    <li>• Hall reverb (ambient)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Signal Chain:</p>
                  <p className="text-cyan-700 text-xs font-mono">
                    Guitar → Compressor → Overdrive → Amp → [FX Loop: Chorus → Reverb]
                  </p>
                </div>
                <div>
                  <p className="text-cyan-800 font-medium">Recommended Pedals:</p>
                  <ul className="text-cyan-700 space-y-1">
                    <li>• Boss SD-1 Super Overdrive</li>
                    <li>• MXR Dyna Comp</li>
                    <li>• Boss CE-2 Chorus</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <Link href="/lessons/songs/effects/distortion" className="text-cyan-600 hover:text-cyan-800 text-sm">
                    → Effects Chain Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Song Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Song Structure Analysis</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Timeline Structure</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:00-0:08</span>
                    <span>Intro Riff</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:08-0:32</span>
                    <span>Verse 1</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:32-0:40</span>
                    <span>Pre-Chorus</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">0:40-1:04</span>
                    <span>Chorus</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:04-1:28</span>
                    <span>Verse 2</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:28-1:52</span>
                    <span>Chorus</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">1:52-2:16</span>
                    <span>Guitar Solo</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-medium">2:16-3:38</span>
                    <span>Final Chorus/Outro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Arrangement Notes</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-gray-800">Dynamic Build:</p>
                    <p>Song builds from verse intimacy to chorus power through arrangement layers</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Guitar Layers:</p>
                    <ul className="space-y-1">
                      <li>• Rhythm guitar: Power chords throughout</li>
                      <li>• Lead guitar: Melodic fills and solo</li>
                      <li>• Overdubs: Harmony lines in chorus</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Production Style:</p>
                    <p>Classic '80s metal production with clear separation, punchy drums, and upfront vocals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path & Prerequisites</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">📚 Prerequisites</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Basic power chord knowledge</li>
                <li>• Downstroke picking technique</li>
                <li>• Minor scale familiarity</li>
                <li>• Palm muting control</li>
                <li>• Basic chord transitions</li>
              </ul>
              <div className="mt-4">
                <Link href="/lessons/songs/techniques/fundamentals" className="text-green-600 hover:text-green-800 text-sm">
                  → Review Fundamentals
                </Link>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">🎯 Practice Focus</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Clean power chord changes</li>
                <li>• Consistent downstroke rhythm</li>
                <li>• Palm muting control</li>
                <li>• Minor pentatonic phrases</li>
                <li>• Dynamic contrast (verse/chorus)</li>
              </ul>
              <div className="mt-4">
                <Link href="/lessons/songs/exercises/rhythm-guitar" className="text-yellow-600 hover:text-yellow-800 text-sm">
                  → Practice Exercises
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">🚀 Next Steps</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Learn the guitar solo</li>
                <li>• Add harmony guitar parts</li>
                <li>• Explore related songs</li>
                <li>• Study '80s metal style</li>
                <li>• Write similar progressions</li>
              </ul>
              <div className="mt-4">
                <Link href="/lessons/songs/styles/80s-metal" className="text-blue-600 hover:text-blue-800 text-sm">
                  → Explore '80s Metal Style
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Songs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Songs & Study Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Same Progression/Style</h3>
              <div className="space-y-3 text-sm">
                <div className="border-b border-purple-200 pb-2">
                  <p className="font-medium text-purple-800">"I Love Rock 'N Roll" - Joan Jett</p>
                  <p className="text-purple-700">Similar Em-C-G-D progression, simpler arrangement</p>
                </div>
                <div className="border-b border-purple-200 pb-2">
                  <p className="font-medium text-purple-800">"Zombie" - The Cranberries</p>
                  <p className="text-purple-700">Same chord progression, different rhythm and feel</p>
                </div>
                <div className="border-b border-purple-200 pb-2">
                  <p className="font-medium text-purple-800">"What's Up?" - 4 Non Blondes</p>
                  <p className="text-purple-700">G-Am-C-G (relative major version)</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">"Horse with No Name" - America</p>
                  <p className="text-purple-700">Em-D6add9 variation of the same harmonic movement</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Same Era/Genre</h3>
              <div className="space-y-3 text-sm">
                <div className="border-b border-orange-200 pb-2">
                  <p className="font-medium text-orange-800">"Cum on Feel the Noize" - Quiet Riot</p>
                  <p className="text-orange-700">Similar '80s glam metal energy and simplicity</p>
                </div>
                <div className="border-b border-orange-200 pb-2">
                  <p className="font-medium text-orange-800">"You're My Best Friend" - Queen</p>
                  <p className="text-orange-700">Similar anthemic quality, different complexity</p>
                </div>
                <div className="border-b border-orange-200 pb-2">
                  <p className="font-medium text-orange-800">"We Will Rock You" - Queen</p>
                  <p className="text-orange-700">Similar crowd participation, simpler chord structure</p>
                </div>
                <div>
                  <p className="font-medium text-orange-800">"Eye of the Tiger" - Survivor</p>
                  <p className="text-orange-700">Similar motivational theme, more complex arrangement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="/lessons/songs/breakdowns" 
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Explore More Song Breakdowns →
            </Link>
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Theory Deep Dive</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">Why This Progression Works</h3>
                <div className="space-y-3 text-sm text-indigo-800">
                  <p>
                    The Em-C-G-D progression is one of the most powerful in Western music because:
                  </p>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>Strong Root Movement:</strong> Roots move in fourths and fifths</li>
                    <li>• <strong>Common Tones:</strong> Each chord shares notes with neighbors</li>
                    <li>• <strong>Modal Character:</strong> Natural minor with Mixolydian ♭VII</li>
                    <li>• <strong>Circular Motion:</strong> D wants to resolve back to Em</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">Advanced Analysis</h3>
                <div className="space-y-3 text-sm text-indigo-800">
                  <p>
                    From a functional harmony perspective:
                  </p>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• <strong>Em (i):</strong> Tonic function, home base</li>
                    <li>• <strong>C (♭VI):</strong> Submediant, plagal motion</li>
                    <li>• <strong>G (♭III):</strong> Modal mediant, relative major</li>
                    <li>• <strong>D (♭VII):</strong> Subtonic, Mixolydian character</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/lessons/songs/theory/chord-functions" className="text-indigo-600 hover:text-indigo-800 text-sm">
                → Learn More About Chord Functions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}