import { getSongData, SongData } from '../lib/songData';

export type HarmonicCategory =
  | 'modal-mixture'
  | 'mixolydian-dorian'
  | 'descending-bassline'
  | 'key-modulation'
  | 'pedal-tone-drone'
  | 'secondary-dominants'
  | 'blues-rock-hybrid';

export interface HarmonicSecret {
  slug: string;
  songTitle: string;
  artist: string;
  category: HarmonicCategory;
  categoryLabel: string;
  coreSecret: string;
  emotionalHook: string;
  romanProgression: string;
  chords: string[];
  progressionExplanation: string[];
  voiceLeadingInsights: string[];
  guitarPerspective: string;
  songwriterTakeaway: string;
  isCurated: boolean;
  relatedTheory: {
    scales?: { name: string; slug: string; description: string }[];
    modes?: { name: string; slug: string; description: string }[];
    chords?: { name: string; slug: string; description: string }[];
    progressions?: { name: string; slug: string; description: string }[];
  };
}

export const HARMONIC_CATEGORIES: Record<HarmonicCategory, { label: string; description: string }> = {
  'modal-mixture': {
    label: 'Modal Mixture & Borrowed Chords',
    description: 'Borrowing chords from parallel minor/major keys to create unexpected emotional depth and color.',
  },
  'mixolydian-dorian': {
    label: 'Mixolydian & Dorian Anthems',
    description: 'Replacing standard major and minor tonalities with modal scales to craft uplifting, swaggering rock progressions.',
  },
  'descending-bassline': {
    label: 'Chromatic & Descending Basslines',
    description: 'Stepwise descending bass movement under stationary or shifting triads that generates heartbreaking tension.',
  },
  'key-modulation': {
    label: 'Emotional Key Modulations',
    description: 'Shifting tonal centers between verses and choruses to mirror lyrical psychological transitions.',
  },
  'pedal-tone-drone': {
    label: 'Acoustic Pedal Tones & Drones',
    description: 'Anchoring stationary ringing open strings while chords shift underneath to create rich acoustic shimmer.',
  },
  'secondary-dominants': {
    label: 'Secondary Dominants & Harmonic Minor',
    description: 'Inserting major or dominant chords outside the key to forcefully pull the ear toward resolution.',
  },
  'blues-rock-hybrid': {
    label: 'Blues-Rock Tritones & Alterations',
    description: 'Blending minor pentatonic riffs with dominant 7th chords and tritone tension to create explosive energy.',
  },
};

const CURATED_SECRETS: Record<string, HarmonicSecret> = {
  'hotel-california': {
    slug: 'hotel-california',
    songTitle: 'Hotel California',
    artist: 'Eagles',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'The Spanish Andalusian Cadence with a Major V Chord Borrowed from Harmonic Minor',
    emotionalHook: 'The haunting tension comes from the F# major chord (V) in a B minor key. Standard natural minor would dictate an F#m chord, but using F# major introduces an A# leading tone (from B Harmonic Minor) that yearns to resolve up to B, creating an exotic Spanish flamenco flavor.',
    romanProgression: 'i - V - VII - IV - VI - III - iv - V',
    chords: ['Bm', 'F#', 'A', 'E', 'G', 'D', 'Em', 'F#'],
    progressionExplanation: [
      'Bm (i): The dark tonic foundation establishing the minor key center.',
      'F# (V): Major dominant chord borrowed from B Harmonic Minor with the sharp 7th (A#).',
      'A (VII) to E (IV): Descending step to the subtonic, then a Dorian-flavored major IV chord.',
      'G (VI) to D (III): Steps down to the submediant, then resolves to the relative major for a brief uplifting lift.',
      'Em (iv) to F# (V): Minor subdominant builds final tension before slamming into the dominant F# turnaround.',
    ],
    voiceLeadingInsights: [
      'The bass line steps down mostly in whole steps and half steps: B → A# (in F#/A#) → A → G# (in E/G#) → G → F# (in D/F#) → E → F#.',
      'This creates an unbroken descending chromatic line running invisibly underneath the acoustic arpeggios.',
      'The dual guitar harmony solo mirrors this descending counterpoint with interlocking 3rds and 6ths.',
    ],
    guitarPerspective: 'Capo 7 for acoustic rhythm lets the player use open Em-shape chord grips while sounding in B minor. The 12-string fingerpicked arpeggios outline the chord notes individually rather than strumming, letting each dissonance ring out cleanly.',
    songwriterTakeaway: 'In any minor key progression, replace your minor v chord with a major V (or dominant 7th). It instantly gives your progression urgency, classic rock gravitas, and an irresistible resolution back to the tonic.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Harmonic Minor', slug: 'harmonic-minor', description: 'The source of the raised 7th degree (A#) that enables the F# major chord.' },
        { name: 'B Natural Minor', slug: 'minor', description: 'The natural minor scale providing the primary diatonic notes of the verse.' },
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for the iconic dual guitar harmony solos.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode that defines the melancholy atmosphere.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Understand how Bm and Em function as tonic and subdominant anchors.' },
        { name: 'Major Chords', slug: 'major', description: 'How borrowed major chords create bright moments in a dark key.' },
      ],
    },
  },

  'sweet-child-o-mine': {
    slug: 'sweet-child-o-mine',
    songTitle: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Flattened 7th Degree (C Major) Eliminates Classical Stiffness for Blues-Rock Swagger',
    emotionalHook: 'The entire verse cycles through D - C - G - D. If this were standard D major, the VII chord would be C# diminished (C#dim). Replacing it with a whole-step flattened C major chord roots the progression squarely in D Mixolydian, giving it an uplifting yet rebellious rock swagger without church-like leading-tone tension.',
    romanProgression: 'I - bVII - IV - I',
    chords: ['D', 'C', 'G', 'D'],
    progressionExplanation: [
      'D (I): The radiant major home base.',
      'C (bVII): The borrowed Mixolydian modal chord. It provides a warm, relaxed departure rather than a sharp classical pull.',
      'G (IV): The subdominant acts as a bridge, creating a double-plagal cadence (C → G → D) that smoothly cycles back home.',
      'D (I): Resolves smoothly without needing a dominant A major (V) chord.',
    ],
    voiceLeadingInsights: [
      'Slash’s iconic intro riff constantly revolves around an octave pedal D note while alternating through the 3rd (F#) and flattened 7th (C natural).',
      'When the chord changes to C, Slash simply lowers the root note of his pattern from D to C on the guitar neck, keeping the circular melody virtually identical.',
      'When the chord changes to G, he shifts the root to the G string (fret 12), illustrating economic scalar displacement.',
    ],
    guitarPerspective: "Tuned down a half-step (Eb Ab Db Gb Bb Eb). This lowers string tension for Slash's massive 1.5-step whole-hand string bends, while giving the open D, C, and G chord shapes a deeper, chunkier growl.",
    songwriterTakeaway: 'To write an anthemic rock progression that never feels cheesy or dated, avoid the dominant V chord. Cycle I - bVII - IV - I instead. The flat-7 chord grounds the progression in rock/blues DNA.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Mixolydian Scale', slug: 'mixolydian', description: 'The major scale with a flat 7th degree that eliminates leading-tone tension.' },
        { name: 'Major Pentatonic', slug: 'major-pentatonic', description: 'Used by Slash to weave lyrical melodies over the verse chords.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The definitive rock and roll mode used in Sweet Child O Mine.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Explore open and barre voicings for D, C, and G.' },
      ],
      progressions: [
        { name: 'I - bVII - IV Progression', slug: 'i-bvii-iv', description: 'The classic rock progression powering Sweet Child O Mine and thousands of anthems.' },
      ],
    },
  },

  'comfortably-numb': {
    slug: 'comfortably-numb',
    songTitle: 'Comfortably Numb',
    artist: 'Pink Floyd',
    category: 'key-modulation',
    categoryLabel: 'Emotional Key Modulations',
    coreSecret: 'Dramatic Dual-Key Architecture Mirroring Alienation vs. Euphoric Nostalgia',
    emotionalHook: 'The verses are locked in a cold, isolated B minor (Bm - A - G - Em) sung by Roger Waters representing sickness and doctor examination. When David Gilmour sings the chorus, the song abruptly pivots to the relative major (D major: D - A - D - A - C - G), bathing the listener in warm, euphoric childhood nostalgia before slipping back into the dark minor key.',
    romanProgression: 'Verse: i - VII - VI - iv | Chorus: I - V - I - V - bVII - IV',
    chords: ['Bm', 'A', 'G', 'Em', 'D', 'C'],
    progressionExplanation: [
      'Verse (B minor): Bm (i) establishes melancholy isolation. Moving to A (VII) and G (VI) creates a hopeless downward slide, ending on Em (iv).',
      'Chorus (D major): Explodes into D major (I), alternating with A (V) for heroic warmth.',
      'The Chorus Twist (C major): Just when D major feels settled, Gilmour introduces C major (bVII), borrowing from D Mixolydian to evoke bittersweet dreamlike floating ("I have become comfortably numb").',
      'Outro Solo (B minor): Returns permanently to Bm - A - G - Em for one of rock’s greatest guitar solos.',
    ],
    voiceLeadingInsights: [
      'Gilmour targets chord tones with devastating precision: over Bm he hits D and F#; over A he targets C#; over G he lands firmly on B.',
      'His wide, vocal-like string bends often hold a note through a chord change, letting the changing harmony transform the meaning of the sustaining note from a root into a lush 9th or major 7th.',
    ],
    guitarPerspective: 'Stratocaster bridge pickup through a Big Muff Pi fuzz, Hiwatt amp, and subtle Electric Mistress flanger/chorus. Gilmour uses full 4-fret bends and vibrato while resting his palm near the bridge for maximum acoustic control.',
    songwriterTakeaway: 'Use key modulations between your verse and chorus to underscore your lyrics. Move from minor in the verse to relative major in the chorus to represent hope, release, or revelation.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'The backbone of Gilmour’s legendary outro solo.' },
        { name: 'B Natural Minor', slug: 'minor', description: 'Provides the 9th (C#) and b6 (G) notes that give the solo its emotional tears.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing the dark verse foundation.' },
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The mode introduced by the C major chord in the chorus.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Understand how stripped-down voicings enhance fuzz clarity.' },
      ],
    },
  },

  'black-hole-sun': {
    slug: 'black-hole-sun',
    songTitle: 'Black Hole Sun',
    artist: 'Soundgarden',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Beatlesque Chromatic Voice Leading and Minor-iv Borrowing in Drop D Tuning',
    emotionalHook: 'The verses sound deeply eerie and psychedelic because Chris Cornell constantly slips outside diatonic boundaries. In the key of G, he plays G - Bb - F - Fm - Eb - Bb - D. The Fm chord is a minor iv borrow that tugs at the ear with painful nostalgia, followed by an Eb (bVI) borrow and a sharp D major turnaround.',
    romanProgression: 'I - bIII - bVII - iv - bVI - bIII - V',
    chords: ['G', 'Bb', 'F', 'Fm', 'Eb', 'D'],
    progressionExplanation: [
      'G (I): Centers the song with a warm major resonance.',
      'Bb (bIII) to F (bVII): Borrowed from G Aeolian / minor pentatonic, injecting dark grunge swagger.',
      'Fm (iv): The crucial harmonic pivot! Moving from F major to F minor introduces the note Ab, creating a tear-jerking chromatic descent.',
      'Eb (bVI): Another borrowed minor-mode chord continuing the downward slide before snapping into D major (V) for dominant resolution.',
    ],
    voiceLeadingInsights: [
      'Look at the inner voice movement: A (in F) drops to Ab (in Fm), which slides smoothly to G (in Eb). That single half-step descending voice is what makes the progression unforgettable.',
      'Cornell pairs this with an arpeggiated electric guitar run through a spinning Leslie rotating speaker cabin for a disorienting, underwater swirl.',
    ],
    guitarPerspective: 'Drop D tuning (DADGBE) allows low, rumbling octave roots while keeping fingers free to voice high suspended extensions (sus4, 9ths) on the top strings.',
    songwriterTakeaway: 'The "minor iv chord" (Fm in the key of G, or Fm in C major) is the ultimate secret weapon in popular music. Anytime you have a IV chord, play it major for one measure, then drop the 3rd to make it minor. Instant bittersweet goosebumps.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Natural Minor', slug: 'minor', description: 'The parallel minor key from which the chords are borrowed.' },
        { name: 'Blues Scale', slug: 'blues', description: 'How Cornell blends blues dissonance into pop harmony.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The modal reservoir for the Bb, Eb, and Fm borrowed chords.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Deep dive into the emotional power of minor triads.' },
      ],
    },
  },

  'under-the-bridge': {
    slug: 'under-the-bridge',
    songTitle: 'Under the Bridge',
    artist: 'Red Hot Chili Peppers',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Hendrix-Style Chord Embellishments, A Sudden Key Shift, and a Gospel Minor-iv Outro',
    emotionalHook: 'John Frusciante connects three distinct harmonic worlds: a Baroque-style intro in E major (with rapid thumb-over hammer-ons), a sudden modulation down a whole step to D major for the verse, and a heart-wrenching gospel choir outro that borrows the minor iv chord (Am in G major).',
    romanProgression: 'Intro: I - V - vi - iii - IV | Verse: I - V - vi - IV | Outro: I - iv - I - bVII',
    chords: ['E', 'B', 'C#m', 'G#m', 'A', 'D', 'F#m', 'Am', 'G', 'F'],
    progressionExplanation: [
      'Intro (E Major): E - B - C#m - G#m - A. Classic classical/Baroque descending progression embellished with Frusciante’s fluid Hendrix hammer-ons.',
      'Verse (D Major): Modulates down to D major: D - F#m - E. Creates an intimate, fragile feeling matching Kiedis’ lonely lyrics.',
      'Outro (G Major / Modal Borrow): A - Am - G - F. Frusciante switches from A major to A minor (the minor iv borrow relative to E minor/G major), culminating in the desperate choral resolution.',
    ],
    voiceLeadingInsights: [
      'In the outro, moving from A major (with C#) to A minor (with C natural) produces an aching half-step voice lead down to the B of the G major chord.',
      'Frusciante’s thumb-over grip frees his pinky and index fingers to decorate triads with 9ths and suspensions.',
    ],
    guitarPerspective: 'Thumb-over technique on the 6th string is mandatory. It allows the chord roots to ring while the index, ring, and pinky fingers play embellishments in the upper registers.',
    songwriterTakeaway: 'You do not need a complex pivot chord to modulate keys. You can abruptly step down a whole step (E major to D major) if the lyrical atmosphere demands a shift from regal grandeur to intimate vulnerability.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major Scale', slug: 'major', description: 'The scale that governs the intricate intro embellishments.' },
        { name: 'Minor Pentatonic', slug: 'minor-pentatonic', description: 'Used for the soulful fills throughout the verses.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The pure major tonality of the verse and chorus.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Master thumb-over CAGED major chord voicings.' },
      ],
    },
  },

  'while-my-guitar-gently-weeps': {
    slug: 'while-my-guitar-gently-weeps',
    songTitle: 'While My Guitar Gently Weeps',
    artist: 'The Beatles',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'The Line Cliché: A Stepwise Descending Bass Under an Immovable A Minor Triad',
    emotionalHook: 'The verse chord progression creates the weeping sensation through a descending bass note against a stationary A minor triad: Am → Am/G → Am/F# → Fmaj7. The movement from F# (the bright Dorian 6th) to F natural (the weeping Aeolian minor 6th) creates a physical sob in the harmony.',
    romanProgression: 'Verse: i - i7 - i6 - bVI | Bridge: I - iii - vi - ii - V',
    chords: ['Am', 'Am/G', 'Am/F#', 'F', 'C', 'D', 'E', 'A', 'C#m', 'F#m', 'Bm'],
    progressionExplanation: [
      'Am: Pure tonic minor foundation.',
      'Am/G: Bass drops a whole step to G (b7), softening the minor harmony into an Am7 sound.',
      'Am/F#: Bass drops another half step to F#. This is the Dorian 6th, giving an unexpected moment of jazz/soul elegance.',
      'Fmaj7: Bass drops another half step to F natural (b6). This is the heartbreaking Aeolian resolution.',
      'Bridge (A Major): The song suddenly breaks into sunny A major (A - C#m - F#m - Bm - E), providing total emotional release before weeping again.',
    ],
    voiceLeadingInsights: [
      'The bass line produces a continuous half-step descent: A → G → F# → F natural → E.',
      'Eric Clapton’s guest guitar solo (treated with subtle tape-flanging / ADT) leans heavily into this descending chromatic line, bending up to chord tones just as the bass shifts beneath him.',
    ],
    guitarPerspective: 'Fingerpicking or hybrid picking this progression highlights the difference between the stationary upper strings (E and C notes) and the moving bass on strings 5 and 4.',
    songwriterTakeaway: 'The "line cliché" is one of music’s most reliable emotional tools. Keep your treble notes frozen on a minor chord while walking your bass note down one fret at a time (Root → Major 7 → Minor 7 → Major 6 → Minor 6).',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The Aeolian foundation for the verses and chorus.' },
        { name: 'A Dorian Scale', slug: 'dorian', description: 'The mode highlighted by the Am/F# chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The weeping natural minor mode.' },
        { name: 'Dorian Mode', slug: 'dorian', description: 'The temporary mode introduced by the F# bass note.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'Master inverted bass chords like Am/G and Am/F#.' },
      ],
    },
  },

  'sultans-of-swing': {
    slug: 'sultans-of-swing',
    songTitle: 'Sultans of Swing',
    artist: 'Dire Straits',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Fingerpicked Triad Outlines and Harmonic Minor Turnarounds',
    emotionalHook: 'Mark Knopfler avoids generic minor pentatonic blues boxes. Over Dm - C - Bb - A7, he outlines individual chord triads with lightning-fast fingerpicked clawhammer fills. When the progression hits A7, he immediately targets the C# note from D Harmonic Minor, snapping the ear back to the tonic Dm.',
    romanProgression: 'i - bVII - bVI - V7',
    chords: ['Dm', 'C', 'Bb', 'A7', 'F'],
    progressionExplanation: [
      'Dm (i): The crisp, punchy minor home.',
      'C (bVII) to Bb (bVI): Stepwise descending major triads borrowed from the natural minor scale.',
      'A7 (V7): The turnaround! By raising the minor 3rd of Am to a major 3rd (C#), Knopfler introduces the leading tone from D Harmonic Minor.',
      'F (bIII): In the chorus, resolving to the relative major (F) provides a bright pop lift.',
    ],
    voiceLeadingInsights: [
      'Knopfler’s fills are not random scale runs; they are arpeggiated triads played on strings 1, 2, and 3.',
      'Over Dm he outlines D-F-A; over C he plays C-E-G; over Bb he outlines Bb-D-F; over A7 he plays the snappy triad A-C#-E-G.',
    ],
    guitarPerspective: 'Stratocaster middle + bridge pickup combination (the out-of-phase "quack" tone), played entirely with bare thumb and index/middle fingers (no plectrum). Bare fingers give a percussive, snappy attack that flatpicks cannot duplicate.',
    songwriterTakeaway: 'Instead of soloing with one scale over the whole progression, track the chord triads. Playing the 3rd and 5th of each chord directly as the chord changes makes your solo sound infinitely more musical and sophisticated.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Natural Minor', slug: 'minor', description: 'The primary scale used across the verse progression.' },
        { name: 'D Harmonic Minor', slug: 'harmonic-minor', description: 'Activated during the A7 dominant turnaround.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode giving Sultans its pub-rock grit.' },
      ],
      chords: [
        { name: 'Dominant 7th Chords', slug: 'seventh', description: 'How the A7 chord creates dominant resolution.' },
      ],
    },
  },

  'wish-you-were-here': {
    slug: 'wish-you-were-here',
    songTitle: 'Wish You Were Here',
    artist: 'Pink Floyd',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Anchored 3rd-Fret Pedal Tones Providing Shimmering Acoustic Continuity',
    emotionalHook: 'Throughout the intro acoustic riff and chorus (Em7 - G - Em7 - G - A7sus4 - Em7 - A7sus4 - C - D), the ring finger and pinky never leave the 3rd fret of the high B and high E strings (notes D and G). These ringing pedal tones act as an acoustic anchor that ties every chord together with crystalline shimmer.',
    romanProgression: 'vi7 - I - vi7 - I - II7sus4 - IV - V',
    chords: ['Em7', 'G', 'A7sus4', 'Cadd9', 'D'],
    progressionExplanation: [
      'G (I): Warm, resonant open acoustic tonic.',
      'Em7 (vi7): Changing only the bass notes (E and B) while keeping the top strings anchored turns a simple G into a rich minor 7th.',
      'A7sus4: Sliding the bass down to A creates an open, unresolved suspense chord.',
      'Cadd9 (IV): Adding the D note to a standard C major chord maintains the 3rd-fret continuity.',
    ],
    voiceLeadingInsights: [
      'Because the high D and high G notes ring continuously, every chord is harmonically enriched with 9ths, 7ths, and suspended 4ths.',
      'David Gilmour’s 12-string guitar plays the foundation, while his 6-string acoustic solo sits on top EQ-filtered like an AM car radio.',
    ],
    guitarPerspective: 'Locking fingers 3 and 4 onto frets 3 of strings 1 and 2 eliminates awkward chord changes and lets beginner and advanced guitarists switch between G, Cadd9, and Em7 effortlessly.',
    songwriterTakeaway: 'When writing acoustic ballads, find two high notes common to your key and leave your fingers glued to them across all your chords. It instantly unifies your progression and creates lush modern extensions.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The home scale containing all diatonic notes for the song.' },
        { name: 'Major Pentatonic', slug: 'major-pentatonic', description: 'The scale used for the acoustic intro solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The pure major scale tonality.' },
      ],
      chords: [
        { name: 'Add Chords', slug: 'add', description: 'Explore Cadd9 and other lush open acoustic additions.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'How A7sus4 creates harmonic ambiguity.' },
      ],
    },
  },

  'wonderwall': {
    slug: 'wonderwall',
    songTitle: 'Wonderwall',
    artist: 'Oasis',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'The High G & D Drone Over a 4-Chord Modal Loop',
    emotionalHook: 'Like Wish You Were Here, Noel Gallagher glues his 3rd and 4th fingers to the 3rd fret of the high B and E strings across Em7 - G - Dsus4 - A7sus4. By playing with a capo on fret 2, the song rings in F# minor while allowing open-string acoustic chime.',
    romanProgression: 'i7 - bIII - bVIIsus4 - IV7sus4',
    chords: ['Em7', 'G', 'Dsus4', 'A7sus4', 'C', 'D'],
    progressionExplanation: [
      'Em7 (relative i): Dark acoustic beginning with open low E string.',
      'G (bIII): Lifting into the relative major.',
      'Dsus4 (bVII): Suspended 4th chord replacing standard D major, keeping the G note ringing.',
      'A7sus4 (IV): Creates an airy, unresolved Dorian lift that never cleanly settles, prompting the progression to loop endlessly.',
    ],
    voiceLeadingInsights: [
      'The static top notes (G and D) create a bagpipe-like drone that blurs the line between Aeolian minor and Dorian modal flavors.',
      'The 16th-note strumming pattern with heavy accents on upstrokes creates an irresistible campfire groove.',
    ],
    guitarPerspective: 'Capo 2nd fret. The open string grips (Em7, G, Dsus4, A7sus4) require moving only fingers 1 and 2 on the low strings, making it accessible while harmonically sophisticated.',
    songwriterTakeaway: 'Drone notes eliminate the need for traditional chord resolutions. An open modal loop with anchored pedal tones can repeat 50 times in a pop song without the audience ever getting bored.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor', slug: 'minor', description: 'The natural minor scale of the open chord shapes.' },
        { name: 'Minor Pentatonic', slug: 'minor-pentatonic', description: 'The melodic vocabulary for the vocal hooks.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The mode suggested by the A7sus4 chord.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'How Dsus4 and A7sus4 maintain the top drone.' },
      ],
    },
  },

  'stairway-to-heaven': {
    slug: 'stairway-to-heaven',
    songTitle: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'The Renaissance Chromatic Bass Descent Blending Aeolian and Harmonic Minor',
    emotionalHook: 'The acoustic intro features a world-famous chromatic descending bassline that moves from A down to F#: Am → Am(maj7)/G# → Am7/G → D/F# → Fmaj7 → G → Am. The G# note is from A Harmonic Minor, while the F# note is from A Dorian, blending three distinct minor colors in just four measures.',
    romanProgression: 'i - i(maj7) - i7 - IV6 - bVI - bVII - i',
    chords: ['Am', 'Am(maj7)/G#', 'Am7/G', 'D/F#', 'Fmaj7', 'G'],
    progressionExplanation: [
      'Am: Pure A minor triad establishing the mystical Renaissance tone.',
      'Am(maj7)/G#: Inner voice moves to G#, creating the bittersweet augmented major 7th tension from Harmonic Minor.',
      'Am7/G: Bass slips to G natural (the natural minor 7th).',
      'D/F#: Bass moves down to F#, transforming the harmony into a Dorian major IV chord.',
      'Fmaj7 to G: Resolves the chromatic tension with a classic bVI → bVII rock cadence before landing back on Am.',
    ],
    voiceLeadingInsights: [
      'The inner voice descends chromatically: A (5th fret) → G# (4th fret) → G natural (3rd fret) → F# (2nd fret) → F natural (1st fret).',
      'Jimmy Page counterbalances this descending bass with an ascending arpeggio on the higher strings, creating contrary motion.',
    ],
    guitarPerspective: 'Fingerpicked on a Harmony Sovereign acoustic guitar. The fingerpicking pattern alternates between bass thumb strokes on strings 5 and 4 and simultaneous index/middle/ring pinches on strings 1, 2, and 3.',
    songwriterTakeaway: 'Use contrary motion: when your bassline steps downward chromatically, have your melody or arpeggios climb upward. This creates an expanding harmonic space that feels epic and timeless.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The foundation for the verse and Jimmy Page’s legendary solo.' },
        { name: 'A Harmonic Minor', slug: 'harmonic-minor', description: 'Provides the G# passing tone in the intro.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The core scale for the climactic electric guitar solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The brooding, mystical atmosphere of the song.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'Master Am/G# and D/F# inverted voicings.' },
      ],
    },
  },

  'crazy-train': {
    slug: 'crazy-train',
    songTitle: 'Crazy Train',
    artist: 'Ozzy Osbourne',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Neo-Classical F# Aeolian Pedal Riffing Contrasted with an A Major Pop-Metal Verse',
    emotionalHook: 'Randy Rhoads introduced European classical music theory to heavy metal. The main riff uses the open low F# note as a pedal point while his fretting hand dances through the full F# Aeolian scale (F# - G# - A - B - C# - D - E). He then surprises the listener by jumping into the relative major (A major: A - E/G# - F#m - D) for a bright, radio-friendly verse.',
    romanProgression: 'Riff: F# Aeolian Pedal | Verse: I - V6 - vi - IV (in A Major)',
    chords: ['F#m', 'A', 'E', 'D'],
    progressionExplanation: [
      'Intro Riff (F# Minor): Pedal point on fret 2 of low E string, alternating with scalar intervals (minor 2nd, minor 3rd, 4th, 5th, and minor 6th).',
      'Verse (A Major): Shifts from dark neo-classical minor to radiant A major pop-rock: A (I) → E/G# (V with 1st inversion bass) → F#m (vi) → D (IV).',
      'Chorus (A Major): A - E - F#m - D continues the classic anthemic four-chord loop before snapping back into the F# minor riff.',
    ],
    voiceLeadingInsights: [
      'Rhoads was an obsessive student of classical counterpoint. Notice the first inversion chord E/G# in the verse: the G# bass smoothly connects the A root down to the F# root of F#m.',
      'His guitar solo showcases blistering classical techniques: minor pentatonic blues licks fused with symmetrical diminished arpeggios and Aeolian runs.',
    ],
    guitarPerspective: 'Precise alternate picking with palm-muting on the low F# pedal notes, releasing the palm mute when playing the melodic upper notes on strings 5 and 4.',
    songwriterTakeaway: 'Contrasting a menacing minor pedal-point riff in the intro with a sparkling major progression in the verse creates massive commercial impact without losing metal credibility.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F# Natural Minor', slug: 'minor', description: 'The Aeolian scale defining the iconic pedal-point intro riff.' },
        { name: 'Minor Pentatonic', slug: 'minor-pentatonic', description: 'The core scale for Randy Rhoads’ lightning fast fills.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing the neoclassical dark tone.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'How E/G# creates smooth stepwise bass motion in the verse.' },
      ],
    },
  },

  'all-along-the-watchtower': {
    slug: 'all-along-the-watchtower',
    songTitle: 'All Along the Watchtower',
    artist: 'Jimi Hendrix',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Cyclical Aeolian Cadence (i - VII - VI - VII) Driving Endless Forward Momentum',
    emotionalHook: 'The entire song is built on a simple 3-chord repeating cycle: C#m - B - A - B (or Cm - Bb - Ab - Bb in Eb tuning). Because the progression steps down to A and then steps right back up to B before looping to C#m, it has no traditional dominant resolution. It feels like an infinite loop of impending doom and relentless propulsion.',
    romanProgression: 'i - VII - VI - VII',
    chords: ['C#m', 'B', 'A'],
    progressionExplanation: [
      'C#m (i): The tense minor home chord.',
      'B (VII): Subtonic chord stepping down smoothly.',
      'A (VI): Submediant chord providing the lowest pitch point in the cycle.',
      'B (VII): Steps right back up, acting as a stepping stone back to C#m.',
    ],
    voiceLeadingInsights: [
      'Hendrix uses chord inversions and aggressive strumming rhythm to keep the simple 3-chord cycle dynamically evolving across the entire track.',
      'His four distinct solo sections transition from rhythm guitar chord-melody to slide guitar, wah-wah, and octave feedback climaxes.',
    ],
    guitarPerspective: 'Tuned down a half-step. Hendrix uses thumb-over barre chords on the A and B chords to let open high strings ring, while hammering on major 3rds and 6ths.',
    songwriterTakeaway: 'A progression that never formally resolves creates perpetual motion. The i - VII - VI - VII loop keeps listeners locked into a hypnotic trance where the lyrics and lead guitar can take center stage.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C# Natural Minor', slug: 'minor', description: 'The Aeolian scale governing the entire song structure.' },
        { name: 'Blues Scale', slug: 'blues', description: 'Hendrix’s signature blues scale bends and microtones.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing the brooding intensity.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'How minor tonic chords anchor cyclical progressions.' },
      ],
      progressions: [
        { name: 'i - VII - VI Progression', slug: 'i-bvii-iv', description: 'The cyclical minor cadence powering Watchtower and Stairway.' },
      ],
    },
  },

  'who-made-who': {
    slug: 'who-made-who',
    songTitle: 'Who Made Who',
    artist: 'AC/DC',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The 4-on-the-Floor Funk-Rock Groove Fused with a D Mixolydian ♭VII Cadence and ♭III Chorus Borrow',
    emotionalHook: 'Unlike typical AC/DC 12-bar shuffles, "Who Made Who" locks into a 1980s disco-influenced 4-on-the-floor kick pulse with a D Mixolydian cadence (D5 - C5 - G/B - D5). The whole-step flat-7 (C5) gives the groove an effortless bounce, while the chorus introduces a borrowed flat-3rd (F5) from D minor, slamming the track from danceable groove to aggressive hard rock.',
    romanProgression: 'Verse: I - ♭VII - IV/6 - I | Chorus: I - ♭III - IV - I',
    chords: ['D5', 'C5', 'G5/B', 'F5', 'G5'],
    progressionExplanation: [
      'D5 (I): Unwavering tonic pedal that anchors both Angus Young\'s single-note theme and Malcolm\'s downstroke stabs.',
      'C5 (♭VII): The defining Mixolydian degree. Flattening the 7th removes classical resolution tension and delivers pure swagger.',
      'G5/B (IV/6): First-inversion subdominant chord providing a smooth scalar bass descent: D -> C -> B -> D.',
      'F5 (♭III): Power chord borrowed from D Aeolian/Blues in the chorus, creating an explosive burst of grit.',
      'G5 (IV): Subdominant lift resolving forcefully back to the D5 tonic home base.',
    ],
    voiceLeadingInsights: [
      'Notice the smooth descending bass movement in the verse: D (open string) → C (3rd fret A string) → B (2nd fret A string in G/B) → D (resolution).',
      'Angus Young’s intro theme counterbalances the low-end pulse with syncopated open-string pedal notes and high double-stops around the D major triad.',
      'In the solo, Angus freely blends the major 3rd (F#) from D Mixolydian with the minor 3rd (F natural) and diminished 5th (G#) from the D blues scale for iconic vocalized biting bends.',
    ],
    guitarPerspective: 'Malcolm Young’s Gretsch Firebird uses zero clipping pedals—just natural Marshall tube compression. Staccato cutoffs on beats 2 and 4 create the breathing room that gives the rhythm section its massive, punchy pocket.',
    songwriterTakeaway: 'You can write a rock song that grooves like dance music by pairing a straight four-on-the-floor beat with a Mixolydian I - ♭VII - IV loop, then escalating energy in the chorus with a borrowed ♭III minor-pentatonic power chord.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Mixolydian Scale', slug: 'mixolydian', description: 'The primary scale governing the verse progression and flat-7th chords.' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for Angus Young\'s aggressive lead fills and soloing.' },
        { name: 'Blues Scale', slug: 'blues', description: 'The blue note (G#) that injects grit into Angus\'s high-register bends.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The definitive hard rock mode used in Who Made Who.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Master the root-fifth voicings for D5, C5, G5, and F5.' },
        { name: 'Slash Chords', slug: 'slash', description: 'How first-inversion G/B connects the bassline between C and D.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The signature rock cadence powering Who Made Who.' },
      ],
    },
  },
};

/**
 * Generate structured harmonic analysis for any song in the catalog
 * based on its metadata and musical analysis.
 */
function generateStructuredHarmonicBreakdown(songData: SongData, slug: string): HarmonicSecret {
  const keyAndScale = songData.musicalAnalysis?.keyAndScale;
  const chordProg = songData.musicalAnalysis?.chordProgressions;
  const primaryKey = keyAndScale?.primaryKey || songData.songInfo?.key || 'Unknown Key';
  const modalCharacter = keyAndScale?.modalCharacter || 'Diatonic Harmony';
  const mainProg = chordProg?.mainProgression;
  const chords = mainProg?.chords || ['Root Chord'];
  const roman = mainProg?.progression || 'i - IV - V';
  const description = mainProg?.description || 'Classic guitar progression cycling through primary tonal centers.';
  const harmonicFunction = chordProg?.harmonicFunction || [];

  const isMinor = primaryKey.toLowerCase().includes('minor') || modalCharacter.toLowerCase().includes('aeolian') || modalCharacter.toLowerCase().includes('dorian');
  const category: HarmonicCategory = isMinor ? 'mixolydian-dorian' : 'modal-mixture';

  const progressionExplanation = harmonicFunction.length > 0
    ? harmonicFunction.slice(0, 5)
    : chords.map((chord, i) => `${chord}: Harmonic pillar ${i + 1} supporting the ${primaryKey} tonal center.`);

  const scalesUsed = keyAndScale?.scalesUsed || [];
  const relatedScales = scalesUsed.map(s => {
    const sName = s.scale.toLowerCase();
    let sSlug = 'minor-pentatonic';
    if (sName.includes('harmonic')) sSlug = 'harmonic-minor';
    else if (sName.includes('dorian')) sSlug = 'dorian';
    else if (sName.includes('mixolydian')) sSlug = 'mixolydian';
    else if (sName.includes('major')) sSlug = 'major';
    else if (sName.includes('minor')) sSlug = 'minor';
    else if (sName.includes('blues')) sSlug = 'blues';
    return { name: s.scale, slug: sSlug, description: s.application || `Primary scale used in ${primaryKey}.` };
  });

  return {
    slug,
    songTitle: songData.songInfo?.title || slug,
    artist: songData.songInfo?.artist || 'Artist',
    category,
    categoryLabel: HARMONIC_CATEGORIES[category].label,
    coreSecret: `The Harmonic Interplay of ${primaryKey} with ${modalCharacter}`,
    emotionalHook: `The musical power of "${songData.songInfo?.title}" stems from the deliberate harmonic tension between ${primaryKey} and the ${roman} progression. ${description}`,
    romanProgression: roman,
    chords,
    progressionExplanation,
    voiceLeadingInsights: [
      `The progression moves through ${chords.join(' → ')}, creating smooth root movement across the guitar fretboard.`,
      `Tuning (${songData.songInfo?.tuning || 'Standard'}) allows open-string resonance and dynamic chord extensions.`,
      `The tempo of ${songData.songInfo?.tempo || 'moderate tempo'} gives each chord voicing time to breathe and establish its tonal identity.`,
    ],
    guitarPerspective: `Played in ${songData.songInfo?.tuning || 'Standard Tuning'} with classic fretboard fingerings tailored to ${songData.songInfo?.genre || 'rock'} guitar playing. Focus on clean transitions between ${chords.slice(0, 3).join(', ')}.`,
    songwriterTakeaway: `Study the ${roman} progression in ${primaryKey}. Notice how each chord change either builds or resolves tension without overcomplicating the underlying harmony.`,
    isCurated: false,
    relatedTheory: {
      scales: relatedScales.length > 0 ? relatedScales : [{ name: `${primaryKey} Scale`, slug: isMinor ? 'minor' : 'major', description: 'Core scale.' }],
      modes: [{ name: modalCharacter, slug: isMinor ? 'aeolian' : 'ionian', description: 'The modal foundation of the key.' }],
      chords: [{ name: isMinor ? 'Minor Chords' : 'Major Chords', slug: isMinor ? 'minor' : 'major', description: 'Primary chord shapes used.' }],
    },
  };
}

/**
 * Get the harmonic breakdown for any song.
 * Returns curated deep dive if available, or automatically generates one from songData.
 */
export function getWhySongWorks(slug: string): HarmonicSecret | null {
  if (CURATED_SECRETS[slug]) {
    return CURATED_SECRETS[slug];
  }

  const songData = getSongData(slug);
  if (!songData) return null;

  return generateStructuredHarmonicBreakdown(songData, slug);
}

/**
 * Returns all songs that have curated deep dives.
 */
export function getAllCuratedHarmonicBreakdowns(): HarmonicSecret[] {
  return Object.values(CURATED_SECRETS);
}

/**
 * Returns curated songs grouped by harmonic category.
 */
export function getCuratedSongsByCategory(): Record<HarmonicCategory, HarmonicSecret[]> {
  const grouped: Record<HarmonicCategory, HarmonicSecret[]> = {
    'modal-mixture': [],
    'mixolydian-dorian': [],
    'descending-bassline': [],
    'key-modulation': [],
    'pedal-tone-drone': [],
    'secondary-dominants': [],
    'blues-rock-hybrid': [],
  };

  for (const secret of Object.values(CURATED_SECRETS)) {
    if (grouped[secret.category]) {
      grouped[secret.category].push(secret);
    }
  }

  return grouped;
}
