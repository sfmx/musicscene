"use client";

import React from 'react';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

interface VexTabRendererProps {
  width?: number;
  scale?: number;
  vextab: string;
  className?: string;
}

/**
 * A simple component to render VexTab notation
 * This uses the VexTabScriptLoader to ensure VexTab scripts are loaded
 * and then renders the provided VexTab code.
 * 
 * @example
 * <VexTabRenderer 
 *   vextab={`
 *     options space=20 font-size=14
 *     tabstave notation=true time=4/4 key=A
 *     notes :q (5/2.5/3.7/4) :8 10/4-12/4 | :h 5/5 :q 7/5
 *   `}
 *   width={550}
 *   scale={1.0}
 * />
 */
const VexTabRenderer: React.FC<VexTabRendererProps> = ({ 
  vextab, 
  width = 550, 
  scale = 1.0,
  className = ""
}) => {
  return (
    <VexTabScriptLoader>
      <div 
        className={`vextab-container ${className}`}
        style={{ 
          background: '#fff', 
          margin: '1em auto', 
          padding: '1em', 
          maxWidth: `${width}px`,
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<div class='vex-tabdiv' width='${width}' scale='${scale}'>
${vextab}
</div>`
          }}
        />
      </div>
    </VexTabScriptLoader>
  );
};

export default VexTabRenderer;
