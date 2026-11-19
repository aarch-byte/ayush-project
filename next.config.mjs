/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // On Vercel (standard), runs natively at root domain.
  // On GitHub Pages, applies subpath and static export when explicitly set.
  ...(isGithubPages && {
    output: 'export',
    basePath: '/ayush_universe',
    assetPrefix: '/ayush_universe/',
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  reactStrictMode: true,
  transpilePackages: ['three'],
};

export default nextConfig;
