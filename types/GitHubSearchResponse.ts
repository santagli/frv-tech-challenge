import { GitHubUser } from "@types";

export interface GitHubSearchResponse {
  total_count: number;
  items: GitHubUser[];
}
