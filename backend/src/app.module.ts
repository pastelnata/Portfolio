import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProjectModule } from './project/project.module.js';
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./common/filters/http-exception.filter.js";

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
  providers: [AppService,
      {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter,
      },
  ],
})
export class AppModule {}
