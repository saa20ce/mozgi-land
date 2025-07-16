import pkg from './next-i18next.config.js';

const { i18n } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['127.0.0.1', 'localhost'],
  },
};

export default nextConfig;