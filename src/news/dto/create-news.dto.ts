import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateGenreDto } from 'src/genres/dto/create-genre.dto';
import { CreateDeveloperDto } from 'src/developers/dto/create-developer.dto';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @ValidateNested()
  @Type(() => CreateDeveloperDto)
  readonly developer: CreateDeveloperDto;

  @ValidateNested()
  @Type(() => CreateGenreDto)
  readonly genre: CreateGenreDto;
}
