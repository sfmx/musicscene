import type { Metadata } from 'next';
import Link from 'next/link';
import StaffFretboardExplorer from '@/components/Theory/StaffFretboardExplorer';

export const metadata: Metadata = {
  title: 'How to Read Sheet Music for Guitar | Standard Notation Guide | MusicScene',
  description: 'Master reading music notes on the staff for guitar. Learn lines, spaces, ledger lines, rhythm values, key signatures, and open position note mapping with our interactive staff-to-fretboard explorer.',
  openGraph: {
    title: 'How to Read Sheet Music for Guitar | MusicScene',
    description: 'Bridge the gap between tab and standard notation. Interactive staff-to-fretboard explorer, open position mapping, rhythm values, and sight-reading rules.',
    url: 'https://musicscene.com.au/lessons/theory/reading-sheet-music',
    siteName: 'MusicScene',
    images: [{ url: 'https://musicscene.com.au/images/og-default.png', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Read Sheet Music for Guitar | MusicScene',
    description: 'Learn to read music notes on the staff for guitar. Connect standard notation directly to the fretboard.',
  },
};

export default function ReadingSheetMusicPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/lessons" className="hover:text-amber-500 transition-colors">Lessons</Link>
          <span>/</span>
          <Link href="/lessons/theory" className="hover:text-amber-500 transition-colors">Theory</Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">Reading Sheet Music</span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold tracking-wide uppercase">
            <span>Essential Foundation</span>
            <span>•</span>
            <span>Staff &amp; Fretboard Literacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            How to Read Sheet Music on Guitar
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Tablature tells you <span className="font-semibold text-amber-600 dark:text-amber-400">which fret to press</span>, but standard sheet music tells you <span className="font-semibold text-emerald-600 dark:text-emerald-400">what the sound is, how long it lasts, and how it connects to every other musician in the room</span>. This guide bridges the gap between tablature numbers and genuine musical literacy.
          </p>
        </header>

        {/* Interactive Staff-to-Fretboard Explorer (Flagship Tool) */}
        <section aria-labelledby="interactive-explorer-heading" className="scroll-mt-8">
          <h2 id="interactive-explorer-heading" className="sr-only">Interactive Staff-to-Fretboard Explorer</h2>
          <StaffFretboardExplorer />
        </section>

        {/* Quick Navigation Anchor Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: '1. Staff & Clef Anatomy', href: '#module-1-anatomy' },
            { label: '2. The Octave Secret', href: '#module-2-transposition' },
            { label: '3. Open Position Map', href: '#module-3-open-position' },
            { label: '4. Rhythm & Note Values', href: '#module-4-rhythm' },
            { label: '5. Key Signatures', href: '#module-5-key-signatures' },
            { label: '6. Shape & Interval Reading', href: '#module-6-intervals' },
            { label: '7. The 3 Golden Rules', href: '#module-7-golden-rules' },
            { label: '8. Sight-Reading Trainer', href: '/practice/sight-reading' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between group shadow-xs"
            >
              <span>{item.label}</span>
              <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          ))}
        </div>

        {/* Module 1: The Anatomy of the Musical Staff */}
        <section id="module-1-anatomy" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 1</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The Anatomy of the Musical Staff</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Standard music notation is built upon a <strong>5-line grid called the staff</strong>. Pitch operates vertically: notes placed higher on the staff produce higher frequencies, while notes placed lower produce lower frequencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The 5 Lines Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  <span>The 5 Lines (Bottom to Top)</span>
                </h3>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                  E - G - B - D - F
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Count the lines starting from the lowest line (Line 1) up to the highest line (Line 5):
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Line 5 (Top):</strong> F5</span>
                  <span className="text-slate-400"><strong>F</strong>ine</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Line 4:</strong> D5</span>
                  <span className="text-slate-400"><strong>D</strong>oes</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Line 3 (Middle):</strong> B4</span>
                  <span className="text-slate-400"><strong>B</strong>oy</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Line 2:</strong> G4 (Treble Clef Center)</span>
                  <span className="text-slate-400"><strong>G</strong>ood</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>Line 1 (Bottom):</strong> E4</span>
                  <span className="text-slate-400"><strong>E</strong>very</span>
                </li>
              </ul>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                💡 <strong>Classic Mnemonic:</strong> <em>Every Good Boy Does Fine</em> (or <em>Elvis Guitar Broke Down Friday</em>).
              </div>
            </div>

            {/* The 4 Spaces Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>The 4 Spaces (Bottom to Top)</span>
                </h3>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  F - A - C - E
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The spaces between the lines spell the word <strong>FACE</strong> from bottom to top:
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Space 4 (Top):</strong> E5</span>
                  <span className="text-slate-400">1st String (High E) Open</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Space 3:</strong> C5</span>
                  <span className="text-slate-400">2nd String (B), Fret 1</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span><strong>Space 2:</strong> A4</span>
                  <span className="text-slate-400">3rd String (G), Fret 2</span>
                </li>
                <li className="flex items-center justify-between">
                  <span><strong>Space 1 (Bottom):</strong> F4</span>
                  <span className="text-slate-400">4th String (D), Fret 3</span>
                </li>
              </ul>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                💡 <strong>Memory Rule:</strong> <em>The spaces are in your FACE.</em> Together, lines and spaces alternate alphabetically: E - F - G - A - B - C - D - E - F.
              </div>
            </div>
          </div>
        </section>

        {/* Module 2: The Guitar Octave Transposition Secret */}
        <section id="module-2-transposition" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The Guitar Octave Transposition Secret</h2>
          
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 dark:text-amber-100 space-y-3">
            <h3 className="font-bold text-lg text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <span>⚠️ Why Guitar Sheet Music Looks Different From Piano</span>
            </h3>
            <p className="text-sm leading-relaxed">
              The guitar is a <strong>transposing instrument</strong>. Standard guitar notation is written in the <strong>Treble Clef</strong>, but the guitar sounds <strong>one octave lower than written</strong> (often denoted by a small &apos;8&apos; or &apos;8vb&apos; underneath the treble clef symbol).
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-amber-200 leading-relaxed">
              If guitar music were written at true concert pitch, middle C would sit in the middle of the staff, and low E (string 6 open) would require <strong>6 ledger lines below the staff</strong> into bass clef territory. By transposing up one octave, the guitar full 3.5-octave range fits comfortably on a single treble clef staff without needing a dual piano grand staff.
            </p>
          </div>
        </section>

        {/* Module 3: Open Position (Position I) Fretboard-to-Staff Mapping */}
        <section id="module-3-open-position" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 3</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Open Position (Position I): Two Strings at a Time</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            The secret to learning sight-reading without feeling overwhelmed is learning <strong>Position I (frets 0 to 3)</strong> two strings at a time. In open position, each fret has only one designated finger:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strings 1 & 2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">High Register</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Strings 1 (E) &amp; 2 (B)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                The top register of the staff. These notes sit on the middle and upper lines.
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-2">
                <div className="font-semibold text-slate-800 dark:text-slate-200">1st String (High E):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open E:</strong> Space 4 (Top space)</div>
                  <div>• <strong>Fret 1 (F):</strong> Line 5 (Top line)</div>
                  <div>• <strong>Fret 3 (G):</strong> Space sitting on top of Line 5</div>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 pt-2">2nd String (B):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open B:</strong> Line 3 (Middle line)</div>
                  <div>• <strong>Fret 1 (C):</strong> Space 3</div>
                  <div>• <strong>Fret 3 (D):</strong> Line 4</div>
                </div>
              </div>
            </div>

            {/* Strings 3 & 4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Middle Register</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Strings 3 (G) &amp; 4 (D)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                The center of the staff. Note how open G lands right on Line 2 (the G-clef target).
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-2">
                <div className="font-semibold text-slate-800 dark:text-slate-200">3rd String (G):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open G:</strong> Line 2 (G Clef Anchor)</div>
                  <div>• <strong>Fret 2 (A):</strong> Space 2</div>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 pt-2">4th String (D):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open D:</strong> Space hanging below Line 1</div>
                  <div>• <strong>Fret 2 (E):</strong> Line 1 (Bottom line)</div>
                  <div>• <strong>Fret 3 (F):</strong> Space 1</div>
                </div>
              </div>
            </div>

            {/* Strings 5 & 6 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Bass Register</span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Strings 5 (A) &amp; 6 (Low E)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                These notes live on ledger lines below the staff. Notice where Middle C sits.
              </p>
              <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-2">
                <div className="font-semibold text-slate-800 dark:text-slate-200">5th String (A):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open A:</strong> 2nd ledger line below</div>
                  <div>• <strong>Fret 2 (B):</strong> Space below 1st ledger line</div>
                  <div>• <strong>Fret 3 (C):</strong> 1st ledger line (Middle C)</div>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 pt-2">6th String (Low E):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open Low E:</strong> 3rd ledger line below</div>
                  <div>• <strong>Fret 1 (F):</strong> Space below 2nd ledger line</div>
                  <div>• <strong>Fret 3 (G):</strong> 2nd ledger line below</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module 4: Rhythm & Note Values (Where Tab Fails) */}
        <section id="module-4-rhythm" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 4</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Rhythm &amp; Note Values (Where Tab Completely Fails)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            The single greatest advantage standard notation has over raw tablature is that timing, note length, and rests are mathematically explicit. You never have to guess when a note starts or when it must cut off.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200">
                  <th className="p-3 font-bold">Note Symbol</th>
                  <th className="p-3 font-bold">Name (US / UK)</th>
                  <th className="p-3 font-bold">Duration (in 4/4 time)</th>
                  <th className="p-3 font-bold">Counting Syllable</th>
                  <th className="p-3 font-bold">Equivalent Rest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 text-lg font-bold">𝅝</td>
                  <td className="p-3 font-semibold">Whole Note (Semibreve)</td>
                  <td className="p-3">4 full beats</td>
                  <td className="p-3 font-mono">&quot;1 - 2 - 3 - 4&quot;</td>
                  <td className="p-3">Box hanging under Line 4</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg font-bold">𝅗𝅥</td>
                  <td className="p-3 font-semibold">Half Note (Minim)</td>
                  <td className="p-3">2 beats</td>
                  <td className="p-3 font-mono">&quot;1 - 2&quot; or &quot;3 - 4&quot;</td>
                  <td className="p-3">Box sitting on Line 3</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg font-bold">𝅘𝅥</td>
                  <td className="p-3 font-semibold">Quarter Note (Crotchet)</td>
                  <td className="p-3">1 beat</td>
                  <td className="p-3 font-mono">&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;</td>
                  <td className="p-3">Squiggly lightning bolt symbol</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg font-bold">𝅘𝅥𝅮</td>
                  <td className="p-3 font-semibold">Eighth Note (Quaver)</td>
                  <td className="p-3">1/2 beat</td>
                  <td className="p-3 font-mono">&quot;1 &amp; 2 &amp; 3 &amp; 4 &amp;&quot;</td>
                  <td className="p-3">Single flag rest (looks like a 7)</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg font-bold">𝅘𝅥𝅯</td>
                  <td className="p-3 font-semibold">Sixteenth Note (Semiquaver)</td>
                  <td className="p-3">1/4 beat</td>
                  <td className="p-3 font-mono">&quot;1 e &amp; a 2 e &amp; a&quot;</td>
                  <td className="p-3">Double flag rest</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-amber-500">The Dot Rule (Dotted Notes):</span>
              <p className="text-slate-600 dark:text-slate-300">
                A dot directly following any note increases its duration by <strong>50%</strong>. For example, a dotted half note is 2 beats + 1 beat = <strong>3 beats</strong>. A dotted quarter note is 1 beat + 1/2 beat = <strong>1.5 beats</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-emerald-500">The Tie Rule:</span>
              <p className="text-slate-600 dark:text-slate-300">
                A curved line connecting two identical pitches means: <em>hold the first note through the value of both notes without re-striking</em>. Ties let notes cross barlines seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Module 5: Key Signatures & Accidentals */}
        <section id="module-5-key-signatures" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 5</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Key Signatures &amp; Accidentals</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Rather than writing a sharp (♯) or flat (♭) symbol next to every single note, music specifies a <strong>Key Signature</strong> at the beginning of each line right after the treble clef. This tells you which notes are permanently altered throughout the entire song:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500 font-extrabold text-base">♯</span>
                <span>The Order of Sharps (Circle of Fifths)</span>
              </h3>
              <div className="font-mono text-amber-500 font-bold text-sm">F - C - G - D - A - E - B</div>
              <p className="text-slate-600 dark:text-slate-400">
                Mnemonic: <em>Father Charles Goes Down And Ends Battle</em>.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>Guitar Reading Trick:</strong> For sharp key signatures, find the <em>last sharp on the right</em> and go up one half step to identify the key! (e.g. 1 sharp is F#; up half step = <strong>G Major</strong>).
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-blue-500 font-extrabold text-base">♭</span>
                <span>The Order of Flats (Circle of Fourths)</span>
              </h3>
              <div className="font-mono text-blue-500 font-bold text-sm">B - E - A - D - G - C - F</div>
              <p className="text-slate-600 dark:text-slate-400">
                Notice it is the exact reverse of the sharps: <em>BEAD - Greatest Common Factor</em>.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <strong>Guitar Reading Trick:</strong> For flat key signatures, the <em>second-to-last flat</em> is the name of the key! (e.g. 2 flats are Bb and Eb; second-to-last is <strong>Bb Major</strong>).
              </div>
            </div>
          </div>
        </section>

        {/* Module 6: Reading Intervals & Shapes (Fluent Sight-Reading) */}
        <section id="module-6-intervals" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 6</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">How Fluent Musicians Actually Read (Shape &amp; Interval Recognition)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Beginners decode sheet music like a toddler sounding out letters: &quot;E... then G... then B&quot;. But fluent musicians read <strong>shapes, intervals, and contours</strong>, exactly the way you read words on this page without spelling every letter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <div className="font-bold text-sm text-slate-900 dark:text-white">Steps (2nds)</div>
              <p className="text-slate-600 dark:text-slate-300">
                Moving from a <strong>line to the immediately adjacent space</strong> (or space to line).
              </p>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium">
                Action: Play the next adjacent note in the scale. Zero finger skipping.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <div className="font-bold text-sm text-slate-900 dark:text-white">Skips (3rds)</div>
              <p className="text-slate-600 dark:text-slate-300">
                Moving from a <strong>line to the next line</strong> (or space to the next space).
              </p>
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                Action: Skip one scale degree (like C to E, or G to B). This is the building block of chords!
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <div className="font-bold text-sm text-slate-900 dark:text-white">Triad Snowmen</div>
              <p className="text-slate-600 dark:text-slate-300">
                Three notes stacked vertically like a snowman (line-line-line or space-space-space).
              </p>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-medium">
                Action: Immediate root-position triad (Root, 3rd, 5th). Recognize the shape as a chord grip.
              </div>
            </div>
          </div>
        </section>

        {/* Module 7: The 3 Golden Rules of Guitar Sight-Reading */}
        <section id="module-7-golden-rules" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 7</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The 3 Golden Rules of Guitar Sight-Reading</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-lg">1</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Never Look Down at Your Hands</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The moment your eyes leave the music to look at your fretboard, you lose your place on the page. Trust your muscle memory in Open Position. Keep your eyes anchored to the staff.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-lg">2</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Keep Your Eyes One Beat Ahead</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                While your fingers are executing beat 1, your eyes should already be reading beat 2. Reading ahead gives your brain the fraction of a second needed to prepare the upcoming fret and finger choice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-lg">3</div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Never Stop for a Wrong Note</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                In music, rhythm is king. If you miss a note pitch, keep your foot tapping and play the next beat on time. A correct note played late is a mistake; a missed note forgotten while keeping the groove is professional sight-reading.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Ready to Put Your Eyes &amp; Ears to the Test?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Launch the interactive Sight-Reading Trainer to practice note recognition on the staff with instant fretboard feedback and streak tracking.
            </p>
          </div>
          <Link
            href="/practice/sight-reading"
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Launch Sight-Reading Trainer</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
