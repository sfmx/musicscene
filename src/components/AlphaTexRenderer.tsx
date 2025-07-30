import React, { useEffect, useRef, useState } from 'react';
import { AlphaTexValidator } from '@/lib/alphaTexValidator';

/**
 * Generic AlphaTex Renderer Component
 * Takes any valid AlphaTex string and renders it using AlphaTab
 */

interface AlphaTexRendererProps {
  alphaTex: string;
  title?: string;
  showValidation?: boolean;
  className?: string;
}

const AlphaTexRenderer: React.FC<AlphaTexRendererProps> = ({ 
  alphaTex, 
  title = 'Music Notation',
  showValidation = false,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Starting...');
  const [validationResult, setValidationResult] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    const renderAlphaTex = async () => {
      try {
        // Validate the AlphaTex input first
        const validation = AlphaTexValidator.validate(alphaTex);
        setValidationResult(validation);

        if (!validation.isValid && showValidation) {
          setStatus(`Validation failed: ${validation.errors.join(', ')}`);
          return;
        }

        setStatus(`Importing AlphaTab for ${title}...`);
        const alphaTab = await import('@coderline/alphatab');
        
        if (!isMounted || !containerRef.current) return;
        setStatus(`AlphaTab imported for ${title}`);

        // Ensure container has responsive dimensions
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = 'auto';
        containerRef.current.style.minHeight = '200px';
        containerRef.current.style.marginBottom = '10px';
        containerRef.current.innerHTML = '';

        setStatus(`Creating API for ${title}...`);
        
        // AlphaTab settings optimized for clean tablature
        const api = new alphaTab.AlphaTabApi(containerRef.current, {
          core: { 
            useWorkers: false,
            fontDirectory: '/alphatab/font/'
          },
          display: {
            scale: 1.0,
            stretchForce: 0.8
          },
          notation: {
            rhythmMode: 'hidden', // Hide rhythm stems for clean tablature
            notationMode: 'songbook'
          }
        });

        setStatus(`API created for ${title}, setting up events...`);

        api.renderStarted.on(() => {
          console.log(`RENDER STARTED for ${title}`);
          setStatus(`Rendering ${title}...`);
        });

        api.renderFinished.on(() => {
          console.log(`RENDER FINISHED for ${title}`);
          setStatus(`Render complete for ${title}!`);
        });

        api.error.on((error: any) => {
          console.error(`RENDER ERROR for ${title}:`, error);
          setStatus(`Error for ${title}: ${error.message || error}`);
        });

        setStatus(`Loading AlphaTex for ${title}...`);
        
        // Use the provided AlphaTex string directly
        console.log(`Loading AlphaTex for ${title}:`, alphaTex);
        api.tex(alphaTex);

        // Force render after a delay if needed
        setTimeout(() => {
          console.log(`Forcing render check for ${title}...`);
          if (isMounted) {
            try {
              api.render();
            } catch (e) {
              console.warn(`Force render failed for ${title}:`, e);
            }
          }
        }, 2000);

      } catch (err) {
        console.error(`Render error for ${title}:`, err);
        setStatus(`Error for ${title}: ${err}`);
      }
    };

    renderAlphaTex();

    return () => {
      isMounted = false;
    };
  }, [alphaTex, title, showValidation]);

  return (
    <div className={`w-full mb-4 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      )}
      
      {/* Validation Results */}
      {showValidation && validationResult && (
        <div className="mb-3">
          {!validationResult.isValid && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-red-800 mb-1">Validation Errors:</h5>
              <ul className="text-xs text-red-700">
                {validationResult.errors.map((error: string, index: number) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
          
          {validationResult.warnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-yellow-800 mb-1">Warnings:</h5>
              <ul className="text-xs text-yellow-700">
                {validationResult.warnings.map((warning: string, index: number) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}
          
          {validationResult.isValid && validationResult.errors.length === 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-2">
              <span className="text-xs text-green-700">✓ Valid AlphaTex notation</span>
            </div>
          )}
        </div>
      )}

      {/* AlphaTex String Display */}
      <div className="bg-gray-50 rounded-lg p-3 mb-3">
        <h5 className="text-sm font-medium text-gray-800 mb-1">AlphaTex:</h5>
        <code className="text-xs text-gray-700 font-mono break-all">{alphaTex}</code>
      </div>

      {/* Render Container */}
      <div 
        ref={containerRef}
        className="alphatab-container bg-white border rounded overflow-hidden"
        style={{ minHeight: '250px', width: '100%' }}
      />
      
      {/* Status Display */}
      {status !== 'Render complete!' && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          {status}
        </div>
      )}
      
      {status.includes('Render complete') && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          rendered by alphaTab
        </div>
      )}
    </div>
  );
};

export default AlphaTexRenderer;
