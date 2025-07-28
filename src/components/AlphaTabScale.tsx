import React, { useEffect, useRef, useState } from 'react';

/**
 * AlphaTab Scale Renderer Component
 * A React interface for the AlphaTab music notation library
 * Renders musical scales in standard notation format
 */

interface AlphaTabScaleProps {
  scaleName: string;
  notes: string;
  className?: string;
}

// Helper function to convert scale notes to proper AlphaTex notation
function scaleToAlphaTex(scaleName: string, notes: string): string {
  // Use the exact same simple AlphaTex that works in MinimalAlphaTab
  // Don't get fancy until basic rendering is working
  const simpleExample = `3.3 3.3 5.3 5.3 |`;

  console.log(`[scaleToAlphaTex] Creating simple example for ${scaleName}`);
  return simpleExample;
}

const AlphaTabScale: React.FC<AlphaTabScaleProps> = ({ 
  scaleName, 
  notes, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [alphaTabLoaded, setAlphaTabLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeAlphaTab = async () => {
      if (!containerRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Dynamic import of AlphaTab
        const alphaTab = await import('@coderline/alphatab');
        
        if (!isMounted) return;

        // Clear any previous content
        // Clear container and set explicit dimensions
        containerRef.current.innerHTML = '';
        containerRef.current.style.width = '400px';
        containerRef.current.style.height = '200px';

        // Generate AlphaTex notation
        const alphaTex = scaleToAlphaTex(scaleName, notes);
        console.log(`[AlphaTabScale] Generated AlphaTex for "${scaleName}":`, alphaTex);

        // AlphaTab settings - simplified for reliability with correct font path
        const settings: any = {
          core: {
            useWorkers: false,
            fontDirectory: '/alphatab/font/'
          }
        };

        console.log(`[AlphaTabScale] Initializing API for "${scaleName}" with settings:`, settings);
        // Initialize AlphaTab API
        const api = new alphaTab.AlphaTabApi(containerRef.current, settings);
        console.log(`[AlphaTabScale] API created for "${scaleName}":`, api);
        apiRef.current = api;

        // Set up event handlers
        api.renderStarted.on(() => {
          console.log(`[AlphaTabScale] Render STARTED for "${scaleName}"`);
          if (isMounted) {
            setIsLoading(true);
          }
        });

        api.renderFinished.on(() => {
          console.log(`[AlphaTabScale] Render FINISHED for "${scaleName}"`);
          if (isMounted) {
            setIsLoading(false);
            setAlphaTabLoaded(true);
          }
        });

        api.error.on((error: any) => {
          console.error(`[AlphaTabScale] ERROR for "${scaleName}":`, error);
          if (isMounted) {
            setError(`Rendering error: ${error.message || error}`);
            setIsLoading(false);
          }
        });

        // Load the AlphaTex content
        console.log(`[AlphaTabScale] Loading AlphaTex for "${scaleName}"`);
        api.tex(alphaTex);

        // Force render after a delay if needed (similar to working MinimalAlphaTab)
        setTimeout(() => {
          console.log(`[AlphaTabScale] Forcing render check for "${scaleName}"`);
          if (isMounted) {
            try {
              api.render();
            } catch (e) {
              console.warn(`[AlphaTabScale] Force render failed for "${scaleName}":`, e);
            }
          }
        }, 2000);

      } catch (err) {
        console.error('AlphaTab initialization error:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to initialize AlphaTab');
          setIsLoading(false);
        }
      }
    };

    initializeAlphaTab();

    // Cleanup function
    return () => {
      isMounted = false;
      if (apiRef.current) {
        try {
          // Clean up AlphaTab API
          apiRef.current.destroy?.();
        } catch (e) {
          console.warn('AlphaTab cleanup warning:', e);
        }
        apiRef.current = null;
      }
    };
  }, [scaleName, notes]);

  // Loading state
  if (isLoading && !error) {
    return (
      <div className={`alphatab-scale-container ${className}`}>
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded border">
          <div className="text-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <div className="text-sm text-gray-600">Rendering {scaleName}...</div>
          </div>
        </div>
      </div>
    );
  }

  // Error state with fallback
  if (error) {
    return (
      <div className={`alphatab-scale-container ${className}`}>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
          <div className="text-sm text-gray-800 font-medium mb-2">{scaleName}</div>
          <div className="text-sm text-gray-600 font-mono mb-2">{notes}</div>
          <div className="text-xs text-amber-600">Music notation temporarily unavailable</div>
        </div>
      </div>
    );
  }

  // Main render with AlphaTab container
  return (
    <div className={`alphatab-scale-container ${className}`}>
      <div 
        ref={containerRef}
        className="alphatab-scale w-full bg-white rounded border min-h-[120px]"
        style={{
          // Ensure container has proper dimensions for AlphaTab
          minHeight: '120px',
          width: '100%',
          position: 'relative'
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
          <div className="text-sm text-gray-500">Loading notation for {scaleName}...</div>
        </div>
      )}
    </div>
  );
};

export default AlphaTabScale;
