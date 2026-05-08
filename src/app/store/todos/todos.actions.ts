import { createAction, props } from '@ngrx/store';
import { Todo } from '../../pages/todos/types/todos';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>(),
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>(),
);

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Partial<Todo> }>());

export const addTodoSuccess = createAction('[Todo] Add Todo Success', props<{ todo: Todo }>());

export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ id: number }>(),
);

export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ todo: Todo }>());
