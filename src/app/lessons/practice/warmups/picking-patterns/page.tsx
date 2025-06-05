import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernTabVisualizer from '@/components/ModernTabVisualizer';

export default function PickingPatternsPage() {
  // Define scale notes for each exercise
  const altPickingNotes = [
    { string: 1, fret: 0 }, { string: 1, fret: 1 }, { string: 1, fret: 2 }, { string: 1, fret: 3 }, { string: 1, fret: 4 },
    { string: 1, fret: 3 }, { string: 1, fret: 2 }, { string: 1, fret: 1 }, { string: 1, fret: 0 }
  ];
  const stringCrossingNotes = [
    { string: 1, fret: 0 }, { string: 1, fret: 1 }, { string: 1, fret: 2 }, { string: 1, fret: 3 }, { string: 1, fret: 4 },
    { string: 2, fret: 0 }, { string: 2, fret: 1 }, { string: 2, fret: 2 },
    { string: 3, fret: 0 }, { string: 3, fret: 1 }, { string: 3, fret: 2 },
    { string: 4, fret: 0 }, { string: 4, fret: 1 }, { string: 4, fret: 2 }
  ];
  const economyPickingNotes = [
    { string: 1, fret: 1 }, { string: 1, fret: 2 },
    { string: 2, fret: 1 }, { string: 2, fret: 2 },
    { string: 3, fret: 1 }, { string: 3, fret: 2 },
    { string: 4, fret: 1 }, { string: 4, fret: 2 },
    { string: 5, fret: 1 }, { string: 5, fret: 2 },
    { string: 6, fret: 1 }, { string: 6, fret: 2 }, { string: 6, fret: 3 }, { string: 6, fret: 4 },

  ];

  return (
    <Layout>
      <Header
        title="Picking Patterns"
        subtitle="Warm up your picking hand with alternate and economy picking exercises."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Picking Patterns for Guitarists</h1>
        <p>
          Picking patterns help you develop accuracy, speed, and control with your picking hand. Use these exercises to warm up and build solid technique for both rhythm and lead playing.
        </p>

        <h2>1. Alternate Picking Exercise</h2>
        <p>
          Practice strict down-up (alternate) picking on each string. Start slow and focus on even timing and clean notes.
        </p>
        <pre>
{`e|--0-1-2-3-4-3-2-1-0--|
B|---------------------|
G|---------------------|
D|---------------------|
A|---------------------|
E|---------------------|`}
        </pre>
        <ModernTabVisualizer notes={altPickingNotes} beatsPerBar={4} />

        <h2>2. String Crossing</h2>
        <p>
          Move across strings using alternate picking. This helps coordinate your picking and fretting hands.
        </p>
        <pre>
{`e|---------------------0-1-2-3-4-|
B|---------------0-1-2-----------|
G|---------0-1-2-----------------|
D|---0-1-2-----------------------|
A|-------------------------------|
E|-------------------------------|`}
        </pre>
        <ModernTabVisualizer notes={stringCrossingNotes} beatsPerBar={4} />

        <h2>3. Economy Picking Pattern</h2>
        <p>
          Use a downstroke when moving to a lower string and an upstroke when moving to a higher string. This is called economy picking.
        </p>
        <pre>
{`e|-------------------1-2-3-4-|
B|---------------1-2---------|
G|-----------1-2-------------|
D|-------1-2-----------------|
A|---1-2---------------------|
E|-1-2-----------------------|`}
        </pre>
        <ModernTabVisualizer notes={economyPickingNotes} beatsPerBar={4} />

        <h2>Tips</h2>
        <ul>
          <li>Use a metronome and start slow, increasing speed as you improve.</li>
          <li>Keep your picking motion small and relaxed.</li>
          <li>Focus on accuracy and consistency before playing fast.</li>
          <li>Try using both a pick and your fingers for hybrid picking practice.</li>
        </ul>

        <h2>Why Picking Patterns Matter</h2>
        <p>
          Consistent picking technique is the foundation for clean, fast, and expressive playing. Regular practice will help you play riffs, solos, and chords with confidence.
        </p>
      </main>
      <Footer />
    </Layout>
  );
}
