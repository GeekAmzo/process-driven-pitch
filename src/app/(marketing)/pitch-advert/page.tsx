import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Workflow,
  Target,
  Rocket,
  Layers,
  ArrowRight,
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

const foundation = [
  "Identity & roles: owner, admin, manager, employee, accountant, legal, sales, support",
  "Org structure: departments, teams, job profiles, permissions",
  "Workspace: homepage, dashboards, modules, notifications, activity log",
  "Data model: customers, products, orders, tasks, projects, approvals, invoices, policies",
  "Knowledge base: company docs, SOPs, templates, training, policies, playbooks",
  "Process engine: builder, triggers, steps, conditions, SLAs, approvals, escalations",
  "Audit & compliance: immutable logs, e-sign approvals, access logs, retention rules",
];

const modules = [
  "CRM: leads, pipeline, activities, quotes, customer timeline",
  "Projects: templates, milestones, task boards, dependencies, resource allocation",
  "Support: ticketing, inbox, WhatsApp/email routing, SLAs",
  "Commerce: catalog, checkout, orders, promotions, shipping, refunds",
  "Finance helpers: invoice capture, reconciliation support, expense routing",
  "Legal helpers: contract drafts, policy drafts, review checklist, clause library",
  "HR helpers: onboarding, training, performance check-ins, leave routing",
];

const agents = [
  "Social posting agent: campaigns, schedules, analytics summaries",
  "Email management agent: triage, replies, follow-ups",
  "WhatsApp management agent: auto responses, routing, CRM updates",
  "Sales agent: follow-up sequences, quotes, call notes, pipeline updates",
  "Project Manager agent: creates projects, assigns, escalates",
  "Accountant helper: invoice prep, categorization, reminders",
  "Legal drafter: contracts, T&Cs, NDAs, internal policies",
  "Website/e-commerce builder: pages, SEO, forms, automations",
];

const integrations = [
  "Connectors: SAP, Shopify/WooCommerce, Meta, Google, Microsoft, Slack/Teams",
  "Email and WhatsApp providers",
  "API + Webhooks + iPaaS compatibility",
  "Data sync rules + conflict resolution + mapping UI",
  "Integration health monitoring + retry queues",
];

const phases = [
  {
    phase: "Phase 1",
    title: "App Creation",
    goal: "Business setup wizard generates a working app in 30–90 minutes.",
    success:
      "Time-to-value under a day with dashboards, templates, and first automations live.",
  },
  {
    phase: "Phase 2",
    title: "Connected Execution",
    goal: "Integrations + command center become the single cockpit.",
    success:
      "70% of work triggered from the platform and sync accuracy above 99%.",
  },
  {
    phase: "Phase 3",
    title: "Orchestrated Agents",
    goal: "Agents run tasks inside process constraints with approvals.",
    success:
      "30–50% of routine tasks executed by agents with <1% bad actions.",
  },
  {
    phase: "Phase 4",
    title: "Autonomous Departments",
    goal: "Agent teams run sales, support, marketing, and delivery end-to-end.",
    success:
      "60–80% automation and humans focus on exceptions and strategy.",
  },
  {
    phase: "Phase 5",
    title: "Full Business Autonomy",
    goal: "Humans steer strategy while agents execute daily operations.",
    success:
      "Predictable execution quality and measurable cost reduction.",
  },
];

const stepOneFlow = [
  "Business profile setup: industry, size, roles, channels, tools",
  "Choose business blueprint: retail, agency, services, manufacturing-lite",
  "Generate workspace: homepage + role dashboards + navigation",
  "Generate modules: CRM, Projects, Commerce, Inbox, Knowledge",
  "Generate processes: core process pack + department packs",
  "Connect integrations: SAP, commerce, email, WhatsApp, socials",
  "Train brand voice and policies: tone, do-not-say, legal rules, limits",
  "Deploy assistive agents: drafts + suggestions only",
  "Go live: approvals, tasks, communications",
  "Enable orchestrated execution: granular toggles per process step",
];

const buildFirst = [
  "Process engine + template library",
  "Unified inbox/timeline for email + WhatsApp + CRM updates",
  "PM orchestration agent as the conductor",
];

export default function PitchAdvertPage() {
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
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1c1b1a] text-white font-semibold">
                DP
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#7c6f68]">
                  Pitch Advert
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg">
                  Business OS
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
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9c8f86]">
                Process-Driven. Governance-Led. Agent-Operated.
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
                A business operating system where AI builds the app and runs the
                work under human-approved governance.
              </h1>
              <p className="text-base text-[#3b3431] sm:text-lg">
                We generate the company structure, processes, and integrations
                in under 90 minutes, then scale execution with agents that
                follow policy, approvals, and audit trails.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1b1a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  Time-to-value under a day
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#6f675f]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  App created from business inputs
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Approval-first governance
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                Product Vision
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-2xl">
                Apps, processes, roles, and integrations generated and run by
                AI agents under human-approved governance.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[#3b3431]">
                <div className="rounded-2xl bg-[#f8f1ea] px-4 py-3">
                  Built-in modules for CRM, projects, support, commerce, finance
                </div>
                <div className="rounded-2xl bg-[#f2f4f7] px-4 py-3">
                  Process engine with SLAs, approvals, and audit trails
                </div>
                <div className="rounded-2xl border border-dashed border-[#1c1b1a]/20 px-4 py-3">
                  Agent layer for sales, ops, marketing, and delivery
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                  <Layers className="h-4 w-4" />
                  Foundation Platform
                </div>
                <div className="mt-6 grid gap-3 text-sm">
                  {foundation.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Built-In Modules
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  {modules.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
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
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                  Agent Layer
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  {agents.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                  Integrations Layer
                </p>
                <div className="mt-6 grid gap-3 text-sm">
                  {integrations.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8f1ea] px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Rocket className="h-4 w-4" />
                Five-Phase Roadmap
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                From app creation to full autonomy.
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-5">
                {phases.map((phase) => (
                  <div
                    key={phase.phase}
                    className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {phase.phase}
                    </p>
                    <p className="mt-2 font-semibold">{phase.title}</p>
                    <p className="mt-2 text-sm text-[#3b3431]">{phase.goal}</p>
                    <p className="mt-3 text-xs text-[#6f675f]">
                      Success metric: {phase.success}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Workflow className="h-4 w-4" />
                Step 1: App Creation Flow
              </div>
              <div className="mt-6 space-y-2 text-sm">
                {stepOneFlow.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[#f8f1ea] px-4 py-3"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {index + 1}.
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#f5e7dd]">
                <Target className="h-4 w-4" />
                Build First
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                The fastest path to defensibility.
              </h2>
              <div className="mt-6 space-y-3 text-sm">
                {buildFirst.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/20 px-4 py-4 text-sm">
                Everything else plugs into the process engine and orchestration
                layer.
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-10 text-center shadow-xl">
              <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <ShieldCheck className="h-4 w-4" />
                The Pitch
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl">
                We turn any business into a governed, agent-run operating system.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[#3b3431]">
                Start with app creation in under 90 minutes. Scale with
                integrations, approvals, and orchestration. Reach autonomy with
                policy-first agent execution.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1b1a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/investor-plan"
                  className="text-xs uppercase tracking-[0.3em] text-[#6f675f] transition hover:text-[#1c1b1a]"
                >
                  View Investor Plan
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
