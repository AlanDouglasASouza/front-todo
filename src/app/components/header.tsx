import { Times } from "../enums/times";
import { IHeader } from "../interfaces";

export default function Header({ time: _time, setTime }: IHeader) {
    const times = Object.values(Times);

    return (
        <header className="flex fixed justify-center items-center top-0 w-full h-14 border-b-2 border-gray-800 gap-32 text-lg text-gray-400 pt-2">
            {times.map((time) => (
                <span
                    className={`cursor-pointer p-2 ${
                        time === _time
                            ? "text-white border-b-2 border-yellow-400"
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
