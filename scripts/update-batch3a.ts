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
  // 1. Wanted Dead or Alive (Bon Jovi / Richie Sambora)
  {
    slug: 'wanted-dead-or-alive',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Richie Sambora 12-String Sliding 6ths",
        alphaTab: ":8 0.4 12.4 :4 14.3 :8 0.4 10.4 :4 12.3 | :8 0.4 8.4 :4 10.3 :8 0.4 7.4 :4 9.3 | :8 0.4 5.4 :4 7.3 :8 0.4 3.4 :4 5.3 | :8 0.4 2.4 :4 3.3 :2 (0.4 2.3 3.2 1.1) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Acoustic Fingerpicking Pattern",
        alphaTab: ":8 0.4 2.3 3.2 1.1 3.2 2.3 0.4 2.3 | 3.5 2.4 0.3 1.2 0.3 2.4 3.5 2.4 | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 1.1) | :1 (0.4 2.3 3.2 1.1) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Pre-Chorus Dynamic Strumming",
        alphaTab: ":2 (3.5 2.4 0.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :1 (0.4 2.3 3.2 1.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Driving Cowboy Rock Chorus",
        alphaTab: ":2 (0.4 2.3 3.2) (3.5 2.4 0.3 1.2) | :2 (3.6 2.5 0.4 0.3) (0.4 2.3 3.2 1.1) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Richie Sambora Blues-Rock Lick",
        alphaTab: ":8 10.1 13.1 10.1 13.1 :4 13.1 10.1 | :8 13.2 10.2 12.3 10.3 :2 12.3 | :8 10.3 12.3 10.2 13.2 :2 13.1 |"
      }
    ]
  },

  // 2. Everlong (Foo Fighters)
  {
    slug: 'everlong',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Dave Grohl Drop-D Signature Riff",
        alphaTab: ":8 (0.6 0.5 0.4) (0.6 0.5 0.4) (9.6 9.5 11.4) (9.6 9.5 11.4) :4 (9.6 9.5 11.4) :8 (9.6 9.5 11.4) (9.6 9.5 11.4) | :8 (7.6 7.5 9.4) (7.6 7.5 9.4) :4 (7.6 7.5 9.4) :8 (5.6 5.5 7.4) (5.6 5.5 7.4) :4 (5.6 5.5 7.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Fast 16th-Note Muted Chug",
        alphaTab: ":16 (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) (9.6 9.5 11.4) :8 (9.6 9.5 11.4) (9.6 9.5 11.4) :4 (9.6 9.5 11.4) | :16 (7.6 7.5 9.4) (7.6 7.5 9.4) (7.6 7.5 9.4) (7.6 7.5 9.4) (5.6 5.5 7.4) (5.6 5.5 7.4) (5.6 5.5 7.4) (5.6 5.5 7.4) :2 (5.6 5.5 7.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Explosive Drop-D Chorus",
        alphaTab: ":2 (2.6 2.5 2.4) (5.6 5.5 5.4) | :2 (0.6 0.5 0.4) (0.6 0.5 0.4) |"
      },
      {
        sectionIndex: 3, // Bridge
        exerciseLabel: "Bridge Octave Build",
        alphaTab: ":4 (4.5 6.3) (4.5 6.3) (5.5 7.3) (5.5 7.3) | :2 (7.5 9.3) :4 (9.5 11.3) (10.5 12.3) |"
      },
      {
        sectionIndex: 4, // Solo / Interlude
        exerciseLabel: "Melodic Interlude Riff",
        alphaTab: ":8 0.6 0.6 9.4 11.4 0.6 0.6 7.4 9.4 | :8 0.6 0.6 5.4 7.4 :2 (0.6 0.5 0.4) |"
      },
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Rhythmic Outro Vamp",
        alphaTab: ":8 (9.6 9.5 11.4) (9.6 9.5 11.4) :4 (9.6 9.5 11.4) :8 (7.6 7.5 9.4) (7.6 7.5 9.4) :4 (5.6 5.5 7.4) | :1 (0.6 0.5 0.4) |"
      }
    ]
  },

  // 3. Good Riddance (Green Day)
  {
    slug: 'good-riddance',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Billie Joe Armstrong Signature Acoustic Arpeggio",
        alphaTab: ":8 3.6 0.4 0.3 3.2 3.6 0.4 0.3 3.2 | 3.5 0.4 0.3 3.2 :4 (0.4 2.3 3.2) :4 (0.4 2.3 3.2) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Acoustic Fingerpicked Progression",
        alphaTab: ":8 3.6 0.4 0.3 3.2 3.6 0.4 0.3 3.2 | 3.5 0.4 0.3 3.2 :4 (0.4 2.3 3.2) :4 (0.4 2.3 3.2) | :8 3.6 0.4 0.3 3.2 3.6 0.4 0.3 3.2 | 3.5 0.4 0.3 3.2 :2 (0.4 2.3 3.2) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Strumming Dynamic",
        alphaTab: ":2 (0.6 2.5 2.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (0.6 2.5 2.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (0.6 2.5 2.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Full Strummed Verse Groove",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (3.5 2.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Gentle Acoustic Resolution",
        alphaTab: ":8 3.6 0.4 0.3 3.2 3.5 0.4 0.3 3.2 | :4 (0.4 2.3 3.2) :2 (3.6 2.5 0.4 0.3 3.2 3.1) :4 r.4 |"
      }
    ]
  },

  // 4. Message in a Bottle (The Police)
  {
    slug: 'message-in-a-bottle',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Andy Summers Stretchy Add9 Arpeggios",
        alphaTab: ":8 4.5 6.4 8.3 r.8 0.5 2.4 4.3 r.8 | :8 2.5 4.4 6.3 r.8 2.6 4.5 6.4 r.8 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Verse Finger-Stretch Arpeggio Groove",
        alphaTab: ":8 4.5 6.4 8.3 r.8 0.5 2.4 4.3 r.8 | :8 2.5 4.4 6.3 r.8 2.6 4.5 6.4 r.8 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Building Power Chords",
        alphaTab: ":2 (2.6 4.5 4.4) (5.6 7.5 7.4) | :2 (5.5 7.4 7.3) (7.5 9.4 9.3) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Chorus Anthem Chords",
        alphaTab: ":2 (4.5 6.4 6.3) (0.5 2.4 2.3) | :2 (2.6 4.5 4.4) (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Hypnotic Add9 Outro Vamp",
        alphaTab: ":8 4.5 6.4 8.3 r.8 0.5 2.4 4.3 r.8 | :8 2.5 4.4 6.3 r.8 2.6 4.5 6.4 r.8 | :1 (4.5 6.4 8.3) |"
      }
    ]
  },

  // 5. Folsom Prison Blues (Johnny Cash)
  {
    slug: 'folsom-prison-blues',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Luther Perkins Boom-Chicka Intro",
        alphaTab: ":8 0.6 1.6 2.6 (2.5 1.4 2.1) 0.5 (2.5 1.4 2.1) 2.6 (2.5 1.4 2.1) | :8 0.5 (2.5 1.4 2.1) 2.6 (2.5 1.4 2.1) :2 (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Boom-Chicka E-B7 Country Alternating Bass",
        alphaTab: ":8 0.6 (0.4 1.3 0.2) 2.5 (0.4 1.3 0.2) 0.6 (0.4 1.3 0.2) 2.5 (0.4 1.3 0.2) | :8 2.5 (1.4 2.3 0.2) 2.6 (1.4 2.3 0.2) 2.5 (1.4 2.3 0.2) :4 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      },
      {
        sectionIndex: 2, // Verse 2
        exerciseLabel: "Country Strumming Progression",
        alphaTab: ":2 (0.6 2.5 2.4 1.3 0.2 0.1) (0.5 2.4 2.3 2.2 0.1) | :2 (2.5 1.4 2.3 0.2 2.1) (0.6 2.5 2.4 1.3 0.2 0.1) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Luther Perkins Telecaster Solo",
        alphaTab: ":8 0.6 2.6 0.5 2.5 :4 0.4 :8 2.4 0.4 | :4 2.5 :8 0.5 2.5 :2 (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Final Country Cadence",
        alphaTab: ":8 2.5 (1.4 2.3 0.2) 2.6 (1.4 2.3 0.2) :4 (0.6 2.5 2.4 1.3 0.2 0.1) r.4 | :1 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },

  // 6. Free Fallin' (Tom Petty)
  {
    slug: 'free-fallin',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Tom Petty Capo 3 Jangly D-Dsus4 Pattern",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 3.1) (0.4 2.3 3.2 3.1) :4 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Rhythmic Acoustic Verse Strum",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 3.1) (0.4 2.3 3.2 3.1) :4 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Acoustic Chorus",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 3.1) | :2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Interlude
        exerciseLabel: "Dynamic Acoustic Interlude",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 3.1) (0.4 2.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Climactic Chorus Outro",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 3.1) | :2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2) | :1 (0.4 2.3 3.2 2.1) |"
      }
    ]
  },

  // 7. You Really Got Me (The Kinks)
  {
    slug: 'you-really-got-me',
    sections: [
      {
        sectionIndex: 0, // Intro / Main Riff
        exerciseLabel: "Dave Davies Proto-Punk F-G Distortion Riff",
        alphaTab: ":8 (1.6 3.5) (1.6 3.5) :4 (3.6 5.5) :8 (1.6 3.5) :4 (3.6 5.5) :8 r.8 | :8 (1.6 3.5) (1.6 3.5) :4 (3.6 5.5) :8 (1.6 3.5) :4 (3.6 5.5) :8 r.8 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Garage Verse Riff",
        alphaTab: ":8 (1.6 3.5) (1.6 3.5) :4 (3.6 5.5) :8 (1.6 3.5) :4 (3.6 5.5) :8 r.8 | :8 (1.6 3.5) (1.6 3.5) :4 (3.6 5.5) :8 (1.6 3.5) :4 (3.6 5.5) :8 r.8 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Key-Shift G-A Power Chords",
        alphaTab: ":8 (3.6 5.5) (3.6 5.5) :4 (5.6 7.5) :8 (3.6 5.5) :4 (5.6 7.5) :8 r.8 | :8 (3.6 5.5) (3.6 5.5) :4 (5.6 7.5) :8 (3.6 5.5) :4 (5.6 7.5) :8 r.8 |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Raw Frenetic Garage Solo",
        alphaTab: ":8 3.1 6.1 3.1 6.1 :4 6.1 3.1 | :8 6.2 3.2 5.3 3.3 :2 5.3 | :8 3.3 5.3 3.2 6.2 :2 6.1 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Power Chord Climax",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) :4 (7.6 9.5) :8 (5.6 7.5) :4 (7.6 9.5) :8 r.8 | :1 (5.6 7.5) |"
      }
    ]
  },

  // 8. Zombie (The Cranberries)
  {
    slug: 'zombie',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Noel Hogan Atmospheric Clean Arpeggio",
        alphaTab: ":8 0.6 2.5 2.4 0.3 0.2 0.1 0.2 0.3 | 3.5 2.4 0.3 0.2 0.1 0.2 0.3 2.4 | :8 3.6 2.5 0.4 0.3 0.2 0.1 0.2 0.3 | 2.6 0.4 2.3 3.2 2.1 3.2 2.3 0.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Verse Acoustic Arpeggio Pattern",
        alphaTab: ":8 0.6 2.5 2.4 0.3 0.2 0.1 0.2 0.3 | 3.5 2.4 0.3 0.2 0.1 0.2 0.3 2.4 | :8 3.6 2.5 0.4 0.3 0.2 0.1 0.2 0.3 | 2.6 0.4 2.3 3.2 2.1 3.2 2.3 0.4 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Heavy Distorted Grunge Power Chords",
        alphaTab: ":2 (0.6 2.5 2.4) (3.5 5.4 5.3) | :2 (3.6 5.5 5.4) (2.6 4.5 4.4) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Dynamic Clean Verse Progression",
        alphaTab: ":8 0.6 2.5 2.4 0.3 0.2 0.1 0.2 0.3 | 3.5 2.4 0.3 0.2 0.1 0.2 0.3 2.4 | :2 (3.6 5.5 5.4) (2.6 4.5 4.4) |"
      },
      {
        sectionIndex: 4, // Chorus / Outro
        exerciseLabel: "Climactic Outro Wall of Sound",
        alphaTab: ":2 (0.6 2.5 2.4) (3.5 5.4 5.3) | :2 (3.6 5.5 5.4) (2.6 4.5 4.4) | :1 (0.6 2.5 2.4) |"
      }
    ]
  },

  // 9. Roundabout (Yes)
  {
    slug: 'roundabout',
    sections: [
      {
        sectionIndex: 0, // Acoustic Intro (Harmonics)
        exerciseLabel: "Steve Howe Natural Harmonics Intro",
        alphaTab: ":4 12.6 12.3 12.2 :4 7.2 | :4 7.3 12.1 :2 12.6 |"
      },
      {
        sectionIndex: 1, // Acoustic Intro (Fingerpicking)
        exerciseLabel: "Rapid Acoustic Em Fingerpicking Run",
        alphaTab: ":16 0.6 2.6 3.6 :8 2.5 :16 0.5 2.5 3.5 :8 2.4 | :16 0.4 2.4 4.4 :8 2.3 :2 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      },
      {
        sectionIndex: 2, // Verse
        exerciseLabel: "Prog Rock Em Driving Rhythm",
        alphaTab: ":8 0.6 0.6 :4 (0.6 2.5 2.4) :8 0.6 0.6 :4 (3.6 5.5 5.4) | :8 0.6 0.6 :4 (5.6 7.5 7.4) :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Harmonic Chorus Movement",
        alphaTab: ":2 (3.6 5.5 5.4) (5.6 7.5 7.4) | :2 (0.6 2.5 2.4) (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 4, // Instrumental Bridge
        exerciseLabel: "Intricate Spanish-Flavored Classical Theme",
        alphaTab: ":8 7.1 8.1 7.1 5.1 :4 3.1 :8 2.1 0.1 | :4 2.1 :8 3.1 2.1 :2 0.1 |"
      },
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Final Harmonic Fade",
        alphaTab: ":4 12.6 12.3 12.2 7.2 | :2 12.1 :2 12.6 |"
      }
    ]
  },

  // 10. Born to Be Wild (Steppenwolf)
  {
    slug: 'born-to-be-wild',
    sections: [
      {
        sectionIndex: 0, // Intro / Main Riff
        exerciseLabel: "Heavy Rock E5 Riff & Turnaround",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) 0.6 0.6 :4 (0.6 2.5) :8 0.4 2.4 | :8 (0.6 2.5) (0.6 2.5) 0.6 0.6 :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Highway Chug Driving Rhythm",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) 0.6 0.6 :4 (0.6 2.5) :8 0.4 2.4 | :8 (0.6 2.5) (0.6 2.5) 0.6 0.6 :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem E-G-A Progression",
        alphaTab: ":2 (0.6 2.5 2.4) (3.6 5.5 5.4) | :2 (5.6 7.5 7.4) (0.6 2.5 2.4) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Raw Blues-Rock E Solo Lick",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Final Heavy Cadence",
        alphaTab: ":4 (0.6 2.5) (3.6 5.5) :2 (5.6 7.5) | :1 (0.6 2.5) |"
      }
    ]
  },

  // 11. Don't Stop Believin' (Journey)
  {
    slug: 'dont-stop-believin',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Neal Schon Palm-Muted E-B-C#m-A Arpeggios",
        alphaTab: ":8 0.6 2.5 2.4 4.3 2.5 4.3 2.4 2.5 | 2.5 4.4 4.3 4.2 4.4 4.2 4.3 4.4 | :8 4.5 6.4 6.3 5.2 6.4 5.2 6.3 6.4 | 0.5 2.4 2.3 2.2 2.4 2.2 2.3 2.4 |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Arpeggiated Verse Accompaniment",
        alphaTab: ":8 0.6 2.5 2.4 4.3 2.5 4.3 2.4 2.5 | 2.5 4.4 4.3 4.2 4.4 4.2 4.3 4.4 | :8 4.5 6.4 6.3 5.2 6.4 5.2 6.3 6.4 | 0.5 2.4 2.3 2.2 2.4 2.2 2.3 2.4 |"
      },
      {
        sectionIndex: 2, // Verse 2
        exerciseLabel: "Building Verse Dynamics",
        alphaTab: ":2 (0.6 2.5 2.4) (2.5 4.4 4.3) | :2 (4.5 6.4 6.3) (0.5 2.4 2.3) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Arena Rock Power Chords",
        alphaTab: ":2 (0.6 2.5 2.4) (2.5 4.4 4.3) | :2 (4.5 6.4 6.3) (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Neal Schon Melodic Solo Theme",
        alphaTab: ":8 12.2 14.2 :4 12.1 :8 14.1 12.1 :4 14.1 | :8 12.1 14.2 12.2 14.3 :2 13.3 | :8 11.4 13.4 12.3 14.3 :2 14.2 |"
      },
      {
        sectionIndex: 5, // Final Chorus
        exerciseLabel: "Full Arena Climax",
        alphaTab: ":2 (0.6 2.5 2.4) (2.5 4.4 4.3) | :2 (4.5 6.4 6.3) (0.5 2.4 2.3) | :1 (0.6 2.5 2.4) |"
      }
    ]
  },

  // 12. Bad Moon Rising (Creedence Clearwater Revival)
  {
    slug: 'bad-moon-rising',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse
        exerciseLabel: "John Fogerty Syncopated D-A-G Rhythm Chop",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) r.8 :4 (0.5 2.4 2.3 2.2) :8 (3.6 2.5 0.4 0.3) | :2 (0.4 2.3 3.2 2.1) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "Country Rock G-D-A Cadence",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 2.2 0.1) (0.4 2.3 3.2 2.1) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Verse 2
        exerciseLabel: "Dynamic Rhythmic Strums",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) r.8 :4 (0.5 2.4 2.3 2.2) :8 (3.6 2.5 0.4 0.3) | :2 (0.4 2.3 3.2 2.1) :2 r.2 |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Final Country-Rock Resolution",
        alphaTab: ":2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 2.2 0.1) (0.4 2.3 3.2 2.1) | :1 (0.4 2.3 3.2 2.1) |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3A (${updates.length} iconic songs)...`);
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

console.log(`\nBatch 3A Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

