/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/shri-physiotherapy-rehab",
  assetPrefix: "/shri-physiotherapy-rehab",
};

export default nextConfig;
