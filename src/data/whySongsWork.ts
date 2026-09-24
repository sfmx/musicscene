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
    chords: ['Eb5', 'Bb5', 'C5', 'G5', 'Ab5'],
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
    chords: ['D5', 'F5', 'G5', 'Ab5', 'C5'],
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
    chords: ['Em', 'C', 'D'],
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
