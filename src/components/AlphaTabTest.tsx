import dynamic from 'next/dynamic';
import React from 'react';

const AlphaTabTest = () => {
  const handleTestAlphaTab = async () => {
    try {
      console.log('Testing AlphaTab import...');
      const alphaTab = await import('@coderline/alphatab');
      console.log('AlphaTab imported successfully:', alphaTab);
      console.log('AlphaTabApi:', alphaTab.AlphaTabApi);
      
      // Try to create a simple div and initialize
      const testDiv = document.createElement('div');
      testDiv.style.width = '400px';
      testDiv.style.height = '200px';
      testDiv.style.border = '1px solid black';
      document.body.appendChild(testDiv);
      
      console.log('Creating API...');
      const api = new alphaTab.AlphaTabApi(testDiv, {
        core: { useWorkers: false }
      });
      
      console.log('API created:', api);
      
      api.renderStarted.on(() => console.log('Render started!'));
      api.renderFinished.on(() => console.log('Render finished!'));
      api.error.on((error: any) => console.error('AlphaTab error:', error));
      
      const testAlphaTex = `\\track "Guitar"
.
3.3 3.3 5.3 5.3 |`;
      
      console.log('Loading tex:', testAlphaTex);
      api.tex(testAlphaTex);
      
    } catch (error) {
      console.error('Test failed:', error);
    }
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleTestAlphaTab}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test AlphaTab Import
      </button>
    </div>
  );
};

export default AlphaTabTest;
