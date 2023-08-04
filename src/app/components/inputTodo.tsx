import { IInput } from "../interfaces";

export default function InputTodo({ change, click, value }: IInput) {
  return (
    <div className="relative mb-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 -960 960 960"
        >
          <path d="M160-200v-60h386v60H160Zm0-167v-60h640v60H160Zm0-166v-60h640v60H160Zm0-167v-60h640v60H160Z" />
        </svg>
      </div>
      <input
        type="text"
        id="input-group-1"
        className="bg-black-border border border-black-border text-white-word text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-word dark:text-white-word dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add a task..."
        onChange={change}
        value={value}
      />
      <svg
        className="w-7 h-7 text-gray-500 dark:text-gray-400 absolute top-1.5 bottom-0 right-3 cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 -960 960 960"
        onClick={click}
      >
        <path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z" />
      </svg>
    </div>
  );
}
