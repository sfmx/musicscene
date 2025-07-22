import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const motifTypes = [
  {
    type: 'Rhythmic Motifs',
    description: 'Short rhythmic patterns that can be repeated and varied',
    characteristics: ['Strong rhythmic identity', 'Works with different pitches', 'Groove-oriented'],
    examples: ['Syncopated rhythm patterns', 'Dotted note rhythms', 'Triplet-based patterns'],
    difficulty: 'Beginner',
  },
  {
    type: 'Melodic Motifs',
    description: 'Short pitch sequences that create melodic identity',
    characteristics: ['Memorable pitch contour', 'Usually 2-5 notes', 'Easy to recognize'],
    examples: ['Scale fragments', 'Interval patterns', 'Chromatic approaches'],
    difficulty: 'Beginner',
  },
  {
    type: 'Intervallic Motifs',
    description: 'Based on specific interval relationships',
    characteristics: ['Consistent interval pattern', 'Transposable', 'Harmonic foundation'],
    examples: ['Perfect 4ths', 'Major 3rds', 'Minor 7ths', 'Tritones'],
    difficulty: 'Intermediate',
  },
  {
    type: 'Hybrid Motifs',
    description: 'Combine rhythmic and melodic elements',
    characteristics: ['Both pitch and rhythm identity', 'More complex to develop', 'Very memorable'],
    examples: ['Signature licks', 'Famous riffs', 'Classical themes'],
    difficulty: 'Advanced',
  },
];

const developmentTechniques = [
  {
    technique: 'Sequence',
    description: 'Repeat the motif at different pitch levels',
    method: 'Move motif up or down by consistent intervals',
    example: 'Play motif on different scale degrees',
    musicalEffect: 'Creates momentum and harmonic movement',
  },
  {
    technique: 'Inversion',
    description: 'Flip the melodic direction of intervals',
    method: 'Where motif goes up, make it go down (and vice versa)',
    example: 'C-E-D becomes C-Ab-Bb',
    musicalEffect: 'Maintains character while adding variety',
  },
  {
    technique: 'Augmentation',
    description: 'Make note values longer (usually double)',
    method: 'Change quarters to halves, eighths to quarters',
    example: 'Fast motif becomes slow and stately',
    musicalEffect: 'Changes character from active to reflective',
  },
  {
    technique: 'Diminution',
    description: 'Make note values shorter (usually half)',
    method: 'Change quarters to eighths, halves to quarters',
    example: 'Slow motif becomes quick and energetic',
    musicalEffect: 'Increases intensity and urgency',
  },
  {
    technique: 'Fragmentation',
    description: 'Use only part of the original motif',
    method: 'Take 1-2 notes from longer motif',
    example: 'Use just the first two notes repeatedly',
    musicalEffect: 'Creates focus and builds tension',
  },
  {
    technique: 'Extension',
    description: 'Add notes to the beginning or end',
    method: 'Extend motif with scales or arpeggios',
    example: 'Add approach tones or passing notes',
    musicalEffect: 'Expands ideas while maintaining core identity',
  },
];

const practiceExercises = [
  {
    title: 'Motif Creation Workshop',
    level: 'Beginner',
    description: 'Learn to create simple, memorable motifs',
    steps: [
      'Choose 3-4 notes from pentatonic scale',
      'Create a simple rhythm (2-4 beats)',
      'Play your motif 4 times exactly',
      'Rate it: Is it memorable? Interesting?',
      'Refine until you have a strong motif'
    ],
    tips: 'The best motifs are simple but distinctive',
  },
  {
    title: 'Sequence Practice',
    level: 'Beginner',
    description: 'Develop motifs through sequential movement',
    steps: [
      'Start with your created motif',
      'Play it on different scale degrees',
      'Move up the scale: 1st, 2nd, 3rd degrees',
      'Try moving down: 1st, 7th, 6th degrees',
      'Practice smooth transitions between levels'
    ],
    tips: 'Sequences create natural harmonic movement',
  },
  {
    title: 'Rhythmic Transformation',
    level: 'Intermediate',
    description: 'Transform motifs through rhythm changes',
    steps: [
      'Take a simple melodic motif',
      'Play it with straight eighths',
      'Change to triplet feel',
      'Try syncopated versions',
      'Combine with different time signatures'
    ],
    tips: 'Same pitches + different rhythms = new character',
  },
  {
    title: 'Advanced Development',
    level: 'Advanced',
    description: 'Combine multiple development techniques',
    steps: [
      'Start with a strong 4-note motif',
      'Apply sequence for 4 bars',
      'Fragment to 2 notes for 2 bars',
      'Use inversion for 2 bars',
      'Combine techniques in final 4 bars'
    ],
    tips: 'This creates a complete musical story from one idea',
  },
];

const famousExamples = [
  {
    composer: 'Ludwig van Beethoven',
    piece: 'Symphony No. 5',
    motif: 'Four-note "fate knocking" motif',
    development: 'Used throughout entire first movement with sequences, inversions, and extensions',
    lesson: 'Simple ideas can create monumental works',
  },
  {
    artist: 'Chuck Berry',
    piece: 'Johnny B. Goode',
    motif: 'Opening guitar riff',
    development: 'Variations appear throughout song with slight rhythmic and melodic changes',
    lesson: 'Rock music relies heavily on motif development',
  },
  {
    artist: 'John Coltrane',
    piece: 'Giant Steps',
    motif: 'Descending major third patterns',
    development: 'Complex harmonic sequences and rhythmic variations',
    lesson: 'Jazz improvisation often develops small intervallic ideas',
  },
  {
    artist: 'Led Zeppelin',
    piece: 'Black Dog',
    motif: 'Rhythmic riff motif',
    development: 'Appears in different registers and with different backing harmonies',
    lesson: 'Rhythm-based motifs can drive entire songs',
  },
];

export default function MotifDevelopmentPage() {
  return (
    <Layout>
      <Header
        title="Motif Development"
        subtitle="Build compelling solos from small musical ideas - the compositional approach to improvisation"
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
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Motif Development: Small Ideas, Big Impact
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Learn how composers and improvisers create compelling music from tiny seeds. 
              Master the art of taking simple motifs and developing them into complete musical statements.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">What You'll Learn:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Creating memorable musical motifs</li>
                <li>• Classical development techniques</li>
                <li>• Sequence, inversion, and augmentation</li>
                <li>• Building complete solos from one idea</li>
                <li>• Famous examples across all genres</li>
                <li>• Compositional thinking in improvisation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is a Motif */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Musical Motifs</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">The Building Blocks of Music</h3>
            <p className="text-blue-700 mb-4">
              A motif is a short musical idea - usually 2-5 notes - that serves as a building block 
              for larger musical structures. Think of it as a musical "seed" that can grow into 
              a complete solo or composition through various development techniques.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Characteristics of Strong Motifs</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Memorable:</strong> Easy to recognize when it returns</li>
                  <li>• <strong>Simple:</strong> Not too complex to develop</li>
                  <li>• <strong>Distinctive:</strong> Has unique character or personality</li>
                  <li>• <strong>Flexible:</strong> Works in different musical contexts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Why Motifs Work</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Unity:</strong> Creates coherence in improvisation</li>
                  <li>• <strong>Development:</strong> Provides material to work with</li>
                  <li>• <strong>Recognition:</strong> Listeners can follow the story</li>
                  <li>• <strong>Structure:</strong> Organizes spontaneous creation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Motifs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Musical Motifs</h2>
          
          <div className="space-y-6">
            {motifTypes.map((motif, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{motif.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    motif.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    motif.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {motif.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{motif.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Characteristics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {motif.characteristics.map((char, i) => (
                        <li key={i}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Common Examples</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {motif.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Classical Development Techniques</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Transform Your Musical Ideas</h3>
            <p className="text-purple-700 mb-4">
              These techniques come from classical composition but work perfectly in improvisation. 
              Each method transforms your original motif while maintaining its essential character.
            </p>
          </div>
          
          <div className="space-y-6">
            {developmentTechniques.map((technique, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{technique.technique}</h3>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Method</h4>
                    <p className="text-sm text-gray-600">{technique.method}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Example</h4>
                    <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded">{technique.example}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Musical Effect</h4>
                    <p className="text-sm text-gray-600">{technique.musicalEffect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Motif Development Exercises</h2>
          
          <div className="space-y-6">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
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
                
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                
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
                    <h4 className="font-semibold text-gray-700 mb-2">Key Insight</h4>
                    <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded">{exercise.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Famous Examples of Motif Development</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{example.composer || example.artist}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>Piece:</strong> {example.piece}</p>
                  <p className="text-sm text-gray-600"><strong>Motif:</strong> {example.motif}</p>
                  <p className="text-sm text-gray-600"><strong>Development:</strong> {example.development}</p>
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded"><strong>Lesson:</strong> {example.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Application */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Applying Motif Development in Solos</h2>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-800">Solo Structure Using Motifs</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Introduction (8 bars)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Present your main motif clearly</li>
                  <li>• Repeat 2-3 times for recognition</li>
                  <li>• Keep it simple and memorable</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Development (16 bars)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Use sequences and inversions</li>
                  <li>• Try rhythmic variations</li>
                  <li>• Fragment and extend the motif</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Climax (8 bars)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Combine multiple techniques</li>
                  <li>• Build to highest energy point</li>
                  <li>• Use motif in dramatic way</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Resolution (8 bars)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Return to original motif</li>
                  <li>• Simplify and conclude</li>
                  <li>• Create satisfying ending</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Motif Development Mistakes</h2>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Avoid These Pitfalls</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Structural Problems</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Too Complex:</strong> Starting with motifs that are too complicated</li>
                  <li>• <strong>No Return:</strong> Never coming back to the original idea</li>
                  <li>• <strong>Over-Development:</strong> Changing motif beyond recognition</li>
                  <li>• <strong>Weak Foundation:</strong> Starting with unmemorable motifs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Execution Issues</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Poor Transitions:</strong> Awkward jumps between variations</li>
                  <li>• <strong>One Technique:</strong> Only using sequence, ignoring others</li>
                  <li>• <strong>No Contrast:</strong> All variations sound too similar</li>
                  <li>• <strong>Rushing Development:</strong> Not letting ideas breathe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Genre Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Motif Development Across Genres</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Different Styles, Same Principles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Blues & Rock</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Riff-based development</li>
                  <li>• Call-response with vocals</li>
                  <li>• Rhythmic variations</li>
                  <li>• Register changes (octaves)</li>
                  <li>• Dynamic development</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Jazz</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Harmonic sequences</li>
                  <li>• Complex rhythmic variations</li>
                  <li>• Intervallic development</li>
                  <li>• Bebop-style fragmentation</li>
                  <li>• Modal transformations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Classical/Fingerstyle</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Traditional development forms</li>
                  <li>• Contrapuntal treatment</li>
                  <li>• Theme and variations</li>
                  <li>• Augmentation/diminution</li>
                  <li>• Inversion and retrograde</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Motif Development Practice</h2>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-indigo-800">20-Minute Development Workshop</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Create (5 min)</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• Invent 2-3 new motifs</li>
                  <li>• Test for memorability</li>
                  <li>• Choose the strongest</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Develop (10 min)</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• Practice each technique</li>
                  <li>• Sequence, invert, fragment</li>
                  <li>• Try rhythm changes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Combine (3 min)</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• Use multiple techniques</li>
                  <li>• Create smooth transitions</li>
                  <li>• Build complete phrases</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Apply (2 min)</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• Use in full solo context</li>
                  <li>• Record and evaluate</li>
                  <li>• Note successful ideas</li>
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
              <p className="text-sm text-gray-600">Shape your motif presentations</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/call-response"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Call & Response</h3>
              <p className="text-sm text-gray-600">Use motifs in musical dialogue</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/scales"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Scales in Improvisation</h3>
              <p className="text-sm text-gray-600">Source material for motifs</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
