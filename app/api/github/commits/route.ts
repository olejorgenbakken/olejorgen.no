import { Commit } from "../models/commit.model";

export const dynamic = "force-dynamic";

export async function GET(
  owner: string = "olejorgenbakken",
  repo: string = "olejorgen.no"
) {
  const data = (
    await fetch(`https://api.github.com/users/${owner}/${repo}/commits}`)
  ).json() as Promise<Commit[]>;
  return data;
}
