// eslint-disable-next-line @typescript-eslint/no-var-requires -- Jest does not understand the import syntax, so we need to use require
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',

  /**
   * The pattern used by Jest to detect test files
   *
   * will be considered a test every `.js`, `.jsx`, `.ts and `.tsx` files
   * with a suffix of `.test` (e.g. Component.test.ts or Component.test.tsx)
   */
  testRegex: '(\\.|/)test\\.[jt]sx?$',
  moduleNameMapper: {
    // Handle module aliases
    '\\.(woff|woff2)$': '<rootDir>/test/mocks/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/test/(.*)$': '<rootDir>/test/$1',
    '^@/theme/(.*)$': '<rootDir>/theme/$1',
    '^@/mocks/(.*)$': '<rootDir>/mocks/$1',
  },

  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/.storybook/**',
    '!**/storybook-static/**',
    '!**/*.stories.*',
    '!**/mocks/**',
    '!**/.github/**',
    '!**/index.ts',
    '!<rootDir>/public/mockServiceWorker.js',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
