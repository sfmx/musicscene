import React from "react";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabAndNoteVisualizer from "@/components/TabAndNoteVisualizer";

// Main riff tab data structured for the visualizer
const mainRiffTab = [
  // First power chord (14th fret)
  { string: 4, fret: 14, idx: 0 },
  { string: 5, fret: 14, idx: 0 },
  { string: 6, fret: 12, idx: 0 },
  
  // Second power chord (13th fret)
  { string: 4, fret: 13, idx: 1 },
  { string: 5, fret: 13, idx: 1 },
  { string: 6, fret: 11, idx: 1 },
  
  // Third power chord (11th fret)
  { string: 4, fret: 11, idx: 2 },
  { string: 5, fret: 11, idx: 2 },
  { string: 6, fret: 9, idx: 2 },
  
  // Fourth power chord (9th fret)
  { string: 4, fret: 9, idx: 3 },
  { string: 5, fret: 9, idx: 3 },
  { string: 6, fret: 7, idx: 3 }
];

// Note names for the power chords
const mainRiffNotes = [
  { name: 'D5', idx: 0 },
  { name: 'C#5', idx: 1 },
  { name: 'B5', idx: 2 },
  { name: 'A5', idx: 3 }
];

// E major scale tab and note data
const eMajorScaleTab = [
  { string: 1, fret: 0, idx: 1 }, // E
  { string: 1, fret: 2, idx: 2 }, // F#
  { string: 1, fret: 4, idx: 3 }, // G#
  { string: 2, fret: 0, idx: 4 }, // A
  { string: 2, fret: 2, idx: 5 }, // B
  { string: 2, fret: 4, idx: 6 }, // C#
  { string: 3, fret: 1, idx: 7 }, // D#
];

const eMajorScaleNotes = [
  { name: 'E', idx: 1 },
  { name: 'F#', idx: 2 },
  { name: 'G#', idx: 3 },
  { name: 'A', idx: 4 },
  { name: 'B', idx: 5 },
  { name: 'C#', idx: 6 },
  { name: 'D#', idx: 7 }
];

export default function WereNotGonnaTakeItBreakdown() {
  return (
    <Layout>
      <Header
        title="We're Not Gonna Take It Breakdown"
        subtitle="Song analysis, theory, and practice tips for Twisted Sister's classic anthem."
      />
      <main className="prose mx-auto px-4 py-8">
        <h1>Song Breakdown: We&apos;re Not Gonna Take It (Twisted Sister)</h1>
        <p><strong>Artist:</strong> Twisted Sister<br/>
        <strong>Released:</strong> 1984<br/>
        <strong>Genre:</strong> Glam Metal / Hard Rock</p>

        <h2>1. Song Overview</h2>
        <p>
          "We&apos;re Not Gonna Take It" is an anthem of rebellion, known for its catchy chorus and power-chord-driven riffs. It&apos;s a great example of 80s hard rock, blending simple theory with high energy.
        </p>

        <h2>2. Key &amp; Scale</h2>
        <p>
          The song is in the key of <strong>E major</strong>. Most riffs and melodies use the E major scale and the E major pentatonic scale.
        </p>
        <div className="mt-4">
          <TabAndNoteVisualizer
            tabNotes={eMajorScaleTab}
            notes={eMajorScaleNotes}
            beatsPerBar={4}
            title="E Major Scale Pattern"
          />
        </div>

        <h2>3. Chord Progression</h2>
        <p>
          The main progression in the chorus is:
        </p>
        <ul>
          <li>E major (E - G# - B)</li>
          <li>A major (A - C# - E)</li>
          <li>B major (B - D# - F#)</li>
        </ul>
        <p>
          This is a classic I-IV-V progression in E major, a staple in rock and pop music. Each chord contains three notes (a triad):
        </p>
        
        <h3>E major chord (I)</h3>
        <div className="mt-4">
          <TabAndNoteVisualizer
            tabNotes={[
              { string: 1, fret: 0, idx: 1 },  // High E string - E
              { string: 2, fret: 0, idx: 1 },  // B string - B
              { string: 3, fret: 1, idx: 1 },  // G string - G#
            ]}
            notes={[
              { name: 'E', idx: 1 },
              { name: 'B', idx: 1 },
              { name: 'G#', idx: 1 }
            ]}
            beatsPerBar={4}
            title="E Major (I) - Root Position"
          />
        </div>

        <h3>A major chord (IV)</h3>
        <div className="mt-4">
          <TabAndNoteVisualizer
            tabNotes={[
              { string: 1, fret: 5, idx: 1 },  // High E string - A
              { string: 2, fret: 5, idx: 1 },  // B string - E
              { string: 3, fret: 6, idx: 1 },  // G string - C#
            ]}
            notes={[
              { name: 'A', idx: 1 },
              { name: 'E', idx: 1 },
              { name: 'C#', idx: 1 }
            ]}
            beatsPerBar={4}
            title="A Major (IV) - Root Position"
          />
        </div>

        <h3>B major chord (V)</h3>
        <div className="mt-4">
          <TabAndNoteVisualizer
            tabNotes={[
              { string: 1, fret: 7, idx: 1 },  // High E string - B
              { string: 2, fret: 7, idx: 1 },  // B string - F#
              { string: 3, fret: 8, idx: 1 },  // G string - D#
            ]}
            notes={[
              { name: 'B', idx: 1 },
              { name: 'F#', idx: 1 },
              { name: 'D#', idx: 1 }
            ]}
            beatsPerBar={4}
            title="B Major (V) - Root Position"
          />
        </div>
        
        <p>
          The progression moves through the three primary chords in E major, with each chord built from the first (root), third, and fifth notes of its respective major scale:
        </p>
        <ul>
          <li>E major (I): Root position triad built on the first scale degree</li>
          <li>A major (IV): Root position triad built on the fourth scale degree</li>
          <li>B major (V): Root position triad built on the fifth scale degree</li>
        </ul>

        <h2>4. Riffs &amp; Picking Style</h2>
        <p>
          The intro and chorus riff is built on power chords (E5, A5, B5) with a strong, straight eighth-note rhythm. The picking is mostly downstrokes for a punchy, aggressive feel.
        </p>
        <div className="mt-4">
          <TabAndNoteVisualizer
            tabNotes={mainRiffTab}
            notes={mainRiffNotes}
            beatsPerBar={4}
            title="Main Power Chord Riff"
          />
        </div>
        <p>
          Try playing with palm muting for extra punch, especially on the verse sections.
        </p>

        <h2>5. Gear Recommendations</h2>
        <ul>
          <li><strong>Guitar:</strong> Solid-body electric (e.g., Gibson Explorer, Fender Stratocaster)</li>
          <li><strong>Amp:</strong> Marshall-style tube amp, high gain</li>
          <li><strong>Effects:</strong> Distortion pedal (e.g., Boss DS-1), slight reverb</li>
        </ul>
        <p>
          For the classic 80s sound, use the bridge pickup and plenty of gain.
        </p>

        <h2>6. Theoretical Takeaways</h2>
        <ul>
          <li>Classic I-IV-V progression in a major key</li>
          <li>Power chords and pentatonic scale riffs</li>
          <li>Simple, memorable melodies</li>
          <li>Rhythmic drive from straight eighth-note picking</li>
        </ul>

        <h2>7. Practice Tips</h2>
        <ul>
          <li>Practice the main riff slowly, focusing on clean chord changes</li>
          <li>Experiment with palm muting and downstroke picking</li>
          <li>Try improvising using the E major pentatonic scale over the progression</li>
        </ul>
      </main>
      <Footer />
    </Layout>
  );
}