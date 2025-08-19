import React from "react";
type INPUT_PROPS = {
  label: string;
  type: string;
  id: string;
  register: any;
  errors: any;
};
const Input = ({ label, type, id, register, errors }: INPUT_PROPS) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        className="border rounded-sm border-text p-2 focus:outline-none"
        placeholder={`Enter your ${label.toLowerCase()}`}
        type={type}
        id={id}
        {...register(id, {
          required: `${label} is required`,
          minLength: { value: 3, message: "At least 3 characters" },
        })}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm">{errors[id].message}</span>
      )}
    </div>
  );
};

export default Input;
