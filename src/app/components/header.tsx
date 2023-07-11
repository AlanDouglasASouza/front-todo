interface IHeader {
    time: string | any;
    setTime: (str: string) => void;
}

export default function Header({ time, setTime }: IHeader) {
    const times = ["Day", "Week", "Mouth", "Year"];

    return (
        <header className="flex fixed justify-center items-center top-0 w-full h-14 border-b-2 border-gray-800 gap-32 text-lg text-gray-400 pt-2">
            {times.map((opt) => (
                <span
                    className={`cursor-pointer p-2 ${
                        opt === time
                            ? "text-white border-b-2 border-yellow-400"
                            : ""
                    }`}
                    key={1}
                    onClick={() => setTime(opt)}
                >
                    {opt}
                </span>
            ))}
        </header>
    );
}
