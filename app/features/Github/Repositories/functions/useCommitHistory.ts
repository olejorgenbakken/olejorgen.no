import { Octokit } from 'octokit';
import type { CommitHistory } from '../models/commitHistory.model';
import { useRateLimit } from '../../Meta/hooks/useRateLimit';
const octokit = new Octokit();

export async function useCommitHistory(repo: string = 'olejorgen.no') {
  const ratelimit = await useRateLimit();

  if (ratelimit.remaining < 1) return { days: [], total: 0, week: 0 };

  const commitHistory = await octokit.request(
    `GET /repos/olejorgenbakken/${repo}/stats/commit_activity`,
    {
      username: 'olejorgenbakken',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  return commitHistory.data as CommitHistory;
}
