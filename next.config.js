const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["iili.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};
module.exports = {
  images: {
    domains: ['rb.gy'],
  },
}

module.exports = nextConfig;
