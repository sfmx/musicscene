# AlphaTex Lyrics

Since alphaTab 1.2 there is support for lyrics in the AlphaTex format. You can attach lyrics to individual beats and alphaTab will show them on the music sheet.

## Basic Syntax

To specify lyrics for a note, you can use the `\lyrics "text"` command right before the note:

```
\track "Voice"
\lyrics "Hel" 1.4 
\lyrics "lo" 2.4 
\lyrics "world!" 3.4 4.4 |
```

This will show "Hel" under the first beat, "lo" under the second beat, and "world!" under the third beat.

## Syllable Separation

For longer words that span multiple beats, you can separate syllables manually:

```
\track "Voice"
\lyrics "Hel" 1.4 
\lyrics "lo" 2.4 
\lyrics "my" 3.4 
\lyrics "friend" 4.4 |
\lyrics "How" 1.4 
\lyrics "are" 2.4 
\lyrics "you" 3.4 
\lyrics "to" 4.4 |
\lyrics "day?" 1.2 r.2 |
```

## Beat Alignment

Lyrics are automatically aligned to the beat they are assigned to. If you have multiple notes per beat (like 8th notes), the lyric will align to the first note of that beat:

```
\track "Voice"
\lyrics "Sing" 1.8 2.8 
\lyrics "a" 3.8 
\lyrics "song" 4.8 |
\lyrics "of" 1.8 2.8 
\lyrics "joy" 3.4 4.4 |
```

## Multi-line Lyrics

You can specify multiple verses by using numbered lyrics commands:

```
\track "Voice"
\lyrics "First" 1.4 
\lyrics "verse" 2.4 
\lyrics "here" 3.4 4.4 |
\lyrics2 "Se" 1.4 
\lyrics2 "cond" 2.4 
\lyrics2 "verse" 3.4 4.4 |
```

## Hyphenation

For words that span multiple notes, you can use hyphens to indicate syllable breaks:

```
\track "Voice"
\lyrics "Hap" 1.4 
\lyrics "py" 2.4 
\lyrics "birth" 3.4 
\lyrics "day" 4.4 |
\lyrics "to" 1.4 
\lyrics "you!" 2.2 r.2 |
```

## Melismas

When multiple notes are sung on the same syllable, you can use underscores or leave lyrics empty for continuation:

```
\track "Voice"
\lyrics "Ahhh" 1.8 2.8 3.8 4.8 |
\lyrics "Yeah" 1.4 2.8 3.8 4.4 |
```

## Comments in Lyrics

You can add comments that won't be displayed using `//`:

```
\track "Voice"
// Verse 1
\lyrics "Once" 1.4 
\lyrics "up" 2.4 
\lyrics "on" 3.4 
\lyrics "a" 4.4 |
\lyrics "time" 1.2 r.2 |
// Chorus
\lyrics "La" 1.8 2.8 
\lyrics "la" 3.8 4.8 |
```

## Extended Example

Here's a more complete example showing various lyrics features:

```
\title "Example Song"
\subtitle "With Lyrics"
\artist "AlphaTab"

\track "Vocals"
\lyrics "Verse" 1.4 
\lyrics "one" 2.4 
\lyrics "start" 3.4 
\lyrics "ing" 4.4 |
\lyrics "here" 1.4 
\lyrics "with" 2.4 
\lyrics "this" 3.4 
\lyrics "line" 4.4 |
\lyrics "Now" 1.4 
\lyrics "the" 2.4 
\lyrics "cho" 3.8 4.8 |
\lyrics "rus" 1.4 
\lyrics "sings" 2.2 r.2 |

// Second verse
\lyrics2 "Verse" 1.4 
\lyrics2 "two" 2.4 
\lyrics2 "dif" 3.4 
\lyrics2 "ferent" 4.4 |
\lyrics2 "words" 1.4 
\lyrics2 "but" 2.4 
\lyrics2 "same" 3.4 
\lyrics2 "tune" 4.4 |
\lyrics2 "Cho" 1.4 
\lyrics2 "rus" 2.4 
\lyrics2 "a" 3.8 4.8 |
\lyrics2 "gain" 1.4 
\lyrics2 "here" 2.2 r.2 |
```

## Lyrics Display

When lyrics are present, alphaTab will:

1. Show them below the staff
2. Align them with the corresponding beats
3. Display multiple verses stacked vertically
4. Handle hyphenation and syllable alignment automatically
5. Adjust spacing to accommodate the text

The lyrics system in alphaTab provides a clean way to display song text alongside the musical notation, making it easier to follow along with vocal parts or understand the structure of songs with words.
