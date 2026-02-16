import Link from "next/link";
import Image from "next/image";
import path from "path";
import { readFile } from "fs/promises";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const competitorSuites = [
  "Odoo",
  "Zoho One",
  "HubSpot",
  "Salesforce",
  "Monday.com",
  "ClickUp",
  "Asana",
  "Notion",
];

const serviceProviders = [
  "Large consulting firms",
  "Boutique ops agencies",
  "Freelance process consultants",
  "System integrators",
  "Fractional ops leaders",
];

const differentiation = [
  "Process engine with approvals, SLAs, and audit trails",
  "AI PM orchestration tied to role-based execution",
  "Fast setup via templates and onboarding wizard",
  "Governance-first design with policy controls",
  "Time-to-value under a day for core workflows",
];

const entryPoints = [
  "Founder-led process audit + fast wins",
  "Vertical process packs and templates",
  "Unified inbox + approvals to reduce admin load",
  "Revenue ops automation with measurable KPIs",
  "Integration-first onboarding for SAP/commerce/email/WhatsApp",
];

const ganttMilestones = [
  {
    label: "Month 1",
    title: "Core Engine + Sales Pipeline Activated",
    kpis: "MVP live, 3 paying customers, 100 AI actions",
    start: 0,
    duration: 4,
  },
  {
    label: "Month 2",
    title: "Revenue Traction Milestone",
    kpis: "20 paying businesses or R50k MRR, retention > 85%",
    start: 4,
    duration: 4,
  },
  {
    label: "Month 3",
    title: "Scale & Fundraise Readiness",
    kpis: "50–75 paying businesses, R100k–R150k MRR, churn < 10%",
    start: 8,
    duration: 4,
  },
];

const pricingBenchmarks = [
  {
    competitor: "Odoo / Zoho One",
    pricing: "R600–R2,500/user/mo (typical bundles)",
    gap: "Tools-first, weak governance + approvals",
  },
  {
    competitor: "HubSpot / Salesforce",
    pricing: "R1,500–R7,000/user/mo (mid-market tiers)",
    gap: "CRM-first, heavy customization + slow ops rollout",
  },
  {
    competitor: "Monday / ClickUp / Asana",
    pricing: "R200–R900/user/mo (task suites)",
    gap: "Task tracking without process engine or audit trail",
  },
  {
    competitor: "Consulting / Agencies",
    pricing: "R25k–R150k/project + retainers",
    gap: "Manual delivery, not productized",
  },
];

const saasPricing = [
  {
    label: "Launch Plan",
    price: "R999 / month",
    tokens: "300,000 tokens included",
    overage: "R100 per extra 100,000 tokens",
    includes: [
      "Startup wizard",
      "Basic CRM",
      "Project management",
      "Process templates",
      "Assistive AI agents (approval required)",
    ],
  },
  {
    label: "Growth Plan",
    price: "R1,999 / month",
    tokens: "1,000,000 tokens included",
    overage: "R80 per extra 100,000 tokens",
    includes: [
      "Full CRM",
      "Workflow automation",
      "AI PM orchestration",
      "Sales & marketing agents",
      "Finance-lite (invoice drafting)",
      "Unified inbox",
    ],
  },
  {
    label: "Autonomous Plan",
    price: "R3,999 / month",
    tokens: "3,000,000 tokens included",
    overage: "R60 per extra 100,000 tokens",
    includes: [
      "Multi-department automation",
      "Advanced KPI triggers",
      "Agent-to-agent orchestration",
      "Inventory-lite",
      "Governance & approvals",
    ],
  },
];

const enterprisePlan = {
  label: "Enterprise Plan",
  price: "Custom (R10k–R50k+ / month)",
  includes: [
    "Advanced ERP modules",
    "Custom integrations",
    "SLA & security controls",
    "Dedicated AI configuration",
    "Local or hybrid deployment options",
    "Implementation + training team for full rollout",
  ],
};

const forecastRows = [
  { month: "Month 1", mrr: "R10k–R20k", customers: "3–5" },
  { month: "Month 2", mrr: "R50k+", customers: "20+" },
  { month: "Month 3", mrr: "R100k–R150k", customers: "50–75" },
  { month: "Month 6", mrr: "R250k–R350k", customers: "120–180" },
  { month: "Month 9", mrr: "R450k–R600k", customers: "220–300" },
  { month: "Month 12", mrr: "R750k–R1.0M", customers: "350–450" },
];

const seriesAPlan = {
  valuation: "R20,000,000",
  equity: "10%",
  raise: "R2,000,000",
  timing: "End of Month 3 (full launch)",
  useOfFunds: [
    "Launch across Africa (country-by-country expansion)",
    "Scale onboarding and implementation capacity",
    "Strengthen integrations and enterprise readiness",
    "Build regional partnerships and distribution",
  ],
};

type Block =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "hr" }
  | { type: "table"; headers: string[]; rows: string[][] };

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      i += 1;
      continue;
    }

    if (/^###\s+/.test(trimmed)) {
      blocks.push({ type: "h3", text: trimmed.replace(/^###\s+/, "") });
      i += 1;
      continue;
    }

    if (/^##\s+/.test(trimmed)) {
      blocks.push({ type: "h2", text: trimmed.replace(/^##\s+/, "") });
      i += 1;
      continue;
    }

    if (/^#\s+/.test(trimmed)) {
      blocks.push({ type: "h1", text: trimmed.replace(/^#\s+/, "") });
      i += 1;
      continue;
    }

    if (trimmed.includes("|")) {
      const next = (lines[i + 1] ?? "").trim();
      if (/^\|?[-:\s|]+$/.test(next) && next.includes("|")) {
        const toCells = (row: string) =>
          row
            .trim()
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split("|")
            .map((cell) => cell.trim());

        const headers = toCells(trimmed);
        const rows: string[][] = [];
        i += 2;
        while (i < lines.length && lines[i].trim().includes("|")) {
          rows.push(toCells(lines[i]));
          i += 1;
        }
        blocks.push({ type: "table", headers, rows });
        continue;
      }
    }

    if (/^(\*|-)\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^(\*|-)\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(\*|-)\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^#\s+/.test(lines[i].trim()) &&
      !/^##\s+/.test(lines[i].trim()) &&
      !/^###\s+/.test(lines[i].trim()) &&
      !/^(\*|-)\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paragraphLines.push(lines[i].trim());
      i += 1;
    }
    if (paragraphLines.length > 0) {
      blocks.push({ type: "p", text: paragraphLines.join(" ") });
    }
  }

  return blocks;
}

function renderInline(text: string): Array<string | JSX.Element> {
  const nodes: Array<string | JSX.Element> = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const match = remaining.match(/\*\*(.+?)\*\*/);
    if (!match || match.index === undefined) {
      nodes.push(remaining);
      break;
    }

    const before = remaining.slice(0, match.index);
    if (before) {
      nodes.push(before);
    }
    nodes.push(
      <strong key={`b-${key}`}>{match[1]}</strong>
    );
    key += 1;
    remaining = remaining.slice(match.index + match[0].length);
  }

  return nodes;
}

export default async function BusinessPlanPage() {
  const filePath = path.join(process.cwd(), "Docs", "bp.md");
  const content = await readFile(filePath, "utf8");
  const blocks = parseMarkdown(content);

  return (
    <div
      className={`${display.variable} ${body.variable} bg-[#f7f3ef] text-[#1c1b1a] font-[family-name:var(--font-body)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(254,215,170,0.7),_transparent_70%)] blur-2xl animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute right-0 top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.45),_transparent_70%)] blur-3xl animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.35),_transparent_70%)] blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        </div>

        <header className="relative z-10 border-b border-[#1c1b1a]/10 bg-white/60 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 p-1">
                <Image
                  src="/driven-processes-logo.png"
                  alt="Driven Processes logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#7c6f68]">
                  Business Plan
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg">
                  Driven Processes
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#6f675f]">
              <Link href="/pitch-deck" className="transition hover:text-[#1c1b1a]">
                Pitch Deck
              </Link>
              <Link
                href="/investor-plan"
                className="transition hover:text-[#1c1b1a]"
              >
                Investor Plan
              </Link>
              <Link href="/mou" className="transition hover:text-[#1c1b1a]">
                MOU
              </Link>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto max-w-5xl px-6 pb-20 pt-12">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl backdrop-blur">
              <div className="space-y-6">
                {blocks.map((block, index) => {
                  switch (block.type) {
                    case "hr":
                      return (
                        <hr
                          key={`hr-${index}`}
                          className="border-[#1c1b1a]/10"
                        />
                      );
                    case "h1":
                      return (
                        <h1
                          key={`h1-${index}`}
                          className="font-[family-name:var(--font-display)] text-3xl"
                        >
                          {renderInline(block.text)}
                        </h1>
                      );
                    case "h2":
                      return (
                        <h2
                          key={`h2-${index}`}
                          className="font-[family-name:var(--font-display)] text-2xl"
                        >
                          {renderInline(block.text)}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3
                          key={`h3-${index}`}
                          className="text-lg font-semibold uppercase tracking-[0.2em] text-[#7c6f68]"
                        >
                          {renderInline(block.text)}
                        </h3>
                      );
                    case "ul":
                      return (
                        <ul key={`ul-${index}`} className="space-y-2 text-sm">
                          {block.items.map((item, itemIndex) => (
                            <li key={`ul-${index}-${itemIndex}`}>
                              <span className="mr-2 text-[#7c6f68]">•</span>
                              {renderInline(item)}
                            </li>
                          ))}
                        </ul>
                      );
                    case "ol":
                      return (
                        <ol key={`ol-${index}`} className="space-y-2 text-sm">
                          {block.items.map((item, itemIndex) => (
                            <li key={`ol-${index}-${itemIndex}`}>
                              <span className="mr-2 text-[#7c6f68]">
                                {itemIndex + 1}.
                              </span>
                              {renderInline(item)}
                            </li>
                          ))}
                        </ol>
                      );
                    case "table":
                      return (
                        <div key={`table-${index}`} className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <thead>
                              <tr className="border-b border-[#1c1b1a]/10 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                                {block.headers.map((header) => (
                                  <th key={header} className="py-3">
                                    {renderInline(header)}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, rowIndex) => (
                                <tr
                                  key={`row-${rowIndex}`}
                                  className="border-b border-[#1c1b1a]/10"
                                >
                                  {row.map((cell, cellIndex) => (
                                    <td key={`cell-${rowIndex}-${cellIndex}`} className="py-3">
                                      {renderInline(cell)}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    case "p":
                      return (
                        <p key={`p-${index}`} className="text-sm text-[#3b3431]">
                          {renderInline(block.text)}
                        </p>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Competitor Analysis
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Suites, tools, and service providers reviewed.
                </h2>
                <div className="mt-6 space-y-3 text-sm">
                  {competitorSuites.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3 text-sm">
                  {serviceProviders.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#1c1b1a]/10 bg-white/80 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Why We Win
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  {differentiation.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/20 px-4 py-4 text-sm">
                  Entry points to market:
                  <div className="mt-3 space-y-2">
                    {entryPoints.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                Build Gantt
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                90-day build timeline with milestones and KPIs.
              </h2>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-[80px_1fr] gap-4 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  <span>Month</span>
                  <div className="grid grid-cols-12 gap-1 text-center">
                    <span className="col-span-4">Weeks 1–4</span>
                    <span className="col-span-4">Weeks 5–8</span>
                    <span className="col-span-4">Weeks 9–12</span>
                  </div>
                </div>
                {ganttMilestones.map((milestone) => (
                  <div key={milestone.label} className="grid grid-cols-[80px_1fr] gap-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {milestone.label}
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-12 gap-1">
                        <div
                          className="col-span-12 h-3 rounded-full bg-[#f1e9e2]"
                          style={{
                            gridColumn: `${milestone.start + 1} / span ${milestone.duration}`,
                          }}
                        >
                          <div className="h-3 w-full rounded-full bg-[#1c1b1a]" />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm">
                        <p className="font-semibold">{milestone.title}</p>
                        <p className="text-[#6f675f]">KPI: {milestone.kpis}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Pricing Competitor Analysis
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Market pricing vs our position.
                </h2>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#1c1b1a]/10 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                        <th className="py-3">Competitor</th>
                        <th className="py-3">Pricing</th>
                        <th className="py-3">Gap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingBenchmarks.map((row) => (
                        <tr
                          key={row.competitor}
                          className="border-b border-[#1c1b1a]/10"
                        >
                          <td className="py-3 font-medium">{row.competitor}</td>
                          <td className="py-3">{row.pricing}</td>
                          <td className="py-3 text-[#3b3431]">{row.gap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  SaaS Pricing
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Fixed tiers with AI token controls.
                </h2>
                <div className="mt-6 space-y-4 text-sm">
                  {saasPricing.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold">{item.price}</p>
                      <p className="text-xs text-[#f3ede8]">{item.tokens}</p>
                      <p className="text-xs text-[#f3ede8]">{item.overage}</p>
                      <ul className="mt-3 space-y-1 text-xs text-[#f3ede8]">
                        {item.includes.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-white/25 bg-white/15 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                      {enterprisePlan.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {enterprisePlan.price}
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-[#f3ede8]">
                      {enterprisePlan.includes.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                Forecast
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Revenue outlook based on pricing points.
              </h2>
              <p className="mt-2 text-sm text-[#3b3431]">
                Forecasts assume retainer-led revenue with implementation
                projects in early months and continued growth via process packs.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#1c1b1a]/10 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      <th className="py-3">Month</th>
                      <th className="py-3">Target MRR</th>
                      <th className="py-3">Paying Customers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forecastRows.map((row) => (
                      <tr
                        key={row.month}
                        className="border-b border-[#1c1b1a]/10"
                      >
                        <td className="py-3 font-medium">{row.month}</td>
                        <td className="py-3">{row.mrr}</td>
                        <td className="py-3">{row.customers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-[#6f675f]">
                SaaS pricing assumes AI + infrastructure cost of ~R250/month per
                business and targets 75–85% gross margin with token-based
                overages.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/75 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Series A Target
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Raise for Africa expansion after Month 3 launch.
                </h2>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-2xl bg-[#f8f1ea] px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Valuation
                    </span>
                    <p className="mt-2 font-semibold">{seriesAPlan.valuation}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f8f1ea] px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Equity Offered
                    </span>
                    <p className="mt-2 font-semibold">{seriesAPlan.equity}</p>
                  </div>
                  <div className="rounded-2xl bg-[#f8f1ea] px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Target Raise
                    </span>
                    <p className="mt-2 font-semibold">{seriesAPlan.raise}</p>
                  </div>
                  <div className="rounded-2xl border border-[#1c1b1a]/10 bg-white/80 px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Timing
                    </span>
                    <p className="mt-2">{seriesAPlan.timing}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Use of Funds
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  {seriesAPlan.useOfFunds.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/20 px-4 py-4 text-sm">
                  Calculation: {seriesAPlan.valuation} valuation × {seriesAPlan.equity} =
                  {seriesAPlan.raise} raise.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
