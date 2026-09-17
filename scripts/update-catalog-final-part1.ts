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
  // 1. Back in Black (AC/DC)
  {
    slug: 'back-in-black',
    sections: [
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Angus & Malcolm Tight Verse Stabs & Fill",
        alphaTab: ":4 (0.6 2.5 2.4) :8 r.8 (0.4 2.3 3.2) :4 (0.4 2.3 3.2) :8 r.8 (0.5 2.4 2.3) | :4 (0.5 2.4 2.3) :8 3.1 0.1 3.2 0.2 :4 2.3 |"
      },
      {
        sectionIndex: 2, // Bridge
        exerciseLabel: "Malcolm Young A-G-D Chord Descent",
        alphaTab: ":4 (0.5 2.4 2.3) (4.6 2.4 2.3) :2 (2.6 4.5 4.4 2.3) | :2 (0.6 2.5 2.4) :2 r.2 |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Angus Young Iconic E Minor Blues Run",
        alphaTab: ":8 12.1 15.1 12.1 15.1 :4 15.1 :8 12.1 15.2 | :8 12.2 14.3 12.3 14.3 :2 14.3 | :8 12.3 14.3 12.2 15.2 :2 15.1 |"
      }
    ]
  },

  // 2. Bad Moon Rising (CCR)
  {
    slug: 'bad-moon-rising',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "John Fogerty D Major Rockabilly Turnaround",
        alphaTab: ":8 10.6 12.6 9.5 12.5 :4 9.4 :8 12.4 9.3 | :8 11.3 10.2 12.2 10.1 :2 12.1 | :8 12.1 10.1 12.2 10.2 :2 11.3 |"
      }
    ]
  },

  // 3. Blitzkrieg Bop (Ramones)
  {
    slug: 'blitzkrieg-bop',
    sections: [
      {
        sectionIndex: 3, // Scale Practice Exercise
        exerciseLabel: "Johnny Ramone High-Speed Punk Turnaround",
        alphaTab: ":8 (5.6 7.5 7.4) (5.6 7.5 7.4) (5.6 7.5 7.4) (5.6 7.5 7.4) :4 (5.5 7.4 7.3) (7.5 9.4 9.3) | :2 (5.6 7.5 7.4) :2 r.2 |"
      }
    ]
  },

  // 4. Blowin' in the Wind (Bob Dylan)
  {
    slug: 'blowin-in-the-wind',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Bob Dylan G Major Acoustic Folk Lick",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 5. Born to Be Wild (Steppenwolf)
  {
    slug: 'born-to-be-wild',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Heavy Metal E Minor Pentatonic Lead Lick",
        alphaTab: ":8 12.6 15.6 12.5 14.5 :4 12.4 :8 14.4 12.3 | :8 14.3 12.2 15.2 12.1 :2 15.1 | :8 15.1 12.1 15.2 12.2 :2 14.3 |"
      }
    ]
  },

  // 6. Brothers in Arms (Dire Straits)
  {
    slug: 'brothers-in-arms',
    sections: [
      {
        sectionIndex: 1, // Verse 1
        exerciseLabel: "Mark Knopfler G#m Fingerstyle Verse",
        alphaTab: ":8 4.6 6.5 6.4 4.3 :4 (4.6 6.5 6.4 4.3) :8 0.6 2.5 2.4 1.3 | :4 (0.6 2.5 2.4 1.3) :2 (2.5 4.4 4.3 4.2 2.1) |"
      },
      {
        sectionIndex: 2, // Verse 2
        exerciseLabel: "Dynamic G#m-E-B-F# Fingerpicked Verse",
        alphaTab: ":8 4.6 6.5 6.4 4.3 :4 (4.6 6.5 6.4 4.3) :8 0.6 2.5 2.4 1.3 | :4 (0.6 2.5 2.4 1.3) :2 (2.6 4.5 4.4 3.3 2.2 2.1) |"
      },
      {
        sectionIndex: 3, // Chorus
        exerciseLabel: "Anthemic Brothers in Arms Chorus Resolution",
        alphaTab: ":4 (0.6 2.5 2.4 1.3) (2.6 4.5 4.4 3.3) :2 (4.6 6.5 6.4 4.3) | :2 (0.6 2.5 2.4 1.3) :2 (2.6 4.5 4.4 3.3) |"
      },
      {
        sectionIndex: 4, // Verse 3
        exerciseLabel: "Subtle Knopfler Lead Embellishments",
        alphaTab: ":8 4.6 6.4 4.3 4.2 :4 (4.6 6.5 6.4 4.3) :8 0.6 2.4 1.3 0.2 | :4 (0.6 2.5 2.4 1.3) :2 (4.6 6.5 6.4 4.3) |"
      }
    ]
  },

  // 7. Brown Eyed Girl (Van Morrison)
  {
    slug: 'brown-eyed-girl',
    sections: [
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Sha-La-La Joyful Strumming Outro",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) :8 (3.6 2.5 0.4 0.3 3.2 3.1) (3.6 2.5 0.4 0.3 3.2 3.1) :4 (3.5 2.4 0.3 1.2 0.1) :8 (3.5 2.4 0.3 1.2 0.1) (3.5 2.4 0.3 1.2 0.1) | :4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "G Major Pentatonic Acoustic Lead Fill",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 8. The Devil Went Down to Georgia (Charlie Daniels Band)
  {
    slug: 'devil-went-down-to-georgia',
    sections: [
      {
        sectionIndex: 4, // Chorus/Hook
        exerciseLabel: "Fire on the Mountain Heavy Country Stomp",
        alphaTab: ":4 (10.6 12.5 12.4) :8 (10.6 12.5 12.4) (10.6 12.5 12.4) :4 (8.5 10.4 10.3) :8 (8.5 10.4 10.3) (8.5 10.4 10.3) | :4 (10.5 12.4 12.3) :8 (10.5 12.4 12.3) (10.5 12.4 12.3) :2 (10.6 12.5 12.4) |"
      }
    ]
  },

  // 9. Don't Stop Believin' (Journey)
  {
    slug: 'dont-stop-believin',
    sections: [
      {
        sectionIndex: 6, // Scale Practice Exercise
        exerciseLabel: "Neal Schon Soaring E Major Lead Lick",
        alphaTab: ":8 12.1 14.1 16.1 14.1 :4 12.1 :8 14.1 12.1 | :4 14.2 :8 12.2 14.2 :2 13.3 | :8 14.2 12.2 13.3 14.4 :2 12.4 |"
      }
    ]
  },

  // 10. Dreams (Fleetwood Mac)
  {
    slug: 'dreams',
    sections: [
      {
        sectionIndex: 4, // Outro
        exerciseLabel: "Lindsey Buckingham Lyrical Outro Fingerpicking",
        alphaTab: ":8 1.6 3.5 3.4 2.3 :4 (1.6 3.5 3.4 2.3) :8 3.6 5.5 5.4 4.3 | :4 (3.6 5.5 5.4 4.3) :2 (1.6 3.5 3.4 2.3) |"
      },
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "F Major / Lydian Melodic Acoustic Run",
        alphaTab: ":8 1.6 3.6 0.5 3.5 :4 0.4 :8 3.4 0.3 | :8 2.3 1.2 3.2 1.1 :2 3.1 | :8 3.1 1.1 3.2 1.2 :2 2.3 |"
      }
    ]
  },

  // 11. Enter Sandman (Metallica)
  {
    slug: 'enter-sandman',
    sections: [
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Now I Lay Me Down to Sleep Heavy Power Build",
        alphaTab: ":2 (2.6 4.5 4.4) (3.6 5.5 5.4) | :2 (5.6 7.5 7.4) (3.6 5.5 5.4) | :1 (0.6 2.5 2.4) |"
      }
    ]
  },

  // 12. Eye of the Tiger (Survivor)
  {
    slug: 'eye-of-the-tiger',
    sections: [
      {
        sectionIndex: 2, // Pre-Chorus
        exerciseLabel: "Ascending Ab-Bb-Cm Pre-Chorus Climb",
        alphaTab: ":2 (4.6 6.5 6.4) (6.6 8.5 8.4) | :2 (8.6 10.5 10.4) (6.6 8.5 8.4) |"
      },
      {
        sectionIndex: 5, // Guitar Solo
        exerciseLabel: "Frankie Sullivan Melodic Cm Lead Solo",
        alphaTab: ":8 8.1 11.1 8.1 11.1 :4 11.1 :8 8.1 11.2 | :8 8.2 10.3 8.3 10.3 :2 10.3 | :8 8.3 10.3 8.2 11.2 :2 11.1 |"
      },
      {
        sectionIndex: 6, // Final Chorus
        exerciseLabel: "Driving Anthemic Cm Climax Groove",
        alphaTab: ":4 (8.6 10.5 10.4) :8 (8.6 10.5 10.4) (8.6 10.5 10.4) :4 (6.6 8.5 8.4) (4.6 6.5 6.4) | :2 (4.6 6.5 6.4) :2 (6.6 8.5 8.4) |"
      },
      {
        sectionIndex: 7, // Scale Practice Exercise
        exerciseLabel: "C Minor Pentatonic Arena Rock Run",
        alphaTab: ":8 8.6 11.6 8.5 10.5 :4 8.4 :8 10.4 8.3 | :8 10.3 8.2 11.2 8.1 :2 11.1 | :8 11.1 8.1 11.2 8.2 :2 10.3 |"
      }
    ]
  },

  // 13. Free Fallin' (Tom Petty)
  {
    slug: 'free-fallin',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Mike Campbell Lyrical F Major Lead Fill",
        alphaTab: ":8 1.6 3.6 0.5 3.5 :4 0.4 :8 3.4 0.3 | :8 2.3 1.2 3.2 1.1 :2 3.1 | :8 3.1 1.1 3.2 1.2 :2 2.3 |"
      }
    ]
  },

  // 14. Good Riddance (Green Day)
  {
    slug: 'good-riddance',
    sections: [
      {
        sectionIndex: 5, // Scale Practice Exercise
        exerciseLabel: "Billie Joe G Major Acoustic Turnaround",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 15. Here I Go Again (Whitesnake)
  {
    slug: 'here-i-go-again',
    sections: [
      {
        sectionIndex: 3, // Bridge
        exerciseLabel: "Soaring Arena Rock Bridge Power Chords",
        alphaTab: ":2 (5.6 7.5 7.4) (8.6 10.5 10.4) | :2 (10.6 12.5 12.4) (0.6 2.5 2.4) |"
      },
      {
        sectionIndex: 4, // Guitar Solo
        exerciseLabel: "John Sykes & Adrian Vandenberg Lead Solo",
        alphaTab: ":8 15.1 17.1 15.1 17.1 :4 17.1 :8 15.1 17.2 | :8 15.2 17.3 15.3 17.3 :2 17.3 | :8 15.3 17.3 15.2 17.2 :2 15.1 |"
      },
      {
        sectionIndex: 5, // Final Chorus
        exerciseLabel: "Full-Blast Power Metal Climax Chorus",
        alphaTab: ":4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) :4 (10.6 12.5 12.4) (8.6 10.5 10.4) | :2 (8.6 10.5 10.4) :2 (10.6 12.5 12.4) |"
      }
    ]
  },

  // 16. Highway to Hell (AC/DC)
  {
    slug: 'highway-to-hell',
    sections: [
      {
        sectionIndex: 4, // Bridge
        exerciseLabel: "Malcolm Young D/F# to G5 to A5 Pre-Solo Build",
        alphaTab: ":4 (2.6 0.5 0.4 2.3) :8 (2.6 0.5 0.4 2.3) (2.6 0.5 0.4 2.3) :4 (3.6 5.5 5.4) :8 (3.6 5.5 5.4) (3.6 5.5 5.4) | :2 (0.5 2.4 2.3) :2 (0.5 2.4 2.3) |"
      }
    ]
  },

  // 17. Hotel California (Eagles)
  {
    slug: 'hotel-california',
    sections: [
      {
        sectionIndex: 0, // Intro
        exerciseLabel: "Don Felder 12-String Acoustic Intro Theme",
        alphaTab: ":8 7.6 9.5 9.4 7.3 :4 (7.6 9.5 9.4 7.3) :8 2.5 4.4 3.3 2.2 | :4 (2.5 4.4 3.3 2.2) :2 (0.5 2.4 2.3 2.2 0.1) | :8 0.6 2.5 2.4 1.3 :4 (0.6 2.5 2.4 1.3) :2 (3.6 5.5 5.4 4.3 3.2 3.1) |"
      },
      {
        sectionIndex: 1, // Verse
        exerciseLabel: "Spanish-Flavored Bm-F#-A-E Verse Arpeggios",
        alphaTab: ":8 2.5 4.4 4.3 3.2 2.1 3.2 4.3 4.4 | :8 2.6 4.5 4.4 3.3 2.2 3.3 4.4 4.5 | :8 0.5 2.4 2.3 2.2 0.1 2.2 2.3 2.4 | :8 0.6 2.5 2.4 1.3 0.2 1.3 2.4 2.5 |"
      },
      {
        sectionIndex: 2, // Chorus
        exerciseLabel: "Welcome to the Hotel California Strumming Bed",
        alphaTab: ":4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.4 2.3 3.2 2.1) :2 (2.5 4.4 4.3 4.2 2.1) | :4 (2.5 4.4 4.3 3.2 2.1) :8 (2.5 4.4 4.3 3.2 2.1) (2.5 4.4 4.3 3.2 2.1) :2 (3.6 2.5 0.4 0.3 3.2 3.1) |"
      },
      {
        sectionIndex: 3, // Guitar Solo
        exerciseLabel: "Don Felder & Joe Walsh Dual Harmonized Lead",
        alphaTab: ":8 7.1 10.1 7.1 10.1 :4 10.1 :8 7.1 10.2 | :8 7.2 9.3 7.3 9.3 :2 9.3 | :8 7.3 9.3 7.2 10.2 :2 10.1 |"
      }
    ]
  },

  // 18. Hound Dog (Big Mama Thornton / Elvis Presley)
  {
    slug: 'hound-dog',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "Scotty Moore Rockabilly A Major Lead Lick",
        alphaTab: ":8 5.6 7.6 4.5 7.5 :4 4.4 :8 7.4 4.3 | :8 6.3 5.2 7.2 5.1 :2 7.1 | :8 7.1 5.1 7.2 5.2 :2 6.3 |"
      }
    ]
  },

  // 19. Iron Man (Black Sabbath)
  {
    slug: 'iron-man',
    sections: [
      {
        sectionIndex: 2, // Bridge / Fast Section
        exerciseLabel: "Tony Iommi Fast Driving Bridge Riff",
        alphaTab: ":8 (7.6 9.5 9.4) (7.6 9.5 9.4) (10.6 12.5 12.4) (7.6 9.5 9.4) :4 (12.6 14.5 14.4) (10.6 12.5 12.4) | :8 (7.6 9.5 9.4) (7.6 9.5 9.4) (10.6 12.5 12.4) (7.6 9.5 9.4) :2 (7.6 9.5 9.4) |"
      }
    ]
  },

  // 20. Johnny B. Goode (Chuck Berry)
  {
    slug: 'johnny-b-goode',
    sections: [
      {
        sectionIndex: 3, // Verse 2
        exerciseLabel: "Chuck Berry Bb Boogie-Woogie Rhythm",
        alphaTab: ":8 (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) | :8 (6.5 8.4) (6.5 8.4) (6.5 10.4) (6.5 10.4) (6.6 8.5) (6.6 8.5) (6.6 10.5) (6.6 10.5) |"
      }
    ]
  },

  // 21. Knockin' on Heaven's Door (Bob Dylan / Guns N' Roses)
  {
    slug: 'knockin-on-heavens-door',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "Slash Melodic G Major Pentatonic Fill",
        alphaTab: ":8 3.6 5.6 2.5 5.5 :4 2.4 :8 5.4 2.3 | :8 4.3 3.2 5.2 3.1 :2 5.1 | :8 5.1 3.1 5.2 3.2 :2 4.3 |"
      }
    ]
  },

  // 22. La Bamba (Ritchie Valens)
  {
    slug: 'la-bamba',
    sections: [
      {
        sectionIndex: 4, // Scale Practice Exercise
        exerciseLabel: "Ritchie Valens Latin Rock Lead Turnaround",
        alphaTab: ":8 8.6 10.6 7.5 10.5 :4 7.4 :8 10.4 7.3 | :8 9.3 8.2 10.2 8.1 :2 10.1 | :8 10.1 8.1 10.2 8.2 :2 9.3 |"
      }
    ]
  }
];

console.log(`Validating and updating Catalog Final Part 1 (${updates.length} songs)...`);
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

console.log(`\nCatalog Final Part 1 Complete! Sections updated: ${totalUpdated}, Errors: ${errorCount}`);
if (errorCount > 0) process.exit(1);

