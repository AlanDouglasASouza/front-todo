export default function InputTodo() {
  return (
    <div className="relative mb-6 w-1/2">
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
        className="bg-gray-800 border border-gray-950 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add a task..."
      />
    </div>
  );
}
