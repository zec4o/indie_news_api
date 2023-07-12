import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { DevelopersModule } from './developers/developers.module';
import { GenresModule } from './genres/genres.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    NewsModule,
    DevelopersModule,
    GenresModule,
    PrismaModule,
  ],
})
export class AppModule {}
