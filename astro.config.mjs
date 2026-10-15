import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Old URLs that may still be linked somewhere.
  redirects: {
    '/ki': '/integrationen',
  },
});
