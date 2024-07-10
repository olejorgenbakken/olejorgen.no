import { fromUnixEpochTime } from '@/app/features/utils/formatters';
import { Octokit } from 'octokit';

const octokit = new Octokit();

export async function useRateLimit() {
  const rate = await octokit.request('GET /rate_limit', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const ratelimit = rate.data.resources.core;
  const errorText = `For mange kall på kort tid (${
    ratelimit.limit
  } requests per hour). Neste kall: ${fromUnixEpochTime(ratelimit.reset)}.`;

  return { ...ratelimit, errorText };
}
