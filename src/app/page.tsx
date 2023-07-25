"use client";
import { useEffect, useState } from "react";
import DateContainer from "./components/dateContainer";
import Header from "./components/header";
import { formateDate } from "./helpers/formateDate";
import { Times } from "./enums/times";
import { increaseTime } from "./helpers/alterTimes";
import InputTodo from "./components/inputTodo";
import TasksContainer from "./components/tasksContainer";
import TaskBox from "./components/taskBox";

export default function Home() {
  const [selectTime, setSelectTime] = useState(Times.DAY);
  const [date, setDate] = useState(new Date());
  const { title, data } = formateDate(selectTime, date);

  const clickRightTime = () => {
    const newDate = increaseTime(date, selectTime, true);
    setDate(newDate);
  };

  const clickLeftTime = () => {
    const newDate = increaseTime(date, selectTime, false);
    setDate(newDate);
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
        <InputTodo />
        <TaskBox
          content="I love all of this ♥"
          checkBox={{ checked: false, label: "" }}
        />
        <TaskBox content="" checkBox={{ checked: true, label: "" }} />
        <TaskBox
          content="I love all of this ♥"
          checkBox={{ checked: false, label: "" }}
        />
      </TasksContainer>
    </main>
  );
}
