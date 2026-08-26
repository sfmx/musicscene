import React from 'react';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  guitarApplications: IntervalData['guitarApplications'];
}

export default function IntervalGuitarSection({ guitarApplications }: Props) {
  const { intervalExamples, chordConstructions, fretboardPatterns } = guitarApplications;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>

      {/* Interval Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-gray-800 mb-6">{intervalExamples.title}</h3>
        <p className="text-gray-600 mb-6">{intervalExamples.description}</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {intervalExamples.examples.map((ex, i) => (
            <div key={i} className={`bg-gradient-to-br ${ex.colorBg} rounded-lg p-5 ${ex.colorBorder}`}>
              <div className="text-center mb-4">
                <h4 className={`text-lg font-semibold ${ex.colorTitle} mb-2`}>{ex.title}</h4>
                <p className={`text-sm ${ex.colorText} mb-3`}>{ex.subtitle}</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord={ex.chord1} />
                    <p className={`text-xs ${ex.colorDetail} mt-1`}>{ex.chord1Label}</p>
                  </div>
                  <div className="text-center">
                    <SimpleFretboardDiagram chord={ex.chord2} />
                    <p className={`text-xs ${ex.colorDetail} mt-1`}>{ex.chord2Label}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <AlphaTexRenderer alphaTex={ex.alphaTex} title={ex.alphaTexTitle} className="scale-75" />
                </div>
                <p className={`text-xs ${ex.colorDetail}`}>{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chord Constructions */}
      {chordConstructions.items.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-800 mb-6">{chordConstructions.title}</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {chordConstructions.items.map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.colorBg} rounded-lg p-6 ${item.colorBorder}`}>
                <h4 className={`text-lg font-semibold ${item.colorTitle} mb-4`}>{item.title}</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <SimpleFretboardDiagram chord={item.chord} />
                    <p className={`text-xs ${item.colorDetail} mt-2`}>{item.chordLabel}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <AlphaTexRenderer alphaTex={item.alphaTex} title={item.alphaTexTitle} className="scale-75" />
                    <p className={`text-xs ${item.colorDetail} mt-2`}>{item.alphaTexDescription}</p>
                  </div>
                  <ul className={`text-sm ${item.colorText} space-y-1`}>
                    {item.bullets.map((b, j) => (
                      <li key={j}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fretboard Patterns */}
      {fretboardPatterns.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-6">Fretboard Patterns & Musical Applications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {fretboardPatterns.map((pattern, i) => (
              <div key={i} className={`bg-gradient-to-br ${pattern.colorBg} rounded-lg p-6 ${pattern.colorBorder}`}>
                <h4 className={`text-lg font-semibold ${pattern.colorTitle} mb-4`}>{pattern.title}</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className={`font-medium ${pattern.colorText} mb-2`}>{pattern.alphaTexTitle}</h5>
                    <AlphaTexRenderer alphaTex={pattern.alphaTex} title={pattern.alphaTexTitle} className="scale-75" />
                    <p className={`text-xs ${pattern.colorText} mt-2`}>{pattern.alphaTexDescription}</p>
                  </div>
                  <ul className={`text-sm ${pattern.colorText} space-y-1`}>
                    {pattern.bullets.map((b, j) => (
                      <li key={j}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
