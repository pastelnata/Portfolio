import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../../../services/projects.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [MatGridListModule, ProjectCard],
})
export class Projects implements OnInit {
  public projects!: Project[];
  private projectsService = inject(ProjectsService);

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects) => (this.projects = projects));
    if (!this.projects) {
      this.projects = [
        {
          id: 1,
          name: 'Sample Project',
          description: 'This is a sample project description.',
          codeLink: 'link',
          techStack: ['angular', 'typescript', 'scss'],
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
          createdAt: new Date(),
        } as Project,
        {
          id: 2,
          name: 'Another Project',
          description: 'This is another project description.',
          codeLink: 'link',
          techStack: ['react', 'javascript', 'css'],
          features: ['Feature A', 'Feature B', 'Feature C'],
          createdAt: new Date(),
        } as Project,
        {
          id: 3,
          name: 'Third Project',
          description: 'This is the third project description.',
          codeLink: 'link',
          techStack: ['vue', 'javascript', 'less'],
          features: ['Feature X', 'Feature Y', 'Feature Z'],
          createdAt: new Date(),
        } as Project,
        {
          id: 4,
          name: 'Fourth Project',
          description: 'This is the fourth project description.',
          codeLink: 'link',
          techStack: ['svelte', 'typescript', 'css'],
          features: ['Feature Alpha', 'Feature Beta', 'Feature Gamma'],
          createdAt: new Date(),
        },
      ];
    }
  }
}
