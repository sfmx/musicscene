import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ChordProgressionsSectionProps {
  progressions: ChordData['progressions'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordProgressionsSection({ progressions, colorScheme }: ChordProgressionsSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{progressions.title}</h2>

      <div className="grid gap-8 mb-6">
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          {progressions.items.map((prog, i) => (
            <div key={i} className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm ${i < progressions.items.length - 1 ? 'mb-6' : ''}`}>
              <h4 className={`text-xl font-semibold mb-4 text-center ${prog.titleColor}`}>{prog.title}</h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-medium mb-3">Chord Sequence</h5>
                  <div className={`grid ${prog.chords.length <= 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3 mb-4`}>
                    {prog.chords.map((c, j) => (
                      <div key={j} className="text-center">
                        <SimpleFretboardDiagram chord={c.chord} />
                        <p className="text-sm font-medium mt-1">{c.label}</p>
                        <p className="text-xs text-gray-600">{c.numeral}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3">Strumming Pattern</h5>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-gray-600 text-center">{prog.strumming.pattern}</p>
                    <p className="text-xs text-gray-600 text-center">{prog.strumming.description}</p>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Tempo:</strong> {prog.strumming.tempo}</p>
                    <p className="mb-2"><strong>Feel:</strong> {prog.strumming.feel}</p>
                    <p><strong>Genre:</strong> {prog.strumming.genre}</p>
                  </div>
                </div>
              </div>

              <AlphaTexRenderer
                alphaTex={prog.alphaTex}
                title={prog.alphaTexTitle}
                className="mb-4"
              />

              <p className="text-sm text-gray-600 italic text-center">{prog.description}</p>
            </div>
          ))}

          {/* Practice Tips */}
          <div className={`${colorScheme.tipBg} rounded-lg p-6 border ${colorScheme.tipBorder} mt-6`}>
            <h4 className={`text-lg font-semibold ${colorScheme.tipTitle} mb-4`}>Practice Tips for Chord Progressions</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className={`font-medium ${colorScheme.tipText} mb-2`}>Technique Focus</h5>
                <ul className={`text-sm ${colorScheme.tipText} space-y-1`}>
                  {progressions.practiceTips.techniqueItems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className={`font-medium ${colorScheme.tipText} mb-2`}>Musical Application</h5>
                <ul className={`text-sm ${colorScheme.tipText} space-y-1`}>
                  {progressions.practiceTips.applicationItems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
