import type { Metadata } from 'next';
import Link from 'next/link';
import StaffFretboardExplorer from '@/components/Theory/StaffFretboardExplorer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { label: '1. Staff & Clef Anatomy', href: '#module-1-anatomy' },
            { label: '2. The Octave Secret', href: '#module-2-transposition' },
            { label: '3. Open Position Map', href: '#module-3-open-position' },
            { label: '4. Notes Below Staff', href: '#module-4-ledger-lines' },
            { label: '5. Rhythm & Note Values', href: '#module-5-rhythm' },
            { label: '6. Key Signatures', href: '#module-6-key-signatures' },
            { label: '7. Shape & Interval Reading', href: '#module-6-intervals' },
            { label: '8. The 3 Golden Rules', href: '#module-7-golden-rules' },
            { label: '9. Sight-Reading Trainer', href: '/practice/sight-reading' },
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
                  <div>• <strong>Open A:</strong> 2nd ledger line below (line strikes through note)</div>
                  <div>• <strong>Fret 2 (B):</strong> Space below 1st ledger line</div>
                  <div>• <strong>Fret 3 (C):</strong> 1st ledger line (Middle C)</div>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 pt-2">6th String (Low E):</div>
                <div className="pl-2 space-y-1 text-slate-600 dark:text-slate-400">
                  <div>• <strong>Open Low E:</strong> Space below 3rd ledger line (The Basement Note)</div>
                  <div>• <strong>Fret 1 (F):</strong> 3rd ledger line below (line strikes through note)</div>
                  <div>• <strong>Fret 3 (G):</strong> Space below 2nd ledger line</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module 4: Conquering Notes Below the Staff (The Sub-Staff Bass Ledger Realm) */}
        <section id="module-4-ledger-lines" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 4 • The Guitarist&apos;s #1 Hurdle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Notes Below the Staff (The Sub-Staff Bass Ledger Realm)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Why do so many guitarists find reading standard notation difficult when looking at the bass strings? On piano, low notes are handed off to the left hand in bass clef. But guitar music keeps everything in treble clef. Because the guitar is tuned in fourths descending from E4 down to Low E2, <strong>Strings 4, 5, and 6 fall almost entirely below the 5 lines of the staff</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-slate-700 dark:text-amber-200 space-y-2">
            <span className="font-bold text-amber-500 flex items-center gap-1.5">
              <span>⚠️ The Trap:</span>
              <span>Never Count Downward Note by Note</span>
            </span>
            <p className="leading-relaxed">
              When beginners see a note with two or three horizontal ledger lines under the staff, they instinctively freeze and count backward: <em>&quot;Line 1 is E... then D... then C... then B... then A&quot;</em>. Counting 5 notes in reverse takes several seconds, which completely derails your playing. Professional readers use <strong>Instant Anchors</strong> instead.
            </p>
          </div>

          {/* The 3 Open String Anchors */}
          <div className="space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-amber-500 font-black">⚓</span>
              <span>The 3 Open String Anchors (Your Sub-Staff GPS)</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Commit these three landmark notes to memory immediately. Every other note below the staff is just one neighbor step away from an anchor:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Anchor 0: Open D */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Anchor 0: Open D</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold">0 Lines</span>
                </div>
                <div className="text-2xl font-bravura text-amber-500 leading-none py-1">&#xE1D5;</div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Appearance:</strong> Hangs directly underneath Line 1 of the staff like an apple under a branch. Zero ledger lines.
                </p>
                <div className="text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-1.5">
                  Fretboard: <strong>4th String Open (D4)</strong>
                </div>
              </div>

              {/* Anchor 2: Open A */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Anchor 2: Open A</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold">2 Lines</span>
                </div>
                <div className="text-2xl font-bravura text-emerald-500 leading-none py-1">&#xE1D5;</div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Appearance:</strong> Exactly two ledger lines. The second ledger line strikes directly through the notehead: <em>&quot;Double-Bar A&quot;</em>.
                </p>
                <div className="text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-1.5">
                  Fretboard: <strong>5th String Open (A3)</strong>
                </div>
              </div>

              {/* Anchor 3: Low E */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Anchor 3: Low E</span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold">3 Lines</span>
                </div>
                <div className="text-2xl font-bravura text-blue-500 leading-none py-1">&#xE1D5;</div>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Appearance:</strong> Three ledger lines. The notehead hangs right underneath the third line: <em>&quot;The Basement Note&quot;</em>.
                </p>
                <div className="text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-1.5">
                  Fretboard: <strong>6th String Open (E3)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* The Neighbor Reading Trick & Mnemonic Formulas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <span className="font-bold text-amber-500 text-sm">Line Notes Below the Staff: C - A - F</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When a note below the staff has a line passing directly through its center:
              </p>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-200">
                <li>• <strong>1 Line Strike:</strong> Middle C (5th string, fret 3)</li>
                <li>• <strong>2 Lines Strike:</strong> Open A (5th string open)</li>
                <li>• <strong>3 Lines Strike:</strong> Low F (6th string, fret 1)</li>
              </ul>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold">
                Mnemonic: <strong>C - A - F</strong> (&quot;<strong>C</strong>an <strong>A</strong>lways <strong>F</strong>ret&quot; or &quot;<strong>C</strong>afé&quot;)
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2 text-xs">
              <span className="font-bold text-cyan-500 text-sm">Space Notes Below the Staff: D - B - G - E</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                When a note below the staff hangs in the space beneath a line:
              </p>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-200">
                <li>• <strong>Under Staff:</strong> Open D (4th string open, 0 lines)</li>
                <li>• <strong>Under 1 Line:</strong> B (5th string, fret 2)</li>
                <li>• <strong>Under 2 Lines:</strong> Low G (6th string, fret 3)</li>
                <li>• <strong>Under 3 Lines:</strong> Low E (6th string open, the bottom note)</li>
              </ul>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">
                Mnemonic: <strong>D - B - G - E</strong> (&quot;<strong>D</strong>own <strong>B</strong>elow <strong>G</strong>uitar <strong>E</strong>nds&quot;)
              </div>
            </div>
          </div>

          {/* Sub-Staff Tab-to-Notation Reference Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200">
                  <th className="p-3 font-bold">Guitar Tab</th>
                  <th className="p-3 font-bold">Pitch Name</th>
                  <th className="p-3 font-bold">Staff Position &amp; Ledger Lines</th>
                  <th className="p-3 font-bold">Line vs Space</th>
                  <th className="p-3 font-bold">Instant Recognition Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-sans">
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 6 • Fret 0</td>
                  <td className="p-3 font-bold">Low E (E3)</td>
                  <td className="p-3">Hangs below 3rd ledger line</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">Space</span></td>
                  <td className="p-3 font-medium">Anchor: The Basement Note (Lowest open string)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 6 • Fret 1</td>
                  <td className="p-3 font-bold">Low F (F3)</td>
                  <td className="p-3">3rd ledger line passes through note</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">Line</span></td>
                  <td className="p-3 font-medium">1 half-step above Low E (3rd line strike in C-A-F)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 6 • Fret 3</td>
                  <td className="p-3 font-bold">Low G (G3)</td>
                  <td className="p-3">Hangs below 2nd ledger line</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">Space</span></td>
                  <td className="p-3 font-medium">1 whole-step below Open A (space under 2 lines)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 5 • Fret 0</td>
                  <td className="p-3 font-bold">Open A (A3)</td>
                  <td className="p-3">2nd ledger line passes through note</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">Line</span></td>
                  <td className="p-3 font-medium">Anchor: Double-Line A (Center of 2 ledger lines)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 5 • Fret 2</td>
                  <td className="p-3 font-bold">B (B3)</td>
                  <td className="p-3">Hangs below 1st ledger line</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">Space</span></td>
                  <td className="p-3 font-medium">1 whole-step above Open A (hugs underneath Middle C)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 5 • Fret 3</td>
                  <td className="p-3 font-bold">Middle C (C4)</td>
                  <td className="p-3">1st ledger line passes through note</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">Line</span></td>
                  <td className="p-3 font-medium">Anchor: The Single Strike Line (Guitar Middle C)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">String 4 • Fret 0</td>
                  <td className="p-3 font-bold">Open D (D4)</td>
                  <td className="p-3">Hangs directly underneath Line 1</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">Space</span></td>
                  <td className="p-3 font-medium">Anchor: 0 Ledger Lines (Hangs below main staff)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive AlphaTab Practice Scores for Sub-Staff Notes */}
          <div className="space-y-6 pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-amber-500 font-black">▶</span>
                  <span>Interactive Sub-Staff Walk: Climb from Low E to the Staff</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20 w-fit">
                  60 BPM • Dual (Staff + Tab)
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Press <strong>Play</strong> to hear the notes walk up from 3 ledger lines below the staff (Low E, F, G, A, B, C, D) into Line 1 (E). Notice how the tablature frets on strings 6, 5, and 4 line up with the ledger lines.
              </p>
              <AlphaTexRenderer
                title="Sub-Staff Scale Walk (Low E3 to Staff Line 1 E4)"
                tempo={60}
                alphaTex={`\\tempo 60
.
0.6.2 1.6.2 |
3.6.2 0.5.2 |
2.5.2 3.5.2 |
0.4.2 2.4.2 |
`}
              />
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-amber-500 font-black">🎸</span>
                  <span>Sub-Staff Riff: Heavy Groove on Strings 5 &amp; 6</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20 w-fit">
                  Real Musical Riff • Low Strings
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect the fret numbers to the ledger lines with real music. This rock groove plays entirely on Strings 5 &amp; 6, using Low E (0.6), G (3.6), A (0.5), and C (3.5).
              </p>
              <AlphaTexRenderer
                title="Sub-Staff Rock Riff on Strings 5 & 6"
                tempo={80}
                alphaTex={`\\tempo 80
.
0.6.4 0.6.8 3.6.8 0.6.4 3.5.4 |
0.6.4 0.6.8 3.6.8 5.6.4 3.6.4 |
`}
              />
            </div>
          </div>
        </section>

        {/* Module 5: Rhythm & Note Values (Where Tab Fails) */}
        <section id="module-5-rhythm" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 5</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Rhythm &amp; Note Values (Where Tab Completely Fails)</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            The single greatest advantage standard notation has over raw tablature is that timing, note length, and rests are mathematically explicit. You never have to guess when a note starts or when it must cut off.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200">
                  <th className="p-3 font-bold">Note Symbol (AlphaTab)</th>
                  <th className="p-3 font-bold">Name (US / UK)</th>
                  <th className="p-3 font-bold">Duration (in 4/4 time)</th>
                  <th className="p-3 font-bold">Counting Syllable</th>
                  <th className="p-3 font-bold">Equivalent Rest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl sm:text-3xl text-amber-500 font-normal leading-none inline-block w-8 text-center select-none" aria-label="Whole Note">&#xE1D2;</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">Whole Note (Semibreve)</td>
                  <td className="p-3">4 full beats</td>
                  <td className="p-3 font-mono">&quot;1 - 2 - 3 - 4&quot;</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl text-emerald-500 font-normal leading-none select-none">&#xE4E3;</span>
                      <span>Whole rest (hangs below Line 4)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl sm:text-3xl text-amber-500 font-normal leading-none inline-block w-8 text-center select-none" aria-label="Half Note">&#xE1D3;</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">Half Note (Minim)</td>
                  <td className="p-3">2 beats</td>
                  <td className="p-3 font-mono">&quot;1 - 2&quot; or &quot;3 - 4&quot;</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl text-emerald-500 font-normal leading-none select-none">&#xE4E4;</span>
                      <span>Half rest (sits above Line 3)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl sm:text-3xl text-amber-500 font-normal leading-none inline-block w-8 text-center select-none" aria-label="Quarter Note">&#xE1D5;</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">Quarter Note (Crotchet)</td>
                  <td className="p-3">1 beat</td>
                  <td className="p-3 font-mono">&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl text-emerald-500 font-normal leading-none select-none">&#xE4E5;</span>
                      <span>Quarter rest (crotchet squiggle)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl sm:text-3xl text-amber-500 font-normal leading-none inline-block w-8 text-center select-none" aria-label="Eighth Note">&#xE1D7;</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">Eighth Note (Quaver)</td>
                  <td className="p-3">1/2 beat</td>
                  <td className="p-3 font-mono">&quot;1 &amp; 2 &amp; 3 &amp; 4 &amp;&quot;</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl text-emerald-500 font-normal leading-none select-none">&#xE4E6;</span>
                      <span>Eighth rest (single flag)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl sm:text-3xl text-amber-500 font-normal leading-none inline-block w-8 text-center select-none" aria-label="Sixteenth Note">&#xE1D9;</span>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">Sixteenth Note (Semiquaver)</td>
                  <td className="p-3">1/4 beat</td>
                  <td className="p-3 font-mono">&quot;1 e &amp; a 2 e &amp; a&quot;</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bravura text-2xl text-emerald-500 font-normal leading-none select-none">&#xE4E7;</span>
                      <span>Sixteenth rest (double flag)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive AlphaTab Rhythm & Rest Demonstrations */}
          <div className="space-y-6 pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="font-bravura text-amber-500 text-xl leading-none">&#xE1D5;</span>
                  <span>Interactive AlphaTab Notation: Note Durations in Action</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20 w-fit">
                  60 BPM • Dual (Staff + Tab)
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Press <strong>Play</strong> below to hear each rhythm value counted with the metronome. Notice how 1 whole note (bar 1, 4 beats) subdivides into 2 half notes (bar 2, 2 beats each), 4 quarter notes (bar 3, 1 beat each), 8 eighth notes (bar 4, 1/2 beat each), and 16 sixteenth notes (bar 5, 1/4 beat each).
              </p>
              <AlphaTexRenderer
                title="Rhythm Pyramid: Whole, Half, Quarter, 8th & 16th Notes"
                tempo={60}
                alphaTex={`\\tempo 60
.
0.3.1 |
0.3.2 0.3.2 |
0.3.4 0.3.4 0.3.4 0.3.4 |
0.3.8 0.3.8 0.3.8 0.3.8 0.3.8 0.3.8 0.3.8 0.3.8 |
0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 0.3.16 |
`}
              />
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="font-bravura text-emerald-500 text-xl leading-none">&#xE4E5;</span>
                  <span>Interactive AlphaTab Notation: Rests &amp; Silence in Action</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20 w-fit">
                  Visual Rests on Standard 5-Line Staff
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Rests specify silence. Press <strong>Play</strong> to hear the metronome click during rests while notes pause. Observe how quarter rests, half rests, whole rests, and eighth rests render on the 5-line standard staff.
              </p>
              <AlphaTexRenderer
                title="Rest Values: Quarter, Half, Whole & 8th Rests"
                tempo={60}
                alphaTex={`\\tempo 60
.
0.3.4 r.4 0.3.4 r.4 |
0.3.2 r.2 |
r.1 |
0.3.8 r.8 0.3.8 r.8 0.3.8 r.8 0.3.8 r.8 |
`}
              />
            </div>
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

        {/* Module 6: Key Signatures & Accidentals */}
        <section id="module-6-key-signatures" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 6</span>
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

        {/* Module 7: Reading Intervals & Shapes (Fluent Sight-Reading) */}
        <section id="module-7-intervals" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 7</span>
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

        {/* Module 8: The 3 Golden Rules of Guitar Sight-Reading */}
        <section id="module-8-golden-rules" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Module 8</span>
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

