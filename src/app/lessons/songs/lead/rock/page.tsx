import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rockTechniques = [
  {
    technique: 'Power Chord Melodies',
    description: 'Using power chord shapes to create melodic lead lines',
    application: 'Combine single notes with power chord shapes for thick, powerful melodies',
    examples: 'AC/DC, Black Sabbath, early Metallica',
    practiceIdea: 'Play pentatonic scales using power chord fingerings where possible'
  },
  {
    technique: 'Pentatonic Mastery',
    description: 'Advanced application of minor and major pentatonic scales',
    application: 'Five positions, string skipping, sequences, connecting patterns',
    examples: 'Jimmy Page, Slash, Kirk Hammett, Zakk Wylde',
    practiceIdea: 'Learn all five pentatonic positions and practice connecting them smoothly'
  },
  {
    technique: 'Aggressive Phrasing',
    description: 'Rhythmic attack and note emphasis that creates rock attitude',
    application: 'Hard pick attack, palm muting, rhythmic accents, staccato playing',
    examples: 'Angus Young, Tony Iommi, James Hetfield lead lines',
    practiceIdea: 'Practice same licks with different attack intensities and rhythmic feels'
  },
  {
    technique: 'High-Gain Techniques',
    description: 'Using distortion and overdrive to create sustain and harmonic content',
    application: 'Pinch harmonics, controlled feedback, sustain management',
    examples: 'Dimebag Darrell, Randy Rhoads, Eddie Van Halen',
    practiceIdea: 'Practice with clean tone first, then add gain to hear the difference'
  }
];

const rockScales = [
  {
    scale: 'Minor Pentatonic',
    degrees: '1-♭3-4-5-♭7',
    character: 'Core rock sound',
    usage: 'Foundation for most rock lead playing, works over minor and major progressions',
    variations: ['Add blue note (♭5)', 'String skipping patterns', 'Sequence variations']
  },
  {
    scale: 'Major Pentatonic',
    degrees: '1-2-3-5-6',
    character: 'Brighter, country-rock',
    usage: 'Over major chord progressions, Southern rock, classic rock ballads',
    variations: ['Combined with minor pentatonic', 'Country-style bending', 'Hybrid picking']
  },
  {
    scale: 'Natural Minor',
    degrees: '1-2-♭3-4-5-♭6-♭7',
    character: 'Dark, moody',
    usage: 'Metal, heavy rock, dramatic passages, minor key songs',
    variations: ['Harmonic minor for exotic sound', 'Dorian for brighter minor', 'Melodic minor for jazz-rock']
  },
  {
    scale: 'Mixolydian Mode',
    degrees: '1-2-3-4-5-6-♭7',
    character: 'Dominant, bluesy-major',
    usage: 'Over dominant 7th chords, Southern rock, blues-rock fusion',
    variations: ['Add blue notes', 'Combine with pentatonic', 'Use over power chords']
  }
];

const rockProgressions = [
  {
    name: 'I-♭VII-IV Progression',
    example: 'A-G-D (in A)',
    character: 'Anthemic, powerful',
    scales: ['A minor pentatonic', 'A Mixolydian'],
    approach: 'Emphasize power and resolution, use power chord melodies',
    songs: '"Sweet Child O\' Mine", "TNT", many rock anthems'
  },
  {
    name: 'i-♭VI-♭VII Progression',
    example: 'Am-F-G (in Am)',
    character: 'Dark, emotional',
    scales: ['A natural minor', 'A minor pentatonic'],
    approach: 'Use minor scales, emphasize emotional bending and vibrato',
    songs: '"Stairway to Heaven" verses, "Nothing Else Matters"'
  },
  {
    name: 'I-V-vi-IV Progression',
    example: 'G-D-Em-C',
    character: 'Pop-rock, emotional',
    scales: ['G major pentatonic', 'E minor pentatonic'],
    approach: 'Target chord tones, use major pentatonic over major chords',
    songs: '"Let It Be", "Don\'t Stop Believin\'", many ballads'
  },
  {
    name: 'Modal Rock Progressions',
    example: 'Various modes over static bass',
    character: 'Modern, atmospheric',
    scales: ['Modal scales matching the progression'],
    approach: 'Use specific modes for each section, create modal color',
    songs: 'Tool, Dream Theater, progressive rock'
  }
];

const rockSubgenres = [
  {
    style: 'Classic Rock',
    period: '1960s-1980s',
    characteristics: 'Pentatonic-based, blues influence, moderate gain',
    keyPlayers: 'Jimmy Page, David Gilmour, Jimi Hendrix, Eric Clapton',
    techniques: 'String bending, vibrato, feedback control, blues-rock fusion',
    equipment: 'Marshall amps, Les Pauls, Strats, moderate overdrive'
  },
  {
    style: 'Heavy Metal',
    period: '1970s-present',
    characteristics: 'High gain, fast playing, darker harmony, power chords',
    keyPlayers: 'Tony Iommi, Randy Rhoads, Yngwie Malmsteen, Dimebag Darrell',
    techniques: 'Palm muting, alternate picking, sweep picking, harmonic minor scales',
    equipment: 'High-gain amps, humbucker pickups, effects pedals'
  },
  {
    style: 'Hard Rock',
    period: '1970s-1990s',
    characteristics: 'Aggressive but melodic, anthemic solos, strong hooks',
    keyPlayers: 'Angus Young, Slash, Joe Perry, Eddie Van Halen',
    techniques: 'Power chord melodies, pentatonic mastery, tapping, aggressive phrasing',
    equipment: 'Marshall stacks, Gibson guitars, moderate to high gain'
  },
  {
    style: 'Grunge/Alternative',
    period: '1990s',
    characteristics: 'Raw tone, simple but effective, emotional expression',
    keyPlayers: 'Jerry Cantrell, Kim Thayil, Billy Corgan, Kurt Cobain',
    techniques: 'Power chords, simple solos, heavy use of effects, drop tunings',
    equipment: 'Distortion pedals, unconventional guitars, raw production'
  }
];

export default function RockLeadPage() {
  return (
    <Layout>
      <Header
        title="Rock Lead Guitar Techniques"
        subtitle="Master rock lead techniques including power chord melodies, pentatonic applications, and aggressive phrasing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rock Lead Guitar: Power Meets Melody</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🤘 Attitude and Aggression</h3>
              <p className="text-gray-600 mb-3">
                Rock lead guitar combines the expressiveness of blues with the power and aggression that defines rock music. It's about making a statement.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Key Elements:</strong> Strong attack, pentatonic foundation, power chord integration, controlled aggression
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">⚡ Power and Precision</h3>
              <p className="text-gray-600 mb-3">
                Rock solos need to cut through a powerful rhythm section. This requires precise technique, strong tone, and strategic note choices.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Balance:</strong> Technical skill with emotional expression, complexity with memorability, power with musicality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rock Lead Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Rock Lead Techniques</h2>
          <div className="space-y-6">
            {rockTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{technique.technique}</h3>
                    <p className="text-sm text-gray-600">{technique.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{technique.application}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Key Players:</h4>
                    <p className="text-sm text-gray-500">{technique.examples}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Practice:</h4>
                    <p className="text-xs text-gray-500 italic">{technique.practiceIdea}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rock Scales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Rock Scales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rockScales.map((scale, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-orange-900">{scale.scale}</h3>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                    {scale.character}
                  </span>
                </div>
                <p className="text-orange-800 font-mono text-sm mb-3">{scale.degrees}</p>
                <p className="text-orange-700 text-sm mb-4">{scale.usage}</p>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Variations:</h4>
                  <ul className="space-y-1">
                    {scale.variations.map((variation, i) => (
                      <li key={i} className="text-xs text-orange-600">• {variation}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rock Progressions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Rock Progressions & Scale Applications</h2>
          <div className="space-y-6">
            {rockProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{progression.name}</h3>
                    <p className="text-sm text-blue-600 font-mono">{progression.example}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Character:</h4>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      {progression.character}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Best Scales:</h4>
                    <div className="space-y-1">
                      {progression.scales.map((scale, i) => (
                        <span key={i} className="block text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {scale}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Approach:</h4>
                    <p className="text-sm text-gray-600">{progression.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-500 italic">{progression.songs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rock Subgenres */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rock Lead Styles Through the Decades</h2>
          <div className="space-y-6">
            {rockSubgenres.map((style, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-6 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{style.style}</h3>
                    <p className="text-sm text-blue-600">{style.period}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Sound:</h4>
                    <p className="text-sm text-gray-600">{style.characteristics}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Key Players:</h4>
                    <p className="text-xs text-gray-500">{style.keyPlayers}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Techniques:</h4>
                    <p className="text-xs text-gray-600">{style.techniques}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Equipment:</h4>
                    <p className="text-xs text-gray-500">{style.equipment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Power Chord Integration */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">⚡ Power Chord Integration</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Power Chord Melodies</h3>
              <p className="text-green-700 text-sm mb-3">
                Use power chord shapes (root + 5th) to create thick, powerful melodic lines that cut through heavy mixes.
              </p>
              <p className="text-xs text-green-600 italic">
                Common in AC/DC, Black Sabbath, and early metal
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Octave Displacement</h3>
              <p className="text-green-700 text-sm mb-3">
                Play the same note in different octaves using power chord fingerings for dramatic effect and fuller sound.
              </p>
              <p className="text-xs text-green-600 italic">
                Creates powerful, anthemic quality
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Single Note + Power Chord</h3>
              <p className="text-green-700 text-sm mb-3">
                Alternate between single-note lines and power chord punctuation for dynamic contrast.
              </p>
              <p className="text-xs text-green-600 italic">
                Builds intensity and creates rhythmic interest
              </p>
            </div>
          </div>
        </section>

        {/* Famous Rock Solos Analysis */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎸 Iconic Rock Solo Analysis</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">"Sweet Child O' Mine" - Guns N' Roses (Slash)</h3>
              <p className="text-purple-700 text-sm">
                <strong>Technique:</strong> G minor pentatonic with chromatic passing tones, wide vibrato, aggressive bending
                <br/><strong>Structure:</strong> Builds from simple melody to complex runs, excellent use of space and phrasing
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">"Eruption" - Van Halen (Eddie Van Halen)</h3>
              <p className="text-purple-700 text-sm">
                <strong>Technique:</strong> Two-hand tapping, tremolo picking, harmonics, revolutionary approach
                <br/><strong>Impact:</strong> Redefined what rock lead guitar could be, introduced new techniques to mainstream
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">"Highway to Hell" - AC/DC (Angus Young)</h3>
              <p className="text-purple-700 text-sm">
                <strong>Technique:</strong> Pure pentatonic mastery, aggressive attack, simple but effective phrasing
                <br/><strong>Lesson:</strong> Proves that technical complexity isn't required for memorable, powerful solos
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-808 mb-2">"Crazy Train" - Ozzy Osbourne (Randy Rhoads)</h3>
              <p className="text-purple-700 text-sm">
                <strong>Technique:</strong> Classical influence, harmonic minor scales, precise alternate picking
                <br/><strong>Innovation:</strong> Brought classical music theory and technique to heavy metal
              </p>
            </div>
          </div>
        </section>

        {/* Tone and Equipment */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🔊 Rock Lead Tone Essentials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Gain Structure</h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• <strong>Classic Rock:</strong> Moderate overdrive, tube amp distortion</li>
                <li>• <strong>Hard Rock:</strong> More gain, tighter bass response</li>
                <li>• <strong>Metal:</strong> High gain, noise gate, precision</li>
                <li>• <strong>Balance:</strong> Enough gain for sustain, not so much you lose clarity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">EQ Considerations</h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• <strong>Mids:</strong> Cut through the mix, don't scoop too much</li>
                <li>• <strong>Treble:</strong> Clarity and bite, but avoid harshness</li>
                <li>• <strong>Bass:</strong> Tight and controlled, avoid muddiness</li>
                <li>• <strong>Presence:</strong> Helps solos sit on top of the mix</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Essential Effects</h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• <strong>Overdrive/Distortion:</strong> Core rock sound</li>
                <li>• <strong>Delay:</strong> Adds depth and space</li>
                <li>• <strong>Reverb:</strong> Atmosphere and sustain</li>
                <li>• <strong>Wah:</strong> Expression and filtering</li>
                <li>• <strong>Chorus:</strong> Thickness for clean sections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎯 Rock Lead Practice Routine</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-indigo-800 mb-2">Pentatonic Mastery</h3>
              <p className="text-indigo-700 text-sm">
                Master all five positions of minor and major pentatonic. Practice connecting patterns smoothly.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-indigo-800 mb-2">Rhythm Integration</h3>
              <p className="text-indigo-700 text-sm">
                Practice lead lines that incorporate rhythmic elements. Learn to play lead that supports the song's groove.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-indigo-800 mb-2">Solo Learning</h3>
              <p className="text-indigo-700 text-sm">
                Learn classic rock solos note-for-note. Analyze phrasing, tone, and how they fit the song.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-indigo-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-indigo-800 mb-2">Jamming</h3>
              <p className="text-indigo-700 text-sm">
                Jam over rock backing tracks. Focus on creating memorable, singable melodies with attitude.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/jazz"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Jazz Lead Concepts →
              </Link>
              <Link 
                href="/lessons/songs/lead/blues"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Blues Lead Techniques
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
