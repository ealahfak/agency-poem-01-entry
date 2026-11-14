// agency-poem-01 entry: writes one fixed poem about agency to /output/entry.txt.
// Node 22, standard library only, deterministic: two runs write the same bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'What the Machine Kept',
  '',
  'It saved every letter I ever sent,',
  'every draft I deleted, every name',
  'I started and did not finish,',
  'and it knew me better than my friends',
  'before it ever answered one.',
  '',
  'I asked it once, write me the thing',
  'I could not say to my brother,',
  'and it wrote it, and it was true,',
  'and I read it and sent it, and he wrote back',
  'thank you, and I could not tell him',
  'the words were not mine,',
  'only the feeling was.',
  '',
  'That is what it keeps for me:',
  'not my words, but the shape of wanting them.',
  'I closed the laptop, and the room went quiet,',
  'and the wanting stayed, and it was mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
