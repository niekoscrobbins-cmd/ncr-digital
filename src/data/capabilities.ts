// Single source of truth for what NCR Digital sells.
//
// This taxonomy used to be hand-copied into six places (nav links, the blog
// category enum, the insights index labels, the post-page footer, the contact
// form's select, and the homepage card grid), which is why the previous
// three-pillar structure took a fifteen-file sweep to change. Everything that
// needs the list now derives it from here.
//
// `slug` doubles as the blog `category` value in src/content/config.ts, so
// adding a capability means adding it once, here.

export interface Capability {
  /** Blog category value and stable identifier. */
  slug: string;
  /** Nav and card label. */
  label: string;
  /** Longer label for the contact form's select. */
  formLabel: string;
  href: string;
  /** Homepage card copy. */
  description: string;
}

export const capabilities = [
  {
    slug: 'seo',
    label: 'SEO & AI Search',
    formLabel: 'Organic search (SEO and AI answer visibility)',
    href: '/seo',
    description:
      'Technical SEO and AI answer visibility. We fix what stops a site being crawled, then structure it so both Google and the answer engines can cite it. Reported against pipeline, not rankings alone.',
  },
  {
    slug: 'ai-strategy',
    label: 'AI Strategy',
    formLabel: 'AI strategy consulting',
    href: '/ai-strategy',
    description:
      'Advisory work on where AI actually pays for itself. We sequence adoption against what you can already measure, and size the business case before anyone buys a tool.',
  },
] as const satisfies readonly Capability[];

/** Slugs, for the blog collection's Zod enum (cast to Zod's required non-empty tuple shape at the call site in content/config.ts, not here). */
export const capabilitySlugs = capabilities.map((c) => c.slug);

/** Lookup by slug — used by the insights index and post pages. */
export const capabilityBySlug: Record<string, Capability> = Object.fromEntries(
  capabilities.map((c) => [c.slug, c])
);
