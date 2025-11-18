import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { Project } from '../../models/project.model';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfoChips } from '../../../../shared/components/info-chips/info-chips';
import { MatCardImage } from '@angular/material/card';

@Component({
    selector: 'app-project-details',
    standalone: true,
    imports: [MatDialogModule, MatListModule, MatIconModule, MatIconButton, InfoChips, MatButton, MatCardImage],
    templateUrl: './project-details.html',
    styleUrl: './project-details.scss'
})
export class ProjectDetails {
    public data = inject<Project>(MAT_DIALOG_DATA);

    protected readonly window = window;
}
