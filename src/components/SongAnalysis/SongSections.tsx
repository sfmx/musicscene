import React from 'react';
import { VexTab } from '@/components/VexTab';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

interface Section {
  name: string;
  timeStamp: string;
  technique: string;
  key: string;
  description: string;
  tab?: string;
  vexTab?: string;
  chords?: string[];
  progression?: string;
  notes: string[];
}

interface SongSectionsProps {
  sections: Section[];
}

export default function SongSections({ sections }: SongSectionsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Song Structure</h2>
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Time:</strong> {section.timeStamp}</p>
                  <p><strong>Technique:</strong> {section.technique}</p>
                  <p><strong>Key:</strong> {section.key}</p>
                </div>
                <p className="mt-3 text-sm text-gray-700">{section.description}</p>
              </div>
              
              <div className="md:col-span-2">
                {section.vexTab ? (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Musical Notation:</h4>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <VexTab notation={section.vexTab} />
                    </div>
                  </div>
                ) : section.tab ? (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Guitar Tab:</h4>
                    <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                      <pre>{section.tab}</pre>
                    </div>
                  </div>
                ) : null}
                
                {section.chords && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Chord Progression:</h4>
                    
                    {/* Chord Diagrams */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {section.chords.map((chord, i) => (
                        <div key={i} className="text-center">
                          <h5 className="font-medium text-sm mb-2 text-gray-700">{chord}</h5>
                          <SimpleFretboardDiagram chord={chord} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Chord Names as Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {section.chords.map((chord, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono">
                          {chord}
                        </span>
                      ))}
                    </div>
                    
                    {section.progression && (
                      <p className="text-sm text-gray-600">
                        <strong>Pattern:</strong> {section.progression}
                      </p>
                    )}
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Section Notes:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {section.notes.map((note, i) => (
                      <li key={i}>• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
