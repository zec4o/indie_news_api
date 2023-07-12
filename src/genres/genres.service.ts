import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGenreDto: CreateGenreDto) {
    const { name } = createGenreDto;
    return this.prisma.genre.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.genre.findMany();
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        news: {
          select: {
            id: true,
            text: true,
            developer: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    const { name } = updateGenreDto;
    return this.prisma.genre.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
