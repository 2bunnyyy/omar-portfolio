import { defineConfig } from 'astro/config';

// On GitHub Actions, derive the Pages URL from the repository:
// "<user>.github.io" repos are served at the root, others under "/<repo>".
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.endsWith('.github.io');

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'https://omarabdillahiomar.com',
  base: repo && !isUserSite ? `/${repo}` : '/',
});
