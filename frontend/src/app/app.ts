import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsModule } from './projects/projects-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
