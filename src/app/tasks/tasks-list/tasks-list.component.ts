import { Component, inject, signal, computed } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})

export class TasksListComponent {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');

  tasks = computed(() => { // Whenever the tasks or filter changes, this will be evaluated. 
    switch (this.selectedFilter()) {
      case "open":
        return this.tasksService.allTasks().filter((task) => task.status === "OPEN");

      case "in-progress":
        return this.tasksService.allTasks().filter((task) => task.status === "IN_PROGRESS");

      case "done":
        return this.tasksService.allTasks().filter((task) => task.status === "DONE");

      default: // The all case. 
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
