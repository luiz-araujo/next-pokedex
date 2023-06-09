import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { SWRConfig } from 'swr';
import SWR from '../pages/swr';

const meta = {
  title: 'Example/SWR',
  component: SWR,
  decorators: [
    (Story) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <Story />
      </SWRConfig>
    ),
  ],
} satisfies Meta<typeof SWR>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.github.com/repos/facebook/react',
          (_, res, ctx) => {
            return res(
              ctx.json({
                name: 'react - it is a mock baby - ¯\\_(ツ)_/¯',
                description:
                  'this is a simple example how to mock an http request using msw',
                forks_count: 36799,
                stargazers_count: 181103,
                subscribers_count: 6661,
              }),
            );
          },
        ),
      ],
    },
  },
};

export const LoadingBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.github.com/repos/facebook/react',
          (_, res, ctx) => {
            return res(ctx.delay('infinite'));
          },
        ),
      ],
    },
  },
};

export const ErrorBehavior: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://api.github.com/repos/facebook/react',
          (_, res, ctx) => {
            return res(ctx.status(403));
          },
        ),
      ],
    },
  },
};
