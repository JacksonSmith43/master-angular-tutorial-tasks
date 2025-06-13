import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn: "root"
})
export class TasksService {
    private tasks = signal<Task[]>([]); // tasks should have the shape of Task. That is the type. 

    allTasks = this.tasks.asReadonly(); // asReadonly is a read-only Signal.

    addTask(taskData: { title: string; description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: "OPEN"
        };

        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    }

}