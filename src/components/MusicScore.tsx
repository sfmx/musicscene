'use client';

import React, { useState, useEffect } from 'react';
import AlphaTexRenderer from './AlphaTexRenderer';

interface Stave {
  /** Unique identifier for the stave */
  id: string;
  /** The AlphaTex notation for this stave */
  alphaTex?: string;
  /** Legacy notation field (alias for alphaTex, used by older pages) */
  notation?: string;
  /** Optional title for the stave */
  title?: string;
  /** Custom width for this stave (optional, kept for compatibility) */
  width?: number;
  /** Custom scale for this stave (optional, kept for compatibility) */
  scale?: number;
}

interface MusicScoreProps {
  /** Array of staves to render */
  staves: Stave[];
  /** Overall title of the score */
  title?: string;
  /** Default width for all staves */
  defaultWidth?: number;
  /** Default scale for all staves */
  defaultScale?: number;
  /** CSS class for the score container */
  className?: string;
  /** Style for the score container */
  style?: React.CSSProperties;
}

const MusicScore: React.FC<MusicScoreProps> = ({
  staves,
  title,
  defaultWidth = 500,
  defaultScale = 1.0,
  className = '',
  style = {}
}) => {
  // Initialize with a default value for SSR, update on client
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    // Set initial width on client
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive adjustments
  const responsiveWidth = windowWidth <= 768 ? Math.min(windowWidth - 40, defaultWidth) : defaultWidth;
  const responsiveScale = windowWidth <= 768 ? Math.max(0.7, defaultScale - 0.2) : defaultScale;
  const scoreStyle: React.CSSProperties = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    ...style
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333'
  };

  const staveContainerStyle: React.CSSProperties = {
    marginBottom: '40px'
  };

  return (
    <div className={`music-score ${className}`} style={scoreStyle}>
      {title && <h1 style={titleStyle}>{title}</h1>}
      
      {staves.map((stave) => {
        // Support both alphaTex and legacy notation field
        const notationContent = stave.alphaTex || stave.notation || '';
        
        return (
          <div key={stave.id} style={staveContainerStyle}>
            {notationContent ? (
              <AlphaTexRenderer
                alphaTex={notationContent}
                title={stave.title}
              />
            ) : (
              <div className="text-gray-500 italic text-center py-4">
                No notation content provided
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MusicScore;
