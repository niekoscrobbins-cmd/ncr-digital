// The canonical fact set for the one case study on the site, per the
// playbook's §8.3: one list of every number and claim, with its source, so
// no two pages can state a different value or a different meaning for the
// same metric. StatBar (homepage) and CaseStudyBlock both derive from this
// instead of hardcoding their own copies.
//
// Before this file existed, the site stated three real conflicts:
//   - "Domain Authority" (a Moz metric) labeling a number that actually came
//     from Ahrefs, whose metric is Domain Rating. Wrong tool name.
//   - 3.2x traffic growth with no stated window on the homepage, sitting
//     next to two 7-month stats, while the case study itself scoped the
//     same number to "YoY increase" — two different measurement periods for
//     one figure.
//   - "Peak domain rating" (homepage) vs. the Month-7 end state (case
//     study) — two different meanings for the same 44.
// Every entry below carries an explicit window and source so that can't
// recur silently.

export const caseStudy = {
  client: 'a high-growth automotive SaaS platform', // anonymized; pick ONE phrasing sitewide, not "leading" in one place and "high-growth" in another
  // Attribution is deliberately relative-time only (no invented calendar
  // dates): the work was completed before NCR Digital was founded, over a
  // 7-month period. Do not add absolute dates here without confirming them
  // — see plan Workstream 1.4.
  attribution: "Led by NCR Digital's founder, Niekos Robbins, prior to founding the firm",
  window: '7-month engagement',
  metrics: [
    {
      key: 'dr',
      value: '20 → 44',
      label: 'Domain Rating',
      sub: 'in 7 months',
      source: 'Ahrefs',
      prefix: '20 → ',
      countFrom: 20,
      countTo: 44,
      decimals: 0,
      suffix: '',
    },
    {
      key: 'traffic',
      value: '3.2x',
      label: 'Organic traffic',
      sub: 'YoY increase',
      source: 'Google Analytics 4',
      prefix: '',
      countFrom: 0,
      countTo: 3.2,
      decimals: 1,
      suffix: 'x',
    },
    {
      key: 'rankings',
      value: '47',
      label: 'First-page rankings',
      sub: 'new keywords, in-window',
      source: 'Ahrefs rank tracking',
      prefix: '',
      countFrom: 0,
      countTo: 47,
      decimals: 0,
      suffix: '',
    },
    {
      key: 'lighthouse',
      value: '100',
      label: 'Lighthouse score',
      sub: 'all categories, at handoff',
      source: 'Google Lighthouse',
      prefix: '',
      countFrom: 0,
      countTo: 100,
      decimals: 0,
      suffix: '',
    },
  ],
  // Month-by-month DR trajectory. `pct` used to be a separate, wrong number
  // (da * 1.5) that overstated every bar by 50% against the 0-100 axis its
  // own aria-valuenow/aria-valuemax declared. There is no separate `pct`
  // anymore — the bar width is the value itself.
  drProgress: [
    { month: 'Month 1', dr: 20 },
    { month: 'Month 2', dr: 25 },
    { month: 'Month 3', dr: 30 },
    { month: 'Month 4', dr: 35 },
    { month: 'Month 5', dr: 39 },
    { month: 'Month 6', dr: 42 },
    { month: 'Month 7', dr: 44 },
  ],
  leversPulled: [
    'Core Web Vitals: LCP, CLS, INP remediation',
    'Programmatic schema at 12k+ pages',
    'Content silo rebuild with semantic clusters',
    'Toxic backlink disavow and link-building sprint',
    'GSC-guided crawl budget management',
  ],
} as const;

/**
 * Negative list, per §8.3: phrasings and framings that are explicitly
 * banned from any page that references the case study. Check new copy
 * against this before it ships.
 *
 * - "Domain Authority" / "DA" — wrong tool. The metric is Ahrefs' Domain
 *   Rating. Say "Domain Rating (Ahrefs)" or "DR", never "DA".
 * - "leading automotive SaaS platform" — superseded by
 *   `caseStudy.client` ("high-growth"). Don't let the two phrasings drift
 *   again.
 * - "Client × NCR Digital" / any framing that presents the work as a paid
 *   client engagement. It was completed before the firm existed — say so,
 *   don't imply otherwise.
 * - Any absolute calendar date for the engagement. Only "7 months" /
 *   "7-month engagement" is confirmed; do not add or infer a start/end
 *   date.
 * - "3.2x" without its window. Always pair it with "YoY" — never let it
 *   sit next to the 7-month DR stats with no stated period, which reads as
 *   the same window when it isn't.
 * - "Peak domain rating" — 44 is the Month-7 end state, not a maximum
 *   subsequently lost. Say "Domain Rating at handoff" or similar.
 */
export const bannedPhrasings = [
  'Domain Authority',
  'DA 20',
  'DA 44',
  'leading automotive SaaS platform',
  'Client × NCR Digital',
  'Peak domain authority',
  'Peak domain rating',
] as const;
