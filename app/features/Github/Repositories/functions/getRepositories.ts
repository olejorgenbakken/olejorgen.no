import { Octokit } from 'octokit';
import type { Repository } from '../models/repository.model';
import { mockRepositories } from '../models/repository.mock';

const octokit = new Octokit();

export async function getRepositories(
  sort: 'created' | 'updated' | 'pushed' | 'full_name' = 'pushed'
) {
  const ratelimit = await octokit.request('GET /rate_limit');
  if (ratelimit.data.rate.remaining < 1) {
    console.error('Rate limit exceeded');

    return mockRepositories;
  }

  const repos = await octokit.request('GET /users/olejorgenbakken/repos', {
    username: 'olejorgenbakken',
    sort,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return repos.data as Repository[];
}
