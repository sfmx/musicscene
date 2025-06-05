import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FretboardHighlight } from '@/components/FretboardHighlight';
import TabAndNoteVisualizer from '@/components/TabAndNoteVisualizer';
import MusicNotationVisualizer from '@/components/MusicNotationVisualizer';

export default function FingerExercisesPage() {
  // Example chromatic tab and note data for 1-2-3-4 exercise (E string, then A string)
  const chromaticTab = [
    { string: 1, fret: 1, idx: 2 },
    { string: 1, fret: 2, idx: 3 },
    { string: 1, fret: 3, idx: 4 },
    { string: 1, fret: 4, idx: 5 },
    { string: 2, fret: 1, idx: 6 },
    { string: 2, fret: 2, idx: 7 },
    { string: 2, fret: 3, idx: 8 },
    { string: 2, fret: 4, idx: 9 },
  ];
  const chromaticNotes = [
    { name: 'F', idx: 2 },
    { name: 'F#', idx: 3 },
    { name: 'G', idx: 4 },
    { name: 'G#', idx: 5 },
    { name: 'A#', idx: 6 },
    { name: 'B', idx: 7 },
    { name: 'C', idx: 8 },
    { name: 'C#', idx: 9 },
  ];

  // New combined data for notation and tab
  const chromaticData = [
    { timing: 2, string: 1, fret: 1, note: 'F' },
    { timing: 3, string: 1, fret: 2, note: 'F#' },
    { timing: 4, string: 1, fret: 3, note: 'G' },
    { timing: 5, string: 1, fret: 4, note: 'G#' },
    { timing: 6, string: 2, fret: 1, note: 'A#' },
    { timing: 7, string: 2, fret: 2, note: 'B' },
    { timing: 8, string: 2, fret: 3, note: 'C' },
    { timing: 9, string: 2, fret: 4, note: 'C#' },
  ];

  return (
    <Layout>
      <Header
        title="Finger Exercises"
        subtitle="Build strength, dexterity, and independence in your fingers."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Finger Exercises for Guitarists</h1>
        <p>
          Finger exercises are essential for developing the strength, flexibility, and independence needed to play guitar smoothly and accurately. Use these exercises as part of your daily warmup routine.
        </p>

        <h2>1. Chromatic Exercise (1-2-3-4)</h2>
        <p>
          Place your index (1), middle (2), ring (3), and pinky (4) fingers on consecutive frets of a string. Play each note in order, then move to the next string. Try ascending and descending.
        </p>
        <TabAndNoteVisualizer tabNotes={chromaticTab} notes={chromaticNotes} beatsPerBar={4} />
        {/* Updated: Pass combined data to MusicNotationVisualizer for both notation and tab */}
        <div className="mt-4">
          <MusicNotationVisualizer data={chromaticData} beatsPerBar={4} />
        </div>
        <FretboardHighlight
          root="E2"
          interval="chromatic_1234"
          label="Chromatic Exercise (1-2-3-4)"
        />

        <h2>2. Finger Independence Exercise</h2>
        <p>
          Play patterns that skip fingers, such as 1-3-2-4 or 1-4-2-3, to challenge your coordination. Move the pattern across all strings.
        </p>
        <FretboardHighlight
          root="E2"
          interval="independence_1324"
          label="Finger Independence Exercise (1-3-2-4)"
        />

        <h2>3. Spider Exercise</h2>
        <p>
          Place your fingers on different frets and strings in a "spider" pattern, e.g.:
        </p>
        <FretboardHighlight
          root="E2"
          interval="spider"
          label="Spider Exercise"
        />

        <h2>4. Major Scale Exercise</h2>
        <p>
          Practice the major scale in different positions to improve your knowledge of the fretboard.
        </p>
         <FretboardHighlight
          root="E2"
          interval="major_scale"
          label="Major Scale Exercise"
        />

        <h2>Tips</h2>
        <ul>
          <li>Use a metronome and start slow, focusing on clean notes.</li>
          <li>Keep your fingers close to the fretboard for efficiency.</li>
          <li>Practice with alternate picking for both hands.</li>
          <li>Gradually increase speed as you gain control.</li>
        </ul>

        <h2>Why Finger Exercises Matter</h2>
        <p>
          Regular finger exercises help prevent injury, improve your playing accuracy, and make learning new songs and techniques easier.
        </p>
      </main>
      <Footer />
    </Layout>
  );
}
