import {Controller, Get, Post, Body, Delete, Param, Patch, ParseIntPipe} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import {UpdateProjectDto} from "./dto/update-project.dto";

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAllProjects() {
    return this.projectService.findAll();
  }

  @Get(':projectId')
  findProject(@Param('projectId', ParseIntPipe) projectId: number) {
    return this.projectService.findOne(projectId);
  }

  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }

  @Delete(':projectId')
  deleteProject(@Param('projectId', ParseIntPipe) projectId: number) {
      return this.projectService.delete(projectId);
  }
  
  @Patch(':projectId')
  updateProject(@Param('projectId', ParseIntPipe) projectId: number, @Body() dto: UpdateProjectDto) {
      return this.projectService.update(projectId, dto);
  }
}
