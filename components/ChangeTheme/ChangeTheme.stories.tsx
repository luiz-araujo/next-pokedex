import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { ChangeTheme } from './ChangeTheme';
import { ThemeBlock } from './ChangeTheme.styles';

const meta = {
  title: 'Components/ChangeTheme',
  component: ChangeTheme,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { theme, setTheme, resolvedTheme } = useTheme();
      const toggleTheme = () => setTheme(theme === 'light' ? 'light' : 'dark');

      useEffect(() => {
        return () => {
          setTheme('light');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
        <ThemeBlock
          onClick={() => toggleTheme()}
          themeColor={resolvedTheme === 'dark' ? 'dark' : 'light'}
        >
          <Story />
        </ThemeBlock>
      );
    },
  ],
} satisfies Meta<typeof ChangeTheme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
