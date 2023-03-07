import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@/test/testUtils';
import * as stories from './PokeCard.stories';

const { Default: PokeCard } = composeStories(stories);

describe('PokeCard', () => {
  it('should render the PokeCard', () => {
    render(<PokeCard />);

    screen.getByTestId(/pokecard/i);
    // screen.getByText(/50%/i);
  });
});
