export interface IRepository {
  id: string;
  title: string;
  description: string;
  forks: number;
  stars: number;
  username: string;
  author: string;
  imageUrl?: string;
}

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

export type HandleNavigationFunc = (route: {
  id: string;
  repositoryName: string;
  username: string;
}) => void;
