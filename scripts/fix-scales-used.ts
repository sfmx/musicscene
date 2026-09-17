import fs from 'fs';
import path from 'path';

const songsDir = path.join(process.cwd(), 'src', 'data', 'songs');

// 1. Black Hole Sun
{
  const file = path.join(songsDir, 'black-hole-sun.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "G major scale",
      notes: "G - A - B - C - D - E - F#",
      application: "Primary framework for the verse and chorus harmonic movement"
    },
    {
      scale: "G minor pentatonic",
      notes: "G - Bb - C - D - F",
      application: "Solo passages and darker melodic fills"
    },
    {
      scale: "G Mixolydian",
      notes: "G - A - B - C - D - E - F",
      application: "Modal mixture over the borrowed F and Bb major chords giving the song its surreal psychedelic grunge quality"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed black-hole-sun scalesUsed');
}

// 2. Eye of the Tiger
{
  const file = path.join(songsDir, 'eye-of-the-tiger.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "C natural minor (Aeolian)",
      notes: "C - D - Eb - F - G - Ab - Bb",
      application: "Primary scale for the song; creates the intense, determined character suited to the Rocky III theme"
    },
    {
      scale: "C minor pentatonic",
      notes: "C - Eb - F - G - Bb",
      application: "The iconic single-note intro riff and guitar solo both draw from the minor pentatonic"
    },
    {
      scale: "C blues scale",
      notes: "C - Eb - F - F# - G - Bb",
      application: "The added blue note (F#) appears in the guitar solo and melodic fills, adding gritty tension"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed eye-of-the-tiger scalesUsed');
}

// 3. Hurt So Good
{
  const file = path.join(songsDir, 'hurt-so-good.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "E Major Scale",
      notes: "E - F# - G# - A - B - C# - D#",
      application: "Main chord progressions and melodic content"
    },
    {
      scale: "E Major Pentatonic",
      notes: "E - F# - G# - B - C#",
      application: "Guitar solo and heartland rock lead lines"
    },
    {
      scale: "E Minor Blues",
      notes: "E - G - A - A# - B - D",
      application: "Bluesy bends and expressive inflections in the guitar solo"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed hurt-so-good scalesUsed');
}

// 4. Riptide
{
  const file = path.join(songsDir, 'riptide.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "C major (shape)",
      notes: "C - D - E - F - G - A - B",
      application: "All chords and melodies derive from C major open shapes (sounding key Db major with capo on 1st fret)"
    },
    {
      scale: "A natural minor (relative minor shape)",
      notes: "A - B - C - D - E - F - G",
      application: "The progression starts on Am, giving the song a minor feel despite being diatonic to C major"
    },
    {
      scale: "C major pentatonic (shape)",
      notes: "C - D - E - G - A",
      application: "Vocal melody primarily uses pentatonic notes for its catchy, singable quality"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed riptide scalesUsed');
}

// 5. Superstition
{
  const file = path.join(songsDir, 'superstition.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "Eb minor pentatonic",
      notes: "Eb - Gb - Ab - Bb - Db",
      application: "Primary scale for the main clavinet riff adapted for guitar"
    },
    {
      scale: "Eb natural minor (Aeolian)",
      notes: "Eb - F - Gb - Ab - Bb - B - Db",
      application: "Fills and melodic passages between riff statements"
    },
    {
      scale: "Eb blues scale",
      notes: "Eb - Gb - Ab - A - Bb - Db",
      application: "Added blue note for funk inflections in solo and fills"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed superstition scalesUsed');
}

// 6. The Final Countdown
{
  const file = path.join(songsDir, 'the-final-countdown.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.musicalAnalysis.keyAndScale.scalesUsed = [
    {
      scale: "F# natural minor (Aeolian)",
      notes: "F# - G# - A - B - C# - D - E",
      application: "Primary scale for the song; the minor key creates dramatic, cinematic urgency"
    },
    {
      scale: "F# minor pentatonic",
      notes: "F# - A - B - C# - E",
      application: "Guitar solo and riff fills; John Norum's lead work draws from the minor pentatonic"
    },
    {
      scale: "F# harmonic minor",
      notes: "F# - G# - A - B - C# - D - F",
      application: "Passages in the guitar solo where the raised 7th (E#/F) creates neoclassical tension"
    }
  ];
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('✓ Fixed the-final-countdown scalesUsed');
}

