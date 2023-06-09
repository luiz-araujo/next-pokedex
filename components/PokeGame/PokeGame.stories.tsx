import type { Meta, StoryObj } from '@storybook/react';
import { PokeGame } from './PokeGame';

const meta = {
  title: 'Components/PokeGame',
  component: PokeGame,
  args: {
    isWinner: true,
    exp: 45,
    cards: [
      {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        base_experience: 178,
      },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '0 auto' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof PokeGame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
