const { i18n } = require('next-i18next/config');

module.exports = {
  i18n,
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:3000/api',
  },
};