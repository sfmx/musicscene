import React from 'react';

interface Equipment {
  guitar: {
    recommended: string;
    alternatives: string[];
    pickup: string;
  };
  amp: {
    recommended: string;
    alternatives: string[];
    settings: {
      gain: string;
      treble: string;
      middle: string;
      bass: string;
      presence: string;
    };
  };
  effects: {
    distortion: string;
    reverb: string;
    other: string;
  };
}

interface EquipmentProps {
  equipment: Equipment;
}

export default function EquipmentSection({ equipment }: EquipmentProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tone</h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Guitar */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">🎸 Guitar</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Recommended:</h4>
              <p className="text-sm text-amber-700">{equipment.guitar.recommended}</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Alternatives:</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                {equipment.guitar.alternatives.map((alt, i) => (
                  <li key={i}>• {alt}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Pickup:</h4>
              <p className="text-sm text-amber-700">{equipment.guitar.pickup}</p>
            </div>
          </div>
        </div>

        {/* Amplifier */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
          <h3 className="text-xl font-semibold text-red-900 mb-4">🔊 Amplifier</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-red-800 mb-1">Recommended:</h4>
              <p className="text-sm text-red-700">{equipment.amp.recommended}</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-1">Alternatives:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                {equipment.amp.alternatives.map((alt, i) => (
                  <li key={i}>• {alt}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-1">Settings:</h4>
              <div className="bg-white rounded-lg p-3 text-xs">
                {Object.entries(equipment.amp.settings).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key}:</span>
                    <span className="font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Effects */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">🎛️ Effects</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-purple-800 mb-1">Distortion:</h4>
              <p className="text-sm text-purple-700">{equipment.effects.distortion}</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-1">Reverb:</h4>
              <p className="text-sm text-purple-700">{equipment.effects.reverb}</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-1">Other:</h4>
              <p className="text-sm text-purple-700">{equipment.effects.other}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
