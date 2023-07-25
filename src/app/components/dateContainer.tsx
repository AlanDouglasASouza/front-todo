import { IBoxDate } from "../interfaces";
import BoxDate from "./boxDate";

export default function DateContainer({
    title,
    data,
    clickLeft,
    clickRight,
}: IBoxDate) {
    return (
        <div className="flex justify-center items-center w-full h-60 pt-11">
            <span
                className="text-4xl text-gray-word cursor-pointer"
                onClick={clickLeft}
            >
                {"<"}
            </span>
            <BoxDate title={title} data={data} />
            <span
                className="text-4xl text-gray-word cursor-pointer"
                onClick={clickRight}
            >
                {">"}
            </span>
        </div>
    );
}
