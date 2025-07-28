import React, { useEffect, useRef, useState } from 'react';

/**
 * Minimal AlphaTab Test - Just try to render anything
 */

const MinimalAlphaTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Starting...');

  useEffect(() => {
    let isMounted = true;

    const test = async () => {
      try {
        setStatus('Importing AlphaTab...');
        const alphaTab = await import('@coderline/alphatab');
        
        if (!isMounted || !containerRef.current) return;
        setStatus('AlphaTab imported');

        // Ensure container has proper dimensions
        containerRef.current.style.width = '400px';
        containerRef.current.style.height = '200px';
        containerRef.current.innerHTML = '';

        setStatus('Creating API...');
        
        // Minimal settings with correct font path
        const api = new alphaTab.AlphaTabApi(containerRef.current, {
          core: { 
            useWorkers: false,
            fontDirectory: '/alphatab/font/'
          }
        });

        setStatus('API created, setting up events...');

        api.renderStarted.on(() => {
          console.log('RENDER STARTED');
          setStatus('Rendering...');
        });

        api.renderFinished.on(() => {
          console.log('RENDER FINISHED');
          setStatus('Render complete!');
        });

        api.error.on((error: any) => {
          console.error('RENDER ERROR:', error);
          setStatus(`Error: ${error.message || error}`);
        });

        setStatus('Loading tex...');

        // Super simple AlphaTex that should definitely work
        const simpleTex = `3.3 3.3 5.3 5.3 |`;
        
        console.log('Loading:', simpleTex);
        api.tex(simpleTex);

        // Force render after a delay if needed
        setTimeout(() => {
          console.log('Forcing render check...');
          if (isMounted) {
            try {
              api.render();
            } catch (e) {
              console.warn('Force render failed:', e);
            }
          }
        }, 2000);

      } catch (err) {
        console.error('Test error:', err);
        setStatus(`Error: ${err}`);
      }
    };

    test();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="p-4 border-2 border-red-500 rounded mb-4">
      <h3 className="font-bold text-red-600 mb-2">Minimal AlphaTab Test</h3>
      <div className="text-sm text-gray-600 mb-2">Status: {status}</div>
      <div 
        ref={containerRef}
        className="border border-gray-300 bg-white"
        style={{ width: '400px', height: '200px' }}
      />
    </div>
  );
};

export default MinimalAlphaTab;
