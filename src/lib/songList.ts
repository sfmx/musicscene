import songsListData from '@/data/_generated/songs-list.json';

export interface SongListItem {
  slug: string;
  title: string;
  artist: string;
  genre: string;
  difficulty: string;
  year: string;
  tempo: string;
  key: string;
  techniques: string[];
  featured?: boolean;
  dateAdded?: string;
  popularity?: number;
  decade?: string;
  subGenre?: string;
  tags?: string[];
  iconicRiff?: boolean;
  estimatedLearningTime?: string;
  viewCount?: number;
}

export interface SearchFilters {
  difficulty?: string[];
  genre?: string[];
  artist?: string[];
  techniques?: string[];
  yearRange?: [number, number];
  decade?: string[];
  tags?: string[];
  featured?: boolean;
  iconicRiff?: boolean;
}

export interface PathwaySong {
  slug: string;
  stepNumber: number;
  title: string;
  artist: string;
  difficulty: string;
  key: string;
  tuning: string;
  tempo: string;
  whyLearn: string;
  keySkills: string[];
}

export interface SongLearningPathway {
  id: string;
  title: string;
  subtitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  badgeColor: 'emerald' | 'amber' | 'purple' | 'cyan' | 'rose';
  description: string;
  skillsLearned: string[];
  songs: PathwaySong[];
}


const songsList: SongListItem[] = songsListData as SongListItem[];

export function getAllSongs(): SongListItem[] {
  return songsList;
}

export function getAllSongSlugs(): string[] {
  return songsList.map(song => song.slug);
}

export function getFeaturedSongs(limit = 6): SongListItem[] {
  return getAllSongs()
    .filter(song => song.featured)
    .slice(0, limit);
}

export function searchSongs(query: string, filters: SearchFilters = {}): SongListItem[] {
  let songs = getAllSongs();
  
  // Text search across title, artist, and techniques
  if (query.trim()) {
    const searchTerms = query.toLowerCase().split(' ');
    songs = songs.filter(song => 
      searchTerms.every(term =>
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.techniques.some(tech => tech.toLowerCase().includes(term)) ||
        song.tags?.some(tag => tag.toLowerCase().includes(term))
      )
    );
  }
  
  // Apply filters
  if (filters.difficulty?.length) {
    songs = songs.filter(song => filters.difficulty!.includes(song.difficulty));
  }
  
  if (filters.genre?.length) {
    songs = songs.filter(song => 
      filters.genre!.some(genre => song.genre.toLowerCase().includes(genre.toLowerCase()))
    );
  }
  
  if (filters.artist?.length) {
    songs = songs.filter(song => filters.artist!.includes(song.artist));
  }
  
  if (filters.techniques?.length) {
    songs = songs.filter(song =>
      filters.techniques!.some(tech => 
        song.techniques.some(songTech => 
          songTech.toLowerCase().includes(tech.toLowerCase())
        )
      )
    );
  }
  
  if (filters.yearRange) {
    const [startYear, endYear] = filters.yearRange;
    songs = songs.filter(song => {
      const year = parseInt(song.year);
      return year >= startYear && year <= endYear;
    });
  }

  // Decade filter
  if (filters.decade?.length) {
    songs = songs.filter(song => filters.decade!.includes(song.decade || ''));
  }

  if (filters.tags?.length) {
    songs = songs.filter(song => 
      filters.tags!.some(tag => song.tags?.includes(tag))
    );
  }

  if (filters.featured !== undefined) {
    songs = songs.filter(song => song.featured === filters.featured);
  }

  if (filters.iconicRiff !== undefined) {
    songs = songs.filter(song => song.iconicRiff === filters.iconicRiff);
  }
  
  return songs;
}

export function getSongsByArtist(artist: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.artist.toLowerCase() === artist.toLowerCase()
  );
}

export function getSongsByGenre(genre: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.genre.toLowerCase().includes(genre.toLowerCase())
  );
}

export function getSongsByDifficulty(difficulty: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.difficulty.toLowerCase() === difficulty.toLowerCase()
  );
}

// Get unique values for filter options
export function getUniqueArtists(): string[] {
  return [...new Set(getAllSongs().map(song => song.artist))].sort();
}

export function getUniqueGenres(): string[] {
  return [...new Set(getAllSongs().map(song => song.genre))].sort();
}

export function getUniqueTechniques(): string[] {
  const allTechniques = getAllSongs().flatMap(song => song.techniques);
  return [...new Set(allTechniques)].sort();
}

export function getDifficultyLevels(): string[] {
  return ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
}

export function getPopularSongs(limit = 6): SongListItem[] {
  return getAllSongs()
    .slice()
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, limit);
}

export function getRecentlyAdded(limit = 6): SongListItem[] {
  return getAllSongs()
    .slice()
    .sort((a, b) => new Date(b.dateAdded || '2024-01-01').getTime() - new Date(a.dateAdded || '2024-01-01').getTime())
    .slice(0, limit);
}

export function getSongsByDecade(decade: string): SongListItem[] {
  return getAllSongs().filter(song => song.decade === decade);
}

export function getSongsByTag(tag: string): SongListItem[] {
  return getAllSongs().filter(song => song.tags?.includes(tag));
}

export function getIconicRiffSongs(): SongListItem[] {
  return getAllSongs().filter(song => song.iconicRiff === true);
}

export function getBeginnerFriendlySongs(): SongListItem[] {
  return getAllSongs().filter(song => 
    song.difficulty === 'Beginner' || song.tags?.includes('beginner-friendly')
  );
}

export function getUniqueDecades(): string[] {
  const decades = new Set(getAllSongs().map(song => song.decade).filter((decade): decade is string => Boolean(decade)));
  return Array.from(decades).sort();
}

export function getUniqueTags(): string[] {
  const allTags = getAllSongs().flatMap(song => song.tags || []);
  const uniqueTags = new Set(allTags);
  return Array.from(uniqueTags).sort();
}

export function getSongCategories() {
  return {
    popular: getPopularSongs(6),
    recent: getRecentlyAdded(6),
    beginnerFriendly: getBeginnerFriendlySongs(),
    iconicRiffs: getIconicRiffSongs(),
    byDecade: {
      '1970s': getSongsByDecade('1970s'),
      '1980s': getSongsByDecade('1980s'),
      '1990s': getSongsByDecade('1990s'),
      '2000s': getSongsByDecade('2000s'),
    }
  };
}


// ============================================================
// Curated Song Learning Pathways
// ============================================================

const rawPathwayDefinitions = [
  {
    id: 'beginner-first-5',
    title: "Beginner's First 5 Songs",
    subtitle: 'Essential open chords, steady downbeat timing & clean transitions',
    difficulty: 'Beginner' as const,
    icon: '🌱',
    badgeColor: 'emerald' as const,
    description: 'Start your guitar journey with iconic tracks that build rock-solid open chord muscle memory, steady pendulum strumming, and ear training.',
    skillsLearned: ['Open Chords (A, D, E, G, C)', 'Continuous Pendulum Strumming', 'Accented Backbeats (2 & 4)', 'Sing-Along Confidence'],
    items: [
      { slug: 'wild-thing', whyLearn: 'Master the fundamental A - D - E three-chord rock progression with solid quarter-note downstrokes.', keySkills: ['A, D, E Open Chords', 'Downbeat Drive', 'Clean Transitions'] },
      { slug: 'knockin-on-heavens-door', whyLearn: 'Practice smooth transitions between G, D, Am7, and C in open position with gentle dynamics.', keySkills: ['Open G, D, Am, C', 'Gentle Dynamic Touch', 'Vocal Phrasing'] },
      { slug: 'free-fallin', whyLearn: 'Learn suspended chord movements (D, Dsus4) and capo usage for crisp acoustic shimmer.', keySkills: ['Capo Mechanics', 'Dsus4 Suspensions', 'Acoustic Clarity'] },
      { slug: 'louie-louie', whyLearn: 'Internalize syncopated rhythmic push and rock timing over classic open chords.', keySkills: ['Anticipated Pushes', 'Syncopated Drive', 'Garage Rock Attitude'] },
      { slug: 'bad-moon-rising', whyLearn: 'Combine alternating 8th-note strumming with percussive right-hand accents over D - A - G.', keySkills: ['8th-Note Alternation', 'Snare Backbeat Accents', 'Roots Rock Groove'] },
    ]
  },
  {
    id: 'campfire-acoustic',
    title: 'Campfire & Sing-Along Anthems',
    subtitle: 'Dynamic acoustic strumming, syncopation & 3rd-fret anchor fingers',
    difficulty: 'Beginner' as const,
    icon: '🔥',
    badgeColor: 'amber' as const,
    description: 'Crowd-favorite anthems that teach essential acoustic techniques: the Calypso syncopation, 16th-note walls of sound, and anchored pivot fingers.',
    skillsLearned: ['Calypso / Island Strum', '16th-Note Pendulum', 'Pivot Finger Anchoring', 'Dynamic Shading'],
    items: [
      { slug: 'brown-eyed-girl', whyLearn: 'Joyful, rolling 8th-note acoustic pulse over classic G - C - G - D changes.', keySkills: ['G - C - G - D Progression', 'Upstroke Brushing', 'Uplifting Pulse'] },
      { slug: 'riptide', whyLearn: 'The definitive syncopated Calypso strum with ghost stroke downbeat over Am - G - C - F.', keySkills: ['Calypso Ghost Stroke', 'Syncopated Upbeats', 'Open Am - G - C'] },
      { slug: 'stand-by-me', whyLearn: 'The timeless I - vi - IV - V progression paired with percussive right-hand palm taps.', keySkills: ['50s Progression', 'Percussive Palm Tap', 'Rhythmic Steady Beat'] },
      { slug: 'good-riddance', whyLearn: 'Transitioning from delicate arpeggiated picking into full, roaring acoustic chorus strums.', keySkills: ['Arpeggiated Intro', 'Dynamic Volume Swell', 'Anchor Fingers'] },
      { slug: 'wonderwall', whyLearn: 'Locking 3rd-fret anchor fingers on strings 1 and 2 while maintaining a driving 16th-note pendulum.', keySkills: ['Anchored Pivot Fingers', '16th-Note Pendulum', 'Wall of Sound'] },
    ]
  },
  {
    id: 'rock-riff-foundations',
    title: 'Essential Rock Riffs & Power Chords',
    subtitle: 'Double stops, high-velocity downpicking, and driving guitar grooves',
    difficulty: 'Intermediate' as const,
    icon: '⚡',
    badgeColor: 'purple' as const,
    description: 'Build electric guitar attitude with the most recognizable riffs in history, mastering root-5th power chords, palm muting, and punchy double stops.',
    skillsLearned: ['Power Chords (5th Chords)', 'Heavy Palm Muting', 'Double Stops & 4th Intervals', 'Rhythmic Rests'],
    items: [
      { slug: 'smoke-on-the-water', whyLearn: 'The quintessential guitar riff played with finger-plucked 4th-interval double stops.', keySkills: ['Parallel 4ths', 'Finger-Plucked Attack', 'Rhythmic Precision'] },
      { slug: 'blitzkrieg-bop', whyLearn: 'High-velocity root-6 and root-5 barre power-chord stamina and tight downpicking.', keySkills: ['Power Chord Shapes', 'All-Downstroke Speed', 'Right-Hand Stamina'] },
      { slug: 'seven-nation-army', whyLearn: 'Single-note melodic slide hooks with driving foot-stomping rock pulse.', keySkills: ['Single-String Melodic Run', 'Slide Articulation', 'Anthem Phrasing'] },
      { slug: 'iron-man', whyLearn: 'Sliding power chords, heavy vibrato, and doom rock riff architecture in standard tuning.', keySkills: ['Power Chord Sliding', 'Heavy Vibrato', 'Dynamic Weight'] },
      { slug: 'paranoid', whyLearn: 'Tight E minor pentatonic palm-muted chugs and fast hammer-on box licks.', keySkills: ['Fast Palm Muting', 'Hammer-on Boxes', 'Pentatonic Riffs'] },
    ]
  },
  {
    id: 'fingerstyle-essentials',
    title: 'Acoustic Fingerstyle & Arpeggios',
    subtitle: 'Thumb-and-finger independence, rolling compound meter, and expressive touch',
    difficulty: 'Intermediate' as const,
    icon: '🖐️',
    badgeColor: 'cyan' as const,
    description: 'Ditch the pick and discover the expressive beauty of fingerstyle guitar, from gentle classical arpeggios to rolling 6/8 compound ballads.',
    skillsLearned: ['PIMA Finger Independence', 'Alternating Bass Lines', 'Rolling 6/8 Triplet Feel', 'Fret-Hand Embellishments'],
    items: [
      { slug: 'nothing-else-matters', whyLearn: 'Open-string E minor arpeggios in 6/8 compound meter with expressive phrasing.', keySkills: ['6/8 Arpeggio Pattern', 'Open String Resonance', 'Dynamic Crescendos'] },
      { slug: 'landslide', whyLearn: 'Gentle alternating thumb-bass fingerpicking over classic C - G/B - Am7 changes.', keySkills: ['Travis Alternating Bass', 'Slash Chords (G/B)', 'Intimate Acoustic Touch'] },
      { slug: 'blackbird', whyLearn: 'Simultaneous thumb-and-finger pinch technique walking 10th-interval harmonies up the neck.', keySkills: ['Pinch Technique', '10th Intervals', 'Open G Drone String'] },
      { slug: 'tears-in-heaven', whyLearn: 'Sophisticated acoustic jazz-chords, hammer-ons, and delicate acoustic fingerstyle touch.', keySkills: ['Extended Chords', 'Hammer-on Embellishments', 'Expressive Nuance'] },
      { slug: 'here-comes-the-sun', whyLearn: 'Capo 7 acoustic picking with floating melodic suspensions and irregular 7/8 time shifts.', keySkills: ['High-Capo Resonance', 'Suspended Melodic Voice', 'Odd-Meter Phrasing'] },
    ]
  },
  {
    id: 'blues-lead-milestones',
    title: 'Lead Guitar & Soloing Milestones',
    subtitle: 'Pentatonic scales, expressive string bends, vibrato, and vocal phrasing',
    difficulty: 'Advanced' as const,
    icon: '🎸',
    badgeColor: 'rose' as const,
    description: 'Advance from rhythm into commanding lead guitar by studying the most influential solos ever recorded, mastering bends, target notes, and phrasing.',
    skillsLearned: ['Minor & Major Pentatonic', 'Whole-Step & Unison Bending', 'Vocal-Style Phrasing & Space', 'Targeting Chord Tones'],
    items: [
      { slug: 'sunshine-of-your-love', whyLearn: "D minor blues scale riff architecture and Clapton's singing 'woman tone' solo.", keySkills: ['D Blues Scale', 'Woman Tone EQ', 'Vocal Phrasing'] },
      { slug: 'come-as-you-are', whyLearn: 'Chorus-drenched D-tuning melodic riff and expressive octave-driven solo.', keySkills: ['Drop D Tuning', 'Chorus Modulation', 'Subtle Bending'] },
      { slug: 'smells-like-teen-spirit', whyLearn: 'How to construct a memorable solo that follows the vocal melody before intensifying.', keySkills: ['Vocal Melody Phrasing', 'Bending Expressiveness', 'Solo Climax'] },
      { slug: 'sultans-of-swing', whyLearn: 'Clean fingerstyle Stratocaster lead work targeting D minor triad arpeggios.', keySkills: ['Fingerstyle Electric Lead', 'Triad Targeting', 'Fast Double Pull-Offs'] },
      { slug: 'comfortably-numb', whyLearn: 'The pinnacle of melodic rock phrasing, emotional string bends, and B minor modal expression.', keySkills: ['Full-Step Bends & Vibrato', 'Sustained Phrasing', 'B Minor Emotional Climax'] },
    ]
  }
];

export function getSongLearningPathways(): SongLearningPathway[] {
  const songsMap = new Map(getAllSongs().map(s => [s.slug, s]));

  return rawPathwayDefinitions.map(pathway => ({
    id: pathway.id,
    title: pathway.title,
    subtitle: pathway.subtitle,
    difficulty: pathway.difficulty,
    icon: pathway.icon,
    badgeColor: pathway.badgeColor,
    description: pathway.description,
    skillsLearned: pathway.skillsLearned,
    songs: pathway.items.map((item, index) => {
      const song = songsMap.get(item.slug);
      return {
        slug: item.slug,
        stepNumber: index + 1,
        title: song?.title || item.slug,
        artist: song?.artist || 'Various Artists',
        difficulty: song?.difficulty || pathway.difficulty,
        key: song?.key || 'Standard',
        tuning: song?.tempo ? `${song.key} • ${song.tempo}` : (song?.key || 'Standard'),
        tempo: song?.tempo || '',
        whyLearn: item.whyLearn,
        keySkills: item.keySkills,
      };
    })
  }));
}

export function getPathwayById(id: string): SongLearningPathway | undefined {
  return getSongLearningPathways().find(p => p.id === id);
}
