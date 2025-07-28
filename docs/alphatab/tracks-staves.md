# AlphaTex Tracks and Staves

For some songs you might want to define that the song has multiple tracks or staves. Depending on your UI the user might then select which track to display and switch between them. Staves configurations are useful to adjust the display of the individual tracks. You can enable/disable certain notation to be shown and also add multiple staffs to a single track (e.g. for piano grand staff).

## Tracks

A new track can be started with the `\track "Track Long Name" "Track Short Name"` metadata. Both names are optional and the short name is the one displayed before the track starts. The long name can be used e.g. in your custom UI. If the short name is not specified, the first 10 characters of the long name are used as short name.

Be sure to finish the previous beat with a vertical bar `|` to start a new bar of a new track.

```
\track "First Track" "frst"
1.1 2.1 3.1 4.1 |
\track // new track
\tuning A1 D2 A2 D3 G3 B3 E4 // tuning of new track (with 7 strings)
4.1 3.1 2.1 1.1 |
```

Additional track metadata can be specified in braces after the track information.

### Track Color

The data model holds information about the color of the track which might be used by user interfaces to visually differentiate them.

The `color colorCode` can be used to define the color. Where colorCode can be any supported color format.

```
\track { color "#FF0000" }
1.1 2.1 3.1 4.1
```

### System Layout

The `systemsLayout` and `defaultSystemsLayout` allow configuring the system layout. See below for details.

### Playback Information

- `solo` set the track to be played alone in the data model.
- `mute` set the track to be muted (not played) in the data model.
- `volume value` set the track volume, value can be 0-16
- `balance value` set the track balance/pan, value can be 0-16

## Staves

A new staff can be started with the `\staff` metadata. In braces you can optionally define via the options `score` (for standard notation), `tab` (for guitar tablature), `slash` (for slash notation), `numbered` (for Jianpu / numbered notation) whether the corresponding notation should be shown. By default both notation systems are shown.

```
\track "Piano with Grand Staff" "pno."
\staff{score} \tuning piano \instrument acousticgrandpiano
c4 d4 e4 f4 |
\staff{score} \tuning piano \clef F4
c2 c2 c2 c2 |
\track "Guitar"
\staff{tabs} \capo 5
1.2 3.2 0.1 1.1
```

### Standard notation line count

For the standard notation staff you can configure the number of lines shown by specifying the number after the keyword:

```
\track
\staff{score 3}
c4 d4 e4 f4
```

## Hide Tuning

To hide the tuning for a track add the `hide` keyword after the tuning. As of now tuning visibility is per-track not per-staff despite the tuning being on staff level. It should be rather uncommon to have multiple different staves with different string tunings.

```
\track "Track 1"
\staff {tabs}
\tuning A1 D2 A2 D3 G3 B3 E4 hide
4.1 3.1 2.1 1.1
```

## Automatic Bars

The staff with the largest number of bars defines how long the overall song is. There is no need to manually ensure that all staves have the correct number of bars. AlphaTab will create missing empty bars automatically.

```
\track "Piano with Grand Staff" "pno."
\staff{score} \tuning piano \instrument acousticgrandpiano
c4 d4 e4 f4 |
\staff{score} \tuning piano \clef F4
c2 c2 c2 c2 | c2 c2 c2 c2 | c2 c2 c2 c2 |
\track "Guitar"
\staff{tabs} \capo 5
1.2 3.2 0.1 1.1 | 1.2 3.2 0.1 1.1
```

## System Layout

The system layout defines how many bars should be displayed per system (line). The use of the system layout has to be enabled via `systemsLayoutMode`.

The system layout can be configured either on score or on track level via these two options:

- `defaultSystemsLayout` - defines the number of bars to display unless specified differently. (default: 3)
- `systemsLayout` - defines the number of bars to display per system. (default: empty)

The `score` level options are used in case multiple tracks are displayed, otherwise the `track` level information is used.

```
\title "Single Track"
.
\track { defaultSystemsLayout 3 systemsLayout 2 2 }
:1 c4 | c4 | c4 | c4 | c4 | c4 | c4 | c4
```

```
\title "Multi Track"
\defaultSystemsLayout 2
\systemsLayout 1 1
.
\track { defaultSystemsLayout 1 systemsLayout 2 2 }
:1 c4 | c4 | c4 | c4 | c4 | c4 | c4 | c4
\track { defaultSystemsLayout 4 systemsLayout 3 3 }
:1 c4 | c4 | c4 | c4 | c4 | c4 | c4 | c4
```

### Bar Scale

When using `systemsLayoutMode: 'UseModelLayout'` with page view layout the individual bars can be scaled relatively. This scale can be specified with `\scale Value`

```
\track { defaultSystemsLayout 3 }
\scale 0.25 :1 c4 | \scale 0.5 c4 | \scale 0.25 c4 |
\scale 0.5 c4 | \scale 2 c4 | \scale 0.5 c4 |
c4 | c4
```

### Bar Width

When using `systemsLayoutMode: 'UseModelLayout'` with the horizontal layout the individual bars can be scaled absolutely. This scale can be specified with `\width Value`

```
\track
\width 100 :1 c4 | \width 300 c4 | \width 350 c4
```
