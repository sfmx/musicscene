const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/data/intervals');

// === perfect-5th.json ===
const perfect5th = {
  "slug": "perfect-5th",
  "intervalInfo": {
    "name": "Perfect 5th Interval",
    "pageTitle": "Perfect 5th Interval",
    "subtitle": "The most consonant interval after the octave - 7 semitones that forms the foundation of power chords and harmonic relationships.",
    "colorScheme": "green",
    "heroGradient": "bg-gradient-to-r from-green-500 to-emerald-600",
    "tags": ["7 Semitones", "Perfect Consonance", "Power Chords", "Harmonic Foundation"]
  },
  "theory": {
    "propertiesTitle": "Interval Properties",
    "properties": [
      { "label": "Size", "value": "7 semitones (3\u00bd whole steps)" },
      { "label": "Quality", "value": "Perfect" },
      { "label": "Sound", "value": "Strong, stable, consonant" },
      { "label": "Consonance", "value": "Perfect consonance" },
      { "label": "Function", "value": "Harmonic foundation" }
    ],
    "examplesTitle": "Common Examples",
    "examples": [
      { "label": "C to G", "value": "Classic perfect 5th" },
      { "label": "G to D", "value": "In all major scales" },
      { "label": "Power chords", "value": "All rock progressions" },
      { "label": "\"Star Wars\"", "value": "Opening theme" }
    ]
  },
  "guitarApplications": {
    "intervalExamples": {
      "title": "Perfect 5th Intervals",
      "description": "The perfect 5th is the most consonant interval after the octave, spanning 7 semitones and creating a pure, stable, and harmonious sound that forms the foundation of all harmony.",
      "examples": []
    },
    "chordConstructions": {
      "title": "Power Chords - Perfect 5th Foundation",
      "items": [
        { "title": "E5 Power Chord", "chord": "E5", "chordLabel": "Root: E, Fifth: B (7 semitones)", "alphaTex": "0.6.4 2.5.4", "alphaTexTitle": "E to B Perfect 5th", "alphaTexDescription": "Frets: 0-2-2 (low E, A, D strings)", "bullets": [], "colorBg": "from-red-50 to-red-100", "colorBorder": "border border-red-200", "colorTitle": "text-red-800", "colorText": "text-red-700", "colorDetail": "text-red-600" },
        { "title": "A5 Power Chord", "chord": "A5", "chordLabel": "Root: A, Fifth: E (7 semitones)", "alphaTex": "0.5.4 2.4.4", "alphaTexTitle": "A to E Perfect 5th", "alphaTexDescription": "Frets: x-0-2-2 (A, D strings)", "bullets": [], "colorBg": "from-blue-50 to-blue-100", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
        { "title": "G5 Power Chord", "chord": "G5", "chordLabel": "Root: G, Fifth: D (7 semitones)", "alphaTex": "3.6.4 5.5.4", "alphaTexTitle": "G to D Perfect 5th", "alphaTexDescription": "Frets: 3-5-5 (low E, A strings)", "bullets": [], "colorBg": "from-green-50 to-green-100", "colorBorder": "border border-green-200", "colorTitle": "text-green-800", "colorText": "text-green-700", "colorDetail": "text-green-600" }
      ]
    },
    "fretboardPatterns": [
      { "title": "Same String Pattern", "alphaTex": "0.6.4 7.6.4 | 3.6.4 10.6.4", "alphaTexTitle": "Same String Perfect 5ths", "alphaTexDescription": "", "bullets": ["7 frets apart: Any string, perfect 5th", "E string: 0 (E) \u2192 7 (B), 3 (G) \u2192 10 (D)", "Practice: Play intervals across all strings", "Memory aid: Always exactly 7 frets"], "colorBg": "from-purple-50 to-purple-100", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700" },
      { "title": "Cross-String Pattern", "alphaTex": "0.6.4 2.5.4 | 3.6.4 5.5.4 | 5.6.4 7.5.4", "alphaTexTitle": "Cross String Perfect 5ths", "alphaTexDescription": "", "bullets": ["Adjacent strings: +2 frets (except G-B)", "E to A: 0 \u2192 2, 3 \u2192 5, 5 \u2192 7", "Power chords: Built on this pattern", "Exception: G-B strings need +3 frets"], "colorBg": "from-orange-50 to-orange-100", "colorBorder": "border border-orange-200", "colorTitle": "text-orange-800", "colorText": "text-orange-700" },
      { "title": "Chord Construction", "alphaTex": "(3.5 2.4 3.3).1", "alphaTexTitle": "C Major Triad", "alphaTexDescription": "Root + 3rd + 5th = Complete harmony", "bullets": ["5th provides: Harmonic stability", "Foundation: All chords built on perfect 5th", "Sus4 chords: 4th replaces 3rd, 5th remains"], "colorBg": "from-emerald-50 to-emerald-100", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700" },
      { "title": "Melodic Applications", "alphaTex": "3.5.4 3.3.4 3.2.4 3.3.4", "alphaTexTitle": "Perfect 5th Arpeggios", "alphaTexDescription": "Strong, heroic melodic intervals", "bullets": ["Character: Heroic, stable, strong", "Pentatonic: Built on 5th relationships", "Natural harmonics: 7th fret produces 5th"], "colorBg": "from-teal-50 to-teal-100", "colorBorder": "border border-teal-200", "colorTitle": "text-teal-800", "colorText": "text-teal-700" }
    ]
  },
  "musicalExamples": {
    "classical": [
      { "title": "\"Star Wars\" Main Theme", "description": "Opening perfect 5th creates heroic character", "detail": "Demonstrates the powerful, stable quality of perfect 5ths" },
      { "title": "\"Twinkle, Twinkle, Little Star\"", "description": "First two notes demonstrate perfect 5th", "detail": "Simple example of perfect 5th's consonant nature" }
    ],
    "popular": [
      { "title": "Classic Rock Power Chords", "description": "Foundation of rock rhythm guitar in all genres", "detail": "Perfect 5ths create the driving force of rock music" },
      { "title": "Metal & Heavy Music", "description": "Low-tuned perfect 5ths for heavy, powerful sound", "detail": "Perfect consonance cuts through distortion clearly" }
    ]
  },
  "practiceExercises": [
    { "title": "Ear Training", "items": ["Practice power chord recognition", "Use \"Star Wars\" theme as reference", "Compare with perfect 4th intervals", "Listen to 7-fret patterns on guitar", "Study triadic harmony progressions"], "colorBg": "bg-green-50", "colorBorder": "border border-green-200", "colorTitle": "text-green-800", "colorText": "text-green-700" },
    { "title": "Technical Practice", "items": ["Master basic power chord shapes", "Practice 7-fret pattern on all strings", "Work on power chord progressions", "Study perfect 5ths in major scales", "Practice harmonic and melodic 5ths"], "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700" },
    { "title": "Musical Application", "items": ["Create rock riffs using power chords", "Analyze classic rock progressions", "Practice perfect 5th melodic leaps", "Study circle of 5ths relationships", "Work on sus4 chord progressions"], "colorBg": "bg-slate-50", "colorBorder": "border border-slate-200", "colorTitle": "text-slate-800", "colorText": "text-slate-700" }
  ],
  "theoreticalContext": {
    "harmonicFunction": [
      { "title": "Natural Resonance", "description": "The perfect 5th appears as the 3rd harmonic in the natural harmonic series, making it inherently consonant and stable." },
      { "title": "Frequency Ratio", "description": "Perfect 5th has a 3:2 frequency ratio, creating a simple mathematical relationship that the ear perceives as stable." }
    ],
    "historicalDevelopment": [
      { "title": "String Resonance", "description": "Perfect 5ths create sympathetic resonance between strings, making power chords ring naturally on guitar." },
      { "title": "Distortion Clarity", "description": "The simple frequency ratio means perfect 5ths stay clear under heavy distortion, unlike more complex intervals." }
    ]
  },
  "relatedIntervals": [
    { "title": "Perfect 4th", "description": "5 semitones - inversion of perfect 5th", "detail": "5th + 4th = octave (12 semitones)", "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
    { "title": "Tritone", "description": "6 semitones - diminished 5th", "detail": "Contrasts perfectly with perfect 5th stability", "colorBg": "bg-red-50", "colorBorder": "border border-red-200", "colorTitle": "text-red-800", "colorText": "text-red-700", "colorDetail": "text-red-600" },
    { "title": "Octave", "description": "12 semitones - most consonant interval", "detail": "Perfect 5th is 2nd most consonant after octave", "colorBg": "bg-purple-50", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700", "colorDetail": "text-purple-600" }
  ],
  "journeySection": {
    "title": "Continue Your Interval Journey",
    "description": "Now that you understand the perfect 5th, explore how it relates to other intervals and creates harmonic foundations.",
    "links": [
      { "slug": "perfect-4th", "title": "Perfect 4th", "description": "Learn the inversion of the perfect 5th and how they complement each other.", "linkText": "Study inversions", "icon": "\ud83d\udd04", "hoverBorder": "hover:border-blue-300", "iconBg": "bg-blue-100", "iconHoverBg": "group-hover:bg-blue-200", "linkColor": "text-blue-600", "linkHoverColor": "group-hover:text-blue-700" },
      { "slug": "tritone", "title": "Tritone", "description": "Explore the \"devil's interval\" that contrasts dramatically with the perfect 5th.", "linkText": "Feel the tension", "icon": "\u26a1", "hoverBorder": "hover:border-red-300", "iconBg": "bg-red-100", "iconHoverBg": "group-hover:bg-red-200", "linkColor": "text-red-600", "linkHoverColor": "group-hover:text-red-700" },
      { "slug": "octave", "title": "Octave", "description": "Discover the most consonant interval and how it relates to the perfect 5th.", "linkText": "Reach completion", "icon": "\ud83c\udfaf", "hoverBorder": "hover:border-purple-300", "iconBg": "bg-purple-100", "iconHoverBg": "group-hover:bg-purple-200", "linkColor": "text-purple-600", "linkHoverColor": "group-hover:text-purple-700" }
    ]
  }
};

// === minor-6th.json ===
const minor6th = {
  "slug": "minor-6th",
  "intervalInfo": { "name": "Minor 6th Interval", "pageTitle": "Minor 6th Interval", "subtitle": "The inversion of the major 3rd - 8 semitones that creates a rich, complex sound with both consonant and slightly dissonant qualities.", "colorScheme": "purple", "heroGradient": "bg-gradient-to-r from-purple-500 to-violet-600", "tags": ["8 Semitones", "Major 3rd Inversion", "Rich & Complex", "Jazz Harmony"] },
  "theory": { "propertiesTitle": "Interval Properties", "properties": [{ "label": "Size", "value": "8 semitones (4 whole steps)" }, { "label": "Quality", "value": "Minor" }, { "label": "Sound", "value": "Rich, complex, somewhat dissonant" }, { "label": "Consonance", "value": "Mild dissonance" }, { "label": "Function", "value": "Adds harmonic color and sophistication" }], "examplesTitle": "Common Examples", "examples": [{ "label": "C to Ab", "value": "Classic minor 6th" }, { "label": "F to Db", "value": "In minor key context" }, { "label": "Jazz voicings", "value": "In extended chords" }, { "label": "\"Love Story\"", "value": "Opening melody" }] },
  "guitarApplications": {
    "intervalExamples": { "title": "Minor 6th Intervals - Rich Harmonic Color", "description": "The minor 6th (8 semitones) is the inversion of the major 3rd, creating a rich, complex sound that adds sophisticated harmonic color to music.", "examples": [
      { "title": "C \u2192 Ab Minor 6th", "subtitle": "Classic minor 6th relationship", "chord1": "C_to_Ab_m6", "chord1Label": "C (5th string 3rd fret)", "chord2": "Ab_from_C_m6", "chord2Label": "Ab (4th string 6th fret)", "alphaTex": "3.5.4 6.4.4", "alphaTexTitle": "C to Ab Minor 6th", "description": "Rich, complex harmonic color", "colorBg": "from-purple-50 to-purple-100", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700", "colorDetail": "text-purple-600" },
      { "title": "F \u2192 Db Minor 6th", "subtitle": "Minor key context example", "chord1": "F_to_Db_m6", "chord1Label": "F (6th string 1st fret)", "chord2": "Db_from_F_m6", "chord2Label": "Db (5th string 4th fret)", "alphaTex": "1.6.4 4.5.4", "alphaTexTitle": "F to Db Minor 6th", "description": "Natural minor scale relationship", "colorBg": "from-violet-50 to-violet-100", "colorBorder": "border border-violet-200", "colorTitle": "text-violet-800", "colorText": "text-violet-700", "colorDetail": "text-violet-600" },
      { "title": "A \u2192 F Minor 6th", "subtitle": "Jazz voicing application", "chord1": "A_to_F_m6", "chord1Label": "A (5th string open)", "chord2": "F_from_A_m6", "chord2Label": "F (4th string 3rd fret)", "alphaTex": "0.5.4 3.4.4", "alphaTexTitle": "A to F Minor 6th", "description": "Sophisticated harmonic movement", "colorBg": "from-indigo-50 to-indigo-100", "colorBorder": "border border-indigo-200", "colorTitle": "text-indigo-800", "colorText": "text-indigo-700", "colorDetail": "text-indigo-600" }
    ] },
    "chordConstructions": { "title": "6th Chord Applications - Adding Harmonic Color", "items": [
      { "title": "C6 Chord", "chord": "C6", "chordLabel": "C6 with added major 6th (A)", "alphaTex": "(3.5 2.4 3.3 5.5).1", "alphaTexTitle": "C6 Chord", "alphaTexDescription": "C-E-G-A: Major triad + major 6th", "bullets": ["Major 6th: C \u2192 A (adds sweetness)", "Jazz standard: Sophisticated resolution", "Folk/country: Open, friendly sound"], "colorBg": "from-blue-50 to-blue-100", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
      { "title": "Am6 Chord", "chord": "Am6", "chordLabel": "Am6 with added major 6th (F#)", "alphaTex": "(0.5 3.4 2.4 2.1).1", "alphaTexTitle": "Am6 Chord", "alphaTexDescription": "A-C-E-F#: Minor triad + major 6th", "bullets": ["Major 6th: A \u2192 F# (brightens minor chord)", "Bossa nova: Essential Brazilian sound", "Modern jazz: Sophisticated minor harmony"], "colorBg": "from-emerald-50 to-emerald-100", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700", "colorDetail": "text-emerald-600" },
      { "title": "Dm6 Chord", "chord": "Dm6", "chordLabel": "Dm6 with added major 6th (B)", "alphaTex": "(0.4 1.4 2.5 4.6).1", "alphaTexTitle": "Dm6 Chord", "alphaTexDescription": "D-F-A-B: Minor triad + major 6th", "bullets": ["Major 6th: D \u2192 B (complex minor color)", "Classical: Romantic period harmony", "Film music: Emotional, expressive quality"], "colorBg": "from-rose-50 to-rose-100", "colorBorder": "border border-rose-200", "colorTitle": "text-rose-800", "colorText": "text-rose-700", "colorDetail": "text-rose-600" }
    ] },
    "fretboardPatterns": [
      { "title": "Natural Minor Scale Context", "alphaTex": "(0.5 3.4 2.4).1 | (1.6 5.5 3.2).1", "alphaTexTitle": "i-\u266dVI Progression", "alphaTexDescription": "Am to F: Root to \u266dVI (minor 6th relationship)", "bullets": ["\u266dVI chord: Natural minor scale harmony", "Modal interchange: Borrowed from parallel major", "Emotional impact: Melancholic, introspective"], "colorBg": "from-purple-50 to-purple-100", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700" },
      { "title": "Jazz Harmony Applications", "alphaTex": "3.5.2 5.5.2 | 1.4.2 3.3.2", "alphaTexTitle": "Voice Leading with 6ths", "alphaTexDescription": "Smooth voice leading using 6th intervals", "bullets": ["Chord melody: Sophisticated harmonizations", "Bebop lines: Chromatic approach tones", "Comping: Rich chord voicings"], "colorBg": "from-indigo-50 to-indigo-100", "colorBorder": "border border-indigo-200", "colorTitle": "text-indigo-800", "colorText": "text-indigo-700" }
    ]
  },
  "musicalExamples": { "classical": [{ "title": "Bach's Minor Key Works", "description": "Natural minor 6th relationships in baroque harmony", "detail": "Demonstrates minor 6th in classical voice leading" }, { "title": "Chopin's Nocturnes", "description": "Rich minor 6th harmonies in romantic piano music", "detail": "Shows expressive potential of minor 6th intervals" }], "popular": [{ "title": "\"Love Story\" - Taylor Swift", "description": "Opening melody features prominent minor 6th leap", "detail": "Modern pop song using minor 6th melodically" }, { "title": "Jazz Standards", "description": "Minor 6th chords and voice leading in jazz harmony", "detail": "Sophisticated harmonic color in jazz context" }] },
  "practiceExercises": [
    { "title": "Ear Training", "items": ["Practice minor 6th vs major 6th recognition", "Use \"Love Story\" theme as reference", "Compare with major 3rd (its inversion)", "Listen to natural minor scale patterns", "Study jazz 6th chord progressions"], "colorBg": "bg-purple-50", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700" },
    { "title": "Technical Practice", "items": ["Practice minor 6th intervals across strings", "Work on 6th chord voicings", "Study natural minor scale patterns", "Practice minor 6th melodic leaps", "Work on jazz chord progressions"], "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700" },
    { "title": "Musical Application", "items": ["Compose melodies using minor 6th leaps", "Analyze minor key progressions", "Practice jazz chord-melody techniques", "Study modal interchange applications", "Work on voice leading with 6th chords"], "colorBg": "bg-slate-50", "colorBorder": "border border-slate-200", "colorTitle": "text-slate-800", "colorText": "text-slate-700" }
  ],
  "theoreticalContext": { "harmonicFunction": [{ "title": "Major 3rd Inversion", "description": "Minor 6th is the inversion of major 3rd: 8 + 4 = 12 semitones (octave)" }, { "title": "Complementary Function", "description": "Where major 3rd is bright and consonant, minor 6th adds complexity and sophistication" }], "historicalDevelopment": [{ "title": "Minor Key Function", "description": "Natural occurrence in minor scales as root to \u266d6 relationship" }, { "title": "Jazz Extensions", "description": "Essential for sophisticated jazz harmony and chord extensions" }] },
  "relatedIntervals": [
    { "title": "Major 3rd", "description": "4 semitones - inversion of minor 6th", "detail": "Bright consonance vs complex sophistication", "colorBg": "bg-yellow-50", "colorBorder": "border border-yellow-200", "colorTitle": "text-yellow-800", "colorText": "text-yellow-700", "colorDetail": "text-yellow-600" },
    { "title": "Major 6th", "description": "9 semitones - one semitone larger", "detail": "Compare minor vs major 6th emotional qualities", "colorBg": "bg-green-50", "colorBorder": "border border-green-200", "colorTitle": "text-green-800", "colorText": "text-green-700", "colorDetail": "text-green-600" },
    { "title": "Minor 7th", "description": "10 semitones - common in jazz harmony", "detail": "Both add sophisticated color to basic triads", "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" }
  ],
  "journeySection": { "title": "Continue Your Interval Journey", "description": "Now that you understand the minor 6th, explore its relationships with other intervals and harmonic applications.", "links": [
    { "slug": "major-3rd", "title": "Major 3rd", "description": "Study the inversion relationship between major 3rd and minor 6th intervals.", "linkText": "Study inversions", "icon": "\ud83d\udd04", "hoverBorder": "hover:border-yellow-300", "iconBg": "bg-yellow-100", "iconHoverBg": "group-hover:bg-yellow-200", "linkColor": "text-yellow-600", "linkHoverColor": "group-hover:text-yellow-700" },
    { "slug": "major-6th", "title": "Major 6th", "description": "Compare the bright major 6th against the more complex minor 6th quality.", "linkText": "Feel the contrast", "icon": "\u2728", "hoverBorder": "hover:border-green-300", "iconBg": "bg-green-100", "iconHoverBg": "group-hover:bg-green-200", "linkColor": "text-green-600", "linkHoverColor": "group-hover:text-green-700" },
    { "slug": "minor-7th", "title": "Minor 7th", "description": "Explore another sophisticated interval that adds jazz harmony and color.", "linkText": "Add sophistication", "icon": "\ud83c\udfad", "hoverBorder": "hover:border-blue-300", "iconBg": "bg-blue-100", "iconHoverBg": "group-hover:bg-blue-200", "linkColor": "text-blue-600", "linkHoverColor": "group-hover:text-blue-700" }
  ] }
};

// === major-6th.json ===
const major6th = {
  "slug": "major-6th",
  "intervalInfo": { "name": "Major 6th Interval", "pageTitle": "Major 6th Interval", "subtitle": "The sweet interval - 9 semitones that creates warm, romantic harmony and is the inversion of the minor 3rd.", "colorScheme": "emerald", "heroGradient": "bg-gradient-to-r from-emerald-600 to-teal-700", "tags": ["9 Semitones", "Sweet & Romantic", "Minor 3rd Inversion", "Warm Harmony"] },
  "theory": { "propertiesTitle": "Interval Properties", "properties": [{ "label": "Size", "value": "9 semitones (4\u00bd whole steps)" }, { "label": "Quality", "value": "Major" }, { "label": "Sound", "value": "Sweet, warm, romantic" }, { "label": "Consonance", "value": "Moderately consonant" }, { "label": "Inversion", "value": "Minor 3rd (3 semitones)" }], "examplesTitle": "Common Examples", "examples": [{ "label": "C to A", "value": "Major 6th" }, { "label": "F to D", "value": "Major 6th" }, { "label": "\"My Bonnie Lies Over the Ocean\"", "value": "Opening leap" }, { "label": "\"Nobody Knows the Trouble I've Seen\"", "value": "\"No-bo-dy\"" }] },
  "guitarApplications": {
    "intervalExamples": { "title": "Major 6th Intervals - Sweet & Romantic", "description": "The major 6th (9 semitones) creates one of music's most beautiful and emotionally resonant intervals, evoking warmth, romance, and nostalgia.", "examples": [
      { "title": "C \u2192 A Major 6th", "subtitle": "Classic major 6th relationship", "chord1": "C_to_A_M6", "chord1Label": "C (5th string 3rd fret)", "chord2": "A_from_C_M6", "chord2Label": "A (5th string open)", "alphaTex": "3.5.4 5.5.4", "alphaTexTitle": "C to A Major 6th", "description": "Sweet, romantic harmonic color", "colorBg": "from-emerald-50 to-emerald-100", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700", "colorDetail": "text-emerald-600" },
      { "title": "F \u2192 D Major 6th", "subtitle": "Folk and country music staple", "chord1": "F_to_D_M6", "chord1Label": "F (6th string 1st fret)", "chord2": "D_from_F_M6", "chord2Label": "D (4th string open)", "alphaTex": "1.6.4 0.4.4", "alphaTexTitle": "F to D Major 6th", "description": "Warm, open folk harmony", "colorBg": "from-teal-50 to-teal-100", "colorBorder": "border border-teal-200", "colorTitle": "text-teal-800", "colorText": "text-teal-700", "colorDetail": "text-teal-600" },
      { "title": "G \u2192 E Major 6th", "subtitle": "Jazz and ballad application", "chord1": "G_to_E_M6", "chord1Label": "G (6th string 3rd fret)", "chord2": "E_from_G_M6", "chord2Label": "E (4th string 2nd fret)", "alphaTex": "3.6.4 2.4.4", "alphaTexTitle": "G to E Major 6th", "description": "Sophisticated melodic movement", "colorBg": "from-cyan-50 to-cyan-100", "colorBorder": "border border-cyan-200", "colorTitle": "text-cyan-800", "colorText": "text-cyan-700", "colorDetail": "text-cyan-600" }
    ] },
    "chordConstructions": { "title": "6th Chord Applications - Adding Sweetness", "items": [
      { "title": "C6 Chord", "chord": "C6", "chordLabel": "C6 with added major 6th (A)", "alphaTex": "(3.5 2.4 3.3 5.5).1", "alphaTexTitle": "C6 Chord", "alphaTexDescription": "C-E-G-A: Major triad + major 6th", "bullets": ["Major 6th: C \u2192 A (romantic sweetness)", "Jazz standard: Final resolution chord", "Folk/country: Warm, open sound"], "colorBg": "from-blue-50 to-blue-100", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
      { "title": "Am6 Chord", "chord": "Am6", "chordLabel": "Am6 with added major 6th (F#)", "alphaTex": "(0.5 3.4 2.4 2.1).1", "alphaTexTitle": "Am6 Chord", "alphaTexDescription": "A-C-E-F#: Minor triad + major 6th", "bullets": ["Major 6th: A \u2192 F# (brightens minor)", "Bossa nova: Essential Brazilian sound", "Jazz ballads: Sophisticated minor harmony"], "colorBg": "from-emerald-50 to-emerald-100", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700", "colorDetail": "text-emerald-600" },
      { "title": "Dm6 Chord", "chord": "Dm6", "chordLabel": "Dm6 with added major 6th (B)", "alphaTex": "(0.4 1.4 2.5 4.6).1", "alphaTexTitle": "Dm6 Chord", "alphaTexDescription": "D-F-A-B: Minor triad + major 6th", "bullets": ["Major 6th: D \u2192 B (complex sweetness)", "Classical: Romantic period harmony", "Film music: Nostalgic, expressive quality"], "colorBg": "from-rose-50 to-rose-100", "colorBorder": "border border-rose-200", "colorTitle": "text-rose-800", "colorText": "text-rose-700", "colorDetail": "text-rose-600" }
    ] },
    "fretboardPatterns": [
      { "title": "\"My Bonnie\" Reference", "alphaTex": "3.5.1 5.5.1", "alphaTexTitle": "Classic Major 6th Leap", "alphaTexDescription": "\"My Bonnie lies over the ocean\" - iconic major 6th", "bullets": ["Yearning quality: Expansive, reaching emotion", "Melodic leap: Creates dramatic musical moment", "Traditional song: Perfect ear training reference"], "colorBg": "from-amber-50 to-amber-100", "colorBorder": "border border-amber-200", "colorTitle": "text-amber-800", "colorText": "text-amber-700" },
      { "title": "Jazz & Modern Applications", "alphaTex": "(3.5 2.4 3.3 5.5).2 | (1.6 5.5 3.2 5.1).2", "alphaTexTitle": "Sophisticated Harmony", "alphaTexDescription": "C6 to F6 progression - jazz standard movement", "bullets": ["Ballad endings: Non-dominant resolution", "Country music: Pedal steel guitar effects", "Bossa nova: Minor 6th chord sophistication"], "colorBg": "from-violet-50 to-violet-100", "colorBorder": "border border-violet-200", "colorTitle": "text-violet-800", "colorText": "text-violet-700" }
    ]
  },
  "musicalExamples": { "classical": [{ "title": "\"My Bonnie Lies Over the Ocean\"", "description": "Opening major 6th leap creates yearning, expansive feeling", "detail": "Classic example of major 6th's romantic character" }, { "title": "\"Nobody Knows the Trouble I've Seen\"", "description": "\"No-bo-dy\" features distinctive major 6th interval", "detail": "Spiritual demonstrates interval's emotional depth" }], "popular": [{ "title": "Jazz Standards & Ballads", "description": "Major 6th chords in \"The Way You Look Tonight\", \"Misty\"", "detail": "Essential for sophisticated jazz harmony" }, { "title": "Country & Folk Music", "description": "Pedal steel guitar and major 6th chord progressions", "detail": "Creates characteristic country and folk warmth" }] },
  "practiceExercises": [
    { "title": "Ear Training", "items": ["Use \"My Bonnie\" as reference", "Practice major 6th vs. minor 6th", "Listen to major 6th chord progressions", "Study jazz ballad harmony", "Compare with perfect 5th and minor 7th"], "colorBg": "bg-emerald-50", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700" },
    { "title": "Technical Practice", "items": ["Master 9-fret same-string 6ths", "Practice C-A, F-D, G-E intervals", "Work on major 6th chord shapes", "Study cross-string 6th patterns", "Practice major 6th melodic leaps"], "colorBg": "bg-teal-50", "colorBorder": "border border-teal-200", "colorTitle": "text-teal-800", "colorText": "text-teal-700" },
    { "title": "Musical Application", "items": ["Create romantic melodic phrases", "Study jazz major 6th chord usage", "Explore country/folk 6th harmony", "Practice modal interchange (Dorian)", "Analyze major 6th in favorite songs"], "colorBg": "bg-slate-50", "colorBorder": "border border-slate-200", "colorTitle": "text-slate-800", "colorText": "text-slate-700" }
  ],
  "theoreticalContext": { "harmonicFunction": [{ "title": "Minor 3rd Inversion", "description": "The major 6th inverts to a minor 3rd. When you flip a C-A major 6th, you get A-C (minor 3rd), creating an interesting harmonic duality." }, { "title": "Harmonic Series Position", "description": "The major 6th appears later in the harmonic series, giving it a more complex but still consonant character." }], "historicalDevelopment": [{ "title": "Major 6th Chords", "description": "Add warmth without the pull of dominant 7th chords. Often used as tonic substitutes in jazz and as color chords in folk music." }, { "title": "Modal Color", "description": "The major 6th gives Dorian mode its characteristic sound, distinguishing it from natural minor." }] },
  "relatedIntervals": [
    { "title": "Minor 6th", "description": "8 semitones - one semitone smaller", "detail": "Sad vs. sweet - same interval quality, different emotion", "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
    { "title": "Perfect 5th", "description": "7 semitones - two semitones smaller", "detail": "Rock solid vs. romantically expansive", "colorBg": "bg-green-50", "colorBorder": "border border-green-200", "colorTitle": "text-green-800", "colorText": "text-green-700", "colorDetail": "text-green-600" },
    { "title": "Minor 7th", "description": "10 semitones - one semitone larger", "detail": "Sweet vs. bluesy - different harmonic functions", "colorBg": "bg-purple-50", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700", "colorDetail": "text-purple-600" }
  ],
  "journeySection": { "title": "Continue Your Interval Journey", "description": "From sweet romance, explore intervals that add different emotional colors and harmonic functions.", "links": [
    { "slug": "minor-6th", "title": "Minor 6th", "description": "Compare the sad beauty - explore the minor 6th's melancholic character.", "linkText": "Feel the sadness", "icon": "\ud83d\ude22", "hoverBorder": "hover:border-blue-300", "iconBg": "bg-blue-100", "iconHoverBg": "group-hover:bg-blue-200", "linkColor": "text-blue-600", "linkHoverColor": "group-hover:text-blue-700" },
    { "slug": "perfect-5th", "title": "Perfect 5th", "description": "Step back to rock-solid stability - the foundation of power chords.", "linkText": "Find power", "icon": "\ud83c\udfaf", "hoverBorder": "hover:border-green-300", "iconBg": "bg-green-100", "iconHoverBg": "group-hover:bg-green-200", "linkColor": "text-green-600", "linkHoverColor": "group-hover:text-green-700" },
    { "slug": "minor-7th", "title": "Minor 7th", "description": "Step up to bluesy sophistication - essential for dominant 7th chords.", "linkText": "Add blues", "icon": "\ud83c\udfb5", "hoverBorder": "hover:border-purple-300", "iconBg": "bg-purple-100", "iconHoverBg": "group-hover:bg-purple-200", "linkColor": "text-purple-600", "linkHoverColor": "group-hover:text-purple-700" }
  ] }
};

// === minor-7th.json ===
const minor7th = {
  "slug": "minor-7th",
  "intervalInfo": { "name": "Minor 7th Interval", "pageTitle": "Minor 7th Interval", "subtitle": "The foundation of jazz harmony - 10 semitones that creates a smooth, mellow dissonance essential for sophisticated musical expression.", "colorScheme": "blue", "heroGradient": "bg-gradient-to-r from-blue-500 to-indigo-600", "tags": ["10 Semitones", "Jazz Foundation", "Smooth Dissonance", "Dominant Function"] },
  "theory": { "propertiesTitle": "Interval Properties", "properties": [{ "label": "Size", "value": "10 semitones (5 whole steps)" }, { "label": "Quality", "value": "Minor" }, { "label": "Sound", "value": "Smooth, mellow dissonance" }, { "label": "Consonance", "value": "Mild dissonance, stable" }, { "label": "Function", "value": "Creates tension that resolves smoothly" }], "examplesTitle": "Common Examples", "examples": [{ "label": "C to Bb", "value": "Classic minor 7th" }, { "label": "G7 chord", "value": "G-B-D-F (G to F)" }, { "label": "Mixolydian mode", "value": "7th degree relationship" }, { "label": "\"Somewhere\"", "value": "Opening interval from West Side Story" }] },
  "guitarApplications": {
    "intervalExamples": { "title": "Minor 7th Intervals - Jazz Foundation", "description": "The minor 7th (10 semitones) creates a smooth, mellow dissonance that's essential for jazz harmony and sophisticated chord progressions.", "examples": [
      { "title": "C \u2192 Bb Minor 7th", "subtitle": "Classic minor 7th relationship", "chord1": "C_to_Bb_m7", "chord1Label": "C (5th string 3rd fret)", "chord2": "Bb_from_C_m7", "chord2Label": "Bb (5th string 1st fret)", "alphaTex": "3.5.4 1.6.4", "alphaTexTitle": "C to Bb Minor 7th", "description": "Smooth, mellow dissonance", "colorBg": "from-blue-50 to-blue-100", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700", "colorDetail": "text-blue-600" },
      { "title": "G \u2192 F Minor 7th", "subtitle": "G7 chord essential interval", "chord1": "G_to_F_m7", "chord1Label": "G (6th string 3rd fret)", "chord2": "F_from_G_m7", "chord2Label": "F (6th string 1st fret)", "alphaTex": "3.6.4 1.6.4", "alphaTexTitle": "G to F Minor 7th", "description": "Dominant 7th chord tension", "colorBg": "from-indigo-50 to-indigo-100", "colorBorder": "border border-indigo-200", "colorTitle": "text-indigo-800", "colorText": "text-indigo-700", "colorDetail": "text-indigo-600" },
      { "title": "D \u2192 C Minor 7th", "subtitle": "Jazz progression application", "chord1": "D_to_C_m7", "chord1Label": "D (4th string open)", "chord2": "C_from_D_m7", "chord2Label": "C (5th string 3rd fret)", "alphaTex": "0.4.4 3.5.4", "alphaTexTitle": "D to C Minor 7th", "description": "Sophisticated harmonic movement", "colorBg": "from-purple-50 to-purple-100", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700", "colorDetail": "text-purple-600" }
    ] },
    "chordConstructions": { "title": "Dominant 7th Chord Applications - V7 Function", "items": [
      { "title": "G7 Chord", "chord": "G7", "chordLabel": "G7 with minor 7th (F)", "alphaTex": "(3.6 4.5 0.4 1.6).1", "alphaTexTitle": "G7 Chord", "alphaTexDescription": "G-B-D-F: Major triad + minor 7th", "bullets": ["Minor 7th: G \u2192 F (smooth tension)", "Dominant function: Resolves to C", "Blues/jazz: Essential V7 chord"], "colorBg": "from-red-50 to-red-100", "colorBorder": "border border-red-200", "colorTitle": "text-red-800", "colorText": "text-red-700", "colorDetail": "text-red-600" },
      { "title": "C7 Chord", "chord": "C7", "chordLabel": "C7 with minor 7th (Bb)", "alphaTex": "(3.5 2.4 3.3 1.6).1", "alphaTexTitle": "C7 Chord", "alphaTexDescription": "C-E-G-Bb: Major triad + minor 7th", "bullets": ["Minor 7th: C \u2192 Bb (jazz sophistication)", "Blues progression: I7 chord function", "Secondary dominant: V7/V applications"], "colorBg": "from-orange-50 to-orange-100", "colorBorder": "border border-orange-200", "colorTitle": "text-orange-800", "colorText": "text-orange-700", "colorDetail": "text-orange-600" },
      { "title": "Am7 Chord", "chord": "Am7", "chordLabel": "Am7 with minor 7th (G)", "alphaTex": "(0.5 3.4 2.4 1.6).1", "alphaTexTitle": "Am7 Chord", "alphaTexDescription": "A-C-E-G: Minor triad + minor 7th", "bullets": ["Minor 7th: A \u2192 G (mellow sophistication)", "ii chord: ii-V-I progressions", "Jazz harmony: Essential minor 7th sound"], "colorBg": "from-teal-50 to-teal-100", "colorBorder": "border border-teal-200", "colorTitle": "text-teal-800", "colorText": "text-teal-700", "colorDetail": "text-teal-600" }
    ] },
    "fretboardPatterns": [
      { "title": "ii-V-I Progression", "alphaTex": "(0.4 1.4 2.5 3.4).1 | (3.6 4.5 0.4 1.6).1 | (3.5 2.4 3.3).1", "alphaTexTitle": "Jazz Standard Movement", "alphaTexDescription": "Dm7 - G7 - C: Minor 7th in both ii and V chords", "bullets": ["Dm7: D \u2192 C minor 7th", "G7: G \u2192 F minor 7th", "Smooth voice leading: Essential jazz movement"], "colorBg": "from-emerald-50 to-emerald-100", "colorBorder": "border border-emerald-200", "colorTitle": "text-emerald-800", "colorText": "text-emerald-700" },
      { "title": "\"Somewhere\" Reference", "alphaTex": "3.5.1 1.6.1", "alphaTexTitle": "Classic Minor 7th Leap", "alphaTexDescription": "\"Somewhere\" opening - most famous minor 7th in music", "bullets": ["Ear training: Perfect reference interval", "Melodic leap: Expressive, yearning quality", "Broadway classic: West Side Story"], "colorBg": "from-violet-50 to-violet-100", "colorBorder": "border border-violet-200", "colorTitle": "text-violet-800", "colorText": "text-violet-700" }
    ]
  },
  "musicalExamples": { "classical": [{ "title": "\"Somewhere\" - West Side Story", "description": "Opening leap is a perfect minor 7th interval", "detail": "Most recognizable minor 7th in popular culture" }, { "title": "Bach's Chorale Harmonizations", "description": "Minor 7th in dominant 7th chord resolutions", "detail": "Demonstrates classical voice leading principles" }], "popular": [{ "title": "Jazz Standards", "description": "Minor 7th chords throughout jazz repertoire", "detail": "Foundation of jazz harmonic language" }, { "title": "Blues Progressions", "description": "Dominant 7th chords with minor 7th intervals", "detail": "Essential for authentic blues sound" }] },
  "practiceExercises": [
    { "title": "Ear Training", "items": ["Use \"Somewhere\" melody as reference", "Practice minor 7th vs major 7th recognition", "Listen to dominant 7th chord qualities", "Study Mixolydian mode relationships", "Analyze jazz progressions with minor 7ths"], "colorBg": "bg-blue-50", "colorBorder": "border border-blue-200", "colorTitle": "text-blue-800", "colorText": "text-blue-700" },
    { "title": "Technical Practice", "items": ["Practice minor 7th intervals across strings", "Work on dominant 7th chord shapes", "Study minor 7th chord voicings", "Practice minor 7th melodic leaps", "Work on jazz chord progressions"], "colorBg": "bg-cyan-50", "colorBorder": "border border-cyan-200", "colorTitle": "text-cyan-800", "colorText": "text-cyan-700" },
    { "title": "Musical Application", "items": ["Compose with minor 7th intervals", "Analyze jazz standard chord progressions", "Practice ii-V-I progressions", "Study blues form with 7th chords", "Work on chord-melody arrangements"], "colorBg": "bg-slate-50", "colorBorder": "border border-slate-200", "colorTitle": "text-slate-800", "colorText": "text-slate-700" }
  ],
  "theoreticalContext": { "harmonicFunction": [{ "title": "Major 2nd Inversion", "description": "Minor 7th is the inversion of major 2nd: 10 + 2 = 12 semitones (octave)" }, { "title": "Resolution Tendency", "description": "Minor 7th resolves down by step, major 2nd resolves up by step" }], "historicalDevelopment": [{ "title": "Dominant Function", "description": "Essential component of V7 chords creating tension toward tonic" }, { "title": "Jazz Extensions", "description": "Foundation for more complex jazz harmony and chord extensions" }] },
  "relatedIntervals": [
    { "title": "Major 2nd", "description": "2 semitones - inversion of minor 7th", "detail": "Stepwise motion vs large leap relationship", "colorBg": "bg-green-50", "colorBorder": "border border-green-200", "colorTitle": "text-green-800", "colorText": "text-green-700", "colorDetail": "text-green-600" },
    { "title": "Major 7th", "description": "11 semitones - one semitone larger", "detail": "Compare minor vs major 7th tensions", "colorBg": "bg-amber-50", "colorBorder": "border border-amber-200", "colorTitle": "text-amber-800", "colorText": "text-amber-700", "colorDetail": "text-amber-600" },
    { "title": "Minor 6th", "description": "8 semitones - both add sophisticated color", "detail": "Similar harmonic complexity and jazz applications", "colorBg": "bg-purple-50", "colorBorder": "border border-purple-200", "colorTitle": "text-purple-800", "colorText": "text-purple-700", "colorDetail": "text-purple-600" }
  ],
  "journeySection": { "title": "Continue Your Interval Journey", "description": "Now that you understand the minor 7th, explore its relationships with other intervals and harmonic applications.", "links": [
    { "slug": "major-2nd", "title": "Major 2nd", "description": "Study the inversion relationship between major 2nd and minor 7th intervals.", "linkText": "Study inversions", "icon": "\ud83d\udd04", "hoverBorder": "hover:border-green-300", "iconBg": "bg-green-100", "iconHoverBg": "group-hover:bg-green-200", "linkColor": "text-green-600", "linkHoverColor": "group-hover:text-green-700" },
    { "slug": "major-7th", "title": "Major 7th", "description": "Compare the smooth minor 7th against the sharp tension of the major 7th.", "linkText": "Feel the tension", "icon": "\u26a1", "hoverBorder": "hover:border-amber-300", "iconBg": "bg-amber-100", "iconHoverBg": "group-hover:bg-amber-200", "linkColor": "text-amber-600", "linkHoverColor": "group-hover:text-amber-700" },
    { "slug": "perfect-5th", "title": "Perfect 5th", "description": "Return to the stable perfect 5th to understand consonance vs dissonance.", "linkText": "Compare stability", "icon": "\ud83c\udfaf", "hoverBorder": "hover:border-indigo-300", "iconBg": "bg-indigo-100", "iconHoverBg": "group-hover:bg-indigo-200", "linkColor": "text-indigo-600", "linkHoverColor": "group-hover:text-indigo-700" }
  ] }
};

// Write all files
fs.writeFileSync(path.join(baseDir, 'perfect-5th.json'), JSON.stringify(perfect5th, null, 2) + '\n');
fs.writeFileSync(path.join(baseDir, 'minor-6th.json'), JSON.stringify(minor6th, null, 2) + '\n');
fs.writeFileSync(path.join(baseDir, 'major-6th.json'), JSON.stringify(major6th, null, 2) + '\n');
fs.writeFileSync(path.join(baseDir, 'minor-7th.json'), JSON.stringify(minor7th, null, 2) + '\n');

console.log('All 4 interval JSON files written successfully!');
