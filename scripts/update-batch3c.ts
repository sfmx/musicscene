import fs from 'fs';
import path from 'path';
import { AlphaTexValidator } from '../src/lib/alphaTexValidator';

interface SectionUpdate {
  sectionIndex: number;
  alphaTab: string;
  exerciseLabel: string;
}

interface SongUpdate {
  slug: string;
  sections: SectionUpdate[];
}

const updates: SongUpdate[] = [
  // 1. Under the Bridge (Red Hot Chili Peppers)
  {
    slug: 'under-the-bridge',
    sections: [
      {
        sectionIndex: 0, // Intro (Chord Melody)
        exerciseLabel: "John Frusciante Hendrix-Style Chord Melody Intro",
        alphaTab: ":4 (10.6 12.5 12.4 11.3) :8 (10.6 12.5 12.4 11.3) 12.2 :4 (10.6 12.5 12.4 11.3) :8 12.2 10.2 | :4 (2.6 4.5 4.4 3.3) :8 (2.6 4.5 4.4 3.3) 4.2 :4 (2.6 4.5 4.4 3.3) :8 4.2 2.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "E-B-C#m-G#m Clean Arpeggios",
        alphaTab: ":8 0.6 2.5 2.4 1.3 2.5 4.4 4.3 4.2 | 4.5 6.4 6.3 5.2 4.6 6.5 6.4 4.3 | :8 0.6 2.5 2.4 1.3 2.5 4.4 4.3 4.2 | :2 (0.6 2.5 2.4 1.3 0.2 0.1) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "F#m-E-B Chorus Progression",
        alphaTab: ":2 (2.6 4.5 4.4 2.3 2.2 2.1) (0.6 2.5 2.4 1.3 0.2 0.1) | :2 (2.5 4.4 4.3 4.2 2.1) (2.6 4.5 4.4 2.3 2.2 2.1) |"
      },
      {
        sectionIndex: 3, // Bridge / Outro
        exerciseLabel: "Gospel Soul A-Am-G-F Chords",
        alphaTab: ":2 (0.5 2.4 2.3 2.2 0.1) (0.5 2.4 2.3 1.2 0.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (1.6 3.5 3.4 2.3 1.2 1.1) |"
      }
    ]
  },

  // 2. You Shook Me All Night Long (AC/DC)
  {
    slug: 'you-shook-me-all-night-long',
    sections: [
      {
        sectionIndex: 0, // Main Riff / Intro
        exerciseLabel: "Angus Young Signature Double-Stop Intro",
        alphaTab: ":8 r.4 3.2 3.1 :4 (3.2 3.1) :8 3.2 3.1 :4 (3.2 3.1) | :8 5.3 3.2 :4 (3.6 0.4 0.3 3.2) :4 (3.5 0.4 0.3 3.2) :4 (0.4 2.3 3.2) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "G-Cadd9-D Syncopated Pocket Rhythm",
        alphaTab: ":4 (3.6 0.4 0.3 3.2) :8 (3.6 0.4 0.3 3.2) r.8 :4 (3.5 0.4 0.3 3.2) :8 (3.5 0.4 0.3 3.2) r.8 | :4 (0.4 2.3 3.2) :8 (0.4 2.3 3.2) :2 (3.6 0.4 0.3 3.2) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Stadium Sing-Along Chorus",
        alphaTab: ":2 (3.6 0.4 0.3 3.2) (3.5 0.4 0.3 3.2) | :2 (0.4 2.3 3.2) (3.6 0.4 0.3 3.2) |"
      },
      {
        sectionIndex: 3, // Bridge
        exerciseLabel: "Bridge Rhythmic Stabs",
        alphaTab: ":4 (3.6 0.4 0.3 3.2) (3.5 0.4 0.3 3.2) :2 (0.4 2.3 3.2) | :1 (3.6 0.4 0.3 3.2) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Angus Young G Major Pentatonic Solo Lick",
        alphaTab: ":8 3.1 6.1 3.1 6.1 :4 6.1 :8 3.1 5.2 | :8 3.2 5.3 3.3 5.3 :2 5.3 | :8 3.3 5.3 3.2 6.2 :2 6.1 |"
      }
    ]
  },

  // 3. Blackbird (The Beatles)
  {
    slug: 'blackbird',
    sections: [
      {
        sectionIndex: 0, // Verse 1 - Ascending Bass
        exerciseLabel: "Paul McCartney Fingerpicked 10ths & Open G Pedal",
        alphaTab: ":8 (3.6 0.2) 0.3 0.2 0.3 (0.5 1.2) 0.3 1.2 0.3 | :8 (2.5 3.2) 0.3 3.2 0.3 (3.6 0.2) 0.3 0.2 0.3 |"
      },
      {
        sectionIndex: 1, // Verse 2 - Continuation and Descent
        exerciseLabel: "Ascending to 12th Fret High Em10",
        alphaTab: ":8 (3.5 5.2) 0.3 5.2 0.3 (5.5 7.2) 0.3 7.2 0.3 | :8 (7.5 8.2) 0.3 8.2 0.3 :2 (3.6 0.2) |"
      },
      {
        sectionIndex: 2, // Bridge - Blackbird Fly
        exerciseLabel: "F-Em-Dm-C Chromatic Bridge",
        alphaTab: ":8 (1.6 1.2) 0.3 1.2 0.3 (0.6 0.2) 0.3 0.2 0.3 | :8 (1.5 3.2) 0.3 3.2 0.3 :2 (3.5 5.2) |"
      },
      {
        sectionIndex: 3, // Outro - Final Statement
        exerciseLabel: "Gentle Fingerstyle Resolution",
        alphaTab: ":8 (2.5 3.2) 0.3 3.2 0.3 (0.5 1.2) 0.3 1.2 0.3 | :1 (3.6 0.2) |"
      }
    ]
  },

  // 4. Crossroads (Cream / Eric Clapton)
  {
    slug: 'crossroads',
    sections: [
      {
        sectionIndex: 0, // Intro / Opening Riff
        exerciseLabel: "Eric Clapton Electrifying A Blues Riff",
        alphaTab: ":8 0.5 0.5 :4 (5.5 7.4) :8 0.5 :4 5.3 :8 7.4 | :8 5.4 7.4 5.4 0.5 :2 (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 1, // Verse (12-Bar Blues)
        exerciseLabel: "A-D-E Blues Shuffle Groove",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) | :8 (5.5 7.4) (5.5 7.4) (5.5 9.4) (5.5 9.4) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) |"
      },
      {
        sectionIndex: 2, // Extended Guitar Solo
        exerciseLabel: "Fiery A Minor Pentatonic Solo Lick",
        alphaTab: ":8 5.1 8.1 5.1 8.1 :4 8.1 5.1 | :8 8.2 5.2 7.3 5.3 :2 7.3 | :8 5.3 7.3 5.2 8.2 :2 8.1 |"
      },
      {
        sectionIndex: 3, // Final Verse and Outro
        exerciseLabel: "Climactic Blues Cadence",
        alphaTab: ":8 (7.5 9.4) (7.5 9.4) (5.5 7.4) (5.5 7.4) :4 (0.5 2.4) :8 3.5 4.5 | :1 (0.5 2.4 2.3 2.2 0.1) |"
      }
    ]
  },

  // 5. Norwegian Wood (The Beatles)
  {
    slug: 'norwegian-wood',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse (A Section)
        exerciseLabel: "John Lennon 6/8 D Mixolydian Melody",
        alphaTab: "\\ts 6 8 :8 0.4 2.4 4.4 0.4 2.4 0.4 | 4.5 2.5 0.5 2.5 0.5 4.6 | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 1, // Middle Eight (B Section)
        exerciseLabel: "Dm-G Minor Shift Progression",
        alphaTab: "\\ts 6 8 :4 (0.4 2.3 3.2 1.1) :8 (0.4 2.3 3.2 1.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (0.4 2.3 3.2 1.1) :8 (0.4 2.3 3.2 1.1) :4 (0.5 2.4 2.3 2.2 0.1) :8 (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 2, // Return to Verse
        exerciseLabel: "Embellished D Acoustic Theme",
        alphaTab: "\\ts 6 8 :8 0.4 2.4 4.4 0.4 2.4 0.4 | 4.5 2.5 0.5 2.5 0.5 4.6 | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Sitar Solo and Outro
        exerciseLabel: "George Harrison Sitar Lead on Guitar",
        alphaTab: "\\ts 6 8 :8 0.4 2.4 4.4 0.4 2.4 0.4 | 4.5 2.5 0.5 2.5 0.5 4.6 | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) :4 r.4 :8 r.8 |"
      }
    ]
  },

  // 6. Cliffs of Dover (Eric Johnson)
  {
    slug: 'cliffs-of-dover',
    sections: [
      {
        sectionIndex: 0, // Intro - Cascading Theme
        exerciseLabel: "Eric Johnson Cascading Pentatonic Cascade",
        alphaTab: ":16 15.1 12.1 15.2 12.2 14.3 12.3 14.4 12.4 14.5 12.5 10.5 12.5 :4 (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 1, // Main Theme Statement
        exerciseLabel: "Lyrical G Major Hybrid Picking Theme",
        alphaTab: ":8 10.2 12.2 10.1 12.1 :4 15.1 :8 12.1 10.1 | :4 12.2 :8 10.2 12.3 :2 12.3 |"
      },
      {
        sectionIndex: 2, // B Section - Lyrical Passage
        exerciseLabel: "Expressive Soaring Melody",
        alphaTab: ":8 12.3 14.3 :4 15.2 :8 12.2 15.2 :4 15.1 | :8 12.1 15.1 12.1 15.2 :2 14.3 |"
      },
      {
        sectionIndex: 3, // Climactic Finale
        exerciseLabel: "Fast Arpeggiated Resolution",
        alphaTab: ":16 15.1 12.1 15.2 12.2 14.3 12.3 12.2 15.2 :4 15.1 :4 (10.6 12.5 12.4) |"
      }
    ]
  },

  // 7. For Those About to Rock (We Salute You) (AC/DC)
  {
    slug: 'for-those-about-to-rock',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "B5-G5-D5-A5 Driving March Riff",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) | :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) :4 (0.5 2.4 2.3) :4 (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Steady Heavy Rock March",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) | :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) :4 (0.5 2.4 2.3) :4 (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "We Salute You Anthem Cadence",
        alphaTab: ":2 (7.6 9.5 9.4) (3.6 5.5 5.4) | :2 (5.5 7.4 7.3) (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Angus Young High-Register Screamer",
        alphaTab: ":8 14.1 17.1 14.1 17.1 :4 17.1 14.1 | :8 17.2 14.2 16.3 14.3 :2 16.3 |"
      },
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Cannonade Climax Build",
        alphaTab: ":4 (7.6 9.5 9.4) (7.6 9.5 9.4) (7.6 9.5 9.4) (7.6 9.5 9.4) | :1 (7.6 9.5 9.4) |"
      }
    ]
  },

  // 8. (Sittin' On) The Dock of the Bay (Otis Redding)
  {
    slug: 'sittin-on-the-dock-of-the-bay',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Steve Cropper Sliding Major Triads (G-B-C-A)",
        alphaTab: ":4 (3.6 5.5 5.4 4.3) :8 (3.6 5.5 5.4 4.3) r.8 :4 (7.6 9.5 9.4 8.3) :8 (7.6 9.5 9.4 8.3) r.8 | :4 (8.6 10.5 10.4 9.3) :8 (8.6 10.5 10.4 9.3) r.8 :4 (5.6 7.5 7.4 6.3) :8 (5.6 7.5 7.4 6.3) r.8 |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Soul Rhythm Chord Accompaniment",
        alphaTab: ":4 (3.6 5.5 5.4 4.3) :8 (3.6 5.5 5.4 4.3) r.8 :4 (7.6 9.5 9.4 8.3) :8 (7.6 9.5 9.4 8.3) r.8 | :4 (8.6 10.5 10.4 9.3) :8 (8.6 10.5 10.4 9.3) r.8 :4 (5.6 7.5 7.4 6.3) :8 (5.6 7.5 7.4 6.3) r.8 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Relaxed G-E Soul Chorus",
        alphaTab: ":2 (3.6 5.5 5.4 4.3) (0.6 2.5 2.4 1.3) | :2 (3.6 5.5 5.4 4.3) (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Cropper Staccato Soul Chops",
        alphaTab: ":4 (3.6 5.5 5.4 4.3) :8 (3.6 5.5 5.4 4.3) r.8 :4 (7.6 9.5 9.4 8.3) :8 (7.6 9.5 9.4 8.3) r.8 | :2 (8.6 10.5 10.4 9.3) (5.6 7.5 7.4 6.3) |"
      },
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Bridge G-D-C Harmonic Lift",
        alphaTab: ":2 (3.6 5.5 5.4 4.3) (5.5 7.4 7.3 7.2) | :2 (3.5 5.4 5.3 5.2) (5.5 7.4 7.3 7.2) |"
      },
      {
        sectionIndex: 5, // Outro (Whistling)
        exerciseLabel: "Steve Cropper Double-Stop Outro Fills",
        alphaTab: ":8 7.3 8.2 7.3 8.2 :4 (7.3 8.2) :8 5.3 5.2 | :4 (5.3 5.2) :8 3.3 3.2 :2 (3.6 5.5 5.4 4.3) |"
      }
    ]
  },

  // 9. Blowin' in the Wind (Bob Dylan)
  {
    slug: 'blowin-in-the-wind',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Classic Open D-G-A Folk Strumming",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) | :4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse (Question Lines)
        exerciseLabel: "Gentle Folk Acoustic Progression",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) | :4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 2, // Refrain (The Answer)
        exerciseLabel: "G-A-D Refrain Resolution",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.5 2.4 2.3 2.2 0.1) | :2 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Harmonica Break
        exerciseLabel: "Rhythmic Folk Strumming Pattern",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 4, // Final Refrain and Outro
        exerciseLabel: "Final Acoustic Resolution",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.5 2.4 2.3 2.2 0.1) | :1 (0.4 2.3 3.2 2.1) |"
      }
    ]
  },

  // 10. Blitzkrieg Bop (The Ramones)
  {
    slug: 'blitzkrieg-bop',
    sections: [
      {
        sectionIndex: 0, // Intro (Hey! Ho! Let's Go!)
        exerciseLabel: "Johnny Ramone Relentless Downpicked A5-D5-E5",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) (7.5 9.4) | :8 (5.6 7.5) (5.6 7.5) (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) (7.5 9.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Punk Downstroke Riff",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) (7.5 9.4) | :8 (5.6 7.5) (5.6 7.5) (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) (7.5 9.4) |"
      },
      {
        sectionIndex: 2, // Bridge
        exerciseLabel: "D5-A5-D5-A5 Punk Bridge",
        alphaTab: ":2 (5.5 7.4) (5.6 7.5) | :4 (5.5 7.4) (5.6 7.5) :2 (7.5 9.4) |"
      }
    ]
  },

  // 11. Wild Thing (The Troggs)
  {
    slug: 'wild-thing',
    sections: [
      {
        sectionIndex: 0, // Intro / Main Riff
        exerciseLabel: "Iconic A-D-E-D Garage Rock Progression",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) r.8 :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) r.8 | :4 (7.5 9.4 9.3) :8 (7.5 9.4 9.3) r.8 :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) r.8 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Garage Rock Riff",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) r.8 :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) r.8 | :4 (7.5 9.4 9.3) :8 (7.5 9.4 9.3) r.8 :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) r.8 |"
      },
      {
        sectionIndex: 2, // Bridge (Spoken)
        exerciseLabel: "Quiet Garage Vamp",
        alphaTab: ":2 (5.6 7.5 7.4) (5.5 7.4 7.3) | :2 (7.5 9.4 9.3) (5.5 7.4 7.3) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Climactic Garage Cadence",
        alphaTab: ":4 (5.6 7.5 7.4) (5.5 7.4 7.3) :2 (7.5 9.4 9.3) | :1 (5.6 7.5 7.4) |"
      }
    ]
  },

  // 12. Hit Me with Your Best Shot (Pat Benatar)
  {
    slug: 'hit-me-with-your-best-shot',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Neil Giraldo Crisp E5-A5-C#m-B5 Riff",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) r.8 :4 (5.6 7.5) :8 (5.6 7.5) r.8 | :4 (4.5 6.4) :8 (4.5 6.4) r.8 :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Tight Palm-Muted Verse Rhythm",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) r.8 :4 (5.6 7.5) :8 (5.6 7.5) r.8 | :4 (4.5 6.4) :8 (4.5 6.4) r.8 :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Chorus Power Progression",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) r.8 :4 (5.6 7.5) :8 (5.6 7.5) r.8 | :4 (4.5 6.4) :8 (4.5 6.4) r.8 :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Neil Giraldo Punchy Melodic Solo",
        alphaTab: ":8 12.1 14.1 :4 12.1 :8 14.1 12.1 :4 14.1 | :8 12.1 14.2 12.2 13.3 :2 13.3 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Final Stomp Cadence",
        alphaTab: ":4 (0.6 2.5) (5.6 7.5) :2 (2.5 4.4) | :1 (0.6 2.5) |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3C (${updates.length} iconic songs)...`);
let totalUpdated = 0;
let errorCount = 0;

for (const song of updates) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'songs', `${song.slug}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Song file missing: ${filePath}`);
    errorCount++;
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const s of song.sections) {
    const val = AlphaTexValidator.validate(s.alphaTab);
    if (!val.isValid) {
      console.error(`VALIDATION ERROR in ${song.slug} [${s.sectionIndex}]:`, val.errors);
      errorCount++;
      continue;
    }

    if (!data.sections[s.sectionIndex]) {
      console.error(`ERROR: Section index ${s.sectionIndex} missing in ${song.slug}`);
      errorCount++;
      continue;
    }

    data.sections[s.sectionIndex].alphaTab = s.alphaTab;
    if (s.exerciseLabel) {
      data.sections[s.sectionIndex].exerciseLabel = s.exerciseLabel;
    }
    totalUpdated++;
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Updated ${song.slug} (${song.sections.length} sections)`);
}

console.log(`\nBatch 3C Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);
