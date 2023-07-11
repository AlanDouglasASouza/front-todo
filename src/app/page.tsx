"use client";
import { useState } from "react";
import DateContainer from "./components/dateContainer";
import Header from "./components/header";

export default function Home() {
    const [selectTime, setSelectTime] = useState("Day");

    return (
        <main className="flex min-h-screen flex-col items-center text-cyan-50 bg-gray-700">
            <Header time={selectTime} setTime={setSelectTime} />
            <DateContainer />
            <h1>Projeto Todo List</h1>
        </main>
    );
}
