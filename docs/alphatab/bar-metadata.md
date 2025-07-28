# AlphaTex Bar Metadata

## Time Signature

The time signature can be changed across the bars using `\ts numerator denominator`

```
\ts 2 4
1.4 2.4 |
\ts 3 4 
1.4 2.4 3.4 |
\ts 4 4
1.4 2.4 3.4 4.4 |
```

**NOTE:** Time signatures can only be applied at the start of bars and cannot be assigned to an individual beat.

## Repeats

To support repeats in alphaTab you can use the `\ro` and `\rc` commands to open and close repeats. You can also specify the number of repeats using `\rc 2` which means that a section will repeat 2 times (so played 3 times in total).

```
1.4 2.4 3.4 4.4 |
\ro
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
\rc
1.4 2.4 3.4 4.4 |
```

## Key Signature

To change the key signature you can use `\ks keySignature` where the key signature follows standard circle of fifth notation (C, G, D, A, E, B, F#, C#) and you can also use minor keys and provide some special names.

**Major Keys:** C, G, D, A, E, B, F#, C#, F, Bb, Eb, Ab, Db, Gb, Cb
**Minor Keys:** Am, Em, Bm, F#m, C#m, G#m, D#m, A#m, Dm, Gm, Cm, Fm, Bbm, Ebm, Abm

**Special Key names:**
- C# = Db
- F# = Gb  
- Cb = B
- A#m = Bbm
- D#m = Ebm
- G#m = Abm

```
\ks C
1.4 2.4 3.4 4.4 |
\ks Am
1.4 2.4 3.4 4.4 |
\ks E
1.4 2.4 3.4 4.4 |
```

## Clef

You can change the clef for the staff using the clef command `\clef type`. The valid clefs are:

- `treble` or `g2`
- `bass` or `f4` 
- `alto` or `c3`
- `tenor` or `c4`
- `neutral` (neutral clef, often used for percussion)

```
\clef treble
1.4 2.4 3.4 4.4 |
\clef bass
1.4 2.4 3.4 4.4 |
\clef alto
1.4 2.4 3.4 4.4 |
```

## Tempo

The tempo can be changed across bars using `\tempo bpm` where bpm is the beats per minute.

```
\tempo 120
1.4 2.4 3.4 4.4 |
\tempo 80 
1.4 2.4 3.4 4.4 |
\tempo 160
1.4 2.4 3.4 4.4 |
```

## Triplet Feel

To enable triplet feel (swing) you can use `\tf value` where value can be:

- `none` - No triplet feel (default)
- `triplet8th` - 8th note triplet feel 
- `triplet16th` - 16th note triplet feel
- `dotted8th` - Dotted 8th feel
- `dotted16th` - Dotted 16th feel
- `scottish8th` - Scottish 8th feel
- `scottish16th` - Scottish 16th feel

```
\tf none
1.8 2.8 3.8 4.8 |
\tf triplet8th
1.8 2.8 3.8 4.8 |
\tf dotted8th  
1.8 2.8 3.8 4.8 |
```

## Anacrusis

To define pickup notes (anacrusis) you can use `\ac duration` at the beginning of a song. This will indicate that the first bar starts with a pickup of the specified duration.

```
\ac 4
4.4 |
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
```

## Sections

You can define sections using `\section "Name"` to structure your song. Sections will be shown in alphaTab as section markers.

```
\section "Intro"
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
\section "Verse"
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
\section "Chorus"
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
```

## Directions

You can add textual directions using the following commands:

- `\coda` - Coda symbol
- `\segno` - Segno symbol  
- `\fine` - Fine text
- `\capo fret` - Capo indication on specified fret
- `\words "text"` - Custom text

```
1.4 2.4 3.4 4.4 |
\segno
1.4 2.4 3.4 4.4 |
\words "D.S. al Coda"
1.4 2.4 3.4 4.4 |
\coda  
1.4 2.4 3.4 4.4 |
\fine
```

## Transpose

To transpose the whole track you can use `\transpose semitones` where semitones is the number of semitones to transpose (positive for up, negative for down).

```
\transpose 2
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
```

## Multiple Voices

For multiple voices within the same staff, you can use voice blocks:

```
\voice 1
1.4 2.4 3.4 4.4 |
1.4 2.4 3.4 4.4 |
\voice 2  
r.2 3.4 4.4 |
r.2 3.4 4.4 |
```

## Volta Brackets

For alternate endings you can use volta brackets with `\volta numbers`:

```
\ro
1.4 2.4 3.4 4.4 |
\volta 1 
1.4 2.4 3.4 4.4 |
\volta 2
5.4 6.4 7.4 8.4 |
\rc
```

## Master Volume

To set the master volume use `\mv value` where value is between 0-15:

```
\mv 10
1.4 2.4 3.4 4.4 |
```
