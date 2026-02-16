import Link from "next/link";
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

type Block =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "hr" };

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
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1c1b1a] text-white font-semibold">
                DP
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
            <Link
              href="/pitch-deck"
              className="text-xs uppercase tracking-[0.3em] text-[#6f675f] transition hover:text-[#1c1b1a]"
            >
              View Pitch Deck
            </Link>
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
        </main>
      </div>
    </div>
  );
}
