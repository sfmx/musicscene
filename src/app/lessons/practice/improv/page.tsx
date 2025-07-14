import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const improvTypes = [
  {
    name: 'Phrasing',
    icon: <span style={{ fontSize: 32 }}>🗣️</span>,
    href: '/lessons/practice/improv/phrasing',
    description: 'Shape your solos with musical sentences and pauses.',
  },
  {
    name: 'Call & Response',
    icon: <span style={{ fontSize: 32 }}>🔁</span>,
    href: '/lessons/practice/improv/call-response',
    description: 'Create conversations in your improvisation.',
  },
  {
    name: 'Motif Development',
    icon: <span style={{ fontSize: 32 }}>🎼</span>,
    href: '/lessons/practice/improv/motif-development',
    description: 'Build solos by repeating and varying short ideas.',
  },
  {
    name: 'Target Notes',
    icon: <span style={{ fontSize: 32 }}>🎯</span>,
    href: '/lessons/practice/improv/target-notes',
    description: 'Land on strong chord tones for melodic solos.',
  },
  {
    name: 'Improvising with Scales',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/improv/scales',
    description: 'Use major, minor, and modal scales for soloing.',
  },
  {
    name: 'Improvising with Arpeggios',
    icon: <span style={{ fontSize: 32 }}>🔔</span>,
    href: '/lessons/practice/improv/arpeggios',
    description: 'Outline chords and add color to your lines.',
  },
  {
    name: 'Rhythmic Variation',
    icon: <span style={{ fontSize: 32 }}>🥁</span>,
    href: '/lessons/practice/improv/rhythm',
    description: 'Make your solos interesting with rhythmic ideas.',
  },
];

export default function ImprovPage() {
  return (
    <Layout>
      <Header
        title="Guitar Improvisation & Soloing"
        subtitle="Master the art of musical expression - from basic phrasing to advanced soloing techniques"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Improvisation: Your Voice on Guitar
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Improvisation is where technique meets creativity. Learn to express yourself musically 
              through scales, phrasing, rhythmic ideas, and the language of musical conversation.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2">What You'll Master:</h3>
              <ul className="text-indigo-700 space-y-1">
                <li>• Musical phrasing and storytelling</li>
                <li>• Scale and arpeggio application</li>
                <li>• Rhythmic variation and groove</li>
                <li>• Call and response techniques</li>
                <li>• Motif development and composition</li>
                <li>• Professional soloing concepts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Improvisation Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Musical Building Blocks</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Scales:</strong> The vocabulary of improvisation</li>
                <li>• <strong>Arpeggios:</strong> Chord tones for strong melodic lines</li>
                <li>• <strong>Phrasing:</strong> Musical sentences and breathing</li>
                <li>• <strong>Rhythm:</strong> The groove and pulse of your ideas</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Creative Development</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Listening:</strong> Learn from the masters</li>
                <li>• <strong>Transcription:</strong> Copy great solos note-for-note</li>
                <li>• <strong>Practice:</strong> Develop muscle memory and ideas</li>
                <li>• <strong>Application:</strong> Use concepts in real musical situations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Improvisation Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {improvTypes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
              >
                <div className="mb-4 text-purple-600">{item.icon}</div>
                <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Practice Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Building Your Improvisational Voice</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Progressive Learning Path</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Foundation (Beginner)</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Learn pentatonic scales</li>
                  <li>• Practice basic phrasing</li>
                  <li>• Understand target notes</li>
                  <li>• Simple call and response</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Development (Intermediate)</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Add major and modal scales</li>
                  <li>• Develop motifs and variations</li>
                  <li>• Incorporate arpeggios</li>
                  <li>• Explore rhythmic concepts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Mastery (Advanced)</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Advanced harmonic concepts</li>
                  <li>• Complex rhythmic patterns</li>
                  <li>• Personal style development</li>
                  <li>• Genre-specific approaches</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Improvisers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Masters of Improvisation</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Learn from the Legends</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Blues & Rock Masters</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>B.B. King:</strong> Expressive phrasing and vibrato</li>
                  <li>• <strong>Eric Clapton:</strong> Emotional storytelling</li>
                  <li>• <strong>David Gilmour:</strong> Space and atmosphere</li>
                  <li>• <strong>Stevie Ray Vaughan:</strong> Powerful blues expression</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Jazz & Fusion Innovators</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>Wes Montgomery:</strong> Octave technique and phrasing</li>
                  <li>• <strong>Pat Metheny:</strong> Harmonic sophistication</li>
                  <li>• <strong>John Scofield:</strong> Modern jazz vocabulary</li>
                  <li>• <strong>Allan Holdsworth:</strong> Advanced harmonic concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
