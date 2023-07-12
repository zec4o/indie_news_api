import { GenreEntity } from 'src/genres/entities/genre.entity';
import { DeveloperEntity } from 'src/developers/entities/developer.entity';

export class NewsEntity {
  id: number;
  text: string;
}

export class NewsWithDeveloperEntity {
  id: number;
  text: string;

  developer: DeveloperEntity;
}

export class NewsWithDeveloperAndGenreEntity {
  id: number;
  text: string;

  developer: DeveloperEntity;
  genre: GenreEntity;
}
