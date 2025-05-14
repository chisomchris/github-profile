export type BaseUser = {
  login: string;
  id: number;
  name: string;
  html_url: string;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
  bio: string;
};

export type Response = {
  total_count: number;
  incomplete_results: boolean;
  items: BaseUser[];
};

export type Repo = {
  html_url: string;
  name: string;
  description: string;
  license: null | {
    spdx_id: string;
  };
  stargazers_count: number;
  forks: number;
  updated_at: string;
};
