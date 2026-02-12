import React from 'react'

export interface FretboardHighlightProps {
  /** The root note to draw from, e.g. "C4" */
  root: string
  /** The interval to highlight, e.g. "m2", "M2", "P4", "P8" */
  interval: string
  /** A human‐readable label for this example */
  label: string
}

/**
 * TODO: This component needs to be updated to work with SimpleFretboardDiagram's current interface,
 * or SimpleFretboardDiagram needs to be extended to support interval highlighting.
 * For now, this renders a placeholder.
 */
export const FretboardHighlight: React.FC<FretboardHighlightProps> = ({
  root,
  interval,
  label,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-600">
        <p className="text-sm">Fretboard visualization for {root} with {interval} interval</p>
        <p className="text-xs mt-2">(Component needs implementation)</p>
      </div>
    </div>
  )
}
