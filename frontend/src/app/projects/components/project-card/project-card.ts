import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import {
  MatCardModule,
} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatIcon,
    MatButton
  ],
})
export class ProjectCard {
  @Input()
  public project!: Project;
}
