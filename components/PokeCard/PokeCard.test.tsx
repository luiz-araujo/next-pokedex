import { composeStories } from '@storybook/react';
import { render, screen } from '@/test/testUtils';
import * as stories from './PokeCard.stories';

const { Default: PokeCard } = composeStories(stories);

describe('PokeCard', () => {
  it('should render the PokeCard', () => {
    render(<PokeCard />);

    screen.getByTestId(/pokecard/i);
    screen.getByText(/bulbasaur/i);
  });
});
