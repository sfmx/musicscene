import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function ChordChangesPage() {
  return (
    <Layout>
      <Header
        title="Chord Changes"
        subtitle="Practice smooth and fast transitions between chords."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Chord Change Exercises</h1>
        <p>
          Practicing chord changes is essential for rhythm guitar and song playing. Use these exercises to build muscle memory and transition smoothly between common chords.
        </p>

        <h2>1. Open Chord Changes</h2>
        <p>
          Start by switching between two open chords, such as G and C. Focus on keeping your fingers close to the strings and minimizing movement.
        </p>
        <div className="flex flex-wrap gap-8 items-center my-4">
          <div>
            <div className="font-semibold text-center mb-2">G Major</div>
            <SimpleFretboardDiagram chord="G_major" />
          </div>
          <div>
            <div className="font-semibold text-center mb-2">C Major</div>
            <SimpleFretboardDiagram chord="C_major" />
          </div>
        </div>

        <h2>2. Four-Chord Progression</h2>
        <p>
          Practice a common progression: G &rarr; D &rarr; Em &rarr; C. Play each chord for one measure, then switch to the next.
        </p>
        <div className="flex flex-wrap gap-8 items-center my-4">
          <div>
            <div className="font-semibold text-center mb-2">G</div>
            <SimpleFretboardDiagram chord="G_major" />
          </div>
          <div>
            <div className="font-semibold text-center mb-2">D</div>
            <SimpleFretboardDiagram chord="D_major" />
          </div>
          <div>
            <div className="font-semibold text-center mb-2">Em</div>
            <SimpleFretboardDiagram chord="E_minor" />
          </div>
          <div>
            <div className="font-semibold text-center mb-2">C</div>
            <SimpleFretboardDiagram chord="C_major" />
          </div>
        </div>

        <h2>3. Barre Chord Changes</h2>
        <p>
          Work on moving between barre chords, such as F and Bm. Start slow and focus on clean sound.
        </p>
        <div className="flex flex-wrap gap-8 items-center my-4">
          <div>
            <div className="font-semibold text-center mb-2">F Major</div>
            <SimpleFretboardDiagram chord="F_major" />
          </div>
          <div>
            <div className="font-semibold text-center mb-2">Bm</div>
            <SimpleFretboardDiagram chord="B_minor" />
          </div>
        </div>

        <h2>Tips</h2>
        <ul>
          <li>Keep your fingers close to the strings and minimize unnecessary movement.</li>
          <li>Practice slowly and increase speed as you gain confidence.</li>
          <li>Use a metronome to keep time and track your progress.</li>
          <li>Visualize the next chord shape before you switch.</li>
        </ul>

        <h2>Why Chord Changes Matter</h2>
        <p>
          Smooth chord changes are the foundation of rhythm guitar and song accompaniment. Consistent practice will help you play songs more confidently and musically.
        </p>
      </main>
      <Footer />
    </Layout>
  );
}
