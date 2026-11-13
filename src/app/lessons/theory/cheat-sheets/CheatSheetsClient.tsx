"use client";

import React, { useState } from 'react';

type CheatSheetId = 'notation' | 'caged' | 'circle-of-fifths' | 'rhythm';

interface SheetTab {
  id: CheatSheetId;
  title: string;
  badge: string;
  icon: string;
}

const TABS: SheetTab[] = [
  { id: 'notation', title: 'Standard Notation & Ledger Lines', badge: 'Sheet Music', icon: '🎼' },
  { id: 'rhythm', title: 'Rhythm & Subdivisions', badge: 'Timing', icon: '⏱️' },
  { id: 'caged', title: 'CAGED System & Scale Engine', badge: 'Fretboard', icon: '🎸' },
  { id: 'circle-of-fifths', title: 'Circle of Fifths & Keys', badge: 'Harmony', icon: '⭕' },
];

export default function CheatSheetsClient() {
  const [activeTab, setActiveTab] = useState<CheatSheetId>('notation');

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header & Controls (Hidden in Print) */}
      <div className="no-print bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/20">
                Print &amp; PDF Center
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Music Stand &amp; Gig Bag Cheat Sheets</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Printable Guitar Reference Sheets
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Clean, ink-friendly reference sheets formatted for A4 / Letter paper and tablet music stands.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>🖨️</span>
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-transparent font-bold shadow-md'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Printable Sheet Wrapper */}
      <div className="print-sheet bg-white text-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        {/* Printable Sheet Header */}
        <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              MusicScene Reference Library • musicscene.com.au
            </div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight mt-0.5">
              {activeTab === 'notation' && 'Guitarist’s Standard Notation & Ledger Lines Cheat Sheet'}
              {activeTab === 'rhythm' && 'Rhythm, Note Values & Subdivision Reference'}
              {activeTab === 'caged' && 'CAGED System & Fretboard Scale Engine Reference'}
              {activeTab === 'circle-of-fifths' && 'Circle of Fifths & Diatonic Keys Reference'}
            </h2>
          </div>
          <div className="text-right text-xs text-slate-500 font-medium">
            <span>guitar standard notation</span>
          </div>
        </div>

        {/* SHEET 1: Standard Notation & Ledger Lines */}
        {activeTab === 'notation' && (
          <div className="space-y-6 text-xs">
            {/* Staff Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">1. Staff Lines: E - G - B - D - F</h3>
                <p className="text-slate-600">
                  Count lines from bottom to top. Mnemonic: <strong>Every Good Boy Does Fine</strong>.
                </p>
                <div className="grid grid-cols-5 gap-1 text-center font-mono font-bold text-xs pt-1">
                  <div className="p-1.5 bg-white border rounded">Line 1: E4</div>
                  <div className="p-1.5 bg-white border rounded">Line 2: G4</div>
                  <div className="p-1.5 bg-white border rounded">Line 3: B4</div>
                  <div className="p-1.5 bg-white border rounded">Line 4: D5</div>
                  <div className="p-1.5 bg-white border rounded">Line 5: F5</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">2. Staff Spaces: F - A - C - E</h3>
                <p className="text-slate-600">
                  Count spaces from bottom to top. Spells the word <strong>FACE</strong>.
                </p>
                <div className="grid grid-cols-4 gap-1 text-center font-mono font-bold text-xs pt-1">
                  <div className="p-1.5 bg-white border rounded">Space 1: F4</div>
                  <div className="p-1.5 bg-white border rounded">Space 2: A4</div>
                  <div className="p-1.5 bg-white border rounded">Space 3: C5</div>
                  <div className="p-1.5 bg-white border rounded">Space 4: E5</div>
                </div>
              </div>
            </div>

            {/* Sub-Staff Bass Ledger Realm */}
            <div className="p-5 rounded-2xl border-2 border-amber-400/80 bg-amber-50/50 space-y-3">
              <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                <h3 className="font-bold text-sm text-amber-950 flex items-center gap-1.5">
                  <span>⚓</span>
                  <span>Sub-Staff Bass Ledger Realm (Notes on Strings 4, 5, 6)</span>
                </h3>
                <span className="font-bold text-[11px] text-amber-800">
                  3 Open String Anchors
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Guitar sounds one octave lower than written (indicated by <strong>8vb</strong> under the treble clef). Bass strings 4 through 6 exist entirely below the 5-line staff on ledger lines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-white border border-amber-300 rounded-xl space-y-1">
                  <span className="font-black text-amber-900 block text-xs">Anchor 0: Open D String</span>
                  <p className="text-[11px] text-slate-600">
                    <strong>0 Ledger Lines:</strong> D4 hangs directly below Staff Line 1. (String 4 open).
                  </p>
                </div>
                <div className="p-3 bg-white border border-amber-300 rounded-xl space-y-1">
                  <span className="font-black text-amber-900 block text-xs">Anchor 1: Middle C &amp; A</span>
                  <p className="text-[11px] text-slate-600">
                    <strong>1 Ledger Line Strike:</strong> Middle C (String 5, Fret 3). <strong>2 Ledger Lines:</strong> Open A (String 5 open).
                  </p>
                </div>
                <div className="p-3 bg-white border border-amber-300 rounded-xl space-y-1">
                  <span className="font-black text-amber-900 block text-xs">Anchor 3: Low E String</span>
                  <p className="text-[11px] text-slate-600">
                    <strong>3 Ledger Lines:</strong> F3 (Fret 1). <strong>Hangs below 3rd line:</strong> Low E3 (String 6 open - lowest note).
                  </p>
                </div>
              </div>
            </div>

            {/* Guitar Standard Tuning Strings Reference Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <th className="p-2.5">String #</th>
                    <th className="p-2.5">Open Note</th>
                    <th className="p-2.5">Written Staff Note</th>
                    <th className="p-2.5">Sounding Pitch</th>
                    <th className="p-2.5">Frequency</th>
                    <th className="p-2.5">Staff Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 font-bold">1 (High E)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">E</td>
                    <td className="p-2 font-mono">E5</td>
                    <td className="p-2 font-mono">E4 (MIDI 64)</td>
                    <td className="p-2 font-mono">329.6 Hz</td>
                    <td className="p-2">Space 4 (Top space of staff)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">2 (B)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">B</td>
                    <td className="p-2 font-mono">B4</td>
                    <td className="p-2 font-mono">B3 (MIDI 59)</td>
                    <td className="p-2 font-mono">246.9 Hz</td>
                    <td className="p-2">Line 3 (Center line of staff)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">3 (G)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">G</td>
                    <td className="p-2 font-mono">G4</td>
                    <td className="p-2 font-mono">G3 (MIDI 55)</td>
                    <td className="p-2 font-mono">196.0 Hz</td>
                    <td className="p-2">Line 2 (Treble clef center line)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">4 (D)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">D</td>
                    <td className="p-2 font-mono">D4</td>
                    <td className="p-2 font-mono">D3 (MIDI 50)</td>
                    <td className="p-2 font-mono">146.8 Hz</td>
                    <td className="p-2">Space under Line 1 (0 ledger lines)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">5 (A)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">A</td>
                    <td className="p-2 font-mono">A3</td>
                    <td className="p-2 font-mono">A2 (MIDI 45)</td>
                    <td className="p-2 font-mono">110.0 Hz</td>
                    <td className="p-2">2 Ledger Lines below staff</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">6 (Low E)</td>
                    <td className="p-2 font-mono font-bold text-amber-600">E</td>
                    <td className="p-2 font-mono">E3</td>
                    <td className="p-2 font-mono">E2 (MIDI 40)</td>
                    <td className="p-2 font-mono">82.4 Hz</td>
                    <td className="p-2">Hangs below 3rd Ledger Line</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SHEET 2: Rhythm & Subdivision Reference */}
        {activeTab === 'rhythm' && (
          <div className="space-y-6 text-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <th className="p-2.5">Note Name</th>
                    <th className="p-2.5">Duration (4/4)</th>
                    <th className="p-2.5">Counting Syllable</th>
                    <th className="p-2.5">Visual Note Head</th>
                    <th className="p-2.5">Equivalent Rest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 font-bold">Whole Note (Semibreve)</td>
                    <td className="p-2">4 beats</td>
                    <td className="p-2 font-mono">&quot;1 - 2 - 3 - 4&quot;</td>
                    <td className="p-2">Open oval (no stem)</td>
                    <td className="p-2">Hangs below Line 4</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Half Note (Minim)</td>
                    <td className="p-2">2 beats</td>
                    <td className="p-2 font-mono">&quot;1 - 2&quot;</td>
                    <td className="p-2">Open oval with stem</td>
                    <td className="p-2">Sits on top of Line 3</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Quarter Note (Crotchet)</td>
                    <td className="p-2">1 beat</td>
                    <td className="p-2 font-mono">&quot;1, 2, 3, 4&quot;</td>
                    <td className="p-2">Filled oval with stem</td>
                    <td className="p-2">Squiggle / lightning bolt (𝄽)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Eighth Note (Quaver)</td>
                    <td className="p-2">1/2 beat</td>
                    <td className="p-2 font-mono">&quot;1 &amp; 2 &amp; 3 &amp; 4 &amp;&quot;</td>
                    <td className="p-2">Filled oval with 1 flag / beam</td>
                    <td className="p-2">Number 7 with flag (𝄾)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Sixteenth Note (Semiquaver)</td>
                    <td className="p-2">1/4 beat</td>
                    <td className="p-2 font-mono">&quot;1 e &amp; a 2 e &amp; a&quot;</td>
                    <td className="p-2">Filled oval with 2 flags / beams</td>
                    <td className="p-2">Double-flagged rest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
                <span className="font-bold text-amber-700 block">The Dot Rule (+50% Duration)</span>
                <p className="text-slate-600 leading-relaxed">
                  A dot adds half the original note value. Dotted half = 2 + 1 = <strong>3 beats</strong>. Dotted quarter = 1 + 0.5 = <strong>1.5 beats</strong>.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
                <span className="font-bold text-emerald-700 block">The Tie Rule</span>
                <p className="text-slate-600 leading-relaxed">
                  A curved line connecting two identical pitches connects their durations into one unbroken sustained note across beats or barlines.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SHEET 3: CAGED System & Scale Engine */}
        {activeTab === 'caged' && (
          <div className="space-y-6 text-xs">
            <p className="text-slate-600 leading-relaxed">
              The entire guitar fretboard is mapped by 5 interlocking chord forms based on the open chords <strong>C - A - G - E - D</strong>. The root note locations determine where each shape connects along the neck:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { shape: 'C Shape', root: 'String 5', notes: 'Root on 5th string (index/pinky). Major 3rd on 4th string.' },
                { shape: 'A Shape', root: 'String 5', notes: 'Root on 5th string (barre). 3-finger triad on frets below on strings 4, 3, 2.' },
                { shape: 'G Shape', root: 'String 6', notes: 'Root on 6th & 1st strings (pinky). Major 3rd on 5th string.' },
                { shape: 'E Shape', root: 'String 6', notes: 'Root on 6th & 1st strings. Most common barre chord shape across rock/pop.' },
                { shape: 'D Shape', root: 'String 4', notes: 'Root on 4th string open/barre. High triad on strings 3, 2, 1.' },
              ].map(c => (
                <div key={c.shape} className="p-3 border-2 border-slate-200 rounded-xl bg-slate-50 space-y-1">
                  <span className="font-black text-sm text-slate-900 block">{c.shape}</span>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">Root: {c.root}</span>
                  <p className="text-[11px] text-slate-600 leading-snug">{c.notes}</p>
                </div>
              ))}
            </div>

            <div className="p-4 border border-slate-300 rounded-xl bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 block text-sm">Major Pentatonic vs Minor Pentatonic Formulas</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-amber-700 block">Major Pentatonic (1 - 2 - 3 - 5 - 6)</strong>
                  <p className="text-slate-600 text-[11px]">Sweet, melodic, country and southern rock sound (e.g. Allman Brothers, Clapton).</p>
                </div>
                <div>
                  <strong className="text-blue-700 block">Minor Pentatonic (1 - b3 - 4 - 5 - b7)</strong>
                  <p className="text-slate-600 text-[11px]">Gritty, blues and rock staple (e.g. Hendrix, Led Zeppelin, AC/DC).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SHEET 4: Circle of Fifths & Diatonic Keys */}
        {activeTab === 'circle-of-fifths' && (
          <div className="space-y-6 text-xs">
            <div className="p-4 border border-slate-300 rounded-xl bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block text-sm">The Diatonic Chords Formula</span>
              <div className="grid grid-cols-7 gap-1 text-center font-mono font-bold text-xs pt-1">
                <div className="p-1 bg-white border rounded">I (Major)</div>
                <div className="p-1 bg-white border rounded">ii (minor)</div>
                <div className="p-1 bg-white border rounded">iii (minor)</div>
                <div className="p-1 bg-white border rounded">IV (Major)</div>
                <div className="p-1 bg-white border rounded">V (Major)</div>
                <div className="p-1 bg-white border rounded">vi (minor)</div>
                <div className="p-1 bg-white border rounded">vii° (dim)</div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <th className="p-2">Key (Major)</th>
                    <th className="p-2">Relative Minor</th>
                    <th className="p-2">Accidentals</th>
                    <th className="p-2">Specific Sharps / Flats</th>
                    <th className="p-2">Primary Chords (I - IV - V)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 font-bold font-mono">C Major</td>
                    <td className="p-2 font-mono">A minor</td>
                    <td className="p-2">0</td>
                    <td className="p-2 text-slate-500">None (all natural notes)</td>
                    <td className="p-2 font-mono font-bold">C - F - G</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">G Major</td>
                    <td className="p-2 font-mono">E minor</td>
                    <td className="p-2 font-mono">1 ♯</td>
                    <td className="p-2 font-mono">F#</td>
                    <td className="p-2 font-mono font-bold">G - C - D</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">D Major</td>
                    <td className="p-2 font-mono">B minor</td>
                    <td className="p-2 font-mono">2 ♯</td>
                    <td className="p-2 font-mono">F#, C#</td>
                    <td className="p-2 font-mono font-bold">D - G - A</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">A Major</td>
                    <td className="p-2 font-mono">F# minor</td>
                    <td className="p-2 font-mono">3 ♯</td>
                    <td className="p-2 font-mono">F#, C#, G#</td>
                    <td className="p-2 font-mono font-bold">A - D - E</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">E Major</td>
                    <td className="p-2 font-mono">C# minor</td>
                    <td className="p-2 font-mono">4 ♯</td>
                    <td className="p-2 font-mono">F#, C#, G#, D#</td>
                    <td className="p-2 font-mono font-bold">E - A - B</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">F Major</td>
                    <td className="p-2 font-mono">D minor</td>
                    <td className="p-2 font-mono">1 ♭</td>
                    <td className="p-2 font-mono">Bb</td>
                    <td className="p-2 font-mono font-bold">F - Bb - C</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold font-mono">Bb Major</td>
                    <td className="p-2 font-mono">G minor</td>
                    <td className="p-2 font-mono">2 ♭</td>
                    <td className="p-2 font-mono">Bb, Eb</td>
                    <td className="p-2 font-mono font-bold">Bb - Eb - F</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 border rounded-xl">
                <span className="font-bold text-slate-900 block">Order of Sharps (Going Clockwise):</span>
                <span className="font-mono font-bold text-amber-700">F - C - G - D - A - E - B</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Father Christmas Gave Dad An Electric Blanket</p>
              </div>
              <div className="p-3 bg-slate-50 border rounded-xl">
                <span className="font-bold text-slate-900 block">Order of Flats (Going Counter-Clockwise):</span>
                <span className="font-mono font-bold text-blue-700">B - E - A - D - G - C - F</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Battle Ends And Down Goes Charles&apos; Father</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer info on printable sheet */}
        <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[10px] text-slate-400">
          <span>MusicScene • Free Interactive Guitar Education &amp; Song Breakdown Platform</span>
          <span>musicscene.com.au</span>
        </div>
      </div>
    </div>
  );
}
