# AlphaTex Sync Points

AlphaTab provides a synchronization system that allows you to sync the music notation playback with external media like audio or video files. This is achieved through sync points that map specific positions in the music to time positions in the external media.

## Basic Sync Point Syntax

Sync points are defined using the `\sync` command followed by time information:

```
\sync bar:beat:tick:milliseconds
```

- `bar` - The bar number (1-based)
- `beat` - The beat within the bar (1-based) 
- `tick` - The tick within the beat (optional, default 0)
- `milliseconds` - The time position in the external media in milliseconds

## Simple Bar-based Sync

The most basic form syncs entire bars to time positions:

```
\track "Guitar"
\sync 1:1:0:0
1.4 2.4 3.4 4.4 |
\sync 2:1:0:1000  
1.4 2.4 3.4 4.4 |
\sync 3:1:0:2000
1.4 2.4 3.4 4.4 |
\sync 4:1:0:3000
1.4 2.4 3.4 4.4 |
```

This example syncs:
- Bar 1 to start at 0ms
- Bar 2 to start at 1000ms (1 second)
- Bar 3 to start at 2000ms (2 seconds)  
- Bar 4 to start at 3000ms (3 seconds)

## Beat-level Sync

For more precise synchronization, you can sync individual beats:

```
\track "Guitar"
\sync 1:1:0:0
1.4 
\sync 1:2:0:250
2.4 
\sync 1:3:0:500
3.4 
\sync 1:4:0:750
4.4 |
\sync 2:1:0:1000
1.4 2.4 3.4 4.4 |
```

## Tick-level Precision

For the highest precision, you can specify tick positions within beats:

```
\track "Guitar" 
\sync 1:1:0:0
1.8 
\sync 1:1:960:125
2.8 
\sync 1:2:0:250  
3.8 
\sync 1:2:960:375
4.8 |
```

Note: Ticks are typically 960 per quarter note in MIDI resolution.

## Ratio-based Sync

Instead of absolute millisecond values, you can use ratio-based timing:

```
\sync 1:1:0:0.0
\sync 2:1:0:0.25
\sync 3:1:0:0.5  
\sync 4:1:0:0.75
\sync 5:1:0:1.0
```

This syncs the bars to 0%, 25%, 50%, 75%, and 100% of the media duration.

## Practical Example

Here's a practical example for syncing a guitar track with an audio recording:

```
\title "Sync Example"
\artist "AlphaTab"
\tempo 120

\track "Lead Guitar"
// Song starts with 2 second intro
\sync 1:1:0:2000
3.3.8 3.4.8 3.5.8 3.6.8 |
\sync 2:1:0:2500
3.3.4 3.4.4 3.5.4 3.6.4 |
// Chorus at 10 seconds
\sync 3:1:0:10000  
3.1.4 3.2.4 3.3.4 3.4.4 |
\sync 4:1:0:10500
3.1.4 3.2.4 3.5.4 3.6.4 |
// Bridge section at 25 seconds
\sync 5:1:0:25000
2.1.2 2.3.2 |
\sync 6:1:0:26000
2.1.2 2.3.2 |
```

## Sync Points for Video

When syncing with video, you might want to align musical events with visual cues:

```
\track "Soundtrack"
// Video starts
\sync 1:1:0:0
1.4 2.4 3.4 4.4 |
// Scene change at 5.5 seconds
\sync 2:3:0:5500  
1.4 2.4 3.4 4.4 |
// Action sequence at 12 seconds
\sync 4:1:0:12000
1.8 2.8 3.8 4.8 |
// End credits at 45 seconds
\sync 10:1:0:45000
1.2 r.2 |
```

## Multiple Track Sync

Each track can have its own sync points:

```
\track "Guitar"
\sync 1:1:0:1000
3.3.4 3.4.4 3.5.4 3.6.4 |

\track "Bass"  
\sync 1:1:0:1000
1.3.4 1.4.4 1.5.4 1.6.4 |

\track "Drums"
\instrument percussion
\sync 1:1:0:1000
36.4 38.4 36.4 38.4 |
```

## Using Sync Data

The sync points can be used by alphaTab to:

1. **Playback Synchronization** - Sync alphaTab's internal playback with external audio/video
2. **Visual Highlighting** - Highlight the current position during external media playback  
3. **Seeking** - Jump to specific positions in both the notation and external media
4. **Tempo Analysis** - Analyze tempo variations in recorded performances

## API Integration

```javascript
// Example of using sync points in JavaScript
const api = new alphaTab.AlphaTabApi(element, settings);

// Listen for sync point events
api.playbackPositionChanged.on((e) => {
    // e.currentBar, e.currentBeat contain position info
    // Use this to seek in your external media player
    myVideoPlayer.currentTime = e.currentTime / 1000; // Convert ms to seconds
});

// Sync from external media to alphaTab
myVideoPlayer.addEventListener('timeupdate', () => {
    const currentMs = myVideoPlayer.currentTime * 1000;
    api.tickPosition = currentMs; // This will highlight the corresponding notation
});
```

## Best Practices

1. **Start Simple** - Begin with bar-level sync points and add precision as needed
2. **Key Sections** - Focus sync points on important musical sections (verse, chorus, bridge)
3. **Consistent Timing** - Ensure your external media and sync points use the same time reference
4. **Test Thoroughly** - Verify sync accuracy across different playback speeds and positions
5. **Performance** - Too many sync points can impact performance; use judiciously

The sync point system in alphaTab enables sophisticated integration with multimedia content, making it possible to create rich, synchronized musical experiences.
