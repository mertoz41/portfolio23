/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: "https://d1b90agdfvsto3.cloudfront.net",
            port: '',
            pathname: ''
        }
    ]
    // domains: ["https://d1b90agdfvsto3.cloudfront.net"],
  },
};

module.exports = nextConfig;
