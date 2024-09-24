import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDo } from '../modules/todo.module';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:3000/tasks';

  httpClient = inject(HttpClient);

  constructor() {}

  addTask(task: string): Observable<IToDo> {
    return this.httpClient.post<IToDo>(this.apiUrl, {
      title: task,
      completed: false,
      important: false,
    });
  }

  getAllTasks(): Observable<IToDo[]> {
    return this.httpClient.get<IToDo[]>(this.apiUrl);
  }

  updateTask(task: IToDo): Observable<IToDo> {
    return this.httpClient.put<IToDo>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
