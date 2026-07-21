// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.srindp.com',
  // TEMPORARY — only needed while previewing at github.io/sr-group/.
  // DELETE this "base" line (and re-add public/CNAME) once www.srindp.com
  // is pointed at this repo, since the live domain serves from the root.
  base: '/sr-group/',
});
