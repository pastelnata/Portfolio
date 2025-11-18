import {Component, signal} from '@angular/core';
import {Footer} from './shared/components/footer/footer';
import {Projects} from './modules/projects/components/projects-section/projects';

@Component({
    selector: 'app-root',
    standalone: true,
  imports: [Footer, Projects],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('portfolio');
}
