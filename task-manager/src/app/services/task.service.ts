import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task, CreateTask } from '../models/task';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);

  private api = environment.apiUrl;

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.api}/tasks`)
      .pipe(catchError(this.handleError));
  }

  getTask(id: number): Observable<Task> {
    return this.http
      .get<Task>(`${this.api}/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  createTask(task: CreateTask): Observable<Task> {
    return this.http
      .post<Task>(`${this.api}/tasks`, task)
      .pipe(catchError(this.handleError));
  }

  updateTask(id: number, task: CreateTask): Observable<Task> {
    return this.http
      .put<Task>(`${this.api}/tasks/${id}`, task)
      .pipe(catchError(this.handleError));
  }

  deleteTask(id: number) {
    return this.http
      .delete(`${this.api}/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(() => error);
  }
}