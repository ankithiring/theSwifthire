/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'eslint' option in next.config.js is no longer supported in newer
  // Next.js releases. If you relied on `ignoreDuringBuilds`, consider
  // running ESLint as part of CI or adjust lint scripts instead.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
