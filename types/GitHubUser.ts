export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
  bio?: string;
  followers: number;
  following: number;
  public_repos: number;
}
