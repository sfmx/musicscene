import React from 'react';

type FretboardProps = {
  chord?: string;
};

const chordShapes: Record<string, { frets: number[], fingers?: number[] }> = {
  // EADGBE (low to high), -1 means muted, 0 means open
  'C': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0] },
  'C_major': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0] },
  'G': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4] },
  'G_major': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4] },
  'D': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2] },
  'D_major': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2] },
  'E': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
  'E_major': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
  'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  'E_minor': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  'Am': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0] },
  'A_minor': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0] },
  'F': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  'F_major': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  'Dm': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1] },
  'D_minor': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1] },
  'Bm': { frets: [-1, 2, 4, 4, 3, 2], fingers: [-1, 1, 3, 4, 2, 1] },
  'B_minor': { frets: [-1, 2, 4, 4, 3, 2], fingers: [-1, 1, 3, 4, 2, 1] },
  // Augmented chords
  'C+': { frets: [-1, 3, 2, 1, 1, 0], fingers: [-1, 4, 3, 1, 2, 0] },
  'C_augmented': { frets: [-1, 3, 2, 1, 1, 0], fingers: [-1, 4, 3, 1, 2, 0] },
  'F+': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1] },
  'F_augmented': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1] },
  'G+': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 1, 0, 0, 2] },
  'G_augmented': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 1, 0, 0, 2] },
  'D+': { frets: [-1, -1, 0, 3, 3, 2], fingers: [-1, -1, 0, 2, 3, 1] },
  'D_augmented': { frets: [-1, -1, 0, 3, 3, 2], fingers: [-1, -1, 0, 2, 3, 1] },
  'A+': { frets: [-1, 0, 3, 2, 2, 1], fingers: [-1, 0, 4, 2, 3, 1] },
  'E+': { frets: [0, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0] },
  'Bb+': { frets: [-1, 1, 0, 3, 3, 2], fingers: [-1, 1, 0, 2, 3, 4] },
  'G#+': { frets: [4, 3, 2, 1, 1, 4], fingers: [4, 3, 2, 1, 1, 4] },
  'Ab+': { frets: [4, 3, 2, 1, 1, 4], fingers: [4, 3, 2, 1, 1, 4] },
  'Bb': { frets: [-1, 1, 3, 3, 3, 1], fingers: [-1, 1, 2, 3, 4, 1] },
  // Diminished chords
  'Cdim': { frets: [-1, 3, 4, 2, 4, 2], fingers: [-1, 2, 4, 1, 3, 1] },
  'C°': { frets: [-1, 3, 4, 2, 4, 2], fingers: [-1, 2, 4, 1, 3, 1] },
  'C#dim': { frets: [-1, 4, 5, 3, 5, 3], fingers: [-1, 2, 4, 1, 3, 1] },
  'C#°': { frets: [-1, 4, 5, 3, 5, 3], fingers: [-1, 2, 4, 1, 3, 1] },
  'Ddim': { frets: [-1, -1, 0, 1, 0, 1], fingers: [-1, -1, 0, 1, 0, 2] },
  'D°': { frets: [-1, -1, 0, 1, 0, 1], fingers: [-1, -1, 0, 1, 0, 2] },
  'D#dim': { frets: [-1, -1, 1, 2, 1, 2], fingers: [-1, -1, 1, 3, 2, 4] },
  'D#°': { frets: [-1, -1, 1, 2, 1, 2], fingers: [-1, -1, 1, 3, 2, 4] },
  'Edim': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 2, 0] },
  'E°': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 2, 0] },
  'Fdim': { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 4, 1, 3, 1] },
  'F°': { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 4, 1, 3, 1] },
  'Gdim': { frets: [3, 4, 5, 3, 5, 3], fingers: [1, 2, 4, 1, 3, 1] },
  'G°': { frets: [3, 4, 5, 3, 5, 3], fingers: [1, 2, 4, 1, 3, 1] },
  'Adim': { frets: [-1, 0, 1, 2, 1, 2], fingers: [-1, 0, 1, 3, 2, 4] },
  'A°': { frets: [-1, 0, 1, 2, 1, 2], fingers: [-1, 0, 1, 3, 2, 4] },
  'A#dim': { frets: [-1, 1, 2, 3, 2, 3], fingers: [-1, 1, 2, 4, 2, 3] },
  'A#°': { frets: [-1, 1, 2, 3, 2, 3], fingers: [-1, 1, 2, 4, 2, 3] },
  'Bdim': { frets: [-1, 2, 3, 4, 3, 4], fingers: [-1, 1, 2, 4, 2, 3] },
  'B°': { frets: [-1, 2, 3, 4, 3, 4], fingers: [-1, 1, 2, 4, 2, 3] },
  // Diminished 7th chords
  'Gdim7': { frets: [3, 4, 5, 3, 6, 3], fingers: [1, 2, 3, 1, 4, 1] },
  'G°7': { frets: [3, 4, 5, 3, 6, 3], fingers: [1, 2, 3, 1, 4, 1] },
  // Half-diminished (minor 7b5)
  'Bm7b5': { frets: [-1, 2, 3, 2, 3, -1], fingers: [-1, 1, 3, 2, 4, -1] },
  // Suspended chords
  'Dsus4': { frets: [-1, -1, 0, 2, 3, 3], fingers: [-1, -1, 0, 1, 2, 3] },
  'Dsus2': { frets: [-1, -1, 0, 2, 3, 0], fingers: [-1, -1, 0, 1, 2, 0] },
  'Asus4': { frets: [-1, 0, 2, 2, 3, 0], fingers: [-1, 0, 1, 2, 3, 0] },
  'Asus2': { frets: [-1, 0, 2, 2, 0, 0], fingers: [-1, 0, 1, 2, 0, 0] },
  'Esus4': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
  'Esus2': { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
  'Gsus4': { frets: [3, 3, 0, 0, 1, 3], fingers: [2, 3, 0, 0, 1, 4] },
  'Gsus2': { frets: [3, 0, 0, 0, 3, 3], fingers: [2, 0, 0, 0, 3, 4] },
  'Csus4': { frets: [-1, 3, 3, 0, 1, 1], fingers: [-1, 3, 4, 0, 1, 2] },
  'Csus2': { frets: [-1, 3, 0, 0, 1, 0], fingers: [-1, 3, 0, 0, 1, 0] },
  'Fsus4': { frets: [1, 3, 3, 3, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  'Fsus2': { frets: [1, 3, 3, 0, 1, 1], fingers: [1, 3, 4, 0, 1, 2] },
  'F#sus2': { frets: [2, 4, 4, 1, 2, 2], fingers: [1, 3, 4, 1, 2, 2] },
  // Seventh chords
  'G7': { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1] },
  'E7': { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] },
  'A7': { frets: [-1, 0, 2, 0, 2, 0], fingers: [-1, 0, 2, 0, 3, 0] },
  'D7': { frets: [-1, -1, 0, 2, 1, 2], fingers: [-1, -1, 0, 2, 1, 3] },
  'Am7': { frets: [-1, 0, 2, 0, 1, 0], fingers: [-1, 0, 2, 0, 1, 0] },
  'Em7': { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] },
  'CMaj7': { frets: [-1, 3, 2, 0, 0, 0], fingers: [-1, 3, 2, 0, 0, 0] },
  'FMaj7': { frets: [1, 3, 2, 1, 0, -1], fingers: [1, 3, 2, 1, 0, -1] },
  'DMaj7': { frets: [-1, -1, 0, 2, 2, 2], fingers: [-1, -1, 0, 1, 1, 1] },
  'BMaj7': { frets: [-1, 2, 4, 3, 4, -1], fingers: [-1, 1, 3, 2, 4, -1] },
  'AMaj7': { frets: [-1, 0, 2, 1, 2, 0], fingers: [-1, 0, 2, 1, 3, 0] },
  'GMaj7': { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 2, 0, 0, 0, 1] },
  'EMaj7': { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 2, 1, 1, 0, 0] },
  'F#m7': { frets: [2, 4, 2, 2, 2, 2], fingers: [1, 3, 1, 1, 1, 1] },
  'Dm7': { frets: [-1, -1, 0, 2, 1, 1], fingers: [-1, -1, 0, 2, 1, 1] },
  'Bm7': { frets: [-1, 2, 0, 2, 0, 2], fingers: [-1, 1, 0, 2, 0, 3] },
  // Ninth chords (for extended harmony)
  'Cmaj9': { frets: [-1, 3, 0, 0, 0, 0], fingers: [-1, 3, 0, 0, 0, 0] },
  'Dm9': { frets: [-1, -1, 0, 2, 1, 0], fingers: [-1, -1, 0, 2, 1, 0] },
  'Em9': { frets: [0, 2, 0, 0, 0, 2], fingers: [0, 1, 0, 0, 0, 2] },
  'Fmaj9': { frets: [1, 3, 0, 0, 1, 0], fingers: [1, 3, 0, 0, 1, 0] },
  'Gmaj9': { frets: [3, 0, 0, 0, 0, 2], fingers: [2, 0, 0, 0, 0, 1] },
  'Am9': { frets: [-1, 0, 2, 0, 0, 0], fingers: [-1, 0, 2, 0, 0, 0] },
  'C9': { frets: [-1, 3, 2, 3, 3, -1], fingers: [-1, 1, 2, 3, 4, -1] },
  // Eleventh chords
  'Am11': { frets: [-1, 0, 0, 0, 1, 0], fingers: [-1, 0, 0, 0, 1, 0] },
  'Dm11': { frets: [-1, -1, 0, 0, 1, 1], fingers: [-1, -1, 0, 0, 1, 2] },
  'Em11': { frets: [0, 0, 0, 0, 0, 0], fingers: [0, 0, 0, 0, 0, 0] },
  'Fm11': { frets: [1, 1, 1, 1, 1, 1], fingers: [1, 1, 1, 1, 1, 1] },
  'Gm11': { frets: [3, 3, 3, 3, 3, 3], fingers: [1, 1, 1, 1, 1, 1] },
  'C11': { frets: [-1, 3, 3, 3, 1, 1], fingers: [-1, 3, 4, 2, 1, 1] },
  // Thirteenth chords
  'G13': { frets: [3, -1, 3, 4, 5, -1], fingers: [1, -1, 2, 3, 4, -1] },
  'Am13': { frets: [-1, 0, 2, 0, 1, 2], fingers: [-1, 0, 2, 0, 1, 3] },
  'CMaj13': { frets: [-1, 3, 2, 4, 5, -1], fingers: [-1, 2, 1, 3, 4, -1] },
  // Add9 chords
  'Cadd9': { frets: [-1, 3, 2, 0, 3, 0], fingers: [-1, 2, 1, 0, 3, 0] },
  'Gadd9': { frets: [3, 0, 0, 2, 0, 3], fingers: [2, 0, 0, 1, 0, 3] },
  'Fadd9': { frets: [1, 0, 3, 0, 1, 1], fingers: [1, 0, 3, 0, 2, 4] },
  // Power chords (5th intervals)
  'E5': { frets: [0, 2, 2, -1, -1, -1], fingers: [0, 1, 2, -1, -1, -1] },
  'A5': { frets: [-1, 0, 2, 2, -1, -1], fingers: [-1, 0, 1, 2, -1, -1] },
  'D5': { frets: [-1, -1, 0, 2, 3, -1], fingers: [-1, -1, 0, 1, 2, -1] },
  'G5': { frets: [3, 5, 5, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1] },
  'C5': { frets: [-1, 3, 5, 5, -1, -1], fingers: [-1, 1, 3, 4, -1, -1] },
  'F5': { frets: [1, 3, 3, -1, -1, -1], fingers: [1, 3, 4, -1, -1, -1] },
  'B5': { frets: [-1, 2, 4, 4, -1, -1], fingers: [-1, 1, 3, 4, -1, -1] },
  'Bb5': { frets: [-1, 1, 3, 3, -1, -1], fingers: [-1, 1, 3, 4, -1, -1] },
  // Minor 2nd interval examples
  'E_to_F': { frets: [0, -1, -1, -1, -1, -1], fingers: [0, -1, -1, -1, -1, -1] }, // E open
  'F_from_E': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F 1st fret
  'B_to_C': { frets: [-1, 0, -1, -1, -1, -1], fingers: [-1, 0, -1, -1, -1, -1] }, // B open
  'C_from_B': { frets: [-1, 1, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C 1st fret
  'Chromatic_C': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C 3rd fret A string
  'Chromatic_Cs': { frets: [-1, 4, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C# 4th fret A string
  'Chromatic_D': { frets: [-1, 5, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // D 5th fret A string
  // Cluster chord (contains minor 2nds)
  'Minor2nd_Cluster': { frets: [3, 3, 4, 3, -1, -1], fingers: [1, 2, 4, 3, -1, -1] }, // G-C-F#-Bb cluster
  // Minor 3rd interval examples
  'A_to_C': { frets: [-1, -1, -1, -1, 0, -1], fingers: [-1, -1, -1, -1, 0, -1] }, // A (5th string open)
  'C_from_A': { frets: [-1, -1, -1, 2, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // C (4th string 2nd fret)
  'E_to_G': { frets: [0, -1, -1, -1, -1, -1], fingers: [0, -1, -1, -1, -1, -1] }, // E (6th string open)
  'G_from_E': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'D_to_F': { frets: [-1, -1, 0, -1, -1, -1], fingers: [-1, -1, 0, -1, -1, -1] }, // D (4th string open)
  'F_from_D': { frets: [-1, -1, 3, -1, -1, -1], fingers: [-1, -1, 1, -1, -1, -1] }, // F (4th string 3rd fret)
  // Minor 3rd chord demonstration
  'Am_chord_m3': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0] }, // A minor highlighting the A-C minor 3rd
  'Em_chord_m3': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] }, // E minor highlighting the E-G minor 3rd
  'Dm_chord_m3': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1] }, // D minor highlighting the D-F minor 3rd
  // Major 3rd interval examples
  'C_to_E': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'E_from_C': { frets: [-1, -1, 2, -1, -1, -1], fingers: [-1, -1, 1, -1, -1, -1] }, // E (4th string 2nd fret)
  'F_to_A': { frets: [-1, -1, -1, 3, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // F (4th string 3rd fret)
  'A_from_F': { frets: [-1, -1, -1, -1, 0, -1], fingers: [-1, -1, -1, -1, 0, -1] }, // A (5th string open)
  'G_to_B': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'B_from_G': { frets: [-1, 2, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // B (5th string 2nd fret)
  // Major 3rd chord demonstration
  'C_chord_M3': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0] }, // C major highlighting the C-E major 3rd
  'G_chord_M3': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4] }, // G major highlighting the G-B major 3rd
  'D_chord_M3': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2] }, // D major highlighting the D-F# major 3rd
  // Major 2nd interval examples
  'C_to_D': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'D_from_C': { frets: [-1, 5, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // D (5th string 5th fret)
  'G_to_A': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'A_from_G': { frets: [5, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // A (6th string 5th fret)
  'D_to_E': { frets: [-1, -1, -1, 0, -1, -1], fingers: [-1, -1, -1, 0, -1, -1] }, // D (4th string open)
  'E_from_D': { frets: [-1, -1, -1, 2, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // E (4th string 2nd fret)
  // Tritone interval examples
  'F_to_B': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F (6th string 1st fret)
  'B_from_F': { frets: [-1, 2, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // B (5th string 2nd fret)
  'C_to_Fs': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'Fs_from_C': { frets: [-1, -1, -1, 4, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // F# (4th string 4th fret)
  'G_to_Db': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'Db_from_G': { frets: [-1, 4, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // Db (5th string 4th fret)
  // Perfect 4th interval examples
  'C_to_F_P4': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'F_from_C_P4': { frets: [-1, -1, -1, 3, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // F (4th string 3rd fret)
  'G_to_C_P4': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'C_from_G_P4': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'D_to_G_P4': { frets: [-1, -1, -1, 0, -1, -1], fingers: [-1, -1, -1, 0, -1, -1] }, // D (4th string open)
  'G_from_D_P4': { frets: [-1, -1, 0, -1, -1, -1], fingers: [-1, -1, 0, -1, -1, -1] }, // G (3rd string open)
  // Unison interval examples
  'E_1st_open': { frets: [-1, -1, -1, -1, -1, 0], fingers: [-1, -1, -1, -1, -1, 0] }, // E (1st string open)
  'E_2nd_5th': { frets: [-1, -1, -1, -1, 5, -1], fingers: [-1, -1, -1, -1, 1, -1] }, // E (2nd string 5th fret)
  'A_5th_open': { frets: [-1, 0, -1, -1, -1, -1], fingers: [-1, 0, -1, -1, -1, -1] }, // A (5th string open)
  'A_1st_5th': { frets: [-1, -1, -1, -1, -1, 5], fingers: [-1, -1, -1, -1, -1, 1] }, // A (1st string 5th fret)
  'D_4th_open': { frets: [-1, -1, -1, 0, -1, -1], fingers: [-1, -1, -1, 0, -1, -1] }, // D (4th string open)
  'D_3rd_7th': { frets: [-1, -1, 7, -1, -1, -1], fingers: [-1, -1, 1, -1, -1, -1] }, // D (3rd string 7th fret)
  // Additional seventh chords for tritone examples
  'C7': { frets: [-1, 3, 2, 3, 1, 0], fingers: [-1, 3, 2, 4, 1, 0] },
  // Minor 6th interval examples
  'C_to_Ab_m6': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'Ab_from_C_m6': { frets: [-1, -1, -1, 6, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // Ab (4th string 6th fret)
  'F_to_Db_m6': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F (6th string 1st fret)
  'Db_from_F_m6': { frets: [-1, 4, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // Db (5th string 4th fret)
  'A_to_F_m6': { frets: [-1, 0, -1, -1, -1, -1], fingers: [-1, 0, -1, -1, -1, -1] }, // A (5th string open)
  'F_from_A_m6': { frets: [-1, -1, -1, 3, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // F (4th string 3rd fret)
  // 6th chord applications
  'C6': { frets: [-1, 3, 2, 2, 1, 0], fingers: [-1, 3, 2, 2, 1, 0] }, // C6 chord (C-E-G-A)
  'Am6': { frets: [-1, 0, 2, 2, 1, 2], fingers: [-1, 0, 2, 3, 1, 4] }, // Am6 chord (A-C-E-F#)
  'Dm6': { frets: [-1, -1, 0, 2, 0, 1], fingers: [-1, -1, 0, 2, 0, 1] }, // Dm6 chord (D-F-A-B)
  // Major 6th interval examples
  'C_to_A_M6': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'A_from_C_M6': { frets: [-1, 0, -1, -1, -1, -1], fingers: [-1, 0, -1, -1, -1, -1] }, // A (5th string open)
  'F_to_D_M6': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F (6th string 1st fret)
  'D_from_F_M6': { frets: [-1, -1, 0, -1, -1, -1], fingers: [-1, -1, 0, -1, -1, -1] }, // D (4th string open)
  'G_to_E_M6': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'E_from_G_M6': { frets: [-1, -1, 2, -1, -1, -1], fingers: [-1, -1, 1, -1, -1, -1] }, // E (4th string 2nd fret)
  // Minor 7th interval examples
  'C_to_Bb_m7': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'Bb_from_C_m7': { frets: [-1, 1, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // Bb (5th string 1st fret)
  'G_to_F_m7': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'F_from_G_m7': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F (6th string 1st fret)
  'D_to_C_m7': { frets: [-1, -1, 0, -1, -1, -1], fingers: [-1, -1, 0, -1, -1, -1] }, // D (4th string open)
  'C_from_D_m7': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  // Major 7th interval examples
  'C_to_B_M7': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'B_from_C_M7': { frets: [-1, 2, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // B (5th string 2nd fret)
  'F_to_E_M7': { frets: [1, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F (6th string 1st fret)
  'E_from_F_M7': { frets: [0, -1, -1, -1, -1, -1], fingers: [0, -1, -1, -1, -1, -1] }, // E (6th string open)
  'G_to_Fs_M7': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'Fs_from_G_M7': { frets: [2, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // F# (6th string 2nd fret)
  // Octave interval examples
  'E_low_octave': { frets: [0, -1, -1, -1, -1, -1], fingers: [0, -1, -1, -1, -1, -1] }, // E (6th string open)
  'E_high_octave': { frets: [12, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // E (6th string 12th fret)
  'A_low_octave': { frets: [-1, 0, -1, -1, -1, -1], fingers: [-1, 0, -1, -1, -1, -1] }, // A (5th string open)
  'A_high_octave': { frets: [-1, 12, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // A (5th string 12th fret)
  'D_low_octave': { frets: [-1, -1, -1, 0, -1, -1], fingers: [-1, -1, -1, 0, -1, -1] }, // D (4th string open)
  'D_high_octave': { frets: [-1, -1, -1, 12, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // D (4th string 12th fret)
  // Cross-string octave patterns
  'C_5th_string': { frets: [-1, 3, -1, -1, -1, -1], fingers: [-1, 1, -1, -1, -1, -1] }, // C (5th string 3rd fret)
  'C_3rd_string': { frets: [-1, -1, 5, -1, -1, -1], fingers: [-1, -1, 1, -1, -1, -1] }, // C (3rd string 5th fret)
  'G_6th_string': { frets: [3, -1, -1, -1, -1, -1], fingers: [1, -1, -1, -1, -1, -1] }, // G (6th string 3rd fret)
  'G_4th_string': { frets: [-1, -1, -1, 5, -1, -1], fingers: [-1, -1, -1, 1, -1, -1] }, // G (4th string 5th fret)
};

export default function SimpleFretboardDiagram({ chord = 'C' }: FretboardProps) {
  const chordData = chordShapes[chord] || chordShapes['C'];
  const { frets, fingers } = chordData;
  
  const fretboardWidth = 100;  // Made narrower
  const fretboardHeight = 120; // Made taller for better proportions
  const fretSpacing = 24; // Space between frets (increased for taller board)
  const startX = 30;  // Reduced to give more room on right
  const startY = 30;
  
  // Calculate string positions - evenly spaced across the fretboard width
  const stringPositions = [...Array(6)].map((_, i) => 
    startX + (i * fretboardWidth) / 5 // 5 intervals for 6 strings
  );

  return (
    <svg width={170} height={160} style={{ background: 'transparent' }}> {/* Increased width for markers */}
      {/* Fretboard background */}
      <rect
        x={startX}
        y={startY}
        width={fretboardWidth}
        height={fretboardHeight}
        fill="#f8f9fa"
        stroke="#333"
        strokeWidth={2}
      />
      
      {/* Fret lines (horizontal) */}
      {[...Array(5)].map((_, fret) => (
        <line
          key={fret}
          x1={startX}
          y1={startY + (fret + 1) * fretSpacing}
          x2={startX + fretboardWidth}
          y2={startY + (fret + 1) * fretSpacing}
          stroke="#333"
          strokeWidth={1.5}
        />
      ))}
      
      {/* String lines (vertical) */}
      {stringPositions.map((x, string) => (
        <line
          key={string}
          x1={x}
          y1={startY}
          x2={x}
          y2={startY + fretboardHeight}
          stroke="#666"
          strokeWidth={1}
        />
      ))}
      
      {/* Nut (thick top line) */}
      <line
        x1={startX}
        y1={startY}
        x2={startX + fretboardWidth}
        y2={startY}
        stroke="#000"
        strokeWidth={4}
      />
      
      {/* X/O markers at top */}
      {frets.map((fret, string) => (
        fret === 0 || fret === -1 ? (
          <text
            key={`marker-${string}`}
            x={stringPositions[string]}
            y={startY - 8}
            fontSize={14}
            fill={fret === 0 ? '#1976d2' : '#d32f2f'}
            fontWeight="bold"
            textAnchor="middle"
          >
            {fret === 0 ? 'O' : 'X'}
          </text>
        ) : null
      ))}
      
      {/* Finger positions */}
      {frets.map((fret, string) => {
        if (fret > 0) {
          const fingerNumber = fingers?.[string] || fret;
          return (
            <g key={`finger-${string}`}>
              <circle
                cx={stringPositions[string]}
                cy={startY + (fret - 0.5) * fretSpacing}
                r={8}
                fill="#1976d2"
                stroke="#fff"
                strokeWidth={1}
              />
              <text
                x={stringPositions[string]}
                y={startY + (fret - 0.5) * fretSpacing + 4}
                fontSize={11}
                fill="white"
                fontWeight="bold"
                textAnchor="middle"
              >
                {fingerNumber}
              </text>
            </g>
          );
        }
        return null;
      })}
    </svg>
  );
}
