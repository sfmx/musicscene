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
  // 1. Livin' on a Prayer (Bon Jovi)
  {
    slug: 'livin-on-a-prayer',
    sections: [
      {
        sectionIndex: 0, // Intro (Talk Box)
        exerciseLabel: "Richie Sambora Talk-Box Wah Theme",
        alphaTab: ":8 0.6 0.6 0.6 7.5 :4 5.4 :8 0.6 7.5 | :4 5.4 :8 0.6 0.6 :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Muted Em Chug & Stabs",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (3.5 5.4) | :4 (5.5 7.4) :2 (0.6 2.5 2.4) :4 r.4 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Building Pre-Chorus Dynamics",
        alphaTab: ":2 (3.5 5.4 5.3) (5.5 7.4 7.3) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthem Power Progression",
        alphaTab: ":2 (0.6 2.5 2.4) (3.5 5.4 5.3) | :2 (5.5 7.4 7.3) (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Talk Box Melodic Solo Theme",
        alphaTab: ":8 12.3 14.3 :4 15.2 :8 12.2 15.2 :4 15.1 | :8 12.1 15.1 12.1 15.2 :2 14.3 |"
      },
      {
        sectionIndex: 5, // Final Chorus (Key Change to Gm)
        exerciseLabel: "Key Change Modulated Chorus",
        alphaTab: ":2 (3.6 5.5 5.4) (6.5 8.4 8.3) | :2 (8.5 10.4 10.3) (3.6 5.5 5.4) | :1 (3.6 5.5 5.4) |"
      }
    ]
  },

  // 2. You Give Love a Bad Name (Bon Jovi)
  {
    slug: 'you-give-love-a-bad-name',
    sections: [
      {
        sectionIndex: 0, // A Cappella Intro / Opening Riff
        exerciseLabel: "C Minor Signature Opening Riff",
        alphaTab: ":8 3.5 5.5 6.5 5.5 :4 3.5 :8 5.5 3.5 | :2 (3.5 5.4 5.3) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Muted C Minor Chugging Groove",
        alphaTab: ":8 (3.5 5.4) (3.5 5.4) (3.5 5.4) (3.5 5.4) :4 (3.5 5.4) :8 (6.5 8.4) (8.5 10.4) | :2 (3.5 5.4) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Ab-Bb-Cm Tension Build",
        alphaTab: ":2 (4.6 6.5 6.4) (6.6 8.5 8.4) | :1 (3.5 5.4 5.3) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthem Chorus Power Progression",
        alphaTab: ":2 (3.5 5.4 5.3) (4.6 6.5 6.4) | :2 (6.6 8.5 8.4) (3.5 5.4 5.3) |"
      },
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Bridge Dynamic Breakdown",
        alphaTab: ":2 (4.6 6.5 6.4) (6.6 8.5 8.4) | :2 (4.6 6.5 6.4) (6.6 8.5 8.4) |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Climactic Final Chorus",
        alphaTab: ":2 (3.5 5.4 5.3) (4.6 6.5 6.4) | :2 (6.6 8.5 8.4) (3.5 5.4 5.3) | :1 (3.5 5.4 5.3) |"
      }
    ]
  },

  // 3. More Than a Feeling (Boston)
  {
    slug: 'more-than-a-feeling',
    sections: [
      {
        sectionIndex: 0, // Intro (Arpeggiated)
        exerciseLabel: "Tom Scholz 12-String Acoustic Arpeggios",
        alphaTab: ":8 0.4 2.3 3.2 2.1 3.2 3.1 3.2 2.3 | 3.5 2.4 0.3 1.2 3.6 2.5 0.4 0.3 | :8 0.4 2.3 3.2 2.1 3.2 3.1 3.2 2.3 | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Clean Acoustic Verse Pattern",
        alphaTab: ":8 0.4 2.3 3.2 2.1 3.2 3.1 3.2 2.3 | 3.5 2.4 0.3 1.2 3.6 2.5 0.4 0.3 | :2 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Massive Stadium Rock Chorus",
        alphaTab: ":2 (3.6 5.5 5.4) (3.5 5.4 5.3) | :2 (0.6 2.5 2.4) (5.5 7.4 7.3) |"
      },
      {
        sectionIndex: 3, // Guitar Interlude
        exerciseLabel: "Scholz Harmonized Lead Theme",
        alphaTab: ":8 10.2 12.2 :4 10.1 :8 12.1 10.1 :4 12.1 | :8 10.1 12.2 10.2 12.3 :2 11.3 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Fading Acoustic Arpeggios",
        alphaTab: ":8 0.4 2.3 3.2 2.1 3.2 3.1 3.2 2.3 | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 r.2 |"
      }
    ]
  },

  // 4. Rock You Like a Hurricane (Scorpions)
  {
    slug: 'rock-you-like-a-hurricane',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic E5-G5-A5-C5-D5 Syncopated Riff",
        alphaTab: ":4 (0.6 2.5) :8 (3.6 5.5) (3.6 5.5) :4 (5.6 7.5) :8 (8.6 10.5) (8.6 10.5) | :2 (10.6 12.5) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Palm-Muted Verse Rhythm",
        alphaTab: ":8 0.6 0.6 0.6 0.6 :4 (0.6 2.5) :8 (3.6 5.5) (3.6 5.5) | :4 (5.6 7.5) :2 (0.6 2.5) :4 r.4 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Full Power Anthem Chorus",
        alphaTab: ":4 (0.6 2.5) :8 (3.6 5.5) (3.6 5.5) :4 (5.6 7.5) :8 (8.6 10.5) (8.6 10.5) | :2 (10.6 12.5) :2 (0.6 2.5) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Matthias Jabs Screaming Pentatonic Run",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Heavy Climax Cadence",
        alphaTab: ":4 (0.6 2.5) (3.6 5.5) (5.6 7.5) (8.6 10.5) | :1 (0.6 2.5) |"
      }
    ]
  },

  // 5. Tom Sawyer (Rush)
  {
    slug: 'tom-sawyer',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Alex Lifeson Low E Growl & Synthesizer Sweep",
        alphaTab: ":8 0.6 0.6 :4 (0.6 2.5 2.4) :8 0.6 0.6 :4 (3.6 5.5 5.4) | :8 0.6 0.6 :4 (5.6 7.5 7.4) :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "E-D-A/C# Power Progression",
        alphaTab: ":2 (0.6 2.5 2.4) (5.5 7.4 7.3) | :2 (4.5 7.4 6.3) (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Middle Section (7/4 meter)
        exerciseLabel: "Complex 7/4 Instrumental Meter",
        alphaTab: "\\ts 7 4 :4 (0.6 2.5) (2.6 4.5) (3.6 5.5) (5.6 7.5) (0.6 2.5) (2.6 4.5) (3.6 5.5) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Lifeson Whammy Bar Solo Theme",
        alphaTab: ":8 12.2 15.2 :4 12.1 :8 15.1 12.1 :4 15.1 | :8 14.3 12.3 14.4 12.4 :2 14.4 |"
      },
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Driving Rock Outro",
        alphaTab: ":8 0.6 0.6 :4 (0.6 2.5 2.4) :8 0.6 0.6 :4 (3.6 5.5 5.4) | :1 (0.6 2.5 2.4) |"
      }
    ]
  },

  // 6. Knockin' on Heaven's Door (Bob Dylan / Guns N' Roses)
  {
    slug: 'knockin-on-heavens-door',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse 1
        exerciseLabel: "G-D-Am7 / G-D-C Signature Strum",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.5 2.4 2.3 1.2 0.1) | :4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "Anthem Acoustic Chorus",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.5 2.4 2.3 1.2 0.1) | :4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 2, // Verse 2
        exerciseLabel: "Arpeggiated Acoustic Embellishments",
        alphaTab: ":8 3.6 0.4 0.3 3.2 0.4 2.3 3.2 2.1 | :8 0.5 2.4 0.3 1.2 :2 (0.5 2.4 2.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Final Chorus / Outro
        exerciseLabel: "Dynamic Chorus Climax",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.5 2.4 2.3 1.2 0.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      }
    ]
  },

  // 7. Landslide (Fleetwood Mac)
  {
    slug: 'landslide',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Lindsey Buckingham Travis Picking Pattern",
        alphaTab: ":8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | 0.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :2 (3.5 2.4 0.3 1.2 0.1) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Intricate Fingerpicked Verse",
        alphaTab: ":8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | 0.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :2 (3.5 2.4 0.3 1.2 0.1) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "G-D/F#-Em-C Chorus Pattern",
        alphaTab: ":8 3.6 0.4 0.3 3.2 2.6 0.4 2.3 3.2 | 0.6 2.5 2.4 0.3 :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Verse 2 / Chorus 2
        exerciseLabel: "Emotional Fingerpicked Build",
        alphaTab: ":8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | 0.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :1 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Gentle Fingerstyle Resolution",
        alphaTab: ":8 3.5 2.4 0.3 1.2 2.5 0.4 0.3 0.2 | :2 (0.5 2.4 0.3 1.2 0.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      }
    ]
  },

  // 8. La Bamba (Ritchie Valens)
  {
    slug: 'la-bamba',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Ritchie Valens C-F-G Signature Lead Riff",
        alphaTab: ":8 0.5 2.5 3.5 0.4 :4 3.4 :8 2.4 0.4 | :4 3.5 :8 0.4 2.4 :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Syncopated Latin-Rock Strumming",
        alphaTab: ":4 (3.5 2.4 0.3 1.2) :8 (1.6 3.5 3.4 2.3) (1.6 3.5 3.4 2.3) :4 (3.6 5.5 5.4 4.3) :4 (3.6 5.5 5.4 4.3) | :4 (3.5 2.4 0.3 1.2) :8 (1.6 3.5 3.4 2.3) (1.6 3.5 3.4 2.3) :2 (3.6 5.5 5.4 4.3) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "High-Energy Chorus Cadence",
        alphaTab: ":4 (3.5 2.4 0.3 1.2) :8 (1.6 3.5 3.4 2.3) (1.6 3.5 3.4 2.3) :4 (3.6 5.5 5.4 4.3) :4 (3.6 5.5 5.4 4.3) |"
      },
      {
        sectionIndex: 3, // Instrumental / Outro
        exerciseLabel: "Lead Break & Flourish",
        alphaTab: ":8 0.5 2.5 3.5 0.4 :4 3.4 :8 2.4 0.4 | :2 (3.5 2.4 0.3 1.2) :2 (3.6 5.5 5.4 4.3) |"
      }
    ]
  },

  // 9. Hound Dog (Big Mama Thornton / Elvis)
  {
    slug: 'hound-dog',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "12-Bar Blues A5-D5 Shuffle",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) | :8 (5.5 7.4) (5.5 7.4) (5.5 9.4) (5.5 9.4) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) |"
      },
      {
        sectionIndex: 1, // Verse (12-Bar Blues)
        exerciseLabel: "Classic Rockabilly Blues Shuffle",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) | :8 (5.5 7.4) (5.5 7.4) (5.5 9.4) (5.5 9.4) (5.6 7.5) (5.6 7.5) (5.6 9.5) (5.6 9.5) | :8 (7.5 9.4) (7.5 9.4) (5.5 7.4) (5.5 7.4) :2 (5.6 7.5) |"
      },
      {
        sectionIndex: 2, // Guitar Solo
        exerciseLabel: "Scotty Moore Rockabilly Double-Stops",
        alphaTab: ":8 5.2 5.1 5.2 5.1 :4 (5.2 5.1) :8 7.3 5.3 | :4 7.4 :8 5.4 7.4 :2 (5.6 7.5 7.4 6.3 5.2 5.1) |"
      },
      {
        sectionIndex: 3, // Final Verse / Outro
        exerciseLabel: "Final Blues Turnaround",
        alphaTab: ":8 (7.5 9.4) (7.5 9.4) (5.5 7.4) (5.5 7.4) :4 (5.6 7.5) :8 7.5 5.5 | :1 (5.6 7.5 7.4 6.3 5.2 5.1) |"
      }
    ]
  },

  // 10. Ring of Fire (Johnny Cash)
  {
    slug: 'ring-of-fire',
    sections: [
      {
        sectionIndex: 0, // Intro (Horn Line)
        exerciseLabel: "Mariachi Horn Line Transcribed for Guitar",
        alphaTab: ":8 3.1 3.1 3.1 2.1 :4 0.1 :8 3.2 0.1 | :4 2.1 :8 0.1 2.1 :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Country Boom-Chicka G-C-D Progression",
        alphaTab: ":8 3.6 (0.4 0.3 3.2) 0.5 (0.4 0.3 3.2) 3.6 (0.4 0.3 3.2) 0.5 (0.4 0.3 3.2) | :8 3.5 (2.4 0.3 1.2) 0.4 (2.4 0.3 1.2) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Country Chorus",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (3.5 2.4 0.3 1.2 0.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Instrumental Break
        exerciseLabel: "Mariachi Lead Theme Reprise",
        alphaTab: ":8 3.1 3.1 3.1 2.1 :4 0.1 :8 3.2 0.1 | :4 2.1 :8 0.1 2.1 :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Country Strumming Outro",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (3.5 2.4 0.3 1.2 0.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      }
    ]
  },

  // 11. Stand By Me (Ben E. King)
  {
    slug: 'stand-by-me',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic Baseline & Rhythm Chop Transcribed for Guitar",
        alphaTab: ":8 0.5 0.5 4.5 2.5 :4 0.5 :8 4.6 2.6 | :8 2.6 2.6 2.5 0.5 :4 2.6 :8 0.6 2.6 | :8 0.4 0.4 4.4 2.4 :4 2.5 :8 2.5 0.5 | :2 (0.5 2.4 2.3 2.2 0.1) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Soul Rhythm Chop Accompaniment",
        alphaTab: ":2 (0.5 2.4 2.3 2.2 0.1) (2.6 4.5 4.4 2.3 2.2 2.1) | :2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Emotional Soul Chorus",
        alphaTab: ":2 (0.5 2.4 2.3 2.2 0.1) (2.6 4.5 4.4 2.3 2.2 2.1) | :2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) |"
      },
      {
        sectionIndex: 3, // Instrumental Break
        exerciseLabel: "Strings Theme on Guitar",
        alphaTab: ":8 5.1 7.1 :4 9.1 :8 7.1 5.1 :4 7.1 | :8 5.1 7.1 5.1 7.2 :2 5.2 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Gospel Soul Cadence",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :1 (0.5 2.4 2.3 2.2 0.1) |"
      }
    ]
  },

  // 12. I Love Rock 'n' Roll (Joan Jett)
  {
    slug: 'i-love-rock-n-roll',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Joan Jett Massive E5-A5-B5 Stadium Stomp",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (5.6 7.5) :8 (7.6 9.5) (7.6 9.5) | :2 (0.6 2.5) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Driving Palm-Muted E5 Chug",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) (0.6 2.5) :4 (7.6 9.5) | :2 (0.6 2.5) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Sing-Along Power Chords",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (5.6 7.5) (7.6 9.5) | :2 (0.6 2.5) :2 r.2 |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Raw Blues-Rock Solo Stabs",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 :8 12.1 15.2 | :8 12.2 14.3 12.3 14.3 :2 14.3 |"
      },
      {
        sectionIndex: 4, // Final Chorus
        exerciseLabel: "Stadium Stomp Climax",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (5.6 7.5) (7.6 9.5) | :1 (0.6 2.5) |"
      },
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Heavy Rock Cadence",
        alphaTab: ":4 (5.6 7.5) (7.6 9.5) :2 (0.6 2.5) | :1 (0.6 2.5) |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3B (${updates.length} iconic songs)...`);
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

console.log(`\nBatch 3B Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

