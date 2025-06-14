"use client";

import React from 'react';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

interface VexTabExampleProps {
  title: string;
  description?: string;
  vextab: string;
  width?: number;
  scale?: number;
}

/**
 * A component for displaying VexTab examples with title and description
 */
const VexTabExample: React.FC<VexTabExampleProps> = ({
  title,
  description,
  vextab,
  width = 550,
  scale = 1.0
}) => {
  return (
    <div className="vextab-example-container my-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>
      
      <VexTabScriptLoader>
        <div
          className="p-4 overflow-auto"
          dangerouslySetInnerHTML={{
            __html: `<div class='vex-tabdiv' width='${width}' scale='${scale}'>
${vextab}
</div>`
          }}
        />
      </VexTabScriptLoader>
      
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
        <details className="text-sm">
          <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
            View VexTab Code
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 rounded overflow-x-auto text-xs">
            {vextab}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default VexTabExample;
