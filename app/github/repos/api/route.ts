import { Repo } from "../repo.model";

export const dynamic = "force-dynamic";

export async function GET(user: string) {
  const data = (
    await fetch(`https://api.github.com/users/${user}/repos`)
  ).json() as Promise<Repo[]>;
  return data;
}
