export default function Checkbox({ label, checked, onChange }: any) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-gray-700 transition duration-150 ease-in-out appearance-none border rounded-sm border-gray-900 bg-slate-600 checked:bg-[url('https://img.icons8.com/material-rounded/24/737373/checked-checkbox.png')]"
      />
      <span className="text-gray-100">{label}</span>
    </label>
  );
}
