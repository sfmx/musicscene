"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import ExerciseRendererVexTabDirect from '@/components/ExerciseRendererVexTabDirect';

export default function VexTabDemoPage() {
  // Example exercise data
  const chromaticExercise = {
    id: "chromatic-1234",
    title: "Chromatic Exercise (1-2-3-4)",
    description: "Place your index (1), middle (2), ring (3), and pinky (4) fingers on consecutive frets of a string. Play each note in order, then move to the next string.",
    bpm: 80,
    measures: [
      {
        positions: [
          { string: 1, fret: 1, finger: 1 },
          { string: 1, fret: 2, finger: 2 },
          { string: 1, fret: 3, finger: 3 },
          { string: 1, fret: 4, finger: 4 },
        ],
        timeSignature: "4/4"
      },
      {
        positions: [
          { string: 2, fret: 1, finger: 1 },
          { string: 2, fret: 2, finger: 2 },
          { string: 2, fret: 3, finger: 3 },
          { string: 2, fret: 4, finger: 4 },
        ]
      },
      {
        positions: [
          { string: 3, fret: 1, finger: 1 },
          { string: 3, fret: 2, finger: 2 },
          { string: 3, fret: 3, finger: 3 },
          { string: 3, fret: 4, finger: 4 },
        ]
      },
      {
        positions: [
          { string: 4, fret: 1, finger: 1 },
          { string: 4, fret: 2, finger: 2 },
          { string: 4, fret: 3, finger: 3 },
          { string: 4, fret: 4, finger: 4 },
        ]
      }
    ]
  };

  // Finger independence exercise (1-3-2-4 pattern)
  const independenceExercise = {
    id: "independence-1324",
    title: "Finger Independence (1-3-2-4)",
    description: "This exercise helps develop finger independence by using a non-sequential finger pattern.",
    bpm: 70,
    measures: [
      {
        positions: [
          { string: 1, fret: 1, finger: 1 },
          { string: 1, fret: 3, finger: 3 },
          { string: 1, fret: 2, finger: 2 },
          { string: 1, fret: 4, finger: 4 },
        ],
        timeSignature: "4/4"
      },
      {
        positions: [
          { string: 2, fret: 1, finger: 1 },
          { string: 2, fret: 3, finger: 3 },
          { string: 2, fret: 2, finger: 2 },
          { string: 2, fret: 4, finger: 4 },
        ]
      }
    ]
  };

  return (
    <Layout>
      <Header
        title="VexTab Demo"
        subtitle="Interactive Guitar Exercise Notation"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>VexTab Guitar Exercise Demo</h1>
        
        <p>
          This page demonstrates how guitar exercises can be displayed using VexTab for 
          rendering both standard music notation and guitar tablature.
        </p>
        
        <section className="mt-8">
          <h2>Example Exercises</h2>
          
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <VexTabScriptLoader>
              <ExerciseRendererVexTabDirect exercise={chromaticExercise} />
            </VexTabScriptLoader>
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <VexTabScriptLoader>
              <ExerciseRendererVexTabDirect exercise={independenceExercise} />
            </VexTabScriptLoader>
          </div>
        </section>
        
        <section className="mt-8">
          <h2>Direct VexTab Example</h2>
          
          <p>
            Below is a direct VexTab example that demonstrates more advanced notation capabilities:
          </p>
          
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <VexTabScriptLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='550' scale='1.0' style="background:#fff;margin:2em auto;padding:1em;max-width:600px;">
options space=40 font-size=14

tabstave notation=true key=A time=4/4
notes :q (5/2.5/3.7/4) :8 10/4-12/4 | :h 5/5 :q 7/5 :8 8/5-7/5 |
notes :8 5/5-7/5-8/5-7/5-5/5-7/5-8/5-7/5 | :h 15/1 :8 15/1-14/1-12/1-14/1

tabstave notation=true
notes :q 5/1 7h9p7/1 10/1 12b14b12b10/1 | :h 5/5 :q 4/5 5/5 |
text :h, 9, 1, Bendy Time!
</div>`
                }}
              />
            </VexTabScriptLoader>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
