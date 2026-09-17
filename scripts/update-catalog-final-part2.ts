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
  // 23. Landslide (Fleetwood Mac)
  {
    slug: 'landslide',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Lindsey Buckingham Travis Picking Turnaround",
        alphaTab: ":8 3.5 0.3 2.5 0.2 0.5 0.3 2.5 0.2 | :4 (3.5 0.3 0.2) :2 (3.5 2.4 0.3 1.2 0.1) :4 r.4 |"
      }
    ]
  },

  // 24. Message in a Bottle (The Police)
  {
    slug: 'message-in-a-bottle',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Andy Summers C#m Add9 Arpeggio Lick",
        alphaTab: ":8 9.6 11.5 13.4 11.5 :4 (9.6 11.5 13.4) :8 5.6 7.5 | :8 9.4 7.5 :4 (5.6 7.5 9.4) :2 (7.6 9.5 11.4) |"
      }
    ]
  },

  // 25. Paint It Black (The Rolling Stones)
  {
    slug: 'paint-it-black',
    sections: [
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Sitar-Style Driving Em-B7 Outro Riff",
        alphaTab: ":8 0.6 2.5 2.4 0.3 0.2 0.1 0.2 0.3 | :8 2.5 4.4 4.3 4.2 2.1 4.2 4.3 4.4 | :1 (0.6 2.5 2.4 0.3 0.2 0.1) |"
      }
    ]
  },

  // 26. Paranoid (Black Sabbath)
  {
    slug: 'paranoid',
    sections: [
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Tony Iommi Driving E5 Palm-Muted Outro Stabs",
        alphaTab: ":8 (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) :4 (10.6 12.5) (12.6 14.5) | :8 (12.6 14.5) (12.6 14.5) (12.6 14.5) (12.6 14.5) :2 (12.6 14.5) |"
      }
    ]
  },

  // 27. Rebel Yell (Billy Idol)
  {
    slug: 'rebel-yell',
    sections: [
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Steve Stevens Ray-Gun & B Minor Solo",
        alphaTab: ":8 7.1 10.1 7.1 10.1 :4 10.1 :8 7.1 10.2 | :8 7.2 9.3 7.3 9.3 :2 9.3 | :8 7.3 9.3 7.2 10.2 :2 10.1 |"
      },
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Driving Billy Idol Bm-D-A Anthem Outro",
        alphaTab: ":4 (7.6 9.5 9.4) :8 (7.6 9.5 9.4) (7.6 9.5 9.4) :4 (5.5 7.4 7.3) :8 (5.5 7.4 7.3) (5.5 7.4 7.3) | :4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) :2 (7.6 9.5 9.4) |"
      }
    ]
  },

  // 28. Rock and Roll All Nite (KISS)
  {
    slug: 'rock-and-roll-all-nite',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Ace Frehley A Major Pentatonic Stadium Fill",
        alphaTab: ":8 5.6 7.6 4.5 7.5 :4 4.4 :8 7.4 4.3 | :8 6.3 5.2 7.2 5.1 :2 7.1 | :8 7.1 5.1 7.2 5.2 :2 6.3 |"
      }
    ]
  },

  // 29. Schism (Tool)
  {
    slug: 'schism',
    sections: [
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Adam Jones Heavy Drop-D Poly-Metric Chorus",
        alphaTab: ":8 0.6 0.5 12.4 10.4 :4 12.4 :8 0.6 0.5 | :8 10.4 12.4 0.6 0.5 :2 (0.6 0.5 0.4) |"
      }
    ]
  },

  // 30. Seven Nation Army (The White Stripes)
  {
    slug: 'seven-nation-army',
    sections: [
      {
        sectionIndex: 0, // Main Riff (Intro)
        exerciseLabel: "Jack White Iconic Detuned Bass Riff",
        alphaTab: ":4 7.5 :8 7.5 7.5 :4 10.5 7.5 | :2 5.5 :2 3.5 | :1 2.5 | :1 7.5 |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Jack White Detuned Riff with Vocals",
        alphaTab: ":4 7.5 :8 7.5 7.5 :4 10.5 7.5 | :2 5.5 :2 3.5 | :1 2.5 | :1 7.5 |"
      }
    ]
  },

  // 31. Should I Stay or Should I Go (The Clash)
  {
    slug: 'should-i-stay-or-should-i-go',
    sections: [
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Spanish Chorus Riff & Punk Rock Climax",
        alphaTab: ":4 (10.6 12.5 12.4) :8 (10.6 12.5 12.4) (10.6 12.5 12.4) :4 (10.5 12.4 12.3) :8 (10.5 12.4 12.3) (10.5 12.4 12.3) | :4 (8.5 10.4 10.3) (10.5 12.4 12.3) :2 (10.6 12.5 12.4) |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Mick Jones D Major Punk Rock Fill",
        alphaTab: ":8 10.6 12.6 9.5 12.5 :4 9.4 :8 12.4 9.3 | :8 11.3 10.2 12.2 10.1 :2 12.1 | :8 12.1 10.1 12.2 10.2 :2 11.3 |"
      }
    ]
  },

  // 32. (Sittin' On) The Dock of the Bay (Otis Redding)
  {
    slug: 'sittin-on-the-dock-of-the-bay',
    sections: [
      {
        sectionIndex: 6, // Scale Practice Exercise
        exerciseLabel: "Steve Cropper Soul Guitar Lick & Turnaround",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 33. Smoke on the Water (Deep Purple)
  {
    slug: 'smoke-on-the-water',
    sections: [
      {
        sectionIndex: 0, // Main Riff (Intro)
        exerciseLabel: "Parallel Fourths Main Riff Exercise",
        alphaTab: ":4 (0.4 0.3) (3.4 3.3) :2 (5.4 5.3) | :4 (0.4 0.3) (3.4 3.3) (6.4 6.3) (5.4 5.3) | :4 (0.4 0.3) (3.4 3.3) :2 (5.4 5.3) | :4 (3.4 3.3) :2 (0.4 0.3) :4 r.4 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Smoke on the Water Stadium Chorus Riff",
        alphaTab: ":4 (3.5 5.4 5.3) :8 (3.5 5.4 5.3) (3.5 5.4 5.3) :4 (4.6 6.5 6.4) :8 (4.6 6.5 6.4) (4.6 6.5 6.4) | :2 (3.6 5.5 5.4) :2 (3.6 5.5 5.4) |"
      }
    ]
  },

  // 34. Stairway to Heaven (Led Zeppelin)
  {
    slug: 'stairway-to-heaven',
    sections: [
      {
        sectionIndex: 2, // Electric Section / Hard Rock Build
        exerciseLabel: "Jimmy Page Am-G-F Electric Hard Rock Build",
        alphaTab: ":4 (5.6 7.5 7.4) :8 (5.6 7.5 7.4) (5.6 7.5 7.4) :4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) | :2 (1.6 3.5 3.4) :2 (3.6 5.5 5.4) |"
      }
    ]
  },

  // 35. Stand By Me (Ben E. King)
  {
    slug: 'stand-by-me',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "A Major Classic Soul Lead Fill",
        alphaTab: ":8 5.6 7.6 4.5 7.5 :4 4.4 :8 7.4 4.3 | :8 6.3 5.2 7.2 5.1 :2 7.1 | :8 7.1 5.1 7.2 5.2 :2 6.3 |"
      }
    ]
  },

  // 36. Superstition (Stevie Wonder)
  {
    slug: 'superstition',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Eb Clavinet/Guitar Funk Pentatonic Groove",
        alphaTab: ":8 11.5 13.5 11.4 13.4 :4 13.4 :8 11.4 13.5 | :8 11.3 13.3 11.2 14.2 :2 11.1 | :8 14.2 11.2 13.3 11.3 :2 13.4 |"
      }
    ]
  },

  // 37. Sweet Home Alabama (Lynyrd Skynyrd)
  {
    slug: 'sweet-home-alabama',
    sections: [
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Southern Rock D-Cadd9-G Verse Groove",
        alphaTab: ":4 (0.4 2.3 3.2) :8 (0.4 2.3 3.2) (0.4 2.3 3.2) :4 (3.5 2.4 0.3 3.2) :8 (3.5 2.4 0.3 3.2) (3.5 2.4 0.3 3.2) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Sweet Home Alabama Singalong Chorus Strum",
        alphaTab: ":4 (0.4 2.3 3.2) :8 (0.4 2.3 3.2) (0.4 2.3 3.2) :4 (3.5 2.4 0.3 3.2) :8 (3.5 2.4 0.3 3.2) (3.5 2.4 0.3 3.2) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      }
    ]
  },

  // 38. The Final Countdown (Europe)
  {
    slug: 'the-final-countdown',
    sections: [
      {
        sectionIndex: 4, // Interlude
        exerciseLabel: "John Norum F#m-D-Bm Heavy Interlude",
        alphaTab: ":2 (2.6 4.5 4.4) (7.6 9.5 9.4) | :2 (7.5 9.4 9.3) (0.6 2.5 2.4) |"
      }
    ]
  },

  // 39. Twist and Shout (The Beatles)
  {
    slug: 'twist-and-shout',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "Beatles D-G-A Rock 'n' Roll Fill",
        alphaTab: ":8 10.6 12.6 9.5 12.5 :4 9.4 :8 12.4 9.3 | :8 11.3 10.2 12.2 10.1 :2 12.1 | :8 12.1 10.1 12.2 10.2 :2 11.3 |"
      }
    ]
  },

  // 40. Under the Bridge (Red Hot Chili Peppers)
  {
    slug: 'under-the-bridge',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "John Frusciante Jimi Hendrix Style E Major Fill",
        alphaTab: ":8 12.6 14.6 11.5 14.5 :4 11.4 :8 14.4 11.3 | :8 13.3 12.2 14.2 12.1 :2 14.1 | :8 14.1 12.1 14.2 12.2 :2 13.3 |"
      }
    ]
  },

  // 41. Wanted Dead or Alive (Bon Jovi)
  {
    slug: 'wanted-dead-or-alive',
    sections: [
      {
        sectionIndex: 4, // Verse 2
        exerciseLabel: "12-String Cowboy Rock Verse Strumming",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) :8 (0.4 2.3 3.2 2.1) (0.4 2.3 3.2 2.1) :4 (3.5 2.4 0.3 3.2 3.1) :8 (3.5 2.4 0.3 3.2 3.1) (3.5 2.4 0.3 3.2 3.1) | :2 (3.6 2.5 0.4 0.3 3.2 3.1) :2 (0.4 2.3 3.2 2.1) |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Wanted Dead or Alive Anthem Climax",
        alphaTab: ":4 (0.4 2.3 3.2 2.1) (3.5 2.4 0.3 3.2 3.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) | :2 (1.6 3.5 3.4 2.3 1.2 1.1) :2 (0.4 2.3 3.2 2.1) |"
      }
    ]
  },

  // 42. Whole Lotta Love (Led Zeppelin)
  {
    slug: 'whole-lotta-love',
    sections: [
      {
        sectionIndex: 2, // Psychedelic Middle Section
        exerciseLabel: "Jimmy Page Psychedelic Theremin & Slide Swells",
        alphaTab: ":8 0.6 0.6 12.1 12.2 :2 (12.1 12.2) :4 r.4 | :8 0.6 0.6 15.1 15.2 :2 (15.1 15.2) :4 r.4 |"
      }
    ]
  },

  // 43. Wild Thing (The Troggs)
  {
    slug: 'wild-thing',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "Troggs A Major Garage Rock Turnaround",
        alphaTab: ":8 5.6 7.6 4.5 7.5 :4 4.4 :8 7.4 4.3 | :8 6.3 5.2 7.2 5.1 :2 7.1 | :8 7.1 5.1 7.2 5.2 :2 6.3 |"
      }
    ]
  },

  // 44. You Really Got Me (The Kinks)
  {
    slug: 'you-really-got-me',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Dave Davies F-G Distorted Power Turnaround",
        alphaTab: ":8 (1.6 3.5 3.4) (1.6 3.5 3.4) :4 (3.6 5.5 5.4) :8 (1.6 3.5 3.4) (1.6 3.5 3.4) :4 (3.6 5.5 5.4) | :2 (3.6 5.5 5.4) :2 r.2 |"
      }
    ]
  },

  // 45. Zombie (The Cranberries)
  {
    slug: 'zombie',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Cranberries Em Heavily Distorted Climax Riff",
        alphaTab: ":8 12.6 15.6 12.5 14.5 :4 12.4 :8 14.4 12.3 | :8 14.3 12.2 15.2 12.1 :2 15.1 | :8 15.1 12.1 15.2 12.2 :2 14.3 |"
      }
    ]
  }
];

console.log(`Validating and updating Catalog Final Part 2 (${updates.length} songs)...`);
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

console.log(`\nCatalog Final Part 2 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

