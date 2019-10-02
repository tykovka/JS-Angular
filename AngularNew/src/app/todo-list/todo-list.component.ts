import { Component, OnInit, Input } from '@angular/core';
import { TaskList, TaskStatus, TaskPriority } from './todo-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() public tasks: TaskList[] = [
    {
      title: 'Бег 10км',
      status: TaskStatus.Uncompleted,
      priority: TaskPriority.Important

    },
    {
      title: 'ToDoList Angular',
      status: TaskStatus.Uncompleted,
      priority: TaskPriority.Important

    },
    {
      title: 'Посмотреть "Звездные войны"',
      status: TaskStatus.Completed,
      priority: TaskPriority.Idea
    },
    {
      title: 'Посмотреть "Звездные войны"',
      status: TaskStatus.Completed,
      priority: TaskPriority.Idea
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log('новые задачи!')
   }

  ngOnChanges(): void {

  }
}
