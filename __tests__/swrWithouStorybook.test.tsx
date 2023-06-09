import { composeStories } from '@storybook/react';
import { server } from '@/mocks/server';
import { render, screen } from '@/test/testUtils';
import * as stories from '../stories/swr.stories';

const { SuccessBehavior, ErrorBehavior } = composeStories(stories);

describe('pages/swr', () => {
  it('should render info about react repo', async () => {
    server.use(SuccessBehavior.parameters?.msw.handlers[0]);

    render(<SuccessBehavior />);

    await screen.findByRole('link', {
      name: /ir para a home/i,
    });

    screen.getByRole('heading', {
      name: /react - it is a mock baby - ¯\\_\(ツ\)_\/¯/i,
    });

    screen.getByText(
      /this is a simple example how to mock an http request using msw/i,
    );

    screen.getByText(/👁 6661/i);
    screen.getByText(/✨ 181103/i);
    screen.getByText(/🍴 36799/i);
  });

  it('should render loading message', async () => {
    server.use(SuccessBehavior.parameters?.msw.handlers[0]);

    render(<SuccessBehavior />);

    await screen.findByText('Loading...');
  });

  it('should render error message', async () => {
    server.use(ErrorBehavior.parameters?.msw.handlers[0]);

    render(<ErrorBehavior />);

    await screen.findByText('An error has occurred.');
  });
});
