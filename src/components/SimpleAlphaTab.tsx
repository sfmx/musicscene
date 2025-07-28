import React, { useEffect, useRef, useState } from 'react';

/**
 * Simple AlphaTab Test Component
 * Minimal implementation to debug rendering issues
 */

interface SimpleAlphaTabProps {
  scaleName: string;
}

const SimpleAlphaTab: React.FC<SimpleAlphaTabProps> = ({ scaleName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    let isMounted = true;

    const initAlphaTab = async () => {
      if (!containerRef.current) return;

      try {
        setStatus('Loading AlphaTab...');
        
        // Wait a bit for DOM to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (!isMounted || !containerRef.current) return;
        
        // Dynamic import
        const alphaTab = await import('@coderline/alphatab');
        
        if (!isMounted) return;
        setStatus('AlphaTab loaded, creating API...');

        // Clear container
        containerRef.current.innerHTML = '';
        
        // Force container size
        containerRef.current.style.width = '400px';
        containerRef.current.style.height = '120px';

        // Minimal settings with correct font path
        const settings = {
          core: { 
            useWorkers: false,
            fontDirectory: '/alphatab/font/'
          },
          display: { scale: 0.7 }
        };

        // Create API
        console.log('Creating AlphaTabApi with container:', containerRef.current);
        const api = new alphaTab.AlphaTabApi(containerRef.current, settings);
        console.log('AlphaTabApi created:', api);
        
        setStatus('API created, setting up events...');

        // Event handlers
        api.renderStarted.on(() => {
          console.log('Render started');
          if (isMounted) setStatus('Rendering started...');
        });

        api.renderFinished.on(() => {
          console.log('Render finished');
          if (isMounted) setStatus('Render completed!');
        });

        api.error.on((error: any) => {
          console.error('AlphaTab error:', error);
          if (isMounted) setStatus(`Error: ${error.message || error}`);
        });

        setStatus('Loading simple notation...');

        // Correct AlphaTex format from the documentation
        const simpleAlphaTex = `\\track "Guitar"
\\staff {score} \\clef G2

3.3 3.3 5.3 5.3 2.2 2.2 0.1 0.1 |`;

        console.log('Loading AlphaTex:', simpleAlphaTex);
        
        // Give a small delay before loading tex
        setTimeout(() => {
          if (isMounted) {
            api.tex(simpleAlphaTex);
          }
        }, 50);

      } catch (err) {
        console.error('Init error:', err);
        if (isMounted) {
          setStatus(`Init error: ${err instanceof Error ? err.message : err}`);
        }
      }
    };

    initAlphaTab();

    return () => {
      isMounted = false;
    };
  }, [scaleName]);

  return (
    <div className="p-4 border rounded">
      <div className="text-sm text-gray-600 mb-2">Status: {status}</div>
      <div 
        ref={containerRef}
        className="w-full bg-white border rounded"
        style={{ minHeight: '120px', width: '400px' }}
      />
    </div>
  );
};

export default SimpleAlphaTab;
