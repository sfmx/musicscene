import Link from 'next/link';

export default function PicksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/accessories" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Accessories
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Guitar Picks
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The smallest tool with the biggest impact on your sound. Guitar picks affect 
          your tone, attack, and playing comfort more than any other accessory.
        </p>
      </div>

      {/* What Makes a Good Pick */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes a Guitar Pick?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            A guitar pick is a small plectrum used to pluck or strum guitar strings. 
            While seemingly simple, picks vary dramatically in material, thickness, shape, 
            and texture, each affecting your playing style and sound in unique ways.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pick Anatomy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Tip:</strong> The pointed end that strikes strings</li>
                <li>• <strong>Body:</strong> The grip area held between fingers</li>
                <li>• <strong>Shoulders:</strong> The curved sides for comfort</li>
                <li>• <strong>Bevel:</strong> The angled edge that contacts strings</li>
                <li>• <strong>Thickness:</strong> Measured in millimeters or gauge</li>
                <li>• <strong>Material:</strong> Affects tone and durability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Picks Matter</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Control attack and dynamics</li>
                <li>• Affect tone and brightness</li>
                <li>• Enable precise single-note playing</li>
                <li>• Provide consistent string contact</li>
                <li>• Allow faster playing techniques</li>
                <li>• Reduce finger wear and pain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pick Thickness Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pick Thickness Guide</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thin Picks (0.40-0.60mm)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Flexible and bendable</li>
                  <li>• Bright, crisp attack</li>
                  <li>• Good for strumming</li>
                  <li>• Less control for single notes</li>
                  <li>• Creates "pick noise" on strings</li>
                  <li>• Wears out faster</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Best For</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Acoustic strumming</li>
                  <li>• Folk and country music</li>
                  <li>• Rhythm guitar parts</li>
                  <li>• Beginners learning to strum</li>
                  <li>• Light, delicate playing</li>
                  <li>• Open chord progressions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medium Picks (0.60-0.80mm)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Characteristics</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Balanced flexibility and control</li>
                  <li>• Versatile for multiple styles</li>
                  <li>• Good for both rhythm and lead</li>
                  <li>• Moderate attack and tone</li>
                  <li>• Most popular thickness range</li>
                  <li>• Reasonable durability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Best For</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• General purpose playing</li>
                  <li>• Rock and pop music</li>
                  <li>• Players switching between rhythm/lead</li>
                  <li>• Electric guitar</li>
                  <li>• Most beginner recommendations</li>
                  <li>• Versatile playing styles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Heavy Picks (0.80-1.20mm)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Characteristics</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Rigid with minimal flex</li>
                  <li>• Precise control and accuracy</li>
                  <li>• Warmer, fuller tone</li>
                  <li>• Excellent for single notes</li>
                  <li>• Less string noise</li>
                  <li>• Very durable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Best For</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Lead guitar and solos</li>
                  <li>• Jazz and fusion playing</li>
                  <li>• Metal and hard rock</li>
                  <li>• Fast, technical playing</li>
                  <li>• Bass guitar (when applicable)</li>
                  <li>• Precise articulation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Extra Heavy Picks (1.20mm+)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-3">Characteristics</h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Very rigid, no flex</li>
                  <li>• Maximum control and precision</li>
                  <li>• Thick, warm tone</li>
                  <li>• Minimal pick noise</li>
                  <li>• Can feel awkward initially</li>
                  <li>• Extremely durable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3">Best For</h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Advanced lead playing</li>
                  <li>• Jazz and classical guitar</li>
                  <li>• Speed picking techniques</li>
                  <li>• Professional performance</li>
                  <li>• Specialized playing styles</li>
                  <li>• Players seeking maximum control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pick Materials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pick Materials & Their Sounds</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Traditional Materials</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-700">Celluloid</h4>
                <p className="text-orange-600 text-sm mb-2">Classic plastic material, balanced tone</p>
                <ul className="text-orange-600 text-xs space-y-1">
                  <li>• Most common pick material</li>
                  <li>• Good balance of flexibility and durability</li>
                  <li>• Available in all thicknesses</li>
                  <li>• Affordable and widely available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700">Nylon</h4>
                <p className="text-orange-600 text-sm mb-2">Smooth, warm sound with good grip</p>
                <ul className="text-orange-600 text-xs space-y-1">
                  <li>• Warmer tone than celluloid</li>
                  <li>• Excellent durability</li>
                  <li>• Good for both acoustic and electric</li>
                  <li>• Less string noise</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Premium Materials</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-teal-700">Tortoiseshell (Tortex)</h4>
                <p className="text-teal-600 text-sm mb-2">Synthetic alternative with excellent grip</p>
                <ul className="text-teal-600 text-xs space-y-1">
                  <li>• Textured surface for better grip</li>
                  <li>• Consistent thickness and shape</li>
                  <li>• Popular among professionals</li>
                  <li>• Available in color-coded thicknesses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700">Horn & Bone</h4>
                <p className="text-teal-600 text-sm mb-2">Natural materials for vintage tone</p>
                <ul className="text-teal-600 text-xs space-y-1">
                  <li>• Rich, warm tone character</li>
                  <li>• Smooth playing feel</li>
                  <li>• Expensive but long-lasting</li>
                  <li>• Preferred by some blues players</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pick Shapes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pick Shapes & Designs</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Standard/Teardrop</h3>
              <div className="text-4xl mb-3">🪙</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Most common shape</li>
                <li>• Balanced tip and grip area</li>
                <li>• Good for all playing styles</li>
                <li>• Wide availability</li>
                <li>• Comfortable for most players</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Jazz III</h3>
              <div className="text-4xl mb-3">🔸</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Small, precise tip</li>
                <li>• Excellent for lead playing</li>
                <li>• Popular among metal players</li>
                <li>• Fast, accurate picking</li>
                <li>• Less surface area for grip</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Shark Fin/Triangle</h3>
              <div className="text-4xl mb-3">🔺</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Three usable points</li>
                <li>• Different attack angles</li>
                <li>• Good for bass guitar</li>
                <li>• Longer playing surface</li>
                <li>• Unique ergonomics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Picks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Famous Picks & Artist Preferences</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Rock & Metal Legends</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-purple-700">Eddie Van Halen</h4>
                <p className="text-purple-600 text-sm">Fender Heavy picks, precise attack for tapping</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">James Hetfield</h4>
                <p className="text-purple-600 text-sm">Black Fender Heavy picks for powerful rhythm</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">John Petrucci</h4>
                <p className="text-purple-600 text-sm">Jazz III picks for technical precision</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">Brian May</h4>
                <p className="text-purple-600 text-sm">British sixpence coin for unique tone</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Blues & Jazz Masters</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-indigo-700">Eric Clapton</h4>
                <p className="text-indigo-600 text-sm">Martin Medium celluloid picks</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">B.B. King</h4>
                <p className="text-indigo-600 text-sm">Preferred fingerstyle, occasional thin picks</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Joe Pass</h4>
                <p className="text-indigo-600 text-sm">Heavy picks for jazz precision</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Billy Gibbons</h4>
                <p className="text-indigo-600 text-sm">Mexican peso and quarter coins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Your Picks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Picks</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Pick Selection Guide</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">For Beginners</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Start with medium thickness (0.70mm)</li>
                <li>• Choose standard teardrop shape</li>
                <li>• Try variety packs to experiment</li>
                <li>• Celluloid or nylon material</li>
                <li>• Buy multiple picks (you'll lose them!)</li>
                <li>• Consider textured grip for security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Factors to Consider</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Your primary playing style</li>
                <li>• Comfort and grip preference</li>
                <li>• Sound and tone goals</li>
                <li>• Hand size and finger dexterity</li>
                <li>• Budget and durability needs</li>
                <li>• Acoustic vs. electric guitar use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care and Maintenance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pick Care & Organization</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Storage Solutions</h3>
            <p className="text-green-700 text-sm">
              Use pick holders, dispensers, or small containers to keep picks organized. 
              Many guitar cases have dedicated pick storage compartments.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">When to Replace</h3>
            <p className="text-green-700 text-sm">
              Replace picks when they show significant wear, chips, or rounded edges. 
              Worn picks affect tone and playing precision.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Emergency Picks</h3>
            <p className="text-green-700 text-sm">
              Keep spare picks in multiple locations: guitar case, wallet, car, practice space. 
              Consider stick-on pick holders for your guitar.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Cleaning Tips</h3>
            <p className="text-green-700 text-sm">
              Clean picks occasionally with soap and water. Some players sand pick edges 
              for custom feel or use nail files to adjust worn tips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
