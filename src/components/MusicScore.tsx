import React, { useState, useEffect } from 'react';
import { VexTab } from './VexTab';

interface Stave {
  /** Unique identifier for the stave */
  id: string;
  /** The VexTab notation for this stave */
  notation: string;
  /** Optional title for the stave */
  title?: string;
  /** Custom width for this stave (optional) */
  width?: number;
  /** Custom scale for this stave (optional) */
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
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

  const staveTitleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#555'
  };

  return (
    <div className={`music-score ${className}`} style={scoreStyle}>
      {title && <h1 style={titleStyle}>{title}</h1>}
      
      {staves.map((stave) => (
        <div key={stave.id} style={staveContainerStyle}>          {stave.title && <h3 style={staveTitleStyle}>{stave.title}</h3>}
          <VexTab
            notation={stave.notation}
            width={stave.width || responsiveWidth}
            scale={stave.scale || responsiveScale}
          />
        </div>
      ))}
    </div>
  );
};

export default MusicScore;
