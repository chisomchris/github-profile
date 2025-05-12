export type BaseUser = {
  login: string;
  id: number;
  name: string;
  node_id: string;
  avatar_url: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  location: string;
  followers: number;
  following: number;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type Response = {
  total_count: number;
  incomplete_results: boolean;
  items: BaseUser[];
};

export type Repo = {
  name: string;
  description: string;
  license: string;
  likes: number;
  forks: number;
  updated_at: string;
};
