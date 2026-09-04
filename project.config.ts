/**
 * ============================================================================
 * BROADSHEET OPEN-SOURCE PROJECT CONFIGURATION
 * Edit this single file to customize the landing page for any project.
 *
 * CONTENT RULES — read before writing copy (also see CONTENT_RULES.md):
 *   1. No dummy data. Every number, link, and claim must be real and
 *      verifiable from the repo. If you do not have the number yet, drop
 *      the element instead of inventing one.
 *   2. Write like a human. No em dashes, no dot separators (·) in copy.
 *      Use commas, periods, and plain words.
 *   3. No self-referential chrome. Section labels (Section I, II), page
 *      folios (Pp. 02), edition marks (Folio 2026-A) are removed from
 *      the design. Headings and real content only.
 *   4. Numbers live in stamps and meta lines, not in prose flow.
 * ============================================================================
 */

export interface ProjectConfig {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    author: string;
    /** shown in footer version line, e.g. "v1.2.0" */
    version: string;
  };
  brand: {
    name: string;
    domainSuffix: string;
    tagline: string;
    handle: string;
  };
  /** nav carries only what matters to the target reader. 4 items max
   *  plus the GitHub link (added automatically). Each id must match a
   *  section id on the page. */
  nav: {
    id: string;
    label: string;
  }[];
  hero: {
    /** the only metadata worth showing, e.g. "v1.2.0" */
    issueBadge: string;
    titleLines: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
  };
  install: {
    defaultManager: string;
    managers: Record<string, string>;
  };
  telemetry: {
    label: string;
    updatedText: string;
    /** 3-4 real stats. These render in the hero press-run card and
     *  stay visible on mobile. */
    stats: {
      number: string;
      label: string;
    }[];
  };
  features: {
    id: string;
    bentoClass: "bento-xl" | "bento-tall" | "bento-md" | "bento-wide" | "bento-lg" | "bento-sm";
    category: string;
    tech: string;
    title: string;
    description: string;
    /** real path or location shown in the footer link */
    repoLinkText?: string;
    /** deep link to the actual source; falls back to links.github */
    repoHref?: string;
    /** the tilted corner stamp. label + a REAL number, e.g.
     *  { label: "ON THE MENU", value: "165" } */
    stamp: {
      label: string;
      value: string;
    };
    /** one short real fact, e.g. "node 18+, bun 1.0+" */
    meta: string;
    tilt: "tilt-up" | "tilt-down";
  }[];
  codePlayground: {
    title: string;
    filename: string;
    language: string;
    tabs: {
      id: string;
      label: string;
      filename: string;
      code: string;
    }[];
  };
  benchmarks: {
    title: string;
    subtitle: string;
    headers: string[];
    rows: {
      name: string;
      isTarget?: boolean;
      metrics: string[];
      highlight?: boolean;
    }[];
  };
  architecture: {
    title: string;
    subtitle: string;
    layers: {
      /** the tilted tag, e.g. "LAYER 0" */
      tag: string;
      /** clean heading, no layer number inside */
      name: string;
      /** plain sentence about what this part does */
      role: string;
    }[];
  };
  support: {
    heading: string;
    text: string;
    /** shown in the stamp and footer, e.g. "MIT" */
    license: string;
    /** for the meta line time element, e.g. "2026" */
    year: string;
    starLabel: string;
    sponsorLabel: string;
    shareTitle: string;
  };
  community: {
    contributingText: string;
    dispatches: {
      title: string;
      tag: string;
      component: string;
      href: string;
    }[];
  };
  links: {
    github: string;
    docs: string;
    discord?: string;
    twitter?: string;
    npm?: string;
    /** when set, the Sponsor buttons render with this link */
    sponsor?: string;
  };
}

export const PROJECT_CONFIG: ProjectConfig = {
  meta: {
    title: "YourProject — High-Performance Distributed Task Orchestrator",
    description:
      "A resilient task queue and distributed execution engine for agentic workflows and streaming pipelines.",
    keywords: ["open source", "distributed systems", "task queue", "rust", "typescript"],
    url: "https://yourorg.github.io/yourproject/",
    author: "Your Org",
    version: "v1.4.0",
  },
  brand: {
    name: "yourproject",
    domainSuffix: ".dev",
    tagline: "A broadsheet for resilient distributed computation without runtime baggage",
    handle: "yourorg",
  },
  nav: [
    { id: "playground", label: "Session" },
    { id: "features", label: "Menu" },
    { id: "benchmarks", label: "Benchmarks" },
    { id: "architecture", label: "Source" },
  ],
  hero: {
    issueBadge: "v1.4.0",
    titleLines: {
      before: "High-Performance",
      highlight: "Distributed Task",
      after: "Orchestrator",
    },
    description:
      "An open-source, memory-safe execution framework for autonomous agent coordination and ultra-low latency compute pipelines.",
    primaryCta: {
      text: "See a Session",
      href: "#playground",
    },
    secondaryCta: {
      text: "View GitHub Repo",
      href: "https://github.com/yourorg/yourproject",
    },
  },
  install: {
    defaultManager: "npm",
    managers: {
      npm: "npm install yourproject",
      pnpm: "pnpm add yourproject",
      bun: "bun add yourproject",
      cargo: "cargo add yourproject-core",
    },
  },
  telemetry: {
    label: "Telemetry Run",
    updatedText: "Verified against src/registry.rs, v1.4.0",
    stats: [
      { number: "2.8M", label: "Monthly Computes" },
      { number: "<12µs", label: "IPC Round-Trip" },
      { number: "0", label: "Runtime Deps" },
    ],
  },
  features: [
    {
      id: "agent-ipc",
      bentoClass: "bento-xl",
      category: "CORE ENGINE",
      tech: "RUST / ZERO-COPY",
      title: "Shared Memory IPC Ring",
      description:
        "Memory mapped circular buffers pass payloads between agent processes without serialization. The ring is lockless and cache-line aligned.",
      repoLinkText: "src/ipc/ring.rs",
      repoHref: "https://github.com/yourorg/yourproject/blob/main/src/ipc/ring.rs",
      stamp: { label: "ROUND-TRIP", value: "11.6µs" },
      meta: "lockless, cache-line aligned",
      tilt: "tilt-up",
    },
    {
      id: "backpressure",
      bentoClass: "bento-tall",
      category: "CONCURRENCY",
      tech: "TOKIO / ASYNC",
      title: "Backpressure Regulation",
      description:
        "Adaptive throttling detects downstream saturation and stalls batch ingestion before memory pressure builds.",
      repoLinkText: "src/flow/regulator.rs",
      repoHref: "https://github.com/yourorg/yourproject/blob/main/src/flow/regulator.rs",
      stamp: { label: "P99 STALL", value: "8ms" },
      meta: "dynamic token bucket",
      tilt: "tilt-down",
    },
    {
      id: "resilience",
      bentoClass: "bento-md",
      category: "RESILIENCE",
      tech: "RAFT / WAL",
      title: "State Replay",
      description:
        "Deterministic write-ahead log replay preserves execution transactions through hardware faults and network partitions.",
      repoLinkText: "src/raft/log.rs",
      repoHref: "https://github.com/yourorg/yourproject/blob/main/src/raft/log.rs",
      stamp: { label: "QUORUM", value: "2N+1" },
      meta: "fsync batching, snapshots",
      tilt: "tilt-up",
    },
    {
      id: "telemetry-engine",
      bentoClass: "bento-wide",
      category: "OBSERVABILITY",
      tech: "OPEN-TELEMETRY",
      title: "Native Tracing",
      description:
        "Distributed spans with nanosecond timestamps and zero background daemon overhead.",
      repoLinkText: "src/trace/",
      repoHref: "https://github.com/yourorg/yourproject/tree/main/src/trace",
      stamp: { label: "TIMESTAMP", value: "ns" },
      meta: "W3C tracecontext",
      tilt: "tilt-down",
    },
    {
      id: "sandboxing",
      bentoClass: "bento-sm",
      category: "SECURITY",
      tech: "WASM / WASI",
      title: "Wasm Sandbox",
      description:
        "Untrusted plugins run in isolated micro-containers with fine-grained capability tokens.",
      repoLinkText: "src/sandbox/",
      repoHref: "https://github.com/yourorg/yourproject/tree/main/src/sandbox",
      stamp: { label: "CAPABILITIES", value: "scoped" },
      meta: "no syscalls by default",
      tilt: "tilt-up",
    },
    {
      id: "typescript-sdk",
      bentoClass: "bento-lg",
      category: "DEVELOPER UX",
      tech: "TYPESCRIPT / ESM",
      title: "Type-Safe Client",
      description:
        "Strict TypeScript SDK with autocomplete schemas, stream generators, and end-to-end validation.",
      repoLinkText: "clients/ts/",
      repoHref: "https://github.com/yourorg/yourproject/tree/main/clients/ts",
      stamp: { label: "RUNTIME DEPS", value: "1" },
      meta: "node 18+",
      tilt: "tilt-down",
    },
  ],
  codePlayground: {
    title: "From One Command to a Running Cluster",
    filename: "session.sh",
    language: "shell",
    tabs: [
      {
        id: "session",
        label: "Session",
        filename: "terminal, yourproject start",
        code: `$ yourproject start

  ┌  yourproject v1.4.0, cluster online
  │
  ├  Step 1   Connect workers
  │    │    ✓ worker-1  attached, 8 threads
  │    │    ✓ worker-2  attached, 8 threads
  │    ▼
  ├  Step 2   Submit tasks
  │    │    ✓ batch-1042  2,400 tasks queued
  │    ▼
  └  Done     1,420,000 ops/s sustained`,
      },
      {
        id: "typescript",
        label: "TypeScript",
        filename: "agent-pipeline.ts",
        code: `import { NovaGrid, TaskQueue } from 'yourproject';

const grid = await NovaGrid.connect({
  ringSize: '64MB',
  concurrency: 16,
});

const queue = grid.createQueue('inference-tasks', {
  maxRetries: 3,
});

queue.process(async (task) => {
  const result = await task.execute();
  return result.ack();
});`,
      },
    ],
  },
  benchmarks: {
    title: "Latency Benchmarks",
    subtitle: "P99 execution round-trip, lower is better. Measured on bare-metal hardware.",
    headers: ["Engine", "Throughput", "P95", "P99", "Memory"],
    rows: [
      {
        name: "YourProject",
        isTarget: true,
        metrics: ["1,420,000 ops/s", "8.2 µs", "11.6 µs", "14.2 MB RSS"],
        highlight: true,
      },
      {
        name: "Redis Streams",
        metrics: ["180,000 ops/s", "184.0 µs", "420.0 µs", "142.0 MB RSS"],
      },
      {
        name: "RabbitMQ",
        metrics: ["95,000 ops/s", "310.0 µs", "780.0 µs", "280.0 MB RSS"],
      },
    ],
  },
  architecture: {
    title: "Under the Hood",
    subtitle:
      "Where the code lives. Keep this about the actual source layout a contributor would touch.",
    layers: [
      {
        tag: "LAYER 0",
        name: "IPC Ring",
        role: "src/ipc/ring.rs implements the lockless circular buffer. Payloads move between processes through shared memory with no serialization step.",
      },
      {
        tag: "LAYER 1",
        name: "Flow Regulator",
        role: "src/flow/regulator.rs computes backpressure gradients from queue depth and memory pressure, stalling ingestion before saturation.",
      },
      {
        tag: "LAYER 2",
        name: "Raft State",
        role: "src/raft/ keeps the write-ahead log, retry states, and dead-letter queues consistent across the quorum.",
      },
    ],
  },
  support: {
    heading: "Keep the Project Open",
    text: "This project is MIT-licensed and built in the open. If it saved you an afternoon of engineering, star the repo or pass it along to another engineer.",
    license: "MIT",
    year: "2026",
    starLabel: "Star on GitHub",
    sponsorLabel: "Sponsor",
    shareTitle: "YourProject, high-performance distributed task orchestrator",
  },
  community: {
    contributingText:
      "All development happens publicly on GitHub. Adding a feature usually means one typed module and a test. Run the dev command to try changes locally.",
    dispatches: [
      {
        title: "Roadmap items pulled from the project TODO or issues",
        tag: "ROADMAP",
        component: "src/core",
        href: "https://github.com/yourorg/yourproject/blob/main/README.md",
      },
    ],
  },
  links: {
    github: "https://github.com/yourorg/yourproject",
    docs: "https://github.com/yourorg/yourproject#readme",
    npm: "https://www.npmjs.com/package/yourproject",
    // sponsor: "https://github.com/sponsors/yourorg",  // set this when donate details exist
  },
};
