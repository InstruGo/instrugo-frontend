/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Supported locales
    locales: ['en', 'hr'],
    // Default locale for non-locale prefixed path e.g. /home
    defaultLocale: 'en',
  },
  redirects: async function redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
