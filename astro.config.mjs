import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// A custom domain (public/CNAME) is served at the root. Otherwise, on GitHub
// Actions, "<user>.github.io" repos are served at the root and others under "/<repo>".
const domain = existsSync('public/CNAME') ? readFileSync('public/CNAME', 'utf8').trim() : '';
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.endsWith('.github.io');

export default defineConfig({
  site: domain ? `https://${domain}` : owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  base: !domain && repo && !isUserSite ? `/${repo}` : '/',
});
