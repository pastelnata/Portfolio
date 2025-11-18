import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProjectsService } from './projects.service';
import { environment } from '../../environments/environment';
import {Project} from '../modules/projects/models/project.model';

describe('ProjectsService', () => {
    let service: ProjectsService;
    let httpMock: HttpTestingController;
    const baseUrl = `${environment.apiUrl}/projects`;

    const mockProjectRaw: Project[] = [{
        id: 1,
        name: 'Test Project',
        description: 'A test project',
        demoLink: 'http://demo',
        codeLink: 'http://code',
        techStack: ['Angular'],
        features: ['feat1'],
        architecture: 'arch',
        createdAt: new Date(),
        imageUrl: 'http://img'
    }];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                ProjectsService
            ]
        });
        service = TestBed.inject(ProjectsService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getProjects should perform GET to base url and return projects array', (done) => {
        service.getProjects().subscribe((projects) => {
            try {
                expect(projects).toBeTruthy();
                expect(projects.length).toBe(1);
                expect(projects[0].name).toBe(mockProjectRaw[0].name);
                done();
            } catch (err: any) {
                done.fail(err);
            }
        });

        const req = httpMock.expectOne((request) => request.method === 'GET' && request.url === baseUrl);
        expect(req.request.method).toBe('GET');
        req.flush(mockProjectRaw); // Flush the array directly
    });


    it('getProjectByName should GET with name query parameter and return a single project', (done) => {
        const name = 'Test Project';

        service.getProjectByName(name).subscribe((project) => {
            try {
                expect(project).toBeTruthy();
                expect(project.name).toBe(name);
                done();
            } catch (err: any) {
                done.fail(err);
            }
        });

        const req = httpMock.expectOne((request) => {
            return request.method === 'GET' && request.url === baseUrl && request.params.get('name') === name;
        });

        expect(req.request.method).toBe('GET');
        expect(req.request.params.get('name')).toBe(name);
        req.flush(mockProjectRaw[0]); // Flush the first element for single Project
    });

    it('getProjectByName should include an empty name param when called with empty string', (done) => {
        const name = '';

        service.getProjectByName(name).subscribe((project) => {
            try {
                expect(project).toBeTruthy();
                done();
            } catch (err: any) {
                done.fail(err);
            }
        });

        const req = httpMock.expectOne((request) => {
            return request.method === 'GET' && request.url === baseUrl && request.params.has('name');
        });

        expect(req.request.params.get('name')).toBe(name);
        req.flush(mockProjectRaw[0]); // Flush a single Project for the single-project response
    });
});
