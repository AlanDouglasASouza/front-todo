import { tasks } from "../data/database";
import { IBaseTasks } from "../interfaces";

/* export const getTasks = () => {
  return tasks;
};

export const insert = (task: IBaseTasks) => {
  task.id = tasks.length;
  tasks.push(task);
};

export const update = (id: number, _task: IBaseTasks) => {
  const update = tasks.map((task) => (task.id === id ? _task : task));
  tasks.length = 0;
  update.forEach((task) => tasks.push(task));
}; */

export default class TaskService {
  private data: IBaseTasks[];

  constructor() {
    this.data = tasks;
  }

  get tasks() {
    return this.data;
  }

  insert(task: IBaseTasks) {
    task.id = this.tasks.length;
    this.data.push(task);
  }

  update(id: number, _task: IBaseTasks) {
    this.data = this.data.map((task) => (task.id === id ? _task : task));
  }
}
