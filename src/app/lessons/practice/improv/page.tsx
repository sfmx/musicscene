"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';

const improvTypes = [
  {
    name: 'Phrasing',
    icon: <span style={{ fontSize: 32 }}>🗣️</span>,
    href: '/lessons/practice/improv/phrasing',
    description: 'Shape your solos with musical sentences and pauses, creating natural breathing spaces.',
    level: 'Beginner',
    duration: '10-15 min',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Call & Response',
    icon: <span style={{ fontSize: 32 }}>🔁</span>,
    href: '/lessons/practice/improv/call-response',
    description: 'Create conversations in your improvisation, establishing musical dialogue.',
    level: 'Beginner',
    duration: '8-12 min',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Motif Development',
    icon: <span style={{ fontSize: 32 }}>🎼</span>,
    href: '/lessons/practice/improv/motif-development',
    description: 'Build cohesive solos by repeating and varying short melodic ideas.',
    level: 'Intermediate',
    duration: '12-18 min',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Target Notes',
    icon: <span style={{ fontSize: 32 }}>🎯</span>,
    href: '/lessons/practice/improv/target-notes',
    description: 'Land on strong chord tones for melodic resolution and harmonic clarity.',
    level: 'Intermediate',
    duration: '15-20 min',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Improvising with Scales',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/improv/scales',
    description: 'Use major, minor, and modal scales as vocabulary for expressive soloing.',
    level: 'Intermediate',
    duration: '20-25 min',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    name: 'Improvising with Arpeggios',
    icon: <span style={{ fontSize: 32 }}>🔔</span>,
    href: '/lessons/practice/improv/arpeggios',
    description: 'Outline chord progressions and add sophisticated color to your melodic lines.',
    level: 'Advanced',
    duration: '15-20 min',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    name: 'Rhythmic Variation',
    icon: <span style={{ fontSize: 32 }}>🥁</span>,
    href: '/lessons/practice/improv/rhythm',
    description: 'Create compelling solos through rhythmic displacement and creative timing.',
    level: 'Advanced',
    duration: '10-15 min',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

const improvBenefits = [
  { icon: '🎨', title: 'Creative Expression', description: 'Develop your unique musical voice and artistic identity' },
  { icon: '🧠', title: 'Musical Intelligence', description: 'Strengthen ear training, theory knowledge, and musical instincts' },
  { icon: '⚡', title: 'Real-Time Skills', description: 'Build confidence for live performance and jam sessions' },
  { icon: '🎯', title: 'Harmonic Understanding', description: 'Deepen comprehension of chord progressions and song structure' },
  { icon: '💪', title: 'Technical Integration', description: 'Apply practiced techniques in musical contexts' },
  { icon: '🌟', title: 'Spontaneous Creativity', description: 'Learn to create compelling music in the moment' },
];

const professionalTips = [
  {
    title: 'Listen First',
    description: 'Always listen to the music around you. Improvisation is musical conversation, not monologue.',
    icon: '👂'
  },
  {
    title: 'Start Simple',
    description: 'Begin with simple ideas you can execute cleanly. Complexity comes with confidence.',
    icon: '🎯'
  },
  {
    title: 'Record Yourself',
    description: 'Recording reveals what really happened versus what you thought you played.',
    icon: '🎙️'
  },
  {
    title: 'Learn Solos',
    description: 'Transcribe and learn great solos note-for-note to internalize professional vocabulary.',
    icon: '📚'
  },
];

const famousImprovisers = [
  { name: 'B.B. King', strength: 'Expressive Phrasing', genre: 'Blues', signature: 'Emotional vibrato and space' },
  { name: 'Eric Clapton', strength: 'Melodic Storytelling', genre: 'Blues/Rock', signature: 'Song-like solos' },
  { name: 'David Gilmour', strength: 'Atmospheric Soloing', genre: 'Progressive Rock', signature: 'Space and texture' },
  { name: 'John Scofield', strength: 'Modern Jazz Language', genre: 'Jazz/Fusion', signature: 'Harmonic sophistication' },
  { name: 'Pat Metheny', strength: 'Lyrical Innovation', genre: 'Jazz', signature: 'Melodic invention' },
  { name: 'Wes Montgomery', strength: 'Octave Technique', genre: 'Jazz', signature: 'Thumb picking and phrasing' },
];

export default function ImprovPage() {
  return (
    <Layout>
      <Header
        title="Guitar Improvisation & Soloing"
        subtitle="Master the art of musical expression through systematic development of improvisational skills and creative spontaneity."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/practice" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Practice
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Guitar Improvisation & Soloing</h1>
          <p className="text-xl opacity-90 mb-4">
            Develop your unique musical voice through the art of improvisation. Transform scales and theory 
            into living, breathing musical conversations that express your creative spirit.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Creative Expression</span>
            <span className="bg-white/20 px-3 py-1 rounded">Musical Conversation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Real-Time Skills</span>
            <span className="bg-white/20 px-3 py-1 rounded">Personal Style</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Core Principles</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Musical conversation:</strong> Listening and responding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Target notes:</strong> Landing on chord tones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Phrasing:</strong> Musical sentences and breathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Motif development:</strong> Repeating and varying ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Rhythmic variation:</strong> Creative timing and displacement</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Essential Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Scale vocabulary:</strong> Pentatonic, major, modal scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Arpeggio outlines:</strong> Chord progressions in melody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Call and response:</strong> Musical dialogue techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Harmonic awareness:</strong> Understanding chord changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Pentatonic Improvisation</h3>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 mb-4">
              <p className="text-purple-800 text-sm mb-3">
                Simple melodic phrase using A minor pentatonic scale over Am-F-C-G progression
              </p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 8/6 5/5 7/5 | :q 5/5 8/6 5/6 7/5 | :q 8/6 5/6 7/5 5/5 | :q 8/6 5/6 :h 5/5
                `}
                width={600}
                scale={0.8}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Call and Response Example</h3>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
              <p className="text-indigo-800 text-sm mb-3">
                Musical conversation - play a phrase, then respond with a variation
              </p>
              <VexTab 
                notation={`
                  options space=20 font-size=14
                  tabstave notation=true time=4/4
                  notes :q 5/6 7/5 5/5 8/6 | :q :8 5/6 7/5 5/5 8/6 5/6 7/5 5/5 8/6
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
              <h3 className="text-lg font-medium text-gray-800 mb-4">Daily Practice Routine</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Warm-Up (5 minutes)</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Scale patterns and sequences</li>
                    <li>• Arpeggio exercises</li>
                    <li>• Basic phrasing exercises</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Musical Application (15 minutes)</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Backing track improvisation</li>
                    <li>• Motif development exercises</li>
                    <li>• Call and response practice</li>
                    <li>• Target note exercises</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Progressive Development</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Beginner Focus</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Pentatonic scale mastery</li>
                    <li>• Simple phrasing concepts</li>
                    <li>• Basic call and response</li>
                    <li>• Blues and rock progressions</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Advanced Development</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Modal improvisation</li>
                    <li>• Complex rhythmic patterns</li>
                    <li>• Harmonic substitutions</li>
                    <li>• Personal style development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Skills Grid */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Improvisation Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {improvTypes.map((technique) => (
              <Link
                key={technique.name}
                href={technique.href}
                className={`${technique.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${technique.iconColor} mb-4`}>
                    {technique.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{technique.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{technique.description}</p>
                  <div className="flex justify-between items-center w-full text-sm">
                    <span className="bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                      {technique.level}
                    </span>
                    <span className="text-gray-500">{technique.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Masters of Improvisation */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Masters of Improvisation</h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Study these legendary improvisers to understand different approaches to spontaneous musical creation. 
            Each brought unique concepts and vocabulary to the art of improvisation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {famousImprovisers.map((player, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{player.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Strength:</span>
                    <span className="text-sm text-gray-600">{player.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Genre:</span>
                    <span className="text-sm text-gray-600">{player.genre}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-gray-700">Signature:</span>
                    <p className="text-sm text-gray-600 mt-1">{player.signature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Tips */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Professional Practice Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Continue Your Improvisation Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/lessons/practice/improv/phrasing"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Phrasing</h3>
              <p className="text-sm text-gray-600">Shape your solos with musical sentences</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/target-notes"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Target Notes</h3>
              <p className="text-sm text-gray-600">Land on strong chord tones for resolution</p>
            </Link>
            <Link 
              href="/lessons/practice/improv/scales"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-3">🎶</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Scale Improvisation</h3>
              <p className="text-sm text-gray-600">Use scales as vocabulary for expression</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
