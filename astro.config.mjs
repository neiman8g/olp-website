// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://olp-website-tau.vercel.app',
  trailingSlash: 'ignore',

  redirects: {
    '/products/elevate': '/products/category/elevator-backup',
    '/products/fire-alarm-backup': '/products/category/fire-alarm-backup',
    '/products/lcr20': '/products/category/load-control-relays',
    // ISO-Care moved from voltage-regulators to isolation-transformers
    '/products/category/isolation': '/products/category/isolation-transformers',
    // Frequency Converter promoted from custom-oem to its own category
    '/products/category/frequency-conversion': '/products/category/frequency-converters',
    // Removed placeholder product slugs — redirect each to its category page
    '/products/power-distribution': '/products/category/power-distribution',
    '/products/medical-grade': '/products/category/medical-grade',
    '/products/voltage-regulators': '/products/category/voltage-regulators',
    '/products/custom-oem': '/products/category/custom-oem',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
  adapter: vercel(),
});