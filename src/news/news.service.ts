import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

const selectNewsValidator = Prisma.validator<Prisma.NewsSelect>()({
  id: true,
  text: true,
  developer: {
    select: {
      id: true,
      name: true,
    },
  },
  genre: {
    select: {
      id: true,
      name: true,
    },
  },
});

const createNewsValidator = (
  text: string,
  developer: string,
  genre: string,
) => {
  return Prisma.validator<Prisma.NewsCreateInput>()({
    text,
    developer: {
      connectOrCreate: {
        where: { name: developer },
        create: { name: developer },
      },
    },
    genre: {
      connectOrCreate: {
        where: { name: genre },
        create: { name: genre },
      },
    },
  });
};

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNewsDto: CreateNewsDto) {
    const {
      text,
      developer: { name: developer },
      genre: { name: genre },
    } = createNewsDto;
    return this.prisma.news.create({
      data: createNewsValidator(text, developer, genre),
      select: selectNewsValidator,
    });
  }

  findAll() {
    return this.prisma.news.findMany({
      select: selectNewsValidator,
    });
  }

  findOne(id: number) {
    return this.prisma.news.findUnique({
      where: { id },
      select: selectNewsValidator,
    });
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    const {
      text,
      developer: { name: developer },
      genre: { name: genre },
    } = updateNewsDto;
    return this.prisma.news.update({
      where: { id },
      data: createNewsValidator(text, developer, genre),
      select: selectNewsValidator,
    });
  }

  remove(id: number) {
    return this.prisma.news.delete({
      where: { id },
    });
  }
}
