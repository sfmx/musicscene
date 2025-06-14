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

// Create a client-only component that will handle the VexTab rendering
const ExerciseRendererVexTab = ({ exercise, width = 900, height = 350 }: ExerciseRendererProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will only run in the client
    const renderExercise = async () => {
      if (!containerRef.current) return;
      
      // Clear previous renders
      containerRef.current.innerHTML = '';
      
      try {
        // Dynamically import VexFlow and VexTab
        const VexFlow = await import('vexflow');
        const VexTabModule = await import('vextab');
        const VexTab = VexTabModule.VexTab;
        const Artist = VexTabModule.Artist;
        
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
        
      } catch (error) {
        console.error("Error rendering exercise:", error);
        if (containerRef.current) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          containerRef.current.innerHTML = `<div class="error">Error rendering exercise: ${errorMessage}</div>`;
        }
      }
    };
    
    renderExercise();
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
};

export default ExerciseRendererVexTab;
        
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
    };
    
    renderExercise();
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
};

export default ExerciseRendererVexTab;
      
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
