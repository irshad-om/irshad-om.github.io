// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://irshad-om.github.io',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  devToolbar: { enabled: false },
});
