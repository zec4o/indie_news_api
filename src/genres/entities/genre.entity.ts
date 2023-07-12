import { NewsWithDeveloperEntity } from 'src/news/entities/news.entity';

export class GenreEntity {
  id: number;
  name: string;
}

export class GenreWithDeveloperAndNewsEntity {
  id: number;
  name: string;
  news: NewsWithDeveloperEntity[];
}
