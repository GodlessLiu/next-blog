import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75, 50],
  },
  pageExtensions: ['tsx', 'ts', 'mdx', 'md'],
};

const withMdx = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMdx(nextConfig);
