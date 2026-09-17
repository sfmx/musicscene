import fs from 'fs';
import path from 'path';
import { AlphaTexValidator } from '../src/lib/alphaTexValidator';

interface SectionUpdate {
  sectionIndex: number;
  alphaTab: string;
  exerciseLabel?: string;
}

interface SongUpdate {
  slug: string;
  sections: SectionUpdate[];
}

const updates: SongUpdate[] = [
  // 1. Sweet Child O' Mine
  {
    slug: 'sweet-child-o-mine',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic Arpeggio Riff",
        alphaTab: ":8 12.4 15.2 14.3 12.3 15.1 14.3 14.1 14.3 | 12.4 15.2 14.3 12.3 15.1 14.3 14.1 14.3 | 14.4 15.2 14.3 12.3 15.1 14.3 14.1 14.3 | 12.3 15.2 14.3 12.3 15.1 14.3 14.1 14.3 |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Clean Acoustic Arpeggios",
        alphaTab: ":8 0.4 2.3 3.2 2.1 3.2 2.3 0.4 2.3 | 3.5 0.4 0.3 3.2 3.1 3.2 0.3 0.4 | 3.6 2.5 0.4 0.3 3.2 3.1 3.2 0.3 | 0.4 2.3 3.2 2.1 3.2 2.3 0.4 2.3 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Power Progression",
        alphaTab: ":4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) :4 (3.5 5.4 5.3) :8 (3.5 5.4 5.3) | :2 (0.4 2.3 3.2) :4 (0.4 2.3 3.2) r.4 | :4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) :4 (3.5 5.4 5.3) :8 (3.5 5.4 5.3) | :1 (0.4 2.3 3.2) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Wah Solo Theme",
        alphaTab: ":8 12.3 14.3 15.3 14.3 12.3 14.3 | :4 15.2 :8 14.2 12.2 :2 15.1 | :8 14.1 12.1 15.2 12.2 :4 14.3 12.3 | :2 14.3 :2 r |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Heavy Breakdown Riff",
        alphaTab: ":4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (3.6 5.5 5.4) (0.5 2.4 2.3) | :2 (3.5 5.4 5.3) :4 (5.5 7.4 7.3) r.4 | :4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (3.6 5.5 5.4) (0.5 2.4 2.3) | :1 (0.4 2.3 3.2) |"
      }
    ]
  },

  // 2. Crazy Train
  {
    slug: 'crazy-train',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic F#m Pedal Riff",
        alphaTab: ":8 2.6 2.6 4.5 2.6 5.5 2.6 4.5 2.6 | 2.5 0.5 4.6 0.5 2.5 0.5 4.6 2.6 | 2.6 2.6 4.5 2.6 5.5 2.6 4.5 2.6 | 2.5 0.5 4.6 0.5 :2 (2.6 4.5 4.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Heavy Rock Verse Rhythm",
        alphaTab: ":4 (5.6 7.5 7.4) (4.6 7.5 6.4) :2 (2.6 4.5 4.4) | :4 (10.6 12.5 12.4) (12.6 14.5 14.4) :2 (5.6 7.5 7.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Driving Progression",
        alphaTab: ":2 (2.6 4.5 4.4) :4 (10.6 12.5 12.4) (12.6 14.5 14.4) | :2 (2.6 4.5 4.4) :4 (10.6 12.5 12.4) (12.6 14.5 14.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Randy Rhoads Solo Lick",
        alphaTab: ":16 9.3 11.3 12.3 11.3 9.3 11.3 12.3 11.3 10.2 12.2 14.2 12.2 10.2 12.2 14.2 12.2 | :8 14.1 17.1 14.1 17.1 :2 17.1 |"
      }
    ]
  },

  // 3. Come As You Are
  {
    slug: 'come-as-you-are',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Chorus-Drenched Main Riff",
        alphaTab: ":8 0.6 0.6 1.6 2.6 | :4 0.5 :8 2.6 :4 0.5 :8 2.6 2.6 1.6 0.6 | :4 0.6 0.6 1.6 2.6 | :4 0.5 :8 2.6 :4 0.5 :8 2.6 2.6 1.6 0.6 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Verse Walking Bass Riff",
        alphaTab: ":8 0.6 0.6 1.6 2.6 | :4 0.5 :8 2.6 :4 0.5 :8 2.6 2.6 1.6 0.6 | :4 0.6 0.6 1.6 2.6 | :4 0.5 :8 2.6 :4 0.5 :8 2.6 2.6 1.6 0.6 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Pre-Chorus Dynamic Build",
        alphaTab: ":2 (2.6 4.5 4.4) :4 (5.6 7.5 7.4) r.4 | :2 (2.6 4.5 4.4) :4 (5.6 7.5 7.4) r.4 |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Chorus Power Chords",
        alphaTab: ":2 (2.6 4.5 4.4) (5.6 7.5 7.4) | :2 (2.6 4.5 4.4) (5.6 7.5 7.4) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Melodic Vibrato Solo",
        alphaTab: ":4 6.3 6.3 6.3 9.3 | :2 9.2 :4 6.3 9.3 | :4 6.3 6.3 6.3 9.3 | :1 9.2 |"
      }
    ]
  },

  // 4. Purple Haze
  {
    slug: 'purple-haze',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Tritone Stab & Octave Groove",
        alphaTab: ":2 (6.6 8.4) (6.6 8.4) | :2 (6.6 8.4) (6.6 8.4) | :8 0.6 :4 8.5 :8 7.4 5.4 :4 7.4 | :8 0.6 :4 8.5 :8 7.4 5.4 :4 7.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Hendrix Chord E7#9 Groove",
        alphaTab: ":4 (0.6 7.5 6.4 7.3 8.2) r.4 :8 (0.6 7.5 6.4 7.3 8.2) (0.6 7.5 6.4 7.3 8.2) :4 r | :4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) :4 (5.6 7.5 7.4) r.4 |"
      },
      {
        sectionIndex: 2, // Guitar Solo
        exerciseLabel: "Octavia Fuzz Solo",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.3 14.3 :4 14.3 12.3 | :1 (0.6 7.5 6.4 7.3 8.2) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "E7#9 Groove Outro",
        alphaTab: ":8 0.6 :4 8.5 :8 7.4 5.4 :4 7.4 | :4 (0.6 7.5 6.4 7.3 8.2) :2 r :4 r |"
      }
    ]
  },

  // 5. Satisfaction
  {
    slug: 'satisfaction',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic Fuzz Riff",
        alphaTab: ":4 2.5 2.5 :8 2.5 :4 4.5 5.5 | :4 5.5 :8 5.5 :4 4.5 4.5 2.5 | :4 2.5 2.5 :8 2.5 :4 4.5 5.5 | :4 5.5 :8 5.5 :4 4.5 4.5 2.5 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Acoustic Backing Groove",
        alphaTab: ":2 (0.6 2.5 2.4 1.3 0.2 0.1) (0.5 2.4 2.3 2.2 0.1) | :2 (0.6 2.5 2.4 1.3 0.2 0.1) (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Strumming Pattern",
        alphaTab: ":4 (0.6 2.5 2.4 1.3 0.2 0.1) (2.5 4.4 4.3 4.2) :2 (0.6 2.5 2.4 1.3 0.2 0.1) | :4 (0.6 2.5 2.4 1.3 0.2 0.1) (2.5 4.4 4.3 4.2) :2 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Fuzz Riff Outro",
        alphaTab: ":4 2.5 2.5 :8 2.5 :4 4.5 5.5 | :4 5.5 :8 5.5 :4 4.5 4.5 2.5 |"
      }
    ]
  },

  // 6. Layla
  {
    slug: 'layla',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic Opening Theme",
        alphaTab: ":8 r.4 0.5 3.5 | 0.4 3.4 2.4 0.4 :4 3.5 :8 0.4 | :2 3.4 :8 r.4 0.5 3.5 | 0.4 3.4 2.4 0.4 :4 3.5 :8 0.4 | :1 0.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Verse Barre Chords",
        alphaTab: ":2 (4.5 6.4 6.3 5.2 4.1) (4.6 6.5 6.4 4.3 4.2 4.1) | :2 (5.6 7.5 7.4 6.3 5.2 5.1) (7.6 9.5 9.4 8.3 7.2 7.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Theme & Harmony",
        alphaTab: ":4 (10.6 12.5 12.4) (6.6 8.5 8.4) (8.6 10.5 10.4) (10.6 12.5 12.4) | :8 0.4 3.4 2.4 0.4 :4 3.5 :8 0.4 :4 3.4 |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Dual Lead Solo Lick",
        alphaTab: ":8 10.1 13.1 10.1 13.1 :4 13.1 10.1 | :8 13.2 10.2 12.3 10.3 :2 12.3 | :8 10.3 12.3 10.3 12.3 :4 12.3 10.3 | :1 10.4 |"
      }
    ]
  },

  // 7. Sunshine of Your Love
  {
    slug: 'sunshine-of-your-love',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Descending Blues Riff",
        alphaTab: ":8 12.4 12.4 10.4 12.4 | :4 12.5 11.5 10.5 | :8 10.6 10.6 10.6 12.6 :2 (10.6 12.5 12.4) | :8 12.4 12.4 10.4 12.4 | :4 12.5 11.5 10.5 | :8 10.6 10.6 10.6 12.6 :2 (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Main Riff Under Vocals",
        alphaTab: ":8 12.4 12.4 10.4 12.4 | :4 12.5 11.5 10.5 | :8 10.6 10.6 10.6 12.6 :2 (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Turnaround",
        alphaTab: ":2 (3.6 5.5 5.4) (5.6 7.5 7.4) | :8 12.4 12.4 10.4 12.4 :4 12.5 11.5 | :1 10.5 |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Woman Tone Solo",
        alphaTab: ":8 10.1 13.1 10.1 13.1 :4 13.1 10.1 | :8 13.2 10.2 12.3 10.3 :2 12.3 |"
      }
    ]
  },

  // 8. Barracuda
  {
    slug: 'barracuda',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Gallop Riff & Harmonics",
        alphaTab: ":16 0.6 0.6 0.6 0.6 :8 0.6 :16 0.6 0.6 0.6 0.6 :8 0.6 | :16 0.6 0.6 0.6 0.6 :8 0.6 :4 12.3 12.2 | :16 0.6 0.6 0.6 0.6 :8 0.6 :16 0.6 0.6 0.6 0.6 :8 0.6 | :4 7.3 7.2 5.3 5.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Verse Gallop Groove",
        alphaTab: ":16 0.6 0.6 0.6 0.6 :8 0.6 :16 0.6 0.6 0.6 0.6 :8 0.6 | :16 0.6 0.6 0.6 0.6 :8 0.6 :4 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Heavy Drive",
        alphaTab: ":2 (0.6 2.5 2.4) :4 (10.6 12.5 12.4) (5.6 7.5 7.4) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "High-Register Solo Lick",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 |"
      }
    ]
  },

  // 9. Schism
  {
    slug: 'schism',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "5/8 & 7/8 Hammer-On Riff",
        alphaTab: "\\ts 5 8 :8 0.6 10.5 12.5 10.5 12.5 | \\ts 7 8 :8 0.6 10.5 12.5 10.5 8.5 10.5 8.5 | \\ts 5 8 :8 0.6 10.5 12.5 10.5 12.5 | \\ts 7 8 :8 0.6 10.5 12.5 10.5 8.5 10.5 8.5 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Drop D Verse Groove",
        alphaTab: "\\ts 5 8 :8 0.6 10.5 12.5 10.5 12.5 | \\ts 7 8 :8 0.6 10.5 12.5 10.5 8.5 10.5 8.5 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Drop D Heavy Power Chords",
        alphaTab: "\\ts 6 8 :8 (0.6 0.5 0.4) (0.6 0.5 0.4) (3.6 3.5 3.4) (3.6 3.5 3.4) (10.6 10.5 10.4) (10.6 10.5 10.4) |"
      }
    ]
  },

  // 10. Summer of '69
  {
    slug: 'summer-of-69',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Clean D & A Arpeggios",
        alphaTab: ":8 0.4 2.3 3.2 2.3 0.4 2.3 3.2 2.3 | 0.4 2.3 3.2 2.3 0.4 2.3 3.2 2.3 | 0.5 2.4 2.3 2.2 0.5 2.4 2.3 2.2 | 0.5 2.4 2.3 2.2 0.5 2.4 2.3 2.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Rhythm Guitar Arpeggio",
        alphaTab: ":8 0.4 2.3 3.2 2.3 0.4 2.3 3.2 2.3 | 0.4 2.3 3.2 2.3 0.4 2.3 3.2 2.3 | 0.5 2.4 2.3 2.2 0.5 2.4 2.3 2.2 | 0.5 2.4 2.3 2.2 0.5 2.4 2.3 2.2 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Pre-Chorus Barre Movement",
        alphaTab: ":2 (2.5 4.4 4.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :2 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Chorus Strumming Drive",
        alphaTab: ":2 (0.4 2.3 3.2) (0.5 2.4 2.3) | :2 (0.4 2.3 3.2) (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Melodic Lead Lick",
        alphaTab: ":8 10.2 12.2 10.1 12.1 :4 12.1 10.1 | :8 12.2 10.2 11.3 9.3 :2 11.3 |"
      }
    ]
  },

  // 11. Superstition
  {
    slug: 'superstition',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Eb Clavinet Riff for Guitar",
        alphaTab: ":8 r.8 11.5 :16 13.5 13.5 :8 11.5 :16 13.5 13.5 :8 11.4 13.4 | :8 11.4 13.4 11.5 13.5 :4 11.5 :8 r |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Funk Chord Strumming",
        alphaTab: ":16 (11.5 13.4 11.3 11.2) r.16 :8 (11.5 13.4 11.3 11.2) :16 (11.5 13.4 11.3 11.2) r.16 :8 (11.5 13.4 11.3 11.2) :4 r |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Horn Line Altered Chords",
        alphaTab: ":4 (6.6 8.5 7.4 7.3 8.2) (5.6 7.5 6.4 6.3 7.2) :2 (4.6 6.5 5.4 5.3 6.2) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Funk Groove Outro",
        alphaTab: ":8 r.8 11.5 :16 13.5 13.5 :8 11.5 :16 13.5 13.5 :8 11.4 13.4 | :8 11.4 13.4 11.5 13.5 :4 11.5 :8 r |"
      }
    ]
  },

  // 12. Brown Eyed Girl
  {
    slug: 'brown-eyed-girl',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic 3rds Harmony Riff",
        alphaTab: ":8 0.3 0.2 2.3 1.2 4.3 3.2 :4 5.3 5.2 | :8 4.3 3.2 :4 2.3 1.2 :2 (0.3 0.2) | :8 0.3 0.2 2.3 1.2 4.3 3.2 :4 5.3 5.2 | :8 4.3 3.2 :4 2.3 1.2 :2 (0.4 2.3 3.2) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Acoustic G-C-D Strumming",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (3.5 2.4 0.3 1.2 0.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Sha-La-La Chorus Progression",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (3.5 2.4 0.3 1.2 0.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Outro 3rds Harmony",
        alphaTab: ":8 0.3 0.2 2.3 1.2 4.3 3.2 :4 5.3 5.2 | :8 4.3 3.2 :4 2.3 1.2 :2 (0.3 0.2) |"
      }
    ]
  },

  // 13. Whole Lotta Love
  {
    slug: 'whole-lotta-love',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic E5 Downstroke Gallop",
        alphaTab: ":16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :8 (5.5 7.4) | :16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :8 (5.5 7.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Verse Gallop",
        alphaTab: ":16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :8 (5.5 7.4) | :16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :8 (5.5 7.4) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Page Blues Turnaround",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 |"
      }
    ]
  },

  // 14. Welcome to the Jungle
  {
    slug: 'welcome-to-the-jungle',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Slash B-String Delay Riff",
        alphaTab: ":8 7.2 7.1 7.2 7.1 7.2 7.1 7.2 7.1 | :8 4.2 4.1 4.2 4.1 4.2 4.1 4.2 4.1 | :8 2.2 2.1 2.2 2.1 2.2 2.1 2.2 2.1 | :4 0.6 0.6 0.6 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Verse Power Chords",
        alphaTab: ":4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (3.6 5.5 5.4) (5.6 7.5 7.4) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 6, // Guitar Solo
        exerciseLabel: "High Blues Solo Lick",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 |"
      }
    ]
  },

  // 15. Eye of the Tiger
  {
    slug: 'eye-of-the-tiger',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Cm Syncopated Power Riff",
        alphaTab: ":4 (8.6 10.5 10.4) :8 (8.6 10.5 10.4) r.8 :4 (8.6 10.5 10.4) :8 (8.6 10.5 10.4) | r.8 :8 (8.6 10.5 10.4) :4 (6.6 8.5 8.4) :2 (8.6 10.5 10.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Palm-Muted Chugging",
        alphaTab: ":8 8.6 8.6 8.6 8.6 8.6 8.6 8.6 8.6 | 8.6 8.6 8.6 8.6 8.6 8.6 8.6 8.6 |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthemic Chorus Power Chords",
        alphaTab: ":2 (8.6 10.5 10.4) (4.6 6.5 6.4) | :2 (6.6 8.5 8.4) (8.6 10.5 10.4) |"
      }
    ]
  },

  // 16. Should I Stay or Should I Go
  {
    slug: 'should-i-stay-or-should-i-go',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "D - G - D Syncopated Riff",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) r.8 :4 (3.6 5.5 5.4 4.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :2 (0.4 2.3 3.2 2.1) :4 (0.4 2.3 3.2 2.1) r.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Crunchy Verse Rhythm",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) r.8 :4 (3.6 5.5 5.4 4.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :2 (0.4 2.3 3.2 2.1) :4 (0.4 2.3 3.2 2.1) r.4 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "G - F - G Punk Chorus",
        alphaTab: ":4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) r.8 :4 (1.6 3.5 3.4) (3.6 5.5 5.4) | :2 (3.6 5.5 5.4) :4 (3.6 5.5 5.4) r.4 |"
      }
    ]
  },

  // 17. Brothers in Arms
  {
    slug: 'brothers-in-arms',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Knopfler Expressive Theme",
        alphaTab: ":4 4.3 6.3 :2 4.2 | :4 7.2 4.1 :2 7.2 | :4 6.2 4.2 :2 6.3 | :1 (4.6 6.5 6.4 4.3 4.2 4.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Fingerstyle Chord Progression",
        alphaTab: ":2 (4.6 6.5 6.4 4.3 4.2 4.1) (0.6 2.5 2.4 1.3 0.2 0.1) | :2 (2.6 4.5 4.4 3.3 2.2 2.1) (4.6 6.5 6.4 4.3 4.2 4.1) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Melodic Fingerstyle Solo",
        alphaTab: ":4 4.3 6.3 4.2 7.2 | :2 7.1 :4 4.1 7.2 | :4 4.2 6.3 :2 4.3 |"
      }
    ]
  },

  // 18. The Devil Went Down to Georgia
  {
    slug: 'devil-went-down-to-georgia',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Bluegrass Dm Guitar Run",
        alphaTab: ":8 0.4 2.4 3.4 2.4 0.4 3.5 2.5 3.5 | :8 0.4 2.4 3.4 2.4 :4 0.4 r.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Narrative Rhythm",
        alphaTab: ":2 (10.6 12.5 12.4) (8.6 10.5 10.4) | :2 (6.6 8.5 8.4) (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 3, // Johnny's Solo
        exerciseLabel: "Fast Bluegrass Solo Lick",
        alphaTab: ":16 10.1 12.1 13.1 12.1 10.1 13.2 11.2 13.2 | :16 10.1 12.1 13.1 12.1 :8 10.1 :4 r |"
      }
    ]
  },

  // 19. Dreams
  {
    slug: 'dreams',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Fmaj7 - G6 Syncopated Groove",
        alphaTab: ":4 (1.6 3.5 2.4 2.3 1.2 0.1) :8 (1.6 3.5 2.4 2.3 1.2 0.1) :4 (3.6 5.5 5.4 4.3 3.2 0.1) :8 (3.6 5.5 5.4 4.3 3.2 0.1) | :1 (1.6 3.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Buckingham Fingerstyle Rhythm",
        alphaTab: ":4 (1.6 3.5 2.4 2.3 1.2 0.1) :8 (1.6 3.5 2.4 2.3 1.2 0.1) :4 (3.6 5.5 5.4 4.3 3.2 0.1) :8 (3.6 5.5 5.4 4.3 3.2 0.1) | :1 (1.6 3.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Fmaj7 - G6 Progression",
        alphaTab: ":2 (1.6 3.5 2.4 2.3 1.2 0.1) (3.6 5.5 5.4 4.3 3.2 0.1) | :2 (1.6 3.5 2.4 2.3 1.2 0.1) (3.6 5.5 5.4 4.3 3.2 0.1) |"
      }
    ]
  },

  // 20. Gloria
  {
    slug: 'gloria',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse
        exerciseLabel: "Garage Rock E - D - A Riff",
        alphaTab: ":4 (0.6 2.5 2.4 1.3 0.2 0.1) :8 (0.6 2.5 2.4 1.3 0.2 0.1) :4 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :2 (0.6 2.5 2.4 1.3 0.2 0.1) :4 (0.6 2.5 2.4 1.3 0.2 0.1) r.4 |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "G-L-O-R-I-A Anthem Rhythm",
        alphaTab: ":4 (0.6 2.5 2.4 1.3 0.2 0.1) (0.4 2.3 3.2 2.1) :2 (0.5 2.4 2.3 2.2 0.1) | :1 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },

  // 21. Here I Go Again
  {
    slug: 'here-i-go-again',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Clean Power Ballad Arpeggios",
        alphaTab: ":8 3.6 0.4 0.3 3.2 3.6 0.4 0.3 3.2 | 3.6 2.4 0.3 1.2 3.6 2.4 0.3 1.2 | 2.6 0.4 2.3 3.2 2.6 0.4 2.3 3.2 | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving 80s Rock Rhythm",
        alphaTab: ":2 (3.6 5.5 5.4) (8.6 10.5 10.4) | :2 (10.6 12.5 12.4) (3.6 5.5 5.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthemic Chorus Power Chords",
        alphaTab: ":2 (3.6 5.5 5.4) (10.6 12.5 12.4) | :2 (8.6 10.5 10.4) (3.6 5.5 5.4) |"
      }
    ]
  },

  // 22. Louie Louie
  {
    slug: 'louie-louie',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic 1-4-5m Garage Riff",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) | :4 (7.5 9.4 9.3) :8 (7.5 9.4 9.3) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Standard Garage Groove",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) | :4 (7.5 9.4 9.3) :8 (7.5 9.4 9.3) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) |"
      },
      {
        sectionIndex: 2, // Solo
        exerciseLabel: "Raw Garage Blues Lick",
        alphaTab: ":8 5.1 8.1 5.1 8.1 :4 8.1 5.1 | :8 8.2 5.2 7.3 5.3 :2 7.3 |"
      }
    ]
  },

  // 23. Rebel Yell
  {
    slug: 'rebel-yell',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Steve Stevens Bm Staccato Riff",
        alphaTab: ":8 7.6 7.6 10.6 7.6 7.6 10.6 7.6 10.6 | :4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) :4 (10.6 12.5 12.4) :8 (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Muted 16th-Note Chugging",
        alphaTab: ":8 7.6 7.6 7.6 7.6 7.6 7.6 7.6 7.6 | :4 (7.6 9.5 9.4) :2 (10.6 12.5 12.4) :4 r |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Driving Progression",
        alphaTab: ":2 (7.6 9.5 9.4) (10.6 12.5 12.4) | :2 (5.6 7.5 7.4) (7.6 9.5 9.4) |"
      }
    ]
  }
];

// Validate and Apply Updates
console.log(`Starting update for ${updates.length} flagship songs...`);
let totalSectionsUpdated = 0;
let errorsCount = 0;

for (const song of updates) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'songs', `${song.slug}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Song file not found: ${filePath}`);
    errorsCount++;
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const s of song.sections) {
    // Validate AlphaTex syntax
    const validation = AlphaTexValidator.validate(s.alphaTab);
    if (!validation.isValid) {
      console.error(`SYNTAX ERROR in ${song.slug} section ${s.sectionIndex}:`, validation.errors);
      errorsCount++;
      continue;
    }

    if (!data.sections[s.sectionIndex]) {
      console.error(`ERROR: Section index ${s.sectionIndex} does not exist in ${song.slug}`);
      errorsCount++;
      continue;
    }

    data.sections[s.sectionIndex].alphaTab = s.alphaTab;
    if (s.exerciseLabel) {
      data.sections[s.sectionIndex].exerciseLabel = s.exerciseLabel;
    }
    totalSectionsUpdated++;
  }

  // Save updated JSON
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Updated ${song.slug} (${song.sections.length} sections)`);
}

console.log(`\nCompleted! Total sections updated: ${totalSectionsUpdated}. Errors: ${errorsCount}`);
if (errorsCount > 0) {
  process.exit(1);
}
