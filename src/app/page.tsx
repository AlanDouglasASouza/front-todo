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
import { getTasks, insert } from "./services/taskService";
import { tasks } from "./data/database";

export default function Home() {
  const [selectTime, setSelectTime] = useState(Times.DAY);
  const [date, setDate] = useState(new Date());
  const { title, data } = formateDate(selectTime, date);
  const [isSelected, setIsSelected] = useState<number>();
  const [input, setInput] = useState<string>("");
  const [allTasks, setAllTasks] = useState<IBaseTasks[]>(tasks);

  const clickRightTime = () => {
    const newDate = increaseTime(date, selectTime, true);
    setDate(newDate);
  };

  const clickLeftTime = () => {
    const newDate = increaseTime(date, selectTime, false);
    setDate(newDate);
  };

  const addTask = () => {
    alert(input);

    const todo = {
      title: input,
      content: "",
      checked: false,
      date: new Date(),
    };

    insert(todo);
    setAllTasks(getTasks());
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

        {allTasks?.map((task) => {
          <TaskBox
            content={task.content}
            checkBox={{ checked: task.checked, label: "" }}
            selected={isSelected === task.id}
            id={task.id || 0}
            click={() => setIsSelected(task.id)}
            title={task.title}
          />;
        })}
      </TasksContainer>
    </main>
  );
}
