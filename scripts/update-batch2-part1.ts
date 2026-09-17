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
  // 1. Thunderstruck
  {
    slug: 'thunderstruck',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Iconic B-String Pull-Off Riff",
        alphaTab: ":16 0.2 4.2 0.2 7.2 0.2 4.2 0.2 7.2 0.2 5.2 0.2 8.2 0.2 5.2 0.2 8.2 | 0.2 4.2 0.2 7.2 0.2 4.2 0.2 7.2 0.2 5.2 0.2 8.2 0.2 5.2 0.2 8.2 | 12.2 0.2 10.2 0.2 9.2 0.2 10.2 0.2 9.2 0.2 7.2 0.2 5.2 0.2 4.2 0.2 | 5.2 0.2 4.2 0.2 5.2 0.2 4.2 0.2 :2 (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving B5-A5-E5 Rhythm",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) | :4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :2 (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Chorus Power Chords",
        alphaTab: ":2 (7.6 9.5 9.4) (3.6 5.5 5.4) | :2 (5.6 7.5 7.4) (7.6 9.5 9.4) |"
      }
    ]
  },

  // 2. Enter Sandman
  {
    slug: 'enter-sandman',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Clean Em Intro Arpeggio",
        alphaTab: ":8 0.6 7.5 5.4 6.6 :4 0.6 :8 7.5 5.4 | 0.6 7.5 5.4 6.6 :4 0.6 :8 7.5 5.4 | 0.6 7.5 5.4 6.6 :4 0.6 :8 7.5 5.4 | :4 (0.6 2.5 2.4) :8 0.6 0.6 :4 (3.6 5.5) :8 (2.6 4.5) r.8 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Heavy Muted Verse Groove",
        alphaTab: ":8 0.6 0.6 :4 (0.6 2.5 2.4) :8 0.6 0.6 :4 (3.6 5.5) | :8 0.6 0.6 :4 (2.6 4.5) :8 (1.6 3.5) r.8 :4 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Pre-Chorus Dynamic Build",
        alphaTab: ":8 0.6 0.6 7.5 5.4 :4 6.6 :8 0.6 7.5 | 5.4 6.6 :4 0.6 :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Full Em-C-G-D Chorus",
        alphaTab: ":2 (0.6 2.5 2.4) (3.5 5.4 5.3) | :2 (3.6 5.5 5.4) (5.5 7.4 7.3) | :1 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Wah Pentatonic Solo Run",
        alphaTab: ":8 12.3 14.3 :4 15.2 :8 12.2 15.2 :4 15.1 | :8 12.1 15.1 12.1 15.2 :4 14.3 12.3 | :2 14.3 :2 r.2 |"
      }
    ]
  },

  // 3. Highway to Hell
  {
    slug: 'highway-to-hell',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Malcolm Young Signature Syncopation",
        alphaTab: ":4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) (0.5 2.4 2.3) :4 r.4 :8 (2.6 0.4 2.3 3.2) (2.6 0.4 2.3 3.2) | :4 (3.6 0.4 0.3 3.2) :8 (2.6 0.4 2.3 3.2) (2.6 0.4 2.3 3.2) :4 (3.6 0.4 0.3 3.2) :8 (2.6 0.4 2.3 3.2) (0.5 2.4 2.3) | :4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) (0.5 2.4 2.3) :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Pocket Rhythm",
        alphaTab: ":4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) (0.5 2.4 2.3) :4 (2.6 0.4 2.3 3.2) (3.6 0.4 0.3 3.2) | :4 (2.6 0.4 2.3 3.2) :8 (0.5 2.4 2.3) (0.5 2.4 2.3) :2 (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthem Chorus Progression",
        alphaTab: ":2 (0.5 2.4 2.3) :4 (2.6 0.4 2.3 3.2) (3.6 0.4 0.3 3.2) | :2 (3.6 0.4 0.3 3.2) :4 (2.6 0.4 2.3 3.2) (0.5 2.4 2.3) | :1 (0.5 2.4 2.3) |"
      },
      {
        sectionIndex: 3, // Solo
        exerciseLabel: "Angus Young Blues-Rock Lick",
        alphaTab: ":8 5.1 8.1 5.1 8.1 :4 8.1 :8 5.1 8.2 | :8 5.2 7.3 5.3 7.3 :2 7.3 | :8 5.3 7.3 5.2 8.2 :2 8.1 |"
      }
    ]
  },

  // 4. Paranoid
  {
    slug: 'paranoid',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Tony Iommi Hammer-On Riff",
        alphaTab: ":8 12.6 12.6 :16 12.5 14.5 :8 12.5 14.5 :4 (12.5 14.4) | :8 12.6 12.6 :16 12.5 14.5 :8 12.5 14.5 :4 (12.5 14.4) | :8 (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) | :4 (10.6 12.5) (12.6 14.5) :2 (12.6 14.5) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Relentless Downstroke Chug",
        alphaTab: ":8 (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) | :4 (10.6 12.5) (12.6 14.5) :2 (12.6 14.5) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Heavy Power Progression",
        alphaTab: ":2 (12.6 14.5 14.4) (10.6 12.5 12.4) | :2 (3.6 5.5 5.4) (5.6 7.5 7.4) | :1 (12.6 14.5 14.4) |"
      },
      {
        sectionIndex: 3, // Solo
        exerciseLabel: "Classic Pentatonic Solo",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 12.1 | :8 15.2 12.2 14.3 12.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      }
    ]
  },

  // 5. Wish You Were Here
  {
    slug: 'wish-you-were-here',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "David Gilmour 12-String Intro Riff",
        alphaTab: ":8 r.4 0.5 2.5 :4 0.4 :8 2.4 0.4 | :4 2.5 :2 (0.6 2.5 2.4 0.3 3.2 3.1) :4 (0.6 2.5 2.4 0.3 3.2 3.1) | :8 r.4 0.5 2.5 :4 0.4 :8 2.4 0.4 | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Warm Acoustic Strumming",
        alphaTab: ":2 (3.5 2.4 0.3 1.2 0.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Emotional Acoustic Theme",
        alphaTab: ":2 (3.5 2.4 0.3 1.2 0.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Solo
        exerciseLabel: "Expressive Strat Solo Lick",
        alphaTab: ":8 r.4 3.3 5.3 :4 5.3 :8 3.3 5.3 | :4 3.2 :8 5.2 3.2 :2 5.1 | :8 3.1 5.1 3.1 5.2 :4 3.2 5.3 | :1 3.3 |"
      }
    ]
  },

  // 6. Wonderwall
  {
    slug: 'wonderwall',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse
        exerciseLabel: "Anchored 3rd-Fret Acoustic Strum",
        alphaTab: ":8 (0.6 2.5 2.4 0.3 3.2 3.1) (0.6 2.5 2.4 0.3 3.2 3.1) :16 (0.6 2.5 2.4 0.3 3.2 3.1) (0.6 2.5 2.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) :16 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) | :8 (0.4 2.3 3.2 3.1) (0.4 2.3 3.2 3.1) :16 (0.4 2.3 3.2 3.1) (0.4 2.3 3.2 3.1) :8 (0.5 2.4 0.3 3.2 3.1) :8 (0.5 2.4 0.3 3.2 3.1) :16 (0.5 2.4 0.3 3.2 3.1) (0.5 2.4 0.3 3.2 3.1) :8 (0.5 2.4 0.3 3.2 3.1) :8 (0.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Pre-Chorus
        exerciseLabel: "Building Pre-Chorus Strums",
        alphaTab: ":2 (3.5 2.4 0.3 3.2 3.1) (0.4 2.3 3.2 3.1) | :2 (0.6 2.5 2.4 0.3 3.2 3.1) (0.6 2.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Sing-Along Anthem Chorus",
        alphaTab: ":2 (3.5 2.4 0.3 3.2 3.1) (0.6 2.5 2.4 0.3 3.2 3.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) (0.6 2.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Acoustic Outro Vamp",
        alphaTab: ":2 (0.6 2.5 2.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (0.4 2.3 3.2 3.1) (0.5 2.4 0.3 3.2 3.1) | :1 (0.6 2.5 2.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 4, // Scale Practice
        exerciseLabel: "F# Minor Pentatonic Practice",
        alphaTab: ":8 2.6 5.6 2.5 4.5 2.4 4.4 2.3 4.3 | :8 2.2 5.2 2.1 5.1 5.1 2.1 5.2 2.2 | :8 4.3 2.3 4.4 2.4 4.5 2.5 5.6 2.6 | :1 2.6 |"
      }
    ]
  },

  // 7. Eruption
  {
    slug: 'eruption',
    sections: [
      {
        sectionIndex: 0, // Opening Tremolo
        exerciseLabel: "Opening Power Blast & Speed Run",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) :4 (3.6 5.5 5.4) (5.6 7.5 7.4) | :8 5.3 7.3 5.2 8.2 5.1 8.1 :2 8.1 |"
      },
      {
        sectionIndex: 1, // Two-Handed Tapping
        exerciseLabel: "Two-Handed Tapping Triplet Cascade",
        alphaTab: "\\ts 12 8 :8 12.2 5.2 8.2 12.2 5.2 8.2 12.2 5.2 8.2 12.2 5.2 8.2 | :8 13.2 5.2 8.2 13.2 5.2 8.2 15.2 5.2 8.2 15.2 5.2 8.2 | :8 17.2 5.2 8.2 17.2 5.2 8.2 17.2 5.2 8.2 17.2 5.2 8.2 |"
      },
      {
        sectionIndex: 2, // Whammy Bar & Harmonics
        exerciseLabel: "Natural Harmonics & Dive Bombs",
        alphaTab: ":2 12.3 12.2 | :2 7.3 7.2 | :1 5.3 |"
      },
      {
        sectionIndex: 3, // Climactic Finale
        exerciseLabel: "Climactic Speed Finale",
        alphaTab: ":16 5.1 8.1 5.1 8.1 5.1 8.1 5.1 8.1 :8 8.1 5.1 :4 8.1 | :8 8.2 5.2 7.3 5.3 :2 (5.6 7.5 7.4) |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 2 Part 1 (${updates.length} iconic songs)...`);
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

console.log(`\nBatch 2 Part 1 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

