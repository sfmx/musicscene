"use client";

import React from 'react';
// @ts-ignore
declare global {
  interface Window {
    VexTabDiv?: { autoRender: () => void; };
  }
}
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import MusicScore from '@/components/MusicScore';
import { fingerExercises } from '@/data/exercises/fingerExercises';
import styles from './page.module.css';
import ClientExerciseRenderer from '@/components/ClientExerciseRenderer';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function FingerExercisesClient() {
  // Spider exercise pattern
  const spiderExercise = 
    "tabstave notation=true\nnotes 1/6 3/5 2/4 4/3 | 4/3 2/4 3/5 1/6";
      return (
    <Layout>
      
      <Header
        title="Finger Exercises"
        subtitle="Build strength, dexterity, and independence in your fingers."
      />      

      <main className="prose mx-auto px-4 py-8 max-w-4xl">
      <VexTabScriptLoader />
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
          </section>                            <MusicScore
                    title="Chromatic Exercise (VexTab)"
                    staves={[{
                      id: 'chromatic-vextab-2',
                      notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :q 1/6 2/6 3/6 4/6 | 1/5 2/5 3/5 4/5 | 1/4 2/4 3/4 4/4 | 1/3 2/3 3/3 4/3`,
                      width: 550,
                      scale: 1.0,
                      title: 'Chromatic (1-2-3-4) VexTab First one'
                    }]}
                  />
            {/* VexFlow Interactive Exercises */}
          
            <section className={styles.exercises}>
              <h2 className={styles.sectionTitle}>Interactive Exercises</h2>
              <div className={styles.exerciseIntro}>
                <p className="text-lg mb-6">
                  The following exercises are rendered using interactive music notation that combines 
                  standard notation and tablature. Practice each one carefully, following the fingerings 
                  shown.
                </p>
              </div>{/* Replace first exercise with MusicScore */}
            <div className={styles.exerciseItem}>
              <h3 className={styles.exerciseTitle}>Exercise 1: String Crossing Pattern</h3>
              <div className={styles.exerciseContent}>
                <MusicScore
                  title="String Crossing Pattern Exercise"
                  staves={[{
                    id: 'string-crossing',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 3/5 5/4 2/5 5/4 2/5 5/4 3/5 5/4 | 3/4 5/3 2/4 5/3 2/4 5/3 3/4 5/3 |
notes :8 2/3 5/2 2/3 5/2 2/3 5/2 2/3 5/2`,
                    width: 550,
                    scale: 1.0,
                    title: 'String Crossing with Alternate Picking'
                  }]}
                />
                <div className={styles.exerciseNotes}>
                  <h4 className={styles.notesTitle}>Practice Notes:</h4>
                  <p className={styles.notesText}>
                    Practice this exercise using alternate picking (i-m) to develop string crossing technique.
                    Start at a comfortable tempo and gradually increase speed.
                    Ensure each note rings clearly and your movements are efficient.
                  </p>
                  <div className={styles.metronome}>
                    <span className={styles.tempoMarker}>Suggested starting tempo: 80 BPM</span>
                  </div>
                </div>
              </div>
            </div>            {/* Keep remaining exercises with ClientExerciseRenderer */}
            {/* Exercise 2: Replace with MusicScore */}
            <div className={styles.exerciseItem}>
              <h3 className={styles.exerciseTitle}>Exercise 2: Finger Independence Pattern</h3>
              <div className={styles.exerciseContent}>
                <MusicScore
                  title="Finger Independence Pattern Exercise"
                  staves={[{
                    id: 'finger-independence',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 3/6 1/5 3/5 1/4 3/4 1/3 3/3 | 1/2 3/2 1/1 3/1 1/1 3/1 1/2 3/2`,
                    width: 550,
                    scale: 1.0,
                    title: 'Finger 1 and 3 Independence'
                  }]}
                />
                <div className={styles.exerciseNotes}>
                  <h4 className={styles.notesTitle}>Practice Notes:</h4>
                  <p className={styles.notesText}>
                    This exercise helps develop independence between fingers 1 and 3.
                    Start at a comfortable tempo and gradually increase speed.
                    Ensure each note rings clearly and your movements are efficient.
                  </p>
                  <div className={styles.metronome}>
                    <span className={styles.tempoMarker}>Suggested starting tempo: 70 BPM</span>
                  </div>
                </div>
              </div>
            </div>            {/* Exercise 3: 1-2-3-4 Finger Pattern */}
            XXXX
            <div className={styles.exerciseItem}>
              <h3 className={styles.exerciseTitle}>Exercise 3: 1-2-3-4 Finger Pattern</h3>
              <div className={styles.exerciseContent}>
                <MusicScore
                  title="1-2-3-4 Finger Pattern Exercise"
                  staves={[{
                    id: 'finger-1234-pattern',
                    notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 2/6 3/6 4/6 1/5 2/5 3/5 4/5 | 1/4 2/4 3/4 4/4 1/3 2/3 3/3 4/3 |
notes :8 1/2 2/2 3/2 4/2 1/1 2/1 3/1 4/1`,
                    width: 550,
                    scale: 1.0,
                    title: 'Classic Chromatic 1-2-3-4 Pattern'
                  }]}
                />
                <div className={styles.exerciseNotes}>
                  <h4 className={styles.notesTitle}>Practice Notes:</h4>
                  <p className={styles.notesText}>
                    This classic exercise develops coordination between all four fretting fingers.
                    Start at a comfortable tempo and gradually increase speed.
                    Ensure each note rings clearly and your movements are efficient.
                  </p>
                  <div className={styles.metronome}>
                    <span className={styles.tempoMarker}>Suggested starting tempo: 60 BPM</span>
                  </div>
                </div>
              </div>            </div>
            
            {/* Any remaining exercises with ClientExerciseRenderer */}
            </section>
          {/* </VexTabScriptLoader> */}

          {/* Legacy Exercise Visualizers */}
          <section className={styles.legacyExercises}>
            <h2 className={styles.sectionTitle}>Additional Exercise Patterns</h2>
            
            <h3>2. Finger Independence Exercise</h3>
            <p>
              Play patterns that skip fingers, such as 1-3-2-4 or 1-4-2-3, to challenge your coordination.
              Move the pattern across all strings.
            </p>
       


            <h3>3. Spider Exercise</h3>
            <p>
              Place your fingers on different frets and strings in a "spider" pattern.
            </p>            <MusicScore
              title="Spider Exercise Pattern"
              staves={[{
                id: 'spider-pattern',
                notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :8 1/6 4/5 2/4 5/3 | 3/2 6/1 4/2 1/3 | 2/4 5/5 3/6 6/1`,
                width: 550,
                scale: 1.0,
                title: 'Spider Pattern Exercise'
              }]}
            />            <h3>4. Major Scale Exercise</h3>
            <p>
              Practice the major scale in different positions to improve your knowledge of the fretboard.
              This C major scale uses open position fingering for beginners.
            </p>
            <MusicScore
              title="Major Scale Pattern"
              staves={[{
                id: 'major-scale',
                notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :q 3/5 0/4 2/4 3/4 | 0/3 2/3 4/3 5/3 | 5/3 4/3 2/3 0/3 | 3/4 2/4 0/4 3/5`,
                width: 650,
                scale: 1.0,
                title: 'C Major Scale - Open Position (Ascending & Descending)'
              }]}
            />

          </section>

          <section className={styles.exercises}>
            <h2 className={styles.sectionTitle}>Advanced Chord Example</h2>
              <MusicScore
                title="A7#9 Chord with Hammer-ons"
                staves={[{
                  id: 'chord-example',
                  notation: `options space=40 font-size=14
tabstave notation=true key=A
notes :q (5/2.5/3.7/4) $A7#9$ 15h16/1 20/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Jazz Chord with Techniques'
                }]}
              />
          </section>

          <h2>Tips</h2>
          <ul>
            <li>Use a metronome and start slow, focusing on clean notes.</li>
            <li>Keep your fingers close to the fretboard for efficiency.</li>
            <li>Practice with alternate picking for both hands.</li>
            <li>Gradually increase speed as you gain control.</li>
          </ul>

          <h2>Why Finger Exercises Matter</h2>          <p>
            Regular finger exercises help prevent injury, improve your playing accuracy, and make learning new songs and techniques easier.
          </p>
        </main>
        <Footer />
      </Layout>
    );
}
