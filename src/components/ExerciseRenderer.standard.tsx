"use client";

import React, { useEffect, useRef } from 'react';
import * as VexFlow from 'vexflow';

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
      
      // Calculate measure width to fit screen
      const baseWidth = 200; // Base width for each measure
      let measuresPerLine = 4; // Default measures per line
      
      // Adjust measures per line to avoid scroll bars
      if (exercise.measures.length <= 4) {
        // For 4 or fewer measures, fit them all on one line if possible
        measuresPerLine = exercise.measures.length;
      } else {
        // Otherwise calculate based on available width
        measuresPerLine = Math.max(1, Math.floor(availableWidth / baseWidth));
      }
      
      // Calculate adjusted measure width - use full available width
      const measureWidth = (availableWidth - 20) / measuresPerLine;
      
      // Group measures into lines
      const measureLines: ExerciseMeasure[][] = [];
      for (let i = 0; i < exercise.measures.length; i += measuresPerLine) {
        measureLines.push(exercise.measures.slice(i, i + measuresPerLine));
      }
      
      // Calculate required height
      const linesHeight = measureLines.length * 200 + 50; // Each line needs 200px + some padding
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
        const lineY = lineIndex * 200; // Space between lines
        
        // Calculate actual width for this line
        const lineWidth = measureLine.length * measureWidth;
        
        // Create notation stave
        const stave = new VexFlow.Stave(10, lineY + 40, lineWidth);
        if (lineIndex === 0) {
          stave.addClef('treble').addTimeSignature(measureLine[0].timeSignature || '4/4');
        }
        
        // Create tablature stave with increased vertical spacing
        const tabStave = new VexFlow.TabStave(10, lineY + 140, lineWidth);
        if (lineIndex === 0) {
          tabStave.addTabGlyph();
        }
        
        // Draw the staves
        stave.setContext(context).draw();
        tabStave.setContext(context).draw();
        
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
            
            // Add left hand fingering if provided
            if (pos.finger) {
              note.addModifier(new VexFlow.Annotation(pos.finger.toString())
                .setVerticalJustification(1)); // Position above note
            }
            
            notesInMeasure.push(note);
            
            // Create tab note
            const tabNote = new VexFlow.TabNote({
              positions: [{ str: vexString, fret: pos.fret }],
              duration: '8'
            });
            
            // Add right hand fingering if provided
            if (pos.rightHand) {
              tabNote.addModifier(
                new VexFlow.Annotation(pos.rightHand)
                  .setVerticalJustification(3) // Below note
                  .setFont('Times', 12)
              );
            }
            
            tabNotesInMeasure.push(tabNote);
          });
          
          allNotesForMeasures.push(notesInMeasure);
          allTabNotesForMeasures.push(tabNotesInMeasure);
        });
        
        // Create voices and format each measure
        measureLine.forEach((_, measureIndex) => {
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
          
          // Use standard Vexflow formatting without custom positioning
          const availableMeasureWidth = measureWidth - 20;
          formatter.format([voice, tabVoice], availableMeasureWidth);
          
          // Draw the voices
          const staveXOffset = measureIndex * measureWidth;
          const staveForMeasure = new VexFlow.Stave(10 + staveXOffset, lineY + 40, measureWidth);
          const tabStaveForMeasure = new VexFlow.TabStave(10 + staveXOffset, lineY + 140, measureWidth);
          
          if (measureIndex > 0) {
            // Don't add clef/time signature for middle measures
            staveForMeasure.setContext(context).draw();
            tabStaveForMeasure.setContext(context).draw();
          }
          
          voice.draw(context, stave);
          tabVoice.draw(context, tabStave);
          
          // Create beams for standard notation (groups of up to 4 notes)
          if (notesInMeasure.length > 1) {
            try {
              // Create beams in groups of 4 (or less at the end)
              for (let i = 0; i < notesInMeasure.length; i += 4) {
                const beamNotes = notesInMeasure.slice(i, Math.min(i + 4, notesInMeasure.length));
                if (beamNotes.length > 1) {
                  const beam = new VexFlow.Beam(beamNotes);
                  beam.setContext(context).draw();
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
          justifyContent: 'center'
        }}
      ></div>
    </div>
  );
}
