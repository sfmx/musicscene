import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react"
  }
});

const nextConfig: NextConfig = {
  // output: 'export',
  trailingSlash: true, 
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
  webpack: (config, { isServer }) => {
    // Handle AlphaTab font loading
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Copy AlphaTab assets to public folder during build
    config.plugins.push(
      new (require('copy-webpack-plugin'))({
        patterns: [
          {
            from: 'node_modules/@coderline/alphatab/dist/font',
            to: '../public/alphatab/font',
            noErrorOnMissing: true
          }
        ]
      })
    );

    return config;
  }
};

export default withMDX(nextConfig);
