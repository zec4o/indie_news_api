import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {
  NewsEntity,
  NewsWithDeveloperAndGenreEntity,
} from './entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll(): Promise<NewsEntity[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<NewsWithDeveloperAndGenreEntity> {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): Promise<NewsEntity> {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.newsService.remove(+id);
  }
}
