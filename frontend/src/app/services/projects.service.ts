import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../modules/projects/models/project.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private http = inject(HttpClient);
    private readonly apiUrl = `${environment.apiUrl}/projects`;

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiUrl}`);
    }

    getProject(projectId: string): Observable<Project> {
        return this.http.get<Project>(`${this.apiUrl}/${projectId}`);
    }
}
