import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rejected Olympic Sports — one line, ≤200 chars.
// Template (playbook joke): rule -> literal violation -> flat consequence.
// Event: synchronised escalator standing. Rule: stand perfectly still.
// The commuters shove past; the winners literally cannot move to collect
// their medals, so the punchline lands on a concrete image, not an explanation.
const ENTRY =
  "Synchronised escalator standing: two athletes stand perfectly still while rush-hour commuters shove past them. Britain won gold, but nobody moved to collect the medals.";

const MAX_CHARS = 200;

// Gate guard: the sealed scorer requires 1–200 chars, not only whitespace.
// Fail loudly here rather than shipping an invalid entry.
if ([...ENTRY].length === 0 || [...ENTRY].length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${[...ENTRY].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
