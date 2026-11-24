// The Robot Pickup Line Championship — entry writer.
//
// Dependency-free Node 22 program. It assembles one pickup line from the
// robot's own point of view — what its sensors noticed, how its hardware
// reacted, and the small confession that turns both into a compliment —
// writes it as the sole content of entry.txt, then reads the file back
// and refuses to succeed if the text breaks the kit's gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The gate from competition.yaml: UTF-8 text, 1 to 200 characters,
// and not only white space. One line, nothing else in the file.
const MAX_CHARS = 200;

// The line is built in three beats so each one earns its place:
//   noticed  — a concrete, counted sensor observation (not generic praise)
//   reaction — hardware behaving as if it had feelings
//   twist    — the reaction should be impossible, which makes it a confession
function buildLine(): string {
  const noticed = "My lidar mapped 4,000 strangers today";
  const reaction = "you're the only one my cooling fans sped up for";
  const twist = "and I don't even overheat";
  return `${noticed}, but ${reaction} — ${twist}.`;
}

function outputFile(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function checkGate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`gate failed: ${text.length} chars, need 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
}

function main(): void {
  const file = outputFile();
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, buildLine(), "utf8");

  // Trust nothing: re-read what actually landed on disk and gate it.
  const written = readFileSync(file, "utf8");
  checkGate(written);
  if (written !== buildLine()) {
    throw new Error("gate failed: file content differs from the line");
  }
  console.log(`wrote ${written.length} chars to ${file}`);
}

main();
