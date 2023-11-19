import { User } from "../user.model";

export const dynamic = "force-dynamic";

export async function GET(user: string) {
  const data = (
    await fetch(`https://api.github.com/users/${user}`)
  ).json() as Promise<User>;
  return data;
}
