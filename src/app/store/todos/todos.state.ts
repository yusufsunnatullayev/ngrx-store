import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../pages/todos/types/todos';
import * as TodosActions from './todos.actions';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export const todosInitialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export const todosReducer = createReducer(
  todosInitialState,

  on(TodosActions.loadTodos, (state) => ({
    ...state,
    loading: true,
  })),

  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    todos,
  })),

  on(TodosActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TodosActions.addTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [todo, ...state.todos],
  })),

  on(TodosActions.toggleTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)),
  })),
);
