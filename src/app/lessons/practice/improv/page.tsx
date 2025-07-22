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
        subtitle="Master the art of musical expression through systematic development of improvisational skills"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Master Guitar Improvisation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Develop your unique musical voice through the art of improvisation. From basic phrasing concepts 
              to advanced harmonic techniques, learn to express yourself spontaneously and musically. 
              Transform scales and theory into living, breathing musical conversations.
            </p>
          </div>

          {/* Why Improvisation Matters */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Improvisation Is Essential</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {improvBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Practice Tips</h2>
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
          </section>

          {/* Progressive Learning Path */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Improvisation Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl mb-4 text-center">🌱</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Foundation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Learn pentatonic scales thoroughly</li>
                    <li>• Practice basic phrasing concepts</li>
                    <li>• Understand target notes and resolution</li>
                    <li>• Simple call and response exercises</li>
                    <li>• Basic blues and rock progressions</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl mb-4 text-center">🌿</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Development</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Add major and modal scales</li>
                    <li>• Develop motifs and variations</li>
                    <li>• Incorporate chord tone concepts</li>
                    <li>• Explore rhythmic displacement</li>
                    <li>• Study jazz and fusion vocabulary</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl mb-4 text-center">🌳</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mastery</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced harmonic substitutions</li>
                    <li>• Complex rhythmic patterns</li>
                    <li>• Personal style development</li>
                    <li>• Genre-specific approaches</li>
                    <li>• Real-time composition skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Improvisation Skills</h2>
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
          </section>

          {/* Masters of Improvisation */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Masters of Improvisation</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Study these legendary improvisers to understand different approaches to spontaneous musical creation. 
                Each brought unique concepts and vocabulary to the art of improvisation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {famousImprovisers.map((player, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
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
          </section>

          {/* Practice Philosophy */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Art of Musical Conversation</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Improvisation is not about playing fast or showing off technique—it's about having a musical conversation. 
                  Like any language, it requires vocabulary (scales, arpeggios), grammar (harmony, rhythm), and most importantly, 
                  something meaningful to say.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Practice Routine</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technical Foundation (10 min)</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Scale patterns and sequences</li>
                        <li>• Arpeggio exercises</li>
                        <li>• Technique integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Musical Application (15 min)</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Backing track improvisation</li>
                        <li>• Motif development exercises</li>
                        <li>• Call and response practice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
