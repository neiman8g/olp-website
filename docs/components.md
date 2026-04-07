# Component Inventory

## Reusable Components (`src/components/`)

| Component | Props | When to Use |
|-----------|-------|-------------|
| `Button.astro` | `variant` (primary/ghost), `size` (sm/md/lg), `href`, `icon` (arrow-right/bolt/external), `fullWidth`, `id`, `type` | Every button and CTA link. Renders `<a>` if `href`, `<button>` otherwise. |
| `Card.astro` | `variant` (product/feature/testimonial/cta), `href`, `accent`, `class` | Card wrappers. Uses `<slot />` for content. Renders `<a>` if `href`. |
| `Header.astro` | none | Fixed nav bar. Click-based dropdowns with ARIA. Mobile accordion. |
| `Footer.astro` | none | Four-column footer with mobile-friendly touch targets. |
| `ChatWidget.astro` | none | Floating AI chat (Claude 3 Haiku). Email-gated. |
| `DocumentGate.astro` | `product` (Product object) | Email-gated document downloads for CAD/BIM files. |
| `SEOHead.astro` | `title`, `description`, `canonical`, `ogImage` | Meta tags, Open Graph, Twitter Card. |
| `SchemaOrg.astro` | `product`, `breadcrumbs` | JSON-LD structured data. |
| `BaseLayout.astro` | `title`, `description`, `canonical`, `ogImage`, `product`, `breadcrumbs` | Master page wrapper. Every page uses this. |

## SVG Illustrations (`src/components/illustrations/`)

| Component | viewBox | Used On |
|-----------|---------|---------|
| `HeroRiser.astro` | 460x540 | Homepage hero |
| `CustomOEM.astro` | 500x300 | Homepage OEM section, /products/category/custom-oem |
| `EmergencyLighting.astro` | 600x360 | Category page + products index card |
| `ElevatorBackup.astro` | 600x360 | Category page + products index card |
| `UPSSystems.astro` | 600x360 | Category page + products index card |
| `FireAlarmBackup.astro` | 600x360 | Category page + products index card |
| `VoltageRegulators.astro` | 600x360 | Category page + products index card |
| `MedicalGrade.astro` | 600x360 | Category page + products index card |
| `PowerDistribution.astro` | 600x360 | Category page + products index card |
| `LoadControlRelays.astro` | 600x360 | Category page + products index card |
| `Monitoring.astro` | 600x360 | Category page + products index card |

## Button Variants

```html
<!-- Primary CTA (filled cyan, dark text) -->
<Button href="/contact/" size="lg" icon="arrow-right">Request a Quote</Button>

<!-- Ghost (cyan outline) -->
<Button href="/products/" variant="ghost" size="lg">View Products</Button>

<!-- Form submit (preserves id for inline scripts) -->
<Button type="submit" id="contact-submit-btn" size="lg">Send Message</Button>

<!-- Full width mobile -->
<Button href="/contact/" size="lg" icon="bolt" fullWidth>Request a Quote</Button>
```

## Card Variants

```html
<!-- Product card with link and top accent -->
<Card variant="product" href="/products/category/emergency-lighting">
  ...icon, heading, description, link text...
</Card>

<!-- Feature card (no link) -->
<Card variant="feature">
  ...icon, heading, description...
</Card>

<!-- Testimonial -->
<Card variant="testimonial">
  ...stars, quote, author...
</Card>
```

## CSS Classes (in global.css, used by components internally)
- `.btn-primary` — filled cyan, dark text
- `.btn-ghost` — cyan outline, fills on hover
- `.card-glow` — transparent border, cyan glow on hover, scan-line animation
- `.card-top-accent` — 2px solid cyan top border
