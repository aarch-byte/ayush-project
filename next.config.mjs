/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// If deploying to GitHub Pages under a repo subpath, e.g. /ayush_universe
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/ayush_universe' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  transpilePackages: ['three'],
  trailingSlash: true,
};

export default nextConfig;
