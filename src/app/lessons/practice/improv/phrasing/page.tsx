"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';

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
        subtitle="Master the art of musical sentences and expression - learn to speak fluently with your guitar through natural phrasing concepts."
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
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Musical Phrasing</h1>
          <p className="text-xl opacity-90 mb-4">
            Great solos aren't just collections of notes - they're musical conversations. 
            Learn to shape your playing with the natural flow of musical speech.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Musical Sentences</span>
            <span className="bg-white/20 px-3 py-1 rounded">Question & Answer</span>
            <span className="bg-white/20 px-3 py-1 rounded">Strategic Silence</span>
            <span className="bg-white/20 px-3 py-1 rounded">Dynamic Expression</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Speech Parallels</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Sentences:</strong> Complete musical thoughts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Commas:</strong> Short pauses within phrases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Questions:</strong> Rising tension and expectation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Answers:</strong> Resolution and completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Breathing:</strong> Natural pause points</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Elements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Dynamics:</strong> Volume changes for emphasis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Articulation:</strong> How notes are attacked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Timing:</strong> Rhythmic placement and space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Direction:</strong> Melodic rise and fall</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Question and Answer Phrasing</h3>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
              <p className="text-blue-800 text-sm mb-3">
                Question phrase (ascending, creates tension) followed by answer phrase (descending, resolves)
              </p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 7/5 8/6 10/6 | :w 8/6 | :q 10/6 8/6 7/5 5/6 | :w 5/6
                `}
                width={600}
                scale={0.8}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Musical Sentence Structure</h3>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 mb-4">
              <p className="text-purple-800 text-sm mb-3">
                4-bar phrase: Statement - Development - Climax - Resolution
              </p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 7/5 8/6 5/6 | :q 7/5 :8 8/6 7/5 :q 8/6 10/6 | :q 10/6 :8 8/6 10/6 :q 12/6 10/6 | :h 8/6 5/6
                `}
                width={600}
                scale={0.8}
              />
            </div>
          </div>
        </div>

        {/* Practice Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Essential Exercises</h3>
              <div className="space-y-4">
                {phrasingExercises.map((exercise, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-green-800">{exercise.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        exercise.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        exercise.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exercise.level}
                      </span>
                    </div>
                    <p className="text-sm text-green-700 mb-2">{exercise.description}</p>
                    <p className="text-xs text-green-600 bg-green-100 p-2 rounded italic">{exercise.tips}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Core Concepts</h3>
              <div className="space-y-4">
                {phrasingConcepts.map((concept, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">{concept.concept}</h4>
                    <p className="text-sm text-blue-700 mb-2">{concept.description}</p>
                    <p className="text-xs text-blue-600 italic">{concept.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Phrasing Mistakes</h2>
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Avoid These Pitfalls</h3>
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
        </div>

        {/* Masters of Phrasing */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Masters of Musical Phrasing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {famousPhrasing.map((artist, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{artist.artist}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Style:</span>
                    <span className="text-sm text-gray-600">{artist.style}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Signature:</span>
                    <p className="text-sm text-gray-600 mt-1">{artist.signature}</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Lesson:</span>
                    <p className="text-sm text-gray-600 mt-1 bg-blue-50 p-2 rounded italic">{artist.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Practice Routine */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Phrasing Practice Routine</h2>
          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">15-Minute Phrasing Workout</h3>
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
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Continue Your Improvisation Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/lessons/practice/improv/call-response"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🔁</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Call & Response</h3>
              <p className="text-sm text-gray-600">Musical conversations and dialogue</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/motif-development"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎼</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Motif Development</h3>
              <p className="text-sm text-gray-600">Build solos from small ideas</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/rhythm"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🥁</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Rhythmic Variation</h3>
              <p className="text-sm text-gray-600">Add groove to your phrases</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
