import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { ChangeTheme } from './ChangeTheme';
import { ThemeBlock } from './ChangeTheme.styles';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ChangeTheme> = {
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
};

export default meta;
type Story = StoryObj<typeof ChangeTheme>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {};
