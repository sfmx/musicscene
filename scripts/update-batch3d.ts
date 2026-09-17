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
  // 1. Pride and Joy (Stevie Ray Vaughan)
  {
    slug: 'pride-and-joy',
    sections: [
      {
        sectionIndex: 0, // Intro / Main Riff
        exerciseLabel: "SRV Texas Blues Shuffle & Turnaround",
        alphaTab: ":8 0.6 0.6 (0.4 2.3) 0.6 (0.4 2.3) 0.6 (0.4 2.3) 0.6 | :8 0.5 0.5 4.5 2.5 :4 0.5 :8 4.6 2.6 | :2 (0.6 2.5 2.4 1.3) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse (12-Bar Blues)
        exerciseLabel: "E-A-B Texas Shuffle Rhythm",
        alphaTab: ":8 (0.6 2.5) (0.6 2.5) (0.6 4.5) (0.6 4.5) (0.6 2.5) (0.6 2.5) (0.6 4.5) (0.6 4.5) | :8 (0.5 2.4) (0.5 2.4) (0.5 4.4) (0.5 4.4) (0.6 2.5) (0.6 2.5) (0.6 4.5) (0.6 4.5) |"
      },
      {
        sectionIndex: 2, // Guitar Solo
        exerciseLabel: "Stevie Ray Vaughan Blistering Blues Lick",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      },
      {
        sectionIndex: 3, // Outro / Final Verse
        exerciseLabel: "Final Texas Turnaround & Stinger",
        alphaTab: ":8 (2.5 4.4) (2.5 4.4) (0.5 2.4) (0.5 2.4) :4 (0.6 2.5) :8 3.6 4.6 | :1 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },

  // 2. Comfortably Numb (Pink Floyd)
  {
    slug: 'comfortably-numb',
    sections: [
      {
        sectionIndex: 0, // Verse (Arpeggiated)
        exerciseLabel: "Bm-A-G-Em Clean Verse Arpeggios",
        alphaTab: ":8 2.5 4.4 4.3 3.2 :4 (2.5 4.4 4.3 3.2) :8 0.5 2.4 2.3 2.2 | :4 (0.5 2.4 2.3 2.2) :2 (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (0.6 2.5 2.4 0.3 0.2 0.1) :2 (2.5 4.4 4.3 3.2 2.1) |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "Soaring D-A-C-G Chorus Theme",
        alphaTab: ":2 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :2 (3.5 2.4 0.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :1 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 3, // Second Guitar Solo
        exerciseLabel: "David Gilmour Legendary B Minor Solo Theme",
        alphaTab: ":8 r.4 7.3 :4 9.3 :8 7.3 9.3 :4 9.3 | :8 7.3 9.4 7.4 9.4 :2 9.5 | :8 7.4 9.4 7.3 9.3 :2 10.2 |"
      }
    ]
  },

  // 3. Another Brick in the Wall (Part 2) (Pink Floyd)
  {
    slug: 'another-brick-in-the-wall',
    sections: [
      {
        sectionIndex: 0, // Verse
        exerciseLabel: "Funky Dm Stratocaster 16th-Note Chop",
        alphaTab: ":16 (5.5 7.4 7.3 6.2) (5.5 7.4 7.3 6.2) r.16 (5.5 7.4 7.3 6.2) :8 (5.5 7.4 7.3 6.2) :16 (5.5 7.4 7.3 6.2) (5.5 7.4 7.3 6.2) :8 (5.5 7.4 7.3 6.2) | :2 (5.5 7.4 7.3 6.2) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "Anthem Dm-G-C Progression",
        alphaTab: ":2 (5.5 7.4 7.3 6.2) (3.6 5.5 5.4 4.3) | :2 (3.5 5.4 5.3 5.2) (5.5 7.4 7.3 6.2) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "David Gilmour 10th-Fret Dm Solo",
        alphaTab: ":8 10.1 13.1 10.1 13.1 :4 13.1 :8 10.1 13.2 | :8 10.2 12.3 10.3 12.3 :2 12.3 | :8 10.3 12.3 10.2 13.2 :2 13.1 |"
      }
    ]
  },

  // 4. All Along the Watchtower (Jimi Hendrix)
  {
    slug: 'all-along-the-watchtower',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Hendrix C#m-B-A Syncopated Strums",
        alphaTab: ":4 (4.5 6.4 6.3 5.2) :8 (4.5 6.4 6.3 5.2) (4.5 6.4 6.3 5.2) :4 (2.5 4.4 4.3 3.2) (0.5 2.4 2.3 2.2) | :2 (0.5 2.4 2.3 2.2) :4 (2.5 4.4 4.3 3.2) r.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Acoustic/Electric Rhythm",
        alphaTab: ":4 (4.5 6.4 6.3 5.2) :8 (4.5 6.4 6.3 5.2) (4.5 6.4 6.3 5.2) :4 (2.5 4.4 4.3 3.2) (0.5 2.4 2.3 2.2) | :2 (0.5 2.4 2.3 2.2) :4 (2.5 4.4 4.3 3.2) r.4 |"
      },
      {
        sectionIndex: 3, // Final Verse and Outro
        exerciseLabel: "Wah-Wah Outro Solo Lick",
        alphaTab: ":8 9.1 12.1 9.1 12.1 :4 12.1 9.1 | :8 12.2 9.2 11.3 9.3 :2 11.3 | :8 9.3 11.3 9.2 12.2 :2 12.1 |"
      }
    ]
  },

  // 5. Black Hole Sun (Soundgarden)
  {
    slug: 'black-hole-sun',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Chris Cornell Drop-D Chorus/Leslie Arpeggio",
        alphaTab: ":8 0.6 0.5 4.4 2.3 :4 3.2 :8 2.3 4.4 | 0.6 0.5 3.4 1.3 :4 2.2 :8 1.3 3.4 | :1 (0.6 0.5 4.4 2.3 3.2) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Atmospheric Drop-D Verse Loop",
        alphaTab: ":8 0.6 0.5 4.4 2.3 :4 3.2 :8 2.3 4.4 | 0.6 0.5 3.4 1.3 :4 2.2 :8 1.3 3.4 | :1 (0.6 0.5 4.4 2.3 3.2) |"
      },
      {
        sectionIndex: 4, // Solo
        exerciseLabel: "Kim Thayil Wah-Drenched Solo",
        alphaTab: ":8 10.3 12.3 :4 13.2 :8 10.2 13.2 :4 13.1 | :8 10.1 13.1 10.1 13.2 :2 12.3 |"
      }
    ]
  },

  // 6. Seven Nation Army (The White Stripes)
  {
    slug: 'seven-nation-army',
    sections: [
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Explosive Distorted Power Chord Stabs",
        alphaTab: ":4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) :4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) | :2 (0.6 2.5 2.4) :2 r.2 |"
      },
      {
        sectionIndex: 3, // Guitar Solo / Scale Run
        exerciseLabel: "Jack White Whammy Octave Blues Run",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      }
    ]
  },

  // 7. We Will Rock You (Queen)
  {
    slug: 'we-will-rock-you',
    sections: [
      {
        sectionIndex: 0, // Verse 1
        exerciseLabel: "Stomp-Stomp-Clap Rhythmic Pulse",
        alphaTab: ":4 r.4 :8 r.8 (5.6 7.5) :2 (5.6 7.5) :4 r.4 | :4 r.4 :8 r.8 (5.6 7.5) :2 (5.6 7.5) :4 r.4 |"
      },
      {
        sectionIndex: 1, // Verse 2
        exerciseLabel: "Driving Beat Accompaniment",
        alphaTab: ":4 r.4 :8 r.8 (5.6 7.5) :2 (5.6 7.5) :4 r.4 | :4 r.4 :8 r.8 (5.6 7.5) :2 (5.6 7.5) :4 r.4 |"
      },
      {
        sectionIndex: 2, // Verse 3
        exerciseLabel: "Pre-Solo Dynamic Tension",
        alphaTab: ":4 r.4 :8 r.8 (5.6 7.5) :2 (5.6 7.5) :4 r.4 | :2 (5.6 7.5) :2 (7.5 9.4) |"
      },
      {
        sectionIndex: 3, // Guitar Solo / Outro
        exerciseLabel: "Brian May Iconic Multi-Tracked Solo",
        alphaTab: ":8 r.4 5.4 7.4 :4 7.3 :8 5.3 7.3 | :4 7.2 :8 5.2 7.2 :2 5.1 | :8 5.1 8.1 5.1 8.1 :2 (5.6 7.5 7.4) |"
      }
    ]
  },

  // 8. Oye Como Va (Santana)
  {
    slug: 'oye-como-va',
    sections: [
      {
        sectionIndex: 0, // Organ Intro / Main Riff
        exerciseLabel: "Am7-D9 Cha-Cha-Cha Latin Groove",
        alphaTab: ":4 (5.6 7.5 5.4 5.3 5.2 5.1) :8 (5.6 7.5 5.4 5.3 5.2 5.1) r.8 :4 (5.5 4.4 5.3 5.2) :8 (5.5 4.4 5.3 5.2) r.8 | :2 (5.6 7.5 5.4 5.3 5.2 5.1) :2 (5.5 4.4 5.3 5.2) |"
      },
      {
        sectionIndex: 1, // First Guitar Solo
        exerciseLabel: "Carlos Santana Signature Vocal Lead Theme",
        alphaTab: ":8 r.4 5.3 7.3 :4 5.2 :8 7.2 5.2 | :4 7.2 :8 5.2 7.3 :2 5.3 | :8 5.3 7.3 5.2 7.2 :2 8.2 |"
      },
      {
        sectionIndex: 3, // Second Solo and Outro
        exerciseLabel: "Climactic Latin Rock Solo",
        alphaTab: ":8 8.1 10.1 8.1 10.1 :4 10.1 :8 8.1 10.2 | :8 8.2 10.3 8.3 10.3 :2 10.3 | :8 8.3 10.3 8.2 10.2 :2 10.1 |"
      }
    ]
  },

  // 9. Twist and Shout (The Beatles)
  {
    slug: 'twist-and-shout',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse 1
        exerciseLabel: "D-G-A7 Syncopated Party Strum",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (0.5 2.4 0.3 2.2 0.1) :8 (0.5 2.4 0.3 2.2 0.1) (0.5 2.4 0.3 2.2 0.1) | :2 (0.4 2.3 3.2 2.1) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Chorus
        exerciseLabel: "High-Energy Dance Rhythm",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (0.5 2.4 0.3 2.2 0.1) :8 (0.5 2.4 0.3 2.2 0.1) (0.5 2.4 0.3 2.2 0.1) | :2 (0.4 2.3 3.2 2.1) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Build / Ah Section
        exerciseLabel: "A7 Dominant Tension Build",
        alphaTab: ":4 (0.5 2.4 0.3 2.2) (0.5 2.4 0.3 2.2) (0.5 2.4 0.3 2.2) (0.5 2.4 0.3 2.2) | :1 (0.5 2.4 0.3 2.2 0.1) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Rock 'n' Roll Finale Strum",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.5 2.4 0.3 2.2 0.1) | :1 (0.4 2.3 3.2 2.1) |"
      }
    ]
  },

  // 10. The Final Countdown (Europe)
  {
    slug: 'the-final-countdown',
    sections: [
      {
        sectionIndex: 0, // Synth Intro
        exerciseLabel: "F#m-D-Bm-E Heavy Driving Power Chords",
        alphaTab: ":2 (2.6 4.5 4.4) (10.6 12.5 12.4) | :2 (7.6 9.5 9.4) (0.6 2.5 2.4) | :1 (2.6 4.5 4.4) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Building Pre-Chorus Rhythm",
        alphaTab: ":2 (2.6 4.5 4.4) (7.6 9.5 9.4) | :2 (0.6 2.5 2.4) (5.6 7.5 7.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthem Chorus Power Progression",
        alphaTab: ":2 (2.6 4.5 4.4) (10.6 12.5 12.4) | :2 (7.6 9.5 9.4) (0.6 2.5 2.4) | :1 (2.6 4.5 4.4) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "John Norum Neo-Classical Shred Run",
        alphaTab: ":16 14.1 17.1 14.1 17.1 14.1 17.1 14.1 17.1 :8 17.1 14.1 :4 17.1 | :8 17.2 14.2 16.3 14.3 :2 16.3 |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Climactic Stadium Finale",
        alphaTab: ":2 (2.6 4.5 4.4) (10.6 12.5 12.4) | :2 (7.6 9.5 9.4) (0.6 2.5 2.4) | :1 (2.6 4.5 4.4) |"
      }
    ]
  },

  // 11. Rock and Roll All Nite (KISS)
  {
    slug: 'rock-and-roll-all-nite',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "A5-D5-E5 Party Anthem Riff",
        alphaTab: ":4 (5.6 7.5) :8 (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) :8 (7.5 9.4) (7.5 9.4) | :2 (5.6 7.5) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Muted Verse Chug",
        alphaTab: ":8 (5.6 7.5) (5.6 7.5) (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) :8 (7.5 9.4) (7.5 9.4) | :2 (5.6 7.5) :2 r.2 |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "B5-C5 Dynamic Rise",
        alphaTab: ":2 (7.6 9.5) (8.6 10.5) | :1 (7.5 9.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Stadium Sing-Along Chorus",
        alphaTab: ":4 (5.6 7.5) :8 (5.6 7.5) (5.6 7.5) :4 (5.5 7.4) (7.5 9.4) | :2 (5.6 7.5) :2 r.2 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Party Anthem Climax",
        alphaTab: ":4 (5.6 7.5) (5.5 7.4) :2 (7.5 9.4) | :1 (5.6 7.5) |"
      }
    ]
  },

  // 12. We're Not Gonna Take It (Twisted Sister)
  {
    slug: 'were-not-gonna-take-it',
    sections: [
      {
        sectionIndex: 0, // Intro/Main Riff
        exerciseLabel: "E-B-C#m-A Heavy Metal March",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (2.5 4.4) :8 (2.5 4.4) (2.5 4.4) | :4 (4.5 6.4) :8 (4.5 6.4) (4.5 6.4) :2 (0.5 2.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Protest Chorus",
        alphaTab: ":4 (0.6 2.5) :8 (0.6 2.5) (0.6 2.5) :4 (2.5 4.4) :8 (2.5 4.4) (2.5 4.4) | :4 (4.5 6.4) :8 (4.5 6.4) (4.5 6.4) :2 (0.5 2.4) |"
      },
      {
        sectionIndex: 3, // Bridge
        exerciseLabel: "Heavy Stomp Bridge",
        alphaTab: ":2 (0.6 2.5) (2.5 4.4) | :2 (4.5 6.4) (0.5 2.4) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "Sing-Along Melodic Solo",
        alphaTab: ":8 0.1 2.1 4.1 2.1 :4 0.1 :8 2.1 0.1 | :4 2.2 :8 0.2 2.2 :2 (0.6 2.5) |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3D (${updates.length} iconic songs)...`);
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

console.log(`\nBatch 3D Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

