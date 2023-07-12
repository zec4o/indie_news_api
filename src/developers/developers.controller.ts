import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import {
  DeveloperEntity,
  DeveloperWithNewsEntity,
} from './entities/developer.entity';

@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  create(
    @Body() createDeveloperDto: CreateDeveloperDto,
  ): Promise<DeveloperEntity> {
    return this.developersService.create(createDeveloperDto);
  }

  @Get()
  findAll(): Promise<DeveloperEntity[]> {
    return this.developersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DeveloperWithNewsEntity> {
    return this.developersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto,
  ): Promise<DeveloperEntity> {
    return this.developersService.update(+id, updateDeveloperDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.developersService.remove(+id);
  }
}
