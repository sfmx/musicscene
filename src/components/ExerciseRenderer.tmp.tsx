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
      
      // Filter out empty measures to focus only on measures with content
      const nonEmptyMeasures = exercise.measures.filter(measure => measure.positions.length > 0);
      if (nonEmptyMeasures.length === 0) return;
      
      // Create VexFlow renderer directly
      const renderer = new VexFlow.Renderer(
        containerRef.current,
        VexFlow.Renderer.Backends.SVG
      );
      
      // Calculate optimal measures per line based on available width
      const minMeasureWidth = 120;
      const idealMeasuresPerLine = Math.max(1, Math.floor((availableWidth - 40) / minMeasureWidth));
      const measuresPerLine = Math.min(idealMeasuresPerLine, 4); // Maximum 4 measures per line
      
      // Group measures into lines
      const measureLines: ExerciseMeasure[][] = [];
      for (let i = 0; i < nonEmptyMeasures.length; i += measuresPerLine) {
        measureLines.push(nonEmptyMeasures.slice(i, i + measuresPerLine));
      }

      // Calculate more compact height
      const lineHeight = 160; // More compact line height
      const systemHeight = measureLines.length * lineHeight + 30;
      renderer.resize(availableWidth, Math.max(height, systemHeight));
      
      const context = renderer.getContext();
      context.setFont('Arial', 10);
      
      // Process each line of measures
      measureLines.forEach((measureLine, lineIndex) => {
        // Set vertical position for this line
        const lineY = lineIndex * lineHeight;
        
        // Calculate width for this line based on number of measures
        const measureWidth = Math.min(250, (availableWidth - 40) / measureLine.length);
        const lineWidth = measureLine.length * measureWidth;
        
        // Create notation stave for standard notation
        const stave = new VexFlow.Stave(10, lineY + 30, lineWidth);
        if (lineIndex === 0) {
          stave.addClef('treble').addTimeSignature(measureLine[0].timeSignature || '4/4');
        }
        stave.setContext(context).draw();
        
        // Create tablature stave - closer to standard stave for tighter layout
        const tabStave = new VexFlow.TabStave(10, lineY + 100, lineWidth);
        if (lineIndex === 0) {
          tabStave.addTabGlyph();
        }
        tabStave.setContext(context).draw();
        
        // Connect staves with a brace and bar lines
        const connector = new VexFlow.StaveConnector(stave, tabStave);
        connector.setType(VexFlow.StaveConnector.type.BRACE);
        connector.setContext(context).draw();
        
        // Add bar lines for multiple measures
        if (measureLine.length > 1) {
          for (let i = 1; i < measureLine.length; i++) {
            const barX = 10 + (i * measureWidth);
            
            // Draw bar lines between measures
            context.beginPath();
            context.moveTo(barX, lineY + 30);
            context.lineTo(barX, lineY + 30 + stave.getHeight());
            context.stroke();
            
            context.beginPath();
            context.moveTo(barX, lineY + 100);
            context.lineTo(barX, lineY + 100 + tabStave.getHeight());
            context.stroke();
          }
        }
        
        // Process each measure in this line
        measureLine.forEach((measure, measureIndex) => {
          // Skip empty measures
          if (measure.positions.length === 0) return;
          
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
            
            // Add left hand fingering if provided (smaller font for compact layout)
            if (pos.finger) {
              note.addModifier(
                new VexFlow.Annotation(pos.finger.toString())
                  .setVerticalJustification(1) // Position above note
                  .setFont('Arial', 8) // Smaller font
              );
            }
            
            notesInMeasure.push(note);
            
            // Create tab note
            const tabNote = new VexFlow.TabNote({
              positions: [{ str: vexString, fret: pos.fret }],
              duration: '8'
            });
            
            // Add right hand fingering if provided (smaller font)
            if (pos.rightHand) {
              tabNote.addModifier(
                new VexFlow.Annotation(pos.rightHand)
                  .setVerticalJustification(3) // Below note
                  .setFont('Times', 9) // Smaller font
              );
            }
            
            tabNotesInMeasure.push(tabNote);
          });
          
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
          
          // Format both voices with compact spacing
          const formatter = new VexFlow.Formatter();
          formatter.joinVoices([voice]);
          formatter.joinVoices([tabVoice]);
          
          // Calculate available width for this measure
          const justifyWidth = measureWidth - 20;
          formatter.format([voice, tabVoice], justifyWidth);
          
          // Calculate position for this measure
          const xOffset = 10 + (measureIndex * measureWidth);
          
          // Draw the voices
          voice.draw(context, stave, { x_shift: xOffset - 10 });
          tabVoice.draw(context, tabStave, { x_shift: xOffset - 10 });
          
          // Create beams for standard notation
          if (notesInMeasure.length > 1) {
            try {
              // Use beam groups from data if available, otherwise create groups of 4
              const beamGroups = measure.beamGroups || [];
              
              if (beamGroups.length > 0) {
                // Use defined beam groups
                beamGroups.forEach(group => {
                  if (group.length > 1) {
                    const beamNotes = group.map(noteIndex => notesInMeasure[noteIndex]).filter(Boolean);
                    if (beamNotes.length > 1) {
                      const beam = new VexFlow.Beam(beamNotes);
                      beam.setContext(context).draw();
                    }
                  }
                });
              } else {
                // Default beaming in groups of 4 (or less at the end)
                for (let i = 0; i < notesInMeasure.length; i += 4) {
                  const beamNotes = notesInMeasure.slice(i, Math.min(i + 4, notesInMeasure.length));
                  if (beamNotes.length > 1) {
                    const beam = new VexFlow.Beam(beamNotes);
                    beam.setContext(context).draw();
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
          justifyContent: 'center'
        }}
      ></div>
    </div>
  );
}
