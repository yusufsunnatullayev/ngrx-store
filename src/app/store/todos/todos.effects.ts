import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosService } from '../../pages/todos/services/todos.service';
import * as TodosActions from './todos.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TodosEffects {
  private actions$ = inject(Actions);
  private todosService = inject(TodosService);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => TodosActions.loadTodosSuccess({ todos })),
          catchError((error) =>
            of(
              TodosActions.loadTodosFailure({
                error: error.message,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.addTodo),
      mergeMap(({ todo }) => {
        return this.todosService.addTodo(todo).pipe(
          map((createdTodo) => {
            return TodosActions.addTodoSuccess({
              todo: createdTodo,
            });
          }),
        );
      }),
    );
  });
}
