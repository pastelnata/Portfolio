import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  standalone: false,
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input()
  public project!: Project;
}
