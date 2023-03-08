import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ThemeProvider } from 'next-themes';
import { SWRConfig } from 'swr';
import { darkTheme } from '@/theme/stitches.config';

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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <Story />
      </ThemeProvider>
    </SWRConfig>
  ),
];
