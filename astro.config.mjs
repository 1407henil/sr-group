// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Using the custom domain (www.srindp.com) via the CNAME file in /public,
  // so no repo-name subpath is needed — site is served from the domain root.
  site: 'https://www.srindp.com',
});
