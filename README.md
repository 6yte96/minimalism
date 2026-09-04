# Broadsheet Open-Source Project Landing Page Template

An editorial, broadsheet brutalist landing page template for open-source
repositories, developer tools, agent frameworks, and distributed systems.

Built with **Next.js 15 (App Router)**, **TypeScript**, and the
**Paper & Ink Broadsheet Design System**. Exports as a static site ready
for **GitHub Pages**.

> **Writing content?** Read [`CONTENT_RULES.md`](./CONTENT_RULES.md)
> first. It is the difference between a page that reads like a person
> shipped it and one that reads like filler.

---

## 60-Second Quickstart

```bash
cp -r broadsheet-project-template my-project-landing
cd my-project-landing
bun install
bun dev
```

Visit `http://localhost:3000/yourproject` (basePath is set for GitHub
Pages project sites).

## Deploy to GitHub Pages

1. Copy `.github/workflows/` style deploy: build with `bun run build`,
   upload `out/` with `actions/upload-pages-artifact`, deploy with
   `actions/deploy-pages`.
2. Set `basePath` in `next.config.ts` to `/<repo-name>`.
3. In the repo: Settings, Pages, Build and deployment, Source:
   **GitHub Actions**.

For a custom domain, set `NEXT_PUBLIC_BASE_PATH=""`.

---

## Customization: `project.config.ts`

All page content lives in **one file**. The interface is the
documentation, and the shipped example follows every content rule.

```typescript
export const PROJECT_CONFIG = {
  meta: { title, description, keywords, url, author, version },
  brand: { name, domainSuffix, tagline, handle },
  // nav: 4 items max, each id matches a section id. GitHub is added automatically.
  nav: [{ id: "playground", label: "Session" }, ...],
  hero: {
    issueBadge: "v1.4.0",        // version, the only metadata worth showing
    titleLines: { before, highlight, after },
    description, primaryCta, secondaryCta,
  },
  install: { defaultManager, managers: { npm: "...", pnpm: "..." } },
  telemetry: { label, updatedText, stats: [{ number, label }] },  // real numbers only
  features: [{
    id, bentoClass, category, tech, title, description,
    repoLinkText, repoHref,       // deep link to the real source file
    stamp: { label, value },      // tilted corner stamp, real number
    meta: "node 18+",             // one short real fact
    tilt: "tilt-up",
  }],
  codePlayground: { title, tabs: [{ id, label, filename, code }] },
  benchmarks: { title, subtitle, headers, rows },
  architecture: { title, subtitle, layers: [{ tag: "LAYER 0", name, role }] },
  support: { heading, text, license, year, starLabel, sponsorLabel, shareTitle },
  community: { contributingText, dispatches: [{ title, tag, component, href }] },
  links: { github, docs, npm, sponsor },
};
```

### Section order (follow the reader's questions)

| Section | Answers |
|---------|---------|
| Hero | What is it, how do I run it |
| Playground | What happens when I run it |
| Features | What it does (searchable, like the tool) |
| Benchmarks | Why this one (real data only) |
| Architecture | How it works inside, how to contribute |
| Support | Star, share, sponsor |

---

## What ships in the box

**Design**: 1px rule cages, Space Mono headlines, Rubik body text,
tilted boxed stamps, paper grain, dark night edition with toggle.

**Frontend quality (do not remove while customizing)**:

- Responsive 320px to 1920px, no horizontal overflow
- Anchor jumps clear the collapsing sticky header
- Scroll-spy nav highlighting
- `:focus-visible` rings, `prefers-reduced-motion` support
- Safe-area insets for notched phones, touch press feedback
- Mobile drawer with scroll-lock and Escape handling
- Print stylesheet, static export with base path for project pages

**Removed from earlier template versions** (by design, see
CONTENT_RULES.md): Section/Pp./Folio chrome, changelog and community
boilerplate sections, sponsor-page.css (23KB), bookmark buttons,
impression counters, star bylines.

---

## Commands

```bash
bun dev           # local dev
bun run build     # static export to out/
bun run type-check
```

## License

MIT
