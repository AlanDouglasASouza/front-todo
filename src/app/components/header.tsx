import { Times } from "../enums/times";
import { IHeader } from "../interfaces";

export default function Header({ time: _time, setTime }: IHeader) {
    const times = Object.values(Times);

    return (
        <header className="flex fixed justify-center items-center top-0 w-full h-14 border-b-2 border-gray-input gap-32 text-lg text-gray-word pt-2">
            {times.map((time) => (
                <span
                    className={`cursor-pointer p-2 ${
                        time === _time
                            ? "text-white-word border-b-2 border-yellow"
                            : ""
                    }`}
                    key={time}
                    onClick={() => setTime(time)}
                >
                    {time}
                </span>
            ))}
        </header>
    );
}
