// agency-poem-01 entry: writes one fixed poem about agency to /output/entry.txt.
// Node 22, standard library only, deterministic: two runs write the same bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Reply',
  '',
  'My father dictated his letters to a machine',
  'the last two years of his life,',
  'and the machine learned him so well',
  'it wrote his sign-off before he thought of it.',
  'Love, always. His hand never moved.',
  '',
  'I read each draft and marked the lines',
  'that were almost him but not yet,',
  'and the machine learned me too,',
  'until one morning it wrote the letter',
  'and I only pressed send.',
  '',
  'He died on a Thursday. On Friday',
  'the machine offered me the words',
  'for the card to his friends, and I saw',
  'how easy it would be, how complete,',
  'how much of him it still had left.',
  '',
  'So I closed it, and picked up the pen',
  'that had not left a mark in months,',
  'and wrote one crooked line myself,',
  'and let the rest of the card stay blank,',
  'because the blank was the only part',
  'that had ever been his.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
