import type { Meta, StoryObj } from '@storybook/react';
import { PokeCard } from './PokeCard';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof PokeCard> = {
  title: 'Components/PokeCard',
  component: PokeCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '0 auto', width: '15rem' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof PokeCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    base_experience: 99,
  },
};
