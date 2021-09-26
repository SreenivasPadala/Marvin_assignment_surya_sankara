import { IProject } from './../Projects/project.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  baseUrl = 'http://localhost:4000/projects';

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.httpClient.get<IProject[]>(this.baseUrl);
  }

  addProject(project: IProject): Observable<IProject> {
    return this.httpClient.post<IProject>(this.baseUrl, project, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteProject(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
