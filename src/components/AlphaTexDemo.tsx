import React from 'react';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleAlphaTabScale from '@/components/SimpleAlphaTabScale';
import { AlphaTexValidator } from '@/lib/alphaTexValidator';

/**
 * Test component to demonstrate AlphaTex rendering capabilities
 */
const AlphaTexDemo: React.FC = () => {
  // Various AlphaTex examples
  const examples = [
    {
      title: "AlphaTex Documentation Example",
      alphaTex: "0.6.2 1.5.4 3.4.4 | 5.3.8 5.3.8 5.3.8 5.3.8 r.2",
      description: "Official example from AlphaTex documentation showing proper fret.string.duration notation with rests"
    },
    {
      title: "AlphaTex Chord Example",
      alphaTex: "(0.3 0.4).4 (3.3 3.4).4 (5.3 5.4).4 r.8 (0.3 0.4).8 | r.8 (3.3 3.4).8 r.8 (6.3 6.4).8 (5.3 5.4).4 r.4 | (0.3 0.4).4 (3.3 3.4).4 (5.3 5.4).4 r.8 (3.3 3.4).8 | r.8 (0.3 0.4).8",
      description: "Official chord example showing proper (fret.string fret.string).duration notation for playing multiple notes simultaneously"
    },
    {
      title: "AC/DC Main Riff (G5 Power Chord)",
      alphaTex: "12.3 12.3 12.3 12.3 |",
      description: "Simple G5 power chord pattern from You Shook Me All Night Long"
    },
    {
      title: "AC/DC Verse Progression",
      alphaTex: "12.3 5.3 12.3 7.3 |",
      description: "G5 - C5 - G5 - D5 progression"
    },
    {
      title: "Lead Guitar Solo Pattern",
      alphaTex: "12.1 15.1 12.1 15.1 12.1 14.1 12.1 15.1 |",
      description: "Pentatonic runs on high E string"
    },
    {
      title: "Chord Progression with Multiple Strings",
      alphaTex: "(12.3 12.4 10.5) (5.3 5.4 3.5) (7.3 7.4 5.5) |",
      description: "Full power chords with root and fifth"
    },
    {
      title: "Scale Pattern Example",
      alphaTex: "3.6 5.6 2.5 3.5 5.5 2.4 4.4 5.4 |",
      description: "G major scale pattern"
    },
    {
      title: "Duration Ranges",
      alphaTex: ":4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |",
      description: "Using :duration syntax to set note durations (from AlphaTex documentation)"
    },
    {
      title: "Invalid Example (for testing validation)",
      alphaTex: "99.8 invalid.notation 3.7 |",
      description: "This example contains validation errors"
    }
  ];

  // Test the validator
  const validationTest = AlphaTexValidator.validate("12.3 5.3 7.3 |");
  const invalidValidationTest = AlphaTexValidator.validate("99.8 invalid 3.7 |");
  const chordValidationTest = AlphaTexValidator.validate("(0.3 0.4).4 |");
  const simpleOpenStringTest = AlphaTexValidator.validate("0.3 |");

  // Test traditional tab conversion
  const traditionalTab = "G|--12--5--7--|\\nD|--12--5--7--|\\nA|--10--3--5--|";
  const convertedAlphaTex = AlphaTexValidator.convertFromTraditionalTab(traditionalTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">AlphaTex Rendering Demo</h1>
      
      {/* Validation Demo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Validation Examples</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-green-800 mb-2">Valid AlphaTex</h3>
            <p className="text-sm text-green-700 mb-2">Input: "12.3 5.3 7.3 |"</p>
            <div className="text-xs text-green-600">
              <p>Valid: {validationTest.isValid.toString()}</p>
              <p>Errors: {validationTest.errors.length}</p>
              <p>Warnings: {validationTest.warnings.length}</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Open String Test</h3>
            <p className="text-sm text-yellow-700 mb-2">Input: "0.3 |"</p>
            <div className="text-xs text-yellow-600">
              <p>Valid: {simpleOpenStringTest.isValid.toString()}</p>
              <p>Errors: {simpleOpenStringTest.errors.length}</p>
              {simpleOpenStringTest.errors.length > 0 && (
                <p className="text-xs mt-1">{simpleOpenStringTest.errors[0]}</p>
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Chord Test</h3>
            <p className="text-sm text-blue-700 mb-2">Input: "(0.3 0.4).4 |"</p>
            <div className="text-xs text-blue-600">
              <p>Valid: {chordValidationTest.isValid.toString()}</p>
              <p>Errors: {chordValidationTest.errors.length}</p>
              <p>Warnings: {chordValidationTest.warnings.length}</p>
              {chordValidationTest.errors.length > 0 && (
                <ul className="list-disc list-inside mt-1">
                  {chordValidationTest.errors.slice(0, 2).map((error, index) => (
                    <li key={index} className="text-xs">{error}</li>
                  ))}
                  {chordValidationTest.errors.length > 2 && <li className="text-xs">...and {chordValidationTest.errors.length - 2} more</li>}
                </ul>
              )}
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-red-800 mb-2">Invalid AlphaTex</h3>
            <p className="text-sm text-red-700 mb-2">Input: "99.8 invalid 3.7 |"</p>
            <div className="text-xs text-red-600">
              <p>Valid: {invalidValidationTest.isValid.toString()}</p>
              <p>Errors: {invalidValidationTest.errors.length}</p>
              {invalidValidationTest.errors.length > 0 && (
                <ul className="list-disc list-inside mt-1">
                  {invalidValidationTest.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Traditional Tab Conversion</h3>
          <p className="text-sm text-blue-700 mb-2">Original: {traditionalTab}</p>
          <p className="text-sm text-blue-700">Converted: {convertedAlphaTex}</p>
        </div>
      </section>

      {/* AlphaTex Renderer Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AlphaTex Renderer Examples</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <AlphaTexRenderer
                alphaTex={example.alphaTex}
                title={example.title}
                showValidation={true}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">{example.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scale Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scale Renderer Comparison</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">SimpleAlphaTabScale Component</h3>
            <SimpleAlphaTabScale scaleName="G major scale" />
            <p className="text-sm text-gray-600">Uses predefined scale patterns</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">AlphaTexRenderer Component</h3>
            <AlphaTexRenderer
              alphaTex="3.6 5.6 2.5 3.5 5.5 2.4 4.4 5.4 |"
              title="G Major Scale (Custom AlphaTex)"
              showValidation={true}
            />
            <p className="text-sm text-gray-600">Uses custom AlphaTex input</p>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage Instructions</h2>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="font-medium text-gray-800">AlphaTexRenderer Component:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Takes any valid AlphaTex string and renders it</li>
              <li>Includes built-in validation with error display</li>
              <li>Shows the AlphaTex string for reference</li>
              <li>Fully responsive and customizable</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">AlphaTexValidator Utility:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Validates AlphaTex notation syntax</li>
              <li>Provides detailed error messages and suggestions</li>
              <li>Converts traditional guitar tab to AlphaTex format</li>
              <li>Supports fret.string notation (e.g., "12.3" = 12th fret, 3rd string)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">AlphaTex Format Examples:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><code>"12.3 |"</code> - 12th fret on 3rd string</li>
              <li><code>"(12.3 12.4 10.5) |"</code> - Chord with multiple notes</li>
              <li><code>"3.6 5.6 2.5 3.5 |"</code> - Sequence of single notes</li>
              <li><code>"r |"</code> - Rest</li>
              <li>String numbers: 1=high E, 2=B, 3=G, 4=D, 5=A, 6=low E</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlphaTexDemo;
