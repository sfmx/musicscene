"use client";

import React from 'react';
// @ts-ignore
declare global {
  interface Window {
    VexTabDiv?: any;
  }
}
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FretboardHighlight } from '@/components/FretboardHighlight';
import TabAndNoteVisualizer from '@/components/TabAndNoteVisualizer';
import MusicNotationVisualizer from '@/components/MusicNotationVisualizer';
import { fingerExercises } from '@/data/exercises/fingerExercises';
import styles from './page.module.css';
import ClientExerciseRenderer from '@/components/ClientExerciseRenderer';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function FingerExercisesClient() {
  // Legacy data - kept for compatibility with existing components
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
      />      <main className="prose mx-auto px-4 py-8 max-w-4xl">
          {/* Introduction */}
          <section className={styles.introduction}>
            <h1 className={styles.mainTitle}>Finger Exercises for Guitarists</h1>
            <div className={styles.introContent}>
              <p className="text-lg leading-relaxed mb-6">
                Finger exercises are essential for developing the strength, flexibility, and independence 
                needed to play guitar smoothly and accurately. Use these exercises as part of your daily 
                warmup routine.
              </p>
            </div>
          </section>
          
          {/* Practice Guidelines Section */}
          <section className={styles.guideSection}>
            <h2 className={styles.sectionTitle}>How to Practice Effectively</h2>
            <div className={styles.practiceGuide}>
              <h3 className={styles.subheading}>Practice Guide</h3>
              <ul className={styles.practiceList}>
                <li>Start slowly with a metronome (about 60-70 BPM)</li>
                <li>Focus on even timing and clean notes</li>
                <li>Increase speed only when you can play the exercise cleanly</li>
                <li>Practice for short bursts (5-10 minutes per exercise)</li>
                <li>Pay attention to both right and left hand technique</li>
              </ul>
            </div>
          </section>
          
          {/* VexFlow Interactive Exercises */}
          <section className={styles.exercises}>
            <h2 className={styles.sectionTitle}>Interactive Exercises</h2>
            <div className={styles.exerciseIntro}>
              <p className="text-lg mb-6">
                The following exercises are rendered using interactive music notation that combines 
                standard notation and tablature. Practice each one carefully, following the fingerings 
                shown.
              </p>
            </div>            {fingerExercises.map((exercise) => (            <div key={exercise.id} className={styles.exerciseItem}>
              <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
              <div className={styles.exerciseContent}>
                <ClientExerciseRenderer exercise={exercise} />
                <div className={styles.exerciseNotes}>
                  <h4 className={styles.notesTitle}>Practice Notes:</h4>
                  <p className={styles.notesText}>
                    Start at a comfortable tempo and gradually increase speed.
                    Ensure each note rings clearly and your movements are efficient.
                  </p>
                  <div className={styles.metronome}>
                    <span className={styles.tempoMarker}>Suggested starting tempo: {exercise.bpm} BPM</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </section>
            {/* Legacy Exercise Visualizers */}
          <section className={styles.legacyExercises}>
            <h2 className={styles.sectionTitle}>Additional Exercise Patterns</h2>
            
            <div className={styles.legacyExerciseItem}>
              <h3 className={styles.legacyTitle}>1. Chromatic Exercise (1-2-3-4)</h3>
              <div className={styles.legacyDescription}>
                <p>
                  Place your index (1), middle (2), ring (3), and pinky (4) fingers on consecutive frets of a string.
                  Play each note in order, then move to the next string. Try ascending and descending.
                </p>
              </div>
              <div className={styles.legacyVisualizer}>
                <TabAndNoteVisualizer tabNotes={chromaticTab} notes={chromaticNotes} beatsPerBar={4} />
                {/* Updated: Pass combined data to MusicNotationVisualizer for both notation and tab */}
                <div className={styles.notationVisualizer}>
                  <MusicNotationVisualizer data={chromaticData} beatsPerBar={4} />
                </div>
              </div>
            </div>
            <FretboardHighlight
              root="E2"
              interval="chromatic_1234"
              label="Chromatic Exercise (1-2-3-4)"
            />
    
            <h3>2. Finger Independence Exercise</h3>
            <p>
              Play patterns that skip fingers, such as 1-3-2-4 or 1-4-2-3, to challenge your coordination.
              Move the pattern across all strings.
            </p>
            <FretboardHighlight
              root="E2"
              interval="independence_1324"
              label="Finger Independence Exercise (1-3-2-4)"
            />
    
            <h3>3. Spider Exercise</h3>
            <p>
              Place your fingers on different frets and strings in a "spider" pattern.
            </p>
            <FretboardHighlight
              root="E2"
              interval="spider"
              label="Spider Exercise"
            />
    
            <h3>4. Major Scale Exercise</h3>
            <p>
              Practice the major scale in different positions to improve your knowledge of the fretboard.
            </p>
            <FretboardHighlight
              root="E2"
              interval="major_scale"
              label="Major Scale Exercise"
            />
          </section>
            {/* VexTab Example (direct, not React) */}
          <section className={styles.exercises}>
            <h2 className={styles.sectionTitle}>Chromatic Exercise (Direct VexTab)</h2>
            <VexTabScriptLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='550' scale='1.0' style="background:#fff;border:1px solid #ccc;margin:2em auto;padding:1em;max-width:600px;">
options space=20 font-size=14

tabstave notation=true time=4/4 key=C
notes :8 1/1^1^-2/1^2^-3/1^3^-4/1^4^ | :8 1/2^1^-2/2^2^-3/2^3^-4/2^4^ |
notes :8 1/3^1^-2/3^2^-3/3^3^-4/3^4^ | :8 1/4^1^-2/4^2^-3/4^3^-4/4^4^
</div>`
                }}
              />
            </VexTabScriptLoader>
          </section>

          <section className={styles.exercises}>
            <h2 className={styles.sectionTitle}>VexTab Example (Direct Render)</h2>
            <VexTabScriptLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='550' scale='1.0' style="background:#fff;border:1px solid #ccc;margin:2em auto;padding:1em;max-width:600px;">
options space=40 font-size=14

tabstave notation=true key=A
notes :q (5/2.5/3.7/4) $A7#9$ 15h16/1 20/1
</div>`
                }}
              />
            </VexTabScriptLoader>
          </section>

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
