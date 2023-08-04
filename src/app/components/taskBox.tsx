import { ITaskBox } from "../interfaces";
import Checkbox from "./checkBox";

export default function TaskBox({
  selected,
  content,
  checkBox,
  click,
  title,
}: ITaskBox) {
  return (
    <div
      className={`flex flex-col items-center ${
        selected && "border-b-2 border-black-border mb-3"
      }`}
      onClick={click}
    >
      <div className="flex items-center justify-between w-full">
        <Checkbox label={title} checked={checkBox?.checked || false} />
        <svg
          className="w-8 h-8 text-white-word dark:text-gray-200 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 -960 960 960"
        >
          <path d="M207.858-432Q188-432 174-446.142q-14-14.141-14-34Q160-500 174.142-514q14.141-14 34-14Q228-528 242-513.858q14 14.141 14 34Q256-460 241.858-446q-14.141 14-34 14Zm272 0Q460-432 446-446.142q-14-14.141-14-34Q432-500 446.142-514q14.141-14 34-14Q500-528 514-513.858q14 14.141 14 34Q528-460 513.858-446q-14.141 14-34 14Zm272 0Q732-432 718-446.142q-14-14.141-14-34Q704-500 718.142-514q14.141-14 34-14Q772-528 786-513.858q14 14.141 14 34Q800-460 785.858-446q-14.141 14-34 14Z" />
        </svg>
      </div>
      <p className={`${selected && "mb-5"} w-11/12 -mt-1 text-sm`}>{content}</p>
    </div>
  );
}
