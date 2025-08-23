import { useState } from "react";

type ToggleProps = {
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
};

const Toggle = ({ checked = false, onChange, label }: ToggleProps) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition cursor-pointer
        ${isOn ? "bg-card" : "bg-gray-600"}
        focus:outline-none`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-accent transition
          ${isOn ? "translate-x-5" : "translate-x-1"}`}
      />
      {label && <span className="sr-only">{label}</span>}
    </button>
  );
};

export default Toggle;
