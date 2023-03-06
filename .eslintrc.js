module.exports = {
  env: {
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  rules: {
    /**
     * Such messages are considered to be for debugging purposes and therefore not
     * suitable to ship to the client. In general, calls using console should be
     * stripped before being pushed to production.
     */
    'no-console': 'error',
    /**
     * JavaScript allows the omission of curly braces when a block contains only one statement. However,
     * it is considered by many to be best practice to never omit curly braces around blocks, even when
     * they are optional, because it can lead to bugs and reduces code clarity and consistency.
     */
    curly: 'error',
    /**
     * This rule avoid bugs by disallowing expressions where the operation doesn't affect the value
     * Comparisons which will always evaluate to true or false and logical expressions (||, &&, ??)
     * which either always short-circuit or never short-circuit are both likely indications of
     * programmer error.
     *
     * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
     */
    'no-constant-binary-expression': 'error',
    /**
     * Nesting ternary expressions can make code more difficult to understand.
     *
     * @see https://eslint.org/docs/latest/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',
    /**
     * Imports restriction agreements
     *
     * We can only import what is exported by the index file of the folders
     * that are direct children of `components` or `features`
     *
     * @example
     * // invalid
     * import { Header } from '@components';
     * import { Header } from '@components/Header/Header';
     * import { Summary } from '@features/cart/components/Summary';
     *
     * // valid
     * import { Header } from '@components/Header';
     * import { Summary } from '@features/cart';
     */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@components',
          },
        ],
        patterns: [
          {
            group: ['@components/*/**', '@features/*/**'],
          },
        ],
      },
    ],
    /**
     * Disallows async functions which have no await expression.
     */
    'require-await': 'error',
    /**
     * There are many ways to import a index file. This rule prevent unnecessary
     * path segments in import and require statements
     */
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    /**
     * Enforce a convention in the order of named imports
     *
     * @see https://github.com/benmosher/eslint-plugin-import/issues/1732
     */
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    /**
     * Enforce a convention in the order of require / import statements.
     */
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'screen.get*', 'screen.find*'],
          },
        ],
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx'],
    },
  ],
};
