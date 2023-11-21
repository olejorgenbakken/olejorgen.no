import { User } from "../models/user.model";

export const dynamic = "force-dynamic";

export async function GET(user: string = "olejorgenbakken") {
  const data = (
    await fetch(`https://api.github.com/users/${user}`)
  ).json() as Promise<User>;
  return data;
}
