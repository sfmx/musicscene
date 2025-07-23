import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabAndNoteVisualizer from '@/components/TabAndNoteVisualizer'

export default function SongAnalysisMethodPage() {
  return (
    <Layout>
      <Header
        title="Song Analysis Method"
        subtitle="A systematic approach to understanding songs through music theory"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          
          {/* Introduction */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Analyze Songs?</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Most guitarists learn songs by memorizing finger positions from tablature. While this gets you 
                playing quickly, it doesn't help you understand <em>why</em> the song works or how to apply 
                those concepts to other music.
              </p>
              <p>
                Our analysis method transforms you from a tab-reader into a musician who understands the 
                language of music. You'll learn to recognize patterns, predict chord changes, and even 
                improvise over songs you've never heard before.
              </p>
            </div>
          </section>

          {/* The 7-Step Method */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The 7-Step Song Analysis Method</h2>
            
            <div className="space-y-6">
              
              {/* Step 1: Key Center */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Identify the Key Center</h3>
                    <p className="text-gray-700 mb-4">
                      The key is your musical "home base" - the note that feels like resolution. Most songs 
                      start and end on their key center, and the bass notes often outline it.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">How to Find the Key:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Listen to the first and last chords (often the key center)</li>
                        <li>• Identify the bass note that feels like "home"</li>
                        <li>• Look for the chord that provides the strongest resolution</li>
                        <li>• Check the key signature if sheet music is available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Chord Progression */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Map the Chord Progression</h3>
                    <p className="text-gray-700 mb-4">
                      Convert chord names to Roman numerals based on the key. This reveals the harmonic 
                      function and makes patterns visible across different keys.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Progressions in Popular Music:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <strong className="text-blue-600">I-V-vi-IV</strong> (Pop progression)<br/>
                          <span className="text-gray-600">C-G-Am-F in key of C</span>
                        </div>
                        <div>
                          <strong className="text-blue-600">I-IV-V</strong> (Classic rock)<br/>
                          <span className="text-gray-600">E-A-B in key of E</span>
                        </div>
                        <div>
                          <strong className="text-blue-600">vi-IV-I-V</strong> (Ballad progression)<br/>
                          <span className="text-gray-600">Am-F-C-G in key of C</span>
                        </div>
                        <div>
                          <strong className="text-blue-600">ii-V-I</strong> (Jazz standard)<br/>
                          <span className="text-gray-600">Dm-G-C in key of C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Song Structure */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyze Song Structure</h3>
                    <p className="text-gray-700 mb-4">
                      Break the song into sections and understand how they function together. Each section 
                      typically has a specific harmonic and melodic purpose.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Typical Song Structure:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div><strong>Intro:</strong> Sets mood, often hints at main progression</div>
                        <div><strong>Verse:</strong> Tells the story, usually more subdued harmonically</div>
                        <div><strong>Pre-Chorus:</strong> Builds tension toward the chorus</div>
                        <div><strong>Chorus:</strong> Main hook, strongest harmonic resolution</div>
                        <div><strong>Bridge:</strong> Provides contrast, often uses different chords</div>
                        <div><strong>Outro:</strong> Concludes the song, often returns to intro material</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Scale and Mode Analysis */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Identify Scales and Modes</h3>
                    <p className="text-gray-700 mb-4">
                      Determine which scales work over each section. Most pop/rock uses major or minor 
                      pentatonic, but understanding modes opens up more sophisticated options.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Scale Selection Guide:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div><strong>Major Key Songs:</strong> Major pentatonic, major scale, Mixolydian mode</div>
                        <div><strong>Minor Key Songs:</strong> Minor pentatonic, natural minor, Dorian mode</div>
                        <div><strong>Bluesy Songs:</strong> Blues scale, minor pentatonic with blue notes</div>
                        <div><strong>Modal Songs:</strong> Match the mode to the tonal center</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Rhythm and Strumming */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Break Down Rhythm Patterns</h3>
                    <p className="text-gray-700 mb-4">
                      Analyze the strumming patterns, picking techniques, and rhythmic feel. The rhythm 
                      is often what defines the genre and groove of a song.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Elements to Analyze:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>• Time signature (4/4, 3/4, etc.)</div>
                        <div>• Strumming pattern (down/up strokes)</div>
                        <div>• Tempo and feel (straight, swing, shuffle)</div>
                        <div>• Accent patterns and dynamics</div>
                        <div>• Palm muting and articulation</div>
                        <div>• Syncopation and off-beat emphasis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6: Guitar Techniques */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Catalog Guitar Techniques</h3>
                    <p className="text-gray-700 mb-4">
                      Identify specific guitar techniques used and understand how they serve the music. 
                      This builds your technical vocabulary and shows you when to use each technique.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Techniques to Look For:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>• Chord types (open, barre, power)</div>
                        <div>• Lead techniques (bends, slides, vibrato)</div>
                        <div>• Picking styles (alternate, economy, hybrid)</div>
                        <div>• Special effects (harmonics, tapping)</div>
                        <div>• Fingerpicking patterns</div>
                        <div>• Capo usage and open tunings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7: Tone and Effects */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyze Tone and Effects</h3>
                    <p className="text-gray-700 mb-4">
                      Understanding the gear and effects used helps you recreate the sound and teaches 
                      you how different tones serve different musical purposes.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tone Elements to Consider:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div><strong>Guitar Type:</strong> Solid-body, hollow-body, acoustic</div>
                        <div><strong>Pickup Selection:</strong> Bridge, neck, middle positions</div>
                        <div><strong>Amplification:</strong> Tube, solid-state, modeling</div>
                        <div><strong>Effects:</strong> Distortion, reverb, delay, modulation</div>
                        <div><strong>EQ Settings:</strong> Bass, mid, treble adjustments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Practical Example */}
          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Example: Quick Analysis</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Let's apply this method to a simple example. Consider the classic progression: 
                <strong> C - Am - F - G</strong>
              </p>
              
              <div className="bg-white rounded-lg p-6 mt-4">
                <ol className="space-y-3">
                  <li><strong>Key Center:</strong> C major (C chord feels like home)</li>
                  <li><strong>Progression:</strong> I - vi - IV - V (very common pop progression)</li>
                  <li><strong>Structure:</strong> Could be a verse or chorus progression</li>
                  <li><strong>Scale:</strong> C major scale or C major pentatonic work perfectly</li>
                  <li><strong>Rhythm:</strong> Depends on the song, but often strummed in 4/4</li>
                  <li><strong>Technique:</strong> Open chords, simple strumming pattern</li>
                  <li><strong>Tone:</strong> Clean or lightly driven acoustic/electric guitar</li>
                </ol>
              </div>
              
              <p className="mt-4">
                This analysis immediately tells you that you can use C major pentatonic for lead lines, 
                that this progression will sound good in any key when transposed, and that it follows 
                a predictable harmonic pattern found in thousands of songs.
              </p>
            </div>
          </section>

          {/* Practice Tips */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Your Analysis Skills</h2>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Start Simple</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Begin with 3-chord songs</li>
                  <li>• Focus on major keys first</li>
                  <li>• Use songs you already know well</li>
                  <li>• Practice identifying just the key center initially</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Build Gradually</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Add one analysis step at a time</li>
                  <li>• Keep a song analysis journal</li>
                  <li>• Compare similar songs to find patterns</li>
                  <li>• Practice with different genres</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Use Technology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Slow down audio to hear details</li>
                  <li>• Use apps to identify chords</li>
                  <li>• Record yourself playing progressions</li>
                  <li>• Loop sections for detailed study</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply Your Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transpose songs to different keys</li>
                  <li>• Write your own songs using common progressions</li>
                  <li>• Improvise over backing tracks</li>
                  <li>• Teach others what you've learned</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Analyzing?</h2>
            <p className="text-gray-700 mb-6">
              Now that you understand the method, it's time to put it into practice. Start with our 
              structured song breakdowns to see this approach in action, then apply it to your own 
              favorite songs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/lessons/songs/breakdowns" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Song Breakdowns
              </a>
              <a 
                href="/lessons/songs/structure" 
                className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Learn Song Structure
              </a>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </Layout>
  )
}
