"use client";
import { useState } from "react";
import DateContainer from "./components/dateContainer";
import Header from "./components/header";
import { formateDate } from "./helpers/formateDate";
import { Times } from "./enums/times";

export default function Home() {
    const [selectTime, setSelectTime] = useState(Times.DAY);
    const [date, setDate] = useState(new Date());
    const { title, data } = formateDate(selectTime, date);

    const clickRightTime = () => {
        alert("Direita");
    };

    const clickLeftTime = () => {
        alert("Esquerda");
    };

    return (
        <main className="flex min-h-screen flex-col items-center text-cyan-50 bg-gray-700">
            <Header time={selectTime} setTime={setSelectTime} />
            <DateContainer
                title={title}
                data={data}
                clickLeft={clickLeftTime}
                clickRight={clickRightTime}
            />
        </main>
    );
}
