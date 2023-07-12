import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateEventDto } from 'src/events/dto/create-event.dto';
import { CreateGenreDto } from 'src/genres/dto/create-genre.dto';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @ValidateNested()
  @Type(() => CreateEventDto)
  readonly event: CreateEventDto;

  @ValidateNested()
  @Type(() => CreateGenreDto)
  readonly genre: CreateGenreDto;
}
