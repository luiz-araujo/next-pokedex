const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  experimental: {
    /**
     * @see https://github.com/vercel/next.js/pull/14046
     */
    scrollRestoration: true
  },

  eslint: {
    /**
     * The eslint is runned in a separate part of us
     * workflow in the code-quality step
     *
     * Warning: This allows production builds to successfully complete even if
     * your project has ESLint errors.
     *
     * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-eslint
     */
    ignoreDuringBuilds: true,
  },

  typescript: {
    /**
     * The typescript checking is runned in a separate part of our
     * workflow in the code-quality step
     *
     * Doing so will reduce project build time by reducing deployment
     * time on Vercel
     *
     * !! WARN !!
     * Dangerously allow production builds to successfully complete even if
     * your project has type errors.
     * !! WARN !!
     *
     * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
     */
    ignoreBuildErrors: true,
  },

  webpack: (config) => {
    /**
     * Natively, Next doesn't have a specific webpack loader to deal with webfonts
     * so we need to configure a custom loader
     *
     * @see https://webpack.js.org/concepts/loaders
     * @see https://webpack.js.org/guides/asset-modules/
     */
    config.module.rules.push({
      test: /\.(woff|woff2)/,
      type: 'asset/resource',
    });

    // config to recognize the svg files as assets
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    });

    return config;
  },
};
