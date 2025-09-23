"use client";

import React, { useEffect, useRef } from 'react';

// Import interfaces
export interface ExercisePosition {
  string: number;
  fret: number;
  finger?: number;
  rightHand?: 'p' | 'i' | 'm' | 'a' | 'c'; // Classical guitar right-hand fingering
}

export interface ExerciseMeasure {
  positions: ExercisePosition[];
  beamGroups?: number[][];
  timeSignature?: string;
  clef?: 'treble';
}

export interface ExerciseData {
  id: string;
  title: string;
  description?: string;
  measures: ExerciseMeasure[];
  bpm?: number;
}

interface ExerciseRendererProps {
  exercise: ExerciseData;
  width?: number;
  height?: number;
}

// Create a simplified component that uses the classic VexFlow approach
// but with the VexTab notation syntax translated from our data
const ExerciseRendererWithVexTabSyntax = ({ exercise, width = 900, height = 350 }: ExerciseRendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check if VexTabDiv is available (loaded by VexTabScriptLoader)
    if (typeof window !== 'undefined' && window.VexTabDiv) {
      // Clear previous renders
      containerRef.current.innerHTML = '';
      
      try {
        // Generate VexTab notation from exercise data
        const vextabCode = generateVexTabCode(exercise.measures);
        
        // Create a new div for VexTabDiv to render into
        const vexTabContainer = document.createElement('div');
        vexTabContainer.className = 'vex-tabdiv';
        vexTabContainer.setAttribute('width', width.toString());
        vexTabContainer.setAttribute('scale', '1.0');
        vexTabContainer.textContent = vextabCode;
        
        // Add to DOM
        containerRef.current.appendChild(vexTabContainer);
        
        // Trigger auto-render
        window.VexTabDiv.autoRender();
      } catch (error) {
        console.error("Error rendering exercise with VexTabDiv:", error);
        fallbackToVexFlowRenderer();
      }
    } else {
      // Fall back to VexFlow renderer if VexTabDiv is not available
      fallbackToVexFlowRenderer();
    }
    
    // Fallback renderer using VexFlow directly
    function fallbackToVexFlowRenderer() {
      // Dynamic import to ensure this only runs on the client
      import('vexflow').then(VexFlow => {
        // Clear previous renders
        if (!containerRef.current) return;
        containerRef.current.innerHTML = '';
        
        try {
          // Get container dimensions
          const containerWidth = containerRef.current.clientWidth || width;
          const availableWidth = Math.min(containerWidth, width);
          
          // Filter out empty measures to focus only on measures with content
          const nonEmptyMeasures = exercise.measures.filter(measure => measure.positions.length > 0);
          
          // Create renderer
          const renderer = new VexFlow.Renderer(
            containerRef.current,
            VexFlow.Renderer.Backends.SVG
          );
          // Set size with calculated height
        const lineHeight = 180; // Slightly increased line height for better spacing
        const measuresPerLine = availableWidth > 700 ? 4 : 2; // Responsive layout based on available width
        const measureLines = [];
        
        for (let i = 0; i < nonEmptyMeasures.length; i += measuresPerLine) {
          measureLines.push(nonEmptyMeasures.slice(i, i + measuresPerLine));
        }
        
        const requiredHeight = Math.max(height, measureLines.length * lineHeight + 50);
        renderer.resize(availableWidth, requiredHeight);
        
        const context = renderer.getContext();
        context.setFont('Arial', 10);
        
        // Render each line of measures
        measureLines.forEach((measureLine, lineIndex) => {
          // Set vertical position for this line
          const lineY = lineIndex * lineHeight;
            // Calculate actual width for this line - ensure adequate space for each measure
          const measureWidth = Math.min(280, (availableWidth - 40) / measureLine.length);
          const lineWidth = measureLine.length * measureWidth;
            // Create notation stave with proper positioning
          const staveY = lineY + 30;
          const stave = new VexFlow.Stave(10, staveY, lineWidth);
          
          // Add clef and time signature to first line only
          if (lineIndex === 0) {
            stave.addClef('treble').addTimeSignature(measureLine[0].timeSignature || '4/4');
          }
          
          // Add measure numbers for better navigation
          if (lineIndex > 0) {
            // Calculate the first measure number on this line
            const firstMeasureNumber = lineIndex * measuresPerLine + 1;
            stave.setMeasure(firstMeasureNumber);
          }
          
          // Create tablature stave with optimal spacing between notation and tab
          const tabStaveY = staveY + 85; // Adjusted spacing between notation and tab
          const tabStave = new VexFlow.TabStave(10, tabStaveY, lineWidth);
          
          if (lineIndex === 0) {
            tabStave.addTabGlyph();
          }
          
          // Draw the staves
          stave.setContext(context).draw();
          tabStave.setContext(context).draw();
            // Add bar lines for multiple measures
          if (measureLine.length > 1) {
            for (let i = 1; i < measureLine.length; i++) {
              const barX = 10 + (i * measureWidth);
              
              // Draw bar lines between measures for better visual separation
              context.beginPath();
              context.moveTo(barX, staveY);
              context.lineTo(barX, staveY + stave.getHeight());
              context.stroke();
              
              context.beginPath();
              context.moveTo(barX, tabStaveY);
              context.lineTo(barX, tabStaveY + tabStave.getHeight());
              context.stroke();
            }
          }
          
          // Process notes for each measure in this line
          const allNotesForMeasures: any[][] = [];
          const allTabNotesForMeasures: any[][] = [];
          
          // Generate notes for each measure using VexTab-style notation
          measureLine.forEach((measure) => {
            const notesInMeasure: any[] = [];
            const tabNotesInMeasure: any[] = [];
            
            // Process each position in the measure
            measure.positions.forEach(pos => {
              // Map string numbers (1=lowest in JSON, 6=lowest in VexFlow)
              const vexString = 7 - pos.string;
                // Create standard notation note
              const noteKey = getKeyForTabPosition(pos.string, pos.fret);
              const note = new VexFlow.StaveNote({ 
                keys: [noteKey], 
                duration: '8' // Eighth notes
              });
              
              // Add left hand fingering with improved style and positioning
              if (pos.finger) {
                note.addModifier(new VexFlow.Annotation(pos.finger.toString())
                  .setVerticalJustification(1) // Position above note
                  .setFont('Arial', 10) // Slightly larger for better visibility
                  .setWeight("bold") // Make the finger numbers bolder
                );
              }
              
              notesInMeasure.push(note);
              
              // Create tab note
              const tabNote = new VexFlow.TabNote({
                positions: [{ str: vexString, fret: pos.fret }],
                duration: '8'
              });
              
              // Add right hand fingering with improved style
              if (pos.rightHand) {
                tabNote.addModifier(
                  new VexFlow.Annotation(pos.rightHand)
                    .setVerticalJustification(3) // Below note
                    .setFont('Times', 10) // Slightly larger for visibility
                    .setItalic(true) // Make right hand fingerings italic for distinction
                );
              }
              
              tabNotesInMeasure.push(tabNote);
            });
            
            allNotesForMeasures.push(notesInMeasure);
            allTabNotesForMeasures.push(tabNotesInMeasure);
          });
          
          // Create voices and format each measure
          measureLine.forEach((measure, measureIndex) => {
            const notesInMeasure = allNotesForMeasures[measureIndex];
            const tabNotesInMeasure = allTabNotesForMeasures[measureIndex];
            
            if (notesInMeasure.length === 0) return;
            
            // Calculate beats for this measure (each eighth note is half a beat)
            const totalBeats = notesInMeasure.length * 0.5;
            
            // Create voice for standard notation
            const voice = new VexFlow.Voice({ 
              numBeats: totalBeats, 
              beatValue: 4
            }).setMode(VexFlow.Voice.Mode.SOFT);
            
            voice.addTickables(notesInMeasure);
            
            // Create voice for tab
            const tabVoice = new VexFlow.Voice({ 
              numBeats: totalBeats, 
              beatValue: 4
            }).setMode(VexFlow.Voice.Mode.SOFT);
            
            tabVoice.addTickables(tabNotesInMeasure);
            
            // Format both voices together
            const formatter = new VexFlow.Formatter();
            formatter.joinVoices([voice]);
            formatter.joinVoices([tabVoice]);
              // Adjust spacing based on the number of notes with improved algorithm
            const availableMeasureWidth = measureWidth - 25; // More padding for cleaner look
            let adjustedWidth = availableMeasureWidth;
            
            // Calculate optimal width based on note density
            if (notesInMeasure.length > 6) {
              // For many notes, give more space but maintain minimum spacing
              const minSpacing = 18; // Minimum pixels between notes
              const optimalWidth = Math.max(notesInMeasure.length * minSpacing, availableMeasureWidth);
              adjustedWidth = Math.min(optimalWidth, measureWidth - 10);
            } else if (notesInMeasure.length <= 3) {
              // For few notes, reduce width but ensure they're not too crowded
              adjustedWidth = Math.max(availableMeasureWidth * 0.85, notesInMeasure.length * 30);
            }
              // Format with options for better note spacing
            formatter.format([voice, tabVoice], adjustedWidth);
            
            // Draw the voices
            voice.draw(context, stave);
            tabVoice.draw(context, tabStave);
            
            // Create beams using custom beam groups if provided, otherwise use defaults
            if (notesInMeasure.length > 1) {
              try {
                if (measure.beamGroups && measure.beamGroups.length > 0) {
                  // Use the provided beam groups
                  measure.beamGroups.forEach(group => {
                    if (group.length > 1) {
                      // Check each index to ensure it's valid before including in beam
                      const beamNotes = group
                        .filter(idx => idx >= 0 && idx < notesInMeasure.length)
                        .map(idx => notesInMeasure[idx]);
                      
                      if (beamNotes.length > 1) {
                        const beam = new VexFlow.Beam(beamNotes);
                        beam.setContext(context).draw();
                      }
                    }
                  });
                } else {
                  // Create intelligent beams based on time signature
                  const timeSignature = measure.timeSignature || '4/4';
                  const [beatsPerMeasure] = timeSignature.split('/').map(Number);
                  
                  // For common time signatures, use appropriate groupings
                  if (beatsPerMeasure === 4) {
                    // Group eighth notes in pairs (2 per beat)
                    for (let i = 0; i < notesInMeasure.length; i += 2) {
                      const beamNotes = notesInMeasure.slice(i, Math.min(i + 2, notesInMeasure.length));
                      if (beamNotes.length > 1) {
                        const beam = new VexFlow.Beam(beamNotes);
                        beam.setContext(context).draw();
                      }
                    }
                  } else {
                    // Default to groups of 4 for other time signatures
                    for (let i = 0; i < notesInMeasure.length; i += 4) {
                      const beamNotes = notesInMeasure.slice(i, Math.min(i + 4, notesInMeasure.length));
                      if (beamNotes.length > 1) {
                        const beam = new VexFlow.Beam(beamNotes);
                        beam.setContext(context).draw();
                      }
                    }
                  }
                }
              } catch (e) {
                console.warn("Could not create or draw beam:", e);
              }
            }
          });
        });
      } catch (error) {
        console.error("Error rendering exercise:", error);
        if (containerRef.current) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          containerRef.current.innerHTML = `<div class="error">Error rendering exercise: ${errorMessage}</div>`;
        }
      }
    }).catch(err => {
      console.error("Error loading VexFlow:", err);
      if (containerRef.current) {
        containerRef.current.innerHTML = `<div class="error">Error loading VexFlow: ${err.message}</div>`;
      }
    });
  }, [exercise, width, height]);

  // Helper function to convert tab position to standard notation key
  function getKeyForTabPosition(string: number, fret: number): string {
    // Basic mapping (can be expanded for more accurate representation)
    const openStrings = ['e/4', 'b/3', 'g/3', 'd/3', 'a/2', 'e/2'];
    const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
    
    const stringIndex = string - 1;
    const openNote = openStrings[stringIndex].split('/');
    const baseNote = openNote[0];
    const baseOctave = parseInt(openNote[1]);
    
    // Find base note index
    const baseIndex = notes.indexOf(baseNote);
    
    // Calculate new note
    const newIndex = (baseIndex + fret) % 12;
    const octaveShift = Math.floor((baseIndex + fret) / 12);
    const newOctave = baseOctave + octaveShift;
    
    return `${notes[newIndex]}/${newOctave}`;
  }
  return (
    <div className="exercise-container">
      <h3 style={{ 
        fontSize: '1.4rem', 
        marginBottom: '8px',
        color: '#2563eb'
      }}>{exercise.title}</h3>
      {exercise.description && <p style={{ 
        fontSize: '1rem',
        color: '#4b5563',
        marginBottom: '12px'
      }}>{exercise.description}</p>}
      {exercise.bpm && <p style={{
        fontSize: '0.95rem',
        fontWeight: 500,
        color: '#374151',
        marginBottom: '16px'
      }}>Tempo: <span style={{ fontWeight: 'bold' }}>{exercise.bpm} BPM</span></p>}
      <div 
        ref={containerRef} 
        className="notation-container"
        style={{
          width: '100%',
          maxWidth: `${width}px`,
          height: 'auto',
          minHeight: '200px',
          margin: '0 auto',
          padding: '8px 0',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto', // Add horizontal scrolling for very small screens
          borderRadius: '6px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fcfcfc'
        }}
      ></div>
    </div>
  );
};

export default ExerciseRendererWithVexTabSyntax;
