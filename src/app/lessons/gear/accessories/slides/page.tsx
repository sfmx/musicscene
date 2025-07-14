import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const slideTypes = [
  {
    name: 'Glass Slides',
    material: 'Borosilicate glass',
    tone: 'Bright, clear, sustaining',
    weight: 'Light to medium',
    price: '$10-50',
    features: ['Smooth surface', 'Excellent sustain', 'Clear tone', 'Easy to clean'],
    pros: ['Pure tone', 'Smooth action', 'Durable', 'No metal taste'],
    cons: ['Can break', 'Less mass', 'Slippery when new', 'Cold feel'],
    bestFor: 'Recording, clean tones, precise intonation, studio work',
  },
  {
    name: 'Metal Slides',
    material: 'Steel, brass, or chrome',
    tone: 'Warm, powerful, edgy',
    weight: 'Medium to heavy',
    price: '$15-80',
    features: ['Dense material', 'Strong attack', 'Warm overtones', 'Durable construction'],
    pros: ['Great sustain', 'Powerful tone', 'Nearly indestructible', 'Good mass'],
    cons: ['String wear', 'Noise when moving', 'Can sound harsh', 'Temperature sensitive'],
    bestFor: 'Blues, rock, aggressive playing, live performance',
  },
  {
    name: 'Ceramic Slides',
    material: 'Fired ceramic/porcelain',
    tone: 'Balanced, warm-bright',
    weight: 'Light to medium',
    price: '$15-40',
    features: ['Smooth finish', 'Balanced tone', 'Comfortable feel', 'Custom designs'],
    pros: ['Unique tone', 'Comfortable', 'Artistic options', 'Good compromise'],
    cons: ['Can chip', 'Limited availability', 'Variable quality', 'Harder to find'],
    bestFor: 'All-around playing, comfort seekers, unique sound preferences',
  },
  {
    name: 'Vintage Bottles',
    material: 'Medicine bottles',
    tone: 'Historic, unique character',
    weight: 'Variable',
    price: '$20-100+ (collectible)',
    features: ['Historical significance', 'Unique shapes', 'Collector value', 'Vintage mojo'],
    pros: ['Authentic vintage sound', 'Historical connection', 'Unique character', 'Cool factor'],
    cons: ['Hard to find', 'Variable quality', 'May break', 'Inconsistent'],
    bestFor: 'Blues purists, collectors, vintage tone seekers, recording character',
  },
];

const slideSpecs = [
  {
    diameter: 'Small (19-22mm)',
    fit: 'Pinky or ring finger',
    control: 'Excellent',
    comfort: 'High',
    bestFor: 'Fast playing, complex chord work, fingerpicking combinations',
  },
  {
    diameter: 'Medium (22-25mm)',
    fit: 'Ring or middle finger',
    control: 'Good',
    comfort: 'Good',
    bestFor: 'General slide playing, most common choice, versatile use',
  },
  {
    diameter: 'Large (25-28mm)',
    fit: 'Middle or index finger',
    control: 'Moderate',
    comfort: 'Variable',
    bestFor: 'Heavy tone, powerful sound, single-note lines',
  },
];

const famousSlideUsers = [
  {
    artist: 'Duane Allman',
    slide: 'Coricidin bottle',
    technique: 'Open E tuning, melodic phrasing',
    signature: 'Smooth, singing tone with perfect intonation',
  },
  {
    artist: 'Derek Trucks',
    slide: 'Glass slide (various)',
    technique: 'Open E tuning, Indian music influence',
    signature: 'Incredibly smooth technique, wide vibrato',
  },
  {
    artist: 'Bonnie Raitt',
    slide: 'Glass slide on ring finger',
    technique: 'Standard tuning, chord work',
    signature: 'Combines slide with regular fingering',
  },
  {
    artist: 'Joe Walsh',
    slide: 'Talk box and glass slide',
    technique: 'Rock-oriented slide work',
    signature: 'Aggressive slide combined with effects',
  },
];

const tunings = [
  {
    name: 'Open E (E-B-E-G#-B-E)',
    difficulty: 'Beginner-friendly',
    sound: 'Major chord, bright',
    famous: 'Duane Allman, Derek Trucks',
    advantages: ['Easy major chords', 'Natural fingering', 'Great for beginners'],
  },
  {
    name: 'Open G (D-G-D-G-B-D)',
    difficulty: 'Intermediate',
    sound: 'Rich, full major chord',
    famous: 'Keith Richards, Robert Johnson',
    advantages: ['Full, rich sound', 'Great for rhythm', 'Classic blues tuning'],
  },
  {
    name: 'Open D (D-A-D-F#-A-D)',
    difficulty: 'Intermediate',
    sound: 'Deep, powerful',
    famous: 'Joni Mitchell, Neil Young',
    advantages: ['Strong bass response', 'Unique voicings', 'Powerful sound'],
  },
  {
    name: 'Standard Tuning',
    difficulty: 'Advanced',
    sound: 'Versatile, familiar',
    famous: 'Bonnie Raitt, George Harrison',
    advantages: ['No retuning needed', 'Mix slide with regular playing', 'Familiar fingerings'],
  },
];

export default function SlidesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Slides Guide"
        subtitle="Master the art of slide guitar - from materials to techniques for authentic blues and beyond"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/lessons/gear/accessories" 
            className="text-teal-600 hover:text-teal-800 font-medium"
          >
            ← Back to Accessories
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Slides: Expressing Soul Through Steel and Glass
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              From the Delta blues to modern rock, slides have shaped the voice of guitar for over a century. 
              Discover the materials, techniques, and traditions that make slide guitar so expressive.
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">In This Guide:</h3>
              <ul className="text-orange-700 space-y-1">
                <li>• Slide materials and their tonal characteristics</li>
                <li>• Sizing and fit for comfortable playing</li>
                <li>• Open tunings for slide guitar</li>
                <li>• Technique fundamentals and tips</li>
                <li>• Famous slide players and their setups</li>
                <li>• Care and maintenance of slides</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Slide Guitar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Magic of Slide Guitar</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Expressive Qualities</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Unlimited Pitch:</strong> Smooth glides between notes</li>
                <li>• <strong>Vocal-like:</strong> Mimics human voice inflections</li>
                <li>• <strong>Sustain:</strong> Long, singing notes</li>
                <li>• <strong>Microtones:</strong> Notes between frets</li>
                <li>• <strong>Harmonics:</strong> Rich overtone content</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Musical Applications</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Blues:</strong> Traditional and modern styles</li>
                <li>• <strong>Country:</strong> Pedal steel-inspired sounds</li>
                <li>• <strong>Rock:</strong> Aggressive, powerful tones</li>
                <li>• <strong>World Music:</strong> Indian, Hawaiian influences</li>
                <li>• <strong>Ambient:</strong> Textural and atmospheric sounds</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-purple-800">🎵 Historical Context</h3>
            <p className="text-purple-700 mb-3">
              Slide guitar emerged from the African-American communities of the Southern United States, 
              originally played with knives, bottle necks, and other improvised objects. This technique 
              gave birth to the distinctive sound of Delta blues.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Early Origins</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Hawaiian lap steel influence</li>
                  <li>• African musical traditions</li>
                  <li>• Work songs and field hollers</li>
                  <li>• Improvised materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Blues Evolution</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Delta blues pioneers</li>
                  <li>• Chicago blues adaptation</li>
                  <li>• Electric slide development</li>
                  <li>• Modern rock integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Modern Innovation</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Manufactured slides</li>
                  <li>• Alternative materials</li>
                  <li>• Extended techniques</li>
                  <li>• World music fusion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Guitar Slides</h2>
          
          <div className="space-y-6">
            {slideTypes.map((slide, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{slide.name}</h3>
                    <p className="text-sm text-gray-600">
                      Material: {slide.material} • Tone: {slide.tone} • Weight: {slide.weight}
                    </p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {slide.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {slide.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {slide.pros.map((pro, i) => (
                        <li key={i} className="text-green-600">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Considerations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {slide.cons.map((con, i) => (
                        <li key={i} className="text-red-600">- {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best Applications</h4>
                    <p className="text-sm text-gray-600">{slide.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sizing & Fit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Slide Sizing & Fit</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Finding Your Perfect Fit</h3>
            <div className="space-y-4">
              {slideSpecs.map((spec, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-800">{spec.diameter}</h4>
                      <p className="text-sm text-yellow-700">{spec.fit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-yellow-700"><strong>Control:</strong> {spec.control}</p>
                    </div>
                    <div>
                      <p className="text-sm text-yellow-700"><strong>Comfort:</strong> {spec.comfort}</p>
                    </div>
                    <div>
                      <p className="text-sm text-yellow-700"><strong>Best For:</strong> {spec.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Fit Guidelines</h3>
              <ul className="space-y-2 text-teal-700 text-sm">
                <li>• <strong>Snug but not tight:</strong> Should slide on easily</li>
                <li>• <strong>No finger pinching:</strong> Comfortable for extended play</li>
                <li>• <strong>Secure positioning:</strong> Won't slip during playing</li>
                <li>• <strong>Natural finger curve:</strong> Follows finger contour</li>
                <li>• <strong>Length consideration:</strong> Covers string width adequately</li>
                <li>• <strong>Weight balance:</strong> Comfortable for your playing style</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Measurement Tips</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• <strong>String method:</strong> Wrap string around finger</li>
                <li>• <strong>Ring sizer:</strong> Use jewelry tools</li>
                <li>• <strong>Try before buying:</strong> Test at music stores</li>
                <li>• <strong>Consider swelling:</strong> Fingers change size</li>
                <li>• <strong>Multiple slides:</strong> Different sizes for different uses</li>
                <li>• <strong>Break-in period:</strong> Allow time to adjust</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Tunings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Open Tunings for Slide Guitar</h2>
          
          <div className="space-y-4">
            {tunings.map((tuning, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{tuning.name}</h3>
                    <p className="text-sm text-gray-600">Sound: {tuning.sound} • Difficulty: {tuning.difficulty}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Famous: {tuning.famous}</span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Advantages</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tuning.advantages.map((advantage, i) => (
                      <li key={i}>• {advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Slide Players</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousSlideUsers.map((player, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{player.artist}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>Slide:</strong> {player.slide}</p>
                  <p className="text-sm text-gray-600"><strong>Technique:</strong> {player.technique}</p>
                  <p className="text-sm text-gray-600"><strong>Signature:</strong> {player.signature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technique Fundamentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Slide Technique Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Basic Technique</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Light Touch:</strong> Barely touch strings, don't press</li>
                <li>• <strong>Fret Position:</strong> Play directly over frets, not between</li>
                <li>• <strong>Straight Angle:</strong> Keep slide perpendicular to strings</li>
                <li>• <strong>Muting:</strong> Use other fingers to stop unwanted noise</li>
                <li>• <strong>Vibrato:</strong> Small movements for expression</li>
                <li>• <strong>Clean Slides:</strong> Smooth transitions between notes</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800">Common Mistakes</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• <strong>Pressing too hard:</strong> Causes fret buzz and poor intonation</li>
                <li>• <strong>Wrong positioning:</strong> Behind frets causes flat notes</li>
                <li>• <strong>No muting:</strong> Allows unwanted string noise</li>
                <li>• <strong>Rushed slides:</strong> Not allowing notes to ring properly</li>
                <li>• <strong>Poor string action:</strong> Too low causes problems</li>
                <li>• <strong>Wrong finger:</strong> Uncomfortable or unstable positioning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Guitar Setup for Slide Playing</h2>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Optimal Setup Adjustments</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Action Height</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Higher than normal action</li>
                  <li>• Prevents fret buzz</li>
                  <li>• Allows slide clearance</li>
                  <li>• 3-4mm at 12th fret typical</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">String Gauge</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Medium to heavy gauge</li>
                  <li>• Better sustain and tone</li>
                  <li>• Maintains tuning stability</li>
                  <li>• .012-.054 or heavier</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Nut & Bridge</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Smooth nut slots</li>
                  <li>• Proper string spacing</li>
                  <li>• Quality bridge/saddles</li>
                  <li>• Good intonation setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Care & Maintenance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Slide Care & Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Cleaning & Storage</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <strong>Regular cleaning:</strong> Remove oils and debris</li>
                <li>• <strong>Glass slides:</strong> Use glass cleaner or alcohol</li>
                <li>• <strong>Metal slides:</strong> Polish to prevent corrosion</li>
                <li>• <strong>Ceramic slides:</strong> Gentle soap and water</li>
                <li>• <strong>Safe storage:</strong> Padded containers or pouches</li>
                <li>• <strong>Travel protection:</strong> Secure during transport</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Longevity Tips</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• <strong>Avoid drops:</strong> Especially important for glass</li>
                <li>• <strong>Temperature care:</strong> Avoid extreme changes</li>
                <li>• <strong>String maintenance:</strong> Clean strings extend slide life</li>
                <li>• <strong>Multiple slides:</strong> Rotate use to extend life</li>
                <li>• <strong>Proper technique:</strong> Reduces wear on strings and slide</li>
                <li>• <strong>Backup slides:</strong> Always have spares available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your First Slide</h2>
          
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-amber-800">Beginner Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Start Simple</h4>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• Glass slide, medium size</li>
                  <li>• Ring finger placement</li>
                  <li>• Open E tuning</li>
                  <li>• Medium-heavy strings</li>
                  <li>• Professional setup</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Budget Considerations</h4>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• $15-30 for quality slide</li>
                  <li>• Setup costs: $50-100</li>
                  <li>• String upgrade: $10-20</li>
                  <li>• Total investment: $75-150</li>
                  <li>• Great return on investment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Learning Resources</h4>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• Online tutorials</li>
                  <li>• Slide guitar books</li>
                  <li>• Local instructors</li>
                  <li>• YouTube channels</li>
                  <li>• Practice backing tracks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Accessories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Accessories</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/lessons/gear/accessories/tuners"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Tuners</h3>
              <p className="text-sm text-gray-600">Essential for open tunings</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/capos"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Capos</h3>
              <p className="text-sm text-gray-600">Combine with slides for unique sounds</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/picks"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Picks</h3>
              <p className="text-sm text-gray-600">For hybrid picking techniques</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
