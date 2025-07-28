# AlphaTab Documentation

This directory contains comprehensive documentation for AlphaTab's AlphaTex notation format. AlphaTex is a text-based format for writing music notation that can be rendered by AlphaTab.

## Documentation Files

1. **[Introduction](./introduction.md)** - Overview of AlphaTex format and basic structure
2. **[Metadata](./metadata.md)** - Song metadata tags like title, tempo, instrument settings
3. **[Stylesheet](./stylesheet.md)** - Visual styling options and display settings
4. **[Tracks and Staves](./tracks-staves.md)** - Multi-track support and staff configuration
5. **[Notes](./notes.md)** - Basic note notation, chords, rests, and duration ranges
6. **[Beat Effects](./beat-effects.md)** - Comprehensive guide to beat-level effects

## Quick Reference

### Basic Note Format
```
fret.string.duration
```

### Basic Song Structure
```
\title "Song Title"
\artist "Artist Name"
\tempo 120
.
// Song content here
```

### Common Effects
- **Vibrato**: `{v}` (slight) or `{vw}` (wide)
- **Hammer-on/Pull-off**: `{h}` / `{p}`
- **Bend**: `{b (value)}`
- **Slide**: `{sl}` or `{ss}`
- **Tuplets**: `{tu 3}` for triplets

### Chord Notation
```
(fret.string fret.string).duration
```

### Multiple Tracks
```
\track "Track 1"
// Track 1 content
\track "Track 2" 
// Track 2 content
```

## Source

This documentation is based on the official AlphaTab documentation available at:
https://www.alphatab.net/docs/alphatex/introduction

## Usage in MusicScene

These documentation files serve as a reference for implementing AlphaTab notation in the MusicScene project, particularly for:

- Scale visualization in the Musical Analysis section
- Guitar tablature rendering
- Music notation display throughout the application

## Additional Resources

- [AlphaTab Official Website](https://www.alphatab.net/)
- [AlphaTab GitHub Repository](https://github.com/CoderLine/alphaTab)
- [AlphaTab Playground](https://www.alphatab.net/playground) - Interactive testing environment
