import { IBoxDate } from "../interfaces";

export default function BoxDate(props: IBoxDate) {
    return (
        <div className="flex justify-center items-center flex-col w-72 gap-5">
            <h3 className="text-4xl text-white">{props.title}</h3>
            <p className="text-gray-400">{props.data}</p>
        </div>
    );
}
