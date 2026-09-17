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
  // 1. Every Rose Has Its Thorn (Poison)
  {
    slug: 'every-rose-has-its-thorn',
    sections: [
      {
        sectionIndex: 0, // Acoustic Intro
        exerciseLabel: "G to Cadd9 Acoustic Picking Pattern",
        alphaTab: ":8 3.6 0.4 0.3 3.2 :4 (3.2 3.1) :8 3.5 2.4 | :8 0.3 3.2 :4 (3.2 3.1) :8 3.6 0.4 0.3 3.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "G-Cadd9 Storytelling Verse Strum",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (3.5 2.4 0.3 3.2 3.1) :8 (3.5 2.4 0.3 3.2 3.1) (3.5 2.4 0.3 3.2 3.1) | :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Em-D-Cadd9 Ballad Hook Strum",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (3.5 2.4 0.3 3.2 3.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (0.6 2.5 2.4 0.3 0.2 0.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Embellished Acoustic Verse Strumming",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) 0.3 :4 (3.5 2.4 0.3 3.2 3.1) :8 (3.5 2.4 0.3 3.2 3.1) 2.3 | :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 4, // Chorus 2
        exerciseLabel: "Dynamic Acoustic Chorus Build",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (3.5 2.4 0.3 3.2 3.1) :8 (3.5 2.4 0.3 3.2 3.1) (3.5 2.4 0.3 3.2 3.1) | :4 (0.6 2.5 2.4 0.3 0.2 0.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 5, // Bridge
        exerciseLabel: "Em-D-Cadd9 Reflective Bridge Strum",
        alphaTab: ":2 (0.6 2.5 2.4 0.3 0.2 0.1) (0.4 2.3 3.2 2.1) | :2 (3.5 2.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 6, // Guitar Solo
        exerciseLabel: "C.C. DeVille Melodic Ballad Solo",
        alphaTab: ":8 r.4 12.2 15.2 :4 15.2 :8 12.2 15.1 | :4 15.1 :8 12.1 15.2 :2 12.2 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      },
      {
        sectionIndex: 7, // Final Chorus
        exerciseLabel: "Anthemic Power Ballad Climax Strum",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (3.5 2.4 0.3 3.2 3.1) :8 (3.5 2.4 0.3 3.2 3.1) (3.5 2.4 0.3 3.2 3.1) | :4 (0.6 2.5 2.4 0.3 0.2 0.1) (0.4 2.3 3.2 2.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      }
    ]
  },

  // 2. Hurt So Good (John Cougar Mellencamp)
  {
    slug: 'hurt-so-good',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Heartland Rock E-A-B Driving Intro Riff",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) | :4 (2.5 4.4) :8 (2.5 4.4) (0.5 2.4) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Tight Palm-Muted Heartland Verse Rhythm",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) | :8 (2.5 4.4) (2.5 4.4) (2.5 4.4) (2.5 4.4) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthemic E-B-A Pop-Rock Chorus",
        alphaTab: ":4 (0.6 2.5 2.4 1.3) :8 (0.6 2.5 2.4 1.3) (0.6 2.5 2.4 1.3) :4 (2.5 4.4 4.3 4.2) (0.5 2.4 2.3 2.2) | :2 (0.5 2.4 2.3 2.2) :2 (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Driving Verse 2 Rhythm with Accents",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) | :8 (2.5 4.4) (2.5 4.4) (2.5 4.4) (2.5 4.4) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 4, // Chorus 2
        exerciseLabel: "Full-Energy Chorus Strumming",
        alphaTab: ":4 (0.6 2.5 2.4 1.3) :8 (0.6 2.5 2.4 1.3) (0.6 2.5 2.4 1.3) :4 (2.5 4.4 4.3 4.2) (0.5 2.4 2.3 2.2) | :2 (0.5 2.4 2.3 2.2) :2 (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 5, // Bridge/Solo
        exerciseLabel: "Larry Crane E Major Pentatonic Solo",
        alphaTab: ":8 12.1 14.1 12.1 14.1 :4 14.1 :8 12.1 14.2 | :8 12.2 14.2 12.2 14.2 :2 13.3 | :8 14.2 12.2 13.3 14.4 :2 12.4 |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Climax Full Band Chorus Groove",
        alphaTab: ":4 (0.6 2.5 2.4 1.3) :8 (0.6 2.5 2.4 1.3) (0.6 2.5 2.4 1.3) :4 (2.5 4.4 4.3 4.2) (0.5 2.4 2.3 2.2) | :2 (0.5 2.4 2.3 2.2) :2 (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 7, // Outro
        exerciseLabel: "Outro Heartland Rock Riff Fade",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) (2.5 4.4) | :2 (0.6 2.5) :2 r.2 |"
      }
    ]
  },

  // 3. Take Me to Church (Hozier)
  {
    slug: 'take-me-to-church',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Intimate Em-Am Fingerpicked Blues Pattern",
        alphaTab: ":8 0.6 2.4 0.3 0.2 :4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 0.5 2.4 | :8 2.3 1.2 :4 (0.5 2.4 2.3 1.2 0.1) :2 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Em-Am-G-D Hymn-Like Fingerpicking",
        alphaTab: ":8 0.6 2.5 2.4 0.3 :4 (0.6 2.5 2.4 0.3) :8 0.5 2.4 2.3 1.2 | :4 (0.5 2.4 2.3 1.2) :8 3.6 2.5 0.4 0.3 :4 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthemic Double-Time Chorus Strum",
        alphaTab: ":4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 4, // Verse 2
        exerciseLabel: "Reflective Verse 2 Fingerpicking Return",
        alphaTab: ":8 0.6 2.4 0.3 0.2 :4 (0.6 2.5 2.4 0.3) :8 0.5 2.4 2.3 1.2 | :4 (0.5 2.4 2.3 1.2) :2 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      },
      {
        sectionIndex: 5, // Bridge
        exerciseLabel: "Atmospheric C-Em Sustained Arpeggios",
        alphaTab: ":2 (3.5 2.4 0.3 1.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (2.5 4.4 4.3 4.2 2.1) |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Climactic Full-Intensity Gospel-Rock Strum",
        alphaTab: ":4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) | :2 (3.5 2.4 0.3 1.2 0.1) :2 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      },
      {
        sectionIndex: 7, // Outro
        exerciseLabel: "Gentle Acoustic Wind-Down Pattern",
        alphaTab: ":8 0.6 2.4 0.3 0.2 :2 (0.6 2.5 2.4 0.3 0.2 0.1) :8 0.5 2.4 | :1 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      },
      {
        sectionIndex: 8, // Scale Practice Exercise
        exerciseLabel: "E Minor Blues Box Lead Phrasing",
        alphaTab: ":8 12.6 15.6 12.5 14.5 :4 12.4 :8 14.4 12.3 | :8 14.3 15.3 12.2 15.2 :2 12.1 | :8 15.1 12.1 15.2 12.2 :2 14.3 |"
      }
    ]
  },

  // 4. Photograph (Def Leppard)
  {
    slug: 'photograph',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Steve Clark Iconic 12-String Intro Riff",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) :4 (2.5 4.4) :8 (0.5 2.4) (0.5 2.4) :4 (2.5 4.4) | :8 (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Palm-Muted E-A-B Arena Rock Verse Riff",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) | :8 (2.5 4.4) (2.5 4.4) (2.5 4.4) (2.5 4.4) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Ascending A5-B5-C#5 Pre-Chorus Climb",
        alphaTab: ":2 (0.5 2.4) (2.5 4.4) | :2 (4.5 6.4) (2.5 4.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Massive Layered Wall-of-Sound Chorus Riff",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (2.5 4.4) (0.5 2.4) | :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 4, // Verse 2
        exerciseLabel: "Controlled Palm-Muted Verse 2 Groove",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) (2.5 4.4) | :8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :2 (0.5 2.4) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Steve Clark & Phil Collen Twin-Harmony Solo",
        alphaTab: ":8 12.1 14.1 :4 16.1 :8 14.1 12.1 :4 14.1 | :8 12.2 14.2 12.2 14.2 :2 13.3 | :8 12.1 14.1 16.1 17.1 :2 19.1 |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Anthemic Stadium Chorus Climax",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (2.5 4.4) (0.5 2.4) | :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) :2 (0.6 2.5) |"
      }
    ]
  },

  // 5. Pour Some Sugar on Me (Def Leppard)
  {
    slug: 'pour-some-sugar-on-me',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Stomping Power Chord Rhythmic Stabs",
        alphaTab: ":4 (4.5 6.4) :8 (4.5 6.4) r.8 :4 (7.5 9.4) :8 (7.5 9.4) r.8 | :4 (0.5 2.4) :8 (0.5 2.4) r.8 :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Ascending A5-B5-C#5 Tension Build",
        alphaTab: ":2 (0.5 2.4) (2.5 4.4) | :2 (4.5 6.4) (2.5 4.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Stadium Anthem Power Groove",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) :8 (0.5 2.4) (0.5 2.4) | :4 (2.5 4.4) (4.5 6.4) :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Heavy Syncopated Bridge Power Chords",
        alphaTab: ":2 (0.5 2.4) (2.5 4.4) | :2 (0.6 2.5) (4.5 6.4) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Phil Collen High-Gain C#m Solo Lick",
        alphaTab: ":8 9.1 12.1 9.1 12.1 :4 12.1 :8 9.1 12.2 | :8 9.2 11.3 9.3 11.3 :2 11.3 | :8 9.3 11.3 9.2 12.2 :2 12.1 |"
      },
      {
        sectionIndex: 6, // Outro
        exerciseLabel: "Climactic Chorus Repetition Fade",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (0.5 2.4) (2.5 4.4) | :2 (4.5 6.4) :2 (2.5 4.4) |"
      },
      {
        sectionIndex: 7, // Scale Practice Exercise
        exerciseLabel: "C# Minor Pentatonic Box Run",
        alphaTab: ":8 9.6 12.6 9.5 11.5 :4 9.4 :8 11.4 9.3 | :8 11.3 9.2 12.2 9.1 :2 12.1 | :8 12.1 9.1 12.2 9.2 :2 11.3 |"
      }
    ]
  },

  // 6. Riptide (Vance Joy)
  {
    slug: 'riptide',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Syncopated Am-G-C Folk Strum",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) :8 (0.5 2.4 2.3 1.2 0.1) (0.5 2.4 2.3 1.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (3.5 2.4 0.3 1.2 0.1) :8 (3.5 2.4 0.3 1.2 0.1) (3.5 2.4 0.3 1.2 0.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Am-G-C-F Acoustic Storytelling Rhythm",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.5 2.4 0.3 1.2 0.1) | :4 (1.6 3.5 3.4 2.3 1.2 1.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Building Upbeat Pre-Chorus Rhythm",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) :8 (0.5 2.4 2.3 1.2 0.1) (0.5 2.4 2.3 1.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (3.5 2.4 0.3 1.2 0.1) :8 (3.5 2.4 0.3 1.2 0.1) (3.5 2.4 0.3 1.2 0.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Riptide Sing-Along Chorus Strum",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) :8 (0.5 2.4 2.3 1.2 0.1) (0.5 2.4 2.3 1.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (3.5 2.4 0.3 1.2 0.1) :8 (3.5 2.4 0.3 1.2 0.1) (3.5 2.4 0.3 1.2 0.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 4, // Verse 2
        exerciseLabel: "Intimate Folk Verse 2 Strumming",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.5 2.4 0.3 1.2 0.1) | :4 (1.6 3.5 3.4 2.3 1.2 1.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 5, // Final Chorus and Outro
        exerciseLabel: "Full-Energy Chorus & Acoustic Outro",
        alphaTab: ":4 (0.5 2.4 2.3 1.2 0.1) :8 (0.5 2.4 2.3 1.2 0.1) (0.5 2.4 2.3 1.2 0.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) (3.5 2.4 0.3 1.2 0.1) | :1 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 6, // Scale Practice Exercise
        exerciseLabel: "C Major / A Minor Pentatonic Box Run",
        alphaTab: ":8 8.6 10.6 7.5 10.5 :4 7.4 :8 10.4 7.3 | :8 9.3 8.2 10.2 8.1 :2 10.1 | :8 10.1 8.1 10.2 8.2 :2 9.3 |"
      }
    ]
  },

  // 7. All Blues (Miles Davis)
  {
    slug: 'all-blues',
    sections: [
      {
        sectionIndex: 0, // Intro/Vamp
        exerciseLabel: "G7 Modal Blues Guitar Comping Vamp",
        alphaTab: ":4 (3.6 5.5 3.4 4.3) :8 (3.6 5.5 3.4 4.3) (3.6 5.5 3.4 4.3) :4 (3.6 5.5 5.4 4.3) :8 (3.6 5.5 5.4 4.3) (3.6 5.5 5.4 4.3) | :4 (3.6 5.5 3.4 4.3) :8 (3.6 5.5 3.4 4.3) (3.6 5.5 3.4 4.3) :2 (3.6 5.5 5.4 4.3) |"
      },
      {
        sectionIndex: 1, // Head (Theme)
        exerciseLabel: "Miles Davis Trumpet Head Transcribed for Guitar",
        alphaTab: ":4 3.6 :8 5.5 5.4 :4 3.3 5.3 | :2 5.3 :4 3.3 :8 5.5 5.4 | :1 3.4 |"
      },
      {
        sectionIndex: 2, // Solo Section (Miles Davis)
        exerciseLabel: "Lyrical Modal Jazz Blues Solo Phrasing",
        alphaTab: ":8 3.3 5.3 6.3 7.3 :4 5.2 :8 3.2 5.2 | :4 6.2 :8 5.2 3.2 :2 5.3 | :8 3.3 5.3 3.3 5.4 :2 5.5 |"
      },
      {
        sectionIndex: 3, // Solo Section (Cannonball / Coltrane)
        exerciseLabel: "Advanced Jazz Comping G13 & C9 Voicings",
        alphaTab: ":2 (3.6 3.4 4.3 5.2) (8.6 8.5 8.4 7.3) | :2 (5.5 4.4 5.3 6.2) (3.6 3.4 4.3 5.2) |"
      },
      {
        sectionIndex: 4, // Head Out (Final Theme)
        exerciseLabel: "Final Theme Restatement & Restrained Comping",
        alphaTab: ":4 3.6 :8 5.5 5.4 :4 3.3 5.3 | :2 5.3 :4 3.3 :8 5.5 5.4 | :1 3.4 |"
      },
      {
        sectionIndex: 5, // Outro/Vamp
        exerciseLabel: "Fading 6/4 Modal Blues Groove",
        alphaTab: ":4 (3.6 5.5 3.4 4.3) :8 (3.6 5.5 3.4 4.3) (3.6 5.5 3.4 4.3) :4 (3.6 5.5 5.4 4.3) :8 (3.6 5.5 5.4 4.3) (3.6 5.5 5.4 4.3) | :1 (3.6 5.5 3.4 4.3) |"
      }
    ]
  },

  // 8. Mammas Don't Let Your Babies Grow Up to Be Cowboys (Waylon Jennings)
  {
    slug: 'mammas-dont-let-your-babies',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Outlaw Country D Major 3/4 Boom-Chick Waltz",
        alphaTab: ":4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 0.5 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 3.6 (0.4 0.3 3.2 3.1) (0.4 0.3 3.2 3.1) | :4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Waylon Jennings Easy-Going Outlaw Waltz",
        alphaTab: ":4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 3.6 (0.4 0.3 3.2 3.1) (0.4 0.3 3.2 3.1) | :4 0.5 (2.4 2.3 2.2) (2.4 2.3 2.2) | :4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Sing-Along D-G-A Country Chorus Waltz",
        alphaTab: ":4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 3.6 (0.4 0.3 3.2 3.1) (0.4 0.3 3.2 3.1) | :4 0.5 (2.4 2.3 2.2) (2.4 2.3 2.2) | :4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Spacious Outlaw Country Rhythm Strum",
        alphaTab: ":4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 3.6 (0.4 0.3 3.2 3.1) (0.4 0.3 3.2 3.1) | :4 0.5 (2.4 2.3 2.2) (2.4 2.3 2.2) | :4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 4, // Final Chorus & Outro
        exerciseLabel: "Final Chorus Repetition & Outlaw Fade",
        alphaTab: ":4 0.4 (2.3 3.2 2.1) (2.3 3.2 2.1) | :4 3.6 (0.4 0.3 3.2 3.1) (0.4 0.3 3.2 3.1) | :4 0.5 (2.4 2.3 2.2) (2.4 2.3 2.2) | :2 (0.4 2.3 3.2 2.1) :4 r.4 |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "D Major Pentatonic Outlaw Country Lick",
        alphaTab: ":8 10.6 12.6 9.5 12.5 :4 9.4 :8 12.4 9.3 | :8 11.3 10.2 12.2 10.1 :2 12.1 | :8 12.1 10.1 12.2 10.2 :2 11.3 |"
      }
    ]
  },

  // 9. What's Going On (Marvin Gaye)
  {
    slug: 'whats-going-on',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Smooth Emaj7 to C#m7 Motown Soul Stabs",
        alphaTab: ":4 r.4 :8 (7.5 9.4 8.3 9.2) (7.5 9.4 8.3 9.2) :4 r.4 :8 (4.5 6.4 4.3 5.2) (4.5 6.4 4.3 5.2) | :2 (7.5 9.4 8.3 9.2) :2 (4.5 6.4 4.3 5.2) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Silky R&B Emaj7-C#m7 Comping Groove",
        alphaTab: ":4 (7.5 9.4 8.3 9.2) :8 (7.5 9.4 8.3 9.2) (7.5 9.4 8.3 9.2) :4 (4.5 6.4 4.3 5.2) :8 (4.5 6.4 4.3 5.2) (4.5 6.4 4.3 5.2) | :2 (7.5 9.4 8.3 9.2) :2 (4.5 6.4 4.3 5.2) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Soaring Soul Chorus Rhythm Bed",
        alphaTab: ":4 (7.5 9.4 8.3 9.2) :8 (7.5 9.4 8.3 9.2) (7.5 9.4 8.3 9.2) :4 (4.5 6.4 4.3 5.2) :8 (4.5 6.4 4.3 5.2) (4.5 6.4 4.3 5.2) | :2 (7.5 9.4 8.3 9.2) :2 (4.5 6.4 4.3 5.2) |"
      },
      {
        sectionIndex: 3, // Bridge
        exerciseLabel: "Harmonic Modulation Amaj7-B7 Bridge",
        alphaTab: ":2 (5.6 7.5 6.4 6.3 5.2) (7.5 9.4 8.3 7.2) | :2 (7.5 9.4 8.3 9.2) (4.5 6.4 4.3 5.2) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Soulful Outro Vamp Fade",
        alphaTab: ":4 (7.5 9.4 8.3 9.2) :8 (7.5 9.4 8.3 9.2) (7.5 9.4 8.3 9.2) :4 (4.5 6.4 4.3 5.2) (7.5 9.4 8.3 9.2) | :1 (7.5 9.4 8.3 9.2) |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "E Major Pentatonic Soul Lead Run",
        alphaTab: ":8 12.6 14.6 11.5 14.5 :4 11.4 :8 14.4 11.3 | :8 13.3 12.2 14.2 12.1 :2 14.1 | :8 14.1 12.1 14.2 12.2 :2 13.3 |"
      }
    ]
  },

  // 10. Classical Gas (Mason Williams)
  {
    slug: 'classical-gas',
    sections: [
      {
        sectionIndex: 0, // Intro / Theme A
        exerciseLabel: "Mason Williams Signature Am Classical Arpeggios",
        alphaTab: ":8 0.5 2.4 2.3 1.2 :4 0.1 :8 1.2 0.1 | :8 3.5 2.4 0.3 1.2 :4 0.1 :8 1.2 0.1 | :8 2.5 2.4 2.3 1.2 :4 0.1 :8 0.6 0.1 | :1 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 1, // Theme B
        exerciseLabel: "C Major Bright Classical Arpeggio Theme",
        alphaTab: ":8 3.5 2.4 0.3 1.2 :4 (3.5 2.4 0.3 1.2) :8 3.6 2.5 0.4 0.3 | :4 (3.6 2.5 0.4 0.3) :2 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 2, // Development
        exerciseLabel: "Circle-of-Fifths Classical Development",
        alphaTab: ":4 (0.4 2.3 3.2 1.1) (3.6 2.5 0.4 0.3) :2 (3.5 2.4 0.3 1.2) | :4 (1.6 3.5 3.4 2.3) (0.6 2.5 0.4 1.3 0.2 0.1) :2 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Theme A Reprise
        exerciseLabel: "Theme A Reprise with Classical Ornamentation",
        alphaTab: ":8 0.5 2.4 2.3 1.2 :4 0.1 :8 1.2 0.1 | :8 3.5 2.4 0.3 1.2 :4 0.1 :8 1.2 0.1 | :2 (0.6 2.5 0.4 1.3 0.2 0.1) :2 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 4, // Coda
        exerciseLabel: "Virtuosic Classical Fingerpicking Coda Climax",
        alphaTab: ":8 0.5 2.4 2.3 1.2 0.1 1.2 2.3 2.4 | :8 0.4 2.3 3.2 1.1 0.6 2.5 0.4 1.3 | :1 (0.5 2.4 2.3 1.2 0.1) |"
      }
    ]
  },

  // 11. A Horse with No Name (America)
  {
    slug: 'horse-with-no-name',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Hypnotic Em to D6/9 Open String Strum",
        alphaTab: ":4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :4 (2.6 0.5 0.4 2.3 0.2 0.1) :8 (2.6 0.5 0.4 2.3 0.2 0.1) (2.6 0.5 0.4 2.3 0.2 0.1) | :4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :2 (2.6 0.5 0.4 2.3 0.2 0.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Desert Journey Storytelling Acoustic Rhythm",
        alphaTab: ":4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :4 (2.6 0.5 0.4 2.3 0.2 0.1) :8 (2.6 0.5 0.4 2.3 0.2 0.1) (2.6 0.5 0.4 2.3 0.2 0.1) | :2 (0.6 2.5 2.4 0.3 0.2 0.1) :2 (2.6 0.5 0.4 2.3 0.2 0.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Signature Folk-Rock Chorus Groove",
        alphaTab: ":4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :4 (2.6 0.5 0.4 2.3 0.2 0.1) :8 (2.6 0.5 0.4 2.3 0.2 0.1) (2.6 0.5 0.4 2.3 0.2 0.1) | :4 (0.6 2.5 2.4 0.3 0.2 0.1) :8 (0.6 2.5 2.4 0.3 0.2 0.1) (0.6 2.5 2.4 0.3 0.2 0.1) :2 (2.6 0.5 0.4 2.3 0.2 0.1) |"
      },
      {
        sectionIndex: 3, // Instrumental Break
        exerciseLabel: "Em-D6/9 Folk Arpeggiated Melody",
        alphaTab: ":8 0.6 2.5 2.4 0.3 0.2 0.3 2.4 2.5 | :8 2.6 0.5 0.4 2.3 0.2 2.3 0.4 0.5 |"
      },
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "E Minor Dorian Folk Lick",
        alphaTab: ":8 0.6 3.6 0.5 2.5 :4 0.4 :8 2.4 0.3 | :8 2.3 0.2 3.2 0.1 :2 3.1 | :8 3.1 0.1 3.2 0.2 :2 2.3 |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3E Part 1 (${updates.length} songs)...`);
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

console.log(`\nBatch 3E Part 1 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

