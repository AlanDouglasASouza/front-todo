import { tasks } from "../data/database";
import { IBaseTasks } from "../interfaces";

export const insert = (task: IBaseTasks) => {
  task.id = tasks.length;
  tasks.push(task);
};

export const update = (id: number, _task: IBaseTasks) => {
  const update = tasks.map((task) => (task.id === id ? _task : task));
  tasks.length = 0;
  update.forEach((task) => tasks.push(task));
};
