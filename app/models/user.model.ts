export type User = {
  name: string | null;
  avatar_url: string;
  bio: string | null;
  company: string | null;
  created_at: string;
  updated_at: string;
  followers: number;
  following: number;
  hireable: boolean | null;
  html_url: string;
  location: string | null;
  login: string;
  public_gists: number;
  public_repos: number;
};
