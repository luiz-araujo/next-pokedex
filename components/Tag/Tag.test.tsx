import { composeStories } from '@storybook/react';
import { render, screen } from '@/test/testUtils';
import * as stories from './Tag.stories';

const { Default: Tag } = composeStories(stories);

describe('Tag', () => {
  it('should render the tag', () => {
    render(<Tag text="50%" />);

    screen.getByTestId(/tag-label/i);
    screen.getByText(/50%/i);
  });
});
