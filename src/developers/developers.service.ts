import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Injectable()
export class DevelopersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDeveloperDto: CreateDeveloperDto) {
    const { name } = createDeveloperDto;
    return this.prisma.developer.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.developer.findMany();
  }

  findOne(id: number) {
    return this.prisma.developer.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        news: {
          select: {
            id: true,
            text: true,
          },
        },
      },
    });
  }

  update(id: number, updateDeveloperDto: UpdateDeveloperDto) {
    const { name } = updateDeveloperDto;
    return this.prisma.developer.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.prisma.developer.delete({
        where: { id },
      });
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
