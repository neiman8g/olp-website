# Development Conventions

## Project Structure
```
src/
├── components/              # Reusable Astro components
│   ├── illustrations/       # Animated SVG illustrations (one per product category)
│   ├── Button.astro         # Use for ALL buttons and CTA links
│   ├── Card.astro           # Use for ALL card wrappers
│   ├── Header.astro         # Fixed nav (click dropdowns, mobile accordion)
│   ├── Footer.astro
│   ├── ChatWidget.astro     # AI chat (Claude 3 Haiku)
│   ├── DocumentGate.astro   # Email-gated doc downloads
│   ├── SEOHead.astro
│   └── SchemaOrg.astro
├── data/                    # TypeScript data files (not markdown)
│   ├── products.ts          # 50+ products with specs, docs, categories
│   ├── navigation.ts        # All nav menus
│   ├── company.ts           # Company info, stats, testimonials
│   └── social.ts
├── layouts/
│   └── BaseLayout.astro     # Every page wraps in this
├── pages/                   # File-based routing
│   ├── products/
│   │   ├── [slug].astro     # Dynamic product detail pages
│   │   ├── index.astro      # All products grid
│   │   └── category/        # 10 category landing pages
│   ├── api/
│   │   └── chat.ts          # SSR endpoint (prerender = false)
│   └── ...
├── styles/
│   └── global.css           # Tailwind @theme + custom classes
└── content/
    └── products/            # (reserved for future MDX content)
```

## CSS Approach
- **Tailwind 4.2.2 CSS-first config** — no `tailwind.config.js`
- All design tokens defined in `src/styles/global.css` via `@theme { }` block
- Custom component classes (`.btn-primary`, `.card-glow`) also in global.css
- Prefer Tailwind utility classes in templates
- No CSS modules, no styled-components, no CSS-in-JS

## Naming
- Components: PascalCase (`Button.astro`, `EmergencyLighting.astro`)
- Pages: kebab-case (`emergency-lighting.astro`, `fire-alarm-backup.astro`)
- Data files: camelCase (`products.ts`, `navigation.ts`)
- CSS custom properties: `--color-{name}`, `--font-{name}`

## Dependencies (keep minimal)
- `astro` — framework
- `tailwindcss` + `@tailwindcss/vite` — styling
- `@astrojs/vercel` — hosting adapter
- `@astrojs/sitemap` — sitemap generation
- `canvas` — OG image generation
- No React. No Vue. No animation libraries. No UI component libraries.

## Fonts
- Loaded via `@import url(...)` in global.css (Google Fonts)
- Space Grotesk (display), Inter (body fallback), Space Mono (technical)
- `display=swap` for performance
- SVG illustration components should NOT import fonts — they inherit from the page

## Forms
- EmailJS for client-side form submission (contact, training, document gate)
- Form submit buttons use `id` attributes referenced by inline `<script>` blocks
- Always preserve `id` props when using the Button component for form submits

## Deployment
- GitHub: github.com/neiman8g/olp-website
- Vercel auto-deploys from `main`
- Root directory: blank (repo root IS the project)
- Build: `npx astro build`
- SSR: only `/api/chat` endpoint
- Env: `ANTHROPIC_API_KEY` in Vercel (never commit .env)
