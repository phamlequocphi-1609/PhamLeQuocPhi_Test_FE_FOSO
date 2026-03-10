interface FloatingInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  labelColor?: string;
}

export function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  labelColor,
}: FloatingInputProps) {
  return (
    <div className="relative z-0">
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full px-0 py-2 text-sm text-heading bg-transparent border-b border-b-[#00000029] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${labelColor}`}
      >
        {label}
      </label>
    </div>
  );
}
