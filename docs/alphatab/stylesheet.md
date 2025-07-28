# AlphaTex Stylesheet

There are various stylesheet related options which can be specified in alphaTex.

## Show/Hide Dynamics

To configure on the stylesheet whether dynamics are shown use: `\showDynamics` and `\hideDynamics`

```
\showDynamics
.
C4 D4 E4 F4
```

```
\hideDynamics
.
C4 D4 E4 F4
```

## Brackets and Braces

To configure the mode how to show brackets and braces use:

- `\bracketExtendMode NoBrackets`
- `\bracketExtendMode GroupStaves`
- `\bracketExtendMode GroupSimilarInstruments`

The `\useSystemSignSeparator` option configures whether a system sign separator should be added

```
\bracketextendmode GroupSimilarInstruments 
\useSystemSignSeparator
.
\track "Piano1"
\staff {score}
\instrument piano
C4 D4 E4 F4
\staff {score}
\clef f4 C3 D3 E3 F3
\track "Piano2"
\staff {score}
\instrument piano
C4 D4 E4 F4
\track "Flute 1"
\staff { score }
\instrument flute
C4 D4 E4 F4
\track "Flute 2"
\staff { score }
\instrument flute
\clef f4 C3 D3 E3 F3
\track "Guitar 1"
\staff { score tabs }
0.3.4 2.3.4 5.3.4 7.3.4
```

## System Sign Separator

The `\useSystemSignSeparator` option configures whether a system sign separator should be added (in case multiple tracks are shown).

```
\useSystemSignSeparator
\defaultSystemsLayout 2
.
\track "T1"
:1 C4 | C4 | C4
\track "T2"
:1 C4 | C4 | C4
```

## Show Tuning (per track)

For every track it can be configured whether the tuning should be shown via the `hide` option on the tuning.

```
\track \staff \tuning E4 B3 G3 D3 A2 E2
3.3.1
\track \staff \tuning D4 A3 F3 C3 G2 D2
3.3.1
```

```
\track \staff \tuning E4 B3 G3 D3 A2 E2 hide
3.3.1
\track \staff \tuning D4 A3 F3 C3 G2 D2
3.3.1
```

## Track Names

To configure the mode how to show track names use:

- `\singleTrackTrackNamePolicy hidden`, `\singleTrackTrackNamePolicy firstSystem`, `singleTrackTrackNamePolicy allSystems`
- `\multiTrackTrackNamePolicy hidden`, `\multiTrackTrackNamePolicy firstSystem`, `multiTrackTrackNamePolicy allSystems`
- `\firstSystemTrackNameMode shortName`, `\firstSystemTrackNameMode fullName`
- `\otherSystemsTrackNameMode shortName`, `\otherSystemsTrackNameMode fullName`
- `\firstSystemTrackNameOrientation horizontal`, `\firstSystemTrackNameOrientation vertical`
- `\otherSystemsTrackNameOrientation horizontal`, `\otherSystemsTrackNameOrientation vertical`

```
\singletracktracknamepolicy AllSystems
\firstsystemtracknamemode fullname
\othersystemstracknamemode shortname
\firstsystemtracknameorientation horizontal
\othersystemstracknameorientation vertical
.
\track "Piano 1" "pno1" { defaultsystemslayout 3 }
\staff {score}
C4 D4 E4 F4 | C4 D4 E4 F4 | C4 D4 E4 F4 | C4 D4 E4 F4 | C4 D4 E4 F4 |
```

## Multi-Bar Rests

To configure whether multibar rests should be enabled use:

- `\multiBarRest` - On top level for configuring the use on multi-track renderings
- `\track { multiBarRest }` - On track level for single track renderings

```
\title "Multi Track"
\multiBarRest
.
\track "Piano 1" "pno1"
\staff {score}
C4 D4 E4 F4 | r | r | C4 D4 E4 F4 | r | r | r | C4
\track "Piano 2" "pno1"
\staff {score}
C4 D4 E4 F4 | r | r | C4 D4 E4 F4 | r | r | r | r |
```

```
\title "Single Track"
.
\track "Piano 1" "pno1" { multiBarRest }
\staff {score}
C4 D4 E4 F4 | r | r | C4 D4 E4 F4 | r | r | r | C4
```
