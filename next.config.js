/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.ipfscdn.io",  "7ac98f1c1bac504f7db9c7e3f6411e05.ipfscdn.io", "bafybeiho45by6fkf3l7wuzavqod53aifrp4hme4meazx3hunlmbtstco7y.ipfs.cf-ipfs.com"],
  },
};

module.exports = nextConfig;
