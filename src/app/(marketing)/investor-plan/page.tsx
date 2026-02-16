import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  Wallet,
  Users,
  Target,
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

const fundingFlow = [
  { label: "Deposit", amount: 150_000 },
  { label: "Month 1", amount: 100_000 },
  { label: "Month 2", amount: 100_000 },
  { label: "Month 3", amount: 100_000 },
];

const mrrTargets = [
  { label: "Month 1", value: 15_000 },
  { label: "Month 2", value: 50_000 },
  { label: "Month 3", value: 125_000 },
];

const fundAllocation = [
  { category: "Product & Dev", amount: 210_000, note: "Core platform + AI ops" },
  { category: "Go-to-Market", amount: 120_000, note: "Founder-led sales, pipeline, content" },
  { category: "Operations", amount: 70_000, note: "Delivery systems, SOPs, onboarding" },
  { category: "Tools & Infra", amount: 50_000, note: "Hosting, data, AI usage, automation" },
];

const milestones = [
  {
    month: "Month 1",
    objective: "MVP + active paid pipeline",
    outcomes: [
      "Multi-tenant system live",
      "Process engine + AI PM orchestration",
      "CRM + project module operational",
      "Approval routing system live",
      "3+ paying clients, 100 AI actions",
    ],
  },
  {
    month: "Month 2",
    objective: "Revenue traction proof",
    outcomes: [
      "Sales + Marketing agents live",
      "Unified inbox + billing operational",
      "20 paying businesses or R50k MRR",
      "Retention > 85% and 2 ROI case studies",
    ],
  },
  {
    month: "Month 3",
    objective: "Scale + investor readiness",
    outcomes: [
      "KPI dashboards + token optimization",
      "Pricing tiers + payment gateway live",
      "50–75 paying businesses, R100k–R150k MRR",
      "Churn < 10%, CAC + LTV baselined",
    ],
  },
];

const ownershipPlan = [
  {
    period: "Months 1–2",
    owner: "Amrish Seunarain (Founder)",
    coverage:
      "Customer, Product, Structure, Support, Market, Sell, Team, Admin, Finance.",
  },
  {
    period: "Month 3",
    owner: "CEO + COO (50/50 split)",
    coverage:
      "CEO leads Sales + Finance strategy and owns Sell + Admin. COO leads Dev. Marketing shared. Joint approvals.",
  },
];

function formatZar(value: number): string {
  return `R${value.toLocaleString("en-ZA")}`;
}

function Bar({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label: string;
}) {
  const width = Math.max(6, Math.round((value / max) * 100));
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
        <span>{label}</span>
        <span className="text-[#1c1b1a]">{formatZar(value)}</span>
      </div>
      <div className="h-3 rounded-full bg-[#f1e9e2]">
        <div
          className="h-3 rounded-full bg-[#1c1b1a]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function InvestorPlanPage() {
  const maxFunding = Math.max(...fundingFlow.map((item) => item.amount));
  const maxMrr = Math.max(...mrrTargets.map((item) => item.value));

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
                  Investor Plan
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
                href="/business-plan"
                className="transition hover:text-[#1c1b1a]"
              >
                Business Plan
              </Link>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9c8f86]">
                Pre-Seed | ZAR | Founder-Led Execution
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
                I am building a process-first operations platform that turns
                chaos into repeatable, profitable performance.
              </h1>
              <p className="text-base text-[#3b3431] sm:text-lg">
                I am asking for a milestone-based pre-seed commitment aligned to
                delivery and revenue proof. Funding is released only when clear
                KPIs and operational outcomes are met.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1b1a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Start Due Diligence
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  R450,000 total milestone plan
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-[#7c6f68]">
                  The Ask
                </p>
                <span className="rounded-full bg-[#f1e9e2] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6f675f]">
                  Pre-Seed
                </span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-[#f8f1ea] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9c8f86]">
                    Total Funding Ask
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl">
                    R450,000
                  </p>
                  <p className="text-xs text-[#6f675f]">
                    R150,000 deposit + 3 milestone releases
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-[#1c1b1a]/20 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9c8f86]">
                    First 90 Days
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl">
                    R100k–R150k MRR target
                  </p>
                  <p className="text-xs text-[#6f675f]">
                    50–75 paying businesses
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Wallet className="h-4 w-4" />
                Funding Flow
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Performance-based capital release.
              </h2>
              <div className="mt-6 space-y-4">
                {fundingFlow.map((item) => (
                  <Bar
                    key={item.label}
                    value={item.amount}
                    max={maxFunding}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#f5e7dd]">
                <LineChart className="h-4 w-4" />
                Monthly Targets
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Revenue milestones by month.
              </h2>
              <div className="mt-6 space-y-4">
                {mrrTargets.map((item) => (
                  <Bar
                    key={item.label}
                    value={item.value}
                    max={maxMrr}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-16">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Target className="h-4 w-4" />
                Milestone Plan
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                What I will deliver and when.
              </h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.month}
                    className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {milestone.month}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">
                      {milestone.objective}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#3b3431]">
                      {milestone.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <ShieldCheck className="h-4 w-4" />
                Funds Breakdown
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                How the R450,000 is deployed.
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#1c1b1a]/10 text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      <th className="py-3">Category</th>
                      <th className="py-3">Amount</th>
                      <th className="py-3">Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundAllocation.map((row) => (
                      <tr
                        key={row.category}
                        className="border-b border-[#1c1b1a]/10"
                      >
                        <td className="py-3 font-medium">{row.category}</td>
                        <td className="py-3">{formatZar(row.amount)}</td>
                        <td className="py-3 text-[#3b3431]">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-[#6f675f]">
                Allocation is milestone-based and reviewed monthly with investors.
              </p>
            </div>

            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#f5e7dd]">
                <Users className="h-4 w-4" />
                Ownership & Roles
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                Founder-led now, leadership split in Month 3.
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
                CEO owns Sales + Finance strategy. COO owns Dev. Marketing is
                shared until a Sales/Marketing hire.
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
