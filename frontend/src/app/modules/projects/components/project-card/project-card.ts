import { Component, inject, input } from '@angular/core';
import { Project } from '../../models/project.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDetails } from '../project-details/project-details';
import { InfoChips } from '../../../../shared/info-chips/info-chips';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss'],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    InfoChips,
  ],
})
export class ProjectCard {
  private dialog = inject(MatDialog);

  public project = input<Project>();

  openDetails(project: Project) {
    this.dialog.open(ProjectDetails, {
      data: project,
      width: '30vw',
      height: '90vh',
    });
  }
}
