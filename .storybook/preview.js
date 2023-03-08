import { initialize, mswDecorator } from 'msw-storybook-addon';
import { SWRConfig } from 'swr';

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
};

export const decorators = [
  mswDecorator,
  (Story) => (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Story />
    </SWRConfig>
  ),
];
