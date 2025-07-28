import React, { useEffect, useRef, useState } from 'react';

/**
 * Simplified AlphaTab Scale - Copy of working MinimalAlphaTab but with props
 */

interface SimpleAlphaTabScaleProps {
  scaleName: string;
  notes: string;
}

const SimpleAlphaTabScale: React.FC<SimpleAlphaTabScaleProps> = ({ scaleName, notes }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Starting...');

  useEffect(() => {
    let isMounted = true;

    const test = async () => {
      try {
        setStatus(`Importing AlphaTab for ${scaleName}...`);
        const alphaTab = await import('@coderline/alphatab');
        
        if (!isMounted || !containerRef.current) return;
        setStatus(`AlphaTab imported for ${scaleName}`);

        // Ensure container has responsive dimensions for both notation and TAB
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = 'auto'; // Let AlphaTab determine height
        containerRef.current.style.minHeight = '200px'; // Minimum height for visibility
        containerRef.current.style.marginBottom = '10px';
        containerRef.current.innerHTML = '';

        setStatus(`Creating API for ${scaleName}...`);
        
        // Responsive AlphaTab settings with correct font path
        const api = new alphaTab.AlphaTabApi(containerRef.current, {
          core: { 
            useWorkers: false,
            fontDirectory: '/alphatab/font/'
          },
          display: {
            scale: 1.0, // Full scale for better readability
            stretchForce: 0.8 // Allow slight stretching for responsiveness
          },
          notation: {
            rhythmMode: 'hidden', // Hide rhythm stems in tablature
            notationMode: 'songbook' // Clean tablature style
          }
        });

        setStatus(`API created for ${scaleName}, setting up events...`);

        api.renderStarted.on(() => {
          console.log(`RENDER STARTED for ${scaleName}`);
          setStatus(`Rendering ${scaleName}...`);
        });

        api.renderFinished.on(() => {
          console.log(`RENDER FINISHED for ${scaleName}`);
          setStatus(`Render complete for ${scaleName}!`);
        });

        api.error.on((error: any) => {
          console.error(`RENDER ERROR for ${scaleName}:`, error);
          setStatus(`Error for ${scaleName}: ${error.message || error}`);
        });

        setStatus(`Loading tex for ${scaleName}...`);

        // Create proper scale-specific AlphaTex notation (stems hidden by rhythmMode)
        let simpleTex = `3.3 3.3 5.3 5.3 |`; // default notation
        
        if (scaleName.toLowerCase().includes('g major scale')) {
          // G major scale: G(3rd fret, 6th string) through G(5th fret, 4th string)
          simpleTex = `3.6 5.6 2.5 3.5 5.5 2.4 4.4 5.4 |`;
        } else if (scaleName.toLowerCase().includes('g major pentatonic') || scaleName.toLowerCase().includes('g pentatonic')) {
          // G major pentatonic scale
          simpleTex = `3.6 5.6 2.5 5.5 2.4 5.4 |`;
        }
        
        console.log(`Loading for ${scaleName}:`, simpleTex);
        api.tex(simpleTex);

        // Force render after a delay if needed
        setTimeout(() => {
          console.log(`Forcing render check for ${scaleName}...`);
          if (isMounted) {
            try {
              api.render();
            } catch (e) {
              console.warn(`Force render failed for ${scaleName}:`, e);
            }
          }
        }, 2000);

      } catch (err) {
        console.error(`Test error for ${scaleName}:`, err);
        setStatus(`Error for ${scaleName}: ${err}`);
      }
    };

    test();

    return () => {
      isMounted = false;
    };
  }, [scaleName, notes]);

  return (
    <div className="w-full mb-4">
      <div 
        ref={containerRef}
        className="alphatab-container bg-white border rounded overflow-hidden"
        style={{ minHeight: '250px', width: '100%' }} // Increased height for TAB visibility
      />
      {status !== 'Render complete!' && status.includes('Render complete') && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          rendered by alphaTab
        </div>
      )}
    </div>
  );
};

export default SimpleAlphaTabScale;
