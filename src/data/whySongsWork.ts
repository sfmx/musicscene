import { getSongData, SongData } from '../lib/songData';
import { getAllSongs } from '../lib/songList';
export { hasCuratedHarmonicBreakdown, CURATED_HARMONIC_SLUGS } from './curatedHarmonicSlugs';
export * from './harmonicCategories';
import { HarmonicCategory, HarmonicSecret, HARMONIC_CATEGORIES } from './harmonicCategories';

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
    chords: ['C#m', 'B', 'A', 'B'],
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
        { name: 'Power Chords', slug: 'power', description: 'Master the root-fifth voicings for D5, C5, G5, and F5.' },
        { name: 'Slash Chords', slug: 'slash', description: 'How first-inversion G/B connects the bassline between C and D.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The signature rock cadence powering Who Made Who.' },
      ],
    },
  },
  'another-brick-in-the-wall': {
    slug: 'another-brick-in-the-wall',
    songTitle: 'Another Brick in the Wall (Part 2)',
    artist: 'Pink Floyd',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The D Dorian Funk-Rock Groove Powered by a Major IV Chord (G)',
    emotionalHook: 'Standard natural minor (Aeolian) would require a minor iv chord (Gm), producing a bleak, gloomy tone. Pink Floyd instead plays G major against the D minor foundation. That single major IV chord introduces the bright B natural note—the signature characteristic pitch of the Dorian mode—giving the rhythm guitar its strutting, disco-funk swagger.',
    romanProgression: 'i - IV - i',
    chords: ['Dm', 'G', 'C', 'F'],
    progressionExplanation: [
      'Dm (i): The hypnotic minor tonic foundation established by David Gilmour\'s syncopated 16th-note strumming.',
      'G (IV): Major subdominant borrowed from D Dorian with the natural 6th degree (B natural) lifting the groove.',
      'C (♭VII) to Dm (i): Subtonic cadence in the chorus providing anthemic rock resolution.',
      'F (♭III) to C (♭VII): Brief relative major lift supporting Roger Waters\' defiant school chant.',
    ],
    voiceLeadingInsights: [
      'The B natural in the G major chord contrasts directly with the Bb in standard D natural minor, creating an unforgettable harmonic sparkle.',
      'Gilmour\'s stratocaster rhythm tracks use tight 16th-note strumming with left-hand muting to keep the harmonic spacing crisp.',
      'The iconic solo glides between D Dorian and D Minor Pentatonic, targeting the 9th (E) and 6th (B) for soulful phrasing.',
    ],
    guitarPerspective: 'Rhythm guitar is clean through a compression pedal and Hiwatt amp. Focus on the 10th-fret Dm bar chord and 10th-fret G barre chord, letting the high strings cut through on beats 2 and 4.',
    songwriterTakeaway: 'To prevent a minor key song from sounding depressing or sluggish, substitute your minor iv chord with a major IV. It immediately injects sophistication, funk, and modal drive.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Dorian Mode', slug: 'dorian', description: 'The fundamental scale behind the major IV chord and funk feel.' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale driving David Gilmour\'s legendary guitar solo.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The natural 6th minor mode that defines the track.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Mastering the Dm barre and open voicings.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'Adding dominant 7th color to the Dorian IV chord.' },
      ],
      progressions: [
        { name: 'i - IV Progression', slug: 'i-iv', description: 'The definitive Dorian cadence used in rock and funk.' },
      ],
    },
  },

  'back-in-black': {
    slug: 'back-in-black',
    songTitle: 'Back in Black',
    artist: 'AC/DC',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Definitive Arena-Rock Mixolydian Power Cadence (I - ♭VII - IV)',
    emotionalHook: 'Rather than using a classical leading-tone V chord (B major), AC/DC employs the flat-seventh D chord followed by A major. Moving from D (♭VII) to A (IV) and slamming home to E creates the classic Mixolydian double-plagal cadence—the raw harmonic engine behind hard rock\'s biggest anthems.',
    romanProgression: 'I - ♭VII - IV - I',
    chords: ['E5', 'D5', 'A5', 'E5'],
    progressionExplanation: [
      'E5 (I): Heavy low-end open power chord anchoring the key.',
      'D5 (♭VII): Flat-seventh chord subverting traditional dominant harmony for raw rock swagger.',
      'A5 (IV): Major subdominant acting as the pivotal resolution link back to the tonic.',
      'Pentatonic Blues Fill: Angus Young\'s chromatic pull-off fill puncturing the silence between chord blasts.',
    ],
    voiceLeadingInsights: [
      'The root movement descends by whole step (E → D) then jumps up a fourth to A before falling by fourth to E.',
      'Malcolm Young\'s open position voicings maximize string vibration and sympathetic resonance.',
      'The silent pauses between chord strikes build physical anticipation before the riff hits.',
    ],
    guitarPerspective: 'Play the chords with heavy downstrokes and zero preamp fizz. The magic is in the volume of the power amp pushing air, allowing the notes to decay naturally into the rests.',
    songwriterTakeaway: 'Replace your V chord with ♭VII - IV. It instantly strips away academic stiffness and gives your rock progression an unstoppable, street-level swagger.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Mixolydian Scale', slug: 'mixolydian', description: 'The scale containing the flat-7th degree (D) used in the progression.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for Angus Young\'s biting fill licks.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The primary mode of classic hard rock.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Essential root-fifth shapes for rock rhythm guitar.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The quintessential rock cadence.' },
      ],
    },
  },

  'blackbird': {
    slug: 'blackbird',
    songTitle: 'Blackbird',
    artist: 'The Beatles',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'Bach Counterpoint with Ascending Chromatic Bass and 10th Intervals',
    emotionalHook: 'Paul McCartney adapted J.S. Bach\'s Bourrée in E Minor to create an acoustic fingerstyle masterpiece. By plucking compound thirds (10th intervals) on the outer strings, the guitar creates a two-part vocal counterpoint. The bass climbs chromatically: G → A → B → C → C# → D, infusing a simple folk song with classical sophistication.',
    romanProgression: 'I - ii7 - I/3 - IV - #iv° - V',
    chords: ['G', 'Am7', 'G/B', 'C', 'C#dim', 'D'],
    progressionExplanation: [
      'G (I): Open root and 10th interval establishing the acoustic foundation.',
      'Am7 (ii7) to G/B (I/3): Stepwise ascending bassline connecting the tonic to its first inversion.',
      'C (IV) to C#dim (#iv°): Dramatic chromatic tension step lifting the bass into the dominant.',
      'D (V): Strong dominant resolution before resolving back down to the root.',
    ],
    voiceLeadingInsights: [
      'The outer voices move in parallel and contrary motion simultaneously while the open G string drones continuously.',
      'The C#dim chord introduces a G natural against C#, creating a rich tritone tension that pulls directly to the D bass note.',
      'The 10th interval spacing gives each harmonic change air and lightness without cluttering the mid frequencies.',
    ],
    guitarPerspective: 'Use hybrid fingerpicking or index finger brushing with the thumb anchoring the bass notes. Keep the open G string ringing as a rhythmic acoustic pedal point throughout.',
    songwriterTakeaway: 'Use 10th intervals (root + 3rd an octave higher) instead of full 6-string bar chords. It gives your acoustic songwriting space, clarity, and classical elegance.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic scale establishing the primary chord relationships.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The major modal foundation behind the acoustic counterpoint.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'How first-inversion G/B connects the bassline between Am7 and C.' },
        { name: 'Diminished Chords', slug: 'diminished', description: 'The C#dim passing chord leading into the dominant D.' },
      ],
      progressions: [
        { name: 'Circle of Fifths', slug: 'circle-of-fifths', description: 'Harmonic motion governing the turnaround.' },
      ],
    },
  },

  'purple-haze': {
    slug: 'purple-haze',
    songTitle: 'Purple Haze',
    artist: 'Jimi Hendrix',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'The Dominant 7th Sharp 9th (Hendrix Chord) with Tritone Tension',
    emotionalHook: 'The song opens with an ominous octave tritone leap between Bb and E, establishing hypnotic dread. Hendrix then unleashes the E7#9 chord—a major triad overlaid with an augmented 9th (G natural against G#). This simultaneous occurrence of major and minor thirds creates the quintessential psychedelic blues-rock clash.',
    romanProgression: 'I7#9 - ♭VII - IV',
    chords: ['E7#9', 'G', 'A'],
    progressionExplanation: [
      'Intro Tritone (E to Bb): The "diabolus in musica" interval immediately disorienting the listener.',
      'E7#9 (I7#9): The Hendrix chord blending major third stability with minor third blues grit.',
      'G (♭VII) to A (IV): Parallel rock chords sliding into each other with thumb-over-the-neck grip.',
      'Octavia Solo: High-register fuzz and octave-doubled screaming harmonics.',
    ],
    voiceLeadingInsights: [
      'The G natural in the E7#9 voicing clashes dissonantly with the G# in the lower register, generating magnetic acoustic friction.',
      'Hendrix slides the entire chord grip down or up a half-step for dramatic textural accents.',
      'The groove is anchored by the open Low E string thumping beneath the syncopated chord stabs.',
    ],
    guitarPerspective: 'Fret the E7#9 with: open low E, middle finger on fret 7 of A, index on fret 6 of D, ring on fret 7 of G, and pinky on fret 8 of B. Mute the high E string with the side of the pinky.',
    songwriterTakeaway: 'Add an augmented 9th (#9) to your dominant 7th chords. It bridges the gap between major chord power and minor pentatonic soloing.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Blues Scale', slug: 'blues', description: 'The source of the blue note (Bb) and sharp 9th (G natural).' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale driving Jimi\'s explosive solo runs.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The dominant foundation of the 7th chords.' },
      ],
      chords: [
        { name: 'Altered Dominant Chords', slug: 'altered-dominant', description: 'Mastering the 7#9 Hendrix chord.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The rock progression underlying the groove.' },
      ],
    },
  },

  'little-wing': {
    slug: 'little-wing',
    songTitle: 'Little Wing',
    artist: 'Jimi Hendrix',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Hendrix Thumb-Over Chord-Melody with Parallel Major-Minor Interplay',
    emotionalHook: 'Jimi weaves between the minor tonic (Em) and relative major (G) with fluid thumb-over voicings, injecting a borrowed minor iv (Am7) and passing dominant Bm7 before resolving with a blues-infused C - D turnaround. Every chord change is embellished with cascading pentatonic double-stops and hammer-ons.',
    romanProgression: 'i - III - iv - i - v - IV - ♭VII - IV - V',
    chords: ['Em', 'G', 'Am7', 'Em', 'Bm7', 'C', 'G', 'F', 'C', 'D'],
    progressionExplanation: [
      'Em (i) to G (III): Gentle modulation between the minor root and warm relative major.',
      'Am7 (iv) to Em (i): Minor subdominant reaffirming the melancholy atmosphere.',
      'Bm7 (v) to C (VI): Stepwise climb building tension toward the outer chords.',
      'G - F - C - D: Stunning cadence featuring a borrowed F chord (♭VII) before resolving through IV to V.',
    ],
    voiceLeadingInsights: [
      'Hendrix uses the thumb to fret bass notes, freeing his fingers to execute fluid fills on the high strings.',
      'Suspensions and 9th additions are constantly resolving within each measure (e.g. Asus4 to A, Gsus2 to G).',
      'The F major chord introduces an unexpected chromatic dip that refreshes the ear before the D dominant turnaround.',
    ],
    guitarPerspective: 'Tune down a half-step (Eb Standard). Use a clean Stratocaster on the neck/middle pickup through a rotary speaker or subtle Univibe to recreate the floating, airy texture.',
    songwriterTakeaway: 'Don\'t treat rhythm and lead guitar as separate entities. Embed melodic fills and double-stops directly inside your chord voicings to create an organic, singing arrangement.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for melodic chord embellishments.' },
        { name: 'G Major Scale', slug: 'major', description: 'The scale governing the relative major sections.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing the emotional foundation.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'The sus2 and sus4 embellishments inside Hendrix voicings.' },
        { name: 'Slash Chords', slug: 'slash', description: 'Thumb-over bass voicings connecting chord changes.' },
      ],
      progressions: [
        { name: 'i - v - IV - V', slug: 'i-v', description: 'The harmonic structure underlying the verse.' },
      ],
    },
  },

  'smells-like-teen-spirit': {
    slug: 'smells-like-teen-spirit',
    songTitle: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Parallel Power Chord Shifts Subverting Classical Diatonic Function',
    emotionalHook: 'Nirvana uses a four-chord parallel movement: F - Bb - Ab - Db. In classical music theory, jumping between F minor and parallel major root movements creates jarring chromatic modal interchange. On guitar, the root-5th power chord shapes create a massive wall of sound that feels simultaneously catchy, punk, and abrasive.',
    romanProgression: 'i - IV - ♭III - ♭VI',
    chords: ['F5', 'Bb5', 'Ab5', 'Db5'],
    progressionExplanation: [
      'F5 (i): The low-end tonic foundation delivering the intro punch.',
      'Bb5 (IV): Major subdominant borrowed from F Dorian mode.',
      'Ab5 (♭III): Chromatic leap to the mediant borrowed from natural minor.',
      'Db5 (♭VI): Submediant power chord providing maximum harmonic heft before looping.',
    ],
    voiceLeadingInsights: [
      'All four chords use identical two-finger root-fifth grips sliding across the neck, abandoning traditional voice leading for raw kinetic impact.',
      'The syncopated percussive muted strums between chord changes act as an additional rhythm instrument.',
      'Kurt Cobain\'s clean verse guitar uses a chorus pedal to thin out the sound before the roaring fuzz chorus hits.',
    ],
    guitarPerspective: 'Alternate between clean chorus on the verses and full Boss DS-1 distortion on the chorus. Hit the 16th-note string mutes with aggressive right-hand wrist rotation.',
    songwriterTakeaway: 'You don\'t need complex jazz harmony to write a global hit. A repeating four-chord parallel shift with extreme dynamic contrast (quiet verse / explosive chorus) can reshape music history.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for Kurt Cobain\'s vocal-melody solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode source for the ♭III and ♭VI chords.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'The fundamental root-5th shapes that drive grunge guitar.' },
      ],
      progressions: [
        { name: 'i - ♭III - ♭VI - iv', slug: 'i-biii-bvii-iv', description: 'The modal rock progression family.' },
      ],
    },
  },

  'highway-to-hell': {
    slug: 'highway-to-hell',
    songTitle: 'Highway to Hell',
    artist: 'AC/DC',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Syncopated First-Inversion D/F# Passing Bassline',
    emotionalHook: 'The unstoppable swagger of Highway to Hell comes from Malcolm Young\'s rhythmic mastery. Instead of staying on standard root chords, the verse bounces from A to a first-inversion D/F# (with the F# 3rd in the bass) and G5, creating an elastic, bouncy syncopation on the off-beats that drives the entire groove.',
    romanProgression: 'I - V/3 - ♭VII - I',
    chords: ['A5', 'D/F#', 'G5', 'A5'],
    progressionExplanation: [
      'A5 (I): Clean, ringing open A power chord establishing the key center.',
      'D/F# (V/3): First-inversion D major with thumb fretting F# on low E string, injecting melodic bass bounce.',
      'G5 (♭VII): Flat-seventh chord delivering the signature Mixolydian rock crunch.',
      'D/F# to G5: Rapid back-and-forth syncopated stabs pushing against the drum beat.',
    ],
    voiceLeadingInsights: [
      'The bassline moves A → F# → G, avoiding root-note monotony and giving the guitar riff a danceable rhythmic pulse.',
      'Malcolm Young uses open strings (open G and open D) inside the D/F# voicing to maximize dynamic projection.',
      'The chord stabs land precisely on the "and" of beats 3 and 4, creating infectious rhythmic syncopation.',
    ],
    guitarPerspective: 'Wrap the left thumb over the top of the neck to grab the 2nd fret of the Low E string for D/F#. Keep your right hand relaxed to maintain punchy, uncompressed pick attack.',
    songwriterTakeaway: 'When moving between I and ♭VII, use a first-inversion slash chord (like D/F#). It transforms a static power-chord progression into an elastic, swaggering groove.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Mixolydian Scale', slug: 'mixolydian', description: 'The scale containing the G natural flat-7th chord.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale behind Angus Young\'s searing blues soloing.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The quintessential hard-rock mode.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'Mastering the critical D/F# thumb-over voicing.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The rock cadence family.' },
      ],
    },
  },

  'thunderstruck': {
    slug: 'thunderstruck',
    songTitle: 'Thunderstruck',
    artist: 'AC/DC',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'The High-Velocity Open B String Pedal Tone Drone',
    emotionalHook: 'The iconic intro is a masterclass in pedal-point mechanics: Angus frets moving notes along the B string while continuously pulling off to the ringing open B string. Because the open B drone never stops ringing, it anchors the modal journey from B Mixolydian to B Dorian with electric tension before the drums even enter.',
    romanProgression: 'I - ♭VII - IV (implied over drone)',
    chords: ['B5', 'A5', 'E5'],
    progressionExplanation: [
      'Open B Drone: The stationary harmonic anchor vibrating through every single eighth note.',
      'Mixolydian Melody (Frets 4, 7, 5, 8, etc.): Ascending and descending scale notes clashing against the drone.',
      'Dorian Shift (Fret 10 / A natural): Modal interchange adding blues aggression to the second half of the riff.',
      'B5 - A5 - E5: Explosive arena power chord entry confirming the implied Mixolydian harmony.',
    ],
    voiceLeadingInsights: [
      'The open B string acts as an acoustic pedal point, creating dynamic intervals (unisons, 2nds, 3rds, 4ths, 5ths) with every fretted note.',
      'Because every fretted note alternates with an open string, the harmonic rhythm feels twice as fast as the actual chord changes.',
      'When the full band slams in, the open drone is absorbed into massive low-end power chords.',
    ],
    guitarPerspective: 'Play the riff on a single string (the B string) using alternate picking or pure hammer-ons/pull-offs. Keep your fretting hand fingers curled high to prevent accidentally muting the open B string.',
    songwriterTakeaway: 'Anchor one open string as a continuous drone and write your lead melody on that same string. It creates mesmerizing, high-energy momentum with zero backing instruments.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Mixolydian Scale', slug: 'mixolydian', description: 'The scale defining the bright first half of the intro riff.' },
        { name: 'B Dorian Mode', slug: 'dorian', description: 'The mode providing the bluesy second half of the intro.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The modal engine behind the anthemic chorus.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'The massive B5, A5, and E5 chorus chords.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The primary cadence of the chorus.' },
      ],
    },
  },

  'layla': {
    slug: 'layla',
    songTitle: 'Layla',
    artist: 'Derek and the Dominos (Eric Clapton & Duane Allman)',
    category: 'key-modulation',
    categoryLabel: 'Emotional Key Modulations',
    coreSecret: 'The Dual-Key Modulation from D Minor Intro Riff to C Major Verse',
    emotionalHook: 'The fiery opening riff screams in D minor pentatonic, but when the verse begins, the key modulates smoothly down a whole step to C major (C - E7 - Am - F - G). This sudden shift from aggressive minor blues to romantic major harmony reflects the desperate yearning and psychological conflict at the heart of the song.',
    romanProgression: 'Intro: i - ♭VII - ♭VI | Verse: I - III7 - vi - IV - V',
    chords: ['Dm', 'Bb', 'C', 'E7', 'Am', 'F', 'G'],
    progressionExplanation: [
      'Dm (i) to Bb (♭VI) to C (♭VII): Aggressive minor riff cadence in D minor.',
      'C (I): Sudden whole-step modulation down to C major for the lyrical verse.',
      'E7 (III7): Secondary dominant (V/vi) pulling urgently into the relative minor Am chord.',
      'Am (vi) to F (IV) to G (V): Classic 50s pop progression grounding the emotional melody.',
    ],
    voiceLeadingInsights: [
      'The G# in the E7 chord acts as a chromatic leading tone resolving upward into the A of the Am chord.',
      'Duane Allman\'s soaring slide guitar harmony sits a minor third above Clapton\'s riff, creating twin-guitar counterpoint.',
      'The C major verse uses open, warm chord voicings that provide breathing room before returning to the explosive D minor riff.',
    ],
    guitarPerspective: 'Rhythm in the verses benefits from subtle thumb-over bass notes. For the lead riff, use a bridge pickup with natural overdrive and focus on precise intonation on the minor-third bends.',
    songwriterTakeaway: 'Modulate your chorus or verse by a whole step (e.g. Dm to C). The tonal shift creates an immediate emotional perspective change that elevates the story.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale powering the iconic opening dual-guitar riff.' },
        { name: 'C Major Scale', slug: 'major', description: 'The diatonic scale governing the verse progression.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode of the intro and chorus.' },
      ],
      chords: [
        { name: 'Secondary Dominants', slug: 'secondary-dominants', description: 'The E7 chord acting as V/vi leading to Am.' },
      ],
      progressions: [
        { name: 'I - vi - IV - V', slug: 'i-vi-iv-v', description: 'The foundation for the romantic verse section.' },
      ],
    },
  },

  'fade-to-black': {
    slug: 'fade-to-black',
    songTitle: 'Fade to Black',
    artist: 'Metallica',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'Descending Natural Minor Arpeggios with Classical Phrygian Tension',
    emotionalHook: 'Kirk Hammett and James Hetfield craft an atmosphere of profound desolation through acoustic fingerpicking that descends step-by-step: Bm → A → G → Em. The acoustic arpeggios emphasize the open strings, allowing the trailing resonance of each chord tone to bleed into the next.',
    romanProgression: 'i - ♭VII - ♭VI - iv',
    chords: ['Bm', 'A', 'G', 'Em'],
    progressionExplanation: [
      'Bm (i): Dark tonic foundation establishing the minor key center.',
      'A (♭VII): Stepwise descent softening the minor gloom into reflective melancholy.',
      'G (♭VI): Emotional submediant chord delivering maximum emotional vulnerability.',
      'Em (iv): Minor subdominant resolving smoothly back to the Bm tonic.',
    ],
    voiceLeadingInsights: [
      'The bass notes step down cleanly: B → A → G → E, creating an unbroken downhill momentum.',
      'Hammett\'s intro solo uses B Aeolian (Natural Minor) with expressive pre-bends and vibrato targeting the 9th degree (C#).',
      'The electric heavy outro shifts the tempo and transforms the acoustic ballad into a galloping thrash metal duel.',
    ],
    guitarPerspective: 'Play the intro with a nylon or warm steel-string acoustic guitar. Let each note ring out fully without choking the sustain to create the cathedral-like reverb effect.',
    songwriterTakeaway: 'The i - ♭VII - ♭VI - iv progression is one of the most powerful emotional devices in rock. Arpeggiate the chords rather than strumming them to double their emotional resonance.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Natural Minor', slug: 'minor', description: 'The scale providing the notes for the acoustic arpeggios.' },
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for Kirk Hammett\'s expressive intro solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The melancholy mode defining the ballad section.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Mastering the Bm barre and open Em voicings.' },
      ],
      progressions: [
        { name: 'i - ♭VII - ♭VI - iv', slug: 'i-bvii-iv', description: 'The descending natural minor cadence.' },
      ],
    },
  },

  'master-of-puppets': {
    slug: 'master-of-puppets',
    songTitle: 'Master of Puppets',
    artist: 'Metallica',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'Downpicked Chromaticism with Diminished Tritone Enclosure',
    emotionalHook: 'The rhythm riff is a masterclass in chromatic velocity: high-speed downpicked open low E chugs punctuate a descending chromatic walk (frets 7, 6, 5 on the A string) paired with a diminished fifth (tritone) arpeggio. This chromatic enclosure creates unrelenting tension that avoids major/minor sweetness completely.',
    romanProgression: 'i - ♭V - ♭II (chromatic riff tonality)',
    chords: ['E5', 'D5', 'C#5', 'C5', 'B5'],
    progressionExplanation: [
      'Open Low E Chug: The percussive rhythmic motor establishing the thrash tempo.',
      'Chromatic Descent (7 - 6 - 5): Linear chromatic tension avoiding diatonic sweetness.',
      'Diminished Arpeggios (Bdim): Tritone tension (B to F) injecting dark angularity into the bridge.',
      'Melodic Interlude: Dual guitar harmony in E Aeolian providing breathtaking counterpoint.',
    ],
    voiceLeadingInsights: [
      'The riff moves in half-steps: D → C# → C → B, providing maximum harmonic dissonance.',
      'James Hetfield\'s exclusive use of downpicking creates uniform percussive transients across all strings.',
      'The unexpected meter changes (4/4, 5/8, 2/4) keep the listener off-balance and amplify the mechanical urgency.',
    ],
    guitarPerspective: 'Practice the main riff strictly with downpicking at 212 BPM. Keep the palm-mute tight on the open low E string, lifting off cleanly only for the accented chromatic notes.',
    songwriterTakeaway: 'When writing heavy rock or metal riffs, use chromatic descending notes instead of standard scale steps. It replaces predictable diatonic harmony with raw, cinematic menace.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Blues Scale', slug: 'blues', description: 'The chromatic blues scale providing the tritone flat-5th.' },
        { name: 'E Natural Minor', slug: 'minor', description: 'The scale governing the harmonious clean interlude.' },
      ],
      modes: [
        { name: 'Locrian Mode', slug: 'locrian', description: 'The diminished tritone mode echoed in the chromatic bridge.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'The root-5th shapes powering the chorus rhythm.' },
        { name: 'Diminished Chords', slug: 'diminished', description: 'The diminished arpeggios used in the bridge.' },
      ],
      progressions: [
        { name: 'Minor Blues', slug: 'minor-blues', description: 'The underlying blues-rock structure.' },
      ],
    },
  },

  'sweet-home-alabama': {
    slug: 'sweet-home-alabama',
    songTitle: 'Sweet Home Alabama',
    artist: 'Lynyrd Skynyrd',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Great Harmonic Debate: D Mixolydian vs. G Major Tonality',
    emotionalHook: 'Music theorists have debated for decades whether Sweet Home Alabama is in D Mixolydian (V - IV - I) or G Major (I - V - IV). Because the chord progression loops D - C - G endlessly and never lands on a traditional dominant leading-tone resolution, the ear is suspended in an eternal, feel-good harmonic loop.',
    romanProgression: 'V - IV - I (or I - ♭VII - IV)',
    chords: ['D', 'C', 'G'],
    progressionExplanation: [
      'D: The opening chord with iconic arpeggiated bass notes (D - D - F#).',
      'C: The subtonic chord providing warm southern rock swagger.',
      'G: The major chord with descending pentatonic fill acting as the turnaround.',
      'Three-Chord Loop: Endlessly cycling with zero traditional dominant tension.',
    ],
    voiceLeadingInsights: [
      'Ed King arpeggiates the root and fifth of each chord before strumming the top triad, creating a self-accompanying counterpoint.',
      'The vocal melody emphasizes D and F#, making D feel like home, while the chord progression resolves most strongly onto G.',
      'This dual-tonality prevents the 3-chord loop from ever sounding repetitive.',
    ],
    guitarPerspective: 'Keep the ring finger anchored on the 3rd fret of the B string across all three chords. It creates a subtle pedal-point anchor connecting D, Cadd9, and G into a single acoustic texture.',
    songwriterTakeaway: 'Looping a 3-chord progression without resolving to a traditional leading tone creates an open-ended feel that listeners can groove to indefinitely.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Mixolydian Scale', slug: 'mixolydian', description: 'The modal scale governing the melody and D-to-C progression.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'The scale used for the signature turnaround fills.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The classic southern rock modal foundation.' },
      ],
      chords: [
        { name: 'Added Tone Chords', slug: 'add', description: 'Using Cadd9 as an open-string connector.' },
      ],
      progressions: [
        { name: 'I - ♭VII - IV Progression', slug: 'i-bvii-iv', description: 'The 3-chord loop.' },
      ],
    },
  },

  'tears-in-heaven': {
    slug: 'tears-in-heaven',
    songTitle: 'Tears in Heaven',
    artist: 'Eric Clapton',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'Walking Acoustic Basslines and Passing Diminished Voice Leading',
    emotionalHook: 'Eric Clapton creates exquisite intimacy through fingerstyle voice leading. The acoustic guitar transitions between A, E/G#, and F#m with a smooth descending bassline, followed by a passing diminished chord (C#dim or E/G#) that pulls gently toward D, mirroring the delicate vulnerability of the lyrics.',
    romanProgression: 'I - V/3 - vi - IV - I/3 - V',
    chords: ['A', 'E/G#', 'F#m', 'D/F#', 'E7', 'A'],
    progressionExplanation: [
      'A (I): Pure acoustic root establishing the gentle fingerpicked foundation.',
      'E/G# (V/3): First-inversion dominant chord with G# in the bass initiating the downward step.',
      'F#m (vi): Melancholy relative minor receiving the descending bass movement.',
      'D/F# (IV/3) to E7 (V): Smooth subdominant lift resolving peacefully to the dominant.',
    ],
    voiceLeadingInsights: [
      'The bassline moves A → G# → F# → E → D, creating an unbroken descending staircase underneath the vocal melody.',
      'The fingerpicking separates the bass thumb plucks from the high treble fingers, simulating a piano arrangement.',
      'Subtle hammer-ons and suspensions (Asus4 to A, E7sus4 to E7) soften the harmonic transitions.',
    ],
    guitarPerspective: 'Play with bare fingers rather than a pick. Thumb plays bass on beats 1 and 3; index and middle pluck the B and G strings on the offbeats.',
    songwriterTakeaway: 'Connect your primary chords with first-inversion slash chords (like E/G# between A and F#m). A walking bassline makes simple acoustic chords sound arranged and profound.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The diatonic scale establishing the warm chord relationships.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The major modal home of the ballad.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'Mastering E/G# and D/F# walking bass shapes.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'The E7 turnaround chord.' },
      ],
      progressions: [
        { name: 'I - vi - IV - V', slug: 'i-vi-iv-v', description: 'The underlying ballad structure.' },
      ],
    },
  },

  'never-going-back-again': {
    slug: 'never-going-back-again',
    songTitle: 'Never Going Back Again',
    artist: 'Fleetwood Mac',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'The Independent Travis-Picked Alternating Bass Pedal Point with Syncopated Folk Counterpoint',
    emotionalHook: 'Lindsey Buckingham turns an acoustic guitar into a two-piece ensemble. While his thumb relentlessly alternates between the dropped low D (string 6) and middle D (string 4) on every single quarter-note beat, his index and middle fingers weave a sparkling, syncopated melody in D major across the high strings, creating the illusion of an unbroken acoustic river.',
    romanProgression: 'I - Iadd9 - IV/I - V7sus4 - I',
    chords: ['D', 'Dadd9', 'G/D', 'A7sus4'],
    progressionExplanation: [
      'D (I): The tonic home base anchored by the dropped 6th string low D, providing an orchestral acoustic depth.',
      'Dadd9 (Iadd9): Open high E string chime introduces a bright, innocent folk shimmer.',
      'G/D (IV/I): Subdominant chord held over the low D pedal, generating a lush suspended tension that wants to resolve back home.',
      'A7sus4 (V7sus4): Dominant suspension resolving smoothly back to the D tonic without harsh leading-tone clash.',
    ],
    voiceLeadingInsights: [
      'The alternating thumb bass line (D → D) operates as an autonomous, metronomic clock that never wavers.',
      'The upper treble voice moves in stepwise counterpoint (F# → G → F# → E → D), contrasting the stationary pedal bass.',
      'Capo on the 4th fret raises the string tension and pitch into F# Major, giving the acoustic guitar a harpsichord-like resonance.',
    ],
    guitarPerspective: 'Drop D tuning (DADGBE) with Capo IV. Lindsey Buckingham uses bare flesh and fingernails (no flatpick or thumbpick), letting the thumb provide bass warmth while the fingerpads articulate treble syncopations.',
    songwriterTakeaway: 'Anchor your progression with an alternating tonic pedal bass on low open strings while shifting major triads and suspended chords on the higher strings. It gives an acoustic guitar piece orchestral fullness without needing additional instruments.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'The complete diatonic framework relative to the capo.' },
        { name: 'D Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic foundation for the treble fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode governing the piece.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'A7sus4 and G/D suspension mechanics.' },
        { name: 'Open Chords', slug: 'major', description: 'Movable D shapes in Drop D tuning.' },
      ],
      progressions: [
        { name: 'I - IV - V Progression', slug: 'i-iv-v', description: 'The underlying folk-rock foundation.' },
      ],
    },
  },

  'playing-god': {
    slug: 'playing-god',
    songTitle: 'Playing God',
    artist: 'Polyphia',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'Flamenco Phrygian Dominant Tension and Neo-Classical Altered Dominants over a Bossa Trap Grid',
    emotionalHook: 'Tim Henson and Scott LePage fuse 17th-century Spanish flamenco harmony with 21st-century trap production. Centered in D minor, the song derives its fiery harmonic bite from the D Phrygian Dominant scale (featuring an exotic major 3rd, F#, alongside a flat 2nd, Eb) and the altered dominant chord A7b9#5, producing hyper-intense resolution urgency that snaps into modern minor 9th chords.',
    romanProgression: 'i9 - iv9 - V7b9#5 - i9 | VImaj7 - V7alt - i9',
    chords: ['Dm9', 'Gm9', 'A7b9#5', 'Bbmaj7'],
    progressionExplanation: [
      'Dm9 (i9): Minor tonic chord enriched with a major 9th extension (E), establishing a sophisticated neo-classical foundation.',
      'Gm9 (iv9): Minor subdominant expanding the harmonic landscape with warm upper partials.',
      'A7b9#5 (V7b9#5): Altered dominant chord borrowed from D Harmonic Minor / Phrygian Dominant, creating sharp leading-tone tension.',
      'Bbmaj7 (VImaj7): Deceptive resolution chord providing an uplifting harmonic lift before plunging back to D minor.',
    ],
    voiceLeadingInsights: [
      'The chromatic pull between Eb (flat 2nd) and D (tonic) alongside F# (leading tone to G) creates the signature Spanish flamenco flavor.',
      'Selective picking and left-hand hammer-ons from nowhere allow rapid multi-string sweeps without pick drag or blurred notes.',
      'Drop D tuning provides low-end acoustic thump on the open 6th string, mimicking an 808 sub-bass kick beneath nylon-string chimes.',
    ],
    guitarPerspective: 'Ibanez TOD10N nylon-string electric acoustic through Neural DSP Archetype: Tim Henson acoustic model. Clean piezo articulation with multiband compression taming aggressive pick transients.',
    songwriterTakeaway: 'To inject fiery modern urgency into a standard minor progression, replace your standard minor v chord with an altered dominant (V7b9 or V7b9#5) derived from Harmonic Minor or Phrygian Dominant.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Phrygian Dominant', slug: 'harmonic-minor', description: '5th mode of G Harmonic Minor delivering exotic Spanish coloration.' },
        { name: 'D Harmonic Minor', slug: 'harmonic-minor', description: 'The classical scale source of the raised leading tone C#.' },
        { name: 'D Natural Minor', slug: 'minor', description: 'The diatonic minor foundation for contrasting lyrical phrases.' },
      ],
      modes: [
        { name: 'Phrygian Mode', slug: 'phrygian', description: 'The dark minor mode providing the flat-second friction.' },
      ],
      chords: [
        { name: 'Ninth Chords', slug: 'dominant-ninth', description: 'Dm9 and Gm9 jazz extensions.' },
        { name: 'Altered Chords', slug: 'seventh', description: 'A7b9#5 altered dominant tension.' },
      ],
    },
  },

  'it-runs-through-me': {
    slug: 'it-runs-through-me',
    songTitle: 'It Runs Through Me',
    artist: 'Tom Misch',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'The Diatonic Cycle of Fifths and Minor ii-V-i Cadence in Neo-Soul Guitar Harmony',
    emotionalHook: 'Tom Misch constructs a hypnotic 7-chord neo-soul loop that travels through a full circle of fifths in Eb minor. Moving through Bbm7, Ebm9, Abm9, Db9, Gbmaj9, and culminating in the jazz minor turnaround Fm7b5 to Bb7b9, the progression balances dark minor-ninth introspection with the radiant sunlight of relative major chords, all swung behind the beat.',
    romanProgression: 'v7 - i9 - iv9 - VII9 - IIImaj9 - iiø7 - V7b9',
    chords: ['Bbm7', 'Ebm9', 'Abm9', 'Db9', 'Gbmaj9', 'Fm7b5', 'Bb7b9'],
    progressionExplanation: [
      'Bbm7 (v7): Minor dominant opening the loop with laid-back harmonic ambiguity.',
      'Ebm9 (i9): Warm minor tonic chord with major 9th extension (F) delivering the signature neo-soul glow.',
      'Abm9 (iv9) to Db9 (VII9): Steps through the cycle of fourths, acting as a secondary ii-V toward the relative major.',
      'Gbmaj9 (IIImaj9): Radiant relative major chord providing a fleeting moment of sunshine.',
      'Fm7b5 (iiø7) to Bb7b9 (V7b9): The quintessential jazz minor turnaround, creating harmonic gravity that pulls effortlessly back to Ebm9.',
    ],
    voiceLeadingInsights: [
      'Top-voice stepwise movement connects the chords smoothly: Bb → Cb → Db → Eb across the cyclical loop.',
      'Simultaneous four-finger chord plucking (thumb on bass, fingers 1-3 on treble strings) creates punchy, unstrummed percussive attacks.',
      'Playing slightly behind the beat produces the relaxed J Dilla / D’Angelo neo-soul swing pocket.',
    ],
    guitarPerspective: 'Stratocaster Position 4 (neck + middle pickups) into a Fender Deluxe Reverb clean tube amp with subtle optical compression and analog chorus for a scooped, liquid chime.',
    songwriterTakeaway: 'Cycle your chords through fifths and fourths rather than sticking to static 3-chord loops. Introducing a half-diminished iiø7 chord before an altered dominant V7 gives any pop or soul track deep jazz sophistication.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Eb Dorian', slug: 'dorian', description: 'The sweet minor scale with natural 6th used for neo-soul soloing.' },
        { name: 'Bb Altered Scale', slug: 'harmonic-minor', description: 'Super Locrian scale for altered dominant turnarounds.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The modal heart of modern neo-soul guitar.' },
      ],
      chords: [
        { name: 'Ninth Chords', slug: 'dominant-ninth', description: 'Ebm9, Abm9, and Gbmaj9 chord voicings.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'Bbm7 and Db9 functional voicings.' },
      ],
      progressions: [
        { name: 'ii - V - I Progression', slug: 'ii-v-i', description: 'The minor jazz turnaround Fm7b5 - Bb7b9 - Ebm9.' },
      ],
    },
  },

  'stormy-monday': {
    slug: 'stormy-monday',
    songTitle: 'Stormy Monday',
    artist: 'The Allman Brothers Band',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'The Definitive "Stormy Monday Changes": Chromatic Passing 9ths, Passing Diminished 7ths, and the Jazz ii-V Turnaround',
    emotionalHook: 'The Allman Brothers Band transformed T-Bone Walker’s slow blues into the holy grail of jazz-blues guitar progressions. Instead of standard three-chord 12-bar blues, they introduce chromatic dominant 9th slides (Ab9 to G9), an indispensable passing diminished chord (C#dim7 connecting C9 to G9), and the legendary descending minor turnaround (Bm7 to Bbm7 to Am7 to D9#5) that turns Texas slow blues into soaring jazz sophistication.',
    romanProgression: 'I9 - IV9 - I9 - bII9 - I9 - IV9 - #IV°7 - I9 - iii7 - biii7 - ii7 - V7#5',
    chords: ['G9', 'C9', 'Ab9', 'C#dim7', 'Bm7', 'Bbm7', 'Am7', 'D9#5'],
    progressionExplanation: [
      'G9 (I9) & C9 (IV9): Dominant 9th chords replacing harsh dominant 7ths with smooth, rounded jazz-blues warmth.',
      'Ab9 (bII9): Chromatic half-step upper neighbor sliding smoothly into G9 on bar 3, establishing the swinging jazz-blues character.',
      'C#dim7 (#IV°7): Passing diminished 7th connecting C9 to G9 with chromatic bass motion C → C# → D.',
      'Bm7 - Bbm7 - Am7 (iii7 - biii7 - ii7): Chromatic descending minor turnaround that elevates the slow blues into bebop territory.',
      'D9#5 (V7#5): Altered dominant chord delivering sharp resolution tension pulling back to the G9 tonic.',
    ],
    voiceLeadingInsights: [
      'The bassline and inner voices move in half-steps: C9 (C) → C#dim7 (C#) → G9/D (D), creating an irresistible forward pull.',
      'Duane Allman and Dickey Betts target chord tones during the turnaround rather than running generic blues scales.',
      'Slow 12/8 time (50 BPM) gives each note and microtonal vocal bend space to bloom with singing PAF sustain.',
    ],
    guitarPerspective: 'Gibson Les Paul Standard neck pickup (tone rolled down to 6) through a 50W Marshall Plexi pushed to edge-of-breakup saturation through JBL D120F speakers.',
    songwriterTakeaway: 'Upgrade your 12-bar blues by inserting passing diminished chords (#IV°7 between IV and I) and chromatic descending minor chords (iii - biii - ii - V) on the turnaround. It instantly transforms raw blues into sophisticated jazz-blues.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Minor Blues Scale', slug: 'blues', description: 'The foundation of vocal-like weeping slow blues leads.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'Sweet major thirds blended into the blues phrasing.' },
        { name: 'G Mixolydian', slug: 'mixolydian', description: 'Governs dominant 9th extensions over I9 and IV9.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Dominant scale foundation for 9th chord comping.' },
      ],
      chords: [
        { name: 'Ninth Chords', slug: 'dominant-ninth', description: 'G9, C9, and Ab9 movable chord grips.' },
        { name: 'Diminished Chords', slug: 'diminished', description: 'C#dim7 passing chord voice leading.' },
      ],
      progressions: [
        { name: '12-Bar Blues', slug: '12-bar-blues', description: 'The underlying blues chassis enriched with jazz substitutions.' },
      ],
    },
  },

  'bohemian-rhapsody': {
    slug: 'bohemian-rhapsody',
    songTitle: 'Bohemian Rhapsody',
    artist: 'Queen',
    category: 'key-modulation',
    categoryLabel: 'Emotional Key Modulations',
    coreSecret: 'Multi-Section Rhapsodic Key Shifting with Vocalized Guitar Counterpoint',
    emotionalHook: 'Bohemian Rhapsody defies standard verse-chorus pop structure by transitioning across multiple distinct tonal worlds: from a Bb Major / G Minor ballad, to an operatic section modulating rapidly through A Major, Eb Major, and F Major, into an Eb Major hard rock breakdown before resolving peacefully in F Major.',
    romanProgression: 'Ballad: I - vi - ii - V | Solo: I - vi - IV - V | Rock: I - ♭VII - IV - I',
    chords: ['Bb', 'Gm', 'Cm', 'F', 'Eb', 'Ab', 'Db'],
    progressionExplanation: [
      'Bb Major (I) to Gm (vi) in the Ballad: Classic diatonic descent establishing poignant lyricism.',
      'Cm (ii) to F7 (V7): Traditional circle-of-fifths turnaround driving seamless cyclical resolution.',
      'Modulation to Eb Major for Guitar Solo: Shifts focus to the subdominant key center, lifting the song into soaring emotional intensity.',
      'Eb to Ab to Bb in Hard Rock Riff: High-energy rock power progression driving the headbanging climax.',
    ],
    voiceLeadingInsights: [
      'The transition into the guitar solo uses a pivot chord technique: the Eb chord acts as IV in Bb Major, then becomes the tonic (I) of the solo.',
      'Brian May treats the guitar solo as an operatic vocal aria, using continuous stepwise motion and expressive pitch bends rather than mechanical scale runs.',
      'Multi-tracked guitar harmonies utilize parallel thirds and contrary-motion counterpoint inspired by classical orchestral arranging.',
    ],
    guitarPerspective: 'Brian May\'s home-built "Red Special" guitar plugged into a treble booster and cranked Vox AC30 tube amps. Use of out-of-phase pickup selection creates the signature cutting hollow midrange honk.',
    songwriterTakeaway: 'Don\'t feel bound by a single key or tempo. Use smooth pivot chords (like Eb acting as IV in Bb, then tonic in the solo) to transport your listener into contrasting emotional landscapes.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Eb Major Scale', slug: 'major', description: 'The tonal scale underlying the iconic vocal guitar solo.' },
        { name: 'Bb Major Scale', slug: 'major', description: 'The primary scale of the ballad sections.' },
        { name: 'Eb Minor Pentatonic', slug: 'minor-pentatonic', description: 'Used during the heavy rock riff section.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Provides the radiant, melodic structure of the solo.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Rich diatonic voicings across Bb, Eb, and Ab.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Gm and Cm providing melancholic ballad depth.' },
      ],
      progressions: [
        { name: 'I - vi - ii - V Progression', slug: 'i-vi-ii-v', description: 'The circle turnaround underpinning the ballad verses.' },
      ],
    },
  },

  'creep': {
    slug: 'creep',
    songTitle: 'Creep',
    artist: 'Radiohead',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'The Chromatic Descent of Modal Interchange: The Minor Plagal Cadence (IV to iv)',
    emotionalHook: 'The entire song is powered by an inescapable 4-chord loop: G - B - C - Cm (I - III - IV - iv). The heartbreaking emotional pivot arrives when C major drops one single note by a half step—the E natural sinks to Eb—transforming into C minor (the minor subdominant borrowed from G Parallel Minor). This minor plagal cadence creates an overwhelming sense of collapse and melancholic longing.',
    romanProgression: 'I - III - IV - iv',
    chords: ['G', 'B', 'C', 'Cm'],
    progressionExplanation: [
      'G (I): Warm, stable root tonic establishing standard G Major tonality.',
      'B (III): Major mediant secondary dominant (V/vi) introducing D# chromatic tension leading into C.',
      'C (IV): Bright, hopeful diatonic subdominant providing open harmonic relief.',
      'Cm (iv): The emotional masterstroke—borrowed minor subdominant from G parallel minor, pulling chromatically back home.',
    ],
    voiceLeadingInsights: [
      'The defining voice leading thread is the chromatic descending inner voice: D (in G) → D# (in B) → E (in C) → Eb (in Cm) → D (in G).',
      'The sudden downward pull from E natural (in C) to Eb (in Cm) creates the unmistakable feeling of emotional defeat.',
      'Ed O\'Brien\'s clean arpeggios emphasize the top strings, ensuring the moving chromatic inner voice cuts clearly through the mix.',
    ],
    guitarPerspective: 'Ed O\'Brien plays ringing arpeggiated barre chords with light tremolo and chorus. Jonny Greenwood interrupts the serene arpeggios before each chorus with his legendary dead-string muted "crunch rakes" (striking fret hand mutes violently behind the bridge) through a cranked Marshall ShredMaster distortion pedal.',
    songwriterTakeaway: 'To give a simple 4-chord loop profound emotional weight, follow a major IV chord with a minor iv chord before returning to the tonic. That single half-step descending voice (3rd of IV to flat-3rd of iv) does all the emotional heavy lifting.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The overall key center and diatonic foundation.' },
        { name: 'G Minor (Parallel Minor)', slug: 'minor', description: 'The borrowed source of the heartbreaking Cm chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The parallel mode supplying the minor subdominant (iv).' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'major', description: 'Root-6 and Root-5 barre shapes used throughout the song.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Understanding the sorrowful color of the borrowed Cm chord.' },
      ],
      progressions: [
        { name: 'I - IV - iv - I Progression', slug: 'iv-i', description: 'The classic minor plagal cadence.' },
      ],
    },
  },

  'here-comes-the-sun': {
    slug: 'here-comes-the-sun',
    songTitle: 'Here Comes the Sun',
    artist: 'The Beatles',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Capoed Open String Pedal Harmonics with Asymmetrical Indian Metric Cycles',
    emotionalHook: 'Written in Eric Clapton\'s garden on an acoustic guitar with a capo at the 7th fret, "Here Comes the Sun" combines radiant open D-shape acoustic ring with irregular rhythmic cycles inspired by Indian classical music. The bridge cycles through 11/8, 4/4, and 7/8 measures, creating a buoyant sense of sunrise that defies standard pop predictability.',
    romanProgression: 'I - IV - V7 (shapes relative to Capo 7)',
    chords: ['D', 'G', 'A7', 'E7', 'F', 'C'],
    progressionExplanation: [
      'D (I): Radiant capoed tonic providing open string ring across the 4th, 3rd, and 2nd strings.',
      'G (IV): Lyrical subdominant providing pastoral lift and warmth.',
      'E7 (V/V) to A7 (V7): Secondary dominant walkup bringing chromatic G# tension leading into the dominant.',
      'Bridge Cycle (F - C - G - D - A): Descending circle of fourths against shifting 11/8, 4/4, and 7/8 time signatures.',
    ],
    voiceLeadingInsights: [
      'The 7th fret capo shifts the resonant frequencies into a shimmering mandolin/harpsichord acoustic register.',
      'George Harrison leaves the open 1st, 2nd, and 3rd strings ringing as acoustic drones while hammer-ons decorate the top melody.',
      'The bridge groups eighth notes in asymmetrical clusters (3+3+3+2 for 11/8), giving the repetition of "Sun, sun, sun" unstoppable momentum.',
    ],
    guitarPerspective: 'Gibson J-200 with capo securely placed on fret 7. Master the pinky hammer-on on the 1st string while holding the open D chord grip. Keep the picking wrist supple and free-floating.',
    songwriterTakeaway: 'Use a high capo position to completely alter the sonic character of simple open chord shapes, and introduce an odd-meter rhythmic cycle in the bridge to elevate a folk progression into a timeless masterpiece.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The concert key scale of the song.' },
        { name: 'D Major Scale', slug: 'major', description: 'The scale shapes relative to the 7th fret capo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright, joyful major mode foundation.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open D, G, and A7 shapes relative to capo.' },
        { name: 'Secondary Dominants', slug: 'secondary-dominants', description: 'E7 acting as V/V leading into A7.' },
      ],
      progressions: [
        { name: 'I - IV - V Progression', slug: 'i-iv-v', description: 'The foundational folk-pop cadence.' },
      ],
    },
  },

  'nothing-else-matters': {
    slug: 'nothing-else-matters',
    songTitle: 'Nothing Else Matters',
    artist: 'Metallica',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'The 6/8 Compound Open-String E Minor Triad with Classical Harmonic Dominant (B7)',
    emotionalHook: 'The intro is famous for requiring zero fretting-hand fingers: the open 6th (E), 3rd (G), 2nd (B), and 1st (e) strings naturally spell an Em triad. By setting this in 6/8 compound meter and introducing the major dominant B7 (borrowed from E Harmonic Minor with its raised D# leading tone), Hetfield fuses heavy metal darkness with classical Spanish elegance.',
    romanProgression: 'i - ♭VII - ♭VI - i (with V7 turnaround)',
    chords: ['Em', 'D', 'C', 'G', 'B7'],
    progressionExplanation: [
      'Em (i): Open-string acoustic resonance establishing the dark, expansive E minor tonality.',
      'D (♭VII) to C (♭VI): Stepwise natural minor descent generating melancholy ballad weight.',
      'G (♭III): Brief major-key illumination connecting the verses.',
      'B7 (V7): The classical harmonic minor dominant containing D# leading tone pulling decisively into Em.',
    ],
    voiceLeadingInsights: [
      'The open-string intro exploits natural acoustic overtone reinforcement, ringing cleanly across all six strings.',
      'The D# in the B7 chord provides a sharp half-step upward tension into the root E, preventing the progression from sounding like simple cyclical pop.',
      'The 6/8 meter (ONE-two-three, TWO-two-three) gives the arpeggios a sweeping, waltz-like rock cadence.',
    ],
    guitarPerspective: 'Fingerpick the intro with thumb on bass notes and index/middle/ring on upper strings. In the electric guitar solo, Hetfield emphasizes singing full bends and wide finger vibrato rather than rapid shredding.',
    songwriterTakeaway: 'Take advantage of natural open-string tunings or open-string triads on the guitar, and never hesitate to use a major V7 chord in a minor key ballad to inject classical gravitas.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor (Aeolian)', slug: 'minor', description: 'The scale supplying the open chords and acoustic verse melody.' },
        { name: 'E Harmonic Minor', slug: 'harmonic-minor', description: 'The source of the raised D# leading tone inside the B7 chord.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The framework for James Hetfield\'s electric guitar solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The quintessential natural minor mode.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Open Em chord voice leading.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'B7 harmonic tension chord.' },
      ],
      progressions: [
        { name: 'i - ♭VII - ♭VI Progression', slug: 'i-bvii-iv', description: 'The iconic epic minor rock progression.' },
      ],
    },
  },

  'kashmir': {
    slug: 'kashmir',
    songTitle: 'Kashmir',
    artist: 'Led Zeppelin',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'The Ascending Chromatic Octave Counterpoint Over Stationary DADGAD Open Drone in 3/4 over 4/4 Polymeter',
    emotionalHook: 'Kashmir\'s hypnotic, unstoppable momentum is generated by two ingenious compositional devices: an ascending chromatic octave line (D - D# - E - F - F# - G - G# - A) played against a continuous open DADGAD modal drone, superimposed polymetrically in 3/4 time against John Bonham\'s immovable 4/4 rock drum groove.',
    romanProgression: 'Ascending chromatic octave movement over stationary tonic D pedal drone',
    chords: ['D5', 'D(add9)', 'D(add4)', 'D(add#11)', 'A', 'G'],
    progressionExplanation: [
      'Stationary DADGAD Drone: Three octaves of D and two fifths (A) vibrating continuously without major or minor third.',
      'Ascending Chromatic Octaves: Fretted line moving up half-steps against the drone, cycling through unresolved tensions.',
      'Bridge Fanfare (A - G - D): Exultant Middle-Eastern modal fanfare providing expansive tonal release.',
    ],
    voiceLeadingInsights: [
      'The ascending octave line creates every possible interval against the open D drone: unisons, minor seconds, major seconds, minor thirds, major thirds, perfect fourths, tritones, and fifths.',
      'The metric friction between the 3-beat guitar riff and the 4-beat drum rhythm takes 12 quarter notes (3 bars of 4/4) to align, keeping the listener in constant hypnotic suspense.',
      'The absence of a third in the open DADGAD chord leaves the harmony ambiguous—neither happy nor sad, but ancient and monumental.',
    ],
    guitarPerspective: 'Tune your guitar to DADGAD. Fret the octave notes on the 5th and 3rd strings with index and ring fingers, leaving strings 6, 4, 2, and 1 to ring completely open. Keep pick attack tight and syncopated.',
    songwriterTakeaway: 'Keep an open drone ringing underneath an ascending chromatic line to create relentless dramatic tension, and experiment with metric modulation (3 against 4) to make simple riffs feel monumental.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Mixolydian Mode', slug: 'mixolydian', description: 'The scale underlying the triumphant bridge fanfare.' },
        { name: 'D Chromatic Scale', slug: 'chromatic', description: 'The ascending octave sequence creating chromatic tension.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Powers the ascending brass/guitar chords.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Open D5 modal drone chord voicings.' },
        { name: 'Drone Harmony', slug: 'suspended', description: 'Stationary pedal-point harmonic techniques.' },
      ],
      progressions: [
        { name: 'Pedal Point Riffs', slug: 'i-iv', description: 'Harmonic movement over stationary bass notes.' },
      ],
    },
  },

  'free-bird': {
    slug: 'free-bird',
    songTitle: 'Free Bird',
    artist: 'Lynyrd Skynyrd',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Southern Rock Dual-Identity: Gospel Ballad Descending Cadence to Incendiary G Minor Triplet Marathon',
    emotionalHook: 'Free Bird achieves legendary status through its dramatic two-part structural journey: an intimate, gospel-influenced G major ballad with a descending bassline (G - D/F# - Em - F - C - D) that suddenly accelerates at 4:41 into a relentless 150 BPM G minor pentatonic freight-train featuring Allen Collins\' four-minute repeating triplet pull-off marathon.',
    romanProgression: 'Ballad: I - V/3 - vi - ♭VII - IV - V | Solo Jam: i - ♭III - IV',
    chords: ['G', 'D/F#', 'Em', 'F', 'C', 'D', 'Bb'],
    progressionExplanation: [
      'G (I) to D/F# (V/3) to Em (vi): Classic stepwise descending bassline establishing emotional lyricism.',
      'F (♭VII) to C (IV) to D (V): Borrowed Mixolydian chord followed by gospel plagal cadence resolving to dominant D.',
      'Bb (♭III) to C (IV) to G (I) in the Chorus: Soulful cadence declaring "And this bird you cannot change."',
      'G - Bb - C Solo Jam: Relentless modal 3-chord freight train in G minor driving the extended twin-lead solo.',
    ],
    voiceLeadingInsights: [
      'The D/F# slash chord connects G to Em smoothly through the bass voice without jumping octave registers.',
      'The transition from Part 1 (G Major) to Part 2 (G Minor) represents a complete emotional and modal pivot from tender ballad to aggressive rock fury.',
      'The repeating triplet lick (15th fret high E, 15-12 pull-off on B, 12th fret high E) creates a perpetual-motion acoustic engine that builds unbearable excitement.',
    ],
    guitarPerspective: 'Gary Rossington plays vocal slide fills using a glass Coricidin medicine bottle in standard tuning during the ballad. Allen Collins switches to high-output bridge humbucker on his 1958 Gibson Explorer for the high-velocity triplet solo.',
    songwriterTakeaway: 'Structure an epic song as a two-act drama: begin with a soulful, lyrical ballad in a major key, then pivot into the parallel minor for an explosive, high-tempo instrumental climax.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The scale governing the ballad chords and slide melodies.' },
        { name: 'G Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation of the 4-minute fast triplet outro solo.' },
        { name: 'G Blues Scale', slug: 'blues', description: 'Supplies the blue note (Db) for aggressive solo bends.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Underpins the heartfelt ballad verses.' },
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The parallel minor mode driving the high-energy solo jam.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'D/F# thumb-over first inversion voice leading.' },
        { name: 'Major Chords', slug: 'major', description: 'Open G, C, and D shapes in the ballad.' },
      ],
      progressions: [
        { name: 'Descending Bassline Progressions', slug: 'i-bvii-iv', description: 'G to D/F# to Em stepwise motion.' },
      ],
    },
  },

  'time': {
    slug: 'time',
    songTitle: 'Time',
    artist: 'Pink Floyd',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'F# Dorian Verse (i - IV) to Lyrical Major-Seventh Chorus (Dmaj7 - Amaj7)',
    emotionalHook: 'The existential anxiety of the verse is captured in an unyielding F# Dorian loop (F#m - B), where the major IV chord (B) introduces the bright D# 6th degree. When the chorus arrives, the harmony blossoms into soaring, bittersweet acceptance through lush major 7th chords (Dmaj7 and Amaj7), contrasting the cold tick of the clock with romantic human warmth.',
    romanProgression: 'Verse: i - ♭III - ♭VII - i | Chorus: ♭VI - I - ♭VI - I - v - iv - ♭VII',
    chords: ['F#m', 'A', 'E', 'B', 'Dmaj7', 'Amaj7', 'C#m', 'Bm'],
    progressionExplanation: [
      'F#m (i) to B (IV): The hallmark F# Dorian cadence featuring the raised 6th (D#) injecting momentary hope.',
      'Dmaj7 (♭VI) to Amaj7 (I): Breathtaking chorus expansion contrasting the relative major with open seventh extensions.',
      'C#m (v) to Bm (iv) to E (♭VII): Descending minor turnaround building momentum back into the verse.',
      'Solo Vamp (F#m - Bm - Dmaj7 - E): High-dynamic progression providing the canvas for Gilmour\'s soaring fuzz leads.',
    ],
    voiceLeadingInsights: [
      'The Dmaj7 chord introduces C# as the major seventh, linking back to the tonic root note of the verse.',
      'The move from Dmaj7 to Amaj7 keeps the shared notes (A, C#, E) ringing, creating an expansive, seamless harmonic wash.',
      'David Gilmour\'s multi-step over-bends target chord tones (F#, C#, E) at the peak of the phrase, delivering singing emotional resolutions.',
    ],
    guitarPerspective: 'David Gilmour played "The Black Strat" with a Dallas Arbiter Silicon Fuzz Face, Colorsound Power Boost, and Binson Echorec tape delay into a cranked Hiwatt DR103 100W head. Use wide wrist vibrato at the peak of every full bend.',
    songwriterTakeaway: 'Use Dorian harmony (i - IV) to keep a minor key verse feeling hypnotic and forward-moving, then explode into lush major 7th chords in the chorus for an overwhelming emotional release.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F# Dorian Mode', slug: 'dorian', description: 'The modal engine behind the cyclical verse groove.' },
        { name: 'F# Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale behind David Gilmour\'s iconic guitar solo.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Supplies the bright major IV chord (B).' },
      ],
      chords: [
        { name: 'Major Seventh Chords', slug: 'major-seventh', description: 'Dmaj7 and Amaj7 lush chord voicings.' },
        { name: 'Minor Chords', slug: 'minor', description: 'F#m and Bm minor anchors.' },
      ],
      progressions: [
        { name: 'i - ♭III - ♭VII Progression', slug: 'i-bvii-iv', description: 'The classic rock minor cadence.' },
      ],
    },
  },

  'basket-case': {
    slug: 'basket-case',
    songTitle: 'Basket Case',
    artist: 'Green Day',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Slash Chords',
    coreSecret: 'Pachelbel Canon Classical Voice Leading Accelerated into 175 BPM Pop-Punk Adrenaline',
    emotionalHook: 'Underneath its snotty 175 BPM punk-rock aggression, Basket Case is built directly on Johann Pachelbel\'s 17th-century Canon in D: I - V - vi - iii - IV - I - IV - V (Eb - Bb - Cm - Gm - Ab - Eb - Ab - Bb). By speeding up this ancient descending stepwise bassline and playing it with palm-muted downstroke power chords, Green Day gave punk rock classical harmonic inevitability.',
    romanProgression: 'I - V - vi - iii - IV - I - V',
    chords: ['Eb5', 'Bb5', 'C5', 'G5', 'Ab5', 'Eb5', 'Bb5'],
    progressionExplanation: [
      'Eb5 (I) to Bb5 (V): Tonic to dominant opening establishing bold major tonality.',
      'C5 (vi) to G5 (iii): Stepwise descent into minor mediants creating melancholy emotional depth.',
      'Ab5 (IV) to Eb5 (I): Plagal cadence providing uplifting punk optimism.',
      'Ab5 (IV) to Bb5 (V): Dominant turnaround driving circular resolution back to the tonic Eb5.',
    ],
    voiceLeadingInsights: [
      'The bass roots step down continuously: Eb → D (implied) → C → Bb (implied) → Ab → G (implied) → Ab → Bb.',
      'This descending voice-leading has resonated in western ears for over 300 years, making the melody instantly catchy on first listen.',
      'Half-step down tuning (Eb standard) slackens string tension, giving the fast palm-muted downstrokes heavy percussive chug.',
    ],
    guitarPerspective: 'Billie Joe Armstrong plays his iconic Fernandes Strat "Blue" with an angled Seymour Duncan JB humbucker into modded Marshall Super Lead heads. Keep your picking wrist springy and relaxed to maintain 175 BPM downstroke stamina.',
    songwriterTakeaway: 'Steal from the classical masters. Accelerating a famous baroque progression (like Pachelbel\'s Canon) with modern high-gain guitar textures produces instant anthemic power.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Eb Major Scale', slug: 'major', description: 'The diatonic scale supplying the Pachelbel harmony.' },
        { name: 'Eb Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic hooks and vocal melody.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The foundational major mode.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Two-finger Root-5 and Root-6 power chord grips.' },
      ],
      progressions: [
        { name: 'Pachelbel Canon Progression', slug: 'i-v-vi-iv', description: 'I - V - vi - iii - IV - I - V classical sequence.' },
      ],
    },
  },

  'say-it-aint-so': {
    slug: 'say-it-aint-so',
    songTitle: 'Say It Ain\'t So',
    artist: 'Weezer',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'The Harmonic Minor Dominant (G#) in a 4-Chord Alt-Rock Loop with Extreme Dynamic Contrast',
    emotionalHook: 'The entire song cycles through C#m - G# - A - E. The harmonic engine is the unexpected major V chord (G#) borrowed from C# Harmonic Minor: its B# leading tone cries for resolution up to C#, but instead steps down deceptively to A major (VI), creating an unresolved psychological tension that mirrors the lyrics of family trauma and addiction.',
    romanProgression: 'i - V - VI - III',
    chords: ['C#m', 'G#', 'A', 'E'],
    progressionExplanation: [
      'C#m (i): Moody minor tonic establishing melancholy narrative intimacy.',
      'G# (V): Major dominant borrowed from C# Harmonic Minor, injecting sharp leading-tone tension (B#).',
      'A (VI): Deceptive resolution stepping down to the submediant, subverting expectations.',
      'E (III): Uplifting resolution to the relative major completing the 4-chord circle.',
    ],
    voiceLeadingInsights: [
      'The voice-leading thread moves chromatically: B (in C#m) → B# (in G#) → C# (in A) → B (in E), creating continuous inner-voice counterpoint.',
      'Extreme dynamics: delicate clean reggae-style upstrokes on offbeats in the verse contrast with explosive walls of fuzz in the chorus.',
      'The B# leading tone in the G# chord gives the progression classical gravitas that standard natural minor (G#m) cannot match.',
    ],
    guitarPerspective: 'Play clean offbeat reggae skanks with your fretting hand choking strings immediately after each upstroke. In the chorus, stomp on an Electro-Harmonix Big Muff or crank your amp gain for colossal grunge power.',
    songwriterTakeaway: 'Replace your minor v chord with a major V chord in a minor key progression, and let it resolve deceptively to VI. It creates an unforgettable, emotionally complex harmonic hook.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C# Natural Minor', slug: 'minor', description: 'The primary scale of the verse melodies and clean chords.' },
        { name: 'C# Harmonic Minor', slug: 'harmonic-minor', description: 'The source of the raised B# leading tone in the G# major chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode foundation.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'major', description: 'Root-5 and Root-6 barre chords used throughout.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'G# major dominant harmony.' },
      ],
      progressions: [
        { name: 'i - V - VI - III Progression', slug: 'i-v-vi-iv', description: 'The cyclical alternative rock progression.' },
      ],
    },
  },

  'cant-stop': {
    slug: 'cant-stop',
    songTitle: 'Can\'t Stop',
    artist: 'Red Hot Chili Peppers',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'E Dorian Funk Raking Across Muted Strings with Stationary Melodic Target Note',
    emotionalHook: 'Frusciante builds the ultimate percussive funk-rock groove by raking all 6 strings while fretting only one note at a time. The bass roots cycle E - D - B - C (i - ♭VII - v - ♭VI), while the 7th fret D on the 3rd string acts as a ringing melodic anchor, injecting bright E Dorian swagger that drives the song with perpetual forward motion.',
    romanProgression: 'i - ♭VII - v - ♭VI (Verse) | ♭III - ♭VII - v - ♭VI (Chorus)',
    chords: ['Em', 'D', 'Bm', 'C', 'G'],
    progressionExplanation: [
      'Em (i) to D (♭VII): Driving funk-rock cadence establishing athletic bounce.',
      'Bm (v) to C (♭VI): Minor dominant moving to submediant creating melodic lift.',
      'G (♭III) in Chorus: Explodes into triumphant relative major harmony.',
      'Single-Note Melody Rake: The top note (D) rings as a stationary pedal while the bass shifts beneath it.',
    ],
    voiceLeadingInsights: [
      'By strumming across all six strings while muting five of them, Frusciante turns the guitar into a polyphonic drum kit.',
      'The alternating bass notes (E → D → B → C) outline the full harmonic structure without playing full chords.',
      'The chorus opens up into full ringing triads, creating massive dynamic relief after the percussive verse.',
    ],
    guitarPerspective: 'Wrap your thumb over the neck to mute the low E string, and lay your fretting index finger flat to silence adjacent strings. Keep your right hand in continuous sixteenth-note pendulum motion.',
    songwriterTakeaway: 'A single-note melody can feel as massive as a full chord progression if you support it with percussive string rakes and dynamic root motion in the bass.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Dorian Mode', slug: 'dorian', description: 'The funk mode supplying the bright major 6th (C#).' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The framework for the iconic single-note main riff.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The quintessential rock-funk mode.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open G, D, and C voicings in the chorus.' },
      ],
      progressions: [
        { name: 'i - ♭VII - v - ♭VI Progression', slug: 'i-bvii-iv', description: 'The driving funk cadence.' },
      ],
    },
  },

  'killing-in-the-name': {
    slug: 'killing-in-the-name',
    songTitle: 'Killing in the Name',
    artist: 'Rage Against the Machine',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Drop D Heavy Metal Tritone Dissonance (Ab) Combined with Hip-Hop Syncopation',
    emotionalHook: 'Tom Morello takes the raw primal energy of a Drop D power chord and supercharges it with the devil\'s interval: the tritone blue note Ab (fret 6). By stabbing this dissonant passing note against heavy palm-muted low D power chords on offbeats, the song merges hip-hop syncopation with incendiary metal defiance.',
    romanProgression: 'i - ♭III - i - ♭III - IV - ♭V - IV - ♭III',
    chords: ['D5', 'F5', 'D5', 'F5', 'G5', 'Ab5', 'G5', 'F5'],
    progressionExplanation: [
      'D5 (i): Thunderous open Drop D root establishing immovable low-end punch.',
      'F5 (♭III) to G5 (IV): Blues scale ascent creating urgent forward drive.',
      'Ab5 (♭V): The explosive tritone blue-note stab delivering confrontational dissonance.',
      'Ab5 to G5 to F5: Chromatic descent resolving back into the heavy D5 groove.',
    ],
    voiceLeadingInsights: [
      'Tuning the low E string down to D drops the guitar\'s resonant floor, making power chords sound like an 808 sub-bass kick.',
      'The chromatic slide across frets 5-6-5 (G → Ab → G) creates immediate visceral tension that demands resolution.',
      'The silent gaps between chord stabs are as important as the notes themselves, allowing Brad Wilk\'s drums to hit with brutal impact.',
    ],
    guitarPerspective: 'Drop low E string to D. Use a single index finger to barre across the bottom three strings (D-A-D). In the solo, set your DigiTech Whammy pedal to +2 Octaves Up and sweep the treadle in time with your pick strikes.',
    songwriterTakeaway: 'In Drop D tuning, don\'t just stay on root power chords: use the diminished fifth / tritone as a passing stab to inject dangerous, rebellious attitude into your riffs.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Minor Blues Scale', slug: 'blues', description: 'Contains the critical Ab blue note (fret 6).' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation of the whammy pedal guitar solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode underlying the D5 power riffs.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'One-finger Drop D power chords.' },
      ],
      progressions: [
        { name: 'Blues-Metal Riffs', slug: 'minor-blues', description: 'Drop D riffing utilizing tritone passing chords.' },
      ],
    },
  },

  'the-trooper': {
    slug: 'the-trooper',
    songTitle: 'The Trooper',
    artist: 'Iron Maiden',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Twin-Guitar Diatonic Thirds Counterpoint over Unrelenting Gallop Rhythm',
    emotionalHook: 'The immortal dual-guitar lead harmonizes in diatonic thirds (E minor melody in the lower guitar, G major third above in the upper guitar), echoing 19th-century classical orchestration. Underneath, Steve Harris\' galloping bass and Nicko McBrain\'s snare drive a breathless cavalry charge in Aeolian natural minor (i - ♭VI - ♭VII - i).',
    romanProgression: 'i - ♭VI - ♭VII - i',
    chords: ['Em', 'C', 'D', 'Em'],
    progressionExplanation: [
      'Em (i): Battle-hardened minor tonic establishing heroic British metal authority.',
      'C (♭VI): Dramatic lift to the submediant representing epic struggle.',
      'D (♭VII): Whole-step below the tonic, providing anthemic forward drive.',
      'Em (i): Unrelenting resolution resetting the galloping charge.',
    ],
    voiceLeadingInsights: [
      'Guitar 1 plays root melody: E - F# - G - F# - E - D - E - F#.',
      'Guitar 2 plays a diatonic third above: G - A - B - A - G - F# - G - A, perfectly outlining the underlying Em and D harmony.',
      'The gallop picking pattern (eighth note + two sixteenth notes) locks the rhythm section into the sound of charging cavalry hooves.',
    ],
    guitarPerspective: 'Dave Murray and Adrian Smith both play Stratocasters with DiMarzio humbuckers through cranked Marshall JCM800 tube stacks. Ensure both players apply synchronized vibrato on sustained notes.',
    songwriterTakeaway: 'Harmonize your lead guitar melodies in diatonic thirds to instantly give a rock song an epic, classical grandeur that a single guitar line cannot achieve alone.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor (Aeolian)', slug: 'minor', description: 'The scale supplying the harmonized twin leads.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for Adrian Smith and Dave Murray\'s solos.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode engine of heavy metal.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Em5, C5, and D5 power chords.' },
      ],
      progressions: [
        { name: 'i - ♭VI - ♭VII Progression', slug: 'i-bvii-iv', description: 'The quintessential heavy metal cadence.' },
      ],
    },
  },

  'texas-flood': {
    slug: 'texas-flood',
    songTitle: 'Texas Flood',
    artist: 'Stevie Ray Vaughan and Double Trouble',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Slow 12/8 Texas Blues Dynamics with Microtonal Vocal Bends on Heavy .013 Strings',
    emotionalHook: 'Stevie Ray Vaughan turned slow 12-bar blues into a high-art emotional tempest. In slow 12/8 time at 60 BPM, every note has immense room to expand. By tuning down a half-step and stringing his Strat with massive .013-.058 gauge wire, his weeping quarter-tone curls and singing forearm vibrato sound like a human voice crying in the rain.',
    romanProgression: 'I7 - IV9 - I7 - I7 - IV9 - IV9 - I7 - I7 - V9 - IV9 - I7 - V9',
    chords: ['G7', 'C9', 'D9'],
    progressionExplanation: [
      'G7 (I7): Dominant blues tonic establishing raw Texas swagger.',
      'C9 (IV9): Sophisticated jazz-blues subdominant with rich ninth extension.',
      'D9 (V9) to C9 (IV9): Classic blues turnaround tension resolving chromatically back to G7.',
      'Slow Turnaround (G7 - G7/F - G7/E - G7/Eb - D9): Chromatic descending bassline voice-leading.',
    ],
    voiceLeadingInsights: [
      'Microtonal bends: curling the minor 3rd (Bb) slightly sharp toward the major 3rd (B) creates the iconic weeping Texas blues vocal inflection.',
      'Slow 12/8 compound meter (counted ONE-and-a, TWO-and-a, THREE-and-a, FOUR-and-a) provides enormous acoustic space between pick attacks.',
      'Heavy string gauge (.013-.058) gives every single note colossal acoustic mass, singing sustain, and rich tube amplifier harmonic bloom.',
    ],
    guitarPerspective: 'Stevie played his 1963 Strat "Number One" with heavy .013 strings into a 1964 Fender Vibroverb and Dumble Steel String Singer with an Ibanez TS808 Tube Screamer as a clean boost. Use forearm rotation for wide, singing vibrato.',
    songwriterTakeaway: 'In slow blues, don\'t overplay: let each note bloom with dynamic touch, and use microtonal curls to make your guitar weep with authentic human emotion.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Minor Blues Scale', slug: 'blues', description: 'The foundation of vocal-like weeping slow blues bends.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'Sweet major thirds blended into Texas blues phrasing.' },
        { name: 'G Mixolydian Mode', slug: 'mixolydian', description: 'Governs dominant 9th chord comping and turnaround chords.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Dominant scale foundation for C9 and D9 chords.' },
      ],
      chords: [
        { name: 'Ninth Chords', slug: 'dominant-ninth', description: 'Movable C9 and D9 chord shapes.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'G7 blues tonic chord.' },
      ],
      progressions: [
        { name: '12-Bar Blues', slug: '12-bar-blues', description: 'The slow 12-bar blues chassis with chromatic turnaround.' },
      ],
    },
  },

  'voodoo-child': {
    slug: 'voodoo-child',
    songTitle: 'Voodoo Child (Slight Return)',
    artist: 'Jimi Hendrix',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues & Rock Hybrids',
    coreSecret: 'The Dissonant E7#9 Augmented-Ninth Chord Over a Thundering Low E Pedal Drone',
    emotionalHook: 'The raw sonic power of Voodoo Child comes from the tension between the major third (G#) and augmented ninth (G natural) sounding simultaneously within the E7#9 chord, clashing fiercely against the hypnotic low E pedal point before releasing into crying blues scale bends.',
    romanProgression: 'I7#9 - bIII - IV - I7#9',
    chords: ['E7#9', 'G', 'A', 'E7'],
    progressionExplanation: [
      'E7#9 (I7#9): The definitive Hendrix chord featuring both major and minor tonal qualities simultaneously.',
      'G (bIII): Borrowed modal step from E Aeolian providing a punchy blues turnaround lift.',
      'A (IV): Subdominant resolution sliding smoothly back down into the open E pedal point.',
      'E7 (I7): Low E open bass drone maintaining continuous harmonic resonance under flying solos.',
    ],
    voiceLeadingInsights: [
      'The #9 (G natural) sits one half-step below the major 3rd (G#), creating an internal semitone friction that fuels the blues-rock explosion.',
      'The G and A chords move in parallel motion on the lower strings, accentuating the pentatonic box shift.',
      'Half-step down tuning lowers string tension, allowing wider vibrato and richer low-end speaker resonance.',
    ],
    guitarPerspective: 'Fretted with thumb-over-neck technique while rocking a Vox wah pedal. Rolling back the volume to 7 yields throaty chime, while turning it up to 10 pushes the Fuzz Face and Plexi into singing feedback.',
    songwriterTakeaway: 'Anchor your riff with an unshakeable low open string pedal note and decorate it with a colorful dominant 7#9 extension. It creates an irresistible groove that sounds both ancient and modern.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Blues Scale', slug: 'blues', description: 'The source of weeping vocal bends and blue note tension.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundational soloing box across the 12th position.' },
        { name: 'E Mixolydian Mode', slug: 'mixolydian', description: 'Supplies sweet major third and sixth intervals.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Dominant scale framework for dominant 7th chords.' },
      ],
      chords: [
        { name: 'Dominant Ninth Chords', slug: 'dominant-ninth', description: 'The Hendrix chord (7#9) structure and fingerings.' },
        { name: 'Power Chords', slug: 'power', description: 'Punchy transition power chords for rock weight.' },
      ],
    },
  },

  'la-grange': {
    slug: 'la-grange',
    songTitle: 'La Grange',
    artist: 'ZZ Top',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Dorian Major Sixth Inflection Combined with a Minor Third Key Modulation',
    emotionalHook: 'Billy Gibbons transforms a classic John Lee Hooker boogie shuffle into a hard rock anthem by highlighting the Dorian natural 6th (F#) over the D chord, before jolting the listener by modulating Solo 2 up a minor third into C minor.',
    romanProgression: 'i - bIII - IV - i (modulating to i in C)',
    chords: ['A5', 'C5', 'D5', 'A5'],
    progressionExplanation: [
      'A5 (i): Driving pedal anchor pulsing on the open A string with syncopated swing.',
      'C5 (bIII): Borrowed step giving the shuffle its characteristic forward bounce.',
      'D5 (IV): The Dorian highlight chord containing the natural F# note.',
      'Key Shift to C: Sudden minor third jump up to C minor, intensifying lead guitar aggression.',
    ],
    voiceLeadingInsights: [
      'Open A string pedal tone acts as an unyielding rhythmic anchor throughout the verses.',
      'Pinch harmonics emphasize upper overtone nodes (5th, 7th, and 9th harmonics) across the G and D strings.',
      'Modulating up 3 semitones from A to C creates an explosive boost in perceived volume and urgency.',
    ],
    guitarPerspective: 'Use bridge humbucker with strong midrange boost. Graze the pick-hand thumb against the string simultaneously with the pick stroke to squeal pinch harmonics on demand.',
    songwriterTakeaway: 'When a one-key boogie riff threatens to become repetitive, modulate up a minor third for the guitar solo. It instantly re-energizes the track without sacrificing blues coherence.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'Foundational scale for the rhythm shuffle chords and primary solo riffs.' },
        { name: 'A Blues Scale', slug: 'blues', description: 'Infuses stinging grit and pinch harmonic squeals with the flat-5.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The modal color scale adding natural 6th swing.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Two-finger movable rock power chords.' },
      ],
    },
  },

  'mr-crowley': {
    slug: 'mr-crowley',
    songTitle: 'Mr. Crowley',
    artist: 'Ozzy Osbourne',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'Baroque Descending Cycle-of-Fifths with a Dramatic Harmonic Minor Dominant Cadence',
    emotionalHook: 'Randy Rhoads fused European classical counterpoint with heavy metal thunder. Over a descending circle progression (Dm - Bb - C - Dm - Bb - Gm - A), Randy replaces the natural minor v (Am) with an ominous major V (A), unleashing the exotic C# leading tone of D Harmonic Minor.',
    romanProgression: 'i - VI - VII - i - VI - iv - V',
    chords: ['Dm', 'Bb', 'C', 'Dm', 'Bb', 'Gm', 'A'],
    progressionExplanation: [
      'Dm (i): Solemn, gothic minor tonic key center.',
      'Bb (VI): Expansive submediant major chord providing grandeur.',
      'C (VII): Subtonic stepping chord linking Bb back to Dm.',
      'Gm (iv): Predominant minor chord setting up the harmonic turnaround.',
      'A (V): The classical secret: major dominant chord borrowed from D Harmonic Minor containing the C# leading tone.',
    ],
    voiceLeadingInsights: [
      'The progression moves through diatonic steps with smooth stepwise voice leading.',
      'The C# in the A major chord resolves upwards by half-step to the D root note with classical inevitability.',
      'Solo arpeggios trace triad inversions cleanly along the top three strings rather than standard pentatonic boxes.',
    ],
    guitarPerspective: 'Played with high-gain Marshall Plexi boosted by an MXR Distortion+. Focus on alternate picking precision and light sweeping across the top strings for triad arpeggios.',
    songwriterTakeaway: 'Elevate your metal progressions by borrowing the major V chord from harmonic minor. It immediately injects classical drama and makes lead guitar passages sound sophisticated and timeless.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Harmonic Minor', slug: 'harmonic-minor', description: 'Source of the exotic C# leading tone over the A major chord.' },
        { name: 'D Natural Minor', slug: 'minor', description: 'Diatonic scale driving the verse and intro melody.' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'Bluesy rock solo hooks in the middle of classical runs.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor modal framework of D minor.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Dm and Gm minor triad chord shapes.' },
        { name: 'Major Chords', slug: 'major', description: 'Bb and C major chords providing harmonic lift.' },
      ],
    },
  },

  'hurts-so-good': {
    slug: 'hurts-so-good',
    songTitle: 'Hurts So Good',
    artist: 'John Mellencamp',
    key: 'A Major',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'Anticipated Syncopation and Blues-Inflected Double Stops over Diatonic I-IV-V Power Chords',
    emotionalHook: 'The irresistible heartland groove stems from hitting the IV chord (D) an eighth note before beat 1 of measure 2, paired with bluesy minor-to-major third hammer-ons (C to C#) on the G string.',
    romanProgression: 'I - IV - V - IV',
    chords: ['A', 'D', 'E', 'D'],
    progressionExplanation: [
      'A (I): The radiant tonic chord providing the rock-solid tonal foundation.',
      'D (IV): The subdominant, anticipated on the upbeat ("and" of 4) to propel forward momentum.',
      'E (V): The dominant turnaround driving the cadence back home.',
      'F#m (vi): Introduced in the bridge to inject reflective emotional contrast before bursting back into the chorus.',
    ],
    voiceLeadingInsights: [
      'The rhythm guitar avoids heavy bottom-end strumming, focusing instead on tight 2-note and 3-note dyad stabs on strings 2, 3, and 4.',
      'Lead fills constantly curl between the minor 3rd (C natural) and major 3rd (C#) against the open A tonic drone.',
      'In the solo, parallel 6ths and 4ths on the B and G strings outline chord tones while preserving raw garage-rock punch.',
    ],
    guitarPerspective: 'Dial in a bright Telecaster or Stratocaster bridge pickup into a cranked Fender tweed or early Marshall combo right on the verge of breakup. Keep your picking hand palm-muting slightly on the 8th notes to make the unmuted syncopated chord accents pop.',
    songwriterTakeaway: 'You do not need complex jazz harmony to write a chart-topping hook. Take a basic I-IV-V progression, anticipate the chord changes by an eighth note, and frame the melody with minor-pentatonic double stops.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Pentatonic', slug: 'major-pentatonic', description: 'Provides the bright, soulful sweet notes of the lead lines.' },
        { name: 'A Blues Scale', slug: 'blues', description: 'Supplies the greasy b3 and b5 blue notes that give the riffs grit.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The natural rock mode linking major tonality with blues attitude.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Root-fifth voicings that keep rhythm tracks tight and punchy.' },
        { name: 'Major Chords', slug: 'major', description: 'Upper-register voicings on strings 2, 3, and 4 used for syncopated stabs.' },
      ],
    },
  },

  'take-a-long-line': {
    slug: 'take-a-long-line',
    songTitle: 'Take a Long Line',
    artist: 'The Angels',
    key: 'E Mixolydian',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Brewster Brothers Staccato Twin-Guitar Counterpoint and the bVII Flat-Seventh Cadence',
    emotionalHook: 'The manic pub rock urgency comes from contrasting dry, percussive muted sixteenth-note pedal chugs on the low E string with sharp staccato power-chord stabs that land on unyielding offbeats.',
    romanProgression: 'I - bVII - IV - I',
    chords: ['E', 'D', 'A', 'E'],
    progressionExplanation: [
      'E (I): The pounding tonic pedal center anchoring the manic rhythm section.',
      'D (bVII): The borrowed Mixolydian subtonic chord that instantly eliminates classical sweetness in favor of pub rock swagger.',
      'A (IV): The subdominant completing the quintessential double-plagal cadence (D → A → E).',
      'B (V): The punchy dominant chord held back for dramatic chorus build-ups.',
    ],
    voiceLeadingInsights: [
      'Twin guitar arrangement: John Brewster holds down relentless, surgically tight muted downstrokes while Rick Brewster injects piercing, syncopated upper-register triad accents.',
      'The D major (bVII) chord steps smoothly down to A (IV) by whole step in the bass while common chord tone A is sustained between D and A.',
      'The guitar solo eschews generic pentatonic wailing for razor-sharp double stops and chromatic slides into chord tones.',
    ],
    guitarPerspective: 'Bridge pickup of a Gibson SG or Fender Stratocaster directly into a master-volume Marshall JMP or Plexi on high treble. Keep the guitar volume rolled slightly back for crisp rhythm staccato, then opened wide for scorching lead cuts.',
    songwriterTakeaway: 'Great rock arrangements rely on sonic space and stereo guitar separation. Have one guitar drive the rhythmic motor with palm-muted chugs while the second guitar stabs sparse, syncopated accents on opposite beats.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Mixolydian', slug: 'mixolydian', description: 'The primary scale balancing major triads with the rebel flat 7th (D).' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The biting blues framework used for solo flourishes and turnaround fills.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The quintessential Australian pub rock tonality.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Tight 5th intervals across the lower strings for maximum percussive impact.' },
        { name: 'Major Chords', slug: 'major', description: 'Ringing open E and A chords providing expansive dynamic release in the chorus.' },
      ],
    },
  },

  'after-the-rain': {
    slug: 'after-the-rain',
    songTitle: 'After the Rain',
    artist: 'The Angels',
    key: 'A Minor / C Major',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'The Dynamic Contrast Between Clean Aeolian Arpeggios and Explosive Relative Major Chorus Chords',
    emotionalHook: 'The verse builds brooding tension with delicate, clean fingerstyle-like arpeggios in A natural minor (Am - G - F), which explodes into full Marshall overdrive on the bright relative major (C Major) chorus.',
    romanProgression: 'i - bVII - bVI - bVII (Verse) / I - V - IV (Chorus)',
    chords: ['Am', 'G', 'F', 'G', 'C'],
    progressionExplanation: [
      'Am (i): Melancholic Aeolian tonic establishing atmospheric vulnerability.',
      'G (bVII): Descending whole-step subtonic creating natural minor fluidity.',
      'F (bVI): The emotional low point and submediant tension that yearns for resolution.',
      'C (Relative Major / I): The blinding sunburst chorus chord providing emotional catharsis and uplifting release.',
    ],
    voiceLeadingInsights: [
      'The bass line in the verse follows an unbroken stepwise descent (A → G → F → G), providing classical grounding.',
      'Rick Brewster’s clean guitar weaves suspended seconds and open string ringing notes (B and E) over the Am and F shapes, adding shimmering harmonic complexity.',
      'When shifting into the chorus, the vocal and guitar lead lines leap an octave higher into C major triad tones (E and G).',
    ],
    guitarPerspective: 'Use a clean chorus/reverb tone on the neck pickup for the verse arpeggios, then hit a heavy overdrive or switch to a screaming bridge humbucker for the triumphant C - G - F chorus progression.',
    songwriterTakeaway: 'Harness the dramatic power of relative major/minor shifts. Writing a brooding verse in the relative minor (Am) makes the arrival of the relative major (C) feel exponentially bigger, brighter, and more cathartic.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The Aeolian scale underpinning the introspective verse chord progression.' },
        { name: 'C Major Scale', slug: 'major', description: 'The relative major scale unleashing anthemic release in the chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The classic natural minor mode embodying longing and brooding tension.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Am voicings with open ringing strings for haunting atmospheric texture.' },
        { name: 'Major Chords', slug: 'major', description: 'C, G, and F barre chords providing heavy power and dynamic lift.' },
      ],
    },
  },

  'am-i-ever-gonna-see-your-face-again': {
    slug: 'am-i-ever-gonna-see-your-face-again',
    songTitle: 'Am I Ever Gonna See Your Face Again',
    artist: 'The Angels',
    key: 'A Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Open A-String Pedal Tone Triads Shifting into Crushing Pub Rock Power Chords',
    emotionalHook: 'The unforgettable intro juxtaposes a constant open 5th string (A) pedal drone against shifting upper-register D and E major triads, creating a bittersweet ringing chiming hook that erupts into an anthemic shout-along chorus.',
    romanProgression: 'I - IV - V - IV',
    chords: ['A', 'D', 'E', 'D'],
    progressionExplanation: [
      'A (I): The fundamental tonic anchor, sustained as an open ringing pedal tone in the verse.',
      'D/A (IV/I): First-inversion D triad fingered high on the G, B, and E strings while the low A drone continues to vibrate.',
      'E/A (V/I): Shifting the triad up two frets creates an energetic suspended tension before falling back to D/A and A.',
      'A - D - E (Chorus): Stripping away the pedal drone in favor of full-throated power chords for maximum anthemic pub-rock power.',
    ],
    voiceLeadingInsights: [
      'Pedal Point Harmony: The static open A bass note creates harmonic richness by turning simple D and E triads into D/A and E/A chords with unique interval tensions.',
      'Parallel Triad Movement: The fretboard shapes for D and E in the intro move along the top three strings as parallel triad grips, letting muscle memory easily execute smooth voice leading.',
      'Solo phrasing relies on melodic vocal-like bends on the B string (fret 7 to 9) targeting the major 3rd (C#).',
    ],
    guitarPerspective: 'Acoustic or clean electric 12-string/6-string on the verse with open ringing strings. For the chorus, crank the gain on a classic British tube amplifier and dig in with aggressive, full-wrist downstrokes.',
    songwriterTakeaway: 'A simple pedal tone transforms standard I, IV, and V chords into an instantly recognizable, cinematic signature hook. Keep one low open string ringing while moving triad shapes up and down the neck.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The diatonic foundation defining the bright, triumphant chorus energy.' },
        { name: 'A Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic sweet scale used in the ringing guitar intro and vocal hooks.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The pure major mode providing uplifting, sing-along anthemic energy.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Power chord grips driving the anthemic chorus energy.' },
        { name: 'Slash Chords', slug: 'slash', description: 'Triads played over non-root bass notes (D/A and E/A) for complex color.' },
      ],
    },
  },

  'take-me-home-country-roads': {
    slug: 'take-me-home-country-roads',
    songTitle: 'Take Me Home, Country Roads',
    artist: 'John Denver',
    key: 'A Major',
    category: 'modal-mixture',
    categoryLabel: 'Subdominant Plagal Lifts & Folk Cadence',
    coreSecret: 'The Bittersweet Shift from Pastoral Tonic G to Nostalgic vi (Em), Resolving with a Plagal IV-I Lift',
    emotionalHook: 'Denver balances the pure optimism of G major with the wistful ache of E minor. When the chorus arrives, it pairs the classic I - V - vi - IV pop-folk cycle with an evocative IV - I (Plagal "Amen") cadence that imprints an irresistible sensation of arriving safely home.',
    romanProgression: 'I - vi - V - IV - I',
    chords: ['G', 'Em', 'D', 'C', 'G'],
    progressionExplanation: [
      'G (I): The grounded, radiant tonic establishing the pastoral mountain valley.',
      'Em (vi): The relative minor introducing homesick nostalgia and human warmth.',
      'D (V): Dominant chord driving harmonic tension toward the horizon.',
      'C (IV): Subdominant chord creating an expansive emotional swell.',
      'G (I): Final resolution bringing the traveler back home.',
    ],
    voiceLeadingInsights: [
      'The alternating bass line moves between root and fifth (G on string 6 to D on string 4), creating an unstoppable walking momentum.',
      'In the chorus, the vocal melody arches up to the high D note over the Em and C chords, magnifying the longing in the lyrics.',
      'The bridge shifts decisively to Em and climaxes on D7, introducing a bluesy minor-seventh tension before releasing into the final chorus.',
    ],
    guitarPerspective: 'Capo on the 2nd fret allows you to use standard open G "cowboy" chords while sounding in John Denver\'s soaring vocal key of A major. Focus on the boom-chick alternating bass technique to capture authentic bluegrass-folk acoustic groove.',
    songwriterTakeaway: 'To write an unforgettable singalong, anchor your verse in the relative minor (vi) for emotional intimacy, then release into an expansive I - V - vi - IV chorus where every line resolves with a comforting Plagal IV - I cadence.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic framework connecting all open chords in the progression.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic note pool shaping Denver\'s vocal melodies and acoustic fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode that gives the song its warm, pastoral character.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Foundational open G, C, and D cowboy shapes.' },
        { name: 'Minor Chords', slug: 'minor', description: 'How the Em relative minor adds warmth and nostalgia.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'How D7 provides dominant drive at the climax of the bridge.' },
      ],
    },
  },

  'have-you-ever-seen-the-rain': {
    slug: 'have-you-ever-seen-the-rain',
    songTitle: 'Have You Ever Seen the Rain',
    artist: 'Creedence Clearwater Revival',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Descending Stepwise Basslines',
    coreSecret: 'The Stepwise Chromatic-Diatonic Bass Walkdown (C → B → A → G) Transforming a Simple Pop Loop into High Drama',
    emotionalHook: 'While the verse rocks steadily on a two-chord C - G vamp, the chorus unleashes a poignant descending bass line: C → C/B → Am → Am/G. This downward stepwise motion creates an emotional sigh beneath the bittersweet question: "Have you ever seen the rain, comin\' down on a sunny day?"',
    romanProgression: 'IV - V - I - I/VII - vi - vi/V - IV - V - I',
    chords: ['F', 'G', 'C', 'C/B', 'Am', 'Am/G', 'F', 'G', 'C'],
    progressionExplanation: [
      'F (IV): The chorus opens with an uplifting subdominant leap, raising the emotional stakes.',
      'G (V): Dominant chord building forward expectation.',
      'C (I) to C/B (I/VII): The tonic chord drops its bass note by a half-step to B on the 5th string.',
      'Am (vi) to Am/G (vi/V): The bass continues descending through the open A string down to low G on the 6th string.',
      'F (IV) to G (V) to C (I): Classic cadence resolving the downward cascade back to stable ground.',
    ],
    voiceLeadingInsights: [
      'The bass line traces an unbroken 4-note downward stair-step: C (fret 3, string 5) → B (fret 2, string 5) → A (open string 5) → G (fret 3, string 6).',
      'The upper triad voices hold tight common tones (C and E notes ring across both C and Am), making the descending bass note stand out dramatically.',
      'The verse deliberately suppresses chord movement (vamping solely between C and G) so the chorus bass walkdown lands with maximum emotional impact.',
    ],
    guitarPerspective: 'Keep your strumming hand in constant eighth-note motion. When you reach the chorus walkdown, pick the designated bass note squarely on beat 1 and beat 3, letting light brush strums fill the offbeats.',
    songwriterTakeaway: 'When you have a standard I - vi chord change, never jump abruptly between them. Walk the bass down step-by-step through the 7th degree (I → I/VII → vi). It instantly transforms a generic transition into an unforgettable hook.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The diatonic foundation enabling the seamless stepwise bass descent.' },
        { name: 'C Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic scale defining Fogerty\'s soulful vocal lines.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Pure major mode clarity without harmonic distortion or dissonance.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Core C, F, and G open triads.' },
        { name: 'Slash Chords', slug: 'slash', description: 'How C/B and Am/G create elegant voice leading in the lower register.' },
        { name: 'Minor Chords', slug: 'minor', description: 'The Am chord providing melancholy balance in the chorus.' },
      ],
    },
  },

  'heart-of-gold': {
    slug: 'heart-of-gold',
    songTitle: 'Heart of Gold',
    artist: 'Neil Young',
    key: 'G Major',
    category: 'modal-mixture',
    categoryLabel: 'Minor-to-Major Polarity & Folk-Rock Cadence',
    coreSecret: 'The Dark-to-Light Polarity Between Introspective E Minor and Radiant G Major',
    emotionalHook: 'The entire song hinges on the emotional tension between relative keys: E minor (the searching, vulnerable loner) and G major (the warm, elusive heart of gold). Starting on Em and resolving through C and D into G gives the listener the visceral sensation of stepping from shadow into sunlight.',
    romanProgression: 'vi - IV - V - I',
    chords: ['Em', 'C', 'D', 'G'],
    progressionExplanation: [
      'Em (vi): The introspective minor root capturing the wandering, melancholic narrator.',
      'C (IV): Subdominant lift adding hope and romantic aspiration.',
      'D (V): Dominant momentum driving toward resolution.',
      'G (I): Warm, ringing major resolution representing the elusive golden ideal.',
    ],
    voiceLeadingInsights: [
      'The intro riff on Em7 hammers the 2nd fret of the D string (E note) while keeping the B and high E open, blending minor darkness with bright overtones.',
      'Single-note bass runs on the 6th string (open E → 2nd fret F# → 3rd fret G) act as physical bridges connecting the minor verse to the major resolution.',
      'The chorus simplifies the harmonic motion down to Em - G - C - G, locking in a hypnotic circular singalong cadence.',
    ],
    guitarPerspective: 'Played on an acoustic dreadnought with relaxed, expressive right-hand dynamics. Hit the low strings hard on the downbeat, snap the hammer-ons crisply, and let the high strings ring unimpeded.',
    songwriterTakeaway: 'If your song is about searching or longing, do not start your verse on the tonic major (I). Start on the relative minor (vi) and hold back the tonic until the end of the phrase. The release will feel ten times more rewarding.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The overarching diatonic scale housing both the G tonic and Em relative minor.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The rugged acoustic scale shaping Neil Young\'s iconic intro riff and fills.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Natural minor mode establishing the melancholic mood of the verses.' },
        { name: 'Ionian Mode', slug: 'ionian', description: 'The radiant major mode providing the satisfying chorus release.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'How Em functions as the emotional engine of the song.' },
        { name: 'Major Chords', slug: 'major', description: 'Open G, C, and D shapes creating bright acoustic resonance.' },
      ],
    },
  },

  'fast-car': {
    slug: 'fast-car',
    songTitle: 'Fast Car',
    artist: 'Tracy Chapman',
    key: 'D Major',
    category: 'descending-bassline',
    categoryLabel: 'Parallel Harmonies & Intimate Dyads',
    coreSecret: 'The Unresolved Subdominant IVmaj7 Anchor Combined with High-Neck Parallel 3rds and 6ths',
    emotionalHook: 'By opening every loop on Cmaj7 (the IV chord relative to capo), the music never settles into a resting tonic. Instead, it feels suspended in mid-air—perfectly capturing the restlessness, hope, and vulnerability of wanting to leave everything behind.',
    romanProgression: 'IV - I - vi - V',
    chords: ['Cmaj7', 'G', 'Em', 'D'],
    progressionExplanation: [
      'Cmaj7 (IV): Floating subdominant chord starting the loop on an unresolved, hopeful question.',
      'G (I): Brief tonic grounding before the rhythm ascends the neck.',
      'Em (vi): Voiced high on frets 7 and 8, introducing delicate minor vulnerability.',
      'D (V): Voiced on frets 5 and 7, resolving the phrase and cycling immediately back to Cmaj7.',
    ],
    voiceLeadingInsights: [
      'The intro combines an open-position pinch with a sudden slide up to the 7th and 8th frets, creating an octave-spanning dynamic range on a solo acoustic guitar.',
      'Parallel intervals between the 5th and 2nd strings outline the chord roots and 3rds, stripping away dense clutter to leave pure, evocative counterpoint.',
      'When the chorus enters, the delicate two-finger dyads vanish, replaced by full, ringing open-chord strumming that unleashes pent-up emotional energy.',
    ],
    guitarPerspective: 'Capo on 2nd fret. Use your thumb on the bass strings (5 and 6) and your index/middle fingers on strings 2 and 3. Snap the hammer-on immediately on the 2nd string for Chapman\'s signature rhythmic bounce.',
    songwriterTakeaway: 'You don\'t need 10 chords to tell an epic story. A single hypnotic two-bar fingerpicked loop can sustain a 5-minute narrative if the voicings have melodic counterpoint and the chorus explodes with dynamic contrast.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'The sounding key of the song providing the bright, open harmonic foundation.' },
        { name: 'C Major Scale', slug: 'major', description: 'The shape-based diatonic scale utilized relative to the 2nd-fret capo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Major mode clarity that supports bittersweet, conversational folk lyrics.' },
      ],
      chords: [
        { name: 'Major Seventh Chords', slug: 'major-seventh', description: 'How Cmaj7 creates the signature wistful, floating atmosphere.' },
        { name: 'Major Chords', slug: 'major', description: 'Open G and D shapes used in the explosive campfire chorus strum.' },
      ],
    },
  },

  'to-her-door': {
    slug: 'to-her-door',
    songTitle: 'To Her Door',
    artist: 'Paul Kelly',
    key: 'G Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Diatonic Storytelling Cycles & Folk Cadence',
    coreSecret: 'The Unflinching I - V - vi - IV Narrative Engine Propelling an Australian Odyssey',
    emotionalHook: 'Paul Kelly mirrors the relentless hum of tires on the highway by cycling continuously through G - D - Em - C. The circular progression never halts, mirroring the protagonist\'s physical and emotional momentum as he journeys from Queensland down to Sydney seeking redemption.',
    romanProgression: 'I - V - vi - IV - I - V - I',
    chords: ['G', 'D', 'Em', 'C', 'G', 'D', 'G'],
    progressionExplanation: [
      'G (I): The grounded home base establishing the starting point of the journey.',
      'D (V): Dominant momentum pulling the traveler down the road.',
      'Em (vi): The relative minor introducing regret, memory, and sobriety.',
      'C (IV): Subdominant lift bringing hope and the promise of renewal.',
      'G - D - G (I - V - I): The crisp two-beat turnaround that snaps each stanza shut like a car door.',
    ],
    voiceLeadingInsights: [
      'Kelly anchors the progression with the high D and G notes (frets 3 on strings 1 and 2), creating an acoustic drone that rings through every single chord change.',
      'The chorus pivots to the dominant D chord on the downbeat ("He\'s got his daughter on his shoulders..."), shifting the focus from travel to revelation.',
      'The brief bridge shifts to Em - C - G - D, providing a brief minor pause before the relentless engine resumes.',
    ],
    guitarPerspective: 'Keep a driving, relaxed 108 BPM down-up strumming pattern with a solid backbeat accent on beats 2 and 4. Use the 4-finger G chord (3-2-0-0-3-3) to keep your ring and pinky fingers anchored for lightning-fast transitions.',
    songwriterTakeaway: 'When writing a long narrative ballad, resist the temptation to change chords erratically. A solid, cyclical 4-chord loop gives listeners an anchor so they can focus entirely on the characters and storytelling.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic foundation connecting all chords in the narrative progression.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic scale shaping Kelly\'s conversational vocal delivery.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Pure major mode storytelling resonance that resonates with generations of listeners.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open G, C, and D cowboy shapes.' },
        { name: 'Minor Chords', slug: 'minor', description: 'How the Em chord introduces reflective depth to the narrative.' },
      ],
    },
  },

  'wild-world': {
    slug: 'wild-world',
    songTitle: 'Wild World',
    artist: 'Cat Stevens',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Circle of Fifths & Descending Basslines',
    coreSecret: 'The Classical Descending Circle of Fifths Chained into an Unforgettable Single-Note Bass Walkdown',
    emotionalHook: 'The verse sweeps through a full Baroque-style descending circle of fifths (Am → D7 → G → Cmaj7 → F → Dm → E). When the chorus arrives, Stevens anchors the soaring vocal with an iconic quarter-note bass walkdown: C → B → A → G, making every repetition feel like a supportive, protective embrace.',
    romanProgression: 'i - IV7 - VII - IIImaj7 - VI - ii - V',
    chords: ['Am', 'D7', 'G', 'Cmaj7', 'F', 'Dm', 'E'],
    progressionExplanation: [
      'Am (i): Introspective minor home base.',
      'D7 (IV7): Secondary dominant pulling down toward G with jazzy color.',
      'G (VII): Step down relaxing tension into the relative major.',
      'Cmaj7 (IIImaj7): Bittersweet major seventh shimmer.',
      'F (VI) to Dm (ii): Gentle stepwise descent leading into the pre-chorus.',
      'E (V): Dominant major chord borrowed from A harmonic minor, driving urgently back to Am.',
    ],
    voiceLeadingInsights: [
      'Every chord in the verse is related by root movement of descending fifths (A → D → G → C → F → D → E).',
      'The single-note bass walkdown in the chorus (C fret 3 string 5 → B fret 2 string 5 → A open string 5 → G fret 3 string 6) provides a counter-melody underneath the vocal.',
      'The Cmaj7 chord adds a nostalgic, dreamy color by leaving the B string open, keeping the chord intimately voiced for acoustic guitar.',
    ],
    guitarPerspective: 'Keep your wrist loose and strum with a light, rhythmic bounce at 76 BPM. When you hit the chorus turnaround, dig into the single bass notes with authority so they ring out cleanly beneath the group vocals.',
    songwriterTakeaway: 'The circle of fifths is the most powerful harmonic progression in western music. Chaining fifths together keeps your listeners completely captivated because each chord feels like a logical, satisfying consequence of the previous one.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The overarching diatonic scale housing the chorus changes and bass walkdown.' },
        { name: 'A Harmonic Minor', slug: 'harmonic-minor', description: 'Provides the G# note that enables the major dominant E chord in the verse.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode defining the reflective mood of the verses.' },
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode that provides the uplifting chorus release.' },
      ],
      chords: [
        { name: 'Major Seventh Chords', slug: 'major-seventh', description: 'How Cmaj7 introduces sophisticated, dreamy folk color.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'How D7 functions as a secondary dominant in the verse.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Am and Dm functioning as the emotional anchors of the progression.' },
      ],
    },
  },

  'patience': {
    slug: 'patience',
    songTitle: 'Patience',
    artist: "Guns N' Roses",
    key: 'G Major',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Arpeggiated Ballads',
    coreSecret: 'The Bright Major II Chord (A Major) Acting as a Secondary Dominant to Create Soaring Romance',
    emotionalHook: 'Standard diatonic G major requires an A minor (ii) chord. By replacing it with a radiant A major (II) chord containing a non-diatonic C# note, GN\'R introduces a secondary dominant (V of V) that pushes with sweet, undeniable urgency into D major, turning a simple folk progression into an epic rock ballad.',
    romanProgression: 'IV - I - II - V',
    chords: ['C', 'G', 'A', 'D'],
    progressionExplanation: [
      'C (IV): Subdominant chord opening the phrase with hopeful, floating suspension.',
      'G (I): Warm, grounded tonic chord providing brief reassurance.',
      'A (II): Major second secondary dominant (V/V) introducing the bright C# leading tone.',
      'D (V): Dominant chord resolving the romantic tension and cycling back to C.',
    ],
    voiceLeadingInsights: [
      'The chromatic line inside the chords rises from C (in C chord) → B (in G chord) → C# (in A chord) → D (in D chord), creating a hidden ascending line.',
      'Slash embellishes the D chord with classic folk-rock suspensions: Dsus4 (pinky on fret 3 high E) releasing into standard D, then pulling off to Dsus2 (open high E).',
      'The anthemic outro shifts into a hypnotic two-chord stomp between D and G, simplifying the harmony to let the vocal chant dominate the room.',
    ],
    guitarPerspective: 'Three acoustic guitars interlock on the original track. Tuning down a half-step (Eb Standard) softens string tension, giving acoustic dreadnoughts a deeper, more resonant growl.',
    songwriterTakeaway: 'When your progression feels too predictable, try changing your minor ii chord into a major II chord. The resulting secondary dominant creates an immediate, romantic lift that listeners instantly fall in love with.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic framework housing the open cowboy chords.' },
        { name: 'A Mixolydian Mode', slug: 'mixolydian', description: 'Outlines the secondary dominant A major chord within the key of G.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major foundation providing sweet acoustic warmth.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open C, G, A, and D shapes creating rich acoustic resonance.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'How Dsus4 and Dsus2 create delicate melodic movement over static chords.' },
      ],
    },
  },

  'redemption-song': {
    slug: 'redemption-song',
    songTitle: 'Redemption Song',
    artist: 'Bob Marley & The Wailers',
    key: 'G Major',
    category: 'modal-mixture',
    categoryLabel: 'Folk-Reggae Diatonic Anthems',
    coreSecret: 'The Unadorned Pentatonic Intro Melody Channeling Century-Old Folk Spirituals into Modern Reggae',
    emotionalHook: 'Stripping away all electric reggae instrumentation, Marley delivers an intimate acoustic prayer. The solo single-note intro on strings 6, 5, and 4 draws directly from the G major pentatonic scale, evoking traditional Celtic and African folk laments before bursting into the communal anthem of freedom.',
    romanProgression: 'I - vi - IV - ii - V',
    chords: ['G', 'Em', 'C', 'Am', 'D'],
    progressionExplanation: [
      'G (I): The spiritual tonic anchor grounding the narrator.',
      'Em (vi): The reflective relative minor carrying the historical weight of captivity.',
      'C (IV): Subdominant chord representing hope, resilience, and endurance.',
      'Am (ii): Gentle supertonic chord softening the approach to the dominant.',
      'D (V): Dominant cadence leading back to the comforting tonic.',
    ],
    voiceLeadingInsights: [
      'The single-note intro outlines the notes G - A - B - D - E, avoiding leading tones to keep the melody timeless, archaic, and deeply resonant.',
      'The chorus progression incorporates a poignant dip into the relative minor: G - C - D - G - C - D - Em, heightening the emotional impact on the word "freedom".',
      'The relaxed 74 BPM tempo gives every word and chord room to breathe, creating a reverent, fireside intimacy.',
    ],
    guitarPerspective: 'Play the intro with confident alternate picking right behind the frets. When strumming the chords, keep your right hand relaxed and loose, incorporating subtle reggae-style thumb brushes on the bass strings.',
    songwriterTakeaway: 'The most powerful songs are often the simplest. An acoustic guitar and five basic open chords can deliver a world-changing message when the melody is pure and the lyrics carry raw, unfiltered truth.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic foundation connecting all open cowboy chords.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'The five-note scale forming the iconic single-note acoustic intro riff.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Pure major mode warmth that elevates the song into a universal spiritual anthem.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open G, C, and D shapes creating bright acoustic resonance.' },
        { name: 'Minor Chords', slug: 'minor', description: 'How Em and Am add emotional gravity and solemn reflection.' },
      ],
    },
  },

  'american-pie': {
    slug: 'american-pie',
    songTitle: 'American Pie',
    artist: 'Don McLean',
    key: 'G Major',
    category: 'secondary-dominants',
    categoryLabel: 'Storytelling Cycles & Secondary Dominants',
    coreSecret: 'The Dynamic Tempo Shift Married to a Circular I-IV-I-V Singalong with a Secondary Dominant A7 Turnaround',
    emotionalHook: 'The song begins as an intimate, free-time acoustic lament over the tragic loss of Buddy Holly. When the chorus suddenly kicks into a brisk 138 BPM gallop, the circular I - IV - I - V changes and urgent A7 turnaround turn personal tragedy into a cathartic, collective celebration of rock and roll history.',
    romanProgression: 'I - IV - I - V - vi - II7 - V',
    chords: ['G', 'C', 'G', 'D', 'Em', 'A7', 'D'],
    progressionExplanation: [
      'G (I): The buoyant, communal tonic home base.',
      'C (IV): Subdominant lift rising on the words "American Pie".',
      'D (V): Dominant momentum propelling the verse forward.',
      'Em (vi): The relative minor introducing tension during the storytelling verses.',
      'A7 (II7): Secondary dominant introducing the C# note, driving with urgent expectation into D.',
    ],
    voiceLeadingInsights: [
      'The verses cycle through G - Am - C - Am - Em - D with rapid lyrical delivery, creating an unstoppable rhythmic train.',
      'The A7 chord in the chorus ("Them good old boys were drinking whiskey and rye") breaks the diatonic major scale to inject bluesy rockabilly drive.',
      'The dynamic build from rubato folk picking into driving, full-volume strumming commands the attention of any room or campfire circle.',
    ],
    guitarPerspective: 'Keep your strumming arm moving in perpetual eighth-note motion from the wrist. At 138 BPM across an 8-minute song, relaxed mechanics are essential to avoid right-hand fatigue.',
    songwriterTakeaway: 'When writing an epic narrative song, use a fast, predictable chord loop during the verses so listeners can absorb the dense storytelling, then reward them with an irresistible, anthemic chorus turnaround.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The diatonic foundation housing the open cowboy chords.' },
        { name: 'G Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic scale driving the unforgettable singalong chorus hook.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Uplifting major mode storytelling clarity.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open G, C, and D shapes forming the core acoustic framework.' },
        { name: 'Seventh Chords', slug: 'seventh', description: 'How A7 functions as a secondary dominant driving into the cadence.' },
      ],
    },
  },

  'better-be-home-soon': {
    slug: 'better-be-home-soon',
    songTitle: 'Better Be Home Soon',
    artist: 'Crowded House',
    key: 'C Major',
    category: 'modal-mixture',
    categoryLabel: 'Diatonic Voice Leading & Modal Mixture',
    coreSecret: 'The Stepwise Diatonic Mediant (iii) Flow Culminating in a Dramatic Borrowed Flat-Seventh (Bb) Modal Mixture',
    emotionalHook: 'Neil Finn subverts the usual I - IV - V folk tropes by moving gently from C into Em (iii), introducing tender domestic vulnerability. Then in the bridge, the song suddenly veers into a borrowed Bb major (bVII) chord, unleashing an expansive emotional swell that makes the final chorus unforgettable.',
    romanProgression: 'I - iii - IV - V',
    chords: ['C', 'Em', 'F', 'G'],
    progressionExplanation: [
      'C (I): Warm, comforting tonic home base.',
      'Em (iii): Gentle mediant minor chord softening the melody with deep emotional sincerity.',
      'F (IV): Subdominant lift bringing hope and forward motion.',
      'G (V): Dominant cadence resolving cleanly back home to C.',
      'Bb (bVII): Borrowed Mixolydian flat-seven chord in the bridge creating a powerful, cinematic emotional surge.',
    ],
    voiceLeadingInsights: [
      'Moving from C to Em involves a subtle bass descent: C (5th string fret 3) → B (5th string fret 2) → E (6th string open), creating smooth, elegant voice leading.',
      'The chorus opens on the relative minor Am ("And it would sort of feel like..."), giving the vocal hook a bittersweet melancholy.',
      'The bridge chord sequence (Bb → F → C) utilizes a double plagal cadence (bVII → IV → I), a classic rock songwriting tool used by the Beatles and Crowded House.',
    ],
    guitarPerspective: 'Keep the strumming tender and intimate at 82 BPM. On the verses, brush lightly across the strings with a soft pick. When you reach the Bb chord in the bridge, strike the barre chord with full emotional commitment.',
    songwriterTakeaway: 'To elevate a standard major-key ballad into an enduring classic, use the mediant (iii) chord for intimate verses, and introduce the borrowed flat-seventh (bVII) chord in the bridge for an unforgettable emotional peak.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The diatonic foundation connecting the verse and chorus chords.' },
        { name: 'C Mixolydian Mode', slug: 'mixolydian', description: 'The source of the borrowed Bb flat-seven chord in the bridge.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Pure major mode storytelling resonance.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open C, F, and G chords forming the foundational framework.' },
        { name: 'Minor Chords', slug: 'minor', description: 'How Em and Am add tender emotional shading.' },
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Fretting the Bb major barre chord cleanly at the 1st fret.' },
      ],
    },
  },

  'throw-your-arms-around-me': {
    slug: 'throw-your-arms-around-me',
    songTitle: 'Throw Your Arms Around Me',
    artist: 'Hunters & Collectors',
    key: 'E Major',
    category: 'modal-mixture',
    categoryLabel: 'Diatonic Major Resonance & Campfire Unity',
    coreSecret: 'The Unstoppable Communal Power of the Pure Diatonic I - IV - V Cadence with Ringing Drone Treble Strings',
    emotionalHook: 'Mark Seymour strips away all rock excess to deliver one of Australia\'s greatest anthems using only three basic chords: E, A, and B. By keeping the high B and high E strings ringing open across every change, the guitar creates a shimmering drone ceiling that gives the simple chord changes an almost spiritual singalong resonance.',
    romanProgression: 'I - IV - V - I',
    chords: ['E', 'A', 'B', 'E'],
    progressionExplanation: [
      'E (I): Grounded, resonant home tonic with full 6-string acoustic resonance.',
      'A (IV): Subdominant lift injecting warm optimism and melodic tenderness.',
      'B (V): Dominant chord introducing just enough tension to pull the melody home.',
      'Open String Drones: The open B and high E strings vibrate continuously throughout the progression.',
    ],
    voiceLeadingInsights: [
      'The three foundational primary triads (I, IV, V) contain every single note in the E major scale.',
      'Ringing high strings create an acoustic bed that accommodates singers of any vocal range.',
      'The rhythmic dynamic expands from quiet storytelling in the verses to full-throated communal shouting in the chorus.',
    ],
    guitarPerspective: 'Play with a relaxed, swinging right wrist at 104 BPM. Lock your strumming into beats 2 and 4 to create a hypnotic backbeat sway that invites crowds to join in.',
    songwriterTakeaway: 'You do not need complex jazz harmony to write a song that lasts for generations: a pristine three-chord major progression with sincere vocal delivery can move millions.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major Scale', slug: 'major', description: 'The complete diatonic framework underlying the E, A, and B chords.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Pure major mode storytelling warmth.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open E, A, and B shapes.' },
      ],
    },
  },

  'flame-trees': {
    slug: 'flame-trees',
    songTitle: 'Flame Trees',
    artist: 'Cold Chisel',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Stepwise Descending Basslines & Nostalgia',
    coreSecret: 'The Bittersweet Stepwise Bass Walkdown (C → B → A) Capturing Australian Rural Longing',
    emotionalHook: 'Don Walker and Jimmy Barnes evoke the quiet melancholy of returning to a fading hometown through a classic descending bassline: C → C/B → Am → F. By stepping down along the 5th string while keeping the upper notes of the C chord anchored, the music mirrors the narrator\'s reflective sigh before opening into the soaring catharsis of the chorus.',
    romanProgression: 'I - I/7 - vi - IV',
    chords: ['C', 'C/B', 'Am', 'F', 'G'],
    progressionExplanation: [
      'C (I): Warm, comforting tonic home base.',
      'C/B (I/7): Inversion passing chord providing the descending bass step on the 5th string 2nd fret.',
      'Am (vi): Submediant minor chord introducing introspective wistfulness.',
      'F (IV): Subdominant chord offering hope and resolution.',
      'G (V) in Chorus: Dominant push propelling the famous chorus hook.',
    ],
    voiceLeadingInsights: [
      'The 5th-string bass walkdown (C fret 3 → B fret 2 → A open) provides irresistible stepwise melodic pull.',
      'The stationary note C on the 2nd string acts as a common-tone anchor connecting the first three chords.',
      'The chorus shifts to G → F → C (V - IV - I), replacing introspection with soaring, open-throated rock release.',
    ],
    guitarPerspective: 'Keep your right hand light and spacious at 72 BPM. Ensure the B bass note on the 5th string 2nd fret rings clearly without accidentally muting the open G string.',
    songwriterTakeaway: 'When writing nostalgic or reflective lyrics, use a stepwise descending bassline under anchored upper melody tones to instantly evoke bittersweet memory.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The melodic foundation of the acoustic verses.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Warm major storytelling clarity.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash-chords', description: 'C/B inversion creating smooth stepwise bass transitions.' },
      ],
    },
  },

  'my-happiness': {
    slug: 'my-happiness',
    songTitle: 'My Happiness',
    artist: 'Powderfinger',
    key: 'D Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Drop D Resonant Harmony & Melancholic Rock',
    coreSecret: 'Drop D Low-End Sub-Bass Combined with Melodic Upper Chord Suspensions',
    emotionalHook: 'Powderfinger takes modern alternative rock guitar into emotional territory by tuning the 6th string down to D. The deep open low D provides an immovable acoustic anchor, allowing sweet suspended chords (Dsus2, Dsus4, Asus4) to shimmer on top with massive low-end weight, balancing the melancholic Bm with uplifting D major optimism.',
    romanProgression: 'I - IV - vi - V',
    chords: ['D', 'G', 'Bm', 'A'],
    progressionExplanation: [
      'D (I): Resonant tonic chord fortified by the rumbling open 6th string D.',
      'G (IV): One-finger Drop D barre at fret 5 offering buoyant relief.',
      'Bm (vi): Relative minor chord introducing melancholic introspection.',
      'A (V): Dominant chord pulling the cycle smoothly back to tonic D.',
    ],
    voiceLeadingInsights: [
      'Tuning the low E string down to D extends the acoustic guitar\'s frequency range into deep bass register.',
      'Ringing high E and B strings throughout chord changes create a lush, modern atmospheric wall of sound.',
      'The syncopated 16th-note rhythm accents give the slow 100 BPM tempo driving forward momentum.',
    ],
    guitarPerspective: 'Tune your 6th string down one whole step to D. Use a single index finger to fret the 5th-fret G chord across the bottom three strings, letting treble strings ring open.',
    songwriterTakeaway: 'Drop D is not just for heavy metal riffs: it adds majestic acoustic body and open-string resonance to emotional pop-rock chord progressions.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'The foundation of the chord changes and vocal melody.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The overarching major mode resonance.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'Dsus2 and Dsus4 color extensions.' },
      ],
    },
  },

  'solid-rock': {
    slug: 'solid-rock',
    songTitle: 'Solid Rock',
    artist: 'Goanna',
    key: 'A Minor',
    category: 'mixolydian-dorian',
    categoryLabel: 'Dorian Modal Mixture & Tribal Rhythm',
    coreSecret: 'The Modal Shift from Somber Aeolian Natural Minor to Soaring Dorian Major IV (D)',
    emotionalHook: 'Shane Howard crafts an unforgettable Australian political anthem by driving a percussive, tribal rhythm in A minor. While the verses cycle through somber Aeolian minor chords (Am - G - F), the chorus erupts with a major D chord: the signature Dorian raised 6th (F# note), transforming historical grief into defiant, soaring pride.',
    romanProgression: 'i - ♭VII - ♭VI - ♭VII (Verse) | i - ♭III - IV - i (Chorus)',
    chords: ['Am', 'G', 'F', 'C', 'D'],
    progressionExplanation: [
      'Am (i): Haunting tonic minor establishing urgent, driving momentum.',
      'G (♭VII) to F (♭VI): Classic Andalusian folk descent conveying historical tragedy.',
      'C (♭III): Relative major bridge lifting the vocal register.',
      'D (IV): The triumph of the chorus — a major IV chord introducing the bright Dorian F# note.',
    ],
    voiceLeadingInsights: [
      'The alternation between F natural in the verse and F# in the chorus is the key harmonic pivot of the song.',
      'Percussive palm muting on beats 2 and 4 mirrors the rhythmic pulse of indigenous clapping sticks.',
      'The relentless 112 BPM tempo creates hypnotic urgency that propels the vocal message.',
    ],
    guitarPerspective: 'Lock in with a firm right-hand attack at 112 BPM. In the chorus, lean heavily into the open D major chord to let the Dorian color soar over the band.',
    songwriterTakeaway: 'Use natural minor (Aeolian) to convey darkness or sorrow in the verses, then switch to Dorian (major IV chord) in the chorus to inject triumphant defiance and hope.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Dorian Mode', slug: 'dorian', description: 'Supplies the bright major IV (D) chord.' },
        { name: 'A Natural Minor', slug: 'minor', description: 'Underpins the haunting verse changes.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The mode of rock defiance and groove.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Open Am and F barre chords.' },
      ],
    },
  },

  'dust-in-the-wind': {
    slug: 'dust-in-the-wind',
    songTitle: 'Dust in the Wind',
    artist: 'Kansas',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Travis Picking & Inner Voice Suspensions',
    coreSecret: 'Travis-Picked Alternating Basslines Anchoring Shifting Second-String Suspensions',
    emotionalHook: 'Kerry Livgren turned a fingerpicking warm-up exercise into a worldwide philosophical masterpiece. While the thumb keeps an unwavering alternating bass pulse on strings 5 and 4, the fretting fingers cycle through C → Cmaj7 → Cadd9 → C, creating delicate chromatic and stepwise voice leading on the B string that evokes the fleeting nature of life.',
    romanProgression: 'I - Imaj7 - Iadd9 - I - vi(sus2) - vi(sus4) - vi',
    chords: ['C', 'Cmaj7', 'Cadd9', 'Am', 'Asus2', 'Asus4', 'Dm', 'G'],
    progressionExplanation: [
      'C to Cmaj7 to Cadd9: Moving 2nd-string voice leading (C → B → D → C) over an anchored C bass note.',
      'Am to Asus2 to Asus4: Replicating the same voice leading over the relative minor Am shape.',
      'Dm (ii) to G (V): Classic pre-dominant to dominant turnaround into the chorus.',
      'Alternating Thumb Bass: Strict fifth-to-fourth string alternating bassline maintaining constant pulse.',
    ],
    voiceLeadingInsights: [
      'The inner voice movement on string 2 creates counter-melodies against the static alternating bass.',
      'The shift from bright C major suspensions into somber A minor suspensions mirrors the lyrical reflection.',
      'The chorus opens out of the intricate Travis pattern into sweeping strummed chords for maximum emotional contrast.',
    ],
    guitarPerspective: 'Automate your thumb on strings 5 and 4 first. Keep the right wrist arched and relaxed so the index and middle fingers can pluck strings 3 and 2 with absolute dynamic equality.',
    songwriterTakeaway: 'Keep your bassline steady and simple while moving individual inner chord tones up and down by half steps to create mesmerizing harmonic textures.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The diatonic foundation for the C and Am suspensions.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The serene major mode clarity.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'Cmaj7, Cadd9, Asus2, and Asus4 voicings.' },
      ],
    },
  },

  'the-boxer': {
    slug: 'the-boxer',
    songTitle: 'The Boxer',
    artist: 'Simon & Garfunkel',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Folk Alternating Bass & Walking Transitions',
    coreSecret: 'Rolling Nashville Alternating Bassline Connecting Cyclic Diatonic Chords with Walking Bass Pickups',
    emotionalHook: 'Paul Simon uses a rolling fingerstyle groove with a capo on fret 2 (sounding in D major) to tell the epic saga of a lonely fighter in New York. The alternating thumb on the 5th and 4th strings provides continuous locomotive forward momentum, while stepwise walking bass notes on strings 5 and 6 smoothly glue together the C, Am, G, and F chords.',
    romanProgression: 'I - vi - V - I - vi - V - IV - I',
    chords: ['C', 'Am', 'G', 'C', 'Am', 'G', 'F', 'C'],
    progressionExplanation: [
      'C (I): Warm, steady tonic home base with alternating bass.',
      'Am (vi): Minor submediant introducing lonely urban vulnerability.',
      'G (V): Dominant chord propelling the narrative forward.',
      'F (IV): Subdominant chord providing temporary resolution and warmth.',
      'Em (iii) in Chorus: Haunting mediant minor framing the legendary \'Lie-la-lie\' vocal hook.',
    ],
    voiceLeadingInsights: [
      'Walking bass transitions (C → B → A and A → B → C) connect cowboy chords into an unbroken melodic stream.',
      'The capo on fret 2 brightens the acoustic timbre, allowing open-string ring to cut through dense studio percussion.',
      'The chorus introduces massive orchestral snare explosions that dynamically amplify the gentle acoustic foundation.',
    ],
    guitarPerspective: 'Capo on the 2nd fret. Maintain relaxed right-hand fingerpicking with thumb alternating between strings 5 and 4. Insert the walking bass notes on beats 4-and with smooth fluidity.',
    songwriterTakeaway: 'Use walking bass transitions between standard open folk chords to keep an acoustic arrangement moving forward like a traveler on a journey.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'Diatonic framework relative to capo 2.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Traditional American folk ballad resonance.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open C, Am, G, and Em shapes.' },
      ],
    },
  },

  'fire-and-rain': {
    slug: 'fire-and-rain',
    songTitle: 'Fire and Rain',
    artist: 'James Taylor',
    key: 'C Major',
    category: 'modal-mixture',
    categoryLabel: 'Clawhammer Embellishments & Modal Folk',
    coreSecret: 'A-Shape Open Suspensions and Minor v7 (Em7) Introducing Bluesy Intimacy to Folk Balladry',
    emotionalHook: 'James Taylor places a capo on the 3rd fret and uses open A major shapes to share profound grief and recovery. Instead of moving to dominant E, Taylor moves to an unexpected minor v7 chord (Em7 relative to capo), injecting a fragile, blues-tinted bittersweetness that captures heartache far more honestly than standard pop progressions.',
    romanProgression: 'I - v7 - IV - I',
    chords: ['A', 'Em7', 'D', 'Bm', 'G'],
    progressionExplanation: [
      'A (I): Tonic major enriched with open 2nd-string and 3rd-fret hammer-ons.',
      'Em7 (v7): Minor fifth chord creating a haunting, blues-inflected bittersweet emotion.',
      'D (IV): Subdominant chord providing melodic warmth and redemption.',
      'G (♭VII) in Chorus: Borrowed Mixolydian chord adding dramatic weight to \'I\'ve seen fire and I\'ve seen rain\'.',
    ],
    voiceLeadingInsights: [
      'Hammering on from open strings to chord tones allows Taylor to accompany his conversational vocal lines with counter-melodies.',
      'The minor v7 chord (Em7) avoids classical dominant tension, maintaining an intimate, vulnerable emotional landscape.',
      'The borrowed flat-seven chord (G) in the chorus opens up the harmonic sky during the climax.',
    ],
    guitarPerspective: 'Capo 3rd fret. Pluck with bare finger pads rather than picks for Taylor\'s signature warm, woody acoustic tone. Master the simultaneous hammer-on on strings 3 and 2 on the A chord.',
    songwriterTakeaway: 'Substituting a minor v chord for the usual major V dominant removes aggressive tension and creates a tender, confessional atmosphere ideal for heartfelt lyrics.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The foundation for the A-shape fingerstyle voicings.' },
        { name: 'A Mixolydian Mode', slug: 'mixolydian', description: 'Provides the flat-seventh G note for chorus modal borrowing.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The source of bluesy folk vulnerability.' },
      ],
      chords: [
        { name: 'Seventh Chords', slug: 'seventh', description: 'Em7 and suspended fourth shapes.' },
      ],
    },
  },

  'angie': {
    slug: 'angie',
    songTitle: 'Angie',
    artist: 'The Rolling Stones',
    key: 'A Minor',
    category: 'secondary-dominants',
    categoryLabel: 'Harmonic Minor Tension & Suspended Ornaments',
    coreSecret: 'Classical Harmonic Minor Dominant (E7) Clashing with Suspended Fourth Acoustic Hammer-Ons',
    emotionalHook: 'Keith Richards crafts the Rolling Stones\' most poignant acoustic ballad by fusing Spanish and Baroque minor harmony. Moving from somber Am through a stark harmonic minor dominant E7 with its sharp leading tone G#, Richards decorates each chord with fluid pinky hammer-ons (Asus4 and E7sus4) that mimic weeping vocal sighs.',
    romanProgression: 'i - V7 - ♭VII - ♭VI - ♭III',
    chords: ['Am', 'E7', 'G', 'F', 'C', 'Dm'],
    progressionExplanation: [
      'Am (i): Somber tonic minor chord conveying tragic heartbreak.',
      'E7 (V7): Harmonic minor dominant featuring the G# leading tone for classical tension.',
      'G (♭VII) to F (♭VI): Descending diatonic chords softening the mood with rock ballad warmth.',
      'C (♭III): Relative major offering fleeting rays of emotional sunshine.',
    ],
    voiceLeadingInsights: [
      'The G# note on the 3rd string of E7 creates irresistible tension that yearns to resolve up a half step to A.',
      'The suspended fourth hammer-ons (D note onto Asus4, A note onto E7sus4) introduce momentary dissonance before resolving.',
      'The descending bass motion (A → G → F → E) creates a weeping harmonic contour throughout the verses.',
    ],
    guitarPerspective: 'Keep your 72 BPM tempo steady and measured. Use your pinky finger to execute the quick hammer-on on the 2nd string 3rd fret for Asus4, and let the open strings ring behind it.',
    songwriterTakeaway: 'Use the major dominant (V7) in a minor key to create dramatic, operatic tension, and soften it with descending natural minor chords to maintain rock intimacy.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Harmonic Minor', slug: 'harmonic-minor', description: 'Supplies the sharp leading tone G# in the dominant E7 chord.' },
        { name: 'A Natural Minor', slug: 'minor', description: 'The framework for the descending verse progression.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Somber minor mode emotional depth.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'Asus4 and E7sus4 embellishment shapes.' },
      ],
    },
  },

  'drive': {
    slug: 'drive',
    songTitle: 'Drive',
    artist: 'Incubus',
    key: 'E Minor',
    category: 'mixolydian-dorian',
    categoryLabel: 'Dorian Funk-Rock & Jazz Chord Extensions',
    coreSecret: 'E Dorian Modal Color Interacting with Extended Ninth and Seventh Voicings (Em9, Cadd9, A7sus4)',
    emotionalHook: 'Mike Einziger transformed acoustic rock by incorporating sophisticated jazz voicings and funk syncopation. Instead of plain power chords, \'Drive\' floats between Em9, Cadd9, and A7sus4. The A7sus4 chord introduces a natural C# note — the hallmark of E Dorian — contrasting with the natural C in Cadd9 to create a vibrant, ever-shifting harmonic climate.',
    romanProgression: 'i9 - ♭VIadd9 - IV7sus4 - ♭VImaj7',
    chords: ['Em9', 'Cadd9', 'A7sus4', 'Cmaj7'],
    progressionExplanation: [
      'Em9 (i9): Minor tonic chord enriched with the major 9th (F#) for a spacious, lush modern texture.',
      'Cadd9 (♭VIadd9): Submediant chord providing emotional optimism and bright upper harmonics.',
      'A7sus4 (IV7sus4): Subdominant chord introducing the Dorian raised 6th (C#) for signature jazz-funk sophistication.',
      'Cmaj7 (♭VImaj7): Major seventh color providing smooth voice leading back into Em9.',
    ],
    voiceLeadingInsights: [
      'The harmonic tension hinges on the oscillation between C natural (in Cadd9 and Cmaj7) and C# (in A7sus4).',
      'High open strings chime continuously across the chords, acting as stationary drone anchors.',
      'The 16th-note percussive fret mutes (chucks) give the slow 90 BPM tempo irresistible rhythmic bounce.',
    ],
    guitarPerspective: 'Keep your right wrist in continuous 16th-note pendulum motion at 90 BPM. Release fret-hand finger pressure on unaccented beats to create crisp percussive chucks.',
    songwriterTakeaway: 'Introduce an unexpected Dorian IV chord (like A7sus4 in E minor) into a minor progression to instantly elevate the sound from moody grunge into soulful, sophisticated funk-rock.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Dorian Mode', slug: 'dorian', description: 'Supplies the bright C# color in A7sus4.' },
        { name: 'E Natural Minor', slug: 'minor', description: 'The tonal foundation for Em9 and Cadd9.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The mode of sophisticated rock and funk.' },
      ],
      chords: [
        { name: 'Ninth Chords', slug: 'extended-chords', description: 'Lush Em9 and Cadd9 voicings.' },
      ],
    },
  },

  'about-a-girl': {
    slug: 'about-a-girl',
    songTitle: 'About a Girl',
    artist: 'Nirvana',
    key: 'E Minor',
    category: 'modal-mixture',
    categoryLabel: 'Beatles-Grunge Fusion & Abrupt Modulation',
    coreSecret: 'Hypnotic Two-Chord (Em ↔ G) Oscillation Colliding with an Abrupt Chromatic Chorus Modulation',
    emotionalHook: 'Kurt Cobain famously spent an afternoon listening to \'Meet the Beatles\' on repeat before penning \'About a Girl\'. The song opens with an infectious, minimalist open Em to G acoustic strum, but suddenly detours in the chorus into sharp chromatic barre chords (C#m - G# - F#) before resolving through C and D, proving that raw grunge and Beatles pop melodicism share the exact same DNA.',
    romanProgression: 'i - ♭III (Verse) | vi - III - II - IV - ♭VI - ♭VII (Chorus)',
    chords: ['Em', 'G', 'C#m', 'G#', 'F#', 'A', 'C', 'D'],
    progressionExplanation: [
      'Em to G (i - ♭III): Effortless open cowboy chord oscillation with bouncy, syncopated strumming.',
      'C#m to G# (vi - III): Dramatic chromatic modulation in the chorus introducing sudden grunge angst.',
      'F# to A (II - IV): Rising melodic movement building urgency.',
      'C to D (♭VI - ♭VII): Classic rock double-plagal cadence resolving triumphantly back to open Em.',
    ],
    voiceLeadingInsights: [
      'Tuning down one half-step (Eb Ab Db Gb Bb Eb) relaxes string tension, giving acoustic strums punchy, dark low-end warmth.',
      'The verse relies purely on the contrast between the low minor tonic Em and the bright upper ringing strings of open G.',
      'The chorus chord shift to C#m is unexpected, keeping listeners on the edge of their seats before returning to the friendly verse groove.',
    ],
    guitarPerspective: 'Tune down a half-step. Keep your right hand loose in a continuous 130 BPM eighth-note rhythm, emphasizing the heavy bass downstrokes on beat 1 and open treble upstrokes.',
    songwriterTakeaway: 'You don\'t need a dozen chords to write a great verse: oscillate between two strong open chords (i and ♭III) and save your surprising chord changes for the chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor', slug: 'minor', description: 'Underpins the foundational open Em to G verse changes.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode behind the verse.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open Em, G, C, and D shapes.' },
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Punchy C#m and G# chorus barres.' },
      ],
    },
  },

  'plush': {
    slug: 'plush',
    songTitle: 'Plush',
    artist: 'Stone Temple Pilots',
    key: 'G Major',
    category: 'descending-bassline',
    categoryLabel: 'Bossa-Rock Chromatic Descent & Modal Substitution',
    coreSecret: 'Dean DeLeo\'s Chromatic Bass Walkdown (G → F# → F → E → Eb) Anchored by High Open String Drones',
    emotionalHook: 'Dean DeLeo brought bossa-nova and jazz sophistication to 90s grunge. In the acoustic arrangement of \'Plush\', the bassline walks down chromatically one fret at a time (G → F# → F → E) before landing on a sublime borrowed flat-sixth chord: Ebmaj7. Ringing open G and B strings throughout the descent create rich chord extensions that sound simultaneously dark, elegant, and monumental.',
    romanProgression: 'I - V6 - ♭VII - IV6 - ♭VImaj7',
    chords: ['G', 'D/F#', 'F', 'C/E', 'Ebmaj7', 'D', 'C'],
    progressionExplanation: [
      'G (I): Warm tonic chord anchored by ringing open high strings.',
      'D/F# (V6): First inversion dominant chord initiating the descending bass step.',
      'F (♭VII): Borrowed Mixolydian chord continuing the chromatic root descent.',
      'C/E (IV6): Inverted subdominant chord stepping smoothly toward Eb.',
      'Ebmaj7 (♭VImaj7): The emotional climax — a lush modal interchange chord adding haunting beauty.',
    ],
    voiceLeadingInsights: [
      'The chromatic root movement across frets 3-2-1-0-6 on strings 6 and 5 creates irresistible downward pull.',
      'The open 3rd (G) and 2nd (B) strings ring continuously as a static pedal tone, generating natural 7th and 9th chord colors.',
      'The heavy chorus (D → C → G → Eb → F) replaces delicate walkdowns with full power chord drives.',
    ],
    guitarPerspective: 'Play at a measured 72 BPM. Use your thumb over the top of the neck for the low bass notes (G, F#, F) to keep fingers free for ringing upper chord tones.',
    songwriterTakeaway: 'Try walking your bassline down chromatically under stationary open drone strings, and substitute a major 7th chord on the flat-sixth (♭VImaj7) for breathtaking emotional color.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The foundation of the G and D/F# chords.' },
        { name: 'G Mixolydian Mode', slug: 'mixolydian', description: 'The source of the flat-seventh F major chord.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Primary major mode foundation.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash-chords', description: 'D/F# and C/E inversions driving the bassline.' },
        { name: 'Major Seventh Chords', slug: 'seventh', description: 'The lush Ebmaj7 modal interchange chord.' },
      ],
    },
  },

  'yellow': {
    slug: 'yellow',
    songTitle: 'Yellow',
    artist: 'Coldplay',
    key: 'B Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Anchored Drone Strings & Expansive Arena Acoustic',
    coreSecret: 'Permanent High Open String Drones (D and G) Creating an Expansive Acoustic Wall of Sound',
    emotionalHook: 'Coldplay created a stadium-filling acoustic anthem by utilizing constant drone harmony. With a capo on the 4th fret (playing in G shapes), guitarists lock their 3rd and 4th fingers onto the 3rd frets of strings 1 and 2 throughout every chord change (G, Cadd9, Em7, D). This keeps the same two high ringing notes chiming continuously, evoking boundless open night skies.',
    romanProgression: 'I - V - IV - I',
    chords: ['G', 'D', 'Cadd9', 'Em7'],
    progressionExplanation: [
      'G (I): Warm, radiant tonic chord grounded by the high drone strings.',
      'D (V): Dominant chord propelling the phrase forward with bright energy.',
      'Cadd9 (IV): Subdominant chord introducing sweeping melodic optimism and emotional vulnerability.',
      'Em7 (vi): Submediant minor chord in the chorus adding wistful, intimate depth.',
    ],
    voiceLeadingInsights: [
      'Anchoring fingers 3 and 4 eliminates chord transition clumsiness and creates an unbroken acoustic sustain bed.',
      'The continuous high pedal tones (sounding F# and B with Capo 4) unify major, minor, and dominant chords into a single harmonic tapestry.',
      'The dynamic build from a lone acoustic guitar into full band arena rock creates overwhelming emotional impact.',
    ],
    guitarPerspective: 'Capo 4th fret. Never lift your ring and pinky fingers from the 1st and 2nd strings. Keep your right hand sweeping loosely at 88 BPM, letting the acoustic guitar fill the entire room.',
    songwriterTakeaway: 'Lock two fingers onto the top strings to act as permanent drone anchors while moving your bass fingers through I, IV, vi, and V for an instantly expansive, anthemic sound.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'Diatonic scale relative to Capo 4.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Expansive major mode stadium clarity.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Anchored G, Cadd9, and Em7 shapes.' },
      ],
    },
  },

  'over-the-hills-and-far-away': {
    slug: 'over-the-hills-and-far-away',
    songTitle: 'Over the Hills and Far Away',
    artist: 'Led Zeppelin',
    key: 'G Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Celtic Folk Hammer-Ons & Explosive Rock Dynamics',
    coreSecret: 'Open-String Celtic Pull-Off Embellishments Exploding into Heavy Blues-Rock Power',
    emotionalHook: 'Jimmy Page merges mystical British folk with volcanic hard rock. The song begins with intricate hammer-ons and pull-offs on the low open strings, evoking medieval English minstrels, before John Bonham\'s thunderous drums enter and Page\'s Gibson Les Paul transforms the gentle acoustic motif into an earth-shaking rock anthem.',
    romanProgression: 'I - V6 - vi7 - IV - V - I (Acoustic) | II - I - V (Heavy Section)',
    chords: ['G', 'D/F#', 'Em7', 'C', 'D', 'A'],
    progressionExplanation: [
      'Open String Riffing: Rapid hammer-ons and pull-offs on strings 4, 3, and 2 revolving around open G.',
      'G to D/F# to Em7: Stepwise bass descent connecting the folk acoustic verses.',
      'C (IV) to D (V): Diatonic resolution driving the acoustic phrase home.',
      'A major (II) in Heavy Section: Secondary dominant adding swagger and raw hard-rock punch.',
    ],
    voiceLeadingInsights: [
      'Pulling off to open strings allows rapid melodic phrasing with natural acoustic chime and sustain.',
      'The dynamic jump from delicate acoustic fingerstyle to overdriven Les Paul creates one of the most thrilling transitions in rock history.',
      'The major II chord (A) in the rock section acts as a secondary dominant (V/V), lifting the harmonic energy sky-high.',
    ],
    guitarPerspective: 'Keep your pull-offs crisp and decisive at 96 BPM. Ensure the open strings ring out at equal volume to the fretted notes. When the heavy section hits, dig in with aggressive downstrokes.',
    songwriterTakeaway: 'Contrast a delicate, pastoral acoustic intro with an explosive heavy rock chorus to double the perceived power and emotional scope of your song.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'The foundation of the acoustic hammer-on intro.' },
        { name: 'G Mixolydian Mode', slug: 'mixolydian', description: 'Supplies the Celtic modal flavor in Page\'s acoustic flourishes.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The mode of classic British folk-rock.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open G, C, D, and Em7 shapes.' },
      ],
    },
  },

  'space-oddity': {
    slug: 'space-oddity',
    songTitle: 'Space Oddity',
    artist: 'David Bowie',
    key: 'C Major',
    category: 'modal-mixture',
    categoryLabel: 'Minor iv Modal Borrowing & Cosmic Isolation',
    coreSecret: 'The Sudden Collapse of Subdominant F into Borrowed Minor iv (Fm) Creating Zero-Gravity Weightlessness',
    emotionalHook: 'David Bowie paints Major Tom\'s ascent into the cosmos through harmonic storytelling. After launching through bright C and ascending secondary dominant E7 into F major, the music suddenly collapses into an unexpected F minor (iv) chord. By lowering the A natural to an Ab, Bowie removes all harmonic gravity, plunging the listener into the eerie, awe-inspiring silence of deep space.',
    romanProgression: 'I - V7/vi - IV - iv - I',
    chords: ['C', 'Em', 'Am', 'D7/F#', 'E7', 'F', 'Fm'],
    progressionExplanation: [
      'Fmaj7 to Em: The quiet, hovering intro oscillation establishing cosmic distance.',
      'C to Em to Am: Earthbound verse storytelling with walking basslines.',
      'E7 (V7/vi): Secondary dominant chord building ascending liftoff anticipation.',
      'F (IV) to Fm (iv): The genius modal interchange: major IV collapses into minor iv, inducing weightlessness.',
      'C (I): Warm return to the home tonic as Major Tom gazes down upon planet Earth.',
    ],
    voiceLeadingInsights: [
      'The chromatic line descent (A in F major → Ab in F minor → G in C major) is the definitive voice leading motif of the song.',
      'The minor iv chord (Fm) borrows from the parallel C natural minor scale, injecting profound tragic wonder.',
      'The 12-string acoustic strumming provides wide acoustic presence that complements the analog Mellotron strings.',
    ],
    guitarPerspective: 'Keep your tempo measured and theatrical at 68 BPM. On the liftoff sequence (C → E7 → F → Fm → C), lift your 2nd finger cleanly from F to Fm so the Ab note rings with pristine clarity.',
    songwriterTakeaway: 'When your lyrics describe isolation, wonder, or drifting into the unknown, move from major IV to minor iv (F to Fm in C major) to instantly create a zero-gravity emotional sigh.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The home diatonic framework.' },
        { name: 'C Natural Minor Scale', slug: 'minor', description: 'The parallel minor scale supplying the borrowed Fm chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The parallel minor mode providing the Ab color note.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Fretting F major and F minor at the 1st fret.' },
        { name: 'Secondary Dominants', slug: 'secondary-dominants', description: 'How E7 builds liftoff tension.' },
      ],
    },
  },

  'khe-sanh': {
    slug: 'khe-sanh',
    songTitle: 'Khe Sanh',
    artist: 'Cold Chisel',
    category: 'key-modulation',
    categoryLabel: 'Emotional Key Modulations',
    coreSecret: 'The Relative Minor Turnaround Pivot (I - IV - I - V into vi - IV - I - V - I)',
    emotionalHook: 'Don Walker builds Australian rock\'s defining narrative anthem out of just four chords in A major. For the first two lines of every stanza, the harmony stays strictly in bright major territory (A - D - A - E), projecting stoic resilience. Then, at the exact third line where the narrator\'s memories or disillusionment break through, the progression plunges into the relative minor F#m (vi), darkening the storytelling before resolving home through D and E to A.',
    romanProgression: 'I - IV - I - V - vi - IV - I - V - I',
    chords: ['A', 'D', 'A', 'E', 'F#m', 'D', 'A', 'E', 'A'],
    progressionExplanation: [
      'A (I) to D (IV): Open-highway major chords establishing the restless country-rock travelogue.',
      'A (I) to E (V): Half-cadence on the dominant E major, leaving the first half of the stanza hanging.',
      'F#m (vi): Sudden relative-minor drop on line 3, injecting emotional weight and trauma beneath Jimmy Barnes\'s vocals.',
      'D (IV) - A (I) - E (V) - A (I): Classic pub-rock authentic cadence resolving the verse.',
    ],
    voiceLeadingInsights: [
      'Moving from E major (E-G#-B) into F#m (F#-A-C#) acts as a deceptive-style step up the scale (V to vi), surprising the ear.',
      'F#m shares two common tones (A and C#) with the tonic A major triad, making the shift feel organic yet poignant.',
      'In the final instrumental break, shifting the exact same chord loop into a double-time country sprint turns reflection into catharsis.',
    ],
    guitarPerspective: 'Target the root bass notes cleanly on beat 1 (open A string for A, open D string for D, 6th-string 2nd fret for F#m) before brushing down-up strums across the treble strings.',
    songwriterTakeaway: 'Save your relative minor (vi) chord for the third line of the verse. Keeping lines 1 and 2 exclusively major (I - IV - I - V) makes the sudden drop into the minor vi chord hit with twice the narrative impact.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The diatonic framework for the chords and Ian Moss\'s melodic fills.' },
        { name: 'F# Natural Minor Scale', slug: 'minor', description: 'Relative minor scale coloring the verse turnaround.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Bright major storytelling foundation.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Fretting the F#m barre chord cleanly at the 2nd fret.' },
      ],
      progressions: [
        { name: 'I - IV - V Progression', slug: 'i-iv-v', description: 'The primary three-chord engine of the first half of each verse.' },
      ],
    },
  },

  'beds-are-burning': {
    slug: 'beds-are-burning',
    songTitle: 'Beds Are Burning',
    artist: 'Midnight Oil',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Parallel Major-to-Minor Tonic Flip with a Harmonic Minor V Turnaround',
    emotionalHook: 'Midnight Oil creates unforgettable urgency by flipping the quality of the E tonic chord between sections. The verse prowls in a stark, sun-baked E major/Mixolydian groove (E - G - A), but the instant the chorus ("How can we dance when our earth is turning?") erupts, the tonic collapses into parallel E natural minor (Em - C - G) before ending on a towering B major (V) dominant turnaround.',
    romanProgression: 'i - ♭VI - ♭III - i - ♭VI - ♭VII - V',
    chords: ['Em', 'C', 'G', 'Em', 'C', 'D', 'B'],
    progressionExplanation: [
      'Em (i): Parallel minor tonic replacing the verse\'s E major chord with sudden moral urgency.',
      'C (♭VI) to G (♭III): Anthemic Aeolian lift opening up the chorus melody for a stadium-sized hook.',
      'D (♭VII): Subtonic stepping stone on the second pass of the chorus.',
      'B (V): Harmonic-minor major dominant whose D# leading tone pulls with maximum gravity back to E.',
    ],
    voiceLeadingInsights: [
      'The verse\'s E major (G#) and G major (G natural) already clash with blues-rock friction, foreshadowing the chorus shift into E minor.',
      'Ending the chorus on B major (B-D#-F#) after D major (D-F#-A) creates a dramatic chromatic climb from D natural to D#.',
      'When the chorus repeats, D# resolves up a half step to E; when returning to the verse, E major reasserts G#.',
    ],
    guitarPerspective: 'Keep the verse stabs (E, G, A) clipped and staccato with tight right-hand palm muting, then release all muting in the chorus so the open Em, C, and G chords ring out as wide as possible.',
    songwriterTakeaway: 'Write your verse in a major/Mixolydian riff and switch to the parallel minor key for the chorus—then cap the chorus with a major V chord (B major in E minor) for an unstoppable turnaround.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor Scale', slug: 'minor', description: 'Drives the Em - C - G - D chorus progression.' },
        { name: 'E Harmonic Minor Scale', slug: 'harmonic-minor', description: 'Supplies the D# leading tone in the B major turnaround chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Natural minor foundation of the chorus.' },
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Modal rock character of the verse.' },
      ],
      chords: [
        { name: 'Major & Minor Triads', slug: 'minor', description: 'Contrasting parallel E major and E minor tonics.' },
      ],
    },
  },

  'dont-dream-its-over': {
    slug: 'dont-dream-its-over',
    songTitle: "Don't Dream It's Over",
    artist: 'Crowded House',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'The Bittersweet III7 (V/vi) Secondary Dominant & Jangle-Pop Sus2 Voice Leading',
    emotionalHook: 'Neil Finn turns a four-chord Eb major progression into one of pop history\'s most bittersweet anthems by replacing the diatonic iii chord (Gm) with a major-dominant G7 (III7, functioning as V7/vi). In the verse, G7 hangs at the end of the loop and resolves deceptively back to Eb; in the chorus ("They come, they come"), that same G7 fulfills its true destiny by pulling straight into C minor.',
    romanProgression: 'I - vi - IV - III7',
    chords: ['Eb', 'Cm', 'Ab', 'G7'],
    progressionExplanation: [
      'Eb (I): Shimmering 6th-fret barre chord embellished with Ebsus2 (lifting the pinky to the 6th fret on the B string).',
      'Cm (vi): Relative minor chord deepening the reflective mood.',
      'Ab (IV): Lush subdominant major barre chord at the 4th fret.',
      'G7 (III7 / V7 of vi): Chromatic secondary dominant containing B natural, creating an aching pull toward C minor.',
    ],
    voiceLeadingInsights: [
      'Sliding from Ab major (4th fret) down one fret to G7 (3rd fret) creates effortless parallel barre-chord motion.',
      'The B natural inside G7 is the raised leading tone of C harmonic minor, injecting Beatlesque sophistication.',
      'In the chorus (Ab - Bb - Eb - Cm - Ab - Bb - G7 - Cm), Finn uses G7 on the second half to redirect the progression from triumph into tender vulnerability.',
    ],
    guitarPerspective: 'Play Eb as an A-shape barre at the 6th fret (X-6-8-8-8-6) so you can toggle your pinky on the B string for the signature Ebsus2 intro chime—or place a capo on fret 3 and use C, Am, F, and E7 shapes.',
    songwriterTakeaway: 'Substitute a dominant III7 chord (like E7 in C major or G7 in Eb major) at the end of a verse loop, then let it resolve to the vi chord in the chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Eb Major Scale', slug: 'major', description: 'Primary key center of the song.' },
        { name: 'C Harmonic Minor Scale', slug: 'harmonic-minor', description: 'Explains the chromatic B natural in the G7 chord.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Core major tonality.' },
      ],
      chords: [
        { name: 'Secondary Dominants', slug: 'secondary-dominants', description: 'Using G7 (V7/vi) to target C minor.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'Neil Finn\'s Ebsus2 and Ebsus4 barre embellishments.' },
      ],
    },
  },

  'down-under': {
    slug: 'down-under',
    songTitle: 'Down Under',
    artist: 'Men at Work',
    category: 'key-modulation',
    categoryLabel: 'Emotional Key Modulations',
    coreSecret: 'Single-Chord Relative Major Substitution (Bm to D on Beat 1 of the Chorus)',
    emotionalHook: 'Men at Work achieves a massive chorus lift while changing only a single chord from the verse. The verse bounces through a quirky B natural minor reggae-pop loop (Bm - A | Bm - G - A). When the chorus ("Can\'t you hear, can\'t you hear the thunder?") arrives, they simply replace the first Bm chord with its relative major, D—instantly illuminating the exact same loop with stadium-sized major warmth.',
    romanProgression: 'i - ♭VII - i - ♭VI - ♭VII',
    chords: ['Bm', 'A', 'Bm', 'G', 'A'],
    progressionExplanation: [
      'Bm (i): Minor tonic establishing the deadpan reggae-skank storytelling of the verse (replaced by D major in the chorus).',
      'A (♭VII): Subtonic major chord providing constant rhythmic bounce.',
      'Bm (i): Anchors the downbeat of bar 2 in both the verse and the chorus.',
      'G (♭VI) to A (♭VII): Quick two-beat turnaround at the end of bar 2 propelling the loop forward.',
    ],
    voiceLeadingInsights: [
      'Bm (B-D-F#) and D major (D-F#-A) share two chord tones (D and F#), so swapping Bm for D on bar 1 feels completely seamless yet transforms the mood.',
      'Because bar 2 (Bm - G - A) stays identical in both sections, the listener feels anchored even as the tonal center flips between B minor and D major.',
      'Greg Ham\'s iconic flute riff outlines the B minor pentatonic / Aeolian scale right over the G-to-A turnaround.',
    ],
    guitarPerspective: 'Play the verse with clipped, staccato reggae upstrokes on the "&" of each beat using compact barre shapes, then strum open D, A, Bm, and G chords broadly in the chorus.',
    songwriterTakeaway: 'To turn a minor-key verse loop into an unforgettable chorus without writing a whole new progression, swap just the very first i chord for its relative major (♭III).',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Natural Minor Scale', slug: 'minor', description: 'Governs the verse and the famous flute melody.' },
        { name: 'D Major Scale', slug: 'major', description: 'Relative major scale illuminating the chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The i - ♭VII - ♭VI natural minor framework.' },
      ],
      chords: [
        { name: 'Relative Major & Minor', slug: 'minor', description: 'Swapping Bm and D major over a shared harmonic loop.' },
      ],
    },
  },

  'under-the-milky-way': {
    slug: 'under-the-milky-way',
    songTitle: 'Under the Milky Way',
    artist: 'The Church',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: '12-String Open Treble Drones & Stepwise Aeolian Minor-Dominant Descent',
    emotionalHook: 'Steve Kilbey and Marty Willson-Piper craft a weightless, stargazing atmosphere by letting the open B and high E strings ring across every chord in A minor. Instead of using a harsh E7 major dominant in the chorus ("Wish I knew what you were looking for"), the progression floats down the natural minor scale—G to Fmaj7 to Em7 (♭VII - ♭VImaj7 - v7)—preserving a cool, nocturnal mystery that never fully resolves.',
    romanProgression: 'i7 - ♭VImaj7 - ♭VII6 - v7',
    chords: ['Am7', 'Fmaj7', 'G6', 'Em7'],
    progressionExplanation: [
      'Am7 (i7): Minor tonic softened by open G and E strings for an airy, floating center.',
      'Fmaj7 (♭VImaj7): Submediant major-7th chord containing the entire A minor triad (A-C-E) over an F bass.',
      'G6 (♭VII6): Subtonic chord with open B and high E strings adding a 6th (E) extension.',
      'Em7 (v7): Modal minor dominant that gently cycles back to Am7 without a leading-tone snap.',
    ],
    voiceLeadingInsights: [
      'The open high E string (the 5th of Am, major 7th of F, 6th of G, and root of Em) acts as an unbroken silver thread tying all four chords together.',
      'In the chorus (G - Fmaj7 - Em7 - Am7), the bass walks smoothly down the A Aeolian scale: G → F → E → A.',
      'Keeping the v chord minor (Em7 instead of E7) avoids the G# leading tone, giving the chorus its wistful, searching character.',
    ],
    guitarPerspective: 'Arch your fretting fingers carefully on Fmaj7 (1-3-3-2-1-0 or X-3-3-2-1-0) and G6 (3-2-0-0-0-0) so the open high E string chimes continuously like a 12-string acoustic.',
    songwriterTakeaway: 'When writing in A minor, leave the high E string open on every chord (Am7, Fmaj7, G6, Em7) and use the minor v7 instead of E7 to create a dreamy, cinematic soundscape.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor Scale', slug: 'minor', description: 'Pure Aeolian scale powering the verse and chorus walkdown.' },
        { name: 'A Dorian Mode', slug: 'dorian', description: 'Adds subtle 6th/9th shimmer in the extended voicings.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Defines the minor v7 to i7 modal cadence.' },
      ],
      chords: [
        { name: 'Seventh Chords', slug: 'seventh', description: 'Am7, Fmaj7, and Em7 open-string voicings.' },
      ],
    },
  },

  'man-in-the-box': {
    slug: 'man-in-the-box',
    songTitle: 'Man in the Box',
    artist: 'Alice in Chains',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'Sludgy Eb Minor Pentatonic Pedal Riff Exploding into a Dorian IV Chorus Cadence',
    emotionalHook: 'Jerry Cantrell builds claustrophobic tension in the verse by locking the guitar and bass into a relentless, talk-box-drenched Eb minor pentatonic riff (played in open E position tuned down a half step). When the chorus ("Feed my eyes") hits, the claustrophobia shatters into wide-open G5 - D5 - A5 - E5 chords—using the Dorian-borrowed major IV (A) to create a towering, cathedral-heavy cadence.',
    romanProgression: '♭III - ♭VII - IV - i',
    chords: ['G5', 'D5', 'A5', 'E5'],
    progressionExplanation: [
      'G5 (♭III): Mediant chord that bursts out of the dark verse riff with sudden melodic height.',
      'D5 (♭VII): Subtonic power/open chord stepping down with heavy Seattle grandeur.',
      'A5 (IV): Subdominant chord borrowed from Dorian, avoiding minor-iv gloom for a stark plagal-style slam.',
      'E5 (i): Heavy low-string tonic (sounding as concert Eb5) anchored by a bluesy 3rd-string bend fill.',
    ],
    voiceLeadingInsights: [
      'The verse riff alternates between the open 6th-string pedal (E) and fretted 5th/4th string notes at frets 5 and 7, creating a hypnotic two-octave growl.',
      'In the chorus, the root motion moves down a fourth (G to D), down another fourth (D to A), and down a fourth again (A to E)—a reverse circle-of-fifths cascade!',
      'Quarter-step microtonal bends on the 3rd fret of the low E string (G) inject raw delta-blues grit into heavy metal distortion.',
    ],
    guitarPerspective: 'Tune down a half step (Eb Ab Db Gb Bb Eb). Keep your right-hand palm muting surgical on the open 6th string during the verse riff, then let the chorus chords ring wide open.',
    songwriterTakeaway: 'Chain descending fourths (♭III → ♭VII → IV → i, or G → D → A → E) in your chorus after a single-chord pentatonic verse riff for an instant arena-sized lift.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Minor Pentatonic Scale', slug: 'minor-pentatonic', description: 'Core scale of the main riff and solo (in Eb standard tuning).' },
        { name: 'E Blues Scale', slug: 'blues', description: 'Adds the flat-5th passing grit in Jerry Cantrell\'s solo.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Source of the A5/A major IV chord in an E minor context.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Heavy fifth-chord voicings driving the chorus.' },
      ],
    },
  },

  'black': {
    slug: 'black',
    songTitle: 'Black',
    artist: 'Pearl Jam',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'The Heart-Wrenching Parallel Major-to-Minor Collapse (E Major Verse to E Minor Outro)',
    emotionalHook: 'Stone Gossard captures the arc of lost love purely through modal transformation. For the first two minutes, the verse rocks gently back and forth between warm E major and Aadd9 (I - IV), with the open B and high E strings chiming like sunlight on canvas. Then, as memories turn to grief, a borrowed C major (♭VI) shatters the major key and pulls the entire song down into parallel E minor (Em - D - C) for one of rock\'s most devastating outros.',
    romanProgression: 'I - IV - ♭VI - ♭VII - i',
    chords: ['E', 'A', 'C', 'D', 'Em'],
    progressionExplanation: [
      'E (I) to A (IV): Nostalgic two-chord major oscillation with continuous open B and E drone strings.',
      'C (♭VI): The emotional turning point—a borrowed flat-sixth chord from E minor that darkens the horizon.',
      'D (♭VII): Subtonic major chord bridging the chorus and driving the circular outro.',
      'Em (i): Parallel minor tonic where the G# of the verse finally collapses into a mournful G natural.',
    ],
    voiceLeadingInsights: [
      'In the verse, sliding the E major shape up to the 5th/7th-fret Aadd9 voicing keeps the open B (5th of E, 9th of A) and E (root of E, 5th of A) ringing uninterrupted.',
      'The pre-chorus switch from E major (G#) to C major (G natural and C natural) is a chromatic mediant shift that physically feels like the floor dropping away.',
      'The outro loop (Em - D - C - Em) cycles endlessly in E Aeolian, giving Mike McCready an open canvas for his soaring E minor pentatonic solo.',
    ],
    guitarPerspective: 'Use Asus2/Aadd9 (X-0-2-2-0-0 or X-0-7-6-0-0) in the verse so the top two strings never stop ringing, and keep a steady 16th-note wrist pendulum at 77 BPM.',
    songwriterTakeaway: 'To tell a story of loss or transformation, spend your entire verse oscillating warmly between I and IV in a major key, then collapse into the parallel minor (i - ♭VII - ♭VI) for the chorus and outro.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major / Mixolydian Scale', slug: 'major', description: 'Warm major tonality of the opening verses.' },
        { name: 'E Minor Pentatonic Scale', slug: 'minor-pentatonic', description: 'Powers Mike McCready\'s legendary outro solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Natural minor mode of the C - D - Em chorus and coda.' },
      ],
      chords: [
        { name: 'Added Tone & Sus Chords', slug: 'suspended', description: 'Open-string Asus2 and Aadd9 drone shapes.' },
      ],
    },
  },

  'iris': {
    slug: 'iris',
    songTitle: 'Iris',
    artist: 'Goo Goo Dolls',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Sweeping 3/4 Waltz Harmony Anchored on an Unbroken High-D Pedal Drone',
    emotionalHook: 'Johnny Rzeznik originally wrote "Iris" on an acoustic guitar tuned to an extreme B-D-D-D-D-D unison drone tuning, creating a shimmering wall of D notes. Even when played in Standard or Drop D tuning, the song\'s magic comes from keeping the D note on the 2nd string 3rd fret ringing across a sweeping 3/4 waltz that rises in the verse (D - Em - G) and cascades downward in the chorus (Bm - A - G) without ever resolving to the tonic at the end of the phrase.',
    romanProgression: 'I - ii - IV - vi - V - IV',
    chords: ['D', 'Em', 'G', 'Bm', 'A', 'G'],
    progressionExplanation: [
      'D (I) to Em (ii) to G (IV): Rising stepwise verse phrase in 3/4 time that opens up the emotional horizon.',
      'Bm (vi): Relative minor chord that initiates both the second half of the verse and the iconic chorus.',
      'A (V): Dominant passing chord (voiced as Asus4) stepping down between Bm and G.',
      'G (IV): Unresolved subdominant resting point held for two full bars of 3/4, leaving the heart suspended in longing.',
    ],
    voiceLeadingInsights: [
      'Notice the symmetry: the verse ascends stepwise (D → E → G) and then answers by descending stepwise from the relative minor (B → A → G), with both halves landing on G major!',
      'Because the chorus loops Bm - A - G (vi - V - IV) and refuses to resolve to D major, the chorus feels like an endless wave of yearning.',
      'Anchoring the D note (B-string 3rd fret) adds a 7th to Em7, a 5th to G, a minor 3rd to Bm, and a 4th to Asus4.',
    ],
    guitarPerspective: 'Glue your ring finger to the 3rd fret of the B string across Dsus2, Em7, G, Bm11 (X-2-0-2-3-0), and Asus4 (X-0-2-2-3-0) to recreate Rzeznik\'s lush drone in standard or Drop D tuning.',
    songwriterTakeaway: 'End both your ascending verse phrase (I - ii - IV) and your descending chorus phrase (vi - V - IV) on the IV chord in 3/4 time to create unstoppable romantic suspense.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'Governs the 3/4 waltz chords and slide guitar solo.' },
        { name: 'B Natural Minor Scale', slug: 'minor', description: 'Relative minor center of the chorus and bridge.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Major key framework with continuous pedal point.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'Asus4, Dsus2, and common-tone drone voicings.' },
      ],
    },
  },

  'more-than-words': {
    slug: 'more-than-words',
    songTitle: 'More Than Words',
    artist: 'Extreme',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'Percussive Acoustic Slap Groove Paired with Secondary Dominants & a Minor Plagal Cadence',
    emotionalHook: 'Nuno Bettencourt turns a single acoustic guitar into a full rhythm section and string quartet. While his right hand locks down a hypnotic 2-and-4 snare slap over a shimmering G - Cadd9 - Am7 - C - D loop (keeping the high G note ringing on top), the chorus and bridge blossom into classic Tin Pan Alley harmony—using a B7 (V7/vi) secondary dominant into Em and a heart-melting C major to C minor (IV to iv) cadence on the title lyric.',
    romanProgression: 'I - IVadd9 - ii7 - IV - V',
    chords: ['G', 'Cadd9', 'Am7', 'C', 'D'],
    progressionExplanation: [
      'G (I) to Cadd9 (IVadd9): Warm acoustic opening keeping the 3rd-fret D and G notes anchored on the top two strings.',
      'Am7 (ii7): Supertonic seventh chord where the pinky briefly keeps the high G before lifting to open E.',
      'C (IV) to D (V): Split-bar turnaround (two beats each) resolving the main loop back to G.',
    ],
    voiceLeadingInsights: [
      'The top-string melody subtly sings G (on G, Cadd9, and Am7) → E (open 1st string on C) → F# (2nd fret on D) → G.',
      'In the bridge ("Then you wouldn\'t have to say"), B7 introduces D# to pull chromatically into Em (V7/vi to vi).',
      'At the end of the chorus ("More than words"), C major (E natural) melts into C minor (Eb) before landing on G major (D)—the classic E → Eb → D minor-plagal voice-leading sigh.',
    ],
    guitarPerspective: 'Rotate your right forearm on beats 2 and 4 so the side of your thumb slaps the 6th and 5th strings against the frets for a crisp acoustic snare click, then immediately pluck the chord on the "&" of beat 2.',
    songwriterTakeaway: 'Combine a modern, common-tone acoustic verse loop (G - Cadd9 - Am7 - D) with timeless jazz/pop cadences (B7 → Em and C → Cm → G) at the emotional peaks of your chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major Scale', slug: 'major', description: 'Primary scale of the verse and chorus (tuned down 1/2 step).' },
        { name: 'E Harmonic Minor Scale', slug: 'harmonic-minor', description: 'Supplies the B7 secondary dominant leading to Em.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Core major tonality.' },
      ],
      chords: [
        { name: 'Secondary Dominants', slug: 'secondary-dominants', description: 'B7 (V7/vi) resolving to E minor.' },
        { name: 'Added Tone Chords', slug: 'add', description: 'Cadd9 common-tone acoustic voicing.' },
      ],
    },
  },

  'the-needle-and-the-damage-done': {
    slug: 'the-needle-and-the-damage-done',
    songTitle: 'The Needle and the Damage Done',
    artist: 'Neil Young',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'The D → C → B → B♭ Bass Walkdown & Borrowed Modal Refrain Cadence',
    emotionalHook: 'Neil Young transforms a solo dreadnought guitar into a poignant two-part conversation. Against a flickering D → Dsus4 → Dsus2 treble melody, the bass walks relentlessly downward—from open D to C natural (♭VII), B (first-inversion G), and B♭ (first-inversion G minor). Just when the ear expects a simple resolution, the refrain ("every junkie\'s like a setting sun") steps through borrowed C and F major chords into an Esus4 → E → Asus4 → A secondary-dominant turnaround.',
    romanProgression: 'I - ♭VII - IV - iv - ♭VII - ♭III - II - V',
    chords: ['D', 'Cadd9', 'G', 'Gm', 'C', 'F', 'E', 'A'],
    progressionExplanation: [
      'D (I) to Cadd9 (♭VII): The open D bass drops to C natural on the 5th string 3rd fret while the D chord continues to ring on top.',
      'G (IV, as G/B) to Gm (iv, as Gm/B♭): The 5th-string bass continues stepping down from B (2nd fret) to B♭ (1st fret), turning the subdominant minor.',
      'C (♭VII) to F (♭III): Borrowed flat-side major chords from D minor illuminating the vocal refrain.',
      'E (II / V of V) to A (V): Secondary dominant (embellished as Esus4 → E) resolving into the dominant A (Asus4 → A) to set up the return to D.',
    ],
    voiceLeadingInsights: [
      'The bassline traces an unbroken five-note descent: D → C → B → B♭ → A, one of the most expressive line clichés in folk-rock history.',
      'Keeping the 2nd-string 3rd fret (D note) anchored across D, D/C, G/B, and Gm/B♭ binds the shifting bass notes into a single resonant harmony.',
      'Pairing Esus4 → E (G# resolving to A) immediately after F major (F natural) creates a striking cross-relation that heightens the tragedy of the lyrics.',
    ],
    guitarPerspective: 'Target the 4th- and 5th-string bass notes firmly with your flatpick on beat 1 of each bar, then brush the top three strings lightly while weaving the Dsus4 (pinky on fret 3) and Dsus2 (open high E) melody.',
    songwriterTakeaway: 'Walk your bassline down from the tonic through the flat-7th, 6th, and flat-6th (D → C → B → B♭) while keeping a constant pedal note ringing in the treble strings.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Mixolydian Scale', slug: 'mixolydian', description: 'Introduces the C natural bass step in the opening walkdown.' },
        { name: 'D Natural Minor Scale', slug: 'minor', description: 'Source of the borrowed Gm/B♭, C, and F chords.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Folk-rock modal foundation.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'First-inversion D/C, G/B, and Gm/B♭ bass walkdown shapes.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'Dsus4, Dsus2, Esus4, and Asus4 voice leading.' },
      ],
    },
  },

  'scar-tissue': {
    slug: 'scar-tissue',
    songTitle: 'Scar Tissue',
    artist: 'Red Hot Chili Peppers',
    key: 'F Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Two-Note Dyad Counterpoint and the Relative Minor Tension',
    emotionalHook: 'John Frusciante strips away full chord blocks, using only root notes and major 10ths (root on 5th/6th string, 10th on 2nd string) with string-skipping. By leaving out the 5th, the harmony achieves a pure, melancholic vocal transparency. The movement between F major (I) and D minor (vi) creates a gentle bittersweet push-pull before resolving.',
    romanProgression: 'I - V - vi - V - I',
    chords: ['F', 'C', 'Dm', 'C', 'F'],
    progressionExplanation: [
      'F (I): The open, tender tonic established via a low F root and high A (10th) dyad.',
      'C (V): Gentle stepwise voice leading moving toward the relative minor.',
      'Dm (vi): The emotional melancholy peak of the verse motif, contrasting the warm F major home base.',
      'C (V): Passing resolution back to the tonic F.',
    ],
    voiceLeadingInsights: [
      'Frusciante uses string-skipping to play roots on strings 5 or 6 and chord 10ths on string 2, muting the interior strings.',
      'The sliding dyads on the B string trace an expressive counter-melody against Anthony Kiedis\'s vocal line.',
      'The slide guitar solos in D minor pentatonic provide an aching blues contrast against the clean major harmony.',
    ],
    guitarPerspective: 'Keep the tip of your fretting index finger lightly draped across the unplayed strings (strings 3 and 4) to mute them completely while hybrid-picking or using pick and fingers.',
    songwriterTakeaway: 'Try stripping your 3-note triads down to 2-note 10th intervals (root + 3rd an octave up). It immediately removes sonic clutter and leaves room for the vocal melody to shine.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F Major Scale', slug: 'major', description: 'Provides the diatonic notes for the verse dyads and melody.' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'Used by Frusciante for all three slide guitar solos.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Diatonic major foundation of the song.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Two-note tenth voicings of F and C major.' },
        { name: 'Minor Chords', slug: 'minor', description: 'D minor dyad providing the melancholic relative minor lift.' },
      ],
    },
  },

  'alive': {
    slug: 'alive',
    songTitle: 'Alive',
    artist: 'Pearl Jam',
    key: 'A Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The A Dorian Arpeggio Riff Melded with the Resonant ♭VII - IV Cadence',
    emotionalHook: 'Stone Gossard\'s opening riff lives in A Dorian (featuring the natural 6th F# over an open A string), but erupts into anthemic A major in the chorus. The verse uses the signature rock ♭VII (G) and IV (D) cadence, subverting classical leading tones in favor of open, aggressive grunge momentum.',
    romanProgression: 'I - ♭VII - IV - I',
    chords: ['A', 'G', 'D', 'E'],
    progressionExplanation: [
      'A (I): The driving tonic root anchored by the open 5th string pedal.',
      'G (♭VII): The classic Mixolydian/Dorian subtonic chord that delivers rock attitude without classical tension.',
      'D (IV): The bright plagal subdominant resolving naturally back to A major.',
      'E (V): Adds powerful dominant drive in the pre-chorus and chorus sections.',
    ],
    voiceLeadingInsights: [
      'The intro riff hinges on a chromatic hammer-on and pull-off on the 4th string (E to G) before catching the open A string.',
      'The chorus rocks between G, D, and A with ringing open upper strings.',
      'Mike McCready\'s marathon guitar solo leans on A minor pentatonic and blues scale with heavy wah pedal filtering.',
    ],
    guitarPerspective: 'Focus on picking accuracy during Gossard\'s arpeggiated intro. Let the open A string ring continuously as an acoustic pedal tone under the fretted notes.',
    songwriterTakeaway: 'Combine a Dorian minor riff in the verse with a triumphant major I - ♭VII - IV chorus to create massive emotional contrast and tension release.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Dorian Scale', slug: 'dorian', description: 'Source of the natural 6th (F#) in the opening riff.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for McCready\'s soaring outro solo.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Creates the moody yet energetic grunge atmosphere.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Punchy 5th chords driving the chorus.' },
        { name: 'Open Chords', slug: 'open-chords', description: 'Open G and D shapes providing wide dynamic resonance.' },
      ],
    },
  },

  'simple-man': {
    slug: 'simple-man',
    songTitle: 'Simple Man',
    artist: 'Lynyrd Skynyrd',
    key: 'C Major',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'The Diatonic Stepwise Bassline (C → B → A) Under Arpeggiated Triads',
    emotionalHook: 'Gary Rossington\'s iconic fingerpicked intro cycles through C - G/B - Am. The descending bassline (C on 5th fret 3rd string down to B on fret 2, then open A) anchors a progression that feels timeless and grounded. Dropping all guitars down a half-step adds dark southern grit and thickness to the clean Strat tone.',
    romanProgression: 'I - V/7 - vi - vi',
    chords: ['C', 'G', 'Am'],
    progressionExplanation: [
      'C (I): The grounded major tonic representing maternal wisdom and home.',
      'G/B (V): First inversion with B in the bass, providing a smooth stepwise bridge.',
      'Am (vi): The relative minor destination, ringing for two full measures with emotional resonance.',
    ],
    voiceLeadingInsights: [
      'The 5th-string bass steps down cleanly: C (fret 3) → B (fret 2) → A (open 5th string).',
      'The upper arpeggio notes pick out open G, C, and E strings, maintaining consistent treble chime across all three chords.',
      'In the chorus, the band punches into heavy overdriven power chords, expanding the intimate arpeggio into an arena rock anthem.',
    ],
    guitarPerspective: 'Tuned down a half-step (Eb Ab Db Gb Bb Eb). Use a light touch on the clean arpeggios, accenting the bass notes on beat 1 of each measure.',
    songwriterTakeaway: 'A 3-chord progression (I - V - vi) never sounds generic when connected by a smooth stepwise bassline. The descending movement creates emotional gravity that hooks the listener.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The parent diatonic scale for the C - G/B - Am progression.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'Scale for the soulful southern rock lead guitar fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The foundation of the major key center.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'G/B first-inversion chord enabling the stepwise descent.' },
        { name: 'Open Chords', slug: 'open-chords', description: 'Open C and Am shapes supporting the fingerpicked arpeggio.' },
      ],
    },
  },

  'roxanne': {
    slug: 'roxanne',
    songTitle: 'Roxanne',
    artist: 'The Police',
    key: 'G Minor',
    category: 'descending-bassline',
    categoryLabel: 'Chromatic & Descending Basslines',
    coreSecret: 'Reggae-Punk Syncopation, Jazz Minor Inversions, and the Picardy Third Modulation',
    emotionalHook: 'Andy Summers avoids standard punk barre chords entirely. The verse walks down through G minor, Dm/F, Ebmaj7, Dm7, and Cm7, creating an urban, jazz-noir mood before slamming into F7sus4 and exploding into the radiant major hook ("Roxanne!") on Gsus4 to G major. The syncopated upstroke stabs give the rhythm irresistible bounce.',
    romanProgression: 'i - v - ♭VI - v - iv - ♭VII - I',
    chords: ['Gm', 'Dm', 'Ebmaj7', 'Dm7', 'Cm7', 'F7sus4', 'Gsus4', 'G'],
    progressionExplanation: [
      'Gm (i): The shadowy minor tonic establishing the tense nighttime atmosphere.',
      'Dm/F (v): Inverted minor dominant with F in the bass continuing the downward step.',
      'Ebmaj7 (♭VI): Sophisticated jazz major 7th chord injecting bittersweet melancholy.',
      'Dm7 (v) & Cm7 (iv): Stepwise descending minor 7th chords tightening the harmonic tension.',
      'F7sus4 (♭VII): Tension-building suspended dominant chord pre-chorus launchpad.',
      'Gsus4 → G (I): The sudden bright major resolution (Picardy third) in the chorus that illuminates the song.',
    ],
    voiceLeadingInsights: [
      'The bass line descends through five distinct scale degrees: G → F → Eb → D → C.',
      'Summers uses tight 3- and 4-note voicings on strings 2, 3, 4, leaving the low register completely clear for Sting\'s bass.',
      'The transition from G minor in the verse to G major in the chorus provides instant dynamic and emotional elevation.',
    ],
    guitarPerspective: 'Pick only on the upbeats (the "&" of beats 1, 2, 3, 4). Keep the left hand light, releasing pressure immediately after striking to create tight, percussive staccato stabs with an analog chorus/echo pedal.',
    songwriterTakeaway: 'Switch from minor in the verse to the parallel major in the chorus (the Picardy third effect) to make your hook explode with warmth and emotional relief.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Natural Minor Scale', slug: 'minor', description: 'The Aeolian scale providing the verse harmony.' },
        { name: 'G Major Scale', slug: 'major', description: 'The parallel major scale that powers the uplifting chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The minor mode governing the verse walkdown.' },
      ],
      chords: [
        { name: 'Major 7th Chords', slug: 'major-7th', description: 'Ebmaj7 providing the sophisticated jazz-rock inflection.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'Gsus4 resolving to G major in the anthemic chorus.' },
      ],
    },
  },

  'no-excuses': {
    slug: 'no-excuses',
    songTitle: 'No Excuses',
    artist: 'Alice in Chains',
    key: 'A Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'The Open B and High E Drone Strings Ringing Over Shifting Triads',
    emotionalHook: 'Jerry Cantrell transforms standard A major and B major shapes by lifting his fingers off strings 1 and 2, letting the open B and high E strings ring throughout both chords. This creates an ethereal, shimmering drone (Asus2 and Badd4) that gives this acoustic grunge masterpiece its hypnotic, psychedelic quality.',
    romanProgression: 'I - II - I (Verse) | I - ♭VII - IV - I (Chorus)',
    chords: ['Asus2', 'Badd4', 'G6', 'Dadd9'],
    progressionExplanation: [
      'Asus2 (I): The warm, ringing acoustic tonic with open high B and E strings.',
      'Badd4 (II): Sliding the shape up two frets while the open strings continue to drone, creating a dreamy Lydian (#4) shimmer.',
      'G6 (♭VII): Borrowed Mixolydian chord introducing classic grunge swagger in the chorus.',
      'Dadd9 (IV): Plagal resolution echoing the ringing open high strings back home to Asus2.',
    ],
    voiceLeadingInsights: [
      'The open 1st (E) and 2nd (B) strings act as stationary harmonic drones while the fretted notes move in whole steps from fret 2 to fret 4 on strings 3 and 4.',
      'The Badd4 chord contains both an F# (5th) and open E (4th/11th), creating a lush major second dissonance.',
      'The rhythm combines crisp syncopated acoustic strumming with Sean Kinney\'s bouncy bongo-like snare beat.',
    ],
    guitarPerspective: 'Tuned down a half-step. Use an open-string acoustic voicing: bar the 3rd and 4th strings at fret 2 for A, then slide that identical shape up to fret 4 for B, leaving the top two strings completely unmuted.',
    songwriterTakeaway: 'Find two open strings on your guitar and let them ring continuously while you slide simple two-finger chord shapes up and down the neck.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'Diatonic framework for the open drone voicings.' },
        { name: 'A Lydian Mode', slug: 'lydian', description: 'The modal color produced by the #4 (D#) in the Badd4 chord.' },
      ],
      modes: [
        { name: 'Lydian Mode', slug: 'lydian', description: 'Produces the dreamy, buoyant texture of the verse riff.' },
      ],
      chords: [
        { name: 'Suspended Chords', slug: 'suspended', description: 'Asus2 chord geometry.' },
        { name: 'Add9 Chords', slug: 'add9', description: 'Extended open chords creating the signature acoustic shimmer.' },
      ],
    },
  },

  '1979': {
    slug: '1979',
    songTitle: '1979',
    artist: 'The Smashing Pumpkins',
    key: 'Eb Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Acoustic Pedal Tones & Drones',
    coreSecret: 'Nostalgic Octave Riffs with Muted Strings and Suspended Dream-Pop Voicings',
    emotionalHook: 'Billy Corgan crafted an unforgettable coming-of-age anthem using two-note octave grips on the 5th and 3rd strings (or 4th and 2nd strings) with the middle string carefully muted. Tuning down a half step and strumming through Emaj7 and Asus2 (sounding in Eb) produces an airy, melancholic drone that sounds simultaneously retro and modern.',
    romanProgression: 'Imaj7 - IVsus2 (Verse) | ii11 - Vadd11 - I - vi7 (Chorus)',
    chords: ['Emaj7', 'Asus2', 'F#m11', 'Badd11', 'E', 'C#m7'],
    progressionExplanation: [
      'Emaj7 (Imaj7): The shimmering, bittersweet tonic with major 7th warmth.',
      'Asus2 (IVsus2): The floating subdominant sustaining the dreamy open treble chime.',
      'F#m11 (ii11): Lush, modern minor extension initiating the chorus harmonic ascent.',
      'Badd11 (Vadd11): Dominant chord softened with the suspended 4th/11th to avoid harsh resolution.',
      'C#m7 (vi7): Relative minor providing deep emotional grounding at the end of the chorus cycle.',
    ],
    voiceLeadingInsights: [
      'Corgan uses the octave shape to trace vocal-like melodies while allowing open strings to bleed into the sound.',
      'The constant presence of the high B and E notes across every chord provides a unified sonic halo.',
      'The relaxed, loop-based drum machine feel emphasizes the relaxed, reflective character of the chord changes.',
    ],
    guitarPerspective: 'Tune down a half step (Eb Ab Db Gb Bb Eb). Keep your index finger lightly resting on the G string when fretting the D and B string octaves to eliminate unwanted open string noise.',
    songwriterTakeaway: 'Replace plain major and minor triads with maj7, sus2, and add11 chords to give standard pop-rock progressions a nostalgic, timeless indie aesthetic.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'Eb Major Scale', slug: 'major', description: 'The concert pitch major key of the studio recording.' },
        { name: 'E Major Scale', slug: 'major', description: 'The chord shapes played relative to half-step down tuning.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The foundation for the shimmering major-seventh harmony.' },
      ],
      chords: [
        { name: 'Major 7th Chords', slug: 'major-7th', description: 'Emaj7 defining the dreamy intro progression.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'Asus2 and Badd11 voicings that soften harmonic cadences.' },
      ],
    },
  },

  'aint-no-sunshine': {
    slug: 'aint-no-sunshine',
    songTitle: "Ain't No Sunshine",
    artist: 'Bill Withers',
    key: 'A Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'The Cyclical Minor Blues Vamp with Percussive Space and Plagal Minor Turnaround',
    emotionalHook: 'Bill Withers created one of the most soul-stirring songs in history with just three simple minor-key chords: Am7, Em7, and G. The arrangement strips out standard drum kit backbeats, relying entirely on the acoustic guitar\'s rhythmic thumb slap and Donald "Duck" Dunn\'s pulsing bass line. The contrast between the Am7 - Em7 vamp and the sudden Dm7 in the turnaround creates unforgettable emotional weight.',
    romanProgression: 'i7 - v7 - ♭VII - i7 | iv7 - v7 - i7',
    chords: ['Am7', 'Em7', 'G', 'Dm7'],
    progressionExplanation: [
      'Am7 (i7): The intimate, melancholy home tonic voiced with open 5th string and sweet 7th color.',
      'Em7 (v7): The minor dominant providing a natural, modal step without harsh leading-tone pull.',
      'G (♭VII): Quick passing subtonic chord bouncing the rhythm back into Am7.',
      'Dm7 (iv7): The minor subdominant introducing a sudden drop in mood during the turnaround ("wonder this time where she\'s gone").',
    ],
    voiceLeadingInsights: [
      'The turnaround moves cleanly down the cycle of fourths: Dm7 (iv7) → Em7 (v7) → Am7 (i7).',
      'The 26-repetition "I know, I know" section drops all harmonic motion, letting the vocal rhythm become the primary hook over a static groove.',
      'The fingerstyle guitar alternates bass thumb notes with two-finger upward plucks on strings 3 and 2.',
    ],
    guitarPerspective: 'Use your thumb for the bass notes (string 5 for Am, string 6 for Em and G, string 4 for Dm) and index/middle fingers for the upper chord strings. Incorporate a light percussive slap on beats 2 and 4.',
    songwriterTakeaway: 'Don\'t be afraid to hold back drums or lead instruments. A sparse, looping minor-7th vamp with a percussive acoustic guitar rhythm allows deeply honest vocals to connect with maximum power.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor Scale', slug: 'minor', description: 'The Aeolian scale providing the diatonic chords Am7, Em7, and Dm7.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The blues-soul scale underlying the melody and instrumental fills.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'Natural minor tonality delivering the brooding soul atmosphere.' },
      ],
      chords: [
        { name: 'Minor 7th Chords', slug: 'minor-7th', description: 'Am7, Em7, and Dm7 providing mellow soul-jazz harmony.' },
        { name: 'Open Chords', slug: 'open-chords', description: 'Open fingerstyle chord grips.' },
      ],
    },
  },

  'the-sky-is-crying': {
    slug: 'the-sky-is-crying',
    songTitle: 'The Sky Is Crying',
    artist: 'Stevie Ray Vaughan',
    key: 'B Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'Slow 12-Bar Minor Blues Dynamics, Microtonal String Bending, and Albert King Turnaround Cadences',
    emotionalHook: 'Stevie Ray Vaughan\'s slow blues masterwork demonstrates the pinnacle of blues guitar expression. Played over a 12-bar slow blues in B minor (sounding in Bb minor due to half-step down tuning), SRV exploits wide vibrato, deep two-step string bends, and dynamic contrast ranging from whisper-quiet thumb plucks to ferocious tube-screamer overdrive.',
    romanProgression: 'i7 - iv7 - i7 - i7 | iv7 - iv7 - i7 - i7 | v7 - iv7 - i7 - V7',
    chords: ['Bm7', 'Em7', 'Bm7', 'F#m7', 'F#7#9'],
    progressionExplanation: [
      'Bm7 (i7): The sorrowful minor tonic anchoring the 12-bar form.',
      'Em7 (iv7): The minor subdominant lifting the harmonic tension in bars 2, 5, and 6.',
      'F#m7 (v7): The minor dominant providing the slow blues turnaround descent in bar 9.',
      'F#7#9 (V7#9): The biting "Hendrix chord" dominant turnaround in bar 12 that forcefully pulls back to Bm.',
    ],
    voiceLeadingInsights: [
      'SRV bends the 4th degree (E) up to the blue note (F) and the 5th (F#) with surgical microtonal precision.',
      'The call-and-response dynamic between the vocal phrases and fiery Stratocaster fills creates an ongoing musical dialogue.',
      'The turnaround in bar 12 uses a classic chromatic walkdown to set up the stinging V7#9 chord.',
    ],
    guitarPerspective: 'Tune down a half step and use heavy strings (.011s or .012s) to get Stevie\'s signature thick tone. Use the neck pickup of a Strat into a cranked tube amp pushed by a Tube Screamer.',
    songwriterTakeaway: 'In a slow 12-bar blues, space and dynamic control are everything. Let your notes breathe, whisper before you scream, and save your most aggressive vibrato for key emotional climaxes.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Blues Scale', slug: 'blues-scale', description: 'The fundamental scale providing the flat-5 blue notes and iconic licks.' },
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'The backbone of Stevie Ray Vaughan\'s lead guitar vocabulary.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Occasionally introduced for sweet minor-sixth melodic fills.' },
      ],
      chords: [
        { name: 'Dominant 7th Chords', slug: 'dominant-7th', description: 'Turnaround tension chords.' },
        { name: 'Minor 7th Chords', slug: 'minor-7th', description: 'Smooth minor blues rhythm shapes.' },
      ],
    },
  },

  'born-under-a-bad-sign': {
    slug: 'born-under-a-bad-sign',
    songTitle: 'Born Under a Bad Sign',
    artist: 'Albert King',
    key: 'C# Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Tritones & Alterations',
    coreSecret: 'The Iconic Dorian Bassline Ostinato and Albert King Unison String Bends',
    emotionalHook: 'Few riffs in music history are as instantly recognizable as the opening walking groove of "Born Under a Bad Sign". Built around a sinister C# Dorian ostinato (featuring the major 6th A# against the minor 3rd E), Albert King pairs a driving soul-blues rhythm section with sharp, upside-down string bends on his Gibson Flying V ("Lucy") that influenced everyone from Jimi Hendrix to Eric Clapton.',
    romanProgression: 'i7 - iv7 - i7 - i7 | iv7 - iv7 - i7 - i7 | V7 - iv7 - i7 - V7',
    chords: ['C#7', 'F#7', 'G#7'],
    progressionExplanation: [
      'C#7 (I7): The hypnotic dominant-tonic riff cycling on strings 5 and 6.',
      'F#7 (IV7): Subdominant blues expansion lifting the groove with horn-like punch.',
      'G#7 (V7): The turnaround dominant chord providing classic Stax Records soul-blues tension.',
    ],
    voiceLeadingInsights: [
      'The signature riff walks from the minor 3rd (E) to the major 2nd (D#), root (C#), and down to the low 5th (G#) and 6th (A#), outlining the C# Dorian mode.',
      'Albert King\'s unique left-handed playing style (tuning his guitar down to CFCFAC and pulling strings downward) produced wide two-step bends with ferocious attack.',
      'The horns and rhythm guitar lock into tight syncopated stabs that punctuate the main riff.',
    ],
    guitarPerspective: 'Learn the opening single-note bass riff cleanly with alternate picking. When soloing, focus on Albert King\'s "Box 1" position around the 9th and 12th frets, targeting full-step and step-and-a-half bends on the 2nd string.',
    songwriterTakeaway: 'Anchor your song with an irresistible repeating bass/guitar riff ostinato that doubles as both the melodic hook and the rhythmic groove.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C# Dorian Scale', slug: 'dorian', description: 'The modal scale containing the signature natural 6th (A#) of the main riff.' },
        { name: 'C# Blues Scale', slug: 'blues-scale', description: 'The primary scale for Albert King\'s expressive lead bends.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Gives the blues groove a funkier, more modern edge than pure Aeolian.' },
      ],
      chords: [
        { name: 'Dominant 7th Chords', slug: 'dominant-7th', description: 'C#7, F#7, and G#7 driving the 12-bar blues progression.' },
        { name: 'Power Chords', slug: 'power-chords', description: 'Punchy rhythm figures locking with the bassline.' },
      ],
    },
  },

  'leaps-and-bounds': {
    slug: 'leaps-and-bounds',
    songTitle: 'Leaps and Bounds',
    artist: 'Paul Kelly',
    key: 'A Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Driving Australian Pub Rock Cadence with Mixolydian ♭VII and Open Chime Voicings',
    emotionalHook: 'Paul Kelly\'s love letter to Melbourne is built on an unstoppable straight-eighth rhythm that captures the energy of Australian pub rock. Using bright open chords (A, D, E, F#m) with ringing open strings and a punchy ♭VII (G major) modal injection, the progression propels the vivid storytelling forward without pausing for breath.',
    romanProgression: 'I - V - IV - I (Verse) | vi - IV - I - V (Chorus)',
    chords: ['A', 'E', 'D', 'F#m', 'G'],
    progressionExplanation: [
      'A (I): The grounded, celebratory open major tonic.',
      'E (V): The driving dominant pushing the rhythm with classic rock vigor.',
      'D (IV): The uplifting plagal subdominant bringing warmth and optimism.',
      'F#m (vi): The relative minor giving the chorus a moment of nostalgic reflection.',
      'G (♭VII): Borrowed Mixolydian chord injecting raw pub-rock swagger into the transition.',
    ],
    voiceLeadingInsights: [
      'The rhythm guitar alternates between open chord strums and muted eighth-note downstrokes, maintaining tight sync with the snare drum.',
      'Letting the open B and high E strings ring across the D and A chords creates a shimmering Australian jangly guitar texture.',
      'The chorus modulates the emotional tone by leading with the minor vi chord before climbing through IV, I, and V.',
    ],
    guitarPerspective: 'Keep your strumming wrist relaxed and maintain a steady straight-eighth down-up rhythm. Accent beats 2 and 4 to lock in with the snare drum.',
    songwriterTakeaway: 'Keep your chord progression direct and melodic when writing narrative story songs. The familiar I - V - IV - vi framework gives the listener instant comfort, allowing the lyrical imagery to take center stage.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Scale', slug: 'major', description: 'The diatonic foundation for the verse and chorus progressions.' },
        { name: 'A Mixolydian Scale', slug: 'mixolydian', description: 'Introduces the borrowed G major chord for pub-rock drive.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Major key foundation for the optimistic, anthemic melody.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'open-chords', description: 'Open A, D, E, and G chords providing maximum acoustic resonance.' },
        { name: 'Barre Chords', slug: 'barre-chords', description: 'F#m barre chord anchoring the chorus.' },
      ],
    },
  },
  'californication': {
    slug: 'californication',
    songTitle: 'Californication',
    artist: 'Red Hot Chili Peppers',
    key: 'A Minor',
    category: 'key-modulation',
    categoryLabel: 'Key Shifts & Modulations',
    coreSecret: 'Contrapuntal Two-Chord Verse Minimalism Modulating a Minor Third Down into F# Minor Solo',
    emotionalHook: 'John Frusciante creates an atmosphere of fragile California beauty using just two chords in the verse: Am and Fmaj7. By voicing them as sparse two-note dyads with open high strings, he leaves vast acoustic space for Anthony Kiedis\'s melancholic vocal. The true harmonic shockwave arrives at the solo, where the song suddenly modulates a minor third downward into F# minor, unleashing one of the most expressive, vocal-like guitar solos in alternative rock.',
    romanProgression: 'i - VI7 (Verse) | III - VII - iv - i (Pre-Chorus/Chorus) | i - VI - iv - VII in F#m (Solo)',
    chords: ['Am', 'Fmaj7', 'C', 'G', 'Dm', 'F#m', 'D', 'Bm', 'E'],
    progressionExplanation: [
      'Am (i) to Fmaj7 (VI7): Melancholic oscillation between minor tonic and floating major-seventh submediant.',
      'C (III) to G (VII): Lifts into the relative major C during the pre-chorus and chorus hooks.',
      'Dm (iv) to Am (i): Plaintive minor cadence re-establishing reflective vulnerability.',
      'F#m Modulation (Solo): Abrupt key shift down 3 semitones providing a fresh harmonic landscape for Frusciante\'s singing lead melody.',
    ],
    voiceLeadingInsights: [
      'The alternating bassline (A on 5th string to F on 6th string) keeps root movement clear without cluttered low end.',
      'The high E note (5th fret B string) rings across both Am and Fmaj7, acting as a unifying pedal point tone.',
      'In the solo, Frusciante targets the root F# and major 3rd A with wide, crying vocal vibrato.',
    ],
    guitarPerspective: 'Play the verse using your thumb for the low F bass note while letting the 7th-fret D string and 5th-fret B string ring with a clean, uncompressed Stratocaster tone. For the solo, stomp on a Boss DS-2 Turbo Distortion with tone rolled back slightly for liquid sustain.',
    songwriterTakeaway: 'Don\'t be afraid to keep your verse progression minimal. Two chords with great voice leading give the vocal room to tell a story, and an unexpected key modulation for the solo delivers maximum emotional impact.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The Aeolian scale governing the verse and chorus.' },
        { name: 'F# Minor Pentatonic', slug: 'minor-pentatonic', description: 'The melodic framework for the modulated guitar solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The minor mode providing reflective, somber emotion.' },
      ],
      chords: [
        { name: 'Major Seventh Chords', slug: 'major-seventh', description: 'The Fmaj7 voicing that injects floating beauty.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Foundational Am, Dm, and F#m triads.' },
      ],
    },
  },

  'interstate-love-song': {
    slug: 'interstate-love-song',
    songTitle: 'Interstate Love Song',
    artist: 'Stone Temple Pilots',
    key: 'C# Minor / E Major',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Surprise',
    coreSecret: 'Descending Chromatic Bassline Leading into Secondary Dominant G#7 and Relative Major Chorus',
    emotionalHook: 'Dean DeLeo combines 90s alternative crunch with sophisticated jazz voice leading and country pedal-steel slides. The verse walks down stepwise from C#m through E/B to A, before stabbing into an unexpected secondary dominant G#7 (V7/vi). The raised B# leading tone creates immense tension that finally erupts into the bright, open E major stadium chorus.',
    romanProgression: 'vi - I6/4 - IV - V7/vi (Verse) | I - IVsus2 - vi - IV (Chorus)',
    chords: ['C#m', 'E/B', 'A', 'G#7', 'E', 'Asus2'],
    progressionExplanation: [
      'C#m (vi) to E/B (I6/4): Stepwise descending bassline (C# → B) initiating the melancholy walkdown.',
      'A (IV): Subdominant landing chord providing warm acoustic resonance.',
      'G#7 (V7/vi): The secondary dominant chord containing the sharp B# leading tone that demands resolution.',
      'E (I) in Chorus: The triumphant release into the relative major key.',
    ],
    voiceLeadingInsights: [
      'The bassline traces a clean chromatic descent: C# (fret 4 A) → B (fret 2 A) → A (open A) → G# (fret 4 low E).',
      'The G#7 chord introduces the non-diatonic B# note, giving the progression its bittersweet vintage soul flavor.',
      'In the chorus, open high B and E strings are left ringing as droning resonance over the changing chord roots.',
    ],
    guitarPerspective: 'Emphasize the bass notes on the lower strings while letting the open high strings ring. Nail the slide from fret 4 to 2 in the intro lick, and make sure your barre on G#7 is clean so the major third B# rings clearly.',
    songwriterTakeaway: 'Insert a major V7 chord in a minor key walkdown. It provides an unexpected surge of tension that makes your chorus explosion feel twice as big.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C# Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for the opening slide motifs.' },
        { name: 'E Major Scale', slug: 'major', description: 'The Ionian scale underpinning the triumphant chorus.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode of the chorus anthem.' },
      ],
      chords: [
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'The G#7 secondary dominant driving the harmonic turnaround.' },
        { name: 'Slash Chords', slug: 'slash', description: 'The inverted E/B chord smoothing the bass descent.' },
      ],
    },
  },

  'hey-joe': {
    slug: 'hey-joe',
    songTitle: 'Hey Joe',
    artist: 'The Jimi Hendrix Experience',
    key: 'E Major',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Reverse Circle of Fifths Progression (C - G - D - A - E) Driven by Hendrix Thumb Embellishments',
    emotionalHook: 'Rather than following traditional functional harmony, Jimi Hendrix plays a relentless chain of backward fourths: C resolves to G, G to D, D to A, and A to E. Every single chord is a major triad, yet Hendrix solos over it using the blues scale and minor pentatonic, creating the ultimate blues-rock friction between minor melody and major harmony.',
    romanProgression: '♭VI - ♭III - ♭VII - IV - I',
    chords: ['C', 'G', 'D', 'A', 'E'],
    progressionExplanation: [
      'C (♭VI): Borrowed Aeolian chord establishing the starting point of the sequence.',
      'G (♭III): Resolves up a fourth (or down a fifth) from C, maintaining major-pentatonic momentum.',
      'D (♭VII): Subtonic chord delivering authentic British/American rock swagger.',
      'A (IV): Subdominant chord creating the immediate approach to the home tonic.',
      'E (I): Powerful tonic resolution, held for two full measures with thumb-over chord vibrato.',
    ],
    voiceLeadingInsights: [
      'Each chord change moves by an interval of a fourth ascending (or fifth descending), creating an unbroken sense of forward momentum.',
      'Because all five chords are major, the progression avoids diatonic minor chords entirely while still sounding deeply bluesy.',
      'Hendrix wraps his thumb over the neck to anchor the bass roots while using fingers 1, 2, and 3 for hammer-on chord fills.',
    ],
    guitarPerspective: 'Use your thumb on the 6th string to fret G and E, freeing up your index and ring fingers to hammer on from the minor third to major third. For the solo, dig into the 12th-fret E minor pentatonic box with heavy pick attack and wide vibrato.',
    songwriterTakeaway: 'Chain chords together by intervals of a fourth (the reverse circle of fifths). It creates a relentless harmonic engine where every chord naturally pulls into the next.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The solo scale played against the major chord progression.' },
        { name: 'E Blues Scale', slug: 'blues', description: 'Adds the chromatic flatted fifth (Bb) blue note.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The dominant rock mode suggested by the ♭VII (D) chord.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'The five fundamental open major triads: C, G, D, A, and E.' },
      ],
    },
  },

  'need-you-tonight': {
    slug: 'need-you-tonight',
    songTitle: 'Need You Tonight',
    artist: 'INXS',
    key: 'C Minor / C Dorian',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'C Dorian Modal Swagger with Syncopated Stratocaster Single-Note Grooves and Space',
    emotionalHook: 'Tim Farriss and Kirk Pengilly created one of the most recognizable guitar hooks of the 1980s by playing almost nothing. Built around the Dorian mode in C (with its signature major sixth A natural in the F chord), the riff uses sharp percussive rests on the downbeats, letting the drum beat and bass groove breathe while the single-coil Strat snaps with clean, razor-sharp funk authority.',
    romanProgression: 'i7 - ♭VII - IV',
    chords: ['Cm7', 'Bb', 'F'],
    progressionExplanation: [
      'Cm7 (i7): Funk tonic groove rooted on the 10th fret of the D string.',
      'Bb (♭VII): Subtonic chord providing sleek modal forward momentum.',
      'F (IV): The major IV chord carrying the natural A note, the definitive signature of C Dorian harmony.',
    ],
    voiceLeadingInsights: [
      'The single-note riff outlines the minor triad (C - Eb) before punching the fourth (F) and flatted seventh (Bb).',
      'The rests between notes are as important as the notes themselves—cutting sound instantly creates irresistible dance syncopation.',
      'Upper triad stabs on strings 2, 3, and 4 stay out of the way of the bassline and vocal hook.',
    ],
    guitarPerspective: 'Select the bridge or middle single-coil pickup on a Stratocaster into a clean amp with a compressor pedal. Keep your picking wrist moving in continuous 16th-note motion while your fretting hand chokes the strings for razor-sharp staccato cuts.',
    songwriterTakeaway: 'Rhythm and silence can be your strongest hook. Strip your arrangement down to single syncopated notes and tight modal chords, and leave space for the groove to breathe.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Dorian Mode', slug: 'dorian', description: 'The funk-rock mode with the bright major sixth interval.' },
        { name: 'C Minor Pentatonic', slug: 'minor-pentatonic', description: 'The framework for the single-note main riff hook.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The quintessential mode of rock, soul, and funk.' },
      ],
      chords: [
        { name: 'Minor Seventh Chords', slug: 'minor-seventh', description: 'The Cm7 tonic harmony.' },
        { name: 'Barre Chords', slug: 'major', description: 'Crisp triad voicings on the upper strings.' },
      ],
    },
  },

  'cold-shot': {
    slug: 'cold-shot',
    songTitle: 'Cold Shot',
    artist: 'Stevie Ray Vaughan and Double Trouble',
    key: 'A Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Texas Minor Blues Shuffle with Muted String Rakes and Swirling Leslie Speaker Ninth Chords',
    emotionalHook: 'Stevie Ray Vaughan takes the traditional 12-bar minor blues and drenches it in liquid rotary motion using a Fender Vibratone rotating Leslie speaker cabinet. Combining heavy percussive string rakes with biting ninth-chord stabs (F9 → E7#9), the song demonstrates how tone modulation and rhythmic muting can transform a slow blues into a swaggering, infectious groove.',
    romanProgression: 'i7 - iv7 - i7 - ♭VI9 - V7#9 - i7',
    chords: ['Am7', 'Dm7', 'F9', 'E7#9'],
    progressionExplanation: [
      'Am7 (i7): Heavy, slow-shuffle tonic anchored by low bass rakes and chorused chord stabs.',
      'Dm7 (iv7): Minor subdominant deepening the dark Texas blues narrative.',
      'F9 (♭VI9): Soulful dominant ninth substitution creating dramatic chromatic approach.',
      'E7#9 (V7#9): The iconic Jimi Hendrix/Texas altered dominant chord delivering maximum tension before resolving home.',
    ],
    voiceLeadingInsights: [
      'The turnaround features a chromatic parallel slide from F9 (frets 8/7/8/8) directly down a half-step to E7#9 (frets 7/6/7/8).',
      'SRV uses thumb-over bass notes to sustain the low E/A pedal tone while raking across muted strings to hit treble double-stops.',
      'The Leslie speaker creates a physical Doppler effect that thickens the sustain and adds a liquid, underwater wobble.',
    ],
    guitarPerspective: 'Tune your guitar down a half-step to Eb and use heavy strings (.011s or .012s). Rake your pick aggressively across the muted lower strings before landing squarely on the chord stabs with strict triplet shuffle timing.',
    songwriterTakeaway: 'Use non-standard chord extensions in your blues turnarounds. Replacing simple dominant seventh chords with ninth chords (♭VI9 to V7#9) elevates standard blues into sophisticated territory.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Minor Blues Scale', slug: 'blues', description: 'The blues scale with the chromatic ♭5 blue note (Eb).' },
        { name: 'A Dorian Mode', slug: 'dorian', description: 'Supplies the natural F# over the IV chord.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The smooth minor blues mode.' },
      ],
      chords: [
        { name: 'Dominant Ninth Chords', slug: 'dominant-ninth', description: 'The F9 turnaround chord.' },
        { name: 'Altered Dominant Chords', slug: 'altered-dominant', description: 'The biting E7#9 Hendrix chord.' },
      ],
    },
  },

  'shape-of-my-heart': {
    slug: 'shape-of-my-heart',
    songTitle: 'Shape of My Heart',
    artist: 'Sting',
    key: 'F# Minor',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Chaconnes',
    coreSecret: 'Classical Stepwise Nylon Bassline (F# → E → D → C#) with Suspended Chord Voice Leading',
    emotionalHook: 'Co-written by guitarist Dominic Miller, this classical fingerstyle masterpiece is built on an elegant descending bassline that moves down the F# natural minor scale (F# → E → D → C#). By suspending upper chord voices and introducing a half-diminished iiø7 chord (G#m7b5) before resolving to the major dominant C#7, the progression achieves timeless neo-classical poise.',
    romanProgression: 'i - VII6 - VI6 - V7 | iv7 - i6 - iiø7 - V7',
    chords: ['F#m', 'E6', 'D6', 'C#7', 'Bm7', 'F#m/A', 'G#m7b5'],
    progressionExplanation: [
      'F#m (i) to E6 (VII6): Stepwise bass descent from F# to open E while holding upper chord melody.',
      'D6 (VI6) to C#7 (V7): Continues the bass drop to D and C#, resolving with the raised E# leading tone.',
      'Bm7 (iv7) to F#m/A (i6): Subdominant to first-inversion tonic cycle creating classical circular motion.',
      'G#m7b5 (iiø7) to C#7 (V7): Classic jazz/classical ii-V cadence featuring the tense half-diminished chord.',
    ],
    voiceLeadingInsights: [
      'The bassline descends by step through the entire first four bars, giving the acoustic guitar the grandeur of a Bach cello suite.',
      'The high notes on the B string (frets 2, 3, and 5) outline a poignant counter-melody that interlocks with the bass.',
      'The raised leading tone E# in C#7 provides the indispensable tension that pulls the ear right back to F#m.',
    ],
    guitarPerspective: 'Play this on a nylon-string classical guitar using thumb-index-middle-ring (PIMA) fingerpicking. Let every bass note ring as a pedal tone while keeping the upper chord melody connected and singing.',
    songwriterTakeaway: 'A stepwise descending bassline gives any chord progression instant classical elegance and emotional depth. Couple it with suspended upper chord tones to create an unforgettable fingerpicking loop.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F# Natural Minor', slug: 'minor', description: 'The Aeolian scale of the primary progression.' },
        { name: 'F# Harmonic Minor', slug: 'harmonic-minor', description: 'The source of the raised E# leading tone in the C#7 chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor scale providing somber dignity.' },
      ],
      chords: [
        { name: 'Half-Diminished Chords', slug: 'half-diminished', description: 'The G#m7b5 chord leading to C#7.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'The C#7 major dominant resolution.' },
      ],
    },
  },

  'white-room': {
    slug: 'white-room',
    songTitle: 'White Room',
    artist: 'Cream',
    key: 'D Minor',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Chaconnes',
    coreSecret: '5/4 Meter Fanfare and Stepwise Aeolian Tetrachord Descent (Dm - C - G/B - Bb - C)',
    emotionalHook: 'Cream combines classical grandeur with fiery psychedelic blues. The track opens with a stately 5/4 timpani and guitar fanfare before erupting into a driving 4/4 rock verse built on the descending Aeolian bassline (D → C → B → Bb). Eric Clapton\'s benchmark wah-wah guitar improvisation wails continuously over this loop, creating a masterclass in tension and release.',
    romanProgression: '5/4 Intro Cadence | i - ♭VII - IV6 - ♭VI - ♭VII (Verse) | ♭VII - IV - ♭VI - V (Chorus)',
    chords: ['Dm', 'C', 'G/B', 'Bb', 'F', 'G', 'A'],
    progressionExplanation: [
      '5/4 Intro: Stately orchestral fanfare in 5/4 meter establishing dramatic psychedelic scale.',
      'Dm (i) to C (♭VII): Driving natural minor descent on the A string.',
      'G/B (IV6): Inverted major IV chord featuring the Dorian B natural note in the bass, providing uplifting contrast.',
      'Bb (♭VI) to C (♭VII): Classic rock double-plagal cadence returning to Dm.',
      'A (V) in Chorus: Major dominant chord injecting definitive resolution.',
    ],
    voiceLeadingInsights: [
      'The bassline descends stepwise: D (open D) → C (fret 3 A) → B (fret 2 A) → Bb (fret 1 A).',
      'The major G/B chord introduces a natural B note, temporarily lifting the progression into D Dorian before falling back to Bb.',
      'Clapton rocks the wah pedal in sync with his vocal vibrato, using frequency sweeps to cut through Jack Bruce\'s heavy bass.',
    ],
    guitarPerspective: 'Emphasize the descending bass notes on the A string during the verse. On the outro solo, engage a Vox wah pedal and improvise around the 10th-position D minor pentatonic box, matching foot sweeps to the emotional intensity of your bends.',
    songwriterTakeaway: 'Invert a chord in your descending bassline (like G/B instead of standard Gm) to introduce an uplifting major-sixth modal surprise before returning to the minor resolution.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale framework for Clapton\'s legendary wah solo.' },
        { name: 'D Natural Minor', slug: 'minor', description: 'The Aeolian scale governing the descending chord walkdown.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing dark, urgent propulsion.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'The inverted G/B chord smoothing the bass descent.' },
        { name: 'Barre Chords', slug: 'major', description: 'Root-5 and Root-6 barre chords used throughout.' },
      ],
    },
  },

  'black-dog': {
    slug: 'black-dog',
    songTitle: 'Black Dog',
    artist: 'Led Zeppelin',
    key: 'A Blues / A Major',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Asymmetrical Winding Blues Riff Weaving Across a Straight 4/4 Drum Groove',
    emotionalHook: 'Written by John Paul Jones, the iconic main riff of Black Dog is one of the greatest rhythmic illusions in rock history. While Robert Plant sings a cappella blues phrases and John Bonham lays down an immovable straight 4/4 drum beat, Jimmy Page\'s winding single-note guitar riff weaves through complex metric subdivisions before slamming onto an authoritative A5 power chord with staggering physical impact.',
    romanProgression: 'Single-Note A Blues Riff -> I5 (Verse) | I5 - V5 - IV5 - I5 (Chorus)',
    chords: ['A5', 'E5', 'D5'],
    progressionExplanation: [
      'A Blues Single-Note Riff: Winding chromatic blues line starting on low E string fret 5 (A root).',
      'A5 (I5): Crashing rock power chord resolution anchoring the end of each riff cycle.',
      'E5 (V5) to D5 (IV5): Driving classic rock dominant-to-subdominant shuffle in the chorus.',
      'Direct-to-Board Fuzz: Triple-tracked Les Paul guitars saturated through vintage console preamps.',
    ],
    voiceLeadingInsights: [
      'The riff uses the flatted fifth (Eb) and minor third (C) of the A blues scale, but resolves triumphantly on the root A.',
      'The entry point of the riff changes relative to the bar lines, creating the sensation that the beat is turning over.',
      'In the chorus, the rhythm locks into a straight boogie shuffle, providing pure physical release after the rhythmic tension of the verses.',
    ],
    guitarPerspective: 'Don\'t try to count in odd meters—count a steady 4/4 and memorize where the riff starts and lands. Use crisp alternate picking on strings 6, 5, 4, and 3, and slam the A5 power chord on fret 5 of the low E string with full authority.',
    songwriterTakeaway: 'Contrast is king. Placing a complex, winding single-note riff against a cappella vocal breaks and a simple straight-ahead drum groove creates explosive rock tension.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Blues Scale', slug: 'blues', description: 'The primary scale of the winding main riff and outro solo.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The core framework for Jimmy Page\'s expressive blues runs.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The classic rock mode providing the major-triad punch in the chorus.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'A5, E5, and D5 root-fifth power chords.' },
      ],
    },
  },

  'never-tear-us-apart': {
    slug: 'never-tear-us-apart',
    songTitle: 'Never Tear Us Apart',
    artist: 'INXS',
    key: 'A Minor / C Major',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Dramatic Stop-Time Orchestral Pauses and Soulful Relative Major Shift (Am → C)',
    emotionalHook: 'INXS creates theatrical rock drama by using silence as an instrument. The song opens with a tender, moody acoustic progression in A minor (Am - F - Dm - F), punctuated by sudden, jaw-dropping full-band pauses during orchestral string hits. When the chorus arrives, the harmony swings triumphantly into the relative major C (C - F - C - F), lifting Michael Hutchence\'s vocal into an unforgettable stadium anthem.',
    romanProgression: 'i - VI - iv - VI (Verse) | III - VI - III - VI (Chorus)',
    chords: ['Am', 'F', 'Dm', 'C'],
    progressionExplanation: [
      'Am (i): Somber minor tonic establishing romantic intimacy and vulnerability.',
      'F (VI): Submediant chord providing grand, cinematic orchestral breadth.',
      'Dm (iv): Minor subdominant deepening the emotional resonance before the dramatic stop.',
      'C (III) in Chorus: Soaring resolution into the relative major tonic, turning melancholy into triumph.',
    ],
    voiceLeadingInsights: [
      'The common tone A rings across both Am and F, giving the chord transition a smooth, seamless emotional lift.',
      'The stop-time choke demands absolute silence across all six strings, creating immense dynamic contrast.',
      'In the chorus, alternating between C and F highlights the plagal (IV to I) cadence of pure rock and soul.',
    ],
    guitarPerspective: 'Strum with a relaxed right wrist on acoustic guitar to build the organic foundation. Use your fretting hand and right palm together to choke strings instantly into dead silence on the stop-time cues.',
    songwriterTakeaway: 'Use complete silence to magnify your emotional peaks. A dramatic pause followed by a clean modulation into the relative major will electrify any ballad.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The somber Aeolian scale of the verse.' },
        { name: 'C Major Scale', slug: 'major', description: 'The triumphant relative major scale of the chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing bittersweet sentiment.' },
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode of the anthemic chorus.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Resonant open Am, C, and Dm voicings.' },
        { name: 'Barre Chords', slug: 'major', description: 'Full F major barre chord anchoring the cinematic swell.' },
      ],
    },
  },

  'my-hero': {
    slug: 'my-hero',
    songTitle: 'My Hero',
    artist: 'Foo Fighters',
    key: 'E Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Pedal Points & Drone Chords',
    coreSecret: 'Melodic A-and-G String Octaves Over Pounding Drums and Ringing Open High E/B Strings',
    emotionalHook: 'Dave Grohl creates an unstoppable wall of alternative rock power by combining rolling tom drums with melodic octaves on the A and G strings. In both the verse and chorus, open high B and E strings are left to ring continuously across E5, C#m7, and Aadd9, providing a shimmering acoustic halo that makes the heavy distorted guitars sound vast, anthemic, and deeply emotional.',
    romanProgression: 'I - vi7 - IVadd9 (Verse) | I - vi7 - IV - V (Chorus)',
    chords: ['E5', 'C#m7', 'Aadd9', 'Bsus4'],
    progressionExplanation: [
      'Intro Octave Riff: Moving octaves (E → D# → C#) on strings 5 and 3 cutting through thunderous drums.',
      'E5 (I): Massive open-string rock tonic providing thunderous low-end weight.',
      'C#m7 (vi7): Minor submediant adding emotional bittersweet gravity.',
      'Aadd9 (IVadd9): Subdominant chord with ringing high B and E strings delivering uplifting dream-rock warmth.',
      'Bsus4 (V): Suspended dominant building anticipation before resolving home to E.',
    ],
    voiceLeadingInsights: [
      'The open 1st (high E) and 2nd (B) strings act as stationary drone tones across all chord shapes, unifying the progression.',
      'Fretting octaves on strings 5 and 3 requires muting the middle 4th (D) string with the underside of the index finger.',
      'The chorus opens up with full, ringing open power chords that explode out of the palm-muted verse.',
    ],
    guitarPerspective: 'Keep your fretting index finger flat across the 4th string while fretting octaves on strings 5 and 3 so you can strum aggressively without unwanted string noise. In the chorus, let the high open E and B strings ring loud and clear over cranked tube distortion.',
    songwriterTakeaway: 'Let the highest strings on your guitar ring open across every chord change. It acts as an acoustic glue that turns standard power chords into lush, stadium-sized anthems.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major Scale', slug: 'major', description: 'The Ionian scale governing the soaring melodies and octaves.' },
        { name: 'E Major Pentatonic', slug: 'major-pentatonic', description: 'The framework for the uplifting vocal and guitar hooks.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The triumphant major mode of the anthem.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'Driving E5, C#m7, and Aadd9 open power voicings.' },
        { name: 'Suspended Chords', slug: 'suspended', description: 'The Bsus4 chord driving the chorus turnaround.' },
      ],
    },
  },
  'shine-on-you-crazy-diamond': {
    slug: 'shine-on-you-crazy-diamond',
    songTitle: 'Shine On You Crazy Diamond (Parts I–V)',
    artist: 'Pink Floyd',
    key: 'G Minor',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Four-Note Syd Barrett Dorian Theme (Bb - F - G - E) and Ambient Slow Blues Phrasing',
    emotionalHook: 'David Gilmour conjures one of the most haunting musical eulogies in history using just four notes: Bb, F, G, and E. While the ambient keyboards sustain a dark G natural minor (Aeolian) chord pad, Gilmour\'s phrase ends on E natural—the bright major sixth of G Dorian. This single non-diatonic note pierces the gloom like a ray of sunlight, creating a poignant, eternal tribute to founding member Syd Barrett.',
    romanProgression: 'Four-Note Dorian Motif | i - v - iv - i - ♭VI - V7 (Slow Blues Solo) | i - ♭VI - ♭III - ♭VII (Part IV)',
    chords: ['Gm', 'Dm', 'Cm', 'Eb', 'D7', 'Bb', 'F'],
    progressionExplanation: [
      'Four-Note Motif (Bb - F - G - E): The single-note theme introducing the bright Dorian major sixth (E natural).',
      'Gm (i) to Dm (v): Stately minor progression maintaining cosmic, suspended mystery.',
      'Cm (iv) to Gm (i): Plaintive subdominant resolution deepening the blues sorrow.',
      'Eb (♭VI) to D7 (V7): Classical minor turnaround with the major dominant delivering immense gravity.',
    ],
    voiceLeadingInsights: [
      'The E natural in the 4-note motif creates a tritone with the Bb root note of the Gm triad, producing instant bittersweet tension.',
      'Gilmour waits for the Binson Echorec tape delay to bloom between phrases, using silence to make each note feel monumental.',
      'In Part IV, the progression expands into a majestic descending rock cadence: Gm → Eb → Bb → F.',
    ],
    guitarPerspective: 'Play \'The Black Strat\' using the neck single-coil pickup with a clean, high-headroom Hiwatt amplifier and a subtle boost. Execute the 1.5-step bends on fret 17 of the B string with three fingers supporting, and add smooth, wide finger vibrato only after reaching the target pitch.',
    songwriterTakeaway: 'A short, memorable melodic motif can carry an entire 13-minute composition if you give it harmonic weight. Ending a minor-key phrase on the major sixth (Dorian) adds timeless poignancy.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Dorian Mode', slug: 'dorian', description: 'The modal source of the signature E natural in the four-note theme.' },
        { name: 'G Minor Pentatonic', slug: 'minor-pentatonic', description: 'The framework for Gilmour\'s soaring blues solos.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The soulful minor mode with bright major-sixth color.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'major', description: 'Root-5 and Root-6 minor barre chords anchoring the rhythm.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'The D7 chord powering the turnaround.' },
      ],
    },
  },

  'karma-police': {
    slug: 'karma-police',
    songTitle: 'Karma Police',
    artist: 'Radiohead',
    key: 'A Minor / E Minor',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Chaconnes',
    coreSecret: 'Stepwise Inverted Bass Descent (Am → D/F# → Em → G) and Ethereal B Minor Bridge Modulation',
    emotionalHook: 'Thom Yorke crafts an atmosphere of paranoid elegance using a descending acoustic bassline borrowed from The Beatles. The verse steps down from Am through D/F# (with the thumb fretting the bass note) to Em and G. When the bridge arrives with \'For a minute there, I lost myself\', the song modulates into B minor, letting swirling tape echo feedback wash over lush acoustic arpeggios in a moment of transcendent release.',
    romanProgression: 'i - IV6 - v - VII - i - VI - v - VII (Verse) | III - IV - VII - v (Chorus) | ii - IV - VII - IV (Bridge in Bm)',
    chords: ['Am', 'D/F#', 'Em', 'G', 'F', 'C', 'Bm', 'D'],
    progressionExplanation: [
      'Am (i) to D/F# (IV6): Stepwise bass descent (A → F#) introducing a warm major-sixth Dorian flavor.',
      'Em (v) to G (VII): Continues the descent into the relative major realm.',
      'F (VI) in Second Half: Dark submediant chord grounding the progression in natural minor.',
      'Bm Modulation (Bridge): Ethereal shift into B minor providing an intoxicating sense of surrender.',
    ],
    voiceLeadingInsights: [
      'The bassline moves cleanly: A (open A) → F# (fret 2 low E) → E (open low E) → G (fret 3 low E).',
      'The inverted D/F# chord maintains an open D triad on strings 1–3, keeping treble shimmer high while the bass drops.',
      'In the outro, Jonny Greenwood drives a Roland Space Echo into self-oscillation, turning delay repeats into a jet-engine roar.',
    ],
    guitarPerspective: 'Wrap your fretting thumb over the top of the neck to anchor the 2nd fret of the low E string for D/F#, while keeping your middle, ring, and pinky fingers relaxed for the high D triad. Strum with acoustic dynamic restraint in the verse.',
    songwriterTakeaway: 'A descending slash chord (like IV/6) softens the descent from minor tonic to dominant, giving acoustic chord progressions the narrative grace of classic 1960s pop.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The Aeolian scale underpinning the verse and chorus.' },
        { name: 'B Natural Minor', slug: 'minor', description: 'The modulated bridge scale.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing reflective, somber emotion.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'The D/F# thumb-over chord that defines the verse walkdown.' },
        { name: 'Open Chords', slug: 'major', description: 'Resonant open acoustic voicings used throughout.' },
      ],
    },
  },

  'are-you-gonna-be-my-girl': {
    slug: 'are-you-gonna-be-my-girl',
    songTitle: 'Are You Gonna Be My Girl',
    artist: 'Jet',
    key: 'A Major / A Mixolydian',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'High-Tempo Motown Shuffle Beat, Chromatic Walkup, and Mixolydian ♭VII - IV - I Stabs',
    emotionalHook: 'Jet revitalized 2000s garage rock by pairing the iconic 1960s Motown shuffle beat of \'Lust for Life\' with aggressive Australian pub rock power chords. Starting with a syncopated chromatic bass walkup, the guitars stab staccato power chords (A5 - C5 - D5) before launching into a driving ♭VII - IV - I (G - D - A) chorus that demands listeners move.',
    romanProgression: 'Walkup -> I5 - ♭III5 - IV5 (Verse) | ♭VII - IV - I (Chorus)',
    chords: ['A5', 'C5', 'D5', 'G', 'D', 'A'],
    progressionExplanation: [
      'A Chromatic Walkup: Fast single-note walkup on the low E string answering the tambourine.',
      'A5 - C5 - D5: Staccato power chord stabs locking with the high-tempo 205 BPM dance pulse.',
      'G (♭VII) to D (IV) to A (I): The quintessential rock double-plagal cadence driving the anthemic chorus.',
    ],
    voiceLeadingInsights: [
      'The chromatic walkup (open E → G → G# → A) builds urgent kinetic energy into the root chord.',
      'The chord stabs cut off dead on beat 4, creating tight rhythmic silence that makes the groove explode.',
      'The chorus uses open major triads (G, D, A) to create a wide, ringing contrast to the tight verse power chords.',
    ],
    guitarPerspective: 'Keep your right wrist completely loose while playing downstrokes at 205 BPM. Choke the strings with your left-hand palm immediately after striking the power chords to preserve the punchy staccato feel.',
    songwriterTakeaway: 'Take a classic, proven dance groove (like a Motown shuffle) and supercharge it with aggressive rock power chords and tight dynamic stops for an instant radio anthem.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale for the gritty garage-rock solo fills.' },
        { name: 'A Mixolydian Mode', slug: 'mixolydian', description: 'Supplies the borrowed ♭VII (G) chord in the chorus.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The rock mode delivering swagger and raw power.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power', description: 'A5, C5, and D5 root-fifth power shapes.' },
        { name: 'Open Chords', slug: 'major', description: 'Open G, D, and A chords driving the chorus.' },
      ],
    },
  },

  'snow-hey-oh': {
    slug: 'snow-hey-oh',
    songTitle: 'Snow (Hey Oh)',
    artist: 'Red Hot Chili Peppers',
    key: 'G# Minor / B Major',
    category: 'pedal-tone-drone',
    categoryLabel: 'Pedal Points & Drone Chords',
    coreSecret: 'Alternate-Picked Hammer-On Arpeggio Cycle (G#m - E - B - F#) with Stationary Chord Anchors',
    emotionalHook: 'John Frusciante turns a standard four-chord pop progression (i - VI - III - VII in G# minor) into an athletic guitar tour de force. By arpeggiating the chords as sixteenth-note dyads with rapid hammer-ons and pull-offs on the 3rd string, he creates a continuous, sparkling waterfall of sound that feels simultaneously hypnotic, intricate, and deeply emotional.',
    romanProgression: 'i - VI - III - VII (G#m - E - B - F#)',
    chords: ['G#m', 'E', 'B', 'F#'],
    progressionExplanation: [
      'G#m (i): Minor tonic anchored on the 6th fret of the D string.',
      'E (VI): Major submediant adding emotional lift, rooted on the 6th fret of the A string.',
      'B (III): Relative major providing bright sunshine, rooted on the 7th fret of the low E string.',
      'F# (VII): Subtonic dominant chord providing smooth voice leading back to G#m.',
    ],
    voiceLeadingInsights: [
      'The 4h6p4 hammer-on/pull-off motif on the G string remains stationary while the bass roots shift beneath it.',
      'The shifting bass notes (G# → E → B → F#) outline the full harmonic structure with zero wasted motion.',
      'The chorus opens up into full ringing chords, providing massive acoustic relief after the relentless picking of the verse.',
    ],
    guitarPerspective: 'Use a light .60mm pick and position your hand close to the bridge for maximum pick control. Practice strict down-up alternate picking slowly with a metronome at 70 BPM to build muscle memory before speeding up to 104 BPM.',
    songwriterTakeaway: 'Take a simple four-chord loop and disguise it behind an intricate, virtuosic picking pattern. It turns a familiar chord progression into an iconic instrumental calling card.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G# Natural Minor', slug: 'minor', description: 'The Aeolian scale governing the relentless riff.' },
        { name: 'B Major Scale', slug: 'major', description: 'The relative major scale of the uplifting chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing melancholy forward motion.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'major', description: 'Root-5 and Root-6 barre chords in the chorus.' },
      ],
    },
  },

  'red-house': {
    slug: 'red-house',
    songTitle: 'Red House',
    artist: 'The Jimi Hendrix Experience',
    key: 'B Major / B Blues',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Benchmark Slow 12-Bar Blues in B with Chromatic Sliding Dominant Ninth Chords',
    emotionalHook: 'Jimi Hendrix strips away the psychedelic fuzz and delivers a masterclass in traditional electric slow blues. Built over a 12-bar blues in B, Hendrix uses sliding dominant ninth chords (B9 → C9 → C#9) in the turnaround and wrings out singing, microtonal bends and vocal vibrato that bridge the gap between Delta blues authenticity and explosive rock sustain.',
    romanProgression: 'I7 - IV7 - I7 - V7 - IV7 - I7 - V7',
    chords: ['B7', 'E7', 'F#7', 'B9', 'C9', 'C#9'],
    progressionExplanation: [
      'B7 (I7): Heavy, slow-blues tonic established with thumb-over bass notes.',
      'E7 (IV7): Subdominant chord deepening the blues narrative in bar 5.',
      'F#7 (V7): Dominant chord delivering maximum harmonic tension in the turnaround.',
      'Sliding 9th Chords: B9 sliding chromatically up to C#9 and back, adding sophisticated jazz-blues swing.',
    ],
    voiceLeadingInsights: [
      'The chromatic sliding 9th chords move parallel half-steps, creating smooth, greasy passing motion.',
      'Hendrix solos in both B minor and B major pentatonic, targeting the major third D# over the I chord for soulful sweetness.',
      'Without a bass guitar on the recording, Hendrix\'s guitar covers both low-end thumb pulses and screaming lead fills.',
    ],
    guitarPerspective: 'Set your amp to natural tube saturation on the verge of feedback. Use your guitar volume knob to clean up for subtle chord comping on 5, and roll up to 10 for screaming solo sustain. Let your bends breathe at 66 BPM.',
    songwriterTakeaway: 'Master the 12-bar blues form before breaking the rules. Adding jazz-inflected ninth chords and chromatic passing slides elevates standard blues into timeless art.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Blues Scale', slug: 'blues', description: 'The primary scale of Hendrix\'s slow-blues solo lines.' },
        { name: 'B Major Pentatonic', slug: 'major-pentatonic', description: 'Adds sweet major-third color over the B7 chord.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The dominant blues mode over the B7, E7, and F#7 chords.' },
      ],
      chords: [
        { name: 'Dominant Ninth Chords', slug: 'dominant-ninth', description: 'The sliding B9, C9, and C#9 turnaround voicings.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'The foundational 12-bar blues seventh chords.' },
      ],
    },
  },

  'learn-to-fly': {
    slug: 'learn-to-fly',
    songTitle: 'Learn to Fly',
    artist: 'Foo Fighters',
    key: 'B Major',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Chiming Open High E/B Strings and Borrowed Minor v Chord (F#m) in a Major Key Anthem',
    emotionalHook: 'Dave Grohl creates an infectious power-pop anthem by blending bright open B major chords with an unexpected borrowed chord. Instead of the standard diatonic major V chord (F#), the verse progression uses a minor v chord (F#m): B - F#m - E. This subtle touch of modal mixture injects a poignant, wistful alternative-rock mood before the chorus erupts into stadium-sized joy.',
    romanProgression: 'I - v - IV (Verse) | I - vi - IV (Chorus) | ♭VI - ♭VII - I (Bridge)',
    chords: ['B', 'F#m', 'E', 'G#m', 'G', 'A'],
    progressionExplanation: [
      'B (I): Bright major tonic with open high B and E strings chiming.',
      'F#m (v): Borrowed minor dominant chord introducing sweet alternative-rock melancholy.',
      'E (IV): Major subdominant delivering warm, uplifting release.',
      'G#m (vi) in Chorus: Relative minor deepening the emotional resonance of the vocal hook.',
      'G (♭VI) to A (♭VII) in Bridge: Chromatic modal rock ascent driving into the final chorus explosion.',
    ],
    voiceLeadingInsights: [
      'Leaving strings 1 and 2 open across B, F#m, and E provides an acoustic drone that glues the chord changes together.',
      'The F#m chord replaces the sharp A# leading tone with a natural A, momentarily pulling the harmony into B Mixolydian.',
      'The bridge features the famous rock double-step climb: G → A → B, delivering immense forward drive.',
    ],
    guitarPerspective: 'Fret modified barre chords on the low strings while letting the high B and E strings ring completely open. Strum with driving eighth notes at 136 BPM, locking tightly with the snare drum.',
    songwriterTakeaway: 'Substitute a minor v chord in place of a major V chord in your major-key progression. It immediately removes commercial cheese and adds poignant alternative-rock authenticity.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Major Scale', slug: 'major', description: 'The primary scale of the uplifting melodies and chorus.' },
        { name: 'B Mixolydian Mode', slug: 'mixolydian', description: 'The mode suggested by the natural A in the borrowed F#m chord.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode of the chorus anthem.' },
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The rock mode governing the bridge ascent.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open-string chiming B and E voicings.' },
        { name: 'Power Chords', slug: 'power', description: 'Driving chorus and bridge power chords.' },
      ],
    },
  },

  'babe-im-gonna-leave-you': {
    slug: 'babe-im-gonna-leave-you',
    songTitle: 'Babe I\'m Gonna Leave You',
    artist: 'Led Zeppelin',
    key: 'A Minor',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Chaconnes',
    coreSecret: 'Flamenco Acoustic Chromatic Bass Walkdown (Am - Am/G - Am/F# - F - E7) Exploding into Hard Rock',
    emotionalHook: 'Jimmy Page illustrates his famous \'light and shade\' philosophy by contrasting delicate flamenco-inspired acoustic fingerpicking with sudden, explosive eruptions of heavy electric distortion. The verse is built on an ancient passacaglia descending bassline in A minor (A → G → F# → F → E), where the major-sixth Am/F# chord injects haunting Dorian mystery before the full band crashes down like thunder.',
    romanProgression: 'i - i4/2 - i6 - VI - V7 (Acoustic Verse) | i - III - IV - VI - V (Electric Chorus)',
    chords: ['Am', 'Am/G', 'Am/F#', 'F', 'E7', 'C', 'D'],
    progressionExplanation: [
      'Am (i): Somber acoustic minor tonic.',
      'Am/G (i4/2): Stepwise bass drop to G on the low E string.',
      'Am/F# (i6): Dorian major-sixth chord featuring F# in the bass, adding haunting classical color.',
      'F (VI): Resolves the chromatic descent into the major submediant.',
      'E7 (V7): Classical major dominant with the G# leading tone pulling decisively back into Am.',
    ],
    voiceLeadingInsights: [
      'The bassline descends by chromatic half-steps from A to E, creating an inescapable feeling of tragic inevitability.',
      'The upper triad voices (C, E, A) ring continuously as an acoustic ostinato over the changing bass notes.',
      'The transition from delicate acoustic fingerstyle to cranked Supro amplifier power chords creates shocking dynamic drama.',
    ],
    guitarPerspective: 'Play the acoustic verse using thumb-and-finger (PIMA) arpeggio rolls on a steel-string acoustic, wrapping your thumb over the neck to catch the low F# and F bass notes. In the chorus, slam into power chords with heavy downstrokes.',
    songwriterTakeaway: 'Extreme dynamic contrast is one of the most powerful tools in music. Whispering fingerpicked acoustic verses make distorted electric chorus explosions hit ten times harder.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'The Aeolian scale of the primary progression.' },
        { name: 'A Dorian Mode', slug: 'dorian', description: 'Supplies the natural F# bass note in Am/F#.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing dark gravity.' },
        { name: 'Dorian Mode', slug: 'dorian', description: 'The folk mode introducing the raised sixth interval.' },
      ],
      chords: [
        { name: 'Slash Chords', slug: 'slash', description: 'The Am/G and Am/F# chromatic descending bass shapes.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'The E7 chord resolving the chromatic cycle.' },
      ],
    },
  },

  'working-class-man': {
    slug: 'working-class-man',
    songTitle: 'Working Class Man',
    artist: 'Jimmy Barnes',
    key: 'C Major',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Straight-Eighth Heartland Rock Cadence (I - IV - I - V and IV - I - V - vi) with Soaring Leads',
    emotionalHook: 'Written by Jonathan Cain and immortalized by Jimmy Barnes, this is the definitive blue-collar rock anthem of Australia. Built on an immovable straight-eighth rhythm that drives like an interstate road train, the song uses honest open chords (C, F, G, Am) and triumphant C major pentatonic arena guitar solos to capture the dignity, sweat, and endurance of everyday working life.',
    romanProgression: 'I - IV - I - V (Verse) | IV - I - V - vi - IV - I - V (Chorus)',
    chords: ['C', 'F', 'G', 'Am'],
    progressionExplanation: [
      'C (I): The solid, unyielding major tonic of the working-class hero.',
      'F (IV): The subdominant lift starting the chorus with anthemic pride.',
      'G (V): Driving dominant chord delivering forward rock propulsion.',
      'Am (vi): Emotional minor submediant injecting heartfelt depth into the chorus.',
    ],
    voiceLeadingInsights: [
      'The steady eighth-note pulse on root notes keeps the rhythmic engine locked with the bass and drums.',
      'The chorus opens with the IV chord (F), immediately giving the vocal hook an expansive, uplifting surge.',
      'The guitar solo targets the major 3rd (E) and tonic (C) with singing, vocal-like bends that mirror Barnesy\'s voice.',
    ],
    guitarPerspective: 'Lock into a steady straight-eighth rhythm with gentle palm muting on the verses. In the chorus, open up with ringing downstroke chords through a cranked Marshall JCM800. For the solo, dig into 8th-position C major pentatonic with wide vibrato.',
    songwriterTakeaway: 'You don\'t need complex chords to write a timeless anthem. Four honest chords played with passionate conviction, relentless tempo, and a soaring vocal melody will move millions of people.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The Ionian scale underpinning the honest rock chord changes.' },
        { name: 'C Major Pentatonic', slug: 'major-pentatonic', description: 'The melodic framework for the soaring arena guitar solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright major mode of pure triumph and optimism.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'The foundational open C, G, and Am voicings.' },
        { name: 'Barre Chords', slug: 'major', description: 'Full F major barre chord anchoring the anthemic chorus.' },
      ],
    },
  },

  'fell-on-black-days': {
    slug: 'fell-on-black-days',
    songTitle: 'Fell on Black Days',
    artist: 'Soundgarden',
    key: 'E Minor',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Hypnotic 6/4 Metric Pulse with Heavy Low E Palm Muting and Dorian Major IV Chord Lift',
    emotionalHook: 'Chris Cornell and Kim Thayil create a masterpiece of brooding grunge tension using an unexpected time signature. Played in 6/4 time (subdivided as 4 beats of heavy riff followed by 2 beats of resolving chord stabs), the verse feels like an off-kilter, swaying march. In the chorus, the progression unexpectedly introduces a major IV chord (A), injecting a burst of bright Dorian color into the dark sludgy swamp.',
    romanProgression: '6/4 Riff in Em | i - ♭III - ♭VI - IV (Chorus)',
    chords: ['Em', 'G', 'C', 'A'],
    progressionExplanation: [
      '6/4 Metric Riff: Brooding low E single-note walkdown across 6 beats per measure.',
      'Em (i) to G (♭III): Somber minor tonic moving to the blues-rock minor third.',
      'C (♭VI): Dark submediant chord completing the natural minor cadence.',
      'A (IV) in Chorus: The major IV chord carrying the natural C# note, delivering a sudden, radiant Dorian lift.',
    ],
    voiceLeadingInsights: [
      'The 6/4 meter feels completely natural because it groups as 4/4 followed by a 2/4 measure, giving the riff an addictive swing.',
      'The low E palm muting keeps the sound tight and heavy before blooming into open strings on the chorus.',
      'The major A chord in the chorus breaks the gloom with a raised C# note, creating an unforgettable harmonic release.',
    ],
    guitarPerspective: 'Count 1-2-3-4-5-6 out loud while practicing the low E string walkdown. Keep your palm muting heavy on the verse, and hit the major A chord in the chorus with full open string resonance.',
    songwriterTakeaway: 'Odd time signatures don\'t have to sound mathy or jarring. Grouping 6 beats into 4 + 2 creates a natural, hypnotic groove that gives your riffs an unforgettable signature feel.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor', slug: 'minor', description: 'The dark Aeolian scale of the brooding verse riff.' },
        { name: 'E Blues Scale', slug: 'blues', description: 'Supplies the blue note (Bb) in the solo licks.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The mode introducing the uplifting major IV (A) chord in the chorus.' },
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing somber grunge weight.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open Em, G, C, and A voicings.' },
      ],
    },
  },

  'money': {
    slug: 'money',
    songTitle: 'Money',
    artist: 'Pink Floyd',
    key: 'B Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: '7/4 Asymmetric Time Signature Minor Blues Shifting to Straight 4/4 for Three-Stage Solo Mastery',
    emotionalHook: 'Roger Waters and David Gilmour created one of the only global hit singles written in 7/4 time. Accompanied by the rhythmic loops of cash registers and jingling coins, the 7-beat walking bass riff drives a modified 12-bar minor blues in B. When the guitar solo arrives, the rhythm section drops the 7th beat and shifts into straight 4/4 rock, giving Gilmour\'s screaming three-stage blues solo staggering momentum and release.',
    romanProgression: '7/4 Minor Blues (Bm - Em - F#m) | 4/4 Straight Rock Solo (Bm - Em - F#m)',
    chords: ['Bm', 'Em', 'F#m'],
    progressionExplanation: [
      '7/4 Bass Riff: Asymmetric 7-beat walking line in B Dorian/minor.',
      'Bm (i): Heavy, swaggering minor tonic anchored by the 7/4 bassline.',
      'Em (iv) to F#m (v): Minor subdominant and dominant completing the 12-bar blues cycle.',
      '4/4 Solo Shift: Sudden metric transformation into straight 4/4 rock for Gilmour\'s iconic three-stage guitar solo.',
    ],
    voiceLeadingInsights: [
      'The 7/4 meter divides as 4 beats + 3 beats, creating a walking gait that feels perpetually on the move.',
      'The transition to 4/4 removes the 3-beat tail, creating an exhilarating rush of rock speed without actually changing tempo.',
      'Gilmour structured the solo in three acts: dry and compressed, double-tracked through custom fuzz, and soaring in wet tape delay.',
    ],
    guitarPerspective: 'Count 7/4 as 1-2-3-4, 1-2-3 while playing the walking riff on the 5th and 4th strings. When the solo hits, lock into the straight 4/4 groove, dig in with 7th-position B minor pentatonic bends, and let your Stratocaster roar.',
    songwriterTakeaway: 'Shift time signatures at your song\'s climax. Moving from an odd meter (like 7/4) into straight 4/4 for an instrumental solo creates an explosive sensation of acceleration and freedom.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for Gilmour\'s screaming three-part solo.' },
        { name: 'B Dorian Mode', slug: 'dorian', description: 'Supplies the bright major sixth (G#) in the walking bass riff.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The progressive blues mode with smooth major-sixth color.' },
      ],
      chords: [
        { name: 'Minor Seventh Chords', slug: 'minor-seventh', description: 'Staccato Bm7 chord stabs in 7/4 time.' },
        { name: 'Barre Chords', slug: 'minor', description: 'Root-5 and Root-6 minor barre chords across the 12-bar blues.' },
      ],
    },
  },

  'one': {
    slug: 'one',
    songTitle: 'One',
    artist: 'Metallica',
    key: 'B Minor',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'The Classical B Minor Harmonic Dominant (F#) Shifting to Rhythmic Thrash Metric Sextuplets',
    emotionalHook: 'The narrative arc of "One" begins as a classical-influenced dark Aeolian lament cycling Bm - G - Em - F#. The harmonic anchor is the sharp F# major dominant chord (borrowed from B Harmonic Minor): its A# leading tone injects unbearable tragic tension that resolves back to the root Bm. As the psychological horror deepens, the composition strips away lyricism and plunges into low E minor sextuplet thrash machine-gun warfare.',
    romanProgression: 'i - VI - iv - V (Verse) | i5 - ♭II5 - i5 - ♭III5 (Breakdown)',
    chords: ['Bm', 'G', 'Em', 'F#', 'E5', 'F5', 'G5'],
    progressionExplanation: [
      'Bm (i): Chilling minor tonic evoking solitary confinement and isolation.',
      'G (VI): Tragic submediant providing brief melodic vulnerability.',
      'Em (iv): Minor subdominant elevating the harmonic despair.',
      'F# (V): Major dominant with raised A# leading tone creating dramatic harmonic minor gravity.',
      'E5 Machine Gun Breakdown: Metric sextuplet rhythmic warfare locking with double kick drums.',
    ],
    voiceLeadingInsights: [
      'Inner-voice melody moves smoothly: D (Bm) → D (G) → E (Em) → C#/A# (F#), creating classical counterpoint.',
      'Dynamic extremes: delicate Roland JC-120 clean chorus contrasts with quad-tracked Mesa Boogie Mark IIC+ scooped distortion.',
      'The meter shifts smoothly through 4/4, 3/4, and 2/4 before unleashing the double-time 190 BPM thrash climax.',
    ],
    guitarPerspective: 'Play the intro clean arpeggios with relaxed alternate picking. In the breakdown, lock the edge of your right-hand palm over the bridge saddles for machine-gun percussive punch.',
    songwriterTakeaway: 'Use a formal harmonic progression (like i - VI - iv - V) to establish emotional intimacy before tearing it down with extreme tempo and rhythmic disruption.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Natural Minor', slug: 'minor', description: 'The foundation for the melancholy clean intro and verse arpeggios.' },
        { name: 'B Harmonic Minor', slug: 'harmonic-minor', description: 'Source of the raised A# leading tone in the F# major dominant chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode providing deep emotional pathos.' },
      ],
      chords: [
        { name: 'Barre Chords', slug: 'minor', description: 'Clean arpeggiated minor shapes across the fretboard.' },
        { name: 'Power Chords', slug: 'power-chords', description: 'Heavy palm-muted downstroke chords in the chorus and breakdown.' },
      ],
    },
  },

  'black-magic-woman': {
    slug: 'black-magic-woman',
    songTitle: 'Black Magic Woman',
    artist: 'Santana',
    key: 'D Minor',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'D Dorian Modal Sweetness (Natural 6th B) Resolving Over an Authentic Minor Blues Turnaround',
    emotionalHook: 'Carlos Santana takes Peter Green\'s minor blues and elevates it with Afro-Cuban percussion and D Dorian modal elegance. By continually landing on the natural major 6th (B) over Dm7, Santana removes the dark sadness of natural minor and replaces it with sultry, singing warmth before snapping the harmony into sharp focus with the A7 dominant turnaround.',
    romanProgression: 'i7 - v7 - i7 - iv7 - i7 - V7 - i7',
    chords: ['Dm7', 'Am7', 'Gm7', 'A7', 'D7', 'G7'],
    progressionExplanation: [
      'Dm7 (i7): Sensual minor tonic defined by the singing Dorian natural 6th.',
      'Am7 (v7): Gentle modal minor fifth chord avoiding harsh dominant tension in the verse.',
      'Gm7 (iv7): Minor subdominant deepening the blues emotional gravity.',
      'A7 (V7): Harmonic minor dominant supplying the sharp C# leading tone turnaround.',
      'Gypsy Queen Jam: High-speed Gábor Szabó Latin jazz vamp cycling D7 and G7.',
    ],
    voiceLeadingInsights: [
      'The B natural in D Dorian resolves smoothly down to Bb in Gm7 and down to A in the tonic chord.',
      'The raised C# leading tone in A7 creates magnetic pull back to the D root.',
      'Call-and-response interplay between guitar lines and Gregg Rolie\'s vocals forms a continuous melodic conversation.',
    ],
    guitarPerspective: 'Roll guitar tone back to 6 on the neck pickup for Santana\'s creamy woman tone. Let sustained notes bloom with wide wrist vibrato.',
    songwriterTakeaway: 'Incorporate the natural 6th in a minor progression to create an exotic, romantic modal atmosphere.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Dorian Mode', slug: 'dorian', description: 'The signature Latin blues-rock mode emphasizing the sweet major 6th (B).' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'Core scale for biting blues-rock double-stops and string bends.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'The modal heart of Santana\'s guitar vocabulary.' },
      ],
      chords: [
        { name: 'Minor Seventh Chords', slug: 'minor-seventh', description: 'Dm7, Am7, and Gm7 comping shapes.' },
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'A7 turnaround dominant chord.' },
      ],
    },
  },

  'rooster': {
    slug: 'rooster',
    songTitle: 'Rooster',
    artist: 'Alice in Chains',
    key: 'F# Minor',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Two-Chord Hypnotic F# Dorian Arpeggiation Exploding Into Chromatic Grunge Tritone Anguish',
    emotionalHook: 'Jerry Cantrell crafts one of grunge\'s most haunting soundscapes with just two alternating chords: F#m and A (i - ♭III). Soaked in chorus and flanging in half-step down tuning, the progression feels suspended in memory and trauma. When the chorus detonates, Cantrell adds the major IV (B) and the dissonant flat-five (C), turning modal stillness into a harrowing wall of distorted guitar fury.',
    romanProgression: 'i - ♭III (Verse) | i5 - ♭III5 - IV5 - ♭V5 (Chorus)',
    chords: ['F#m', 'A', 'B', 'C', 'F#5', 'A5', 'D5'],
    progressionExplanation: [
      'F#m (i) to A (♭III): Hypnotic two-chord movement contrasting heavy minor tonic with warm relative major.',
      'B (IV): Major subdominant introducing Dorian brightness before the sonic drop.',
      'C (♭V): Dissonant tritone shock injecting visceral psychological tension.',
      'Half-step down tuning (Eb): Deepens string slackness and amplifies low-end resonance.',
    ],
    voiceLeadingInsights: [
      'Ringing open A and high E strings create a continuous acoustic drone across chord changes.',
      'The sudden leap to high-gain distortion mirrors the lyrical explosion from quiet dread to active warfare.',
      'Jerry Cantrell\'s vocal wah solo matches the expressive contours of Layne Staley\'s vocal screams.',
    ],
    guitarPerspective: 'Let the chorus and flanger modulate the clean verse arpeggio. In the chorus, slam heavy downstroke power chords with wide picking hand movement.',
    songwriterTakeaway: 'You do not need many chords to build immense emotional weight—two cycling chords combined with extreme sonic dynamics can define an entire generational anthem.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F# Natural Minor', slug: 'minor', description: 'Brooding scale framework for verse harmonies.' },
        { name: 'F# Blues Scale', slug: 'blues-scale', description: 'Supplies the tritone blue note (C) in the heavy chorus.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The dark minor mode foundation.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Drop-tuned heavy power chords in Eb Standard.' },
      ],
    },
  },

  'life-in-the-fast-lane': {
    slug: 'life-in-the-fast-lane',
    songTitle: 'Life in the Fast Lane',
    artist: 'Eagles',
    key: 'E Minor',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrids & Minor Pentatonic',
    coreSecret: 'Syncopated String-Skipping Funk Riffing Combined with Dominant 7th Blues Harmonies',
    emotionalHook: 'Joe Walsh took an eccentric guitar warm-up exercise and transformed it into a hard-rock freight train. Built on a syncopated 16th-note string-skipping riff in E, the song fuses James Brown funk discipline with blistering blues-rock overdrive. The harmonic engine shifts between funky E7 dominant chords and a surprise borrowed ♭VI7 (C7), supercharging the turnaround with West Coast swagger.',
    romanProgression: 'I7 - IV7 - I7 - V7 - ♭VI7 - V7',
    chords: ['E7', 'A7', 'B7', 'C7', 'E5'],
    progressionExplanation: [
      'E5 Riff: Low E string pedal point skipping to 4th-string blues accents on the 16th-note offbeats.',
      'E7 to A7 (I7 - IV7): Soulful funk-blues progression keeping the verses driving forward.',
      'C7 (♭VI7): Borrowed flat-sixth dominant chord delivering an unexpected harmonic jolt.',
      'B7 (V7): Authoritative dominant chord snapping the groove back to the tonic.',
    ],
    voiceLeadingInsights: [
      'Chromatic passing tones on fret 6 of the A string connect the 4th and 5th scale degrees with greasy blues authenticism.',
      'Tight palm muting on the downbeats creates punchy rhythmic contrast against the open-string double-stop accents.',
      'Joe Walsh and Don Felder trade harmonized lead lines in thirds, creating stereo width and sonic competition.',
    ],
    guitarPerspective: 'Lock your picking wrist close to the bridge saddles for instantaneous muting. Accentuate the first sixteenth note of each group to maintain the groove\'s infectious bounce.',
    songwriterTakeaway: 'Infuse straight rock grooves with syncopated funk rhythm and chromatic passing chords to create unstoppable danceable momentum.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The foundation for the iconic string-skipping opening riff.' },
        { name: 'E Blues Scale', slug: 'blues-scale', description: 'Adds the chromatic passing blue note (Bb).' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Harmonic color for dominant 7th funk chord comping.' },
      ],
      chords: [
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'E7, A7, and B7 blues chords.' },
      ],
    },
  },

  'limelight': {
    slug: 'limelight',
    songTitle: 'Limelight',
    artist: 'Rush',
    key: 'E Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Asymmetric 7/4 and 3/4 Time Signatures Blended with Ringing Suspended Chord Extensions',
    emotionalHook: 'Alex Lifeson revolutionized progressive rock guitar by abandoning traditional barre chords in favor of wide-interval suspended extensions with ringing open strings (Aadd9, F#7add11, Bsus4). By cycling these shimmering voicings through alternating meters of 7/4 and 3/4 before releasing into straight 4/4, Lifeson creates an exhilarating push-pull between intellectual complexity and anthemic radio accessibility.',
    romanProgression: 'IVadd9 - II7add11 - Vsus4 - I (in 7/4 & 3/4) | I - V6 - vi - IV (in 4/4)',
    chords: ['Aadd9', 'F#7add11', 'Bsus4', 'E', 'C#m'],
    progressionExplanation: [
      'Aadd9 (IVadd9): Shimmering subdominant with ringing B and E strings.',
      'F#7add11 (II7add11): Secondary dominant with open-string chime.',
      'Bsus4 (Vsus4): Suspended fifth chord creating suspended forward pull.',
      'E (I): Triumphant tonic resolution bursting with open string resonance.',
      'Isolated Guitar Solo: Lyrical E Lydian/Major phrasing with expressive whammy bar vibrato.',
    ],
    voiceLeadingInsights: [
      'The open B and high E strings remain stationary across every chord change, acting as an inverted harmonic pedal point.',
      'The 7/4 meter divides as 4 beats + 3 beats, creating an eager rhythmic lurch that refuses to settle.',
      'Lifeson\'s solo floats in isolated space with 350ms delay, highlighting melodic purity over speed.',
    ],
    guitarPerspective: 'Keep your fretting knuckles arched high to let the top two strings chime openly. Use gentle dips of the tremolo bar to give solo notes a singing vocal inflection.',
    songwriterTakeaway: 'Use open-string drone notes across shifting chord shapes to tie complex modal chord progressions into a unified, radiant sonic identity.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major Scale', slug: 'major', description: 'The luminous diatonic foundation of the song.' },
        { name: 'E Lydian Mode', slug: 'lydian', description: 'Supplies the raised 4th (A#) in Lifeson\'s soaring guitar solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'Bright major tonal center.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open ringing chord voicings with drone notes.' },
      ],
    },
  },

  'hold-the-line': {
    slug: 'hold-the-line',
    songTitle: 'Hold the Line',
    artist: 'Toto',
    key: 'F# Minor',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Minor',
    coreSecret: 'Syncopated Triplet Shuffle Locking with a Dramatic Minor Cadence and C#7 Dominant Turnaround',
    emotionalHook: 'Steve Lukather and David Paich created an arena rock masterclass by locking piano and guitar in a driving eighth-note triplet shuffle. The progression moves through a classic minor cycle (F#m - C#m - D - Bm), but the harmonic climax is the sharp major dominant C#7 (borrowed from F# Harmonic Minor): its E# leading tone demands resolution, catapulting Lukather into a benchmark blues-rock solo packed with stinging pinched harmonics.',
    romanProgression: 'i - v - VI - iv - V7 (Intro & Chorus) | i - VI - ♭VII - V7 (Solo)',
    chords: ['F#m', 'C#m', 'D', 'Bm', 'C#7', 'E'],
    progressionExplanation: [
      'F#m (i): Driving minor tonic establishing intense rock momentum.',
      'C#m (v): Natural minor dominant creating smooth stepwise voice leading.',
      'D (VI): Anthemic submediant opening up the harmonic space.',
      'Bm (iv): Minor subdominant preparing the cadence.',
      'C#7 (V7): Harmonic minor dominant with raised E# leading tone delivering explosive resolution.',
    ],
    voiceLeadingInsights: [
      'The triplet rhythm provides continuous forward roll, keeping the minor changes feeling energetic rather than melancholic.',
      'The chromatic voice leading in the turnaround (D → C# → B → A → G# → E#) anchors the chord progression.',
      'Lukather\'s guitar fills weave in and out of the vocal line using F# blues scale double-stops and pinched squeals.',
    ],
    guitarPerspective: 'Lock your down-up picking with the drummer\'s triplet shuffle. Graze the string with your picking thumb to trigger screaming harmonic overtones on lead notes.',
    songwriterTakeaway: 'Enrich a standard minor chord progression with a true major V7 chord from harmonic minor to give your chorus an undeniable sense of finality and punch.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F# Natural Minor', slug: 'minor', description: 'The driving Aeolian scale underpinning the verse and chorus.' },
        { name: 'F# Harmonic Minor', slug: 'harmonic-minor', description: 'Provides the raised E# leading tone in the C#7 dominant chord.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The rock minor mode foundation.' },
      ],
      chords: [
        { name: 'Dominant Seventh Chords', slug: 'seventh', description: 'C#7 major dominant chord.' },
      ],
    },
  },

  'bow-river': {
    slug: 'bow-river',
    songTitle: 'Bow River',
    artist: 'Cold Chisel',
    key: 'A Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'A Mixolydian Pub-Rock Shuffle Merging Major Pentatonic Sweetness with Searing Minor Blues Phrasing',
    emotionalHook: 'Written and sung by Ian Moss, "Bow River" is the holy grail of Australian electric blues. Driven by an unstoppable straight-eighth shuffle in A, the chord progression soars when the borrowed Mixolydian ♭VII chord (G major) hits in the chorus. Moss\'s guitar solo is a masterclass in dynamic storytelling, gliding between sweet A major pentatonic melodies and explosive, screaming minor blues bends.',
    romanProgression: 'I5 - IV5 - V5 - I5 (Verse) | IV - V - I - IV - ♭VII - IV - I (Chorus)',
    chords: ['A', 'D', 'E', 'G', 'A5', 'D5', 'E5'],
    progressionExplanation: [
      'A5 to D5 to E5: High-energy straight-eighth pub rock shuffle chug.',
      'G (♭VII): Borrowed Mixolydian flat-seventh chord introducing anthemic Australian rock swagger.',
      'D (IV) to A (I): Classic plagal cadence grounding the chorus in heartland warmth.',
      'Solo Section: Masterful blend of A Major Pentatonic sweetness and A Minor Blues bite.',
    ],
    voiceLeadingInsights: [
      'Moss alternates between the major 3rd (C#) on A chords and the blues minor 3rd (C natural) for expressive tension.',
      'The Stratocaster neck pickup delivers fat, woody transients that preserve touch sensitivity across extreme dynamics.',
      'Pauses and silence in the solo allow the drums and bass to surge forward before the next guitar climax.',
    ],
    guitarPerspective: 'Dial your valve amp right to the edge of breakup so light pick touches stay clean while aggressive digs roar into harmonic overdrive. Use wide, vocal-style finger vibrato on sustained bends.',
    songwriterTakeaway: 'Insert a borrowed ♭VII chord before your tonic resolution to turn an ordinary blues progression into a stadium-sized anthem.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Pentatonic', slug: 'major-pentatonic', description: 'Sweet, vocal-style blues phrasing scale.' },
        { name: 'A Blues Scale', slug: 'blues-scale', description: 'Aggressive minor blues scale with blue note Eb.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Supplies the borrowed flat-seventh (G).' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open A, D, E, and G rock chord shapes.' },
      ],
    },
  },

  'times-like-these': {
    slug: 'times-like-these',
    songTitle: 'Times Like These',
    artist: 'Foo Fighters',
    key: 'D Major',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Open D Pedal-Point Ostinato in 7/4 Asymmetric Meter Bursting into Straight 4/4 Mixolydian Joy',
    emotionalHook: 'Dave Grohl achieved modern rock perfection by taking an irregular 7/4 meter and making it feel effortless and uplifting. By anchoring the intro riff around an unrelenting open 4th-string D pedal tone, moving high dyads create harmonic shimmer without losing rhythmic pulse. When the song transitions into straight 4/4, borrowed Mixolydian chords (Am7 and C) transform personal resilience into an arena-filling communal anthem.',
    romanProgression: 'I5 - Isus2 (7/4 Intro) | I - v7 - ♭VII - ii - I (4/4 Verse & Chorus)',
    chords: ['D', 'Am7', 'C', 'Em', 'D5', 'Dsus2'],
    progressionExplanation: [
      'D5 / Dsus2 (7/4 Riff): Open D string pedal ostinato with high shifting dyads (F#, E, G).',
      'Am7 (v7): Borrowed Mixolydian fifth chord introducing bittersweet introspective vulnerability.',
      'C (♭VII): Classic rock Mixolydian chord delivering hopeful, forward-leaning momentum.',
      'Em to D (ii - I): Stepwise diatonic cadence providing warm, satisfying emotional closure.',
    ],
    voiceLeadingInsights: [
      'The 7/4 meter flows as 4 beats of main theme + 3 beats of melodic answer, creating perpetual forward motion.',
      'The open top strings ring across Am7 and C, blurring chord boundaries into a unified acoustic/electric sheen.',
      'The transition into straight 4/4 feels like taking a deep breath of relief after the tension of odd time.',
    ],
    guitarPerspective: 'Keep your fretting index finger arched so the open D string rings freely on eighth-note downstrokes. Dig into full open chord strumming when the chorus explodes.',
    songwriterTakeaway: 'Odd time signatures do not have to feel jarring or technical; anchor them with a simple open-string drone to create unforgettable melodic hooks.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'The bright foundational scale for the intro riff.' },
        { name: 'D Mixolydian Mode', slug: 'mixolydian', description: 'Supplies the borrowed C natural in Am7 and C major.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Classic rock uplifting modal harmony.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Ringing open chord shapes in D major.' },
      ],
    },
  },

  'cant-find-my-way-home': {
    slug: 'cant-find-my-way-home',
    songTitle: 'Can\'t Find My Way Home',
    artist: 'Blind Faith',
    key: 'D Major',
    category: 'descending-bassline',
    categoryLabel: 'Descending Basslines & Ground Bass',
    coreSecret: 'Drop D Acoustic Travis Picking with Stepwise Chromatic Bass Descent and Modal Ambiguity',
    emotionalHook: 'Steve Winwood composed a masterwork of acoustic melancholy by dropping the 6th string to low D. The opening cycles D - F/D - G/D, blending D Major brightness with D Dorian darkness over a deep 73.4 Hz low-end drone. The emotional summit arrives in the refrain, where the bassline steps down chromatically (B → Bb → A → G# → G → D), illustrating the lyric of feeling lost and searching for home through pure musical voice leading.',
    romanProgression: 'I - ♭III/I - IV/I - I (Verse) | IV6 - iv6 - I64 - V7/V - IV - I (Refrain)',
    chords: ['D', 'F/D', 'G/D', 'G/B', 'Gm/Bb', 'D/A', 'E7/G#', 'Em', 'A7'],
    progressionExplanation: [
      'D to F/D to G/D: Drop-D pedal point progression oscillating between Major and Dorian modal colors.',
      'G/B to Gm/Bb: Major IV shifting to minor iv with descending bassline (B to Bb).',
      'D/A to E7/G# (I64 - V7/V): Classical passing chords continuing the chromatic descent down to G#.',
      'Em to A7 to D (ii - V7 - I): Complete functional turnaround restoring stability.',
    ],
    voiceLeadingInsights: [
      'The chromatic bass walkdown (B → Bb → A → G# → G → D) mirrors 17th-century lament bass traditions.',
      'The alternating thumb maintains a steady pulse on beats 1 and 3 while treble fingers weave syncopated melodies.',
      'The low D drone gives a solo acoustic guitar the weight and resonance of a full orchestral section.',
    ],
    guitarPerspective: 'Practice the Travis picking pattern slowly, keeping your thumb strictly independent of your plucking fingers. Let the open high E and B strings ring as continuous ambient overtones.',
    songwriterTakeaway: 'Use a descending chromatic bassline beneath a stationary melody or chord drone to convey longing, loss, and philosophical searching.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major Scale', slug: 'major', description: 'Tonal anchor for the folk-rock acoustic guitar picking.' },
        { name: 'D Dorian Mode', slug: 'dorian', description: 'Supplies the borrowed minor 3rd (F natural) in the F/D chord.' },
      ],
      modes: [
        { name: 'Dorian Mode', slug: 'dorian', description: 'Haunting modal color for the verse progression.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Drop D acoustic chord shapes.' },
      ],
    },
  },

  'crazy-on-you': {
    slug: 'crazy-on-you',
    songTitle: 'Crazy on You',
    artist: 'Heart',
    key: 'A Minor',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'Flamenco-Inspired Acoustic Pull-Off Flourishes Exploding into an Aeolian Hard Rock Anthem',
    emotionalHook: 'Nancy Wilson\'s acoustic prelude "Silver Wheels" is one of the most stunning acoustic entrances in rock history. Utilizing rapid 16th-note pull-offs between fret 1 and open B against ringing drone strings, Wilson fuses Spanish flamenco flair with American folk agility. When the electric band kicks in, the progression snaps into an aggressive Aeolian rock loop (Am - G - F - G), uniting acoustic virtuosity with hard-rock power.',
    romanProgression: 'i - IV6 - ♭VI - V7 (Acoustic Intro) | i - ♭VII - ♭VI - ♭VII (Electric Verse & Chorus)',
    chords: ['Am', 'G', 'F', 'E7', 'D/F#', 'A5', 'G5', 'F5'],
    progressionExplanation: [
      'Silver Wheels Prelude: Rapid sixteenth-note pull-offs on the B and G strings over shifting bass roots.',
      'Am (i): Brooding minor tonic establishing urgent, driving emotional energy.',
      'G (♭VII) to F (♭VI): Classic Aeolian descent maximizing harmonic tension and vocal urgency.',
      'E7 (V7): Classical harmonic minor dominant resolving the acoustic introduction.',
    ],
    voiceLeadingInsights: [
      'The rapid pull-offs create a shimmering cascade of open-string harmonics that pre-date modern two-hand tapping.',
      'The dramatic dynamic jump from solo acoustic guitar to crushing electric power chords creates massive theatrical impact.',
      'Roger Fisher\'s searing electric fills dance around Ann Wilson\'s vocal melodies using biting minor pentatonic bends.',
    ],
    guitarPerspective: 'Keep your left-hand index finger curved and firm for the acoustic pull-offs so adjacent open strings ring true. Transition into full downstroke power chords with aggressive palm muting.',
    songwriterTakeaway: 'Open a heavy electric rock song with an intricate, virtuosic acoustic prelude to captivate the listener\'s ear before hitting them with the full sonic wall.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Natural Minor', slug: 'minor', description: 'Aeolian scale foundation for the driving power chords.' },
        { name: 'A Dorian Mode', slug: 'dorian', description: 'Supplies the bright major 6th (F#) in the acoustic prelude.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The rock natural minor mode.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Heavy electric rhythm chords in the verse and chorus.' },
        { name: 'Open Chords', slug: 'major', description: 'Acoustic fingerstyle chord voicings in the prelude.' },
      ],
    },
  },

  'gimme-head': {
    slug: 'gimme-head',
    songTitle: 'Gimme Head',
    artist: 'The Radiators',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'High-Velocity Mixolydian Power Chords & Syncopated Upbeat Pub-Rock Drive',
    emotionalHook: 'The unbridled pub rock energy of "Gimme Head" comes from marrying a furious 154 BPM open A pedal bass with syncopated ♭VII (G5) and IV (D5) chord stabs. By completely sidestepping standard major leading-tone tension, the Mixolydian flat-7th injects raw, unapologetic Australian rock swagger designed for packed, roaring pub crowds.',
    romanProgression: 'I - ♭VII - IV - I',
    chords: ['A5', 'G5', 'D5', 'E5'],
    progressionExplanation: [
      'A5 (I): Furious open 5th-string pedal bass providing the driving machine-gun rock pulse.',
      'G5 (♭VII): Injects the raw Mixolydian flat-7th bite, instantly removing classical harmonic stiffness.',
      'D5 (IV): Punchy subdominant resolution that snaps cleanly back into the tonic home base.',
      'E5 (V): High-energy dominant turnaround building suspense for the chorus explosion.',
    ],
    voiceLeadingInsights: [
      'The bass guitar and rhythm guitar lock together on rapid eighth-note downstrokes, creating an unbreakable rhythmic spine.',
      'Sharp staccato muting immediately following the G5 and D5 stabs creates dynamic pockets of silence that make the groove bounce.',
      'Stephen "Fess" Parker\'s blues-rock solo answers the vocal lines with aggressive A minor pentatonic double-stops.',
    ],
    guitarPerspective: 'Keep your picking wrist completely loose and relaxed at 154 BPM. Squeeze the power chords on the upbeats and instantly release left-hand finger pressure to choke the sustain.',
    songwriterTakeaway: 'When writing high-tempo hard rock, keep your chord vocabulary minimal (I - ♭VII - IV) and focus 100% of your energy on rhythm syncopation, dynamic muting, and crowd shout-along vocal hooks.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Mixolydian', slug: 'mixolydian', description: 'The modal engine behind the ♭VII (G) power chord.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'Provides the biting blues-rock lead solo breaks.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The defining mode of Australian pub rock anthems.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Root-fifth dyad shapes maximizing distortion clarity at high speed.' },
      ],
    },
  },

  'comin-home': {
    slug: 'comin-home',
    songTitle: "Comin' Home",
    artist: 'The Radiators',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'Twin-Guitar Pentatonic Chime Colliding with an Emotional Relative Minor Pre-Chorus Lift',
    emotionalHook: 'While the verse and chorus ride a buoyant, driving E - D - A Mixolydian groove, the genius of "Comin\' Home" lies in its pre-chorus shift to C# minor (vi). Stepping down through B and A before exploding back into the celebratory E major chorus creates a poignant narrative tug—embodying the exhaustion and longing of the touring road resolving into a triumphant homecoming.',
    romanProgression: 'I - ♭VII - IV - I (Verse/Chorus) | vi - V - IV - V (Pre-Chorus)',
    chords: ['E', 'D', 'A', 'C#m', 'B'],
    progressionExplanation: [
      'E (I): Warm, ringing open-string home base with resonant low-end authority.',
      'D (♭VII): Whole-step flat-7th step adding rebellious rock attitude and forward motion.',
      'A (IV): Bright subdominant chord that lifts the harmony back home to E.',
      'C#m (vi): Melodic minor detour introducing emotional longing and narrative vulnerability.',
      'B (V): Classic dominant tension builder that propels the arrangement into the chorus.',
    ],
    voiceLeadingInsights: [
      'The pre-chorus bassline descends step-wise from C# → B → A, creating a poignant counterpoint against the ascending vocal line.',
      'Twin electric guitars layer a singing E major pentatonic melody over punchy Marshall rhythm crunch.',
      'Open high E and B strings ring continuously across the chorus changes, providing a cohesive harmonic shimmer.',
    ],
    guitarPerspective: 'Use light palm muting during the 8th-note verse chugs, then switch to a full 4th-fret barre chord for C#m before opening up into wide strumming sweeps on the chorus.',
    songwriterTakeaway: 'Insert a relative minor (vi) chord in your pre-chorus before a major-key chorus. The sudden dip into melancholy makes the subsequent major chorus feel twice as massive and uplifting.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Mixolydian', slug: 'mixolydian', description: 'Underpins the I - ♭VII - IV rock progression.' },
        { name: 'E Major Pentatonic', slug: 'major-pentatonic', description: 'Shapes the soaring twin-guitar intro melodies.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Provides the classic Australian pub rock swagger.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Ringing cowboy chord shapes in the chorus.' },
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Used for the tight pre-chorus C#m and B shapes.' },
      ],
    },
  },

  '17-i-wish-i-was': {
    slug: '17-i-wish-i-was',
    songTitle: '17 (I Wish I Was)',
    artist: 'The Radiators',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'New-Wave Syncopated Staccato Stabs Powering an Infectious Nostalgic Pub Anthem',
    emotionalHook: '"17 (I Wish I Was)" captures the euphoric transition from 1970s pub rock into early-80s new wave. The bouncing D - C - G - A progression leverages tight palm-muted pedal points against razor-sharp off-beat chord punches on the "and" of beats 2 and 4, creating an irresistible kinetic drive that lifts the nostalgic lyrics into a timeless Australian party anthem.',
    romanProgression: 'I - ♭VII - IV - V',
    chords: ['D', 'C', 'G', 'A'],
    progressionExplanation: [
      'D (I): Open 4th-string pedal drone anchoring the tight new-wave rock pulse.',
      'C (♭VII): Syncopated upbeat stab providing the trademark Mixolydian bounce.',
      'G (IV): Uplifting step that opens up the harmonic frequency spectrum.',
      'A (V): Energetic dominant motor driving the progression relentlessly back to D.',
    ],
    voiceLeadingInsights: [
      'The persistent D pedal tone keeps the rhythm section grounded while upper triads bounce syncopatedly across the neck.',
      'Left-hand muting between downbeats creates crisp percussive pockets that give the song its unmistakable danceability.',
      'The lead solo explodes into D minor pentatonic at the 10th and 13th frets with crying whole-step blues bends.',
    ],
    guitarPerspective: 'Keep your picking hand moving in a steady 16th-note swing pattern so upbeat stabs land with razor-sharp timing precision. Don\'t let the open strings ring during the muted pauses.',
    songwriterTakeaway: 'Pair syncopated off-beat chord punches with an unyielding pedal bass note. It transforms a standard I - ♭VII - IV - V progression into an infectious, danceable rock groove.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Mixolydian', slug: 'mixolydian', description: 'The modal foundation giving the ♭VII (C) chord its rock bite.' },
        { name: 'D Minor Pentatonic', slug: 'minor-pentatonic', description: 'The blues-rock scale driving the climactic lead solo.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'Delivers the bouncy, anti-classical pub rock swagger.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Punchy dyad grips used for the syncopated verse stabs.' },
        { name: 'Open Chords', slug: 'major', description: 'Full open voicings ringing across the euphoric chorus.' },
      ],
    },
  },

  'run-to-paradise': {
    slug: 'run-to-paradise',
    songTitle: 'Run to Paradise',
    artist: 'Choirboys',
    category: 'pedal-tone-drone',
    categoryLabel: 'Pedal Tone & Drone Mastery',
    coreSecret: 'Open D Drone Triads Exploding into an Anthemic Stadium Rock I - IV - vi - V Cadence',
    emotionalHook: 'The opening of "Run to Paradise" is an acoustic masterclass in pedal-point harmony: letting the open 4th string (D) drone continuously beneath moving D, G/D, and A/D upper triad shapes creates an expansive, shimmering bell-like atmosphere. When the chorus detonates with full-distortion D - G - Bm - A power chords, the emotional release captures the quintessential spirit of Australian suburban escapism.',
    romanProgression: 'I - IV - V - I (Intro/Verse) | I - IV - vi - V (Chorus)',
    chords: ['D', 'G', 'Bm', 'A', 'G/D', 'A/D'],
    progressionExplanation: [
      'D (I): Resonant home key anchored by the ringing open 4th-string pedal tone.',
      'G/D (IV/I): Shimmering subdominant triad suspended gracefully over the low D drone.',
      'A/D (V/I): Dominant triad creating tension while maintaining the continuous bass drone.',
      'Bm (vi): Heartfelt relative minor in the chorus introducing deep emotional vulnerability.',
      'A (V): Triumphant dominant turnaround carrying Mark Gable\'s soaring vocal climax.',
    ],
    voiceLeadingInsights: [
      'The open D string acts as an acoustic bridge across the entire intro, unifying changing triad inversions into a coherent sonic landscape.',
      'The chorus progression (D - G - Bm - A) utilizes the emotional pop-rock "axis of awesome" sequence with cranked Marshall amplification.',
      'Brad Carr\'s soaring guitar solo targets the major 3rd (F#) and 5th (A) with singing, lyrical vibrato.',
    ],
    guitarPerspective: 'Keep your fretting hand fingers arched high so the open 4th string rings unimpeded during the intro triad shifts. Explode into the chorus with full-power downward strumming sweeps.',
    songwriterTakeaway: 'Use a single ringing open drone string underneath shifting triad shapes to create an instant sense of space, atmosphere, and acoustic grandeur before hitting the listener with your loudest chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major', slug: 'major', description: 'The diatonic foundation for the sparkling pedal-point triads.' },
        { name: 'D Major Pentatonic', slug: 'major-pentatonic', description: 'Shapes the soaring, lyrical melodic lead guitar solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The uplifting major modal scale providing the anthemic atmosphere.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Ringing open triad shapes over the D pedal bass.' },
        { name: 'Barre Chords', slug: 'barre-chords', description: 'Clean 2nd-fret Bm barre chord providing emotional depth in the chorus.' },
      ],
    },
  },

  'dont-change': {
    slug: 'dont-change',
    songTitle: "Don't Change",
    artist: 'INXS',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The 50s Doo-Wop Progression Turbocharged with 160 BPM Post-Punk Momentum',
    emotionalHook: '"Don\'t Change" takes the timeless I - vi - IV - V progression (A - F#m - D - E) and injects it with blistering 160 BPM eighth-note downstroke velocity. The juxtaposition of Michael Hutchence\'s earnest vocal delivery with Tim Farriss\'s shimmering chorus-laden guitar arpeggios transforms a simple ballad sequence into an unstoppable Australian post-punk anthem.',
    romanProgression: 'I - vi - IV - V (Intro/Chorus) | I - IV - I - IV (Verse)',
    chords: ['A', 'F#m', 'D', 'E', 'Bm'],
    progressionExplanation: [
      'A (I): Uplifting major tonic providing the bright foundation for the stadium fanfare.',
      'F#m (vi): Relative minor providing brief emotional shadow without breaking forward velocity.',
      'D (IV): Warm subdominant chord opening up the melodic landscape.',
      'E (V): Dominant anchor driving inexorably back to the home A major chord.',
      'Bm (ii): Darker minor pivot in the bridge introducing tension before the chorus return.',
    ],
    voiceLeadingInsights: [
      'The transition between A and F#m retains the C# and A common tones while the bass drops a minor third from A to F#.',
      'Tim Farriss\'s octave guitar lines trace the major third (C#) resolving to the root (A), cutting cleanly over the rhythm wall.',
      'Analog chorus modulation (Boss CE-2) thickens the two-guitar attack into a widescreen sonic panorama.',
    ],
    guitarPerspective: 'Maintain light, bouncy right-wrist mechanics to play steady eighth notes at 160 BPM without forearm fatigue. Alternate between open grips and 5th-fret barre chords to replicate the studio track\'s layered density.',
    songwriterTakeaway: 'Tempo and arrangement completely redefine harmonic emotion: take a classic, sentimental progression and play it with punk-rock speed and sparkling modulation to create an unforgettable anthem.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major', slug: 'major', description: 'The life-affirming major scale driving the vocal hooks and lead melodies.' },
        { name: 'A Major Pentatonic', slug: 'major-pentatonic', description: 'Underpins the soaring octave lead lines.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright modal framework supporting the euphoric chorus.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open A, D, and E chords forming the harmonic backbone.' },
        { name: 'Minor Barre Chords', slug: 'minor', description: 'Clean 2nd-fret F#m barre providing emotional gravity.' },
      ],
    },
  },

  'cheap-wine': {
    slug: 'cheap-wine',
    songTitle: 'Cheap Wine',
    artist: 'Cold Chisel',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrid Scales',
    coreSecret: 'Caribbean Reggae Upbeat Chops Fused with Driving Pub-Rock Chorus Dynamics',
    emotionalHook: 'Cold Chisel\'s "Cheap Wine" subverts traditional pub-rock expectations by using staccato reggae-style skanks on the upbeats of beats 2 and 4 during the verse. When the chorus arrives, the band unleashes full-bore Australian pub-rock power chords on IV - V - I - vi (A - B - E - C#m), delivering an irresistible emotional release that captures the gritty glamour of suburban Australian bohemian life.',
    romanProgression: 'I - IV - V - I (Verse) | IV - V - I - vi - IV - V - I (Chorus)',
    chords: ['E', 'A', 'B', 'C#m', 'G#m'],
    progressionExplanation: [
      'E (I): Relaxed coastal tonic chord establishing the laid-back reggae skank.',
      'A (IV): Subdominant chord initiating the uplifting chorus ascent.',
      'B (V): Dominant engine driving relentlessly forward with classic rock energy.',
      'C#m (vi): Relative minor chord introducing bittersweet nostalgia on "three day growth".',
      'G#m (iii): Stepping-stone minor harmony deepening the introspective bridge.',
    ],
    voiceLeadingInsights: [
      'Ian Moss plays high triad inversions on strings 1, 2, and 3 during the verses, keeping the sonic space open for Don Walker\'s Wurlitzer electric piano.',
      'The chorus opens on the subdominant A major rather than the tonic, giving the hook an immediate sense of forward flight.',
      'Moss\'s guitar solo weaves seamlessly between E minor pentatonic blues bends and bright E major 3rd (G#) chord tones.',
    ],
    guitarPerspective: 'Execute clean fret-hand muting by relaxing finger pressure immediately after striking each upbeat chord. Dig in with confident, wide downward strums on the chorus.',
    songwriterTakeaway: 'Pairing two contrasting genres—a relaxed, syncopated reggae verse with a driving, open-throated rock chorus—creates massive dynamic range and ensures your hook hits twice as hard.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major', slug: 'major', description: 'The radiant major scale foundation for the anthemic chorus.' },
        { name: 'E Minor Blues Scale', slug: 'blues', description: 'The source of Ian Moss\'s trademark stinging blues-rock guitar solo inflections.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The bright harmonic system underpinning the main progression.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open E, A, and B chords providing classic rock punch.' },
        { name: 'Minor Chords', slug: 'minor', description: 'C#m relative minor turnaround adding emotional complexity.' },
      ],
    },
  },

  'better': {
    slug: 'better',
    songTitle: 'Better',
    artist: 'The Screaming Jets',
    category: 'mixolydian-dorian',
    categoryLabel: 'Mixolydian & Dorian Anthems',
    coreSecret: 'The Aeolian Four-Chord Powerhouse with a Dorian IV Chord Lift',
    emotionalHook: '"Better" is built on the unstoppable natural minor powerhouse progression: i - ♭III - ♭VI - ♭VII (Em - G - C - D). What elevates the song above standard 90s hard rock is the surprise appearance of a bright major IV chord (A major) in the bridge, which temporarily shifts the tonal center from dark Aeolian into swaggering Dorian before plunging back into the furious singalong chorus.',
    romanProgression: 'i - ♭III - ♭VI - ♭VII (Verse/Chorus) | IV - ♭VI - ♭VII - i (Bridge)',
    chords: ['Em', 'G', 'C', 'D', 'A'],
    progressionExplanation: [
      'Em (i): Crushing minor tonic establishing the heavy Newcastle pub-rock grit.',
      'G (♭III): Relative major providing an explosive momentary burst of light.',
      'C (♭VI): Submediant chord adding poignant emotional weight and urgency.',
      'D (♭VII): Subtonic chord providing powerful modal drive and clean turnaround back to Em.',
      'A (IV): Dorian major subdominant introducing unexpected swagger and brightness in the bridge.',
    ],
    voiceLeadingInsights: [
      'The bass notes descend and ascend in powerful whole and half steps (E → G → C → D) locking with aggressive kick drum accents.',
      'The unison guitar bends at frets 12 and 15 exploit the natural harmonic tension between the minor 3rd and major 2nd.',
      'Palm-muting the low E string while letting the fifths and octaves ring gives the riff immense low-end weight without muddiness.',
    ],
    guitarPerspective: 'Lock your palm muting right against the bridge saddles for a tight, percussive chug. On the chorus, lift your palm and hit full open power chords with aggressive downward pick strokes.',
    songwriterTakeaway: 'The i - ♭III - ♭VI - ♭VII progression is an infallible vehicle for raw rock emotion. To keep it fresh, introduce a borrowed major IV chord in your bridge to shock the listener\'s ear with modal brightness.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Natural Minor (Aeolian)', slug: 'minor', description: 'The foundational minor scale supplying all four core chords.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'The driving scale for the intro riffs and searing wah-wah solo.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The dark, dramatic natural minor mode of the verse and chorus.' },
        { name: 'Dorian Mode', slug: 'dorian', description: 'The source of the major IV (A major) chord lift in the bridge.' },
      ],
      chords: [
        { name: 'Power Chords', slug: 'power-chords', description: 'Root-5th power chord grips providing high-gain crunch and clarity.' },
        { name: 'Minor Chords', slug: 'minor', description: 'The dark Em tonic anchoring the track.' },
      ],
    },
  },

  'reckless': {
    slug: 'reckless',
    songTitle: 'Reckless',
    artist: 'Australian Crawl',
    category: 'pedal-tone-drone',
    categoryLabel: 'Pedal Tone & Drone Mastery',
    coreSecret: 'Anchored High Drone Strings Transforming Simple Chords into Coastal Atmospheres',
    emotionalHook: 'The hypnotic coastal beauty of "Reckless" relies on anchoring the 3rd and 4th fingers on the 3rd fret of the high E and B strings (ringing D and G notes). This creates continuous pedal-point drone resonances across G, Cadd9, Em7, and Dsus4, giving James Reyne\'s distinctive vocals an evocative, sun-drenched maritime backdrop before the emotional "jetty" chorus singalong.',
    romanProgression: 'I - IV - I - IV (Verse) | vi - IV - I - V (Chorus)',
    chords: ['G', 'Cadd9', 'Em7', 'Dsus4', 'Am'],
    progressionExplanation: [
      'G (I): Warm acoustic foundation echoing the Mornington Peninsula coastline.',
      'Cadd9 (IV): Shimmering subdominant chord rocking gently against the G tonic.',
      'Em7 (vi): Relative minor chord introducing sudden melancholy in the chorus.',
      'Dsus4 (V): Suspended dominant resolving cleanly at the end of each chorus phrase.',
      'Am (ii): Pensive minor chord providing a reflective detour in the bridge.',
    ],
    voiceLeadingInsights: [
      'The high D (3rd fret, string 2) and high G (3rd fret, string 1) remain perfectly static while the bass notes move beneath them (G → C → E → D).',
      'This stationary upper register acts as an acoustic drone, smoothing out transitions and creating rich add9 and sus2 harmonic colors.',
      'Simon Binks\'s electric guitar uses lush analog stereo chorus to evoke the shimmer of sunlight off coastal waves.',
    ],
    guitarPerspective: 'Keep your ring and pinky fingers glued to the 3rd fret on strings 1 and 2 throughout the entire progression. Strum with a light, flexible pick (0.60mm) to achieve a smooth, airy acoustic wash.',
    songwriterTakeaway: 'Anchoring static high drone notes across all chords in a progression binds otherwise ordinary changes into a unified, signature atmospheric soundscape.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'G Major', slug: 'major', description: 'The diatonic source of the warm coastal acoustic chords.' },
        { name: 'E Minor Pentatonic', slug: 'minor-pentatonic', description: 'Shapes Simon Binks\'s melodic, weeping electric guitar fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The sunny, relaxed major mode defining the song\'s verses.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Ringing open-position chord shapes with anchored pedal points.' },
        { name: 'Suspended Chords', slug: 'sus4', description: 'Dsus4 and Cadd9 adding lush modern acoustic coloration.' },
      ],
    },
  },

  'eagle-rock': {
    slug: 'eagle-rock',
    songTitle: 'Eagle Rock',
    artist: 'Daddy Cool',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock Hybrid Scales',
    coreSecret: 'The 1950s Jump-Blues Boogie Shuffle with Chuck Berry Double-Stops',
    emotionalHook: '"Eagle Rock" is the granddaddy of Australian pub rock. Built on a classic swinging 12-bar blues shuffle in A major, Ross Wilson and Ross Hannaford took 1950s jump-blues piano boogie patterns (alternating root-5th, root-6th, and root-7th intervals) and translated them onto electric guitars with driving pick snap, creating a national party anthem so contagious it famously inspired Elton John to write "Crocodile Rock".',
    romanProgression: 'I - IV - I - V - IV - I (12-Bar Boogie Shuffle)',
    chords: ['A', 'D', 'E', 'A7', 'D7', 'E7'],
    progressionExplanation: [
      'A (I): The driving boogie tonic establishing the irresistible dance groove.',
      'D (IV): Subdominant blues lift on bar 5 providing buoyant energy.',
      'E (V): Dominant turnaround building peak excitement before resolving home.',
      'A7 (I7): Dominant 7th color note (G natural) injecting authentic jump-blues swagger.',
    ],
    voiceLeadingInsights: [
      'The left hand stretches from the 2nd fret to the 4th and 5th frets on the lower strings, mimicking the walking boogie basslines of classic R&B.',
      'Ross Hannaford\'s guitar fills feature Chuck Berry sliding double-stops across strings 1 and 2 at the 5th fret.',
      'Slapback tape delay (120ms) creates an acoustic slap that makes the rhythm section sound twice as large.',
    ],
    guitarPerspective: 'Lock your wrist into a swinging eighth-note groove with slight palm muting on the lower strings. Keep your thumb centered behind the neck to ease the pinky fret-4 reach.',
    songwriterTakeaway: 'Great rock-and-roll grooves are eternal: adapt classic boogie-woogie piano patterns onto the electric guitar with authentic swing and a hooky vocal call-and-response.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'A Major Pentatonic', slug: 'major-pentatonic', description: 'Supplies the bright, playful melodies and vocal hooks.' },
        { name: 'A Blues Scale', slug: 'blues', description: 'Provides the gritty Chuck Berry sliding double-stops.' },
      ],
      modes: [
        { name: 'Mixolydian Mode', slug: 'mixolydian', description: 'The dominant-7th major mode underpinning the 12-bar blues progression.' },
      ],
      chords: [
        { name: 'Dominant 7th Chords', slug: 'dominant-7th', description: 'A7, D7, and E7 chords giving the track its R&B edge.' },
        { name: 'Power Chords', slug: 'power-chords', description: 'A5 and A6 shuffle grips forming the core boogie engine.' },
      ],
    },
  },

  'these-days': {
    slug: 'these-days',
    songTitle: 'These Days',
    artist: 'Powderfinger',
    category: 'pedal-tone-drone',
    categoryLabel: 'Pedal Tone & Drone Mastery',
    coreSecret: 'Sustained High D and A Pedal Drone Tones Over Shifting Bass Roots',
    emotionalHook: '"These Days" achieves its bittersweet, wistful atmosphere by sustaining high D and A pedal drone notes on the top two strings (3rd fret) while Bernard Fanning\'s fingerpicked acoustic bass line steps between D, G, Bm, and A. The constant drone creates delicate add9 and sus2 colors that keep the music floating, turning an understated acoustic ballad into an iconic generational anthem.',
    romanProgression: 'I - IV - I - IV (Verse) | vi - IV - I - V (Chorus)',
    chords: ['D', 'G', 'Bm', 'A', 'Em'],
    progressionExplanation: [
      'D (I): Warm, comforting tonic chord providing a sense of home and acceptance.',
      'G (IV): Subdominant chord creating a gentle, swaying acoustic motion.',
      'Bm (vi): Relative minor introducing vulnerability and reflection on "It\'s coming round again".',
      'A (V): Dominant chord resolving the chorus phrase with poignant tenderness.',
      'Em (ii): Minor stepping-stone in the bridge deepening the emotional reflection.',
    ],
    voiceLeadingInsights: [
      'The high D (string 2, fret 3) rings uninterrupted through the entire verse, serving as the 1st degree in D, the 5th degree in G, and the minor 3rd in Bm.',
      'This multi-functional pedal tone ties the changing chords together with cinematic continuity.',
      'Ian Haug\'s soaring electric lead guitar mirrors the vocal phrasing with singing, lyrical vibrato and warm overdrive.',
    ],
    guitarPerspective: 'Keep the picking hand relaxed at 84 BPM, letting the thumb handle bass notes cleanly while fingers pluck the upper drone strings. Transition smoothly into full-bodied strumming for the chorus.',
    songwriterTakeaway: 'A static high pedal note alters the emotional character of every chord beneath it: try holding your top two strings static while moving common bass chords for instant cinematic gravitas.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'D Major', slug: 'major', description: 'The diatonic foundation for the bittersweet acoustic progression.' },
        { name: 'B Minor Pentatonic', slug: 'minor-pentatonic', description: 'Shapes Ian Haug\'s expressive, vocal-like electric guitar fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The major mode giving the verses their gentle, melancholic warmth.' },
      ],
      chords: [
        { name: 'Open Chords', slug: 'major', description: 'Open D, G, and A chords voiced with high drone extensions.' },
        { name: 'Minor Chords', slug: 'minor', description: 'The emotional Bm relative minor anchoring the chorus hook.' },
      ],
    },
  },

  'holy-grail': {
    slug: 'holy-grail',
    songTitle: 'Holy Grail',
    artist: 'Hunters & Collectors',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Borrowed Chords',
    coreSecret: 'The Archetypal Four-Chord Hero\'s Journey Built with Unwavering Sincerity',
    emotionalHook: '"Holy Grail" uses the universal I - V - vi - IV progression (C - G - Am - F), but Mark Seymour elevates it from a pop cliche into an epic Australian sporting and cultural myth. Starting with an intimate, unadorned acoustic strum, the song steadily builds dynamic momentum until the brass section and distorted guitars erupt in a stadium singalong that embodies the Australian spirit of heroic perseverance against impossible odds.',
    romanProgression: 'I - V - vi - IV (Verse & Chorus) | ii - IV - I - V (Bridge)',
    chords: ['C', 'G', 'Am', 'F', 'Dm'],
    progressionExplanation: [
      'C (I): The triumphant tonic representing the start of the heroic quest.',
      'G (V): Dominant chord driving the narrative forward with urgency.',
      'Am (vi): Relative minor reflecting hardship, loss, and endurance in the battlefield of life.',
      'F (IV): Majestic subdominant chord delivering the uplifting, triumphant resolution.',
      'Dm (ii): Supertonic minor introducing contrast during the reflective bridge.',
    ],
    voiceLeadingInsights: [
      'The bass line creates a strong scalar descent and ascent (C → B in G → A in Am → F), outlining the harmonic drama under the vocal line.',
      'The electric guitars reinforce the brass fanfare with ringing octave melodies and percussive pick attacks.',
      'The dynamics progress in a clean crescendo from acoustic whisper to roaring full-band anthem.',
    ],
    guitarPerspective: 'Control your strumming volume carefully: play the verses softly near the soundhole, then unleash full-arm strumming sweeps across all 6 strings when the chorus detonates.',
    songwriterTakeaway: 'The simplest four-chord progression can feel earth-shattering if your arrangement commits 100% to a grand narrative arc, building unhurriedly from vulnerability to triumph.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major', slug: 'major', description: 'The pure, unadorned major scale driving the heroic anthemic melodies.' },
        { name: 'A Natural Minor', slug: 'minor', description: 'Provides the poignant relative minor shading in the verses.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The uplifting major modal scale underpinning the triumphant chorus.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open C, G, and F chords delivering stadium-sized resonance.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Am and Dm chords providing narrative contrast and emotional depth.' },
      ],
    },
  },

  'dont-look-back-in-anger': {
    slug: 'dont-look-back-in-anger',
    songTitle: "Don't Look Back in Anger",
    artist: 'Oasis',
    category: 'secondary-dominants',
    categoryLabel: 'Secondary Dominants & Harmonic Surprise',
    coreSecret: 'The Major E7 Secondary Dominant (V of vi) and Borrowed Minor iv (Fm)',
    emotionalHook: 'In the key of C major, diatonic theory prescribes an Em chord (iii). Replacing it with a dominant E7 introduces a chromatic G# leading tone that forcefully pulls into Am and F. In the pre-chorus, Noel shifts from F major to borrowed F minor (iv), introducing the poignant Ab note from C Aeolian that gives the ballad its bittersweet stadium tear-jerker status.',
    romanProgression: 'I - V - vi - V/vi - IV - V - I - vi - V',
    chords: ['C', 'G', 'Am', 'E7', 'F', 'G', 'C', 'Am', 'G'],
    progressionExplanation: [
      'C (I) to G (V): Strong, optimistic diatonic opening establishing universal pop-rock warmth.',
      'Am (vi): Relative minor stepping stone providing brief lyrical contemplation.',
      'E7 (V/vi): Secondary dominant with sharp G# leading tone pushing dramatically forward.',
      'F (IV) to G (V): Subdominant to dominant lift driving into the next vocal phrase.',
      'Fm (iv in pre-chorus): Borrowed minor subdominant introducing chromatic pathos.',
    ],
    voiceLeadingInsights: [
      'The E7 chord contains G#, which creates a half-step chromatic climb between G (in C/G) and A (in Am/F).',
      'The pre-chorus walkdown F → Fm → C features a descending chromatic inner voice: A (in F) → Ab (in Fm) → G (in C).',
      'Noel Gallagher’s guitar solo intentionally lands on Ab when the progression moves to Fm, perfectly highlighting the borrowed chord.',
    ],
    guitarPerspective: 'Use open chord fingerings throughout. For the pre-chorus, lifting your 2nd finger turns the full F barre chord into F minor with zero fuss.',
    songwriterTakeaway: 'Two secret chords can elevate a standard pop progression into immortality: use a secondary dominant (III7 or V/vi) to propel the verse forward, and a minor iv chord to break hearts in the pre-chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'C Major Scale', slug: 'major', description: 'The diatonic foundation for the verse and singalong chorus.' },
        { name: 'A Minor Pentatonic', slug: 'minor-pentatonic', description: 'The scale used for Noel Gallagher’s soaring stadium guitar solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The uplifting major modal scale providing universal stadium anthemic power.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open C, G, and F chords providing massive acoustic resonance.' },
        { name: 'Minor Chords', slug: 'minor', description: 'Am and Fm chords delivering harmonic surprise and emotional depth.' },
      ],
    },
  },

  'whats-my-scene': {
    slug: 'whats-my-scene',
    songTitle: "What's My Scene",
    artist: 'Hoodoo Gurus',
    category: 'blues-rock-hybrid',
    categoryLabel: 'Blues-Rock & Power-Pop Fusion',
    coreSecret: 'Jangly Diatonic I - V - IV Power Pop Hook with a Relative Minor Pre-Chorus Launchpad',
    emotionalHook: 'The euphoric rush of the chorus (E - B - A - B) relies on open-string guitar resonance and crisp diatonic simplicity. What elevates the song is the pre-chorus detour into the relative minor (C#m - A - C#m - A) followed by an urgent drum-and-guitar crescendo on B, propelling the singalong chorus with maximum contrast and momentum.',
    romanProgression: 'I - V - IV - V',
    chords: ['E', 'B', 'A', 'B'],
    progressionExplanation: [
      'E (I): The muscular, ringing open guitar tonic providing pure power-pop punch.',
      'B (V): Dominant pillar maintaining driving forward propulsion.',
      'A (IV): Subdominant breath providing warm, relaxed vocal space.',
      'B (V): Turnaround dominant launching the cycle repeatedly.',
      'C#m (vi in pre-chorus): Relative minor detour adding melodic urgency.',
    ],
    voiceLeadingInsights: [
      'Brad Shepherd’s intro riff plays high double stops at frets 9 and 7 while letting the open high E string ring out continuously as an unshifting pedal point.',
      'The pre-chorus switches to a minor feel (C#m - A) to lower the energy before an ascending build on B explodes into the chorus.',
      'The guitar solo features an ascending scalar walkup (F#m → G#m → A → B), physically climbing up the neck to raise adrenaline.',
    ],
    guitarPerspective: 'Keep your fret-hand fingers arched in the intro so the high E string rings open. In the verses, use tight right-hand palm muting across the lower strings to make the unmuted chorus sound colossal.',
    songwriterTakeaway: 'A timeless power-pop anthem doesn’t require complex jazz harmony—it requires unforgettable melodic double stops, ringing open strings, and an explosive dynamic drop into the pre-chorus.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'E Major Scale', slug: 'major', description: 'The diatonic foundation for the vocal hooks and driving rhythm.' },
        { name: 'E Major Pentatonic', slug: 'major', description: 'The bright scale driving the intro double-stop riff and melodic fills.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The primary mode delivering the energetic Australian pub-rock swagger.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Open E, B, and A chords delivering maximum ringing power-pop sustain.' },
        { name: 'Minor Chords', slug: 'minor', description: 'C#m and F#m chords providing narrative contrast in the pre-chorus.' },
      ],
    },
  },

  'the-wind-cries-mary': {
    slug: 'the-wind-cries-mary',
    songTitle: 'The Wind Cries Mary',
    artist: 'Jimi Hendrix',
    category: 'modal-mixture',
    categoryLabel: 'Modal Mixture & Parallel Harmony',
    coreSecret: 'Chromatic Sliding Major Triads and Soulful Curtis Mayfield-Style Embellishments',
    emotionalHook: 'Hendrix establishes effortless poetic cool by sliding parallel major triads up by half steps (Eb -> E -> F) directly into the home key. The verse layers sweet R&B hammer-on fills over gentle thumb-fretted chords, then resolves into the hook via borrowed modal chords (Db and Eb), proving that electric guitar can whisper with the nuance of sung poetry.',
    romanProgression: 'bVII - VII - I - V - IV - I',
    chords: ['Eb', 'E', 'F', 'C', 'Bb', 'F', 'G', 'Bb', 'Db', 'Eb', 'F'],
    progressionExplanation: [
      'Eb - E - F (bVII - VII - I): Parallel chromatic sliding triads launching the song with irresistible cool.',
      'C (V) to Bb (IV) to F (I): Sweet R&B cadence embellished with delicate hammer-ons.',
      'G (II): Major II chord providing a subtle secondary dominant lift (V of V).',
      'Db (bVI) to Eb (bVII) to F (I): Borrowed minor-mode chords resolving with cinematic warmth.',
    ],
    voiceLeadingInsights: [
      'The sliding triads maintain rigid parallel voicing on strings 2, 3, and 4, creating pure sonic color rather than classical functional voice leading.',
      'Hendrix wraps his thumb over the neck to fret bass notes, freeing his remaining fingers to hammer on major seconds and fourths into chord tones.',
      'The turnaround chord climb (Db → Eb → F) is a classic Mario/Aeolian cadence that brings a tender, contemplative mood.',
    ],
    guitarPerspective: 'Play with a relaxed thumb-over grip on the Stratocaster neck pickup with your volume pot at 7.5. Let your pick-hand stroke be gentle and feather-light.',
    songwriterTakeaway: 'You can break standard diatonic rules by sliding entire triads chromatically into your tonic, and use thumb-over chord embellishments to turn simple rhythm accompaniment into a singing second voice.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'F Major Scale', slug: 'major', description: 'The diatonic foundation for the vocal melody and sweet major third fills.' },
        { name: 'F Major Pentatonic', slug: 'major', description: 'The lyrical scale used for Hendrix’s sweet R&B embellishments.' },
        { name: 'F Minor Blues Scale', slug: 'blues', description: 'Provides expressive microtonal grit during the guitar solo.' },
      ],
      modes: [
        { name: 'Ionian Mode', slug: 'ionian', description: 'The warm, melodic major mode framing the ballad’s poetic lyricism.' },
      ],
      chords: [
        { name: 'Major Chords', slug: 'major', description: 'Parallel sliding triads and open grips creating timeless R&B warmth.' },
      ],
    },
  },

  'plug-in-baby': {
    slug: 'plug-in-baby',
    songTitle: 'Plug In Baby',
    artist: 'Muse',
    category: 'key-modulation',
    categoryLabel: 'Harmonic Minor & Neoclassical Energy',
    coreSecret: 'B Harmonic Minor Neoclassical Arpeggio Cycles Starting on the Dominant F#',
    emotionalHook: 'Rather than starting on the home chord (Bm), Bellamy kicks off the immortal riff on the dominant F# major, highlighting the exotic A# leading tone from B Harmonic Minor. The arpeggio sweeps through F# -> G -> D -> A -> Bm, combining Bach-like counterpoint and Phrygian Dominant tension with screaming fuzz-pedal alternative rock power.',
    romanProgression: 'V - VI - III - VII - i - V - VI - III',
    chords: ['F#', 'G', 'D', 'A', 'Bm', 'F#', 'G', 'D'],
    progressionExplanation: [
      'F# (V): Dominant major chord derived from B Harmonic Minor featuring the exotic A# leading tone.',
      'G (VI): Half-step step-up to the submediant, creating classic Spanish/Phrygian tension.',
      'D (III): Step down to the relative major, providing a brief soaring lift.',
      'A (VII) to Bm (i): Subtonic to tonic cadence resolving the circular phrase.',
      'G - D - F# - Bm (Chorus): Crushing power-chord progression delivering explosive operatic release.',
    ],
    voiceLeadingInsights: [
      'The introductory arpeggio riff continuously weaves across the high E, B, and G strings, pivoting around the 6th fret A# note.',
      'Beginning on the dominant chord (F#) keeps the listener in suspense for three full measures before finally landing on the home tonic B minor.',
      'The gated fuzz tone compresses the note attacks, making rapid alternate-picked arpeggios sound laser-tight like a synthesizer.',
    ],
    guitarPerspective: 'Engage a tightly gated Germanium fuzz pedal and use strict alternate picking across strings 1, 2, and 3 at 136 BPM. Anchor your picking wrist lightly for maximum speed.',
    songwriterTakeaway: 'To write an unforgettable guitar hook, step outside natural minor and introduce the raised 7th of Harmonic Minor, then delay resolving to your home chord by opening your progression on the dominant V.',
    isCurated: true,
    relatedTheory: {
      scales: [
        { name: 'B Harmonic Minor', slug: 'harmonic-minor', description: 'The neoclassical scale providing the exotic A# leading tone in the riff.' },
        { name: 'B Natural Minor', slug: 'minor', description: 'The Aeolian foundation powering the driving bass and verse groove.' },
      ],
      modes: [
        { name: 'Aeolian Mode', slug: 'aeolian', description: 'The natural minor mode that anchors the dark alternative rock mood.' },
      ],
      chords: [
        { name: 'Minor Chords', slug: 'minor', description: 'Bm and Em chords providing dark tension and rock weight.' },
        { name: 'Major Chords', slug: 'major', description: 'F#, G, and D chords delivering explosive anthemic contrast.' },
      ],
    },
  },
};

/**
 * Detects the most accurate harmonic category for any song based on
 * its chords, Roman numerals, modal character, and tags.
 */
function detectHarmonicCategory(songData: SongData): HarmonicCategory {
  const modalChar = (songData.musicalAnalysis?.keyAndScale?.modalCharacter || '').toLowerCase();
  const primaryKey = (songData.musicalAnalysis?.keyAndScale?.primaryKey || songData.songInfo?.key || '').toLowerCase();
  const roman = (songData.musicalAnalysis?.chordProgressions?.mainProgression?.progression || '').toLowerCase();
  const chords = (songData.musicalAnalysis?.chordProgressions?.mainProgression?.chords || []);
  const genre = (songData.songInfo?.genre || '').toLowerCase();
  const tags = (songData.metadata?.tags || []).map(t => t.toLowerCase());

  // 1. Descending bassline & slash chords
  const hasSlashChords = chords.some(c => c.includes('/'));
  const hasDescending = roman.includes('/3') || roman.includes('/b7') || modalChar.includes('descending') || tags.includes('fingerpicking');
  if (hasSlashChords || hasDescending || roman.includes('i - vii - vi - v') || roman.includes('i - bvii - bvi - v')) {
    return 'descending-bassline';
  }

  // 2. Key modulation
  if (modalChar.includes('modulation') || modalChar.includes('key shift') || (songData.musicalAnalysis?.chordProgressions?.sectionProgressions || []).some(s => s.description?.toLowerCase().includes('modulat'))) {
    return 'key-modulation';
  }

  // 3. Pedal tone / drone
  if (modalChar.includes('drone') || modalChar.includes('pedal') || (tags.includes('acoustic') && (chords.includes('Cadd9') || chords.includes('Dsus4') || chords.includes('Asus4')))) {
    return 'pedal-tone-drone';
  }

  // 4. Secondary dominants / Harmonic Minor
  if (roman.includes('v/v') || roman.includes('v/vi') || modalChar.includes('harmonic minor') || chords.some(c => c.includes('dim') || c.includes('+') || c.includes('aug'))) {
    return 'secondary-dominants';
  }

  // 5. Blues-rock hybrid
  if (genre.includes('blues') || genre.includes('metal') || modalChar.includes('blues') || chords.some(c => c.includes('7#9') || (c.includes('5') && genre.includes('hard rock')))) {
    if (chords.some(c => c.includes('7') || c.includes('5')) && (genre.includes('blues') || genre.includes('metal') || genre.includes('hard rock'))) {
      return 'blues-rock-hybrid';
    }
  }

  // 6. Modal mixture & borrowed chords
  if (roman.includes('bvi') || roman.includes('biii') || (roman.includes('iv') && roman.includes('iv')) || modalChar.includes('mixture') || modalChar.includes('borrowed')) {
    return 'modal-mixture';
  }

  // 7. Mixolydian & Dorian
  if (roman.includes('bvii') || modalChar.includes('mixolydian') || modalChar.includes('dorian') || chords.some(c => c.includes('7') || c.includes('5'))) {
    return 'mixolydian-dorian';
  }

  // Default based on major/minor tonality
  if (primaryKey.includes('minor') || modalChar.includes('aeolian')) {
    return 'mixolydian-dorian';
  }
  return 'modal-mixture';
}

/**
 * Generate structured harmonic analysis for any song in the catalog
 * based on its metadata and musical analysis.
 */
function generateStructuredHarmonicBreakdown(songData: SongData, slug: string): HarmonicSecret {
  const keyAndScale = songData.musicalAnalysis?.keyAndScale;
  const chordProg = songData.musicalAnalysis?.chordProgressions;
  const primaryKey = keyAndScale?.primaryKey || songData.songInfo?.key || 'Standard Key';
  const modalCharacter = keyAndScale?.modalCharacter || 'Diatonic Harmony';
  const mainProg = chordProg?.mainProgression;
  const chords = mainProg?.chords && mainProg.chords.length > 0 ? mainProg.chords : ['Root', 'Subdominant', 'Dominant'];
  const roman = mainProg?.progression || 'I - IV - V';
  const description = mainProg?.description || 'Classic guitar progression cycling through primary tonal centers.';
  const harmonicFunction = chordProg?.harmonicFunction || [];

  const category = detectHarmonicCategory(songData);
  const isMinor = primaryKey.toLowerCase().includes('minor') || modalCharacter.toLowerCase().includes('aeolian') || modalCharacter.toLowerCase().includes('dorian');

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
    coreSecret: `The Harmonic Architecture of ${primaryKey} with ${modalCharacter}`,
    emotionalHook: `The musical power of "${songData.songInfo?.title || slug}" stems from the deliberate harmonic movement between ${primaryKey} and the ${roman} progression. ${description}`,
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
 * Returns all songs that have harmonic breakdowns.
 * Hand-curated deep dives are prioritized first, followed by
 * structured analyses for all remaining catalog songs (total 108 songs).
 */
export function getAllCuratedHarmonicBreakdowns(): HarmonicSecret[] {
  const allSongItems = getAllSongs();
  const validSlugs = new Set(allSongItems.map(s => s.slug));

  const curatedList = Object.values(CURATED_SECRETS).filter(s => validSlugs.has(s.slug));
  const curatedSlugs = new Set(curatedList.map(s => s.slug));

  const structuredList: HarmonicSecret[] = [];

  for (const item of allSongItems) {
    if (!curatedSlugs.has(item.slug)) {
      const secret = getWhySongWorks(item.slug);
      if (secret) {
        structuredList.push(secret);
      }
    }
  }

  return [...curatedList, ...structuredList];
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

  for (const secret of getAllCuratedHarmonicBreakdowns()) {
    if (grouped[secret.category]) {
      grouped[secret.category].push(secret);
    }
  }

  return grouped;
}
