import { Octokit } from 'octokit';

const octokit = new Octokit();

export async function getRateLimit() {
  const rate = await octokit.request('GET /rate_limit', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return rate.data.resources.core;
}
