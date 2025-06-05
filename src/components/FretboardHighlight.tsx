import React from 'react'
import SimpleFretboardDiagram from './SimpleFretboardDiagram'

export interface FretboardHighlightProps {
  /** The root note to draw from, e.g. "C4" */
  root: string
  /** The interval to highlight, e.g. "m2", "M2", "P4", "P8" */
  interval: string
  /** A human‐readable label for this example */
  label: string
}

export const FretboardHighlight: React.FC<FretboardHighlightProps> = ({
  root,
  interval,
  label,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <SimpleFretboardDiagram
        root={root}
        highlightInterval={interval}
        width={400}
        height={150}
      />
    </div>
  )
}
