import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const callResponseTypes = [
  {
    type: 'Basic Call & Response',
    description: 'Simple question and answer between two musical phrases',
    structure: 'Statement → Pause → Response',
    examples: ['Blues guitar and vocal', 'Jam session trading', 'Solo section dialogue'],
    difficulty: 'Beginner',
  },
  {
    type: 'Echo Response',
    description: 'Response mimics or echoes the call with variations',
    structure: 'Original phrase → Modified repeat',
    examples: ['Slight rhythmic changes', 'Octave displacement', 'Dynamic variation'],
    difficulty: 'Beginner',
  },
  {
    type: 'Contrasting Response',
    description: 'Response provides opposite character to the call',
    structure: 'High → Low, Fast → Slow, Loud → Soft',
    examples: ['Jazz improvisation', 'Rock guitar solos', 'Classical variations'],
    difficulty: 'Intermediate',
  },
  {
    type: 'Developmental Response',
    description: 'Response takes an element from call and develops it further',
    structure: 'Seed idea → Elaboration/Extension',
    examples: ['Motif expansion', 'Harmonic development', 'Rhythmic evolution'],
    difficulty: 'Advanced',
  },
];

const practiceExercises = [
  {
    title: 'Solo Call & Response',
    level: 'Beginner',
    description: 'Practice call and response within your own playing',
    setup: 'Use a simple backing track in one key',
    steps: [
      'Play a 2-bar "call" phrase',
      'Rest for 2 beats (important!)',
      'Play a 2-bar "response" phrase',
      'Repeat with new ideas',
      'Focus on making response relate to call'
    ],
    tips: 'Think of it as having a conversation with yourself',
  },
  {
    title: 'Record and Respond',
    level: 'Beginner',
    description: 'Use recording to create actual call and response',
    setup: 'Recording device or app, backing track',
    steps: [
      'Record yourself playing "call" phrases',
      'Play back and respond in real-time',
      'Try different response approaches',
      'Record full conversations',
      'Analyze what worked best'
    ],
    tips: 'This simulates playing with another musician',
  },
  {
    title: 'Vocal-Guitar Dialogue',
    level: 'Intermediate',
    description: 'Alternate between singing and playing guitar',
    setup: 'Your voice and guitar, backing track optional',
    steps: [
      'Sing a simple melodic phrase',
      'Answer it on guitar',
      'Switch: guitar call, vocal response',
      'Make each response relate to the call',
      'Gradually make phrases more complex'
    ],
    tips: 'This develops natural musical conversation skills',
  },
  {
    title: 'Trading Fours',
    level: 'Advanced',
    description: 'Practice the classic jazz technique of trading 4-bar solos',
    setup: 'Jazz backing track, metronome',
    steps: [
      'Play over chord changes for 4 bars',
      'Rest/listen for 4 bars (imagine another player)',
      'Respond to your previous phrase',
      'Continue trading back and forth',
      'Make each statement relate to previous'
    ],
    tips: 'This prepares you for real jam sessions and jazz playing',
  },
];

const musicalElements = [
  {
    element: 'Rhythm',
    callExample: 'Short, staccato notes',
    responseExample: 'Long, sustained notes',
    technique: 'Contrast rhythmic density and feel',
  },
  {
    element: 'Pitch',
    callExample: 'High register melody',
    responseExample: 'Low register answer',
    technique: 'Use register contrast for dialogue',
  },
  {
    element: 'Dynamics',
    callExample: 'Loud, aggressive phrase',
    responseExample: 'Soft, gentle phrase',
    technique: 'Volume changes create conversation',
  },
  {
    element: 'Articulation',
    callExample: 'Smooth, legato phrasing',
    responseExample: 'Sharp, staccato attack',
    technique: 'How you play notes affects character',
  },
  {
    element: 'Harmony',
    callExample: 'Chord tones and stable notes',
    responseExample: 'Tension notes and passing tones',
    technique: 'Consonance vs. dissonance dialogue',
  },
];

const famousExamples = [
  {
    artist: 'B.B. King',
    context: 'Guitar and vocal interplay',
    description: 'King\'s guitar would "answer" his vocal lines, creating musical conversations',
    technique: 'Guitar fills between vocal phrases, matching emotional content',
  },
  {
    artist: 'Miles Davis & John Coltrane',
    context: 'Jazz improvisation trading',
    description: 'Famous for their musical dialogues in quintet recordings',
    technique: 'Contrasting approaches: Miles\' space vs. Coltrane\'s density',
  },
  {
    artist: 'Page & Plant (Led Zeppelin)',
    context: 'Live improvisation',
    description: 'Jimmy Page\'s guitar responding to Robert Plant\'s vocal improvisations',
    technique: 'Rock context with blues-based call and response',
  },
  {
    artist: 'Muddy Waters Band',
    context: 'Chicago blues ensemble',
    description: 'Guitar, harmonica, and vocals trading phrases and ideas',
    technique: 'Multiple instruments in conversation, blues tradition',
  },
];

export default function CallResponsePage() {
  return (
    <Layout>
      <Header
        title="Call & Response"
        subtitle="Master musical conversation - the foundation of interactive improvisation"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/lessons/practice/improv" 
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            ← Back to Improvisation
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Call & Response: Musical Conversation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              The foundation of musical interaction, call and response teaches you to listen, 
              react, and create meaningful musical dialogues. Essential for jamming, soloing, and composition.
            </p>
            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">Master These Skills:</h3>
              <ul className="text-emerald-700 space-y-1">
                <li>• Musical listening and response techniques</li>
                <li>• Creating meaningful phrase relationships</li>
                <li>• Solo and ensemble call & response</li>
                <li>• Rhythmic, melodic, and harmonic dialogue</li>
                <li>• Professional jamming and improvisation</li>
                <li>• Building musical tension and release</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fundamentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Call & Response Fundamentals</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">What Makes Great Musical Conversation?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Essential Elements</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Listening:</strong> Really hear what comes before</li>
                  <li>• <strong>Space:</strong> Allow silence between call and response</li>
                  <li>• <strong>Relationship:</strong> Response should relate to call</li>
                  <li>• <strong>Variety:</strong> Mix echoing and contrasting responses</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Musical Benefits</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Develops ears:</strong> Improves listening skills</li>
                  <li>• <strong>Creates structure:</strong> Organizes improvisation</li>
                  <li>• <strong>Builds interaction:</strong> Essential for ensemble playing</li>
                  <li>• <strong>Teaches restraint:</strong> Not everything needs filling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Call & Response */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Call & Response</h2>
          
          <div className="space-y-6">
            {callResponseTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{type.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Structure</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{type.structure}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Musical Examples</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Musical Elements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Elements of Musical Dialogue</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Creating Contrast and Connection</h3>
            <div className="space-y-4">
              {musicalElements.map((element, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">{element.element}</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-purple-700"><strong>Call Example:</strong></p>
                      <p className="text-sm text-purple-600">{element.callExample}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-700"><strong>Response Example:</strong></p>
                      <p className="text-sm text-purple-600">{element.responseExample}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-700"><strong>Technique:</strong></p>
                      <p className="text-sm text-purple-600">{element.technique}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Call & Response Exercises</h2>
          
          <div className="space-y-6">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{exercise.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exercise.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    exercise.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {exercise.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{exercise.description}</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Setup:</strong> {exercise.setup}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Practice Steps</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      {exercise.steps.map((step, i) => (
                        <li key={i}>{i + 1}. {step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Pro Tip</h4>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{exercise.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Masters of Call & Response</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{example.artist}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>Context:</strong> {example.context}</p>
                  <p className="text-sm text-gray-600">{example.description}</p>
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded"><strong>Technique:</strong> {example.technique}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Call & Response Mistakes</h2>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Avoid These Pitfalls</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Listening Problems</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Not waiting:</strong> Jumping in too quickly</li>
                  <li>• <strong>Not listening:</strong> Ignoring what came before</li>
                  <li>• <strong>Same response:</strong> Always responding the same way</li>
                  <li>• <strong>No space:</strong> Filling every moment with sound</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Musical Issues</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Unrelated responses:</strong> No connection to the call</li>
                  <li>• <strong>Overly complex:</strong> Showing off instead of conversing</li>
                  <li>• <strong>No development:</strong> Missing opportunities to build</li>
                  <li>• <strong>Poor timing:</strong> Not matching phrase lengths</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ensemble Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Call & Response in Ensembles</h2>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">Playing with Others</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Jam Sessions</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Listen before you play</li>
                  <li>• Leave space for others</li>
                  <li>• Support the current soloist</li>
                  <li>• Take turns in the spotlight</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Jazz Contexts</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Trading fours and eights</li>
                  <li>• Comping behind soloists</li>
                  <li>• Ensemble hits and stops</li>
                  <li>• Building group dynamics</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Rock & Blues</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Guitar-vocal interplay</li>
                  <li>• Lead guitar fills</li>
                  <li>• Call-response riffs</li>
                  <li>• Building solo sections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Call & Response Practice</h2>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">10-Minute Conversation Practice</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Warm-up (2 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Simple call phrases</li>
                  <li>• Echo responses</li>
                  <li>• Focus on timing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Contrast (3 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• High/low responses</li>
                  <li>• Fast/slow contrasts</li>
                  <li>• Loud/soft dynamics</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Development (3 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Build on previous ideas</li>
                  <li>• Extend phrases</li>
                  <li>• Create variations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Application (2 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Use backing track</li>
                  <li>• Apply all techniques</li>
                  <li>• Record and review</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Improvisation Topics</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/lessons/practice/improv/phrasing"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Musical Phrasing</h3>
              <p className="text-sm text-gray-600">Shape your musical sentences</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/motif-development"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Motif Development</h3>
              <p className="text-sm text-gray-600">Build from small musical ideas</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/rhythm"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Variation</h3>
              <p className="text-sm text-gray-600">Add groove to your responses</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
