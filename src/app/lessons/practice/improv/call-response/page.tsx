"use client";

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
        subtitle="Master musical conversation and interactive improvisation - learn to listen, react, and create meaningful musical dialogues with natural phrasing."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/practice/improv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Improvisation
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Call & Response</h1>
          <p className="text-xl opacity-90 mb-4">
            Master the art of musical conversation - the foundation of interactive improvisation, 
            jam sessions, and ensemble playing. Learn to listen, react, and create meaningful dialogue.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Musical Dialogue</span>
            <span className="bg-white/20 px-3 py-1 rounded">Interactive Playing</span>
            <span className="bg-white/20 px-3 py-1 rounded">Ensemble Skills</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jamming Techniques</span>
          </div>
        </div>
        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Call & Response Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Essential Elements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Listening:</strong> Really hear what comes before</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Space:</strong> Allow silence between call and response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Relationship:</strong> Response should relate to call</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Variety:</strong> Mix echoing and contrasting responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Development:</strong> Build and evolve musical ideas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Develops ears:</strong> Improves listening skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Creates structure:</strong> Organizes improvisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Builds interaction:</strong> Essential for ensemble playing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Teaches restraint:</strong> Not everything needs filling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Professional skills:</strong> Essential for jamming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Call & Response */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Types of Call & Response</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {callResponseTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{type.type}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">Structure</h4>
                  <p className="text-xs text-gray-600 bg-white p-2 rounded">{type.structure}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-1">Examples</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Essential Exercises</h3>
              <div className="space-y-4">
                {practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-blue-800">{exercise.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        exercise.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        exercise.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exercise.level}
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 mb-2">{exercise.description}</p>
                    <p className="text-xs text-blue-600 bg-blue-100 p-2 rounded italic">{exercise.tips}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Elements</h3>
              <div className="space-y-4">
                {musicalElements.map((element, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">{element.element}</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-purple-700 font-medium">Call:</p>
                        <p className="text-purple-600">{element.callExample}</p>
                      </div>
                      <div>
                        <p className="text-purple-700 font-medium">Response:</p>
                        <p className="text-purple-600">{element.responseExample}</p>
                      </div>
                    </div>
                    <p className="text-xs text-purple-600 mt-2 italic">{element.technique}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Masters of Call & Response */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Masters of Call & Response</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{example.artist}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Context:</span>
                    <span className="text-sm text-gray-600">{example.context}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Description:</span>
                    <p className="text-sm text-gray-600 mt-1">{example.description}</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Technique:</span>
                    <p className="text-sm text-gray-600 mt-1 bg-blue-50 p-2 rounded italic">{example.technique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Call & Response Mistakes</h2>
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Avoid These Pitfalls</h3>
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
        </div>

        {/* Daily Practice Routine */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Call & Response Practice Routine</h2>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">15-Minute Call & Response Workout</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Warm-up (5 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Practice active listening</li>
                  <li>• Echo simple phrases</li>
                  <li>• Focus on timing</li>
                  <li>• Match the style</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Development (7 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Practice trading fours</li>
                  <li>• Respond with variations</li>
                  <li>• Build conversations</li>
                  <li>• Use different textures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Application (3 min)</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Jam with backing tracks</li>
                  <li>• Record call-response solos</li>
                  <li>• Focus on musical dialogue</li>
                  <li>• Evaluate responses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Continue Your Improvisation Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/lessons/practice/improv/phrasing"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Musical Phrasing</h3>
              <p className="text-sm text-gray-600">Shape your musical sentences</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/motif-development"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎼</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Motif Development</h3>
              <p className="text-sm text-gray-600">Build solos from small ideas</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/target-notes"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Target Notes</h3>
              <p className="text-sm text-gray-600">Strategic note placement</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
