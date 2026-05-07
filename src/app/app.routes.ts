import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
