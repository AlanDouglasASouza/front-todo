import { tasks } from "../data/database";
import { IBaseTasks } from "../interfaces";

export default class TaskService {
  private data: IBaseTasks[];

  constructor() {
    this.data = tasks;
  }

  get tasks() {
    return this.data;
  }

  getTasksByDay(date: Date) {}

  insert(task: IBaseTasks) {
    task.id = this.tasks.length;
    this.data.push(task);
  }

  update(id: number, _task: IBaseTasks) {
    this.data = this.data.map((task) => (task.id === id ? _task : task));
  }
}
