// Shared JSON-LD node builders for the entity graph described in the site
// plan. Pages import these and render the resulting object themselves as a
// direct child of <Layout ...><script slot="head">. The `slot="head"`
// mechanism only forwards elements that are direct children of the <Layout>
// invocation, so schema-emitting helpers must be called at the page level,
// not from inside a nested presentational component.

export const SITE_URL = 'https://ncrdigi.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function buildServiceSchema({
  id,
  name,
  serviceType,
  description,
}: {
  id: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': id,
    name,
    serviceType,
    description,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item,
    })),
  };
}
