import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const percussiveTechniques = [
  {
    name: 'Palm Slapping',
    difficulty: 'Beginner',
    description: 'Using the palm to strike strings for percussive attack',
    theory: 'Creates rhythmic punctuation without pitched content',
    technique: 'Palm placement, striking angle, pressure control',
    musicalContext: 'Modern acoustic, flamenco-inspired, rhythmic accompaniment',
    sound: 'Dull thud, rhythmic accent, percussive texture'
  },
  {
    name: 'Body Percussion',
    difficulty: 'Intermediate',
    description: 'Using guitar body as percussion instrument',
    theory: 'Adds rhythmic layer and textural variety to playing',
    technique: 'Knuckle taps, palm strikes, finger drumming on body',
    musicalContext: 'Contemporary fingerstyle, solo acoustic performance',
    sound: 'Various pitched and unpitched percussive sounds'
  },
  {
    name: 'String Slapping',
    difficulty: 'Intermediate',
    description: 'Striking strings with fingers or thumb for percussive effect',
    theory: 'Creates rhythmic emphasis and dynamic contrast',
    technique: 'Finger angle, string contact, dynamic control',
    musicalContext: 'Funk rhythms, modern acoustic styles, percussive strumming',
    sound: 'Sharp attack, percussive snap, rhythmic accent'
  },
  {
    name: 'Thumb Slapping',
    difficulty: 'Intermediate',
    description: 'Using thumb to create bass-like slap sounds',
    theory: 'Mimics bass guitar slap technique on acoustic guitar',
    technique: 'Thumb angle, follow-through, string dampening',
    musicalContext: 'Funk acoustic, modern fingerstyle, rhythm integration',
    sound: 'Bass-like thump, percussive attack, low-frequency accent'
  },
  {
    name: 'Rasgueado Percussion',
    difficulty: 'Advanced',
    description: 'Flamenco-inspired percussive strumming techniques',
    theory: 'Combines pitched strumming with percussive elements',
    technique: 'Finger rolls, nail attacks, palm integration',
    musicalContext: 'Flamenco guitar, Spanish styles, dramatic accompaniment',
    sound: 'Complex rhythmic textures, dramatic percussive accents'
  },
  {
    name: 'Harmonic Percussion',
    difficulty: 'Advanced',
    description: 'Combining natural harmonics with percussive techniques',
    theory: 'Creates bell-like tones with rhythmic precision',
    technique: 'Harmonic touch, percussive release, timing coordination',
    musicalContext: 'Contemporary fingerstyle, experimental music, textural playing',
    sound: 'Bell-like harmonics with percussive attack'
  }
];

const percussiveApplications = [
  {
    style: 'Modern Fingerstyle',
    description: 'Integration of percussion into melodic playing',
    techniques: ['Body tapping', 'String slapping', 'Harmonic percussion'],
    artists: ['Andy McKee', 'Preston Reed', 'Tommy Emmanuel'],
    characteristics: 'Seamless blend of melody, harmony, and rhythm in solo arrangements'
  },
  {
    style: 'Flamenco Percussion',
    description: 'Traditional Spanish percussive techniques',
    techniques: ['Golpe', 'Rasgueado', 'Palm strikes'],
    artists: ['Paco de Lucía', 'Vicente Amigo', 'Jesse Cook'],
    characteristics: 'Dramatic rhythmic accents supporting traditional forms and structures'
  },
  {
    style: 'Acoustic Funk',
    description: 'Funk rhythms adapted for acoustic guitar',
    techniques: ['Thumb slapping', 'String muting', 'Percussive strumming'],
    artists: ['Chet Atkins', 'Tommy Emmanuel', 'Modern funk guitarists'],
    characteristics: 'Groove-oriented playing with strong rhythmic foundation'
  },
  {
    style: 'Percussive Accompaniment',
    description: 'Rhythmic support for vocal or instrumental melody',
    techniques: ['Palm muting', 'Body percussion', 'Rhythmic strumming'],
    artists: ['Newton Faulkner', 'Kaki King', 'Contemporary acoustics'],
    characteristics: 'Supportive rhythmic texture that enhances rather than dominates'
  }
];

const bodyPercussionTechniques = [
  {
    name: 'Top Knuckle Tap',
    location: 'Upper bout near neck joint',
    sound: 'High-pitched, snare-like sound',
    technique: 'Quick knuckle strike, immediate release',
    application: 'Snare drum replacement, rhythmic accents'
  },
  {
    name: 'Palm Strike',
    location: 'Lower bout soundboard',
    sound: 'Deep, kick drum-like thump',
    technique: 'Full palm contact, controlled force',
    application: 'Bass drum replacement, strong downbeats'
  },
  {
    name: 'Side Tap',
    location: 'Guitar side/rim',
    sound: 'Rim shot-like click',
    technique: 'Fingertip or knuckle on guitar edge',
    application: 'Percussive accents, rhythmic punctuation'
  },
  {
    name: 'Bridge Mute Tap',
    location: 'Strings behind bridge',
    sound: 'Metallic, percussive click',
    technique: 'Finger tap on string behind saddle',
    application: 'Subtle percussive texture, rhythmic detail'
  }
];

const theoryConcepts = [
  {
    title: 'Rhythmic Integration',
    content: 'Percussive techniques must integrate musically with melodic and harmonic content. The percussion should enhance rather than compete with the primary musical elements.',
    examples: [
      'Percussion on weak beats creates syncopated feel',
      'Strong beat percussion reinforces harmonic rhythm',
      'Subtle percussion adds texture without distraction',
      'Dynamic percussion creates musical shape and climax'
    ]
  },
  {
    title: 'Timbral Variety',
    content: 'Different percussive techniques produce various timbres and frequencies. Understanding these colors helps create rich, varied rhythmic textures.',
    examples: [
      'High-frequency taps - snare-like, cutting through mix',
      'Low-frequency thumps - bass drum substitute',
      'Mid-range slaps - complementary rhythmic texture',
      'Harmonic percussion - bell-like, ethereal quality'
    ]
  },
  {
    title: 'Technical Coordination',
    content: 'Percussive techniques require coordination between both hands and often integration with traditional playing techniques simultaneously.',
    examples: [
      'Left hand continues fretting while right hand adds percussion',
      'Fingerpicking patterns incorporate percussive elements',
      'Strumming integrates with palm strikes and slaps',
      'Harmonic production combined with percussive release'
    ]
  }
];

export default function PercussiveTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Percussive Techniques"
        subtitle="Expand your rhythmic vocabulary with modern percussive guitar techniques"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beyond Traditional Technique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Expansion</h3>
              <p className="text-gray-600">Percussive techniques transform the guitar into a complete rhythm section, adding drums, bass, and textural elements to traditional playing approaches.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Modern Applications</h3>
              <p className="text-gray-600">Contemporary music demands rhythmic sophistication. Percussive techniques provide the tools for modern acoustic performance and solo arrangements.</p>
            </div>
          </div>
        </section>

        {/* Core Percussive Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Percussive Techniques</h2>
          <div className="grid gap-6">
            {percussiveTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{technique.name}</h3>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                      {technique.difficulty}
                    </span>
                  </div>
                  <span className="text-2xl">🥁</span>
                </div>
                
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{technique.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{technique.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Musical Context</h4>
                    <p className="text-gray-600">{technique.musicalContext}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-800 mb-1">Sound Character</h4>
                    <p className="text-gray-600">{technique.sound}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Body Percussion Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Body Percussion Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bodyPercussionTechniques.map((technique, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">{technique.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-red-900">Location:</span>
                    <span className="text-red-700 ml-2">{technique.location}</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Sound:</span>
                    <span className="text-red-700 ml-2">{technique.sound}</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Technique:</span>
                    <span className="text-red-700 ml-2">{technique.technique}</span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Application:</span>
                    <span className="text-red-700 ml-2">{technique.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Percussive Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Style Applications</h2>
          <div className="grid gap-6">
            {percussiveApplications.map((application, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{application.style}</h3>
                <p className="text-gray-700 mb-4">{application.description}</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Key Techniques</h4>
                    <ul className="text-gray-600">
                      {application.techniques.map((tech, idx) => (
                        <li key={idx}>• {tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Notable Artists</h4>
                    <ul className="text-gray-600">
                      {application.artists.map((artist, idx) => (
                        <li key={idx}>• {artist}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Characteristics</h4>
                    <p className="text-gray-600">{application.characteristics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Percussive Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">{concept.title}</h3>
                <p className="text-orange-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-orange-900 mb-2">Key Applications:</h4>
                  <ul className="space-y-1 text-sm text-orange-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Percussive Development Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Basic Percussion</h3>
              <p className="text-green-700 text-sm">Master simple palm slaps and body taps while maintaining basic strumming patterns.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Coordination</h3>
              <p className="text-yellow-700 text-sm">Develop hand independence to combine percussive elements with fingerpicking patterns.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-orange-900 mb-2">Musical Integration</h3>
              <p className="text-orange-700 text-sm">Apply percussive techniques musically within song contexts and arrangements.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-red-900 mb-2">Advanced Techniques</h3>
              <p className="text-red-700 text-sm">Master complex rasgueado patterns and harmonic percussion for sophisticated textures.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">🎸 Case Study: "Drifting" by Andy McKee</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-red-800 mb-2">Percussive Elements</h4>
              <p className="text-red-700 mb-3">Combines body percussion, string slapping, and harmonic techniques in a seamless musical arrangement. Each percussive element serves the melody and creates complete musical texture.</p>
              <p className="text-red-700"><strong>Techniques:</strong> Body tapping for drum sounds, string slapping for rhythmic accents, harmonics for textural color.</p>
            </div>
            <div>
              <h4 className="font-medium text-red-800 mb-2">Musical Function</h4>
              <p className="text-red-700 mb-3">Percussion supports rather than dominates the melodic content. The percussive elements create a complete band arrangement on solo guitar.</p>
              <p className="text-red-700"><strong>Learning Value:</strong> Demonstrates how percussive techniques can enhance musicality rather than just showing technical ability.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🎯 Practice Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Technical Development</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Start with simple palm slaps while strumming basic chords</li>
                <li>• Practice body percussion separately before combining with playing</li>
                <li>• Use metronome to develop precise percussive timing</li>
                <li>• Focus on consistent sound production and dynamic control</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Musical Application</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Apply percussion to simple songs before complex arrangements</li>
                <li>• Listen to how percussion serves the overall musical texture</li>
                <li>• Practice with backing tracks to understand rhythmic context</li>
                <li>• Record yourself to evaluate musical balance and effectiveness</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques/fingerpicking"
                className="px-4 py-2 bg-white border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors"
              >
                ← Fingerpicking
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/bending"
                className="px-4 py-2 bg-white border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Bending & Vibrato →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
