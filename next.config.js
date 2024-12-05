/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  images: {
    // domains: ["ipfs.io/ipfs/"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/ipfs/QmVJXBbzRSLxYqXhmXrGhAh1Y6S183BYSdDgJ9eniXJXr8',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/ipfs/QmdVQMKQHDf91Jpzs3BVQZocykjJEqf6LkHYV24XdqBP6t',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/ipfs/QmTvdamvJw3DtTusr1NBq954Nu79Lw5R5w1NAfAv6NNgb4',
      },
    ],
  },
};

module.exports = nextConfig;
