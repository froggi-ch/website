import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Old URLs that may still be linked somewhere.
  // The Froggi documentation platform moved from the root to /documentation.
  redirects: {
    '/ki': '/documentation/integrationen',
    '/produkt': '/documentation/produkt',
    '/funktionen': '/documentation/funktionen',
    '/integrationen': '/documentation/integrationen',
    '/preise': '/documentation/preise',
    '/kontakt': '/documentation/kontakt',
    '/legal': '/documentation/legal',
    '/branchen/hauswartung': '/documentation/branchen/hauswartung',
  },
});
