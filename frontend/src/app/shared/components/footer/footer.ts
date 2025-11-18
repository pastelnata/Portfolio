import {Component, inject, OnInit} from '@angular/core';
import {InfoChips} from '../info-chips/info-chips';
import {MatIcon } from '@angular/material/icon';
import {ProjectsService} from '../../../services/projects.service';
import {firstValueFrom} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {NAVIGATION_LINKS} from '../../models/navigation-links';

@Component({
  selector: 'app-footer',
  imports: [
    InfoChips,
    MatIcon,
    MatButton
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  projectsService = inject(ProjectsService);
  techStack: string[] = [];
  readonly window = window;
  readonly gitHubLink: string = 'https://github.com/pastelnata';
  readonly linkedinLink: string = 'https://www.linkedin.com/in/rita-braunschweig-39557028a/';
  readonly navLinks = NAVIGATION_LINKS;

  async ngOnInit() {
    try {
      const project = await firstValueFrom(this.projectsService.getProjectByName('Portfolio Website'));
      this.techStack = project.techStack;
    } catch (error) {
      console.error('Error fetching project data:', error);
      this.techStack = ['angular', 'typescript', 'scss', 'prisma', 'nestjs', 'postgresql', 'docker', 'ngrx' ];
    }
  }
}
