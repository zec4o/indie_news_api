import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { DevelopersModule } from './developers/developers.module';
import { EventsModule } from './events/events.module';
import { ReleasesModule } from './releases/releases.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [
    NewsModule,
    DevelopersModule,
    EventsModule,
    ReleasesModule,
    GenresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
