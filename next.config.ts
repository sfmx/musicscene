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
};

export default withMDX(nextConfig);
