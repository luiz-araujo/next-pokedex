import { composeStories } from '@storybook/testing-react';
import { server } from '@/mocks/server';
import { render, screen } from '@/test/testUtils';
import * as stories from '../stories/swr.stories';

const { SuccessBehavior, LoadingBehavior, ErrorBehavior } =
  composeStories(stories);

describe('pages/swr', () => {
  it('should render info about react repo', async () => {
    server.use(SuccessBehavior.parameters?.msw.handlers[0]);

    render(<SuccessBehavior />);

    await screen.findByRole('link', {
      name: /ir para a home/i,
    });

    await screen.findByRole('heading', {
      name: /react - it is a mock baby - ¯\\_\(ツ\)_\/¯/i,
    });

    await screen.findByText(
      /this is a simple example how to mock an http request using msw/i,
    );

    await screen.findByText(/👁 6661/i);
    await screen.findByText(/✨ 181103/i);
    await screen.findByText(/🍴 36799/i);
  });

  it('should render loading message', async () => {
    server.use(LoadingBehavior.parameters?.msw.handlers[0]);

    render(<LoadingBehavior />);

    await screen.findByText('Loading...');
  });

  it('should render error message', async () => {
    server.use(ErrorBehavior.parameters?.msw.handlers[0]);

    render(<ErrorBehavior />);

    await screen.findByText('An error has occurred.');
  });
});
