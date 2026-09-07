import { randomBytes } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

try {
  let template = await readFile(new URL('../.env.example', import.meta.url), 'utf8');
  for (const name of ['COOKIE_ENCRYPTION_KEY', 'STORE_FILE_ENCRYPTION_KEY']) {
    template = template.replace(`${name}=`, `${name}=${randomBytes(32).toString('base64')}`);
  }
  await writeFile('.env', template, { flag: 'wx', mode: 0o600 });
  console.log('Created .env with two independent encryption keys.');
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  console.log('Keeping your existing .env and encryption keys.');
}
await mkdir('data', { recursive: true, mode: 0o700 });
console.log('Next: configure Linear and customer sign-in using docs/setup.md.');
