// Generator: extracts data from TSX source files and writes JSON
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src', 'data', 'song-lessons');
const rBL = { href: '/lessons/songs/riffs', label: 'Back to Riffs & Melodic Analysis' };
const tBL = { href: '/lessons/songs/techniques', label: 'Back to Guitar Techniques' };

function w(dir, slug, data) {
  const d = path.join(base, dir);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, slug + '.json'), JSON.stringify(data, null, 2));
  console.log('Wrote ' + dir + '/' + slug);
}

function getSrc(p) { return execSync('git show HEAD:' + p, { encoding: 'utf8' }); }

function ext(s, name) {
  const re = new RegExp('const\\s+' + name + '\\s*(?::\\s*[^=]+)?\\s*=\\s*\\[');
  const m = s.match(re);
  if (!m) { console.error('Not found: ' + name); return []; }
  let depth = 0, start = s.indexOf('[', m.index);
  for (let i = start; i < s.length; i++) {
    if (s[i] === '[') depth++;
    if (s[i] === ']') depth--;
    if (depth === 0) {
      try { return new Function('return ' + s.substring(start, i + 1))(); }
      catch (e) { console.error('Eval fail ' + name + ': ' + e.message); return []; }
    }
  }
  return [];
}

function cap(s) { return s.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim(); }

function bColor(d) {
  if (!d) return 'gray';
  const l = d.toLowerCase();
  return l === 'beginner' ? 'green' : l === 'intermediate' ? 'yellow' : l === 'advanced' ? 'red' : l === 'expert' ? 'purple' : 'blue';
}

function buildCards(arr) {
  return arr.map(item => {
    const c = {};
    const tk = ['name','title','concept','element','technique','song','style','pattern','challenge','scale'].find(k => item[k]);
    if (tk) c.title = item[tk];
    if (item.description) c.description = item.description;
    const bk = ['difficulty','difficultyLevel','level'].find(k => item[k]);
    if (bk) c.badge = { text: item[bk], color: bColor(item[bk]) };
    const skip = new Set([tk, 'description', bk].filter(Boolean));
    const fields = [], items = [];
    for (const [k, v] of Object.entries(item)) {
      if (skip.has(k)) continue;
      if (typeof v === 'string') fields.push({ label: cap(k), value: v });
      else if (Array.isArray(v)) v.forEach(x => items.push(typeof x === 'string' ? x : JSON.stringify(x)));
    }
    if (fields.length) c.fields = fields;
    if (items.length) c.items = items;
    return c;
  });
}

function sec(title, arr, opts = {}) {
  return {
    title,
    ...(opts.layout && { layout: opts.layout }),
    ...(opts.bgColor && { bgColor: opts.bgColor }),
    ...(opts.borderColor && { borderColor: opts.borderColor }),
    cards: buildCards(arr)
  };
}

function page(cfg) {
  const s = getSrc(cfg.srcPath);
  const sections = cfg.sections.map(sc => {
    if (sc.cards) return sc; // pre-built section
    return sec(sc.title, ext(s, sc.arrayName), sc);
  });
  return {
    slug: cfg.slug,
    category: cfg.category,
    pageTitle: cfg.pageTitle,
    subtitle: cfg.subtitle,
    heroGradient: cfg.heroGradient,
    backLink: cfg.backLink,
    introduction: cfg.introduction,
    sections,
    ...(cfg.practiceSection && { practiceSection: cfg.practiceSection }),
    relatedTopics: cfg.relatedTopics || []
  };
}

// ===================== RIFFS =====================

// Blues
w('riffs', 'blues', page({
  slug: 'blues', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/blues/page.tsx',
  pageTitle: 'Blues Riffs',
  subtitle: 'Master blues riffs through understanding of blues scales, 12-bar progressions, and call-and-response patterns',
  heroGradient: 'bg-gradient-to-r from-blue-50 to-indigo-50',
  backLink: rBL,
  introduction: {
    title: 'The Foundation of All Popular Music',
    text: 'Blues riffs are the DNA of rock, pop, jazz, and country music. Understanding blues theory gives you the harmonic foundation and rhythmic feel that underlies almost every genre. Start here to build your riff vocabulary from the ground up.',
    columns: [
      { title: 'Universal Language', text: 'Blues scales and 12-bar progressions appear in everything from "Johnny B. Goode" to "Hey Joe" to jazz standards.' },
      { title: 'Technique Foundation', text: 'Blues techniques like bending, vibrato, and call-and-response are essential for expressive playing in any style.' }
    ]
  },
  sections: [
    { arrayName: 'bluesRiffConcepts', title: 'Essential Blues Theory' },
    { arrayName: 'famousBluesRiffs', title: 'Iconic Blues Riffs Analyzed', bgColor: 'purple-50', borderColor: 'purple-500' },
    { arrayName: 'bluesTechniques', title: 'Essential Blues Techniques', layout: 'grid-2' }
  ],
  practiceSection: {
    title: 'Your Blues Riff Learning Path',
    steps: [
      { number: 1, title: 'Foundation (Weeks 1-2)', description: 'Learn the E blues scale in open position. Practice basic 12-bar blues progression. Master shuffle rhythm with simple riffs. Learn "Sweet Home Chicago" main riff.' },
      { number: 2, title: 'Expression (Weeks 3-4)', description: 'Add string bending to your blues scale. Practice vibrato on sustained notes. Learn call-and-response phrasing. Study "The Thrill Is Gone" licks.' },
      { number: 3, title: 'Style Integration (Weeks 5-6)', description: 'Combine multiple techniques in single riffs. Learn riffs in different keys (A, G, D blues). Practice over backing tracks. Create your own blues riffs using learned concepts.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/classic-rock', label: 'Learn Classic Rock Riffs' },
    { href: '/lessons/songs/riffs/pop', label: 'Explore Pop Riffs' },
    { href: '/lessons/songs/chords/progressions', label: 'Study Chord Progressions' },
    { href: '/lessons/songs/riffs/jazz', label: 'Advanced Jazz Riffs' },
    { href: '/lessons/songs/techniques', label: 'Guitar Techniques' },
    { href: '/lessons/songs/riffs', label: 'Back to Riffs Overview' }
  ]
}));

// Classic Rock
w('riffs', 'classic-rock', page({
  slug: 'classic-rock', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/classic-rock/page.tsx',
  pageTitle: 'Classic Rock Riffs',
  subtitle: 'Analyze iconic rock riffs and understand their harmonic foundation, rhythmic patterns, and melodic construction',
  heroGradient: 'bg-gradient-to-r from-red-50 to-orange-50',
  backLink: rBL,
  introduction: {
    title: 'The DNA of Rock Music',
    text: 'Classic rock riffs combine blues heritage with modal harmony to create the sound that defined a generation. Understanding these riffs reveals how simple theoretical concepts can create maximum emotional impact and cultural significance.',
    columns: [
      { title: 'Power & Simplicity', text: "Rock riffs prove that complexity isn't required for impact - often the simplest ideas are the most memorable." },
      { title: 'Modal Flavors', text: 'Rock frequently borrows from parallel minor keys, creating darker colors than pure major key music.' },
      { title: 'Rhythmic Drive', text: 'Rock riffs emphasize rhythm and groove as much as melody, creating visceral physical response.' }
    ]
  },
  sections: [
    { arrayName: 'rockRiffElements', title: 'Essential Rock Riff Elements' },
    { arrayName: 'iconicRockRiffs', title: 'Legendary Riffs Deconstructed', bgColor: 'blue-50', borderColor: 'blue-500' },
    { arrayName: 'progressionAnalysis', title: 'Essential Rock Progressions', layout: 'grid-2' },
    { arrayName: 'rockTechniques', title: 'Essential Rock Techniques', layout: 'grid-2', bgColor: 'purple-50' }
  ],
  practiceSection: {
    title: 'Rock Riff Mastery Path',
    steps: [
      { number: 1, title: 'Foundation (Weeks 1-3)', description: 'Master power chord shapes. Learn "Smoke on the Water". Practice palm muting technique. Understand I-bVII-IV progression.' },
      { number: 2, title: 'Technique (Weeks 4-6)', description: 'String skipping techniques. Learn "Sweet Child O\' Mine" intro. Alternate picking development. Chromatic riff patterns.' },
      { number: 3, title: 'Mastery (Weeks 7-8)', description: 'Complex rhythm patterns. Create original riffs. Combine multiple techniques. Play with backing tracks.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/metal', label: 'Explore Metal Riffs' },
    { href: '/lessons/songs/riffs/blues', label: 'Study Blues Foundation' },
    { href: '/lessons/songs/chords/modal-interchange', label: 'Learn Modal Interchange' },
    { href: '/lessons/songs/riffs/funk', label: 'Funk Rhythmic Concepts' },
    { href: '/lessons/songs/techniques', label: 'Guitar Techniques' },
    { href: '/lessons/songs/riffs', label: 'Back to Riffs Overview' }
  ]
}));

// Metal
w('riffs', 'metal', page({
  slug: 'metal', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/metal/page.tsx',
  pageTitle: 'Metal Riffs',
  subtitle: 'Explore metal riffs with focus on chromatic movement, palm muting techniques, and harmonic minor applications',
  heroGradient: 'bg-gradient-to-r from-gray-900 to-red-900',
  backLink: rBL,
  introduction: {
    title: 'The Science of Heaviness',
    text: 'Metal riffs push harmony to its darkest extremes, using dissonance, chromatic movement, and complex rhythms to create maximum emotional and physical impact. Understanding metal theory reveals how calculated musical choices create visceral reactions.',
    columns: [
      { title: 'Harmonic Tension', text: 'Metal maximizes dissonance through tritones, chromatic movement, and avoided resolutions.' },
      { title: 'Rhythmic Complexity', text: 'Complex time signatures and polyrhythms create intellectual and physical challenge.' },
      { title: 'Technical Mastery', text: 'Extreme techniques push instruments to their limits, requiring years of dedicated practice.' }
    ]
  },
  sections: [
    { arrayName: 'metalHarmonyElements', title: 'Metal Harmonic Elements' },
    { arrayName: 'metalSubgenres', title: 'Metal Subgenre Analysis', bgColor: 'purple-50', borderColor: 'purple-500' },
    { arrayName: 'iconicMetalRiffs', title: 'Legendary Metal Riffs', layout: 'grid-2' },
    { arrayName: 'metalTechniques', title: 'Essential Metal Techniques', layout: 'grid-2', bgColor: 'gray-50' }
  ],
  practiceSection: {
    title: 'Metal Mastery Progression',
    steps: [
      { number: 1, title: 'Foundation (Months 1-2)', description: 'Master palm muting technique. Learn basic power chord progressions. Develop alternate picking precision. Study "Iron Man" and "Paranoid".' },
      { number: 2, title: 'Advanced Harmony (Months 3-6)', description: 'Chromatic riff construction. Tremolo picking development. Harmonic minor scale application. Study Metallica and Megadeth riffs.' },
      { number: 3, title: 'Technical Mastery (Months 7-12)', description: 'Sweep picking arpeggios. Advanced polyrhythms. Artificial harmonics mastery. Progressive and death metal study.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/jazz', label: 'Explore Jazz Harmonic Complexity' },
    { href: '/lessons/songs/riffs/classic-rock', label: 'Study Rock Foundation' },
    { href: '/lessons/songs/chords/extended', label: 'Learn Extended Chords' },
    { href: '/lessons/songs/chords/modal-interchange', label: 'Modal Interchange Theory' },
    { href: '/lessons/songs/techniques', label: 'Advanced Techniques' },
    { href: '/lessons/songs/riffs', label: 'Back to Riffs Overview' }
  ]
}));

// Funk
w('riffs', 'funk', page({
  slug: 'funk', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/funk/page.tsx',
  pageTitle: 'Funk Riffs',
  subtitle: 'Master the rhythmic precision and harmonic sophistication of funk guitar through theory-based analysis',
  heroGradient: 'bg-gradient-to-r from-orange-50 to-yellow-50',
  backLink: rBL,
  introduction: {
    title: 'The Science of Groove',
    text: '',
    columns: [
      { title: 'Rhythmic Foundation', text: 'Funk guitar is built on precise rhythmic execution and strategic use of silence. Understanding syncopation, ghost notes, and the emphasis on "the one" is crucial for authentic funk feel.' },
      { title: 'Harmonic Color', text: 'Extended chords (7ths, 9ths, 11ths) provide the sophisticated harmonic palette that distinguishes funk from simpler rock styles, while maintaining groove primacy.' }
    ]
  },
  sections: [
    { arrayName: 'riffPatterns', title: 'Essential Funk Riff Patterns' },
    { arrayName: 'techniques', title: 'Core Funk Techniques', layout: 'grid-2', bgColor: 'yellow-50', borderColor: 'yellow-200' },
    { arrayName: 'theoryConcepts', title: 'Theory Deep Dive' }
  ],
  practiceSection: {
    title: 'Learning Progression',
    steps: [
      { number: 1, title: 'Basic Rhythm', description: 'Master simple muted strumming patterns and basic 7th chord shapes. Focus on consistent timing and clean muting.' },
      { number: 2, title: 'Syncopation', description: 'Add ghost notes and off-beat accents. Learn to emphasize "the one" while maintaining steady groove.' },
      { number: 3, title: 'Advanced Harmony', description: 'Incorporate extended chords, voice leading, and effects. Develop personal style while maintaining groove foundation.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/pop', label: 'Pop Riffs' },
    { href: '/lessons/songs/riffs', label: 'All Riff Types' },
    { href: '/lessons/songs/riffs/jazz', label: 'Jazz Riffs' }
  ]
}));

// Pop
w('riffs', 'pop', page({
  slug: 'pop', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/pop/page.tsx',
  pageTitle: 'Pop Riffs',
  subtitle: 'Learn the harmonic and melodic principles behind memorable pop guitar riffs',
  heroGradient: 'bg-gradient-to-r from-pink-50 to-purple-50',
  backLink: rBL,
  introduction: {
    title: 'The Art of Memorable Melodies',
    text: '',
    columns: [
      { title: 'Accessibility First', text: 'Pop riffs prioritize memorability and emotional connection over technical complexity. Understanding why certain patterns stick in our minds is key to creating effective pop guitar parts.' },
      { title: 'Harmonic Foundation', text: 'Pop music relies on proven harmonic formulas that create emotional responses. Learning these patterns gives you the tools to craft compelling musical hooks.' }
    ]
  },
  sections: [
    { arrayName: 'riffPatterns', title: 'Essential Pop Riff Patterns' },
    { arrayName: 'popCharacteristics', title: 'Pop Music Characteristics', layout: 'grid-2', bgColor: 'purple-50', borderColor: 'purple-200' },
    { arrayName: 'songAnalysis', title: 'Classic Pop Riff Analysis' },
    { arrayName: 'theoryConcepts', title: 'Theory Deep Dive', bgColor: 'pink-50', borderColor: 'pink-200' }
  ],
  practiceSection: {
    title: 'Learning Progression',
    steps: [
      { number: 1, title: 'Basic Progressions', description: 'Master I-V-vi-IV and vi-IV-I-V progressions with clean chord transitions and consistent strumming.' },
      { number: 2, title: 'Melodic Elements', description: 'Add arpeggiation, single-note hooks, and suspended chords to create more interesting textures.' },
      { number: 3, title: 'Advanced Harmony', description: 'Incorporate modal borrowing, extended chords, and sophisticated voice leading while maintaining pop accessibility.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/funk', label: 'Funk Riffs' },
    { href: '/lessons/songs/riffs', label: 'All Riff Types' },
    { href: '/lessons/songs/riffs/jazz', label: 'Jazz Riffs' }
  ]
}));

// Jazz
w('riffs', 'jazz', page({
  slug: 'jazz', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/jazz/page.tsx',
  pageTitle: 'Jazz Riffs',
  subtitle: 'Master sophisticated jazz harmony and melodic construction through theoretical understanding',
  heroGradient: 'bg-gradient-to-r from-blue-50 to-indigo-50',
  backLink: rBL,
  introduction: {
    title: 'The Language of Sophisticated Harmony',
    text: '',
    columns: [
      { title: 'Harmonic Complexity', text: 'Jazz guitar involves sophisticated harmonic concepts including extended chords, altered scales, and complex voice leading. Understanding these elements is essential for authentic jazz expression.' },
      { title: 'Melodic Sophistication', text: 'Jazz melodies use advanced scalar concepts, chromatic approach tones, and bebop language to create flowing lines that outline complex harmonic progressions.' }
    ]
  },
  sections: [
    { arrayName: 'riffPatterns', title: 'Essential Jazz Riff Patterns' },
    { arrayName: 'jazzConcepts', title: 'Core Jazz Concepts', layout: 'grid-2', bgColor: 'indigo-50', borderColor: 'indigo-200' },
    { arrayName: 'standardAnalysis', title: 'Jazz Standards Analysis' },
    { arrayName: 'theoryConcepts', title: 'Advanced Theory Concepts', bgColor: 'blue-50', borderColor: 'blue-200' }
  ],
  practiceSection: {
    title: 'Jazz Learning Approach',
    steps: [
      { number: 1, title: 'Chord Study', description: 'Master basic jazz chord shapes and voice leading principles through ii-V-I progressions.' },
      { number: 2, title: 'Scale Mastery', description: 'Learn bebop scales and their application over chord changes for smooth melodic lines.' },
      { number: 3, title: 'Standard Repertoire', description: 'Learn jazz standards to understand how theory applies in practical musical contexts.' },
      { number: 4, title: 'Improvisation', description: 'Apply theoretical knowledge through improvisation over jazz chord progressions.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/pop', label: 'Pop Riffs' },
    { href: '/lessons/songs/riffs', label: 'All Riff Types' },
    { href: '/lessons/songs/riffs/fingerstyle', label: 'Fingerstyle Riffs' }
  ]
}));

// Fingerstyle
w('riffs', 'fingerstyle', page({
  slug: 'fingerstyle', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/fingerstyle/page.tsx',
  pageTitle: 'Fingerstyle Riffs',
  subtitle: 'Master the art of combining melody, harmony, and rhythm in solo guitar arrangements',
  heroGradient: 'bg-gradient-to-r from-green-50 to-emerald-50',
  backLink: rBL,
  introduction: {
    title: 'The Complete Guitar Approach',
    text: '',
    columns: [
      { title: 'Multi-Voice Playing', text: 'Fingerstyle guitar allows simultaneous melody, bass, and harmony. Understanding voice leading and counterpoint principles helps create sophisticated solo arrangements.' },
      { title: 'Technical Foundation', text: 'Proper right-hand technique, thumb independence, and finger coordination are essential for executing complex fingerstyle arrangements with clarity and musicality.' }
    ]
  },
  sections: [
    { arrayName: 'riffPatterns', title: 'Essential Fingerstyle Patterns' },
    { arrayName: 'techniques', title: 'Essential Fingerstyle Techniques', layout: 'grid-2', bgColor: 'emerald-50', borderColor: 'emerald-200' },
    { arrayName: 'arrangementStyles', title: 'Fingerstyle Arrangement Styles' },
    { arrayName: 'theoryConcepts', title: 'Arrangement Theory', bgColor: 'green-50', borderColor: 'green-200' }
  ],
  practiceSection: {
    title: 'Fingerstyle Learning Path',
    steps: [
      { number: 1, title: 'Basic Patterns', description: 'Develop thumb independence with simple alternating bass patterns while fingers play basic melodies.' },
      { number: 2, title: 'Voice Independence', description: 'Learn to control multiple voices simultaneously with attention to voice leading and harmonic progression.' },
      { number: 3, title: 'Full Arrangements', description: 'Create complete solo guitar arrangements incorporating melody, harmony, and bass lines.' },
      { number: 4, title: 'Advanced Techniques', description: 'Incorporate harmonics, percussive elements, and extended techniques for modern fingerstyle expression.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/jazz', label: 'Jazz Riffs' },
    { href: '/lessons/songs/riffs', label: 'All Riff Types' },
    { href: '/lessons/songs/riffs/slide', label: 'Slide Riffs' }
  ]
}));

// Slide
w('riffs', 'slide', page({
  slug: 'slide', category: 'riffs',
  srcPath: 'src/app/lessons/songs/riffs/slide/page.tsx',
  pageTitle: 'Slide Riffs',
  subtitle: 'Explore the expressive world of slide guitar through open tunings and advanced techniques',
  heroGradient: 'bg-gradient-to-r from-amber-50 to-orange-50',
  backLink: rBL,
  introduction: {
    title: 'The Voice of Expression',
    text: '',
    columns: [
      { title: 'Unique Tonal Possibilities', text: 'Slide guitar offers unparalleled expressive capabilities through continuous pitch variation, open tuning harmonies, and the ability to access microtonal intervals impossible on fretted instruments.' },
      { title: 'Technical Foundation', text: 'Mastering slide requires understanding of intonation, string dampening, open tuning theory, and the physical principles that govern slide contact and tone production.' }
    ]
  },
  sections: [
    { arrayName: 'riffPatterns', title: 'Essential Slide Riff Patterns' },
    { arrayName: 'tunings', title: 'Essential Open Tunings', bgColor: 'orange-50', borderColor: 'orange-200' },
    { arrayName: 'slidePhysics', title: 'Slide Technique Physics', layout: 'grid-2', bgColor: 'blue-50', borderColor: 'blue-200' },
    { arrayName: 'theoryConcepts', title: 'Slide Guitar Theory', bgColor: 'amber-50', borderColor: 'amber-200' }
  ],
  practiceSection: {
    title: 'Slide Learning Progression',
    steps: [
      { number: 1, title: 'Basic Intonation', description: 'Master slide placement over frets and develop clean intonation with simple single-note exercises.' },
      { number: 2, title: 'Open Tuning Navigation', description: 'Learn open tuning chord positions and basic slide scales for melodic and harmonic playing.' },
      { number: 3, title: 'Style Integration', description: 'Apply slide techniques to blues, rock, and country styles with appropriate rhythmic and harmonic context.' },
      { number: 4, title: 'Advanced Expression', description: 'Develop sophisticated vibrato, microtonal techniques, and integration with standard fretting techniques.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/riffs/fingerstyle', label: 'Fingerstyle Riffs' },
    { href: '/lessons/songs/riffs', label: 'All Riff Types' },
    { href: '/lessons/songs', label: 'Back to Songs' }
  ]
}));

// ===================== TECHNIQUES =====================

// Rhythm
w('techniques', 'rhythm', page({
  slug: 'rhythm', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/rhythm/page.tsx',
  pageTitle: 'Rhythm Guitar Techniques',
  subtitle: 'Master the foundation of guitar playing through rhythm, timing, and groove',
  heroGradient: 'bg-gradient-to-r from-blue-50 to-indigo-50',
  backLink: tBL,
  introduction: {
    title: 'The Heartbeat of Music',
    text: '',
    columns: [
      { title: 'Rhythmic Foundation', text: 'Rhythm guitar provides the harmonic and rhythmic foundation that supports melody and drives songs forward. Mastering rhythm techniques is essential for all guitar styles.' },
      { title: 'Musical Context', text: 'Great rhythm playing requires understanding how technique serves the song. Each pattern and technique has specific musical applications and emotional effects.' }
    ]
  },
  sections: [
    { arrayName: 'rhythmPatterns', title: 'Essential Rhythm Patterns' },
    { arrayName: 'mutingTechniques', title: 'Muting Techniques', layout: 'grid-2', bgColor: 'indigo-50', borderColor: 'indigo-200' },
    { arrayName: 'chordTransitions', title: 'Smooth Chord Transitions' },
    { arrayName: 'theoryConcepts', title: 'Rhythm Theory', bgColor: 'blue-50', borderColor: 'blue-200' }
  ],
  practiceSection: {
    title: 'Practice Methodology',
    steps: [
      { number: 1, title: 'Metronome Work', description: 'Develop internal timing with consistent metronome practice at various tempos.' },
      { number: 2, title: 'Pattern Isolation', description: 'Practice rhythm patterns separately before applying to chord progressions.' },
      { number: 3, title: 'Song Application', description: 'Apply patterns to real songs to understand musical context and function.' },
      { number: 4, title: 'Dynamic Control', description: 'Develop ability to vary dynamics and accents for musical expression.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/lead', label: 'Lead Techniques' }
  ]
}));

// Lead
w('techniques', 'lead', page({
  slug: 'lead', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/lead/page.tsx',
  pageTitle: 'Lead Guitar Techniques',
  subtitle: 'Develop expressive melodic playing through advanced picking, bending, and phrasing techniques',
  heroGradient: 'bg-gradient-to-r from-purple-50 to-pink-50',
  backLink: tBL,
  introduction: {
    title: 'The Art of Musical Expression',
    text: '',
    columns: [
      { title: 'Technical Foundation', text: 'Lead guitar technique provides the tools for melodic expression. Mastering picking, bending, and vibrato creates the foundation for expressive playing across all styles.' },
      { title: 'Musical Application', text: 'Great lead playing balances technical skill with musical sensitivity. Understanding when and how to apply techniques serves the song and creates emotional connection.' }
    ]
  },
  sections: [
    { arrayName: 'leadTechniques', title: 'Core Lead Guitar Techniques' },
    { arrayName: 'expressiveTechniques', title: 'Expressive Elements', layout: 'grid-2', bgColor: 'pink-50', borderColor: 'pink-200' },
    { arrayName: 'scaleTechniques', title: 'Scale-Based Techniques' },
    { arrayName: 'theoryConcepts', title: 'Lead Guitar Theory', bgColor: 'purple-50', borderColor: 'purple-200' }
  ],
  practiceSection: {
    title: 'Lead Guitar Development Path',
    steps: [
      { number: 1, title: 'Picking Foundation', description: 'Master alternate picking and basic scale patterns for clean, accurate single-note playing.' },
      { number: 2, title: 'Expression Basics', description: 'Develop bending, vibrato, and legato techniques for musical expression and phrasing.' },
      { number: 3, title: 'Musical Application', description: 'Apply techniques to songs and solos, focusing on musical context and appropriate usage.' },
      { number: 4, title: 'Advanced Techniques', description: 'Master sweep picking, tapping, and other advanced techniques for complex musical passages.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques/rhythm', label: 'Rhythm Techniques' },
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/fingerpicking', label: 'Fingerpicking' }
  ]
}));

// Fingerpicking
w('techniques', 'fingerpicking', page({
  slug: 'fingerpicking', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/fingerpicking/page.tsx',
  pageTitle: 'Fingerpicking Patterns',
  subtitle: 'Master the art of fingerstyle guitar through classical and contemporary approaches',
  heroGradient: 'bg-gradient-to-r from-emerald-50 to-green-50',
  backLink: tBL,
  introduction: {
    title: 'The Complete Guitar Experience',
    text: '',
    columns: [
      { title: 'Multi-Voice Capability', text: 'Fingerpicking allows simultaneous melody, bass, and harmony, making the guitar a complete musical instrument capable of sophisticated arrangements and solo performances.' },
      { title: 'Technical Precision', text: 'Proper fingerpicking technique requires precise finger independence, consistent tone production, and understanding of classical and contemporary approaches to fingerstyle playing.' }
    ]
  },
  sections: [
    { arrayName: 'fingerpickingPatterns', title: 'Essential Fingerpicking Patterns' },
    { arrayName: 'rightHandTechniques', title: 'Right Hand Techniques', layout: 'grid-2', bgColor: 'green-50', borderColor: 'green-200' },
    { arrayName: 'fingerpickingStyles', title: 'Fingerpicking Styles' },
    { arrayName: 'theoryConcepts', title: 'Fingerpicking Theory', bgColor: 'emerald-50', borderColor: 'emerald-200' }
  ],
  practiceSection: {
    title: 'Fingerpicking Development Path',
    steps: [
      { number: 1, title: 'Basic Patterns', description: 'Master simple P-I-M-A patterns and develop finger independence with consistent timing.' },
      { number: 2, title: 'Thumb Independence', description: 'Develop Travis picking and alternating bass patterns while maintaining melody lines.' },
      { number: 3, title: 'Style Integration', description: 'Apply techniques to classical, folk, and contemporary fingerstyle repertoire.' },
      { number: 4, title: 'Advanced Techniques', description: 'Master percussive techniques, harmonics, and complex contemporary fingerstyle approaches.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques/lead', label: 'Lead Techniques' },
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/percussive', label: 'Percussive Techniques' }
  ]
}));

// Percussive
w('techniques', 'percussive', page({
  slug: 'percussive', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/percussive/page.tsx',
  pageTitle: 'Percussive Techniques',
  subtitle: 'Expand your rhythmic vocabulary with modern percussive guitar techniques',
  heroGradient: 'bg-gradient-to-r from-orange-50 to-red-50',
  backLink: tBL,
  introduction: {
    title: 'Beyond Traditional Technique',
    text: '',
    columns: [
      { title: 'Rhythmic Expansion', text: 'Percussive techniques transform the guitar into a complete rhythm section, adding drums, bass, and textural elements to traditional playing approaches.' },
      { title: 'Modern Applications', text: 'Contemporary music demands rhythmic sophistication. Percussive techniques provide the tools for modern acoustic performance and solo arrangements.' }
    ]
  },
  sections: [
    { arrayName: 'percussiveTechniques', title: 'Core Percussive Techniques' },
    { arrayName: 'bodyPercussionTechniques', title: 'Body Percussion Techniques', layout: 'grid-2', bgColor: 'red-50', borderColor: 'red-200' },
    { arrayName: 'percussiveApplications', title: 'Style Applications' },
    { arrayName: 'theoryConcepts', title: 'Percussive Theory', bgColor: 'orange-50', borderColor: 'orange-200' }
  ],
  practiceSection: {
    title: 'Percussive Development Path',
    steps: [
      { number: 1, title: 'Basic Percussion', description: 'Master simple palm slaps and body taps while maintaining basic strumming patterns.' },
      { number: 2, title: 'Coordination', description: 'Develop hand independence to combine percussive elements with fingerpicking patterns.' },
      { number: 3, title: 'Musical Integration', description: 'Apply percussive techniques musically within song contexts and arrangements.' },
      { number: 4, title: 'Advanced Techniques', description: 'Master complex rasgueado patterns and harmonic percussion for sophisticated textures.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques/fingerpicking', label: 'Fingerpicking' },
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/bending', label: 'Bending & Vibrato' }
  ]
}));

// Bending
w('techniques', 'bending', page({
  slug: 'bending', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/bending/page.tsx',
  pageTitle: 'String Bending & Vibrato',
  subtitle: 'Master expressive techniques that bring emotion and character to your guitar playing',
  heroGradient: 'bg-gradient-to-r from-blue-50 to-purple-50',
  backLink: tBL,
  introduction: {
    title: 'The Voice of the Guitar',
    text: '',
    columns: [
      { title: 'Expressive Foundation', text: 'String bending and vibrato are fundamental expressive techniques that transform static notes into living, breathing musical phrases. These techniques bridge the gap between mechanical playing and human expression.' },
      { title: 'Musical Communication', text: 'Great bending and vibrato communicate emotion directly to listeners. Understanding the theory and technique behind these expressions enables authentic musical communication across all styles.' }
    ]
  },
  sections: [
    { arrayName: 'bendingTechniques', title: 'String Bending Techniques' },
    { arrayName: 'vibratoTechniques', title: 'Vibrato Techniques', layout: 'grid-2', bgColor: 'purple-50', borderColor: 'purple-200' },
    { arrayName: 'expressiveBending', title: 'Expressive Bending Concepts', layout: 'grid-2', bgColor: 'blue-50', borderColor: 'blue-200' },
    { arrayName: 'theoryConcepts', title: 'Bending & Vibrato Theory', bgColor: 'indigo-50', borderColor: 'indigo-200' }
  ],
  practiceSection: {
    title: 'Development Progression',
    steps: [
      { number: 1, title: 'Basic Bending', description: 'Master half-step and whole-step bends with accurate pitch targeting and clean execution.' },
      { number: 2, title: 'Vibrato Control', description: 'Develop consistent vibrato with control over speed, width, and musical application.' },
      { number: 3, title: 'Advanced Techniques', description: 'Master pre-bending, unison bends, and microtonal variations for sophisticated expression.' },
      { number: 4, title: 'Musical Expression', description: 'Apply techniques musically with proper phrasing, dynamics, and emotional communication.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques/percussive', label: 'Percussive Techniques' },
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/advanced-picking', label: 'Advanced Picking' }
  ]
}));

// Advanced Picking
w('techniques', 'advanced-picking', page({
  slug: 'advanced-picking', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/advanced-picking/page.tsx',
  pageTitle: 'Advanced Picking',
  subtitle: 'Master sophisticated picking techniques for complex musical passages and technical versatility',
  heroGradient: 'bg-gradient-to-r from-red-50 to-orange-50',
  backLink: tBL,
  introduction: {
    title: 'Technical Mastery in Service of Music',
    text: '',
    columns: [
      { title: 'Technical Sophistication', text: 'Advanced picking techniques expand your technical vocabulary, enabling execution of complex musical passages that would be impossible with basic techniques alone.' },
      { title: 'Musical Application', text: 'The most advanced techniques must serve musical expression. Understanding when and how to apply each technique ensures technical skill enhances rather than overshadows musicality.' }
    ]
  },
  sections: [
    { arrayName: 'advancedTechniques', title: 'Advanced Picking Techniques' },
    { arrayName: 'pickingPatterns', title: 'Essential Picking Patterns', layout: 'grid-2', bgColor: 'orange-50', borderColor: 'orange-200' },
    { arrayName: 'technicalChallenges', title: 'Common Technical Challenges', layout: 'grid-2', bgColor: 'red-50', borderColor: 'red-200' },
    { arrayName: 'theoryConcepts', title: 'Advanced Picking Theory' }
  ],
  practiceSection: {
    title: 'Advanced Picking Development',
    steps: [
      { number: 1, title: 'Foundation Mastery', description: 'Perfect alternate picking and basic techniques before attempting advanced methods.' },
      { number: 2, title: 'Technique Isolation', description: 'Practice each advanced technique separately with focus on clean execution and relaxation.' },
      { number: 3, title: 'Musical Integration', description: 'Apply techniques within musical contexts, focusing on appropriate usage rather than technical display.' },
      { number: 4, title: 'Advanced Combinations', description: 'Combine multiple techniques fluidly while maintaining musical expression and technical accuracy.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques/bending', label: 'Bending & Vibrato' },
    { href: '/lessons/songs/techniques', label: 'All Techniques' },
    { href: '/lessons/songs/techniques/slide-legato', label: 'Slide & Legato' }
  ]
}));

// Slide & Legato
w('techniques', 'slide-legato', page({
  slug: 'slide-legato', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/slide-legato/page.tsx',
  pageTitle: 'Slide & Legato Techniques',
  subtitle: 'Master smooth, connected playing through slides, hammer-ons, and pull-offs. Create vocal-like phrasing and expressive melodic lines.',
  heroGradient: 'bg-gradient-to-r from-purple-50 to-pink-50',
  backLink: tBL,
  introduction: {
    title: 'Why Legato Matters',
    text: '',
    columns: [
      { title: 'Musical Expression', text: 'Legato techniques allow for smooth, vocal-like phrasing that connects notes naturally and expressively.' },
      { title: 'Technical Efficiency', text: 'Reducing pick attacks creates faster, more fluid passages while adding dynamic variety to your playing.' }
    ]
  },
  sections: [
    { arrayName: 'techniques', title: 'Legato Techniques' },
    { arrayName: 'musicalConcepts', title: 'Musical Concepts', layout: 'grid-2' },
    { arrayName: 'practiceExercises', title: 'Progressive Exercises' }
  ],
  practiceSection: {
    title: 'Recommended Learning Path',
    steps: [
      { number: 1, title: 'Start with "Blackbird" - Beatles', description: 'Perfect for learning basic hammer-ons and pull-offs in a musical context.' },
      { number: 2, title: 'Progress to "Tears in Heaven" - Clapton', description: 'Introduces slides and more complex legato patterns.' },
      { number: 3, title: 'Master "Tender Surrender" - Vai', description: 'Advanced cascading legato and expressive techniques.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques', label: 'Back to Techniques' },
    { href: '/lessons/songs/techniques/bending', label: 'String Bending' },
    { href: '/lessons/songs/techniques/effects', label: 'Effects Integration' }
  ]
}));

// Effects
w('techniques', 'effects', page({
  slug: 'effects', category: 'techniques',
  srcPath: 'src/app/lessons/songs/techniques/effects/page.tsx',
  pageTitle: 'Effects Integration',
  subtitle: 'Learn how guitar techniques adapt and evolve when using effects. Master the relationship between playing style and sonic processing.',
  heroGradient: 'bg-gradient-to-r from-cyan-50 to-blue-50',
  backLink: tBL,
  introduction: {
    title: 'Effects & Technique Synergy',
    text: '',
    columns: [
      { title: 'Technique Adaptation', text: 'Effects change how your playing translates to sound. Learn to adapt your technique to work with, rather than against, your effects.' },
      { title: 'Musical Context', text: 'Different genres and songs require specific effect/technique combinations to achieve authentic sounds and expressions.' }
    ]
  },
  sections: [
    { arrayName: 'effectCategories', title: 'Effect Categories & Technique Adaptations' },
    { arrayName: 'techniquePrinciples', title: 'Core Principles', layout: 'grid-2' },
    { arrayName: 'practiceScenarios', title: 'Progressive Practice Scenarios' },
    { arrayName: 'effectChains', title: 'Common Effect Chains', layout: 'grid-2' }
  ],
  practiceSection: {
    title: 'Progressive Song Study',
    steps: [
      { number: 1, title: '"More Than Words" - Extreme (Clean + Compression)', description: 'Learn how compression affects fingerpicking dynamics and chord clarity.' },
      { number: 2, title: '"Where the Streets Have No Name" - U2 (Delay + Reverb)', description: 'Master rhythmic delay timing and ambient lead techniques.' },
      { number: 3, title: '"Comfortably Numb" - Pink Floyd (Full Chain)', description: 'Integrate multiple effects for both rhythm and lead parts.' },
      { number: 4, title: '"Schism" - Tool (Complex Modern Chain)', description: 'Advanced effect switching and technique precision.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques', label: 'Back to Techniques' },
    { href: '/lessons/songs/techniques/slide-legato', label: 'Slide & Legato' },
    { href: '/lessons/songs/techniques/advanced-picking', label: 'Advanced Picking' }
  ]
}));

// Power Chords (special case - no data arrays, all inline JSX)
w('techniques', 'power-chords', {
  slug: 'power-chords',
  category: 'techniques',
  pageTitle: 'Power Chords',
  subtitle: 'Master the foundation of rock, metal, and punk music with comprehensive power chord techniques and theory',
  heroGradient: 'bg-gradient-to-r from-red-50 to-orange-50',
  backLink: tBL,
  introduction: {
    title: 'Power Chords (5th Chords)',
    text: 'Power chords are two-note chords consisting of a root note and its perfect fifth. They form the backbone of rock, metal, punk, and many other genres, providing a powerful, driving sound that cuts through dense mixes.',
    columns: [
      { title: 'Also Known As', text: '5th chords, fifth chords. Notation: Root + "5" (e.g., E5, A5, C5). Structure: Root + Perfect Fifth. Sound: Neutral, powerful, neither major nor minor.' },
      { title: 'Why Power Chords?', text: 'Distortion-friendly: No third means no muddiness. Easy to play: Simple two-finger shapes. Moveable: Same shape works across the fretboard. Powerful sound: Foundation of rock music. Neutral tonality: Neither major nor minor.' }
    ]
  },
  sections: [
    {
      title: 'Playing Techniques',
      layout: 'grid-2',
      cards: [
        {
          title: 'Picking Techniques',
          bgColor: 'green-50',
          borderColor: 'green-200',
          fields: [
            { label: 'Downstrokes', value: 'Primary technique for power and aggression. Creates consistent attack and tone. Essential for punk and metal styles.' },
            { label: 'Alternate Picking', value: 'For faster passages and complex rhythms. Down-up-down-up motion. More efficient for speed.' },
            { label: 'Palm Muting', value: 'Rest palm lightly on strings near bridge. Creates tight, percussive sound. Essential for modern rock/metal.' }
          ]
        },
        {
          title: 'Fingering & Hand Position',
          bgColor: 'purple-50',
          borderColor: 'purple-200',
          fields: [
            { label: 'Basic Fingering', value: 'Index finger on root note. Ring finger on fifth (2 frets higher). Keep fingers curved and close to frets.' },
            { label: 'Muting Technique', value: 'Use index finger to lightly touch higher strings. Thumb can mute 6th string when playing 5th string root.' },
            { label: 'Octave Addition', value: 'Add pinky one string higher, same fret as root. Creates fuller, thicker sound. Example: E5 = E(6th) + B(5th) + E(4th).' }
          ]
        }
      ]
    },
    {
      title: 'Theory & Musical Application',
      layout: 'grid-2',
      cards: [
        {
          title: 'Music Theory',
          bgColor: 'yellow-50',
          borderColor: 'yellow-200',
          fields: [
            { label: 'Interval Structure', value: 'Perfect Fifth interval (7 semitones). Most consonant interval after octave. No third = no major/minor quality.' },
            { label: 'Why No Third?', value: 'Third creates beating with distortion. Cleaner sound through amplification. Neutral tonality works in any key.' },
            { label: 'Harmonic Function', value: 'Can function as major or minor chords. Context determines harmonic meaning. Excellent for modal music.' }
          ]
        },
        {
          title: 'Genres & Styles',
          bgColor: 'cyan-50',
          borderColor: 'cyan-200',
          fields: [
            { label: 'Rock & Hard Rock', value: 'Foundation of classic rock rhythm. Often with moderate distortion. Examples: AC/DC, Led Zeppelin.' },
            { label: 'Metal', value: 'Heavy distortion and palm muting. Fast, aggressive rhythms. Often in dropped tunings. Examples: Metallica, Black Sabbath.' },
            { label: 'Punk', value: 'Fast downstrokes, simple progressions. Raw, energetic sound. Examples: Ramones, Sex Pistols.' }
          ]
        }
      ]
    },
    {
      title: 'Power Chord Song Examples',
      layout: 'grid-2',
      bgColor: 'gray-50',
      cards: [
        {
          title: 'Beginner-Friendly Songs',
          items: [
            '"Wild Thing" - The Troggs (A-D-E progression)',
            '"Louie Louie" - The Kingsmen (Classic three-chord)',
            '"Blitzkrieg Bop" - Ramones (Fast punk energy)',
            '"Gloria" - Them (Simple but effective)'
          ]
        },
        {
          title: 'Intermediate Songs',
          items: [
            '"We\'re Not Gonna Take It" - Twisted Sister (E-A-B progression)',
            '"Smoke on the Water" - Deep Purple (Famous riff)',
            '"Come As You Are" - Nirvana (Grunge style)',
            '"Iron Man" - Black Sabbath (Heavy metal foundation)'
          ]
        }
      ]
    }
  ],
  practiceSection: {
    title: 'Practice Exercises',
    steps: [
      { number: 1, title: 'Chord Changes', description: 'Practice switching between E5, A5, and D5. Start slow, focus on clean changes.' },
      { number: 2, title: 'Strumming Patterns', description: 'Use all downstrokes: Down-Down-Up-Down. Keep steady tempo with metronome.' },
      { number: 3, title: 'Palm Muting', description: 'Practice same chords with palm muting. Light touch, percussive sound.' },
      { number: 4, title: 'Advanced: Chromatic Movement & Octave Power Chords', description: 'Move power chords chromatically up and down the neck. Add the octave note with your pinky for fuller three-note power chords.' }
    ]
  },
  relatedTopics: [
    { href: '/lessons/songs/techniques', label: 'Back to Techniques' },
    { href: '/lessons/songs/techniques/rhythm', label: 'Rhythm Techniques' },
    { href: '/lessons/songs/techniques/advanced-picking', label: 'Advanced Picking' }
  ]
});

console.log('Done! Generated all 17 JSON files.');
