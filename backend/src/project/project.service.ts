import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Project } from '../prisma/generated/client.js';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  findOne(projectId: number): Promise<Project | null> {
    return this.prisma.project.findUnique({ where: { id: projectId } });
  }

  findByName(name: string): Promise<Project[]> {
    return this.prisma.project.findMany({
        where: { name: name },
      });
  }

  create(dto: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({ data: dto });
  }

  delete(projectId: number): Promise<Project> {
    return this.prisma.project.delete({ where: { id: projectId } });
  }

  update(projectId: number, dto: UpdateProjectDto): Promise<Project> {
    return this.prisma.project.update({
      where: { id: projectId },
      data: dto,
    });
  }
}
