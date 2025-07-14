import Link from 'next/link';

export default function CaposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/accessories" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Accessories
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Guitar Capos
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The transposition tool that opens new musical worlds. Capos change your guitar's 
          key instantly while maintaining familiar chord shapes and creating unique voicings.
        </p>
      </div>

      {/* What is a Capo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Capo?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            A capo (short for capotasto, Italian for "head of the fretboard") is a clamp-like device 
            that presses down all strings at a specific fret, effectively shortening the guitar's 
            scale length and raising the pitch of all open strings by the same interval.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How Capos Work</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clamps across all six strings at chosen fret</li>
                <li>• Raises pitch by semitones (one per fret)</li>
                <li>• Maintains relative tuning relationships</li>
                <li>• Allows familiar chord shapes in new keys</li>
                <li>• Creates shorter scale length</li>
                <li>• Changes string tension and feel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musical Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Transpose songs to comfortable keys</li>
                <li>• Match vocal range without learning new chords</li>
                <li>• Create unique chord voicings</li>
                <li>• Access difficult keys with easy shapes</li>
                <li>• Brighten tone and timbre</li>
                <li>• Enable advanced playing techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Capos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Capos</h2>
        
        <div className="space-y-6">
          {/* Spring-Loaded Capos */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spring-Loaded Capos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Quick one-handed operation</li>
                  <li>• Strong spring tension</li>
                  <li>• Most popular type</li>
                  <li>• Fixed pressure setting</li>
                  <li>• Durable construction</li>
                  <li>• Easy to move between frets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Pros & Cons</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-green-700 text-sm font-medium">Pros:</p>
                    <ul className="text-blue-700 text-xs space-y-1">
                      <li>• Fast and convenient</li>
                      <li>• Reliable clamping</li>
                      <li>• Good for live performance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-700 text-sm font-medium">Cons:</p>
                    <ul className="text-blue-700 text-xs space-y-1">
                      <li>• May apply too much pressure</li>
                      <li>• Can cause tuning issues</li>
                      <li>• Less fine control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Popular Models</h5>
              <p className="text-blue-700 text-sm">
                <strong>Kyser Quick-Change:</strong> Most popular choice • 
                <strong>Dunlop Trigger:</strong> Strong and reliable • 
                <strong>Planet Waves NS:</strong> Micro-adjustment feature
              </p>
            </div>
          </div>

          {/* Screw-On Capos */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Screw-On Capos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Characteristics</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Adjustable pressure via thumbscrew</li>
                  <li>• Precise tension control</li>
                  <li>• Even pressure distribution</li>
                  <li>• Professional choice</li>
                  <li>• Requires two hands to adjust</li>
                  <li>• More expensive typically</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Advantages</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Perfect pressure for each guitar</li>
                  <li>• Minimal tuning disruption</li>
                  <li>• Works on various neck widths</li>
                  <li>• Professional studio standard</li>
                  <li>• Excellent intonation</li>
                  <li>• Long-lasting construction</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h5 className="font-semibold text-green-800 mb-2">Top Recommendations</h5>
              <p className="text-green-700 text-sm">
                <strong>Shubb C1:</strong> Gold standard for adjustability • 
                <strong>G7th Performance 3:</strong> Modern design with fine adjustment • 
                <strong>Paige Clik:</strong> Vintage-style professional capo
              </p>
            </div>
          </div>

          {/* Strap-On Capos */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strap-On & Elastic Capos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Traditional Design</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Elastic strap with metal bar</li>
                  <li>• Vintage classical guitar style</li>
                  <li>• Inexpensive option</li>
                  <li>• Simple construction</li>
                  <li>• Adjustable tension via position</li>
                  <li>• Can work on different neck sizes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Modern Applications</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Budget-friendly choice</li>
                  <li>• Good for beginners</li>
                  <li>• Emergency backup capo</li>
                  <li>• Works on various instruments</li>
                  <li>• Lightweight and portable</li>
                  <li>• Can lose tension over time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partial & Specialty Capos */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partial & Specialty Capos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Partial Capos</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Capo only some strings (not all six)</li>
                  <li>• Create unique open tunings</li>
                  <li>• Advanced compositional tool</li>
                  <li>• Various string combinations</li>
                  <li>• Require musical theory knowledge</li>
                  <li>• Used by creative songwriters</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Rolling Capos</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Quick position changes mid-song</li>
                  <li>• Wheel mechanism for fast movement</li>
                  <li>• Professional performance tool</li>
                  <li>• Expensive but efficient</li>
                  <li>• Used by touring musicians</li>
                  <li>• Enables complex arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Capo Positions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Capo Positions & Key Changes</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Capo Position Chart</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Fret</th>
                  <th className="border p-3 text-left">Key Change</th>
                  <th className="border p-3 text-left">Open Chord Becomes</th>
                  <th className="border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">1st</td>
                  <td className="border p-3">+1 semitone</td>
                  <td className="border p-3">G → G#, C → C#, D → D#</td>
                  <td className="border p-3">Slight pitch raise</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">2nd</td>
                  <td className="border p-3">+1 tone</td>
                  <td className="border p-3">G → A, C → D, D → E</td>
                  <td className="border p-3">Very popular position</td>
                </tr>
                <tr>
                  <td className="border p-3">3rd</td>
                  <td className="border p-3">+1.5 tones</td>
                  <td className="border p-3">G → Bb, C → Eb, D → F</td>
                  <td className="border p-3">Folk and country</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">4th</td>
                  <td className="border p-3">+2 tones</td>
                  <td className="border p-3">G → B, C → E, D → F#</td>
                  <td className="border p-3">Bright, high sound</td>
                </tr>
                <tr>
                  <td className="border p-3">5th</td>
                  <td className="border p-3">+2.5 tones</td>
                  <td className="border p-3">G → C, C → F, D → G</td>
                  <td className="border p-3">High register playing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Using Capos Effectively */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Capos Effectively</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Proper Placement</h3>
            <ul className="text-teal-700 space-y-2">
              <li>• Position just behind the fret wire (not on top)</li>
              <li>• Ensure even pressure across all strings</li>
              <li>• Check that no strings buzz or mute</li>
              <li>• Tune guitar after capo application</li>
              <li>• Keep capo perpendicular to neck</li>
              <li>• Avoid excessive pressure to prevent sharp tuning</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Musical Applications</h3>
            <ul className="text-indigo-700 space-y-2">
              <li>• Match singer's vocal range</li>
              <li>• Play in difficult keys with easy shapes</li>
              <li>• Create unique chord voicings</li>
              <li>• Enable drop tunings in standard tuning</li>
              <li>• Brighten acoustic guitar tone</li>
              <li>• Simplify complex chord progressions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Famous Capo Users */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Famous Capo Users & Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Folk & Country Masters</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-yellow-700">James Taylor</h4>
                <p className="text-yellow-600 text-sm">Frequent capo use for vocal range matching</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">Joni Mitchell</h4>
                <p className="text-yellow-600 text-sm">Creative partial capo techniques</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">Keith Richards</h4>
                <p className="text-yellow-600 text-sm">Open G tuning with capo on 5th fret</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700">Johnny Cash</h4>
                <p className="text-yellow-600 text-sm">Simple capo use for key changes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Modern Artists</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-red-700">Ed Sheeran</h4>
                <p className="text-red-600 text-sm">Extensive capo use for loop pedal arrangements</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">John Mayer</h4>
                <p className="text-red-600 text-sm">Strategic capo placement for unique voicings</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">Mumford & Sons</h4>
                <p className="text-red-600 text-sm">Folk revival with creative capo techniques</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">Taylor Swift</h4>
                <p className="text-red-600 text-sm">Capo for accessible chord progressions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a Capo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Capo</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">🎯 Capo Selection Guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Beginners ($10-20)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Kyser Quick-Change</li>
                <li>• Planet Waves NS Capo</li>
                <li>• Alice Trigger Capo</li>
                <li>• Start with spring-loaded type</li>
                <li>• Easy one-handed operation</li>
                <li>• Reliable for learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Performers ($20-40)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Shubb C1 Deluxe</li>
                <li>• G7th Performance 3</li>
                <li>• Dunlop Advanced Toggle</li>
                <li>• Adjustable pressure control</li>
                <li>• Professional reliability</li>
                <li>• Excellent intonation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">For Advanced Players ($40+)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Spider Capo (partial capo)</li>
                <li>• G7th Heritage Capo</li>
                <li>• Custom boutique capos</li>
                <li>• Specialty applications</li>
                <li>• Multiple capos for different uses</li>
                <li>• Professional recording quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capo Maintenance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Capo Care & Maintenance</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Regular Cleaning</h3>
            <p className="text-green-700 text-sm">
              Clean the rubber padding and metal surfaces regularly. Remove string residue and 
              check for wear on the padding that contacts the strings.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Mechanism Maintenance</h3>
            <p className="text-green-700 text-sm">
              For screw-on capos, occasionally lubricate the threading. Check spring-loaded 
              mechanisms for proper tension and clean pivot points.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Storage Tips</h3>
            <p className="text-green-700 text-sm">
              Store capos in a dry place. Many guitarists keep capos on the headstock for 
              quick access, but avoid leaving them clamped for extended periods.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">When to Replace</h3>
            <p className="text-green-700 text-sm">
              Replace capos when padding becomes too compressed, springs lose tension, 
              or adjustment mechanisms become unreliable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
