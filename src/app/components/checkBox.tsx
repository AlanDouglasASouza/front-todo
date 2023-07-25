export default function Checkbox({ label, checked, onChange }: any) {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox cursor-pointer h-4 w-4 text-gray-700 appearance-none border rounded-sm border-gray-900 bg-slate-600 bg-center checked:bg-[url('https://img.icons8.com/ios-glyphs/30/4D4D4D/checked-checkbox.png')] checked:bg-slate-50"
            />
            <span className="text-gray-100">{label}</span>
        </label>
    );
}
