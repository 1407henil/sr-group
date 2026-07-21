# S R Group Website

Static site for S R Group (S R Industries, S R Plast, S R Polymers) built with Astro.
Pure HTML/CSS/JS output — no WordPress, PHP, or database. Deploys free on GitHub Pages.

## Brand tokens (locked)

| Token | Hex | Usage |
|---|---|---|
| Bone cream | #F5EFE0 | Primary background |
| Warm gold | #C49A2A | Accent — rules, CTAs |
| Deep navy | #0C0153 | Headlines / text / selective highlights only — not a background |

Naming convention: always "S R" with a space (S R Group, S R Industries, S R Plast, S R Polymers).

## Local development

npm install
npm run dev
npm run build
npm run preview

## Status

Pages built: Home, About.
Still to build: Companies (3), Products, Industries Served, Infrastructure, Quality, Downloads, Contact.

## IMPORTANT — current temporary state

astro.config.mjs has base: '/sr-group/' set, and public/CNAME does NOT exist yet.
This is intentional while previewing at github.io/sr-group/ — a CNAME file makes
GitHub redirect to the custom domain and breaks the /sr-group/ subpath.

When ready to go live on www.srindp.com:
1. Remove the "base" line from astro.config.mjs
2. Add public/CNAME containing: www.srindp.com
3. Point GoDaddy DNS: www -> CNAME -> <username>.github.io ; root -> A records -> 185.199.108.153/109.153/110.153/111.153
4. In GitHub repo Settings -> Pages, set custom domain to www.srindp.com
