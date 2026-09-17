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
  {
    slug: 'barracuda',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "Gallop Breakdown & Harmonics",
        alphaTab: ":16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 | :4 12.3 12.2 :2 (0.6 2.5 2.4) |"
      }
    ]
  },
  {
    slug: 'brothers-in-arms',
    sections: [
      {
        sectionIndex: 2,
        exerciseLabel: "Fingerstyle Chord Progression",
        alphaTab: ":2 (4.6 6.5 6.4 4.3 4.2 4.1) (0.6 2.5 2.4 1.3 0.2 0.1) | :2 (2.6 4.5 4.4 3.3 2.2 2.1) (4.6 6.5 6.4 4.3 4.2 4.1) |"
      },
      {
        sectionIndex: 3,
        exerciseLabel: "Chorus Chord Resolution",
        alphaTab: ":2 (0.6 2.5 2.4 1.3 0.2 0.1) (2.6 4.5 4.4 3.3 2.2 2.1) | :1 (4.6 6.5 6.4 4.3 4.2 4.1) |"
      },
      {
        sectionIndex: 4,
        exerciseLabel: "Dynamic Verse Progression",
        alphaTab: ":2 (4.6 6.5 6.4 4.3 4.2 4.1) (0.6 2.5 2.4 1.3 0.2 0.1) | :2 (2.6 4.5 4.4 3.3 2.2 2.1) (4.6 6.5 6.4 4.3 4.2 4.1) |"
      }
    ]
  },
  {
    slug: 'devil-went-down-to-georgia',
    sections: [
      {
        sectionIndex: 2,
        exerciseLabel: "Chromatic Breakdown Theme",
        alphaTab: ":16 0.4 12.1 0.4 13.1 0.4 12.1 0.4 10.1 0.4 13.2 0.4 12.2 0.4 10.2 0.4 8.2 | :4 (0.4 10.1) :2 r.2 :4 r.4 |"
      },
      {
        sectionIndex: 5,
        exerciseLabel: "High-Energy Bluegrass Finale",
        alphaTab: ":8 0.4 2.4 3.4 2.4 0.4 3.5 2.5 3.5 | :8 0.4 2.4 3.4 2.4 :2 (0.4 2.3 3.2 2.1) |"
      }
    ]
  },
  {
    slug: 'eye-of-the-tiger',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "Pulsing Cm Interlude Groove",
        alphaTab: ":8 8.6 8.6 8.6 8.6 :4 (8.6 10.5 10.4) :8 (6.6 8.5 8.4) r.8 | :2 (8.6 10.5 10.4) :2 r.2 |"
      }
    ]
  },
  {
    slug: 'gloria',
    sections: [
      {
        sectionIndex: 3,
        exerciseLabel: "Garage Rock Anthem Climax",
        alphaTab: ":4 (0.6 2.5 2.4 1.3 0.2 0.1) :8 (0.6 2.5 2.4 1.3 0.2 0.1) r.8 :4 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :1 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },
  {
    slug: 'louie-louie',
    sections: [
      {
        sectionIndex: 3,
        exerciseLabel: "Rhythm Vamp & Cadence",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) r.8 :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) r.8 | :4 (7.5 9.4 9.3) :8 (7.5 9.4 9.3) r.8 :2 (5.6 7.5 7.4) |"
      }
    ]
  },
  {
    slug: 'satisfaction',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "Fuzz Riff Vamp",
        alphaTab: ":4 2.5 2.5 :8 2.5 4.5 :4 5.5 | :4 5.5 :8 5.5 4.5 :4 4.5 2.5 |"
      }
    ]
  },
  {
    slug: 'schism',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "5/8 to 7/8 Meter Shift",
        alphaTab: "\\ts 5 8 :8 0.6 10.5 12.5 10.5 12.5 | \\ts 7 8 :8 0.6 10.5 12.5 10.5 8.5 10.5 8.5 |"
      },
      {
        sectionIndex: 5,
        exerciseLabel: "Drop-D Heavy Syncopation",
        alphaTab: "\\ts 6 8 :8 (0.6 0.5 0.4) (0.6 0.5 0.4) (3.6 3.5 3.4) (3.6 3.5 3.4) (5.6 5.5 5.4) (5.6 5.5 5.4) |"
      }
    ]
  },
  {
    slug: 'should-i-stay-or-should-i-go',
    sections: [
      {
        sectionIndex: 3,
        exerciseLabel: "Syncopated Bridge Strums",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) r.8 :4 (3.6 5.5 5.4) (0.4 2.3 3.2 2.1) | :2 (0.4 2.3 3.2 2.1) :4 (0.4 2.3 3.2 2.1) r.4 |"
      }
    ]
  },
  {
    slug: 'sunshine-of-your-love',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "Heavy Blues Turnaround",
        alphaTab: ":8 12.4 12.4 10.4 12.4 :4 12.5 11.5 | :8 10.5 10.6 10.6 12.6 :2 (10.6 12.5 12.4) |"
      }
    ]
  },
  {
    slug: 'superstition',
    sections: [
      {
        sectionIndex: 4,
        exerciseLabel: "Funk Clavinet Outro Vamp",
        alphaTab: ":8 11.5 :16 13.5 13.5 :8 11.5 :16 13.5 13.5 :8 11.4 :16 13.4 13.4 :8 11.4 13.4 | :8 11.4 13.4 11.5 13.5 :2 (11.5 13.4) |"
      }
    ]
  },
  {
    slug: 'welcome-to-the-jungle',
    sections: [
      {
        sectionIndex: 3,
        exerciseLabel: "Chorus Anthem Chords",
        alphaTab: ":4 (8.6 10.5 10.4) :8 (8.6 10.5 10.4) r.8 :4 (10.6 12.5 12.4) :8 (10.6 12.5 12.4) r.8 | :2 (0.6 2.5 2.4) :4 (0.6 2.5 2.4) r.4 |"
      },
      {
        sectionIndex: 4,
        exerciseLabel: "Verse 2 Heavy Groove",
        alphaTab: ":4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (3.6 5.5 5.4) (5.6 7.5 7.4) | :2 (0.6 2.5 2.4) :2 r.2 |"
      }
    ]
  },
  {
    slug: 'whole-lotta-love',
    sections: [
      {
        sectionIndex: 3,
        exerciseLabel: "Heavy E5 Riff Return",
        alphaTab: ":16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :4 (5.5 7.4) | :16 0.6 0.6 :8 0.6 :16 0.6 0.6 :8 0.6 :4 (7.5 9.4) :4 (5.5 7.4) |"
      }
    ]
  }
];

console.log(`Starting update for 18 secondary sections across ${updates.length} songs...`);
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

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Updated ${song.slug} (${song.sections.length} sections)`);
}

console.log(`\nCompleted! Total sections updated: ${totalSectionsUpdated}. Errors: ${errorsCount}`);
if (errorsCount > 0) {
  process.exit(1);
}

