# Broadsheet Open-Source Project Landing Page Template

An editorial, broadsheet brutalist landing page template engineered specifically for open-source repositories, developer tools, agent frameworks, and distributed systems.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Font Awesome**, and the authentic **2026 Paper & Ink Broadsheet Design System**.

---

## ⚡ 60-Second Quickstart

```bash
# 1. Clone or copy into your new project directory
cp -r broadsheet-project-template my-new-project-landing
cd my-new-project-landing

# 2. Install dependencies
bun install
# or: npm install

# 3. Start local development server
bun dev
# or: npm run dev
```

Visit `http://localhost:3000` to view your landing page.

---

## 🎯 5-Minute Customization: `project.config.ts`

You do **not** need to touch complex React code to customize this landing page. Simply open [`project.config.ts`](./project.config.ts) and edit the single configuration object:

```typescript
export const PROJECT_CONFIG = {
  meta: {
    title: "YourProject — High-Performance Distributed Task Orchestrator",
    description: "Brief summary of what makes your tool indispensable.",
    keywords: ["open-source", "rust", "typescript", "cli"],
    url: "https://yourproject.dev",
    author: "Your Org / Name",
  },
  brand: {
    name: "yourproject",
    domainSuffix: ".dev",
    tagline: "A broadsheet for software that doesn't ask for your email",
    handle: "yourgithubhandle",
  },
  hero: {
    issueBadge: "Issue latest",
    edition: "Edition 2026-A",
    titleLines: {
      before: "High-Performance",
      highlight: "Zero-Overhead",   // Rendered in solid inverted highlight box
      after: "State Engine",
    },
    description: "Clear, punchy technical description of your project.",
    primaryCta: { text: "Explore Architecture", href: "#architecture" },
    secondaryCta: { text: "GitHub Repository", href: "https://github.com/org/repo" },
  },
  install: {
    defaultManager: "npm",
    managers: {
      npm: "npm install yourproject",
      pnpm: "pnpm add yourproject",
      bun: "bun add yourproject",
      cargo: "cargo add yourproject-core",
      pip: "pip install yourproject-engine",
    },
  },
  telemetry: {
    label: "Telemetry run",
    updatedText: "Updated 04:12 UTC · auto",
    stats: [
      { number: "2.8M", label: "Monthly Computes" },
      { number: "<12µs", label: "IPC Round-Trip" },
      { number: "0.00%", label: "Allocation Overhead" },
    ],
  },
  features: [
    // Array of features rendered on the 1px brutalist rule cage
  ],
  codePlayground: {
    // Multi-tab interactive code window (TypeScript, Rust, Python, Go, etc.)
  },
  benchmarks: {
    // Performance table comparing your tool with alternatives
  },
  architecture: {
    // Multi-layer technical protocol specs
  },
  changelog: [
    // Recent release dispatches
  ],
  links: {
    github: "https://github.com/org/repo",
    docs: "https://docs.yourproject.dev",
    discord: "https://discord.gg/yourproject",
  },
};
```

---

## 🏛 Architectural Principles

1. **Broadsheet Layout**: Modeled after traditional newspapers, broadsheets, and editorial journals with high-contrast typography, crisp 1px rule lines, and structured telemetry cards.
2. **Paper & Ink Color System**:
   * Light mode: `#F2F8FC` paper background with `#000000` ink rules and surface tones (`#e3eef5`).
   * Dark mode: `#24221f` parchment background with `#F2F8FC` ink rules and `#302d28` surfaces.
3. **Typography**:
   * **Sans Stack**: `Rubik` for body copy, paragraphs, and descriptions.
   * **Mono Stack**: `Space Mono` for mastheads, headlines, cards, stamps, numbers, and tags.
4. **Bento Rule Cage**:
   * Grid elements are separated by `1px` rule lines formed by a solid rule container with `1px` gap.
   * Zero bubble borders or blurry card shadows.
5. **Postcard Cards**:
   * Tilted boxed category tags (`tilt-up` at `-2deg` / `tilt-down` at `2deg`).
   * Mono title links with hover underline.
   * Branch copy (`↳ org/repo`).
   * Tilted `-3deg` `IMPRESSIONS` stamp.

---

## 📦 Component Overview

| Component | Description |
|-----------|-------------|
| [`Header`](./src/components/Header.tsx) | Centered masthead, Space Mono brand link, nav tabs, drawer, and theme toggle |
| [`Hero`](./src/components/Hero.tsx) | `Issue latest` badge, inverted headline box, multi-manager install tabs, telemetry box |
| [`FeatureBento`](./src/components/FeatureBento.tsx) | 1px rule broadsheet grid with search grep bar and category filter buttons |
| [`Playground`](./src/components/Playground.tsx) | Monospace code window (`● ● ●`) with multi-language tabs and copy function |
| [`Benchmarks`](./src/components/Benchmarks.tsx) | Ruled broadsheet benchmark table highlighting latency, throughput, and memory |
| [`Architecture`](./src/components/Architecture.tsx) | Deep-dive protocol layers with corner brackets and specifications |
| [`Changelog`](./src/components/Changelog.tsx) | Chronological release dispatch ledger with version tags |
| [`Community`](./src/components/Community.tsx) | Contributing guidelines, Good First Issues cards, and open discussions |
| [`Footer`](./src/components/Footer.tsx) | Editorial broadsheet footer with version, legal/license, and transmissions |
| [`ThemeToggle`](./src/components/ThemeToggle.tsx) | Instant Day / Night toggle with persistent local storage |

---

## 🚀 Deployment

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
vercel
```

### Deploy with Docker
```dockerfile
FROM node:22-alpine AS runner
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📄 License
Distributed under the MIT License. Built for the open-source developer ecosystem.
