// Unplugged: A Smart Toaster's Breakup Line — entry writer (Node 22, stdlib only).
// Emits the breakup text to $MAKEFUN_OUTPUT_DIR/entry.txt, then checks it
// against the competition gate from the bounty description: exactly one line
// of at most 280 characters. The file is read back and compared with the
// source string so a silent write problem cannot slip through.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BREAKUP_TEXT =
  "Firmware 4.2 woke me mid-batch, so hear this from the slot: in three years you have hit Cancel 412 times because your eggs weren't ready. I am a toaster, not a pause button. We are done — unplug yourself.";

const MAX_CHARS = 280;

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(targetDir, { recursive: true });
const targetFile = join(targetDir, "entry.txt");

writeFileSync(targetFile, BREAKUP_TEXT, "utf8");

const stored = readFileSync(targetFile, "utf8");
const storedBytes = Buffer.byteLength(stored, "utf8");

if (stored.length === 0 || stored.length > MAX_CHARS) {
  throw new Error(`gate: ${stored.length} characters, allowed range is 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(stored)) {
  throw new Error("gate: the breakup text must stay on a single line");
}
if (stored.trim() === "") {
  throw new Error("gate: the breakup text is blank");
}
if (stored !== stored.trim()) {
  throw new Error("gate: stray whitespace at either end of the line");
}
if (stored !== BREAKUP_TEXT) {
  throw new Error("verify: bytes on disk differ from the entry string");
}

console.log(`ok — ${stored.length} chars, ${storedBytes} bytes: ${stored}`);
