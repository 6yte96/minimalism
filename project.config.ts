/**
 * ============================================================================
 * BROADSHEET OPEN-SOURCE PROJECT CONFIGURATION
 * Edit this single file to customize the landing page for any project!
 * ============================================================================
 */

export interface ProjectConfig {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    author: string;
  };
  brand: {
    name: string;
    domainSuffix: string;
    tagline: string;
    handle: string;
  };
  hero: {
    issueBadge: string;
    edition: string;
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
    stats: {
      number: string;
      label: string;
    }[];
  };
  features: {
    id: string;
    bentoClass: string;
    category: string;
    tech: string;
    title: string;
    description: string;
    repoLinkText?: string;
    impressions: string;
    stars: string;
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
      name: string;
      role: string;
      spec: string;
    }[];
  };
  changelog: {
    version: string;
    date: string;
    title: string;
    description: string;
    tag: string;
  }[];
  links: {
    github: string;
    docs: string;
    discord?: string;
    twitter?: string;
    npm?: string;
    crates?: string;
    pypi?: string;
  };
}

export const PROJECT_CONFIG: ProjectConfig = {
  meta: {
    title: "NovaGrid — High-Performance Distributed Task Orchestrator",
    description: "A resilient, zero-overhead task queue and distributed execution engine engineered for agentic workflows, streaming pipelines, and microsecond IPC.",
    keywords: ["open source", "distributed systems", "task queue", "orchestration", "rust", "typescript", "microservices"],
    url: "https://novagrid.dev",
    author: "NovaGrid Open Source Team",
  },
  brand: {
    name: "novagrid",
    domainSuffix: ".dev",
    tagline: "A broadsheet for resilient distributed computation without runtime baggage",
    handle: "code6yte",
  },
  hero: {
    issueBadge: "Issue latest",
    edition: "Edition 2026-A",
    titleLines: {
      before: "High-Performance",
      highlight: "Distributed Task",
      after: "Orchestrator",
    },
    description: "An open-source, memory-safe execution framework designed for autonomous agent coordination, backpressure-aware message streaming, and ultra-low latency compute pipelines.",
    primaryCta: {
      text: "Explore Architecture",
      href: "#architecture",
    },
    secondaryCta: {
      text: "View GitHub Repo",
      href: "https://github.com/code6yte/novagrid",
    },
  },
  install: {
    defaultManager: "npm",
    managers: {
      npm: "npm install novagrid",
      pnpm: "pnpm add novagrid",
      bun: "bun add novagrid",
      yarn: "yarn add novagrid",
      cargo: "cargo add novagrid-core",
      pip: "pip install novagrid-engine",
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
    {
      id: "agent-ipc",
      bentoClass: "bento-xl",
      category: "CORE ENGINE",
      tech: "RUST / ZERO-COPY",
      title: "Shared Memory Zero-Copy IPC Ring",
      description: "Direct memory mapped circular ring buffers passing structured payloads between agent processes without serialization penalty.",
      repoLinkText: "code6yte/novagrid-ipc",
      impressions: "4,820",
      stars: "340★",
      tilt: "tilt-up",
    },
    {
      id: "backpressure",
      bentoClass: "bento-tall",
      category: "CONCURRENCY",
      tech: "TOKIO / ASYNC",
      title: "Autonomous Backpressure Regulation",
      description: "Adaptive rate throttling that detects downstream memory saturation and dynamically stalls batch ingestion.",
      repoLinkText: "code6yte/novagrid-flow",
      impressions: "3,110",
      stars: "215★",
      tilt: "tilt-down",
    },
    {
      id: "resilience",
      bentoClass: "bento-md",
      category: "RESILIENCE",
      tech: "RAFT / WAL",
      title: "Self-Healing State Replay",
      description: "Deterministic write-ahead log replay preserving execution transactions through hardware faults and network partitions.",
      repoLinkText: "code6yte/novagrid-raft",
      impressions: "2,490",
      stars: "180★",
      tilt: "tilt-up",
    },
    {
      id: "telemetry-engine",
      bentoClass: "bento-wide",
      category: "OBSERVABILITY",
      tech: "OPEN-TELEMETRY",
      title: "Monolithic Tracing Dispatches",
      description: "Native OpenTelemetry distributed spans with nanosecond timestamp precision and zero background daemon overhead.",
      repoLinkText: "code6yte/novagrid-trace",
      impressions: "1,940",
      stars: "125★",
      tilt: "tilt-down",
    },
    {
      id: "sandboxing",
      bentoClass: "bento-sm",
      category: "SECURITY",
      tech: "WASM / WASI",
      title: "Wasm Sandbox Host",
      description: "Run untrusted agent plugins within isolated WebAssembly micro-containers with fine-grained capability tokens.",
      repoLinkText: "code6yte/novagrid-wasm",
      impressions: "3,650",
      stars: "290★",
      tilt: "tilt-up",
    },
    {
      id: "typescript-sdk",
      bentoClass: "bento-lg",
      category: "DEVELOPER UX",
      tech: "TYPESCRIPT / ESM",
      title: "Idiomatic Type-Safe Client",
      description: "Strict TypeScript SDK featuring autocomplete schemas, stream generators, and end-to-end type validation.",
      repoLinkText: "code6yte/novagrid-ts",
      impressions: "5,120",
      stars: "410★",
      tilt: "tilt-down",
    },
  ],
  codePlayground: {
    title: "Live Execution Manifest",
    filename: "orchestrator.ts",
    language: "typescript",
    tabs: [
      {
        id: "typescript",
        label: "TypeScript",
        filename: "agent-pipeline.ts",
        code: `import { NovaGrid, TaskQueue } from 'novagrid';

// Initialize the zero-copy pipeline
const grid = await NovaGrid.connect({
  ringSize: '64MB',
  concurrency: 16,
  heartbeatMs: 250,
});

// Spawn autonomous compute worker
const queue = grid.createQueue('inference-tasks', {
  maxRetries: 3,
  backpressure: 'dynamic',
});

queue.process(async (task) => {
  const result = await task.execute();
  return result.ack();
});

console.log('⚡ NovaGrid node online. Listening on IPC socket.');`,
      },
      {
        id: "rust",
        label: "Rust",
        filename: "main.rs",
        code: `use novagrid_core::{Engine, Config, Task};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = Config::builder()
        .worker_threads(8)
        .ipc_channel("/tmp/novagrid.sock")
        .build()?;

    let engine = Engine::init(config).await?;
    println!("⚡ NovaGrid core listening for microsecond task dispatches.");

    engine.listen(|task: Task| async move {
        task.process_zero_copy().await
    }).await?;

    Ok(())
}`,
      },
      {
        id: "python",
        label: "Python",
        filename: "worker.py",
        code: `from novagrid import NovaEngine, Worker

async def main():
    engine = await NovaEngine.connect(ipc_socket="/tmp/novagrid.sock")
    worker = Worker(engine, concurrency=8)

    @worker.task(name="agent_evaluation")
    async def evaluate_agent(payload):
        # Process zero-copy buffer
        return {"status": "ok", "latency_us": 11.4}

    print("⚡ NovaGrid Python worker attached to IPC.")
    await worker.run_forever()`,
      },
    ],
  },
  benchmarks: {
    title: "Microsecond Latency Benchmarks",
    subtitle: "P99 Execution Round-Trip (Lower is superior) · Measured on bare-metal AMD EPYC 9654",
    headers: ["Engine / Queue", "Throughput", "P95 Latency", "P99 Latency", "Memory Footprint"],
    rows: [
      {
        name: "NovaGrid (Ours)",
        isTarget: true,
        metrics: ["1,420,000 ops/s", "8.2 µs", "11.6 µs", "14.2 MB RSS"],
        highlight: true,
      },
      {
        name: "Redis Streams + BullMQ",
        metrics: ["180,000 ops/s", "184.0 µs", "420.0 µs", "142.0 MB RSS"],
      },
      {
        name: "RabbitMQ AMQP",
        metrics: ["95,000 ops/s", "310.0 µs", "780.0 µs", "280.0 MB RSS"],
      },
      {
        name: "Apache Kafka",
        metrics: ["650,000 ops/s", "1,200.0 µs", "2,400.0 µs", "1,024.0 MB RSS"],
      },
    ],
  },
  architecture: {
    title: "System Blueprint & Topology",
    subtitle: "Section IV · Technical Dossier & Protocol Layering",
    layers: [
      {
        name: "Layer 0: Shared Memory Ring Buffer",
        role: "Kernel-level mmap IPC ring handling zero-copy message transfers between local agent hosts.",
        spec: "POSIX shm_open · lockless ring · cache-line aligned (64B)",
      },
      {
        name: "Layer 1: Adaptive Flow Regulator",
        role: "Detects queue consumption pressure and computes proportional backpressure gradients.",
        spec: "Dynamic token bucket · microsecond windowing · PID controller",
      },
      {
        name: "Layer 2: Raft Transaction State",
        role: "Write-ahead log preserving job guarantees, retry states, and dead-letter queues.",
        spec: "Fsync batching · snapshot compaction · 2N+1 quorum consensus",
      },
      {
        name: "Layer 3: Language FFI & Transports",
        role: "Zero-cost foreign function interfaces delivering native ergonomics to Node, Rust & Python.",
        spec: "C ABI · N-API bindings · PyO3 · zero allocations on hot path",
      },
    ],
  },
  changelog: [
    {
      version: "v1.4.0",
      date: "September 2026",
      title: "Zero-Copy IPC Ring & Stream Cancellation",
      description: "Added direct circular memory mapping for multi-process agent coordination with instant async cancellation.",
      tag: "PERFORMANCE",
    },
    {
      version: "v1.3.2",
      date: "August 2026",
      title: "Wasm Capability Tokens & Sandbox Hardening",
      description: "Sandboxed untrusted execution tasks in micro-Wasm runtimes with capability-bounded network and memory limits.",
      tag: "SECURITY",
    },
    {
      version: "v1.2.0",
      date: "July 2026",
      title: "OpenTelemetry Distributed Spans",
      description: "Integrated nanosecond tracing with native W3C tracecontext headers propagated across local sockets.",
      tag: "TELEMETRY",
    },
  ],
  links: {
    github: "https://github.com/code6yte/novagrid",
    docs: "https://docs.novagrid.dev",
    discord: "https://discord.gg/novagrid",
    twitter: "https://x.com/code6yte",
    npm: "https://npmjs.com/package/novagrid",
  },
};
