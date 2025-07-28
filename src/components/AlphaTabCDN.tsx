import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

/**
 * AlphaTab CDN Test Component
 * Using CDN version to test if that works better
 */

interface AlphaTabCDNProps {
  scaleName: string;
}

const AlphaTabCDN: React.FC<AlphaTabCDNProps> = ({ scaleName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Loading CDN...');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initializeAlphaTab = () => {
    if (!containerRef.current || !scriptLoaded) return;

    try {
      setStatus('Initializing from CDN...');
      
      // Clear container
      containerRef.current.innerHTML = '';
      
      // Force container size
      containerRef.current.style.width = '400px';
      containerRef.current.style.height = '120px';

      // Check if alphaTab is available globally
      if (typeof (window as any).alphaTab === 'undefined') {
        setStatus('AlphaTab CDN not loaded');
        return;
      }

      const alphaTab = (window as any).alphaTab;
      console.log('AlphaTab from CDN:', alphaTab);

      // Minimal settings with correct font path
      const settings = {
        core: { 
          useWorkers: false,
          fontDirectory: '/alphatab/font/'
        },
        display: { scale: 0.7 }
      };

      // Create API
      const api = new alphaTab.AlphaTabApi(containerRef.current, settings);
      
      setStatus('API created, setting up events...');

      // Event handlers
      api.renderStarted.on(() => {
        console.log('CDN Render started');
        setStatus('Rendering started...');
      });

      api.renderFinished.on(() => {
        console.log('CDN Render finished');
        setStatus('Render completed!');
      });

      api.error.on((error: any) => {
        console.error('CDN AlphaTab error:', error);
        setStatus(`Error: ${error.message || error}`);
      });

      setStatus('Loading notation...');

      // Correct AlphaTex format - the issue was with the track definition
      const simpleAlphaTex = `\\track "Guitar"
\\staff {score} \\clef G2

3.3 3.3 5.3 5.3 2.2 2.2 0.1 0.1 |`;

      console.log('Loading CDN AlphaTex:', simpleAlphaTex);
      
      setTimeout(() => {
        api.tex(simpleAlphaTex);
      }, 100);

    } catch (err) {
      console.error('CDN Init error:', err);
      setStatus(`Init error: ${err instanceof Error ? err.message : err}`);
    }
  };

  useEffect(() => {
    if (scriptLoaded) {
      initializeAlphaTab();
    }
  }, [scriptLoaded, scaleName]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js"
        onLoad={() => {
          console.log('AlphaTab CDN script loaded');
          setScriptLoaded(true);
        }}
        onError={(e) => {
          console.error('Failed to load AlphaTab CDN:', e);
          setStatus('Failed to load CDN');
        }}
      />
      <div className="p-4 border rounded">
        <div className="text-sm text-gray-600 mb-2">CDN Status: {status}</div>
        <div 
          ref={containerRef}
          className="w-full bg-white border rounded"
          style={{ minHeight: '120px', width: '400px' }}
        />
      </div>
    </>
  );
};

export default AlphaTabCDN;
