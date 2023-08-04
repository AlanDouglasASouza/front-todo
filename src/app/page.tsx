"use client";
import { useState } from "react";
import DateContainer from "./components/dateContainer";
import Header from "./components/header";
import { formateDate } from "./helpers/formateDate";
import { Times } from "./enums/times";
import { increaseTime } from "./helpers/alterTimes";
import InputTodo from "./components/inputTodo";
import TasksContainer from "./components/tasksContainer";
import TaskBox from "./components/taskBox";
import { IBaseTasks } from "./interfaces";
import TaskService from "./services/taskService";

export default function Home() {
  const todoService = new TaskService();
  const [selectTime, setSelectTime] = useState(Times.DAY);
  const [date, setDate] = useState(new Date());
  const { title, data } = formateDate(selectTime, date);
  const [isSelected, setIsSelected] = useState<number>();
  const [input, setInput] = useState<string>("");
  const [allTasks, setAllTasks] = useState<IBaseTasks[]>(todoService.tasks);

  const clickRightTime = () => {
    const newDate = increaseTime(date, selectTime, true);
    setDate(newDate);
  };

  const clickLeftTime = () => {
    const newDate = increaseTime(date, selectTime, false);
    setDate(newDate);
  };

  const addTask = () => {
    const todo = {
      title: input,
      content: "",
      checked: false,
      date: new Date(),
    };

    todoService.insert(todo);
    setAllTasks(todoService.tasks);
    setInput("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center text-gray-word bg-gray-default">
      <Header time={selectTime} setTime={setSelectTime} />
      <DateContainer
        title={title}
        data={data}
        clickLeft={clickLeftTime}
        clickRight={clickRightTime}
      />
      <TasksContainer>
        <InputTodo
          change={(e: any) => setInput(e.target.value)}
          value={input}
          click={addTask}
        />

        {allTasks?.map((_task) => {
          return (
            <TaskBox
              key={_task.id}
              content={_task.content}
              checkBox={{ checked: _task.checked, label: _task.title }}
              selected={isSelected === _task.id}
              id={_task.id || 0}
              click={() => setIsSelected(_task.id)}
              title={_task.title}
            />
          );
        })}
      </TasksContainer>
    </main>
  );
}
