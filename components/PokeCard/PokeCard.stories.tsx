import type { Meta, StoryObj } from '@storybook/react';
import { PokeCard } from './PokeCard';

const meta = {
  title: 'Components/PokeCard',
  component: PokeCard,
  args: {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    base_experience: 99,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '0 auto', width: '15rem' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof PokeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
