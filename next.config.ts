import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx', 'md'],
  experimental: {
    viewTransition: true,
  },
};

const withMdx = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMdx(nextConfig);
