import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/todos/todos.actions';
import * as TodoSelectors from '../../store/todos/todos.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { AddTodoComponent } from './components/add-todo/add-todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  imports: [AsyncPipe, RouterLink],
})
export class TodosComponent implements OnInit {
  private store = inject(Store);
  private dialog = inject(Dialog);

  todos$ = this.store.select(TodoSelectors.selectTodos);
  loading$ = this.store.select(TodoSelectors.selectLoading);

  ngOnInit() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  openAddTodoDialog() {
    this.dialog.open(AddTodoComponent, { width: '350px' });
  }
}
