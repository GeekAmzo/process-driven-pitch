import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, FileText, Wallet, Users } from "lucide-react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const parties = [
  { label: "Company", value: "H44S (Pty) Ltd" },
  { label: "Investor", value: "TBD Investor" },
  { label: "Effective Date", value: "17 February 2026" },
  { label: "Jurisdiction", value: "South Africa" },
];

const fundingOptions = [
  {
    option: "Convertible Note",
    summary:
      "Investor provides capital as a convertible instrument into equity upon a qualified round.",
    keyTerms: [
      "Conversion at next equity raise (discount + valuation cap to be agreed).",
      "Interest accrues until conversion.",
      "Conversion event includes qualified financing or change of control.",
    ],
  },
  {
    option: "Loan Facility",
    summary:
      "Investor provides a debt facility to be repaid from revenue over an agreed term.",
    keyTerms: [
      "Fixed interest rate and repayment schedule to be agreed.",
      "Optional revenue-share or success fee kicker.",
      "Security and guarantees to be agreed.",
    ],
  },
  {
    option: "Equity Investment",
    summary:
      "Investor purchases equity upfront at a negotiated valuation.",
    keyTerms: [
      "Share class and rights to be agreed.",
      "Board or observer rights to be agreed.",
      "Standard founder vesting and IP assignment.",
    ],
  },
];

const acquisitionOption = [
  "Investor may acquire 100% of the application and related IP.",
  "Geek247 is awarded a development and management contract post-acquisition.",
  "Contract includes roadmap delivery, ops support, and ongoing maintenance.",
  "Pricing and term to be negotiated in the definitive agreement.",
];

const governance = [
  "Approval-first governance for material changes, spend, and hiring.",
  "Monthly reporting: KPIs, cash flow, milestone progress.",
  "Audit logs and compliance documentation maintained by the platform.",
];

const milestones = [
  "Phase 1: App creation wizard live and customer onboarding functional.",
  "Phase 2: Integrations + command center active with approval queue.",
  "Phase 3: Orchestrated agents executing with policy gates.",
  "Phase 4: Autonomous department packs launched.",
  "Phase 5: Full business autonomy with continuous improvement engine.",
];

const nonBinding = [
  "This MOU is non-binding except for confidentiality, exclusivity, and cost clauses.",
  "Definitive agreements will govern final terms.",
];

export default function MOUPage() {
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
                  Memorandum of Understanding
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
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <FileText className="h-4 w-4" />
                Summary
              </div>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl">
                MOU for Investment and Strategic Partnership
              </h1>
              <p className="mt-3 text-sm text-[#3b3431]">
                This Memorandum of Understanding sets out the intended
                investment relationship between H44S (Pty) Ltd and the Investor
                to fund and scale the Driven Processes platform. It outlines
                available funding structures, governance expectations, and
                milestones.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {parties.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-[#f8f1ea] px-4 py-3 text-sm"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {item.label}
                    </span>
                    <p className="mt-2 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <Wallet className="h-4 w-4" />
                Funding Structures
              </div>
              <div className="mt-6 space-y-4 text-sm">
                {fundingOptions.map((option) => (
                  <div
                    key={option.option}
                    className="rounded-2xl bg-[#f8f1ea] px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                      {option.option}
                    </p>
                    <p className="mt-2 font-semibold">{option.summary}</p>
                    <ul className="mt-3 space-y-2 text-sm text-[#3b3431]">
                      {option.keyTerms.map((term) => (
                        <li key={term}>{term}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#f5e7dd]">
                <Users className="h-4 w-4" />
                Acquisition Option
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                100% application acquisition + Geek247 contract.
              </h2>
              <div className="mt-6 space-y-3 text-sm">
                {acquisitionOption.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#9c8f86]">
                <ShieldCheck className="h-4 w-4" />
                Governance & Reporting
              </div>
              <div className="mt-6 space-y-3 text-sm">
                {governance.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#f8f1ea] px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[#1c1b1a]/10 bg-white/80 px-4 py-4 text-sm">
                Any change in funding structure or acquisition terms will be
                documented in a definitive agreement.
              </div>
            </div>
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-[#1c1b1a] p-8 text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f5e7dd]">
                Milestones
              </p>
              <div className="mt-6 space-y-3 text-sm">
                {milestones.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="rounded-3xl border border-[#1c1b1a]/10 bg-white/80 p-8 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                Non-Binding Terms
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#3b3431]">
                {nonBinding.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] px-4 py-6 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                    Company Signature
                  </p>
                  <p className="mt-6">______________________________</p>
                  <p className="mt-2">H44S (Pty) Ltd</p>
                </div>
                <div className="rounded-2xl border border-[#1c1b1a]/10 bg-[#f8f1ea] px-4 py-6 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#9c8f86]">
                    Investor Signature
                  </p>
                  <p className="mt-6">______________________________</p>
                  <p className="mt-2">TBD Investor</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-[#6f675f]">
                This MOU is intended as a good-faith summary and does not
                constitute legal advice. Parties should obtain independent legal
                counsel before executing definitive agreements.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
