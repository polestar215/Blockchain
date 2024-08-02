const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    ACCOUNT_INTERACTION_PUBLIC_KEY: process.env.ACCOUNT_INTERACTION_PUBLIC_KEY,
    ACCOUNT_INTERACTION_PRIVATE_KEY:
      process.env.ACCOUNT_INTERACTION_PRIVATE_KEY,
    INFURA_PROVIDER_SECRET: process.env.INFURA_PROVIDER_SECRET,
    INFURA_PROVIDER_ID: process.env.INFURA_PROVIDER_ID,
    ETHEREUM_NETWORK: process.env.ETHEREUM_NETWORK,
    CONTRACT_OWNER: process.env.CONTRACT_OWNER,
    CONTRACT_OWNER_PRIVATE_KEY: process.env.CONTRACT_OWNER_PRIVATE_KEY,
  },
  /*webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },*/
  reactStrictMode: true,
});
