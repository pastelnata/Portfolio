import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Projects } from './components/projects-section/projects';
import { ProjectDetails } from './components/project-details/project-details';
import { ProjectCard } from './components/project-card/project-card';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [Projects, ProjectDetails, ProjectCard],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [Projects],
})
export class ProjectsModule {}
