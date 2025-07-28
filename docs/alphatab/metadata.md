# AlphaTex Metadata

Metadata is specified using `\tagname value` at the beginning of the score. It can be used to specify global information like title, tempo or track tuning. Metadata is optional, but if specified, it must be followed by a dot to indicate the end of the metadata.

Some of the metadata tags can also be specified when starting a new staff or track. Please refer to the Tracks and Staves section for details on how to start new tracks and staves.

## Basic Metadata Tags

```
// Song information (only at the beginning)
\title "Song Title"
\subtitle Subtitle
\artist Artist
\album 'My Album'
\words Daniel
\music alphaTab
\copyright Daniel
\instructions "This is an example.\nWith instructions."
\notices "Additional notes\nEmbedded in the data model."
\tab "Daniel"

// Tempo in BPM (label is optional)
\tempo 200 "Tempo Label"

// Track and Staff Settings (can be used after \track and \staff)
// Instrument as General MIDI number or name
\instrument 30
// Capo fret
\capo 2
// String tuning starting at the most bottom string
\tuning e5 b4 g4 d4 a3 e3

// end of metadata
.
```

Strings can contain escape sequences: `\n`, `\r`, `\t`, `\\`, `\"`, `\'`.

## Advanced Metadata (Since v1.5.0)

Since version 1.5.0, it's possible to change the template and alignment of the song information via `\tagname value template alignment`.

The `template` is a string which can have following placeholders which are then replaced with the respective info of the song:

- `%TITLE%`
- `%SUBTITLE%`
- `%ARTIST%`
- `%ALBUM%`
- `%WORDS%`
- `%WORDSMUSIC%`
- `%MUSIC%`
- `%TABBER%`
- `%COPYRIGHT%`

The `alignment` is one of the following values:

- `left`
- `center`
- `right`

Example:
```
\title "Song Title" "Title: %TITLE%" left
\artist Artist "Written by %ARTIST%" right
.
```

## Instrument

The instrument can be changed via the `\instrument` metadata. Refer to the table below for all possible values and names. The list represents the General MIDI instrument list. You can either leave out the spaces or put the names into quotes e.g. `AcousticBass` vs `"Acoustic Bass"`.

| ID | Name |
|----|------|
| 0 | Acoustic Grand Piano |
| 1 | Bright Grand Piano |
| 2 | Electric Grand Piano |
| 3 | Honky tonk Piano |
| 4 | Electric Piano 1 |
| 5 | Electric Piano 2 |
| 6 | Harpsichord |
| 7 | Clavinet |
| 8 | Celesta |
| 9 | Glockenspiel |
| 10 | Musicbox |
| 11 | Vibraphone |
| 12 | Marimba |
| 13 | Xylophone |
| 14 | Tubularbells |
| 15 | Dulcimer |
| 16 | Drawbar Organ |
| 17 | Percussive Organ |
| 18 | Rock Organ |
| 19 | Church Organ |
| 20 | Reed Organ |
| 21 | Accordion |
| 22 | Harmonica |
| 23 | Tango Accordion |
| 24 | Acoustic Guitar Nylon |
| 25 | Acoustic Guitar Steel |
| 26 | Electric Guitar Jazz |
| 27 | Electric Guitar Clean |
| 28 | Electric Guitar Muted |
| 29 | Overdriven Guitar |
| 30 | Distortion Guitar |
| 31 | Guitar Harmonics |
| 32 | Acoustic Bass |
| 33 | Electric Bass Finger |
| 34 | Electric Bass Pick |
| 35 | Fretless Bass |
| 36 | Slap Bass 1 |
| 37 | Slap Bass 2 |
| 38 | Synth Bass 1 |
| 39 | Synth Bass 2 |
| 40 | Violin |
| 41 | Viola |
| 42 | Cello |
| 43 | Contrabass |
| 44 | Tremolo Strings |
| 45 | Pizzicato Strings |
| 46 | Orchestral Harp |
| 47 | Timpani |
| 48 | String Ensemble 1 |
| 49 | String Ensemble 2 |
| 50 | Synth Strings 1 |
| 51 | Synth Strings 2 |
| 52 | Choir Aahs |
| 53 | Voice Oohs |
| 54 | Synth Voice |
| 55 | Orchestra Hit |
| 56 | Trumpet |
| 57 | Trombone |
| 58 | Tuba |
| 59 | Muted Trumpet |
| 60 | French Horn |
| 61 | Brass Section |
| 62 | Synth Brass 1 |
| 63 | Synth Brass 2 |
| 64 | Soprano Sax |
| 65 | Alto Sax |
| 66 | Tenor Sax |
| 67 | Baritone Sax |
| 68 | Oboe |
| 69 | English Horn |
| 70 | Bassoon |
| 71 | Clarinet |
| 72 | Piccolo |
| 73 | Flute |
| 74 | Recorder |
| 75 | Pan Flute |
| 76 | Blown bottle |
| 77 | Shakuhachi |
| 78 | Whistle |
| 79 | Ocarina |
| 80 | Lead 1 Square |
| 81 | Lead 2 Sawtooth |
| 82 | Lead 3 Calliope |
| 83 | Lead 4 Chiff |
| 84 | Lead 5 Charang |
| 85 | Lead 6 Voice |
| 86 | Lead 7 Fifths |
| 87 | Lead 8 Bass and Lead |
| 88 | Pad 1 newage |
| 89 | Pad 2 warm |
| 90 | Pad 3 polysynth |
| 91 | Pad 4 choir |
| 92 | Pad 5 bowed |
| 93 | Pad 6 metallic |
| 94 | Pad 7 halo |
| 95 | Pad 8 sweep |
| 96 | Fx 1 rain |
| 97 | Fx 2 soundtrack |
| 98 | Fx 3 crystal |
| 99 | Fx 4 atmosphere |
| 100 | Fx 5 brightness |
| 101 | Fx 6 goblins |
| 102 | Fx 7 echoes |
| 103 | Fx 8 scifi |
| 104 | Sitar |
| 105 | Banjo |
| 106 | Shamisen |
| 107 | Koto |
| 108 | Kalimba |
| 109 | Bag pipe |
| 110 | Fiddle |
| 111 | Shanai |
| 112 | Tinkle Bell |
| 113 | Agogo |
| 114 | Steel Drums |
| 115 | Woodblock |
| 116 | Taiko Drum |
| 117 | Melodic Tom |
| 118 | Synth Drum |
| 119 | Reverse Cymbal |
| 120 | Guitar Fret Noise |
| 121 | Breath Noise |
| 122 | Seashore |
| 123 | Bird Tweet |
| 124 | Telephone Ring |
| 125 | Helicopter |
| 126 | Applause |
| 127 | Gunshot |

## Tuning

The tuning of the instrument is defined by the `\tuning` tag. For stringed instruments like the Guitar, each tuning value defines one string. The format of the tuning value is `{note}{octave}`. `{note}` is one value of the following values: C, C# or Db, D, D# or Eb, E, F, F# or Gb, G, G# or Ab, A, A# or Bb, B. `{octave}` is a number defining the octave.

For example, a standard guitar tuning is `\tuning E4 B3 G3 D3 A2 E2`. A 5 string bass would be `\tuning G2 D2 A1 E1 B0`.

For non-stringed instruments, the values `piano`, `none` or `voice` can be used depending on preference.

If `\instrument` is specified without `\tuning`, alphaTab will try to make a guess and apply the right default tuning.
