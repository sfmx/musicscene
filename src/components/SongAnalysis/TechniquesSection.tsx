import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

interface Technique {
  name: string;
  description: string;
  difficulty: string;
  primaryTechnique: boolean;
  details: {
    notes?: string[];
    sequence?: string[];
    tips?: string[];
    chords?: string[];
    progression?: string;
  };
}

interface TechniquesProps {
  techniques: Technique[];
}

const getDifficultyColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'border-green-200 bg-green-50';
    case 'intermediate':
      return 'border-yellow-200 bg-yellow-50';
    case 'advanced':
      return 'border-orange-200 bg-orange-50';
    case 'expert':
      return 'border-red-200 bg-red-50';
    default:
      return 'border-gray-200 bg-gray-50';
  }
};

const getTextColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'text-green-800';
    case 'intermediate':
      return 'text-yellow-800';
    case 'advanced':
      return 'text-orange-800';
    case 'expert':
      return 'text-red-800';
    default:
      return 'text-gray-800';
  }
};

export default function TechniquesSection({ techniques }: TechniquesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Techniques</h2>
      <div className="space-y-6">
        {techniques.map((technique, index) => (
          <div 
            key={index}
            className={`rounded-xl p-6 shadow-sm border ${getDifficultyColor(technique.difficulty)}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-semibold ${getTextColor(technique.difficulty)}`}>
                {technique.name}
                {technique.primaryTechnique && (
                  <span className="ml-2 text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    Primary
                  </span>
                )}
              </h3>
              <span className={`text-sm font-medium ${getTextColor(technique.difficulty)}`}>
                {technique.difficulty}
              </span>
            </div>
            
            <p className={`text-sm mb-4 ${getTextColor(technique.difficulty)}`}>
              {technique.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                {technique.details.notes && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technique Notes:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {technique.details.notes.map((note, i) => (
                        <li key={i}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {technique.details.sequence && (
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technique Sequence:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {technique.details.sequence.map((seq, i) => (
                        <li key={i}>• {seq}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div>
                {technique.details.tips && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Performance Tips:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {technique.details.tips.map((tip, i) => (
                        <li key={i}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {technique.details.chords && (
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Chords Used:</h4>
                    
                    {/* Chord Diagrams */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                      {technique.details.chords.map((chord, i) => (
                        <div key={i} className="text-center">
                          <h5 className="font-medium text-sm mb-2">{chord}</h5>
                          <SimpleFretboardDiagram chord={chord} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Chord Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {technique.details.chords.map((chord, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                          {chord}
                        </span>
                      ))}
                    </div>
                    
                    {technique.details.progression && (
                      <p className="mt-2 text-sm text-gray-600">
                        <strong>Progression:</strong> {technique.details.progression}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
