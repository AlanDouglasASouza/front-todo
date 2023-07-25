import { ICheckBox } from "../interfaces";

export default function Checkbox({ label, checked, onChange }: ICheckBox) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox cursor-pointer h-4 w-4 text-gray-default appearance-none border rounded-sm border-black-border bg-gray-modal-options bg-center checked:bg-[url('https://img.icons8.com/ios-glyphs/30/4D4D4D/checked-checkbox.png')] checked:bg-white-word"
      />
      <span className="text-white-word text-base">{label}</span>
    </label>
  );
}
