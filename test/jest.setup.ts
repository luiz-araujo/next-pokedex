/* eslint-disable import/order -- improves comments readability */

/**
 * jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 *
 * expect(element).toHaveTextContent(/react/i)
 *
 * @see https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';

/**
 * All tests cases that performs networks calls must be mocked using MSW
 * this will start the MSW server
 *
 * The MSW Server can be used globally in all tests inside this project
 *
 * @example
 * import server from './mocks/server';
 * ...
 * server.use(
 *  rest.post(...)
 * );
 */
import { server } from '@/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/**
 * Importing next during test applies automated polyfills:
 *  - Polyfill the built-in "fetch" provided by Next.js
 *
 * @see https://github.com/vercel/next.js/discussions/13678#discussioncomment-22383 How to use built-in fetch in tests?
 * @see https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support Next.js Blog - Improved Built-in Fetch Support
 */
import 'next';

/**
 * JSDOM doesn't implement PointerEvent so we need to mock our own implementation
 * Default to mouse left click interaction
 *
 * @see https://github.com/radix-ui/primitives/issues/1382
 * @see https://github.com/radix-ui/primitives/issues/1207
 * @see https://github.com/jsdom/jsdom/pull/2666
 */
class MockPointerEvent extends Event {
  button: number;
  ctrlKey: boolean;
  pointerType: string;

  constructor(type: string, props: PointerEventInit) {
    super(type, props);
    this.button = props.button || 0;
    this.ctrlKey = props.ctrlKey || false;
    this.pointerType = props.pointerType || 'mouse';
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.PointerEvent = MockPointerEvent as any;
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.releasePointerCapture = jest.fn();

/**
 * Jest doesn't fail the tests when there is a console.error.
 * In large codebase, we can end up with the test output overloaded
 * by a lot of errors, warnings, etc.. To prevent this, we want to
 * fail each test that is logging to the console.
 */
import failOnConsole from 'jest-fail-on-console';

failOnConsole();
