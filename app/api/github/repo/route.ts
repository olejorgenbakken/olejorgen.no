import { Repo } from "./repo.model";

export const dynamic = "force-dynamic";

export async function GET(
  user: string = "olejorgenbakken",
  sort: string = "created"
) {
  const data = (
    await fetch(`https://api.github.com/users/${user}/repos?sort=${sort}`)
  ).json() as Promise<Repo[]>;
  return data;
}
