import { RenderOptions, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { Cache, SWRConfig } from 'swr';

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'> & {
  userEventSetup?: Parameters<typeof userEvent.setup>[0];
};

type WrapperProps = {
  children: React.ReactNode;
  cache: Cache<unknown>;
};

export class NoErrorThrownError extends Error {}

/**
 * In some situations we need to verify thrown error. This help-us to not violate a lint rule
 *
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md#how-to-catch-a-thrown-error-for-testing-without-violating-this-rule
 */
export async function getError<T>(call: () => unknown): Promise<T> {
  try {
    await call();

    throw new NoErrorThrownError();
  } catch (error) {
    return error as T;
  }
}

/**
 * Setup global Context Providers
 */
const Wrapper = ({ children, cache }: WrapperProps) => {
  return <SWRConfig value={{ provider: () => cache }}>{children}</SWRConfig>;
};

const customRender = (
  ui: ReactElement,
  { userEventSetup, ...options }: CustomRenderOptions = {},
) => {
  const cache = new Map();

  return {
    user: userEvent.setup(userEventSetup),
    cache,
    ...render(ui, {
      wrapper: (props) => {
        return <Wrapper {...props} cache={cache} />;
      },
      ...options,
    }),
  };
};

// eslint-disable-next-line import/export -- the render method must be replaced with the custom render
export * from '@testing-library/react';

/**
 * Defines a custom render method that includes things like global context providers
 *
 * @see https://testing-library.com/docs/react-testing-library/setup/#custom-render
 */
export { customRender as render }; // eslint-disable-line --  the render method must be replaced with the custom render
