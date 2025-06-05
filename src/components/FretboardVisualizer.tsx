import React from 'react';

type Pattern = {
  string: number; // 1 = high E, 6 = low E
  frets: number[];
};

type Props = {
  patterns: Pattern[];
};

const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];

export default function FretboardVisualizer({ patterns }: Props) {
  // Create a 6-string, 5-fret grid (adjust as needed)
  const maxFrets = Math.max(
    4,
    ...patterns.flatMap(p => p.frets)
  );
  const grid = Array.from({ length: 6 }, (_, i) => ({
    string: 6 - i,
    frets: Array.from({ length: maxFrets + 1 }, (_, f) => null as null | boolean)
  }));

  // Mark the frets to highlight
  patterns.forEach(pat => {
    pat.frets.forEach(fret => {
      const stringIdx = 6 - pat.string;
      if (grid[stringIdx] && grid[stringIdx].frets[fret] !== undefined) {
        grid[stringIdx].frets[fret] = true;
      }
    });
  });

  return (
    <div style={{ overflowX: 'auto', margin: '1em 0' }}>
      <table style={{ borderCollapse: 'collapse', fontFamily: 'monospace' }}>
        <tbody>
          {grid.map((row, i) => (
            <tr key={row.string}>
              <td style={{ paddingRight: 8, color: '#888' }}>
                {stringNames[row.string - 1]}
              </td>
              {row.frets.map((marked, fret) => (
                <td
                  key={fret}
                  style={{
                    border: '1px solid #ccc',
                    width: 24,
                    height: 24,
                    textAlign: 'center',
                    background: marked ? '#ffd700' : '#fff'
                  }}
                >
                  {marked ? '●' : ''}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td />
            {grid[0].frets.map((_, fret) => (
              <td key={fret} style={{ fontSize: 10, color: '#888', textAlign: 'center' }}>
                {fret}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
