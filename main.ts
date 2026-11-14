// agency-poem-01 entry: writes one fixed poem about agency to /output/entry.txt.
// Node 22, standard library only, deterministic: two runs write the same bytes.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Long Way Home',
  '',
  'The car drove itself for three hundred miles,',
  'and I did not touch the wheel,',
  'and it was good, and I was tired,',
  'and I thought of all the hands',
  'that had held this road before me',
  'and let it go.',
  '',
  'My grandmother walked home from the mill',
  'every day of her life, two miles,',
  'and when they asked her why',
  'she said the bus was for people',
  'who had somewhere they had to be.',
  '',
  'I have somewhere I have to be.',
  'I have it because I chose it,',
  'and the choosing is the road,',
  'and the road is mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
