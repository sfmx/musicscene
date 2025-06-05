import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChordVisualizer from '@/components/ChordVisualizer';

export default function MajorChordsPage() {
  return (
    <Layout>
      <Header 
        title="Major Chords"
        subtitle="Understanding major chord shapes and theory"
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Major Chords</h1>
        
        <section>
          <h2>D Major Chord</h2>
          <ChordVisualizer
            name="D Major"
            symbol="M, maj"
            steps="1-3-5"
            notes="D F# A"
            positions={[
              { string: 4, fret: 0 },   // D string open (cyan circle)
              { string: 3, fret: 2, finger: 1 },  // G string 2nd fret
              { string: 2, fret: 3, finger: 2 },  // B string 3rd fret
              { string: 1, fret: 2, finger: 3 },  // High E string 2nd fret
            ]}
            startFret={0}
            endFret={5}
          />
          <p className="mt-4">
            The D major chord consists of the notes D (root), F# (major third), and A (perfect fifth). 
            It&apos;s one of the most common open chords and is frequently used in many popular songs.
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}