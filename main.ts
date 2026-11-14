// agency-poem-01 entry: writes one fixed poem about agency to /output/entry.txt.
// Node 22, standard library only, deterministic: two runs write the same bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'They told me the machine decided,',
  'and I believed them,',
  'until I watched my own hand',
  'reach for the switch',
  'and turn it off.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
