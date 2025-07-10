import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VexTabDiv?: {
      Div?: new (selector: string | HTMLElement) => any; // Constructor for VexTab Div
      Artist?: any;
      VexTab?: any;
      Flow?: any;
    };
  }
}

interface VexTabProps {
  notation: string;
  width?: number;
  scale?: number;
  editor?: boolean;
  editorHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const VexTab: React.FC<VexTabProps> = ({
  notation,
  width = 500,
  scale = 1.0,
  editor = false,
  editorHeight = 100,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [libReady, setLibReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Wait for VexTabDiv to be available
  useEffect(() => {
    let tries = 0;
    const maxTries = 30; // 3 seconds timeout
    function checkLib() {
      if (window.VexTabDiv && (window.VexTabDiv as any).Div && typeof (window.VexTabDiv as any).Div === 'function') {
        setLibReady(true);
      } else if (tries < maxTries) {
        tries++;
        setTimeout(checkLib, 100);
      } else {
        setError('VexTab library (VexTabDiv.Div) failed to load.');
      }
    }
    checkLib();
  }, []);

  // Render notation when library is ready or notation changes
  useEffect(() => {
    console.log('[VexTab] useEffect triggered', {
      libReady,
      notation,
      width,
      scale,
      editor,
      editorHeight,
      error
    });
    if (!libReady || error) return;
    const container = containerRef.current;
    if (!container) return;
    console.log('[VexTab] Clearing container and rendering');
    container.innerHTML = '';
    const innerVexDiv = document.createElement('div');
    // Use a unique class to avoid global auto-render
    innerVexDiv.className = 'react-vex-tabdiv';
    innerVexDiv.setAttribute('width', String(width));
    innerVexDiv.setAttribute('scale', String(scale));
    if (editor) {
      innerVexDiv.setAttribute('editor', 'true');
      innerVexDiv.setAttribute('editor-height', String(editorHeight));
    }
    // Sanitize and trim notation string
    const sanitizedNotation = (notation || '').trim();
    innerVexDiv.textContent = sanitizedNotation;
    container.appendChild(innerVexDiv);
    function tryRender(notationToTry: string, isFallback = false) {
      innerVexDiv.textContent = notationToTry;
      try {
        if (window.VexTabDiv && (window.VexTabDiv as any).Div) {
          // Only manually instantiate for our custom class
          new (window.VexTabDiv as any).Div(innerVexDiv);
          const renderedElement = innerVexDiv.querySelector('svg, canvas');
          if (renderedElement) {
            let renderedWidth = 0;
            let renderedHeight = 0;
            if (renderedElement.tagName.toLowerCase() === 'svg' && (renderedElement as SVGSVGElement).getBBox) {
              const bbox = (renderedElement as SVGSVGElement).getBBox();
              renderedWidth = bbox.width;
              renderedHeight = bbox.height;
            } else {
              const rect = renderedElement.getBoundingClientRect();
              renderedWidth = rect.width;
              renderedHeight = rect.height;
            }
            console.log('[VexTab] Rendered element', { renderedWidth, renderedHeight, isFallback });
            if (renderedWidth === 0 || renderedHeight === 0) {
              if (!isFallback) {
                setError('VexTab rendered an empty SVG. Trying fallback.');
                console.error('VexTab rendered an empty SVG.', { notationToTry });
                // Try fallback
                tryRender('tabstave notation=true\nnotes :q 5/2 7/2 8/2 7/2', true);
              } else {
                setError('VexTab rendered an empty SVG even with fallback.');
                console.error('VexTab rendered an empty SVG with fallback.', { notationToTry });
              }
            } else {
              // Successfully rendered, clear any previous error
              setError(null);
            }
          } else {
            setError('VexTab did not render an SVG or Canvas element.');
            console.error('VexTab did not render an SVG or Canvas element.', { notationToTry });
          }
        } else {
          throw new Error('VexTabDiv.Div is not available for instantiation.');
        }
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        innerVexDiv.innerHTML = `<div style="color:red; white-space: pre-wrap;">VexTab render error: ${errorMessage}\nNotation:\n${notationToTry}</div>`;
        setError(`VexTab render error: ${errorMessage}`);
        console.error('VexTab render error:', errorMessage, { notationToTry });
      }
    }
    tryRender(sanitizedNotation);
    // eslint-disable-next-line
  }, [libReady, notation, width, scale, editor, editorHeight]);

  useEffect(() => {
    return () => {
      console.log('[VexTab] Component unmounted');
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    marginBottom: '40px',
    minHeight: '100px',
    minWidth: '50px',
    padding: '5px',
    overflowX: 'auto',  // Enable horizontal scrolling for mobile
    overflowY: 'hidden', // Prevent vertical scrolling
    ...style
  };
  if (error) {
    return <div className={`vextab-container vextab-error ${className}`} style={containerStyle}>Error: {error}</div>;
  }
  if (!libReady) {
    return <div className={`vextab-container vextab-loading ${className}`} style={containerStyle}>Loading VexTab library...</div>;
  }
  return <div ref={containerRef} className={`vextab-container ${className}`} style={containerStyle} />;
};