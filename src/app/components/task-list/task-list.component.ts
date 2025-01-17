import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() important = new EventEmitter<any>();
  @Output() complete = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  markImportant(task: any) {
    this.important.emit(task);
  }

  markComplete(task: any) {
    this.complete.emit(task);
  }

  removeTask(taskId: number) {
    this.delete.emit(taskId);
  }
}
