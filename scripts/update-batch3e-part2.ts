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
  // 12. Radioactive (Imagine Dragons)
  {
    slug: 'radioactive',
    sections: [
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Transitional Dynamic Pre-Chorus Build",
        alphaTab: ":2 (2.5 4.4 4.3 3.2 2.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 2.2 0.1) (0.6 2.5 2.4 1.3 0.2 0.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Explosive Modern Rock Stomp Power Chords",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) (5.5 7.4 7.3) | :4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Atmospheric Sustained Bridge Hits",
        alphaTab: ":2 (2.5 4.4 4.3 3.2 2.1) (0.4 2.3 3.2 2.1) | :2 (0.5 2.4 2.3 2.2 0.1) (0.6 2.5 2.4 1.3 0.2 0.1) |"
      },
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Heavy Modern Rock Outro Repetition Fade",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (5.5 7.4 7.3) (5.6 7.5 7.4) | :1 (7.6 9.5 9.4) |"
      },
      {
        sectionIndex: 6, // Scale Practice Exercise
        exerciseLabel: "B Minor Modern Rock Pentatonic Lick",
        alphaTab: ":8 7.6 10.6 7.5 9.5 :4 7.4 :8 9.4 7.3 | :8 9.3 7.2 10.2 7.1 :2 10.1 | :8 10.1 7.1 10.2 7.2 :2 9.3 |"
      }
    ]
  },

  // 13. Torn (Natalie Imbruglia)
  {
    slug: 'torn',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Acoustic Pop-Rock Intro Progression",
        alphaTab: ":4 (1.6 3.5 3.4 2.3 1.2 1.1) (0.5 2.4 2.3 1.2 0.1) :2 (1.5 3.4 3.3 3.2 1.1) | :2 (3.5 2.4 0.3 1.2 0.1) :2 (1.6 3.5 3.4 2.3 1.2 1.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Steady Acoustic Narrative Verse Strum",
        alphaTab: ":4 (1.6 3.5 3.4 2.3 1.2 1.1) :8 (1.6 3.5 3.4 2.3 1.2 1.1) (1.6 3.5 3.4 2.3 1.2 1.1) :4 (0.5 2.4 2.3 1.2 0.1) :8 (0.5 2.4 2.3 1.2 0.1) (0.5 2.4 2.3 1.2 0.1) | :4 (1.5 3.4 3.3 3.2 1.1) :8 (1.5 3.4 3.3 3.2 1.1) (1.5 3.4 3.3 3.2 1.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthemic I-V-vi-IV Pop-Rock Chorus Strum",
        alphaTab: ":4 (1.6 3.5 3.4 2.3 1.2 1.1) (3.5 2.4 0.3 1.2 0.1) :2 (0.4 2.3 3.2 1.1) | :2 (1.5 3.4 3.3 3.2 1.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Driving Chorus Outro to Acoustic Fade",
        alphaTab: ":4 (1.6 3.5 3.4 2.3 1.2 1.1) (3.5 2.4 0.3 1.2 0.1) :2 (1.5 3.4 3.3 3.2 1.1) | :1 (1.6 3.5 3.4 2.3 1.2 1.1) |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "F Major Pentatonic Pop-Rock Melody Run",
        alphaTab: ":8 1.6 3.6 0.5 3.5 :4 0.4 :8 3.4 0.3 | :8 2.3 1.2 3.2 1.1 :2 3.1 | :8 3.1 1.1 3.2 1.2 :2 2.3 |"
      }
    ]
  },

  // 14. Wagon Wheel (Old Crow Medicine Show / Darius Rucker)
  {
    slug: 'wagon-wheel',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Upbeat Folk Country Intro Strumming",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.6 2.5 2.4 0.3 0.2 0.1) | :4 (3.5 2.4 0.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Storytelling Southern Folk Verse Rhythm",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.6 2.5 2.4 0.3 0.2 0.1) | :4 (3.5 2.4 0.3 1.2 0.1) (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Sing-Along Wagon Wheel Chorus Anthem",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (0.6 2.5 2.4 0.3 0.2 0.1) | :2 (3.5 2.4 0.3 1.2 0.1) :2 (3.5 2.4 0.3 1.2 0.1) |"
      },
      {
        sectionIndex: 3, // Outro
        exerciseLabel: "Joyful Folk Gathering Chorus Repetition",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (3.5 2.4 0.3 1.2 0.1) | :1 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "G Major Pentatonic Country-Folk Lick",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 15. What I Got (Sublime)
  {
    slug: 'what-i-got',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Bradley Nowell Laid-Back Acoustic D-G Riff",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) 0.1 :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) 0.1 :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Sunny California Ska-Rock Verse Groove",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 2.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (0.4 2.3 3.2 2.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Loving Is What I Got Singalong Chorus",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 2.1) :4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) | :4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) 0.1 :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Acoustic Breakdown / Outro
        exerciseLabel: "Fingerpicked Acoustic Breakdown & Outro",
        alphaTab: ":8 0.4 2.3 3.2 2.1 :4 (0.4 2.3 3.2 2.1) :8 3.6 2.5 0.4 0.3 | :4 (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "D Major / Mixolydian Sublime Lead Lick",
        alphaTab: ":8 10.6 12.6 9.5 12.5 :4 9.4 :8 12.4 9.3 | :8 11.3 10.2 12.2 10.1 :2 12.1 | :8 12.1 10.1 12.2 10.2 :2 11.3 |"
      }
    ]
  },

  // 16. No Secrets (The Angels)
  {
    slug: 'no-secrets',
    sections: [
      {
        sectionIndex: 0, // Intro Riff
        exerciseLabel: "Iconic Australian Pub Rock Downstroke Riff",
        alphaTab: ":4 (0.6 2.5 2.4) :8 (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (0.5 2.4 2.3) :8 (0.5 2.4 2.3) (0.5 2.4 2.3) | :4 (2.5 4.4 4.3) :8 (2.5 4.4 4.3) (0.5 2.4 2.3) :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Brewster Brothers Driving Verse Rhythm",
        alphaTab: ":8 (0.6 2.5 2.4) (0.6 2.5 2.4) (0.6 2.5 2.4) (0.6 2.5 2.4) :4 (0.5 2.4 2.3) (0.6 2.5 2.4) | :8 (2.5 4.4 4.3) (2.5 4.4 4.3) (2.5 4.4 4.3) (2.5 4.4 4.3) :2 (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Anthemic Open Chord Chorus Explosion",
        alphaTab: ":4 (0.6 2.5 2.4 1.3) :8 (0.6 2.5 2.4 1.3) (0.6 2.5 2.4 1.3) :4 (0.5 2.4 2.3 2.2) :8 (0.5 2.4 2.3 2.2) (0.5 2.4 2.3 2.2) | :4 (2.5 4.4 4.3 4.2) :8 (2.5 4.4 4.3 4.2) (0.5 2.4 2.3 2.2) :2 (0.6 2.5 2.4 1.3) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Rick Brewster Blistering Gibson SG Solo",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 :8 12.1 15.2 | :8 12.2 14.3 12.3 14.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      }
    ]
  },

  // 17. Europa (Santana)
  {
    slug: 'europa',
    sections: [
      {
        sectionIndex: 1, // Theme A (Main Melody - First Statement)
        exerciseLabel: "Carlos Santana Lyrical Ballad Melody Theme",
        alphaTab: ":4 8.1 :8 11.2 9.2 :2 8.2 | :4 10.3 :8 8.2 10.2 :2 11.2 | :4 10.3 :8 12.3 10.3 :2 12.4 |"
      },
      {
        sectionIndex: 3, // Theme B (Uptempo Latin Section)
        exerciseLabel: "Uptempo Latin Rock Improvisation Groove",
        alphaTab: ":8 8.1 11.1 10.1 8.1 :4 11.1 :8 10.1 8.1 | :8 11.2 8.2 10.3 8.3 :2 10.3 |"
      }
    ]
  },

  // 18. Gloria (Them / Shadows of Knight)
  {
    slug: 'gloria',
    sections: [
      {
        sectionIndex: 2, // Verse 2 / Build-Up
        exerciseLabel: "Garage Rock E-D-A Driving Build-Up",
        alphaTab: ":4 (0.6 2.5 2.4 1.3 0.2 0.1) :8 (0.6 2.5 2.4 1.3 0.2 0.1) (0.6 2.5 2.4 1.3 0.2 0.1) :4 (0.4 2.3 3.2 2.1) (0.5 2.4 2.3 2.2 0.1) | :2 (0.6 2.5 2.4 1.3 0.2 0.1) :4 (0.6 2.5 2.4 1.3 0.2 0.1) r.4 |"
      },
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "E Major Pentatonic Garage Riff & Turnaround",
        alphaTab: ":8 0.6 3.6 0.5 2.5 :4 2.4 :8 0.4 2.4 | :4 2.3 :8 0.3 2.3 :2 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },

  // 19. Dust My Broom (Elmore James)
  {
    slug: 'dust-my-broom',
    sections: [
      {
        sectionIndex: 5, // Outro
        exerciseLabel: "Elmore James Signature Electric Slide Turnaround",
        alphaTab: ":8 12.1 12.1 12.1 12.2 :4 (12.1 12.2) :8 12.3 11.3 | :4 10.3 :8 12.4 12.4 :2 (0.6 2.5 2.4 1.3 0.2 0.1) |"
      }
    ]
  },

  // 20. (I Can't Get No) Satisfaction (The Rolling Stones)
  {
    slug: 'satisfaction',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Keith Richards Soul-Rock Riff & Lead Lick",
        alphaTab: ":4 2.5 :8 4.5 5.5 :4 5.5 :8 4.5 2.5 | :8 2.4 4.4 2.4 4.4 :2 (0.6 2.5 2.4 1.3) | :8 0.5 2.4 2.3 2.2 :2 (0.6 2.5 2.4 1.3) |"
      }
    ]
  },

  // 21. Summer of '69 (Bryan Adams)
  {
    slug: 'summer-of-69',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Keith Scott Signature Lead Fill & Turnaround",
        alphaTab: ":8 10.2 12.2 :4 10.1 :8 12.1 10.1 :4 12.1 | :8 14.1 12.1 10.1 12.2 :2 10.1 | :8 11.3 12.2 10.2 11.3 :2 (0.4 2.3 3.2) |"
      }
    ]
  },

  // 22. The Thrill Is Gone (B.B. King)
  {
    slug: 'the-thrill-is-gone',
    sections: [
      {
        sectionIndex: 1, // Verse (12-Bar Blues)
        exerciseLabel: "B.B. King Lucille Call-and-Response Blues Box",
        alphaTab: ":4 (7.6 9.5 9.4 7.3 7.2 7.1) :8 r.8 7.1 :4 10.2 :8 7.1 10.2 | :2 (7.5 9.4 9.3 8.2 7.1) :8 r.8 9.3 7.2 10.2 | :4 (9.5 8.4 9.3 7.2) :2 (7.6 9.5 9.4 7.3 7.2 7.1) |"
      }
    ]
  },

  // 23. Who Made Who (AC/DC)
  {
    slug: 'who-made-who',
    sections: [
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Angus Young Screaming D Blues Solo",
        alphaTab: ":8 10.1 13.1 10.1 13.1 :4 13.1 :8 10.1 13.2 | :8 10.2 12.3 10.3 12.3 :2 12.3 | :8 10.3 12.3 10.2 13.2 :2 13.1 |"
      }
    ]
  }
];

console.log(`Validating and updating Batch 3E Part 2 (${updates.length} songs)...`);
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

console.log(`\nBatch 3E Part 2 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

