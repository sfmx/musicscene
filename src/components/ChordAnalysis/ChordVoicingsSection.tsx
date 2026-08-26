import React from 'react';
import { ChordVoicingGroup } from '@/lib/chordData';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

interface ChordVoicingsSectionProps {
  voicingGroups: ChordVoicingGroup[];
}

export default function ChordVoicingsSection({ voicingGroups }: ChordVoicingsSectionProps) {
  return (
    <>
      {voicingGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{group.title}</h2>

          {group.tipTitle && group.tipDescription && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">{group.tipTitle}</h3>
              <p className="text-blue-700">{group.tipDescription}</p>
            </div>
          )}

          <div className={`grid md:grid-cols-2 ${group.voicings.length > 2 ? 'lg:grid-cols-3' : ''} gap-6`}>
            {group.voicings.map((voicing, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{voicing.name}</h3>
                <div className="text-center mb-4">
                  <SimpleFretboardDiagram chord={voicing.chord} />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Notes:</strong> {voicing.notes}</p>
                  <p><strong>Fingering:</strong> {voicing.fingering}</p>
                  <p><strong>Use:</strong> {voicing.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
