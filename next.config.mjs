/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? "/portfolio" : "",
  assetPrefix: isGithubPages ? "/portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/portfolio" : ""
  }
};

export default nextConfig;
