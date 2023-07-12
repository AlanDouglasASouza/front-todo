import BoxDate from "./boxDate";

export default function DateContainer() {
    return (
        <div className="flex justify-center items-center w-full h-96">
            <span className="text-4xl text-gray-400 cursor-pointer">{"<"}</span>
            <BoxDate title="Friday" data="14 de Julho de 2023" />
            <span className="text-4xl text-gray-400 cursor-pointer">{">"}</span>
        </div>
    );
}
