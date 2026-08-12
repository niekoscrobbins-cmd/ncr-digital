import { defineCollection, z } from 'astro:content';
import { capabilitySlugs } from '../data/capabilities';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('Niekos Robbins'),
    // Zod's TS overload wants a non-empty tuple; capabilitySlugs is honestly
    // typed as string[] since it's derived at runtime, so the shape is
    // asserted here, at the one call site that needs it, rather than in the
    // shared data module.
    category:    z.enum(capabilitySlugs as [string, ...string[]]),
    tags:        z.array(z.string()).default([]),
    image:       z.string().optional(),
    imageAlt:    z.string().optional(),
    keyFacts:    z.array(z.string()).optional(),
    // Renders via FAQBlock and feeds buildFaqPageSchema in
    // src/pages/insights/[...slug].astro — same single-source pattern used
    // for FAQs on every static page, so visible copy and FAQPage JSON-LD
    // can't drift apart on a post either.
    faq:         z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog };
