---
title: "The Difference Between Indexing and Ranking (And Why It Matters)"
description: "Your page can be indexed and invisible. Understanding this distinction is the foundation of every SEO strategy."
pubDate: 2026-03-10
updatedDate: 2026-08-11
author: "Niekos Robbins"
category: seo
tags: ["indexing", "ranking factors", "technical SEO"]
image: "/blog/indexing-ranking-cover.webp"
imageAlt: "Laptop lid engraved with side-by-side icons for Indexing (database vault) and Ranking (podium chart), linked by a chain"
keyFacts:
  - "Indexing and ranking are separate stages. A page must be indexed before it can rank for anything, but being indexed guarantees nothing about ranking position."
  - "GSC's Coverage report has three relevant states: Discovered-not-crawled, Crawled-not-indexed, and Indexed. Each has a different fix."
  - "\"Discovered, not yet crawled\" is usually a crawl-budget problem; \"Crawled, not currently indexed\" is usually a content-quality signal."
  - "Ranking, once indexed, is driven by relevance, authority (backlinks and trust signals), and quality (page experience, depth, E-E-A-T)."
  - "A large gap between total page count and site: search results is a signal worth investigating, not a precise diagnostic on its own."
faq:
  - question: "My page is indexed but not ranking. What's wrong?"
    answer: "That's a content, relevance, or authority problem, not a technical one — indexing already succeeded. Check whether the page actually matches search intent for its target query, and whether the domain or page has enough backlink signal to compete."
  - question: "How long does indexing take after a page goes live?"
    answer: "It varies widely — from hours for a well-linked page on an established, frequently-crawled site to weeks for a page with no internal links pointing to it. Submitting the URL through GSC's URL Inspection tool can prompt a faster crawl, but doesn't guarantee indexing."
  - question: "Why would Google crawl a page but not index it?"
    answer: "Usually a quality signal: thin content, duplication with another page already in the index, or a page that doesn't clear the bar Google sets for what's worth serving. It's rarely a technical block at that stage — the crawl already succeeded."
---

"Why isn't my page showing up on Google?" is one of the most common questions in SEO, and the answer depends entirely on which problem you actually have. Indexing and ranking are two separate stages of Google's process, and they fail for completely different reasons. Confusing them leads to months of wasted effort fixing the wrong thing. Here's how to tell them apart and what to do about each.

## Indexing vs Ranking: The Core Distinction

**Indexing** is Google's process of discovering, crawling, and storing your page in its index: the massive database of pages it considers eligible to appear in search results. If a page isn't indexed, it literally cannot rank for anything.

**Ranking** is what happens after indexing: Google evaluates every indexed page for a given query and decides which ones to show, and in what order. A page can be perfectly indexed and still appear on page 10 for every relevant keyword.

The distinction matters because the fixes are completely different. An indexation problem is a technical SEO problem: something is preventing Google from discovering or processing your page. A ranking problem is a quality, relevance, or authority problem: Google found your page but doesn't think it's the best answer for the queries you're targeting.

## The Indexation Pipeline

Google doesn't instantly index every page it finds. There are actually multiple stages a URL moves through, and pages can get stuck at any of them. [Google Search Central's overview of how search works](https://developers.google.com/search/docs/fundamentals/how-search-works) breaks this down clearly.

The stages as they appear in GSC's Coverage report:

| Stage | What it means | Usual cause |
|---|---|---|
| Discovered, not yet crawled | Google knows the URL exists (sitemap or internal link) but hasn't visited it | Crawl budget hasn't reached it yet |
| Crawled, not currently indexed | Google visited the page but decided not to index it | Thin content, duplication, or a quality signal issue |
| Indexed | The page is in Google's index and eligible to rank | — |

"Discovered, not yet crawled" usually means [crawl budget](/insights/what-is-crawl-budget-saas/) is the bottleneck: Google has more URLs to process than it's getting to. "Crawled, not currently indexed" is a quality signal: Google saw the page and decided it wasn't worth indexing. These have very different remedies.

## How to Check Index Status

The fastest check: go to Google Search Console → URL Inspection → paste your URL. GSC will tell you definitively whether the URL is indexed, and if not, exactly why.

For a site-wide view, the Coverage report in GSC shows the breakdown of all your URLs across indexation states. Pay attention to:

- **Valid** pages (indexed): is the count growing as you publish?
- **Excluded** pages: what's the reason? "Crawled, not indexed" at scale is a content quality signal
- **Error** pages: 404s, server errors, redirect issues blocking crawling

If you want to cross-reference your indexed page count against your total page count, a simple Google search for `site:yourdomain.com` gives a rough estimate. It's not exact, but a dramatic discrepancy (you have 2,000 pages and Google shows 200) is a signal worth investigating.

## What Controls Ranking (Separately from Indexing)

Once a page is indexed, ranking is determined by Google's assessment of relevance and quality for a specific query. The main levers:

**Relevance**: Does your content match the search intent behind the query? A page optimized for "enterprise project management software" probably won't rank well for "free to-do list app" even if both topics are tangentially related. [Moz's breakdown of ranking factors](https://moz.com/learn/seo/ranking-factors) is a useful reference for what Google weighs.

**Authority**: Does your domain and this specific page have backlinks and signals suggesting it's a trusted source on this topic? A new domain with no backlinks will struggle to rank for competitive keywords regardless of content quality.

**Quality**: Does your page deliver a genuinely useful answer? Page experience signals (Core Web Vitals), content depth, and EEAT signals all factor in.

The diagnostic split is simple: if your page isn't in GSC's index, fix the indexation problem first. If it is indexed but not ranking, that's a content and authority conversation. Treating a ranking problem as an indexation problem, or vice versa, is how teams spend quarters spinning their wheels.

If you want help diagnosing which stage your pages are stuck at, a [technical SEO audit](/seo) will give you a clear answer fast.

## Other reads

- [What Is Crawl Budget and Why It Matters for SaaS Sites](/insights/what-is-crawl-budget-saas/)
- [How to Read a Crawl Log: A Beginner's Guide](/insights/how-to-read-crawl-log/)
- [Canonical Tags: When to Use Them and When They Break Everything](/insights/canonical-tags-guide/)
