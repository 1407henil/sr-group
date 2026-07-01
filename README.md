# SR Group Website

Static site for SR Group (S R Industries, S R Plast, SR Polymers) built with [Astro](https://astro.build).
Pure HTML/CSS/JS output — no WordPress, PHP, or database. Deploys free on GitHub Pages.

## Brand tokens (locked)

| Token | Hex | Usage |
|---|---|---|
| Bone cream | `#F5EFE0` | Primary background |
| Warm gold | `#C49A2A` | Accent — rules, CTAs, monogram ring |
| Deep navy | `#0C0153` | Headlines / text / selective highlights only — not a background |

Fonts: Cormorant Garamond (display/headlines), Inter (body), IBM Plex Mono (data/labels/eyebrows).

All tokens live in `src/styles/global.css` as CSS variables — change once, applies everywhere.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # outputs to /dist
npm run preview     # preview the production build
```

## Project structure

```
src/
  layouts/Layout.astro     — base HTML shell, fonts, SEO meta, JSON-LD
  components/
    Header.astro            — sticky nav + mobile menu
    Footer.astro             — site footer
    Monogram.astro            — the SR orbital monogram (reusable SVG)
  styles/global.css          — design tokens + base styles
  pages/index.astro          — homepage (currently the only page built)
```

## Adding pages

This site currently has only the homepage built as a working example.
Still to build, matching the sitemap:

- `/about` — About SR Group
- `/companies/sr-industries`, `/companies/sr-plast`, `/companies/sr-polymers`
- `/products` — filterable product listing
- `/industries-served`
- `/infrastructure` — Manufacturing Infrastructure
- `/quality` — Quality Assurance
- `/downloads` — Brochures / TDS / Certificates (PDF library)
- `/contact`

Each is a new `.astro` file under `src/pages/`, wrapped in `<Layout>` the same way `index.astro` is.
Nav links for these already exist in `Header.astro` and `Footer.astro`.

## Contact form

GitHub Pages serves static files only — no server-side form processing.
Wire the `/contact` form to a third-party handler when it's built:
[Formspree](https://formspree.io) or [Getform](https://getform.io) are the simplest (free tier available, just point the form `action` at them).

## Deploying to GitHub Pages

1. Push this project to a GitHub repo.
2. In the repo settings → **Pages**, set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
4. **Custom domain**: the `public/CNAME` file is already set to `www.srindp.com`. In GoDaddy DNS, point:
   - `www` → CNAME → `<your-github-username>.github.io`
   - Apex/root `srindp.com` → A records → GitHub Pages' IPs (185.199.108.153, .109.153, .110.153, .111.153), or set up a redirect from apex to `www`.
5. In GitHub repo settings → Pages, enter `www.srindp.com` as the custom domain and enable **Enforce HTTPS** once DNS propagates.

## Downloads / PDFs

Once brochures, TDS, and certificates are ready, place them under `public/downloads/` using a
consistent naming convention, e.g.:

```
public/downloads/sr-polymers-upr-tds-2026.pdf
public/downloads/sr-industries-solvents-brochure-2026.pdf
```

They'll be served directly at `/downloads/<filename>.pdf` with no extra config.
