// Fortune Cookie Wisdom for Developers.
// Entry program: writes one original fortune-cookie line for a
// software developer to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output).
// The line is fixed: the fortune itself is the entry, and the program
// exists to deliver it exactly, with no trailing newline, inside the
// competition's 1-120 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A test that never fails is not a test; it is a compliment you wrote to yourself.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`fortune line must be 1-120 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
