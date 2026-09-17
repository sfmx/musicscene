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
  // 8. Sultans of Swing
  {
    slug: 'sultans-of-swing',
    sections: [
      {
        sectionIndex: 0, // Intro / Verse Riff
        exerciseLabel: "Mark Knopfler Fingerstyle Dm Fill",
        alphaTab: ":8 r.8 5.3 6.2 5.1 :4 (5.3 6.2 5.1) :8 5.3 6.2 | :4 (5.3 6.2 5.1) :8 3.3 5.2 :4 (3.3 5.2 3.1) :8 r.8 1.1 | :16 5.3 7.3 6.2 5.1 :8 6.2 :4 7.3 :2 r.2 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Fingerpicked Triad Voicings",
        alphaTab: ":2 (5.5 7.4 7.3 6.2) (3.5 5.4 5.3 5.2) | :2 (1.5 3.4 3.3 3.2) (0.5 2.4 2.3 2.2) | :1 (5.5 7.4 7.3 6.2) |"
      },
      {
        sectionIndex: 3, // Outro Solo
        exerciseLabel: "Iconic Fast Triplet Arpeggios",
        alphaTab: "\\ts 12 8 :8 10.1 13.1 10.1 11.2 10.2 10.3 10.1 13.1 10.1 11.2 10.2 10.3 | :8 8.1 12.1 8.1 10.2 8.2 9.3 8.1 12.1 8.1 10.2 8.2 9.3 | :2 (10.3 10.2 10.1) :2 r.2 :2 r.2 |"
      }
    ]
  },

  // 9. Stairway to Heaven
  {
    slug: 'stairway-to-heaven',
    sections: [
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Jimmy Page Signature Solo Theme",
        alphaTab: ":8 r.4 7.3 :4 7.3 :8 5.2 5.1 :4 8.2 | :8 5.2 7.3 5.3 :4 7.4 :8 5.4 7.4 :4 7.5 | :8 5.4 7.4 5.3 7.3 :2 7.3 |"
      }
    ]
  },

  // 10. Smoke on the Water
  {
    slug: 'smoke-on-the-water',
    sections: [
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving G5 Pocket Rhythm",
        alphaTab: ":8 (3.6 5.5) (3.6 5.5) r.8 (3.6 5.5) (3.6 5.5) (3.6 5.5) r.8 (3.6 5.5) | :8 (1.6 3.5) (1.6 3.5) r.8 (1.6 3.5) :2 (3.6 5.5) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Ritchie Blackmore Blues-Rock Run",
        alphaTab: ":8 3.1 6.1 3.1 6.1 :4 6.1 :8 3.1 6.2 | :8 3.2 5.3 3.3 5.3 :2 5.3 | :8 3.3 5.3 3.2 6.2 :2 6.1 |"
      }
    ]
  },

  // 11. Iron Man
  {
    slug: 'iron-man',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Ominous Low E5 Bend Intro",
        alphaTab: ":4 (0.6 2.5) :2 (0.6 2.5) :4 r.4 | :4 (0.6 2.5) :2 (0.6 2.5) :4 r.4 | :1 (0.6 2.5) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Tony Iommi B Minor Pentatonic Solo",
        alphaTab: ":8 7.1 10.1 7.1 10.1 :4 10.1 :8 7.1 10.2 | :8 7.2 9.3 7.3 9.3 :2 9.3 | :8 7.3 9.3 7.2 10.2 :2 10.1 |"
      }
    ]
  },

  // 12. Layla
  {
    slug: 'layla',
    sections: [
      {
        sectionIndex: 4, // Piano Coda / Dual Guitar Solo
        exerciseLabel: "Duane Allman High Slide Theme",
        alphaTab: ":8 8.1 10.1 12.1 13.1 :4 15.1 :8 13.1 12.1 | :4 13.1 :8 12.1 10.1 :2 12.1 | :8 8.1 10.1 12.1 10.1 :2 8.1 |"
      }
    ]
  },

  // 13. Sweet Home Alabama
  {
    slug: 'sweet-home-alabama',
    sections: [
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Ed King G Major Pentatonic Solo",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 :8 12.1 15.2 | :8 12.2 14.3 12.3 14.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      }
    ]
  },

  // 14. Johnny B. Goode
  {
    slug: 'johnny-b-goode',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Chuck Berry Signature Double-Stop Intro",
        alphaTab: ":2 r.2 :4 r.4 :8 5.3 6.3 | :8 7.3 6.2 6.1 6.2 6.1 6.2 :4 (6.2 6.1) | :8 (6.2 6.1) (6.2 6.1) (6.2 6.1) 8.3 :8 6.2 8.3 6.3 8.3 | :4 6.3 :2 8.4 :4 r.4 |"
      },
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Bb Rock 'n' Roll Shuffle",
        alphaTab: ":8 (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) | :8 (6.5 8.4) (6.5 8.4) (6.5 10.4) (6.5 10.4) (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Chuck Berry Finale Climax",
        alphaTab: ":8 (6.2 6.1) (6.2 6.1) (6.2 6.1) 8.3 :4 6.3 :8 8.4 6.3 | :2 (6.6 8.5 8.4 7.3 6.2 6.1) :2 r.2 |"
      }
    ]
  },

  // 15. Paint It Black
  {
    slug: 'paint-it-black',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Keith Richards Sitar-Style Dm Theme",
        alphaTab: ":8 0.4 2.4 3.4 5.4 :4 3.4 :8 2.4 0.4 | :4 2.4 :8 3.4 2.4 :2 0.4 | :8 0.4 2.4 3.4 5.4 :4 3.4 :8 2.4 0.4 | :4 2.4 :8 3.4 2.4 :2 2.4 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Driving Minor Verse Progression",
        alphaTab: ":2 (0.4 2.3 3.2 1.1) (2.5 1.4 2.3 0.2 2.1) | :2 (0.5 2.4 2.3 2.2) (0.4 2.3 3.2 1.1) | :1 (0.4 2.3 3.2 1.1) |"
      },
      {
        sectionIndex: 3, // Instrumental Break
        exerciseLabel: "Eastern Melodic Break",
        alphaTab: ":8 0.4 2.4 3.4 5.4 :4 7.4 :8 5.4 3.4 | :4 2.4 :8 3.4 2.4 :2 0.4 |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 2 Part 2 (${updates.length} iconic songs)...`);
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

console.log(`\nBatch 2 Part 2 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

