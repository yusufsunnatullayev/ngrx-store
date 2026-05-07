import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../types/todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  addTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo);
  }

  updateTodo(id: number, todo: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.api}/${id}`);
  }
}
