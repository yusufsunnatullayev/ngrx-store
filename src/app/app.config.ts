import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { todosReducer } from './store/todos/todos.state';
import { provideEffects } from '@ngrx/effects';
import { TodosEffects } from './store/todos/todos.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      todos: todosReducer,
    }),
    provideEffects([TodosEffects]),
    provideStoreDevtools(),
  ],
};
