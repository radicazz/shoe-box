import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://radicazz.github.io',
  base: '/shoe-box',
  integrations: [tailwind({
    config: {
      applyBaseStyles: true,
    },
  })],
  output: 'static',
});
