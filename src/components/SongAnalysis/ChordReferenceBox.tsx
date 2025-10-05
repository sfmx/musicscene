"use client";

import React from "react";
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";

interface ChordReferenceBoxProps {
  chords: string[];
  title?: string;
}

const ChordReferenceBox: React.FC<ChordReferenceBoxProps> = ({
  chords,
  title = "Primary Chords Used"
}) => {
  // Remove duplicates while preserving order
  const uniqueChords = Array.from(new Set(chords));

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {uniqueChords.map((chord) => (
          <div key={chord} className="flex flex-col items-center">
            <div className="scale-75 origin-center">
              <SimpleFretboardDiagram chord={chord} />
            </div>
            <span className="mt-2 text-xs font-medium text-gray-700">{chord}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordReferenceBox;