import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import {
  GenreEntity,
  GenreWithDeveloperAndNewsEntity,
} from './entities/genre.entity';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  findAll(): Promise<GenreEntity[]> {
    return this.genresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GenreWithDeveloperAndNewsEntity> {
    return this.genresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ): Promise<GenreEntity> {
    return this.genresService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.genresService.remove(+id);
  }
}
