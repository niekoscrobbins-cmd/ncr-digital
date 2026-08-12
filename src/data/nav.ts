import { capabilities } from './capabilities';

// Capability links are derived so nav can never drift from what the site
// actually sells; the rest are fixed pages.
export const navLinks = [
  ...capabilities.map(({ label, href }) => ({ label, href })),
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about' },
];

export const contactHref = '/contact';
export const contactCtaLabel = 'Book a call';
