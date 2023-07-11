interface IBoxDate {
    title: string;
    data: string;
}

export default function BoxDate(props: IBoxDate) {
    return (
        <div className="flex justify-center items-center flex-col w-72 gap-8">
            <h3 className="text-5xl text-white">{props.title}</h3>
            <p className="text-gray-400">{props.data}</p>
        </div>
    );
}
