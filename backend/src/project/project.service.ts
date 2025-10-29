import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.project.findMany();
  }

  findOne(projectId: number) {
    return this.prisma.project.findUnique({ where: { id: projectId } });
  }

  create(dto: CreateProjectDto) {
    return this.prisma.project.create({ data: dto });
  }

  delete(projectId: number) {
    return this.prisma.project.delete({ where: { id: projectId } });
  }

  update(projectId: number, dto: UpdateProjectDto) {
      return this.prisma.project.update({
          where: { id: projectId },
          data: dto,
      });
  }
}
