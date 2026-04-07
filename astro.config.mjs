// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://olp-website-tau.vercel.app',
  trailingSlash: 'ignore',
  redirects: {
    '/products/elevate': '/products/category/elevator-backup',
    '/products/fire-alarm-backup': '/products/category/fire-alarm-backup',
    '/products/lcr20': '/products/category/load-control-relays',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
});