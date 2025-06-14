"use client";

import React, { useEffect, useRef } from 'react';
import * as VexFlow from 'vexflow';
import { VexTab, Artist } from 'vextab';

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

export default function ExerciseRenderer({ exercise, width = 900, height = 350 }: ExerciseRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous renders
    containerRef.current.innerHTML = '';
    
    try {
      // Get container dimensions
      const containerWidth = containerRef.current.clientWidth || width;
      const availableWidth = Math.min(containerWidth, width);
      
      // Filter out empty measures to focus only on measures with content
      const nonEmptyMeasures = exercise.measures.filter(measure => measure.positions.length > 0);
      
      // Create VexFlow renderer
      const renderer = new VexFlow.Renderer(
        containerRef.current,
        VexFlow.Renderer.Backends.SVG
      );
      
      // Set up renderer sizing
      renderer.resize(availableWidth, height);
      
      // Initialize VexTab artist
      // Use a smaller scale and better padding for compact layout
      const artist = new Artist(10, 10, availableWidth - 20, { scale: 0.85 });
      const vextab = new VexTab(artist);
      
      // Generate VexTab notation from exercise data
      const vextabCode = generateVexTabCode(nonEmptyMeasures);
      
      // Parse and render VexTab code
      vextab.parse(vextabCode);
      artist.render(renderer);
      
    } catch (error: unknown) {
      console.error("Error rendering exercise:", error);
      if (containerRef.current) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        containerRef.current.innerHTML = `<div class="error">Error rendering exercise: ${errorMessage}</div>`;
      }
    }
  }, [exercise, width, height]);

  // Function to convert our exercise data to VexTab notation
  function generateVexTabCode(measures: ExerciseMeasure[]): string {
    let vextabCode = '';
    
    // Set up global options
    vextabCode += 'options space=15 scale=0.85\n';
    
    // Get time signature from first measure
    const timeSignature = measures[0]?.timeSignature || '4/4';
    
    // Start with a tabstave that has notation
    vextabCode += `tabstave notation=true time=${timeSignature} key=A\n`;
    
    // Track the number of measures per stave
    let measuresInCurrentStave = 0;
    const maxMeasuresPerStave = 4; // Maximum measures per stave
    
    // Process each measure
    measures.forEach((measure, measureIndex) => {
      // If we've reached the maximum measures per stave, add a new tabstave
      if (measuresInCurrentStave >= maxMeasuresPerStave) {
        vextabCode += '\ntabstave notation=true\n';
        measuresInCurrentStave = 0;
      }
      
      // Start a notes section if this is the first measure in stave
      if (measuresInCurrentStave === 0) {
        vextabCode += 'notes ';
      }
      
      // Add bar line if not the first measure in stave
      if (measuresInCurrentStave > 0) {
        vextabCode += ' | ';
      }
      
      // Process positions/notes in this measure
      const notesInMeasure: string[] = [];
      
      // If beamGroups is defined, use it to organize notes
      if (measure.beamGroups && measure.beamGroups.length > 0) {
        // Process each beam group
        measure.beamGroups.forEach(group => {
          const groupNotes: string[] = [];
          
          // Add each note in the group
          group.forEach(noteIndex => {
            if (noteIndex < measure.positions.length) {
              const pos = measure.positions[noteIndex];
              
              // Format: fret/string
              // In VexTab, strings are 1 (high E) to 6 (low E), which is our format already
              let noteStr = `${pos.fret}/${pos.string}`;
              
              // Add fingering annotation if available
              if (pos.finger) {
                noteStr += `^${pos.finger}^`;
              }
              
              // Add right hand fingering if available
              if (pos.rightHand) {
                noteStr += `<${pos.rightHand}>`;
              }
              
              groupNotes.push(noteStr);
            }
          });
          
          // Add beamed notes as a group
          if (groupNotes.length > 0) {
            notesInMeasure.push(`:8 ${groupNotes.join('-')}`);
          }
        });
      } else {
        // No beam groups defined, create default grouping
        // Group notes in pairs (typical for 8th notes in 4/4)
        for (let i = 0; i < measure.positions.length; i += 2) {
          const groupNotes: string[] = [];
          
          // Add up to 2 notes in this group
          for (let j = 0; j < 2 && i + j < measure.positions.length; j++) {
            const pos = measure.positions[i + j];
            
            // Format note
            let noteStr = `${pos.fret}/${pos.string}`;
            
            // Add fingering annotation if available
            if (pos.finger) {
              noteStr += `^${pos.finger}^`;
            }
            
            // Add right hand fingering if available
            if (pos.rightHand) {
              noteStr += `<${pos.rightHand}>`;
            }
            
            groupNotes.push(noteStr);
          }
          
          // Add beamed notes as a group
          if (groupNotes.length > 0) {
            if (groupNotes.length === 1) {
              // Single note doesn't need a beam
              notesInMeasure.push(`:8 ${groupNotes[0]}`);
            } else {
              // Multiple notes get beamed together
              notesInMeasure.push(`:8 ${groupNotes.join('-')}`);
            }
          }
        }
      }
      
      // Add all notes from this measure to the vextab code
      vextabCode += notesInMeasure.join(' ');
      
      // Increment the measure counter
      measuresInCurrentStave++;
    });
    
    return vextabCode;
  }

  return (
    <div className="exercise-container">
      <h3>{exercise.title}</h3>
      {exercise.description && <p>{exercise.description}</p>}
      {exercise.bpm && <p>Tempo: {exercise.bpm} BPM</p>}
      <div 
        ref={containerRef} 
        className="notation-container"
        style={{
          width: '100%',
          maxWidth: `${width}px`,
          height: 'auto',
          minHeight: '200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto', // Add horizontal scrolling for very small screens
        }}
      ></div>
    </div>
  );
}
      
      // Calculate measure width to fit screen
      const baseWidth = 135; // More compact base width for each measure (reduced from 200)
      let measuresPerLine = 4; // Default measures per line
      
      // Adjust measures per line to avoid scroll bars
      if (nonEmptyMeasures.length <= 4) {
        // For 4 or fewer measures, fit them all on one line if possible
        measuresPerLine = nonEmptyMeasures.length;
      } else {
        // Otherwise calculate based on available width
        measuresPerLine = Math.max(1, Math.floor(availableWidth / baseWidth));
      }
      
      // Calculate adjusted measure width - use full available width
      const measureWidth = Math.min(250, (availableWidth - 20) / measuresPerLine);
      
      // Group measures into lines
      const measureLines: ExerciseMeasure[][] = [];
      for (let i = 0; i < nonEmptyMeasures.length; i += measuresPerLine) {
        measureLines.push(nonEmptyMeasures.slice(i, i + measuresPerLine));
      }
      
      // Calculate required height with more compact line height
      const lineHeight = 160; // More compact line height (reduced from 200)
      const linesHeight = measureLines.length * lineHeight + 50; // Each line needs lineHeight + some padding
      const requiredHeight = Math.max(height, linesHeight);
      
      // Create VexFlow renderer
      const renderer = new VexFlow.Renderer(
        containerRef.current,
        VexFlow.Renderer.Backends.SVG
      );
      
      // Set size with the calculated height
      renderer.resize(availableWidth, requiredHeight);
      const context = renderer.getContext();
      context.setFont('Arial', 10);
      
      // Render each line of measures
      measureLines.forEach((measureLine, lineIndex) => {
        // Set vertical position for this line
        const lineY = lineIndex * lineHeight; // More compact space between lines
        
        // Calculate actual width for this line
        const lineWidth = measureLine.length * measureWidth;
            // Create notation stave
        const stave = new VexFlow.Stave(10, lineY + 30, lineWidth);
        if (lineIndex === 0) {
          stave.addClef('treble').addTimeSignature(measureLine[0].timeSignature || '4/4');
        }
        
        // Add measure numbers to the first measure of each line for better navigation
        if (lineIndex > 0) {
          // Calculate the first measure number on this line
          const firstMeasureNumber = lineIndex * measuresPerLine + 1;
          stave.setMeasure(firstMeasureNumber);
        }
        
        // Create tablature stave with more compact vertical spacing
        const tabStave = new VexFlow.TabStave(10, lineY + 110, lineWidth);
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
            context.moveTo(barX, lineY + 30);
            context.lineTo(barX, lineY + 30 + stave.getHeight());
            context.stroke();
            
            context.beginPath();
            context.moveTo(barX, lineY + 110);
            context.lineTo(barX, lineY + 110 + tabStave.getHeight());
            context.stroke();
          }
        }
        
        // Process notes for each measure in this line
        const allNotesForMeasures: VexFlow.StaveNote[][] = [];
        const allTabNotesForMeasures: VexFlow.TabNote[][] = [];
        
        // Generate notes for each measure
        measureLine.forEach((measure) => {
          const notesInMeasure: VexFlow.StaveNote[] = [];
          const tabNotesInMeasure: VexFlow.TabNote[] = [];
          
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
            
            // Add left hand fingering with smaller size for cleaner look
            if (pos.finger) {
              note.addModifier(new VexFlow.Annotation(pos.finger.toString())
                .setVerticalJustification(1) // Position above note
                .setFont('Arial', 8)); // Smaller font size
            }
            
            notesInMeasure.push(note);
            
            // Create tab note
            const tabNote = new VexFlow.TabNote({
              positions: [{ str: vexString, fret: pos.fret }],
              duration: '8'
            });
            
            // Add right hand fingering with smaller size for cleaner look
            if (pos.rightHand) {
              tabNote.addModifier(
                new VexFlow.Annotation(pos.rightHand)
                  .setVerticalJustification(3) // Below note
                  .setFont('Times', 9) // Smaller font size
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
          
          // Use proper spacing with more room for the formatter
          const availableMeasureWidth = measureWidth - 15;          // Determine note spacing based on the number of notes
          let noteSpacing = 12; // Default spacing
          
          // Adjust spacing based on note count to prevent crowding
          if (notesInMeasure.length > 6) {
            // For many notes, use tighter spacing
            noteSpacing = 10;
          } else if (notesInMeasure.length <= 3) {
            // For few notes, use wider spacing
            noteSpacing = 20;
          }
          
          // In VexFlow 5.0.0, we can't pass noteSpacing directly
          // Adjust the available width instead based on note count
          let adjustedWidth = availableMeasureWidth;
          if (notesInMeasure.length > 6) {
            // For many notes, give more space
            adjustedWidth = Math.min(availableMeasureWidth * 1.1, measureWidth - 5);
          } else if (notesInMeasure.length <= 3) {
            // For few notes, reduce width to bring them closer
            adjustedWidth = availableMeasureWidth * 0.8;
          }
          
          formatter.format([voice, tabVoice], adjustedWidth);
          
          // Calculate offsets for each measure
          const staveXOffset = measureIndex * measureWidth;
          
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
      
    } catch (error: unknown) {
      console.error("Error rendering exercise:", error);
      if (containerRef.current) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        containerRef.current.innerHTML = `<div class="error">Error rendering exercise: ${errorMessage}</div>`;
      }
    }
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
      <h3>{exercise.title}</h3>
      {exercise.description && <p>{exercise.description}</p>}
      {exercise.bpm && <p>Tempo: {exercise.bpm} BPM</p>}
      <div 
        ref={containerRef} 
        className="notation-container"
        style={{
          width: '100%',
          maxWidth: `${width}px`,
          height: 'auto',
          minHeight: '200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto', // Add horizontal scrolling for very small screens
        }}
      ></div>
    </div>
  );
}
