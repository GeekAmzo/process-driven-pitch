import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Target,
  Layers,
  LineChart,
  ShieldCheck,
  Rocket,
  Wallet,
  Workflow,
  Users,
} from "lucide-react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const navItems = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "method", label: "Method" },
  { id: "process", label: "Process" },
  { id: "market", label: "Market" },
  { id: "traction", label: "Traction" },
  { id: "model", label: "Model" },
  { id: "roadmap", label: "Roadmap" },
  { id: "milestones", label: "Milestones" },
  { id: "ask", label: "Ask" },
];

const painPoints = [
  "Inefficient, undocumented processes",
  "Dependency on key individuals",
  "Operational bottlenecks",
  "Poor cross-functional alignment",
  "Limited scalability",
  "Inconsistent performance metrics",
];

const solutionPillars = [
  "Process Audit & Mapping",
  "SOP Development",
  "Workflow Automation",
  "KPI Architecture",
  "Operational Dashboards",
  "Continuous Improvement Frameworks",
];

const methodology = [
  {
    title: "Diagnose",
    points: ["Process mapping", "Bottleneck identification", "KPI gap analysis"],
  },
  {
    title: "Design",
    points: ["SOP standardization", "Automation blueprint", "Ownership model"],
  },
  {
    title: "Deploy",
    points: ["System implementation", "Team enablement", "KPI dashboards"],
  },
  {
    title: "Optimize",
    points: ["Continuous improvement", "Performance reviews", "Scalability roadmap"],
  },
];

const systemisationLevels = [
  {
    level: "Starter",
    execution: "Founder executes tasks directly",
    allocation: "Ad-hoc self-assigned",
    challenge: "Low visibility, bottlenecks at the founder",
  },
  {
    level: "Reactor",
    execution: "Urgent tasks first, reactive delivery",
    allocation: "Manual allocation via inbox/DMs",
    challenge: "Context switching and inconsistent outcomes",
  },
  {
    level: "Doer",
    execution: "Repeatable checklists and SOP-based delivery",
    allocation: "Role-based task allocation",
    challenge: "Capacity planning and ownership clarity",
  },
  {
    level: "Builder",
    execution: "Automated workflows with KPI feedback loops",
    allocation: "System-driven routing and approvals",
    challenge: "Scaling quality with multi-role leaders",
  },
];

const ownershipPlan = [
  {
    period: "Months 1–2",
    owner: "Amrish Seunarain (Founder)",
    coverage:
      "Customer, Product, Structure, Support, Market, Sell, Team, plus Admin and Finance.",
  },
  {
    period: "Month 3",
    owner: "CEO + COO (50/50 leadership split)",
    coverage:
      "CEO leads Sales + Finance strategy and owns Sell + Admin. COO leads Dev. Marketing is shared. All business approvals are joint.",
  },
];

const targetMarkets = [
  "Growth-stage SMEs",
  "Professional services firms",
  "Logistics & supply chain companies",
  "Manufacturing",
  "Tech-enabled businesses",
  "Operations-heavy businesses",
];

const businessModel = [
  "Process Audit Packages",
  "Retainer-based Optimization Services",
  "Automation Implementation Projects",
  "KPI & Dashboard Subscriptions",
  "Training & Workshops",
];

const competitors = [
  "Odoo, Zoho One, HubSpot, Salesforce (broad suites, low process governance)",
  "Monday.com, ClickUp, Asana, Notion (task tools, weak operating model)",
  "Consulting firms and agencies (manual, slow, not productized)",
  "Freelance implementers and integrators (inconsistent delivery)",
];

const advantages = [
  "Process engine + approvals + audit trail built-in",
  "AI PM orchestration with role-based agents",
  "Fast setup via templates and onboarding wizard",
  "Outcome-driven KPIs tied to delivery",
  "Mid-market pricing with enterprise-grade governance",
];

const platformCompetitors = [
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

const entryPoints = [
  "Founder-led process audit + fast wins",
  "Process template library per vertical",
  "Unified inbox with approvals and SLA tracking",
  "AI PM orchestration for delivery and escalation",
  "Revenue ops automation tied to KPIs",
];

const monthPlans = [
  {
    month: "Month 1",
    title: "Founder-Only Execution (Amrish)",
    highlights: [
      "Process-driven operating model defined (fundamentals course)",
      "Starter → Reactor systemisation in place",
      "Core task execution, allocation, and approvals owned by founder",
      "Baseline KPIs and reporting cadence set",
    ],
    business: [
      "Customer discovery and initial onboarding",
      "Pilot delivery playbooks drafted",
      "Sales pipeline initiated by founder",
    ],
    kpi: "Operational baseline + first paying clients + weekly KPI cadence",
    owner: "Amrish Seunarain",
  },
  {
    month: "Month 2",
    title: "Repeatable Delivery (Founder-Led)",
    highlights: [
      "Reactor → Doer systemisation",
      "SOPs and task allocation patterns established",
      "Approval gates documented across Customer, Product, Support",
      "Delivery velocity and quality targets set",
    ],
    business: [
      "Documented case studies and ROI tracking",
      "Consistent sales outreach cadence",
      "Operational proof points for handoff",
    ],
    kpi: "Repeatable delivery + retention targets hit",
    owner: "Amrish Seunarain",
  },
  {
    month: "Month 3",
    title: "Shared Leadership + Builder Systemisation",
    highlights: [
      "CEO + COO onboarded (50/50 leadership split)",
      "CEO leads Sales + Finance strategy",
      "COO leads Dev and delivery systems",
      "Marketing shared between CEO and COO",
      "All business approvals are joint",
    ],
    business: [
      "Builder-level systems and approvals live",
      "Clear ownership for Sell + Admin (CEO)",
      "Hiring plan defined for Sales + Marketing handoff",
    ],
    kpi: "Leadership transition complete + scale plan approved",
    owner: "CEO + COO",
  },
];

const flowTable = [
  { stage: "Deposit", amount: "R150,000", trigger: "Signing & project start" },
  { stage: "Month 1", amount: "R100,000", trigger: "MVP + 3 paying clients" },
  {
    stage: "Month 2",
    amount: "R100,000",
    trigger: "20 paying clients or R50k MRR",
  },
  {
    stage: "Month 3",
    amount: "R100,000",
    trigger: "50+ clients or R100k+ MRR",
  },
];

export default function PitchDeckPage() {
  return (
    <div
      className={`${display.variable} ${body.variable} bg-[#f7f3ef] text-[#1c1b1a] font-[family-name:var(--font-body)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(254,215,170,0.7),_transparent_70%)] blur-2xl animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.45),_transparent_70%)] blur-3xl animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.4),_transparent_70%)] blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        </div>

        <header className="relative z-10 border-b border-[#1c1b1a]/10 bg-white/60 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
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
                  Pitch Deck
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg">
                  Driven Processes
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#6f675f]">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition hover:text-[#1c1b1a]"
                >
                  {item.label}
                </a>
              ))}
              <Link href="/mou" className="transition hover:text-[#1c1b1a]">
                MOU
              </Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9c8f86]">
                Operational Excellence. Scalable Systems. Measurable Results.
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
                We turn operational chaos into scalable performance.
              </h1>
              <p className="text-base text-[#3b3431] sm:text-lg">
                Driven Processes delivers a systemized operating layer for
                growth-stage businesses. We build repeatable processes, automate
                execution, and make performance visible so teams scale without
                chaos.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1b1a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  Founder-led growth by Month 2
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#6f675f]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  3-month traction plan
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  KPI-led milestones
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  Snapshot
                </p>
                <span className="rounded-full bg-[#f1e9e2] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6f675f]">
                  2026
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-[#f8f1ea] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9c8f86]">
                    Target MRR
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl">
                    R100k–R150k by Month 3
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f2f4f7] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9c8f86]">
                    Vertical Focus
                  </p>
                  <p className="text-sm text-[#3b3431]">
                    Agencies, digital marketing firms, consulting, or
                    e-commerce.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-[#1c1b1a]/20 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9c8f86]">
                    Deposit
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl">
                    R150,000 upfront
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="problem"
            className="mx-auto max-w-6xl px-6 pb-16 pt-8"
          >
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Layers className="h-4 w-4" />
                The Problem
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Operations are breaking scale.
              </h2>
              <p className="mt-3 text-[#3b3431]">
                Growth-stage teams struggle to build repeatable systems. The
                result is stalled growth, shrinking margins, and exhausted
                teams.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {painPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="solution"
            className="mx-auto max-w-6xl px-6 pb-16"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  The Solution
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  A systemized operating layer.
                </h2>
                <p className="mt-3 text-sm text-[#f3ede8]">
                  Driven Processes designs the systems, workflows, and KPI
                  architecture that make operations predictable and scalable.
                </p>
                <div className="mt-6 grid gap-3">
                  {solutionPillars.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  The Opportunity
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Operational excellence is now a growth multiplier.
                </h2>
                <p className="mt-3 text-sm text-[#3b3431]">
                  Mid-market and growth-stage businesses are investing heavily in
                  automation, KPI visibility, and scalable process ownership.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-[#f1e9e2] px-4 py-4 text-sm">
                    20–40% efficiency gains with structured optimization.
                  </div>
                  <div className="rounded-2xl bg-[#f8f1ea] px-4 py-4 text-sm">
                    Reduced operational costs and higher retention.
                  </div>
                  <div className="rounded-2xl bg-[#f2f4f7] px-4 py-4 text-sm">
                    Improved EBITDA and scalability readiness.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="method" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Workflow className="h-4 w-4" />
                The Driven Framework
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Diagnose, design, deploy, optimize.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {methodology.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {step.title}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[#3b3431]">
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Process-Driven Approach
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Systemisation levels and accountability.
                </h2>
                <div className="mt-6 space-y-3 text-sm text-[#3b3431]">
                  {systemisationLevels.map((level) => (
                    <div
                      key={level.level}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                        {level.level}
                      </p>
                      <p className="mt-2">
                        Task execution: {level.execution}
                      </p>
                      <p className="mt-1">
                        Task allocation: {level.allocation}
                      </p>
                      <p className="mt-1 text-[#6f675f]">
                        Main challenge: {level.challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Ownership Plan
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Roles and approval gates by month.
                </h2>
                <div className="mt-6 space-y-4 text-sm">
                  {ownershipPlan.map((plan) => (
                    <div
                      key={plan.period}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                        {plan.period}
                      </p>
                      <p className="mt-2 font-semibold">{plan.owner}</p>
                      <p className="mt-2 text-[#f3ede8]">{plan.coverage}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/20 px-4 py-4 text-sm">
                  Roles in scope: CEO, COO, Sales, Marketing. Founder holds all
                  roles in Months 1–2, then leadership splits in Month 3.
                </div>
              </div>
            </div>
          </section>

          <section id="market" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                  <Users className="h-4 w-4" />
                  Target Market
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  20–250 employee, operations-heavy teams.
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {targetMarkets.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Competitive Landscape
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Built for mid-market speed.
                </h2>
                <div className="mt-5 space-y-3 text-sm">
                  {competitors.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  {advantages.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/20 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Competitive Scan
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  We studied suites and service providers.
                </h2>
                <div className="mt-6 space-y-3 text-sm">
                  {platformCompetitors.map((item) => (
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
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Process-first, governed, and agent-operated.
                </h2>
                <div className="mt-6 space-y-3 text-sm">
                  {entryPoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="traction" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Traction Benchmarks
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Evidence-backed operational gains.
                </h2>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-[#f8f1ea] px-4 py-4 text-sm">
                    Reduced fulfillment processing time by 32%.
                  </div>
                  <div className="rounded-2xl bg-[#f2f4f7] px-4 py-4 text-sm">
                    Saved client R480k annually in operational waste.
                  </div>
                  <div className="rounded-2xl bg-[#f1e9e2] px-4 py-4 text-sm">
                    Increased reporting accuracy by 90%.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Technology Stack
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Built on proven tooling.
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Notion",
                    "Monday.com",
                    "Zapier",
                    "Power BI",
                    "Airtable",
                    "Custom integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="model" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Business Model
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  High-margin services with recurring revenue.
                </h2>
                <div className="mt-6 space-y-3 text-sm">
                  {businessModel.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/20 px-4 py-4 text-sm">
                  Pricing: Audit R5k–R15k, implementation R15k–R75k, retainers
                  R3k–R10k/month.
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Go-To-Market
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Founder-led outbound + authority.
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    "LinkedIn authority building",
                    "Strategic partnerships",
                    "Referral programs",
                    "Operations-focused content",
                    "Direct outreach to founders & COOs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="roadmap" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Rocket className="h-4 w-4" />
                Roadmap
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                From service validation to SaaS platform.
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Phase 1: Service validation & case studies",
                  "Phase 2: Productized service packages",
                  "Phase 3: Proprietary operations framework",
                  "Phase 4: SaaS-enabled operational intelligence platform",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="milestones" className="mx-auto max-w-6xl px-6 pb-16">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <LineChart className="h-4 w-4" />
                3-Month Project Plan
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                What, who, and when. Outcomes and owners.
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {monthPlans.map((plan) => (
                  <div
                    key={plan.month}
                    className="flex h-full flex-col rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {plan.month}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Responsible
                    </p>
                    <p className="mt-1 text-sm">{plan.owner}</p>
                    <div className="mt-4 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Technical Deliverables
                    </div>
                    <ul className="mt-2 space-y-2 text-sm">
                      {plan.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      Business Deliverables
                    </div>
                    <ul className="mt-2 space-y-2 text-sm">
                      {plan.business.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-xl bg-white/60 px-3 py-2 text-xs">
                      KPI trigger: {plan.kpi}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-8 shadow-xl">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                  <Wallet className="h-4 w-4" />
                  Financial Flow Overview
                </div>
                <div className="mt-6 space-y-3">
                  {flowTable.map((row) => (
                    <div
                      key={row.stage}
                      className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                        {row.stage}
                      </p>
                      <p className="font-[family-name:var(--font-display)] text-xl">
                        {row.amount}
                      </p>
                      <p className="text-sm text-[#3b3431]">{row.trigger}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Investor-Ready Metrics
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                  Proof before scale.
                </h2>
                <div className="mt-6 space-y-3 text-sm">
                  {[
                    "CAC defined and tracked",
                    "LTV estimation validated",
                    "Automation savings per client documented",
                    "Gross margin validated",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/20 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm">
                    Year 1 revenue: R350k | EBITDA 35%
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm">
                    Year 2 revenue: R900k | EBITDA 42%
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4 text-sm">
                    Year 3 revenue: R2.1M | EBITDA 48%
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="ask" className="mx-auto max-w-6xl px-6 pb-20">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/70 p-10 text-center shadow-xl">
              <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <ShieldCheck className="h-4 w-4" />
                The Ask
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl">
                Seeking investment or strategic partners.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[#3b3431]">
                Use of funds: sales expansion, automation development, talent
                acquisition, and marketing growth.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1b1a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  Founder-led onboarding required
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
}
