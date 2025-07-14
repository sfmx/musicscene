import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const phrasingConcepts = [
  {
    concept: 'Musical Sentences',
    description: 'Like spoken language, music has sentences with beginnings, middles, and endings',
    techniques: ['Start with a strong idea', 'Develop through the middle', 'End with resolution', 'Use pauses for punctuation'],
    examples: 'Think of B.B. King\'s vocal-like guitar lines',
  },
  {
    concept: 'Question and Answer',
    description: 'Create tension with a question phrase, then resolve with an answer',
    techniques: ['Question: rising melody', 'Answer: descending resolution', 'Use call-response within solo', 'Vary question length'],
    examples: 'Classic blues and jazz phrasing patterns',
  },
  {
    concept: 'Breathing Spaces',
    description: 'Strategic silence makes your notes more powerful and musical',
    techniques: ['Don\'t fill every beat', 'Let notes ring and decay', 'Use space for emphasis', 'Match natural breath rhythm'],
    examples: 'David Gilmour\'s spacious solos in Pink Floyd',
  },
  {
    concept: 'Dynamic Expression',
    description: 'Volume and intensity changes create emotional impact',
    techniques: ['Start soft, build intensity', 'Use volume swells', 'Vary attack strength', 'Match phrase dynamics'],
    examples: 'Classical guitar expression techniques',
  },
];

const phrasingExercises = [
  {
    title: 'Sing Your Lines',
    level: 'Beginner',
    description: 'Develop natural phrasing by singing melodies first',
    steps: [
      'Choose a simple scale (pentatonic)',
      'Sing short 2-4 note phrases',
      'Focus on natural breathing',
      'Play what you sang on guitar',
      'Match the vocal phrasing exactly'
    ],
    tips: 'If you can\'t sing it, you probably can\'t phrase it musically',
  },
  {
    title: 'Copy Vocal Melodies',
    level: 'Beginner',
    description: 'Learn phrasing from singers who naturally phrase well',
    steps: [
      'Choose simple vocal melodies',
      'Learn to play them on guitar',
      'Copy every nuance and pause',
      'Apply same phrasing to original ideas',
      'Study different vocal styles'
    ],
    tips: 'Singers are natural phrasers - they need to breathe!',
  },
  {
    title: 'The 4-Bar Story',
    level: 'Intermediate',
    description: 'Create complete musical stories in 4-bar phrases',
    steps: [
      'Bar 1: Introduce your idea',
      'Bar 2: Develop or repeat',
      'Bar 3: Create tension/climax',
      'Bar 4: Resolve and conclude',
      'Practice over different chord progressions'
    ],
    tips: 'Think of it as a mini-composition with beginning, middle, end',
  },
  {
    title: 'Dynamics and Articulation',
    level: 'Advanced',
    description: 'Add expression through volume and attack variations',
    steps: [
      'Play same phrase with different dynamics',
      'Practice volume swells mid-phrase',
      'Vary pick attack intensity',
      'Use hammer-ons/pull-offs for legato',
      'Combine techniques for expression'
    ],
    tips: 'Small changes in dynamics create huge emotional impact',
  },
];

const famousPhrasing = [
  {
    artist: 'B.B. King',
    style: 'Vocal-influenced blues phrasing',
    signature: 'Short, singing phrases with expressive bends',
    lesson: 'Every note has meaning, space is as important as notes',
  },
  {
    artist: 'David Gilmour',
    style: 'Atmospheric and spacious',
    signature: 'Long, sustained phrases with strategic silence',
    lesson: 'Less can be more - every note carefully chosen',
  },
  {
    artist: 'John Mayer',
    style: 'Modern blues with jazz influence',
    signature: 'Conversational phrasing with rhythmic sophistication',
    lesson: 'Blend traditional and contemporary phrasing concepts',
  },
  {
    artist: 'Wes Montgomery',
    style: 'Jazz guitar phrasing master',
    signature: 'Long, flowing lines with natural breath points',
    lesson: 'Phrases should flow like natural speech patterns',
  },
];

export default function PhrasingPage() {
  return (
    <Layout>
      <Header
        title="Musical Phrasing"
        subtitle="Learn to speak fluently with your guitar - the art of musical sentences and expression"
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
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Musical Phrasing: Your Guitar's Voice
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Great solos aren't just collections of notes - they're musical conversations. 
              Learn to shape your playing with the natural flow of musical speech.
            </p>
            <div className="bg-cyan-50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-800 mb-2">In This Guide:</h3>
              <ul className="text-cyan-700 space-y-1">
                <li>• Understanding musical sentences and punctuation</li>
                <li>• Question and answer phrasing techniques</li>
                <li>• The power of strategic silence and space</li>
                <li>• Dynamic expression and articulation</li>
                <li>• Practical exercises for natural phrasing</li>
                <li>• Learning from vocal-influenced masters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is Phrasing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Musical Phrasing</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Phrasing is Musical Grammar</h3>
            <p className="text-green-700 mb-4">
              Just as spoken language has sentences, commas, and periods, music has phrases, 
              pauses, and resolutions. Good phrasing makes your solos sound conversational 
              and natural rather than like technical exercises.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Speech Parallels</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <strong>Sentences:</strong> Complete musical thoughts</li>
                  <li>• <strong>Commas:</strong> Short pauses within phrases</li>
                  <li>• <strong>Periods:</strong> Phrase endings and resolutions</li>
                  <li>• <strong>Questions:</strong> Rising tension and expectation</li>
                  <li>• <strong>Answers:</strong> Resolution and completion</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Musical Elements</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <strong>Breathing:</strong> Natural pause points</li>
                  <li>• <strong>Dynamics:</strong> Volume changes for emphasis</li>
                  <li>• <strong>Articulation:</strong> How notes are attacked</li>
                  <li>• <strong>Timing:</strong> Rhythmic placement and space</li>
                  <li>• <strong>Direction:</strong> Melodic rise and fall</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Phrasing Concepts</h2>
          
          <div className="space-y-6">
            {phrasingConcepts.map((concept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{concept.concept}</h3>
                <p className="text-gray-600 mb-4">{concept.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Techniques</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {concept.techniques.map((technique, i) => (
                        <li key={i}>• {technique}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Musical Examples</h4>
                    <p className="text-sm text-gray-600">{concept.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Phrasing Development Exercises</h2>
          
          <div className="space-y-6">
            {phrasingExercises.map((exercise, index) => (
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
                
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Steps</h4>
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

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Phrasing Mistakes</h2>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Avoid These Pitfalls</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Technical Traps</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Scale Running:</strong> Playing scales without musical intent</li>
                  <li>• <strong>Note Cramming:</strong> Filling every beat with notes</li>
                  <li>• <strong>Ignoring Rhythm:</strong> Only focusing on pitches</li>
                  <li>• <strong>One Dynamic:</strong> Playing everything at same volume</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Musical Problems</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>No Breathing:</strong> Phrases that never pause</li>
                  <li>• <strong>Weak Endings:</strong> Phrases that trail off</li>
                  <li>• <strong>No Direction:</strong> Aimless melodic wandering</li>
                  <li>• <strong>Mechanical Feel:</strong> Robot-like precision without soul</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Phrasers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Masters of Musical Phrasing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousPhrasing.map((artist, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{artist.artist}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>Style:</strong> {artist.style}</p>
                  <p className="text-sm text-gray-600"><strong>Signature:</strong> {artist.signature}</p>
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded"><strong>Lesson:</strong> {artist.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Phrasing Practice Routine</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">15-Minute Phrasing Workout</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Warm-up (5 min)</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Sing simple melodies</li>
                  <li>• Play what you sing</li>
                  <li>• Focus on breathing</li>
                  <li>• Match vocal phrasing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Development (7 min)</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Practice 4-bar stories</li>
                  <li>• Question-answer phrases</li>
                  <li>• Vary dynamics</li>
                  <li>• Use strategic silence</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Application (3 min)</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Improvise over backing track</li>
                  <li>• Apply new phrasing concepts</li>
                  <li>• Focus on musicality</li>
                  <li>• Record and evaluate</li>
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
              href="/lessons/practice/improv/call-response"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Call & Response</h3>
              <p className="text-sm text-gray-600">Musical conversations and dialogue</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/motif-development"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Motif Development</h3>
              <p className="text-sm text-gray-600">Build solos from small ideas</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/rhythm"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Variation</h3>
              <p className="text-sm text-gray-600">Add groove to your phrases</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
