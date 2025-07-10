"use client";

import React, { useEffect, useState, useRef } from 'react';

interface VexTabLoaderProps {
  children: React.ReactNode;
  debug?: boolean;
}

const VexTabLoader: React.FC<VexTabLoaderProps> = ({ 
  children,
  debug = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const renderedRef = useRef(false);

  const log = (message: string, ...args: any[]) => {
    if (debug) {
      console.log(`[VexTabLoader] ${message}`, ...args);
    }
  };

  useEffect(() => {
    // Function to load the VexTab script
    const loadVexTabScript = () => {
      log('Initializing VexTabLoader');
      log('VexTabDiv available?', typeof window !== 'undefined' && !!window.VexTabDiv);
      
      // Check if already loaded
      if (typeof window !== 'undefined' && window.VexTabDiv) {
        log('VexTabDiv already available');
        tryRender();
        return;
      }

      // Add VEXTAB_USE_SVG flag first
      log('Setting VEXTAB_USE_SVG flag');
      const svgConfig = document.createElement('script');
      svgConfig.textContent = 'VEXTAB_USE_SVG = true;';
      document.head.appendChild(svgConfig);
      
      // Load the actual script
      log('Loading VexTab script');
      const script = document.createElement('script');
      script.src = '/vextab-div.js';
      script.async = true;
      
      script.onload = () => {
        log('VexTab script loaded successfully');
        tryRender();
      };
      
      script.onerror = (e) => {
        log('Error loading VexTab script:', e);
        setError('Failed to load notation. Please refresh the page to try again.');
        setIsLoading(false);
      };
      
      document.head.appendChild(script);
      
      // Set timeout for script loading
      timeoutRef.current = setTimeout(() => {
        if (!renderedRef.current) {
          log('Loading timed out after 10 seconds');
          setError('Loading timed out. Please refresh the page to try again.');
          setIsLoading(false);
        }
      }, 10000); // 10 second timeout
    };
    
    // Function to attempt rendering with multiple delays
    const tryRender = () => {
      // Try multiple auto-renders with increasing delays
      setTimeout(() => {
        if (window.VexTabDiv && window.VexTabDiv.autoRender) {
          log('First autoRender attempt (0ms delay)');
          window.VexTabDiv.autoRender();
        } else {
          log('VexTabDiv.autoRender not available in first attempt');
        }
      }, 0);
      
      setTimeout(() => {
        if (window.VexTabDiv && window.VexTabDiv.autoRender) {
          log('Second autoRender attempt (100ms delay)');
          window.VexTabDiv.autoRender();
        } else {
          log('VexTabDiv.autoRender not available in second attempt');
        }
      }, 100);
      
      setTimeout(() => {
        if (window.VexTabDiv && window.VexTabDiv.autoRender) {
          log('Third autoRender attempt (500ms delay)');
          window.VexTabDiv.autoRender();
          renderedRef.current = true;
          setIsRendered(true);
          setIsLoading(false);
        } else {
          log('VexTabDiv.autoRender not available in third attempt');
          setError('Failed to initialize notation renderer. Please refresh the page.');
          setIsLoading(false);
        }
      }, 500);
    };
    
    loadVexTabScript();
    
    // Clean up function
    return () => {
      log('VexTabLoader component unmounting');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debug]);

  return (
    <>
      {isLoading && (
        <div className="text-center p-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Loading notation...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center p-4 text-red-600 bg-red-50 rounded-md border border-red-200">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Refresh Page
          </button>
        </div>
      )}
      
      <div className={isLoading ? 'hidden' : (!error ? 'block' : 'hidden')}>
        {children}
      </div>
    </>
  );
};

export default VexTabLoader;
