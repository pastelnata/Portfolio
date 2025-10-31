import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProjectModule } from './project/project.module.js';
import { ProjectController } from './project/project.controller.js';

@Module({
  imports: [ProjectModule],
  controllers: [AppController, ProjectController],
  providers: [AppService],
})
export class AppModule {}
