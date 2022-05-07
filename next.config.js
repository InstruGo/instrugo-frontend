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
        ? 'http://localhost:8000/api'
        : 'https://api.instrugo.frle.net/api',
    googleClientId:
      '825083933624-10nliucjethpcs569oachpserk391pfu.apps.googleusercontent.com',
  },
};

module.exports = nextConfig;
