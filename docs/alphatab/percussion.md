# AlphaTex Percussion

Since alphaTab 1.4 you can also write percussion (drum) tracks in alphaTab. For this the `\instrument "percussion"` has to be set for the track and then you can add notes via articulation names or numbers.

```
\track "Drums" 
\instrument percussion 
\tempo 120 
\clef neutral 
\articulation defaults
(KickHit RideBell).16 r KickHit KickHit (KickHit RideBell).16 r KickHit KickHit (KickHit RideBell).16 r KickHit KickHit (KickHit RideBell).16 r KickHit KickHit |
(KickHit HiHatOpen) KickHit KickHit KickHit (KickHit HiHatOpen) KickHit KickHit KickHit (KickHit SnareHit HiHatOpen) KickHit KickHit.32 KickHit KickHit.16 (KickHit HiHatOpen) KickHit KickHit KickHit |
(KickHit HiHatOpen).8{tu 3} KickHit{tu 3} KickHit{tu 3} (KickHit SnareHit HiHatOpen){tu 3} KickHit.16{tu 3} KickHit{tu 3} KickHit.8{tu 3} (KickHit HiHatOpen).8{tu 3} KickHit{tu 3} KickHit{tu 3} (KickHit SnareHit HiHatOpen).8{tu 3} KickHit{tu 3} KickHit{tu 3}
```

## Instrument Articulations

alphaTab comes with a default set of instrument articulations derived from Guitar Pro 7. Each articulation has an internal number with which it can be referenced. To make writing more human friendly you can define custom articulation names via `\articulation Name Number`

```
\track "Drums"
\instrument percussion
\tempo 120
\clef neutral
// define the articulation here
\articulation Kick 36
// use it as note values
Kick.4 Kick.8 Kick.8 Kick.4 Kick.4
```

If you simply want to use all articulations you can specify `\articulation defaults` and the whole list of articulations with some default names will be provided.

```
\track "Drums"
\instrument percussion
\tempo 120
\clef neutral
\articulation defaults
\ts 2 4
("Kick (Hit)" "Hi-Hat (Open)") "Kick (Hit)" "Kick (Hit)" "Kick (Hit)"
(KickHit HiHatOpen) KickHit KickHit KickHit
```

## Articulation List

To actually get started you need to know the list of built-in articulations. Refer to this list below and the example as reference:

| ID | Name | Default Alias |
|----|------|---------------|
| 29 | Ride (choke) | Ridechoke |
| 30 | Cymbal (hit) | Cymbalhit |
| 31 | Snare (side stick) | Snaresidestick |
| 33 | Snare (side stick) 2 | Snaresidestick2 |
| 34 | Snare (hit) | Snarehit |
| 35 | Kick (hit) | Kickhit |
| 36 | Kick (hit) 2 | Kickhit2 |
| 37 | Snare (side stick) 3 | Snaresidestick3 |
| 38 | Snare (hit) 2 | Snarehit2 |
| 39 | Hand Clap (hit) | HandClaphit |
| 40 | Snare (hit) 3 | Snarehit3 |
| 41 | Low Floor Tom (hit) | LowFloorTomhit |
| 42 | Hi-Hat (closed) | HiHatclosed |
| 43 | Very Low Tom (hit) | VeryLowTomhit |
| 44 | Pedal Hi-Hat (hit) | PedalHiHathit |
| 45 | Low Tom (hit) | LowTomhit |
| 46 | Hi-Hat (open) | HiHatopen |
| 47 | Mid Tom (hit) | MidTomhit |
| 48 | High Tom (hit) | HighTomhit |
| 49 | Crash high (hit) | Crashhighhit |
| 50 | High Floor Tom (hit) | HighFloorTomhit |
| 51 | Ride (middle) | Ridemiddle |
| 52 | China (hit) | Chinahit |
| 53 | Ride (bell) | Ridebell |
| 54 | Tambourine (hit) | Tambourinehit |
| 55 | Splash (hit) | Splashhit |
| 56 | Cowbell medium (hit) | Cowbellmediumhit |
| 57 | Crash medium (hit) | Crashmediumhit |
| 58 | Vibraslap (hit) | Vibraslaphit |
| 59 | Ride (edge) | Rideedge |
| 60 | Hand (hit) | Handhit |
| 61 | Hand (hit) | Handhit |
| 62 | Conga high (mute) | Congahighmute |
| 63 | Conga high (hit) | Congahighhit |
| 64 | Conga low (hit) | Congalowhit |
| 65 | Timbale high (hit) | Timbalehighhit |
| 66 | Timbale low (hit) | Timbalelowhit |
| 67 | Agogo high (hit) | Agogohighhit |
| 68 | Agogo tow (hit) | Agogotowhit |
| 69 | Cabasa (hit) | Cabasahit |
| 70 | Left Maraca (hit) | LeftMaracahit |
| 71 | Whistle high (hit) | Whistlehighhit |
| 72 | Whistle low (hit) | Whistlelowhit |
| 73 | Guiro (hit) | Guirohit |
| 74 | Guiro (scrap-return) | Guiroscrapreturn |
| 75 | Claves (hit) | Claveshit |
| 76 | Woodblock high (hit) | Woodblockhighhit |
| 77 | Woodblock low (hit) | Woodblocklowhit |
| 78 | Cuica (mute) | Cuicamute |
| 79 | Cuica (open) | Cuicaopen |
| 80 | Triangle (rnute) | Trianglernute |
| 81 | Triangle (hit) | Trianglehit |
| 82 | Shaker (hit) | Shakerhit |
| 83 | Tinkle Bell (hat) | TinkleBellhat |
| 83 | Jingle Bell (hit) | JingleBellhit |
| 84 | Bell Tree (hit) | BellTreehit |
| 85 | Castanets (hit) | Castanetshit |
| 86 | Surdo (hit) | Surdohit |
| 87 | Surdo (mute) | Surdomute |
| 91 | Snare (rim shot) | Snarerimshot |
| 92 | Hi-Hat (half) | HiHathalf |
| 93 | Ride (edge) 2 | Rideedge2 |
| 94 | Ride (choke) 2 | Ridechoke2 |
| 95 | Splash (choke) | Splashchoke |
| 96 | China (choke) | Chinachoke |
| 97 | Crash high (choke) | Crashhighchoke |
| 98 | Crash medium (choke) | Crashmediumchoke |
| 99 | Cowbell low (hit) | Cowbelllowhit |
| 100 | Cowbell low (tip) | Cowbelllowtip |
| 101 | Cowbell medium (tip) | Cowbellmediumtip |
| 102 | Cowbell high (hit) | Cowbellhighhit |
| 103 | Cowbell high (tip) | Cowbellhightip |
| 104 | Hand (mute) | Handmute |
| 105 | Hand (slap) | Handslap |
| 106 | Hand (mute) 2 | Handmute2 |
| 107 | Hand (slap) 2 | Handslap2 |
| 108 | Conga low (slap) | Congalowslap |
| 109 | Conga low (mute) | Congalowmute |
| 110 | Conga high (slap) | Congahighslap |
| 111 | Tambourine (return) | Tambourinereturn |
| 112 | Tambourine (roll) | Tambourineroll |
| 113 | Tambourine (hand) | Tambourinehand |
| 114 | Grancassa (hit) | Grancassahit |
| 115 | Piatti (hat) | Piattihat |
| 116 | Piatti (hand) | Piattihand |
| 117 | Cabasa (return) | Cabasareturn |
| 118 | Left Maraca (return) | LeftMaracareturn |
| 119 | Right Maraca (hit) | RightMaracahit |
| 120 | Right Maraca (return) | RightMaracareturn |
| 122 | Shaker (return) | Shakerreturn |
| 123 | Bell Tee (return) | BellTeereturn |
| 124 | Golpe (thumb) | Golpethumb |
| 125 | Golpe (finger) | Golpefinger |
| 126 | Ride (middle) 2 | Ridemiddle2 |
| 127 | Ride (bell) 2 | Ridebell2 |

```
\track "Drums"
\instrument percussion
\tempo 120
\clef neutral
\ts 2 4
29 30 31 |
33 34 35 36 |
37 38 39 40 |
41 42 43 44 |
45 46 47 48 |
49 50 51 52 |
53 54 55 56 |
57 58 59 60 |
61 62 63 64 |
65 66 67 68 |
69 70 71 72 |
73 74 75 76 |
77 78 79 80 |
81 82 83 83 |
84 85 86 87 |
91 92 93 94 |
95 96 97 98 |
99 100 101 102 |
103 104 105 106 |
107 108 109 110 |
111 112 113 114 |
115 116 117 118 |
119 120 122 123 |
124 125 126 127 |
```
