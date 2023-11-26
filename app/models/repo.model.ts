export type Repo = {
  id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[] | undefined;
  fork: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};
