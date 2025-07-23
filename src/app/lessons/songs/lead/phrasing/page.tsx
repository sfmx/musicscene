import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const phrasingTechniques = [
  {
    technique: 'String Bending',
    description: 'Change pitch by physically bending the string',
    types: ['Half-step bends', 'Whole-step bends', 'Quarter-tone bends', 'Pre-bends'],
    application: 'Express emotion, reach chord tones, create blues feeling',
    examples: 'B.B. King vibrato, David Gilmour sustained bends'
  },
  {
    technique: 'Vibrato',
    description: 'Slight, rapid pitch variations to add warmth and sustain',
    types: ['Finger vibrato', 'Tremolo arm vibrato', 'Fast vs slow vibrato'],
    application: 'Add life to sustained notes, personal expression signature',
    examples: 'Gary Moore wide vibrato, Yngwie narrow vibrato'
  },
  {
    technique: 'Legato Playing',
    description: 'Smooth, connected notes using hammer-ons and pull-offs',
    types: ['Hammer-ons', 'Pull-offs', 'Slides', 'Tapping'],
    application: 'Create flowing melodic lines, reduce pick attack',
    examples: 'Allan Holdsworth fluid lines, Joe Satriani legato runs'
  },
  {
    technique: 'Rhythmic Displacement',
    description: 'Playing notes slightly ahead or behind the beat',
    types: ['Laid back feel', 'Rushing feel', 'Syncopation'],
    application: 'Create groove, add tension, match song feel',
    examples: 'John Mayer laid-back blues, Steve Vai rhythmic complexity'
  }
];

const phrasingSources = [
  {
    source: 'Vocal Melodies',
    concept: 'Breathing and Natural Phrasing',
    application: 'Play phrases that could be sung, with natural breaks for "breathing"',
    exercise: 'Sing a melody first, then play it on guitar maintaining the vocal phrasing'
  },
  {
    source: 'Speech Patterns',
    concept: 'Question and Answer',
    application: 'Create musical conversations with call-and-response phrases',
    exercise: 'Play a "question" phrase (ending high), then "answer" it (ending low)'
  },
  {
    source: 'Horn Sections',
    concept: 'Punchy, Articulated Lines',
    application: 'Short, rhythmic phrases with clear attack and release',
    exercise: 'Study James Brown horn parts, recreate the rhythmic feel on guitar'
  },
  {
    source: 'Classical Music',
    concept: 'Motivic Development',
    application: 'Take a simple motif and develop it through variation and repetition',
    exercise: 'Play a 3-note motif, then vary it rhythmically, melodically, harmonically'
  }
];

const dynamicElements = [
  {
    element: 'Attack Variation',
    description: 'How hard you pick or fret notes',
    techniques: ['Soft fingertip attack', 'Hard pick attack', 'Nail attack', 'Thumb picking'],
    effect: 'Changes tone color and perceived volume'
  },
  {
    element: 'Note Duration',
    description: 'How long notes are allowed to ring',
    techniques: ['Staccato (short)', 'Legato (connected)', 'Sustained', 'Muted'],
    effect: 'Creates rhythmic interest and musical punctuation'
  },
  {
    element: 'Spacing & Rests',
    description: 'Strategic use of silence between notes',
    techniques: ['Short rests', 'Long pauses', 'Syncopated spacing'],
    effect: 'Creates tension, allows music to breathe, emphasizes important notes'
  },
  {
    element: 'Volume Swells',
    description: 'Gradual changes in volume',
    techniques: ['Volume knob swells', 'Picking dynamics', 'Tremolo arm swells'],
    effect: 'Creates emotional peaks and valleys, builds tension'
  }
];

export default function PhrasingExpressionPage() {
  return (
    <Layout>
      <Header
        title="Phrasing & Expression in Lead Guitar"
        subtitle="Develop musical phrasing using bends, vibrato, and timing to create expressive lead guitar lines."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expression: The Soul of Lead Guitar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎭 It's Not What You Play, It's How You Play It</h3>
              <p className="text-gray-600 mb-3">
                Two guitarists can play the same notes but create completely different emotional experiences through phrasing and expression.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> A simple G-B-D arpeggio can sound happy (bright attack, quick notes) or sad (bent notes, slow vibrato, soft attack).
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🗣️ Musical Conversation</h3>
              <p className="text-gray-600 mb-3">
                Think of your guitar solo as speaking. Use musical "punctuation," "questions," "answers," and "emphasis" to tell a story.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Phrasing Elements:</strong> Attacks, rests, bends, vibrato, dynamics, note duration, rhythmic placement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phrasing Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Phrasing Techniques</h2>
          <div className="space-y-6">
            {phrasingTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{technique.technique}</h3>
                    <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Types:</h4>
                    <ul className="space-y-1">
                      {technique.types.map((type, i) => (
                        <li key={i} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{technique.application}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-600 italic">{technique.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phrasing Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Phrasing from Other Sources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {phrasingSources.map((source, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{source.source}</h3>
                <h4 className="font-medium text-blue-800 mb-3">{source.concept}</h4>
                <p className="text-blue-700 text-sm mb-4">{source.application}</p>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-xs text-blue-600">
                    <strong>Exercise:</strong> {source.exercise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Expression Elements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dynamicElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{element.element}</h3>
                <p className="text-gray-600 text-sm mb-4">{element.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {element.techniques.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  <strong>Effect:</strong> {element.effect}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Exercises */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎯 Phrasing Development Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Mirror Exercise</h3>
              <p className="text-green-700 text-sm mb-3">
                Record yourself humming or singing a melody. Then try to exactly recreate the phrasing, including breathing spots, on guitar.
              </p>
              <p className="text-xs text-green-600 italic">
                Develops natural musical phrasing
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Single Note Exploration</h3>
              <p className="text-green-700 text-sm mb-3">
                Play just one note for 30 seconds. Use different attacks, vibrato speeds, bends, and dynamics to create interest.
              </p>
              <p className="text-xs text-green-600 italic">
                Develops expression without relying on note choice
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Call & Response</h3>
              <p className="text-green-700 text-sm mb-3">
                Play a short phrase (2-4 notes), then "answer" it with a different phrase. Practice musical conversation.
              </p>
              <p className="text-xs text-green-600 italic">
                Develops phrase structure and musical dialogue
              </p>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🎸 Masters of Phrasing</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">David Gilmour - "Comfortably Numb"</h3>
              <p className="text-amber-700 text-sm">
                <strong>Technique:</strong> Long sustained bends with slow, wide vibrato
                <br/><strong>Effect:</strong> Creates emotional intensity and longing through minimal notes, maximum expression
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">B.B. King - "The Thrill is Gone"</h3>
              <p className="text-amber-700 text-sm">
                <strong>Technique:</strong> Short, punchy phrases with signature vibrato and note bending
                <br/><strong>Effect:</strong> Vocal-like phrasing that tells a story with every note
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">Gary Moore - "Still Got the Blues"</h3>
              <p className="text-amber-700 text-sm">
                <strong>Technique:</strong> Aggressive vibrato, dramatic bends, dynamic volume swells
                <br/><strong>Effect:</strong> Raw emotional power through extreme expression techniques
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">John Mayer - "Gravity"</h3>
              <p className="text-amber-700 text-sm">
                <strong>Technique:</strong> Laid-back timing, subtle bends, controlled vibrato
                <br/><strong>Effect:</strong> Modern blues phrasing with sophisticated rhythmic placement
              </p>
            </div>
          </div>
        </section>

        {/* Timing and Feel */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">⏱️ Timing and Rhythmic Feel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">Playing Behind the Beat</h3>
              <p className="text-indigo-700 mb-3">
                Playing slightly after the beat creates a laid-back, bluesy feel. Common in blues, R&B, and some rock styles.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-indigo-600">
                  <strong>Practice:</strong> Use a metronome, deliberately play notes slightly after the click while maintaining the groove.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">Playing Ahead of the Beat</h3>
              <p className="text-indigo-700 mb-3">
                Playing slightly before the beat creates urgency and drive. Common in rock, metal, and aggressive playing styles.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-indigo-600">
                  <strong>Practice:</strong> Play notes slightly before the metronome click, maintaining steady tempo while creating forward motion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/construction"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Solo Construction →
              </Link>
              <Link 
                href="/lessons/songs/lead/scales"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Scale Application
              </Link>
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Lead Guitar Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
