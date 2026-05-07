import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TodosActions from '../../../../store/todos/todos.actions';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.html',
  imports: [FormsModule],
})
export class AddTodoComponent {
  private store = inject(Store);
  private dialogRef = inject(DialogRef);

  protected readonly title = signal('');

  addTodo() {
    this.store.dispatch(
      TodosActions.addTodo({
        todo: {
          title: this.title(),
          completed: false,
          userId: Math.floor(Math.random() * 1000000),
        },
      }),
    );
    this.dialogRef.close();
  }
}
