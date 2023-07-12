import { NewsEntity } from 'src/news/entities/news.entity';

export class DeveloperEntity {
  id: number;
  name: string;
}

export class DeveloperWithNewsEntity {
  id: number;
  name: string;
  news: NewsEntity[];
}
