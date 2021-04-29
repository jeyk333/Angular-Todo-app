import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo-component',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.css'],
})
export class AddTodoComponentComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };
    this.addTodo.emit(todo);
  }
}
