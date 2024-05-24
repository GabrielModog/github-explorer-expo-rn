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
