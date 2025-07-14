import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metronomeTypes = [
  {
    name: 'Mechanical Metronomes',
    type: 'Wind-up pendulum',
    power: 'Mechanical spring',
    price: '$30-200',
    tempo: '40-208 BPM',
    features: ['No batteries needed', 'Visual pendulum', 'Traditional design', 'Adjustable volume'],
    pros: ['Never needs power', 'Visual timing cue', 'Classic aesthetic', 'Reliable mechanism'],
    cons: ['Limited tempo range', 'Can be loud', 'Needs winding', 'Mechanical wear'],
    bestFor: 'Traditional practice, acoustic settings, visual learners, no electronics preference',
  },
  {
    name: 'Digital Metronomes',
    type: 'Electronic click',
    power: 'Battery powered',
    price: '$15-100',
    tempo: '30-250+ BPM',
    features: ['Wide tempo range', 'Multiple sounds', 'Beat subdivisions', 'Programmable patterns'],
    pros: ['Precise timing', 'Many features', 'Compact size', 'Clear display'],
    cons: ['Battery dependent', 'Can break', 'No visual element', 'Digital sound'],
    bestFor: 'Modern practice, complex rhythms, recording, professional use',
  },
  {
    name: 'App-Based Metronomes',
    type: 'Smartphone/tablet app',
    power: 'Device battery',
    price: 'Free-$20',
    tempo: 'Variable range',
    features: ['Free options available', 'Advanced features', 'Visual displays', 'Recording capability'],
    pros: ['Always available', 'Often free', 'Advanced features', 'Regular updates'],
    cons: ['Device dependent', 'Potential distractions', 'Audio quality varies', 'Battery drain'],
    bestFor: 'Casual practice, travel, feature-rich options, budget-conscious players',
  },
  {
    name: 'Drum Machine Metronomes',
    type: 'Rhythm programming',
    power: 'AC or battery',
    price: '$50-500+',
    tempo: '30-300+ BPM',
    features: ['Full drum patterns', 'Multiple instruments', 'Song structures', 'Recording features'],
    pros: ['Musical backing', 'Inspiring rhythms', 'Professional features', 'Creative options'],
    cons: ['More complex', 'Higher cost', 'Learning curve', 'Overkill for basics'],
    bestFor: 'Advanced practice, songwriting, band practice, rhythm development',
  },
];

const practiceApplications = [
  {
    skill: 'Basic Timing',
    tempo: '60-80 BPM',
    exercises: ['Single notes', 'Simple chords', 'Basic strumming', 'Scale practice'],
    goals: 'Develop internal clock, steady rhythm foundation',
  },
  {
    skill: 'Chord Changes',
    tempo: '60-100 BPM',
    exercises: ['Chord progressions', 'Transition practice', 'Rhythm patterns', 'Strumming variations'],
    goals: 'Smooth transitions, consistent rhythm through changes',
  },
  {
    skill: 'Scale Development',
    tempo: '60-120 BPM',
    exercises: ['Major scales', 'Pentatonic patterns', 'Arpeggios', 'Finger exercises'],
    goals: 'Even note spacing, technical accuracy, speed building',
  },
  {
    skill: 'Advanced Rhythms',
    tempo: '80-140+ BPM',
    exercises: ['Syncopation', 'Odd time signatures', 'Complex patterns', 'Genre studies'],
    goals: 'Rhythmic sophistication, groove development, style mastery',
  },
];

const famousUsers = [
  {
    artist: 'Steve Vai',
    approach: 'Extreme precision practice',
    description: 'Uses metronomes for incredibly detailed technical exercises',
  },
  {
    artist: 'Pat Metheny',
    approach: 'Jazz timing development',
    description: 'Emphasizes swing feel and complex rhythm work with metronomes',
  },
  {
    artist: 'John Petrucci',
    approach: 'Progressive metal precision',
    description: 'Metronome work for complex time signatures and technical passages',
  },
  {
    artist: 'Classical Teachers',
    approach: 'Traditional methodology',
    description: 'Standard tool for developing timing in classical guitar education',
  },
];

const timeSignatures = [
  {
    signature: '4/4',
    feel: 'Common time',
    count: '1-2-3-4',
    genres: 'Rock, pop, blues, country',
    description: 'Most common time signature, four quarter notes per measure',
  },
  {
    signature: '3/4',
    feel: 'Waltz time',
    count: '1-2-3',
    genres: 'Waltz, country, folk',
    description: 'Three quarter notes per measure, strong downbeat feel',
  },
  {
    signature: '6/8',
    feel: 'Compound time',
    count: '1-2-3-4-5-6',
    genres: 'Ballads, folk, blues',
    description: 'Six eighth notes, felt in two groups of three',
  },
  {
    signature: '7/8',
    feel: 'Odd meter',
    count: '1-2-3-4-5-6-7',
    genres: 'Progressive, world music',
    description: 'Seven eighth notes, requires careful counting',
  },
];

export default function MetronomesPage() {
  return (
    <Layout>
      <Header
        title="Metronomes Guide"
        subtitle="Develop rock-solid timing - the essential tool for rhythmic precision and musical growth"
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
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Metronomes: Your Timing Teacher and Practice Partner
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              From mechanical pendulums to digital precision, metronomes are the foundation of solid 
              timing. Discover how this essential tool will transform your rhythm and musical confidence.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">In This Guide:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• Types of metronomes and their advantages</li>
                <li>• How to practice effectively with a metronome</li>
                <li>• Tempo guidelines for different skills</li>
                <li>• Time signatures and rhythm patterns</li>
                <li>• Professional practice techniques</li>
                <li>• Overcoming common timing challenges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Metronomes Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Timing Matters in Music</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Musical Benefits</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Ensemble Playing:</strong> Lock in with other musicians</li>
                <li>• <strong>Recording:</strong> Essential for studio work</li>
                <li>• <strong>Groove Development:</strong> Feel the pocket and swing</li>
                <li>• <strong>Technical Progress:</strong> Build speed systematically</li>
                <li>• <strong>Musical Expression:</strong> Control tempo for emotion</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Practice Advantages</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Consistency:</strong> Maintain steady tempo</li>
                <li>• <strong>Progress Tracking:</strong> Measure speed improvements</li>
                <li>• <strong>Challenge Setting:</strong> Push comfort zones safely</li>
                <li>• <strong>Error Detection:</strong> Hear timing mistakes clearly</li>
                <li>• <strong>Discipline:</strong> Force accurate practice habits</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">⚠️ Common Timing Problems</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Rushing</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Playing ahead of the beat</li>
                  <li>• Excitement or nerves</li>
                  <li>• Lack of internal clock</li>
                  <li>• Inadequate practice tempo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Dragging</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Playing behind the beat</li>
                  <li>• Technical difficulty</li>
                  <li>• Lack of energy</li>
                  <li>• Poor subdivision sense</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Inconsistency</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Variable tempo</li>
                  <li>• Speed up in easy parts</li>
                  <li>• Slow down in hard parts</li>
                  <li>• No steady pulse reference</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Metronome Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Metronomes</h2>
          
          <div className="space-y-6">
            {metronomeTypes.map((metronome, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{metronome.name}</h3>
                    <p className="text-sm text-gray-600">
                      Type: {metronome.type} • Power: {metronome.power} • Range: {metronome.tempo}
                    </p>
                  </div>
                  <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                    {metronome.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {metronome.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {metronome.pros.map((pro, i) => (
                        <li key={i} className="text-green-600">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Considerations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {metronome.cons.map((con, i) => (
                        <li key={i} className="text-red-600">- {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best Applications</h4>
                    <p className="text-sm text-gray-600">{metronome.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Applications by Skill Level</h2>
          
          <div className="space-y-4">
            {practiceApplications.map((application, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{application.skill}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {application.tempo}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Practice Exercises</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {application.exercises.map((exercise, i) => (
                        <li key={i}>• {exercise}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Development Goals</h4>
                    <p className="text-sm text-gray-600">{application.goals}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time Signatures */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Time Signatures & Rhythm Patterns</h2>
          
          <div className="bg-teal-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Common Time Signatures</h3>
            <div className="space-y-4">
              {timeSignatures.map((time, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-teal-200">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-teal-800 text-lg">{time.signature}</h4>
                      <p className="text-sm text-teal-700">{time.feel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-teal-700"><strong>Count:</strong> {time.count}</p>
                    </div>
                    <div>
                      <p className="text-sm text-teal-700"><strong>Genres:</strong> {time.genres}</p>
                    </div>
                    <div>
                      <p className="text-sm text-teal-700">{time.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Effective Metronome Practice Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Progressive Speed Building</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Start Slow:</strong> Begin at comfortable tempo</li>
                <li>• <strong>Master First:</strong> Play perfectly at slow speed</li>
                <li>• <strong>Small Increments:</strong> Increase by 5-10 BPM</li>
                <li>• <strong>Consistency Check:</strong> Maintain accuracy at each tempo</li>
                <li>• <strong>Back Down:</strong> Return to slower tempo if struggling</li>
                <li>• <strong>Patience:</strong> Speed comes naturally with time</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Subdivision Practice</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• <strong>Quarter Notes:</strong> Basic pulse, one note per click</li>
                <li>• <strong>Eighth Notes:</strong> Two notes per click, even spacing</li>
                <li>• <strong>Triplets:</strong> Three notes per click, grouped feel</li>
                <li>• <strong>Sixteenth Notes:</strong> Four notes per click, precise timing</li>
                <li>• <strong>Mixed Patterns:</strong> Combine different subdivisions</li>
                <li>• <strong>Silent Counts:</strong> Feel the beat without playing</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Advanced Techniques</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Displaced Beats</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Click on beats 2 & 4</li>
                  <li>• Click only on beat 3</li>
                  <li>• Click on off-beats</li>
                  <li>• Random click patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Tempo Variations</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Gradual accelerando</li>
                  <li>• Gradual ritardando</li>
                  <li>• Sudden tempo changes</li>
                  <li>• Rubato practice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Internal Clock</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Turn off for short periods</li>
                  <li>• Play without, then check</li>
                  <li>• Silent counting exercises</li>
                  <li>• Feel-based practice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Approaches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Professional Practice Approaches</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousUsers.map((user, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{user.artist}</h3>
                <p className="font-medium text-gray-700 mb-2">{user.approach}</p>
                <p className="text-sm text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tempo Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tempo Guidelines for Different Genres</h2>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-800">Genre Tempo Ranges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Slow Tempos (60-90 BPM)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <strong>Ballads:</strong> 60-80 BPM</li>
                  <li>• <strong>Blues:</strong> 70-90 BPM</li>
                  <li>• <strong>Country:</strong> 75-85 BPM</li>
                  <li>• <strong>Folk:</strong> 70-90 BPM</li>
                  <li>• <strong>Jazz ballads:</strong> 60-80 BPM</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Medium Tempos (90-130 BPM)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <strong>Pop:</strong> 100-120 BPM</li>
                  <li>• <strong>Rock:</strong> 110-130 BPM</li>
                  <li>• <strong>Jazz swing:</strong> 100-140 BPM</li>
                  <li>• <strong>Reggae:</strong> 90-110 BPM</li>
                  <li>• <strong>Funk:</strong> 100-120 BPM</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Fast Tempos (130+ BPM)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <strong>Punk:</strong> 150-200 BPM</li>
                  <li>• <strong>Metal:</strong> 140-180+ BPM</li>
                  <li>• <strong>Bebop:</strong> 140-200+ BPM</li>
                  <li>• <strong>Bluegrass:</strong> 130-160 BPM</li>
                  <li>• <strong>Thrash:</strong> 160-220+ BPM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Metronome Challenges</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Feeling Restricted</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• <strong>Start Simple:</strong> Use for basic exercises first</li>
                <li>• <strong>Musical Context:</strong> Practice with backing tracks</li>
                <li>• <strong>Gradual Introduction:</strong> Short practice sessions</li>
                <li>• <strong>Different Sounds:</strong> Try various click tones</li>
                <li>• <strong>Displaced Clicks:</strong> Use off-beat patterns</li>
                <li>• <strong>Internal Development:</strong> Build internal clock</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Difficulty Staying With It</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• <strong>Too Fast:</strong> Slow down significantly</li>
                <li>• <strong>Count Out Loud:</strong> Verbalize the beat</li>
                <li>• <strong>Body Movement:</strong> Tap foot or nod head</li>
                <li>• <strong>Subdivision Focus:</strong> Think smaller note values</li>
                <li>• <strong>Recording Check:</strong> Record to hear timing</li>
                <li>• <strong>Professional Help:</strong> Get instructor guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your Metronome</h2>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Decision Factors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Budget Options</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Free apps:</strong> Start here</li>
                  <li>• <strong>Basic digital:</strong> $15-30</li>
                  <li>• <strong>Quality mechanical:</strong> $50-100</li>
                  <li>• <strong>Professional digital:</strong> $30-80</li>
                  <li>• <strong>Drum machine:</strong> $100-300+</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Feature Priorities</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Wide tempo range</li>
                  <li>• Multiple time signatures</li>
                  <li>• Volume control</li>
                  <li>• Visual indicators</li>
                  <li>• Battery life</li>
                  <li>• Sound quality</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Usage Patterns</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Home practice only</li>
                  <li>• Travel requirements</li>
                  <li>• Professional use</li>
                  <li>• Teaching applications</li>
                  <li>• Recording needs</li>
                  <li>• Performance use</li>
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
              <p className="text-sm text-gray-600">Keep in tune while practicing</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/picks"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Picks</h3>
              <p className="text-sm text-gray-600">Essential for practice sessions</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/stands"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Stands</h3>
              <p className="text-sm text-gray-600">Keep guitar ready for practice</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
