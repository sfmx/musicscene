import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react"
  }
});

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
  webpack: (config, { isServer }) => {
    // Handle AlphaTab font loading
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };

      // AlphaTab webpack plugin handles worker/worklet bundling for audio playback
      const { AlphaTabWebPackPlugin } = require('@coderline/alphatab/webpack');
      config.plugins.push(new AlphaTabWebPackPlugin({
        assetOutputDir: false // We copy assets to public/ ourselves below
      }));
    }

    // Copy AlphaTab assets to public folder during build
    config.plugins.push(
      new (require('copy-webpack-plugin'))({
        patterns: [
          {
            from: 'node_modules/@coderline/alphatab/dist/font',
            to: '../public/alphatab/font',
            noErrorOnMissing: true
          },
          {
            from: 'node_modules/@coderline/alphatab/dist/soundfont',
            to: '../public/alphatab/soundfont',
            noErrorOnMissing: true
          }
        ]
      })
    );

    return config;
  }
};

export default withMDX(nextConfig);
