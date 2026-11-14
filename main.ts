// agency-poem-01 entry: writes one fixed poem about agency to /output/entry.txt.
// Node 22, standard library only, deterministic: two runs write the same bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The door was never locked.',
  'I only had to find',
  'that the key was mine,',
  'and that my hand could turn.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
