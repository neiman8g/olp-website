# Online Power Website — Claude Code Context

## What This Is
Marketing website for Online Power (onlinepower.com), a US manufacturer of mission-critical power protection equipment. Founded 1975, Los Angeles, CA. ISO 9001 certified. Builds to order, ships direct.

## Stack
- **Framework:** Astro 6.1.4 (static site, SSR only for /api/chat)
- **CSS:** Tailwind 4.2.2 via CSS-first `@theme` block in `src/styles/global.css`
- **Hosting:** Vercel (auto-deploys from GitHub `main`)
- **No React, Vue, or JS frameworks.** Pure Astro components + `<script>` tags.
- **No GSAP, Framer Motion, or animation libraries.** CSS animations only.

## Brand Rules (hard constraints)
- **Colors:** Obsidian (#0A0A0F) + Cyan (#00E5FF). That's it. No orange, no warm accents.
- **CTAs:** Filled cyan with dark text. Ghost buttons use cyan outline. No other button colors.
- **Tone:** Industrial. Technical. Precise. Think Fluke, Schneider Electric — not Apple or Stripe.
- **Copy:** Lead with the spec or outcome. No adjective stacking. No marketing fluff.
- **Audience:** Electrical engineers, MEP consultants, facilities managers. Technical, skeptical, skim fast.

## Animation Rules (hard constraints)
- Scroll-triggered animations must NOT hide content at any scroll position.
- Elements animate IN but are never `opacity: 0` for more than 300ms.
- No scroll-jacking. No parallax that delays content visibility.
- `prefers-reduced-motion` must be respected (already in global.css).
- CSS animations only. No JS animation libraries.

## Key Files
- `src/styles/global.css` — All design tokens (`@theme`), button/card CSS classes
- `src/components/Button.astro` — Reusable button (primary/ghost, sm/md/lg)
- `src/components/Card.astro` — Reusable card (product/feature/testimonial/cta)
- `src/components/Header.astro` — Nav with click-based accessible dropdowns
- `src/components/illustrations/` — 11 animated SVG components
- `src/data/products.ts` — 50+ product definitions with specs, docs, categories

## Docs
- [docs/components.md](docs/components.md) — Component inventory and props
- [docs/dev-conventions.md](docs/dev-conventions.md) — File structure, naming, tooling
- [docs/seo.md](docs/seo.md) — Target keywords and metadata patterns
