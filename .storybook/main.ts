import { StorybookFrontLoaderPlugin } from './storybookFrontLoaderPlugin';
const config = {
  stories: [
    '../components/**/*.stories.@(ts|tsx)',
    '../stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.plugins.push(new StorybookFrontLoaderPlugin());

    /**
     * Fix Invalid SVG error
     */
    const fileLoaderRule = config.module.rules.find((rule) => {
      return rule.test && rule.test.test('.svg');
    });
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    });
    return config;
  },
  docs: {
    autodocs: false,
  },
};
export default config;
