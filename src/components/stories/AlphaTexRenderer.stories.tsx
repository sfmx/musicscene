import type { Meta, StoryObj } from '@storybook/react';
import AlphaTexRenderer from '../AlphaTexRenderer';

const meta: Meta<typeof AlphaTexRenderer> = {
  title: 'Music/AlphaTexRenderer',
  component: AlphaTexRenderer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    alphaTex: {
      control: 'text',
      description: 'AlphaTex notation string to render',
    },
    title: {
      control: 'text',
      description: 'Title for the rendered notation',
    },
    showValidation: {
      control: 'boolean',
      description: 'Whether to show validation information',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNotation: Story = {
  args: {
    alphaTex: '3.6 5.5 7.4 |',
  },
};

export const OpenStringChord: Story = {
  args: {
    alphaTex: '(0.3 0.4).4 |',
  },
  parameters: {
    docs: {
      description: {
        story: 'This renders an open string chord (fret 0 on strings 3 and 4) with quarter note duration.',
      },
    },
  },
};

export const ComplexProgression: Story = {
  args: {
    alphaTex: '12.3 5.3 7.3 | 0.6 3.5 | (0.3 0.4).4 r.4 |',
  },
  parameters: {
    docs: {
      description: {
        story: 'A more complex progression with multiple bars, chords, and rests.',
      },
    },
  },
};

export const WithValidationError: Story = {
  args: {
    alphaTex: '3.7 5.8 invalid |', // Invalid string numbers and notation
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component handles validation errors with detailed error messages.',
      },
    },
  },
};

export const EmptyNotation: Story = {
  args: {
    alphaTex: '',
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows validation errors for empty notation.',
      },
    },
  },
};

export const ScaleLikePattern: Story = {
  args: {
    alphaTex: '0.6 2.6 3.6 5.6 7.6 8.6 10.6 12.6 |',
    title: 'Chromatic Scale Pattern',
  },
  parameters: {
    docs: {
      description: {
        story: 'A scale-like pattern ascending the low E string (6th string).',
      },
    },
  },
};

export const WithValidationShown: Story = {
  args: {
    alphaTex: '3.6 5.5 |',
    showValidation: true,
    title: 'Basic Pattern with Validation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how validation information is displayed alongside valid notation.',
      },
    },
  },
};

export const DurationRanges: Story = {
  args: {
    alphaTex: ':4 2.3 3.3 :8 3.3 4.3 3.3 4.3 |',
    title: 'Duration Ranges Example',
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates AlphaTex duration range syntax. ":4" sets quarter note duration for following notes, ":8" sets eighth note duration.',
      },
    },
  },
};

export const RepeatBeats: Story = {
  args: {
    alphaTex: '3.3*4 | 4.3*4',
    title: 'Repeat Beats Example',
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates AlphaTex repeat multiplier syntax. "3.3*4" plays fret 3 on string 3 four times, "4.3*4" plays fret 4 on string 3 four times. This creates a consistent rhythm pattern.',
      },
    },
  },
};

export const MultipleVoices: Story = {
  args: {
    alphaTex: '\\voice c4 d4 e4 f4 | c4 d4 e4 f4 \\voice c3 d3 e3 f3 | c3 d3 e3 f3',
    title: 'Multiple Voices Example',
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates AlphaTex multiple voices syntax. Uses \\voice to create independent voices within one bar. The first voice plays higher notes (c4 d4 e4 f4) while the second voice plays lower notes (c3 d3 e3 f3), creating harmonic content.',
      },
    },
  },
};

export const Accidentals: Story = {
  args: {
    alphaTex: '\\accidentals explicit c#4 d4 c#4 db4 | c#4 { acc forceFlat } c4 { acc forceSharp } d4 { acc forceNatural } |',
    title: 'Accidentals Example',
    showValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates AlphaTex accidentals syntax. Shows sharps (c#4), flats (db4), and forced accidentals using acc effects. The first bar uses explicit accidentals mode, and the second bar shows forced accidental effects.',
      },
    },
  },
};

export const CustomTitle: Story = {
  args: {
    alphaTex: '3.6 5.5 7.4 9.3 12.2 15.1 | 0.6 3.5 5.4 7.3 |',
    title: 'Complex Guitar Riff',
    className: 'border-2 border-blue-200 rounded-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom title and styling with className.',
      },
    },
  },
};
