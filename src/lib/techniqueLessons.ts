/**
 * Maps song techniques to dedicated deep-dive practice and song lessons.
 */

export interface TechniqueLessonMatch {
  title: string;
  url: string;
  category: string;
  badgeLabel: string;
}

/**
 * Returns a dedicated lesson for a given technique name, or null if no direct match exists.
 */
export function getTechniqueLesson(techniqueName: string, description?: string): TechniqueLessonMatch | null {
  const combined = `${techniqueName} ${description || ''}`.toLowerCase();

  // 1. Power Chords & Fingerpicking
  if (combined.includes('power chord')) {
    return {
      title: 'Power Chord Mastery',
      url: '/lessons/songs/techniques/power-chords',
      category: 'Song Technique',
      badgeLabel: 'Song Lesson',
    };
  }

  if (combined.includes('fingerpick') || combined.includes('fingerstyle') || combined.includes('travis picking') || combined.includes('alternating bass')) {
    return {
      title: 'Fingerpicking Patterns',
      url: '/lessons/songs/techniques/fingerpicking',
      category: 'Song Technique',
      badgeLabel: 'Song Lesson',
    };
  }

  // 2. Primary Hand & Articulation Techniques (Practice Lessons)
  if (combined.includes('palm muting') || combined.includes('palm-muting') || combined.includes('muted downstroke') || combined.includes('percussive muting')) {
    return {
      title: 'Palm Muting Masterclass',
      url: '/lessons/practice/technique/palm-muting',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('alternate picking') || combined.includes('speed picking') || combined.includes('tremolo picking') || combined.includes('picking pattern') || combined.includes('downstroke')) {
    return {
      title: 'Alternate Picking Mechanics',
      url: '/lessons/practice/technique/alternate-picking',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('bend') || combined.includes('vibrato') || combined.includes('double stop')) {
    return {
      title: 'String Bending & Vibrato',
      url: '/lessons/practice/technique/bending-vibrato',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('legato') || combined.includes('hammer-on') || combined.includes('pull-off') || combined.includes('trill')) {
    return {
      title: 'Fluid Legato & Articulation',
      url: '/lessons/practice/technique/legato',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('tap') || combined.includes('tapping')) {
    return {
      title: 'Two-Hand Tapping Technique',
      url: '/lessons/practice/technique/tapping',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('sweep') || combined.includes('economy picking')) {
    return {
      title: 'Sweep Picking & Arpeggios',
      url: '/lessons/practice/technique/sweep-picking',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('hybrid picking') || combined.includes('chicken pick')) {
    return {
      title: 'Hybrid Picking Mastery',
      url: '/lessons/practice/technique/hybrid-picking',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('string skipping') || combined.includes('string-skipping')) {
    return {
      title: 'String Skipping Dynamics',
      url: '/lessons/practice/technique/string-skipping',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('harmonic') || combined.includes('pinch harmonic') || combined.includes('natural harmonic')) {
    return {
      title: 'Natural & Pinch Harmonics',
      url: '/lessons/practice/technique/harmonics',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  if (combined.includes('slide')) {
    return {
      title: 'Slide Guitar Technique',
      url: '/lessons/practice/technique/slide-techniques',
      category: 'Practice Technique',
      badgeLabel: 'Deep-Dive Lesson',
    };
  }

  // 3. Rhythm & Groove

  if (combined.includes('rhythm') || combined.includes('comping') || combined.includes('groove') || combined.includes('strumming') || combined.includes('swing feel')) {
    return {
      title: 'Rhythm Guitar & Groove',
      url: '/lessons/songs/techniques/rhythm',
      category: 'Song Technique',
      badgeLabel: 'Song Lesson',
    };
  }

  // 3. Lead & Improvisation
  if (combined.includes('lead') || combined.includes('solo') || combined.includes('cadenza') || combined.includes('pentatonic fill')) {
    return {
      title: 'Lead Guitar Execution',
      url: '/lessons/songs/techniques/lead',
      category: 'Song Technique',
      badgeLabel: 'Song Lesson',
    };
  }

  if (combined.includes('arpeggio') || combined.includes('arpeggiated') || combined.includes('chord tone')) {
    return {
      title: 'Arpeggios & Linear Fluency',
      url: '/lessons/practice/improv/arpeggios',
      category: 'Improv Practice',
      badgeLabel: 'Improv Lesson',
    };
  }

  if (combined.includes('phrasing') || combined.includes('call-and-response') || combined.includes('expression')) {
    return {
      title: 'Phrasing & Musical Expression',
      url: '/lessons/practice/improv/phrasing',
      category: 'Improv Practice',
      badgeLabel: 'Improv Lesson',
    };
  }

  if (combined.includes('scale') || combined.includes('pentatonic run')) {
    return {
      title: 'Scale Soloing & Navigation',
      url: '/lessons/practice/improv/scales',
      category: 'Improv Practice',
      badgeLabel: 'Improv Lesson',
    };
  }

  // 4. Chords & Foundation Warmups
  if (combined.includes('chord change') || combined.includes('chord transition') || combined.includes('barre chord') || combined.includes('open chord') || combined.includes('capo')) {
    return {
      title: 'Smooth Chord Changes',
      url: '/lessons/practice/warmups/chord-changes',
      category: 'Warmups & Foundation',
      badgeLabel: 'Foundation Lesson',
    };
  }

  if (combined.includes('voicing') || combined.includes('chord extension') || combined.includes('inversion') || combined.includes('triad')) {
    return {
      title: 'Chord Voicings & Inversions',
      url: '/lessons/songs/chords',
      category: 'Song Lesson',
      badgeLabel: 'Song Lesson',
    };
  }

  if (combined.includes('dynamics') || combined.includes('dynamic control') || combined.includes('touch control') || combined.includes('accent')) {
    return {
      title: 'Dynamics & Touch Control',
      url: '/lessons/practice/warmups/dynamics-control',
      category: 'Warmups & Foundation',
      badgeLabel: 'Foundation Lesson',
    };
  }

  if (combined.includes('riff') || combined.includes('hook') || combined.includes('turnaround')) {
    return {
      title: 'Riff Construction & Articulation',
      url: '/lessons/songs/riffs',
      category: 'Song Lesson',
      badgeLabel: 'Song Lesson',
    };
  }

  if (combined.includes('progression') || combined.includes('12-bar') || combined.includes('blues form')) {
    return {
      title: 'Chord Progression Analysis',
      url: '/lessons/theory/progressions',
      category: 'Theory Lesson',
      badgeLabel: 'Theory Lesson',
    };
  }

  return null;
}
