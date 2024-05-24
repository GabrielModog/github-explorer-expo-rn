export interface IPullRequest {
  id: string;
  title: string;
  description: string;
  username: string;
  author: string;
  url: string;
  createdAt: string;
  imageUrl?: string;
}
