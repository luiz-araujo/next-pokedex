import type { Meta, StoryObj } from '@storybook/react';
import { PokeGame } from './PokeGame';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof PokeGame> = {
  title: 'Components/PokeGame',
  component: PokeGame,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '0 auto' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof PokeGame>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
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
};
