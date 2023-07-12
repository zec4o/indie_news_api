import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DevelopersController],
  providers: [DevelopersService],
  imports: [PrismaModule],
})
export class DevelopersModule {}
