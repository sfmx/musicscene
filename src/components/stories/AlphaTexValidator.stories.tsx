import type { Meta, StoryObj } from '@storybook/react';
import { AlphaTexValidator } from '../../lib/alphaTexValidator';

const meta: Meta = {
  title: 'Music/AlphaTexValidator',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidNotation: Story = {
  render: () => {
    const result = AlphaTexValidator.validate('3.6 5.5 7.4 |');
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Valid AlphaTex Notation</h3>
        <p className="text-sm text-gray-600 mb-3">Input: "3.6 5.5 7.4 |"</p>
        <div className="space-y-2">
          <div className={`p-3 rounded ${result.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${result.isValid ? 'text-green-800' : 'text-red-800'}`}>
              Status: {result.isValid ? 'Valid' : 'Invalid'}
            </p>
            <p className="text-sm">Errors: {result.errors.length}</p>
            <p className="text-sm">Warnings: {result.warnings.length}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const InvalidStringNumber: Story = {
  render: () => {
    const result = AlphaTexValidator.validate('3.7 5.8 |');
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Invalid String Numbers</h3>
        <p className="text-sm text-gray-600 mb-3">Input: "3.7 5.8 |"</p>
        <div className="space-y-2">
          <div className={`p-3 rounded ${result.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${result.isValid ? 'text-green-800' : 'text-red-800'}`}>
              Status: {result.isValid ? 'Valid' : 'Invalid'}
            </p>
            <p className="text-sm">Errors: {result.errors.length}</p>
            {result.errors.length > 0 && (
              <ul className="text-xs mt-2 space-y-1">
                {result.errors.map((error, index) => (
                  <li key={index} className="text-red-600">• {error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const ChordNotation: Story = {
  render: () => {
    const result = AlphaTexValidator.validate('(0.3 0.4).4 |');
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Chord Notation</h3>
        <p className="text-sm text-gray-600 mb-3">Input: "(0.3 0.4).4 |"</p>
        <div className="space-y-2">
          <div className={`p-3 rounded ${result.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${result.isValid ? 'text-green-800' : 'text-red-800'}`}>
              Status: {result.isValid ? 'Valid' : 'Invalid'}
            </p>
            <p className="text-sm">Errors: {result.errors.length}</p>
            <p className="text-sm">Warnings: {result.warnings.length}</p>
            {result.errors.length > 0 && (
              <ul className="text-xs mt-2 space-y-1">
                {result.errors.map((error, index) => (
                  <li key={index} className="text-red-600">• {error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const DurationRangeExample: Story = {
  render: () => {
    const result = AlphaTexValidator.validate(':4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |');
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Duration Range Notation</h3>
        <p className="text-sm text-gray-600 mb-3">Input: ":4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |"</p>
        <p className="text-xs text-gray-500 mb-3">From AlphaTex documentation - uses :duration to set note durations</p>
        <div className="space-y-2">
          <div className={`p-3 rounded ${result.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${result.isValid ? 'text-green-800' : 'text-red-800'}`}>
              Status: {result.isValid ? 'Valid' : 'Invalid'}
            </p>
            <p className="text-sm">Errors: {result.errors.length}</p>
            <p className="text-sm">Warnings: {result.warnings.length}</p>
            {result.errors.length > 0 && (
              <ul className="text-xs mt-2 space-y-1">
                {result.errors.map((error, index) => (
                  <li key={index} className="text-red-600">• {error}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export const SuggestionExample: Story = {
  render: () => {
    const suggestions = AlphaTexValidator.suggestCorrections('3.6 5.7 no-bar');
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Validation Suggestions</h3>
        <p className="text-sm text-gray-600 mb-3">Input: "3.6 5.7 no-bar"</p>
        <div className="space-y-2">
          <div className="p-3 rounded bg-yellow-50 border border-yellow-200">
            <p className="font-medium text-yellow-800">Suggestions:</p>
            {suggestions.length > 0 ? (
              <ul className="text-sm mt-2 space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-yellow-700">• {suggestion}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-yellow-700">No suggestions available</p>
            )}
          </div>
        </div>
      </div>
    );
  },
};
