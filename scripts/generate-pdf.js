const fs = require('fs');
const path = require('path');
const PDFDocument = require('c:/Source/musicscene/node_modules/pdfkit/js/pdfkit.js');

function generateGuitarPDF() {
  const outputPath = path.resolve('c:/Source/musicscene/public/downloads/fretboard-interval-modal-roadmap.pdf');
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create PDF Document with A4 size and clean margins
  const doc = new PDFDocument({
    size: 'A4', // 595.28 x 841.89 pt
    margins: { top: 36, bottom: 36, left: 36, right: 36 },
    info: {
      Title: "The Ultimate Guitar Fretboard & Modal Roadmap",
      Author: "Jason Smith - MusicScene.com.au",
      Subject: "Guitar Fretboard, Interval Formulas, Modes, and Pentatonic Reference Guide",
      Keywords: "guitar fretboard, intervals, modes, music theory, scales, cheat sheet",
      CreationDate: new Date()
    }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const colors = {
    primary: '#1E3A8A',    // Deep Blue
    accent: '#2563EB',     // Blue
    dark: '#111827',       // Near Black
    gray: '#4B5563',       // Gray
    lightGray: '#F3F4F6',  // Light background
    border: '#E5E7EB',     // Border
    white: '#FFFFFF',
    root: '#DC2626',       // Red for Root
    third: '#D97706',      // Amber for 3rds
    fifth: '#059669',      // Emerald for 5th
    seventh: '#7C3AED',    // Purple for 7th
    blueNote: '#0284C7'    // Sky Blue for b5
  };

  function drawHeader(pageTitle, pageNumber) {
    // Top banner
    doc.rect(36, 36, 523.28, 44).fill(colors.primary);
    
    doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(14)
       .text('MUSICSCENE.COM.AU', 48, 44, { characterSpacing: 1 });
    
    doc.fillColor('#93C5FD').font('Helvetica').fontSize(9)
       .text('GUITARIST\'S PRINTABLE REFERENCE GUIDE • BY JASON SMITH', 48, 62);
    
    doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(11)
       .text(pageTitle.toUpperCase(), 350, 52, { width: 195, align: 'right' });

    // Footer
    doc.rect(36, 805, 523.28, 0.75).fill(colors.border);
    doc.fillColor(colors.gray).font('Helvetica').fontSize(8)
       .text('© MusicScene.com.au — Free interactive practice tools available online', 48, 812);
    doc.fillColor(colors.accent).font('Helvetica-Bold').fontSize(8)
       .text(`Page ${pageNumber} of 3`, 480, 812, { width: 65, align: 'right' });
  }

  // ==========================================
  // PAGE 1: MASTER FRETBOARD NOTE NAVIGATION
  // ==========================================
  drawHeader('1. Fretboard Note Map', 1);

  let y = 92;
  doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(16)
     .text('The Master Fretboard Note Navigation System', 36, y);
  
  y += 20;
  doc.fillColor(colors.gray).font('Helvetica').fontSize(9.5)
     .text('Standard Guitar Tuning (E-A-D-G-B-E) • Complete 12-Fret Octave Grid with Root Landmarks', 36, y);

  y += 24;

  // Fretboard Diagram Dimensions
  const fbX = 56;
  const fbY = y;
  const fbW = 485;
  const fbH = 150;
  const numFrets = 12;
  const fretW = fbW / numFrets;
  const stringH = fbH / 5;

  // Draw Fretboard Wood Background
  doc.rect(fbX, fbY, fbW, fbH).fill('#F8FAFC');
  doc.rect(fbX, fbY, fbW, fbH).strokeColor('#CBD5E1').lineWidth(1).stroke();

  // Nut (thicker line at fret 0)
  doc.rect(fbX - 3, fbY, 4, fbH).fill('#334155');

  // Fret Lines
  for (let f = 1; f <= numFrets; f++) {
    const fx = fbX + f * fretW;
    doc.moveTo(fx, fbY).lineTo(fx, fbY + fbH).strokeColor('#94A3B8').lineWidth(1.2).stroke();
    // Fret number below
    doc.fillColor(colors.gray).font('Helvetica-Bold').fontSize(8)
       .text(f.toString(), fx - fretW / 2 - 3, fbY + fbH + 5);
  }

  // Fret Marker Inlays (dots at 3, 5, 7, 9, and double dot at 12)
  const markerFrets = [3, 5, 7, 9];
  markerFrets.forEach(f => {
    const mx = fbX + (f - 0.5) * fretW;
    const my = fbY + fbH / 2;
    doc.circle(mx, my, 4).fill('#E2E8F0');
    doc.circle(mx, my, 4).strokeColor('#CBD5E1').lineWidth(0.5).stroke();
  });
  // Fret 12 double dot
  const m12x = fbX + (12 - 0.5) * fretW;
  doc.circle(m12x, fbY + fbH * 0.3, 3.5).fill('#E2E8F0');
  doc.circle(m12x, fbY + fbH * 0.7, 3.5).fill('#E2E8F0');

  // Guitar Strings & Notes (High E down to Low E)
  const strings = [
    { name: 'E (1st)', notes: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'], open: 'E' },
    { name: 'B (2nd)', notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], open: 'B' },
    { name: 'G (3rd)', notes: ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'], open: 'G' },
    { name: 'D (4th)', notes: ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'], open: 'D' },
    { name: 'A (5th)', notes: ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'], open: 'A' },
    { name: 'E (6th)', notes: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'], open: 'E' }
  ];

  // Draw Strings
  strings.forEach((str, i) => {
    const sy = fbY + i * stringH;
    const strThickness = 0.6 + i * 0.35; // Thicker for lower strings
    doc.moveTo(fbX, sy).lineTo(fbX + fbW, sy).strokeColor('#64748B').lineWidth(strThickness).stroke();

    // Open String label
    doc.fillColor(colors.primary).font('Helvetica-Bold').fontSize(8.5)
       .text(str.name, fbX - 44, sy - 4);

    // Notes on frets
    str.notes.forEach((note, fIndex) => {
      const nx = fbX + (fIndex + 0.5) * fretW;
      const isNatural = !note.includes('#');
      const isC = note === 'C';

      // Draw Note Circle
      const r = isNatural ? 8.5 : 7;
      let circleColor = isNatural ? '#FFFFFF' : '#F1F5F9';
      let strokeColor = isNatural ? colors.primary : '#94A3B8';
      let textColor = isNatural ? colors.primary : '#475569';

      if (isC) {
        strokeColor = colors.root;
      }

      doc.circle(nx, sy, r).fill(circleColor);
      doc.circle(nx, sy, r).strokeColor(strokeColor).lineWidth(isNatural ? 1.2 : 0.8).stroke();

      doc.fillColor(textColor).font(isNatural ? 'Helvetica-Bold' : 'Helvetica')
         .fontSize(note.length > 1 ? 6.5 : 7.5)
         .text(note, nx - 6, sy - (note.length > 1 ? 3 : 3.5), { width: 12, align: 'center' });
    });
  });

  // Fretboard Rule Boxes below
  y = fbY + fbH + 28;

  doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(12)
     .text('The 4 Core Fretboard Navigation Rules', 36, y);

  y += 18;

  const rules = [
    {
      title: 'Rule 1: The Natural Semitone Halves (B-C and E-F)',
      desc: 'All natural notes are 2 frets (whole step) apart EXCEPT B to C and E to F, which are only 1 fret (half step) apart. There is no B# or E# in standard notation.'
    },
    {
      title: 'Rule 2: The Outer Strings are Identical Twins',
      desc: 'String 1 (High E) and String 6 (Low E) have identical notes at every fret. Memorize String 6, and you automatically know String 1 at the same time.'
    },
    {
      title: 'Rule 3: The Octave "Knight\'s Move" Jump',
      desc: 'From Strings 6 & 5, jump DOWN 2 strings and UP 2 frets to find the identical octave note (e.g. Fret 3 on String 6 = G; Fret 5 on String 4 = G).'
    },
    {
      title: 'Rule 4: The 12th Fret Reset',
      desc: 'Fret 12 marks the exact harmonic center where all open string notes repeat one octave higher (E-A-D-G-B-E). Frets 13–24 repeat the identical pattern.'
    }
  ];

  const colW = 250;
  rules.forEach((r, idx) => {
    const rx = 36 + (idx % 2) * (colW + 23);
    const ry = y + Math.floor(idx / 2) * 80;

    // Card background
    doc.rect(rx, ry, colW, 70).fill('#F8FAFC');
    doc.rect(rx, ry, colW, 70).strokeColor('#E2E8F0').lineWidth(0.75).stroke();

    doc.fillColor(colors.primary).font('Helvetica-Bold').fontSize(9)
       .text(r.title, rx + 10, ry + 8, { width: colW - 20 });

    doc.fillColor(colors.gray).font('Helvetica').fontSize(8)
       .text(r.desc, rx + 10, ry + 24, { width: colW - 20, lineGap: 1.5 });
  });

  // Bottom Callout on Page 1
  const boxY = y + 175;
  doc.rect(36, boxY, 523.28, 65).fill('#EFF6FF');
  doc.rect(36, boxY, 523.28, 65).strokeColor('#BFDBFE').lineWidth(1).stroke();

  doc.fillColor(colors.primary).font('Helvetica-Bold').fontSize(10)
     .text('PRO PRACTICE TIP: The 5-Minute Daily Anchor Fret Drill', 48, boxY + 10);

  doc.fillColor(colors.dark).font('Helvetica').fontSize(8.5)
     .text('Pick ONE note each day (e.g., Tuesday = C). Find and play all C notes across all 6 strings in rhythm with a 60 BPM metronome. Within 12 days, fretboard hesitation completely disappears. Test your speed using the free online Fretboard Trainer at musicscene.com.au/lessons/practice/fretboard-trainer/', 48, boxY + 26, { width: 499, lineGap: 2 });


  // ==========================================
  // PAGE 2: INTERVAL FORMULAS & THE 7 MODES
  // ==========================================
  doc.addPage();
  drawHeader('2. Intervals & 7 Modes Matrix', 2);

  y = 92;
  doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(15)
     .text('The Universal Interval Formula Chart', 36, y);

  y += 16;
  doc.fillColor(colors.gray).font('Helvetica').fontSize(8.5)
     .text('Intervals are the atomic building blocks of all chords and scales. Master the distance relative to the Root.', 36, y);

  y += 18;

  // Interval Table
  const tableX = 36;
  const rowH = 17;
  const colWidths = [70, 45, 60, 185, 163];

  // Table Header
  doc.rect(tableX, y, 523, 20).fill(colors.primary);
  doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(8);
  doc.text('INTERVAL', tableX + 6, y + 6);
  doc.text('SHORT', tableX + colWidths[0] + 6, y + 6);
  doc.text('SEMITONES', tableX + colWidths[0] + colWidths[1] + 6, y + 6);
  doc.text('HARMONIC ROLE & COLOR', tableX + colWidths[0] + colWidths[1] + colWidths[2] + 6, y + 6);
  doc.text('GUITAR FRETBOARD SHAPE', tableX + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] + 6, y + 6);

  y += 20;

  const intervals = [
    { name: 'Root / Tonic', sym: '1 (P1)', semi: '0 st', role: 'Tonal center, home base, complete rest', shape: 'Anchor note for chord or scale' },
    { name: 'Minor 2nd', sym: 'b2 (m2)', semi: '1 st (Half)', role: 'Dark, tense, dissonance, Spanish Phrygian', shape: '1 fret above Root' },
    { name: 'Major 2nd', sym: '2 (M2)', semi: '2 st (Whole)', role: 'Open melodic step, suspensions (sus2)', shape: '2 frets above Root' },
    { name: 'Minor 3rd', sym: 'b3 (m3)', semi: '3 st', role: 'Defines Minor chords/scales; sad, bluesy', shape: '3 frets up OR 1 string down, 2 frets back' },
    { name: 'Major 3rd', sym: '3 (M3)', semi: '4 st', role: 'Defines Major chords/scales; bright, happy', shape: '1 string down, 1 fret back' },
    { name: 'Perfect 4th', sym: '4 (P4)', semi: '5 st', role: 'Open, suspended (sus4), folk harmony', shape: 'Same fret, 1 string down' },
    { name: 'Dim 5th / Tritone', sym: 'b5 / #4', semi: '6 st', role: 'The "Devil in Music", blues note tension', shape: '1 string down, 1 fret up' },
    { name: 'Perfect 5th', sym: '5 (P5)', semi: '7 st', role: 'Strongest harmony, power chord rock backbone', shape: '1 string down, 2 frets up' },
    { name: 'Minor 6th', sym: 'b6 (m6)', semi: '8 st', role: 'Sombre, mournful, pure Natural Minor (Aeolian)', shape: '1 string down, 3 frets up' },
    { name: 'Major 6th', sym: '6 (M6)', semi: '9 st', role: 'Sweet, jazzy, uplifting Dorian funk chord tone', shape: '2 strings down, 1 fret back' },
    { name: 'Minor 7th', sym: 'b7 (m7)', semi: '10 st', role: 'Bluesy drive, defines Dominant 7 & Minor 7', shape: '2 strings down, same fret' },
    { name: 'Major 7th', sym: '7 (M7)', semi: '11 st', role: 'Dreamy, sophisticated, Major 7th elegance', shape: '2 strings down, 1 fret up' },
    { name: 'Octave', sym: '8 (P8)', semi: '12 st', role: 'Same pitch class, pure resolution', shape: '2 strings down, 2 frets up' }
  ];

  intervals.forEach((iv, i) => {
    const bg = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
    doc.rect(tableX, y, 523, rowH).fill(bg);
    doc.rect(tableX, y, 523, rowH).strokeColor('#E2E8F0').lineWidth(0.5).stroke();

    doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(7.5)
       .text(iv.name, tableX + 6, y + 4.5);

    doc.fillColor(colors.primary).font('Helvetica-Bold').fontSize(7.5)
       .text(iv.sym, tableX + colWidths[0] + 6, y + 4.5);

    doc.fillColor(colors.gray).font('Helvetica').fontSize(7.5)
       .text(iv.semi, tableX + colWidths[0] + colWidths[1] + 6, y + 4.5);

    doc.fillColor(colors.dark).font('Helvetica').fontSize(7.5)
       .text(iv.role, tableX + colWidths[0] + colWidths[1] + colWidths[2] + 6, y + 4.5);

    doc.fillColor(colors.accent).font('Helvetica-Oblique').fontSize(7)
       .text(iv.shape, tableX + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] + 6, y + 4.5);

    y += rowH;
  });

  y += 16;

  // 7 Modes Matrix Section
  doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(15)
     .text('The 7 Modes Quick-Reference Matrix', 36, y);

  y += 14;
  doc.fillColor(colors.gray).font('Helvetica').fontSize(8.5)
     .text('All 7 modes generated from the Major Scale ordered from Brightest to Darkest.', 36, y);

  y += 16;

  const modeColWidths = [65, 110, 80, 125, 143];
  doc.rect(tableX, y, 523, 20).fill(colors.primary);
  doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(8);
  doc.text('MODE', tableX + 6, y + 6);
  doc.text('INTERVAL FORMULA', tableX + modeColWidths[0] + 6, y + 6);
  doc.text('CHARACTERISTIC', tableX + modeColWidths[0] + modeColWidths[1] + 6, y + 6);
  doc.text('MOOD / FLAVOR', tableX + modeColWidths[0] + modeColWidths[1] + modeColWidths[2] + 6, y + 6);
  doc.text('FAMOUS ANTHEM EXAMPLE', tableX + modeColWidths[0] + modeColWidths[1] + modeColWidths[2] + modeColWidths[3] + 6, y + 6);

  y += 20;

  const modes = [
    { name: '1. Lydian', formula: '1 - 2 - 3 - #4 - 5 - 6 - 7', char: '#4 (Sharp 4th)', mood: 'Dreamy, celestial, sci-fi wonder', song: 'The Simpsons Theme, Joe Satriani' },
    { name: '2. Ionian (Major)', formula: '1 - 2 - 3 - 4 - 5 - 6 - 7', char: '3 & 7 (Natural Major)', mood: 'Bright, joyful, celebratory, resolved', song: 'Let It Be (Beatles)' },
    { name: '3. Mixolydian', formula: '1 - 2 - 3 - 4 - 5 - 6 - b7', char: 'b7 (Flat 7th)', mood: 'Classic rock drive, southern bluesy swagger', song: 'Sweet Child O\' Mine (GnR)' },
    { name: '4. Dorian', formula: '1 - 2 - b3 - 4 - 5 - 6 - b7', char: '6 (Major 6th)', mood: 'Smooth jazz-rock minor, funky, uplifting', song: 'Oye Como Va (Santana)' },
    { name: '5. Aeolian (Minor)', formula: '1 - 2 - b3 - 4 - 5 - b6 - b7', char: 'b6 (Flat 6th)', mood: 'Pure emotional sadness, dramatic, epic', song: 'Stairway to Heaven (Led Zep)' },
    { name: '6. Phrygian', formula: '1 - b2 - b3 - 4 - 5 - b6 - b7', char: 'b2 (Flat 2nd)', mood: 'Exotic, Spanish flamenco, heavy metal tension', song: 'Wherever I May Roam (Metallica)' },
    { name: '7. Locrian', formula: '1 - b2 - b3 - 4 - b5 - b6 - b7', char: 'b5 (Flat 5th)', mood: 'Darkest, unresolved, discordant tension', song: 'Army of Lovers, Judas Priest' }
  ];

  modes.forEach((m, idx) => {
    const bg = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
    doc.rect(tableX, y, 523, 22).fill(bg);
    doc.rect(tableX, y, 523, 22).strokeColor('#E2E8F0').lineWidth(0.5).stroke();

    doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(8)
       .text(m.name, tableX + 6, y + 6);

    doc.fillColor(colors.primary).font('Helvetica-Bold').fontSize(7.5)
       .text(m.formula, tableX + modeColWidths[0] + 6, y + 6);

    doc.fillColor(colors.accent).font('Helvetica-Bold').fontSize(7.5)
       .text(m.char, tableX + modeColWidths[0] + modeColWidths[1] + 6, y + 6);

    doc.fillColor(colors.dark).font('Helvetica').fontSize(7.5)
       .text(m.mood, tableX + modeColWidths[0] + modeColWidths[1] + modeColWidths[2] + 6, y + 6);

    doc.fillColor(colors.gray).font('Helvetica-Oblique').fontSize(7.5)
       .text(m.song, tableX + modeColWidths[0] + modeColWidths[1] + modeColWidths[2] + modeColWidths[3] + 6, y + 6);

    y += 22;
  });


  // ==========================================
  // PAGE 3: THE 5 PENTATONIC BOXES & SOLO ENGINE
  // ==========================================
  doc.addPage();
  drawHeader('3. Pentatonic & Soloing System', 3);

  y = 92;
  doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(15)
     .text('The 5 Essential Pentatonic & Blues Box Shapes', 36, y);

  y += 16;
  doc.fillColor(colors.gray).font('Helvetica').fontSize(8.5)
     .text('Connect these 5 interlocking CAGED boxes across the neck to unlock continuous fretboard flow in any key.', 36, y);

  y += 20;

  // Draw 5 Pentatonic Box Visualizers
  const boxWidth = 98;
  const boxHeight = 160;
  const boxGap = 8.5;

  const boxes = [
    { num: 'Box 1', name: 'Root on 6th String', caged: 'E-Shape Root', desc: 'The most popular soloing box. Root note on Strings 6 & 1.' },
    { num: 'Box 2', name: 'The Extension Box', caged: 'D-Shape Root', desc: 'The "B.B. King" box. Sweet bends on strings 1, 2, and 3.' },
    { num: 'Box 3', name: 'The Middle Bridge', caged: 'C-Shape Root', desc: 'Connects upper and lower registers across strings 5 to 3.' },
    { num: 'Box 4', name: 'Root on 5th String', caged: 'A-Shape Root', desc: 'Second home base. Root note on String 5 & String 2.' },
    { num: 'Box 5', name: 'The Low Anchor', caged: 'G-Shape Root', desc: 'Heavy bass riffing box. Connects back into Box 1.' }
  ];

  boxes.forEach((bx, bIdx) => {
    const startX = 36 + bIdx * (boxWidth + boxGap);
    const startY = y;

    // Card boundary
    doc.rect(startX, startY, boxWidth, boxHeight).fill('#F8FAFC');
    doc.rect(startX, startY, boxWidth, boxHeight).strokeColor('#CBD5E1').lineWidth(0.75).stroke();

    // Box Title
    doc.rect(startX, startY, boxWidth, 22).fill(colors.primary);
    doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(9)
       .text(bx.num.toUpperCase(), startX, startY + 6, { width: boxWidth, align: 'center' });

    doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(7.5)
       .text(bx.caged, startX + 4, startY + 28, { width: boxWidth - 8, align: 'center' });

    // Mini Fretboard Grid (5 frets, 6 strings)
    const gridX = startX + 10;
    const gridY = startY + 44;
    const gridW = boxWidth - 20;
    const gridH = 65;
    const strStep = gridH / 5;
    const frStep = gridW / 4;

    doc.rect(gridX, gridY, gridW, gridH).fill('#FFFFFF');
    doc.rect(gridX, gridY, gridW, gridH).strokeColor('#CBD5E1').lineWidth(0.5).stroke();

    // 4 frets
    for (let f = 1; f < 4; f++) {
      doc.moveTo(gridX + f * frStep, gridY).lineTo(gridX + f * frStep, gridY + gridH).strokeColor('#E2E8F0').lineWidth(0.5).stroke();
    }
    // 6 strings
    for (let s = 0; s < 6; s++) {
      doc.moveTo(gridX, gridY + s * strStep).lineTo(gridX + gridW, gridY + s * strStep).strokeColor('#94A3B8').lineWidth(0.5).stroke();
    }

    // Draw Box Characteristic Fingerings (Dots)
    const sampleDots = [
      // Box 1
      [[0, 0], [0, 3], [1, 0], [1, 2], [2, 0], [2, 2], [3, 0], [3, 2], [4, 0], [4, 3], [5, 0], [5, 3]],
      // Box 2
      [[0, 1], [0, 3], [1, 0], [1, 3], [2, 0], [2, 2], [3, 0], [3, 2], [4, 1], [4, 3], [5, 1], [5, 3]],
      // Box 3
      [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 3], [3, 0], [3, 2], [4, 0], [4, 3], [5, 0], [5, 2]],
      // Box 4
      [[0, 0], [0, 2], [1, 0], [1, 3], [2, 0], [2, 2], [3, 0], [3, 2], [4, 1], [4, 3], [5, 0], [5, 2]],
      // Box 5
      [[0, 1], [0, 3], [1, 1], [1, 3], [2, 0], [2, 3], [3, 0], [3, 2], [4, 0], [4, 2], [5, 1], [5, 3]]
    ];

    sampleDots[bIdx].forEach(([s, f]) => {
      const dx = gridX + (f + 0.5) * frStep;
      const dy = gridY + s * strStep;
      const isRoot = (bIdx === 0 && (s === 0 || s === 5 || (s === 3 && f === 2))) ||
                     (bIdx === 3 && (s === 1 || s === 4));

      doc.circle(dx, dy, isRoot ? 3.5 : 2.5).fill(isRoot ? colors.root : colors.primary);
    });

    // Box Description
    doc.fillColor(colors.gray).font('Helvetica').fontSize(6.8)
       .text(bx.desc, startX + 6, startY + 115, { width: boxWidth - 12, lineGap: 1.5, align: 'center' });
  });

  y += boxHeight + 20;

  // The Blue Note Secret Section
  doc.rect(36, y, 523.28, 70).fill('#F0F9FF');
  doc.rect(36, y, 523.28, 70).strokeColor('#BAE6FD').lineWidth(1).stroke();

  doc.fillColor(colors.blueNote).font('Helvetica-Bold').fontSize(11)
     .text('THE BLUES NOTE (b5) SECRET WEAPON', 48, y + 10);

  doc.fillColor(colors.dark).font('Helvetica').fontSize(8.5)
     .text('To convert any Minor Pentatonic scale into the authentic Blues Scale, add the diminished 5th (b5) between the 4th and 5th degrees. In Box 1, it sits at Fret 6 on String 5 (A string) and Fret 8 on String 3 (G string). Bend this note by a 1/4 or 1/2 step for instant blues emotion and tension.', 48, y + 26, { width: 499, lineGap: 2 });

  y += 88;

  // Online Companion Banner
  doc.rect(36, y, 523.28, 88).fill(colors.primary);

  doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(12)
     .text('LISTEN, INTERACT & PRACTICE IN REAL-TIME ONLINE', 48, y + 14);

  doc.fillColor('#BFDBFE').font('Helvetica').fontSize(8.5)
     .text('All fretboard patterns, scales, and audio soundfonts in this cheat sheet are interactive on MusicScene:', 48, y + 32);

  const links = [
    '• Interactive Fretboard Trainer & Speed Quiz: musicscene.com.au/lessons/practice/fretboard-trainer/',
    '• 12-Bar Blues & Chord Progression Jam Station: musicscene.com.au/lessons/practice/progression-player/',
    '• Interactive AlphaTab Guitar Tablature & Scales: musicscene.com.au/lessons/theory/scales/'
  ];

  links.forEach((link, lIdx) => {
    doc.fillColor(colors.white).font('Helvetica-Bold').fontSize(7.8)
       .text(link, 48, y + 46 + lIdx * 12);
  });

  // Finalize PDF
  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      console.log(`Generated printable PDF at: ${outputPath}`);
      const stats = fs.statSync(outputPath);
      console.log(`File size: ${(stats.size / 1024).toFixed(1)} KB`);
      resolve(outputPath);
    });
    stream.on('error', reject);
  });
}

generateGuitarPDF().catch(console.error);
