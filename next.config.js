/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Supported locales
    locales: ['en', 'hr'],
    // Default locale for non-locale prefixed path e.g. /home
    defaultLocale: 'en',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'http://localhost:3000/api',
  },
};

module.exports = nextConfig;
