import { Octokit } from 'octokit';
import type { Repository } from '../models/repository.model';
import { mockRepositories } from '../models/repository.mock';
import { useRateLimit } from '../../Meta/hooks/useRateLimit';

const octokit = new Octokit();

export async function useRepositories(
  sort: 'created' | 'updated' | 'pushed' | 'full_name' = 'pushed'
) {
  const ratelimit = await useRateLimit();
  if (ratelimit.remaining < 1) return mockRepositories;

  const repos = await octokit.request('GET /users/olejorgenbakken/repos', {
    username: 'olejorgenbakken',
    sort,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return repos.data as Repository[];
}
