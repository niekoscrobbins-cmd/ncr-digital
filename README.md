# NCR Digital (ncrdigi.com)

SEO and AI strategy consultancy site — organic search/AI-answer visibility, and AI adoption
strategy grounded in financial modeling — built as a static Astro site.

## Stack

- [Astro](https://astro.build) v5, `output: 'static'`
- TypeScript (strict), `@/*` aliased to `src/*`
- Tailwind CSS (warm editorial `ncr.*` design tokens in `tailwind.config.mjs`); display type is
  Newsreader, UI/body is IBM Plex Sans, data/labels are IBM Plex Mono, self-hosted via `@fontsource*`
- Content Collections + Zod for `/insights` posts (`src/content/blog/`)
- Vanilla `<script>` only — no React/Vue/CMS
- Deployed on Vercel (`vercel.json`)

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npx astro check   # typecheck .astro files
```

## Site structure

```
/                        Homepage
/seo                     Technical SEO and AI-answer visibility (GEO)
/ai-strategy             AI adoption strategy and financial modeling
/how-we-work             Engagement models: project-based vs. subscription
/about                   About
/insights                Blog (content collection id: `blog`, route: `/insights/`)
/contact                 Contact form (Formspree)
```

The two capabilities (`slug`, `label`, `href`, copy) are defined once in `src/data/capabilities.ts`
and derived everywhere else that needs them: nav, footer, homepage cards, the blog category enum,
the insights index/post pages, and the contact form's select. Add a capability there, not in each
of those places.

`vercel.json` redirects legacy `/blog/*` URLs (and `www.`) to their new equivalents.

## Adding a new Insights post

1. Add a new `.md` file to `src/content/blog/`.
2. Frontmatter (see `src/content/config.ts` for the full schema):

   ```yaml
   ---
   title: "Post Title"
   description: "One-sentence summary."
   pubDate: 2026-08-01
   category: seo   # seo | ai-strategy — required, drives hub-spoke linking (see src/data/capabilities.ts)
   tags: ["tag-one"]
   keyFacts:              # optional — renders as a KeyFactsBlock at the top of the post
     - "A dense, citable fact."
   ---
   ```
3. Write the body in Markdown. Link up to the post's capability page and to related posts near the
   bottom under an `## Other reads` heading — this is the hub-spoke linking pattern the AI-SEO
   standard depends on.
4. The post appears automatically at `/insights/<filename-without-extension>/` and in the
   `/insights/` index, sorted by `pubDate`.

## AI-SEO / GEO conventions used throughout the site

- Every page/section opens with a direct 40-60 word answer before framing.
- `KeyFactsBlock` and `ComparisonTable` components render citable facts/decisions instead of prose
  wherever a reader is comparing options.
- JSON-LD is an entity graph: `Organization` and `Person` nodes (with stable `@id`s, defined in
  `src/layouts/Layout.astro` and `src/lib/schema.ts`) are referenced by `@id`, not duplicated, from
  page-level `Service`, `FAQPage`, and `BlogPosting` nodes.
- `FAQBlock`'s `items` prop is the single source of truth for a page's FAQ — the same array is
  passed into `buildFaqPageSchema` (`src/lib/schema.ts`) so visible copy and schema can't drift.
- `public/robots.txt` explicitly allows the major AI/GEO crawlers (GPTBot, PerplexityBot,
  ClaudeBot, Google-Extended, CCBot) alongside the default wildcard rule.

## Known follow-ups

- `npm ci` in CI requires `package-lock.json` to be regenerated after this change added
  `@astrojs/check`/`typescript` to devDependencies — run `npm install` locally once and commit the
  updated lockfile.
- Blog cover images in `public/blog/*.png` are large, unoptimized PNGs (multi-MB) and should be
  converted to `astro:assets`-managed WebP/AVIF for Lighthouse/LCP.
- Founder photo, LinkedIn URL, and branded email are still open items — see inline `TODO` comments
  in `src/layouts/Layout.astro` and `src/pages/about.astro`.
