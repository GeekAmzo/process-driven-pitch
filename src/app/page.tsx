import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ef] text-[#1c1b1a]">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-[#9c8f86]">
          Driven Processes
        </p>
        <h1 className="text-4xl font-semibold">Pitch Materials</h1>
        <p className="text-sm text-[#3b3431]">
          Access the pitch deck, investor plan, business plan, and pitch advert.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
          <Link href="/pitch-deck" className="text-[#1c1b1a] underline">
            Pitch Deck
          </Link>
          <Link href="/investor-plan" className="text-[#1c1b1a] underline">
            Investor Plan
          </Link>
          <Link href="/business-plan" className="text-[#1c1b1a] underline">
            Business Plan
          </Link>
          <Link href="/pitch-advert" className="text-[#1c1b1a] underline">
            Pitch Advert
          </Link>
        </div>
      </div>
    </main>
  );
}
