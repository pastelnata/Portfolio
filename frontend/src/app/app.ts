import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from './modules/projects/components/projects-section/projects';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Projects],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('portfolio');
}
